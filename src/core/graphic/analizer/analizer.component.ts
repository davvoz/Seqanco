import { ChangeDetectionStrategy, AfterViewInit, Component, ElementRef, Input,  ViewChild } from '@angular/core';
import { fromWorker } from 'observable-webworker';
import {  of } from 'rxjs';
import { TimerService } from 'src/services/timer.service';


@Component({
  selector: 'app-analizer',
  templateUrl: './analizer.component.html',
  styleUrls: ['./analizer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AnalizerComponent implements AfterViewInit {
  offscreen: any;
  htmlCanvas: any;
  analyser: any;
  data: any;
  @Input() pianoRollDimensionIn: number = 0;
  @Input() audioIn!: AudioNode;


  @ViewChild("canvas", { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;

  constructor(public myTimer: TimerService) {
    

    const input$ = of('dioporco');
    fromWorker<String, string>(() => new Worker('./hello.worker', { type: 'module' }), input$).subscribe(message => {
      console.log(message); // Outputs 'Hello from webworker'
    });
  }

  ngAfterViewInit(): void {
  }

  getExternalDimension() {
    return this.pianoRollDimensionIn;
  }
}
