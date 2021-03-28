import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import FrequencyVisualizer from '../classes/frequency-visualizer';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-analizer',
  templateUrl: './analizer.component.html',
  styleUrls: ['./analizer.component.scss']
})
export class AnalizerComponent implements AfterViewInit {
  @ViewChild("canvas", { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  private ctxGui: CanvasRenderingContext2D;
  @Input() connectHere: AudioNode;
  visualizer: FrequencyVisualizer;
  constructor(public myTimer: TimerService) { }

  ngAfterViewInit(): void {
    this.ctxGui = this.canvas.nativeElement.getContext("2d");
    this.visualizer = new FrequencyVisualizer({
      audioContext: this.myTimer.audioContext,
      canvasElement: this.ctxGui,
      averaging: false,
      minDb: -85,
      maxDb: -35,
      fftSize:512,
      strokeColor: "black",
      fillColor: "white"
    });
    this. visualizer.acceptConnection(this.connectHere);
    this. visualizer.start();
  }
  
}
