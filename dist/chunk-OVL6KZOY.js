import {
  FeatureParametersRepository,
  PageFeatureParametersRepository
} from "./chunk-GGIVJW3X.js";
import {
  CdkDrag,
  CdkDragHandle,
  DragDropModule
} from "./chunk-BP2MFMSD.js";
import {
  FeatureRendererService
} from "./chunk-YJCCIIYS.js";
import {
  FeatureRegistry,
  FeaturesRepository,
  PageFeaturesRepository
} from "./chunk-SLFN5ZXT.js";
import {
  PageFeatureDto,
  PageFeaturesInsertDto,
  PageFeaturesUpdateDto,
  PagesRepository
} from "./chunk-ZQOC7KHR.js";
import "./chunk-G7IEYWLY.js";
import "./chunk-WVSW2X76.js";
import "./chunk-25KMDAIC.js";
import "./chunk-EQM2SLMA.js";
import "./chunk-S5OCFGQY.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import "./chunk-X45EM66I.js";
import "./chunk-BWIOX5TR.js";
import {
  MatSnackBar
} from "./chunk-JYDETW4E.js";
import "./chunk-M2EJXGZP.js";
import "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
import {
  DefaultValueAccessor,
  Dir,
  FormsModule,
  MatCommonModule,
  NgControlStatus,
  NgModel
} from "./chunk-JDSXESFV.js";
import "./chunk-PTMC7Z3G.js";
import "./chunk-NPYWTI7B.js";
import "./chunk-YB7VYXZC.js";
import "./chunk-BSJGXNL2.js";
import "./chunk-SNL7CR3M.js";
import "./chunk-POF6P2IF.js";
import "./chunk-BCSCWTDQ.js";
import "./chunk-XEW2RVSV.js";
import "./chunk-2R2VMYXT.js";
import "./chunk-34SSTWFD.js";
import "./chunk-PVOL3XIB.js";
import "./chunk-PPDZQ3XB.js";
import "./chunk-O2426PIE.js";
import "./chunk-CN2NLH3R.js";
import "./chunk-6VMHCKIO.js";
import "./chunk-Z4NK5ERE.js";
import "./chunk-CLKJFHPN.js";
import "./chunk-3IAPPBJB.js";
import "./chunk-4JBIDYYM.js";
import "./chunk-A4AE5KKX.js";
import "./chunk-FET6I6E4.js";
import "./chunk-PYCXHYST.js";
import "./chunk-TLWCP54H.js";
import "./chunk-NKEEF4XY.js";
import "./chunk-LHQOL4PU.js";
import "./chunk-YW5JDNY2.js";
import {
  ActivatedRoute
} from "./chunk-HDIRTHWB.js";
import {
  ANIMATION_MODULE_TYPE,
  ApplicationRef,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ComponentFactoryResolver$1,
  ElementRef,
  InjectionToken,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c0 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY
});
function MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY() {
  return {
    diameter: BASE_SIZE
  };
}
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  /** Whether the _mat-animation-noopable class should be applied, disabling animations.  */
  _noopAnimations;
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress spinner. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.io/components/progress-spinner/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  /** The element of the determinate spinner. */
  _determinateCircle;
  constructor() {
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    this._noopAnimations = animationMode === "NoopAnimations" && !!defaults && !defaults._forceAnimations;
    this.mode = this._elementRef.nativeElement.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  mode;
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  /** The diameter of the progress spinner (will set width and height of svg). */
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  /** Stroke width of the progress spinner. */
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  /** The radius of the spinner, adjusted for stroke width. */
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  /** The view box of the spinner's svg element. */
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  /** The stroke circumference of the svg circle. */
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  /** The dash offset of the svg circle. */
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  /** Stroke width of the circle in percent. */
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mdc-circular-progress-size", ctx.diameter + "px")("--mdc-circular-progress-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mdc-circular-progress-size]": 'diameter + "px"',
        "[style.--mdc-circular-progress-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/admin/page/page-editor/page-editor.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c02 = ["featureContainer"];
var _c1 = ["featureBlock"];
function PageEditorComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Clear All");
    \u0275\u0275elementEnd();
  }
}
function PageEditorComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function PageEditorComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Save Changes");
    \u0275\u0275elementEnd();
  }
}
function PageEditorComponent_mat_spinner_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 21);
  }
}
function PageEditorComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("dragstart", function PageEditorComponent_div_18_Template_div_dragstart_0_listener($event) {
      const feature_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFeatureDragStart($event, feature_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r3.name, " ");
  }
}
function PageEditorComponent_div_25_div_16_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function PageEditorComponent_div_25_div_16_div_4_div_1_Template_input_ngModelChange_4_listener($event) {
      const param_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(param_r8.value, $event) || (param_r8.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 43);
    \u0275\u0275listener("click", function PageEditorComponent_div_25_div_16_div_4_div_1_Template_button_click_5_listener() {
      const param_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const pageFeature_r6 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.saveFeatureParam(pageFeature_r6, param_r8));
    });
    \u0275\u0275element(6, "i", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const param_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(param_r8.parameter_name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", param_r8.value);
  }
}
function PageEditorComponent_div_25_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, PageEditorComponent_div_25_div_16_div_4_div_1_Template, 7, 2, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageFeature_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", pageFeature_r6.parameters);
  }
}
function PageEditorComponent_div_25_div_16_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " No parameters available ");
    \u0275\u0275elementEnd();
  }
}
function PageEditorComponent_div_25_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h3");
    \u0275\u0275text(3, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PageEditorComponent_div_25_div_16_div_4_Template, 2, 1, "div", 36)(5, PageEditorComponent_div_25_div_16_div_5_Template, 2, 0, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pageFeature_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", pageFeature_r6.parameters == null ? null : pageFeature_r6.parameters.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(pageFeature_r6.parameters == null ? null : pageFeature_r6.parameters.length));
  }
}
function PageEditorComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23, 1);
    \u0275\u0275listener("cdkDragEnded", function PageEditorComponent_div_25_Template_div_cdkDragEnded_0_listener($event) {
      const pageFeature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDragEnded($event, pageFeature_r6));
    });
    \u0275\u0275elementStart(2, "div", 24, 2)(4, "div", 25)(5, "div", 26)(6, "button", 27);
    \u0275\u0275listener("click", function PageEditorComponent_div_25_Template_button_click_6_listener() {
      const pageFeature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleFeatureParams(pageFeature_r6));
    });
    \u0275\u0275element(7, "i", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 26)(11, "button", 27);
    \u0275\u0275listener("click", function PageEditorComponent_div_25_Template_button_click_11_listener() {
      const pageFeature_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeFeature(pageFeature_r6));
    });
    \u0275\u0275element(12, "i", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 31);
    \u0275\u0275element(14, "div", 32, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, PageEditorComponent_div_25_div_16_Template, 6, 2, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageFeature_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    const pageFeaturesContainer_r9 = \u0275\u0275reference(24);
    \u0275\u0275styleProp("width", pageFeature_r6.width, "px")("height", pageFeature_r6.height, "px");
    \u0275\u0275classProp("expanded", pageFeature_r6.isExpanded);
    \u0275\u0275property("cdkDragFreeDragPosition", ctx_r3.getFreeDragPosition(pageFeature_r6))("cdkDragBoundary", pageFeaturesContainer_r9);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", pageFeature_r6.width, "px")("height", pageFeature_r6.height, "px");
    \u0275\u0275property("id", "feature-block-" + pageFeature_r6.id);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("fa-chevron-left", !pageFeature_r6.isExpanded)("fa-chevron-right", pageFeature_r6.isExpanded);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pageFeature_r6.name);
    \u0275\u0275advance(5);
    \u0275\u0275property("id", "feature-container-" + pageFeature_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pageFeature_r6.isExpanded);
  }
}
var PageEditorComponent = class _PageEditorComponent {
  route;
  pagesRepository;
  pageFeaturesRepository;
  pageFeatureParametersRepository;
  featuresRepository;
  featureRenderer;
  renderer;
  componentFactoryResolver;
  applicationRef;
  injector;
  changeDetectorRef;
  snackBar;
  featureParametersRepository;
  featureContainers;
  featureBlocks;
  page = null;
  pageFeatures = [];
  availableFeatures = [];
  pagesSubject = new BehaviorSubject([]);
  pages$ = this.pagesSubject.asObservable();
  featuresSubject = new BehaviorSubject([]);
  features$ = this.featuresSubject.asObservable();
  availableFeaturesSubject = new BehaviorSubject([]);
  availableFeatures$ = this.availableFeaturesSubject.asObservable();
  componentRefs = /* @__PURE__ */ new Map();
  // Add this property to store dragged feature
  draggedFeature = null;
  isSaving = false;
  isClearing = false;
  resizeObserver = null;
  constructor(route, pagesRepository, pageFeaturesRepository, pageFeatureParametersRepository, featuresRepository, featureRenderer, renderer, componentFactoryResolver, applicationRef, injector, changeDetectorRef, snackBar, featureParametersRepository) {
    this.route = route;
    this.pagesRepository = pagesRepository;
    this.pageFeaturesRepository = pageFeaturesRepository;
    this.pageFeatureParametersRepository = pageFeatureParametersRepository;
    this.featuresRepository = featuresRepository;
    this.featureRenderer = featureRenderer;
    this.renderer = renderer;
    this.componentFactoryResolver = componentFactoryResolver;
    this.applicationRef = applicationRef;
    this.injector = injector;
    this.changeDetectorRef = changeDetectorRef;
    this.snackBar = snackBar;
    this.featureParametersRepository = featureParametersRepository;
  }
  saveFeatureSize(feature) {
    return __async(this, null, function* () {
      if (!feature.id)
        return;
      const updateDto = new PageFeaturesUpdateDto({
        width: feature.width,
        height: feature.height
      });
      yield this.pageFeaturesRepository.update(feature.id, updateDto);
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const id = this.route.snapshot.params["id"];
      if (id) {
        yield this.loadPageWithFeatures(id);
      }
      yield this.loadAvailableFeatures();
      this.pages$.subscribe((pages) => {
        this.page = pages.find((p) => p.id === Number(id)) || null;
      });
      this.availableFeatures$.subscribe((features) => {
        this.availableFeatures = features;
      });
    });
  }
  ngAfterViewInit() {
  }
  setupResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const block = entry.target;
        const container = block.closest(".features-block-container");
        if (container) {
          const width = Math.round(entry.contentRect.width);
          const height = Math.round(entry.contentRect.height);
          container.style.width = `${width}px`;
          container.style.height = `${height}px`;
        }
      });
    });
    this.featureBlocks.forEach((block) => {
      const element = block.nativeElement;
      this.resizeObserver?.observe(element);
    });
  }
  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  renderFeatures() {
    if (!this.pageFeatures || !this.featureContainers)
      return;
    setTimeout(() => {
      this.pageFeatures.forEach((feature, index) => {
        if (!feature.id)
          return;
        const featureHost = this.featureContainers.get(index);
        if (!featureHost || !feature.componentName) {
          console.error("Feature host or component name is missing for feature:", feature.id);
          return;
        }
        const componentType = FeatureRegistry.getComponent(feature.componentName);
        if (!componentType) {
          console.error(`Component ${feature.componentName} not found in featureRegistry`);
          return;
        }
        try {
          featureHost.clear();
          const componentRef = featureHost.createComponent(componentType);
          if (feature.parameters) {
            componentRef.instance.parameters = feature.parameters;
          }
          if (componentRef.instance.initialize) {
            componentRef.instance.initialize();
          }
        } catch (error) {
          console.error("Error creating component for feature:", feature.id, error);
        }
      });
      this.changeDetectorRef.detectChanges();
    });
  }
  loadPageWithFeatures(pageId) {
    return __async(this, null, function* () {
      const result = yield this.pagesRepository.getByIdWithFeatures(pageId);
      if (result) {
        this.pagesSubject.next([result.page]);
        this.featuresSubject.next(result.features);
        this.pageFeatures = result.features;
        this.renderFeatures();
        setTimeout(() => {
          this.setupResizeObserver();
        }, 1e3);
      }
    });
  }
  loadAvailableFeatures() {
    return __async(this, null, function* () {
      const features = yield this.featuresRepository.getAllWithParameters();
      this.availableFeaturesSubject.next(features);
    });
  }
  updateFeaturePosition(feature, newPosition) {
    return __async(this, null, function* () {
      if (!feature.id)
        return;
      const updateDto = new PageFeaturesUpdateDto({
        position_x: newPosition,
        position_y: 0,
        width: 1,
        height: 1
      });
      yield this.pageFeaturesRepository.update(feature.id, updateDto);
      yield this.loadPageWithFeatures(this.page?.id ?? 0);
    });
  }
  onContainerDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const featureData = this.draggedFeature;
    if (!featureData)
      return;
    const container = event.currentTarget;
    const parent = container.parentElement;
    const containerRect = container.getBoundingClientRect();
    const x = event.layerX + parent.scrollLeft;
    const y = event.layerY + parent.scrollTop;
    const newFeature = new PageFeatureDto({
      feature_id: featureData.id,
      name: featureData.name,
      component_name: featureData.component_name,
      position_x: Math.round(x),
      position_y: Math.round(y),
      width: 500,
      height: 500,
      parameters: featureData.parameters.map((param) => ({
        parameter_name: param.name
      }))
    });
    this.pageFeatures.push(newFeature);
    this.changeDetectorRef.detectChanges();
    this.addFeature(newFeature);
    this.draggedFeature = null;
  }
  addFeature(feature) {
    return __async(this, null, function* () {
      if (!this.page?.id || !feature.feature_id)
        return;
      try {
        const insertDto = new PageFeaturesInsertDto({
          page_id: this.page.id,
          feature_id: feature.feature_id,
          position_x: Math.round(feature.position_x || 0),
          position_y: Math.round(feature.position_y || 0),
          width: Math.round(feature.width || 0),
          height: Math.round(feature.height || 0)
        });
        this.pageFeaturesRepository.create(insertDto).then((createdFeature) => __async(this, null, function* () {
          if (feature.parameters && feature.parameters.length > 0 && createdFeature[0].id) {
            for (const param of feature.parameters) {
              if (param.parameter_name) {
                yield this.saveFeatureParam(createdFeature[0], param);
              }
            }
          }
          this.loadPageWithFeatures(this.page?.id ?? 0);
        }));
      } catch (error) {
        console.error("Error adding feature:", error);
        this.pageFeatures = this.pageFeatures.filter((f) => f.feature_id !== feature.feature_id || f.position_x !== feature.position_x || f.position_y !== feature.position_y);
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  removeFeature(feature) {
    return __async(this, null, function* () {
      if (!feature.id)
        return;
      const result = yield import_sweetalert2.default.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
      if (result.isConfirmed) {
        try {
          yield this.pageFeaturesRepository.delete(feature.id);
          this.pageFeatures = this.pageFeatures.filter((f) => f.id !== feature.id);
          this.changeDetectorRef.detectChanges();
          import_sweetalert2.default.fire("Deleted!", "Feature has been deleted.", "success");
        } catch (error) {
          console.error("Error removing feature:", error);
          import_sweetalert2.default.fire("Error!", "Failed to delete feature.", "error");
        }
      }
    });
  }
  selectPage(page) {
    return __async(this, null, function* () {
      this.page = page;
      if (page.id) {
        yield this.loadPageWithFeatures(page.id);
      }
    });
  }
  savePageLayout() {
    return __async(this, null, function* () {
      if (!this.page?.id)
        return;
      this.isSaving = true;
      try {
        this.pageFeatures.forEach((pageFeature, index) => {
          const feature = this.pageFeatures[index];
          if (feature) {
            const blockElement = document.getElementById(`feature-block-${feature.id}`);
            if (blockElement) {
              const blockElementAsHTMLElement = blockElement;
              feature.width = Math.round(blockElementAsHTMLElement.offsetWidth);
              feature.height = Math.round(blockElementAsHTMLElement.offsetHeight);
            }
          }
        });
        for (const feature of this.pageFeatures) {
          if (!feature.id)
            continue;
          const updateDto = new PageFeaturesUpdateDto({
            position_x: feature.position_x,
            position_y: feature.position_y,
            width: feature.width,
            height: feature.height
          });
          yield this.pageFeaturesRepository.update(feature.id, updateDto);
        }
        if (this.page?.id) {
          yield this.loadPageWithFeatures(this.page.id);
        }
        this.snackBar.open("Page layout saved successfully!", "Close", {
          duration: 3e3,
          panelClass: ["success-snackbar"]
        });
      } catch (error) {
        console.error("Error saving page layout:", error);
        this.snackBar.open("Error saving page layout!", "Close", {
          duration: 3e3,
          panelClass: ["error-snackbar"]
        });
      } finally {
        this.isSaving = false;
      }
    });
  }
  // Modify your existing drop method to store dragged feature
  drop(event) {
    if (event.previousContainer === event.container)
      return;
    const movedItem = event.previousContainer.data[event.previousIndex];
    this.draggedFeature = movedItem;
  }
  onDragEnded(event, feature) {
    const position = event.source.getFreeDragPosition();
    feature.position_x = Math.round(position.x);
    feature.position_y = Math.round(position.y);
  }
  getFreeDragPosition(feature) {
    return {
      x: Math.round(feature.position_x || 0),
      y: Math.round(feature.position_y || 0)
    };
  }
  onFeatureDragStart(event, feature) {
    this.draggedFeature = feature;
    if (event.dataTransfer) {
      event.dataTransfer.setData("text/plain", "");
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  toggleFeatureParams(feature) {
    feature.isExpanded = !feature.isExpanded;
  }
  saveFeatureParam(feature, param) {
    return __async(this, null, function* () {
      if (!feature.id)
        return;
      yield this.pageFeatureParametersRepository.upsertParameter(feature.id, param.parameter_name || "", param.value || "");
    });
  }
  clearAllFeatures() {
    return __async(this, null, function* () {
      if (!this.page?.id)
        return;
      const result = yield import_sweetalert2.default.fire({
        title: "Are you sure?",
        text: "This will delete all features from the page. This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, clear all!"
      });
      if (result.isConfirmed) {
        this.isClearing = true;
        try {
          for (const feature of this.pageFeatures) {
            if (feature.id) {
              yield this.pageFeaturesRepository.delete(feature.id);
            }
          }
          this.pageFeatures = [];
          this.changeDetectorRef.detectChanges();
          yield this.loadPageWithFeatures(this.page.id);
          this.snackBar.open("All features cleared successfully!", "Close", {
            duration: 3e3,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: ["success-snackbar"]
          });
        } catch (error) {
          console.error("Error clearing all features:", error);
          this.snackBar.open("Error clearing features!", "Close", {
            duration: 3e3,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: ["error-snackbar"]
          });
        } finally {
          this.isClearing = false;
        }
      }
    });
  }
  static \u0275fac = function PageEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageEditorComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PagesRepository), \u0275\u0275directiveInject(PageFeaturesRepository), \u0275\u0275directiveInject(PageFeatureParametersRepository), \u0275\u0275directiveInject(FeaturesRepository), \u0275\u0275directiveInject(FeatureRendererService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ComponentFactoryResolver$1), \u0275\u0275directiveInject(ApplicationRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(FeatureParametersRepository));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageEditorComponent, selectors: [["app-page-editor"]], viewQuery: function PageEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5, ViewContainerRef);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.featureContainers = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.featureBlocks = _t);
    }
  }, decls: 26, vars: 9, consts: [["pageFeaturesContainer", ""], ["dragElements", "cdkDrag"], ["featureBlock", ""], ["featureContainer", ""], [1, "page-editor"], [1, "editor-header"], [1, "header-buttons"], [1, "btn", "btn-danger", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"], [4, "ngIf"], ["diameter", "20", "strokeWidth", "2", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "fas", "fa-save"], [1, "editor-content"], [1, "features-sidebar"], [1, "features-list"], ["class", "feature-item", "draggable", "true", 3, "dragstart", 4, "ngFor", "ngForOf"], [1, "page-content", "card"], [1, "page-features-container"], [1, "page-features-content", 3, "dragover", "drop"], ["class", "features-block-container", "dir", "ltr", "cdkDrag", "", 3, "cdkDragFreeDragPosition", "cdkDragBoundary", "width", "height", "expanded", "cdkDragEnded", 4, "ngFor", "ngForOf"], ["diameter", "20", "strokeWidth", "2"], ["draggable", "true", 1, "feature-item", 3, "dragstart"], ["dir", "ltr", "cdkDrag", "", 1, "features-block-container", 3, "cdkDragEnded", "cdkDragFreeDragPosition", "cdkDragBoundary"], ["dir", "ltr", 1, "feature-block", 3, "id"], ["dir", "rtl", "cdkDragHandle", "", 1, "feature-header"], [1, "feature-actions"], [1, "action-btn", 3, "click"], [1, "fas"], [1, "feature-name"], [1, "fas", "fa-trash"], ["dir", "rtl", 1, "feature-content"], [3, "id"], ["class", "feature-params-panel", 4, "ngIf"], [1, "feature-params-panel"], [1, "params-content"], ["class", "params-list", 4, "ngIf"], ["class", "no-params", 4, "ngIf"], [1, "params-list"], ["class", "param-item", 4, "ngFor", "ngForOf"], [1, "param-item"], [1, "param-input-group"], ["type", "text", 3, "ngModelChange", "ngModel"], [1, "save-param-btn", 3, "click"], [1, "no-params"]], template: function PageEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 6)(5, "button", 7);
      \u0275\u0275listener("click", function PageEditorComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clearAllFeatures());
      });
      \u0275\u0275element(6, "i", 8);
      \u0275\u0275template(7, PageEditorComponent_span_7_Template, 2, 0, "span", 9)(8, PageEditorComponent_mat_spinner_8_Template, 1, 0, "mat-spinner", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 11);
      \u0275\u0275listener("click", function PageEditorComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.savePageLayout());
      });
      \u0275\u0275element(10, "i", 12);
      \u0275\u0275template(11, PageEditorComponent_span_11_Template, 2, 0, "span", 9)(12, PageEditorComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "h2");
      \u0275\u0275text(16, "Available components");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 15);
      \u0275\u0275template(18, PageEditorComponent_div_18_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 17)(20, "h2");
      \u0275\u0275text(21, "Page structure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 18)(23, "div", 19, 0);
      \u0275\u0275listener("dragover", function PageEditorComponent_Template_div_dragover_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDragOver($event));
      })("drop", function PageEditorComponent_Template_div_drop_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onContainerDrop($event));
      });
      \u0275\u0275template(25, PageEditorComponent_div_25_Template, 17, 20, "div", 20);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate((ctx.page == null ? null : ctx.page.name) || "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.isClearing);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isClearing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isClearing);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSaving);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isSaving);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSaving);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.availableFeatures);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.pageFeatures);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DragDropModule, CdkDrag, CdkDragHandle, MatProgressSpinnerModule, MatProgressSpinner, Dir], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  padding: 20px;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px;\n  background-color: #f8f9fa;\n  border-right: 1px solid #dee2e6;\n}\n.sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.sidebar[_ngcontent-%COMP%]   .pages-list[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.sidebar[_ngcontent-%COMP%]   .pages-list[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: white;\n  border: 1px solid #dee2e6;\n}\n.sidebar[_ngcontent-%COMP%]   .pages-list[_ngcontent-%COMP%]   .page-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.sidebar[_ngcontent-%COMP%]   .pages-list[_ngcontent-%COMP%]   .page-item.selected[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.sidebar[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-bottom: 5px;\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  cursor: move;\n}\n.sidebar[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.editor-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n}\n.editor-area[_ngcontent-%COMP%]   .page-editor[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  gap: 10px;\n  margin: 20px 0;\n  min-height: 500px;\n  background-color: #f8f9fa;\n  padding: 20px;\n  border-radius: 4px;\n}\n.editor-area[_ngcontent-%COMP%]   .page-editor[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #dee2e6;\n  border-radius: 4px;\n  padding: 10px;\n  cursor: move;\n  text-align: center;\n}\n.editor-area[_ngcontent-%COMP%]   .page-editor[_ngcontent-%COMP%]   .grid-container[_ngcontent-%COMP%]   .grid-item[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.editor-area[_ngcontent-%COMP%]   .page-editor[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.editor-area[_ngcontent-%COMP%]   .page-editor[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n}\n.editor-area[_ngcontent-%COMP%]   .no-selection[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: #6c757d;\n}\n.editor-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  background-color: white;\n  border-bottom: 1px solid #dee2e6;\n  margin-bottom: 1rem;\n}\n.editor-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #343a40;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: 0.375rem;\n  font-weight: 500;\n  transition: all 0.2s ease-in-out;\n  border: none;\n  cursor: pointer;\n  min-width: 120px;\n  justify-content: center;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #0d6efd;\n  color: white;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0b5ed7;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]     .mat-progress-spinner circle, \n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: white;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  color: white;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #bb2d3b;\n}\n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]     .mat-progress-spinner circle, \n.editor-header[_ngcontent-%COMP%]   .header-buttons[_ngcontent-%COMP%]   .btn.btn-danger[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: white;\n}\n.editor-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  gap: 2rem;\n  padding: 2rem;\n  background: #f5f5f5;\n  overflow: hidden;\n}\n.features-sidebar[_ngcontent-%COMP%] {\n  width: 350px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.features-sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.features-sidebar[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.features-sidebar[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  background: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  cursor: move;\n}\n.features-sidebar[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]:hover {\n  background: #e9ecef;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.page-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.features-block-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.features-block-container.expanded[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: all;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100%;\n  position: absolute;\n  right: -300px;\n  background: white;\n  border-left: 1px solid #e0e0e0;\n  box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 1rem;\n  color: #495057;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   .params-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   .params-list[_ngcontent-%COMP%]   .param-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   .params-list[_ngcontent-%COMP%]   .param-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #495057;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   .params-list[_ngcontent-%COMP%]   .param-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 0.875rem;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   .params-list[_ngcontent-%COMP%]   .param-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #80bdff;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-params-panel[_ngcontent-%COMP%]   .params-content[_ngcontent-%COMP%]   .no-params[_ngcontent-%COMP%] {\n  color: #6c757d;\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 1rem;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-block[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  background: transparent;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;\n  resize: both;\n  overflow: auto;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-block[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-bottom: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: move;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-block[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%]   .feature-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-block[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%]   .feature-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.25rem;\n  cursor: pointer;\n  color: #6c757d;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-block[_ngcontent-%COMP%]   .feature-header[_ngcontent-%COMP%]   .feature-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  color: #343a40;\n}\n.features-block-container[_ngcontent-%COMP%]   .feature-block[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem;\n  overflow: auto;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.page-drop-zone[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.page-drop-zone.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  pointer-events: all;\n  background: rgba(0, 0, 0, 0.05);\n}\n.page-features-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 300px) !important;\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  overflow: auto;\n  z-index: 2;\n}\n.page-features-container[_ngcontent-%COMP%]   .page-features-content[_ngcontent-%COMP%] {\n  height: 3000px;\n  width: 10000px;\n}\n.param-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.param-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 4px 8px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.param-input-group[_ngcontent-%COMP%]   .save-param-btn[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: none;\n  border-radius: 4px;\n  background-color: #2196f3;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.param-input-group[_ngcontent-%COMP%]   .save-param-btn[_ngcontent-%COMP%]:hover {\n  background-color: #1976d2;\n}\n.param-input-group[_ngcontent-%COMP%]   .save-param-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n  .success-snackbar {\n  background-color: #28a745;\n  color: white;\n}\n  .error-snackbar {\n  background-color: #dc3545;\n  color: white;\n}\n/*# sourceMappingURL=page-editor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageEditorComponent, { className: "PageEditorComponent", filePath: "src/app/admin/page/page-editor/page-editor.component.ts", lineNumber: 37 });
})();
export {
  PageEditorComponent
};
//# sourceMappingURL=chunk-OVL6KZOY.js.map
