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
  steps: number = 0;
  merger!: GainNode;
  gain = 1;
  private numberOfTraksSource = new BehaviorSubject<number>(0);

  timeInterval: number = 0;
  start: any;
  expected: any;
  round: any;
  accurateStop: any;
  worker = new Worker(new URL('./time.worker', import.meta.url), { type: 'module', name: 'worker-time' });

  private trackStateModel: TickResponse = {
    traksAreOn: [] = [],
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
  public audioContext!: BaseAudioContext;

  constructor() {
    this.worker.addEventListener('message', () => {
      this.trackStateSource.next({
        traksAreOn: this.trackStateModel.traksAreOn,
        timePosition: this.steps,
        isStarted: this.isPlayed,
        audioContextTime: 0
      });
      this.steps >= 3
        ? ((this.step = true), (this.steps = 0))
        : ((this.step = true), this.steps++);
    });
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
  }
  play() {
    this.isPlayed = true;
    this.playingStateSource.next(true);

    if (typeof (Worker) !== 'undefined') {
      this.worker.postMessage({
        speed: this.speed,
        command: 'start'
      });    
    }
  }

  stop() {
    this.steps = 0;
    this.isPlayed = false;
    this.worker.postMessage({
      speed: this.speed,
      command: 'stop'
    });
    this.playingStateSource.next(false);
  }
  pause() {
    this.isPlayed = false;
    this.accurateStop();
  }

  async loadWorklet() {
    this.audioContext = new AudioContext();
    this.startTime = this.audioContext.currentTime + 0.005;
    this.isPlayed = false;
    this.step = false;
    this.steps = 0;
    this.speed = 120;
    this.merger = this.audioContext.createGain();
    this.merger.gain.setValueAtTime(this.gain, this.audioContext.currentTime);
    this.merger.connect(this.audioContext.destination);

  }


}



