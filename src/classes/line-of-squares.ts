import { Square } from './square';
export class LineOfSquares extends Square {
  lunghezza: number;
  orientamento: String;
  squares: Square[];
  lato: number;
  constructor(lato: number, x: number, y: number, color: String, tune: number, lunghezza: number, orientamento: String,indice:number) {
    super(lato, x, y, color, null, tune,indice);
    this.lunghezza = lunghezza;
    this.orientamento = orientamento;
    this.lato = lato;
    this.orientamento = orientamento
    this.squares = [];
  }
  draw() { }

}