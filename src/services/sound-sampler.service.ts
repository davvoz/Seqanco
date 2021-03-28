import { Injectable } from '@angular/core';
import { AbstractInstrument } from '../classes/abstract-instrument';
import { SamplesLibraryService } from './samples-library.service';
import { TimerService } from './timer.service';


@Injectable({
  providedIn: 'root'
})
export class SoundSamplerService extends AbstractInstrument {
  constructor(public ts: TimerService, private library: SamplesLibraryService) {
    super(ts);
  }
  play(freq: number, synthControlIndex: number,velocity:number): void {
    if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
      let source = this.ts.audioContext.createBufferSource();
      let { biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain } = this.declareVariables();
      this.procedure(synthControlIndex, biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain,velocity);
      source.connect(biquadFilter);
      source.buffer = this.library.buffers[this.getAllSynthControl()[synthControlIndex].libIndex];
      source.playbackRate.setTargetAtTime(freq / 100, ct, 0);
      source.playbackRate.linearRampToValueAtTime
        (freq / 100 + this.getAllSynthControl()[synthControlIndex].pitchEnvelope.frequency, ct +//
          this.getAllSynthControl()[synthControlIndex].pitchEnvelope.end);
      source.start(ct);
      source.stop(ct + this.getAllSynthControl()[synthControlIndex].adsr.attack + //
        this.getAllSynthControl()[synthControlIndex].adsr.decay +//
        this.getAllSynthControl()[synthControlIndex].adsr.sustain + //
        this.getAllSynthControl()[synthControlIndex].adsr.release);
    }
  }
}
