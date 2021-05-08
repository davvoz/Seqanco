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
  waveforms = ['square', 'sine', 'sawtooth', 'triangle'];
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

      this.oscWk.frequency.setValueAtTime(freq + this.frequency, this.myTimer.audioContext.currentTime);
    }
  }

  ngOnDestroy(): void {
    this.audioNodeIn.disconnect();
  }

  changeWave() {


    switch (this.selectedWaveView) {
      case 'sine': this.oscWk.type = 'sine'; break;
      case 'square': this.oscWk.type = 'square'; break;
      case 'noise': this.oscWk.type = 'custom'; break;
      case 'triangle': this.oscWk.type = 'triangle'; break;
      case 'sawtooth': this.oscWk.type = 'sawtooth'; break;
    }


  }
  changeFrequency() {
    this.oscWk.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);

  }

  setAudioParamIn(ap: AudioParam) {
    this.audioParamIn = ap;
  }

  setAudioNodeIn(an: AudioNode) {
    this.audioNodeIn = an;

  }
  async loadWorklet() {

    this.oscWk = this.myTimer.audioContext.createOscillator();
    this.oscWk.start();
    if (typeof this.modulatoreDiFrequenza !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
      this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
    }

  }

  setModulatoreDiFrequenza(modulatore: AudioNode) {
    if (typeof this.oscWk !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
      this.modulatoreDiFrequenza = modulatore;
      this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
    }

  }
  disconnectModulatoreDiFrequenza() {
    this.modulatoreDiFrequenza.disconnect(this.oscWk.frequency);
  }
  start() {
    if (!this.isActive) {
      this.isActive = true;
    }
  }

}









