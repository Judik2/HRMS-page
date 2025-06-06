import {
  EmployeeSalaryRepository
} from "./chunk-4UH7ID43.js";
import {
  EmployeeService
} from "./chunk-E3RI4QCV.js";
import {
  LogsInsertDto
} from "./chunk-BV2EUPGA.js";
import {
  LogsRepository
} from "./chunk-6X5DL6OJ.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  CircleEmployeeImgComponent
} from "./chunk-BWIOX5TR.js";
import {
  MatSnackBar
} from "./chunk-JYDETW4E.js";
import {
  AppInputComponent
} from "./chunk-M2EJXGZP.js";
import {
  AppOptions,
  ChangeRequestsInsertDto,
  FormInputComponent,
  IonicModule,
  ModalService
} from "./chunk-CRLS72DG.js";
import {
  ChangeRequestsRepository
} from "./chunk-4MP457FT.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  StorageService,
  Validators,
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
  EmployeeDto,
  EmployeeInsertDto,
  EmployeeUpdateDto
} from "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  Router,
  SupabaseContext,
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  BehaviorSubject,
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  Observable,
  of,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import {
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/types/childrens.dto.ts
var ChildrensRowDto = class {
  birth_date;
  employee_id;
  gender;
  id;
  name;
  constructor(param = null) {
    if (param) {
      this.birth_date = param.birth_date;
      this.employee_id = param.employee_id;
      this.gender = param.gender;
      this.id = param.id;
      this.name = param.name;
    }
  }
};

// src/supabase/repositories/childrens.repository.ts
var ChildrensRepository = class _ChildrensRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "childrens", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function ChildrensRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChildrensRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChildrensRepository, factory: _ChildrensRepository.\u0275fac, providedIn: "root" });
};

// src/app/main/employee/profile/profile-edit/tabs/childrens-edit/childrens-edit.component.ts
function EditChildrensComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "app-input", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r1 = ctx.$implicit;
    const child_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("element", child_r2)("settings", input_r1);
  }
}
function EditChildrensComponent_div_22_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function EditChildrensComponent_div_22_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const child_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSendToApproveClick(child_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "Send to approve"));
  }
}
function EditChildrensComponent_div_22_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const input_r5 = ctx.$implicit;
    const child_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.mapChildRequest(ctx_r3.getRequestForChild(child_r2))[input_r5.field || ""], " ");
  }
}
function EditChildrensComponent_div_22_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "Awaiting approval!"), " ");
  }
}
function EditChildrensComponent_div_22_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "button", 17);
    \u0275\u0275listener("click", function EditChildrensComponent_div_22_ng_container_7_ng_container_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const child_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onApproveClick(ctx_r3.getRequestForChild(child_r2)));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 18);
    \u0275\u0275listener("click", function EditChildrensComponent_div_22_ng_container_7_ng_container_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const child_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onDeclineClick(ctx_r3.getRequestForChild(child_r2)));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "Approve"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "Decline"));
  }
}
function EditChildrensComponent_div_22_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EditChildrensComponent_div_22_ng_container_7_div_1_Template, 3, 1, "div", 11)(2, EditChildrensComponent_div_22_ng_container_7_ng_container_2_Template, 4, 3, "ng-container", 8)(3, EditChildrensComponent_div_22_ng_container_7_ng_container_3_Template, 8, 6, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.childrenInputs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.currentEmployee.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentEmployee.isAdmin());
  }
}
function EditChildrensComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, EditChildrensComponent_div_22_div_1_Template, 2, 2, "div", 11);
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EditChildrensComponent_div_22_button_5_Template, 3, 3, "button", 12);
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275template(7, EditChildrensComponent_div_22_ng_container_7_Template, 4, 3, "ng-container", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.childrenInputs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.calculateAge(child_r2.birth_date), " ", \u0275\u0275pipeBind1(4, 5, "years"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.currentEmployee && !ctx_r3.currentEmployee.isAdmin());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isUnderReview(child_r2));
  }
}
function EditChildrensComponent_ng_container_23_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const input_r7 = ctx.$implicit;
    const childRequest_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.mapChildRequest(childRequest_r8)[input_r7.field || ""], " ");
  }
}
function EditChildrensComponent_ng_container_23_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 16)(2, "button", 20);
    \u0275\u0275listener("click", function EditChildrensComponent_ng_container_23_div_1_ng_container_5_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r9);
      const childRequest_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onApproveClick(childRequest_r8));
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function EditChildrensComponent_ng_container_23_div_1_ng_container_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const childRequest_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onDeclineClick(childRequest_r8));
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "Approve"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "Decline"));
  }
}
function EditChildrensComponent_ng_container_23_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "Awaiting approval!"), " ");
  }
}
function EditChildrensComponent_ng_container_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, EditChildrensComponent_ng_container_23_div_1_div_1_Template, 3, 1, "div", 11);
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EditChildrensComponent_ng_container_23_div_1_ng_container_5_Template, 8, 6, "ng-container", 8)(6, EditChildrensComponent_ng_container_23_div_1_ng_container_6_Template, 4, 3, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const childRequest_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.childrenInputs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r3.calculateAge(ctx_r3.mapChildRequest(childRequest_r8)["birth_date"]), " ", \u0275\u0275pipeBind1(4, 5, "years"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.currentEmployee.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.currentEmployee.isAdmin());
  }
}
function EditChildrensComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EditChildrensComponent_ng_container_23_div_1_Template, 7, 7, "div", 19);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getNewRequestedChanges());
  }
}
function EditChildrensComponent_div_24_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function EditChildrensComponent_div_24_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSaveClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Save"), " ");
  }
}
function EditChildrensComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275template(1, EditChildrensComponent_div_24_button_1_Template, 3, 3, "button", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.currentEmployee && ctx_r3.currentEmployee.isAdmin());
  }
}
var EditChildrensComponent = class _EditChildrensComponent {
  fb;
  storageService;
  supabaseAuthService;
  spinner;
  translate;
  childrensRepository;
  changeRequestsRepository;
  eventService;
  loaderService;
  refreshEmployee;
  hideSaveButton = false;
  refresh = new EventEmitter();
  childRequests = [];
  employee = new EmployeeDto();
  currentEmployee;
  childrenInputs = [
    {
      field: "name",
      type: "text",
      placeholder: "Name",
      id: "name",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline"
    },
    {
      field: "birth_date",
      type: "date",
      placeholder: "Birth date",
      id: "dob",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline"
    },
    {
      field: "gender",
      type: "select",
      placeholder: "Gender",
      id: "gender",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      options: AppOptions.getGenderOptions()
    }
  ];
  constructor(fb, storageService, supabaseAuthService, spinner, translate, childrensRepository, changeRequestsRepository, eventService, loaderService) {
    this.fb = fb;
    this.storageService = storageService;
    this.supabaseAuthService = supabaseAuthService;
    this.spinner = spinner;
    this.translate = translate;
    this.childrensRepository = childrensRepository;
    this.changeRequestsRepository = changeRequestsRepository;
    this.eventService = eventService;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.refreshEmployee?.subscribe((employee) => {
      this.employee = new EmployeeDto(employee, this.storageService);
      this.initChildRequests();
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
  }
  addChildren() {
    this.employee.childrens?.push(new ChildrensRowDto());
  }
  calculateAge(birthDate) {
    if (!birthDate) {
      return "";
    }
    const today = /* @__PURE__ */ new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    if (month < birthDateObj.getMonth() || month === birthDateObj.getMonth() && day < birthDateObj.getDate()) {
      age--;
    }
    return age;
  }
  onApproveClick(childRequest) {
    let index = this.childRequests.indexOf(childRequest);
    if (childRequest.field_name && childRequest.target_table && childRequest.target_id) {
      this.spinner.show();
      this.loaderService.show();
      let child = JSON.parse(childRequest.new_value ?? "");
      if (child.id) {
        this.childrensRepository.update(child.id, child).then(() => {
          if (childRequest && childRequest.id) {
            this.changeRequestsRepository.delete(childRequest.id).then(() => {
              this.childRequests.splice(index, 1);
              this.spinner.hide();
              this.loaderService.hide();
              this.refresh.emit();
              this.eventService.next(EventConstants.CHILD_APPROVED, { child, request: childRequest });
            }).catch((error) => {
              this.spinner.hide();
              this.loaderService.hide();
              this.eventService.next(EventConstants.CHILD_APPROVE_ERROR, { child, request: childRequest, error });
            });
          }
        }).catch((error) => {
          this.spinner.hide();
          this.loaderService.hide();
          this.eventService.next(EventConstants.CHILD_APPROVE_ERROR, { child, request: childRequest, error });
        });
      } else {
        this.childrensRepository.create(child).then(() => {
          if (childRequest && childRequest.id) {
            this.changeRequestsRepository.delete(childRequest.id).then(() => {
              this.childRequests.splice(index, 1);
              this.spinner.hide();
              this.loaderService.hide();
              this.refresh.emit();
              this.eventService.next(EventConstants.CHILD_APPROVED, { child, request: childRequest });
            }).catch((error) => {
              this.spinner.hide();
              this.loaderService.hide();
              this.eventService.next(EventConstants.CHILD_APPROVE_ERROR, { child, request: childRequest, error });
            });
          }
        }).catch((error) => {
          this.spinner.hide();
          this.loaderService.hide();
          this.eventService.next(EventConstants.CHILD_APPROVE_ERROR, { child, request: childRequest, error });
        });
      }
    }
  }
  onDeclineClick(childRequest) {
    let index = this.childRequests.indexOf(childRequest);
    if (childRequest && childRequest.id) {
      this.changeRequestsRepository.delete(childRequest.id).then(() => {
        this.childRequests.splice(index, 1);
        this.spinner.hide();
        this.loaderService.hide();
        this.refresh.emit();
        this.eventService.next(EventConstants.CHILD_DECLINED, { request: childRequest });
      }).catch((error) => {
        this.spinner.hide();
        this.loaderService.hide();
        this.eventService.next(EventConstants.CHILD_DECLINE_ERROR, { request: childRequest, error });
      });
    }
  }
  onSendToApproveClick(child) {
    let oldValue = this.employee.childrens?.find((x) => x.id && x.id == child.id);
    let changeRequest = new ChangeRequestsInsertDto();
    changeRequest.created_at = (/* @__PURE__ */ new Date()).toLocaleDateString();
    changeRequest.display_field_name = this.translate.instant("Children");
    changeRequest.field_name = "children";
    changeRequest.new_value = JSON.stringify(child);
    changeRequest.old_value = oldValue ? JSON.stringify(oldValue) : null;
    changeRequest.requester_info = {
      displayName: this.currentEmployee.getEmployeeName(),
      employeeId: this.currentEmployee.id,
      new_value_display: child.name
    };
    changeRequest.target_id = this.employee.id;
    changeRequest.target_table = "childrens";
    this.changeRequestsRepository.create(changeRequest).then(() => {
      this.initChildRequests();
      this.eventService.next(EventConstants.CHILD_SENT_TO_APPROVE, { child });
    }).catch((error) => {
      this.eventService.next(EventConstants.CHILD_SEND_TO_APPROVE_ERROR, { child, error });
    });
  }
  isUnderReview(child) {
    return this.childRequests && this.childRequests.some((childRequest) => childRequest.old_value && JSON.parse(childRequest.old_value)?.id == child.id);
  }
  initChildRequests() {
    if (this.employee && this.employee.id) {
      this.changeRequestsRepository.getForChildrensCheck("childrens", this.employee.id).then((childRequest) => {
        if (childRequest) {
          this.childRequests = childRequest;
        }
      }).catch((error) => {
        this.eventService.next(EventConstants.CHILD_REQUESTS_LOAD_ERROR, { employeeId: this.employee.id, error });
      });
    }
  }
  getNewRequestedChanges() {
    return this.childRequests.filter((x) => !x.old_value);
  }
  getRequestForChild(child) {
    return this.childRequests.find((childRequest) => childRequest.old_value && JSON.parse(childRequest.old_value)?.id == child.id);
  }
  mapChildRequest(childRequest) {
    return childRequest.new_value && JSON.parse(childRequest.new_value);
  }
  onSaveClick() {
    if (this.employee.childrens && this.employee.childrens.length > 0) {
      this.employee.childrens.forEach((x) => {
        x.employee_id = this.employee.id;
      });
      return this.childrensRepository.upsertRange(this.employee.childrens).then(() => {
        this.spinner.hide();
        this.loaderService.hide();
        this.refresh.emit();
        this.eventService.next(EventConstants.CHILDREN_SAVED, { children: this.employee.childrens });
        return true;
      }).catch(() => {
        this.spinner.hide();
        this.loaderService.hide();
        this.eventService.next(EventConstants.CHILDREN_SAVE_ERROR, { children: this.employee.childrens });
        return false;
      });
    }
    return Promise.resolve(false);
  }
  static \u0275fac = function EditChildrensComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditChildrensComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ChildrensRepository), \u0275\u0275directiveInject(ChangeRequestsRepository), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditChildrensComponent, selectors: [["app-childrens-edit"]], inputs: { refreshEmployee: "refreshEmployee", hideSaveButton: "hideSaveButton" }, outputs: { refresh: "refresh" }, features: [\u0275\u0275ProvidersFeature([])], decls: 25, vars: 18, consts: [[1, "card-header", "d-flex", "align-items-baseline", "mt-2"], [1, "mt-3", "add-btn", "d-flex"], [1, "ms-3", 3, "click"], [1, "fa-solid", "fa-circle-plus"], [1, "card-body"], [1, "row"], [1, "col-2"], ["class", "row mt-2  align-items-baseline", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "card-footer text-end", 4, "ngIf"], [1, "row", "mt-2", "align-items-baseline"], ["class", "col-2", 4, "ngFor", "ngForOf"], ["class", "mt-1", 3, "click", 4, "ngIf"], [3, "element", "settings"], [1, "mt-1", 3, "click"], [1, "col-2", "align-items-center", "objective-form-status", "objective-form-status--orange"], [1, "col-2", "d-flex", "justify-content-between", "align-items-center", "btn-group"], ["mat-raised-button", "", "color", "accent", 1, "mt-1", "btn", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "mr-2", "mt-1", "btn", 3, "click"], ["class", "row mt-2 align-items-baseline", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "mt-1", 3, "click"], ["mat-raised-button", "", "color", "accent", 1, "mr-2", "mt-1", 3, "click"], [1, "card-footer", "text-end"], ["mat-raised-button", "", "color", "primary", "class", "me-auto", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "me-auto", 3, "click"]], template: function EditChildrensComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h5");
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 1)(5, "button", 2);
      \u0275\u0275listener("click", function EditChildrensComponent_Template_button_click_5_listener() {
        return ctx.addChildren();
      });
      \u0275\u0275element(6, "i", 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 4)(8, "div", 5)(9, "div", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 6);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, EditChildrensComponent_div_22_Template, 8, 7, "div", 7)(23, EditChildrensComponent_ng_container_23_Template, 2, 1, "ng-container", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, EditChildrensComponent_div_24_Template, 2, 1, "div", 9);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 8, "Childrens"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "Name"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, "Birth date"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 14, "Gender"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "Age"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.employee == null ? null : ctx.employee.childrens);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.getNewRequestedChanges().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.hideSaveButton);
    }
  }, dependencies: [
    TranslatePipe,
    ReactiveFormsModule,
    AppInputComponent,
    CommonModule,
    NgForOf,
    NgIf,
    MatButtonModule,
    MatButton
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditChildrensComponent, { className: "EditChildrensComponent", filePath: "src/app/main/employee/profile/profile-edit/tabs/childrens-edit/childrens-edit.component.ts", lineNumber: 35 });
})();

// src/app/main/employee/profile/profile-edit/tabs/personal-info-edit/personal-info-edit.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/supabase/types/employee-salary.dto.ts
var EmployeeSalaryInsertDto = class {
  create_at;
  employee_id;
  id;
  salary;
  constructor(param = null) {
    if (param) {
      this.create_at = param.create_at;
      this.employee_id = param.employee_id;
      this.id = param.id;
      this.salary = param.salary;
    }
  }
};

// src/app/main/employee/profile/profile-edit/tabs/personal-info-edit/personal-info-edit.component.ts
var _c0 = (a0) => ({ "col-12": true, "col-lg-6 col-sm-12": a0 });
function PersonalInfoEditComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "app-form-input", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r1 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, input_r1.formControlName !== ""));
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r1.formControlName)("settings", input_r1);
  }
}
function PersonalInfoEditComponent_div_0_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function PersonalInfoEditComponent_div_0_div_5_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onSaveClick());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "Save"), " ");
  }
}
function PersonalInfoEditComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, PersonalInfoEditComponent_div_0_div_5_button_1_Template, 3, 3, "button", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.currentEmployee && ctx_r2.currentEmployee.isAdmin());
  }
}
function PersonalInfoEditComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "form", 2)(2, "div", 3);
    \u0275\u0275template(3, PersonalInfoEditComponent_div_0_div_3_Template, 2, 5, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "hr", 5);
    \u0275\u0275template(5, PersonalInfoEditComponent_div_0_div_5_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r2.profileForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.formInputs);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.hideSaveButton);
  }
}
var PersonalInfoEditComponent = class _PersonalInfoEditComponent {
  fb;
  modalService;
  employeeRepository;
  salaryRepository;
  spinner;
  snackBar;
  logsRepository;
  employeeService;
  translate;
  childrensRepository;
  supabaseService;
  changeRequestsRepository;
  supabaseAuthService;
  storageService;
  loaderService;
  eventService;
  employee;
  currentEmployee;
  refreshEmployee;
  hideSaveButton = false;
  refresh = new EventEmitter();
  appConstants = AppConstants;
  profileForm;
  // Dropdown options
  client;
  formInputs = [
    {
      formControlName: "display_name",
      type: "text",
      label: "Display Name",
      id: "display_name",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "email",
      type: "email",
      label: "Email",
      id: "email",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "phone",
      type: "tel",
      label: "Phone",
      id: "phone",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "department",
      type: "text",
      label: "Department",
      id: "department",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "division",
      type: "text",
      label: "Division",
      id: "division",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "company",
      type: "text",
      label: "Company",
      id: "company",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "date_of_birthday",
      type: "date",
      label: "Date of Birth",
      id: "dob",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "gender",
      type: "select",
      label: "Gender",
      id: "gender",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      options: AppOptions.getGenderOptions(),
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "city",
      type: "text",
      label: "City",
      id: "city",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      additional: {
        isCurrentEmployeeAdmin: () => {
          return this.currentEmployee && this.currentEmployee.isAdmin();
        },
        isEmployeeAdmin: () => {
        },
        requesterInfo: {},
        targetTable: "employee",
        targetId: 0,
        isApprove: true
      }
    },
    {
      formControlName: "address",
      type: "textarea",
      label: "Address",
      id: "address",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      additional: {
        isCurrentEmployeeAdmin: () => {
          return this.currentEmployee && this.currentEmployee.isAdmin();
        },
        isEmployeeAdmin: () => {
        },
        requesterInfo: {},
        targetTable: "employee",
        targetId: 0,
        isApprove: true
      }
    },
    {
      formControlName: "marital_status",
      type: "autocomplete",
      label: "Marital Status",
      id: "marital_status",
      labelClass: "app-label",
      inputClass: "app-autocomplete w-100",
      options: AppOptions.getMaritalStatusOptions(),
      formFieldClass: "w-100",
      appearance: "outline",
      additional: {
        isCurrentEmployeeAdmin: () => {
          return this.currentEmployee && this.currentEmployee.isAdmin();
        },
        isEmployeeAdmin: () => {
        },
        requesterInfo: {},
        targetTable: "employee",
        targetId: 0,
        isApprove: true
      }
    },
    {
      formControlName: "job_position",
      type: "text",
      label: "Job Position",
      id: "job_position",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "salary",
      type: "number",
      label: "Salary",
      id: "salary",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "joining_date",
      type: "date",
      label: "Date Joining",
      id: "joining_date",
      labelClass: "app-label",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "role",
      type: "select",
      label: "App role",
      id: "marital_status",
      labelClass: "app-label",
      inputClass: " w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      options: AppOptions.getRolesOptions(),
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "reporting_manager_id",
      type: "autocomplete",
      label: "Manager",
      id: "reporting_manager_id",
      labelClass: "app-label",
      inputClass: "app-autocomplete w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      options: new Observable(),
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    },
    {
      formControlName: "is_2fa_enabled",
      type: "switch",
      label: "Is 2fa enabled?",
      id: "is_2fa_enabled",
      labelClass: "app-label",
      inputClass: "form-check-input",
      disabled: () => {
        return this.currentEmployee && !this.currentEmployee.isAdmin();
      }
    }
  ];
  constructor(fb, modalService, employeeRepository, salaryRepository, spinner, snackBar, logsRepository, employeeService, translate, childrensRepository, supabaseService, changeRequestsRepository, supabaseAuthService, storageService, loaderService, eventService) {
    this.fb = fb;
    this.modalService = modalService;
    this.employeeRepository = employeeRepository;
    this.salaryRepository = salaryRepository;
    this.spinner = spinner;
    this.snackBar = snackBar;
    this.logsRepository = logsRepository;
    this.employeeService = employeeService;
    this.translate = translate;
    this.childrensRepository = childrensRepository;
    this.supabaseService = supabaseService;
    this.changeRequestsRepository = changeRequestsRepository;
    this.supabaseAuthService = supabaseAuthService;
    this.storageService = storageService;
    this.loaderService = loaderService;
    this.eventService = eventService;
    this.profileForm = this.fb.group({
      avatar_name: [""],
      avatar_url: [""],
      role: [""],
      display_name: ["", [Validators.required, Validators.maxLength(200)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone: ["", [Validators.required, Validators.maxLength(15)]],
      department: [""],
      division: [""],
      company: [""],
      date_of_birthday: [null],
      gender: [""],
      address: [""],
      city: [""],
      childrens: this.fb.array([]),
      marital_status: [""],
      job_position: [""],
      salary: [0],
      reporting_manager_id: [null],
      joining_date: [(/* @__PURE__ */ new Date()).toDateString()],
      is_2fa_enabled: []
    });
    this.client = supabaseService.getClient();
  }
  ngAfterViewInit() {
    this.initReportingManagers();
    this.refreshEmployee?.subscribe((employee) => {
      this.employee = new EmployeeDto(employee, this.storageService);
      this.formInputs.filter((x) => x.additional && x.additional.isApprove).forEach((x) => {
        x.additional.targetId = employee.id;
        x.additional.requesterInfo = {
          displayName: this.employee.getEmployeeName(),
          employeeId: employee.id
        };
        x.additional.isEmployeeAdmin = () => this.employee.isAdmin();
      });
      if (employee.id) {
        this.profileForm.patchValue(employee);
      }
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
  }
  initReportingManagers() {
    this.employeeRepository.getManagers().then((employees) => {
      let input = this.formInputs.find((x) => x.label == "Manager");
      if (input) {
        input.options = of(employees.filter((x) => x.email != this.employee.email || x.id != this.employee.id).map((x) => ({
          value: x.id,
          label: x.display_name
        })));
      }
    });
  }
  onSaveClick() {
    if (this.employee && this.employee.id && this.employee.id !== 0) {
      if (this.profileForm.valid) {
        const formData = this.profileForm.value;
        this.spinner.show();
        this.loaderService.show();
        return this.employeeRepository.update(this.employee.id, new EmployeeUpdateDto(formData)).then(() => {
          this.updateSalary(formData);
          this.spinner.hide();
          this.loaderService.hide();
          this.snackBar.open(this.translate.instant("Employee data saved!"), this.translate.instant("Close"), { duration: 2e3 });
          const logsRequest = new LogsInsertDto({
            description: this.translate.instant("Employee info was updated"),
            employee_id: this.employee.id,
            event_time: (/* @__PURE__ */ new Date()).toJSON(),
            event_type: "EMPLOYEE_INFO_EDITED"
          });
          this.eventService.next(EventConstants.PERSONAL_INFO_UPDATED, { employee: this.employee, formData });
          return this.logsRepository.create(logsRequest).then(() => true);
        }).catch((err) => {
          this.spinner.hide();
          this.loaderService.hide();
          this.eventService.next(EventConstants.PERSONAL_INFO_UPDATE_ERROR, { employee: this.employee, error: err });
          import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Server error. Please contact with administrator."), "error");
          return false;
        });
      } else {
        this.profileForm.markAllAsTouched();
        return Promise.resolve(false);
      }
    } else {
      if (this.profileForm.valid) {
        const formData = this.profileForm.value;
        this.spinner.show();
        this.loaderService.show();
        return this.employeeRepository.create(new EmployeeInsertDto(formData)).then(() => {
          this.updateSalary(formData);
          this.spinner.hide();
          this.loaderService.hide();
          this.snackBar.open(this.translate.instant("Employee was created!"), this.translate.instant("Close"), { duration: 2e3 });
          this.eventService.next(EventConstants.PERSONAL_INFO_CREATED, { formData });
          return true;
        }).catch((err) => {
          this.spinner.hide();
          this.loaderService.hide();
          this.eventService.next(EventConstants.PERSONAL_INFO_CREATE_ERROR, { error: err });
          return false;
        });
      } else {
        this.profileForm.markAllAsTouched();
        return Promise.resolve(false);
      }
    }
  }
  updateSalary(formData) {
    if (!this.employee.isSameSalary(formData.salary) && formData.salary != null) {
      let salary = new EmployeeSalaryInsertDto();
      salary.salary = formData.salary;
      salary.create_at = (/* @__PURE__ */ new Date()).toDateString();
      salary.employee_id = this.employee.id;
      this.spinner.show();
      this.loaderService.show();
      this.salaryRepository.create(salary).then(() => {
        this.spinner.hide();
        this.loaderService.hide();
      });
    }
  }
  static \u0275fac = function PersonalInfoEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonalInfoEditComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(EmployeeSalaryRepository), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(LogsRepository), \u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(ChildrensRepository), \u0275\u0275directiveInject(SupabaseContext), \u0275\u0275directiveInject(ChangeRequestsRepository), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonalInfoEditComponent, selectors: [["app-personal-info-edit"]], inputs: { refreshEmployee: "refreshEmployee", hideSaveButton: "hideSaveButton" }, outputs: { refresh: "refresh" }, decls: 1, vars: 1, consts: [["class", "profile-edit-form", 4, "ngIf"], [1, "profile-edit-form"], [3, "formGroup"], [1, "row"], ["class", "mt-3", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mt-5", "mb-3"], ["class", "card-footer text-end", 4, "ngIf"], [1, "mt-3", 3, "ngClass"], [3, "formControlName", "settings"], [1, "card-footer", "text-end"], ["mat-raised-button", "", "color", "primary", "class", "me-auto", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "me-auto", 3, "click"]], template: function PersonalInfoEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PersonalInfoEditComponent_div_0_Template, 6, 3, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.employee && ctx.employee.id);
    }
  }, dependencies: [
    IonicModule,
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    FormInputComponent,
    TranslatePipe,
    MatButtonModule,
    MatButton
  ], styles: ["\n\nh4[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--main-color);\n}\n/*# sourceMappingURL=personal-info-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonalInfoEditComponent, { className: "PersonalInfoEditComponent", filePath: "src/app/main/employee/profile/profile-edit/tabs/personal-info-edit/personal-info-edit.component.ts", lineNumber: 50 });
})();

// src/app/main/employee/profile/profile-edit/profile-edit.component.ts
var _c02 = ["personalInfoEdit"];
var _c1 = ["childrensInfoEdit"];
var _c2 = (a0) => ({ "active": a0 });
function ProfileEditComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 17)(1, "a", 18);
    \u0275\u0275listener("click", function ProfileEditComponent_li_12_Template_a_click_1_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeTab(tab_r3));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", tab_r3.href, \u0275\u0275sanitizeUrl)("ngClass", \u0275\u0275pureFunction1(5, _c2, tab_r3.active));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, tab_r3.label), " ");
  }
}
function ProfileEditComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "Employee not found"), " ");
  }
}
var ProfileEditComponent = class _ProfileEditComponent {
  employeeRepository;
  supabaseAuthService;
  storageService;
  spinner;
  router;
  idService;
  eventService;
  loaderService;
  hideSaveButton = false;
  personalInfoEdit;
  childrensInfoEdit;
  tabs = [
    { label: "Personal Info", active: true, href: "#edit-personal-info" },
    { label: "Family info", active: false, href: "#edit-family-info" }
  ];
  searchShow = false;
  profileEmployee;
  employeeId = null;
  refreshEmployee = new BehaviorSubject({});
  currentEmployee;
  constructor(employeeRepository, supabaseAuthService, storageService, spinner, router, idService, eventService, loaderService) {
    this.employeeRepository = employeeRepository;
    this.supabaseAuthService = supabaseAuthService;
    this.storageService = storageService;
    this.spinner = spinner;
    this.router = router;
    this.idService = idService;
    this.eventService = eventService;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.idService.getId("profile-edit").subscribe((id) => {
      this.employeeId = id;
      this.initEmployee();
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
  }
  initEmployee() {
    if (!this.employeeId) {
      return;
    }
    this.spinner.show();
    this.loaderService.show();
    this.employeeRepository.getByIdForProfile(this.employeeId).then((employee) => {
      this.spinner.hide();
      this.loaderService.hide();
      if (employee) {
        this.profileEmployee = new EmployeeDto(employee, this.storageService);
        this.refreshEmployee.next(employee);
        this.eventService.next(EventConstants.PROFILE_EMPLOYEE_LOADED, { employeeId: this.employeeId });
      }
    }).catch((error) => {
      this.spinner.hide();
      this.loaderService.hide();
      this.eventService.next(EventConstants.PROFILE_EMPLOYEE_LOAD_ERROR, { employeeId: this.employeeId, error });
    });
  }
  changeTab(tab) {
    this.tabs.forEach((x) => x.active = false);
    tab.active = true;
  }
  getActiveTabLabel() {
    return this.tabs.find((x) => x.active)?.label;
  }
  onUploadAvatar(filePath) {
    if (this.personalInfoEdit) {
      this.personalInfoEdit.profileForm.patchValue({ avatar_name: filePath });
      this.personalInfoEdit.profileForm.patchValue({ avatar_url: null });
    }
  }
  onDeleteAvatar() {
    if (this.personalInfoEdit) {
      this.personalInfoEdit.profileForm.patchValue({ avatar_name: "" });
      this.personalInfoEdit.profileForm.patchValue({ avatar_url: "" });
    }
  }
  save() {
    return new Promise((resolve) => {
      const activeTab = this.tabs.find((x) => x.active);
      if (!activeTab) {
        resolve(false);
        return;
      }
      switch (activeTab.label) {
        case "Personal Info":
          if (this.personalInfoEdit) {
            const result = this.personalInfoEdit.onSaveClick();
            Promise.resolve(result).then((success) => {
              if (success) {
                this.eventService.next(EventConstants.PERSONAL_INFO_UPDATED, { employeeId: this.employeeId });
              } else {
                this.eventService.next(EventConstants.PERSONAL_INFO_UPDATE_ERROR, { employeeId: this.employeeId });
              }
              resolve(success);
            });
          } else {
            resolve(false);
          }
          break;
        case "Family info":
          if (this.childrensInfoEdit) {
            const result = this.childrensInfoEdit.onSaveClick();
            Promise.resolve(result).then((success) => {
              if (success) {
                this.eventService.next(EventConstants.CHILDREN_SAVED, { employeeId: this.employeeId });
              } else {
                this.eventService.next(EventConstants.CHILDREN_SAVE_ERROR, { employeeId: this.employeeId });
              }
              resolve(success);
            });
          } else {
            resolve(false);
          }
          break;
        default:
          resolve(false);
      }
    });
  }
  static \u0275fac = function ProfileEditComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileEditComponent)(\u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileEditComponent, selectors: [["app-profile-edit"]], viewQuery: function ProfileEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.personalInfoEdit = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.childrensInfoEdit = _t.first);
    }
  }, inputs: { hideSaveButton: "hideSaveButton" }, decls: 25, vars: 10, consts: [["personalInfoEdit", ""], ["childrensInfoEdit", ""], [1, "card", "flex-fill"], [1, "card-body"], [1, "profile-basic-card"], [1, "profile-basic-info"], ["size", "avatar-xxl", 3, "onUpload", "onDelete", "isEditable", "employee"], [1, "user-name"], [1, "bg-white", "rounded"], ["role", "tablist", 1, "nav", "nav-tabs", "nav-tabs-bottom", "nav-justified", "flex-wrap", "mb-3"], ["class", "nav-item", "role", "presentation", 4, "ngFor", "ngForOf"], [1, "tab-content"], ["id", "edit-personal-info", "role", "tabpanel", 1, "tab-pane", "show", "active"], [1, "card", "border-0"], [3, "refresh", "hideSaveButton", "refreshEmployee"], ["id", "edit-family-info", "role", "tabpanel", 1, "tab-pane"], ["class", "card flex-fill", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["data-bs-toggle", "tab", "aria-selected", "true", "role", "tab", 1, "nav-link", "active", "fw-medium", "d-flex", "align-items-center", "justify-content-center", 3, "click", "href", "ngClass"]], template: function ProfileEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "app-circle-employee-img", 6);
      \u0275\u0275listener("onUpload", function ProfileEditComponent_Template_app_circle_employee_img_onUpload_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onUploadAvatar($event));
      })("onDelete", function ProfileEditComponent_Template_app_circle_employee_img_onDelete_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDeleteAvatar());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "a");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h4");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(10, "div", 8)(11, "ul", 9);
      \u0275\u0275template(12, ProfileEditComponent_li_12_Template, 4, 7, "li", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 3)(17, "app-personal-info-edit", 14, 0);
      \u0275\u0275listener("refresh", function ProfileEditComponent_Template_app_personal_info_edit_refresh_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.initEmployee());
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(19, "div", 15)(20, "div", 13)(21, "div", 3)(22, "app-childrens-edit", 14, 1);
      \u0275\u0275listener("refresh", function ProfileEditComponent_Template_app_childrens_edit_refresh_22_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.initEmployee());
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(24, ProfileEditComponent_div_24_Template, 4, 3, "div", 16);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("isEditable", true)("employee", ctx.profileEmployee);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.profileEmployee == null ? null : ctx.profileEmployee.display_name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.profileEmployee == null ? null : ctx.profileEmployee.job_position);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.tabs);
      \u0275\u0275advance(5);
      \u0275\u0275property("hideSaveButton", ctx.hideSaveButton)("refreshEmployee", ctx.refreshEmployee);
      \u0275\u0275advance(5);
      \u0275\u0275property("hideSaveButton", ctx.hideSaveButton)("refreshEmployee", ctx.refreshEmployee);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.profileEmployee);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    PersonalInfoEditComponent,
    TranslatePipe,
    EditChildrensComponent,
    MatButtonModule,
    CircleEmployeeImgComponent
  ], styles: ["\n\n.profile-basic-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  gap: 50px;\n}\n.profile-basic-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: unset;\n  gap: 15px;\n}\n.profile-basic-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  color: var(--primary-color);\n}\n.profile-basic-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=profile-edit.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileEditComponent, { className: "ProfileEditComponent", filePath: "src/app/main/employee/profile/profile-edit/profile-edit.component.ts", lineNumber: 34 });
})();

export {
  ProfileEditComponent
};
//# sourceMappingURL=chunk-23GWIPYR.js.map
