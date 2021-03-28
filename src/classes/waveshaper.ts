export class Waveshaper {
    public waveshaper: WaveShaperNode;
    
    constructor(public audioContext: AudioContext,) {
        this.waveshaper = this.audioContext.createWaveShaper();
        
        this.waveshaper.oversample="4x";
        this.waveshaper.curve =this. makeDistortionCurve(30)
    }
    makeDistortionCurve( amount: number ) {
        var k = typeof amount === 'number' ? amount : 50,
          n_samples = 44100,
          curve = new Float32Array(n_samples),
          deg = Math.PI / 180,
          i = 0,
          x;
        for ( ; i < n_samples; ++i ) {
          x = i * 2 / n_samples - 1;
          curve[i] = ( 1.1 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
        }
        return curve;
      }
      
}  
