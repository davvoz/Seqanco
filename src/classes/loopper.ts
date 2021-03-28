export class Loopper {


    constructor(public start:number,public end:number,public ctx: CanvasRenderingContext2D,public height:number) {

    }

    drawCornice(){
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = '#00d600';
        this.ctx.strokeRect(this.start,1, this.end, 1);
    }
    onChange(start:number,end:number){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width,  this.ctx.canvas.height);
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#00d600';
        this.ctx.strokeRect(start, 1, end, 1);
        this.ctx.strokeRect(start ,  this.ctx.canvas.height-2, end, 1);
    }
}
