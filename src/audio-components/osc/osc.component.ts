import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Utilities } from 'src/classes/utilities';
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
    const nomeProcesso = Utilities.makeid(10);
    const tempUrl = this.createUrl(nomeProcesso);
    return await this.myTimer.audioContext.audioWorklet.addModule(tempUrl).then(() => {
      this.oscWk =this.myTimer.audioContext.createOscillator(); //new AudioWorkletNode(this.myTimer.audioContext, nomeProcesso);
      this.oscWk.start();
      if (typeof this.modulatoreDiFrequenza !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
        // @ts-ignore*/
        this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
      }
    });

  }
  private createUrl(nomeProcesso: string) {
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
    return tempUrl;
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
  
  createWorklet() {
    class BypassProcessor extends Fake {
      constructor() {
          super();
         
      }
      
      process(inputs: any[], outputs: any[]) {

          const input = inputs[0];
          const output = outputs[0];
          for (let channel = 0; channel < output.length; ++channel) {
              output[channel].set(input[channel]);
          }
          return true;
      }
  
    }


    registerProcessor("oscillator", BypassProcessor);
  }

}

class Fake {

}
function registerProcessor(arg0: string, arg1: any) {

  throw new Error("Function not implemented.");
}







