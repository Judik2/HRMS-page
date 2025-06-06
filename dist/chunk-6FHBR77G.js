import {
  ObjectivesRepository
} from "./chunk-BRZVXPA7.js";
import {
  ObjectiveFormDto,
  ObjectiveFormInsertDto,
  ObjectiveFormRepository,
  ObjectivesInsertDto
} from "./chunk-S5OCFGQY.js";
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
  FormInputComponent
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
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
  EmployeeDto
} from "./chunk-NKEEF4XY.js";
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/performance/objective-distribution/objective-distribution.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ObjectiveDistributionComponent_form_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-form-input", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r1.formControlName)("settings", input_r1);
  }
}
function ObjectiveDistributionComponent_form_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275template(1, ObjectiveDistributionComponent_form_2_div_1_Template, 2, 2, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.distributionObjectiveForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formInputs);
  }
}
function ObjectiveDistributionComponent_form_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "app-form-input", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r3.formControlName)("settings", input_r3);
  }
}
function ObjectiveDistributionComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275template(1, ObjectiveDistributionComponent_form_9_div_1_Template, 2, 2, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.distributionObjectiveFiltersForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formInputsFilters);
  }
}
var ObjectiveDistributionComponent = class _ObjectiveDistributionComponent {
  fb;
  employeeRepository;
  objectiveFormRepository;
  storageService;
  spinner;
  translate;
  supabaseAuthService;
  objectivesRepository;
  eventService;
  loaderService;
  distributionObjectiveForm;
  distributionObjectiveFiltersForm;
  formInputs = [
    {
      formControlName: "due_date",
      type: "date",
      label: "Setting a deadline date to receiving the forms back",
      id: "due_date",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      additional: { disable_before_today: true }
    }
  ];
  employees = new Array();
  dataSource = new MatTableDataSource();
  selectedEmployees = new Array();
  columns = [
    { title: "Select", field: "isSelected", type: "checkbox", columnHeaderClass: "text-center", width: "5%" },
    { title: "Employee", field: "hebrew_display_name", sortable: true, type: "employee", width: "20%" },
    { title: "Email", field: "email", permissions: ["view_employee"], width: "20%" },
    { title: "Phone", field: "phone", permissions: ["view_employee"], width: "10%" },
    { title: "Department", field: "department", width: "10%" },
    { title: "Job Position", field: "job_position", width: "10%" }
  ];
  formInputsFilters = [
    { formControlName: "display_name", type: "text", placeholder: "Display Name", id: "display_name", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "division", type: "autocomplete", placeholder: "Division", id: "division", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "department", type: "autocomplete", placeholder: "Department", id: "department", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "email", type: "email", placeholder: "Email", id: "email", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  managers = [];
  currentEmployee;
  constructor(fb, employeeRepository, objectiveFormRepository, storageService, spinner, translate, supabaseAuthService, objectivesRepository, eventService, loaderService) {
    this.fb = fb;
    this.employeeRepository = employeeRepository;
    this.objectiveFormRepository = objectiveFormRepository;
    this.storageService = storageService;
    this.spinner = spinner;
    this.translate = translate;
    this.supabaseAuthService = supabaseAuthService;
    this.objectivesRepository = objectivesRepository;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.distributionObjectiveForm = this.fb.group({
      due_date: ["", Validators.required]
    });
    this.distributionObjectiveFiltersForm = this.fb.group({
      display_name: [""],
      email: [""],
      department: [""],
      division: [""]
    });
    this.distributionObjectiveFiltersForm.valueChanges.subscribe(() => {
      this.filterEmployees();
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_FILTER_CHANGED, { filters: this.distributionObjectiveFiltersForm?.getRawValue() });
    });
  }
  ngOnInit() {
    this.initEmployees();
    this.initManagers();
    this.initDepartments();
    this.initDivisions();
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
  }
  initManagers() {
    this.employeeRepository.getManagers().then((data) => {
      this.managers = data.map((x) => {
        return new EmployeeDto(x);
      });
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_MANAGERS_LOADED, { count: this.managers.length });
    }).catch((error) => {
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_MANAGERS_LOAD_ERROR, { error });
    });
  }
  initEmployees() {
    this.spinner.show();
    this.loaderService.show();
    this.employeeRepository.getAllForObjective().then((result) => {
      this.employees = [];
      result.forEach((element) => {
        let item = new EmployeeDto(element, this.storageService);
        this.employees.push(item);
      });
      this.dataSource.data = this.employees;
      this.spinner.hide();
      this.loaderService.hide();
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_EMPLOYEES_LOADED, { count: this.employees.length });
    }).catch((error) => {
      this.spinner.hide();
      this.loaderService.hide();
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_EMPLOYEES_LOAD_ERROR, { error });
    });
  }
  filterEmployees() {
    let filters = this.distributionObjectiveFiltersForm?.getRawValue();
    this.dataSource.data = this.employees.filter((x) => (!filters.display_name || x.getEmployeeName().toLocaleLowerCase()?.includes(filters.display_name?.toLocaleLowerCase())) && (!filters.email || x.email?.toLocaleLowerCase().includes(filters.email.toLocaleLowerCase())) && (!filters.department || x.department?.toLocaleLowerCase().includes(filters.department.toLocaleLowerCase())) && (!filters.division || x.division?.toLocaleLowerCase().includes(filters.division.toLocaleLowerCase())));
  }
  onSendClick() {
    this.distributionObjectiveForm?.markAllAsTouched();
    if (this.distributionObjectiveForm?.valid) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Are you sure?"),
        text: this.translate.instant("This form will be sent to all users in the above distribution form."),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.translate.instant("Yes, send it!"),
        cancelButtonText: this.translate.instant("Cancel")
      }).then((result) => {
        if (result.isConfirmed) {
          let formsToCreate = new Array();
          let objectivesToCreate = new Array();
          const formValue = this.distributionObjectiveForm?.getRawValue();
          let employeeIds = this.selectedEmployees.map((x) => x.getEmployeeId());
          this.spinner.show();
          this.loaderService.show();
          this.objectiveFormRepository.lastId().then((lastId) => {
            this.objectiveFormRepository.getLastFormsForEmployeeList(employeeIds).then((lastCreatedForms) => {
              this.selectedEmployees.forEach((employee) => {
                if (employee.id) {
                  const form = new ObjectiveFormInsertDto(formValue);
                  form.employee_id = employee.id;
                  form.id = ++lastId;
                  form.is_employee_approved = false;
                  form.is_manager_approved = false;
                  form.is_active = true;
                  form.step = AppConstants.INITIATE_STEP;
                  form.creator_id = this.currentEmployee.id;
                  form.created_at = (/* @__PURE__ */ new Date()).toLocaleString();
                  form.status = AppConstants.PENDING_PERFORMANCE_ENTRY;
                  formsToCreate.push(form);
                  let lastForm = lastCreatedForms.find((x) => x.employee_id == employee.id);
                  if (lastForm && lastForm.objectives.length > 0) {
                    lastForm.objectives.forEach((lastObjective) => {
                      let newObjective = new ObjectivesInsertDto(lastObjective);
                      delete newObjective.id;
                      if (form.id) {
                        newObjective.objective_form_id = form.id;
                        newObjective.yearly_performance = 0;
                        newObjective.weighted_score = 0;
                        newObjective.performance_percentage = 0;
                        objectivesToCreate.push(newObjective);
                      }
                    });
                  }
                }
              });
              this.objectiveFormRepository.createList(formsToCreate).then(() => {
                const formsWithEmployee = formsToCreate.map((form) => {
                  const dto = new ObjectiveFormDto(form);
                  dto.employee = this.employees.find((e) => e.id === form.employee_id);
                  return dto;
                });
                this.objectivesRepository.createList(objectivesToCreate).then(() => {
                  this.spinner.hide();
                  this.loaderService.hide();
                  this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_SEND, { data: formsWithEmployee });
                  import_sweetalert2.default.fire(this.translate.instant("Sent!"), this.translate.instant("The form was successfully sent."), "success");
                  this.loaderService.hide();
                }).catch((error) => {
                  this.spinner.hide();
                  this.loaderService.hide();
                  this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_OBJECTIVES_CREATE_ERROR, { error });
                });
              }).catch((error) => {
                this.spinner.hide();
                this.loaderService.hide();
                this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_FORMS_CREATE_ERROR, { error });
              });
            }).catch((error) => {
              this.spinner.hide();
              this.loaderService.hide();
              this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_LAST_FORMS_LOAD_ERROR, { error });
            });
          }).catch((error) => {
            this.spinner.hide();
            this.loaderService.hide();
            this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_LAST_ID_LOAD_ERROR, { error });
          });
        }
      });
    }
  }
  // public sendNotifications(forms: ObjectiveFormInsertDto[]) {
  //   const requests = forms.map((form) => {
  //     const reporting_manager_id = this.selectedEmployees.find((emp) => emp.id === form.employee_id)?.reporting_manager_id;
  //     let manager = this.managers.find(x => x.id == reporting_manager_id)
  //     let employee = this.selectedEmployees.find(x => x.id == form.employee_id)
  //     if (manager && manager.email && employee && employee.getName() && form.id) {
  //       return this.notificationService.sendNotifications([manager.email],
  //         this.notificationService.createHtmlBodyForDistributionForm(form.id),
  //         "טופס חדש במערכת היעדים");
  //     }
  //     return null;
  //   });
  //   return Promise.all(requests);
  // }
  onActionClick(event) {
    switch (event.action) {
      case "selectAll": {
        this.employees.forEach((employee) => {
          employee.isSelected = event.data;
        });
        this.fillSelectedEmployees();
        break;
      }
      case "select": {
        this.fillSelectedEmployees();
        break;
      }
      case "sort": {
        this.dataSource.data = AppConstants.sortData(event.data, this.dataSource.data);
        break;
      }
    }
  }
  fillSelectedEmployees() {
    this.selectedEmployees = this.employees.filter((x) => x.isSelected);
  }
  initDivisions() {
    this.employeeRepository.getAllDivisions().then((divisions) => {
      let field = this.formInputsFilters.find((x) => x.formControlName == "division");
      if (field) {
        field.options = of(divisions.map((x) => ({ value: x, label: x })));
      }
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_DIVISIONS_LOADED, { count: divisions.length });
    }).catch((error) => {
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_DIVISIONS_LOAD_ERROR, { error });
    });
  }
  initDepartments() {
    this.employeeRepository.getAllDepartments().then((departments) => {
      let field = this.formInputsFilters.find((x) => x.formControlName == "department");
      if (field) {
        field.options = of(departments.map((x) => ({ value: x, label: x })));
      }
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_DEPARTMENTS_LOADED, { count: departments.length });
    }).catch((error) => {
      this.eventService.next(EventConstants.OBJECTIVE_FORM_DISTRIBUTION_DEPARTMENTS_LOAD_ERROR, { error });
    });
  }
  static \u0275fac = function ObjectiveDistributionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveDistributionComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(ObjectiveFormRepository), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(ObjectivesRepository), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectiveDistributionComponent, selectors: [["app-objective-distribution"]], decls: 15, vars: 12, consts: [[1, "card", "flex-fill"], [1, "card-body"], ["class", "row", 3, "formGroup", 4, "ngIf"], [1, "mt-4", "mb-5"], [1, "m-2"], ["tableLayout", "fixed", "containerClasses", "table-responsive sticky-table-container", "tableClasses", "app-table no-wrap", 1, "table-view", 3, "action", "isStickyHeader", "columns", "dataSource"], [1, "text-start", "pt-1"], ["mat-raised-button", "", "color", "primary", 1, "me-auto", 3, "click", "disabled"], [1, "row", 3, "formGroup"], ["class", "col-sm-12 col-md-6 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-3"], [3, "formControlName", "settings"], ["class", "col-sm-12 col-md-6 col-lg-3 mt-2", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-3", "mt-2"]], template: function ObjectiveDistributionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, ObjectiveDistributionComponent_form_2_Template, 2, 2, "form", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h6")(6, "b");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(9, ObjectiveDistributionComponent_form_9_Template, 2, 2, "form", 2);
      \u0275\u0275elementStart(10, "app-table", 5);
      \u0275\u0275listener("action", function ObjectiveDistributionComponent_Template_app_table_action_10_listener($event) {
        return ctx.onActionClick($event);
      })("action", function ObjectiveDistributionComponent_Template_app_table_action_10_listener($event) {
        return ctx.onActionClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 6)(12, "button", 7);
      \u0275\u0275listener("click", function ObjectiveDistributionComponent_Template_button_click_12_listener() {
        return ctx.onSendClick();
      });
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.distributionObjectiveForm);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "Select employees to send form"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.distributionObjectiveFiltersForm);
      \u0275\u0275advance();
      \u0275\u0275property("isStickyHeader", true)("columns", ctx.columns)("dataSource", ctx.dataSource);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.selectedEmployees.length == 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "Send"), " ");
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
    MatButtonModule,
    MatButton
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectiveDistributionComponent, { className: "ObjectiveDistributionComponent", filePath: "src/app/main/performance/objective-distribution/objective-distribution.component.ts", lineNumber: 40 });
})();
export {
  ObjectiveDistributionComponent
};
//# sourceMappingURL=chunk-6FHBR77G.js.map
