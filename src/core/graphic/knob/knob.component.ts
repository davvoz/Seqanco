import { AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jqxKnobComponent } from 'jqwidgets-ng/jqxknob';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
    selector: 'app-knob',
    templateUrl: './knob.component.html',
    styleUrls: ['./knob.component.scss']
})
export class KnobComponent implements OnInit, AfterViewInit {
    @Output() valore = new EventEmitter<number>();
    @Input() isCollapsed = true;
    @ViewChild('myNumberInput')
    myNumberInput!: jqxNumberInputComponent;
    @ViewChild("myKnob", { static: false })
    myKnob!: jqxKnobComponent;
    @Input()height: number = 250;
    @Input()width: number = 250;
    @Input()valoreIn:number=0;
    @Input()min:number=0;
    @Input()max:number=100;
    label :number=0;
    constructor() { }

    ngOnInit() {}
    
    ngAfterViewInit(): void { }

    
    progressBar: any =
    {
        style: { fill: '#00a4e1', stroke: 'grey' },
        size: '9%',
        offset: '60%',
        background: { fill: 'grey', stroke: 'grey' }
    };
    marks:any ={
        colorRemaining: { color: 'grey', border: 'grey' },
        colorProgress: { color: '#00a4e1', border: '#00a4e1' },
        type: 'line',
        offset: '71%',
        thickness: 3,
        size: '6%',
        majorSize: '9%',
        majorInterval: 10,
        minorInterval: 2
    };
    labels:any= {
        offset: '88%',
        step: 10,
        visible: false
    };
    pointer: any =
    { type: 'arrow', style: { fill: '#00a4e1', stroke: 'none' }, size: '59%', offset: '1%', thickness: 10 };

    dial: any =
    {
        style: {
            fill: '#fff'
        },
        innerRadius: '68%',
        outerRadius: '92%',
        startAngle: 0,
        endAngle: 360
    };
    onChange(event: any): void {
        if (event.args.changeSource == 'propertyChange' || event.args.changeSource == 'val') { return; }
        this.myNumberInput.val(event.args.value);
        this.label = event.args.value;
        this.valore.emit(event.args.value);
    }
    onMouseDown(event: any): void {
        event.stopPropagation();
    }
    onKeyup(): void {
        let val = this.myNumberInput.val();
        this.label = val;
        this.myKnob.val(val);
        this.valore.emit(val);
    }
    onValueChanged(): void {
        let val = this.myNumberInput.val();
        this.label = val;
        this.myKnob.val(val);
        this.valore.emit(val);
    }

}
