export class Autopan {
    public panner: StereoPannerNode;
    private oscillator: OscillatorNode;
    private gain2: GainNode;
    
    constructor(public audioContext: AudioContext,) {
        this.panner = this.audioContext.createStereoPanner();
        this.oscillator = this.audioContext.createOscillator();
        this.gain2 = this.audioContext.createGain();
        this.oscillator.connect(this.gain2);
        this.gain2.connect(this.panner.pan);
        this.oscillator.start();
    }

    change(rate: number, dryWet: number, contextTime: number) {
        this.gain2.gain.setValueAtTime(dryWet, contextTime);
        this.oscillator.frequency.setValueAtTime(rate, contextTime);
    }
 
}
