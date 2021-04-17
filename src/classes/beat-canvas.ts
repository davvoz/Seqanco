export class BeatCanvas {


    constructor( public ctx: CanvasRenderingContext2D, public lato:number) { 
        
    }

    draw() {
        const margin = this.lato / 5;
        for (let y = 0; y < this.ctx.canvas.height /4; y = y + this.lato) {
            for (let x = 0; x < this.ctx.canvas.width; x = x + this.lato) {
                
                this.ctx.strokeRect(x-margin/2,y ,this.lato-margin,this.lato-margin);
               
            }
        }
    }
    onChange(start: number, end: number) {
       
    }
}
