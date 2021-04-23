export class Loopper {

    static onChange(start: number, end: number, ctx: CanvasRenderingContext2D): void {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = '#00d600';
        ctx.strokeRect(start, 1, end, 1);
    }
}
