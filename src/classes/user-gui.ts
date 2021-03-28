import { Coordinates } from '../interfaces/interfaces';
export class UserGui {
  par: Coordinates;
  collisions: number;
  ctxGui: CanvasRenderingContext2D;
  lato;
  private readonly lightGrey = "rgb(240,240,240)";

  private readonly grey = "rgb(220,220,220)";

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
    for (let y = 0; y < this.ctxGui.canvas.height; y = y + this.lato) {
      for (let x = 0; x < this.ctxGui.canvas.width; x = x + this.lato) {
        this.ctxGui.lineWidth = 1;
        this.ctxGui.strokeStyle = "white";
        this.ctxGui.beginPath();
        switch (y) {
          case 0: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE
          case 20: this.ctxGui.fillStyle = this.grey; break;//BLACK
          case 40: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE
          case 60: this.ctxGui.fillStyle = this.grey; break;//BLACK
          case 80: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE
          case 100: this.ctxGui.fillStyle = this.grey; break;//BLACK
          case 120: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE
          case 140: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE
          case 160: this.ctxGui.fillStyle = this.grey; break;//BLACK
          case 180: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE
          case 200: this.ctxGui.fillStyle = this.grey; break;//BLACK
          case 220: this.ctxGui.fillStyle = this.lightGrey; break;//WHITE

          case 240: this.ctxGui.fillStyle = this.lightGrey; break;
          case 260: this.ctxGui.fillStyle = this.grey; break;
          case 280: this.ctxGui.fillStyle = this.lightGrey; break;
          case 300: this.ctxGui.fillStyle = this.grey; break;
          case 320: this.ctxGui.fillStyle = this.lightGrey; break;
          case 340: this.ctxGui.fillStyle = this.grey; break;
          case 360: this.ctxGui.fillStyle = this.lightGrey; break;
          case 380: this.ctxGui.fillStyle = this.lightGrey; break;
          case 400: this.ctxGui.fillStyle = this.grey; break;
          case 420: this.ctxGui.fillStyle = this.lightGrey; break;
          case 440: this.ctxGui.fillStyle = this.grey; break;
          case 460: this.ctxGui.fillStyle = this.lightGrey; break;

          case 480: this.ctxGui.fillStyle = this.lightGrey; break;
          case 500: this.ctxGui.fillStyle = this.grey; break;
          case 520: this.ctxGui.fillStyle = this.lightGrey; break;
          case 540: this.ctxGui.fillStyle = this.grey; break;
          case 560: this.ctxGui.fillStyle = this.lightGrey; break;
          case 580: this.ctxGui.fillStyle = this.grey; break;
          case 600: this.ctxGui.fillStyle = this.lightGrey; break;
          case 620: this.ctxGui.fillStyle = this.lightGrey; break;
          case 640: this.ctxGui.fillStyle = this.grey; break;
          case 660: this.ctxGui.fillStyle = this.lightGrey; break;
          case 680: this.ctxGui.fillStyle = this.grey; break;
          case 700: this.ctxGui.fillStyle = this.lightGrey; break;

          case 720: this.ctxGui.fillStyle = this.lightGrey; break;
          case 740: this.ctxGui.fillStyle = this.grey; break;
          case 760: this.ctxGui.fillStyle = this.lightGrey; break;
          case 780: this.ctxGui.fillStyle = this.grey; break;
          case 800: this.ctxGui.fillStyle = this.lightGrey; break;
          case 820: this.ctxGui.fillStyle = this.grey; break;
          case 840: this.ctxGui.fillStyle = this.lightGrey; break;
          case 860: this.ctxGui.fillStyle = this.lightGrey; break;
          case 880: this.ctxGui.fillStyle = this.grey; break;
          case 900: this.ctxGui.fillStyle = this.lightGrey; break;
          case 920: this.ctxGui.fillStyle = this.grey; break;
          case 940: this.ctxGui.fillStyle = this.lightGrey; break;
        }

        // if (y % 8 == 0) {
        //   this.ctxGui.fillStyle = this.grey;
        // } else {
        //   this.ctxGui.fillStyle = this.lightGrey;
        // }
        this.ctxGui.rect(x, y, this.lato, this.lato);
        this.ctxGui.fill()
        this.ctxGui.stroke();
        if (x % 16 == 0) {
          this.ctxGui.beginPath();
          this.ctxGui.moveTo(x, 0);
          this.ctxGui.strokeStyle = "rgb(200,200,200)";
          this.ctxGui.lineWidth = 1;
          this.ctxGui.lineTo(x, this.lato * 48);
          this.ctxGui.shadowBlur = 0;
          this.ctxGui.stroke();
        }
        if (x % (16*4) == 0) {
          this.ctxGui.beginPath();
          this.ctxGui.moveTo(x, 0);
          this.ctxGui.strokeStyle = "rgb(200,200,200)";
          this.ctxGui.lineWidth = 3;
          this.ctxGui.lineTo(x, this.lato * 48);
          this.ctxGui.shadowBlur = 0;
          this.ctxGui.stroke();
        }
        if (y % 240 == 0) {
          this.ctxGui.beginPath();
          this.ctxGui.moveTo(0, y);
          this.ctxGui.lineWidth = 1;
          this.ctxGui.strokeStyle = "grey";
          this.ctxGui.lineTo(this.lato * 80, y);
          this.ctxGui.shadowBlur = 0;
          this.ctxGui.stroke();
        }
      }
    }
  }

}