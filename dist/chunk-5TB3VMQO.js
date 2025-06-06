import {
  FeedbackFormsRepository
} from "./chunk-KG3BOM3F.js";
import {
  EmployeeService
} from "./chunk-E3RI4QCV.js";
import {
  PaginationComponent
} from "./chunk-EQM2SLMA.js";
import {
  FeedbackFormSearchParams
} from "./chunk-S5OCFGQY.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  MatTableDataSource,
  MatTableModule,
  TableComponent
} from "./chunk-X45EM66I.js";
import "./chunk-BWIOX5TR.js";
import "./chunk-JYDETW4E.js";
import "./chunk-M2EJXGZP.js";
import {
  AppModalComponent,
  AppOptions,
  FormInputComponent,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
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
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  ActivatedRoute,
  LoaderService,
  Router,
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  Observable,
  from,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/feedback/feedback-management/feedback-management.component.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/app/shared/models/dto/feedback/feedback-form-view.dto.ts
var FeedbackFormViewDto = class {
  id;
  employee_id;
  status;
  department;
  division;
  due_date;
  created_at;
  employee_display_name;
  avatar_name;
  avatar_url;
  is_active;
  avatar_src = null;
  isSelected = false;
  title;
  is_selected = false;
  constructor(params = null, storageService = null) {
    if (params) {
      this.id = params.id || null;
      this.employee_id = params.employee_id || null;
      this.status = params.status || null;
      this.department = params.department || null;
      this.division = params.division || null;
      this.due_date = params.due_date || null;
      this.created_at = params.created_at || null;
      this.employee_display_name = params.employee_display_name || null;
      this.avatar_name = params.avatar_name || null;
      this.avatar_url = params.avatar_url || null;
      this.is_active = params.is_active || null;
      this.title = params.title || null;
    }
    this.loadEmployeeAvatar(storageService);
  }
  getEmployeeId() {
    return this.employee_id ? this.employee_id : 0;
  }
  getEmployeeName() {
    return this.employee_display_name ? this.employee_display_name : "N/A";
  }
  getEmployeeSign() {
    if (!this.employee_display_name) {
      return "N/A";
    }
    const names = this.employee_display_name.trim().split(/\s+/);
    const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
    const secondInitial = names.length > 1 ? names[1]?.charAt(0).toUpperCase() : "";
    return firstInitial + secondInitial;
  }
  isActive() {
    return this.is_active ?? false;
  }
  getEmployeeAvatar() {
    return this.avatar_src;
  }
  setEmployeeAvatar(result, avatar_name) {
    this.avatar_src = new Observable((observer) => {
      observer.next(result);
      observer.complete();
    });
  }
  loadEmployeeAvatar(storageService) {
    if (this.avatar_url == '""') {
      this.avatar_url = "";
    }
    if (this.avatar_url) {
      this.avatar_src = of(this.avatar_url);
    } else if (this.avatar_name) {
      if (storageService) {
        this.avatar_src = from(storageService.downloadFile("avatars", this.avatar_name).then((blob) => {
          const objectURL = URL.createObjectURL(blob);
          return objectURL;
        }));
      }
    }
  }
};

// src/app/main/feedback/feedback-management/feedback-management.component.ts
var _c0 = ["bulkAssignModal"];
function FeedbackManagementComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "app-form-input", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r2.formControlName)("settings", input_r2);
  }
}
function FeedbackManagementComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 5)(2, "div", 6);
    \u0275\u0275template(3, FeedbackManagementComponent_div_2_div_3_Template, 2, 2, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function FeedbackManagementComponent_div_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openBulkAssignModal());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(7, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const tableView_r4 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.filtersForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.formInputs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "Bulk Assign"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", tableView_r4);
  }
}
function FeedbackManagementComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementContainer(1, 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const tableView_r4 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", tableView_r4);
  }
}
function FeedbackManagementComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-table", 12);
    \u0275\u0275listener("action", function FeedbackManagementComponent_ng_template_4_Template_app_table_action_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onActionClick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "app-pagination", 13);
    \u0275\u0275listener("pageSizeChange", function FeedbackManagementComponent_ng_template_4_Template_app_pagination_pageSizeChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.countPerPage = $event;
      return \u0275\u0275resetView(ctx_r2.initFeedbacksData());
    })("pageChange", function FeedbackManagementComponent_ng_template_4_Template_app_pagination_pageChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("isRawClickable", true)("columns", ctx_r2.columns)("dataSource", ctx_r2.dataSource);
    \u0275\u0275advance();
    \u0275\u0275property("totalRows", ctx_r2.totalRows)("pageSize", ctx_r2.countPerPage)("totalPages", ctx_r2.totalPages);
  }
}
function FeedbackManagementComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "app-table", 15);
    \u0275\u0275listener("action", function FeedbackManagementComponent_ng_template_6_Template_app_table_action_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBulkTableAction($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(2, "div", 16)(3, "button", 17);
    \u0275\u0275listener("click", function FeedbackManagementComponent_ng_template_6_Template_button_click_3_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.assignSelected("manager", modal_r7));
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 18);
    \u0275\u0275listener("click", function FeedbackManagementComponent_ng_template_6_Template_button_click_6_listener() {
      const modal_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.assignSelected("employee", modal_r7));
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function FeedbackManagementComponent_ng_template_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.currentBulkAssignModalRef.close());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("columns", ctx_r2.bulkAssignColumns)("dataSource", ctx_r2.pendingFeedbackForms)("isRawClickable", false);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "Assign to Manager"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "Assign to Employee"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "Cancel"));
  }
}
var FeedbackManagementComponent = class _FeedbackManagementComponent {
  supabaseAuthService;
  employeeService;
  feedbackFormRepository;
  storageService;
  router;
  activatedRoute;
  idService;
  employeeRepository;
  fb;
  translate;
  eventService;
  loaderService;
  modalService;
  isAwaited = false;
  isContainerView = false;
  filtersForm;
  currentBulkAssignModalRef;
  currentEmployee;
  employeeId;
  filters = new FeedbackFormSearchParams();
  dataSource = new MatTableDataSource();
  totalRows = 0;
  countPerPage = 15;
  totalPages = 1;
  columns = [
    { field: "title", title: "Title", width: "20%" },
    { field: "employee_display_name", title: "Team member name", type: "employee", width: "20%" },
    { field: "employee.department", title: "Department", width: "10%" },
    { field: "employee.division", title: "Division", width: "10%" },
    { field: "due_date", title: "Deadline", type: "date", width: "10%" },
    { field: "status", title: "Status", type: "feedback-form-status", width: "20%" },
    {
      field: "actions",
      width: "10%",
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
    { formControlName: "status", type: "autocomplete", placeholder: "Status", id: "status", labelClass: "app-label", inputClass: "app-autocomplete w-100", formFieldClass: "w-100", appearance: "outline", options: AppOptions.getFeedbacksStatusOptions() },
    { formControlName: "search", type: "text", placeholder: "Search", id: "search", labelClass: "app-label", inputClass: "w-100", formFieldClass: "w-100", appearance: "outline" }
  ];
  bulkAssignModal;
  pendingFeedbackForms = new MatTableDataSource();
  bulkAssignColumns = [
    { title: "", field: "is_selected", type: "checkbox" },
    { title: "Team member name", field: "employee_display_name", type: "employee" },
    { title: "Title", field: "title" },
    { title: "Due Date", field: "due_date", type: "date" }
  ];
  selectedForms = [];
  /**
   *
   */
  constructor(supabaseAuthService, employeeService, feedbackFormRepository, storageService, router, activatedRoute, idService, employeeRepository, fb, translate, eventService, loaderService, modalService) {
    this.supabaseAuthService = supabaseAuthService;
    this.employeeService = employeeService;
    this.feedbackFormRepository = feedbackFormRepository;
    this.storageService = storageService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.idService = idService;
    this.employeeRepository = employeeRepository;
    this.fb = fb;
    this.translate = translate;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.modalService = modalService;
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
      this.initFeedbacksData();
    });
    const currentRoute = this.router.url;
    if (currentRoute !== "/profile") {
      this.isAwaited = this.activatedRoute.snapshot.data["isAwaited"];
    }
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
      this.initFeedbacksData();
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initDepartments();
      this.initDivisions();
    }, 1e3);
  }
  initFeedbacksData() {
    this.filters.page_size = this.countPerPage;
    this.feedbackFormRepository.getFilteredFormsCount(this.filters, this.isAwaited).then((count) => {
      this.totalRows = count;
      this.totalPages = Math.ceil(this.totalRows / this.countPerPage);
      this.feedbackFormRepository.getFilteredForms(this.filters, this.isAwaited).then((res) => {
        this.loaderService.hide();
        let mappedData = res.map((x) => {
          return new FeedbackFormViewDto(x, this.storageService);
        });
        this.dataSource.data = mappedData;
        this.eventService.next(EventConstants.FEEDBACK_MANAGEMENT_LOADED, { count: res.length, totalRows: this.totalRows });
      }).catch((error) => {
        this.loaderService.hide();
        this.eventService.next(EventConstants.FEEDBACK_MANAGEMENT_LOAD_ERROR, { error });
      });
    }).catch((error) => {
      this.loaderService.hide();
      this.eventService.next(EventConstants.FEEDBACK_MANAGEMENT_LOAD_ERROR, { error });
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "sort": {
        this.filters.sort_by = event.data.active;
        this.filters.sort_direction = event.data.direction;
        this.initFeedbacksData();
        break;
      }
      case "click-row": {
        this.idService.setId("feedback-form", event.data.id);
        this.router.navigate(["/feedback-form"]);
        break;
      }
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
            this.feedbackFormRepository.delete(event.data.id).then(() => {
              import_sweetalert2.default.fire(this.translate.instant("Deleted!"), this.translate.instant("The form has been deleted."), "success");
              this.eventService.next(EventConstants.FEEDBACK_MANAGEMENT_DELETE, { id: event.data.id });
              this.initFeedbacksData();
            }).catch((error) => {
              this.eventService.next(EventConstants.FEEDBACK_MANAGEMENT_DELETE_ERROR, { id: event.data.id, error });
            });
          }
        });
        break;
      }
    }
  }
  onPageChange(event) {
    this.filters.page = event;
    this.filters.page_size = this.countPerPage;
    this.initFeedbacksData();
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
  openBulkAssignModal() {
    this.loadPendingFeedbackForms();
    this.selectedForms = [];
    this.currentBulkAssignModalRef = this.modalService.show(AppModalComponent, {
      width: "800px",
      panelClass: "app-modal",
      data: {
        title: this.translate.instant("Pending Feedback Forms"),
        template: this.bulkAssignModal,
        showFooter: false
      }
    });
  }
  loadPendingFeedbackForms() {
    return __async(this, null, function* () {
      this.loaderService.show();
      try {
        const filters = {
          status: AppConstants.PENDING_PERFORMANCE_ENTRY,
          department: this.filtersForm.value.department || void 0,
          division: this.filtersForm.value.division || void 0,
          due_date: this.filtersForm.value.due_date || void 0,
          employee_display_name: this.filtersForm.value.employee_display_name || void 0,
          search: this.filtersForm.value.search || void 0
          // Do not include page or page_size
        };
        Object.keys(filters).forEach((key) => filters[key] === void 0 && delete filters[key]);
        const forms = yield this.feedbackFormRepository.getFilteredForms(filters, false);
        this.pendingFeedbackForms.data = forms.map((f) => {
          const bulkForm = new FeedbackFormViewDto(f, this.storageService);
          bulkForm.is_selected = true;
          return bulkForm;
        });
        this.selectedForms = this.pendingFeedbackForms.data.slice();
      } finally {
        this.loaderService.hide();
      }
    });
  }
  onBulkTableAction(event) {
    const data = this.pendingFeedbackForms.data;
    if (event.action === "select") {
      event.row.selected = !event.row.selected;
      this.selectedForms = data.filter((f) => f.is_selected);
    } else if (event.action === "selectAll") {
      const allSelected = data.every((f) => f.is_selected);
      data.forEach((f) => f.is_selected = !allSelected);
      this.selectedForms = data.filter((f) => f.is_selected);
    }
  }
  assignSelected(role, modalRef) {
    return __async(this, null, function* () {
      if (!this.selectedForms.length)
        return;
      const status = role === "manager" ? AppConstants.AWAITING_MANAGER : AppConstants.AWAITING_EMPLOYEE;
      const updatePayloads = this.selectedForms.map((form) => ({
        id: form.id,
        assigned_to: role,
        status
      }));
      try {
        this.loaderService.show();
        yield Promise.all(updatePayloads.filter((payload) => payload.id !== void 0).map((payload) => this.feedbackFormRepository.update(payload.id, {
          assigned_to: payload.assigned_to,
          status: payload.status
        })));
        this.eventService.next(EventConstants.FEEDBACK_MANAGEMENT_ASSIGN, { role, forms: this.selectedForms });
        this.currentBulkAssignModalRef.close();
        this.initFeedbacksData();
      } catch (error) {
        this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_ERROR, { action: "assignSelected", error });
      } finally {
        this.loaderService.hide();
      }
    });
  }
  static \u0275fac = function FeedbackManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackManagementComponent)(\u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(EmployeeService), \u0275\u0275directiveInject(FeedbackFormsRepository), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(ModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackManagementComponent, selectors: [["app-feedback-management"]], viewQuery: function FeedbackManagementComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bulkAssignModal = _t.first);
    }
  }, inputs: { isAwaited: "isAwaited", isContainerView: "isContainerView" }, decls: 8, vars: 2, consts: [["tableView", ""], ["bulkAssignModal", ""], [1, "card", "flex-fill"], [1, "card-body"], [4, "ngIf"], [1, "d-flex", "w-100", "align-items-center"], [1, "row", "m-2", "w-100", 3, "formGroup"], ["class", "col-lg-3 col-md-6 col-sm-12 mt-2", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "col-lg-1", 3, "click"], [3, "ngTemplateOutlet"], [1, "col-lg-3", "col-md-6", "col-sm-12", "mt-2"], [3, "formControlName", "settings"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "isRawClickable", "columns", "dataSource"], ["paginationType", "datatable-js", 3, "pageSizeChange", "pageChange", "totalRows", "pageSize", "totalPages"], ["dir", "rtl", 1, "modal-body"], ["tableClasses", "app-table no-wrap", 3, "action", "columns", "dataSource", "isRawClickable"], [1, "modal-footer", "mt-2"], ["color", "primary", "mat-raised-button", "", 1, "me-2", 3, "click"], ["color", "accent", "mat-raised-button", "", 1, "me-2", 3, "click"], ["mat-raised-button", "", 1, "me-2", 3, "click"]], template: function FeedbackManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, FeedbackManagementComponent_div_2_Template, 8, 6, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, FeedbackManagementComponent_ng_container_3_Template, 2, 1, "ng-container", 4)(4, FeedbackManagementComponent_ng_template_4_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, FeedbackManagementComponent_ng_template_6_Template, 12, 12, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isContainerView);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isContainerView);
    }
  }, dependencies: [
    PaginationComponent,
    TableComponent,
    FormInputComponent,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    FormsModule,
    CommonModule,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    MatTableModule,
    Dir,
    MatButtonModule,
    MatButton,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackManagementComponent, { className: "FeedbackManagementComponent", filePath: "src/app/main/feedback/feedback-management/feedback-management.component.ts", lineNumber: 47 });
})();
export {
  FeedbackManagementComponent
};
//# sourceMappingURL=chunk-5TB3VMQO.js.map
