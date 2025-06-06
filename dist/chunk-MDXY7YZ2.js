import {
  ObjectiveTemplatesRepository
} from "./chunk-DVJDGQAH.js";
import {
  CriteriasRepository
} from "./chunk-N474UFTG.js";
import {
  ExcelService
} from "./chunk-6P2NLG4F.js";
import {
  ObjectivesRepository
} from "./chunk-BRZVXPA7.js";
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
  AppOptions,
  FormInputComponent,
  IonicModule,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  NgForOf,
  Observable,
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

// src/app/main/performance/objective-templates/objective-templates.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/supabase/types/objective-templates.dto.ts
var ObjectiveTemplatesRowDto = class {
  comments;
  criteria;
  id;
  load_percentage;
  type;
  unit_of_measurement;
  weight;
  weighted_score;
  yearly_goal;
  yearly_performance;
  constructor(param = null) {
    if (param) {
      this.comments = param.comments;
      this.criteria = param.criteria;
      this.id = param.id;
      this.load_percentage = param.load_percentage;
      this.type = param.type;
      this.unit_of_measurement = param.unit_of_measurement;
      this.weight = param.weight;
      this.weighted_score = param.weighted_score;
      this.yearly_goal = param.yearly_goal;
      this.yearly_performance = param.yearly_performance;
    }
  }
};

// src/app/main/performance/objective-templates/objective-templates.component.ts
var _c0 = ["templateModal"];
function ObjectiveTemplatesComponent_ng_template_13_app_form_input_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-form-input", 15);
  }
  if (rf & 2) {
    const input_r2 = ctx.$implicit;
    \u0275\u0275property("settings", input_r2)("formControlName", input_r2.formControlName);
  }
}
function ObjectiveTemplatesComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "form", 12)(2, "div", 13);
    \u0275\u0275template(3, ObjectiveTemplatesComponent_ng_template_13_app_form_input_3_Template, 1, 2, "app-form-input", 14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.templateForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.formInputs);
  }
}
var ObjectiveTemplatesComponent = class _ObjectiveTemplatesComponent {
  objectiveTemplateRepository;
  modalService;
  fb;
  spinner;
  translate;
  criteriasRepository;
  objectivesRepository;
  eventService;
  loaderService;
  templateModal = null;
  currentTemplate = {};
  appConstants = AppConstants;
  templateForm;
  columns = [
    { field: "type", title: "Type", type: "translated", width: "10%" },
    { field: "criteria", title: "Criteria", type: "criteria-template", width: "20%" },
    { field: "unit_of_measurement", title: "Unit of Measurement", type: "translated", width: "10%" },
    { field: "weight", title: "Weight", width: "10%" },
    { field: "yearly_goal", title: "Yearly Goal", width: "10%" },
    { field: "comments", title: "Comments", width: "10%" },
    {
      width: "10%",
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
  data = new MatTableDataSource();
  formInputs = [
    { formControlName: "type", type: "select", label: "Objective Type", id: "type", labelClass: "app-label", inputClass: "app-select-2 w-100", formFieldClass: "w-100", appearance: "outline", options: AppOptions.getObjectiveTypes(), disabled: () => {
      return !this.currentTemplate || this.currentTemplate.id;
    } },
    { formControlName: "unit_of_measurement", type: "select", label: "Unit of Measurement", id: "unit_of_measurement", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: AppOptions.getUnitOfMeasurement() },
    { formControlName: "criteria", type: "autocomplete", label: "Criteria", id: "criteria", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "weight", type: "number", label: "Weight", id: "weight", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", disabled: () => {
      return !this.currentTemplate || this.currentTemplate.id;
    } },
    { formControlName: "yearly_goal", type: "number", label: "Yearly Goal", id: "yearly_goal", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "comments", type: "textarea", label: "Comments", id: "comments", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  connectedData = [];
  dialogRef = null;
  constructor(objectiveTemplateRepository, modalService, fb, spinner, translate, criteriasRepository, objectivesRepository, eventService, loaderService) {
    this.objectiveTemplateRepository = objectiveTemplateRepository;
    this.modalService = modalService;
    this.fb = fb;
    this.spinner = spinner;
    this.translate = translate;
    this.criteriasRepository = criteriasRepository;
    this.objectivesRepository = objectivesRepository;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.templateForm = this.fb.group({
      type: ["", [Validators.required]],
      criteria: ["", [Validators.required]],
      unit_of_measurement: ["", [Validators.required]],
      weight: [null, [Validators.required, Validators.min(0)]],
      // Minimum value 0
      yearly_goal: [null, [Validators.required, Validators.min(0)]],
      // Minimum value 0
      comments: [""]
    }, { validators: [validatePercentageLimit()] });
  }
  ngOnInit() {
    this.initData();
  }
  initData() {
    this.spinner.show();
    this.loaderService.show();
    this.objectiveTemplateRepository.getAll().then((result) => {
      this.data.data = result;
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
        this.openModal(event.data);
        break;
      }
      case "Delete": {
        this.deleteTemplate(event.data.id);
        break;
      }
      case "sort": {
        this.data.data = AppConstants.sortData(event.data, this.data.data);
        break;
      }
    }
  }
  openModal(template = null) {
    if (template) {
      this.currentTemplate = template;
      this.templateForm.patchValue(template);
      if (this.currentTemplate.id) {
        this.initConnectedData(this.currentTemplate.id);
      }
    }
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.translate.instant("Objective"),
        template: this.templateModal,
        showCancelButton: true,
        confirmText: this.translate.instant("Save"),
        cancelText: this.translate.instant("Cancel"),
        onConfirm: () => __async(this, null, function* () {
          return yield this.onSubmit();
        })
      }
    });
  }
  initConnectedData(template_id) {
    this.objectivesRepository.getAllByTemplateId(template_id).then((connectedData) => {
      this.connectedData = connectedData;
    });
  }
  deleteTemplate(templateId) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("Are you sure?"),
      text: this.translate.instant("This action will delete the objective template permanently!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translate.instant("Yes, delete it!"),
      cancelButtonText: this.translate.instant("Cancel")
    }).then((result) => {
      if (result.isConfirmed) {
        this.objectiveTemplateRepository.delete(templateId).then(() => {
          import_sweetalert2.default.fire(this.translate.instant("Deleted!"), this.translate.instant("The template has been deleted."), "success");
          this.initData();
          this.eventService.next(EventConstants.OBJECTIVE_TEMPLATE_DELETE, { id: templateId });
        });
      }
    });
  }
  clearForm() {
    this.currentTemplate = new ObjectiveTemplatesRowDto();
    this.templateForm.patchValue(this.currentTemplate);
    this.connectedData = [];
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
        if (this.currentTemplate?.id) {
          let changedData = Object.fromEntries(Object.entries(data).filter(([key, value]) => String(this.currentTemplate[key]) !== String(value)));
          const result = yield this.objectiveTemplateRepository.update(this.currentTemplate.id, data);
          if (!result) {
            this.spinner.hide();
            this.loaderService.hide();
            import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to update template"), "error");
            return false;
          }
          if (Object.keys(changedData).length > 0) {
            this.connectedData.forEach((item) => {
              Object.assign(item, changedData);
              delete item.objective_form;
            });
            const updateResult = yield this.objectivesRepository.upsertRange(this.connectedData);
            if (!updateResult) {
              this.spinner.hide();
              this.loaderService.hide();
              import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to update connected objectives"), "error");
              return false;
            }
          }
          yield this.initData();
          this.clearForm();
          import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Template successfully updated"), "success");
          this.eventService.next(EventConstants.OBJECTIVE_TEMPLATE_UPDATE, { id: this.currentTemplate.id, data });
          return true;
        } else {
          const result = yield this.objectiveTemplateRepository.create(data);
          if (!result) {
            this.spinner.hide();
            this.loaderService.hide();
            import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to create template"), "error");
            return false;
          }
          yield this.initData();
          this.clearForm();
          import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Template successfully created"), "success");
          this.eventService.next(EventConstants.OBJECTIVE_TEMPLATE_CREATE, { data });
          return true;
        }
      } catch (error) {
        this.spinner.hide();
        this.loaderService.hide();
        import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("An error occurred while saving the template"), "error");
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
      ExcelService.getObjectiveTemplatesData(file).then((data) => {
        this.objectiveTemplateRepository.upsertRange(data).then(() => {
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
  static \u0275fac = function ObjectiveTemplatesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveTemplatesComponent)(\u0275\u0275directiveInject(ObjectiveTemplatesRepository), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(CriteriasRepository), \u0275\u0275directiveInject(ObjectivesRepository), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectiveTemplatesComponent, selectors: [["app-objective-templates"]], viewQuery: function ObjectiveTemplatesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateModal = _t.first);
    }
  }, decls: 15, vars: 5, consts: [["fileInput", ""], ["templateModal", ""], [1, "card", "flex-fill"], [1, "card-body"], [1, "mt-4", "mb-5"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], ["type", "file", "accept", ".xlsx, .xls", 1, "d-none", 3, "change"], [1, "add-btn", "d-flex", "align-items-center", "gap-2"], [2, "font-size", "26px", 3, "click"], [1, "fa-solid", "fa-circle-plus"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "dataSource", "columns"], [1, "modal-body"], [3, "formGroup"], [1, "row"], ["class", "mt-3", 3, "settings", "formControlName", 4, "ngFor", "ngForOf"], [1, "mt-3", 3, "settings", "formControlName"]], template: function ObjectiveTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "input", 6, 0);
      \u0275\u0275listener("change", function ObjectiveTemplatesComponent_Template_input_change_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onImportCriteriasClick($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
      \u0275\u0275listener("click", function ObjectiveTemplatesComponent_Template_button_click_7_listener() {
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
      \u0275\u0275listener("action", function ObjectiveTemplatesComponent_Template_app_table_action_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onActionClick($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, ObjectiveTemplatesComponent_ng_template_13_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 3, "Create"));
      \u0275\u0275advance(2);
      \u0275\u0275property("dataSource", ctx.data)("columns", ctx.columns);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    TableComponent,
    IonicModule,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormInputComponent,
    TranslatePipe,
    MatButtonModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectiveTemplatesComponent, { className: "ObjectiveTemplatesComponent", filePath: "src/app/main/performance/objective-templates/objective-templates.component.ts", lineNumber: 45 });
})();
function validatePercentageLimit() {
  return (formGroup) => {
    const unitOfMeasurement = formGroup.get("unit_of_measurement")?.value;
    const weight = formGroup.get("weight");
    const yearlyGoal = formGroup.get("yearly_goal");
    if (unitOfMeasurement === "percentage") {
      const errors = {};
      if (weight?.value > 100)
        weight?.setErrors({ error: "Value cannot be more than 100%" });
      if (yearlyGoal?.value > 100)
        yearlyGoal?.setErrors({ error: "Value cannot be more than 100%" });
      return Object.keys(errors).length > 0 ? errors : null;
    }
    return null;
  };
}
export {
  ObjectiveTemplatesComponent,
  validatePercentageLimit
};
//# sourceMappingURL=chunk-MDXY7YZ2.js.map
