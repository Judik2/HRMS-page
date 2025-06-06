import {
  CriteriasRepository
} from "./chunk-N474UFTG.js";
import {
  FeedbackTemplatesRepository,
  FeedbacksRepository
} from "./chunk-54OQQ7WD.js";
import {
  ExcelService
} from "./chunk-6P2NLG4F.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  MatTableDataSource,
  TableComponent
} from "./chunk-X45EM66I.js";
import "./chunk-BWIOX5TR.js";
import "./chunk-JYDETW4E.js";
import "./chunk-M2EJXGZP.js";
import {
  AppModalComponent,
  FormInputComponent,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
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
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import "./chunk-YW5JDNY2.js";
import {
  LoaderService,
  NgxSpinnerService,
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  __async,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/feedback/feedback-templates/feedback-templates.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/supabase/types/feedback-templates.dto.ts
var FeedbackTemplatesRowDto = class {
  criteria;
  id;
  weight;
  constructor(param = null) {
    if (param) {
      this.criteria = param.criteria;
      this.id = param.id;
      this.weight = param.weight;
    }
  }
};

// src/app/main/feedback/feedback-templates/feedback-templates.component.ts
var _c0 = ["feedbackTemplateContent"];
var _c1 = () => ({ "col-12": true });
function FeedbackTemplatesComponent_ng_template_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "app-form-input", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r4 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r4.formControlName)("settings", input_r4);
  }
}
function FeedbackTemplatesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "form", 12);
    \u0275\u0275listener("ngSubmit", function FeedbackTemplatesComponent_ng_template_13_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSubmit());
    });
    \u0275\u0275template(2, FeedbackTemplatesComponent_ng_template_13_div_2_Template, 2, 4, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.templateForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.formInputs);
  }
}
var FeedbackTemplatesComponent = class _FeedbackTemplatesComponent {
  feedbacksTemplatesRepository;
  modalService;
  fb;
  spinner;
  translate;
  criteriasRepository;
  feedbacksRepository;
  eventService;
  loaderService;
  feedbackTemplateContent;
  dialogRef = null;
  currentTemplate = {};
  appConstants = AppConstants;
  templateForm;
  columns = [
    { field: "id", title: "ID", type: "number", width: "10%" },
    { field: "criteria", title: "Criteria", width: "50%" },
    { field: "weight", title: "Weight", type: "percentage", width: "30%" },
    {
      width: "20%",
      field: "actions",
      title: "Actions",
      type: "buttons",
      visible: () => {
        return true;
      },
      columnClass: "text-center",
      columnHeaderClass: "text-center",
      buttons: [
        {
          name: "Edit",
          class: "icon-edit"
        },
        {
          name: "Delete",
          class: "icon-trash"
        }
      ]
    }
  ];
  dataSource = new MatTableDataSource();
  editInput = { formControlName: "id", type: "text", label: "ID", id: "id", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", disabled: () => {
    return !this.currentTemplate || this.currentTemplate.id;
  } };
  formInputs = [
    { formControlName: "criteria", type: "text", label: "Criteria", id: "criteria", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", disabled: () => {
      return !this.currentTemplate || this.currentTemplate.id;
    } },
    { formControlName: "weight", type: "number", label: "Weight", id: "weight", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  constructor(feedbacksTemplatesRepository, modalService, fb, spinner, translate, criteriasRepository, feedbacksRepository, eventService, loaderService) {
    this.feedbacksTemplatesRepository = feedbacksTemplatesRepository;
    this.modalService = modalService;
    this.fb = fb;
    this.spinner = spinner;
    this.translate = translate;
    this.criteriasRepository = criteriasRepository;
    this.feedbacksRepository = feedbacksRepository;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.templateForm = this.fb.group({
      id: [null],
      criteria: ["", [Validators.required]],
      weight: [null, [Validators.required, Validators.min(0)]]
    }, { validators: [validatePercentageLimit()] });
  }
  ngOnInit() {
    this.initData();
  }
  initData() {
    this.spinner.show();
    this.loaderService.show();
    this.feedbacksTemplatesRepository.getAll().then((result) => {
      this.dataSource.data = result;
      this.spinner.hide();
      this.loaderService.hide();
    });
  }
  initCriterias() {
    this.criteriasRepository.getAll().then((criterias) => {
      let criteriaField = this.formInputs.find((x) => x.formControlName == "criteria");
      if (criteriaField) {
        criteriaField.options = of(criterias.filter((x) => x.id !== void 0).map((x) => {
          return {
            value: x.id ? x.id.toString() : x.value,
            label: x.value
          };
        }));
      }
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "Create": {
        this.openModal();
        break;
      }
      case "Edit": {
        this.openModal(event.data.id);
        break;
      }
      case "Delete": {
        this.deleteTemplate(event.data.id);
        break;
      }
      case "sort": {
        this.dataSource.data = AppConstants.sortData(event.data, this.dataSource.data);
        break;
      }
    }
  }
  openModal(templateId = null) {
    if (templateId) {
      this.currentTemplate = this.dataSource.data?.find((x) => x.id == templateId);
      if (this.currentTemplate) {
        this.templateForm.patchValue(this.currentTemplate);
        this.templateForm.markAllAsTouched();
      }
    }
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.translate.instant("Feedback Template"),
        template: this.feedbackTemplateContent,
        showCancelButton: true,
        confirmText: this.translate.instant("Save"),
        cancelText: this.translate.instant("Cancel"),
        onConfirm: () => __async(this, null, function* () {
          return yield this.onSubmit();
          ;
        })
      }
    });
  }
  deleteTemplate(templateId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("Are you sure?"),
      text: this.translate.instant("This action will delete the feedback template permanently!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translate.instant("Yes, delete it!"),
      cancelButtonText: this.translate.instant("Cancel")
    }).then((result) => {
      if (result.isConfirmed) {
        this.feedbacksTemplatesRepository.delete(templateId).then(() => {
          import_sweetalert2.default.fire(this.translate.instant("Deleted!"), this.translate.instant("The template has been deleted."), "success");
          this.initData();
          this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_DELETE, { id: templateId });
        }).catch((err) => {
          this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_DELETE_ERROR, { id: templateId, error: err });
        });
      }
    });
  }
  clearForm() {
    this.currentTemplate = new FeedbackTemplatesRowDto();
    this.templateForm.patchValue(this.currentTemplate);
  }
  closeModal() {
    this.dialogRef?.close();
    this.clearForm();
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.templateForm.valid) {
        this.templateForm.markAllAsTouched();
        return false;
      }
      try {
        this.spinner.show();
        this.loaderService.show();
        let data = this.templateForm.getRawValue();
        delete data.id;
        if (this.currentTemplate?.id) {
          const result = yield this.feedbacksTemplatesRepository.update(this.currentTemplate.id, data);
          if (!result) {
            this.spinner.hide();
            this.loaderService.hide();
            import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to update template"), "error");
            this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_UPDATE_ERROR, { id: this.currentTemplate.id, data });
            return false;
          }
          yield this.initData();
          this.clearForm();
          import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Template successfully updated"), "success");
          this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_UPDATE, { id: this.currentTemplate.id, data });
          return true;
        } else {
          const result = yield this.feedbacksTemplatesRepository.create(data);
          if (!result) {
            this.spinner.hide();
            this.loaderService.hide();
            import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to create template"), "error");
            this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_CREATE_ERROR, { data });
            return false;
          }
          yield this.initData();
          this.clearForm();
          import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Template successfully created"), "success");
          this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_CREATE, { data });
          return true;
        }
      } catch (error) {
        this.spinner.hide();
        this.loaderService.hide();
        import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("An error occurred while saving the template"), "error");
        if (this.currentTemplate?.id) {
          this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_UPDATE_ERROR, { id: this.currentTemplate.id, error });
        } else {
          this.eventService.next(EventConstants.FEEDBACK_TEMPLATE_CREATE_ERROR, { error });
        }
        return false;
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  onImportTemplatesClick(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      ExcelService.getFeedbackTemplatesData(file).then((data) => {
        this.feedbacksTemplatesRepository.upsertRange(data).then(() => {
          import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Templates successfully uploaded"), "success");
        });
      }, (error) => {
        import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant(error.message), "error");
      });
    }
  }
  onImportCriteriasClick(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      ExcelService.getCriteriasData(file).then((data) => {
        this.criteriasRepository.upsertRange(data).then(() => {
          import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Criterias successfully uploaded"), "success");
          this.initCriterias();
        });
      });
    }
  }
  static \u0275fac = function FeedbackTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackTemplatesComponent)(\u0275\u0275directiveInject(FeedbackTemplatesRepository), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(CriteriasRepository), \u0275\u0275directiveInject(FeedbacksRepository), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackTemplatesComponent, selectors: [["app-feedback-templates"]], viewQuery: function FeedbackTemplatesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.feedbackTemplateContent = _t.first);
    }
  }, decls: 15, vars: 5, consts: [["fileInput", ""], ["feedbackTemplateContent", ""], [1, "card", "flex-fill"], [1, "card-body"], [1, "mt-4", "mb-5"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], ["type", "file", "accept", ".xlsx, .xls", 1, "d-none", 3, "change"], [1, "add-btn", "d-flex", "align-items-center", "gap-2"], [2, "font-size", "26px", 3, "click"], [1, "fa-solid", "fa-circle-plus"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "dataSource", "columns"], [1, "row"], [3, "ngSubmit", "formGroup"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "formControlName", "settings"]], template: function FeedbackTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "input", 6, 0);
      \u0275\u0275listener("change", function FeedbackTemplatesComponent_Template_input_change_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImportCriteriasClick($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
      \u0275\u0275listener("click", function FeedbackTemplatesComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onActionClick({ action: "Create" }));
      });
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "b");
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "app-table", 10);
      \u0275\u0275listener("action", function FeedbackTemplatesComponent_Template_app_table_action_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onActionClick($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, FeedbackTemplatesComponent_ng_template_13_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 3, "Create"));
      \u0275\u0275advance(2);
      \u0275\u0275property("dataSource", ctx.dataSource)("columns", ctx.columns);
    }
  }, dependencies: [
    FormInputComponent,
    TranslatePipe,
    TableComponent,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    CommonModule,
    NgClass,
    NgForOf,
    MatButtonModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackTemplatesComponent, { className: "FeedbackTemplatesComponent", filePath: "src/app/main/feedback/feedback-templates/feedback-templates.component.ts", lineNumber: 42 });
})();
function validatePercentageLimit() {
  return (formGroup) => {
    const weight = formGroup.get("weight");
    const errors = {};
    if (weight?.value > 100)
      weight?.setErrors({ error: "Value cannot be more than 100%" });
    return Object.keys(errors).length > 0 ? errors : null;
  };
}
export {
  FeedbackTemplatesComponent,
  validatePercentageLimit
};
//# sourceMappingURL=chunk-6SZW2C5N.js.map
