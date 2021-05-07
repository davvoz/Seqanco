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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_select_2_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.waveSelected = $event; })("change", function SynthControlComponent_select_2_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthControlComponent_select_2_option_1_Template, 2, 1, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.waveSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.waveforms);
} }
function SynthControlComponent_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", el_r14.valore, " ");
} }
function SynthControlComponent_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_select_3_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.libIndex = $event; })("change", function SynthControlComponent_select_3_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthControlComponent_select_3_option_1_Template, 2, 1, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " pitch time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_td_44_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.pitchEnvEnd = $event; })("change", function SynthControlComponent_td_44_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " end time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 15);
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
        this.libIndex = 1;
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
            gain: 0,
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
    getColor() {
        if (this.isMuted) {
            return 'red';
        }
        else {
            return 'green';
        }
    }
}
SynthControlComponent.ɵfac = function SynthControlComponent_Factory(t) { return new (t || SynthControlComponent)(); };
SynthControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SynthControlComponent, selectors: [["app-synth-control"]], inputs: { typeIn: "typeIn", name: "name" }, outputs: { parametriSynth: "parametriSynth" }, decls: 45, vars: 17, consts: [[1, "container", 2, "background-color", "hotpink"], [3, "background-color", "click", 4, "ngIf"], [3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["type", "number", "min", "0", "max", "1", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [3, "slave", "adsr", "adsrEmitter"], ["colspan", "3"], [3, "ngModel", "ngModelChange", "change"], [4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "max", "1000", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "max", "10000", 3, "ngModel", "ngModelChange", "change"], ["type", "range", "min", "0", "max", "1000", "step", "1", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "1", "max", "16", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["rowspan", "2", 4, "ngIf"], [3, "click"], ["rowspan", "2"], ["type", "number", "min", "0.01", "max", "1000", "step", "0.01", 3, "ngModel", "ngModelChange", "change"]], template: function SynthControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynthControlComponent_button_1_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynthControlComponent_select_2_Template, 2, 2, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SynthControlComponent_select_3_Template, 2, 2, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "gain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_8_listener($event) { return ctx.gain = $event; })("change", function SynthControlComponent_Template_input_change_8_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "adsr-gain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-adsr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("adsrEmitter", function SynthControlComponent_Template_app_adsr_adsrEmitter_11_listener($event) { return ctx.changeAdsr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " FILTER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_select_ngModelChange_21_listener($event) { return ctx.filterSelected = $event; })("change", function SynthControlComponent_Template_select_change_21_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SynthControlComponent_option_22_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " reso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_25_listener($event) { return ctx.filterReso = $event; })("change", function SynthControlComponent_Template_input_change_25_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " cutoff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_28_listener($event) { return ctx.filterCutoff = $event; })("change", function SynthControlComponent_Template_input_change_28_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " adsr-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-adsr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("adsrEmitter", function SynthControlComponent_Template_app_adsr_adsrEmitter_32_listener($event) { return ctx.changeAdsr($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "LFO to frequency filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_select_ngModelChange_36_listener($event) { return ctx.lfoWaveSelected = $event; })("change", function SynthControlComponent_Template_select_change_36_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SynthControlComponent_option_37_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " amp ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_40_listener($event) { return ctx.lfoAmplitude = $event; })("change", function SynthControlComponent_Template_input_change_40_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SynthControlComponent_Template_input_ngModelChange_43_listener($event) { return ctx.lfoRate = $event; })("change", function SynthControlComponent_Template_input_change_43_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SynthControlComponent_td_44_Template, 6, 2, "td", 12);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_3__["AdsrComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeW50aC1jb250cm9sLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");







function FilterComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wave_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", wave_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", wave_r2, "");
} }
function FilterComponent_app_adsr_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-adsr", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("adsrEmitter", function FilterComponent_app_adsr_25_Template_app_adsr_adsrEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.changeAdsr($event); });
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
    } }, inputs: { nome: "nome", envelope: "envelope" }, decls: 26, vars: 8, consts: [[3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "min", "0", "max", "20000", "step", "10", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "number", "min", "0", "max", "1000", "step", "1", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "number", "min", "0", "max", "10", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "type", "number", "min", "-10", "max", "10", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [3, "adsr", "adsrEmitter", 4, "ngIf"], [3, "value"], [3, "adsr", "adsrEmitter"], ["adsr", ""]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_select_ngModelChange_15_listener($event) { return ctx.selectedWaveView = $event; })("change", function FilterComponent_Template_select_change_15_listener() { return ctx.changeWave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FilterComponent_option_16_Template, 2, 2, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_18_listener($event) { return ctx.frequency = $event; })("change", function FilterComponent_Template_input_change_18_listener() { return ctx.changeFilterFrequency(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.gain = $event; })("change", function FilterComponent_Template_input_change_20_listener() { return ctx.changeFilterGain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_22_listener($event) { return ctx.detune = $event; })("change", function FilterComponent_Template_input_change_22_listener() { return ctx.changeFilterDetune(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.q = $event; })("change", function FilterComponent_Template_input_change_24_listener() { return ctx.changeFilterQ(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, FilterComponent_app_adsr_25_Template, 2, 1, "app-adsr", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.nome, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedWaveView);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.waveforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.frequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.gain);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.detune);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.envelope);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_0__["AdsrComponent"]], styles: ["input[_ngcontent-%COMP%] {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJmaWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIHdpZHRoOiAgNTBweDtcclxufSJdfQ== */"], changeDetection: 0 });


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
    //source:AudioBufferSourceNode;
    constructor(audioContext, library) {
        super(audioContext);
        this.audioContext = audioContext;
        this.library = library;
        this.born();
    }
    play(freq, synthControlIndex, velocity) {
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
        //this.source.stop();
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




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
        return this.myTimer.isPlayed ? '#00d600' : null;
    }
}
StartStopComponent.ɵfac = function StartStopComponent_Factory(t) { return new (t || StartStopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
StartStopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartStopComponent, selectors: [["app-start-stop"]], decls: 6, vars: 2, consts: [["mat-icon-button", "", 3, "click"]], template: function StartStopComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC1zdG9wLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
        for (let y = 0; y < this.ctxGui.canvas.height; y = y + this.lato) {
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var worker_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! worker-timers */ "Qc9z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class TimerService {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
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
        this.trackStateModel = {
            traksAreOn: [],
            timePosition: 0,
            isStarted: true,
            audioContextTime: 0
        };
        this.trackStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.trackStateModel);
        this.playingStateSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.playingStateItem$ = this.playingStateSource.asObservable();
        this.trackStateItem$ = this.trackStateSource.asObservable();
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
        //  this.trackStateSource.next({ soundOn: this.trackStateModel.soundOn, trackIndex: this.steps })
    }
    play() {
        this.isPlayed = true;
        // this.scheduleNote();
        this.playingStateSource.next(true);
        this._ngZone.runOutsideAngular(() => {
            //this.timer = setTimeout(this.scheduleNote.bind(this), 0);
            this.accurateTimer(() => { this.changeStateTrack(this.audioContext.currentTime); }, this.speed, console.log('error'));
            this.start();
        });
    }
    stop() {
        // this.audioContext.suspend();
        this.steps = 0;
        this.isPlayed = false;
        //clearTimeout(this.timer);
        this.playingStateSource.next(false);
        this.accurateStop();
    }
    pause() {
        // this.audioContext.suspend();
        this.isPlayed = false;
        this.accurateStop();
        //clearTimeout(this.timer);
    }
    scheduleNote() {
        // let contextPlayTime;
        // let currentTime: number;
        // if (typeof this.audioContext !== 'undefined') {
        //   currentTime = this.audioContext.currentTime
        //   currentTime -= this.startTime;
        //   while (this.noteTime < currentTime + 0.2) {
        //     contextPlayTime = this.noteTime + this.startTime;
        //     this.changeStateTrack(contextPlayTime);
        //     this.nextNote();
        //   }
        // }
        // this._ngZone.runOutsideAngular(() => {
        //  this.timer = setTimeout(this.scheduleNote.bind(this), 0);
        //   this.accurateTimer(() => { console.log('it runs') }, 500, console.log('error'));
        // });
    }
    nextNote() {
        // let secondsPerBeat = 60.0 / this.speed;
        // // 0.25 because each square is a 16th note
        // this.noteTime += 0.25 * secondsPerBeat;
        // secondsPerBeat = 0;
    }
    changeStateTrack(pt) {
        this.trackStateSource.next({
            traksAreOn: this.trackStateModel.traksAreOn,
            timePosition: this.steps,
            isStarted: this.isPlayed,
            audioContextTime: pt
        });
        this.steps >= 3
            ? ((this.step = true), (this.steps = 0))
            : ((this.step = true), this.steps++);
    }
    loadWorklet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tempUrl = this.createUrl();
            this.audioContext = new AudioContext();
            return yield this.audioContext.audioWorklet.addModule(tempUrl).then(() => {
                this.startTime = this.audioContext.currentTime + 0.005;
                this.isPlayed = false;
                this.step = false;
                this.steps = 0;
                this.speed = 120;
                this.merger = this.audioContext.createGain();
                this.merger.gain.setValueAtTime(this.gain, this.audioContext.currentTime);
                this.merger.connect(this.audioContext.destination);
            });
        });
    }
    createUrl() {
        //const nomeProcesso = 'bypass-processor';
        let myWk;
        myWk = this.createWorklet.toString();
        myWk = `function ${myWk}`;
        myWk = myWk.replace('Fake', 'AudioWorkletProcessor');
        const blob = new Blob([`(${myWk})()`], {
            type: "application/javascript"
        });
        return URL.createObjectURL(blob);
    }
    createWorklet() {
        class BypassProcessor extends Fake {
            constructor() {
                super();
                this.isPlaying = true;
                this.port.onmessage = this.onmessage.bind(this);
            }
            onmessage(event) {
                const { data } = event;
                this.isPlaying = data;
            }
            process(inputs, outputs) {
                if (!this.isPlaying) {
                    return;
                }
                const input = inputs[0];
                const output = outputs[0];
                for (let channel = 0; channel < output.length; ++channel) {
                    output[channel].set(input[channel]);
                }
                return this.isPlaying;
            }
        }
        registerProcessor('bypass-processor', BypassProcessor);
    }
    accurateTimer(callback, timeInterval, errorCallback) {
        this.speed = timeInterval;
        this.start = () => {
            this.expected = Date.now() + this.speed;
            this.timeout = worker_timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"](this.round, this.speed);
            console.log('started');
        };
        this.accurateStop = () => {
            worker_timers__WEBPACK_IMPORTED_MODULE_2__["clearTimeout"](this.timeout);
            console.log('started');
        };
        this.round = () => {
            let drift = Date.now() - this.expected;
            if (drift > this.speed) {
                if (errorCallback) {
                    errorCallback();
                }
            }
            callback();
            this.expected += this.speed;
            this.timeout = worker_timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"](this.round, this.speed - drift);
        };
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac });
class Fake {
}
function registerProcessor(arg0, arg1) {
    throw new Error("Function not implemented.");
}


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
    //source:AudioBufferSourceNode;
    constructor(audioContext, library) {
        super(audioContext);
        this.audioContext = audioContext;
        this.library = library;
        this.born();
    }
    play(freq, synthControlIndex, velocity) {
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
            // source.playbackRate.setTargetAtTime(freq / 100, this.audioContext.currentTime, 0);
            // source.playbackRate.linearRampToValueAtTime
            //   (freq / 100 + this.getAllSynthControl()[synthControlIndex].pitchEnvelope.frequency, this.audioContext.currentTime +//
            //     this.getAllSynthControl()[synthControlIndex].pitchEnvelope.end);
            source.start(this.audioContext.currentTime);
            // source.disconnect();
            // @ts-ignore*
            // source = null;
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
        //this.source.stop();
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
/* harmony import */ var src_classes_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/classes/utilities */ "iWBn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/timer.service */ "IqJH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OscComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wave_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", wave_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", wave_r1, "");
} }
class OscComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.selectedWaveView = 'sine';
        this.isStarted = false;
        this.waveforms = ['square', 'sine', 'sawtooth', 'triangle', 'noise'];
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
            // @ts-ignore*/
            // const freqW = this.oscWk.frequency;
            this.oscWk.frequency.setValueAtTime(freq + this.frequency, this.myTimer.audioContext.currentTime);
        }
    }
    ngOnDestroy() {
        this.audioNodeIn.disconnect();
    }
    changeWave() {
        // @ts-ignore*/
        // const par = this.oscWk.parwameters.get('wave');
        // switch (this.selectedWaveView) {
        //   case 'sine': par.setValueAtTime(3, this.myTimer.audioContext.currentTime); break;
        //   case 'square': par.setValueAtTime(1, this.myTimer.audioContext.currentTime); break;
        //   case 'noise': par.setValueAtTime(4, this.myTimer.audioContext.currentTime); break;
        //   case 'triangle': par.setValueAtTime(0, this.myTimer.audioContext.currentTime); break;
        //   case 'sawtooth': par.setValueAtTime(2, this.myTimer.audioContext.currentTime); break;
        // }
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
        // @ts-ignore*/
        //const freq = this.oscWk.frequency;
        this.oscWk.frequency.setValueAtTime(this.frequency, this.myTimer.audioContext.currentTime);
    }
    changePhase() {
        // @ts-ignore*/
        const phase = this.oscWk.parameters.get('phase');
        phase.setValueAtTime(this.phase, this.myTimer.audioContext.currentTime);
    }
    changeDuty() {
        // @ts-ignore*/
        const duty = this.oscWk.parameters.get('duty');
        duty.setValueAtTime(this.duty, this.myTimer.audioContext.currentTime);
    }
    setAudioParamIn(ap) {
        this.audioParamIn = ap;
    }
    setAudioNodeIn(an) {
        this.audioNodeIn = an;
    }
    loadWorklet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nomeProcesso = src_classes_utilities__WEBPACK_IMPORTED_MODULE_1__["Utilities"].makeid(10);
            const tempUrl = this.createUrl(nomeProcesso);
            return yield this.myTimer.audioContext.audioWorklet.addModule(tempUrl).then(() => {
                this.oscWk = this.myTimer.audioContext.createOscillator(); //new AudioWorkletNode(this.myTimer.audioContext, nomeProcesso);
                this.oscWk.start();
                if (typeof this.modulatoreDiFrequenza !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
                    // @ts-ignore*/
                    this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
                }
            });
        });
    }
    createUrl(nomeProcesso) {
        let myWk;
        myWk = this.createWorklet.toString();
        myWk = `function ${myWk}`;
        myWk = myWk.replace('Fake', 'AudioWorkletProcessor');
        myWk = myWk.replace('var sampleRate;', '');
        myWk = myWk.replace('oscillator', nomeProcesso);
        const blob = new Blob([`(${myWk})()`], {
            type: "application/javascript"
        });
        const tempUrl = URL.createObjectURL(blob);
        return tempUrl;
    }
    setModulatoreDiFrequenza(modulatore) {
        if (typeof this.oscWk !== 'undefined' && !this.modulatoreDioFrequenzaJustCon) {
            this.modulatoreDiFrequenza = modulatore;
            // @ts-ignore*/
            this.modulatoreDiFrequenza.connect(this.oscWk.frequency);
        }
    }
    disconnectModulatoreDiFrequenza() {
        // @ts-ignore*/
        this.modulatoreDiFrequenza.disconnect(this.oscWk.frequency);
    }
    start() {
        if (!this.isActive) {
            this.isActive = true;
        }
    }
    createWorklet() {
        class BypassProcessor extends Fake {
            constructor() {
                super();
            }
            process(inputs, outputs) {
                const input = inputs[0];
                const output = outputs[0];
                for (let channel = 0; channel < output.length; ++channel) {
                    output[channel].set(input[channel]);
                }
                return true;
            }
        }
        registerProcessor("oscillator", BypassProcessor);
    }
}
OscComponent.ɵfac = function OscComponent_Factory(t) { return new (t || OscComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"])); };
OscComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OscComponent, selectors: [["app-osc"]], inputs: { nome: "nome" }, decls: 14, vars: 4, consts: [[3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "number", "min", "0", "max", "100", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [3, "value"]], template: function OscComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "OscillatorType");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OscComponent_Template_select_ngModelChange_9_listener($event) { return ctx.selectedWaveView = $event; })("change", function OscComponent_Template_select_change_9_listener() { return ctx.changeWave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, OscComponent_option_10_Template, 2, 2, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function OscComponent_Template_input_ngModelChange_12_listener($event) { return ctx.frequency = $event; })("change", function OscComponent_Template_input_change_12_listener() { return ctx.changeFrequency(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nome, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedWaveView);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.waveforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.frequency);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvc2MuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
class Fake {
}
function registerProcessor(arg0, arg1) {
    throw new Error("Function not implemented.");
}


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

/***/ "OKqC":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/worker-plugin/dist/loader.js?name=0!./src/core/graphic/piano-roll-canvas-based/helper.worker.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0.worker.js"

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
/* harmony import */ var src_classes_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/classes/utilities */ "iWBn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _services_samples_library_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/samples-library.service */ "ZOSq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/graphic/piano-roll-canvas-based/piano-roll-canvas-based.component */ "aICo");
/* harmony import */ var _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../synth-control/synth-control.component */ "2IbU");
/* harmony import */ var _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../audio-components/osc/osc.component */ "Njh4");
/* harmony import */ var _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../audio-components/gain/gain.component */ "Mx7m");
/* harmony import */ var _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../audio-components/stereo-panner/stereo-panner.component */ "Wohp");
/* harmony import */ var _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../audio-components/filter/filter.component */ "6+A9");


















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
function InstrumentComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-synth-control", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("parametriSynth", function InstrumentComponent_div_11_Template_app_synth_control_parametriSynth_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.onSetSoundParams($event, ctx_r3.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("typeIn", ctx_r0.type)("name", ctx_r0.name);
} }
function InstrumentComponent_div_12_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstrumentComponent_div_12_tr_29_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const i_r18 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r19.enableMod(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_12_tr_29_Template_input_ngModelChange_5_listener($event) { const mod_r17 = ctx.$implicit; return mod_r17.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_12_tr_29_Template_input_ngModelChange_7_listener($event) { const mod_r17 = ctx.$implicit; return mod_r17.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mod_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", mod_r17.modulation ? "red" : "grey");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", mod_r17.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", mod_r17.max);
} }
function InstrumentComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-osc", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-gain", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-gain", 13, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "app-osc", 11, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "app-gain", 13, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "app-stereo-panner", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "modulations");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, InstrumentComponent_div_12_tr_29_Template, 8, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "app-osc", 11, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "app-gain", 13, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "app-filter", 13, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "app-osc", 11, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "app-gain", 13, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " enable osc1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_12_Template_input_ngModelChange_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.lfoConOsc1 = $event; })("change", function InstrumentComponent_div_12_Template_input_change_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r25.changeConnection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " enable osc2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_div_12_Template_input_ngModelChange_54_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.lfoConOsc2 = $event; })("change", function InstrumentComponent_div_12_Template_input_change_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r27.changeConnection2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nome", "Main oscillator 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("envelope", false)("nome", "Gain osc 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("envelope", true)("nome", "Main gain");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nome", "LFO to frequency filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("envelope", false)("nome", "LFO filter amplitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.modulations);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nome", "Main oscillator 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("envelope", false)("nome", "Gain osc 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("envelope", true)("nome", "FILTER");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nome", "LFO to frequency oscillators");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("envelope", false)("nome", "LFO ocs amplitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.lfoConOsc1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.lfoConOsc2);
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
        this.modulations = [
            {
                modulation: false,
                min: 100,
                max: 3000
            }, {
                modulation: false,
                min: 100,
                max: 3000
            }, {
                modulation: false,
                min: 100,
                max: 3000
            }, {
                modulation: false,
                min: 100,
                max: 3000
            }, {
                modulation: false,
                min: 100,
                max: 3000
            }
        ];
    }
    getState() {
    }
    getBackground() {
        let a = src_classes_utilities__WEBPACK_IMPORTED_MODULE_6__["Utilities"].getRandomInt(300, 1);
        return 'repeating-radial-gradient(#d28f8f, transparent ' + a + 'px)';
    }
    getHeight(bol) {
        return bol ? '1250' : '20';
    }
    getDisplay(bol) {
        return bol ? 0.0 : 1;
    }
    getZindex(bol) {
        return bol ? 0 : 9999;
    }
    toggle() {
        this.isPianoRollVisible ? this.isPianoRollVisible = false : this.isPianoRollVisible = true;
    }
    enableMod(modIndex) {
        this.modulations[modIndex].modulation ? this.modulations[modIndex].modulation = false : this.modulations[modIndex].modulation = true;
    }
    ngAfterViewInit() {
        this.subscription = this.myTimer.trackStateItem$.subscribe(res => {
            this.stepper = res.timePosition;
            if (this.type === 'NEWSYNTH' && typeof this.mainOscillator1.oscWk !== 'undefined') {
                if (this.modulations[4].modulation) {
                    this.mainOscillator1.oscWk.frequency.setValueAtTime((this.mainOscillator1.oscWk.frequency.value + this.modulations[4].min), this.modulations[4].max);
                    this.mainOscillator2.oscWk.frequency.setValueAtTime((this.mainOscillator2.oscWk.frequency.value + this.modulations[4].min), this.modulations[4].max);
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
                            this.filter.filterNode.frequency.setTargetAtTime(this.modulations[2].max, this.myTimer.audioContext.currentTime, this.myTimer.steps * 20);
                            break;
                        case 1:
                            this.filter.filterNode.frequency.setTargetAtTime(this.modulations[2].max, this.myTimer.audioContext.currentTime, this.myTimer.steps * 20);
                            break;
                        case 2:
                            this.filter.filterNode.frequency.setTargetAtTime(this.modulations[2].max, this.myTimer.audioContext.currentTime, this.myTimer.steps * 20);
                            break;
                        case 3:
                            this.filter.filterNode.frequency.setTargetAtTime(this.modulations[2].min, this.myTimer.audioContext.currentTime, this.myTimer.steps / 20);
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
                        case 2:
                            this.filter.filterNode.frequency.setValueAtTime(this.modulations[3].min, this.myTimer.audioContext.currentTime);
                            break;
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
                // this.osc2.setAudioNodeIn(this.gainOsc2.gainNode);
                // this.gainOsc2.connectToAudioParam(this.filter.filterNode.frequency);
                // this.lfo.setAudioNodeIn(this.gainLfo.gainNode);
                // this.oscillator2.setAudioNodeIn(this.gain.gainAdsr)
                // this.osc.setAudioNodeIn(this.gain.gainAdsr);
                // this.gain.connectToAudioNode(this.filter.filterNode);
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
                this.myDrumachine.setParams(params, this.index);
                break;
            case 'SAMPLER':
                this.myMonosamp.setParams(params, this.index);
                break;
            case 'MONOOSC':
                this.myMonoosc.setParams(params, this.index);
                break;
            case 'DOUBLEOOSC':
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
        // @ts-ignore*/
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
InstrumentComponent.ɵfac = function InstrumentComponent_Factory(t) { return new (t || InstrumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_8__["TimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_samples_library_service__WEBPACK_IMPORTED_MODULE_9__["SamplesLibraryService"])); };
InstrumentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: InstrumentComponent, selectors: [["app-instrument"]], viewQuery: function InstrumentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c5, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c9, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c10, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c11, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c12, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.back = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainOscillator1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainOscillator2 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainGain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.pan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.lfoFrequencyFilter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filterLfoGain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.lfoFrequencyOscillator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.freqOscLfoGain = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.pianoRoll = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainGain1 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainGain2 = _t.first);
    } }, inputs: { clipIndex: "clipIndex", name: "name", type: "type", index: "index", pianoRollDimension: "pianoRollDimension", muted: "muted" }, decls: 17, vars: 14, consts: [[2, "width", "100%", "top", "380px", "position", "absolute"], [3, "click"], ["type", "number", "min", "0", "max", "60", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["type", "number", "min", "0", "max", "100", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], [4, "ngIf"], [2, "position", "relative"], [2, "width", "100%"], [3, "clipIndex", "instrumentType", "la", "pianoRollDimensionIn", "notaDaSuonare"], ["pianoRoll", ""], [3, "typeIn", "name", "parametriSynth"], [1, "a"], [3, "nome"], ["mainOscillator1", ""], [3, "envelope", "nome"], ["mainGain1", ""], ["mainGain", ""], ["colspan", "2", 1, "a"], ["lfoFrequencyFilter", ""], ["filterLfoGain", ""], ["pan", ""], ["rowspan", "2", 1, "a"], ["colspan", "3"], [4, "ngFor", "ngForOf"], ["mainOscillator2", ""], ["mainGain2", ""], ["filter", ""], ["colspan", "3", 1, "a"], ["lfoFrequencyOscillator", ""], ["freqOscLfoGain", ""], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["type", "number", 3, "ngModel", "ngModelChange"]], template: function InstrumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstrumentComponent_Template_button_click_3_listener() { return ctx.setAutopan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "autopan");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_Template_input_ngModelChange_6_listener($event) { return ctx.arate = $event; })("change", function InstrumentComponent_Template_input_change_6_listener() { return ctx.setAdrywet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " drywet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function InstrumentComponent_Template_input_ngModelChange_8_listener($event) { return ctx.adrywet = $event; })("change", function InstrumentComponent_Template_input_change_8_listener() { return ctx.setAdrywet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InstrumentComponent_Template_button_click_9_listener() { return ctx.setWaveshaper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "waveshaper");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, InstrumentComponent_div_11_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, InstrumentComponent_div_12_Template, 55, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "app-piano-roll-canvas-based", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("notaDaSuonare", function InstrumentComponent_Template_app_piano_roll_canvas_based_notaDaSuonare_15_listener($event) { return ctx.play($event, ctx.type); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.name, "-", ctx.index, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.getActiveButton(ctx.autopanSpenta));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.arate);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.adrywet);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.getActiveButton(ctx.waveshaperSpenta));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type !== "NEWSYNTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.type === "NEWSYNTH");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("clipIndex", ctx.clipIndex)("instrumentType", ctx.type)("la", ctx.selectedHrtz)("pianoRollDimensionIn", ctx.pianoRollDimension);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_12__["PianoRollCanvasBasedComponent"], _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_13__["SynthControlComponent"], _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_14__["OscComponent"], _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_15__["GainComponent"], _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_16__["StereoPannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_17__["FilterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"]], styles: [".intestazione[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.DOUBLEOOSC[_ngcontent-%COMP%] {\n  background-color: #c85a5a;\n  width: 100%;\n  height: 67%;\n  position: absolute;\n}\n\n.MONOOSC[_ngcontent-%COMP%] {\n  background-color: #5ac85a;\n  width: 100%;\n  height: 67%;\n  position: absolute;\n}\n\n.SAMPLER[_ngcontent-%COMP%] {\n  background-color: #5a5ac8;\n  width: 100%;\n  height: 67%;\n  position: absolute;\n}\n\n.NEWSYNTH[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 67%;\n  position: absolute;\n  top: 17%;\n}\n\n.autopan[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n}\n\n.waveshaper[_ngcontent-%COMP%] {\n  background-color: white;\n  position: relative;\n}\n\n.chainFxContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 20%;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\n.intestazioneNEWSYNTH[_ngcontent-%COMP%] {\n  background-color: #64c8c8;\n  height: 38px;\n  line-height: 38px;\n  top: 74%;\n  width: 100%;\n  z-index: 99;\n}\n\n.intestazioneSAMPLER[_ngcontent-%COMP%] {\n  background-color: #6496c8;\n  height: 38px;\n  line-height: 38px;\n  top: 74%;\n  width: 100%;\n  z-index: 99;\n}\n\n.intestazioneMONOOSC[_ngcontent-%COMP%] {\n  background-color: #5ac85a;\n  height: 38px;\n  line-height: 38px;\n  top: 74%;\n  width: 100%;\n  z-index: 99;\n}\n\n.a[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\ntable[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.mainContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  bottom: 0%;\n  height: 50%;\n  overflow-y: auto;\n  overflow-x: auto;\n}\n\n.esternaInstrument[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.esternaInstrumentPianoRoll[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.mainContainer[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 650px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcaW5zdHJ1bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFFSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUlKOztBQURBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBBO0VBQ0ksdUJBQUE7QUFVSjs7QUFSQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBV0o7O0FBUkE7RUFFSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7QUFXSjs7QUFUQTtFQUVJLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFZSiIsImZpbGUiOiJpbnN0cnVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludGVzdGF6aW9uZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLkRPVUJMRU9PU0Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDkwLCA5MCwgMSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjclO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5NT05PT1NDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTAsIDIwMCwgOTAsIDEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4uU0FNUExFUiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCA5MCwgMjAwLCAxKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2NyU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLk5FV1NZTlRIIHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY3JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG59XHJcblxyXG4uYXV0b3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ud2F2ZXNoYXBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2hhaW5GeENvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMjAlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxufVxyXG4uaW50ZXN0YXppb25lTkVXU1lOVEgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDIwMCwgMjAwLCAxKTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgdG9wOiA3NCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbi5pbnRlc3RhemlvbmVTQU1QTEVSIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMDAsIDE1MCwgMjAwLCAxKTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgdG9wOiA3NCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbi5pbnRlc3RhemlvbmVNT05PT1NDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTAsIDIwMCwgOTAsIDEpO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICB0b3A6IDc0JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbn1cclxuLmEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxudGFibGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluQ29udGFpbmVyIHtcclxuICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi5lc3Rlcm5hSW5zdHJ1bWVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmVzdGVybmFJbnN0cnVtZW50UGlhbm9Sb2xse1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLm1haW5Db250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA2NTBweDtcclxuICAgXHJcblxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/timer.service */ "IqJH");
/* harmony import */ var _start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../start-stop/start-stop.component */ "8+E6");
/* harmony import */ var _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer-control/timer-control.component */ "DILc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../instrument/instrument.component */ "Se8A");











const _c0 = ["sidenav"];
const _c1 = ["instrumentsViews"];
function AppComponent_div_29_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_29_div_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const clip_r7 = ctx.$implicit; const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.setClip(i_r5, clip_r7.index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clip_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", clip_r7.color);
} }
function AppComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_29_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.collassaInstrument(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_29_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r5 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.remove(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_29_Template_button_click_10_listener() { const instrument_r4 = ctx.$implicit; return instrument_r4.isMuted ? instrument_r4.isMuted = false : instrument_r4.isMuted = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "volume_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_29_div_22_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrument_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border", ctx_r1.getSelectedTrakBorderStyle(instrument_r4.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.getInstrumentColor(instrument_r4.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r1.getActiveColor(instrument_r4.isMuted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", instrument_r4.name.length > 5 ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](19, 9, instrument_r4.name, 0, 5) + ".." : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 13, instrument_r4.name), " TRACK N\u00B0 ", i_r5 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", instrument_r4.clips);
} }
function AppComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_50_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const i_r16 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.setClipMassive(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const clip_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", clip_r15.color);
} }
function AppComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-instrument", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const instrument_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r3.getDisplay(instrument_r19.isCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clipIndex", instrument_r19.clipPlaying)("name", instrument_r19.name)("type", instrument_r19.type)("index", i_r20)("pianoRollDimension", instrument_r19.pianoRollDimension)("muted", instrument_r19.isMuted);
} }
class AppComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        this.isActiveKeyboardControl = false;
        this.showFiller = false;
        this.clips = [];
        this.title = 'sequencer';
        this.selectedInstrumentName = '';
        this.pianoRolls = [];
        this.steppers = [];
        this.instruments = [];
        this.pianoRollDimension = 640;
        this.showNewTrackConfiguration = true;
        this.showMixer = true;
        this.masterGain = 1;
        this.monooscClipColor = 'rgba(90, 200, 90, 0.2)';
        this.newsynthClipColor = 'rgba(100, 200, 200, 0.2)';
        this.samplerClipColor = 'rgba(90, 90, 200, 0.2)';
        this.bianco = 'rgb(215, 215, 215)';
        this.verde = '#00d600';
        this.panelOpenState = false;
        this.clipsMaster = [
            { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false },
            { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false },
            { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false },
            { color: this.bianco, index: 0, isActive: false, trakNumber: 0, fakeMode: false }
        ];
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
    close() {
        if (this.sidenav.opened) {
            this.sidenav.close();
        }
        else {
            this.sidenav.open();
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
    ngAfterViewInit() { }
    getSelectedTrakBorderStyle(isCollapsed) {
        return isCollapsed ? '1px solid white' : '1px solid red';
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
        for (let i = 0; i > this.instruments.length; i++) {
            if (i !== instrumenIndex) {
                this.instruments[i].isMuted;
            }
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
        if (this.instruments[instrumenIndex].isCollapsed) {
        }
        this.instrumentsViews.toArray()[instrumenIndex].setClip(clipIndex);
    }
    addDrummachine() {
        const clips = this.instantiateClipsArray(this.monooscClipColor);
        this.instruments.push({
            name: 'Drum' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: 1280 * 2,
            params: [],
            type: 'DRUM',
            clipPlaying: 0,
            clips: clips,
            isMuted: false
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    addMonoosc() {
        const clips = this.instantiateClipsArray(this.monooscClipColor);
        this.instruments.push({
            name: 'Monoos' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: 1280 * 2,
            params: [],
            type: 'MONOOSC',
            clipPlaying: 0,
            clips: clips,
            isMuted: false
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    addSynth() {
        const clips = this.instantiateClipsArray(this.newsynthClipColor);
        this.instruments.push({
            name: 'Synth' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: 1280 * 2,
            params: [],
            type: 'NEWSYNTH',
            clipPlaying: 0,
            clips: clips,
            isMuted: false
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    addSampler() {
        const clips = this.instantiateClipsArray(this.samplerClipColor);
        this.instruments.push({
            name: 'Sampl' + this.instruments.length,
            index: this.instruments.length,
            isCollapsed: true,
            pianoRollDimension: 1280 * 2,
            params: [],
            type: 'SAMPLER',
            clipPlaying: 0,
            clips: clips,
            isMuted: false
        });
        this.collassaInstrument(this.instruments.length - 1);
    }
    collassaInstrument(instrumentIndex) {
        for (let i = 0; i < this.instruments.length; i++) {
            if (i !== instrumentIndex) {
                this.instruments[i].isCollapsed = true;
            }
        }
        this.instruments[instrumentIndex].isCollapsed === true ? this.instruments[instrumentIndex].isCollapsed = false : this.instruments[instrumentIndex].isCollapsed = true;
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
    displayNewTrackConfiguration() {
        this.notThis(this.showNewTrackConfiguration);
    }
    notThis(bol) {
        bol = !bol;
    }
    getDisplay(bol) {
        return bol ? 'none' : 'block';
    }
    show() {
        if (this.showMixer) {
            this.showMixer = false;
        }
        else {
            this.showMixer = true;
        }
    }
    getInstrumentColor(instrumentType) {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.instrumentsViews = _t);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AppComponent_keyup_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 53, vars: 9, consts: [[1, "raw1", 2, "background-color", "chartreuse"], [1, "example-spacer"], ["type", "number", "min", "0.01", "max", "1", "step", "0.01", 3, "ngModel", "ngModelChange", "change"], ["mat-icon-button", "", "matTooltip", "Add instrument", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "matTooltip", "Enable keyboard control click or press CTRL", 3, "click"], ["menu", "matMenu"], ["mat-menu-item", "", "color", "basic", 3, "click"], [1, "example-sidenav-content"], [1, "row1"], ["class", "instrument", 4, "ngFor", "ngForOf"], [1, "instrument"], [1, "instrumentToolbar"], [1, "instHeader", 2, "background-color", "chocolate"], [1, "row4"], ["mat-icon-button", "", "disabled", ""], ["disabled", "", "mat-icon-button", ""], [2, "font-size", "145%"], [1, "trakTitle"], [1, "clipsContiner"], ["class", "clip", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "instrumentsContainer"], ["class", "instrumentPanel", 4, "ngFor", "ngForOf"], [1, "instHeader"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", ""], [1, "clip"], [1, "instrumentPanel"], [1, "instrumentContainer"], [3, "clipIndex", "name", "type", "index", "pianoRollDimension", "muted"], ["instrumentsViews", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ED - Easy Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-start-stop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-timer-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Volume ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.masterGain = $event; })("change", function AppComponent_Template_input_change_8_listener() { return ctx.onChangeMaster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add instrument");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Keyboard control ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.activeKeyboardControl(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "keyboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() { return ctx.addSampler(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Add sampler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { return ctx.addSynth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add Synth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.addMonoosc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Monoosc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.addDrummachine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Add Drum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_div_29_Template, 23, 15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "volume_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "MASTER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AppComponent_div_50_Template, 4, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, AppComponent_div_52_Template, 4, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterGain);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.getActiveColor(ctx.isActiveKeyboardControl));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instruments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.getDisplay(!ctx.showMixer));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clipsMaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.instruments);
    } }, directives: [_start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_2__["StartStopComponent"], _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_3__["TimerControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__["InstrumentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"]], styles: ["mat-sidenav-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.instrumentContainer[_ngcontent-%COMP%] {\n  min-width: 99%;\n  width: 100%;\n}\n\n.controllContainer[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 75px;\n  background-color: cadetblue;\n  position: fixed;\n  z-index: 9;\n  top: 0px;\n}\n\n.close[_ngcontent-%COMP%] {\n  background-color: red;\n  left: 100px;\n}\n\n.instrumentToolbar[_ngcontent-%COMP%] {\n  width: 200px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-left: 1px;\n  border: 1px solid white;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 3 auto;\n}\n\n.example-spacerz[_ngcontent-%COMP%] {\n  flex: 10 13 auto;\n}\n\n.mixerTrack[_ngcontent-%COMP%] {\n  float: left;\n  background-color: rgba(60, 60, 60, 0.7);\n  height: 600px;\n  border: 1px solid;\n  margin-left: 5px;\n  width: 150px;\n  max-width: 150px;\n  top: 70px;\n  position: relative;\n}\n\n.mixerContainer[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n\n.DOUBLEOOSC[_ngcontent-%COMP%] {\n  background-color: rgba(200, 90, 90, 0.4);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.MONOOSC[_ngcontent-%COMP%] {\n  background-color: rgba(90, 200, 90, 0.4);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.SAMPLER[_ngcontent-%COMP%] {\n  background-color: rgba(90, 90, 200, 0.4);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.MASTER[_ngcontent-%COMP%] {\n  float: left;\n  background-color: rgba(60, 60, 60, 0.7);\n  max-height: 20px;\n  top: 20px;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n}\n\n.mixerTrackMstr[_ngcontent-%COMP%] {\n  height: 221px;\n  border: 1px solid;\n  margin-left: 5px;\n  width: 197px;\n  \n  top: 70px;\n  position: absolute;\n  right: 3px;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 99999;\n}\n\n.instrument[_ngcontent-%COMP%] {\n  position: relative;\n  float: left;\n  left: 1px;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.masterGainIn[_ngcontent-%COMP%] {\n  top: 130px;\n  position: relative;\n}\n\n.instrumentPanel[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.trakTitle[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.clip[_ngcontent-%COMP%] {\n  border-top: 1px solid white;\n}\n\n.stage[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  height: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: black;\n  color: white;\n  width: 100%;\n}\n\n.clipsContiner[_ngcontent-%COMP%] {\n  border-top: 3px solid white;\n  left: 1px;\n  height: 100%;\n}\n\n.trakTitleSecondLine[_ngcontent-%COMP%] {\n  text-align: end;\n}\n\n.instHeader[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.example-card[_ngcontent-%COMP%] {\n  max-width: 500px;\n  float: left;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-family: \"Press Start 2P\";\n}\n\n.daw[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tracksContainer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.instrumentsContainer[_ngcontent-%COMP%] {\n  height: 69%;\n}\n\n.row1[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(9, 1fr);\n  background-color: gray;\n  border: 1px solid black;\n}\n\n.row4[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  background-color: gray;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBR0o7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFHSjs7QUFEQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSx1QkFBQTtBQVFKOztBQU5BO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBWUo7O0FBVkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFhSjs7QUFYQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBY0o7O0FBWkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBZUo7O0FBYkE7RUFDSSxXQUFBO0FBZ0JKOztBQWRBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7QUFrQko7O0FBZkE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FBa0JKOztBQWhCQTtFQUNJLDJCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQW9CSjs7QUFqQkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQW9CSjs7QUFsQkE7RUFDSSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBcUJKOztBQW5CQTtFQUNJLGVBQUE7QUFzQko7O0FBcEJBO0VBQ0ksWUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksNkJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtBQTBCSjs7QUF4QkE7RUFDSSxXQUFBO0FBMkJKOztBQXpCQTtFQUNJLFlBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksV0FBQTtBQTZCSjs7QUF6QkE7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBNEJKOztBQTFCQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE2QkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5pbnN0cnVtZW50Q29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogOTklO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRyb2xsQ29udGFpbmVyIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgdG9wOiAtMHB4O1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbGVmdDogMTAwcHg7XHJcbn1cclxuLmluc3RydW1lbnRUb29sYmFyIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAzIGF1dG87XHJcbn1cclxuLmV4YW1wbGUtc3BhY2VyeiB7XHJcbiAgICBmbGV4OiAxMCAxMyBhdXRvO1xyXG59XHJcbi5taXhlclRyYWNrIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgNjAsIDYwLCAwLjcpO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICB0b3A6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1peGVyQ29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5ET1VCTEVPT1NDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCA5MCwgOTAsIDAuNCk7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uTU9OT09TQyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkwLCAyMDAsIDkwLCAwLjQpO1xyXG4gICAgbWF4LWhlaWdodDogMjBweDtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLlNBTVBMRVIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MCwgOTAsIDIwMCwgMC40KTtcclxuICAgIG1heC1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5NQVNURVIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA2MCwgNjAsIDAuNyk7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5taXhlclRyYWNrTXN0ciB7XHJcbiAgICBoZWlnaHQ6IDIyMXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDE5N3B4O1xyXG4gICAgLyogbWF4LXdpZHRoOiAxNTBweDsgKi9cclxuICAgIHRvcDogNzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAzcHg7XHJcbn1cclxubWF0LXRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuLmluc3RydW1lbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbn1cclxuLmJ1dHRvbnMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLm1hc3RlckdhaW5JbiB7XHJcbiAgICB0b3A6IDEzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pbnN0cnVtZW50UGFuZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udHJha1RpdGxlIHtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2xpcCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxuLnN0YWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2xpcHNDb250aW5lciB7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG59XHJcbi50cmFrVGl0bGVTZWNvbmRMaW5lIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4uaW5zdEhlYWRlciB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuaDMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIjtcclxufVxyXG4uZGF3IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50cmFja3NDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmluc3RydW1lbnRzQ29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiA2OSU7XHJcbiAgICBcclxufVxyXG5cclxuLnJvdzEge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLnJvdzQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn0iXX0= */"], changeDetection: 0 });


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

/***/ "Z1aY":
/*!***************************************************!*\
  !*** ./src/audio-components/lfo/lfo.component.ts ***!
  \***************************************************/
/*! exports provided: LfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LfoComponent", function() { return LfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/timer.service */ "IqJH");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");





function LfoComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wave_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", wave_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", wave_r1, "");
} }
class LfoComponent {
    constructor(myTimer) {
        this.myTimer = myTimer;
        //Provo a fare un pseudo lfo sfruttando il gain
        //e i metodi tipo setValueAtTime per creare una funzione 
        //che possa sostituire un oscillatore(generatore di funzioni)
        //da cosa è alimentato il gain? dalla frequenza del filtro
        //forse non c'è bisongno del gain basta modulare il parametro
        this.gainOsc = this.myTimer.audioContext.createGain();
        this.waveforms = ['square', 'sine', 'sawtooth', 'triangle', 'noise'];
        this.multipler = 2;
        this.center = 10000;
        this.rate = 2;
        this.tempo = 120;
        this.shape = 'sine';
        this.tempo = this.myTimer.speed;
    }
    ngOnInit() {
    }
    tick() {
        this.gainOsc.gain.value = this.center; // set oscillation centre value
        this.gainOsc.connect(this.modulationOut);
    }
    changed() {
    }
}
LfoComponent.ɵfac = function LfoComponent_Factory(t) { return new (t || LfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"])); };
LfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LfoComponent, selectors: [["app-lfo"]], inputs: { param: "param", modulationOut: "modulationOut" }, decls: 16, vars: 5, consts: [["type", "number", 3, "ngModel", "ngModelChange", "change"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange", "change"], [3, "value"]], template: function LfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "One shot LFO\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " center frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LfoComponent_Template_input_ngModelChange_5_listener($event) { return ctx.center = $event; })("change", function LfoComponent_Template_input_change_5_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LfoComponent_Template_select_ngModelChange_7_listener($event) { return ctx.shape = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LfoComponent_option_8_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LfoComponent_Template_input_ngModelChange_12_listener($event) { return ctx.rate = $event; })("change", function LfoComponent_Template_input_change_12_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " bpm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LfoComponent_Template_input_ngModelChange_15_listener($event) { return ctx.tempo = $event; })("change", function LfoComponent_Template_input_change_15_listener() { return ctx.changed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shape);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.waveforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tempo);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_z"]], styles: ["input[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxmby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJsZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIHdpZHRoOiAxMDBweDs7XHJcbn0iXX0= */"], changeDetection: 0 });


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
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var src_audio_components_lfo_lfo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/audio-components/lfo/lfo.component */ "Z1aY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ "fXoL");




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ providers: [_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"], AudioContext, _services_samples_library_service__WEBPACK_IMPORTED_MODULE_9__["SamplesLibraryService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _start_stop_start_stop_component__WEBPACK_IMPORTED_MODULE_4__["StartStopComponent"],
        _timer_control_timer_control_component__WEBPACK_IMPORTED_MODULE_7__["TimerControlComponent"],
        _synth_control_synth_control_component__WEBPACK_IMPORTED_MODULE_8__["SynthControlComponent"],
        _instrument_instrument_component__WEBPACK_IMPORTED_MODULE_10__["InstrumentComponent"],
        _adsr_adsr_component__WEBPACK_IMPORTED_MODULE_12__["AdsrComponent"],
        _audio_components_osc_osc_component__WEBPACK_IMPORTED_MODULE_13__["OscComponent"],
        _audio_components_gain_gain_component__WEBPACK_IMPORTED_MODULE_14__["GainComponent"],
        _audio_components_stereo_panner_stereo_panner_component__WEBPACK_IMPORTED_MODULE_15__["StereoPannerComponent"],
        _audio_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__["FilterComponent"],
        _core_graphic_piano_roll_canvas_based_piano_roll_canvas_based_component__WEBPACK_IMPORTED_MODULE_6__["PianoRollCanvasBasedComponent"],
        src_audio_components_lfo_lfo_component__WEBPACK_IMPORTED_MODULE_26__["LfoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"]] }); })();


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
        this.loadSounds('../../assets/wav/frperc.wav'); //C:\Progetti\AngularProjects\seq2021Ng11\src\assets\wav\MD4_CouldntBeEasier.wav
        this.loadSounds('../../assets/wav/xcrash.wav'); //C:\Progetti\AngularProjects\seq2021\sequencer\src\assets\wav\36105__erh__roswell.wav
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
                console.log(this.buffers);
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
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













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
        this.isMuted = 0;
        this.pianoRollDimension = 0;
        this.notes = {
            notesObject: [],
            notesValue: []
        };
        this.freq = [];
        this.coord = { x: 0, y: 0 };
        this.visualizzazione = 'normale';
        this.startLoop = 0;
        this.endLoop = 16;
        this.clips = [];
        this.selectedClipIndex = 0;
        this.worker = new Worker(__webpack__worker__0, undefined);
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
    ngAfterViewInit() {
        var _a;
        // @ts-ignore*/
        //this.ctxProva = this.canvasProva.nativeElement.getContext("2d");
        this.htmlCanvas = this.canvasProva.nativeElement;
        this.offscreen = this.htmlCanvas.transferControlToOffscreen();
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
        this.myBeatGui = new _classes_user_gui__WEBPACK_IMPORTED_MODULE_5__["UserGui"](this.lato, 0, this.ctxGui, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
        this.myVelocity = new _classes_velocity_gui__WEBPACK_IMPORTED_MODULE_6__["VelocityGui"](0, 0, this.ctxVelo, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
        this.logicTimeMarker = new _classes_line_of_squares__WEBPACK_IMPORTED_MODULE_2__["LineOfSquares"](this.lato, -this.lato, 0, "0,0,0", 100, 58, "VERTICALE", 0);
        this.userGui = new _classes_user_gui__WEBPACK_IMPORTED_MODULE_5__["UserGui"](this.lato, 0, this.ctxGui, { x: 0, y: 0 }, 0, "0,0,0", this.lato);
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
        this.coord = { x: this.logicTimeMarker.getX(), y: 0 };
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
    getColor() {
        if (this.isMuted) {
            return "red";
        }
        else {
            return "green";
        }
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
    } }, inputs: { la: "la", pianoRollDimensionIn: "pianoRollDimensionIn", clipIndex: "clipIndex", instrumentType: "instrumentType" }, outputs: { notaDaSuonare: "notaDaSuonare", velocity: "velocity" }, decls: 25, vars: 9, consts: [[1, "esterna", 2, "position", "absolute", "width", "100%", "height", "342px"], [1, "pianoRollToolbar"], ["type", "number", "min", "0", 3, "ngModel", "ngModelChange", "change"], ["type", "number", 3, "ngModel", "ngModelChange", "change"], [2, "float", "right"], ["mat-stroked-button", "", 3, "click"], [1, "allCanvas"], [1, "cnvsContainer", 2, "z-index", "2"], ["height", "960", 1, "bg-layer", 2, "z-index", "0", 3, "width", "click"], ["canvasGui", ""], ["height", "960", 1, "game-layer", 2, "z-index", "4", 3, "width", "click"], ["canvas", ""], ["height", "960", 1, "game-layer", 3, "width"], ["canvasProva", ""], ["height", "60", 1, "velocity-layer", 2, "display", "none", 3, "width", "click"], ["canvasVelo", ""], ["height", "4", 1, "looper-layer", 2, "z-index", "2", 3, "width"], ["canvasLooper", ""]], template: function PianoRollCanvasBasedComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_button_click_8_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_button_click_11_listener() { return ctx.random(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "canvas", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_canvas_click_15_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "canvas", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_canvas_click_17_listener($event) { return ctx.handleChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "canvas", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "canvas", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PianoRollCanvasBasedComponent_Template_canvas_click_21_listener($event) { return ctx.handleChangeVelo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "canvas", 16, 17);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.getExternalDimension());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.getExternalDimension());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.getExternalDimension());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.getExternalDimension());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("width", ctx.getExternalDimension());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["canvas[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.cnvsContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 344px;\n  position: absolute;\n  overflow: scroll;\n  left: 0px;\n  z-index: 2;\n}\n\n.velocity-layer[_ngcontent-%COMP%] {\n  float: left;\n  align-content: center;\n  background-color: burlywood;\n  overflow: auto;\n  top: 383px;\n  border: 1px solid grey;\n  z-index: 0;\n}\n\n.pianoRollToolbar[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: lightgray;\n  height: 38px;\n  line-height: 38px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 3 auto;\n}\n\n.allCanvas[_ngcontent-%COMP%] {\n  height: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwaWFuby1yb2xsLWNhbnZhcy1iYXNlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKIiwiZmlsZSI6InBpYW5vLXJvbGwtY2FudmFzLWJhc2VkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNudnNDb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM0NHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi52ZWxvY2l0eS1sYXllciB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJ1cmx5d29vZDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdG9wOiAzODNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ucGlhbm9Sb2xsVG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMyBhdXRvO1xyXG59XHJcbi5hbGxDYW52YXMge1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbn1cclxuIl19 */"], changeDetection: 0 });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/worker-plugin/dist/loader.js?name=0!./helper.worker */ "OKqC")))

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
        this.allSynthControl = [];
        this.isMuted = 0;
        this.gain = 0;
        this.waveSelected = "";
        this.filterSelected = "";
        this.adsr = { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 };
        this.adsrP = { attack: 0, decay: 0, sustain: 0, sustainVal: 0, release: 0 };
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