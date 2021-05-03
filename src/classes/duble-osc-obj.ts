import { SyntControl } from "../interfaces/interfaces";
import { AbstractMonoosc } from "./abstract-monoosc";

export class DubleoscObj extends AbstractMonoosc {

    gainVelo!: GainNode;
    gainNode!: GainNode;
    osc!: OscillatorNode;
    osc2!: OscillatorNode;
    biquadFilter!: BiquadFilterNode;
    volume!: GainNode;
    lfoOsc!: OscillatorNode;
    lfoGain!: GainNode;
    lista!: any[];
    nodes!: any[];
    mer1!: ChannelMergerNode;
    gai1!: GainNode;
    gai2!: GainNode;
    constructor(public audioContext: BaseAudioContext) {
        super(audioContext);
        this.born();
    }
    play(freq: number, synthControlIndex: number, velocity: number): void {
        let syntControl : SyntControl =this.getAllSynthControl()[synthControlIndex];
        if (!syntControl.isMuted) {
            this.castOscWaveform(syntControl.lfoWaveSelected, this.lfoOsc);
            this.castOscWaveform(syntControl.waveSelected, this.osc);
            this.castOscWaveform(syntControl.waveSelected, this.osc2);
            this.castFilterWave(synthControlIndex, this.biquadFilter);
            this.setAdsr(this.gainNode.gain, syntControl.adsr, this.audioContext.currentTime);
            // this.setAdsr(this.osc.frequency, syntControl.adsrPitch, this.audioContext.currentTime);
            // this.setAdsr(this.osc2.frequency, syntControl.adsrPitch, this.audioContext.currentTime);
            this.gai2.gain.value = 4;
            this.gai1.gain.value = 6;
            

            this.osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
            this.osc2.frequency.setValueAtTime(freq/syntControl.pitchEnvelope.end, this.audioContext.currentTime);

            this.volume.gain.setValueAtTime(syntControl.gain/10, this.audioContext.currentTime);
            this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
            this.lfoOsc.frequency.setValueAtTime(syntControl.lfoRate, this.audioContext.currentTime);
            this.lfoGain.gain.setValueAtTime(syntControl.lfoAmplitude, this.audioContext.currentTime);
            this.gainNode.gain.setValueAtTime(syntControl.gain, this.audioContext.currentTime);
            this.biquadFilter.frequency.setValueAtTime(syntControl.filterCutoff, this.audioContext.currentTime);
            this.biquadFilter.gain.setValueAtTime(syntControl.filterReso, this.audioContext.currentTime);
            // this.osc2.type = "sawtooth";
            
        }
    }

    born() {
        this.gainNode = this.audioContext.createGain();
        this.lfoGain = this.audioContext.createGain();
        this.volume = this.audioContext.createGain();
        this.gainVelo = this.audioContext.createGain();
        this.gai1 = this.audioContext.createGain();
        this.gai2 = this.audioContext.createGain();
        this.biquadFilter = this.audioContext.createBiquadFilter();
        this.osc = this.audioContext.createOscillator();
        this.lfoOsc = this.audioContext.createOscillator();
        this.osc2 = this.audioContext.createOscillator();

        this.osc.frequency.value = 110;
        this.mer1 = this.audioContext.createChannelMerger();

        this.osc2.connect(this.gai1);
        this.osc.connect(this.gai2);
        this.mer1.connect(this.biquadFilter);
        this.gai1.connect(this.mer1, 0, 1);
        this.gai1.connect(this.mer1);
        this.gai2.connect(this.mer1);
        this.gai2.connect(this.mer1, 0, 1);
        this.lfoOsc.connect(this.lfoGain);
        this.lfoGain.connect(this.biquadFilter.frequency);
        this.biquadFilter.connect(this.gainVelo);
        this.gainVelo.connect(this.gainNode);
        this.gainNode.connect(this.volume);

        this.osc2.start();
        this.osc.start();
        this.lfoOsc.start();
        this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);

    }
    kill() {
        this.osc.stop();
    }

}
