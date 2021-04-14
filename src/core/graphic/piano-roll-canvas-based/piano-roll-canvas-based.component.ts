import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LineOfSquares } from '../../../classes/line-of-squares';
import { Loopper } from '../../../classes/loopper';
import { Octave } from '../../../classes/octave';
import { Square } from '../../../classes/square';
import { UserGui } from '../../../classes/user-gui';
import { VelocityGui } from '../../../classes/velocity-gui';
import { Collision, Coordinates, Nota } from '../../../interfaces/interfaces';
import { TimerService } from '../../../services/timer.service';


@Component({
  selector: 'app-piano-roll-canvas-based',
  templateUrl: './piano-roll-canvas-based.component.html',
  styleUrls: ['./piano-roll-canvas-based.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PianoRollCanvasBasedComponent implements AfterViewInit {

  @Output() notaDaSuonare = new EventEmitter<Nota>();
  @Output() velocity = new EventEmitter<number>();
  @Input() la!: number;
  @Input() pianoRollDimensionIn!: number;
  @Input() clipIndex: number = 0;
  @Input() instrumentType!: string;
  @ViewChild('container') container!: ElementRef;

  @ViewChild("canvas", { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasGui", { static: false })
  canvasGui!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasLine", { static: false })
  canvasLine!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasLooper", { static: false })
  canvasLooper!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasVelo", { static: false })
  canvasVelo!: ElementRef<HTMLCanvasElement>;

  ctxGui!: CanvasRenderingContext2D;
  ctx!: CanvasRenderingContext2D;
  ctxEnemiesNew!: CanvasRenderingContext2D;
  ctxLine!: CanvasRenderingContext2D;
  ctxLoopper!: CanvasRenderingContext2D;
  ctxVelo!: CanvasRenderingContext2D;

  lato = 20;
  subscription!: Subscription;
  subscriptionStartStop!: Subscription;
  key: any;
  isPlayed!: boolean;
  isMuted = 0;
  pianoRollDimension: number = 0;
  userGui!: UserGui;
  enemies: Square[] = [];
  enemiesNew: Square[] = [];
  myLine!: LineOfSquares;
  freq: number[] = [];
  coord: Coordinates = { x: 0, y: 0 };
  myVelocity!: VelocityGui;
  myLoopper!: Loopper;
  visualizzazione = 'normale';
  startLoop: number = 0;
  endLoop: number = 16;
  clips: Square[][] = [[]];
  selectedClipIndex: number = 0;
  worker = new Worker('./helper.worker', { type: 'module' });

  block = 'block';
  none = 'none';
  tappo = -999;
  constructor(public myTimer: TimerService) {


  }

  getInstrumentColor() {

    switch (this.instrumentType) {
      case 'SYNTH':
        break;
      case 'SAMPLER':
        return 'rgba(90, 90, 200, 0.4)';
      case 'MONOOSC':
        return 'rgba(90, 200, 90, 0.4)';
      case 'DOUBLEOOSC':
        return 'rgba(200, 90, 90, 0.4)';
      case 'NEWSYNTH':
        return 'rgba(100, 200, 200, 0.4)';
      default: return 'rgba(200, 200, 200, 0.4)';

    }
    return null;
  }
  ngAfterViewInit(): void {
    // @ts-ignore*/
    this.lato = this.canvasGui.nativeElement.getContext("2d")?.canvas.clientWidth / 64;
    this.createScale(this.la);
    // @ts-ignore*/
    this.ctxGui = this.canvasGui.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctx = this.canvas.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctxLine = this.canvasLine.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctxVelo = this.canvasVelo.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctxLoopper = this.canvasLooper.nativeElement.getContext("2d");
    // @ts-ignore*/
    //this.ctxEnemiesNew = this.canvasEnemiesNew.nativeElement.getContext("2d");
    this.myLoopper = new Loopper(this.startLoop * this.lato, this.endLoop * this.lato, this.ctxLoopper, 19 * this.lato);

    this.myVelocity = new VelocityGui(
      0,
      0,
      this.ctxVelo,
      { x: 0, y: 0 },
      0,
      "0,0,0",
      this.lato);

    this.myLine = new LineOfSquares(
      this.lato,
      -this.lato,
      0,
      "0,0,0",
      this.ctxLine,
      100,
      58,
      "VERTICALE", 0
    );
    this.setStartLopper();
    this.myLine.standUp();
    this.enemiesNew = this.populateEnemiesArray();
    this.enemies = this.populateEnemiesArray();
    this.myVelocity.draw();
    this.intitializeClips();
    this.userGui = new UserGui(
      this.lato,
      0,
      this.ctxGui,
      { x: 0, y: 0 },
      0,
      "0,0,0",
      this.lato
    );
    this.userGui.draw();


    this.subscription = this.myTimer.trackStateItem$.subscribe(res => {
      if (res.traksAreOn) {
        if (res.isStarted) {
          this.tick();
        }
      }
    });
    this.subscriptionStartStop = this.myTimer.playingStateItem$.subscribe(res => {
      if (!res) {
        this.myLine.setX(+this.startLoop - 1);
      }
    });
  }

  intitializeClips() {
    for (let i = 0; i < 4; i++) {
      this.clips[i] = [];
      this.clips[i] = this.populateEnemiesArray();
      for (let j = 0; j < this.enemies.length; j++) {
        this.clips[i][j].kill();
      }
    }
  }
  runClip1(clipIndex: number) {
    if (this.selectedClipIndex !== clipIndex) {
      this.selectedClipIndex = clipIndex;
      let e = this.clips[clipIndex];
      this.clear();
      let indiceTrovato;
      for (let i = 0; i < e.length; i++) {
        for (let j = 0; j < this.freq.length; j++) {
          if (this.freq[j] === e[i].getTune()) {
            indiceTrovato = j;
          }
        }
        if (e[i].isStanding() || !e[i].isUcciso) {
          this.enemies[i].velocity = 1;
          // @ts-ignore*/
          this.enemies[i].setTune(this.freq[indiceTrovato]);
          // @ts-ignore*/
          this.enemies[i].setY(indiceTrovato - 1);
          this.enemies[i].standUp();
          this.myVelocity.drawVertLine({ x: i, y: 0 }, true);
        }
      }
    }
  }
  topUp() {
    //todo
  }
  saveClip() {
    this.clips[this.selectedClipIndex] = this.enemies;
  }

  setStartLopper(): void {
    this.myLoopper.onChange(this.startLoop * this.lato, this.endLoop * this.lato);
  }

  tick() {
    this.ctxLine.clearRect(
      0,
      0,
      this.ctxLine.canvas.width,
      this.ctxLine.canvas.height
    );
    this.coord = { x: this.myLine.getX(), y: 0 };
    this.myLine.setColor("200,200,0");
    let col: Collision = { esito: false, indice: 0 };
    let enemyNumber: number[] = [];
    for (let i = 0; i < this.enemies.length; i++) {
      enemyNumber.push(this.enemies[i].getX());
    }
    this.worker.postMessage({ squareDimensioneX: this.myLine.getX(), enemiesDimensioneX: enemyNumber, enemiesDimensioneLato: this.lato });
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker.onmessage = ({ data }) => {
        col = data;
      };
    } else { }
    let range = this.startLoop + this.endLoop;
    if (this.myLine.getX() == (range - 1) || this.myLine.getX() == (this.pianoRollDimensionIn / this.lato - 1)) {
      this.myLine.setX(this.startLoop);
      if (!col.esito) {
        if (this.enemies[this.myLine.getX()].isStanding()) {
          this.playStep(this.myLine.getX());
        }
      }
    } else {
      this.myLine.moveRight();
      if (this.enemies.length > 0) {
        if (!col.esito) {
          if (typeof this.enemies[this.myLine.getX()] !== 'undefined' && this.enemies[this.myLine.getX()].isStanding()) {
            this.playStep(this.myLine.getX());
          }
        }
      }
    }

  }
  createScale(la: number) {
    //const A4 = 220;
    if (typeof la === 'undefined') {
      la = 110;
    }

    for (let i = 0; i < 4; i++) {
      let a = la * Math.pow(2, i);
      let octave = new Octave(a);
      for (let l = 0; l < octave.getArray().length; l++) {
        this.freq.push(octave.getArray()[l]);
      }
    }
    this.freq = this.freq.sort(function (a, b) { return a > b ? -1 : 1 });
  }

  public playStep(index: number) {
    this.notaDaSuonare.emit({ notaDaSuonare: this.enemies[index].getTune(), velocity: this.enemies[index].velocity });
  }

  private populateEnemiesArray(): Square[] {
    let enemies = [];
    for (let i = 0; i < this.ctx.canvas.width / this.lato; i++) {
      enemies.push(
        new Square(this.lato, i, 0, "100,100,100", this.ctx, 0, i)
      );
      enemies[i].velocity = 1;
      enemies[i].standUp();
      enemies[i].kill();
    }

    return enemies
  }



  public random() {
    this.clear();
    for (let i = 0; i < this.enemies.length; i++) {
      let tonoRandom = this.getRandomInt(this.freq.length, 0);
      this.clips[this.selectedClipIndex][i].setTune(this.freq[tonoRandom]);
      this.enemies[i].setTune(this.freq[tonoRandom]);
      this.clips[this.selectedClipIndex][i].setY(tonoRandom - 1);
      this.enemies[i].setY(tonoRandom - 1);
      this.clips[this.selectedClipIndex][i].standUp();
      this.enemies[i].standUp();
      this.clips[this.selectedClipIndex][i].velocity = 1;
      this.enemies[i].velocity = 1;
      this.myVelocity.drawVertLine({ x: i, y: 0 }, true);
    }
  }

  public setClip(index: number) {
    this.runClip1(index);
  }

  public clear(): void {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].kill();
      this.myVelocity.drawVertLine({ x: i, y: 0 }, false);
    }

  }

  public start() {
    this.isPlayed = true;
    this.myTimer.play();
  }

  public stop() {
    this.isPlayed = false;
    this.myTimer.stop();
  }

  public pause() {
    this.isPlayed = false;
    this.myTimer.pause();
  }

  getColor() {
    if (this.isMuted) {
      return "red";
    } else {
      return "green";
    }
  }
  // @ts-ignore*/
  private getMousePos(evt, canvas: ElementRef<HTMLCanvasElement>) {
    let rect = canvas.nativeElement.getBoundingClientRect();
    return {
      x: Math.floor((evt.clientX - rect.left) / this.lato),
      y: Math.floor((evt.clientY - rect.top) / this.lato)
    };
  }


  private getRandomInt(maxValue: number, minValue: number) {
    return Math.floor(Math.random() * (maxValue - 0)) + minValue;
  }

  private collision(player: Square, enemy: Square) {
    var distX = Math.abs(
      player.getX() - enemy.getX() - enemy.getDimensioneLato()
    );
    var dx = distX - enemy.getDimensioneLato();
    return dx == 0;
  }
  // @ts-ignore*/
  handleChange(evt) {
    let coo: Coordinates = this.getMousePos(evt, this.canvas);
    if (this.enemies[coo.x].isStanding()) {
      this.enemies[coo.x].kill();
      this.clips[this.selectedClipIndex][coo.x].kill();
      this.myVelocity.drawVertLine({ x: coo.x, y: 0 }, false);
    } else {
      this.clips[this.selectedClipIndex][coo.x].setTune(this.freq[coo.y]);
      this.enemies[coo.x].setTune(this.freq[coo.y]);
      this.clips[this.selectedClipIndex][coo.x].setY(coo.y - 1);
      this.enemies[coo.x].setY(coo.y - 1);
      this.clips[this.selectedClipIndex][coo.x].standUp();
      this.enemies[coo.x].standUp();
      this.myVelocity.drawVertLine({ x: coo.x, y: 0 }, true);
    }
  }
  // @ts-ignore*/
  handleChangeVelo(evt) {

    let coo: Coordinates = this.getMousePos(evt, this.canvasVelo);
    if (this.enemies[coo.x].isStanding()) {
      this.myVelocity.cancelVertLine(coo);
      switch (coo.y) {
        case 0: this.enemies[coo.x].velocity = 1; break;
        case 1: this.enemies[coo.x].velocity = 0.6; break;
        case 2: this.enemies[coo.x].velocity = 0.3; break;
        default: this.enemies[coo.x].velocity = 0; break;
      }
      this.velocity.emit(this.enemies[coo.x].velocity);
    } else {
      //this.myVelocity.drawVertLine(coo, false);
    }

  }
  getExternalDimension(): number {
    const n: number = 20;
    return +this.pianoRollDimensionIn + +n;
  }
}
