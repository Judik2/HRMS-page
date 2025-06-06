import {
  MatTooltip
} from "./chunk-X45EM66I.js";
import {
  IonicModule
} from "./chunk-CRLS72DG.js";
import {
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ERGQW4H6.js";

// src/app/shared/templates/label/label.component.ts
function LabelComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "span", 4);
    \u0275\u0275element(3, "i", 5);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.settings.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx_r0.settings.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, ctx_r0.value ? ctx_r0.value : ctx_r0.tryGetValue()));
  }
}
function LabelComponent_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r0.value ? ctx_r0.value : ctx_r0.tryGetValue(), "dd/MM/yyyy"), " ");
  }
}
function LabelComponent_ng_container_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.value ? ctx_r0.value : ctx_r0.tryGetValue(), " ");
  }
}
function LabelComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 3)(2, "span", 4);
    \u0275\u0275element(3, "i", 5);
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275template(8, LabelComponent_ng_container_2_ng_container_8_Template, 3, 4, "ng-container", 7)(9, LabelComponent_ng_container_2_ng_template_9_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notDate_r2 = \u0275\u0275reference(10);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.settings.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx_r0.settings.title));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isDate(ctx_r0.value ? ctx_r0.value : ctx_r0.tryGetValue()))("ngIfElse", notDate_r2);
  }
}
function LabelComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 9);
    \u0275\u0275elementStart(4, "span", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("matTooltip", \u0275\u0275pipeBind1(2, 3, ctx_r0.value ? ctx_r0.value : ctx_r0.tryGetValue()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.settings.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, ctx_r0.value ? ctx_r0.value : ctx_r0.tryGetValue()));
  }
}
var LabelComponent = class _LabelComponent {
  settings;
  element;
  value = "";
  constructor() {
  }
  ngOnChanges(changes) {
    if (changes["element"] && this.element) {
      this.tryGetValue();
    }
  }
  tryGetValue() {
    if (this.settings.field) {
      let val = this.getNestedValue(this.element, this.settings.field);
      this.value = val ? val : "-";
    }
    return this.value;
  }
  getNestedValue(row, field) {
    return field.split(".").reduce((acc, part) => {
      if (!acc) {
        return "";
      }
      if (typeof acc[part] === "function") {
        acc = acc[part]();
        return acc;
      }
      return acc && acc[part];
    }, row);
  }
  isDate(value) {
    return !isNaN(Date.parse(value));
  }
  static \u0275fac = function LabelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LabelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LabelComponent, selectors: [["app-label"]], inputs: { settings: "settings", element: "element" }, features: [\u0275\u0275NgOnChangesFeature], decls: 4, vars: 4, consts: [["notDate", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "d-inline-flex", "align-items-center"], [1, "me-2", 3, "ngClass"], [1, "text-dark"], [4, "ngIf", "ngIfElse"], [1, "w-100", "text-dark", "d-inline-flex", "align-items-center", "mb-2", 3, "matTooltip"], [1, "ti", "text-gray-5", "me-2", 3, "ngClass"], [1, "text-truncate"]], template: function LabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 1);
      \u0275\u0275template(1, LabelComponent_ng_container_1_Template, 10, 7, "ng-container", 2)(2, LabelComponent_ng_container_2_Template, 11, 6, "ng-container", 2)(3, LabelComponent_ng_container_3_Template, 7, 7, "ng-container", 2);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngSwitch", ctx.settings.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "profile-label");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "date-label");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "no-title-label");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    DatePipe,
    IonicModule,
    TranslatePipe,
    MatTooltip
  ], styles: ["\n\napp-label[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=label.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LabelComponent, { className: "LabelComponent", filePath: "src/app/shared/templates/label/label.component.ts", lineNumber: 19 });
})();

export {
  LabelComponent
};
//# sourceMappingURL=chunk-LAP7BRMJ.js.map
