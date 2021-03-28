import { Injectable } from '@angular/core';
import { AbstractInstrument } from '../classes/abstract-instrument';
import { TimerService } from './timer.service';

@Injectable({
  providedIn: 'root'
})
export class MonoOscService extends AbstractInstrument {

  gainVelo: GainNode;
  gainNode: GainNode;
  osc: OscillatorNode;
  biquadFilter:BiquadFilterNode;
  volume: GainNode;
  lfoOsc: OscillatorNode;
  lfoGain: GainNode;
  lista:any[];

  constructor(public ts: TimerService) {
    super(ts);

    this.born();
  }
  play(freq: number, synthControlIndex: number, velocity: number): void {
    this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, this.lfoOsc);
    this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].waveSelected, this.osc);
    this.setAdsr(this.gainNode, synthControlIndex, this.ts.audioContext.currentTime);
    
    this.osc.frequency.setValueAtTime(freq, this.ts.audioContext.currentTime);
    this.volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.ts.audioContext.currentTime);  
    this.gainVelo.gain.setValueAtTime(velocity, this.ts.audioContext.currentTime);      
    this.lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, this.ts.audioContext.currentTime);
    this.lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, this.ts.audioContext.currentTime);
    this.gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.ts.audioContext.currentTime);
    this.biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, this.ts.audioContext.currentTime);
    this.biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, this.ts.audioContext.currentTime);

  }

  born() {
    this.gainNode = this.ts.audioContext.createGain();
    this.osc = this.ts.audioContext.createOscillator();
    this.gainVelo = this.ts.audioContext.createGain();
    this.biquadFilter = this.ts.audioContext.createBiquadFilter();
    this.lfoOsc = this.ts.audioContext.createOscillator();
    this.lfoGain = this.ts.audioContext.createGain();
    this.volume =  this.ts.audioContext.createGain();

    this.osc.connect(this.biquadFilter);
    this.lfoOsc.connect(this.lfoGain);
    this.lfoGain.connect(this.biquadFilter.frequency);
    this.biquadFilter.connect(this.gainVelo);
    this.gainVelo.connect(this.gainNode);
    this.gainNode.connect(this.volume);
    this.volume.connect(this.ts.merger, 0, 0);
    this.volume.connect(this.ts.merger, 0, 1);

    this.osc.start();
    this.lfoOsc.start();
    this.gainNode.gain.setValueAtTime(0, this.ts.audioContext.currentTime);

  }
  kill() {
    this.osc.stop();
  }
}
