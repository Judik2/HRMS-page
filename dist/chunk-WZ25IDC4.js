import {
  LabelComponent
} from "./chunk-LAP7BRMJ.js";
import {
  ProfileEditComponent
} from "./chunk-23GWIPYR.js";
import "./chunk-4UH7ID43.js";
import {
  ExcelService
} from "./chunk-6P2NLG4F.js";
import {
  EmployeeService
} from "./chunk-E3RI4QCV.js";
import "./chunk-BV2EUPGA.js";
import {
  PaginationComponent
} from "./chunk-EQM2SLMA.js";
import "./chunk-6X5DL6OJ.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  DropdownMenuComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatTableDataSource,
  MatTooltip,
  MatTooltipModule,
  TableComponent
} from "./chunk-X45EM66I.js";
import {
  CircleEmployeeImgComponent
} from "./chunk-BWIOX5TR.js";
import "./chunk-JYDETW4E.js";
import "./chunk-M2EJXGZP.js";
import {
  AppModalComponent,
  AppOptions,
  FormInputComponent,
  IonicModule,
  MatFormFieldModule,
  MatSelectModule,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  MatIconModule
} from "./chunk-ZKADD55Q.js";
import {
  Dir,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  StorageService,
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
import "./chunk-RNINX5QP.js";
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import {
  EmployeeRepository,
  EmployeeSearchParams
} from "./chunk-TLWCP54H.js";
import {
  EmployeeDto,
  EmployeeSearchDto
} from "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
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
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Observable,
  Subject,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
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
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/employee/employees/employees.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/main/employee/employees/employee-card-view/employee-card-view.component.ts
function EmployeeCardViewComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("  ", message_r1.tags, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, message_r1), " ");
  }
}
function EmployeeCardViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, EmployeeCardViewComponent_div_0_div_1_Template, 3, 6, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.messages);
  }
}
function EmployeeCardViewComponent_div_2_div_2_h6_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h6", 21);
    \u0275\u0275listener("click", function EmployeeCardViewComponent_div_2_div_2_h6_9_Template_h6_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const emp_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionClick({ action: "Open", data: emp_r4 }));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", emp_r4.employee_display_name);
    \u0275\u0275attribute("title", emp_r4.employee_display_name.length >= 30 ? emp_r4.employee_display_name : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", emp_r4.employee_display_name, " ");
  }
}
function EmployeeCardViewComponent_div_2_div_2_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const emp_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, emp_r4.role));
  }
}
function EmployeeCardViewComponent_div_2_div_2_app_label_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-label", 23);
  }
  if (rf & 2) {
    const label_r6 = ctx.$implicit;
    const emp_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("settings", label_r6)("element", emp_r4);
  }
}
function EmployeeCardViewComponent_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "mat-checkbox", 13);
    \u0275\u0275twoWayListener("ngModelChange", function EmployeeCardViewComponent_div_2_div_2_Template_mat_checkbox_ngModelChange_5_listener($event) {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(emp_r4.isSelected, $event) || (emp_r4.isSelected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function EmployeeCardViewComponent_div_2_div_2_Template_mat_checkbox_change_5_listener() {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionClick({ action: "select", data: emp_r4 }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "app-circle-employee-img", 14);
    \u0275\u0275listener("click", function EmployeeCardViewComponent_div_2_div_2_Template_app_circle_employee_img_click_6_listener() {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionClick({ action: "Open", data: emp_r4 }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "app-dropdown-menu", 15);
    \u0275\u0275listener("buttonClick", function EmployeeCardViewComponent_div_2_div_2_Template_app_dropdown_menu_buttonClick_7_listener($event) {
      const emp_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionClick({ action: $event, data: emp_r4 }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275template(9, EmployeeCardViewComponent_div_2_div_2_h6_9_Template, 2, 3, "h6", 17)(10, EmployeeCardViewComponent_div_2_div_2_span_10_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19);
    \u0275\u0275template(12, EmployeeCardViewComponent_div_2_div_2_app_label_12_Template, 1, 2, "app-label", 20);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const emp_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", emp_r4.isSelected);
    \u0275\u0275advance();
    \u0275\u0275property("employee", emp_r4);
    \u0275\u0275advance();
    \u0275\u0275property("buttons", ctx_r1.dropdownButtons);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", emp_r4.employee_display_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emp_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.employeeLabels);
  }
}
function EmployeeCardViewComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275template(2, EmployeeCardViewComponent_div_2_div_2_Template, 13, 6, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.dataSource.data);
  }
}
var EmployeeCardViewComponent = class _EmployeeCardViewComponent {
  router;
  employeeService;
  eventService;
  dataSource = new MatTableDataSource();
  currentEmployee;
  refresh = new EventEmitter();
  action = new EventEmitter();
  messages = [];
  filters;
  employeeLabels = [
    { type: "no-title-label", title: "email", icon: "ti ti-mail-forward", field: "email" },
    { type: "no-title-label", title: "phone", icon: "ti ti-phone", field: "phone" },
    { type: "no-title-label", title: "job_position", icon: "ti ti-id", field: "job_position" }
  ];
  dropdownButtons = [
    { action: "Edit", iconClass: "", label: "Edit" }
  ];
  constructor(router, employeeService, eventService) {
    this.router = router;
    this.employeeService = employeeService;
    this.eventService = eventService;
  }
  ngOnInit() {
  }
  onActionClick(event) {
    this.action.emit(event);
  }
  static \u0275fac = function EmployeeCardViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeCardViewComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeCardViewComponent, selectors: [["app-employee-card-view"]], inputs: { dataSource: "dataSource", currentEmployee: "currentEmployee" }, outputs: { refresh: "refresh", action: "action" }, decls: 3, vars: 2, consts: [["class", "", 4, "ngIf"], [1, "view-main-wrapper"], ["class", "view-grid", 4, "ngIf"], [1, ""], [3, "class", 4, "ngFor", "ngForOf"], [1, "view-grid"], [1, "row", "flex-wrap"], ["class", "col-xl-3 col-lg-4 col-md-6 ng-star-inserted", 4, "ngFor", "ngForOf"], [1, "col-xl-3", "col-lg-4", "col-md-6", "ng-star-inserted"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "form-check-md", "col-1"], ["color", "primary", 3, "ngModelChange", "change", "ngModel"], [1, "col-10", 3, "click", "employee"], [3, "buttonClick", "buttons"], [1, "text-center", "mb-3"], ["class", "text-truncate", 3, "matTooltip", "click", 4, "ngIf"], ["class", "badge bg-pink-transparent fs-10 fw-medium", 4, "ngIf"], [1, "d-flex", "flex-column"], [3, "settings", "element", 4, "ngFor", "ngForOf"], [1, "text-truncate", 3, "click", "matTooltip"], [1, "badge", "bg-pink-transparent", "fs-10", "fw-medium"], [3, "settings", "element"]], template: function EmployeeCardViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EmployeeCardViewComponent_div_0_Template, 2, 1, "div", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275template(2, EmployeeCardViewComponent_div_2_Template, 3, 1, "div", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.messages.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.dataSource && ctx.dataSource.data.length);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    IonicModule,
    TranslatePipe,
    MatTooltipModule,
    MatTooltip,
    CircleEmployeeImgComponent,
    LabelComponent,
    DropdownMenuComponent,
    MatCheckboxModule,
    MatCheckbox,
    FormsModule,
    NgControlStatus,
    NgModel
  ], styles: ["\n\n.profile-basic-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  gap: 50px;\n}\n.profile-basic-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: unset;\n  gap: 15px;\n}\n.profile-basic-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: var(--primary-color);\n}\n.profile-basic-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n.user-name[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.user-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #fff;\n  padding: 10px 0;\n  display: block;\n}\n.employee-details[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n}\n.employee-details[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n}\n/*# sourceMappingURL=employee-card-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeCardViewComponent, { className: "EmployeeCardViewComponent", filePath: "src/app/main/employee/employees/employee-card-view/employee-card-view.component.ts", lineNumber: 34 });
})();

// src/app/main/employee/employees/employee-table-view/employee-table-view.component.ts
var EmployeeTableViewComponent = class _EmployeeTableViewComponent {
  eventService;
  currentEmployee;
  dataSource = new MatTableDataSource();
  action = new EventEmitter();
  columns = [
    { title: "Select", field: "isSelected", width: "5%", type: "checkbox", columnClass: "app-table-sticky-right", columnHeaderClass: "app-table-sticky-right text-center" },
    { title: "Employee", field: "employee_display_name", type: "employee", width: "12%" },
    { title: "Employee number", field: "ad_id", width: "8%" },
    { title: "Email", field: "email", width: "12%" },
    { title: "Phone", field: "phone", width: "8%" },
    { title: "Work Phone", field: "work_phone", width: "8%" },
    { title: "Department", field: "department", width: "8%" },
    { title: "Job Position", field: "job_position", width: "8%" },
    { title: "Reporting Manager", field: "reporting_manager_display_name", sortable: true, width: "10%" },
    { title: "Date of Joining", field: "joining_date", sortable: true, type: "date", width: "8%" },
    { title: "Company", field: "company", width: "8%" },
    {
      field: "actions",
      title: "Actions",
      type: "action-icons",
      visible: () => {
        return this.currentEmployee.isAdmin();
      },
      columnHeaderClass: "text-center",
      width: "5%",
      buttons: [
        {
          name: "Edit",
          icon: "create-outline",
          class: "icon-edit"
        }
      ]
    }
  ];
  selectAllChange = new EventEmitter();
  constructor(eventService) {
    this.eventService = eventService;
  }
  isAllSelected() {
    return this.dataSource.data.every((x) => x.isSelected);
  }
  selectedCount() {
    return this.dataSource.data.filter((x) => x.isSelected).length;
  }
  onActionClick(event) {
    if (event.action == "selectAll") {
      this.selectAllChange.emit(event.data);
      return;
    }
    this.action.emit(event);
  }
  static \u0275fac = function EmployeeTableViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeTableViewComponent)(\u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeTableViewComponent, selectors: [["app-employee-table-view"]], inputs: { currentEmployee: "currentEmployee", dataSource: "dataSource" }, outputs: { action: "action", selectAllChange: "selectAllChange" }, decls: 1, vars: 2, consts: [["tableClasses", "app-table no-wrap", "tableLayout", "fixed", 3, "action", "columns", "dataSource"]], template: function EmployeeTableViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "app-table", 0);
      \u0275\u0275listener("action", function EmployeeTableViewComponent_Template_app_table_action_0_listener($event) {
        return ctx.onActionClick($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("columns", ctx.columns)("dataSource", ctx.dataSource);
    }
  }, dependencies: [
    TableComponent,
    CommonModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeTableViewComponent, { className: "EmployeeTableViewComponent", filePath: "src/app/main/employee/employees/employee-table-view/employee-table-view.component.ts", lineNumber: 18 });
})();

// src/app/main/employee/employees/employee-filters/employee-filters.component.ts
var _c0 = (a0) => ({ "": a0 });
var _c1 = (a0) => ({ "d-flex gap-2": a0 });
function EmployeeFiltersComponent_div_0_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "app-form-input", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c1, field_r3.formControlName === "is_active"))("formControlName", field_r3.formControlName)("settings", field_r3);
  }
}
function EmployeeFiltersComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275listener("click", function EmployeeFiltersComponent_div_0_div_1_Template_div_click_1_listener() {
      const section_r2 = \u0275\u0275restoreView(_r1).$implicit;
      return \u0275\u0275resetView(section_r2.isActive = !section_r2.isActive);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6);
    \u0275\u0275template(4, EmployeeFiltersComponent_div_0_div_1_div_4_Template, 2, 5, "div", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const section_r2 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, section_r2.isActive));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", section_r2.fields);
  }
}
function EmployeeFiltersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, EmployeeFiltersComponent_div_0_div_1_Template, 5, 4, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r3.employeeFilterForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.sections);
  }
}
var EmployeeFiltersComponent = class _EmployeeFiltersComponent {
  fb;
  employeeRepository;
  eventService;
  employeeFilterForm;
  filters;
  changeForm = new EventEmitter();
  employeeFields = [
    { formControlName: "employee_display_name", type: "text", placeholder: "Display Name", id: "employeeFirstName", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "email", type: "text", placeholder: "Email", id: "email", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "phone", type: "text", placeholder: "Phone", id: "phone", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "gender", type: "select2", placeholder: "Gender", id: "gender", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: AppOptions.getGenderOptions() }
  ];
  workInfoFields = [
    { formControlName: "division", type: "autocomplete", placeholder: "Division", id: "division", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "department", type: "autocomplete", placeholder: "Department", id: "department", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline", options: new Observable() },
    { formControlName: "company", type: "text", placeholder: "Company", id: "company", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "reporting_manager_display_name", type: "text", placeholder: "Reporting Manager", id: "reportingManager", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "is_active", type: "switch", label: "Is Active", id: "isActive", labelClass: "app-label", formFieldClass: "w-100", appearance: "outline" },
    { formControlName: "job_position", type: "text", placeholder: "Job Position", id: "jobPosition", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  sections = [
    { name: "Personal details", fields: this.employeeFields, isActive: false },
    { name: "General details", fields: this.workInfoFields, isActive: false }
  ];
  divisions = [];
  constructor(fb, employeeRepository, eventService) {
    this.fb = fb;
    this.employeeRepository = employeeRepository;
    this.eventService = eventService;
  }
  ngOnInit() {
    this.employeeFilterForm = this.fb.group({
      employee_display_name: [""],
      email: [""],
      phone: [""],
      gender: [""],
      department: [""],
      division: [""],
      company: [""],
      reporting_manager_display_name: [""],
      job_position: [""],
      is_active: [true]
    });
    this.employeeFilterForm.patchValue(this.filters);
    this.employeeFilterForm.valueChanges.subscribe((data) => {
      this.changeForm.emit(this.employeeFilterForm?.getRawValue());
      this.eventService.next(EventConstants.EMPLOYEE_FILTERS_APPLY, { filters: this.employeeFilterForm?.getRawValue() });
    });
    this.initDepartments();
    this.initDivisions();
  }
  initDivisions() {
    this.employeeRepository.getAllDivisions().then((divisions) => {
      let field = this.workInfoFields.find((x) => x.formControlName == "division");
      if (field) {
        field.options = of(divisions);
      }
    }).catch((error) => {
    });
  }
  initDepartments() {
    this.employeeRepository.getAllDepartments().then((departments) => {
      let field = this.workInfoFields.find((x) => x.formControlName == "department");
      if (field) {
        field.options = of(departments);
      }
    }).catch((error) => {
    });
  }
  static \u0275fac = function EmployeeFiltersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeFiltersComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeFiltersComponent, selectors: [["app-employee-filters"]], inputs: { filters: "filters" }, outputs: { changeForm: "changeForm" }, decls: 1, vars: 1, consts: [["class", "", 3, "formGroup", 4, "ngIf"], [1, "", 3, "formGroup"], ["class", "o", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "o", 3, "ngClass"], [1, "", 3, "click"], [1, ""], [1, "row"], ["class", "col-lg-6 col-md-12 mt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-12", "mt-2"], [3, "ngClass", "formControlName", "settings"]], template: function EmployeeFiltersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EmployeeFiltersComponent_div_0_Template, 2, 2, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.employeeFilterForm);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, ReactiveFormsModule, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormInputComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeFiltersComponent, { className: "EmployeeFiltersComponent", filePath: "src/app/main/employee/employees/employee-filters/employee-filters.component.ts", lineNumber: 22 });
})();

// src/app/main/employee/employees/nav-employee/nav-employee.component.ts
var _c02 = (a0) => ({ "active bg-primary text-white": a0 });
function NavEmployeeComponent_mat_checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 24);
    \u0275\u0275listener("change", function NavEmployeeComponent_mat_checkbox_4_Template_mat_checkbox_change_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectAllChange($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("checked", ctx_r1.selectAll ? ctx_r1.selectAll() : false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Select all"), " ");
  }
}
function NavEmployeeComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "app-employee-filters", 26);
    \u0275\u0275listener("changeForm", function NavEmployeeComponent_div_11_Template_app_employee_filters_changeForm_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filters = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 27)(3, "button", 28);
    \u0275\u0275listener("click", function NavEmployeeComponent_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearFilters());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 29);
    \u0275\u0275listener("click", function NavEmployeeComponent_div_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("filters", ctx_r1.filters);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 3, "Clear"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 5, "Apply Filter"), " ");
  }
}
function NavEmployeeComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "input", 30, 0);
    \u0275\u0275listener("change", function NavEmployeeComponent_li_24_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImportChildrensClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 16);
    \u0275\u0275listener("click", function NavEmployeeComponent_li_24_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const fileInput_r5 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(fileInput_r5.click());
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275element(6, "i", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "Import Childrens"));
  }
}
var NavEmployeeComponent = class _NavEmployeeComponent {
  fb;
  idService;
  router;
  employeeRepository;
  supabaseAuthService;
  eventService;
  appConstants = AppConstants;
  filtersChange = new EventEmitter();
  clearAllFilters = new EventEmitter();
  changeViewType = new EventEmitter();
  exportExcel = new EventEmitter();
  importChildrenExcel = new EventEmitter();
  selectAllChange = new EventEmitter();
  changePageSize = new EventEmitter();
  resetFilters;
  selectAll;
  viewType = "card";
  filters = {};
  isDropdownOpen = false;
  uploading = false;
  errorMessage = null;
  filterForm;
  searchOptions = [
    { field: "reporting_manager", label: "Reporting Manager" },
    { field: "department", label: "Department" },
    { field: "job_position", label: "Job Position" }
    // Add more search options as needed
  ];
  searchInputSettings = {
    id: "employee-search",
    placeholder: "Search",
    formControlName: "search",
    appearance: "outline",
    inputClass: "w-100",
    formFieldClass: "small w-100",
    suffixIcon: "search"
  };
  onClickOutside(event) {
    const target = event.target;
    if (this.isDropdownOpen && !target.closest(".employee-filters-dropdown-container")) {
      this.isDropdownOpen = false;
    }
  }
  currentEmployee;
  constructor(fb, idService, router, employeeRepository, supabaseAuthService, eventService) {
    this.fb = fb;
    this.idService = idService;
    this.router = router;
    this.employeeRepository = employeeRepository;
    this.supabaseAuthService = supabaseAuthService;
    this.eventService = eventService;
    this.filterForm = this.fb.group({
      search: [""]
    });
    this.filterForm.valueChanges.subscribe(() => {
      Object.assign(this.filters, this.filterForm.getRawValue());
      this.filtersChange.emit(this.filters);
    });
  }
  ngAfterViewInit() {
    this.resetFilters.subscribe((filters) => {
      this.filters = filters;
      this.filterForm.get("search")?.setValue(filters.search);
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = new EmployeeDto(employee);
    });
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  applyFilters() {
    this.isDropdownOpen = false;
    this.filters.page = 1;
    this.filtersChange.emit(this.filters);
  }
  clearFilters() {
    this.clearAllFilters.emit();
  }
  onSelectAllChange(event) {
    this.selectAllChange.emit(event.checked);
  }
  onExportClick() {
    this.exportExcel.emit();
    this.eventService.next(EventConstants.NAV_EMPLOYEE_EXPORT, {});
  }
  uploadFile() {
    this.uploading = true;
    this.uploading = false;
  }
  closeModal() {
  }
  createEmployee() {
  }
  onChangeViewType(type) {
    this.viewType = type;
    this.changeViewType.emit(this.viewType);
  }
  onCreateClick() {
    this.idService.setId("profile-edit", 0);
    this.router.navigate(["/create-employee"]);
  }
  onImportChildrensClick(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.employeeRepository.getAll().then((employees) => {
        ExcelService.getEmployeeData(file, employees).then((data) => {
          this.employeeRepository.upsertRange(employees).then(() => {
            this.importChildrenExcel.emit(data);
            this.eventService.next(EventConstants.NAV_EMPLOYEE_IMPORT_CHILDRENS, { event });
          });
        });
      });
    }
  }
  static \u0275fac = function NavEmployeeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavEmployeeComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavEmployeeComponent, selectors: [["app-nav-employee"]], hostBindings: function NavEmployeeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NavEmployeeComponent_click_HostBindingHandler($event) {
        return ctx.onClickOutside($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, inputs: { resetFilters: "resetFilters", selectAll: "selectAll", viewType: "viewType" }, outputs: { filtersChange: "filtersChange", clearAllFilters: "clearAllFilters", changeViewType: "changeViewType", exportExcel: "exportExcel", importChildrenExcel: "importChildrenExcel", selectAllChange: "selectAllChange", changePageSize: "changePageSize" }, decls: 30, vars: 23, consts: [["fileInput", ""], [1, "align-items-baseline", "d-flex", "w-100", "justify-content-between", 3, "formGroup"], [1, "d-flex", "col-2"], [1, "w-100", 3, "formControlName", "settings"], [1, "d-flex", "align-items-baseline"], ["dir", "ltr", "class", "me-2", "color", "primary", 3, "checked", "change", 4, "ngIf"], [1, "dropdown", "employee-filters-dropdown-container", "me-2"], [1, "mb-2"], [1, "btn", "btn-primary", "d-flex", "align-items-center", 3, "click"], [1, "ti", "ti-circle-plus", "me-2"], ["class", "dropdown-container position-absolute  employee-filters-dropdown", 4, "ngIf"], [1, "me-2", "mb-2"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "dropdown-toggle", "btn", "btn-white", "d-inline-flex", "align-items-center"], [1, "ti", "ti-file-export", "me-1"], [1, "dropdown-menu", "dropdown-menu-end", "p-3", "text-right"], [1, "dropdown-item", "rounded-1", 3, "click"], [1, "ti", "ti-file-type-xls", "me-1"], [4, "ngIf"], [1, "d-flex", "align-items-center", "border", "bg-white", "rounded", "p-1", "me-2", "icon-list"], [1, "btn", "btn-icon", "btn-sm", "me-1", 3, "click", "ngClass"], [1, "ti", "ti-list-tree"], [1, "btn", "btn-icon", "btn-sm", 3, "click", "ngClass"], [1, "ti", "ti-layout-grid"], ["dir", "ltr", "color", "primary", 1, "me-2", 3, "change", "checked"], [1, "dropdown-container", "position-absolute", "employee-filters-dropdown"], [3, "changeForm", "filters"], [1, "d-flex", "justify-content-center"], ["mat-raised-button", "", "color", "accent", 1, "col-4", "m-3", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "col-sm-4", "m-3", 3, "click"], ["type", "file", "accept", ".xlsx, .xls", 1, "d-none", 3, "change"]], template: function NavEmployeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 1)(1, "div", 2);
      \u0275\u0275element(2, "app-form-input", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 4);
      \u0275\u0275template(4, NavEmployeeComponent_mat_checkbox_4_Template, 3, 4, "mat-checkbox", 5);
      \u0275\u0275elementStart(5, "div", 6)(6, "div", 7)(7, "a", 8);
      \u0275\u0275listener("click", function NavEmployeeComponent_Template_a_click_7_listener() {
        return ctx.toggleDropdown();
      });
      \u0275\u0275element(8, "i", 9);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, NavEmployeeComponent_div_11_Template, 9, 7, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 11)(13, "div", 12)(14, "a", 13);
      \u0275\u0275element(15, "i", 14);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "ul", 15)(19, "li")(20, "a", 16);
      \u0275\u0275listener("click", function NavEmployeeComponent_Template_a_click_20_listener() {
        return ctx.onExportClick();
      });
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(24, NavEmployeeComponent_li_24_Template, 7, 3, "li", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 19)(26, "a", 20);
      \u0275\u0275listener("click", function NavEmployeeComponent_Template_a_click_26_listener() {
        return ctx.onChangeViewType("list");
      });
      \u0275\u0275element(27, "i", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 22);
      \u0275\u0275listener("click", function NavEmployeeComponent_Template_a_click_28_listener() {
        return ctx.onChangeViewType("card");
      });
      \u0275\u0275element(29, "i", 23);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.filterForm);
      \u0275\u0275advance(2);
      \u0275\u0275property("formControlName", ctx.searchInputSettings.formControlName)("settings", ctx.searchInputSettings);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.viewType == "card");
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isDropdownOpen);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 13, "Filter"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isDropdownOpen);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 15, "Export"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 17, "Export as Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.currentEmployee && (ctx.currentEmployee == null ? null : ctx.currentEmployee.isGlobalAdmin()));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(19, _c02, ctx.viewType == "list"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(21, _c02, ctx.viewType == "card"));
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    TranslatePipe,
    EmployeeFiltersComponent,
    MatIconModule,
    Dir,
    MatButtonModule,
    MatButton,
    FormInputComponent,
    MatCheckboxModule,
    MatCheckbox,
    MatSelectModule,
    MatFormFieldModule
  ], styles: ["\n\n.employee-filters-dropdown[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n/*# sourceMappingURL=nav-employee.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavEmployeeComponent, { className: "NavEmployeeComponent", filePath: "src/app/main/employee/employees/nav-employee/nav-employee.component.ts", lineNumber: 42 });
})();

// src/app/main/employee/employees/employees.component.ts
var _c03 = ["templateModal"];
function EmployeesComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-nav-employee", 4);
    \u0275\u0275listener("exportExcel", function EmployeesComponent_ng_template_0_Template_app_nav_employee_exportExcel_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExportExcelClick());
    })("importChildrenExcel", function EmployeesComponent_ng_template_0_Template_app_nav_employee_importChildrenExcel_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImportChildrenExcel($event));
    })("changeViewType", function EmployeesComponent_ng_template_0_Template_app_nav_employee_changeViewType_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewType = $event);
    })("filtersChange", function EmployeesComponent_ng_template_0_Template_app_nav_employee_filtersChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changeFilters($event));
    })("clearAllFilters", function EmployeesComponent_ng_template_0_Template_app_nav_employee_clearAllFilters_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearAllFilters());
    })("selectAllChange", function EmployeesComponent_ng_template_0_Template_app_nav_employee_selectAllChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectAllChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("resetFilters", ctx_r1.resetFilters)("viewType", ctx_r1.viewType)("selectAll", ctx_r1.selectAll);
  }
}
function EmployeesComponent_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function EmployeesComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EmployeesComponent_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementStart(2, "app-employee-card-view", 7);
    \u0275\u0275listener("action", function EmployeesComponent_div_2_ng_container_1_Template_app_employee_card_view_action_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    })("refresh", function EmployeesComponent_div_2_ng_container_1_Template_app_employee_card_view_refresh_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.initEmployeeData());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-pagination", 8);
    \u0275\u0275listener("pageSizeChange", function EmployeesComponent_div_2_ng_container_1_Template_app_pagination_pageSizeChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.countPerPage = $event;
      return \u0275\u0275resetView(ctx_r1.initEmployeeData());
    })("pageChange", function EmployeesComponent_div_2_ng_container_1_Template_app_pagination_pageChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const navEmployee_r4 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", navEmployee_r4);
    \u0275\u0275advance();
    \u0275\u0275property("currentEmployee", ctx_r1.currentEmployee)("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance();
    \u0275\u0275property("pageSizes", ctx_r1.pageSizes)("currentPage", ctx_r1.filters.page)("totalPages", ctx_r1.totalPages)("pageSize", ctx_r1.countPerPage)("totalRows", ctx_r1.totalRows);
  }
}
function EmployeesComponent_div_2_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function EmployeesComponent_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9)(2, "div", 10);
    \u0275\u0275template(3, EmployeesComponent_div_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11)(5, "app-employee-table-view", 12);
    \u0275\u0275listener("selectAllChange", function EmployeesComponent_div_2_ng_container_2_Template_app_employee_table_view_selectAllChange_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSelectAllChange($event));
    })("action", function EmployeesComponent_div_2_ng_container_2_Template_app_employee_table_view_action_5_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 13)(7, "app-pagination", 8);
    \u0275\u0275listener("pageSizeChange", function EmployeesComponent_div_2_ng_container_2_Template_app_pagination_pageSizeChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.countPerPage = $event;
      return \u0275\u0275resetView(ctx_r1.initEmployeeData());
    })("pageChange", function EmployeesComponent_div_2_ng_container_2_Template_app_pagination_pageChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageChange($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const navEmployee_r4 = \u0275\u0275reference(1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", navEmployee_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("currentEmployee", ctx_r1.currentEmployee)("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizes", ctx_r1.pageSizes)("currentPage", ctx_r1.filters.page)("totalPages", ctx_r1.totalPages)("pageSize", ctx_r1.countPerPage)("totalRows", ctx_r1.totalRows);
  }
}
function EmployeesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, EmployeesComponent_div_2_ng_container_1_Template, 4, 8, "ng-container", 5)(2, EmployeesComponent_div_2_ng_container_2_Template, 8, 8, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewType == "card");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.viewType == "list");
  }
}
function EmployeesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h4", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "No search result found!"));
  }
}
function EmployeesComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-profile-edit", 16);
  }
  if (rf & 2) {
    \u0275\u0275property("hideSaveButton", true);
  }
}
var EmployeesComponent = class _EmployeesComponent {
  router;
  employeeRepository;
  idService;
  spinner;
  translate;
  supabaseAuthService;
  modalService;
  loaderService;
  storageService;
  eventService;
  templateModal = null;
  profileEditComponent;
  dialogRef = null;
  viewType = "card";
  filterTags = [];
  totalPages = 0;
  countPerPage = 12;
  pageSizes = [12, 24, 48, 96];
  totalRows = 0;
  dataSource = new MatTableDataSource();
  filters = {};
  buttons = [
    {
      visible: (emp) => this.currentEmployee && this.currentEmployee.isAdmin(),
      class: "",
      value: (emp) => "Edit"
    }
  ];
  resetFilters = new Subject();
  currentEmployee;
  appConstants = AppConstants;
  allEmployees = [];
  selectAll = () => this.dataSource.data.every((emp) => emp.isSelected);
  constructor(router, employeeRepository, idService, spinner, translate, supabaseAuthService, modalService, loaderService, storageService, eventService) {
    this.router = router;
    this.employeeRepository = employeeRepository;
    this.idService = idService;
    this.spinner = spinner;
    this.translate = translate;
    this.supabaseAuthService = supabaseAuthService;
    this.modalService = modalService;
    this.loaderService = loaderService;
    this.storageService = storageService;
    this.eventService = eventService;
  }
  ngOnInit() {
    this.filters.page = 1;
    this.filters.page_size = 15;
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
      if (employee.id) {
        if (employee.role == AppConstants.ROLE_MANAGER) {
          this.filters.employee_id = employee.id;
        }
        this.filters.is_active = true;
        this.initEmployeeData();
        this.fetchAllEmployeesInBackground();
      }
    });
  }
  onChangePageSize(event) {
    this.countPerPage = event.target.value;
    this.initEmployeeData();
  }
  fetchAllEmployeesInBackground() {
    const filtersActive = new EmployeeSearchParams(this.filters);
    filtersActive.is_active = true;
    const filtersInactive = new EmployeeSearchParams(this.filters);
    filtersInactive.is_active = false;
    Promise.all([
      this.employeeRepository.getFilteredEmployees(__spreadProps(__spreadValues({}, filtersActive), { page: 1, page_size: 1e5 })),
      this.employeeRepository.getFilteredEmployees(__spreadProps(__spreadValues({}, filtersInactive), { page: 1, page_size: 1e5 }))
    ]).then(([active, inactive]) => {
      const all = [...active, ...inactive].reduce((acc, emp) => {
        if (emp.id !== void 0 && emp.id !== null) {
          acc[emp.id] = emp;
        }
        return acc;
      }, {});
      this.allEmployees = Object.values(all);
    });
  }
  initEmployeeData() {
    if (this.currentEmployee.role == AppConstants.ROLE_EMPLOYEE) {
      return;
    }
    this.setFilterTags(this.filters);
    this.spinner.show();
    this.loaderService.show();
    this.filters.page_size = this.countPerPage;
    this.employeeRepository.getFilteredEmployeesCount(this.filters).then((count) => {
      this.totalRows = count;
      this.totalPages = Math.ceil(this.totalRows / this.countPerPage);
      this.employeeRepository.getFilteredEmployees(this.filters).then((res) => {
        this.spinner.hide();
        this.loaderService.hide();
        this.dataSource.data = res.map((employeeData) => {
          const employee = new EmployeeSearchDto(employeeData, this.storageService);
          if (employee.id) {
            employee.isSelected = this.allEmployees.find((e) => e.id === employee.id)?.isSelected || false;
          }
          return employee;
        });
      });
    });
  }
  changeFilters($event) {
    this.filters = __spreadValues(__spreadValues({}, this.filters), $event);
    this.initEmployeeData();
  }
  setFilterTags(filters) {
    this.filterTags = [];
    const validKeys = new EmployeeSearchParams(filters);
    this.filterTags = Object.entries(validKeys).filter(([name, value]) => value !== null && value !== void 0 && value !== "" && name != "sort_direction" && name != "sort_by" && name != "page" && name != "page_size" && name != "employee_id").map(([name, value]) => ({ key: name, name: this.getAppFilterName(name), value }));
  }
  getAppFilterName(name) {
    switch (name) {
      case "employee_display_name":
        return "Employee display name";
      case "phone":
        return "Phone";
      case "work_phone":
        return "Work Phone";
      case "email":
        return "Email";
      case "job_position":
        return "Job Position";
      case "department":
        return "Department";
      case "company":
        return "Company";
      case "joining_date":
        return "Joining Date";
      case "reporting_manager_display_name":
        return "Reporting Manager Display Name";
      case "is_active":
        return "Is Active";
      case "search":
        return "Search";
      case "gender":
        return "Gender";
      default:
        return "Unknown Filter";
    }
  }
  canArchive(emp) {
    return true;
  }
  canDelete(emp) {
    return true;
  }
  archiveEmployee(emp) {
    this.spinner.show();
    this.loaderService.show();
    this.employeeRepository.update(emp.id, emp).then(() => {
      this.spinner.hide();
      this.loaderService.hide();
      this.initEmployeeData();
    });
  }
  deleteEmployee(emp) {
    import_sweetalert2.default.fire({
      title: this.translate.instant("Are you sure?"),
      text: this.translate.instant("This action will delete the employee permanently!"),
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: this.translate.instant("Yes, delete it!"),
      cancelButtonText: this.translate.instant("Cancel")
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeRepository.delete(emp.id).then(() => {
          import_sweetalert2.default.fire(this.translate.instant("Deleted!"), this.translate.instant("The employee has been deleted."), "success");
          this.initEmployeeData();
          this.eventService.next(EventConstants.EMPLOYEE_DELETE, { data: emp });
        }).catch((error) => {
          this.eventService.next(EventConstants.EMPLOYEE_DELETE_ERROR, { data: emp, error });
        });
      }
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "Edit": {
        this.openModal(event.data.id);
        break;
      }
      case "Open": {
        this.idService.setId("profile", event.data.id);
        this.router.navigate(["/profile"]);
        this.eventService.next(EventConstants.EMPLOYEE_OPEN, { id: event.data.id });
        break;
      }
      case "Show logs": {
        this.idService.setId("employee-logs", event.data.id);
        this.router.navigate(["/employee-logs"]);
        this.eventService.next(EventConstants.EMPLOYEE_SHOW_LOGS, { id: event.data.id });
        break;
      }
      case "Delete": {
        this.deleteEmployee(event.data);
        break;
      }
      case "select": {
        this.onEmployeeSelect(event.data, event.data.isSelected);
        this.eventService.next(EventConstants.EMPLOYEE_SELECT, { id: event.data.id, isSelected: event.data.isSelected });
        break;
      }
      case "exportSelected": {
        this.onExportExcelClick();
        break;
      }
      case "sort": {
        this.filters.sort_by = event.data.active;
        this.filters.sort_direction = event.data.direction;
        this.initEmployeeData();
        this.eventService.next(EventConstants.EMPLOYEE_SORT, { sort_by: this.filters.sort_by, sort_direction: this.filters.sort_direction });
        break;
      }
    }
  }
  onPageChange(event) {
    this.filters.page = event;
    this.filters.page_size = this.countPerPage;
    this.initEmployeeData();
  }
  clearAllFilters() {
    const validKeys = new EmployeeSearchParams();
    Object.entries(validKeys).filter(([name, value]) => name != "sort_direction" && name != "sort_by" && name != "page" && name != "page_size" && name != "employee_id").forEach(([key, value]) => {
      delete this.filters[key];
    });
    this.initEmployeeData();
    this.resetFilters.next(this.filters);
  }
  clearFilterFromTag(filter) {
    if (this.filters.hasOwnProperty(filter.key)) {
      delete this.filters[filter.key];
    }
    this.initEmployeeData();
    this.resetFilters.next(this.filters);
  }
  onExportExcelClick() {
    const filterCopy = __spreadValues({}, this.filters);
    delete filterCopy.page;
    delete filterCopy.page_size;
    const matchesFilters = (emp) => {
      for (const key in filterCopy) {
        if (filterCopy.hasOwnProperty(key)) {
          if (emp[key] !== filterCopy[key]) {
            return false;
          }
        }
      }
      return emp.isSelected;
    };
    this.exportEmployeesToExcel(this.allEmployees.filter(matchesFilters));
  }
  exportEmployeesToExcel(employees) {
    const normalizedData = employees.map((employee) => ({
      [this.translate.instant("Employee Display Name")]: employee.employee_display_name || "",
      [this.translate.instant("Phone")]: employee.phone || "",
      [this.translate.instant("Email")]: employee.email || "",
      [this.translate.instant("Work Phone")]: employee.work_phone || "",
      [this.translate.instant("Job Position")]: employee.job_position || "",
      [this.translate.instant("Department")]: employee.department || "",
      [this.translate.instant("Company")]: employee.company || "",
      [this.translate.instant("Joining Date")]: employee.joining_date ? new Date(employee.joining_date).toLocaleDateString() : "",
      [this.translate.instant("Reporting Manager Display Name")]: employee.reporting_manager_display_name || "",
      [this.translate.instant("Reporting Manager ID")]: employee.reporting_manager_id || "",
      [this.translate.instant("Is Active")]: employee.is_active ? this.translate.instant("Yes") : this.translate.instant("No")
    }));
    ExcelService.exportArrayToExcel(normalizedData, AppConstants.addTimestamp("employees.xlsx"));
    this.eventService.next(EventConstants.EMPLOYEE_EXPORT_SELECTED, {});
  }
  onImportChildrenExcel(data) {
    this.spinner.show();
    this.loaderService.show();
    this.employeeRepository.upsertRangeWithChildrens(data).then(() => {
      this.spinner.hide();
      this.loaderService.hide();
    });
  }
  openModal(employeeId) {
    this.setEditEmployeeData(employeeId);
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.translate.instant("Employee"),
        template: this.templateModal,
        showFooter: true,
        showCancelButton: true,
        showConfirmButton: true,
        confirmText: this.translate.instant("Save"),
        cancelText: this.translate.instant("Cancel"),
        onConfirm: () => __async(this, null, function* () {
          if (this.profileEditComponent) {
            const success = yield this.profileEditComponent.save();
            if (success) {
              this.initEmployeeData();
              this.eventService.next(EventConstants.EMPLOYEE_EDIT, { id: employeeId });
            }
            return success;
          }
          return false;
        })
      }
    });
  }
  setEditEmployeeData(employeeId) {
    this.idService.setId("profile-edit", employeeId);
  }
  closeModal() {
    this.dialogRef?.close();
  }
  clearForm() {
  }
  onSelectAllChange(isChecked) {
    this.allEmployees.forEach((emp) => {
      emp.isSelected = isChecked;
    });
    this.dataSource.data.forEach((emp) => {
      emp.isSelected = isChecked;
    });
  }
  onEmployeeSelect(employee, isSelected) {
    if (!employee.id)
      return;
    employee.isSelected = isSelected;
    const allEmp = this.allEmployees.find((e) => e.id === employee.id);
    if (allEmp) {
      allEmp.isSelected = isSelected;
    }
  }
  static \u0275fac = function EmployeesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeesComponent, selectors: [["app-employees"]], viewQuery: function EmployeesComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(ProfileEditComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.profileEditComponent = _t.first);
    }
  }, decls: 7, vars: 2, consts: [["navEmployee", ""], ["noResults", ""], ["templateModal", ""], [4, "ngIf", "ngIfElse"], [3, "exportExcel", "importChildrenExcel", "changeViewType", "filtersChange", "clearAllFilters", "selectAllChange", "resetFilters", "viewType", "selectAll"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "action", "refresh", "currentEmployee", "dataSource"], ["paginationType", "datatable-js", 3, "pageSizeChange", "pageChange", "pageSizes", "currentPage", "totalPages", "pageSize", "totalRows"], [1, "d-flex", "flex-column", "card"], [1, "card-header"], [1, "card-body", "p-0"], [3, "selectAllChange", "action", "currentEmployee", "dataSource"], [1, "card-footer"], [1, "d-flex", "w-100", "text-center", "justify-content-center"], [1, ""], [3, "hideSaveButton"]], template: function EmployeesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, EmployeesComponent_ng_template_0_Template, 1, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, EmployeesComponent_div_2_Template, 3, 2, "div", 3)(3, EmployeesComponent_ng_template_3_Template, 4, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(5, EmployeesComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const noResults_r6 = \u0275\u0275reference(4);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.dataSource.data.length > 0)("ngIfElse", noResults_r6);
    }
  }, dependencies: [
    IonicModule,
    CommonModule,
    NgIf,
    NgTemplateOutlet,
    NavEmployeeComponent,
    EmployeeCardViewComponent,
    EmployeeTableViewComponent,
    PaginationComponent,
    TranslatePipe,
    ProfileEditComponent,
    MatSelectModule,
    MatFormFieldModule
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeesComponent, { className: "EmployeesComponent", filePath: "src/app/main/employee/employees/employees.component.ts", lineNumber: 50 });
})();
export {
  EmployeesComponent
};
//# sourceMappingURL=chunk-WZ25IDC4.js.map
