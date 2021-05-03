import { SyntControl, Playable, Adsr, PithEnvelope } from "../interfaces/interfaces";

export class AbstractMonoosc implements SyntControl, Playable {

    private allSynthControl: SyntControl[] = [];
    isMuted: number = 0;
    gain: number = 0;
    waveSelected: string = "";
    filterSelected: string = "";
    adsr: Adsr = { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 }
    adsrP: Adsr = { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 }
    filterCutoff: number = 0;
    filterReso: number = 0;
    lfoWaveSelected: string = "";
    lfoAmplitude: number = 0;
    lfoRate: number = 0;
    libIndex: number = 0;
    duration: number = 0;
    type: string = "";
    pitchEnvelope: PithEnvelope = { frequency: 0, end: 0 };
    velocity: number = 0;
    isDistorted:boolean=false;
    adsrPitch!: Adsr;
    private allParams: SyntControl = {
        adsrPitch: this.adsrP,
        isMuted: 0,
        gain: this.gain,
        adsr: this.adsr,
        waveSelected: this.waveSelected,
        filterSelected: this.filterSelected,
        filterCutoff: this.filterCutoff,
        filterReso: this.filterReso,
        lfoWaveSelected: this.lfoWaveSelected,
        lfoAmplitude: this.filterReso,
        lfoRate: this.lfoRate,
        libIndex: 0,
        duration: 1,
        type: 'SAMPLER',
        pitchEnvelope: this.pitchEnvelope,
        isDistorted:this.isDistorted
    };

    constructor(public audioContext: BaseAudioContext) { }
   

    play(freq: number, synthControlIndex: number, velocity: number): void {
        throw new Error("Method not implemented. I'm abstract!");
    }
    getAllSynthControl() {
        return this.allSynthControl;
    }
    setAllSynthControl(allSynthControl: SyntControl[]) {
        this.allSynthControl = allSynthControl;
    }
    addSynthControl(synthControl: SyntControl) {
        this.allSynthControl.push(synthControl);
    }
    getParams(): SyntControl {
        return this.allParams;
    }
    setParams(params: SyntControl, index: number): void {
        this.allSynthControl[index] = params;
    }
    public castFilterWave(synthControlIndex: number, biquadFilter: BiquadFilterNode) {
        switch (this.getAllSynthControl()[synthControlIndex].filterSelected) {
            case 'lowpass': biquadFilter.type = 'lowpass'; break;
            case 'highpass': biquadFilter.type = 'highpass'; break;
            case 'bandpass': biquadFilter.type = 'bandpass'; break;
            case 'lowshelf': biquadFilter.type = 'lowshelf'; break;
            case 'peaking': biquadFilter.type = 'peaking'; break;
            case 'notch': biquadFilter.type = 'notch'; break;
            case 'allpass': biquadFilter.type = 'allpass'; break;
        }
    }
    public inizializzaAdsr(synthControlIndex: number): void {
        this.allSynthControl[synthControlIndex].adsr.attack = parseFloat(this.allSynthControl[synthControlIndex].adsr.attack + '');
        this.allSynthControl[synthControlIndex].adsr.decay = parseFloat(this.allSynthControl[synthControlIndex].adsr.decay + '');
        this.allSynthControl[synthControlIndex].adsr.sustain = parseFloat(this.allSynthControl[synthControlIndex].adsr.sustain + '');
        this.allSynthControl[synthControlIndex].adsr.sustainVal = parseFloat(this.allSynthControl[synthControlIndex].adsr.sustainVal + '');
        this.allSynthControl[synthControlIndex].adsr.release = parseFloat(this.allSynthControl[synthControlIndex].adsr.release + '');
    }
    public setAdsr(param: AudioParam, adsr: Adsr, ct: number) {

         param.cancelScheduledValues(ct);

        param.setValueAtTime(0, ct);

        param.linearRampToValueAtTime(1, ct + adsr.attack);

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

    public initializeVariables(gainNode: GainNode, synthControlIndex: number, ct: number, biquadFilter: BiquadFilterNode, volume: GainNode) {
        gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, ct);
        biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, ct);
        biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, ct);
        volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, ct);
    }
    public setLfo(lfoOsc: OscillatorNode, synthControlIndex: number, ct: number, lfoGain: GainNode, biquadFilter: BiquadFilterNode) {
        this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, lfoOsc);
        lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, ct);
        lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, ct);

        lfoOsc.start();
        lfoOsc.stop(//
            ct + this.getAllSynthControl()[synthControlIndex].adsr.attack //
            + this.getAllSynthControl()[synthControlIndex].adsr.decay +//
            this.getAllSynthControl()[synthControlIndex].adsr.sustain +//
            this.getAllSynthControl()[synthControlIndex].adsr.release);
    }
    public castOscWaveform(waveform: String, osc: OscillatorNode) {
        switch (waveform) {
            case 'square': osc.type = 'square'; break;
            case 'sine': osc.type = 'sine'; break;
            case 'sawtooth': osc.type = 'sawtooth'; break;
            case 'triangle': osc.type = 'triangle'; break;
        }
    }
    public connection(biquadFilter: BiquadFilterNode, gainNode: GainNode, volume: GainNode, lfoGain: GainNode, lfoOsc: OscillatorNode, velocity: number) {
        let volumeVelo = this.audioContext.createGain();

        volumeVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
        lfoOsc.connect(lfoGain);
        lfoGain.connect(biquadFilter.frequency);
        biquadFilter.connect(volumeVelo);
        volumeVelo.connect(gainNode);
        gainNode.connect(volume);
        // volume.connect(this.ts.merger, 0, 0);
        // volume.connect(this.ts.merger, 0, 1);
    }
    public procedure(synthControlIndex: number, biquadFilter: BiquadFilterNode, gainNode: GainNode, ct: number, volume: GainNode, lfoOsc: OscillatorNode, lfoGain: GainNode, velocity: number) {
        this.initializeVariables(gainNode, synthControlIndex, ct, biquadFilter, volume);
        this.inizializzaAdsr(synthControlIndex);
        this.castFilterWave(synthControlIndex, biquadFilter);
        this.setLfo(lfoOsc, synthControlIndex, ct, lfoGain, biquadFilter);
        //this.setAdsr(gainNode, synthControlIndex, ct);
        this.connection(biquadFilter, gainNode, volume, lfoGain, lfoOsc, velocity);
    }
    public declareVariables() {
        let ct = this.audioContext.currentTime;
        let gainNode = this.audioContext.createGain();
        let biquadFilter = this.audioContext.createBiquadFilter();
        let volume = this.audioContext.createGain();
        let lfoOsc = this.audioContext.createOscillator();
        let lfoGain = this.audioContext.createGain();
        return { biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain };
    }
}
