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
  adsr!: Adsr;
  constructor() { }
  ngAfterViewInit(): void {
  }
  changed() {
    this.adsrEmitter.emit(this.adsr)
  }

}
