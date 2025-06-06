import {
  LanguageSettingsService
} from "./chunk-PAPOGBTA.js";
import {
  MatSnackBar
} from "./chunk-JYDETW4E.js";
import {
  AppInputComponent
} from "./chunk-M2EJXGZP.js";
import {
  AppModalComponent,
  FormInputComponent,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import {
  MatIcon,
  MatIconModule,
  MatList,
  MatListItem,
  MatListItemTitle,
  MatListModule
} from "./chunk-ZKADD55Q.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  StorageService,
  Validators,
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
  NgClass,
  NgForOf,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/types/language.dto.ts
var LanguageRowDto = class {
  code;
  id;
  is_default;
  name;
  translation_settings_id;
  constructor(param = null) {
    if (param) {
      this.code = param.code;
      this.id = param.id;
      this.is_default = param.is_default;
      this.name = param.name;
      this.translation_settings_id = param.translation_settings_id;
    }
  }
};

// src/supabase/repositories/translation-settings.repository.ts
var TranslationSettingsRepository = class _TranslationSettingsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "translation_settings", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function TranslationSettingsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslationSettingsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TranslationSettingsRepository, factory: _TranslationSettingsRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/language.repository.ts
var LanguageRepository = class _LanguageRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "language", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByTranslationSettingId(translation_settings_id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*").eq("translation_settings_id", translation_settings_id);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function LanguageRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageRepository, factory: _LanguageRepository.\u0275fac, providedIn: "root" });
};

// src/app/admin/app-settings/language-settings/language-settings.component.ts
var _c0 = ["languageModalContent"];
var _c1 = () => ({ "col-12": true });
function LanguageSettingsComponent_mat_list_item_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 15)(1, "span", 10);
    \u0275\u0275element(2, "app-input", 11)(3, "app-input", 11);
    \u0275\u0275elementStart(4, "mat-icon", 16);
    \u0275\u0275listener("click", function LanguageSettingsComponent_mat_list_item_16_Template_mat_icon_click_4_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeItem(i_r3));
    });
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("settings", ctx_r3.languageLabelSettings)("element", item_r5);
    \u0275\u0275advance();
    \u0275\u0275property("settings", ctx_r3.languageValueSettings)("element", item_r5);
  }
}
function LanguageSettingsComponent_ng_template_24_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "app-form-input", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r7.formControlName)("settings", input_r7);
  }
}
function LanguageSettingsComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "form", 18);
    \u0275\u0275listener("ngSubmit", function LanguageSettingsComponent_ng_template_24_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSubmit());
    });
    \u0275\u0275template(2, LanguageSettingsComponent_ng_template_24_div_2_Template, 2, 4, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.newLanguageForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.formInputs);
  }
}
var LanguageSettingsComponent = class _LanguageSettingsComponent {
  fb;
  spinner;
  modalService;
  storageService;
  languageSettingsService;
  translationSettingsRepository;
  snackBar;
  translate;
  languageRepository;
  loaderService;
  languageModalContent;
  dialogRef = null;
  settings;
  languages = [];
  searchLanguage = "";
  selectedLanguage = {};
  searchLanguageSettings = {
    type: "text",
    placeholder: "Search",
    id: "language",
    labelClass: "app-label",
    inputClass: "w-100",
    formFieldClass: "w-100",
    appearance: "outline",
    field: "searchLanguage",
    required: () => {
      return false;
    }
  };
  languageSettings = {
    type: "autocomplete",
    placeholder: "Language",
    id: "language",
    field: "label",
    labelClass: "app-label",
    inputClass: "w-100",
    formFieldClass: "w-100",
    appearance: "outline",
    options: {},
    required: () => {
      return false;
    }
  };
  languageLabelSettings = {
    type: "text",
    id: "language-value",
    field: "field",
    inputClass: "w-100",
    formFieldClass: "w-100",
    appearance: "outline",
    required: () => {
      return false;
    }
  };
  languageValueSettings = {
    type: "text",
    id: "language-value",
    field: "value",
    inputClass: "w-100",
    formFieldClass: "w-100",
    appearance: "outline",
    required: () => {
      return false;
    }
  };
  formInputs = [
    {
      formControlName: "name",
      type: "text",
      label: "Name",
      id: "title",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => false
    },
    {
      formControlName: "code",
      type: "text",
      label: "Code",
      id: "code",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => false
    }
  ];
  newArrayItem = {};
  data = [];
  filteredData = [];
  newLanguageForm;
  currentLanguage;
  file;
  constructor(fb, spinner, modalService, storageService, languageSettingsService, translationSettingsRepository, snackBar, translate, languageRepository, loaderService) {
    this.fb = fb;
    this.spinner = spinner;
    this.modalService = modalService;
    this.storageService = storageService;
    this.languageSettingsService = languageSettingsService;
    this.translationSettingsRepository = translationSettingsRepository;
    this.snackBar = snackBar;
    this.translate = translate;
    this.languageRepository = languageRepository;
    this.loaderService = loaderService;
    this.newLanguageForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]]
    });
  }
  ngOnInit() {
    this.languageSettingsService.translationsSettingsSubject.subscribe((settings) => {
      this.settings = settings;
      this.initLanguageSettings();
    });
  }
  onSearchLanguage(event) {
    this.searchLanguage = event.target.value;
    if (event.target.value) {
      this.filteredData = this.data.filter((x) => x.field.toLowerCase().includes(this.searchLanguage.toLowerCase()) || x.value.toLowerCase().includes(this.searchLanguage.toLowerCase()));
    }
  }
  initLanguageSettings() {
    if (this.settings && this.settings.id) {
      this.languageRepository.getByTranslationSettingId(this.settings.id).then((languages) => {
        this.languages = languages;
        this.languageSettings.options = of(this.languages.map((x) => ({
          value: x.code,
          label: x.name
        })));
        let defaultLanguage = this.languages.find((x) => x.is_default);
        if (defaultLanguage) {
          this.selectedLanguage = {
            value: defaultLanguage.code,
            label: defaultLanguage.name
          };
        }
        this.getTranslations();
      });
    }
  }
  onSelectLanguage(event) {
    let language = this.languages.find((x) => x.code == event);
    if (language) {
      this.selectedLanguage = {
        value: language.code,
        label: language.name
      };
    }
    this.getTranslations();
  }
  onActionClick(event) {
  }
  onMarkAsDefaultClick() {
    let language = this.languages.find((x) => x.code == this.selectedLanguage.value);
    if (language) {
      this.languages.forEach((lg) => {
        lg.is_default = false;
      });
      language.is_default = true;
      this.languageRepository.upsertRange(this.languages).then(() => {
        this.translate.use(language.code);
        this.snackBar.open(this.translate.instant("Refresh the page to see changes!"), "Close", {
          duration: 2e3
        });
      });
    }
  }
  addItem() {
    if (this.newArrayItem) {
      this.data = [...this.data || [], JSON.parse(JSON.stringify(this.newArrayItem))];
    }
    this.newArrayItem = {};
    this.onSaveClick();
    if (this.newArrayItem && this.newArrayItem.code) {
      this.translate.reloadLang(this.newArrayItem.code).subscribe();
    }
  }
  removeItem(index) {
    const updatedList = [...this.data];
    updatedList.splice(index, 1);
    this.data = updatedList;
    this.onSaveClick();
  }
  closeModal() {
    this.dialogRef?.close();
    this.clearForm();
  }
  clearForm() {
    this.currentLanguage = new LanguageRowDto();
    this.newLanguageForm.patchValue(this.currentLanguage);
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.newLanguageForm.valid) {
        try {
          let language = this.newLanguageForm.getRawValue();
          if (this.settings) {
            language.translation_settings_id = this.settings.id;
            yield this.languageRepository.create(language);
            this.initLanguageSettings();
            this.snackBar.open(this.translate.instant("Language created!"), "Close", {
              duration: 2e3
            });
            return true;
          }
        } catch (error) {
          return false;
        }
      }
      return false;
    });
  }
  openModal(item = null) {
    if (item) {
      this.currentLanguage = item;
      this.newLanguageForm.patchValue(item);
    }
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.translate.instant("New language"),
        template: this.languageModalContent,
        showCancelButton: true,
        confirmText: this.translate.instant("Save"),
        cancelText: this.translate.instant("Cancel"),
        onConfirm: () => __async(this, null, function* () {
          if (this.newLanguageForm.valid) {
            try {
              yield this.onSubmit();
              return true;
            } catch (error) {
              return false;
            }
          }
          return false;
        })
      }
    });
  }
  onSaveClick() {
    if (this.file) {
      this.storageService.deleteFile("translations", [this.selectedLanguage.value + ".json"]).then(() => {
        this.createFileFromArray(this.selectedLanguage.value + ".json");
      }).catch((error) => {
        console.error("Error deleting file:", error);
        this.createFileFromArray(this.selectedLanguage.value + ".json");
      });
    } else {
      this.createFileFromArray(this.selectedLanguage.value + ".json");
    }
  }
  getTranslations() {
    this.spinner.show();
    this.loaderService.show();
    this.file = void 0;
    this.data = [];
    this.storageService.downloadFile("translations", this.selectedLanguage.value + ".json").then((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const jsonString = e.target?.result;
        try {
          const jsonData = JSON.parse(jsonString);
          this.filteredData = this.data = Object.entries(jsonData).map(([field, value]) => ({ field, value }));
          this.spinner.hide();
          this.loaderService.hide();
        } catch (error) {
          console.error("Error parsing JSON:", error);
          this.spinner.hide();
          this.loaderService.hide();
        }
      };
      reader.readAsText(file);
      this.file = file;
    });
  }
  createFileFromArray(fileName) {
    const jsonObject = this.data.reduce((acc, item) => {
      acc[item.field] = item.value;
      return acc;
    }, {});
    const jsonString = JSON.stringify(jsonObject, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    this.storageService.uploadFile("translations", this.selectedLanguage.value + ".json", blob).then(() => {
      this.onSearchLanguage({ target: { value: this.searchLanguage } });
      this.snackBar.open(this.translate.instant("Data saved!"), "Close", {
        duration: 2e3
      });
    });
  }
  cancelEdit() {
    if (this.dialogRef) {
      this.modalService.hide(this.dialogRef);
    }
  }
  static \u0275fac = function LanguageSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettingsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(LanguageSettingsService), \u0275\u0275directiveInject(TranslationSettingsRepository), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(LanguageRepository), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSettingsComponent, selectors: [["app-language-settings"]], viewQuery: function LanguageSettingsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.languageModalContent = _t.first);
    }
  }, decls: 26, vars: 18, consts: [["languageModalContent", ""], [1, "card"], [1, "card-body"], [1, "d-flex", "align-items-end", "justify-content-between", "pt-3"], [1, "col-6", "d-flex"], [3, "select", "settings", "element"], ["mat-raised-button", "", "color", "primary", 1, "ms-2", 3, "click"], [1, "col-3", 3, "input", "change", "settings", "element"], [1, "pt-0", "mt-3"], [1, "p-2", "position-sticky", "top-0", "z-3", "bg-secondary"], ["matListItemTitle", "", 1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [1, "col-5", 3, "settings", "element"], ["color", "primary", 1, "cursor-pointer", 3, "click"], ["class", "p-2", 4, "ngFor", "ngForOf"], [1, "card-footer", "d-flex", "justify-content-end"], [1, "p-2"], ["color", "primary", 3, "click"], [1, "row"], [3, "ngSubmit", "formGroup"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "formControlName", "settings"]], template: function LanguageSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "app-input", 5);
      \u0275\u0275listener("select", function LanguageSettingsComponent_Template_app_input_select_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSelectLanguage($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 6);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_button_click_5_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMarkAsDefaultClick());
      });
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "app-input", 7);
      \u0275\u0275listener("input", function LanguageSettingsComponent_Template_app_input_input_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchLanguage($event));
      })("change", function LanguageSettingsComponent_Template_app_input_change_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSearchLanguage($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-list", 8)(10, "mat-list-item", 9)(11, "span", 10);
      \u0275\u0275element(12, "app-input", 11)(13, "app-input", 11);
      \u0275\u0275elementStart(14, "mat-icon", 12);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_mat_icon_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addItem());
      });
      \u0275\u0275text(15, "add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, LanguageSettingsComponent_mat_list_item_16_Template, 6, 4, "mat-list-item", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 14)(18, "button", 6);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_button_click_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openModal());
      });
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 6);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onSaveClick());
      });
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, LanguageSettingsComponent_ng_template_24_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("settings", ctx.languageSettings)("element", ctx.selectedLanguage);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 12, "Mark as default"));
      \u0275\u0275advance(2);
      \u0275\u0275property("settings", ctx.searchLanguageSettings)("element", ctx.searchLanguage);
      \u0275\u0275advance(4);
      \u0275\u0275property("settings", ctx.languageLabelSettings)("element", ctx.newArrayItem);
      \u0275\u0275advance();
      \u0275\u0275property("settings", ctx.languageValueSettings)("element", ctx.newArrayItem);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.filteredData);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 14, "New language"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 16, "Save changes"));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    AppInputComponent,
    FormInputComponent,
    MatIconModule,
    MatIcon,
    TranslatePipe,
    MatListModule,
    MatList,
    MatListItem,
    MatListItemTitle,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatButtonModule,
    MatButton
  ], styles: ["\n\n  mat-list-item {\n  height: 56px !important;\n}\n  mat-list-item.bg-secondary {\n  border-bottom: 3px solid rgb(206, 206, 206) !important;\n}\n  mat-list-item .mat-mdc-form-field {\n  background-color: white;\n}\n  mat-list {\n  max-height: 700px !important;\n  overflow: auto;\n}\n/*# sourceMappingURL=language-settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSettingsComponent, { className: "LanguageSettingsComponent", filePath: "src/app/admin/app-settings/language-settings/language-settings.component.ts", lineNumber: 41 });
})();
export {
  LanguageSettingsComponent
};
//# sourceMappingURL=chunk-FHK4OUNG.js.map
