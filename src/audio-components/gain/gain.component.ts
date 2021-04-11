import { AfterViewInit, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { AdsrComponent } from '../../adsr/adsr.component';
import { Adsr } from '../../interfaces/interfaces';
import { TimerService } from '../../services/timer.service';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-gain',
  templateUrl: './gain.component.html',
  styleUrls: ['./gain.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GainComponent implements AfterViewInit {
  gain: number = 0.5;
  gainNode!: GainNode;
  isStarted: any;
  @Input()
  nome!: string;
  @Input()
  envelope!: boolean;
  @ViewChild(AdsrComponent, { static: false })
  adsr!: AdsrComponent;
  @ViewChild('divHello', { static: false })
  divHello!: ElementRef;
  
  adsrVolume: Adsr = { attack: 0, decay: 0.5, sustain: 0.0, sustainVal: 0.5, release: 0.0 };
  gainAdsr!: GainNode;
  htmlToAdd!: string;
  valore: any = 0;

  constructor(public myTimer: TimerService, public renderer: Renderer2) {

  }
  ngAfterViewInit(): void {
    this.gainNode = this.myTimer.audioContext.createGain();
    this.gainAdsr = this.myTimer.audioContext.createGain();
   
  }

  ngOnInit() {}

  fonzion(knob: any, value: any) {
    return value;
  }
  onChangeMaster($event: number) {
    this.gainNode.gain.setValueAtTime($event / 100, this.myTimer.audioContext.currentTime);
  }
  changed($event: any) {
  }

  changeFromListener(value: number) {
    if (typeof this.gainNode !== 'undefined' && typeof this.gainNode.gain !== 'undefined') {
      this.gainNode.gain.setValueAtTime(value / 100, this.myTimer.audioContext.currentTime);
    }
  }
  changeAdsr(adsr: Adsr) {
    this.adsrVolume = adsr;
  }
  play(veloGain: number): void {
    if (!this.isStarted) {
      this.isStarted = true;
    }
    this.gainNode.gain.setValueAtTime(this.gain * veloGain, this.myTimer.audioContext.currentTime);
    this.setAdsr(this.gainAdsr.gain, this.adsrVolume, this.myTimer.audioContext.currentTime);
  }
  changeGain() {
    this.gainNode.gain.setValueAtTime(this.gain, this.myTimer.audioContext.currentTime);
  }

  connectToAudioParam(ap: AudioParam) {
    this.gainNode.connect(ap);
  }

  connectToAudioNode(an: AudioNode) {
    //an.connect(this.gainAdsr);
    this.gainAdsr.connect(this.gainNode);
    this.gainNode.connect(an);
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

 

}
