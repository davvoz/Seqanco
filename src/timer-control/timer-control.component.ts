import { Component, OnInit } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-timer-control',
  templateUrl: './timer-control.component.html',
  styleUrls: ['./timer-control.component.scss']
})
export class TimerControlComponent implements OnInit {

  speed!: number;
  constructor(public myTimer: TimerService) { }

  ngOnInit() {
    this.myTimer.speed=120;
  }

}
