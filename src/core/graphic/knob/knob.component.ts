import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;
@Component({
    selector: 'app-knob',
    templateUrl: './knob.component.html',
    styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit ,AfterViewInit{
    @ViewChild("myknob1", { static: false })
    myknob1!: ElementRef<HTMLCanvasElement>;
    
    constructor() { }

    ngOnInit() {
       
    }
    ngAfterViewInit(): void {
       
    }
    draw(){
        
    }
    
}
