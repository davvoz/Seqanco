import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { Adsr } from '../interfaces/interfaces';


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
  constructor(
  ) { }
  ngAfterViewInit(): void {
  }

  changedZ() {
    this.adsrEmitter.emit(this.adsr);

  }
}
