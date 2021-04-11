import { Square } from '../classes/square';

export type Binary = '0 | 1';
export interface RadioBtn {
  name: String;
  freqSelected: number;
  isPlay: boolean;
}
export interface Adsr {
  attack: number;
  decay: number;
  sustain: number;
  sustainVal: number;
  release: number;
}
export interface Step {
  sustain: number;
  gain: number;
  type: string;
  frequency: number;
  detune: number;
  play: boolean;
}
export interface StepSampler {
  gain: number;
  samplePath: string;
  sampleTune: number;
  filterFrequency: number;
  filterGain: number;
  play: boolean;
  duration: number;
}
export interface PresetSampler {
  titolo: string;
  note: StepSampler[];
}
export interface Preset {
  titolo: string;
  note: Step[];
}
export declare type TOStepSequencerComponentType = 'oscillator' | 'sampler';

export interface TickResponse {
  traksAreOn: boolean[];
  timePosition: number;
  isStarted: boolean;
  audioContextTime: number;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface Drowable {
  draw(): void;
  erase(): void;
}
export interface Collision {
  esito: boolean;
  indice: number;
}

export type Orientation = 'VERTICALE|ORIZZONTALE';
export type Freq = [110.00, 116.54, 123.47, 130.81, 138.59, 146.83, 155.56, 164.81, 174.61, 185.00, 196.00, 207.65];
export interface GeneralSound {
  play(whatYouWantToPlay: any): void;
}
export interface SyntControl {
  isMuted: number;
  gain: number;
  adsr: Adsr;
  adsrPitch: Adsr;
  waveSelected: string;
  filterSelected: string;
  filterCutoff: number;
  filterReso: number;
  lfoWaveSelected: string;
  lfoAmplitude: number;
  lfoRate: number;
  libIndex: number;
  duration: number;
  type: string;
  pitchEnvelope: PithEnvelope;
  isDistorted:boolean;
}

export interface Instrument {
  name: string;
  type: string;
  params: any[];
  index: number;
  pianoRollDimension: number;
  isCollapsed: boolean;
  clipPlaying:number;
  clips:Clip[];
  isMuted:boolean;
}

export interface PithEnvelope {
  frequency: number;
  end: number;
}

export interface Playable {
  play(freq: number, synthControlIndex: number, velocity: number): void;
}
export interface Nota {
  notaDaSuonare: number;
  velocity: number;
}
export interface DialogDataNewTrack {
  name: string;
  type: string;
  pianoRollDimension: number;
  instrument: Instrument;
}



export interface Clip{
  index:number,
  isActive:boolean;
  color:string;
  trakNumber:number;
  fakeMode:boolean;
}
export interface AudioWorkletProcessor {
  readonly port: MessagePort;
  process(
    inputs: Float32Array[][],
    outputs: Float32Array[][],
    parameters: Record<string, Float32Array>
  ): boolean;
}

declare var AudioWorkletProcessor: {
  prototype: AudioWorkletProcessor;
  new (options?: any): AudioWorkletProcessor;
};

