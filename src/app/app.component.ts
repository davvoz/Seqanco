import { HostListener, Component, QueryList, ViewChildren, ChangeDetectionStrategy } from '@angular/core';
import { Utilities } from 'src/classes/utilities';
import { InstrumentComponent } from '../instrument/instrument.component';
import { Clip, Instrument } from '../interfaces/interfaces';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {

  isActiveKeyboardControl = false;
  private readonly pianorolldimension = 1280 * 2;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Control') {
      this.isActiveKeyboardControl ? this.isActiveKeyboardControl = false : this.isActiveKeyboardControl = true;
    }
    if (this.isActiveKeyboardControl) {
      if (ev.key === 'Enter') {
        if (this.myTimer.isPlayed) {
          this.myTimer.stop();
        } else {
          this.myTimer.play();
        }
      }
      if (ev.key === '1') {
        this.setClipMassive(0)
      }
      if (ev.key === '2') {
        this.setClipMassive(1)
      }
      if (ev.key === '3') {
        this.setClipMassive(2)
      }
      if (ev.key === '4') {
        this.setClipMassive(3)
      }
    }
  }
  selectedTrackIndex!: number;
  clips: Clip[] = [];
  @ViewChildren('instrumentsViews')
  instrumentsViews!: QueryList<InstrumentComponent>;
  instruments: Instrument[] = [];
  pianoRollDimension = 640;
  masterGain: number = 1;
  connectMaster: AudioNode;
  monooscClipColor: string = 'rgba(90, 200, 90, 0.2)';
  newsynthClipColor: string = 'rgba(100, 200, 200, 0.2)';
  samplerClipColor: string = 'rgba(90, 90, 200, 0.2)';
  bianco: string = 'rgb(215, 215, 215)';
  verde: string = '#00d600';

  clipsMaster: Clip[] = this.instantiateClipsArray(this.bianco);
  constructor(public myTimer: TimerService) {
    
    this.connectMaster = this.myTimer.merger;
  }

  onChangeMaster() {
    this.myTimer.merger.gain.setValueAtTime(
      this.masterGain,
      this.myTimer.audioContext.currentTime
    );
  }

  activeKeyboardControl() {
    this.isActiveKeyboardControl ? this.isActiveKeyboardControl = false : this.isActiveKeyboardControl = true;
  }

  getActiveColor(boolProp: boolean) {
    return boolProp ? '#dfff2d' : null;
  }

  getSelectedTrakBorderStyle(isCollapsed: boolean): string {
    return isCollapsed ? '9px solid white' : '9px solid red';
  }

  setClipMassive(clipIndex: number) {
    let i = 0;
    for (const inst in this.instruments) {
      this.setClip(i, clipIndex)
      i++;
    }
    if (!this.myTimer.isPlayed) {
      this.myTimer.play();
    }
    this.changeColorClipRoutine(this.clipsMaster, clipIndex, this.verde, this.bianco);
  }

  private changeColorClipRoutine(clipArray: Clip[], clipIndex: number, focusColor: string, unfocusColor: string): Clip[] {
    //se non è lei non faccio nulla
    if (!clipArray[clipIndex].isActive) {
      //se è lei
      //cerco quella attiva
      for (let i = 0; i < clipArray.length; i++) {
        if (clipArray[i].isActive) {
          //disattivare quella attiva
          clipArray[i].isActive = false;
          //e riportarla del suo colore già che ci sono
          clipArray[i].color = unfocusColor;
        }
      }
      //devo attivare lei
      clipArray[clipIndex].isActive = true;
      //e colorarla
      clipArray[clipIndex].color = focusColor;
    }
    return clipArray
  }

  solo(instrumenIndex: number) {
    if (this.instruments[instrumenIndex].isSolo) {
      for (let i = 0; i < this.instruments.length; i++) {
        if (i !== instrumenIndex) {
          this.instruments[i].isMuted = true;
        }
      }
      this.instruments[instrumenIndex].isSolo = false;
    } else {
      for (let i = 0; i < this.instruments.length; i++) {
        if (i !== instrumenIndex) {
          this.instruments[i].isMuted = false;
        }
      }
      this.instruments[instrumenIndex].isSolo = true;
    }
  }

  setClip(instrumenIndex: number, clipIndex: number) {
    if (!this.myTimer.isPlayed) {
      this.myTimer.play();
    }
    switch (this.instruments[instrumenIndex].type) {
      case 'MONOOSC':
        this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.monooscClipColor);
        break;
      case 'SAMPLER':
        this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.samplerClipColor);
        break;
      case 'NEWSYNTH':
        this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.newsynthClipColor);
        break;
      case 'DRUM':
        this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.newsynthClipColor);
        break;
    }
    this.instrumentsViews.toArray()[instrumenIndex].setClip(clipIndex);
  }

  addDrummachine() {
    const clips = this.instantiateClipsArray(this.monooscClipColor);
    this.instruments.push({
      name: 'Drum' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: this.pianorolldimension,
      params: [],
      type: 'DRUM',
      clipPlaying: 0,
      clips: clips,
      isMuted: false,
      isSolo: true,
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  addMonoosc() {
    const clips = this.instantiateClipsArray(this.monooscClipColor);
    this.instruments.push({
      name: 'Monoos' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: this.pianorolldimension,
      params: [],
      type: 'MONOOSC',
      clipPlaying: 0,
      clips: clips,
      isMuted: false,
      isSolo: true
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  addSynth() {
    const clips = this.instantiateClipsArray(this.newsynthClipColor);
    this.instruments.push({
      name: 'Synth' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: this.pianorolldimension,
      params: [],
      type: 'NEWSYNTH',
      clipPlaying: 0,
      clips: clips,
      isMuted: false,
      isSolo: true
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  addSampler() {
    const clips = this.instantiateClipsArray(this.samplerClipColor);
    this.instruments.push({
      name: 'Sampl' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: this.pianorolldimension,
      params: [],
      type: 'SAMPLER',
      clipPlaying: 0,
      clips: clips,
      isMuted: false,
      isSolo: true
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  collassaInstrument(instrumentIndex: number) {
    for (let i = 0; i < this.instruments.length; i++) {
      if (i !== instrumentIndex) {
        this.instruments[i].isCollapsed = true;
      }else{
        this.instruments[i].isCollapsed = false;
      }
    }
   // this.instruments[instrumentIndex].isCollapsed === true ? this.instruments[instrumentIndex].isCollapsed = false : this.instruments[instrumentIndex].isCollapsed = true;
  }

  private instantiateClipsArray(color: string): Clip[] {
    let clips: Clip[] = [];
    for (let i = 0; i < 4; i++) {
      clips.push({
        color: color,
        index: i,
        isActive: false,
        trakNumber: this.instruments.length,
        fakeMode: false
      });
    }
    return clips
  }

  remove(index: number) {
    this.myTimer.removeTrack(index);
    this.instruments.splice(index, 1);
  }

  onSearchChange() {
    this.myTimer.merger.gain.setValueAtTime(
      this.masterGain,
      this.myTimer.audioContext.currentTime
    );
  }

  collapse(instrument: Instrument) {
    instrument.isCollapsed ? instrument.isCollapsed = false : instrument.isCollapsed = true;
  }

  getDisplay(bol: boolean) {
    return bol ? 'none' : 'block';
  }

  getInstrumentColor(instrumentType: string) {
    return Utilities.getInstrumentColor(instrumentType);
  }

}
