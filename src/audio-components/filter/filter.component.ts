import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdsrComponent } from '../../adsr/adsr.component';
import { Adsr } from '../../interfaces/interfaces';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  @ViewChild(AdsrComponent, { static: false })
  adsr!: AdsrComponent;
  @Input()
  nome!: string;
  @Input()
  envelope!: boolean;
  adsrVolume: Adsr = { attack: 0, decay: 0.0, sustain: 0.0, sustainVal: 0.0, release: 0.0 };
  filterNode: BiquadFilterNode;
  gainAdsr: GainNode;
  isStarted: any;
  frequency: number = 1450;
  gain: number = 1;
  detune: number = 0;
  q: number = 0;
  selectedWaveView: string = 'allpass';

  waveforms = [
    'lowpass',
    'highpass',
    'bandpass',
    'lowshelf',
    'peaking',
    'notch',
    'allpass'
  ];;
  constructor(public myTimer: TimerService) {
    this.filterNode = this.myTimer.audioContext.createBiquadFilter();
    this.gainAdsr = this.myTimer.audioContext.createGain();
  }

  ngOnInit() { }

  changeWave() {
    this.filterNode.type = this.selectedWaveView as BiquadFilterType;
  }
  changeAdsr(adsr: Adsr) {
    this.adsrVolume = adsr;

  }
  play(veloGain: number): void {
    if (!this.isStarted) {
      this.isStarted = true;
    }
    this.filterNode.gain.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
    //settare adsr qua vuol dire adsr in modalità trigger
    this.setAdsr(this.filterNode.frequency, this.adsrVolume, this.myTimer.audioContext.currentTime);
    this.filterNode.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
    this.filterNode.gain.setValueAtTime(this.gain, this.myTimer.audioContext.currentTime);
    this.filterNode.detune.setValueAtTime(this.detune, this.myTimer.audioContext.currentTime);
    this.filterNode.Q.setValueAtTime(this.q, this.myTimer.audioContext.currentTime);
  }

  changeFilterFrequency() {
    this.filterNode.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
  }
  changeFilterGain() {
    this.filterNode.gain.setValueAtTime(this.gain, this.myTimer.audioContext.currentTime);

  }
  changeFilterDetune() {
    this.filterNode.detune.setValueAtTime(this.detune, this.myTimer.audioContext.currentTime);

  }
  changeFilterQ() {
    this.filterNode.Q.setValueAtTime(this.q, this.myTimer.audioContext.currentTime);

  }
  connectToAudioParam(ap: AudioParam) {
    this.filterNode.connect(ap);
  }

  connectToAudioNode(an: AudioNode) {
    this.gainAdsr.connect(an);
    this.filterNode.connect(this.gainAdsr);
  }

  public setAdsr(param: AudioParam, adsr: Adsr, ct: number) {

    param.cancelScheduledValues(ct);

    param.setValueAtTime(0, ct);

    param.exponentialRampToValueAtTime(1, ct + adsr.attack);

    param.linearRampToValueAtTime(
      adsr.sustainVal, ct + //
      adsr.attack + //
    adsr.decay);

    param.setValueAtTime(
      adsr.sustainVal, ct + //
      adsr.attack + //
      adsr.decay + //
    adsr.sustain);

    param.linearRampToValueAtTime(
      0, ct + adsr.attack + //
      adsr.decay + //
      adsr.sustain + //
    adsr.release);

  }
}
