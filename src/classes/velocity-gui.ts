import { forwardRef } from '@angular/core';
import { Coordinates } from '../interfaces/interfaces';
export class VelocityGui {
    par: Coordinates;
    collisions: number;
    ctxGui: CanvasRenderingContext2D;
    lato;


    constructor(x: number, y: number, ctxGui: CanvasRenderingContext2D, par: Coordinates, collisions: number, color: string, lato: number) {
        this.par = par;
        this.collisions = collisions;
        this.ctxGui = ctxGui;
        this.lato = lato;
    }

    public setCollisions(value: number) {
        this.collisions = value;
    }
    draw() {
        this.ctxGui.rect(0, 0, this.ctxGui.canvas.width, this.ctxGui.canvas.height);
        this.ctxGui.fillStyle = 'white';
        this.ctxGui.fill();

    }
    private randomColorString(): string {
        return (
            this.getRandomInt(255, 0) +
            "," +
            this.getRandomInt(255, 0) +
            "," +
            this.getRandomInt(255, 0)
        );
    }
    private getRandomInt(maxValue: number, minValue: number) {
        return Math.floor(Math.random() * (maxValue - 0)) + minValue;
    }
    drawVertLine(coo: Coordinates, isgrey: boolean) {
        let colorePrincipale = isgrey ? 'grey' : 'white';
        this.ctxGui.strokeStyle = "white";
        this.ctxGui.beginPath();
        this.ctxGui.fillStyle = colorePrincipale;
        this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato, coo.y * this.lato + this.lato);
        this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato, this.lato, coo.y * this.lato + this.lato);
        this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato * 2, this.lato, coo.y * this.lato + this.lato);
        this.ctxGui.stroke();
    }

    cancelVertLine(coo: Coordinates) {
        switch(coo.y){
            case 0:
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato, this.lato );
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato, this.lato, this.lato );
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato * 2, this.lato,  this.lato );
                this.ctxGui.fill();
                this.ctxGui.stroke();    
            break;
            case 1:
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato,  this.lato );//mezzo
                this.ctxGui.fillStyle = 'white';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato - this.lato, this.lato,  this.lato );//alto
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato *2, this.lato, this.lato );
                this.ctxGui.fill();
                this.ctxGui.stroke();      
            break;    
            case 2:
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato,  this.lato );
                this.ctxGui.fillStyle = 'white';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato - this.lato, this.lato,  this.lato );
                this.ctxGui.fillStyle = 'white';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato - this.lato * 2, this.lato, this.lato );
                this.ctxGui.fill();
                this.ctxGui.stroke();        
            break;

        }
    }
}
