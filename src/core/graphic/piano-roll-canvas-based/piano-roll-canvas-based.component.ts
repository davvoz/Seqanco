import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Utilities } from 'src/classes/utilities';
import { LineOfSquares } from '../../../classes/line-of-squares';
import { Octave } from '../../../classes/octave';
import { Square } from '../../../classes/square';
import { UserGui } from '../../../classes/user-gui';
import { VelocityGui } from '../../../classes/velocity-gui';
import { Coordinates, Nota } from '../../../interfaces/interfaces';
import { TimerService } from '../../../services/timer.service';
import { Loopper } from '../../../classes/loopper';

export interface Notes {
  notesObject: Square[];
  notesValue: number[];
}
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

  @ViewChild("canvas", { static: false })
  canvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasGui", { static: false })
  canvasGui!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasLooper", { static: false })
  canvasLooper!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasVelo", { static: false })
  canvasVelo!: ElementRef<HTMLCanvasElement>;
  @ViewChild("canvasProva", { static: false })
  canvasProva!: ElementRef<HTMLCanvasElement>;

  ctxGui!: CanvasRenderingContext2D;
  ctx!: CanvasRenderingContext2D;
  ctxLoopper!: CanvasRenderingContext2D;
  ctxVelo!: CanvasRenderingContext2D;

  lato = 0;
  subscription!: Subscription;
  subscriptionStartStop!: Subscription;
  key: any;
  isPlayed!: boolean;

  pianoRollDimension: number = 0;
  notes: Notes = {
    notesObject: [],
    notesValue: []
  };
  freq: number[] = [];
  userGui!: UserGui;
  myVelocity!: VelocityGui;

  logicTimeMarker!: LineOfSquares;
  startLoop: number = 0;
  endLoop: number = 16;
  clips: Notes[] = [];
  selectedClipIndex: number = 0;
  worker = new Worker('./helper.worker', { type: 'module', name: 'worker-two' });
  wka!: OffscreenCanvas;
  offscreen: any;
  canvasHeight = 960;


  constructor(public myTimer: TimerService) { }

  getInstrumentColor() {
    return Utilities.getInstrumentColor(this.instrumentType);
  }

  ngAfterViewInit(): void {
    let htmlCanvas: any;
    htmlCanvas = this.canvasProva.nativeElement;
    this.offscreen = htmlCanvas.transferControlToOffscreen();
    // @ts-ignore*/
    this.lato = this.canvasGui.nativeElement.getContext("2d")?.canvas.width / 128;
    this.worker.postMessage({ canvas: this.offscreen }, [this.offscreen]);
    
    this.createScale(this.la);
    // @ts-ignore*/
    this.ctxGui = this.canvasGui.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctx = this.canvas.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctxVelo = this.canvasVelo.nativeElement.getContext("2d");
    // @ts-ignore*/
    this.ctxLoopper = this.canvasLooper.nativeElement.getContext("2d");

    this.myVelocity = new VelocityGui(0, 0, this.ctxVelo, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
    this.logicTimeMarker = new LineOfSquares(this.lato, -this.lato, 0, "0,0,0", 100, 58, "VERTICALE", 0);
    this.userGui = new UserGui(this.lato, 0, this.ctxGui, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
    this.userGui.type = this.instrumentType;
    this.setStartLopper();
    this.logicTimeMarker.standUp();
    this.notes.notesObject = this.populateEnemiesArray();

    for (let i = 0; i < this.notes.notesObject.length; i++) {
      this.notes.notesValue.push(0);
    }
    this.myVelocity.draw();
    this.userGui.draw();
    this.intitializeClips();
    this.subscription = this.myTimer.trackStateItem$.subscribe(res => {
      if (res.traksAreOn) {
        if (res.isStarted) {
          this.tick();
        }
      }
    });

    this.subscriptionStartStop = this.myTimer.playingStateItem$.subscribe(res => {
      if (!res) {
        this.logicTimeMarker.setX(this.startLoop - 1);
      }
    });

  }

  intitializeClips() {
    for (let i = 0; i < 4; i++) {
      this.clips.push({
        notesObject: [],
        notesValue: []
      });
      this.clips[i].notesObject = this.populateEnemiesArray();
      for (let j = 0; j < this.notes.notesObject.length; j++) {
        this.clips[i].notesObject[j].kill();
      }
    }
  }

  runClip1(clipIndex: number) {
    if (this.selectedClipIndex !== clipIndex) {
      this.selectedClipIndex = clipIndex;
      const e = this.clips[clipIndex].notesObject;
      this.clear();
      let indiceTrovato;
      for (let i = 0; i < e.length; i++) {
        for (let j = 0; j < this.freq.length; j++) {
          if (this.freq[j] === e[i].getTune()) {
            indiceTrovato = j;
          }
        }
        if (e[i].isStanding() || !e[i].isUcciso) {
          //this.notes[i].velocity = 1;
          this.notes.notesObject[i].indice = e[i].indice;
          // @ts-ignore*/
          this.notes.notesObject[i].setTune(this.freq[indiceTrovato]);
          // @ts-ignore*/
          this.notes.notesObject[i].setY(indiceTrovato - 1);
          this.notes.notesObject[i].standUp();
          this.myVelocity.drawVertLine({ x: i, y: this.notes.notesObject[i].velocity }, true);
        }
      }
    }
  }

  saveClip() {
    this.clips[this.selectedClipIndex].notesObject = this.notes.notesObject;
  }

  setStartLopper(): void {
    Loopper.onChange(this.startLoop * this.lato, this.endLoop * this.lato, this.ctxLoopper);
  }

  tick() {

    let range = this.startLoop + this.endLoop;
    this.worker.postMessage({ lato: this.lato, end: range, pos: (this.logicTimeMarker.getX() * this.lato) + this.lato });
    if (this.logicTimeMarker.getX() == (range - 1) || this.logicTimeMarker.getX() == (this.pianoRollDimensionIn / this.lato - 1)) {
      this.logicTimeMarker.setX(this.startLoop);
      if (this.notes.notesObject[this.logicTimeMarker.getX()].isStanding()) {
        this.playStep(this.logicTimeMarker.getX());
      }
    } else {
      this.logicTimeMarker.moveRight();
      if (this.notes.notesObject.length > 0) {
        if (typeof this.notes.notesObject[this.logicTimeMarker.getX()] !== 'undefined' && this.notes.notesObject[this.logicTimeMarker.getX()].isStanding()) {
          this.playStep(this.logicTimeMarker.getX());
        }
      }
    }
  }

  createScale(la: number) {
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

  playStep(index: number) {
    this.notaDaSuonare.emit({
      notaDaSuonare: this.notes.notesObject[index].getTune(),
      velocity: this.notes.notesObject[index].velocity,
      libIndex: this.notes.notesObject[index].indice
    });
  }

  private populateEnemiesArray(): Square[] {
    let notes = [];
    for (let i = 0; i < this.ctx.canvas.width / this.lato; i++) {
      notes.push(new Square(this.lato, i, 0, "100,100,100", this.ctx, 0, i));
      notes[i].velocity = 1;
      notes[i].standUp();
      notes[i].kill();
    }
    return notes
  }

  random() {
    this.clear();
    for (let i = 0; i < this.notes.notesObject.length; i++) {
      let tonoRandom = Utilities.getRandomInt(this.freq.length, 0);
      this.setNote(this.notes.notesObject[i], this.freq[tonoRandom], tonoRandom, 1, true);
      this.setNote(this.clips[this.selectedClipIndex].notesObject[i], this.freq[tonoRandom], tonoRandom, 1, true);
      this.notes.notesValue[i] = this.freq[tonoRandom];
      this.clips[this.selectedClipIndex].notesValue[i] = this.freq[tonoRandom];
      this.myVelocity.drawVertLine({ x: i, y: 0 }, true);
      this.myVelocity.cancelVertLine({ x: i, y: this.notes.notesObject[i].velocity });
    }
  }

  private setNote(nota: Square, tune: number, y: number, velocity: number, isStand: boolean) {
    if (isStand) {
      nota.velocity = velocity;
      nota.indice = tune;
      nota.setTune(tune);
      nota.setY(tune - 1);
      nota.standUp();
    } else {
      nota.velocity = velocity;
      nota.indice = tune;
      nota.setTune(tune);
      nota.setY(tune - 1);
      nota.kill();
    }
  }

  setClip(index: number) {
    this.runClip1(index);
  }

  clear(): void {
    for (let i = 0; i < this.notes.notesObject.length; i++) {
      this.notes.notesObject[i].kill();
      //this.clips[this.selectedClipIndex].notesObject[i].kill();
      this.myVelocity.drawVertLine({ x: i, y: 0 }, false);
    }
  }

  start() {
    this.isPlayed = true;
    this.myTimer.play();
  }

  stop() {
    this.isPlayed = false;
    this.myTimer.stop();
  }

  pause() {
    this.isPlayed = false;
    this.myTimer.pause();
  }

  // @ts-ignore*/
  private getMousePos(evt, canvas: HTMLCanvasElement) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: Math.floor((evt.clientX - rect.left) / this.lato),
      y: Math.floor((evt.clientY - rect.top) / this.lato)
    };
  }

  handleChange(evt: any) {
    let coo: Coordinates = this.getMousePos(evt, this.ctx.canvas);
    if (this.notes.notesObject[coo.x].isStanding()) {
      this.notes.notesObject[coo.x].kill();
      this.clips[this.selectedClipIndex].notesObject[coo.x].kill();
      this.myVelocity.drawVertLine({ x: coo.x, y: 0 }, false);
    } else {
      //this.setNote(this.notes.notesObject[coo.x] , coo.y,this.freq[coo.y],1,true)
      this.notes.notesValue[coo.x] = this.freq[coo.y];
      this.notes.notesObject[coo.x].setTune(this.freq[coo.y]);
      this.notes.notesObject[coo.x].indice = coo.y;
      this.notes.notesObject[coo.x].setY(coo.y - 1);
      this.notes.notesObject[coo.x].standUp();
      //this.setNote( this.clips[this.selectedClipIndex].notesObject[coo.x] ,coo.y,this.freq[coo.y],1,true)

      this.clips[this.selectedClipIndex].notesValue[coo.x] = this.freq[coo.y];
      this.clips[this.selectedClipIndex].notesObject[coo.x].setTune(this.freq[coo.y]);
      this.clips[this.selectedClipIndex].notesObject[coo.x].indice = coo.y;
      this.clips[this.selectedClipIndex].notesObject[coo.x].setY(coo.y - 1);
      this.clips[this.selectedClipIndex].notesObject[coo.x].standUp();
      this.myVelocity.drawVertLine({ x: coo.x, y: 0 }, true);
    }
  }
  // @ts-ignore*/
  handleChangeVelo(evt) {
    let coo: Coordinates = this.getMousePos(evt, this.ctxVelo.canvas);
    if (this.notes.notesObject[coo.x].isStanding()) {
      this.myVelocity.cancelVertLine(coo);
      switch (coo.y) {
        case 0: this.notes.notesObject[coo.x].velocity = 1; break;
        case 1: this.notes.notesObject[coo.x].velocity = 0.6; break;
        case 2: this.notes.notesObject[coo.x].velocity = 0.3; break;
        default: this.notes.notesObject[coo.x].velocity = 0; break;
      }
    }
  }

  getExternalDimension(): number {
    return this.pianoRollDimensionIn
  }

}

