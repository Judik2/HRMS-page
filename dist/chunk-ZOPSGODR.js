import {
  ObjectiveFormViewDto
} from "./chunk-25KMDAIC.js";
import {
  EmployeeService
} from "./chunk-E3RI4QCV.js";
import {
  PaginationComponent
} from "./chunk-EQM2SLMA.js";
import {
  ObjectiveFormRepository,
  ObjectiveFormSearchParams
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
  AppOptions,
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  StorageService
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
import "./chunk-RNINX5QP.js";
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import {
  EmployeeRepository
} from "./chunk-TLWCP54H.js";
import "./chunk-NKEEF4XY.js";
import "./chunk-LHQOL4PU.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  ActivatedRoute,
  LoaderService,
  NgxSpinnerService,
  Router,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Observable,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/performance/objectives-management/objectives-management.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
function ObjectivesManagementComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-form-input", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r1.formControlName)("settings", input_r1);
  }
}
function ObjectivesManagementComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4)(2, "div", 5);
    \u0275\u0275template(3, ObjectivesManagementComponent_div_2_div_3_Template, 2, 2, "div", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(4, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const tableView_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r1.filtersForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.formInputs);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tableView_r3);
  }
}
function ObjectivesManagementComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementContainer(1, 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tableView_r3 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tableView_r3);
  }
}
function ObjectivesManagementComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-table", 10);
    \u0275\u0275listener("action", function ObjectivesManagementComponent_ng_template_4_Template_app_table_action_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "app-pagination", 11);
    \u0275\u0275listener("pageSizeChange", function ObjectivesManagementComponent_ng_template_4_Template_app_pagination_pageSizeChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.countPerPage = $event;
      return \u0275\u0275resetView(ctx_r1.initObjectivesData());
    })("pageChange", function ObjectivesManagementComponent_ng_template_4_Template_app_pagination_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("isRawClickable", true)("columns", ctx_r1.columns)("dataSource", ctx_r1.data);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", ctx_r1.countPerPage)("totalPages", ctx_r1.totalPages)("totalRows", ctx_r1.totalRows);
  }
}
var ObjectivesManagementComponent = class _ObjectivesManagementComponent {
  supabaseAuthService;
  objectiveFormRepository;
  employeeService;
  storageService;
  router;
  activatedRoute;
  idService;
  employeeRepository;
  spinner;
  fb;
  translate;
  eventService;
  loaderService;
  isAwaited = false;
  isContainerView = false;
  filtersForm;
  currentEmployee;
  employeeId;
  filters = new ObjectiveFormSearchParams();
  data = new MatTableDataSource();
  totalRows = 0;
  countPerPage = 15;
  totalPages = 1;
  columns = [
    { field: "employee_display_name", title: "Name", type: "employee", width: "20%" },
    { field: "department", title: "Department", width: "10%" },
    { field: "division", title: "Division", width: "10%" },
    { field: "due_date", title: "Deadline", type: "date", width: "10%" },
    { field: "status", title: "Status", type: "objective-form-status", width: "20%" },
    { title: "Total weighted score", field: "weighted_score_sum", type: "percentage", width: "10%" },
    {
      width: "10%",
      field: "actions",
      title: "Actions",
      type: "buttons",
      footerVisible: false,
      columnClass: "app-table-sticky-right",
      columnHeaderClass: "app-table-sticky-right",
      buttons: [
        {
          name: "Delete",
          icon: "trash-outline",
          class: "icon-trash"
        }
      ],
      visible: () => {
        return this.currentEmployee?.isAdmin();
      }
    }
  ];
  formInputs = [
    { formControlName: "department", type: "autocomplete", placeholder: "Department", id: "department", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "division", type: "autocomplete", placeholder: "Division", id: "division", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "status", type: "autocomplete", placeholder: "Status", id: "status", labelClass: "app-label", inputClass: "app-autocomplete w-100", formFieldClass: "w-100", appearance: "outline", options: AppOptions.getObjectiveStatusOptions() },
    { formControlName: "search", type: "text", placeholder: "Search", id: "search", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  /**
   *
   */
  constructor(supabaseAuthService, objectiveFormRepository, employeeService, storageService, router, activatedRoute, idService, employeeRepository, spinner, fb, translate, eventService, loaderService) {
    this.supabaseAuthService = supabaseAuthService;
    this.objectiveFormRepository = objectiveFormRepository;
    this.employeeService = employeeService;
    this.storageService = storageService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.idService = idService;
    this.employeeRepository = employeeRepository;
    this.spinner = spinner;
    this.fb = fb;
    this.translate = translate;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.filtersForm = this.fb.group({
      department: [""],
      division: [""],
      status: [""],
      search: [""]
    });
  }
  ngOnInit() {
    this.filtersForm.valueChanges.subscribe((formValues) => {
      Object.assign(this.filters, formValues);
      this.initObjectivesData();
    });
    const currentRoute = this.router.url;
    this.isAwaited = currentRoute == "/objectives-awaited";
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
      this.currentEmployee = employee;
      this.initObjectivesData();
    });
    this.initDepartments();
    this.initDivisions();
  }
  initObjectivesData() {
    this.spinner.show();
    this.loaderService.show();
    this.filters.page_size = this.countPerPage;
    this.objectiveFormRepository.getFilteredFormsCount(this.filters, this.isAwaited).then((count) => {
      this.totalRows = count;
      this.totalPages = Math.ceil(this.totalRows / this.countPerPage);
      this.objectiveFormRepository.getFilteredForms(this.filters, this.isAwaited).then((res) => {
        this.spinner.hide();
        this.loaderService.hide();
        let mappedData = res.map((x) => {
          return new ObjectiveFormViewDto(x, this.storageService);
        });
        this.data.data = mappedData;
      });
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "Delete": {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Are you sure?"),
          text: this.translate.instant("This action will delete form permanently!"),
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: this.translate.instant("Yes, delete it!"),
          cancelButtonText: this.translate.instant("Cancel")
        }).then((result) => {
          if (result.isConfirmed) {
            this.objectiveFormRepository.delete(event.data.id).then(() => {
              import_sweetalert2.default.fire(this.translate.instant("Deleted!"), this.translate.instant("The form has been deleted."), "success");
              this.initObjectivesData();
              this.eventService.next(EventConstants.OBJECTIVES_MANAGEMENT_DELETE, { id: event.data.id });
            });
          }
        });
        break;
      }
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
        field.options = of(divisions.map((x) => ({
          label: x,
          value: x
        })));
      }
    });
  }
  initDepartments() {
    this.employeeRepository.getAllDepartments().then((departments) => {
      let field = this.formInputs.find((x) => x.formControlName == "department");
      if (field) {
        field.options = of(departments.map((x) => ({
          label: x,
          value: x
        })));
      }
    });
  }
  static \u0275fac = function ObjectivesManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectivesManagementComponent)(\u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(ObjectiveFormRepository), \u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectivesManagementComponent, selectors: [["app-objectives-management"]], inputs: { isAwaited: "isAwaited", isContainerView: "isContainerView" }, decls: 6, vars: 2, consts: [["tableView", ""], [1, "card", "flex-fill"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "w-100", "align-items-center"], [1, "row", "m-2", "w-100", 3, "formGroup"], ["class", "col-lg-3 col-md-6 col-sm-12 mt-2", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet"], [1, "col-lg-3", "col-md-6", "col-sm-12", "mt-2"], [3, "formControlName", "settings"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "isRawClickable", "columns", "dataSource"], ["paginationType", "datatable-js", 3, "pageSizeChange", "pageChange", "pageSize", "totalPages", "totalRows"]], template: function ObjectivesManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, ObjectivesManagementComponent_div_2_Template, 5, 3, "div", 3);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, ObjectivesManagementComponent_ng_container_3_Template, 2, 1, "ng-container", 3)(4, ObjectivesManagementComponent_ng_template_4_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isContainerView);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isContainerView);
    }
  }, dependencies: [
    TableComponent,
    CommonModule,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    PaginationComponent,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectivesManagementComponent, { className: "ObjectivesManagementComponent", filePath: "src/app/main/performance/objectives-management/objectives-management.component.ts", lineNumber: 40 });
})();
export {
  ObjectivesManagementComponent
};
//# sourceMappingURL=chunk-ZOPSGODR.js.map
