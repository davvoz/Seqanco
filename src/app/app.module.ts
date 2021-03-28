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
import { AutopanComponent } from '../autopan/autopan.component';
//import { AnalizerComponent } from './analizer/analizer.component';
import { OscComponent } from '../audio-components/osc/osc.component';
import { GainComponent } from '../audio-components/gain/gain.component';
import { StereoPannerComponent } from '../audio-components/stereo-panner/stereo-panner.component';
import { FilterComponent } from '../audio-components/filter/filter.component';

import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { KnobComponent } from '../core/graphic/knob/knob.component';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    StartStopComponent,
    PianoRollCanvasBasedComponent,
    TimerControlComponent,
    SynthControlComponent,
    InstrumentComponent,
    AdsrComponent,
    AutopanComponent,
    OscComponent,
    GainComponent,
    StereoPannerComponent,
    FilterComponent,
    KnobComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatTooltipModule,
    MatListModule
  ],
  providers: [TimerService, AudioContext, SamplesLibraryService],
  bootstrap: [AppComponent],
  entryComponents: [],
 
})
export class AppModule { }
