import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-stereo-panner',
  templateUrl: './stereo-panner.component.html',
  styleUrls: ['./stereo-panner.component.scss']
})
export class StereoPannerComponent implements OnInit {

  pan: number = 0;
  stereoPannerNode: StereoPannerNode;
  isStarted: any;

  constructor(public myTimer: TimerService) {
    this.stereoPannerNode = this.myTimer.audioContext.createStereoPanner();
 }
  ngOnInit() {

  }
  play(veloPan: number): void {
    //TODO
    if (!this.isStarted) {
      this.isStarted = true;
    }
    this.stereoPannerNode.pan.setValueAtTime(this.pan+veloPan, this.myTimer.audioContext.currentTime);
  }
  changePan() {
    this.stereoPannerNode.pan.setValueAtTime(this.pan, this.myTimer.audioContext.currentTime);
  }

  connectToAudioParam(ap: AudioParam) {
    this.stereoPannerNode.connect(ap);
  }

  connectToAudioNode(an: AudioNode) {
    this.stereoPannerNode.connect(an);
  }

}
