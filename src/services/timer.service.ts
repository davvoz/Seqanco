import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TickResponse } from "../interfaces/interfaces";
@Injectable()
export class TimerService {
  numberOfTraks = 0;
  maxStep = 1;
  startTime = 0;
  noteTime = 0;
  timeoutId: any;
  tic = 0;
  firstStep = false;
  speed!: number;
  isPlayed!: boolean;
  timer!: any;
  step!: boolean;
  steps!: number;
  merger!: GainNode;
  gain = 1;
  private numberOfTraksSource = new BehaviorSubject<number>(0);


  private trackStateModel: TickResponse = {
    traksAreOn: [],
    timePosition: 0,
    isStarted: true,
    audioContextTime: 0
  };
  private trackStateSource = new BehaviorSubject<TickResponse>(
    this.trackStateModel
  );
  private playingStateSource = new BehaviorSubject<boolean>(
    false
  );
  playingStateItem$ = this.playingStateSource.asObservable();
  trackStateItem$ = this.trackStateSource.asObservable();
  public audioContext!: AudioContext;
  constructor(private _ngZone: NgZone) {
   
    this.loadWorklet();
   
  }
  addTrack() {
    this.numberOfTraks++;
  }
  muteTrack(index: number, state: boolean) {
    this.trackStateModel.traksAreOn[index] = state;
  }
  removeTrack(index: number) {
    this.numberOfTraks--;
    this.numberOfTraksSource.next(index);
    //  this.trackStateSource.next({ soundOn: this.trackStateModel.soundOn, trackIndex: this.steps })
  }
  play() {
    this.isPlayed = true;
    this.audioContext.resume();
    this.scheduleNote();
    this.playingStateSource.next(true);
  }
  stop() {
    this.audioContext.suspend();
    this.steps = 0;
    this.isPlayed = false;
    clearTimeout(this.timer);
    this.playingStateSource.next(false);
  }
  pause() {
    this.audioContext.suspend();
    this.isPlayed = false;
    clearTimeout(this.timer);
  }
  private scheduleNote() {
    let contextPlayTime;
    let currentTime: number;
    if (typeof this.audioContext !== 'undefined') {
      currentTime = this.audioContext.currentTime
      currentTime -= this.startTime;
      while (this.noteTime < currentTime + 0.2) {
        contextPlayTime = this.noteTime + this.startTime;
        this.changeStateTrack(contextPlayTime);
        this.nextNote();
      }
    }
    this._ngZone.runOutsideAngular(() => {
     this.timer = setTimeout(this.scheduleNote.bind(this), 0);
    });
  }
  private nextNote() {
    let secondsPerBeat = 60.0 / this.speed;
    // 0.25 because each square is a 16th note
    this.noteTime += 0.25 * secondsPerBeat;
    secondsPerBeat = 0;
  }
  private changeStateTrack(pt: number) {
    this.trackStateSource.next({
      traksAreOn: this.trackStateModel.traksAreOn,
      timePosition: this.steps,
      isStarted: this.isPlayed,
      audioContextTime: pt
    });
    this.steps >= this.maxStep
      ? ((this.step = true), (this.steps = 0))
      : ((this.step = true), this.steps++);
  }

  async loadWorklet() {


    const nomeProcesso = 'bypass-processor';
    let myWk;
    myWk = this.createWorklet.toString();
    myWk = `function ${myWk}`;
    myWk = myWk.replace('Fake', 'AudioWorkletProcessor');
    const blob = new Blob([`(${myWk})()`], {
      type: "application/javascript"
    });
    const tempUrl = URL.createObjectURL(blob);
    
    this.audioContext = new AudioContext();
    return await this.audioContext.audioWorklet.addModule(tempUrl).then(() => {
      this.startTime = this.audioContext.currentTime + 0.005;
      this.isPlayed = false;
      this.step = false;
      this.steps = 0;
      this.speed = 120;
      this.merger = this.audioContext.createGain();
      this.merger.gain.setValueAtTime(this.gain, this.audioContext.currentTime);
      this.merger.connect(this.audioContext.destination);
    })
  }
  createWorklet() {
    class BypassProcessor extends Fake {
      isPlaying: boolean;
      port: any;

      constructor() {
        super();
        this.isPlaying = true;
        this.port.onmessage = this.onmessage.bind(this)
      }
  
      onmessage(event: { data: any; }) {
        const { data } = event;
        this.isPlaying = data;
      }
    
      process(inputs: any[], outputs: any[]) {
        if(!this.isPlaying) {
          return;
        }

        const input = inputs[0];
        const output = outputs[0];
    
        for (let channel = 0; channel < output.length; ++channel) {
          output[channel].set(input[channel]);
        }
    
        return this.isPlaying;
      }
    }
    
    registerProcessor('bypass-processor', BypassProcessor);
  }
}
class Fake {

}
function registerProcessor(arg0: string, arg1: any) {

  throw new Error("Function not implemented.");
}


