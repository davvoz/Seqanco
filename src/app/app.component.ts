import { ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { AfterViewInit, Component, QueryList, ViewChildren, } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { InstrumentComponent } from '../instrument/instrument.component';
import { Clip, Instrument } from '../interfaces/interfaces';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  
  isActiveKeyboardControl = false;
  showFiller = false;
  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
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
  title = 'sequencer';
  selectedInstrumentName = '';
  pianoRolls = [];
  steppers = [];
  instruments: Instrument[] = [];
  pianoRollDimension = 640;
  showNewTrackConfiguration: boolean = true;
  showMixer = true;
  synthInstrument!: Instrument;
  samplerInstrument!: Instrument;
  res!: string;
  topPositionDaw: any;
  masterGain: number = 1;
  connectMaster: AudioNode;
  monooscClipColor: string = 'rgba(90, 200, 90, 0.2)';
  newsynthClipColor: string = 'rgba(100, 200, 200, 0.2)';
  samplerClipColor: string = 'rgba(90, 90, 200, 0.2)';
  bianco: string = 'rgb(215, 215, 215)';
  verde: string = '#00d600';
  panelOpenState = false;

  clipsMaster: Clip[] = [{ color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false },//
  { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false },//
  { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false },//
  { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false }];

  constructor(public myTimer: TimerService) {
    
    this.connectMaster = this.myTimer.merger;
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;

  
  close() {
    console.log(this.sidenav.opened);
    if(this.sidenav.opened){
      this.sidenav.close();
    }else{
      this.sidenav.open()
    }
    
  }
  
  onChangeMaster($event: number) {
    this.masterGain = $event / 100;
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
  ngAfterViewInit(): void { }

  getSelectedTrakBorderStyle(isCollapsed: boolean): string {
    return isCollapsed ? '1px solid white' : '1px solid red';
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

  private changeColorClipRoutine(clipArray: Clip[], clipIndex: number, focusColor: string, unfocusColor: string):Clip[] {
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

    for (let i = 0; i > this.instruments.length; i++) {
      if (i !== instrumenIndex) {
        this.instruments[i].isMuted;
      }
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
        this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.samplerClipColor); break;
      case 'NEWSYNTH':
        this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.newsynthClipColor); break;
    }
    if (this.instruments[instrumenIndex].isCollapsed) {
     // this.collassaInstrument(instrumenIndex);
    }
    this.instrumentsViews.toArray()[instrumenIndex].setClip(clipIndex);

  }

  addMonoosc() {
    const clips = this.instantiateClipsArray(this.monooscClipColor);
    this.instruments.push({
      name: 'Monoos' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: 1280,
      params: [],
      type: 'MONOOSC',
      clipPlaying: 0,
      clips: clips,
      isMuted: false
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  addSynth() {
    const clips = this.instantiateClipsArray(this.newsynthClipColor);
    this.instruments.push({
      name: 'Synth' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: 1280,
      params: [],
      type: 'NEWSYNTH',
      clipPlaying: 0,
      clips: clips,
      isMuted: false
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  addSampler() {
    const clips = this.instantiateClipsArray(this.samplerClipColor);
    this.instruments.push({
      name: 'Sampl' + this.instruments.length,
      index: this.instruments.length,
      isCollapsed: true,
      pianoRollDimension: 1280,
      params: [],
      type: 'SAMPLER',
      clipPlaying: 0,
      clips: clips,
      isMuted: false
    });
    this.collassaInstrument(this.instruments.length - 1);
  }

  collassaInstrument(instrumentIndex: number) {
    for (let i = 0; i < this.instruments.length; i++) {
      if (i !== instrumentIndex) {
        this.instruments[i].isCollapsed = true
      }
    }
    this.instruments[instrumentIndex].isCollapsed === true ? this.instruments[instrumentIndex].isCollapsed = false : this.instruments[instrumentIndex].isCollapsed = true;
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

  displayNewTrackConfiguration() {
    this.notThis(this.showNewTrackConfiguration);
  }

  private notThis(bol: boolean) {
    bol = !bol;
  }

  getDisplay(bol: boolean) {
    return bol ? 'none' : 'block';
  }

  show() {

    if (this.showMixer) {
      this.showMixer = false;
    } else {
      this.showMixer = true;
    }
  }

  getInstrumentColor(instrumentType: string) {
    switch (instrumentType) {
      case 'SYNTH':
        break;
      case 'SAMPLER':
        return 'rgba(90, 90, 200, 0.4)';
      case 'MONOOSC':
        return 'rgba(90, 200, 90, 0.4)';
      case 'DOUBLEOOSC':
        return 'rgba(200, 90, 90, 0.4)';
      case 'NEWSYNTH':
        return 'rgba(100, 200, 200, 0.4)';
      default: return 'rgba(200, 200, 200, 0.4)'; break;
    }
    return null;
  }
}
