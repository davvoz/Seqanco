import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TimerService } from '../../services/timer.service';


@Component({
  selector: 'app-osc',
  templateUrl: './osc.component.html',
  styleUrls: ['./osc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OscComponent implements OnInit, OnDestroy, AfterViewInit {
  audioNodeIn!: AudioNode;
  audioParamIn!: AudioParam;
  @Input()
  nome!: string;
  selectedWaveView: string = 'sine';
  frequency: number;
  oscWk!: OscillatorNode;
  isStarted: boolean = false;
  waveforms = ['square', 'sine', 'sawtooth', 'triangle', 'noise'];
  detune!: number;
  modulatoreDiFrequenza!: AudioNode;
  isActive: boolean = false;
  modulatoreDioFrequenzaJustCon: boolean = false;
  subscription!: Subscription;
  phase!: number;
  duty!: number;

  constructor(public myTimer: TimerService) {
    this.frequency = 0;
  }

  ngAfterViewInit(): void {
    this.loadWorklet();
  }

  ngOnInit(): void {

  }

  play(freq: number): void {
    if (!this.isStarted) {
      this.isStarted = true;
      if (typeof this.audioNodeIn !== 'undefined') {
        this.oscWk.connect(this.audioNodeIn);
      }
      if (typeof this.audioParamIn !== 'undefined') {
        this.oscWk.connect(this.audioParamIn);
      }
    }

    if (freq !== null) {
      // @ts-ignore*/
     // const freqW = this.oscWk.frequency;
     this.oscWk.frequency.setValueAtTime(freq + this.frequency, this.myTimer.audioContext.currentTime);
    }
  }

  ngOnDestroy(): void {
    this.audioNodeIn.disconnect();
  }

  changeWave() {
    // @ts-ignore*/
    // const par = this.oscWk.parwameters.get('wave');
    // switch (this.selectedWaveView) {
    //   case 'sine': par.setValueAtTime(3, this.myTimer.audioContext.currentTime); break;
    //   case 'square': par.setValueAtTime(1, this.myTimer.audioContext.currentTime); break;
    //   case 'noise': par.setValueAtTime(4, this.myTimer.audioContext.currentTime); break;
    //   case 'triangle': par.setValueAtTime(0, this.myTimer.audioContext.currentTime); break;
    //   case 'sawtooth': par.setValueAtTime(2, this.myTimer.audioContext.currentTime); break;
    // }

    
    switch (this.selectedWaveView) {
      case 'sine': this.oscWk. type ='sine'; break;
      case 'square':this.oscWk. type ='square'; break;
      case 'noise': this.oscWk. type ='custom'; break;
      case 'triangle':this.oscWk. type ='triangle'; break;
      case 'sawtooth':this.oscWk. type ='sawtooth'; break;
    }


  }
  changeFrequency() {
    // @ts-ignore*/
    //const freq = this.oscWk.frequency;
    this.oscWk.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);

  }
  changePhase() {
    // @ts-ignore*/
     const phase = this.oscWk.parameters.get('phase');
    phase.setValueAtTime(this.phase, this.myTimer.audioContext.currentTime);

  }
  changeDuty() {
    // @ts-ignore*/
    const duty = this.oscWk.parameters.get('duty');
    duty.setValueAtTime(this.duty, this.myTimer.audioContext.currentTime);
  }
  setAudioParamIn(ap: AudioParam) {
    this.audioParamIn = ap;
  }

  setAudioNodeIn(an: AudioNode) {
    this.audioNodeIn = an;

  }
  async loadWorklet() {
    const nomeProcesso = this.makeid(10);
    let myWk;
    myWk = this.createWorklet.toString();
    myWk = `function ${myWk}`;
    myWk = myWk.replace('Fake', 'AudioWorkletProcessor');
    myWk = myWk.replace('var sampleRate;', '');
    myWk = myWk.replace('oscillator', nomeProcesso);
    const blob = new Blob([`(${myWk})()`], {
      type: "application/javascript"
    });
    const tempUrl = URL.createObjectURL(blob);
    return await this.myTimer.audioContext.audioWorklet.addModule(tempUrl).then(() => {
      this.oscWk =this.myTimer.audioContext.createOscillator(); //new AudioWorkletNode(this.myTimer.audioContext, nomeProcesso);
      this.oscWk.start();
      if (typeof this.modulatoreDiFrequenza !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
        // @ts-ignore*/
        this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
      }
    });

  }
  setModulatoreDiFrequenza(modulatore: AudioNode) {
    if (typeof this.oscWk !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
      this.modulatoreDiFrequenza = modulatore;
      // @ts-ignore*/
      this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
    }

  }
  disconnectModulatoreDiFrequenza() {
    // @ts-ignore*/
    this.modulatoreDiFrequenza.disconnect(this.oscWk.frequency);
  }
  start() {
    if (!this.isActive) {
      this.isActive = true;
    }
  }
  makeid(length: number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  createWorklet() {
    var sampleRate: number;
    const saw = (v: number) => v - Math.floor(v);
    class Oscillator extends Fake {
      phase
      sync_phase
      prev_sync_phase
      constructor() {
        super();
        this.phase = 0;
        this.sync_phase = 0;
        this.prev_sync_phase = 0
      }
      static get parameterDescriptors() {
        return [
          {
            name: "phase",
            defaultValue: 0,
            max: 1,
            min: 0
          },
          {
            name: "duty",
            defaultValue: 0.5,
            min: 0,
            max: 1
          },
          {
            name: "frequency",
            defaultValue: 440,
            min: Number.EPSILON
          },
          {
            name: "wave",
            defaultValue: 3,
            min: 0,
            max: 3
          },
          {
            name: "sync",
            defaultValue: 0,
            min: 0,
          }
        ];
      }
      // @ts-ignore*/
      process(input: (string | any[])[][], outputs: string | any[], params: { frequency: string | any[]; phase: string | any[]; wave: string | any[]; duty: string | any[]; sync: string | any[]; }) {
        for (let z = 0; z < outputs.length; z++) {
          const out = outputs[z][0];
          const outlen = out.length;
          const freq = params.frequency.length === 1;
          const phase = params.phase.length === 1;
          const wave = params.wave.length === 1;
          const duty = params.duty.length === 1;
          const sync = params.sync.length === 1;
          let inp;
          if (typeof input !== 'undefined' && typeof input[0] !== 'undefined' && typeof input[0][0] !== 'undefined') {
            inp = input[0][0].length === 0;
          }

          let back = 0
          for (let x = 0; x < outlen; x++) {
            this.sync_phase = (this.prev_sync_phase) % (params.sync[sync ? 0 : x] / sampleRate)
            if (params.sync[sync ? 0 : x] !== 0 && this.prev_sync_phase >= (params.sync[sync ? 0 : x] / sampleRate)) {
              this.phase = 0
              back = x

            }
            this.prev_sync_phase = this.sync_phase
            const main = (params.frequency[freq ? 0 : x] * (x - back)) / sampleRate;
            // noise
            if (params.wave[wave ? 0 : x] >= 4) {
              out[x] = (Math.random() * 2) - 1
            } else if (params.wave[wave ? 0 : x] >= 3) {
              // sine wave made using bulit-in Math.sin
              out[x] = Math.sin(
                (main + this.phase + params.phase[phase ? 0 : x]) * 2 * Math.PI
              );
              // sawtooth wave using linear piecewise floor
            } else if (params.wave[wave ? 0 : x] >= 2) {
              out[x] = 2 * saw(main + this.phase + params.phase[phase ? 0 : x]) - 1;
              // pulse wave using difference of phase shifted saws and variable DC threshold
            } else if (params.wave[wave ? 0 : x] >= 1) {
              const temp = main + this.phase + params.phase[phase ? 0 : x];
              out[x] = (saw(temp) - saw(temp + params.duty[duty ? 0 : x])) > 0 ? 1 : -1
              // triangle wave using absolute value of amplitude shifted sawtooth wave
            } else if (params.wave[wave ? 0 : x] >= 0) {
              out[x] =
                4 *
                Math.abs(
                  saw(main + this.phase + params.phase[phase ? 0 : x]) - 1 / 2
                ) - 1;
            }
            this.prev_sync_phase += 1 / sampleRate;
          }
          this.phase +=
            (params.frequency[freq ? 0 : outlen - 1] * outlen) / sampleRate;
          this.phase %= sampleRate;
          return true;
        }
      }
    }


    registerProcessor("oscillator", Oscillator);
  }

}

class Fake {

}
function registerProcessor(arg0: string, arg1: any) {

  throw new Error("Function not implemented.");
}







