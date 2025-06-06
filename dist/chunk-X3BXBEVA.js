import {
  ObjectiveTemplatesRepository
} from "./chunk-DVJDGQAH.js";
import {
  CommentsComponent,
  CoreConstants
} from "./chunk-LKZIPKI3.js";
import "./chunk-UJWO3UBD.js";
import {
  ObjectivesRepository
} from "./chunk-BRZVXPA7.js";
import {
  ObjectiveFormDto,
  ObjectiveFormRepository,
  ObjectiveFormUpdateDto
} from "./chunk-S5OCFGQY.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  MatTableDataSource,
  TableComponent
} from "./chunk-X45EM66I.js";
import "./chunk-BWIOX5TR.js";
import {
  MatSnackBar
} from "./chunk-JYDETW4E.js";
import {
  AppInputComponent
} from "./chunk-M2EJXGZP.js";
import {
  AppOptions,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  MatButton,
  MatButtonModule,
  ReactiveFormsModule,
  StorageService,
  Validators
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
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  ActivatedRoute,
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  SupabaseContext,
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  PercentPipe,
  forkJoin,
  of,
  ɵsetClassDebugInfo,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/main/performance/objective-form/objective-form.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/supabase/types/objective-form-comments.dto.ts
var ObjectiveFormCommentsInsertDto = class {
  comment;
  created_at;
  employee_id;
  id;
  is_issue_request;
  objective_form_id;
  constructor(param = null) {
    if (param) {
      this.comment = param.comment;
      this.created_at = param.created_at;
      this.employee_id = param.employee_id;
      this.id = param.id;
      this.is_issue_request = param.is_issue_request;
      this.objective_form_id = param.objective_form_id;
    }
  }
};

// src/supabase/repositories/objective-form-comments.repository.ts
var ObjectiveFormCommentsRepository = class _ObjectiveFormCommentsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "objective_form_comments", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByIdWithEmployee(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, employee(*)").eq("id", id).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function ObjectiveFormCommentsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveFormCommentsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ObjectiveFormCommentsRepository, factory: _ObjectiveFormCommentsRepository.\u0275fac, providedIn: "root" });
};

// src/app/main/performance/objective-form/objective-form.component.ts
var _c0 = (a0, a1, a2) => ({ "completed": a0, "current": a1, "pending": a2 });
var _c1 = (a0) => ({ "completed": a0 });
function ObjectiveFormComponent_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveObjectives());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Save"), " ");
  }
}
function ObjectiveFormComponent_div_2_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onReassignClick("reassign"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Reassign"), " ");
  }
}
function ObjectiveFormComponent_div_2_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onApproveClick("approve"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Approve"), " ");
  }
}
function ObjectiveFormComponent_div_2_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onApproveClick("send_to_approve"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Send to approve"), " ");
  }
}
function ObjectiveFormComponent_div_2_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStartYearlyProcessClick("start_yearly"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Start yearly process"), " ");
  }
}
function ObjectiveFormComponent_div_2_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onSendToPayrollClick("send_to_payroll"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Send to payroll"), " ");
  }
}
function ObjectiveFormComponent_div_2_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onFinalizeClick("finalize"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Finalize"), " ");
  }
}
function ObjectiveFormComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "b")(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.assignToManager());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "b")(9, "span", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 25);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_div_14_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.assignToEmployee());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "Assign Form to:"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "Me"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "or"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r2.objectiveFormData.employee == null ? null : ctx_r2.objectiveFormData.employee.hebrew_display_name) ? ctx_r2.objectiveFormData.employee == null ? null : ctx_r2.objectiveFormData.employee.hebrew_display_name : ctx_r2.objectiveFormData.employee == null ? null : ctx_r2.objectiveFormData.employee.display_name, " ");
  }
}
function ObjectiveFormComponent_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, ctx_r2.appConstants.getFormStepNameByKey(ctx_r2.objectiveFormData.step)), "");
  }
}
function ObjectiveFormComponent_div_2_ng_container_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
  if (rf & 2) {
    const i_r11 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c1, ctx_r2.isCompleted(i_r11)));
  }
}
function ObjectiveFormComponent_div_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ObjectiveFormComponent_div_2_ng_container_19_div_1_Template, 1, 3, "div", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275element(3, "div", 29);
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const status_r12 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r11 > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c0, ctx_r2.isCompleted(i_r11), ctx_r2.isCurrent(i_r11), !ctx_r2.isCompleted(i_r11) && !ctx_r2.isCurrent(i_r11)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, status_r12.name));
  }
}
function ObjectiveFormComponent_div_2_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37);
    \u0275\u0275listener("click", function ObjectiveFormComponent_div_2_div_21_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const section_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAddObjectiveClick(section_r15.type));
    });
    \u0275\u0275element(2, "i", 38);
    \u0275\u0275elementEnd()();
  }
}
function ObjectiveFormComponent_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275template(2, ObjectiveFormComponent_div_2_div_21_div_2_Template, 3, 0, "div", 34);
    \u0275\u0275elementStart(3, "h5")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-table", 35);
    \u0275\u0275listener("action", function ObjectiveFormComponent_div_2_div_21_Template_app_table_action_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, section_r15.name));
    \u0275\u0275advance(3);
    \u0275\u0275property("isObjectiveFormTable", true)("columns", ctx_r2.columns)("dataSource", section_r15.data)("footerData", section_r15.footerData)("rowFormGroups", ctx_r2.rowFormGroups);
  }
}
function ObjectiveFormComponent_div_2_div_23_app_input_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-input", 45);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("element", ctx_r2.objectiveFormData)("settings", ctx_r2.quantitiesLoadPercentSettings);
  }
}
function ObjectiveFormComponent_div_2_div_23_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, (ctx_r2.objectiveFormData.quantities_load_percent ? ctx_r2.objectiveFormData.quantities_load_percent : 0) / 100, "1.0-2"), " ");
  }
}
function ObjectiveFormComponent_div_2_div_23_app_input_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-input", 45);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("element", ctx_r2.objectiveFormData)("settings", ctx_r2.qualitiesLoadPercentSettings);
  }
}
function ObjectiveFormComponent_div_2_div_23_ng_container_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, (ctx_r2.objectiveFormData.qualities_load_percent ? ctx_r2.objectiveFormData.qualities_load_percent : 0) / 100, "1.0-2"), " ");
  }
}
function ObjectiveFormComponent_div_2_div_23_app_input_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-input", 45);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("element", ctx_r2.objectiveFormData)("settings", ctx_r2.managerAssessmentLoadPercentSettings);
  }
}
function ObjectiveFormComponent_div_2_div_23_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, (ctx_r2.objectiveFormData.manager_assessment_load_percent ? ctx_r2.objectiveFormData.manager_assessment_load_percent : 0) / 100, "1.0-2"), " ");
  }
}
function ObjectiveFormComponent_div_2_div_23_app_input_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-input", 46);
    \u0275\u0275listener("change", function ObjectiveFormComponent_div_2_div_23_app_input_59_Template_app_input_change_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.checkManagerWeightedScore());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("element", ctx_r2.objectiveFormData)("settings", ctx_r2.managerAssessmentWeightedScoreSettings);
  }
}
function ObjectiveFormComponent_div_2_div_23_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, (ctx_r2.objectiveFormData.manager_assessment_weighted_score ? ctx_r2.objectiveFormData.manager_assessment_weighted_score : 0) / 100, "1.0-2"), " ");
  }
}
function ObjectiveFormComponent_div_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div")(2, "h5")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 39)(8, "table", 40)(9, "thead")(10, "tr");
    \u0275\u0275element(11, "th");
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "tbody")(22, "tr")(23, "td")(24, "b");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275template(28, ObjectiveFormComponent_div_2_div_23_app_input_28_Template, 1, 2, "app-input", 41)(29, ObjectiveFormComponent_div_2_div_23_ng_container_29_Template, 3, 4, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "tr")(37, "td")(38, "b");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275template(42, ObjectiveFormComponent_div_2_div_23_app_input_42_Template, 1, 2, "app-input", 41)(43, ObjectiveFormComponent_div_2_div_23_ng_container_43_Template, 3, 4, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "td")(52, "b");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "td");
    \u0275\u0275template(56, ObjectiveFormComponent_div_2_div_23_app_input_56_Template, 1, 2, "app-input", 41)(57, ObjectiveFormComponent_div_2_div_23_ng_container_57_Template, 3, 4, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275template(59, ObjectiveFormComponent_div_2_div_23_app_input_59_Template, 1, 2, "app-input", 43)(60, ObjectiveFormComponent_div_2_div_23_ng_container_60_Template, 3, 4, "ng-container", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "percent");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "tr", 44)(65, "td")(66, "b");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "td");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "percent");
    \u0275\u0275elementEnd();
    \u0275\u0275element(72, "td");
    \u0275\u0275elementStart(73, "td");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "percent");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 23, "Calculated annual grant"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 25, "Percentage Loading"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 27, "Score"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 29, "Weighted Score"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 31, "Quantities objectives"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isManager() && ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isManager() || !ctx_r2.canEdit());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 33, ctx_r2.getQuantityWeightedScore() / 100, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 36, ctx_r2.calculateWeightedScore(ctx_r2.objectiveFormData.quantities_load_percent, ctx_r2.getQuantityWeightedScore()) / 100, "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 39, "Qualities objectives"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isManager() && ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isManager() || !ctx_r2.canEdit());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 41, ctx_r2.getQualityWeightedScore() / 100, "1.0-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 44, ctx_r2.calculateWeightedScore(ctx_r2.objectiveFormData.qualities_load_percent, ctx_r2.getQualityWeightedScore()) / 100, "1.0-2"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 47, "Managers Assessment"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isManager() && ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isManager() || !ctx_r2.canEdit());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.canEdit());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(63, 49, ctx_r2.calculateWeightedScore(ctx_r2.objectiveFormData.manager_assessment_load_percent, ctx_r2.objectiveFormData.manager_assessment_weighted_score) / 100, "1.0-2"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 52, "Total"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 54, ctx_r2.getLoadPercentageSum() / 100, "1.0-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 57, ctx_r2.getWeightedScoreSum() / 100, "1.0-2"));
  }
}
function ObjectiveFormComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275template(7, ObjectiveFormComponent_div_2_button_7_Template, 3, 4, "button", 7)(8, ObjectiveFormComponent_div_2_button_8_Template, 3, 4, "button", 8)(9, ObjectiveFormComponent_div_2_button_9_Template, 3, 4, "button", 8)(10, ObjectiveFormComponent_div_2_button_10_Template, 3, 4, "button", 8)(11, ObjectiveFormComponent_div_2_button_11_Template, 3, 4, "button", 8)(12, ObjectiveFormComponent_div_2_button_12_Template, 3, 4, "button", 8)(13, ObjectiveFormComponent_div_2_button_13_Template, 3, 4, "button", 9)(14, ObjectiveFormComponent_div_2_div_14_Template, 14, 12, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 11)(16, "div", 12);
    \u0275\u0275template(17, ObjectiveFormComponent_div_2_div_17_Template, 4, 3, "div", 13);
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, ObjectiveFormComponent_div_2_ng_container_19_Template, 7, 9, "ng-container", 15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 16);
    \u0275\u0275template(21, ObjectiveFormComponent_div_2_div_21_Template, 9, 9, "div", 17);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275template(23, ObjectiveFormComponent_div_2_div_23_Template, 76, 60, "div", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "app-comments", 19);
    \u0275\u0275listener("action", function ObjectiveFormComponent_div_2_Template_app_comments_action_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(5, 17, "Applicable form for"), " ", ctx_r2.objectiveFormData.employee == null ? null : ctx_r2.objectiveFormData.employee.getEmployeeName(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.isApproveStep() || ctx_r2.isSendToApproveStep()) && ctx_r2.isManager());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isApproveStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSendToApproveStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isStartYearlyStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isSendToPayrollStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isFinalizeStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAssignStep());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.objectiveFormData.step);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.timelineStatuses);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(22, 19, ctx_r2.sections));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isAnnualGrandVisible());
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r2.objectiveFormData.status)("isRejectStep", ctx_r2.isRejectStep())("comments", ctx_r2.objectiveFormData.comments);
  }
}
var ObjectiveFormComponent = class _ObjectiveFormComponent {
  fb;
  idService;
  objectiveFormRepository;
  objectiveRepository;
  objectiveTemplatesRepository;
  objectiveFormCommentsRepository;
  supabaseAuthService;
  storageService;
  snackBar;
  translate;
  spinner;
  modalService;
  activatedRoute;
  commentsRepository;
  employeeRepository;
  cdr;
  eventService;
  loaderService;
  loading = false;
  currentEmployee = new EmployeeDto();
  objectiveFormData = new ObjectiveFormDto();
  objectiveFormId;
  appConstants = AppConstants;
  objectivesToCreate = [];
  objectivesToDelete = [];
  objectivesToUpdate = [];
  notifications = [];
  sections = new BehaviorSubject([]);
  formInputs = [
    { formControlName: "criteria", type: "autocomplete", placeholder: "Criteria", id: "criteria", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", options: AppOptions.getObjectivesCriteriasOptions(), disabled: (form) => {
      return this.isFillYearlyStage() && this.isEmployee();
    } },
    { formControlName: "type", type: "select", placeholder: "Objective Type", id: "type", labelClass: "app-label", inputClass: " w-100", options: AppOptions.getObjectiveTypes(), disabled: (form) => {
      return form instanceof FormGroup && form?.get("template_id")?.value || this.isFillYearlyStage() && this.isEmployee();
    } },
    { formControlName: "load_percentage", type: "number", isNegativeNotAllowed: true, placeholder: "Load Percentage", id: "load_percentage", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return this.isFillYearlyStage() && this.isEmployee();
    } },
    { formControlName: "unit_of_measurement", type: "select", placeholder: "Unit of Measurement", id: "unit_of_measurement", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", options: AppOptions.getUnitOfMeasurement(), disabled: (form) => {
      return form instanceof FormGroup && form?.get("template_id")?.value || this.isFillYearlyStage() && this.isEmployee();
    } },
    { formControlName: "weight", type: "number", isNegativeNotAllowed: true, placeholder: "Weight", id: "weight", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return form instanceof FormGroup && form?.get("template_id")?.value || this.isFillYearlyStage() && this.isEmployee();
    } },
    { formControlName: "yearly_goal", type: "number", isNegativeNotAllowed: true, placeholder: "Yearly Goal", id: "yearly_goal", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return form instanceof FormGroup && form?.get("template_id")?.value || this.isFillYearlyStage() && this.isEmployee();
    } },
    { formControlName: "yearly_performance", type: "number", isNegativeNotAllowed: true, placeholder: "Yearly Performance", id: "yearly_performance", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return this.objectiveFormData.step == AppConstants.INITIATE_STEP;
    } },
    { formControlName: "performance_percentage", type: "number", isNegativeNotAllowed: true, placeholder: "Performance Percentage", id: "performance_percentage", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return true;
    } },
    { formControlName: "weighted_score", type: "number", isNegativeNotAllowed: true, placeholder: "Weighted Score", id: "weighted_score", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return true;
    } },
    { formControlName: "comments", type: "textarea", placeholder: "Comments", id: "comments", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return form instanceof FormGroup && form?.get("template_id")?.value || this.isFillYearlyStage() && this.isEmployee();
    } }
  ];
  columns = [
    // { field: 'load_percentage', title: 'Load Percentage', width: '10%' },
    { field: "criteria", title: "Criteria", type: "criteria", width: "20%" },
    { field: "unit_of_measurement", title: "Unit of Measurement", type: "translated", width: "10%" },
    { field: "weight", title: "Weight", type: "percentage", width: "10%" },
    { field: "yearly_goal", title: "Yearly Goal", width: "10%" },
    { field: "yearly_performance", title: "Yearly Performance", width: "10%" },
    { field: "performance_percentage", title: "Performance Percentage", type: "percentage", width: "10%" },
    { field: "weighted_score", title: "Weighted Score", type: "percentage", width: "10%" },
    { field: "comments", title: "Comments", width: "10%" },
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
          class: "icon-trash",
          visible: () => {
            return this.canEdit() || this.isAdmin();
          }
        },
        {
          name: "Edit",
          icon: "edit-outline",
          class: "icon-edit",
          visible: () => {
            return this.canEdit() || this.isAdmin();
          }
        }
      ],
      isConfirm: true
    }
  ];
  newIssueComment = "";
  //@ViewChild('issueModal') issueModal: TemplateRef<any> | null = null;
  isContainerView = false;
  isLoaded = false;
  criteriaTemplates = [];
  footerData = {};
  payrolls;
  timelineStatuses = [];
  quantitiesLoadPercentSettings = {
    placeholder: "Enter quantities load percent",
    type: "number",
    field: "quantities_load_percent",
    inputClass: "w-100",
    formFieldClass: "w-100 small",
    appearance: "outline",
    isNegativeNotAllowed: true,
    disabled: () => this.isManager() || !this.canEdit()
  };
  qualitiesLoadPercentSettings = {
    placeholder: "Enter qualities load percent",
    type: "number",
    field: "qualities_load_percent",
    inputClass: "w-100",
    formFieldClass: "w-100 small",
    appearance: "outline",
    isNegativeNotAllowed: true,
    disabled: () => this.isManager() || !this.canEdit()
  };
  managerAssessmentLoadPercentSettings = {
    placeholder: "Enter manager assessment load percent",
    type: "number",
    field: "manager_assessment_load_percent",
    inputClass: "w-100",
    formFieldClass: "w-100 small",
    appearance: "outline",
    isNegativeNotAllowed: true,
    disabled: () => this.isManager() || !this.canEdit()
  };
  managerAssessmentWeightedScoreSettings = {
    placeholder: "Enter manager assessment weighted score",
    type: "number",
    field: "manager_assessment_weighted_score",
    inputClass: "w-100",
    formFieldClass: "w-100 small",
    appearance: "outline",
    isNegativeNotAllowed: true,
    disabled: () => !this.canEdit()
  };
  rowFormGroups = {
    formGroups: [],
    formInputs: this.formInputs
  };
  constructor(fb, idService, objectiveFormRepository, objectiveRepository, objectiveTemplatesRepository, objectiveFormCommentsRepository, supabaseAuthService, storageService, snackBar, translate, spinner, modalService, activatedRoute, commentsRepository, employeeRepository, cdr, eventService, loaderService) {
    this.fb = fb;
    this.idService = idService;
    this.objectiveFormRepository = objectiveFormRepository;
    this.objectiveRepository = objectiveRepository;
    this.objectiveTemplatesRepository = objectiveTemplatesRepository;
    this.objectiveFormCommentsRepository = objectiveFormCommentsRepository;
    this.supabaseAuthService = supabaseAuthService;
    this.storageService = storageService;
    this.snackBar = snackBar;
    this.translate = translate;
    this.spinner = spinner;
    this.modalService = modalService;
    this.activatedRoute = activatedRoute;
    this.commentsRepository = commentsRepository;
    this.employeeRepository = employeeRepository;
    this.cdr = cdr;
    this.eventService = eventService;
    this.loaderService = loaderService;
    AppOptions.objectiveTypes.getValue().forEach((objective) => {
      const updatedSections = this.sections.getValue();
      updatedSections.push({
        name: objective.label + " " + this.translate.instant("objectives"),
        data: new MatTableDataSource(),
        type: objective.value
      });
      this.sections.next(updatedSections);
    });
    this.resetTableInputs();
  }
  ngOnInit() {
    this.idService.getId("objective-form").subscribe((id) => {
      if (id) {
        this.objectiveFormId = id;
      }
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (employee) {
        this.currentEmployee = employee;
      }
    });
    this.isContainerView = this.activatedRoute.snapshot.data["isContainerView"];
    this.initTemplateData();
    this.columns = this.columns.filter((x) => x.field == "load_percentage" && false || x.field != "load_percentage");
    this.formInputs = this.formInputs.filter((x) => x.formControlName == "load_percentage" && false || x.formControlName != "load_percentage");
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {
    this.initObjectiveForm();
    this.initPayrolls();
  }
  createObjectiveForm(objective) {
    let form = new FormGroup({
      app_form_id: new FormControl(null),
      id: new FormControl(null),
      type: new FormControl("", [Validators.required]),
      load_percentage: new FormControl(null),
      criteria: new FormControl("", [Validators.required]),
      unit_of_measurement: new FormControl("", [Validators.required]),
      weight: new FormControl(0, [Validators.required]),
      yearly_goal: new FormControl(0, [Validators.required, validateOnZero()]),
      yearly_performance: new FormControl(0, []),
      performance_percentage: new FormControl(0),
      weighted_score: new FormControl(0),
      comments: new FormControl(""),
      template_id: new FormControl(null)
    }, { validators: [validatePercentageLimit()] });
    this.addFormEventListeners(form);
    form.patchValue(objective);
    return form;
  }
  addFormEventListeners(form) {
    form.get("yearly_performance")?.valueChanges.subscribe((newValue) => {
      let yearly_goal = form.get("yearly_goal")?.value;
      if (newValue && yearly_goal) {
        let type = form.get("type")?.value;
        let newValueCalculated = newValue / yearly_goal * 100;
        if (newValueCalculated > 100 && type == "quality") {
          newValueCalculated = 100;
        }
        if (newValueCalculated > 150 && type == "quantitative") {
          newValueCalculated = 150;
        }
        form.get("performance_percentage")?.setValue(newValueCalculated);
      }
    });
    form.get("yearly_goal")?.valueChanges.subscribe((newValue) => {
      let yearly_performance = form.get("yearly_performance")?.value;
      if (newValue && yearly_performance) {
        let type = form.get("unit_of_measurement")?.value;
        let newValueCalculated = yearly_performance / newValue * 100;
        if (newValueCalculated > 100 && type == "quality") {
          newValueCalculated = 100;
        }
        if (newValueCalculated > 150 && type == "quantitative") {
          newValueCalculated = 150;
        }
        form.get("performance_percentage")?.setValue(newValueCalculated);
      }
    });
    form.get("performance_percentage")?.valueChanges.subscribe((newValue) => {
      let weight = form.get("weight")?.value;
      if (newValue && weight) {
        form.get("weighted_score")?.setValue(newValue * weight / 100);
      }
    });
    form.get("weight")?.valueChanges.subscribe((newValue) => {
      let performance_percentage = form.get("performance_percentage")?.value;
      if (newValue && performance_percentage) {
        form.get("weighted_score")?.setValue(newValue * performance_percentage);
      }
    });
    form.get("type")?.valueChanges.subscribe((newValue) => {
      let criteriaField = this.formInputs.find((x) => x.formControlName == "criteria");
      if (criteriaField) {
        criteriaField.options = of(this.criteriaTemplates.filter((x) => x.type == newValue).map((x) => {
          return { label: `${x.criteria} [${x.id}]`, value: x.id };
        }));
      }
      let criteriaRowField = this.columns.find((x) => x.field === "criteria")?.formInput;
      if (criteriaRowField) {
        criteriaRowField.options = of(this.criteriaTemplates.filter((x) => x.type == newValue).map((x) => {
          return { label: `${x.criteria} [${x.id}]`, value: x.id };
        }));
      }
    });
    form.get("criteria")?.valueChanges.subscribe((newValue) => {
      let criteriaTemplate = this.criteriaTemplates.find((x) => newValue == x.id);
      if (criteriaTemplate) {
        let currentData = form.getRawValue();
        let filteredCriteriaTemplate = Object.fromEntries(Object.entries(criteriaTemplate).filter(([_, value]) => value !== null && value !== void 0 && value !== ""));
        Object.assign(currentData, filteredCriteriaTemplate);
        form.patchValue(currentData, { emitEvent: false });
        form.get("template_id")?.setValue(criteriaTemplate.id);
      } else {
        form.get("template_id")?.setValue(null);
      }
    });
    if (this.isFillYearlyStage()) {
      form.get("yearly_performance")?.addValidators(Validators.required);
      form.get("yearly_performance")?.addValidators(validateOnZero());
    }
  }
  resetTableInputs() {
    this.columns = this.columns.map((col) => __spreadProps(__spreadValues({}, col), {
      formInput: col.field ? this.getInput(col.field) : void 0
      // Only add input if field exists
    }));
  }
  initPayrolls() {
    this.employeeRepository.getAdmins().then((payrolls) => {
      if (payrolls) {
        this.payrolls = payrolls.map((x) => {
          return new EmployeeDto(x);
        });
      }
    });
  }
  initManager(form) {
    if (form.employee && form.employee.reporting_manager_id) {
      this.employeeRepository.getById(form.employee.reporting_manager_id).then((manager) => {
        if (this.objectiveFormData.employee) {
          this.objectiveFormData.employee.reporting_manager = new EmployeeDto(manager);
        }
      });
    }
  }
  initObjectiveForm() {
    if (this.objectiveFormId) {
      this.spinner.show();
      this.loaderService.show();
      this.objectiveFormRepository.getByIdWithObjectives(this.objectiveFormId).then((data) => {
        if (data) {
          if (data.comments) {
            data.comments?.forEach((comment) => {
              comment.employee = new EmployeeDto(comment.employee, this.storageService);
            });
          }
          if (data.employee) {
            data.employee = new EmployeeDto(data.employee);
          }
          this.objectiveFormData = data;
          if (data.status == "sended_to_manager") {
            this.askToChooseEmployee();
          }
          data.objectives.forEach((objective) => {
            objective.app_form_id = Math.floor(Math.random() * 1e4);
            this.rowFormGroups.formGroups.push(this.createObjectiveForm(objective));
          });
          this.resetSections();
          this.isLoaded = true;
          this.spinner.hide();
          this.loaderService.hide();
          this.initManager(data);
          this.setTimelineStatuses();
        }
      });
    }
  }
  setTimelineStatuses() {
    let copy = JSON.parse(JSON.stringify(AppConstants.objectiveStatuses));
    if (this.objectiveFormData.assigned_to == "manager") {
      CoreConstants.swapElementsInArray(copy, copy[1], copy[2]);
    }
    this.timelineStatuses = copy;
  }
  initTemplateData() {
    this.objectiveTemplatesRepository.getAll().then((result) => {
      this.criteriaTemplates = result;
      let criteriaInput = this.formInputs.find((x) => x.formControlName == "criteria");
      if (criteriaInput) {
        criteriaInput.options = of(result.map((x) => {
          return { label: `${x.criteria} [${x.id}]`, value: x.id };
        }));
      }
      this.resetTableInputs();
    });
  }
  askToChooseEmployee() {
    if (this.objectiveFormData.employee_id) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Form assignment"),
        text: this.translate.instant("Who will fill this form?"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.translate.instant("Me"),
        cancelButtonText: this.objectiveFormData.employee ? this.objectiveFormData.employee.display_name : this.translate.instant("Employee")
      }).then((result) => {
        if (result.isDismissed) {
          return;
        }
        if (result.isConfirmed) {
          this.assignToManager();
          this.snackBar.open(this.translate.instant("Assigned to manager"), this.translate.instant("Close"), { duration: 2e3 });
        } else {
          this.assignToEmployee();
          this.snackBar.open(this.translate.instant("Assigned to employee"), this.translate.instant("Close"), { duration: 2e3 });
        }
      });
    }
  }
  assignToManager() {
    this.objectiveFormData.assigned_to = "manager";
    this.objectiveFormData.status = AppConstants.AWAITING_MANAGER;
    this.updateForm("assign_to_manager").then(() => this.emitStatusEvent("assignToManager"));
  }
  assignToEmployee() {
    this.objectiveFormData.assigned_to = "employee";
    this.objectiveFormData.status = AppConstants.AWAITING_EMPLOYEE;
    this.updateForm("assign_to_employee").then(() => this.emitStatusEvent("assignToEmployee"));
  }
  onReassignClick(action) {
    this.objectiveFormData.is_manager_approved = false;
    this.objectiveFormData.is_employee_approved = false;
    this.objectiveFormData.status = AppConstants.PENDING_PERFORMANCE_ENTRY;
    this.updateForm(action).then(() => this.emitStatusEvent("onReassignClick"));
  }
  onApproveClick(action) {
    if (!this.checkWeightPercentage()) {
      return;
    }
    if (this.isFillYearlyStage() && !this.isYearlyPerformanceFilled()) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Yearly performance should be filled for all objectives!"),
        icon: "warning"
      });
      return;
    }
    if (!this.checkManagerWeightedScore()) {
      return;
    }
    if (!this.isEmployee()) {
      this.objectiveFormData.is_manager_approved = true;
    } else {
      this.objectiveFormData.is_employee_approved = true;
    }
    if (this.objectiveFormData.is_employee_approved && this.objectiveFormData.is_manager_approved) {
      this.objectiveFormData.status = AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER;
    }
    if (this.objectiveFormData.is_employee_approved && !this.objectiveFormData.is_manager_approved) {
      this.objectiveFormData.status = AppConstants.AWAITING_MANAGER;
    }
    if (!this.objectiveFormData.is_employee_approved && this.objectiveFormData.is_manager_approved) {
      this.objectiveFormData.status = AppConstants.AWAITING_EMPLOYEE;
    }
    this.saveObjectives(action).then(() => this.emitStatusEvent("onApproveClick")).catch((error) => {
      this.eventService.next(EventConstants.OBJECTIVE_FORM_SAVE_ERROR, { action, error });
      import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something went wrong."), "error");
    });
  }
  onStartYearlyProcessClick(action) {
    this.objectiveFormData.step = AppConstants.FILL_YEARLY_STEP;
    this.objectiveFormData.status = AppConstants.PENDING_PERFORMANCE_ENTRY;
    this.objectiveFormData.is_manager_approved = false;
    this.objectiveFormData.is_employee_approved = false;
    this.saveObjectives(action).then(() => this.emitStatusEvent("onStartYearlyProcessClick")).catch((error) => {
      this.eventService.next(EventConstants.OBJECTIVE_FORM_START_YEARLY_PROCESS_ERROR, { action, error });
      import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something went wrong."), "error");
    });
  }
  onSendToPayrollClick(action) {
    if (!this.checkWeightPercentage()) {
      return;
    }
    if (!this.checkManagerWeightedScore()) {
      return;
    }
    if (this.currentEmployee.id == this.objectiveFormData.employee?.reporting_manager_id) {
      this.objectiveFormData.status = AppConstants.SENT_FOR_PAYROLL_APPROVAL;
      this.saveObjectives(action).then(() => this.emitStatusEvent("onSendToPayrollClick")).catch((error) => {
        this.eventService.next(EventConstants.OBJECTIVE_FORM_SEND_TO_PAYROLL_ERROR, { action, error });
        import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something went wrong."), "error");
      });
    }
  }
  onFinalizeClick(action) {
    if (!this.checkWeightPercentage()) {
      return;
    }
    if (!this.checkPercentageLoad()) {
      return;
    }
    if (!this.checkManagerWeightedScore()) {
      return;
    }
    if (this.currentEmployee.id == this.objectiveFormData.creator_id || this.currentEmployee.isAdmin()) {
      this.objectiveFormData.status = AppConstants.FINISHED;
      this.saveObjectives(action).then(() => this.emitStatusEvent("onFinalizeClick")).catch((error) => {
        this.eventService.next(EventConstants.OBJECTIVE_FORM_SAVE_ERROR, { action, error });
        import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something went wrong."), "error");
      });
    }
  }
  checkPercentageLoad() {
    if (this.isAnnualGrandVisible()) {
      if (this.getLodPercentageSum() != 100 && this.currentEmployee.isAdmin()) {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Annual grant total Percentage Loading should be equal to 100!"),
          icon: "warning"
        });
        return false;
      }
    }
    return true;
  }
  checkWeightPercentage() {
    if (!this.isPercentReached()) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Weight sum should be equal to 100!"),
        icon: "warning"
      });
      return false;
    }
    return true;
  }
  checkManagerWeightedScore() {
    if (this.isAnnualGrandVisible()) {
      if (this.objectiveFormData.manager_assessment_weighted_score == void 0 || this.objectiveFormData.manager_assessment_weighted_score == null || this.objectiveFormData.manager_assessment_weighted_score > 100) {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Manager assessment weighted score is required and should be less than 100!"),
          icon: "warning"
        });
        return false;
      }
    }
    return true;
  }
  onReportIssueClick(commentText) {
    if (this.currentEmployee && this.currentEmployee.id && this.objectiveFormId && commentText) {
      this.objectiveFormData.status = AppConstants.AWAITED_PROBLEM_RESOLVING;
      if (this.objectiveFormData.assigned_to == "employee") {
        this.objectiveFormData.is_manager_approved = false;
        this.objectiveFormData.is_employee_approved = false;
      } else if (this.objectiveFormData.assigned_to == "manager") {
        this.objectiveFormData.is_employee_approved = true;
        this.objectiveFormData.is_manager_approved = false;
      }
      this.emitStatusEvent("onReportIssueClick");
      this.updateForm();
      let comment = new ObjectiveFormCommentsInsertDto();
      comment.comment = commentText;
      comment.created_at = (/* @__PURE__ */ new Date()).toDateString();
      comment.employee_id = this.currentEmployee.id;
      comment.objective_form_id = this.objectiveFormId;
      comment.is_issue_request = true;
      this.spinner.show();
      this.loaderService.show();
      this.objectiveFormCommentsRepository.create(comment).then(() => {
        this.spinner.hide();
        this.loaderService.hide();
        this.snackBar.open(this.getSnackBarMessage("report_issue"), "Close", {
          duration: 2e3
        });
      });
    }
  }
  canEdit() {
    if (this.currentEmployee.id == this.objectiveFormData.employee_id && (this.objectiveFormData.status == AppConstants.AWAITING_EMPLOYEE || this.objectiveFormData.status == AppConstants.AWAITED_PROBLEM_RESOLVING) && this.objectiveFormData.assigned_to == "employee") {
      return true;
    }
    if (this.currentEmployee.id == this.objectiveFormData.employee?.reporting_manager_id && (this.objectiveFormData.status == AppConstants.AWAITING_MANAGER || this.objectiveFormData.status == AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER || this.objectiveFormData.status == AppConstants.AWAITED_PROBLEM_RESOLVING)) {
      return true;
    }
    if ((this.currentEmployee.isGlobalAdmin() || this.currentEmployee.isAdmin()) && this.objectiveFormData.status != AppConstants.FINISHED) {
      return true;
    }
    return false;
  }
  isAssignStep() {
    return AppConstants.PENDING_PERFORMANCE_ENTRY == this.objectiveFormData.status && this.isManager();
  }
  isRejectStep() {
    if (this.isManager() && this.objectiveFormData.status == AppConstants.AWAITING_MANAGER && this.objectiveFormData.is_employee_approved) {
      return true;
    }
    if (this.isEmployee() && this.objectiveFormData.status == AppConstants.AWAITING_EMPLOYEE && this.objectiveFormData.is_manager_approved) {
      return true;
    }
    return false;
  }
  isFinalizeStep() {
    if (this.currentEmployee.isAdmin() && this.objectiveFormData.status == AppConstants.SENT_FOR_PAYROLL_APPROVAL) {
      return true;
    }
    return false;
  }
  isSendToApproveStep() {
    if (!this.objectiveFormData.is_employee_approved && !this.objectiveFormData.is_manager_approved && this.isEmployee() && (this.objectiveFormData.status == AppConstants.AWAITING_EMPLOYEE || this.objectiveFormData.status == AppConstants.AWAITED_PROBLEM_RESOLVING) && this.objectiveFormData.assigned_to == "employee") {
      return true;
    }
    if (!this.objectiveFormData.is_employee_approved && !this.objectiveFormData.is_manager_approved && this.isManager() && (this.objectiveFormData.status == AppConstants.AWAITING_MANAGER || this.objectiveFormData.status == AppConstants.AWAITED_PROBLEM_RESOLVING) && this.objectiveFormData.assigned_to == "manager") {
      return true;
    }
    return false;
  }
  isApproveStep() {
    if (this.objectiveFormData.is_manager_approved && !this.objectiveFormData.is_employee_approved && this.isEmployee() || !this.objectiveFormData.is_manager_approved && this.objectiveFormData.is_employee_approved && this.isManager()) {
      return true;
    }
    return false;
  }
  isStartYearlyStep() {
    if (this.currentEmployee.id == this.objectiveFormData.employee?.reporting_manager_id && this.objectiveFormData.step == AppConstants.INITIATE_STEP && this.objectiveFormData.status == AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER) {
      return true;
    }
    return false;
  }
  isSendToPayrollStep() {
    if (this.currentEmployee.id == this.objectiveFormData.employee?.reporting_manager_id && this.objectiveFormData.step == AppConstants.FILL_YEARLY_STEP && this.objectiveFormData.status == AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER) {
      return true;
    }
    return false;
  }
  isEmployee() {
    return this.currentEmployee.id == this.objectiveFormData.employee_id;
  }
  isManager() {
    return this.currentEmployee.id == this.objectiveFormData.employee?.reporting_manager_id;
  }
  isAdmin() {
    return this.currentEmployee.isAdmin();
  }
  isHR() {
    return this.currentEmployee.role == AppConstants.ROLE_HR;
  }
  isPAYROLL() {
    return this.currentEmployee.role == AppConstants.ROLE_PAYROLL;
  }
  isFillYearlyStage() {
    return this.objectiveFormData.step == AppConstants.FILL_YEARLY_STEP;
  }
  isInitiateStage() {
    return this.objectiveFormData.step == AppConstants.INITIATE_STEP;
  }
  onAddObjectiveClick(type) {
    if (this.objectiveFormData.objectives.some((x) => x.isEdit || x.isAdd)) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("You can add only 1 row per time!"),
        icon: "warning"
      });
      return;
    }
    let newObjective = {
      type,
      weight: null,
      load_percentage: null,
      objective_form_id: this.objectiveFormId,
      criteria: "",
      unit_of_measurement: "percentage",
      yearly_goal: null,
      isAdd: true,
      isEdit: false,
      editType: "form"
    };
    this.rowFormGroups.formGroups.push(this.createObjectiveForm(newObjective));
    this.objectiveFormData.objectives.push(newObjective);
    this.resetSections();
  }
  addUpdateObjective(form, objective) {
    if (objective) {
      if (this.isPercentWithFormReached(form, objective)) {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Weight sum should be equal to 100!"),
          icon: "warning"
        });
        return false;
      }
      if (!form.valid) {
        return false;
      } else {
        const formValue = form.getRawValue();
        if (objective && objective.criteria != formValue.criteria) {
          if (formValue && formValue.criteria && this.isCriteriaAlreadyExists(formValue)) {
            import_sweetalert2.default.fire({
              title: this.translate.instant("Objective with this criteria name already exists!"),
              icon: "warning"
            });
            return false;
          }
        }
        if (objective) {
          Object.assign(objective, formValue);
          this.resetSections();
        }
      }
    }
    return true;
  }
  resetSections() {
    let result = [];
    AppOptions.objectiveTypes.getValue().forEach((objective) => {
      const data = this.objectiveFormData.objectives.filter((x) => x.type === objective.value);
      const footerData = {
        criteria: this.translate.instant("Total"),
        weight: Number(data.reduce((sum, current) => sum + (Number(current.weight) || 0), 0)),
        weighted_score: Number(data.reduce((sum, current) => sum + (Number(current.weighted_score) || 0), 0))
      };
      result.push({
        name: objective.value === "quantitative" ? this.translate.instant("Quantitative type") : this.translate.instant("Quality type"),
        data: new MatTableDataSource(data),
        type: objective.value,
        footerData
      });
    });
    this.sections.next(result);
  }
  isPercentReached() {
    let result = true;
    this.sections.getValue().forEach((section) => {
      if (section.footerData.weight !== 100) {
        result = false;
      }
    });
    return result;
  }
  isPercentWithFormReached(form, objective) {
    let formData = form.getRawValue();
    let section = this.sections.getValue().find((x) => x.type == formData.type);
    let sectionData = section.data.data.filter((x) => x !== objective);
    let sum = sectionData.reduce((sum2, current) => sum2 + (Number(current.weight) || 0), 0);
    let sumWithForm = sum + Number(formData.weight);
    return sumWithForm > 100;
  }
  isCriteriaAlreadyExists(objective) {
    let result = false;
    this.sections.getValue().filter((x) => x.type == objective.type).forEach((section) => {
      if (section.data.data.some((x) => x.criteria == objective.criteria)) {
        result = true;
      }
    });
    return result;
  }
  isYearlyPerformanceFilled() {
    let result = true;
    this.sections.getValue().forEach((section) => {
      if (section.data.data.some((x) => !x.yearly_performance)) {
        result = false;
      }
    });
    return result;
  }
  saveObjectives(action = "saved") {
    return new Promise((resolve, reject) => {
      if (!this.checkWeightPercentage() || !this.checkPercentageLoad() || !this.checkManagerWeightedScore()) {
        reject(new Error("Validation failed"));
        return;
      }
      this.loading = true;
      this.spinner.show();
      this.loaderService.show();
      this.objectiveFormData.objectives.forEach((x) => {
        delete x.isEdit;
        delete x.isAdd;
        delete x.editType;
        delete x.app_form_id;
      });
      forkJoin(this.objectiveRepository.upsertRange(this.objectiveFormData.objectives), this.objectiveRepository.deleteList(this.objectivesToDelete)).subscribe(() => {
        this.updateForm(action).then(() => {
          this.eventService.next(EventConstants.OBJECTIVE_FORM_SAVE_SUCCESS, { action, data: this.objectiveFormData });
          this.objectiveFormData.objectives.forEach((x) => {
            x.app_form_id = Math.floor(Math.random() * 1e4);
          });
          resolve();
        }).catch((err) => {
          reject(err);
        });
      }, (err) => {
        this.loading = false;
        if (err && err.message && err.message.includes("upsert")) {
          this.eventService.next(EventConstants.OBJECTIVE_FORM_UPSERT_ERROR, { action, error: err });
        } else if (err && err.message && err.message.includes("delete")) {
          this.eventService.next(EventConstants.OBJECTIVE_FORM_DELETE_ERROR, { action, error: err });
        } else {
          this.eventService.next(EventConstants.OBJECTIVE_FORM_SAVE_ERROR, { action, error: err });
        }
        import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something go wrong."), "error");
        reject(err);
      });
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "Delete": {
        if (event.data.id) {
          this.objectivesToDelete.push(event.data.id);
        }
        this.objectiveFormData.objectives = this.objectiveFormData.objectives.filter((item) => item !== event.data);
        this.resetSections();
        this.eventService.next(EventConstants.OBJECTIVE_DELETED, { id: event.data.id, data: event.data });
        break;
      }
      case "Edit": {
        if (event.data.criteria == "Total") {
          return;
        }
        if (this.objectiveFormData.objectives.some((x) => x.isEdit)) {
          import_sweetalert2.default.fire({
            title: this.translate.instant("You can edit only 1 row per time!"),
            icon: "warning"
          });
          return;
        }
        event.data.isEdit = true;
        event.data.editType = "form";
        this.eventService.next(EventConstants.OBJECTIVE_EDITED, { data: event.data });
        break;
      }
      case "confirm": {
        if (event.data.criteria == "Total") {
          return;
        }
        event.form?.markAllAsTouched();
        if (event.form && this.addUpdateObjective(event.form, event.data)) {
          event.data.isEdit = false;
          event.data.isAdd = false;
          event.data.editType = "form";
          this.eventService.next(EventConstants.OBJECTIVE_CONFIRMED, { data: event.data });
        }
        break;
      }
      case "cancel": {
        if (event.data.criteria == "Total") {
          return;
        }
        if (event.data.isAdd) {
          event.data.isAdd = false;
          let index = this.objectiveFormData.objectives.indexOf(event.data);
          if (index != -1) {
            this.objectiveFormData.objectives.splice(index, 1);
          }
          if (event.form) {
            let formIndex = this.rowFormGroups.formGroups.indexOf(event.form);
            if (formIndex != -1) {
              this.rowFormGroups.formGroups.splice(formIndex, 1);
            }
          }
        } else {
        }
        this.resetSections();
        this.eventService.next(EventConstants.OBJECTIVE_CANCELLED, { data: event.data });
        break;
      }
      case "send-comment": {
        let comment = new ObjectiveFormCommentsInsertDto();
        if (this.objectiveFormId && this.currentEmployee.id) {
          comment.objective_form_id = this.objectiveFormId;
          comment.employee_id = this.currentEmployee.id;
          comment.comment = event.data;
          this.spinner.show();
          this.loaderService.show();
          comment.created_at = (/* @__PURE__ */ new Date()).toDateString();
          this.objectiveFormCommentsRepository.create(comment).then((result) => {
            if (result && result.length > 0) {
              this.commentsRepository.getByIdWithEmployee(result[0].id).then((comment2) => {
                if (comment2) {
                  if (!this.objectiveFormData.comments) {
                    this.objectiveFormData.comments = [];
                  }
                  comment2.employee = new EmployeeDto(comment2.employee, this.storageService);
                  this.objectiveFormData.comments.push(comment2);
                }
              });
            }
            this.spinner.hide();
            this.loaderService.hide();
            this.snackBar.open(this.getSnackBarMessage("send-comment"), this.translate.instant("Close"), {
              duration: 2e3
            });
            this.eventService.next(EventConstants.OBJECTIVE_COMMENT_SENT, { comment });
          }).catch((error) => {
            this.spinner.hide();
            this.loaderService.hide();
            this.eventService.next(EventConstants.OBJECTIVE_FORM_COMMENT_CREATE_ERROR, { error });
          });
        }
        break;
      }
      case "report-issue": {
        this.onReportIssueClick(event.data);
        break;
      }
    }
  }
  toggleIssueModal() {
  }
  updateForm(action = "saved", onSuccess, onError) {
    return new Promise((resolve, reject) => {
      if (this.objectiveFormData.id) {
        var data = new ObjectiveFormUpdateDto(this.objectiveFormData);
        this.spinner.show();
        this.loaderService.show();
        this.objectiveFormRepository.update(this.objectiveFormData.id, data).then(() => {
          this.spinner.hide();
          this.loaderService.hide();
          this.snackBar.open(this.getSnackBarMessage(action), this.translate.instant("Close"), {
            duration: 2e3
          });
          this.initObjectiveForm();
          this.loading = false;
          this.eventService.next(EventConstants.OBJECTIVE_FORM_UPDATE_SUCCESS, { action, data: this.objectiveFormData });
          if (onSuccess)
            onSuccess();
          resolve();
        }, (err) => {
          this.loading = false;
          this.eventService.next(EventConstants.OBJECTIVE_FORM_UPDATE_ERROR, { action, error: err });
          import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something go wrong."), "error");
          if (onError)
            onError(err);
          reject(err);
        });
      } else {
        if (onSuccess)
          onSuccess();
        resolve();
      }
    });
  }
  getSnackBarMessage(action) {
    switch (action) {
      case "assign_to_employee":
        return this.translate.instant("Form assigned to employee!");
      case "assign_to_manager":
        return this.translate.instant("Form assigned to manager!");
      case "approve":
        return this.translate.instant("Form approved!");
      case "send_to_approve":
        return this.translate.instant("Form sent for revision!");
      case "start_yearly":
        return this.translate.instant("New step started!");
      case "send_to_payroll":
        return this.translate.instant("Form sent to payroll!");
      case "finalize":
        return this.translate.instant("Form finished!");
      case "report_issue":
        return this.translate.instant("Issue was reported!");
      case "send-comment":
        return this.translate.instant("Comment sent!");
      case "reassign":
        return this.translate.instant("Form saved!");
      default:
        return this.translate.instant("Data saved!");
    }
  }
  onClearClick(form) {
    form.reset();
    this.resetSections();
  }
  // setNotification(to: string, form: ObjectiveFormDto) {
  //   this.notifications = []
  //   switch (to) {
  //     case 'manager': {
  //       if (this.manager && this.manager.email && form.employee && form.employee.email) {
  //         this.notifications.push(this.notificationService.sendFormStatusNotification(this.manager.email, form.employee.getName(), form))
  //       };
  //       break
  //     }
  //     case 'employee': {
  //       if (form.employee && form.employee.email) {
  //         this.notifications.push(this.notificationService.sendFormStatusNotification(form.employee.email, form.employee.getName(), form))
  //       };
  //       break
  //     }
  //     case 'payroll': {
  //       if (this.payrolls) {
  //         this.notifications = this.payrolls.map((payroll) => {
  //           if (payroll && payroll.email) {
  //             let appPayroll = new EmployeeDto(payroll);
  //             return this.notificationService.sendFormStatusNotification(payroll.email, appPayroll.getName(), form)
  //           }
  //           return null;
  //         })
  //       }
  //       break
  //     }
  //   }
  // }
  sendNotifications() {
    Promise.all(this.notifications).then(() => {
    });
  }
  getQuantityWeightedScore() {
    let section = this.sections.getValue().find((x) => x.type == "quantitative");
    return section ? section.footerData.weighted_score : 0;
  }
  getQualityWeightedScore() {
    let section = this.sections.getValue().find((x) => x.type == "quality");
    return section ? section.footerData.weighted_score : 0;
  }
  getLodPercentageSum() {
    let param1 = this.objectiveFormData.qualities_load_percent ? this.objectiveFormData.qualities_load_percent : 0;
    let param2 = this.objectiveFormData.quantities_load_percent ? this.objectiveFormData.quantities_load_percent : 0;
    let param3 = this.objectiveFormData.manager_assessment_load_percent ? this.objectiveFormData.manager_assessment_load_percent : 0;
    return param1 + param2 + param3;
  }
  calculateWeightedScore(loadPercent, weightedScore) {
    if (loadPercent && weightedScore) {
      return loadPercent / 100 * weightedScore;
    }
    return 0;
  }
  getLoadPercentageSum() {
    return (this.objectiveFormData.quantities_load_percent || 0) + (this.objectiveFormData.qualities_load_percent || 0) + (this.objectiveFormData.manager_assessment_load_percent || 0);
  }
  getWeightedScoreSum() {
    let param1 = this.objectiveFormData.qualities_load_percent ? this.objectiveFormData.qualities_load_percent : 0;
    let param2 = this.objectiveFormData.quantities_load_percent ? this.objectiveFormData.quantities_load_percent : 0;
    let param3 = this.objectiveFormData.manager_assessment_load_percent ? this.objectiveFormData.manager_assessment_load_percent : 0;
    let param4 = this.objectiveFormData.manager_assessment_weighted_score ? this.objectiveFormData.manager_assessment_weighted_score : 0;
    let qualityWS = this.calculateWeightedScore(param1, this.getQualityWeightedScore());
    let quantityWS = this.calculateWeightedScore(param2, this.getQuantityWeightedScore());
    let managerWS = this.calculateWeightedScore(param3, param4);
    return quantityWS + qualityWS + managerWS;
  }
  getInput(field) {
    let input = this.formInputs.find((x) => x.formControlName === field);
    if (input) {
      let copy = __spreadValues({}, input);
      delete copy.label;
      return copy;
    }
    return void 0;
  }
  isCompleted(index) {
    return index <= this.currentStatusIndex();
  }
  // Check if the status is the current one
  isCurrent(index) {
    return index == this.currentStatusIndex();
  }
  currentStatusIndex() {
    return this.timelineStatuses.findIndex((x) => x.key == this.objectiveFormData.status);
  }
  isAnnualGrandVisible() {
    return (this.objectiveFormData.status == AppConstants.FINISHED && this.currentEmployee.id == this.objectiveFormData.employee_id || (this.objectiveFormData.status == AppConstants.FINISHED || this.objectiveFormData.status == AppConstants.SENT_FOR_PAYROLL_APPROVAL || this.objectiveFormData.status == AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER || this.isYearlyPerformanceFilled()) && (this.currentEmployee.role == AppConstants.ROLE_MANAGER || this.currentEmployee.isAdmin()) && this.currentEmployee.id != this.objectiveFormData.employee_id) && this.objectiveFormData.step == AppConstants.FILL_YEARLY_STEP;
  }
  // Helper function to emit status event
  emitStatusEvent(action) {
    const status = this.objectiveFormData.status;
    switch (status) {
      case AppConstants.PENDING_PERFORMANCE_ENTRY:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_PENDING_PERFORMANCE_ENTRY, { action, data: this.objectiveFormData });
        break;
      case AppConstants.AWAITING_EMPLOYEE:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_AWAITING_EMPLOYEE, { action, data: this.objectiveFormData });
        break;
      case AppConstants.AWAITING_MANAGER:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_AWAITING_MANAGER, { action, data: this.objectiveFormData });
        break;
      case AppConstants.AWAITED_PROBLEM_RESOLVING:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_AWAITED_PROBLEM_RESOLVING, { action, data: this.objectiveFormData });
        break;
      case AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_APPROVED_BY_EMPLOYEE_AND_MANAGER, { action, data: this.objectiveFormData });
        break;
      case AppConstants.SENT_FOR_PAYROLL_APPROVAL:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_SENT_FOR_PAYROLL_APPROVAL, { action, data: this.objectiveFormData });
        break;
      case AppConstants.FINISHED:
        this.eventService.next(EventConstants.OBJECTIVE_FORM_STATUS_FINISHED, { action, data: this.objectiveFormData });
        break;
    }
  }
  static \u0275fac = function ObjectiveFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(ObjectiveFormRepository), \u0275\u0275directiveInject(ObjectivesRepository), \u0275\u0275directiveInject(ObjectiveTemplatesRepository), \u0275\u0275directiveInject(ObjectiveFormCommentsRepository), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ObjectiveFormCommentsRepository), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectiveFormComponent, selectors: [["app-objective-form"]], decls: 3, vars: 1, consts: [[1, "card", "flex-fill"], [1, "card-body"], ["class", " mt-4 mb-5", 4, "ngIf"], [1, "mt-4", "mb-5"], [1, "row"], [1, "col-lg-6", "col-sm-12"], [1, "col-lg-6", "col-sm-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "submit", "mat-raised-button", "", "color", "accent", "class", "me-2", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "class", "me-2", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "me-2", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "mt-3", "d-flex", "align-items-center", "justify-content-between"], [1, "col-12"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex", "flex-row", "gap-1", "flex-wrap", "align-items-center", "step-bar"], [4, "ngFor", "ngForOf"], [1, "pt-3"], ["class", "mt-3", 4, "ngFor", "ngForOf"], ["class", "mt-3", 4, "ngIf"], [3, "action", "status", "isRejectStep", "comments"], ["type", "submit", "mat-raised-button", "", "color", "accent", 1, "me-2", 3, "click", "disabled"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "me-2", 3, "click", "disabled"], [1, "d-flex", "align-items-center"], [1, "ms-2"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "ms-2", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "d-flex"], ["class", "line", 3, "ngClass", 4, "ngIf"], [1, "step-status", "flex-row", "gap-2", 3, "ngClass"], [1, "circle"], [1, "status-name"], [1, "line", 3, "ngClass"], [1, "mt-3"], [1, "d-flex", "align-items-baseline"], ["class", "add-btn d-flex", 4, "ngIf"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "isObjectiveFormTable", "columns", "dataSource", "footerData", "rowFormGroups"], [1, "add-btn", "d-flex"], [1, "me-3", 3, "click"], [1, "fa-solid", "fa-circle-plus"], [1, "app-table-container"], [1, "table-responsive", "w-100", "app-table", "no-wrap"], [3, "element", "settings", 4, "ngIf"], [4, "ngIf"], [3, "element", "settings", "change", 4, "ngIf"], [1, "footer-row"], [3, "element", "settings"], [3, "change", "element", "settings"]], template: function ObjectiveFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275template(2, ObjectiveFormComponent_div_2_Template, 25, 21, "div", 2);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoaded);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    AsyncPipe,
    PercentPipe,
    ReactiveFormsModule,
    TableComponent,
    CommentsComponent,
    FormsModule,
    TranslatePipe,
    MatButtonModule,
    MatButton,
    AppInputComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectiveFormComponent, { className: "ObjectiveFormComponent", filePath: "src/app/main/performance/objective-form/objective-form.component.ts", lineNumber: 57 });
})();
function validatePercentageLimit() {
  return (formGroup) => {
    const unitOfMeasurement = formGroup.get("unit_of_measurement")?.value;
    const weight = formGroup.get("weight");
    const yearlyGoal = formGroup.get("yearly_goal");
    if (unitOfMeasurement === "percentage") {
      const errors = {};
      if (weight?.value > 100)
        weight?.setErrors({ max: 100 });
      if (yearlyGoal?.value > 100)
        yearlyGoal?.setErrors({ max: 100 });
      return Object.keys(errors).length > 0 ? errors : null;
    }
    return null;
  };
}
function validateOnZero() {
  return (control) => {
    return control.value === 0 ? { required: true } : null;
  };
}
export {
  ObjectiveFormComponent,
  validateOnZero,
  validatePercentageLimit
};
//# sourceMappingURL=chunk-X3BXBEVA.js.map
