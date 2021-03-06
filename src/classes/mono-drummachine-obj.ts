import { SamplesLibraryService } from "../services/samples-library.service";
import { AbstractMonoosc } from "./abstract-monoosc";

export class MonoDrummachineObj extends AbstractMonoosc {

  gainVelo!: GainNode;
  gainNode!: GainNode
  biquadFilter!: BiquadFilterNode;
  volume!: GainNode;
  lfoOsc!: OscillatorNode;
  lfoGain!: GainNode;
  lista: any[]=[];
  constructor(public audioContext: BaseAudioContext, private library: SamplesLibraryService) {
    super(audioContext);
    this.born();
  }
  play(freq: number, synthControlIndex: number, velocity: number): void {
    if (typeof this.getAllSynthControl()[synthControlIndex] === 'undefined') {
      this.getAllSynthControl()[synthControlIndex] = {
        isMuted: 0,
        gain: 0.5,
        adsr: this.adsr,
        waveSelected: this.waveSelected,
        filterSelected: this.filterSelected,
        filterCutoff: 0,
        filterReso: 0,
        lfoWaveSelected: 'sine',
        lfoAmplitude: 0,
        lfoRate: 0,
        libIndex: 0,
        duration: 0,
        type: '',
        adsrPitch: this.adsrP,
        pitchEnvelope: { frequency: 0, end: 0 },
        isDistorted: false
      }
    }
    if (typeof this.getAllSynthControl()[synthControlIndex] !== 'undefined') {
      if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
        this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, this.lfoOsc);
        this.castFilterWave(synthControlIndex, this.biquadFilter);
        
        this.volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
        this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
        this.lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, this.audioContext.currentTime);
        this.lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, this.audioContext.currentTime);
        this.gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
        this.biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, this.audioContext.currentTime);
        this.biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, this.audioContext.currentTime);
        
        let source = this.audioContext.createBufferSource();
        this.setAdsr(this.gainNode.gain, this.getAllSynthControl()[synthControlIndex].adsr, this.audioContext.currentTime);
        
        source.connect(this.biquadFilter);
        source.buffer = this.library.buffers[freq];
        source.start(this.audioContext.currentTime);
      }
    }
  }

  born() {
    this.gainNode = this.audioContext.createGain();
    this.gainVelo = this.audioContext.createGain();
    this.biquadFilter = this.audioContext.createBiquadFilter();
    this.lfoOsc = this.audioContext.createOscillator();
    this.lfoGain = this.audioContext.createGain();
    this.volume = this.audioContext.createGain();
    this.lfoOsc.connect(this.lfoGain);
    this.lfoGain.connect(this.biquadFilter.frequency);
    this.biquadFilter.connect(this.gainVelo);
    this.gainVelo.connect(this.gainNode);
    this.gainNode.connect(this.volume);
    this.lfoOsc.start();
    this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);

  }
  kill() {
    this.lfoOsc.disconnect();
    this.lfoGain.disconnect();
    this.biquadFilter.disconnect();
    this.gainVelo.disconnect();
    this.gainNode.disconnect();
  }
}
