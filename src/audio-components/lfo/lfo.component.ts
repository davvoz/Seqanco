import { Component, Input, OnInit } from '@angular/core';
import { TimerService } from 'src/services/timer.service';

@Component({
  selector: 'app-lfo',
  templateUrl: './lfo.component.html',
  styleUrls: ['./lfo.component.scss']
})
export class LfoComponent implements OnInit {
//Provo a fare un pseudo lfo sfruttando il gain
//e i metodi tipo setValueAtTime per creare una funzione 
//che possa sostituire un oscillatore(generatore di funzioni)
//da cosa è alimentato il gain? dalla frequenza del filtro
//forse non c'è bisongno del gain basta modulare il parametro
  gainOsc = this.myTimer.audioContext.createGain();
  waveforms = ['square', 'sine', 'sawtooth', 'triangle', 'noise'];
  multipler = 2;
  @Input()
  param!: AudioParam;
  @Input() modulationOut: any;

  center = 10000;
  rate = 2;
  tempo = 120;
  shape = 'sine';

  constructor(public myTimer: TimerService) {
    this.tempo = this.myTimer.speed;
  }

  ngOnInit(): void {
    
  }

  tick() {
    this.gainOsc.gain.value = this.center // set oscillation centre value

    this.gainOsc.connect(this.modulationOut);
  }
  changed() {
    
  }

}
