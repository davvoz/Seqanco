
export class Octave {
  a: any;
  b: any;;
  aSharp: any;;
  gSharp: any;;
  g: any;;
  fSharp: any;;
  f: any;;
  e: any;;
  dSharp: any;;
  d: any;;
  cSharp: any;;
  c: any;;
  array :number[]= [];
  constructor(a: number) {
    this.b = a * Math.pow(2, 2 / 12);

    this.aSharp = a * Math.pow(2, 1 / 12);

    this.a = a;

    this.gSharp = a * Math.pow(2, -1 / 12);

    this.g = a * Math.pow(2, -2 / 12);

    this.fSharp = a * Math.pow(2, -3 / 12);

    this.f = a * Math.pow(2, -4 / 12);

    this.e = a * Math.pow(2, -5 / 12);

    this.dSharp = a * Math.pow(2, -6 / 12);

    this.d = a * Math.pow(2, -7 / 12);

    this.cSharp = a * Math.pow(2, -8 / 12);

    this.c = a * Math.pow(2, -9 / 12);

    this.setArray();
  }
  private setArray() {
    
    this.array.push(this.c);
    this.array.push(this.b);
    this.array.push(this.aSharp);
    this.array.push(this.a);
    this.array.push(this.gSharp);
    this.array.push(this.g);
    this.array.push(this.fSharp);
    this.array.push(this.f);
    this.array.push(this.e);
    this.array.push(this.dSharp);
    this.array.push(this.d);
    this.array.push(this.cSharp);
  }
  public getArray(): number[] {
    return this.array;
  }
}
