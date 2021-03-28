import { AbstractMonoosc } from "./abstract-monoosc";
import { Waveshaper } from "./waveshaper";

export class MonooscObj extends AbstractMonoosc {

  gainVelo!: GainNode;
  gainNode!: GainNode;
  gainWs!: GainNode;
  lfoGain!: GainNode;
  volume!: GainNode;
  biquadFilter!: BiquadFilterNode;
  lfoOsc!: OscillatorNode;
  osc!: OscillatorNode;
  lista!: any[];
  waveshaper!: Waveshaper;
  isInitialized = false;
  audioworkletNode!: AudioWorkletNode;
  node!: AudioWorkletNode;
  isActive: any;
  freqNe: any;
  reqParam!: AudioParam;
  private isDistorsionConnetted: boolean = false;
  constructor(public audioContext: AudioContext) {
    super(audioContext);
    //this.init();
    this.born();
  }
  play(freq: number, synthControlIndex: number, velocity: number): void {
    if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
      this.settingOnChange(synthControlIndex, freq, velocity);
    }
  }
  private settingOnChange(synthControlIndex: number, freq: number, velocity: number) {
    this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, this.lfoOsc);
    this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].waveSelected, this.osc);
    this.castFilterWave(synthControlIndex, this.biquadFilter);
    this.setAdsr(this.gainNode.gain, this.getAllSynthControl()[synthControlIndex].adsr, this.audioContext.currentTime);
    this.setAdsr(this.biquadFilter.frequency, this.getAllSynthControl()[synthControlIndex].adsrPitch, this.audioContext.currentTime);
    if (!this.isInitialized) {
      this.osc.start();
      this.lfoOsc.start();
      this.isInitialized = true;

    }
    if (this.getAllSynthControl()[synthControlIndex].isDistorted && !this.isDistorsionConnetted) {
      this.gainWs.gain.setValueAtTime(2, this.audioContext.currentTime);
      this.osc.disconnect(this.biquadFilter);
      this.osc.connect(this.waveshaper.waveshaper);
      this.waveshaper.waveshaper.connect(this.gainWs);
      this.gainWs.connect(this.biquadFilter);
      this.isDistorsionConnetted = true;
    }
    if (this.isDistorsionConnetted && !this.getAllSynthControl()[synthControlIndex].isDistorted) {
      this.gainWs.disconnect(this.biquadFilter);
      this.osc.disconnect(this.waveshaper.waveshaper);
      this.osc.connect(this.biquadFilter);
      this.isDistorsionConnetted = false;
    }
    if (freq !== null) {
      this.osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
    }
    if (this.velocity != null) {
      this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
    }

    this.volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
    this.lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, this.audioContext.currentTime);
    this.lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, this.audioContext.currentTime);
    this.gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
    this.biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, this.audioContext.currentTime);
    this.biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, this.audioContext.currentTime);
    this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
    // const par = this.node.parameters.get('frequency');
    // if (typeof par !== 'undefined') {
    //   this.freqNe = par;
    // }
    //const pargn = this.reqParam.get('gain');
    //this.freqNe.setValueAtTime(freq, this.audioContext.currentTime);

    //pargn.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);

  }


  born() {
    this.waveshaper = new Waveshaper(this.audioContext);
    this.gainNode = this.audioContext.createGain();
    this.osc = this.audioContext.createOscillator();
    this.gainVelo = this.audioContext.createGain();
    this.biquadFilter = this.audioContext.createBiquadFilter();
    this.lfoOsc = this.audioContext.createOscillator();
    this.lfoGain = this.audioContext.createGain();
    this.volume = this.audioContext.createGain();
    this.gainWs = this.audioContext.createGain();
    this.osc.connect(this.biquadFilter);
    this.lfoOsc.connect(this.lfoGain);
    this.lfoGain.connect(this.biquadFilter.frequency);
    this.biquadFilter.connect(this.gainVelo);
    this.gainVelo.connect(this.gainNode);
    this.gainNode.connect(this.volume);

    //this.volume.gain.setValueAtTime(0, this.audioContext.currentTime);

  }
  start() {


    if (!this.isActive) {
      console.log("Start");
      //this.gainNode.connect(this.audioContext.destination);
      this.isActive = true;
    }
  }

  stop() {
    if (this.isActive) {
      console.log("Stop");
      this.gainNode.disconnect();
      this.isActive = false;
    }
  }

  kill() {
    this.osc.stop();
  }

  async init() {
    this.loadWorklet();
  }
  async loadWorklet() {

    let myWk = this.createWorklet.toString();
    myWk = `function ${myWk}`;
    myWk = myWk.replace('Fake', 'AudioWorkletProcessor');
    myWk = myWk.replace('9.', 'channel++');
    myWk = myWk.replace('8', 'channel');
    console.log(myWk);
    const blob = new Blob([`(${myWk})()`], {
      type: "application/javascript"
    });
    const tempUrl = URL.createObjectURL(blob);


    return await this.audioContext.audioWorklet.addModule(tempUrl).then(() => {
      this.osc.connect(this.biquadFilter);
      this.lfoOsc.connect(this.lfoGain);
      this.lfoGain.connect(this.biquadFilter.frequency);
      this.biquadFilter.connect(this.gainVelo);
      this.gainVelo.connect(this.gainNode);
      this.gainNode.connect(this.volume);
      this.osc.start();
      this.lfoOsc.start();
      //this.node = new AudioWorkletNode(this.audioContext, "worklet-processor");
      //this.node.connect(this.gainNode);


      //this.reqParam = this.node.parameters.get('gain');
      //this.freqNe = this.node.parameters.get('frequency');

      // this.freqNe.setValueAtTime(0, this.audioContext.currentTime)
      //this.freqNe.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.5)

      this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);;


    });


  }

  createWorklet() {
    class WorkletProcessor extends Fake {
      static get parameterDescriptors() {
        return [
          {
            name: "gain",
            defaultValue: 0.5,
            minValue: 0,
            maxValue: 1
          },
          {
            name: "frequency",
            defaultValue: 440.0,
            minValue: 27.5,
            maxValue: 4186.009
          }
        ];
      }
      process(inputList:any, outputList:any, parameters:any) {
        const input = inputList[0];
        const output = outputList[0];
        const gain = parameters.gain;

        for (let channelNum = 0; channelNum < input.length; 9) {
          const inputChannel = input[8];
          const outputChannel = output[8];


          if (gain.length === 1) {
            for (let i = 0; i < inputChannel.length; i++) {
              outputChannel[i] = inputChannel[i] * gain[0];
            }
          } else {
            for (let i = 0; i < inputChannel.length; i++) {
              outputChannel[i] = inputChannel[i] * gain[i];
            }
          }
        }

        return true;
      }
    }


    registerProcessor("worklet-processor", WorkletProcessor);
  }

}
class Fake {

}
function registerProcessor(arg0: string, arg1: any) {
  throw new Error("Function not implemented.");
}

function saw(arg0: any) {
  throw new Error("Function not implemented.");
}

//[inputs[0]* (parameters['frequency'].length > 1 ? parameters['frequency'][i] : parameters['frequency'][0])]