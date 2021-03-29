import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Adsr, SyntControl } from '../interfaces/interfaces';

@Component({
  selector: 'app-adsr',
  templateUrl: './adsr.component.html',
  styleUrls: ['./adsr.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsrComponent implements AfterViewInit {
  @Output() adsrEmitter = new EventEmitter<Adsr>();
  @Input()
  slave!: string;
  @Input()
  adsr: Adsr = { attack: 0.1, decay: 0.3, sustain: 0.3, sustainVal: 0.3, release: 0.3 };
  constructor() { }
  ngAfterViewInit(): void {
  }

  changedZ($event: number, type: string) {
    console.log($event, type);
    switch (type) {
      case 'A':
        this.adsr.attack = $event /100;
        this.adsrEmitter.emit(this.adsr);
        break;
      case 'D':
        this.adsr.decay = $event/100;
        this.adsrEmitter.emit(this.adsr);
        break;
      case 'S':
        this.adsr.sustain = $event/100;
        this.adsrEmitter.emit(this.adsr);
        break;
      case 'SV':
        this.adsr.sustainVal = $event;
        this.adsrEmitter.emit(this.adsr);
        break;
      case 'R':
        this.adsr.release = $event/100;
        this.adsrEmitter.emit(this.adsr);
        break;
    }

  }
}
