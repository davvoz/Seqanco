import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TimerService } from '../services/timer.service';
import { FormsModule } from '@angular/forms';
import { StartStopComponent } from '../start-stop/start-stop.component';
import { HttpClientModule } from '@angular/common/http';
import { PianoRollCanvasBasedComponent } from '../core/graphic/piano-roll-canvas-based/piano-roll-canvas-based.component';
import { TimerControlComponent } from '../timer-control/timer-control.component';
import { SynthControlComponent } from '../synth-control/synth-control.component';
import { SamplesLibraryService } from '../services/samples-library.service';
import { InstrumentComponent } from '../instrument/instrument.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdsrComponent } from '../adsr/adsr.component';
import { OscComponent } from '../audio-components/osc/osc.component';
import { GainComponent } from '../audio-components/gain/gain.component';
import { StereoPannerComponent } from '../audio-components/stereo-panner/stereo-panner.component';
import { FilterComponent } from '../audio-components/filter/filter.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    StartStopComponent,
    TimerControlComponent,
    SynthControlComponent,
    InstrumentComponent,
    AdsrComponent,
    OscComponent,
    GainComponent,
    StereoPannerComponent,
    FilterComponent,
    PianoRollCanvasBasedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [TimerService, AudioContext, SamplesLibraryService],
  bootstrap: [AppComponent],
  entryComponents: [],
 
})
export class AppModule { }
