import {
  CompanyRepository
} from "./chunk-OZGAAK5S.js";
import {
  AppSettingsService
} from "./chunk-N7SNON5D.js";
import "./chunk-PAPOGBTA.js";
import "./chunk-RYUCLK6V.js";
import {
  StylesSettingsService
} from "./chunk-3KR3UNHC.js";
import {
  MatSnackBar
} from "./chunk-JYDETW4E.js";
import {
  FormInputComponent
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-ZKADD55Q.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
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
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import "./chunk-LHQOL4PU.js";
import {
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  SupabaseContext,
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  NgForOf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/repositories/styles-settings.repository.ts
var StylesSettingsRepository = class _StylesSettingsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "styles_settings", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function StylesSettingsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StylesSettingsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StylesSettingsRepository, factory: _StylesSettingsRepository.\u0275fac, providedIn: "root" });
};

// src/app/admin/app-settings/styles-settings/styles-settings.component.ts
function StylesSettingsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-form-input", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r1.formControlName)("settings", input_r1);
  }
}
var StylesSettingsComponent = class _StylesSettingsComponent {
  fb;
  stylesSettingsService;
  stylesSettingsRepository;
  appSettingsService;
  snackBar;
  translate;
  companyRepository;
  eventService;
  settings;
  stylesSettingsForm;
  formInputs = [
    {
      formControlName: "title",
      type: "text",
      label: "App Title",
      id: "title",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => false
    },
    {
      formControlName: "favicon",
      type: "text",
      label: "Favicon URL",
      id: "favicon",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => false
    },
    {
      formControlName: "main_color",
      type: "color",
      label: "Main Color",
      id: "main_color",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => false
    },
    {
      formControlName: "secondary_color",
      type: "color",
      label: "Secondary Color",
      id: "secondary_color",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => false
    },
    {
      formControlName: "logos",
      type: "array",
      label: "Logos",
      id: "logos",
      labelClass: "app-label",
      suffixIcon: "add",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      additional: {
        arrayConfig: {
          itemType: "text",
          // Each logo is a URL
          addButtonLabel: "Add Logo",
          removeButtonLabel: "Remove Logo"
        }
      },
      disabled: () => false
    }
  ];
  constructor(fb, stylesSettingsService, stylesSettingsRepository, appSettingsService, snackBar, translate, companyRepository, eventService) {
    this.fb = fb;
    this.stylesSettingsService = stylesSettingsService;
    this.stylesSettingsRepository = stylesSettingsRepository;
    this.appSettingsService = appSettingsService;
    this.snackBar = snackBar;
    this.translate = translate;
    this.companyRepository = companyRepository;
    this.eventService = eventService;
    this.stylesSettingsForm = this.fb.group({
      title: [""],
      favicon: [""],
      main_color: [""],
      secondary_color: [""],
      logos: [[]]
    });
  }
  ngOnInit() {
    this.stylesSettingsService.stylesSettingsSubject.subscribe((settings) => {
      this.settings = settings;
      this.stylesSettingsForm.patchValue(this.settings);
    });
  }
  ngAfterViewInit() {
    if (this.settings) {
      this.stylesSettingsForm.patchValue(this.settings);
    }
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.stylesSettingsForm.valid) {
        try {
          let formData = this.stylesSettingsForm.getRawValue();
          if (this.settings && this.settings.id) {
            yield this.stylesSettingsRepository.update(this.settings.id, formData);
            this.appSettingsService.initAppSettings();
            this.snackBar.open(this.translate.instant("Settings saved!"), "Close", {
              duration: 2e3
            });
            this.eventService.next(EventConstants.STYLES_SETTINGS_UPDATED, { id: this.settings.id, data: formData });
            return true;
          } else {
            const created = yield this.stylesSettingsRepository.create(formData);
            this.appSettingsService.initAppSettings();
            this.snackBar.open(this.translate.instant("Settings created!"), "Close", {
              duration: 2e3
            });
            if (created && created[0]?.id) {
              this.eventService.next(EventConstants.STYLES_SETTINGS_CREATED, { id: created[0].id, data: formData });
            }
            return true;
          }
        } catch (error) {
          if (this.settings && this.settings.id) {
            this.eventService.next(EventConstants.STYLES_SETTINGS_UPDATE_ERROR, { error });
          } else {
            this.eventService.next(EventConstants.STYLES_SETTINGS_CREATE_ERROR, { error });
          }
          return false;
        }
      }
      return false;
    });
  }
  static \u0275fac = function StylesSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StylesSettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StylesSettingsService), \u0275\u0275directiveInject(StylesSettingsRepository), \u0275\u0275directiveInject(AppSettingsService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(CompanyRepository), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StylesSettingsComponent, selectors: [["app-styles-settings"]], decls: 9, vars: 5, consts: [[1, "card"], [1, "card-body"], [3, "ngSubmit", "formGroup"], [1, "row"], ["class", "col-12 mt-3", 4, "ngFor", "ngForOf"], [1, "card-footer", "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [1, "col-12", "mt-3"], [3, "formControlName", "settings"]], template: function StylesSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "form", 2);
      \u0275\u0275listener("ngSubmit", function StylesSettingsComponent_Template_form_ngSubmit_2_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275template(4, StylesSettingsComponent_div_4_Template, 2, 2, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "button", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.stylesSettingsForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.formInputs);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 3, "Save"), " ");
    }
  }, dependencies: [
    FormInputComponent,
    CommonModule,
    NgForOf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TranslatePipe,
    MatButton
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StylesSettingsComponent, { className: "StylesSettingsComponent", filePath: "src/app/admin/app-settings/styles-settings/styles-settings.component.ts", lineNumber: 29 });
})();
export {
  StylesSettingsComponent
};
//# sourceMappingURL=chunk-7FRF34LW.js.map
