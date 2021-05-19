(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Progetti\AngularProjects\BoSeq11\Seqanco\src\main.ts */"zUnb");


/***/ }),

/***/ "2IbU":
/*!******************************************************!*\
  !*** ./src/synth-control/synth-control.component.ts ***!
  \******************************************************/
/*! exports provided: SynthControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynthControlComponent", function() { return SynthControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adsr/adsr.component */ "yvez");





function SynthControlComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SynthControlComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.distorsionGestione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " waveshaper ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.getBgDistorsion());
} }
function SynthControlComponent_select_2_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wave_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", wave_r9, " ");
} }
function SynthControlComponent_select_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_select_2_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.waveSelected = $event; })("change", function SynthControlComponent_select_2_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthControlComponent_select_2_option_1_Template, 2, 1, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.waveSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.waveforms);
} }
function SynthControlComponent_span_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r14.valore, " ");
} }
function SynthControlComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_span_3_Template_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.libIndex = $event; })("change", function SynthControlComponent_span_3_Template_select_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SynthControlComponent_span_3_option_3_Template, 2, 1, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.libIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.library);
} }
function SynthControlComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ft_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ft_r18, " ");
} }
function SynthControlComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ft_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ft_r19, " ");
} }
function SynthControlComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " pitch time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_td_44_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.pitchEnvEnd = $event; })("change", function SynthControlComponent_td_44_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " end time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_td_44_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.pitchEnvFreq = $event; })("change", function SynthControlComponent_td_44_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.pitchEnvEnd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.pitchEnvFreq);
} }
class SynthControlComponent {
    constructor() {
        this.parametriSynth = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.syntControl = {
            isMuted: 0,
            gain: 0,
            adsr: { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 },
            adsrPitch: { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 },
            waveSelected: 'square',
            filterSelected: 'allpass',
            filterCutoff: 0,
            filterReso: 0,
            lfoWaveSelected: 'square',
            lfoAmplitude: 0,
            lfoRate: 0,
            libIndex: 0,
            duration: 0,
            type: '',
            pitchEnvelope: { frequency: 0, end: 0 },
            isDistorted: false
        };
        this.library = [
            { valore: 0, descrizione: 'kick' },
            { valore: 1, descrizione: 'hat' },
            { valore: 2, descrizione: 'snare' },
            { valore: 3, descrizione: 'vox' },
            { valore: 4, descrizione: 'vox2' },
            { valore: 5, descrizione: 'per' },
            { valore: 6, descrizione: 'crash' }
        ];
        this.waveSelected = 'square';
        this.filterSelected = 'allpass';
        this.libDescrizione = { valore: 0, descrizione: 'kick' };
        this.waveforms = ['square', 'sine', 'sawtooth', 'triangle'];
        this.filterType = [
            'lowpass',
            'highpass',
            'bandpass',
            'lowshelf',
            'peaking',
            'notch',
            'allpass'
        ];
        this.isMuted = 0;
        this.gain = 1;
        this.attack = 0;
        this.decay = 0;
        this.sustain = 0;
        this.sustainVal = 0;
        this.release = 0;
        this.filterCutoff = 1450;
        this.filterReso = 1000;
        this.lfoWaveSelected = 'square';
        this.lfoAmplitude = 0;
        this.lfoRate = 0;
        this.libIndex = 0;
        this.duration = 1;
        this.type = '';
        this.pitchEnvFreq = 0;
        this.pitchEnvEnd = 0;
        this.adsrVolume = { attack: 0.0, decay: 0.3, sustain: 0.3, sustainVal: 0.3, release: 0.3 };
        this.adsrPitch = { attack: 0.1, decay: 0.3, sustain: 0.3, sustainVal: 0.3, release: 0.3 };
        this.adsrPitchDisplay = false;
        this.distorsion = false;
    }
    distorsionGestione() {
        this.distorsion ? this.distorsion = false : this.distorsion = true;
        this.changed();
    }
    ngAfterViewInit() {
        this.syntControl = {
            isMuted: 0,
            gain: 0.5,
            adsr: this.adsrVolume,
            waveSelected: this.waveSelected,
            filterSelected: this.filterSelected,
            filterCutoff: 0,
            filterReso: 0,
            lfoWaveSelected: this.lfoWaveSelected,
            lfoAmplitude: 0,
            lfoRate: 0,
            libIndex: 0,
            duration: 0,
            type: '',
            adsrPitch: this.adsrPitch,
            pitchEnvelope: { frequency: this.pitchEnvFreq, end: this.pitchEnvEnd },
            isDistorted: false
        };
        this.changed();
    }
    getBgDistorsion() {
        if (this.distorsion) {
            return 'red';
        }
        else {
            return 'green';
        }
    }
    changed() {
        this.syntControl = {
            isMuted: this.isMuted,
            gain: this.gain,
            adsr: this.adsrVolume,
            adsrPitch: this.adsrPitch,
            waveSelected: this.waveSelected,
            filterSelected: this.filterSelected,
            filterCutoff: this.filterCutoff,
            filterReso: this.filterReso,
            lfoWaveSelected: this.lfoWaveSelected,
            lfoAmplitude: this.lfoAmplitude,
            lfoRate: this.lfoRate,
            libIndex: this.libIndex,
            duration: this.duration,
            type: this.type,
            pitchEnvelope: { frequency: this.pitchEnvFreq, end: this.pitchEnvEnd },
            isDistorted: this.distorsion
        };
        this.parametriSynth.emit(this.syntControl);
    }
    changeAdsr(adsr) {
        this.syntControl.adsr = adsr;
        this.changed();
    }
}
SynthControlComponent.ɵfac = function SynthControlComponent_Factory(t) { return new (t || SynthControlComponent)(); };
SynthControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SynthControlComponent, selectors: [["app-synth-control"]], inputs: { typeIn: "typeIn", name: "name" }, outputs: { parametriSynth: "parametriSynth" }, decls: 45, vars: 17, consts: [[1, "container"], [3, "background-color", "click", 4, "ngIf"], [3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [4, "ngIf"], ["type", "number", "min", "0", "max", "1", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [3, "slave", "adsr", "adsrEmitter"], ["colspan", "3"], [3, "ngModel", "ngModelChange", "change"], [4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "max", "1000", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "max", "10000", 3, "ngModel", "ngModelChange", "change"], ["type", "range", "min", "0", "max", "1000", "step", "1", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "1", "max", "16", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["rowspan", "2", 4, "ngIf"], [3, "click"], ["rowspan", "2"], ["type", "number", "min", "0.01", "max", "1000", "step", "0.01", 3, "ngModel", "ngModelChange", "change"]], template: function SynthControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthControlComponent_button_1_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynthControlComponent_select_2_Template, 2, 2, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SynthControlComponent_span_3_Template, 4, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "gain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_8_listener($event) { return ctx.gain = $event; })("change", function SynthControlComponent_Template_input_change_8_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "adsr-gain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-adsr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("adsrEmitter", function SynthControlComponent_Template_app_adsr_adsrEmitter_11_listener($event) { return ctx.changeAdsr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " FILTER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_select_ngModelChange_21_listener($event) { return ctx.filterSelected = $event; })("change", function SynthControlComponent_Template_select_change_21_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SynthControlComponent_option_22_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " reso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filterReso = $event; })("change", function SynthControlComponent_Template_input_change_25_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " cutoff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_28_listener($event) { return ctx.filterCutoff = $event; })("change", function SynthControlComponent_Template_input_change_28_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " adsr-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-adsr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("adsrEmitter", function SynthControlComponent_Template_app_adsr_adsrEmitter_32_listener($event) { return ctx.changeAdsr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "LFO to frequency filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_select_ngModelChange_36_listener($event) { return ctx.lfoWaveSelected = $event; })("change", function SynthControlComponent_Template_select_change_36_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SynthControlComponent_option_37_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " amp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_40_listener($event) { return ctx.lfoAmplitude = $event; })("change", function SynthControlComponent_Template_input_change_40_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_43_listener($event) { return ctx.lfoRate = $event; })("change", function SynthControlComponent_Template_input_change_43_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SynthControlComponent_td_44_Template, 6, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeIn === "MONOOSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeIn === "MONOOSC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeIn === "SAMPLER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.gain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slave", "volume")("adsr", ctx.adsrVolume);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterReso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterCutoff);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slave", "pitch")("adsr", ctx.adsrPitch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lfoWaveSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.waveforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lfoAmplitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lfoRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.typeIn === "SAMPLER");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_3__["AdsrComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeW50aC1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "2hE6":
/*!****************************************!*\
  !*** ./src/classes/line-of-squares.ts ***!
  \****************************************/
/*! exports provided: LineOfSquares */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineOfSquares", function() { return LineOfSquares; });
/* harmony import */ var _square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square */ "8YgR");

class LineOfSquares extends _square__WEBPACK_IMPORTED_MODULE_0__["Square"] {
    constructor(lato, x, y, color, tune, lunghezza, orientamento, indice) {
        super(lato, x, y, color, null, tune, indice);
        this.lunghezza = lunghezza;
        this.orientamento = orientamento;
        this.lato = lato;
        this.orientamento = orientamento;
        this.squares = [];
    }
    draw() { }
}


/***/ }),

/***/ "6+A9":
/*!*********************************************************!*\
  !*** ./src/audio-components/filter/filter.component.ts ***!
  \*********************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../adsr/adsr.component */ "yvez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/timer.service */ "IqJH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");







function FilterComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const wave_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r3.selectedWaveView = wave_r2; return ctx_r3.changeWave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wave_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.selectedWaveView === wave_r2 ? "on" : "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](3, 3, wave_r2, 0, 4), " ");
} }
function FilterComponent_app_adsr_45_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-adsr", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("adsrEmitter", function FilterComponent_app_adsr_45_Template_app_adsr_adsrEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changeAdsr($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("adsr", ctx_r1.adsrVolume);
} }
class FilterComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.adsrVolume = { attack: 0, decay: 0.0, sustain: 0.0, sustainVal: 0.0, release: 0.0 };
        this.frequency = 1450;
        this.gain = 1;
        this.detune = 0;
        this.q = 0;
        this.selectedWaveView = 'allpass';
        this.filterGainMultiplicator = 100;
        this.waveforms = [
            'lowpass',
            'highpass',
            'bandpass',
            'lowshelf',
            'peaking',
            'notch',
            'allpass'
        ];
        this.filterNode = this.myTimer.audioContext.createBiquadFilter();
        this.gainAdsr = this.myTimer.audioContext.createGain();
    }
    ;
    ngOnInit() { }
    changeWave() {
        this.filterNode.type = this.selectedWaveView;
    }
    changeAdsr(adsr) {
        this.adsrVolume = adsr;
    }
    play(veloGain) {
        if (!this.isStarted) {
            this.isStarted = true;
        }
        this.filterNode.gain.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
        //settare adsr qua vuol dire adsr in modalità trigger
        this.setAdsr(this.filterNode.frequency, this.adsrVolume, this.myTimer.audioContext.currentTime);
        this.filterNode.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
        this.filterNode.gain.setValueAtTime(this.gain, this.myTimer.audioContext.currentTime);
        this.filterNode.detune.setValueAtTime(this.detune, this.myTimer.audioContext.currentTime);
        this.filterNode.Q.setValueAtTime(this.q, this.myTimer.audioContext.currentTime);
    }
    changeFilterFrequency() {
        this.filterNode.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
    }
    changeFilterGain() {
        this.filterNode.gain.setValueAtTime(this.gain, this.myTimer.audioContext.currentTime);
    }
    changeFilterDetune() {
        this.filterNode.detune.setValueAtTime(this.detune, this.myTimer.audioContext.currentTime);
    }
    changeFilterQ() {
        this.filterNode.Q.setValueAtTime(this.q, this.myTimer.audioContext.currentTime);
    }
    connectToAudioParam(ap) {
        this.filterNode.connect(ap);
    }
    connectToAudioNode(an) {
        this.gainAdsr.connect(an);
        this.filterNode.connect(this.gainAdsr);
    }
    setAdsr(param, adsr, ct) {
        param.cancelScheduledValues(ct);
        param.setValueAtTime(0, ct);
        param.exponentialRampToValueAtTime(1, ct + adsr.attack);
        param.linearRampToValueAtTime(adsr.sustainVal, ct + //
            adsr.attack + //
            adsr.decay);
        param.setValueAtTime(adsr.sustainVal, ct + //
            adsr.attack + //
            adsr.decay + //
            adsr.sustain);
        param.linearRampToValueAtTime(0, ct + adsr.attack + //
            adsr.decay + //
            adsr.sustain + //
            adsr.release);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"])); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], viewQuery: function FilterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__["AdsrComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.adsr = _t.first);
    } }, inputs: { nome: "nome", envelope: "envelope" }, decls: 46, vars: 15, consts: [[1, "row4"], [4, "ngFor", "ngForOf"], [2, "background-color", "hotpink"], ["colspan", "3"], [3, "click"], ["type", "number", "min", "0", "max", "20000", "step", "10", 2, "width", "75px", 3, "ngModel", "step", "ngModelChange", "change"], ["type", "range", "max", "20000", "min", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "max", "1000", "step", "1", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "number", "min", "0", "max", "10", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "number", "min", "-10", "max", "10", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [3, "adsr", "adsrEmitter", 4, "ngIf"], [2, "font-family", "monospace", 3, "click"], [3, "adsr", "adsrEmitter"], ["adsr", ""]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Filter type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Gain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Detune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FilterComponent_div_16_Template, 4, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_21_listener() { return ctx.filterGainMultiplicator = 100; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " X10^2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_23_listener() { return ctx.filterGainMultiplicator = 1000; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " X10^4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_25_listener() { return ctx.filterGainMultiplicator = 10000; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " X10^5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_29_listener() { return ctx.frequency = ctx.frequency - 0.01 * ctx.filterGainMultiplicator; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_32_listener($event) { return ctx.frequency = $event; })("change", function FilterComponent_Template_input_change_32_listener() { return ctx.changeFilterFrequency(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_34_listener() { return ctx.frequency = ctx.frequency + 0.01 * ctx.filterGainMultiplicator; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " + ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_38_listener($event) { return ctx.frequency = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_40_listener($event) { return ctx.gain = $event; })("change", function FilterComponent_Template_input_change_40_listener() { return ctx.changeFilterGain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_42_listener($event) { return ctx.detune = $event; })("change", function FilterComponent_Template_input_change_42_listener() { return ctx.changeFilterDetune(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_44_listener($event) { return ctx.q = $event; })("change", function FilterComponent_Template_input_change_44_listener() { return ctx.changeFilterQ(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, FilterComponent_app_adsr_45_Template, 2, 1, "app-adsr", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.nome, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.waveforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.filterGainMultiplicator === 100 ? "on" : "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.filterGainMultiplicator === 1000 ? "on" : "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.filterGainMultiplicator === 10000 ? "on" : "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("step", ctx.filterGainMultiplicator / 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.frequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.frequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gain);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.detune);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.envelope);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RangeValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__["AdsrComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["SlicePipe"]], styles: [".on[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 10%;\n  border: 3px solid black;\n}\n\n.off[_ngcontent-%COMP%] {\n  background-color: green;\n  border-radius: 10%;\n  border: 3px solid #1b1b1b;\n}\n\n.row4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  background-color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtBQUVKIiwiZmlsZSI6ImZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ub257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG4ub2Zme1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjcsIDI3LCAyNyk7XHJcbn1cclxuLnJvdzQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "673w":
/*!**************************************!*\
  !*** ./src/classes/mono-samp-obj.ts ***!
  \**************************************/
/*! exports provided: MonoSampObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonoSampObj", function() { return MonoSampObj; });
/* harmony import */ var _abstract_monoosc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-monoosc */ "tivR");

class MonoSampObj extends _abstract_monoosc__WEBPACK_IMPORTED_MODULE_0__["AbstractMonoosc"] {
    constructor(audioContext, library) {
        super(audioContext);
        this.audioContext = audioContext;
        this.library = library;
        this.lista = [];
        this.born();
    }
    play(freq, synthControlIndex, velocity) {
        if (typeof this.getAllSynthControl()[synthControlIndex] === 'undefined') {
            this.getAllSynthControl()[synthControlIndex] = {
                isMuted: 0,
                gain: 0.5,
                adsr: this.adsr,
                waveSelected: this.waveSelected,
                filterSelected: this.filterSelected,
                filterCutoff: 0,
                filterReso: 0,
                lfoWaveSelected: 'sine',
                lfoAmplitude: 0,
                lfoRate: 0,
                libIndex: 0,
                duration: 0,
                type: '',
                adsrPitch: this.adsrP,
                pitchEnvelope: { frequency: 0, end: 0 },
                isDistorted: false
            };
        }
        if (typeof this.getAllSynthControl()[synthControlIndex] !== 'undefined') {
            if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
                this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, this.lfoOsc);
                this.castFilterWave(synthControlIndex, this.biquadFilter);
                this.volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
                this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
                this.lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, this.audioContext.currentTime);
                this.lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, this.audioContext.currentTime);
                this.gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
                this.biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, this.audioContext.currentTime);
                this.biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, this.audioContext.currentTime);
                let source = this.audioContext.createBufferSource();
                this.setAdsr(this.gainNode.gain, this.getAllSynthControl()[synthControlIndex].adsr, this.audioContext.currentTime);
                source.connect(this.biquadFilter);
                source.buffer = this.library.buffers[this.getAllSynthControl()[synthControlIndex].libIndex];
                source.playbackRate.setTargetAtTime(freq / 100, this.audioContext.currentTime, 0);
                source.playbackRate.linearRampToValueAtTime(freq / 100 + this.getAllSynthControl()[synthControlIndex].pitchEnvelope.frequency, this.audioContext.currentTime + //
                    this.getAllSynthControl()[synthControlIndex].pitchEnvelope.end);
                source.start(this.audioContext.currentTime);
                // source.disconnect();
                // @ts-ignore*
                // source = null;
            }
        }
    }
    born() {
        this.gainNode = this.audioContext.createGain();
        this.gainVelo = this.audioContext.createGain();
        this.biquadFilter = this.audioContext.createBiquadFilter();
        this.lfoOsc = this.audioContext.createOscillator();
        this.lfoGain = this.audioContext.createGain();
        this.volume = this.audioContext.createGain();
        this.lfoOsc.connect(this.lfoGain);
        this.lfoGain.connect(this.biquadFilter.frequency);
        this.biquadFilter.connect(this.gainVelo);
        this.gainVelo.connect(this.gainNode);
        this.gainNode.connect(this.volume);
        this.lfoOsc.start();
        this.gainNode.gain.setValueAtTime(0.5, this.audioContext.currentTime);
    }
    kill() {
        this.lfoOsc.stop();
        this.lfoOsc.disconnect();
        this.lfoGain.disconnect();
        this.biquadFilter.disconnect();
        this.gainVelo.disconnect();
        this.gainNode.disconnect();
    }
}


/***/ }),

/***/ "8+E6":
/*!************************************************!*\
  !*** ./src/start-stop/start-stop.component.ts ***!
  \************************************************/
/*! exports provided: StartStopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartStopComponent", function() { return StartStopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");



class StartStopComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.isPlayed = false;
    }
    ngOnInit() {
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
    getActiveColor() {
        return this.myTimer.isPlayed ? 'orangered' : null;
    }
}
StartStopComponent.ɵfac = function StartStopComponent_Factory(t) { return new (t || StartStopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
StartStopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartStopComponent, selectors: [["app-start-stop"]], decls: 6, vars: 2, consts: [[3, "click"]], template: function StartStopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartStopComponent_Template_button_click_0_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartStopComponent_Template_button_click_3_listener() { return ctx.stop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.getActiveColor());
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1zdG9wLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "8Cce":
/*!*************************************!*\
  !*** ./src/classes/mono-osc-obj.ts ***!
  \*************************************/
/*! exports provided: MonooscObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonooscObj", function() { return MonooscObj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _abstract_monoosc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-monoosc */ "tivR");
/* harmony import */ var _waveshaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waveshaper */ "wCZm");



class MonooscObj extends _abstract_monoosc__WEBPACK_IMPORTED_MODULE_1__["AbstractMonoosc"] {
    constructor(audioContext) {
        super(audioContext);
        this.audioContext = audioContext;
        this.isInitialized = false;
        this.isDistorsionConnetted = false;
        //this.init();
        this.born();
    }
    play(freq, synthControlIndex, velocity) {
        if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
            this.settingOnChange(synthControlIndex, freq, velocity);
        }
    }
    settingOnChange(synthControlIndex, freq, velocity) {
        this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, this.lfoOsc);
        this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].waveSelected, this.osc);
        this.castFilterWave(synthControlIndex, this.biquadFilter);
        this.setAdsr(this.gainNode.gain, this.getAllSynthControl()[synthControlIndex].adsr, this.audioContext.currentTime);
        this.setAdsr(this.biquadFilter.frequency, this.getAllSynthControl()[synthControlIndex].adsrPitch, this.audioContext.currentTime);
        if (!this.isInitialized) {
            this.osc.start();
            this.lfoOsc.start();
            this.isInitialized = true;
        }
        if (this.getAllSynthControl()[synthControlIndex].isDistorted && !this.isDistorsionConnetted) {
            this.gainWs.gain.setValueAtTime(2, this.audioContext.currentTime);
            this.osc.disconnect(this.biquadFilter);
            this.osc.connect(this.waveshaper.waveshaper);
            this.waveshaper.waveshaper.connect(this.gainWs);
            this.gainWs.connect(this.biquadFilter);
            this.isDistorsionConnetted = true;
        }
        if (this.isDistorsionConnetted && !this.getAllSynthControl()[synthControlIndex].isDistorted) {
            this.gainWs.disconnect(this.biquadFilter);
            this.osc.disconnect(this.waveshaper.waveshaper);
            this.osc.connect(this.biquadFilter);
            this.isDistorsionConnetted = false;
        }
        if (freq !== null) {
            this.osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
        }
        if (this.velocity != null) {
            this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
        }
        this.volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
        this.lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, this.audioContext.currentTime);
        this.lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, this.audioContext.currentTime);
        this.gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
        this.biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, this.audioContext.currentTime);
        this.biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, this.audioContext.currentTime);
        this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
        // const par = this.node.parameters.get('frequency');
        // if (typeof par !== 'undefined') {
        //   this.freqNe = par;
        // }
        //const pargn = this.reqParam.get('gain');
        //this.freqNe.setValueAtTime(freq, this.audioContext.currentTime);
        //pargn.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
    }
    born() {
        this.waveshaper = new _waveshaper__WEBPACK_IMPORTED_MODULE_2__["Waveshaper"](this.audioContext);
        this.gainNode = this.audioContext.createGain();
        this.osc = this.audioContext.createOscillator();
        this.gainVelo = this.audioContext.createGain();
        this.biquadFilter = this.audioContext.createBiquadFilter();
        this.lfoOsc = this.audioContext.createOscillator();
        this.lfoGain = this.audioContext.createGain();
        this.volume = this.audioContext.createGain();
        this.gainWs = this.audioContext.createGain();
        this.osc.connect(this.biquadFilter);
        this.lfoOsc.connect(this.lfoGain);
        this.lfoGain.connect(this.biquadFilter.frequency);
        this.biquadFilter.connect(this.gainVelo);
        this.gainVelo.connect(this.gainNode);
        this.gainNode.connect(this.volume);
        //this.volume.gain.setValueAtTime(0, this.audioContext.currentTime);
    }
    start() {
        if (!this.isActive) {
            console.log("Start");
            //this.gainNode.connect(this.audioContext.destination);
            this.isActive = true;
        }
    }
    stop() {
        if (this.isActive) {
            console.log("Stop");
            this.gainNode.disconnect();
            this.isActive = false;
        }
    }
    kill() {
        this.osc.stop();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadWorklet();
        });
    }
    loadWorklet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let myWk = this.createWorklet.toString();
            myWk = `function ${myWk}`;
            myWk = myWk.replace('Fake', 'AudioWorkletProcessor');
            myWk = myWk.replace('9.', 'channel++');
            myWk = myWk.replace('8', 'channel');
            console.log(myWk);
            const blob = new Blob([`(${myWk})()`], {
                type: "application/javascript"
            });
            const tempUrl = URL.createObjectURL(blob);
            return yield this.audioContext.audioWorklet.addModule(tempUrl).then(() => {
                this.osc.connect(this.biquadFilter);
                this.lfoOsc.connect(this.lfoGain);
                this.lfoGain.connect(this.biquadFilter.frequency);
                this.biquadFilter.connect(this.gainVelo);
                this.gainVelo.connect(this.gainNode);
                this.gainNode.connect(this.volume);
                this.osc.start();
                this.lfoOsc.start();
                //this.node = new AudioWorkletNode(this.audioContext, "worklet-processor");
                //this.node.connect(this.gainNode);
                //this.reqParam = this.node.parameters.get('gain');
                //this.freqNe = this.node.parameters.get('frequency');
                // this.freqNe.setValueAtTime(0, this.audioContext.currentTime)
                //this.freqNe.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.5)
                this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                ;
            });
        });
    }
    createWorklet() {
        class WorkletProcessor extends Fake {
            static get parameterDescriptors() {
                return [
                    {
                        name: "gain",
                        defaultValue: 0.5,
                        minValue: 0,
                        maxValue: 1
                    },
                    {
                        name: "frequency",
                        defaultValue: 440.0,
                        minValue: 27.5,
                        maxValue: 4186.009
                    }
                ];
            }
            process(inputList, outputList, parameters) {
                const input = inputList[0];
                const output = outputList[0];
                const gain = parameters.gain;
                for (let channelNum = 0; channelNum < input.length; 9) {
                    const inputChannel = input[8];
                    const outputChannel = output[8];
                    if (gain.length === 1) {
                        for (let i = 0; i < inputChannel.length; i++) {
                            outputChannel[i] = inputChannel[i] * gain[0];
                        }
                    }
                    else {
                        for (let i = 0; i < inputChannel.length; i++) {
                            outputChannel[i] = inputChannel[i] * gain[i];
                        }
                    }
                }
                return true;
            }
        }
        registerProcessor("worklet-processor", WorkletProcessor);
    }
}
class Fake {
}
function registerProcessor(arg0, arg1) {
    throw new Error("Function not implemented.");
}
function saw(arg0) {
    throw new Error("Function not implemented.");
}
//[inputs[0]* (parameters['frequency'].length > 1 ? parameters['frequency'][i] : parameters['frequency'][0])]


/***/ }),

/***/ "8YgR":
/*!*******************************!*\
  !*** ./src/classes/square.ts ***!
  \*******************************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Square", function() { return Square; });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "jL/A");

class Square extends _shape__WEBPACK_IMPORTED_MODULE_0__["Shape"] {
    constructor(lato, x, y, color, ctx, tune, indice) {
        super(x, y, color);
        this.dimensioneLato = lato;
        this.tune = tune;
        this.ctx = ctx;
        this.indice = indice;
    }
    getDimensioneLato() {
        return this.dimensioneLato;
    }
    setDimensioneLato(dim) {
        this.dimensioneLato = dim;
    }
    setIndice(indice) {
        this.indice = indice;
    }
    getIndice() {
        return this.indice;
    }
    setTune(tune) {
        this.tune = tune;
    }
    getTune() {
        return this.tune;
    }
    draw() {
        this.ctx.fillStyle = 'rgb(' + this.getColor() + ')';
        this.ctx.fillRect(this.getDimensioneLato() * this.getX(), this.getDimensioneLato() * this.getY() + this.getDimensioneLato(), this.getDimensioneLato(), this.getDimensioneLato());
    }
    erase() {
        this.ctx.clearRect(this.getDimensioneLato() * this.getX(), this.getDimensioneLato() * this.getY() + this.getDimensioneLato(), this.getDimensioneLato(), this.getDimensioneLato());
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DILc":
/*!******************************************************!*\
  !*** ./src/timer-control/timer-control.component.ts ***!
  \******************************************************/
/*! exports provided: TimerControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerControlComponent", function() { return TimerControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class TimerControlComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.speed = 120;
    }
    ngOnInit() {
        this.myTimer.speed = 120;
    }
    changeTime() {
        this.myTimer.speed = (60000 / this.speed) / 4;
        if (typeof (Worker) !== 'undefined') {
            this.myTimer.worker.postMessage({
                speed: (60000 / this.speed) / 4
            });
        }
    }
}
TimerControlComponent.ɵfac = function TimerControlComponent_Factory(t) { return new (t || TimerControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
TimerControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerControlComponent, selectors: [["app-timer-control"]], decls: 1, vars: 1, consts: [["type", "number", "min", "20", "max", "600", "step", "1", 2, "right", "0", "position", "relative", 3, "ngModel", "ngModelChange", "change"]], template: function TimerControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimerControlComponent_Template_input_ngModelChange_0_listener($event) { return ctx.speed = $event; })("change", function TimerControlComponent_Template_input_change_0_listener() { return ctx.changeTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.speed);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "EF+d":
/*!*********************************!*\
  !*** ./src/classes/user-gui.ts ***!
  \*********************************/
/*! exports provided: UserGui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGui", function() { return UserGui; });
class UserGui {
    constructor(x, y, ctxGui, par, collisions, color, lato) {
        this.type = "";
        this.lightGrey = "rgb(240,240,240)";
        this.grey = "rgb(220,220,220)";
        this.par = par;
        this.collisions = collisions;
        this.ctxGui = ctxGui;
        this.lato = lato;
    }
    setCollisions(value) {
        this.collisions = value;
    }
    drawBeat() {
        const margin = this.lato / 5;
        for (let y = 0; y < this.ctxGui.canvas.height / 4; y = y + this.lato) {
            for (let x = 0; x < this.ctxGui.canvas.width; x = x + this.lato) {
                this.ctxGui.strokeRect(x - margin / 2, y, this.lato - margin, this.lato - margin);
            }
        }
    }
    draw() {
        let height = this.ctxGui.canvas.height;
        if (this.type === 'DRUM') {
            height = 8 * this.lato;
        }
        for (let y = 0; y < height; y = y + this.lato) {
            for (let x = 0; x < this.ctxGui.canvas.width; x = x + this.lato) {
                this.ctxGui.lineWidth = 1;
                this.ctxGui.strokeStyle = "white";
                this.ctxGui.beginPath();
                switch (y) {
                    case 0:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 20:
                        this.ctxGui.fillStyle = this.grey;
                        break; //BLACK
                    case 40:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 60:
                        this.ctxGui.fillStyle = this.grey;
                        break; //BLACK
                    case 80:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 100:
                        this.ctxGui.fillStyle = this.grey;
                        break; //BLACK
                    case 120:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 140:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 160:
                        this.ctxGui.fillStyle = this.grey;
                        break; //BLACK
                    case 180:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 200:
                        this.ctxGui.fillStyle = this.grey;
                        break; //BLACK
                    case 220:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break; //WHITE
                    case 240:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 260:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 280:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 300:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 320:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 340:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 360:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 380:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 400:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 420:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 440:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 460:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 480:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 500:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 520:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 540:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 560:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 580:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 600:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 620:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 640:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 660:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 680:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 700:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 720:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 740:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 760:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 780:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 800:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 820:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 840:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 860:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 880:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 900:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                    case 920:
                        this.ctxGui.fillStyle = this.grey;
                        break;
                    case 940:
                        this.ctxGui.fillStyle = this.lightGrey;
                        break;
                }
                // if (y % 8 == 0) {
                //   this.ctxGui.fillStyle = this.grey;
                // } else {
                //   this.ctxGui.fillStyle = this.lightGrey;
                // }
                this.ctxGui.rect(x, y, this.lato, this.lato);
                this.ctxGui.fill();
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
                if (x % (16 * 4) == 0) {
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
                    this.ctxGui.lineTo(this.lato * 130, y);
                    this.ctxGui.shadowBlur = 0;
                    this.ctxGui.stroke();
                }
            }
        }
    }
}


/***/ }),

/***/ "IqJH":
/*!***************************************!*\
  !*** ./src/services/timer.service.ts ***!
  \***************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__1) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TimerService {
    constructor() {
        this.numberOfTraks = 0;
        this.maxStep = 1;
        this.startTime = 0;
        this.noteTime = 0;
        this.tic = 0;
        this.firstStep = false;
        this.steps = 0;
        this.gain = 1;
        this.numberOfTraksSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.timeInterval = 0;
        this.worker = new Worker(__webpack__worker__1, { type:undefined, name: 'worker-time' });
        this.trackStateModel = {
            traksAreOn: [] = [],
            timePosition: 0,
            isStarted: true,
            audioContextTime: 0
        };
        this.trackStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.trackStateModel);
        this.playingStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.playingStateItem$ = this.playingStateSource.asObservable();
        this.trackStateItem$ = this.trackStateSource.asObservable();
        this.worker.addEventListener('message', () => {
            this.trackStateSource.next({
                traksAreOn: this.trackStateModel.traksAreOn,
                timePosition: this.steps,
                isStarted: this.isPlayed,
                audioContextTime: 0
            });
            this.steps >= 3
                ? ((this.step = true), (this.steps = 0))
                : ((this.step = true), this.steps++);
        });
        this.loadWorklet();
    }
    addTrack() {
        this.numberOfTraks++;
    }
    muteTrack(index, state) {
        this.trackStateModel.traksAreOn[index] = state;
    }
    removeTrack(index) {
        this.numberOfTraks--;
        this.numberOfTraksSource.next(index);
    }
    play() {
        this.isPlayed = true;
        this.playingStateSource.next(true);
        if (typeof (Worker) !== 'undefined') {
            this.worker.postMessage({
                speed: this.speed,
                command: 'start'
            });
        }
    }
    stop() {
        this.steps = 0;
        this.isPlayed = false;
        this.worker.postMessage({
            speed: this.speed,
            command: 'stop'
        });
        this.playingStateSource.next(false);
    }
    pause() {
        this.isPlayed = false;
        this.accurateStop();
    }
    loadWorklet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audioContext = new AudioContext();
            this.startTime = this.audioContext.currentTime + 0.005;
            this.isPlayed = false;
            this.step = false;
            this.steps = 0;
            this.speed = 120;
            this.merger = this.audioContext.createGain();
            this.merger.gain.setValueAtTime(this.gain, this.audioContext.currentTime);
            this.merger.connect(this.audioContext.destination);
        });
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(); };
TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=worker-time!./time.worker */ "g5sO")))

/***/ }),

/***/ "KzTI":
/*!*********************************************!*\
  !*** ./src/classes/mono-drummachine-obj.ts ***!
  \*********************************************/
/*! exports provided: MonoDrummachineObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonoDrummachineObj", function() { return MonoDrummachineObj; });
/* harmony import */ var _abstract_monoosc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-monoosc */ "tivR");

class MonoDrummachineObj extends _abstract_monoosc__WEBPACK_IMPORTED_MODULE_0__["AbstractMonoosc"] {
    constructor(audioContext, library) {
        super(audioContext);
        this.audioContext = audioContext;
        this.library = library;
        this.lista = [];
        this.born();
    }
    play(freq, synthControlIndex, velocity) {
        if (typeof this.getAllSynthControl()[synthControlIndex] === 'undefined') {
            this.getAllSynthControl()[synthControlIndex] = {
                isMuted: 0,
                gain: 0.5,
                adsr: this.adsr,
                waveSelected: this.waveSelected,
                filterSelected: this.filterSelected,
                filterCutoff: 0,
                filterReso: 0,
                lfoWaveSelected: 'sine',
                lfoAmplitude: 0,
                lfoRate: 0,
                libIndex: 0,
                duration: 0,
                type: '',
                adsrPitch: this.adsrP,
                pitchEnvelope: { frequency: 0, end: 0 },
                isDistorted: false
            };
        }
        if (typeof this.getAllSynthControl()[synthControlIndex] !== 'undefined') {
            if (!this.getAllSynthControl()[synthControlIndex].isMuted) {
                this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, this.lfoOsc);
                this.castFilterWave(synthControlIndex, this.biquadFilter);
                this.volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
                this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
                this.lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, this.audioContext.currentTime);
                this.lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, this.audioContext.currentTime);
                this.gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, this.audioContext.currentTime);
                this.biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, this.audioContext.currentTime);
                this.biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, this.audioContext.currentTime);
                let source = this.audioContext.createBufferSource();
                this.setAdsr(this.gainNode.gain, this.getAllSynthControl()[synthControlIndex].adsr, this.audioContext.currentTime);
                source.connect(this.biquadFilter);
                source.buffer = this.library.buffers[freq];
                source.start(this.audioContext.currentTime);
            }
        }
    }
    born() {
        this.gainNode = this.audioContext.createGain();
        this.gainVelo = this.audioContext.createGain();
        this.biquadFilter = this.audioContext.createBiquadFilter();
        this.lfoOsc = this.audioContext.createOscillator();
        this.lfoGain = this.audioContext.createGain();
        this.volume = this.audioContext.createGain();
        this.lfoOsc.connect(this.lfoGain);
        this.lfoGain.connect(this.biquadFilter.frequency);
        this.biquadFilter.connect(this.gainVelo);
        this.gainVelo.connect(this.gainNode);
        this.gainNode.connect(this.volume);
        this.lfoOsc.start();
        this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    }
    kill() {
        this.lfoOsc.disconnect();
        this.lfoGain.disconnect();
        this.biquadFilter.disconnect();
        this.gainVelo.disconnect();
        this.gainNode.disconnect();
    }
}


/***/ }),

/***/ "Moz8":
/*!********************************!*\
  !*** ./src/classes/autopan.ts ***!
  \********************************/
/*! exports provided: Autopan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Autopan", function() { return Autopan; });
class Autopan {
    constructor(audioContext) {
        this.audioContext = audioContext;
        this.panner = this.audioContext.createStereoPanner();
        this.oscillator = this.audioContext.createOscillator();
        this.gain2 = this.audioContext.createGain();
        this.oscillator.connect(this.gain2);
        this.gain2.connect(this.panner.pan);
        this.oscillator.start();
    }
    change(rate, dryWet, contextTime) {
        this.gain2.gain.setValueAtTime(dryWet, contextTime);
        this.oscillator.frequency.setValueAtTime(rate, contextTime);
    }
}


/***/ }),

/***/ "Mx7m":
/*!*****************************************************!*\
  !*** ./src/audio-components/gain/gain.component.ts ***!
  \*****************************************************/
/*! exports provided: GainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GainComponent", function() { return GainComponent; });
/* harmony import */ var _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../adsr/adsr.component */ "yvez");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/timer.service */ "IqJH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["divHello"];
function GainComponent_app_adsr_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-adsr", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("adsrEmitter", function GainComponent_app_adsr_3_Template_app_adsr_adsrEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.changeAdsr($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("adsr", ctx_r0.adsrVolume);
} }
class GainComponent {
    constructor(myTimer, renderer) {
        this.myTimer = myTimer;
        this.renderer = renderer;
        this.gain = 0.5;
        this.adsrVolume = { attack: 0, decay: 0.5, sustain: 0.0, sustainVal: 0.5, release: 0.0 };
        this.valore = 0;
    }
    ngAfterViewInit() {
        this.gainNode = this.myTimer.audioContext.createGain();
        this.gainAdsr = this.myTimer.audioContext.createGain();
    }
    ngOnInit() { }
    fonzion(knob, value) {
        return value;
    }
    onChangeMaster($event) {
        this.gainNode.gain.setValueAtTime($event / 100, this.myTimer.audioContext.currentTime);
    }
    changed($event) {
    }
    changeFromListener(value) {
        if (typeof this.gainNode !== 'undefined' && typeof this.gainNode.gain !== 'undefined') {
            this.gainNode.gain.setValueAtTime(value / 100, this.myTimer.audioContext.currentTime);
        }
    }
    changeAdsr(adsr) {
        this.adsrVolume = adsr;
    }
    play(veloGain) {
        if (!this.isStarted) {
            this.isStarted = true;
        }
        this.gainNode.gain.setValueAtTime(this.gain * veloGain, this.myTimer.audioContext.currentTime);
        this.setAdsr(this.gainAdsr.gain, this.adsrVolume, this.myTimer.audioContext.currentTime);
    }
    changeGain() {
        this.gainNode.gain.setValueAtTime(this.gain, this.myTimer.audioContext.currentTime);
    }
    connectToAudioParam(ap) {
        this.gainNode.connect(ap);
    }
    connectToAudioNode(an) {
        //an.connect(this.gainAdsr);
        this.gainAdsr.connect(this.gainNode);
        this.gainNode.connect(an);
    }
    setAdsr(param, adsr, ct) {
        param.cancelScheduledValues(ct);
        param.setValueAtTime(0, ct);
        param.linearRampToValueAtTime(1, ct + adsr.attack);
        param.linearRampToValueAtTime(adsr.sustainVal, ct + //
            adsr.attack + //
            adsr.decay);
        param.setValueAtTime(adsr.sustainVal, ct + //
            adsr.attack + //
            adsr.decay + //
            adsr.sustain);
        param.linearRampToValueAtTime(0, ct + adsr.attack + //
            adsr.decay + //
            adsr.sustain + //
            adsr.release);
    }
}
GainComponent.ɵfac = function GainComponent_Factory(t) { return new (t || GainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
GainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GainComponent, selectors: [["app-gain"]], viewQuery: function GainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__["AdsrComponent"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.adsr = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divHello = _t.first);
    } }, inputs: { nome: "nome", envelope: "envelope" }, decls: 4, vars: 3, consts: [["matInput", "", "type", "number", "min", "0", "max", "10000", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [3, "adsr", "adsrEmitter", 4, "ngIf"], [3, "adsr", "adsrEmitter"], ["adsr", ""]], template: function GainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GainComponent_Template_input_ngModelChange_2_listener($event) { return ctx.gain = $event; })("change", function GainComponent_Template_input_change_2_listener() { return ctx.changeGain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GainComponent_app_adsr_3_Template, 2, 1, "app-adsr", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.nome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gain);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.envelope);
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__["AdsrComponent"]], styles: ["input[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiZ2Fpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xyXG4gICAgd2lkdGg6ICA1MHB4O1xyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "Njh4":
/*!***************************************************!*\
  !*** ./src/audio-components/osc/osc.component.ts ***!
  \***************************************************/
/*! exports provided: OscComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OscComponent", function() { return OscComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/timer.service */ "IqJH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function OscComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OscComponent_div_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const wave_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r2.selectedWaveView = wave_r1; return ctx_r2.changeWave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wave_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.selectedWaveView === wave_r1 ? "on" : "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](wave_r1);
} }
class OscComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.selectedWaveView = 'sine';
        this.isStarted = false;
        this.waveforms = ['square', 'sine', 'sawtooth', 'triangle'];
        this.isActive = false;
        this.modulatoreDioFrequenzaJustCon = false;
        this.frequency = 0;
    }
    ngAfterViewInit() {
        this.loadWorklet();
    }
    ngOnInit() {
    }
    play(freq) {
        if (!this.isStarted) {
            this.isStarted = true;
            if (typeof this.audioNodeIn !== 'undefined') {
                this.oscWk.connect(this.audioNodeIn);
            }
            if (typeof this.audioParamIn !== 'undefined') {
                this.oscWk.connect(this.audioParamIn);
            }
        }
        if (freq !== null) {
            this.oscWk.frequency.setValueAtTime(freq + this.frequency, this.myTimer.audioContext.currentTime);
        }
    }
    ngOnDestroy() {
        this.audioNodeIn.disconnect();
    }
    changeWave() {
        switch (this.selectedWaveView) {
            case 'sine':
                this.oscWk.type = 'sine';
                break;
            case 'square':
                this.oscWk.type = 'square';
                break;
            case 'noise':
                this.oscWk.type = 'custom';
                break;
            case 'triangle':
                this.oscWk.type = 'triangle';
                break;
            case 'sawtooth':
                this.oscWk.type = 'sawtooth';
                break;
        }
    }
    changeFrequency() {
        this.oscWk.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
    }
    setAudioParamIn(ap) {
        this.audioParamIn = ap;
    }
    setAudioNodeIn(an) {
        this.audioNodeIn = an;
    }
    loadWorklet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.oscWk = this.myTimer.audioContext.createOscillator();
            this.oscWk.start();
            if (typeof this.modulatoreDiFrequenza !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
                this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
            }
        });
    }
    setModulatoreDiFrequenza(modulatore) {
        if (typeof this.oscWk !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
            this.modulatoreDiFrequenza = modulatore;
            this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
        }
    }
    disconnectModulatoreDiFrequenza() {
        this.modulatoreDiFrequenza.disconnect(this.oscWk.frequency);
    }
    start() {
        if (!this.isActive) {
            this.isActive = true;
        }
    }
}
OscComponent.ɵfac = function OscComponent_Factory(t) { return new (t || OscComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"])); };
OscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OscComponent, selectors: [["app-osc"]], inputs: { nome: "nome" }, decls: 13, vars: 3, consts: [[1, "row4"], [4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "max", "100", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [2, "font-family", "monospace", 3, "click"]], template: function OscComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "OscillatorType");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OscComponent_div_10_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OscComponent_Template_input_ngModelChange_12_listener($event) { return ctx.frequency = $event; })("change", function OscComponent_Template_input_change_12_listener() { return ctx.changeFrequency(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.nome, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.waveforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.frequency);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".row4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  background-color: gray;\n}\n\n.on[_ngcontent-%COMP%] {\n  background-color: grey;\n  border-radius: 10%;\n  border: 3px solid black;\n}\n\n.off[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10%;\n  border: 3px solid #1b1b1b;\n}\n\n.square[_ngcontent-%COMP%] {\n  background-image: url('square.jpeg');\n  width: 30px;\n  height: 20px;\n  background-size: 30px 20px;\n  background-repeat: no-repeat;\n  margin: 0;\n  line-height: 30px;\n}\n\n.sine[_ngcontent-%COMP%] {\n  background-image: url('sine.jpeg');\n  width: 30px;\n  height: 20px;\n  background-size: 30px 20px;\n  background-repeat: no-repeat;\n  margin: 0;\n  line-height: 30px;\n}\n\n.sawtooth[_ngcontent-%COMP%] {\n  background-image: url('saw.jpeg');\n  width: 30px;\n  height: 20px;\n  background-size: 30px 20px;\n  background-repeat: no-repeat;\n  margin: 0;\n}\n\n.triangle[_ngcontent-%COMP%] {\n  background-image: url('tri.jpeg');\n  width: 30px;\n  height: 20px;\n  background-size: 30px 20px;\n  background-repeat: no-repeat;\n  margin: 0;\n  line-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9zYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUdKOztBQURBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFGQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBT0oiLCJmaWxlIjoib3NjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdzQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbi5vbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuLm9mZiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcclxufVxyXG4uc3F1YXJlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wbmcvc3F1YXJlLmpwZWdcIik7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnNpbmUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BuZy9zaW5lLmpwZWdcIik7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLnNhd3Rvb3RoIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wbmcvc2F3LmpwZWdcIik7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIG1hcmdpbjowO1xyXG59XHJcbi50cmlhbmdsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcG5nLy90cmkuanBlZ1wiKTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "NlGF":
/*!********************************!*\
  !*** ./src/classes/loopper.ts ***!
  \********************************/
/*! exports provided: Loopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loopper", function() { return Loopper; });
class Loopper {
    static onChange(start, end, ctx) {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = '#00d600';
        ctx.strokeRect(start, 1, end, 1);
    }
}


/***/ }),

/***/ "Se8A":
/*!************************************************!*\
  !*** ./src/instrument/instrument.component.ts ***!
  \************************************************/
/*! exports provided: InstrumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstrumentComponent", function() { return InstrumentComponent; });
/* harmony import */ var src_classes_mono_drummachine_obj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/classes/mono-drummachine-obj */ "KzTI");
/* harmony import */ var _classes_autopan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/autopan */ "Moz8");
/* harmony import */ var _classes_duble_osc_obj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/duble-osc-obj */ "n6+X");
/* harmony import */ var _classes_mono_osc_obj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/mono-osc-obj */ "8Cce");
/* harmony import */ var _classes_mono_samp_obj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/mono-samp-obj */ "673w");
/* harmony import */ var _classes_waveshaper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/waveshaper */ "wCZm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _services_samples_library_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/samples-library.service */ "ZOSq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/graphic/piano-roll-canvas-based/piano-roll-canvas-based.component */ "aICo");
/* harmony import */ var _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../synth-control/synth-control.component */ "2IbU");
/* harmony import */ var _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../audio-components/osc/osc.component */ "Njh4");
/* harmony import */ var _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../audio-components/gain/gain.component */ "Mx7m");
/* harmony import */ var _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../audio-components/stereo-panner/stereo-panner.component */ "Wohp");
/* harmony import */ var _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../audio-components/filter/filter.component */ "6+A9");

















const _c0 = ["back"];
const _c1 = ["mainOscillator1"];
const _c2 = ["mainOscillator2"];
const _c3 = ["mainGain"];
const _c4 = ["pan"];
const _c5 = ["filter"];
const _c6 = ["lfoFrequencyFilter"];
const _c7 = ["filterLfoGain"];
const _c8 = ["lfoFrequencyOscillator"];
const _c9 = ["freqOscLfoGain"];
const _c10 = ["pianoRoll"];
const _c11 = ["mainGain1"];
const _c12 = ["mainGain2"];
function InstrumentComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "app-synth-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("parametriSynth", function InstrumentComponent_div_12_Template_app_synth_control_parametriSynth_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.onSetSoundParams($event, ctx_r3.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("typeIn", ctx_r0.type)("name", ctx_r0.name);
} }
function InstrumentComponent_div_13_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InstrumentComponent_div_13_tr_29_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const i_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r19.enableMod(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_13_tr_29_Template_input_ngModelChange_5_listener($event) { const mod_r17 = ctx.$implicit; return mod_r17.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_13_tr_29_Template_input_ngModelChange_7_listener($event) { const mod_r17 = ctx.$implicit; return mod_r17.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](mod_r17.modulation ? "on" : "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", mod_r17.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", mod_r17.max);
} }
function InstrumentComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-osc", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-gain", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-gain", 14, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-osc", 12, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "app-gain", 14, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "app-stereo-panner", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "modulations");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, InstrumentComponent_div_13_tr_29_Template, 8, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "app-osc", 12, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "app-gain", 14, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "app-filter", 14, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "app-osc", 12, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "app-gain", 14, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, " enable osc1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_13_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.lfoConOsc1 = $event; })("change", function InstrumentComponent_div_13_Template_input_change_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.changeConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " enable osc2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_13_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.lfoConOsc2 = $event; })("change", function InstrumentComponent_div_13_Template_input_change_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.changeConnection2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nome", "Main oscillator 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("envelope", false)("nome", "Gain osc 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("envelope", true)("nome", "Main gain");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nome", "LFO to frequency filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("envelope", false)("nome", "LFO filter amplitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.modulations);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nome", "Main oscillator 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("envelope", false)("nome", "Gain osc 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("envelope", true)("nome", "FILTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nome", "LFO to frequency oscillators");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("envelope", false)("nome", "LFO ocs amplitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.lfoConOsc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.lfoConOsc2);
} }
class InstrumentComponent {
    constructor(myTimer, library) {
        this.myTimer = myTimer;
        this.library = library;
        this.clipIndex = 0;
        this.muted = false;
        this.autopanSpenta = true;
        this.waveshaperSpenta = true;
        this.arate = 0;
        this.adrywet = 0;
        this.wsdgain = 0;
        this.hertzs = [22.5, 55, 110, 220, 440, 880];
        this.selectedHrtz = 55;
        this.lfoConOsc1 = false;
        this.lfoConOsc2 = false;
        this.lfoConOsciJustCon = false;
        this.lfoConOsciJustCon2 = false;
        this.stepper = 0;
        this.isPianoRollVisible = false;
        this.canvasClipDimension = 203;
        this.modulations = [
            {
                modulation: false,
                min: 100,
                max: 3000,
                connectTo: 'filter'
            }, {
                modulation: false,
                min: 100,
                max: 3000,
                connectTo: 'filter'
            }, {
                modulation: false,
                min: 100,
                max: 3000,
                connectTo: 'filter'
            }, {
                modulation: false,
                min: 100,
                max: 3000,
                connectTo: 'filter'
            }, {
                modulation: false,
                min: 100,
                max: 3000,
                connectTo: 'filter'
            }
        ];
        this.notaNow = { libIndex: 0, notaDaSuonare: 0, velocity: 0 };
    }
    ngOnDestroy() {
        console.log('destroyed');
        switch (this.type) {
            case 'DRUM':
                this.myDrumachine.kill();
                break;
            case 'SAMPLER':
                this.myMonosamp.kill();
                break;
            case 'MONOOSC':
                this.myMonoosc.kill();
                break;
            case 'DOUBLEOOSC':
                this.myDoubleosc.kill();
                break;
            case 'NEWSYNTH':
                this.filterLfoGain.connectToAudioParam(this.filter.filterNode.frequency);
                this.lfoFrequencyFilter.setAudioNodeIn(this.filterLfoGain.gainNode);
                this.lfoFrequencyOscillator.setAudioNodeIn(this.freqOscLfoGain.gainNode);
                this.mainOscillator1.setAudioNodeIn(this.mainGain1.gainNode);
                this.mainOscillator2.setAudioNodeIn(this.mainGain2.gainNode);
                this.mainGain1.connectToAudioNode(this.mainGain.gainAdsr);
                this.mainGain2.connectToAudioNode(this.mainGain.gainAdsr);
                this.mainGain.connectToAudioNode(this.filter.filterNode);
                this.filter.connectToAudioNode(this.pan.stereoPannerNode);
                this.pan.connectToAudioNode(this.myTimer.merger);
                //this.pan.connectToAudioNode(this.nodeOut);
                break;
        }
    }
    enableMod(modIndex) {
        this.modulations[modIndex].modulation ? this.modulations[modIndex].modulation = false : this.modulations[modIndex].modulation = true;
    }
    ngAfterViewInit() {
        this.subscription = this.myTimer.trackStateItem$.subscribe(res => {
            this.stepper = res.timePosition;
            if (this.type === 'NEWSYNTH' && typeof this.mainOscillator1.oscWk !== 'undefined') {
                if (this.modulations[4].modulation) {
                    switch (res.timePosition) {
                        case 0:
                            this.mainOscillator1.oscWk.frequency.setTargetAtTime(this.notaNow.notaDaSuonare + this.modulations[4].max, this.myTimer.audioContext.currentTime, this.myTimer.steps);
                            this.mainOscillator2.oscWk.frequency.setTargetAtTime(this.notaNow.notaDaSuonare + this.modulations[4].max, this.myTimer.audioContext.currentTime, this.myTimer.steps);
                            break;
                        case 1:
                            break;
                        case 2:
                            this.mainOscillator1.oscWk.frequency.setTargetAtTime(this.notaNow.notaDaSuonare + this.modulations[4].min, this.myTimer.audioContext.currentTime, this.myTimer.steps);
                            this.mainOscillator2.oscWk.frequency.setTargetAtTime(this.notaNow.notaDaSuonare + this.modulations[4].min, this.myTimer.audioContext.currentTime, this.myTimer.steps);
                            break;
                        case 3:
                            break;
                    }
                }
                if (this.modulations[0].modulation) {
                    switch (res.timePosition) {
                        case 0:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].min, this.myTimer.audioContext.currentTime);
                            break;
                        case 1:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].max, this.myTimer.audioContext.currentTime);
                            break;
                        case 2:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].min, this.myTimer.audioContext.currentTime);
                            break;
                        case 3:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[0].max, this.myTimer.audioContext.currentTime);
                            break;
                    }
                }
                if (this.modulations[1].modulation) {
                    switch (res.timePosition) {
                        case 0:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].min, this.myTimer.audioContext.currentTime);
                            break;
                        case 1:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].min, this.myTimer.audioContext.currentTime);
                            break;
                        case 2:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].max, this.myTimer.audioContext.currentTime);
                            break;
                        case 3:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[1].max, this.myTimer.audioContext.currentTime);
                            break;
                    }
                }
                if (this.modulations[2].modulation) {
                    switch (res.timePosition) {
                        case 0:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[2].max, this.myTimer.audioContext.currentTime);
                            break;
                        case 1: break;
                        case 2: break;
                        case 3:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[2].min, this.myTimer.audioContext.currentTime);
                            break;
                    }
                }
                if (this.modulations[3].modulation) {
                    switch (res.timePosition) {
                        case 0:
                            this.filter.filterNode.frequency.setTargetAtTime(this.modulations[3].max, this.myTimer.audioContext.currentTime, this.myTimer.steps);
                            break;
                        case 1:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[3].min, this.myTimer.audioContext.currentTime);
                            break;
                        case 2: break;
                        case 3:
                            this.filter.filterNode.frequency.setTargetAtTime(this.modulations[3].max, this.myTimer.audioContext.currentTime, this.myTimer.steps);
                            break;
                    }
                }
            }
        });
        this.myAutopan = new _classes_autopan__WEBPACK_IMPORTED_MODULE_1__["Autopan"](this.myTimer.audioContext);
        this.myWaveshaper = new _classes_waveshaper__WEBPACK_IMPORTED_MODULE_5__["Waveshaper"](this.myTimer.audioContext);
        switch (this.type) {
            case 'DRUM':
                this.myDrumachine = new src_classes_mono_drummachine_obj__WEBPACK_IMPORTED_MODULE_0__["MonoDrummachineObj"](this.myTimer.audioContext, this.library);
                this.myDrumachine.volume.connect(this.myTimer.merger);
                break;
            case 'SAMPLER':
                this.myMonosamp = new _classes_mono_samp_obj__WEBPACK_IMPORTED_MODULE_4__["MonoSampObj"](this.myTimer.audioContext, this.library);
                this.myMonosamp.volume.connect(this.myTimer.merger);
                break;
            case 'MONOOSC':
                this.myMonoosc = new _classes_mono_osc_obj__WEBPACK_IMPORTED_MODULE_3__["MonooscObj"](this.myTimer.audioContext);
                this.myMonoosc.volume.connect(this.myTimer.merger);
                this.myMonoosc.start();
                break;
            case 'DOUBLEOOSC':
                this.myDoubleosc = new _classes_duble_osc_obj__WEBPACK_IMPORTED_MODULE_2__["DubleoscObj"](this.myTimer.audioContext);
                this.myDoubleosc.volume.connect(this.myTimer.merger);
                break;
            case 'NEWSYNTH':
                this.filterLfoGain.connectToAudioParam(this.filter.filterNode.frequency);
                this.lfoFrequencyFilter.setAudioNodeIn(this.filterLfoGain.gainNode);
                this.lfoFrequencyOscillator.setAudioNodeIn(this.freqOscLfoGain.gainNode);
                this.mainOscillator1.setAudioNodeIn(this.mainGain1.gainNode);
                this.mainOscillator2.setAudioNodeIn(this.mainGain2.gainNode);
                this.mainGain1.connectToAudioNode(this.mainGain.gainAdsr);
                this.mainGain2.connectToAudioNode(this.mainGain.gainAdsr);
                this.mainGain.connectToAudioNode(this.filter.filterNode);
                this.filter.connectToAudioNode(this.pan.stereoPannerNode);
                this.pan.connectToAudioNode(this.myTimer.merger);
                //this.pan.connectToAudioNode(this.nodeOut);
                break;
        }
    }
    setClip(index) {
        this.pianoRoll.setClip(index);
    }
    setAutopan() {
        if (this.autopanSpenta) {
            switch (this.type) {
                case 'DRUM':
                    this.spegniAutopan(this.myDrumachine.volume);
                    break;
                case 'SAMPLER':
                    this.spegniAutopan(this.myMonosamp.volume);
                    break;
                case 'MONOOSC':
                    this.spegniAutopan(this.myMonoosc.volume);
                    break;
                case 'DOUBLEOOSC':
                    this.spegniAutopan(this.myDoubleosc.volume);
                    break;
                case 'NEWSYNTH':
                    if (typeof this.pan !== 'undefined' && typeof this.pan.stereoPannerNode !== 'undefined') {
                        this.spegniAutopan(this.pan.stereoPannerNode);
                    }
                    break;
            }
            this.autopanSpenta = false;
        }
        else {
            switch (this.type) {
                case 'DRUM':
                    this.accendiAutopan(this.myDrumachine.volume);
                    break;
                case 'SAMPLER':
                    this.accendiAutopan(this.myMonosamp.volume);
                    break;
                case 'MONOOSC':
                    this.accendiAutopan(this.myMonoosc.volume);
                    break;
                case 'DOUBLEOOSC':
                    this.accendiAutopan(this.myDoubleosc.volume);
                    break;
                case 'NEWSYNTH':
                    this.accendiAutopan(this.pan.stereoPannerNode);
                    break;
            }
            this.autopanSpenta = true;
        }
    }
    setWaveshaper() {
        if (this.waveshaperSpenta) {
            switch (this.type) {
                case 'DRUM':
                    this.accendiWaveshaper(this.myDrumachine.volume);
                    break;
                case 'SAMPLER':
                    this.accendiWaveshaper(this.myMonosamp.volume);
                    break;
                case 'MONOOSC':
                    this.accendiWaveshaper(this.myMonoosc.volume);
                    break;
                case 'DOUBLEOOSC':
                    this.accendiWaveshaper(this.myDoubleosc.volume);
                    break;
                case 'NEWSYNTH':
                    this.accendiWaveshaper(this.pan.stereoPannerNode);
                    break;
            }
            this.waveshaperSpenta = false;
        }
        else {
            switch (this.type) {
                case 'DRUM':
                    this.spegniWaveshaper(this.myDrumachine.volume);
                    break;
                case 'SAMPLER':
                    this.spegniWaveshaper(this.myMonosamp.volume);
                    break;
                case 'MONOOSC':
                    this.spegniWaveshaper(this.myMonoosc.volume);
                    break;
                case 'DOUBLEOOSC':
                    this.spegniWaveshaper(this.myDoubleosc.volume);
                    break;
                case 'NEWSYNTH':
                    this.spegniWaveshaper(this.pan.stereoPannerNode);
                    break;
            }
            this.waveshaperSpenta = true;
        }
    }
    spegniWaveshaper(ad) {
        ad.disconnect(this.myWaveshaper.waveshaper);
        if (this.autopanSpenta) {
            this.myWaveshaper.waveshaper.disconnect(this.myTimer.merger);
            ad.connect(this.myTimer.merger);
        }
        else {
            this.myWaveshaper.waveshaper.disconnect(this.myAutopan.panner);
            ad.connect(this.myAutopan.panner);
        }
    }
    accendiWaveshaper(ad) {
        ad.disconnect(this.autopanSpenta ? this.myTimer.merger : this.myAutopan.panner);
        ad.connect(this.myWaveshaper.waveshaper);
        this.myWaveshaper.waveshaper.connect(this.autopanSpenta ? this.myTimer.merger : this.myAutopan.panner);
    }
    accendiAutopan(ad) {
        if (this.waveshaperSpenta) {
            ad.disconnect(this.myAutopan.panner);
            this.myAutopan.panner.disconnect(this.myTimer.merger);
            ad.connect(this.myTimer.merger);
        }
        else {
            this.myWaveshaper.waveshaper.disconnect(this.myAutopan.panner);
            this.myAutopan.panner.disconnect(this.myTimer.merger);
            this.myWaveshaper.waveshaper.connect(this.myTimer.merger);
        }
    }
    spegniAutopan(ad) {
        if (this.waveshaperSpenta) {
            ad.disconnect(this.myTimer.merger);
            ad.connect(this.myAutopan.panner);
        }
        else {
            this.myWaveshaper.waveshaper.disconnect(this.myTimer.merger);
            this.myWaveshaper.waveshaper.connect(this.myAutopan.panner);
        }
        this.myAutopan.panner.connect(this.myTimer.merger);
    }
    setAdrywet() {
        this.myAutopan.change(this.arate, this.adrywet, this.myTimer.audioContext.currentTime);
    }
    onSetSoundParams(params, instrumentType) {
        switch (instrumentType) {
            case 'DRUM':
                if (typeof this.myDrumachine === 'undefined') {
                    this.myDrumachine = new src_classes_mono_drummachine_obj__WEBPACK_IMPORTED_MODULE_0__["MonoDrummachineObj"](this.myTimer.audioContext, this.library);
                    this.myDrumachine.volume.connect(this.myTimer.merger);
                }
                this.myDrumachine.setParams(params, this.index);
                break;
            case 'SAMPLER':
                if (typeof this.myMonosamp === 'undefined') {
                    this.myMonosamp = new _classes_mono_samp_obj__WEBPACK_IMPORTED_MODULE_4__["MonoSampObj"](this.myTimer.audioContext, this.library);
                    this.myMonosamp.volume.connect(this.myTimer.merger);
                }
                this.myMonosamp.setParams(params, this.index);
                break;
            case 'MONOOSC':
                if (typeof this.myMonoosc === 'undefined') {
                    this.myMonoosc = new _classes_mono_osc_obj__WEBPACK_IMPORTED_MODULE_3__["MonooscObj"](this.myTimer.audioContext);
                    this.myMonoosc.volume.connect(this.myTimer.merger);
                }
                this.myMonoosc.setParams(params, this.index);
                break;
            case 'DOUBLEOOSC':
                if (typeof this.myDoubleosc === 'undefined') {
                    this.myDoubleosc = new _classes_duble_osc_obj__WEBPACK_IMPORTED_MODULE_2__["DubleoscObj"](this.myTimer.audioContext);
                    this.myDoubleosc.volume.connect(this.myTimer.merger);
                }
                this.myDoubleosc.setParams(params, this.index);
                break;
        }
    }
    changeConnection() {
        if (this.lfoConOsciJustCon) {
            this.mainOscillator1.disconnectModulatoreDiFrequenza();
            this.lfoConOsciJustCon = false;
        }
        else {
            this.mainOscillator1.setModulatoreDiFrequenza(this.freqOscLfoGain.gainNode);
            this.lfoConOsciJustCon = true;
        }
    }
    changeConnection2() {
        if (this.lfoConOsciJustCon2) {
            this.mainOscillator2.disconnectModulatoreDiFrequenza();
            this.lfoConOsciJustCon2 = false;
        }
        else {
            this.mainOscillator2.setModulatoreDiFrequenza(this.freqOscLfoGain.gainNode);
            this.lfoConOsciJustCon2 = true;
        }
    }
    play($event, instrumentType) {
        this.notaNow = $event;
        if (!this.muted) {
            switch (instrumentType) {
                case 'DRUM':
                    this.myDrumachine.play($event.libIndex, this.index, $event.velocity);
                    break;
                case 'SAMPLER':
                    this.myMonosamp.play($event.notaDaSuonare, this.index, $event.velocity);
                    break;
                case 'MONOOSC':
                    this.myMonoosc.play($event.notaDaSuonare, this.index, $event.velocity);
                    break;
                case 'DOUBLEOOSC':
                    this.myDoubleosc.play($event.notaDaSuonare, this.index, $event.velocity);
                    break;
                case 'NEWSYNTH':
                    this.freqOscLfoGain.play(1);
                    this.lfoFrequencyOscillator.play(1);
                    this.lfoFrequencyFilter.play(1);
                    this.filterLfoGain.play(1);
                    this.mainOscillator1.play($event.notaDaSuonare);
                    this.mainOscillator2.play($event.notaDaSuonare);
                    this.mainGain.play($event.velocity);
                    this.filter.play($event.velocity);
                    break;
            }
        }
    }
    getActiveButton(el) {
        return !el ? (el = true, 'red') : (el = false, 'grey');
    }
}
InstrumentComponent.ɵfac = function InstrumentComponent_Factory(t) { return new (t || InstrumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_7__["TimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_samples_library_service__WEBPACK_IMPORTED_MODULE_8__["SamplesLibraryService"])); };
InstrumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InstrumentComponent, selectors: [["app-instrument"]], viewQuery: function InstrumentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c11, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c12, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.back = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainOscillator1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainOscillator2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainGain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.pan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.lfoFrequencyFilter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filterLfoGain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.lfoFrequencyOscillator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.freqOscLfoGain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.pianoRoll = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainGain1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainGain2 = _t.first);
    } }, inputs: { clipIndex: "clipIndex", name: "name", type: "type", index: "index", pianoRollDimension: "pianoRollDimension", muted: "muted" }, decls: 18, vars: 14, consts: [[2, "width", "100%", "top", "400px", "position", "absolute"], [1, "fx"], [3, "click"], ["type", "number", "min", "0", "max", "60", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "max", "100", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [4, "ngIf"], [2, "position", "relative"], [2, "width", "100%"], [3, "clipIndex", "instrumentType", "la", "pianoRollDimensionIn", "notaDaSuonare"], ["pianoRoll", ""], [3, "typeIn", "name", "parametriSynth"], [1, "a"], [3, "nome"], ["mainOscillator1", ""], [3, "envelope", "nome"], ["mainGain1", ""], ["mainGain", ""], ["colspan", "2", 1, "a"], ["lfoFrequencyFilter", ""], ["filterLfoGain", ""], ["pan", ""], ["rowspan", "2", 1, "a"], ["colspan", "3"], [4, "ngFor", "ngForOf"], ["mainOscillator2", ""], ["mainGain2", ""], ["filter", ""], ["colspan", "3", 1, "a"], ["lfoFrequencyOscillator", ""], ["freqOscLfoGain", ""], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["type", "number", 3, "ngModel", "ngModelChange"]], template: function InstrumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InstrumentComponent_Template_button_click_3_listener() { return ctx.setAutopan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "autopan");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_Template_input_ngModelChange_6_listener($event) { return ctx.arate = $event; })("change", function InstrumentComponent_Template_input_change_6_listener() { return ctx.setAdrywet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " drywet");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_Template_input_ngModelChange_8_listener($event) { return ctx.adrywet = $event; })("change", function InstrumentComponent_Template_input_change_8_listener() { return ctx.setAdrywet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InstrumentComponent_Template_button_click_10_listener() { return ctx.setWaveshaper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "waveshaper");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, InstrumentComponent_div_12_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, InstrumentComponent_div_13_Template, 55, 19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "app-piano-roll-canvas-based", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("notaDaSuonare", function InstrumentComponent_Template_app_piano_roll_canvas_based_notaDaSuonare_16_listener($event) { return ctx.play($event, ctx.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx.name, "-", ctx.index, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](!ctx.autopanSpenta ? "on" : "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.arate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.adrywet);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](!ctx.waveshaperSpenta ? "on" : "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type !== "NEWSYNTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type === "NEWSYNTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("clipIndex", ctx.clipIndex)("instrumentType", ctx.type)("la", ctx.selectedHrtz)("pianoRollDimensionIn", ctx.pianoRollDimension);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_11__["PianoRollCanvasBasedComponent"], _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_12__["SynthControlComponent"], _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_13__["OscComponent"], _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_14__["GainComponent"], _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_15__["StereoPannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__["FilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["CheckboxControlValueAccessor"]], styles: [".intestazione[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.DOUBLEOOSC[_ngcontent-%COMP%] {\n  background-color: #c85a5a;\n  width: 100%;\n  height: 67%;\n  position: absolute;\n}\n\n.MONOOSC[_ngcontent-%COMP%] {\n  background-color: #5ac85a;\n  width: 100%;\n  height: 67%;\n  position: absolute;\n}\n\n.SAMPLER[_ngcontent-%COMP%] {\n  background-color: #5a5ac8;\n  width: 100%;\n  height: 67%;\n  position: absolute;\n}\n\n.NEWSYNTH[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 67%;\n  position: absolute;\n  top: 17%;\n}\n\n.autopan[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n}\n\n.waveshaper[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n}\n\n.chainFxContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 20%;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.intestazioneNEWSYNTH[_ngcontent-%COMP%] {\n  background-color: #64c8c8;\n  height: 38px;\n  line-height: 38px;\n  top: 74%;\n  width: 100%;\n  z-index: 99;\n}\n\n.intestazioneSAMPLER[_ngcontent-%COMP%] {\n  background-color: #6496c8;\n  height: 38px;\n  line-height: 38px;\n  top: 74%;\n  width: 100%;\n  z-index: 99;\n}\n\n.intestazioneMONOOSC[_ngcontent-%COMP%] {\n  background-color: #5ac85a;\n  height: 38px;\n  line-height: 38px;\n  top: 74%;\n  width: 100%;\n  z-index: 99;\n}\n\n.a[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.on[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 10%;\n  border: 3px solid black;\n}\n\n.off[_ngcontent-%COMP%] {\n  background-color: gray;\n  border-radius: 10%;\n  border: 3px solid #1b1b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcaW5zdHJ1bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFFSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBBO0VBQ0ksdUJBQUE7QUFVSjs7QUFQQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQVVKOztBQVJBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBV0oiLCJmaWxlIjoiaW5zdHJ1bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRlc3RhemlvbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ET1VCTEVPT1NDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCA5MCwgOTAsIDEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uTU9OT09TQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCAyMDAsIDkwLCAxKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NyU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLlNBTVBMRVIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MCwgOTAsIDIwMCwgMSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjclO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5ORVdTWU5USCB7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NyU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE3JTtcclxufVxyXG5cclxuLmF1dG9wYW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLndhdmVzaGFwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNoYWluRnhDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDIwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuLmludGVzdGF6aW9uZU5FV1NZTlRIIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAyMDAsIDIwMCwgMSk7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHRvcDogNzQlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG4uaW50ZXN0YXppb25lU0FNUExFUiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAwLCAxNTAsIDIwMCwgMSk7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIHRvcDogNzQlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG4uaW50ZXN0YXppb25lTU9OT09TQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCAyMDAsIDkwLCAxKTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgdG9wOiA3NCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbi5hIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4ub257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG4ub2Zme1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNywgMjcsIDI3KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_classes_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/classes/utilities */ "iWBn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../start-stop/start-stop.component */ "8+E6");
/* harmony import */ var _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timer-control/timer-control.component */ "DILc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../instrument/instrument.component */ "Se8A");











const _c0 = ["instrumentsViews"];
function AppComponent_div_27_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_27_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const clip_r7 = ctx.$implicit; const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.setClip(i_r5, clip_r7.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clip_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", clip_r7.color);
} }
function AppComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.collassaInstrument(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_27_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.collassaInstrument(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_27_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.remove(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_27_Template_button_click_10_listener() { const instrument_r4 = ctx.$implicit; return instrument_r4.isMuted ? instrument_r4.isMuted = false : instrument_r4.isMuted = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "volume_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_27_Template_span_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.solo(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AppComponent_div_27_div_22_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrument_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border", ctx_r1.getSelectedTrakBorderStyle(instrument_r4.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r1.getInstrumentColor(instrument_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r1.getActiveColor(instrument_r4.isMuted));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](instrument_r4.isSolo ? "on" : "off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", instrument_r4.name.length > 5 ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](19, 11, instrument_r4.name, 0, 5) + ".." : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 15, instrument_r4.name), " TRACK N\u00B0 ", i_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", instrument_r4.clips);
} }
function AppComponent_div_48_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "keyboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_48_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r18 + 1);
} }
function AppComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_48_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const i_r18 = ctx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.setClipMassive(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_48_mat_icon_4_Template, 2, 0, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_48_span_5_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clip_r17 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", clip_r17.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", clip_r17.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isActiveKeyboardControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isActiveKeyboardControl);
} }
function AppComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-instrument", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrument_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r3.getDisplay(instrument_r24.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clipIndex", instrument_r24.clipPlaying)("name", instrument_r24.name)("type", instrument_r24.type)("index", i_r25)("pianoRollDimension", instrument_r24.pianoRollDimension)("muted", instrument_r24.isMuted);
} }
class AppComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.isActiveKeyboardControl = false;
        this.pianorolldimension = 1280 * 2;
        this.clips = [];
        this.instruments = [];
        this.pianoRollDimension = 640;
        this.masterGain = 1;
        this.monooscClipColor = 'rgba(90, 200, 90, 0.2)';
        this.newsynthClipColor = 'rgba(100, 200, 200, 0.2)';
        this.samplerClipColor = 'rgba(90, 90, 200, 0.2)';
        this.bianco = 'rgb(215, 215, 215)';
        this.verde = '#00d600';
        this.clipsMaster = this.instantiateClipsArray(this.bianco);
        this.connectMaster = this.myTimer.merger;
    }
    onKeyDown(ev) {
        if (ev.key === 'Control') {
            this.isActiveKeyboardControl ? this.isActiveKeyboardControl = false : this.isActiveKeyboardControl = true;
        }
        if (this.isActiveKeyboardControl) {
            if (ev.key === 'Enter') {
                if (this.myTimer.isPlayed) {
                    this.myTimer.stop();
                }
                else {
                    this.myTimer.play();
                }
            }
            if (ev.key === '1') {
                this.setClipMassive(0);
            }
            if (ev.key === '2') {
                this.setClipMassive(1);
            }
            if (ev.key === '3') {
                this.setClipMassive(2);
            }
            if (ev.key === '4') {
                this.setClipMassive(3);
            }
        }
    }
    onChangeMaster() {
        this.myTimer.merger.gain.setValueAtTime(this.masterGain, this.myTimer.audioContext.currentTime);
    }
    activeKeyboardControl() {
        this.isActiveKeyboardControl ? this.isActiveKeyboardControl = false : this.isActiveKeyboardControl = true;
    }
    getActiveColor(boolProp) {
        return boolProp ? '#dfff2d' : null;
    }
    getSelectedTrakBorderStyle(isCollapsed) {
        return isCollapsed ? '9px solid white' : '9px solid red';
    }
    setClipMassive(clipIndex) {
        let i = 0;
        for (const inst in this.instruments) {
            this.setClip(i, clipIndex);
            i++;
        }
        if (!this.myTimer.isPlayed) {
            this.myTimer.play();
        }
        this.changeColorClipRoutine(this.clipsMaster, clipIndex, this.verde, this.bianco);
    }
    changeColorClipRoutine(clipArray, clipIndex, focusColor, unfocusColor) {
        //se non è lei non faccio nulla
        if (!clipArray[clipIndex].isActive) {
            //se è lei
            //cerco quella attiva
            for (let i = 0; i < clipArray.length; i++) {
                if (clipArray[i].isActive) {
                    //disattivare quella attiva
                    clipArray[i].isActive = false;
                    //e riportarla del suo colore già che ci sono
                    clipArray[i].color = unfocusColor;
                }
            }
            //devo attivare lei
            clipArray[clipIndex].isActive = true;
            //e colorarla
            clipArray[clipIndex].color = focusColor;
        }
        return clipArray;
    }
    solo(instrumenIndex) {
        if (this.instruments[instrumenIndex].isSolo) {
            for (let i = 0; i < this.instruments.length; i++) {
                if (i !== instrumenIndex) {
                    this.instruments[i].isMuted = true;
                }
            }
            this.instruments[instrumenIndex].isSolo = false;
        }
        else {
            for (let i = 0; i < this.instruments.length; i++) {
                if (i !== instrumenIndex) {
                    this.instruments[i].isMuted = false;
                }
            }
            this.instruments[instrumenIndex].isSolo = true;
        }
    }
    setClip(instrumenIndex, clipIndex) {
        if (!this.myTimer.isPlayed) {
            this.myTimer.play();
        }
        switch (this.instruments[instrumenIndex].type) {
            case 'MONOOSC':
                this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.monooscClipColor);
                break;
            case 'SAMPLER':
                this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.samplerClipColor);
                break;
            case 'NEWSYNTH':
                this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.newsynthClipColor);
                break;
            case 'DRUM':
                this.changeColorClipRoutine(this.instruments[instrumenIndex].clips, clipIndex, this.verde, this.newsynthClipColor);
                break;
        }
        this.instrumentsViews.toArray()[instrumenIndex].setClip(clipIndex);
    }
    addDrummachine() {
        const clips = this.instantiateClipsArray(this.monooscClipColor);
        this.instruments.push({
            name: 'Drum' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: this.pianorolldimension,
            params: [],
            type: 'DRUM',
            clipPlaying: 0,
            clips: clips,
            isMuted: false,
            isSolo: true,
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    addMonoosc() {
        const clips = this.instantiateClipsArray(this.monooscClipColor);
        this.instruments.push({
            name: 'Monoos' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: this.pianorolldimension,
            params: [],
            type: 'MONOOSC',
            clipPlaying: 0,
            clips: clips,
            isMuted: false,
            isSolo: true
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    addSynth() {
        const clips = this.instantiateClipsArray(this.newsynthClipColor);
        this.instruments.push({
            name: 'Synth' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: this.pianorolldimension,
            params: [],
            type: 'NEWSYNTH',
            clipPlaying: 0,
            clips: clips,
            isMuted: false,
            isSolo: true
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    addSampler() {
        const clips = this.instantiateClipsArray(this.samplerClipColor);
        this.instruments.push({
            name: 'Sampl' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: this.pianorolldimension,
            params: [],
            type: 'SAMPLER',
            clipPlaying: 0,
            clips: clips,
            isMuted: false,
            isSolo: true
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    collassaInstrument(instrumentIndex) {
        for (let i = 0; i < this.instruments.length; i++) {
            if (i !== instrumentIndex) {
                this.instruments[i].isCollapsed = true;
            }
            else {
                this.instruments[i].isCollapsed = false;
            }
        }
        // this.instruments[instrumentIndex].isCollapsed === true ? this.instruments[instrumentIndex].isCollapsed = false : this.instruments[instrumentIndex].isCollapsed = true;
    }
    instantiateClipsArray(color) {
        let clips = [];
        for (let i = 0; i < 4; i++) {
            clips.push({
                color: color,
                index: i,
                isActive: false,
                trakNumber: this.instruments.length,
                fakeMode: false
            });
        }
        return clips;
    }
    remove(index) {
        this.myTimer.removeTrack(index);
        this.instruments.splice(index, 1);
    }
    onSearchChange() {
        this.myTimer.merger.gain.setValueAtTime(this.masterGain, this.myTimer.audioContext.currentTime);
    }
    collapse(instrument) {
        instrument.isCollapsed ? instrument.isCollapsed = false : instrument.isCollapsed = true;
    }
    getDisplay(bol) {
        return bol ? 'none' : 'block';
    }
    getInstrumentColor(instrumentType) {
        return src_classes_utilities__WEBPACK_IMPORTED_MODULE_0__["Utilities"].getInstrumentColor(instrumentType);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.instrumentsViews = _t);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function AppComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 51, vars: 7, consts: [[2, "background-color", "chartreuse", "height", "50px", "line-height", "50px"], [2, "font-size", "150%"], [1, "example-spacer"], ["type", "number", "min", "0.01", "max", "1", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["matTooltip", "Add instrument", 3, "matMenuTriggerFor"], ["matTooltip", "Enable keyboard control click or press CTRL", 3, "click"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "basic", 3, "click"], [1, "example-sidenav-content"], [1, "row1"], ["class", "instrument", 3, "border", "click", 4, "ngFor", "ngForOf"], [1, "instrument"], [1, "instrumentToolbar"], [1, "instHeader", 2, "border", "9px solid grey"], [1, "row4"], ["disabled", ""], [2, "font-size", "145%"], [1, "trakTitle"], [1, "clipsContiner"], ["class", "clip", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "instrumentsContainer"], ["class", "instrumentPanel", 4, "ngFor", "ngForOf"], [1, "instrument", 3, "click"], [1, "instHeader"], [3, "click"], [2, "font-size", "145%", 3, "click"], [1, "clip"], [4, "ngIf"], [1, "instrumentPanel"], [1, "instrumentContainer"], [3, "clipIndex", "name", "type", "index", "pianoRollDimension", "muted"], ["instrumentsViews", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Easy Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-start-stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-timer-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Volume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.masterGain = $event; })("change", function AppComponent_Template_input_change_8_listener() { return ctx.onChangeMaster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Add instrument");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Keyboard control ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.activeKeyboardControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() { return ctx.addSampler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Add sampler");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { return ctx.addSynth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Add Synth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.addDrummachine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Add Drum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, AppComponent_div_27_Template, 23, 17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "tune");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "volume_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "MASTER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AppComponent_div_48_Template, 6, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, AppComponent_div_50_Template, 4, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.masterGain);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx.getActiveColor(ctx.isActiveKeyboardControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instruments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.clipsMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.instruments);
    } }, directives: [_start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_3__["StartStopComponent"], _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_4__["TimerControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__["InstrumentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.instrumentContainer[_ngcontent-%COMP%] {\n  min-width: 99%;\n  width: 100%;\n}\n\n.controllContainer[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 75px;\n  background-color: cadetblue;\n  position: fixed;\n  z-index: 9;\n  top: 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: red;\n  left: 100px;\n}\n\n.instrumentToolbar[_ngcontent-%COMP%] {\n  width: 200px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-left: 1px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 3 auto;\n}\n\n.example-spacerz[_ngcontent-%COMP%] {\n  flex: 10 13 auto;\n}\n\n.mixerTrack[_ngcontent-%COMP%] {\n  float: left;\n  background-color: rgba(60, 60, 60, 0.7);\n  height: 600px;\n  border: 1px solid;\n  margin-left: 5px;\n  width: 150px;\n  max-width: 150px;\n  top: 70px;\n  position: relative;\n}\n\n.mixerContainer[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n\n.DOUBLEOOSC[_ngcontent-%COMP%] {\n  background-color: rgba(200, 90, 90, 0.4);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.MONOOSC[_ngcontent-%COMP%] {\n  background-color: rgba(90, 200, 90, 0.4);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.SAMPLER[_ngcontent-%COMP%] {\n  background-color: rgba(90, 90, 200, 0.4);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.MASTER[_ngcontent-%COMP%] {\n  float: left;\n  background-color: rgba(60, 60, 60, 0.7);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.mixerTrackMstr[_ngcontent-%COMP%] {\n  height: 221px;\n  border: 1px solid;\n  margin-left: 5px;\n  width: 197px;\n  \n  top: 70px;\n  position: absolute;\n  right: 3px;\n}\n\n.instrument[_ngcontent-%COMP%] {\n  position: relative;\n  float: left;\n  left: 1px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.masterGainIn[_ngcontent-%COMP%] {\n  top: 130px;\n  position: relative;\n}\n\n.instrumentPanel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.trakTitle[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.clip[_ngcontent-%COMP%] {\n  border-top: 1px solid white;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: black;\n  color: white;\n  width: 100%;\n}\n\n.clipsContiner[_ngcontent-%COMP%] {\n  border-top: 3px solid white;\n  left: 1px;\n  height: 100%;\n}\n\n.trakTitleSecondLine[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.tracksContainer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.instrumentsContainer[_ngcontent-%COMP%] {\n  height: 69%;\n}\n\n.row1[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  background-color: gray;\n  border: 1px solid black;\n}\n\n.row4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  background-color: gray;\n  border: 1px solid black;\n}\n\n.row5[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  background-color: gray;\n  border: 1px solid black;\n}\n\n.on[_ngcontent-%COMP%] {\n  background-color: red;\n  border-radius: 10%;\n  border: 3px solid black;\n}\n\n.off[_ngcontent-%COMP%] {\n  background-color: green;\n  border-radius: 10%;\n  border: 3px solid #1b1b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBTUo7O0FBSkE7RUFDSSx1QkFBQTtBQU9KOztBQUxBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksV0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBV0o7O0FBVEE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFZSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFZSjs7QUFWQTtFQUNJLFdBQUE7QUFhSjs7QUFYQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksa0JBQUE7QUFlSjs7QUFaQTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFlSjs7QUFiQTtFQUNJLDJCQUFBO0FBZ0JKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFnQko7O0FBZEE7RUFDSSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWZBO0VBQ0ksZUFBQTtBQWtCSjs7QUFkQTtFQUNJLFdBQUE7QUFpQko7O0FBZkE7RUFDSSxZQUFBO0FBa0JKOztBQWhCQTtFQUNJLFdBQUE7QUFtQko7O0FBZkE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBc0JKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5pbnN0cnVtZW50Q29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogOTklO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRyb2xsQ29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgdG9wOiAtMHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbn1cclxuLmluc3RydW1lbnRUb29sYmFyIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMyBhdXRvO1xyXG59XHJcbi5leGFtcGxlLXNwYWNlcnoge1xyXG4gICAgZmxleDogMTAgMTMgYXV0bztcclxufVxyXG4ubWl4ZXJUcmFjayB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDYwLCA2MCwgMC43KTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gICAgdG9wOiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5taXhlckNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uRE9VQkxFT09TQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgOTAsIDkwLCAwLjQpO1xyXG4gICAgbWF4LWhlaWdodDogMjBweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLk1PTk9PU0Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MCwgMjAwLCA5MCwgMC40KTtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5TQU1QTEVSIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTAsIDkwLCAyMDAsIDAuNCk7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uTUFTVEVSIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAwLjcpO1xyXG4gICAgbWF4LWhlaWdodDogMjBweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWl4ZXJUcmFja01zdHIge1xyXG4gICAgaGVpZ2h0OiAyMjFweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxOTdweDtcclxuICAgIC8qIG1heC13aWR0aDogMTUwcHg7ICovXHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogM3B4O1xyXG59XHJcblxyXG4uaW5zdHJ1bWVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxlZnQ6IDFweDtcclxufVxyXG4uYnV0dG9ucyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ubWFzdGVyR2FpbkluIHtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmluc3RydW1lbnRQYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50cmFrVGl0bGUge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jbGlwIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2xpcHNDb250aW5lciB7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG59XHJcbi50cmFrVGl0bGVTZWNvbmRMaW5lIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuXHJcbi50cmFja3NDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmluc3RydW1lbnRzQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA2OSU7XHJcbiAgICBcclxufVxyXG5cclxuLnJvdzEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLnJvdzQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLnJvdzUge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLm9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuLm9mZntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDI3LCAyNywgMjcpO1xyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "VdW8":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=worker-two!./src/core/graphic/piano-roll-canvas-based/helper.worker.ts ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "worker-two.worker.js"

/***/ }),

/***/ "Wohp":
/*!***********************************************************************!*\
  !*** ./src/audio-components/stereo-panner/stereo-panner.component.ts ***!
  \***********************************************************************/
/*! exports provided: StereoPannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StereoPannerComponent", function() { return StereoPannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/timer.service */ "IqJH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class StereoPannerComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.pan = 0;
        this.stereoPannerNode = this.myTimer.audioContext.createStereoPanner();
    }
    ngOnInit() {
    }
    play(veloPan) {
        //TODO
        if (!this.isStarted) {
            this.isStarted = true;
        }
        this.stereoPannerNode.pan.setValueAtTime(this.pan + veloPan, this.myTimer.audioContext.currentTime);
    }
    changePan() {
        this.stereoPannerNode.pan.setValueAtTime(this.pan, this.myTimer.audioContext.currentTime);
    }
    connectToAudioParam(ap) {
        this.stereoPannerNode.connect(ap);
    }
    connectToAudioNode(an) {
        this.stereoPannerNode.connect(an);
    }
}
StereoPannerComponent.ɵfac = function StereoPannerComponent_Factory(t) { return new (t || StereoPannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
StereoPannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StereoPannerComponent, selectors: [["app-stereo-panner"]], decls: 7, vars: 1, consts: [["type", "number", "min", "-1", "max", "1", "step", "0.1", 3, "ngModel", "ngModelChange", "change"]], template: function StereoPannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StereoPannerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.pan = $event; })("change", function StereoPannerComponent_Template_input_change_6_listener() { return ctx.changePan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pan);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVyZW8tcGFubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../start-stop/start-stop.component */ "8+E6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/graphic/piano-roll-canvas-based/piano-roll-canvas-based.component */ "aICo");
/* harmony import */ var _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../timer-control/timer-control.component */ "DILc");
/* harmony import */ var _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../synth-control/synth-control.component */ "2IbU");
/* harmony import */ var _services_samples_library_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/samples-library.service */ "ZOSq");
/* harmony import */ var _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../instrument/instrument.component */ "Se8A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../adsr/adsr.component */ "yvez");
/* harmony import */ var _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../audio-components/osc/osc.component */ "Njh4");
/* harmony import */ var _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../audio-components/gain/gain.component */ "Mx7m");
/* harmony import */ var _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../audio-components/stereo-panner/stereo-panner.component */ "Wohp");
/* harmony import */ var _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../audio-components/filter/filter.component */ "6+A9");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"], AudioContext, _services_samples_library_service__WEBPACK_IMPORTED_MODULE_9__["SamplesLibraryService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_4__["StartStopComponent"],
        _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_7__["TimerControlComponent"],
        _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_8__["SynthControlComponent"],
        _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__["InstrumentComponent"],
        _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_12__["AdsrComponent"],
        _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_13__["OscComponent"],
        _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_14__["GainComponent"],
        _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_15__["StereoPannerComponent"],
        _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__["FilterComponent"],
        _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_6__["PianoRollCanvasBasedComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "ZOSq":
/*!*************************************************!*\
  !*** ./src/services/samples-library.service.ts ***!
  \*************************************************/
/*! exports provided: SamplesLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplesLibraryService", function() { return SamplesLibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SamplesLibraryService {
    constructor(_audioContext) {
        this._audioContext = _audioContext;
        this.buffers = [];
        this.loadSounds('../../assets/wav/bigkick1.wav'); // hit
        this.loadSounds('../../assets/wav/newSnapSnare.wav');
        this.loadSounds('../../assets/wav/HAT2alfa.wav');
        this.loadSounds('../../assets/wav/a_1d.wav');
        this.loadSounds('../../assets/wav/MD4_CouldntBeEasier.wav');
        this.loadSounds('../../assets/wav/frperc.wav');
        this.loadSounds('../../assets/wav/xcrash.wav');
    }
    loadSounds(path) {
        const request = new XMLHttpRequest();
        request.open('GET', path, true);
        request.responseType = 'arraybuffer';
        const context = this._audioContext;
        request.onload = () => {
            context.decodeAudioData(request.response, buffer => {
                if (!buffer) {
                    alert('error decoding file data: ' + path);
                    return;
                }
                // @ts-ignore*/
                this.buffers.push(buffer);
            }, error => {
                console.error('decodeAudioData error', error);
            });
        };
        request.onerror = () => {
            alert('BufferLoader: XHR error');
        };
        request.send();
    }
}
SamplesLibraryService.ɵfac = function SamplesLibraryService_Factory(t) { return new (t || SamplesLibraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AudioContext)); };
SamplesLibraryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SamplesLibraryService, factory: SamplesLibraryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "aICo":
/*!***************************************************************************************!*\
  !*** ./src/core/graphic/piano-roll-canvas-based/piano-roll-canvas-based.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PianoRollCanvasBasedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack__worker__0) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PianoRollCanvasBasedComponent", function() { return PianoRollCanvasBasedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_classes_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/classes/utilities */ "iWBn");
/* harmony import */ var _classes_line_of_squares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../classes/line-of-squares */ "2hE6");
/* harmony import */ var _classes_octave__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../classes/octave */ "y2/s");
/* harmony import */ var _classes_square__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../classes/square */ "8YgR");
/* harmony import */ var _classes_user_gui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../classes/user-gui */ "EF+d");
/* harmony import */ var _classes_velocity_gui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../classes/velocity-gui */ "kXXi");
/* harmony import */ var _classes_loopper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../classes/loopper */ "NlGF");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/timer.service */ "IqJH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











const _c0 = ["canvas"];
const _c1 = ["canvasGui"];
const _c2 = ["canvasLooper"];
const _c3 = ["canvasVelo"];
const _c4 = ["canvasProva"];
class PianoRollCanvasBasedComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.notaDaSuonare = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.velocity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clipIndex = 0;
        this.lato = 0;
        this.pianoRollDimension = 0;
        this.notes = {
            notesObject: [],
            notesValue: []
        };
        this.freq = [];
        this.startLoop = 0;
        this.endLoop = 16;
        this.clips = [];
        this.selectedClipIndex = 0;
        this.worker = new Worker(__webpack__worker__0, { type:undefined, name: 'worker-two' });
        this.canvasHeight = 960;
    }
    getInstrumentColor() {
        return src_classes_utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"].getInstrumentColor(this.instrumentType);
    }
    ngAfterViewInit() {
        var _a;
        let htmlCanvas;
        htmlCanvas = this.canvasProva.nativeElement;
        this.offscreen = htmlCanvas.transferControlToOffscreen();
        // @ts-ignore*/
        this.lato = ((_a = this.canvasGui.nativeElement.getContext("2d")) === null || _a === void 0 ? void 0 : _a.canvas.width) / 128;
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
        this.myVelocity = new _classes_velocity_gui__WEBPACK_IMPORTED_MODULE_6__["VelocityGui"](0, 0, this.ctxVelo, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
        this.logicTimeMarker = new _classes_line_of_squares__WEBPACK_IMPORTED_MODULE_2__["LineOfSquares"](this.lato, -this.lato, 0, "0,0,0", 100, 58, "VERTICALE", 0);
        this.userGui = new _classes_user_gui__WEBPACK_IMPORTED_MODULE_5__["UserGui"](this.lato, 0, this.ctxGui, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
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
    runClip1(clipIndex) {
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
    setStartLopper() {
        _classes_loopper__WEBPACK_IMPORTED_MODULE_7__["Loopper"].onChange(this.startLoop * this.lato, this.endLoop * this.lato, this.ctxLoopper);
    }
    tick() {
        let range = this.startLoop + this.endLoop;
        this.worker.postMessage({ lato: this.lato, end: range, pos: (this.logicTimeMarker.getX() * this.lato) + this.lato });
        if (this.logicTimeMarker.getX() == (range - 1) || this.logicTimeMarker.getX() == (this.pianoRollDimensionIn / this.lato - 1)) {
            this.logicTimeMarker.setX(this.startLoop);
            if (this.notes.notesObject[this.logicTimeMarker.getX()].isStanding()) {
                this.playStep(this.logicTimeMarker.getX());
            }
        }
        else {
            this.logicTimeMarker.moveRight();
            if (this.notes.notesObject.length > 0) {
                if (typeof this.notes.notesObject[this.logicTimeMarker.getX()] !== 'undefined' && this.notes.notesObject[this.logicTimeMarker.getX()].isStanding()) {
                    this.playStep(this.logicTimeMarker.getX());
                }
            }
        }
    }
    createScale(la) {
        if (typeof la === 'undefined') {
            la = 110;
        }
        for (let i = 0; i < 4; i++) {
            let a = la * Math.pow(2, i);
            let octave = new _classes_octave__WEBPACK_IMPORTED_MODULE_3__["Octave"](a);
            for (let l = 0; l < octave.getArray().length; l++) {
                this.freq.push(octave.getArray()[l]);
            }
        }
        this.freq = this.freq.sort(function (a, b) { return a > b ? -1 : 1; });
    }
    playStep(index) {
        this.notaDaSuonare.emit({
            notaDaSuonare: this.notes.notesObject[index].getTune(),
            velocity: this.notes.notesObject[index].velocity,
            libIndex: this.notes.notesObject[index].indice
        });
    }
    populateEnemiesArray() {
        let notes = [];
        for (let i = 0; i < this.ctx.canvas.width / this.lato; i++) {
            notes.push(new _classes_square__WEBPACK_IMPORTED_MODULE_4__["Square"](this.lato, i, 0, "100,100,100", this.ctx, 0, i));
            notes[i].velocity = 1;
            notes[i].standUp();
            notes[i].kill();
        }
        return notes;
    }
    random() {
        this.clear();
        for (let i = 0; i < this.notes.notesObject.length; i++) {
            let tonoRandom = src_classes_utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"].getRandomInt(this.freq.length, 0);
            this.setNote(this.notes.notesObject[i], this.freq[tonoRandom], tonoRandom, 1, true);
            this.setNote(this.clips[this.selectedClipIndex].notesObject[i], this.freq[tonoRandom], tonoRandom, 1, true);
            this.notes.notesValue[i] = this.freq[tonoRandom];
            this.clips[this.selectedClipIndex].notesValue[i] = this.freq[tonoRandom];
            this.myVelocity.drawVertLine({ x: i, y: 0 }, true);
            this.myVelocity.cancelVertLine({ x: i, y: this.notes.notesObject[i].velocity });
        }
    }
    setNote(nota, tune, y, velocity, isStand) {
        if (isStand) {
            nota.velocity = velocity;
            nota.indice = tune;
            nota.setTune(tune);
            nota.setY(tune - 1);
            nota.standUp();
        }
        else {
            nota.velocity = velocity;
            nota.indice = tune;
            nota.setTune(tune);
            nota.setY(tune - 1);
            nota.kill();
        }
    }
    setClip(index) {
        this.runClip1(index);
    }
    clear() {
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
    getMousePos(evt, canvas) {
        let rect = canvas.getBoundingClientRect();
        return {
            x: Math.floor((evt.clientX - rect.left) / this.lato),
            y: Math.floor((evt.clientY - rect.top) / this.lato)
        };
    }
    handleChange(evt) {
        let coo = this.getMousePos(evt, this.ctx.canvas);
        if (this.notes.notesObject[coo.x].isStanding()) {
            this.notes.notesObject[coo.x].kill();
            this.clips[this.selectedClipIndex].notesObject[coo.x].kill();
            this.myVelocity.drawVertLine({ x: coo.x, y: 0 }, false);
        }
        else {
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
        let coo = this.getMousePos(evt, this.ctxVelo.canvas);
        if (this.notes.notesObject[coo.x].isStanding()) {
            this.myVelocity.cancelVertLine(coo);
            switch (coo.y) {
                case 0:
                    this.notes.notesObject[coo.x].velocity = 1;
                    break;
                case 1:
                    this.notes.notesObject[coo.x].velocity = 0.6;
                    break;
                case 2:
                    this.notes.notesObject[coo.x].velocity = 0.3;
                    break;
                default:
                    this.notes.notesObject[coo.x].velocity = 0;
                    break;
            }
        }
    }
    getExternalDimension() {
        return this.pianoRollDimensionIn;
    }
}
PianoRollCanvasBasedComponent.ɵfac = function PianoRollCanvasBasedComponent_Factory(t) { return new (t || PianoRollCanvasBasedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_8__["TimerService"])); };
PianoRollCanvasBasedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PianoRollCanvasBasedComponent, selectors: [["app-piano-roll-canvas-based"]], viewQuery: function PianoRollCanvasBasedComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasGui = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasLooper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasVelo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasProva = _t.first);
    } }, inputs: { la: "la", pianoRollDimensionIn: "pianoRollDimensionIn", clipIndex: "clipIndex", instrumentType: "instrumentType" }, outputs: { notaDaSuonare: "notaDaSuonare", velocity: "velocity" }, decls: 19, vars: 12, consts: [[1, "esterna", 2, "position", "absolute", "width", "100%", "height", "342px"], [1, "pianoRollToolbar"], ["type", "number", "min", "0", 2, "width", "50px", 3, "ngModel", "ngModelChange", "change"], ["type", "number", 2, "width", "50px", 3, "ngModel", "ngModelChange", "change"], [1, "allCanvas"], [1, "cnvsContainer", 2, "z-index", "2"], [1, "bg-layer", 2, "z-index", "0", 3, "width", "height", "click"], ["canvasGui", ""], [1, "game-layer", 2, "z-index", "4", 3, "width", "height", "click"], ["canvas", ""], [1, "game-layer", 3, "width", "height"], ["canvasProva", ""], ["height", "60", 1, "velocity-layer", 2, "display", "none", 3, "width", "click"], ["canvasVelo", ""], ["height", "4", 1, "looper-layer", 2, "z-index", "2", 3, "width"], ["canvasLooper", ""]], template: function PianoRollCanvasBasedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Loop start :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PianoRollCanvasBasedComponent_Template_input_ngModelChange_4_listener($event) { return ctx.startLoop = $event; })("change", function PianoRollCanvasBasedComponent_Template_input_change_4_listener() { return ctx.setStartLopper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " length : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PianoRollCanvasBasedComponent_Template_input_ngModelChange_6_listener($event) { return ctx.endLoop = $event; })("change", function PianoRollCanvasBasedComponent_Template_input_change_6_listener() { return ctx.setStartLopper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "canvas", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_canvas_click_9_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "canvas", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_canvas_click_11_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "canvas", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "canvas", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_canvas_click_15_listener($event) { return ctx.handleChangeVelo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "canvas", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.getInstrumentColor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endLoop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.pianoRollDimensionIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.canvasHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.pianoRollDimensionIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.canvasHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.pianoRollDimensionIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("height", ctx.canvasHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.pianoRollDimensionIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.pianoRollDimensionIn);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], styles: ["canvas[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.cnvsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 344px;\n  position: absolute;\n  overflow: scroll;\n  left: 0px;\n  z-index: 2;\n}\n\n.velocity-layer[_ngcontent-%COMP%] {\n  float: left;\n  align-content: center;\n  background-color: burlywood;\n  overflow: auto;\n  top: 383px;\n  border: 1px solid grey;\n  z-index: 0;\n}\n\n.pianoRollToolbar[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #bd0000;\n  height: 38px;\n  line-height: 38px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 3 auto;\n}\n\n.allCanvas[_ngcontent-%COMP%] {\n  height: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwaWFuby1yb2xsLWNhbnZhcy1iYXNlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6InBpYW5vLXJvbGwtY2FudmFzLWJhc2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNudnNDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM0NHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi52ZWxvY2l0eS1sYXllciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdG9wOiAzODNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ucGlhbm9Sb2xsVG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg5LCAwLCAwKTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAzIGF1dG87XHJcbn1cclxuLmFsbENhbnZhcyB7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxufVxyXG5cclxuIl19 */"], changeDetection: 0 });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=worker-two!./helper.worker */ "VdW8")))

/***/ }),

/***/ "g5sO":
/*!**************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=worker-time!./src/services/time.worker.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "worker-time.worker.js"

/***/ }),

/***/ "iWBn":
/*!**********************************!*\
  !*** ./src/classes/utilities.ts ***!
  \**********************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
class Utilities {
    static getRandomInt(maxValue, minValue) {
        return Math.floor(Math.random() * (maxValue - 0)) + minValue;
    }
    static makeid(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    static getInstrumentColor(instrumentType) {
        switch (instrumentType) {
            case 'SYNTH': break;
            case 'SAMPLER':
                return 'rgba(90, 90, 200, 0.4)';
            case 'MONOOSC':
                return 'rgba(90, 200, 90, 0.4)';
            case 'DOUBLEOOSC':
                return 'rgba(200, 90, 90, 0.4)';
            case 'NEWSYNTH':
                return 'rgba(100, 200, 200, 0.4)';
            default:
                return 'rgba(200, 200, 200, 0.4)';
                break;
        }
        return null;
    }
}


/***/ }),

/***/ "jL/A":
/*!******************************!*\
  !*** ./src/classes/shape.ts ***!
  \******************************/
/*! exports provided: Shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
class Shape {
    constructor(x, y, color) {
        this.isUcciso = false;
        this.posX = x;
        this.posY = y;
        this.color = color;
        this._isStanding = false;
    }
    isStanding() {
        return this._isStanding;
    }
    getX() {
        return this.posX;
    }
    getY() {
        return this.posY;
    }
    getColor() {
        return this.color;
    }
    setColor(val) {
        this.color = val;
    }
    setX(val) {
        this.posX = val;
    }
    setY(val) {
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
    draw() {
    }
    erase() {
    }
}


/***/ }),

/***/ "kXXi":
/*!*************************************!*\
  !*** ./src/classes/velocity-gui.ts ***!
  \*************************************/
/*! exports provided: VelocityGui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VelocityGui", function() { return VelocityGui; });
class VelocityGui {
    constructor(x, y, ctxGui, par, collisions, color, lato) {
        this.par = par;
        this.collisions = collisions;
        this.ctxGui = ctxGui;
        this.lato = lato;
    }
    setCollisions(value) {
        this.collisions = value;
    }
    draw() {
        this.ctxGui.rect(0, 0, this.ctxGui.canvas.width, this.ctxGui.canvas.height);
        this.ctxGui.fillStyle = 'white';
        this.ctxGui.fill();
    }
    randomColorString() {
        return (this.getRandomInt(255, 0) +
            "," +
            this.getRandomInt(255, 0) +
            "," +
            this.getRandomInt(255, 0));
    }
    getRandomInt(maxValue, minValue) {
        return Math.floor(Math.random() * (maxValue - 0)) + minValue;
    }
    drawVertLine(coo, isgrey) {
        let colorePrincipale = isgrey ? 'grey' : 'white';
        this.ctxGui.strokeStyle = "white";
        this.ctxGui.beginPath();
        this.ctxGui.fillStyle = colorePrincipale;
        this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato, coo.y * this.lato + this.lato);
        this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato, this.lato, coo.y * this.lato + this.lato);
        this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato * 2, this.lato, coo.y * this.lato + this.lato);
        this.ctxGui.stroke();
    }
    cancelVertLine(coo) {
        switch (coo.y) {
            case 0:
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato, this.lato);
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato, this.lato, this.lato);
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato + this.lato * 2, this.lato, this.lato);
                this.ctxGui.fill();
                this.ctxGui.stroke();
                break;
            case 1:
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato, this.lato); //mezzo
                this.ctxGui.fillStyle = 'white';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato - this.lato, this.lato, this.lato); //alto
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato * 2, this.lato, this.lato);
                this.ctxGui.fill();
                this.ctxGui.stroke();
                break;
            case 2:
                this.ctxGui.fillStyle = 'grey';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato, this.lato, this.lato);
                this.ctxGui.fillStyle = 'white';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato - this.lato, this.lato, this.lato);
                this.ctxGui.fillStyle = 'white';
                this.ctxGui.fillRect(coo.x * this.lato, coo.y * this.lato - this.lato * 2, this.lato, this.lato);
                this.ctxGui.fill();
                this.ctxGui.stroke();
                break;
        }
    }
}


/***/ }),

/***/ "n6+X":
/*!**************************************!*\
  !*** ./src/classes/duble-osc-obj.ts ***!
  \**************************************/
/*! exports provided: DubleoscObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DubleoscObj", function() { return DubleoscObj; });
/* harmony import */ var _abstract_monoosc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-monoosc */ "tivR");

class DubleoscObj extends _abstract_monoosc__WEBPACK_IMPORTED_MODULE_0__["AbstractMonoosc"] {
    constructor(audioContext) {
        super(audioContext);
        this.audioContext = audioContext;
        this.born();
    }
    play(freq, synthControlIndex, velocity) {
        let syntControl = this.getAllSynthControl()[synthControlIndex];
        if (!syntControl.isMuted) {
            this.castOscWaveform(syntControl.lfoWaveSelected, this.lfoOsc);
            this.castOscWaveform(syntControl.waveSelected, this.osc);
            this.castOscWaveform(syntControl.waveSelected, this.osc2);
            this.castFilterWave(synthControlIndex, this.biquadFilter);
            this.setAdsr(this.gainNode.gain, syntControl.adsr, this.audioContext.currentTime);
            // this.setAdsr(this.osc.frequency, syntControl.adsrPitch, this.audioContext.currentTime);
            // this.setAdsr(this.osc2.frequency, syntControl.adsrPitch, this.audioContext.currentTime);
            this.gai2.gain.value = 4;
            this.gai1.gain.value = 6;
            this.osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);
            this.osc2.frequency.setValueAtTime(freq / syntControl.pitchEnvelope.end, this.audioContext.currentTime);
            this.volume.gain.setValueAtTime(syntControl.gain / 10, this.audioContext.currentTime);
            this.gainVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
            this.lfoOsc.frequency.setValueAtTime(syntControl.lfoRate, this.audioContext.currentTime);
            this.lfoGain.gain.setValueAtTime(syntControl.lfoAmplitude, this.audioContext.currentTime);
            this.gainNode.gain.setValueAtTime(syntControl.gain, this.audioContext.currentTime);
            this.biquadFilter.frequency.setValueAtTime(syntControl.filterCutoff, this.audioContext.currentTime);
            this.biquadFilter.gain.setValueAtTime(syntControl.filterReso, this.audioContext.currentTime);
            // this.osc2.type = "sawtooth";
        }
    }
    born() {
        this.gainNode = this.audioContext.createGain();
        this.lfoGain = this.audioContext.createGain();
        this.volume = this.audioContext.createGain();
        this.gainVelo = this.audioContext.createGain();
        this.gai1 = this.audioContext.createGain();
        this.gai2 = this.audioContext.createGain();
        this.biquadFilter = this.audioContext.createBiquadFilter();
        this.osc = this.audioContext.createOscillator();
        this.lfoOsc = this.audioContext.createOscillator();
        this.osc2 = this.audioContext.createOscillator();
        this.osc.frequency.value = 110;
        this.mer1 = this.audioContext.createChannelMerger();
        this.osc2.connect(this.gai1);
        this.osc.connect(this.gai2);
        this.mer1.connect(this.biquadFilter);
        this.gai1.connect(this.mer1, 0, 1);
        this.gai1.connect(this.mer1);
        this.gai2.connect(this.mer1);
        this.gai2.connect(this.mer1, 0, 1);
        this.lfoOsc.connect(this.lfoGain);
        this.lfoGain.connect(this.biquadFilter.frequency);
        this.biquadFilter.connect(this.gainVelo);
        this.gainVelo.connect(this.gainNode);
        this.gainNode.connect(this.volume);
        this.osc2.start();
        this.osc.start();
        this.lfoOsc.start();
        this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    }
    kill() {
        this.osc.stop();
    }
}


/***/ }),

/***/ "tivR":
/*!*****************************************!*\
  !*** ./src/classes/abstract-monoosc.ts ***!
  \*****************************************/
/*! exports provided: AbstractMonoosc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractMonoosc", function() { return AbstractMonoosc; });
class AbstractMonoosc {
    constructor(audioContext) {
        this.audioContext = audioContext;
        this.isMuted = 0;
        this.gain = 0;
        this.waveSelected = "sine";
        this.filterSelected = "allpass";
        this.adsr = { attack: 0.01, decay: 1, sustain: 0, sustainVal: 1, release: 0 };
        this.adsrP = { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 };
        this.allSynthControl = [{
                isMuted: 0,
                gain: 0.5,
                adsr: this.adsr,
                waveSelected: this.waveSelected,
                filterSelected: this.filterSelected,
                filterCutoff: 0,
                filterReso: 0,
                lfoWaveSelected: 'sine',
                lfoAmplitude: 0,
                lfoRate: 0,
                libIndex: 0,
                duration: 0,
                type: '',
                adsrPitch: this.adsrP,
                pitchEnvelope: { frequency: 0, end: 0 },
                isDistorted: false
            }];
        this.filterCutoff = 0;
        this.filterReso = 0;
        this.lfoWaveSelected = "";
        this.lfoAmplitude = 0;
        this.lfoRate = 0;
        this.libIndex = 0;
        this.duration = 0;
        this.type = "";
        this.pitchEnvelope = { frequency: 0, end: 0 };
        this.velocity = 0;
        this.isDistorted = false;
        this.allParams = {
            adsrPitch: this.adsrP,
            isMuted: 0,
            gain: this.gain,
            adsr: this.adsr,
            waveSelected: this.waveSelected,
            filterSelected: this.filterSelected,
            filterCutoff: this.filterCutoff,
            filterReso: this.filterReso,
            lfoWaveSelected: this.lfoWaveSelected,
            lfoAmplitude: this.filterReso,
            lfoRate: this.lfoRate,
            libIndex: 0,
            duration: 1,
            type: 'SAMPLER',
            pitchEnvelope: this.pitchEnvelope,
            isDistorted: this.isDistorted
        };
    }
    play(freq, synthControlIndex, velocity) {
        throw new Error("Method not implemented. I'm abstract!");
    }
    getAllSynthControl() {
        return this.allSynthControl;
    }
    setAllSynthControl(allSynthControl) {
        this.allSynthControl = allSynthControl;
    }
    addSynthControl(synthControl) {
        this.allSynthControl.push(synthControl);
    }
    getParams() {
        return this.allParams;
    }
    setParams(params, index) {
        this.allSynthControl[index] = params;
    }
    castFilterWave(synthControlIndex, biquadFilter) {
        switch (this.getAllSynthControl()[synthControlIndex].filterSelected) {
            case 'lowpass':
                biquadFilter.type = 'lowpass';
                break;
            case 'highpass':
                biquadFilter.type = 'highpass';
                break;
            case 'bandpass':
                biquadFilter.type = 'bandpass';
                break;
            case 'lowshelf':
                biquadFilter.type = 'lowshelf';
                break;
            case 'peaking':
                biquadFilter.type = 'peaking';
                break;
            case 'notch':
                biquadFilter.type = 'notch';
                break;
            case 'allpass':
                biquadFilter.type = 'allpass';
                break;
        }
    }
    inizializzaAdsr(synthControlIndex) {
        this.allSynthControl[synthControlIndex].adsr.attack = parseFloat(this.allSynthControl[synthControlIndex].adsr.attack + '');
        this.allSynthControl[synthControlIndex].adsr.decay = parseFloat(this.allSynthControl[synthControlIndex].adsr.decay + '');
        this.allSynthControl[synthControlIndex].adsr.sustain = parseFloat(this.allSynthControl[synthControlIndex].adsr.sustain + '');
        this.allSynthControl[synthControlIndex].adsr.sustainVal = parseFloat(this.allSynthControl[synthControlIndex].adsr.sustainVal + '');
        this.allSynthControl[synthControlIndex].adsr.release = parseFloat(this.allSynthControl[synthControlIndex].adsr.release + '');
    }
    setAdsr(param, adsr, ct) {
        param.cancelScheduledValues(ct);
        param.setValueAtTime(0, ct);
        param.linearRampToValueAtTime(1, ct + adsr.attack);
        param.linearRampToValueAtTime(adsr.sustainVal, ct + //
            adsr.attack + //
            adsr.decay);
        param.setValueAtTime(adsr.sustainVal, ct + //
            adsr.attack + //
            adsr.decay + //
            adsr.sustain);
        param.linearRampToValueAtTime(0, ct + adsr.attack + //
            adsr.decay + //
            adsr.sustain + //
            adsr.release);
    }
    initializeVariables(gainNode, synthControlIndex, ct, biquadFilter, volume) {
        gainNode.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, ct);
        biquadFilter.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterCutoff, ct);
        biquadFilter.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].filterReso, ct);
        volume.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].gain, ct);
    }
    setLfo(lfoOsc, synthControlIndex, ct, lfoGain, biquadFilter) {
        this.castOscWaveform(this.getAllSynthControl()[synthControlIndex].lfoWaveSelected, lfoOsc);
        lfoOsc.frequency.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoRate, ct);
        lfoGain.gain.setValueAtTime(this.getAllSynthControl()[synthControlIndex].lfoAmplitude, ct);
        lfoOsc.start();
        lfoOsc.stop(//
        ct + this.getAllSynthControl()[synthControlIndex].adsr.attack //
            + this.getAllSynthControl()[synthControlIndex].adsr.decay + //
            this.getAllSynthControl()[synthControlIndex].adsr.sustain + //
            this.getAllSynthControl()[synthControlIndex].adsr.release);
    }
    castOscWaveform(waveform, osc) {
        switch (waveform) {
            case 'square':
                osc.type = 'square';
                break;
            case 'sine':
                osc.type = 'sine';
                break;
            case 'sawtooth':
                osc.type = 'sawtooth';
                break;
            case 'triangle':
                osc.type = 'triangle';
                break;
        }
    }
    connection(biquadFilter, gainNode, volume, lfoGain, lfoOsc, velocity) {
        let volumeVelo = this.audioContext.createGain();
        volumeVelo.gain.setValueAtTime(velocity, this.audioContext.currentTime);
        lfoOsc.connect(lfoGain);
        lfoGain.connect(biquadFilter.frequency);
        biquadFilter.connect(volumeVelo);
        volumeVelo.connect(gainNode);
        gainNode.connect(volume);
        // volume.connect(this.ts.merger, 0, 0);
        // volume.connect(this.ts.merger, 0, 1);
    }
    procedure(synthControlIndex, biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain, velocity) {
        this.initializeVariables(gainNode, synthControlIndex, ct, biquadFilter, volume);
        this.inizializzaAdsr(synthControlIndex);
        this.castFilterWave(synthControlIndex, biquadFilter);
        this.setLfo(lfoOsc, synthControlIndex, ct, lfoGain, biquadFilter);
        //this.setAdsr(gainNode, synthControlIndex, ct);
        this.connection(biquadFilter, gainNode, volume, lfoGain, lfoOsc, velocity);
    }
    declareVariables() {
        let ct = this.audioContext.currentTime;
        let gainNode = this.audioContext.createGain();
        let biquadFilter = this.audioContext.createBiquadFilter();
        let volume = this.audioContext.createGain();
        let lfoOsc = this.audioContext.createOscillator();
        let lfoGain = this.audioContext.createGain();
        return { biquadFilter, gainNode, ct, volume, lfoOsc, lfoGain };
    }
}


/***/ }),

/***/ "wCZm":
/*!***********************************!*\
  !*** ./src/classes/waveshaper.ts ***!
  \***********************************/
/*! exports provided: Waveshaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Waveshaper", function() { return Waveshaper; });
class Waveshaper {
    constructor(audioContext) {
        this.audioContext = audioContext;
        this.waveshaper = this.audioContext.createWaveShaper();
        this.waveshaper.oversample = "4x";
        this.waveshaper.curve = this.makeDistortionCurve(30);
    }
    makeDistortionCurve(amount) {
        var k = typeof amount === 'number' ? amount : 50, n_samples = 44100, curve = new Float32Array(n_samples), deg = Math.PI / 180, i = 0, x;
        for (; i < n_samples; ++i) {
            x = i * 2 / n_samples - 1;
            curve[i] = (1.1 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
        }
        return curve;
    }
}


/***/ }),

/***/ "y2/s":
/*!*******************************!*\
  !*** ./src/classes/octave.ts ***!
  \*******************************/
/*! exports provided: Octave */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Octave", function() { return Octave; });
class Octave {
    constructor(a) {
        this.array = [];
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
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    setArray() {
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
    getArray() {
        return this.array;
    }
}


/***/ }),

/***/ "yvez":
/*!************************************!*\
  !*** ./src/adsr/adsr.component.ts ***!
  \************************************/
/*! exports provided: AdsrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsrComponent", function() { return AdsrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class AdsrComponent {
    constructor() {
        this.adsrEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adsr = { attack: 0.1, decay: 0.3, sustain: 0.3, sustainVal: 0.3, release: 0.3 };
    }
    ngAfterViewInit() {
    }
    changedZ() {
        this.adsrEmitter.emit(this.adsr);
    }
}
AdsrComponent.ɵfac = function AdsrComponent_Factory(t) { return new (t || AdsrComponent)(); };
AdsrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdsrComponent, selectors: [["app-adsr"]], inputs: { slave: "slave", adsr: "adsr" }, outputs: { adsrEmitter: "adsrEmitter" }, decls: 23, vars: 5, consts: [["type", "number", "min", "0", "step", "0.1", 3, "ngModel", "change", "ngModelChange"]], template: function AdsrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdsrComponent_Template_input_change_14_listener() { return ctx.changedZ(); })("ngModelChange", function AdsrComponent_Template_input_ngModelChange_14_listener($event) { return ctx.adsr.attack = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdsrComponent_Template_input_change_16_listener() { return ctx.changedZ(); })("ngModelChange", function AdsrComponent_Template_input_ngModelChange_16_listener($event) { return ctx.adsr.decay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdsrComponent_Template_input_change_18_listener() { return ctx.changedZ(); })("ngModelChange", function AdsrComponent_Template_input_ngModelChange_18_listener($event) { return ctx.adsr.sustain = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdsrComponent_Template_input_change_20_listener() { return ctx.changedZ(); })("ngModelChange", function AdsrComponent_Template_input_ngModelChange_20_listener($event) { return ctx.adsr.sustainVal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdsrComponent_Template_input_change_22_listener() { return ctx.changedZ(); })("ngModelChange", function AdsrComponent_Template_input_ngModelChange_22_listener($event) { return ctx.adsr.release = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adsr.attack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adsr.decay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adsr.sustain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adsr.sustainVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.adsr.release);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["input[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.inCon[_ngcontent-%COMP%] {\n  float: left;\n  padding: 2px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYWRzci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBR0oiLCJmaWxlIjoiYWRzci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5pbkNvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5pbnB1dHtcclxuICAgIHdpZHRoOiAgNTBweDtcclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map