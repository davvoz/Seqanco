import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-start-stop',
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.scss']
})
export class StartStopComponent implements OnInit {

  isPlayed: boolean = false;
  constructor(public myTimer: TimerService) { }

  ngOnInit() {
  }
  public start() {
    this.isPlayed = true;
    this.myTimer.play();
  }

  public stop() {
    this.isPlayed = false;
    this.myTimer.stop()
  }

  public pause() {
    this.isPlayed = false;
    this.myTimer.pause()
  }
  getActiveColor(){
    return  this.myTimer.isPlayed  ? '#00d600':null;
  }

}
