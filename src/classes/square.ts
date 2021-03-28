import { Shape } from './shape';
export class Square extends Shape {
  dimensioneLato: number;
  tune: number;
  indice:number;
  velocity!: number;
  ctx;
  constructor(lato: number, x: number, y: number, color: String, ctx: CanvasRenderingContext2D, tune: number,indice:number) {
    super(x, y, color);
    this.dimensioneLato = lato;
    this.tune = tune;
    this.ctx = ctx;
    this.indice = indice;
  }
  getDimensioneLato(): number {
    return this.dimensioneLato
  }
  setDimensioneLato(dim: number) {
    this.dimensioneLato = dim;
  }
  setIndice(indice: number) {
    this.indice = indice;
  }
  getIndice(): number {
    return this.indice;
  }
  setTune(tune: number) {
    this.tune = tune;
  }
  getTune(): number {
    return this.tune;
  }
  draw() {
    this.ctx.fillStyle = 'rgb(' + this.getColor() + ')';
    this.ctx.fillRect(this.getDimensioneLato() * this.getX(), this.getDimensioneLato() * this.getY() + this.getDimensioneLato(),
      this.getDimensioneLato(), this.getDimensioneLato());
  }
  public erase() {
    this.ctx.clearRect(this.getDimensioneLato() * this.getX(), this.getDimensioneLato() * this.getY() + this.getDimensioneLato(),
      this.getDimensioneLato(), this.getDimensioneLato());
  }
}