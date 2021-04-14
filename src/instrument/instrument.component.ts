import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { LfoComponent } from 'src/audio-components/lfo/lfo.component';
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
//var LFO = require('lfo')
@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.scss']
})
export class InstrumentComponent implements OnInit, AfterViewInit {
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

  @ViewChild('osc', { static: false })
  osc!: OscComponent;
  @ViewChild('oscillator2', { static: false })
  oscillator2!: OscComponent;
  @ViewChild('gain', { static: false })
  gain!: GainComponent;
  @ViewChild('pan', { static: false })
  pan!: StereoPannerComponent;
  @ViewChild('filter', { static: false })
  filter!: FilterComponent;
  @ViewChild('osc2', { static: false })
  osc2!: OscComponent;
  @ViewChild('gainOsc2', { static: false })
  gainOsc2!: GainComponent;
  @ViewChild('lfo', { static: false })
  lfo!: OscComponent;
  @ViewChild('gainLfo', { static: false })
  gainLfo!: GainComponent;
  @ViewChild("pianoRoll", { static: false })
  pianoRoll!: PianoRollCanvasBasedComponent;


  public myMonoosc!: MonooscObj;
  public myDoubleosc!: DubleoscObj;
  public myMonosamp!: MonoSampObj;
  public myAutopan!: Autopan;
  public myWaveshaper!: Waveshaper;

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
  waveArray = new Float32Array(9);
  mod1 = {
    modulation: false,
    min: 100,
    max: 3000
  };
  mod2 = {
    modulation: false,
    min: 100,
    max: 3000
  };
  mod3 = {
    modulation: false,
    min: 100,
    max: 3000
  };
  mod4 = {
    modulation: false,
    min: 100,
    max: 3000
  };
  mod5 = {
    modulation: false,
    min: 100,
    max: 3000
  };
  enableModulation2Bool = false;
  enablePseudoArpeggiatorBool = false;
  constructor(public myTimer: TimerService, private library: SamplesLibraryService) {
    this.waveArray[0] = 0.5;
    this.waveArray[1] = 1;
    this.waveArray[2] = 0.5;
    this.waveArray[3] = 0;
    this.waveArray[4] = 0.5;
    this.waveArray[5] = 1;
    this.waveArray[6] = 0.5;
    this.waveArray[7] = 0;
    this.waveArray[8] = 0.5;
  }
  enableModulation() {
    this.mod1.modulation ? this.mod1.modulation = false : this.mod1.modulation = true;
  }
  enableModulation2() {
    this.mod2.modulation ? this.mod2.modulation = false : this.mod2.modulation = true;
  }
  enableModulation3() {
    this.mod3.modulation ? this.mod3.modulation = false : this.mod3.modulation = true;
  }
  enableModulation4() {
    this.mod4.modulation ? this.mod4.modulation = false : this.mod4.modulation = true;
  }
  enablePseudoArpeggiator() {
    this.mod5.modulation ? this.mod5.modulation = false : this.mod5.modulation = true; 
   }
  ngAfterViewInit(): void {
    this.subscription = this.myTimer.trackStateItem$.subscribe(res => {
      this.stepper = res.timePosition;

      this.stepper = res.timePosition;

      if (this.type === 'NEWSYNTH' && typeof this.osc.oscWk !== 'undefined') {
        if (this.mod5.modulation) {
          this.osc.oscWk.frequency.exponentialRampToValueAtTime((this.osc.oscWk.frequency.value - this.mod5.min), 0.1);
          this.oscillator2.oscWk.frequency.exponentialRampToValueAtTime((this.oscillator2.oscWk.frequency.value - this.mod5.min), 0.1);
        }
        if (this.mod1.modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setValueAtTime(this.mod1.min, this.myTimer.audioContext.currentTime); break;
            case 1: this.filter.filterNode.frequency.setValueAtTime(this.mod1.max, this.myTimer.audioContext.currentTime); break;
            case 2: this.filter.filterNode.frequency.setValueAtTime(this.mod1.min, this.myTimer.audioContext.currentTime); break;
            case 3: this.filter.filterNode.frequency.setValueAtTime(this.mod1.max, this.myTimer.audioContext.currentTime); break;
          }
        }
        if (this.mod2.modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setValueAtTime(this.mod2.min, this.myTimer.audioContext.currentTime);; break;
            case 1: this.filter.filterNode.frequency.setValueAtTime(this.mod2.min, this.myTimer.audioContext.currentTime); break;
            case 2: this.filter.filterNode.frequency.setValueAtTime(this.mod2.max, this.myTimer.audioContext.currentTime); break;
            case 3: this.filter.filterNode.frequency.setValueAtTime(this.mod2.max, this.myTimer.audioContext.currentTime); break;
          }
        }
        if (this.mod3.modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setValueAtTime(this.mod3.min, this.myTimer.audioContext.currentTime); break;
            case 1: this.filter.filterNode.frequency.setTargetAtTime(this.mod3.max, this.myTimer.audioContext.currentTime, this.myTimer.steps); break;
            case 2: this.filter.filterNode.frequency.setValueAtTime(this.mod3.max, this.myTimer.audioContext.currentTime); break;
            case 3: this.filter.filterNode.frequency.setTargetAtTime(this.mod3.min, this.myTimer.audioContext.currentTime, this.myTimer.steps); break;
          }
        }
        if (this.mod4.modulation) {
          switch (res.timePosition) {
            case 0: this.filter.filterNode.frequency.setTargetAtTime(this.mod4.max, this.myTimer.audioContext.currentTime, this.myTimer.steps); break;
            case 1: this.filter.filterNode.frequency.setValueAtTime(this.mod4.min, this.myTimer.audioContext.currentTime); break;
            case 2: this.filter.filterNode.frequency.setValueAtTime(this.mod4.min, this.myTimer.audioContext.currentTime); break;
            case 3: this.filter.filterNode.frequency.setTargetAtTime(this.mod4.max, this.myTimer.audioContext.currentTime, this.myTimer.steps); break;
          }
        }
      }

    });
    if (this.type !== 'NEWSYNTH') {
      this.myAutopan = new Autopan(this.myTimer.audioContext);
      this.myWaveshaper = new Waveshaper(this.myTimer.audioContext);
    }
    switch (this.type) {
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
        this.osc2.setAudioNodeIn(this.gainOsc2.gainNode);
        this.gainOsc2.connectToAudioParam(this.filter.filterNode.frequency);

        this.lfo.setAudioNodeIn(this.gainLfo.gainNode);
        this.oscillator2.setAudioNodeIn(this.gain.gainAdsr)
        this.osc.setAudioNodeIn(this.gain.gainAdsr);
        this.gain.connectToAudioNode(this.filter.filterNode);
        this.filter.connectToAudioNode(this.pan.stereoPannerNode);
        this.pan.connectToAudioNode(this.myTimer.merger);
        break;
    }
  }

  tick() {
    throw new Error('Method not implemented.');
  }

  setClip(index: number) {
    this.pianoRoll.setClip(index);
  }

  ngOnInit() { }

  setAutopan() {
    if (this.autopanSpenta) {
      switch (this.type) {
        case 'SAMPLER':
          this.spegniAutopan(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.spegniAutopan(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.spegniAutopan(this.myDoubleosc.volume);
      }
      this.autopanSpenta = false;
    } else {
      switch (this.type) {
        case 'SAMPLER':
          this.accendiAutopan(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.accendiAutopan(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.accendiAutopan(this.myDoubleosc.volume);
          break;
      }
      this.autopanSpenta = true;
    }
  }


  setWaveshaper() {
    if (this.waveshaperSpenta) {
      switch (this.type) {
        case 'SAMPLER':
          this.accendiWaveshaper(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.accendiWaveshaper(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.accendiWaveshaper(this.myDoubleosc.volume);
          break;
      }
      this.waveshaperSpenta = false;
    } else {
      switch (this.type) {
        case 'SAMPLER':
          this.spegniWaveshaper(this.myMonosamp.volume);
          break;
        case 'MONOOSC':
          this.spegniWaveshaper(this.myMonoosc.volume);
          break;
        case 'DOUBLEOOSC':
          this.spegniWaveshaper(this.myDoubleosc.volume);
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
      this.osc.disconnectModulatoreDiFrequenza();
      this.lfoConOsciJustCon = false;
    } else {
      this.osc.setModulatoreDiFrequenza(this.gainLfo.gainNode);
      this.lfoConOsciJustCon = true;
    }


  }
  changeConnection2() {
    if (this.lfoConOsciJustCon2) {
      this.oscillator2.disconnectModulatoreDiFrequenza();
      this.lfoConOsciJustCon2 = false;
    } else {
      this.oscillator2.setModulatoreDiFrequenza(this.gainLfo.gainNode);
      this.lfoConOsciJustCon2 = true;
    }
  }

  play($event: Nota, instrumentType: string) {
    if (!this.muted) {
      switch (instrumentType) {
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
          let frequenzaFiltro = 0;
          if (this.myTimer.steps === 0) {

          }
          this.gainLfo.play(1);
          this.lfo.play(1);
          this.osc2.play(1);
          this.gainOsc2.play(1);
          this.osc.play($event.notaDaSuonare);
          this.oscillator2.play($event.notaDaSuonare);
          this.gain.play($event.velocity);
          this.filter.play($event.velocity);
          break;
      }
    }

  }

  getActiveButton(el: boolean): string {
    return !el ? (el = true, 'red') : (el = false, 'grey');
  }


}
