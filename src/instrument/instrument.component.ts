import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MonoDrummachineObj } from 'src/classes/mono-drummachine-obj';
import { FilterComponent } from '../audio-components/filter/filter.component';
import { GainComponent } from '../audio-components/gain/gain.component';
import { OscComponent } from '../audio-components/osc/osc.component';
import { StereoPannerComponent } from '../audio-components/stereo-panner/stereo-panner.component';
import { Autopan } from '../classes/autopan';
import { DubleoscObj } from '../classes/duble-osc-obj';
import { MonooscObj } from '../classes/mono-osc-obj';
import { MonoSampObj } from '../classes/mono-samp-obj';
import { Waveshaper } from '../classes/waveshaper';
import { PianoRollCanvasBasedComponent } from '../core/graphic/piano-roll-canvas-based/piano-roll-canvas-based.component';
import { Nota, SyntControl } from '../interfaces/interfaces';
import { SamplesLibraryService } from '../services/samples-library.service';
import { TimerService } from '../services/timer.service';
import { Utilities } from 'src/classes/utilities';

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements AfterViewInit {
  @Input() clipIndex: number = 0;
  @Input()
  name!: string;
  @Input()
  type!: string;
  @Input()
  index!: number;
  @Input()
  pianoRollDimension!: number;
  @Input() muted: boolean = false;

  @ViewChild('back', { static: false })
  back!: HTMLDivElement;
  @ViewChild('mainOscillator1', { static: false })
  mainOscillator1!: OscComponent;
  @ViewChild('mainOscillator2', { static: false })
  mainOscillator2!: OscComponent;
  @ViewChild('mainGain', { static: false })
  mainGain!: GainComponent;
  @ViewChild('pan', { static: false })
  pan!: StereoPannerComponent;
  @ViewChild('filter', { static: false })
  filter!: FilterComponent;
  @ViewChild('lfoFrequencyFilter', { static: false })
  lfoFrequencyFilter!: OscComponent;
  @ViewChild('filterLfoGain', { static: false })
  filterLfoGain!: GainComponent;
  @ViewChild('lfoFrequencyOscillator', { static: false })
  lfoFrequencyOscillator!: OscComponent;
  @ViewChild('freqOscLfoGain', { static: false })
  freqOscLfoGain!: GainComponent;
  @ViewChild("pianoRoll", { static: false })
  pianoRoll!: PianoRollCanvasBasedComponent;
  @ViewChild('mainGain1', { static: false })
  mainGain1!: GainComponent;
  @ViewChild('mainGain2', { static: false })
  mainGain2!: GainComponent;


  public myMonoosc!: MonooscObj;
  public myDoubleosc!: DubleoscObj;
  public myMonosamp!: MonoSampObj;
  public myAutopan!: Autopan;
  public myWaveshaper!: Waveshaper;
  public myDrumachine!: MonoDrummachineObj;

  autopanSpenta: boolean = true;
  waveshaperSpenta: boolean = true;
  arate: number = 0;
  adrywet: number = 0;
  wsdgain: number = 0;
  hertzs = [22.5, 55, 110, 220, 440, 880];
  selectedHrtz = 55;
  lfoConOsc1: boolean = false;
  lfoConOsc2: boolean = false;
  lfoConOsciJustCon: boolean = false;
  lfoConOsciJustCon2: boolean = false;
  subscription: any;
  stepper = 0;
  isPianoRollVisible = false;
 
  modulations = [
    {
      modulation: false,
      min: 100,
      max: 3000
    }, {
      modulation: false,
      min: 100,
      max: 3000
    }, {
      modulation: false,
      min: 100,
      max: 3000
    }, {
      modulation: false,
      min: 100,
      max: 3000
    }, {
      modulation: false,
      min: 100,
      max: 3000
    }];
  
  constructor(public myTimer: TimerService, private library: SamplesLibraryService) { }
  getState(){

  }
  getBackground(){
    let a = Utilities.getRandomInt(300,1);
    return 'repeating-radial-gradient(#d28f8f, transparent '+a+'px)';
  }
  getHeight(bol: boolean) {
    return bol ? '1250' : '20';
  }
  getDisplay(bol: boolean) {
    return bol ? 0.0 : 1;
  }
  getZindex(bol: boolean) {
    return bol ? 0 : 9999;
  }
  toggle(){
    this.isPianoRollVisible ? this.isPianoRollVisible = false : this.isPianoRollVisible = true;
  }
  enableMod(modIndex: number) {
    this.modulations[modIndex].modulation ? this.modulations[modIndex].modulation = false : this.modulations[modIndex].modulation = true;
  }

  ngAfterViewInit(): void {
    this.subscription = this.myTimer.trackStateItem$.subscribe(res => {
      
      this.stepper = res.timePosition;
      if (this.type === 'NEWSYNTH' && typeof this.mainOscillator1.oscWk !== 'undefined') {
        if (this.modulations[4].modulation) {
          this.mainOscillator1.oscWk.frequency.setValueAtTime((this.mainOscillator1.oscWk.frequency.value + this.modulations[4].min), this.modulations[4].max);
          this.mainOscillator2.oscWk.frequency.setValueAtTime((this.mainOscillator2.oscWk.frequency.value + this.modulations[4].min), this.modulations[4].max);
        }
        if (this.modulations[0].modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].min, this.myTimer.audioContext.currentTime); break;
            case 1: this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].max, this.myTimer.audioContext.currentTime); break;
            case 2: this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].min, this.myTimer.audioContext.currentTime); break;
            case 3: this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].max, this.myTimer.audioContext.currentTime); break;
          }
        }
        if (this.modulations[1].modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].min, this.myTimer.audioContext.currentTime); break;
            case 1: this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].min, this.myTimer.audioContext.currentTime); break;
            case 2: this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].max, this.myTimer.audioContext.currentTime); break;
            case 3: this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].max, this.myTimer.audioContext.currentTime); break;
          }
        }
        if (this.modulations[2].modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setValueAtTime(this.modulations[2].max, this.myTimer.audioContext.currentTime ); break;
            case 1:  break;
            case 2:  break;
            case 3:this.filter.filterNode.frequency.setValueAtTime(this.modulations[2].min, this.myTimer.audioContext.currentTime  );  break;
          }
        }
        if (this.modulations[3].modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setTargetAtTime(this.modulations[3].max, this.myTimer.audioContext.currentTime, this.myTimer.steps); break;
            case 1: this.filter.filterNode.frequency.setValueAtTime(this.modulations[3].min, this.myTimer.audioContext.currentTime); break;
            case 2:  break;
            case 3: this.filter.filterNode.frequency.setTargetAtTime(this.modulations[3].max, this.myTimer.audioContext.currentTime, this.myTimer.steps); break;
          }
        }
      }

    });

    this.myAutopan = new Autopan(this.myTimer.audioContext);
    this.myWaveshaper = new Waveshaper(this.myTimer.audioContext);

    switch (this.type) {
      case 'DRUM':
        this.myDrumachine = new MonoDrummachineObj(this.myTimer.audioContext, this.library);
        this.myDrumachine.volume.connect(this.myTimer.merger);
        break;
      case 'SAMPLER':
        this.myMonosamp = new MonoSampObj(this.myTimer.audioContext, this.library);
        this.myMonosamp.volume.connect(this.myTimer.merger);
        break;
      case 'MONOOSC':
        this.myMonoosc = new MonooscObj(this.myTimer.audioContext);
        this.myMonoosc.volume.connect(this.myTimer.merger);
        this.myMonoosc.start();
        break;
      case 'DOUBLEOOSC':
        this.myDoubleosc = new DubleoscObj(this.myTimer.audioContext);
        this.myDoubleosc.volume.connect(this.myTimer.merger);
        break;
      case 'NEWSYNTH':

        this.filterLfoGain.connectToAudioParam(this.filter.filterNode.frequency);

        this.lfoFrequencyFilter.setAudioNodeIn(this.filterLfoGain.gainNode);  
        this.lfoFrequencyOscillator.setAudioNodeIn(this.freqOscLfoGain.gainNode);
        
        this.mainOscillator1.setAudioNodeIn(this.mainGain1.gainNode);
        this.mainOscillator2.setAudioNodeIn(this.mainGain2.gainNode)

        this.mainGain1.connectToAudioNode(this.mainGain.gainAdsr)
        this.mainGain2.connectToAudioNode(this.mainGain.gainAdsr)
      
        this.mainGain.connectToAudioNode(this.filter.filterNode);
        this.filter.connectToAudioNode(this.pan.stereoPannerNode);
        this.pan.connectToAudioNode(this.myTimer.merger);

        break;
    }
  }

  setClip(index: number) {
    this.pianoRoll.setClip(index);
  }

  setAutopan() {
    if (this.autopanSpenta) {
      switch (this.type) {
        case 'DRUM':
          this.spegniAutopan(this.myDrumachine.volume);
          break;
        case 'SAMPLER':
          this.spegniAutopan(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.spegniAutopan(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.spegniAutopan(this.myDoubleosc.volume); break
        case 'NEWSYNTH':
          if (typeof this.pan !== 'undefined' && typeof this.pan.stereoPannerNode !== 'undefined') {
            this.spegniAutopan(this.pan.stereoPannerNode);
          }
          break;
      }
      this.autopanSpenta = false;
    } else {
      switch (this.type) {
        case 'DRUM':
          this.accendiAutopan(this.myDrumachine.volume);
          break;
        case 'SAMPLER':
          this.accendiAutopan(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.accendiAutopan(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.accendiAutopan(this.myDoubleosc.volume);
          break;
        case 'NEWSYNTH':
          this.accendiAutopan(this.pan.stereoPannerNode);
          break;
      }
      this.autopanSpenta = true;
    }
  }

  setWaveshaper() {
    if (this.waveshaperSpenta) {
      switch (this.type) {
        case 'DRUM':
          this.accendiWaveshaper(this.myDrumachine.volume);
          break;
        case 'SAMPLER':
          this.accendiWaveshaper(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.accendiWaveshaper(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.accendiWaveshaper(this.myDoubleosc.volume);
          break;
        case 'NEWSYNTH':
          this.accendiWaveshaper(this.pan.stereoPannerNode);
          break;

      }
      this.waveshaperSpenta = false;
    } else {
      switch (this.type) {
        case 'DRUM':
          this.spegniWaveshaper(this.myDrumachine.volume);
          break;
        case 'SAMPLER':
          this.spegniWaveshaper(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.spegniWaveshaper(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.spegniWaveshaper(this.myDoubleosc.volume);
          break;
        case 'NEWSYNTH':
          this.spegniWaveshaper(this.pan.stereoPannerNode);
          break;
      }
      this.waveshaperSpenta = true;
    }
  }

  private spegniWaveshaper(ad: AudioNode) {
    ad.disconnect(this.myWaveshaper.waveshaper);
    if (this.autopanSpenta) {
      this.myWaveshaper.waveshaper.disconnect(this.myTimer.merger);
      ad.connect(this.myTimer.merger)
    } else {
      this.myWaveshaper.waveshaper.disconnect(this.myAutopan.panner);
      ad.connect(this.myAutopan.panner);
    }
  }

  private accendiWaveshaper(ad: AudioNode) {
    ad.disconnect(this.autopanSpenta ? this.myTimer.merger : this.myAutopan.panner);
    ad.connect(this.myWaveshaper.waveshaper);
    this.myWaveshaper.waveshaper.connect(this.autopanSpenta ? this.myTimer.merger : this.myAutopan.panner);
  }

  private accendiAutopan(ad: AudioNode): void {
    if (this.waveshaperSpenta) {
      ad.disconnect(this.myAutopan.panner);
      this.myAutopan.panner.disconnect(this.myTimer.merger);
      ad.connect(this.myTimer.merger);
    } else {
      this.myWaveshaper.waveshaper.disconnect(this.myAutopan.panner);
      this.myAutopan.panner.disconnect(this.myTimer.merger);
      this.myWaveshaper.waveshaper.connect(this.myTimer.merger);
    }
  }

  private spegniAutopan(ad: AudioNode): void {
    if (this.waveshaperSpenta) {
      ad.disconnect(this.myTimer.merger);
      ad.connect(this.myAutopan.panner);
    } else {
      this.myWaveshaper.waveshaper.disconnect(this.myTimer.merger);
      this.myWaveshaper.waveshaper.connect(this.myAutopan.panner);
    }
    this.myAutopan.panner.connect(this.myTimer.merger);
  }

  setAdrywet() {
    this.myAutopan.change(this.arate, this.adrywet, this.myTimer.audioContext.currentTime);
  }

  onSetSoundParams(params: SyntControl, instrumentType: string) {
    switch (instrumentType) {
      case 'DRUM':
        this.myDrumachine.setParams(params, this.index);
        break;
      case 'SAMPLER':
        this.myMonosamp.setParams(params, this.index);
        break;
      case 'MONOOSC':
        this.myMonoosc.setParams(params, this.index);
        break;
      case 'DOUBLEOOSC':
        this.myDoubleosc.setParams(params, this.index);
        break;
    }
  }

  changeConnection() {
    if (this.lfoConOsciJustCon) {
      this.mainOscillator1.disconnectModulatoreDiFrequenza();
      this.lfoConOsciJustCon = false;
    } else {
      this.mainOscillator1.setModulatoreDiFrequenza(this.freqOscLfoGain.gainNode);
      this.lfoConOsciJustCon = true;
    }
  }

  changeConnection2() {
    if (this.lfoConOsciJustCon2) {
      this.mainOscillator2.disconnectModulatoreDiFrequenza();
      this.lfoConOsciJustCon2 = false;
    } else {
      this.mainOscillator2.setModulatoreDiFrequenza(this.freqOscLfoGain.gainNode);
      this.lfoConOsciJustCon2 = true;
    }
  }
 
  play($event: Nota, instrumentType: string) {
    // @ts-ignore*/
 
    if (!this.muted) {
      switch (instrumentType) {
        case 'DRUM':
          this.myDrumachine.play($event.libIndex, this.index, $event.velocity);
          break;
        case 'SAMPLER':
          this.myMonosamp.play($event.notaDaSuonare, this.index, $event.velocity);
          break;
        case 'MONOOSC':
          this.myMonoosc.play($event.notaDaSuonare, this.index, $event.velocity);
          break;
        case 'DOUBLEOOSC':
          this.myDoubleosc.play($event.notaDaSuonare, this.index, $event.velocity);
          break;
        case 'NEWSYNTH':
          this.freqOscLfoGain.play(1);
          this.lfoFrequencyOscillator.play(1);
          this.lfoFrequencyFilter.play(1);
          this.filterLfoGain.play(1);
          this.mainOscillator1.play($event.notaDaSuonare);
          this.mainOscillator2.play($event.notaDaSuonare);
          this.mainGain.play($event.velocity);
          this.filter.play($event.velocity);
          break;
      }
    }
  }

  getActiveButton(el: boolean): string {
    return !el ? (el = true, 'red') : (el = false, 'grey');
  }

}
