import { Injectable } from '@angular/core';
import { AbstractInstrument } from '../classes/abstract-instrument';
import { TimerService } from './timer.service';
@Injectable({
  providedIn: 'root'
})
export class SoundService extends AbstractInstrument {
  constructor(public ts: TimerService) {
    super(ts);
  }
  play(freq: number, synthControlIndex: number, velocity: number) {
    if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
      let oscillator = this.ts.audioContext.createOscillator();
      let { biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain } = this.declareVariables();
      this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].waveSelected, oscillator);
      this.procedure(synthControlIndex, biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain, velocity);
      oscillator.connect(biquadFilter);
      oscillator.start();
      oscillator.frequency.setValueAtTime(freq, ct);
      oscillator.frequency.linearRampToValueAtTime
        (freq + this.getAllSynthControl()[synthControlIndex].pitchEnvelope.frequency, ct +//
          this.getAllSynthControl()[synthControlIndex].pitchEnvelope.end);
      oscillator.stop(//
        ct + this.getAllSynthControl()[synthControlIndex].adsr.attack + //
        this.getAllSynthControl()[synthControlIndex].adsr.decay +//
        this.getAllSynthControl()[synthControlIndex].adsr.sustain + //
        this.getAllSynthControl()[synthControlIndex].adsr.release);
    }
  }
}