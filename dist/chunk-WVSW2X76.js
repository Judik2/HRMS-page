import {
  ObjectiveFormViewDto
} from "./chunk-25KMDAIC.js";
import {
  PaginationComponent
} from "./chunk-EQM2SLMA.js";
import {
  ObjectiveFormRepository
} from "./chunk-S5OCFGQY.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  MatTableDataSource,
  TableComponent
} from "./chunk-X45EM66I.js";
import {
  AppModalComponent,
  FormInputComponent,
  ModalService
} from "./chunk-CRLS72DG.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
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
  ɵNgNoValidate
} from "./chunk-JDSXESFV.js";
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import {
  EmployeeRepository
} from "./chunk-TLWCP54H.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  LoaderService,
  NgxSpinnerService,
  Router,
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import {
  __async,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/performance/objective-annual-grant/objective-annual-grant.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var _c0 = ["templateModal"];
function ObjectiveAnnualGrantComponent_form_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "app-form-input", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r3.formControlName)("settings", input_r3);
  }
}
function ObjectiveAnnualGrantComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275template(1, ObjectiveAnnualGrantComponent_form_8_div_1_Template, 2, 2, "div", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "button", 12);
    \u0275\u0275listener("click", function ObjectiveAnnualGrantComponent_form_8_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFillAnnualGrantClick());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.filtersForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.formInputs);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "Fill Annual Grant"), " ");
  }
}
function ObjectiveAnnualGrantComponent_ng_template_12_div_0_app_form_input_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-form-input", 19);
  }
  if (rf & 2) {
    const input_r5 = ctx.$implicit;
    \u0275\u0275property("settings", input_r5)("formControlName", input_r5.formControlName);
  }
}
function ObjectiveAnnualGrantComponent_ng_template_12_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "form", 16)(2, "div", 17);
    \u0275\u0275template(3, ObjectiveAnnualGrantComponent_ng_template_12_div_0_app_form_input_3_Template, 1, 2, "app-form-input", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.modalForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.modalInputs);
  }
}
function ObjectiveAnnualGrantComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ObjectiveAnnualGrantComponent_ng_template_12_div_0_Template, 4, 2, "div", 14);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r3.modalForm);
  }
}
var ObjectiveAnnualGrantComponent = class _ObjectiveAnnualGrantComponent {
  fb;
  objectiveFormRepository;
  spinner;
  storageService;
  idService;
  router;
  translate;
  modalService;
  supabaseAuthService;
  employeeRepository;
  eventService;
  loaderService;
  templateModal = null;
  dialogRef = null;
  currentTemplate;
  filtersForm;
  modalForm;
  formInputs = [
    { formControlName: "department", type: "autocomplete", placeholder: "Department", id: "department", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "division", type: "autocomplete", placeholder: "Division", id: "division", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "search", type: "text", placeholder: "Search", id: "search", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  filters = {};
  selectedForms = [];
  dataSource = new MatTableDataSource();
  totalRows = 0;
  countPerPage = 15;
  totalPages = 1;
  columns = [
    { title: "Select", field: "isSelected", type: "checkbox", columnHeaderClass: "text-center", width: "5%" },
    { title: "Employee", field: "employee_display_name", type: "employee", width: "20%" },
    { title: "Qualities load percent", field: "qualities_load_percent", type: "percentage", width: "10%" },
    { title: "Quantities load percent", field: "quantities_load_percent", type: "percentage", width: "10%" },
    { title: "Manager load percent", field: "manager_assessment_load_percent", type: "percentage", width: "10%" },
    { title: "Total weighted score", field: "weighted_score_sum", type: "percentage", width: "10%" },
    { title: "Creation Date", field: "created_at", type: "date", width: "10%" },
    { title: "Due Date", field: "due_date", type: "date", width: "10%" }
  ];
  modalInputs = [
    { formControlName: "qualities_load_percent", type: "number", placeholder: "Qualities load percent", id: "qualities_load_percent", labelClass: "app-label", inputClass: "w-100", formFieldClass: "col-12 w-100 mt-2", appearance: "outline" },
    { formControlName: "quantities_load_percent", type: "number", placeholder: "Quantities load percent", id: "quantities_load_percent", labelClass: "app-label", inputClass: "w-100", formFieldClass: "col-12 w-100 mt-2", appearance: "outline" },
    { formControlName: "manager_assessment_load_percent", type: "number", placeholder: "Manager load percent", id: "manager_assessment_load_percent", labelClass: "app-label", inputClass: "w-100", formFieldClass: "col-12 w-100 mt-2", appearance: "outline" }
    // { formControlName: 'manager_assessment_weighted_score', type: 'number', placeholder: 'Manager weighted score', id: 'manager_assessment_weighted_score', labelClass: 'app-label', inputClass: 'w-100', formFieldClass: 'w-100', appearance: 'outline' },
  ];
  constructor(fb, objectiveFormRepository, spinner, storageService, idService, router, translate, modalService, supabaseAuthService, employeeRepository, eventService, loaderService) {
    this.fb = fb;
    this.objectiveFormRepository = objectiveFormRepository;
    this.spinner = spinner;
    this.storageService = storageService;
    this.idService = idService;
    this.router = router;
    this.translate = translate;
    this.modalService = modalService;
    this.supabaseAuthService = supabaseAuthService;
    this.employeeRepository = employeeRepository;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.filtersForm = this.fb.group({
      department: [""],
      division: [""],
      search: [""]
    });
    this.modalForm = this.fb.group({
      qualities_load_percent: [""],
      quantities_load_percent: [""],
      manager_assessment_load_percent: [""],
      manager_assessment_weighted_score: [""]
    });
    this.filtersForm.valueChanges.subscribe((formValues) => {
      this.initObjectivesData();
      this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_FILTER_CHANGED, { filters: formValues });
    });
  }
  parameters = [];
  initialize() {
  }
  ngOnInit() {
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.filters.employee_id = employee.id;
      this.filters.page = 1;
      this.filters.page_size = this.countPerPage;
      this.filters.sort_by = "created_at";
      this.filters.sort_direction = "desc";
      this.filters.role = employee.role;
      this.initObjectivesData();
      this.initDepartments();
      this.initDivisions();
    });
  }
  initObjectivesData() {
    this.spinner.show();
    this.loaderService.show();
    Object.assign(this.filters, this.filtersForm?.getRawValue());
    this.filters.page_size = this.countPerPage;
    this.objectiveFormRepository.getFilteredFormsCount(this.filters, false).then((count) => {
      this.totalRows = count;
      this.totalPages = Math.ceil(this.totalRows / this.countPerPage);
      this.objectiveFormRepository.getFilteredForms(this.filters, false).then((res) => {
        this.spinner.hide();
        this.loaderService.hide();
        this.dataSource.data = res.map((x) => new ObjectiveFormViewDto(x, this.storageService));
        this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_DATA_LOADED, { count: this.totalRows, filters: this.filters });
      }).catch((error) => {
        this.spinner.hide();
        this.loaderService.hide();
        this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_DATA_LOAD_ERROR, { error, filters: this.filters });
      });
    }).catch((error) => {
      this.spinner.hide();
      this.loaderService.hide();
      this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_DATA_LOAD_ERROR, { error, filters: this.filters });
    });
  }
  onFillAnnualGrantClick() {
    if (!this.dataSource.data.some((x) => x.isSelected)) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("At least 1 form should be selected!"),
        icon: "warning"
      });
      return;
    }
    this.openModal();
  }
  onActionClick(event) {
    switch (event.action) {
      case "sort": {
        this.filters.sort_by = event.data.active;
        this.filters.sort_direction = event.data.direction;
        this.initObjectivesData();
        break;
      }
      case "click-row": {
        this.idService.setId("objective-form", event.data.id);
        this.router.navigate(["/objective-form"]);
        break;
      }
      case "selectAll": {
        this.dataSource.data.forEach((x) => {
          x.isSelected = event.data;
        });
        break;
      }
    }
  }
  onPageChange(event) {
    this.filters.page = event;
    this.filters.page_size = this.countPerPage;
    this.initObjectivesData();
  }
  initDivisions() {
    this.employeeRepository.getAllDivisions().then((divisions) => {
      let field = this.formInputs.find((x) => x.formControlName == "division");
      if (field) {
        field.options = of(divisions.map((x) => ({ value: x, label: x })));
      }
    });
  }
  initDepartments() {
    this.employeeRepository.getAllDepartments().then((departments) => {
      let field = this.formInputs.find((x) => x.formControlName == "department");
      if (field) {
        field.options = of(departments.map((x) => ({ value: x, label: x })));
      }
    });
  }
  openModal() {
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.translate.instant("Annual Grant"),
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
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.modalForm?.valid) {
        this.modalForm?.markAllAsTouched();
        return false;
      }
      try {
        this.spinner.show();
        this.loaderService.show();
        let data = this.modalForm.getRawValue();
        let selectedRowsId = this.dataSource.data.filter((x) => x.isSelected).map((x) => x.id);
        const selectedRows = yield this.objectiveFormRepository.getByIds(selectedRowsId);
        if (selectedRows.length === 0) {
          this.spinner.hide();
          this.loaderService.hide();
          import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("No forms selected"), "error");
          return false;
        }
        selectedRows.forEach((x) => {
          x.manager_assessment_load_percent = data.manager_assessment_load_percent || x.manager_assessment_load_percent;
          x.qualities_load_percent = data.qualities_load_percent || x.qualities_load_percent;
          x.quantities_load_percent = data.quantities_load_percent || x.quantities_load_percent;
        });
        const result = yield this.objectiveFormRepository.upsertRange(selectedRows);
        if (!result) {
          this.spinner.hide();
          this.loaderService.hide();
          import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to update forms"), "error");
          this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_UPDATE_ERROR, { selectedRowsId, data });
          return false;
        }
        yield this.initObjectivesData();
        this.clearForm();
        import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("Forms successfully updated"), "success");
        this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_UPDATED, { selectedRowsId, data });
        return true;
      } catch (error) {
        this.spinner.hide();
        this.loaderService.hide();
        import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("An error occurred while updating forms"), "error");
        this.eventService.next(EventConstants.OBJECTIVE_ANNUAL_GRANT_UPDATE_ERROR, { error });
        return false;
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  clearForm() {
    this.modalForm?.patchValue({});
  }
  closeModal() {
    this.dialogRef?.close();
    this.clearForm();
  }
  static \u0275fac = function ObjectiveAnnualGrantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveAnnualGrantComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ObjectiveFormRepository), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectiveAnnualGrantComponent, selectors: [["app-objective-annual-grant"]], viewQuery: function ObjectiveAnnualGrantComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateModal = _t.first);
    }
  }, decls: 14, vars: 10, consts: [["templateModal", ""], [1, "card", "flex-fill"], [1, "card-body"], [1, "mt-4", "mb-5"], [1, "m-2"], ["class", "row align-items-baseline", 3, "formGroup", 4, "ngIf"], [1, "mt-2"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 1, "table-view", 3, "action", "isRawClickable", "columns", "dataSource"], ["paginationType", "datatable-js", 3, "pageSizeChange", "pageChange", "totalRows", "pageSize", "totalPages"], [1, "row", "align-items-baseline", 3, "formGroup"], ["class", "col-sm-12 col-md-6 col-lg-3 mt-2 ", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-3", "mt-2"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "me-auto", 3, "click"], [3, "formControlName", "settings"], ["class", "modal-body", 4, "ngIf"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [3, "settings", "formControlName", 4, "ngFor", "ngForOf"], [3, "settings", "formControlName"]], template: function ObjectiveAnnualGrantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h6")(5, "b");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(8, ObjectiveAnnualGrantComponent_form_8_Template, 6, 5, "form", 5);
      \u0275\u0275elementStart(9, "div", 6)(10, "app-table", 7);
      \u0275\u0275listener("action", function ObjectiveAnnualGrantComponent_Template_app_table_action_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onActionClick($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-pagination", 8);
      \u0275\u0275listener("pageSizeChange", function ObjectiveAnnualGrantComponent_Template_app_pagination_pageSizeChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        ctx.countPerPage = $event;
        return \u0275\u0275resetView(ctx.initObjectivesData());
      })("pageChange", function ObjectiveAnnualGrantComponent_Template_app_pagination_pageChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(12, ObjectiveAnnualGrantComponent_ng_template_12_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "Select employees to change annual grant"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.filtersForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("isRawClickable", true)("columns", ctx.columns)("dataSource", ctx.dataSource);
      \u0275\u0275advance();
      \u0275\u0275property("totalRows", ctx.totalRows)("pageSize", ctx.countPerPage)("totalPages", ctx.totalPages);
    }
  }, dependencies: [
    FormInputComponent,
    CommonModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TableComponent,
    TranslatePipe,
    PaginationComponent,
    MatButtonModule,
    MatButton
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectiveAnnualGrantComponent, { className: "ObjectiveAnnualGrantComponent", filePath: "src/app/main/performance/objective-annual-grant/objective-annual-grant.component.ts", lineNumber: 44 });
})();

export {
  ObjectiveAnnualGrantComponent
};
//# sourceMappingURL=chunk-WVSW2X76.js.map
