import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autopan',
  templateUrl: './autopan.component.html',
  styleUrls: ['./autopan.component.scss']
})
export class AutopanComponent implements OnInit {
  a!: OscillatorNode;
  constructor() { 
   
  }

  ngOnInit() {
  }

}
