import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Adsr, SyntControl } from '../interfaces/interfaces';

@Component({
  selector: 'app-synth-control',
  templateUrl: './synth-control.component.html',
  styleUrls: ['./synth-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SynthControlComponent implements AfterViewInit {

  @Output() parametriSynth = new EventEmitter<SyntControl>();
  @Input()
  typeIn!: string;
  @Input()
  name!: string;

  syntControl: SyntControl = {
    isMuted: 0,
    gain: 0,
    adsr: { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 },
    adsrPitch: { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 },
    waveSelected: 'square',
    filterSelected: 'allpass',
    filterCutoff: 0,
    filterReso: 0,
    lfoWaveSelected: 'square',
    lfoAmplitude: 0,
    lfoRate: 0,
    libIndex: 0,
    duration: 0,
    type: '',
    pitchEnvelope: { frequency: 0, end: 0 },
    isDistorted: false
  };
  library = [
    { valore: 0, descrizione: 'kick' },
    { valore: 1, descrizione: 'hat' },
    { valore: 2, descrizione: 'snare' },
    { valore: 3, descrizione: 'vox' },
    { valore: 4, descrizione: 'vox2' },
    { valore: 5, descrizione: 'per' },
    { valore: 6, descrizione: 'crash' }];
  waveSelected = 'square';
  filterSelected = 'allpass';
  libDescrizione = { valore: 0, descrizione: 'kick' };

  waveforms = ['square', 'sine', 'sawtooth', 'triangle'];
  filterType = [
    'lowpass',
    'highpass',
    'bandpass',
    'lowshelf',
    'peaking',
    'notch',
    'allpass'
  ];
  isMuted: number = 0;
  gain: number = 1;
  attack: number = 0;
  decay: number = 0;
  sustain: number = 0;
  sustainVal: number = 0;
  release: number = 0;
  filterCutoff: number = 1450;
  filterReso: number = 1000;
  lfoWaveSelected = 'square';
  lfoAmplitude: number = 0;
  lfoRate: number = 0;
  libIndex: number = 0;
  duration: number = 1;
  type: string = '';
  pitchEnvFreq: number = 0;
  pitchEnvEnd: number = 0;
  velocity!: number;
  adsrVolume: Adsr = { attack: 0.0, decay: 0.3, sustain: 0.3, sustainVal: 0.3, release: 0.3 };
  adsrPitch: Adsr = { attack: 0.1, decay: 0.3, sustain: 0.3, sustainVal: 0.3, release: 0.3 };
  adsrPitchDisplay = false;
  distorsion: boolean = false;

  constructor() { }
  
  distorsionGestione() {
    this.distorsion ? this.distorsion = false : this.distorsion = true;
    this.changed();
  }
  ngAfterViewInit() {
    this.syntControl = {
      isMuted: 0,
      gain: 0.5,
      adsr: this.adsrVolume,
      waveSelected: this.waveSelected,
      filterSelected: this.filterSelected,
      filterCutoff: 0,
      filterReso: 0,
      lfoWaveSelected: this.lfoWaveSelected,
      lfoAmplitude: 0,
      lfoRate: 0,
      libIndex: 0,
      duration: 0,
      type: '',
      adsrPitch: this.adsrPitch,
      pitchEnvelope: { frequency: this.pitchEnvFreq, end: this.pitchEnvEnd },
      isDistorted: false

    };
    this.changed();
  
  }
  getBgDistorsion() {
    if (this.distorsion) {
      return 'red';
    } else {
      return 'green';
    }
  }

  changed() {

    this.syntControl = {
      isMuted: this.isMuted,
      gain: this.gain,
      adsr: this.adsrVolume,
      adsrPitch: this.adsrPitch,
      waveSelected: this.waveSelected,
      filterSelected: this.filterSelected,
      filterCutoff: this.filterCutoff,
      filterReso: this.filterReso,
      lfoWaveSelected: this.lfoWaveSelected,
      lfoAmplitude: this.lfoAmplitude,
      lfoRate: this.lfoRate,
      libIndex: this.libIndex,
      duration: this.duration,
      type: this.type,
      pitchEnvelope: { frequency: this.pitchEnvFreq, end: this.pitchEnvEnd },
      isDistorted: this.distorsion
    };
    this.parametriSynth.emit(this.syntControl);
  }
  changeAdsr(adsr: Adsr) {
    this.syntControl.adsr = adsr;
    this.changed();
  }

}
