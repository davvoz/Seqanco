import { Drowable } from '../interfaces/interfaces';
export class Shape implements Drowable {
  posX: number;
  posY: number;
  color: String;
  _isStanding: boolean;
  isUcciso: boolean = false;
  constructor(x: number, y: number, color: String) {
    this.posX = x;
    this.posY = y;
    this.color = color;
    this._isStanding = false;
  }
  public isStanding() {
    return this._isStanding;
  }
  public getX(): number {
    return this.posX
  }
  public getY(): number {
    return this.posY
  }
  public getColor(): String {
    return this.color
  }
  public setColor(val: String) {
    this.color = val;
  }
  public setX(val: number) {
    this.posX = val;
  }
  public setY(val: number) {
    this.posY = val;
  }
  moveRight() {
    this.posX++;
    this.draw();
  }
  moveLeft() {
    this.posX--;
    this.draw();
  }
  moveDown() {
    this.posY++;
    this.draw();
  }
  moveUp() {
    this.posY--;
    this.draw();
  }
  standUp() {
    this.isUcciso = false;
    this._isStanding = true;
    this.posX = this.getX();
    this.posY = this.getY();
    this.draw();
  }
  kill() {
    this.isUcciso = true;
    this._isStanding = false;
    this.erase();
  }
  draw() {//override questo}
  }
  public erase() {//override questo }
  }


}