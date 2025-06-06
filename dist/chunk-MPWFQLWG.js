import {
  CompanyRepository
} from "./chunk-OZGAAK5S.js";
import {
  CommentsComponent,
  CoreConstants
} from "./chunk-LKZIPKI3.js";
import {
  FeedbacksUpdateDto
} from "./chunk-6MR5BGHJ.js";
import {
  FeedbackTemplatesRepository,
  FeedbacksRepository
} from "./chunk-54OQQ7WD.js";
import "./chunk-UJWO3UBD.js";
import {
  FeedbackFormDto,
  FeedbackFormsRepository,
  FeedbackFormsUpdateDto
} from "./chunk-KG3BOM3F.js";
import "./chunk-S5OCFGQY.js";
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
import "./chunk-M2EJXGZP.js";
import {
  FormInputComponent,
  ModalService
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
  ChangeDetectorRef,
  CommonModule,
  DecimalPipe,
  Injector,
  NgClass,
  NgForOf,
  NgIf,
  PercentPipe,
  ViewContainerRef,
  of,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async,
  __spreadValues,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/feedback/feedback-form/feedback-form-base.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());

// src/supabase/types/feedback-comments.dto.ts
var FeedbackCommentsInsertDto = class {
  comment;
  created_at;
  employee_id;
  feedback_form_id;
  id;
  constructor(param = null) {
    if (param) {
      this.comment = param.comment;
      this.created_at = param.created_at;
      this.employee_id = param.employee_id;
      this.feedback_form_id = param.feedback_form_id;
      this.id = param.id;
    }
  }
};

// src/app/main/feedback/feedback-form/feedback-form-base.ts
var FeedbackFormBase = class {
  fb;
  idService;
  feedbacksFormRepository;
  feedbacksRepository;
  feedbacksTemplatesRepository;
  feedbacksFormCommentsRepository;
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
  feedbackHistoryRepository;
  criteriaTooltipRef = null;
  loading = false;
  currentEmployee = new EmployeeDto();
  formData = new FeedbackFormDto();
  formId;
  appConstants = AppConstants;
  objectivesToCreate = [];
  objectivesToUpdate = [];
  notifications = [];
  formInputs = [
    { formControlName: "template_id", type: "number", placeholder: "Id", id: "template_id", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return true;
    } },
    {
      formControlName: "criteria",
      type: "text",
      placeholder: "Criteria",
      id: "criteria",
      inputClass: "w-100",
      formFieldClass: "w-100 small",
      appearance: "outline",
      disabled: (form) => {
        return true;
      },
      tooltip$: (row) => {
        if (!row.tooltipData && this.criteriaTooltipRef) {
          row.tooltipData = {
            templateRef: this.criteriaTooltipRef
          };
          this.feedbackHistoryRepository.getByCriteriaNameForEmployee(row.criteria, this.formData.employee?.email || "").then((data) => {
            const periods = ["2022/1", "2022/2", "2023/1", "2023/2", "2024/1"];
            const headers = periods;
            const columns = periods.map((period, order) => {
              const found = data.find((x) => x.order === order);
              return found ? found.weight : null;
            });
            row.tooltipData = {
              templateRef: this.criteriaTooltipRef,
              data: { headers, columns }
            };
          });
        }
        return of(row.tooltipData);
      }
    },
    { formControlName: "trend", type: "trend-select", placeholder: "Trend", id: "trend", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return !this.isManager() && !this.isAdmin() || !this.canEdit();
    } },
    {
      formControlName: "improvement_employee",
      type: "textarea",
      placeholder: "Improvement employee",
      id: "improvement_employee",
      inputClass: "w-100",
      formFieldClass: "w-100 small",
      appearance: "outline",
      disabled: (form) => {
        return !this.isEmployee() && !this.isAdmin() || !this.canEdit();
      },
      additional: { minRows: 1 }
    },
    { formControlName: "improvement_manager", type: "textarea", placeholder: "Improvement manager", id: "improvement_manager", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return !this.isManager() && !this.isAdmin() || !this.canEdit();
    }, additional: { minRows: 1 } },
    {
      formControlName: "preservation_employee",
      type: "textarea",
      placeholder: "Preservation employee",
      id: "preservation_employee",
      inputClass: "w-100",
      formFieldClass: "w-100 small",
      appearance: "outline",
      disabled: (form) => {
        return !this.isEmployee() && !this.isAdmin() || !this.canEdit();
      },
      additional: { minRows: 1 }
    },
    { formControlName: "preservation_manager", type: "textarea", placeholder: "Preservation manager", id: "preservation_manager", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return !this.isManager() && !this.isAdmin() || !this.canEdit();
    }, additional: { minRows: 1 } },
    { formControlName: "periodic_score", type: "number", placeholder: "Periodic score", id: "periodic_score", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return !this.isManager() && !this.isAdmin() || !this.canEdit();
    } },
    { formControlName: "weight", type: "number", placeholder: "Weight", id: "weight", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return !this.isAdmin() || !this.canEdit();
    } },
    { formControlName: "weighted_score", type: "number", placeholder: "Weighted score", id: "weighted_score", inputClass: "w-100", formFieldClass: "w-100 small", appearance: "outline", disabled: (form) => {
      return true;
    } }
  ];
  columns = [
    { field: "template_id", title: "ID", type: "number", width: "7%", visible: () => {
      return true;
    } },
    { field: "criteria", title: "Criteria", type: "criteria", width: "10%", visible: () => {
      return true;
    } },
    { field: "trend", title: "Trend", type: "trend", width: "7%", visible: () => {
      return this.isManager() || this.isAdmin();
    } },
    { field: "improvement_employee", title: "Improvement employee", width: "13%", visible: () => {
      return this.formData.assigned_to != "manager";
    } },
    { field: "improvement_manager", title: "Improvement manager", width: "13%", visible: () => {
      return this.isManager() || this.isAdmin();
    } },
    { field: "preservation_employee", title: "Preservation employee", width: "13%", visible: () => {
      return this.formData.assigned_to != "manager";
    } },
    { field: "preservation_manager", title: "Preservation manager", width: "13%", visible: () => {
      return this.isManager() || this.isAdmin();
    } },
    { field: "periodic_score", title: "Periodic score", type: "percentage", width: "10%", visible: () => {
      return this.isManager() || this.isAdmin();
    } },
    { field: "weight", title: "Weight", type: "percentage", width: "10%", visible: () => {
      return this.isManager() || this.isAdmin();
    } },
    { field: "weighted_score", title: "Weighted Score", type: "percentage", width: "10%", visible: () => {
      return this.isManager() || this.isAdmin();
    } }
  ];
  newIssueComment = "";
  //@ViewChild('issueModal') issueModal: TemplateRef<any> | null = null;
  isContainerView = false;
  isLoaded = false;
  criteriaTemplates = [];
  //footerData = {} as FeedbackDto
  payrolls;
  manager = void 0;
  timelineStatuses = [];
  dataSource = new MatTableDataSource([]);
  footerData = {};
  totalWeight = 0;
  totalWeightError = false;
  managerEvaluationInputs = [
    {
      formControlName: "manager_evaluation_text",
      type: "textarea",
      label: `Manager's General Evaluation`,
      id: "manager_evaluation_text",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => !this.isManager() && !this.isAdmin() || !this.canEdit()
    },
    {
      formControlName: "manager_weight",
      type: "number",
      label: "Manager Evaluation Weight (%)",
      id: "manager_weight",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => !this.isAdmin() || !this.canEdit()
    },
    {
      formControlName: "manager_periodic_score",
      type: "number",
      label: "Manager Periodic Score (0-100)",
      id: "manager_periodic_score",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => !this.isManager() && !this.isAdmin() || !this.canEdit()
    },
    {
      formControlName: "manager_weighted_score",
      type: "number",
      label: "Manager Weighted Score (0-100)",
      id: "manager_weighted_score",
      inputClass: "w-100",
      formFieldClass: "w-100",
      appearance: "outline",
      disabled: () => true
    }
  ];
  tableRowFormGroups = {
    formGroups: [],
    formInputs: this.formInputs
  };
  managerEvaluationForm;
  constructor(fb, idService, feedbacksFormRepository, feedbacksRepository, feedbacksTemplatesRepository, feedbacksFormCommentsRepository, supabaseAuthService, storageService, snackBar, translate, spinner, modalService, activatedRoute, commentsRepository, employeeRepository, cdr, eventService, loaderService, feedbackHistoryRepository) {
    this.fb = fb;
    this.idService = idService;
    this.feedbacksFormRepository = feedbacksFormRepository;
    this.feedbacksRepository = feedbacksRepository;
    this.feedbacksTemplatesRepository = feedbacksTemplatesRepository;
    this.feedbacksFormCommentsRepository = feedbacksFormCommentsRepository;
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
    this.feedbackHistoryRepository = feedbackHistoryRepository;
  }
  createManagerEvaluationForm() {
    this.managerEvaluationForm = this.fb.group({
      manager_evaluation_text: ["", [Validators.required]],
      manager_weight: [0],
      manager_periodic_score: [0, [Validators.required, Validators.max(100)]],
      manager_weighted_score: [0]
    });
    this.managerEvaluationForm.valueChanges.subscribe((newValue) => {
      this.calculateEvaluationSummary();
    });
  }
  createFeedbackForm(data) {
    const form = this.fb.group({
      app_form_id: [0],
      template_id: [0],
      criteria: [""],
      trend: [""],
      improvement_employee: [""],
      improvement_manager: [""],
      preservation_employee: [""],
      preservation_manager: [""],
      periodic_score: [0],
      weight: [0],
      weighted_score: [0]
    }, {
      validators: [validatePercentageLimit(), this.validateFeedbackFields()]
    });
    this.addFormEventListeners(form);
    form.patchValue(data);
    return form;
  }
  addFormEventListeners(form) {
    form.valueChanges.subscribe((newValue) => {
      console.log("newValue", newValue);
      let feedback = this.formData.feedbacks.find((x) => x.app_form_id == newValue.app_form_id);
      if (feedback && feedback.app_form_id == newValue.app_form_id) {
        feedback.periodic_score = Number(newValue.periodic_score);
        feedback.weight = Number(newValue.weight);
        feedback.weighted_score = Number((feedback.periodic_score * feedback.weight / 100).toFixed(2));
        feedback.improvement_employee = newValue.improvement_employee;
        feedback.improvement_manager = newValue.improvement_manager;
        feedback.preservation_employee = newValue.preservation_employee;
        feedback.preservation_manager = newValue.preservation_manager;
        feedback.trend = newValue.trend;
        feedback.template_id = newValue.template_id;
        feedback.criteria = newValue.criteria;
        form.get("weighted_score")?.setValue(feedback?.weighted_score, { emitEvent: false });
      }
      this.calculateEvaluationSummary();
    });
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
        this.manager = new EmployeeDto(manager);
      });
    }
  }
  initForm() {
    if (this.formId) {
      this.spinner.show();
      this.loaderService.show();
      this.feedbacksFormRepository.getByIdWithFeedbacks(this.formId).then((data) => {
        if (data) {
          if (data.comments) {
            data.comments?.forEach((comment) => {
              comment.employee = new EmployeeDto(comment.employee, this.storageService);
            });
          }
          if (data.employee) {
            data.employee = new EmployeeDto(data.employee);
          }
          if (data.status == "sended_to_manager") {
            this.askToChooseEmployee();
          }
          this.isLoaded = true;
          this.loaderService.hide();
          this.initManager(data);
          this.formData = data;
          this.setTimelineStatuses();
          data.feedbacks.forEach((x) => {
            x.isEdit = true;
            x.editType = "form";
            x.app_form_id = Math.floor(Math.random() * 1e4);
            this.tableRowFormGroups.formGroups.push(this.createFeedbackForm(x));
          });
          this.dataSource.data = data.feedbacks;
          this.calculateEvaluationSummary();
          this.managerEvaluationForm.patchValue(data);
        }
      });
    }
  }
  calculateEvaluationSummary() {
    const weight = Number(this.managerEvaluationForm?.get("manager_weight")?.value) || 0;
    const periodic = Number(this.managerEvaluationForm?.get("manager_periodic_score")?.value) || 0;
    const weighted = weight && periodic ? weight * periodic / 100 : 0;
    this.managerEvaluationForm?.get("manager_weighted_score")?.setValue(weighted, { emitEvent: false });
    this.formData.manager_weighted_score = weighted;
    const feedbacksWeightedSum = (this.formData.feedbacks || []).reduce((sum, f) => sum + (Number(f.weighted_score) || 0), 0);
    this.formData.final_weighted_grade = feedbacksWeightedSum + (this.formData.manager_weighted_score || 0);
    const feedbacksWeightSum = (this.formData.feedbacks || []).reduce((sum, f) => sum + (Number(f.weight) || 0), 0);
    this.totalWeight = feedbacksWeightSum + (weight || 0);
    this.totalWeightError = this.totalWeight !== 100;
  }
  setTimelineStatuses() {
    let copy = JSON.parse(JSON.stringify(AppConstants.feedbackStatuses));
    if (this.formData.assigned_to == "manager") {
      CoreConstants.swapElementsInArray(copy, copy[1], copy[2]);
    }
    this.timelineStatuses = copy;
  }
  askToChooseEmployee() {
    if (this.formData.employee_id) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Form assignment"),
        text: this.translate.instant("Who will fill this form?"),
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: this.translate.instant("Me"),
        cancelButtonText: this.formData.employee ? this.formData.employee.display_name : this.translate.instant("Employee")
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
    this.formData.assigned_to = "manager";
    this.formData.status = AppConstants.AWAITING_MANAGER;
    this.updateForm("assign_to_manager").then(() => this.emitStatusEvent("assignToManager")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_ERROR, { action: "assignToManager", error }));
  }
  assignToEmployee() {
    this.formData.assigned_to = "employee";
    this.formData.status = AppConstants.AWAITING_EMPLOYEE;
    this.updateForm("assign_to_employee").then(() => this.emitStatusEvent("assignToEmployee")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_ERROR, { action: "assignToEmployee", error }));
  }
  onReassignClick(action) {
    this.formData.status = AppConstants.PENDING_PERFORMANCE_ENTRY;
    this.updateForm(action).then(() => this.emitStatusEvent("onReassignClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_ERROR, { action: "onReassignClick", error }));
  }
  onApproveClick(action) {
    let hasErrors = false;
    if (this.isSendToApproveStep() || this.isApproveStep()) {
      this.tableRowFormGroups.formGroups.forEach((x) => {
        x.markAllAsTouched();
        x.updateValueAndValidity();
        hasErrors = hasErrors || x.invalid;
      });
    }
    if (hasErrors) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Validation Error"),
        text: this.translate.instant("Please check all feedback fields"),
        icon: "warning"
      });
      return;
    }
    if (this.formData.assigned_to == "employee" && this.formData.status == AppConstants.AWAITING_MANAGER || this.formData.assigned_to == "manager" && this.formData.status == AppConstants.AWAITING_EMPLOYEE) {
      this.formData.status = AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER;
      this.saveFeedbacks(action).then(() => this.emitStatusEvent("onApproveClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onApproveClick", error }));
      return;
    }
    if (this.formData.assigned_to == "employee" && this.formData.status == AppConstants.AWAITING_EMPLOYEE) {
      this.formData.status = AppConstants.AWAITING_MANAGER;
      this.saveFeedbacks(action).then(() => this.emitStatusEvent("onApproveClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onApproveClick", error }));
      return;
    }
    if (this.formData.assigned_to == "manager" && this.formData.status == AppConstants.AWAITING_MANAGER) {
      this.formData.status = AppConstants.AWAITING_EMPLOYEE;
      this.saveFeedbacks(action).then(() => this.emitStatusEvent("onApproveClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onApproveClick", error }));
      return;
    }
    this.saveFeedbacks(action).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onApproveClick", error }));
  }
  onSendToVPClick(action) {
    return __async(this, null, function* () {
      let hasErrors = false;
      this.tableRowFormGroups.formGroups.forEach((x) => {
        x.markAllAsTouched();
        x.updateValueAndValidity();
        hasErrors = hasErrors || x.invalid;
      });
      if (hasErrors) {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Validation Error"),
          text: this.translate.instant("Please check all feedback fields"),
          icon: "warning"
        });
        return;
      }
      if (this.totalWeightError) {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Validation Error"),
          text: this.translate.instant("Total Weight must be exactly 100%"),
          icon: "warning"
        });
        return;
      }
      this.managerEvaluationForm.markAllAsTouched();
      if (this.managerEvaluationForm.invalid) {
        import_sweetalert2.default.fire({
          title: this.translate.instant("Validation Error"),
          text: this.translate.instant("Fill all required fields"),
          icon: "warning"
        });
        return;
      }
      Object.assign(this.formData, this.managerEvaluationForm.getRawValue());
      if (this.currentEmployee.id == this.formData.employee?.reporting_manager_id) {
        try {
          const managers = yield this.employeeRepository.getReportingManagers(this.currentEmployee.id);
          if (!managers || managers.length < 2) {
            this.formData.status = AppConstants.FINISHED;
            yield this.saveFeedbacks("finalize").then(() => this.emitStatusEvent("onFinalizeClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onFinalizeClick", error }));
          } else {
            const vpManager = managers.find((m) => m.order_num === 2);
            if (vpManager) {
              const vpRow = yield this.employeeRepository.getById(vpManager.employee_id);
              if (this.formData.employee) {
                this.formData.employee.vp = new EmployeeDto(vpRow);
              }
            }
            this.formData.status = AppConstants.SENT_FOR_VP_APPROVAL;
            this.saveFeedbacks(action).then(() => this.emitStatusEvent("onSendToVPClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onSendToVPClick", error }));
          }
        } catch (error) {
          this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onSendToVPClick", error });
        }
      }
    });
  }
  onFinalizeClick(action) {
    if (this.totalWeightError) {
      import_sweetalert2.default.fire({
        title: this.translate.instant("Validation Error"),
        text: this.translate.instant("Total Weight must be exactly 100%"),
        icon: "warning"
      });
      return;
    }
    if (this.currentEmployee.id == this.formData.creator_id || this.currentEmployee.isAdmin()) {
      this.formData.status = AppConstants.FINISHED;
      this.saveFeedbacks(action).then(() => this.emitStatusEvent("onFinalizeClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action: "onFinalizeClick", error }));
    }
  }
  onReportIssueClick(commentText) {
    if (this.currentEmployee && this.currentEmployee.id && this.formId && commentText) {
      this.formData.status = AppConstants.AWAITED_PROBLEM_RESOLVING;
      this.updateForm().then(() => this.emitStatusEvent("onReportIssueClick")).catch((error) => this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_ERROR, { action: "onReportIssueClick", error }));
      let comment = new FeedbackCommentsInsertDto();
      comment.comment = commentText;
      comment.created_at = (/* @__PURE__ */ new Date()).toDateString();
      comment.employee_id = this.currentEmployee.id;
      comment.feedback_form_id = this.formId;
      this.spinner.show();
      this.loaderService.show();
      this.feedbacksFormCommentsRepository.create(comment).then(() => {
        this.spinner.hide();
        this.loaderService.hide();
        this.snackBar.open(this.getSnackBarMessage("report_issue"), "Close", {
          duration: 2e3
        });
      });
    }
  }
  canEdit() {
    if (this.currentEmployee.id == this.formData.employee_id && (this.formData.status == AppConstants.AWAITING_EMPLOYEE || this.formData.status == AppConstants.AWAITED_PROBLEM_RESOLVING && this.formData.assigned_to == "employee")) {
      return true;
    }
    if (this.currentEmployee.id == this.formData.employee?.reporting_manager_id && (this.formData.status == AppConstants.AWAITING_MANAGER || this.formData.status == AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER || this.formData.status == AppConstants.AWAITED_PROBLEM_RESOLVING)) {
      return true;
    }
    if ((this.currentEmployee.isGlobalAdmin() || this.currentEmployee.isAdmin()) && this.formData.status != AppConstants.FINISHED) {
      return true;
    }
    return false;
  }
  isAssignStep() {
    return AppConstants.PENDING_PERFORMANCE_ENTRY == this.formData.status && this.isManager();
  }
  isRejectStep() {
    if (this.isManager() && this.formData.status == AppConstants.AWAITING_MANAGER && this.formData.assigned_to == "employee") {
      return true;
    }
    if (this.isEmployee() && this.formData.status == AppConstants.AWAITING_EMPLOYEE && this.formData.assigned_to == "manager") {
      return true;
    }
    return false;
  }
  isFinalizeStep() {
    if (this.currentEmployee.isAdmin() && this.formData.status == AppConstants.SENT_FOR_VP_APPROVAL) {
      return true;
    }
    return false;
  }
  isSendToApproveStep() {
    if (this.isEmployee() && (this.formData.status == AppConstants.AWAITING_EMPLOYEE || this.formData.status == AppConstants.AWAITED_PROBLEM_RESOLVING) && this.formData.assigned_to == "employee") {
      return true;
    }
    if (this.isManager() && (this.formData.status == AppConstants.AWAITING_MANAGER || this.formData.status == AppConstants.AWAITED_PROBLEM_RESOLVING) && this.formData.assigned_to == "manager") {
      return true;
    }
    return false;
  }
  isApproveStep() {
    if (this.formData.status == AppConstants.AWAITING_EMPLOYEE && this.isEmployee() && this.formData.assigned_to == "manager" || this.formData.status == AppConstants.AWAITING_MANAGER && this.isManager() && this.formData.assigned_to == "employee") {
      return true;
    }
    return false;
  }
  isSendToVPStep() {
    if (this.isManager() && this.formData.status == AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER) {
      return true;
    }
    return false;
  }
  isEmployee() {
    return this.currentEmployee.id == this.formData.employee_id;
  }
  isManager() {
    return this.currentEmployee.id == this.formData.employee?.reporting_manager_id;
  }
  isHR() {
    return this.currentEmployee.role == AppConstants.ROLE_HR;
  }
  isPAYROLL() {
    return this.currentEmployee.role == AppConstants.ROLE_PAYROLL;
  }
  isAdmin() {
    return this.currentEmployee.role == AppConstants.ROLE_PAYROLL || this.currentEmployee.role == AppConstants.ROLE_HR || this.currentEmployee.role == AppConstants.ROLE_GLOBAL_ADMIN;
  }
  validateFeedbackFields() {
    return (form) => {
      const improvementEmployee = form.get("improvement_employee");
      const preservationEmployee = form.get("preservation_employee");
      const improvementManager = form.get("improvement_manager");
      const preservationManager = form.get("preservation_manager");
      const trend = form.get("trend");
      const periodicScore = form.get("periodic_score");
      improvementEmployee?.setErrors(null);
      preservationEmployee?.setErrors(null);
      improvementManager?.setErrors(null);
      preservationManager?.setErrors(null);
      trend?.setErrors(null);
      periodicScore?.setErrors(null);
      if (this.isEmployee()) {
        if (!improvementEmployee?.value) {
          improvementEmployee?.setErrors({ required: true });
        }
        if (!preservationEmployee?.value) {
          preservationEmployee?.setErrors({ required: true });
        }
      }
      if (this.isManager()) {
        if (!improvementManager?.value) {
          improvementManager?.setErrors({ required: true });
        }
        if (!preservationManager?.value) {
          preservationManager?.setErrors({ required: true });
        }
        if (!trend?.value) {
          trend?.setErrors({ required: true });
        }
        if (this.isSendToVPStep()) {
          if (!periodicScore?.value) {
            periodicScore?.setErrors({ required: true });
          }
          if (periodicScore?.value === null || periodicScore?.value === void 0 || periodicScore?.value > 100) {
            periodicScore?.setErrors({ max: 100 });
          }
        }
      }
      return null;
    };
  }
  saveFeedbacks(action = "saved") {
    return new Promise((resolve, reject) => {
      this.loading = true;
      this.spinner.show();
      this.loaderService.show();
      let copy = this.formData.feedbacks.map((x) => new FeedbacksUpdateDto(x));
      this.feedbacksRepository.upsertRange(copy).then(() => {
        this.updateForm(action).then(() => {
          this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_SUCCESS, { action, data: this.formData });
          resolve();
        });
      }, (err) => {
        this.loading = false;
        this.eventService.next(EventConstants.FEEDBACK_FORM_SAVE_ERROR, { action, error: err });
        import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something go wrong."), "error");
        reject(err);
      });
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "Delete": {
        if (event.data.id) {
          this.eventService.next(EventConstants.FEEDBACK_DELETED, { id: event.data.id, data: event.data });
        }
        this.formData.feedbacks = this.formData.feedbacks.filter((item) => item !== event.data);
        break;
      }
      case "send-comment": {
        let comment = new FeedbackCommentsInsertDto();
        if (this.formId && this.currentEmployee.id) {
          comment.feedback_form_id = this.formId;
          comment.employee_id = this.currentEmployee.id;
          comment.comment = event.data;
          this.spinner.show();
          this.loaderService.show();
          comment.created_at = (/* @__PURE__ */ new Date()).toDateString();
          this.feedbacksFormCommentsRepository.create(comment).then((result) => {
            if (result && result.length > 0) {
              this.commentsRepository.getByIdWithEmployee(result[0].id).then((comment2) => {
                if (comment2) {
                  if (!this.formData.comments) {
                    this.formData.comments = [];
                  }
                  comment2.employee = new EmployeeDto(comment2.employee, this.storageService);
                  this.formData.comments.push(comment2);
                }
              });
            }
            this.spinner.hide();
            this.loaderService.hide();
            this.snackBar.open(this.getSnackBarMessage("send-comment"), this.translate.instant("Close"), {
              duration: 2e3
            });
            this.eventService.next(EventConstants.FEEDBACK_COMMENT_SENT, { data: event.data });
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
  updateForm(action = "saved") {
    return new Promise((resolve, reject) => {
      if (this.formData.id) {
        var data = new FeedbackFormsUpdateDto(this.formData);
        data = Object.assign(data, this.managerEvaluationForm.value);
        this.spinner.show();
        this.loaderService.show();
        this.feedbacksFormRepository.update(this.formData.id, data).then(() => {
          this.spinner.hide();
          this.loaderService.hide();
          this.snackBar.open(this.getSnackBarMessage(action), this.translate.instant("Close"), {
            duration: 2e3
          });
          this.loading = false;
          this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_SUCCESS, { action, data: this.formData });
          resolve();
        }, (err) => {
          this.loading = false;
          this.eventService.next(EventConstants.FEEDBACK_FORM_UPDATE_ERROR, { action, error: err });
          import_sweetalert2.default.fire(this.translate.instant("Server error!"), this.translate.instant("Something go wrong."), "success");
          reject(err);
        });
      } else {
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
      case "send_to_vp":
        return this.translate.instant("Form sent to vp!");
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
  // setNotification(to: string, form: FeedbackFormDto) {
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
    return this.timelineStatuses.findIndex((x) => x.key == this.formData.status);
  }
  // Helper function to emit status event
  emitStatusEvent(action) {
    const status = this.formData.status;
    switch (status) {
      case AppConstants.PENDING_PERFORMANCE_ENTRY:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_PENDING_PERFORMANCE_ENTRY, { action, data: this.formData });
        break;
      case AppConstants.AWAITING_EMPLOYEE:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_AWAITING_EMPLOYEE, { action, data: this.formData });
        break;
      case AppConstants.AWAITING_MANAGER:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_AWAITING_MANAGER, { action, data: this.formData });
        break;
      case AppConstants.AWAITED_PROBLEM_RESOLVING:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_AWAITED_PROBLEM_RESOLVING, { action, data: this.formData });
        break;
      case AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_APPROVED_BY_EMPLOYEE_AND_MANAGER, { action, data: this.formData });
        break;
      case AppConstants.SENT_FOR_VP_APPROVAL:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_SENT_FOR_VP_APPROVAL, { action, data: this.formData });
        break;
      case AppConstants.FINISHED:
        this.eventService.next(EventConstants.FEEDBACK_FORM_STATUS_FINISHED, { action, data: this.formData });
        break;
    }
  }
};
function validatePercentageLimit() {
  return (formGroup) => {
    const weight = formGroup.get("weight");
    const periodic_score = formGroup.get("periodic_score");
    const errors = {};
    if (weight?.value > 100)
      weight?.setErrors({ max: 100 });
    if (periodic_score?.value > 100)
      periodic_score?.setErrors({ max: 100 });
    return Object.keys(errors).length > 0 ? errors : null;
  };
}

// src/supabase/repositories/feedback-comments.repository.ts
var FeedbackCommentsRepository = class _FeedbackCommentsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feedback_comments", spinner, loaderService);
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
  static \u0275fac = function FeedbackCommentsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackCommentsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbackCommentsRepository, factory: _FeedbackCommentsRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/feedbacks-history.repository.ts
var FeedbacksHistoryRepository = class _FeedbacksHistoryRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feedbacks_history", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByCriteriaNameForEmployee(criteriaName, email) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*").eq("criteria", criteriaName).eq("email", email);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function FeedbacksHistoryRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbacksHistoryRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbacksHistoryRepository, factory: _FeedbacksHistoryRepository.\u0275fac, providedIn: "root" });
};

// src/app/main/feedback/feedback-form/custom/feedback-form-caesearea.component.ts
var _c0 = ["criteriaTooltip"];
var _c1 = (a0, a1, a2) => ({ "completed": a0, "current": a1, "pending": a2 });
var _c2 = (a0) => ({ "completed": a0 });
var _c3 = (a0, a1) => ({ "alert-danger": a0, "alert-success": a1 });
function FeedbackFormCaesareaComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "This form is duplicated!"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.manager.getEmployeeName(), "");
  }
}
function FeedbackFormCaesareaComponent_div_6_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveFeedbacks());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Save"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReassignClick("reassign"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Reassign"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApproveClick("approve"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Approve"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApproveClick("send_to_approve"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Send to approve"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendToVPClick("send_to_vp"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Send to VP"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFinalizeClick("finalize"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Finalize"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "b")(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignToManager());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "b")(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275listener("click", function FeedbackFormCaesareaComponent_div_6_div_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignToEmployee());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "Assign Form to:"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "Manager"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "or"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "Employee"), " ");
  }
}
function FeedbackFormCaesareaComponent_div_6_ng_container_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
  if (rf & 2) {
    const i_r10 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c2, ctx_r1.isCompleted(i_r10)));
  }
}
function FeedbackFormCaesareaComponent_div_6_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FeedbackFormCaesareaComponent_div_6_ng_container_24_div_1_Template, 1, 3, "div", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275element(3, "div", 36);
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const status_r11 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r10 > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c1, ctx_r1.isCompleted(i_r10), ctx_r1.isCurrent(i_r10), !ctx_r1.isCompleted(i_r10) && !ctx_r1.isCurrent(i_r10)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, status_r11.name));
  }
}
function FeedbackFormCaesareaComponent_div_6_div_33_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275element(2, "app-form-input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const input_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", input_r12.formControlName)("settings", input_r12);
  }
}
function FeedbackFormCaesareaComponent_div_6_div_33_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "Total must be 100%"), ")");
  }
}
function FeedbackFormCaesareaComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "h5")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "hr");
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275template(7, FeedbackFormCaesareaComponent_div_6_div_33_ng_container_7_Template, 3, 2, "ng-container", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 41)(9, "div", 42)(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 43);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 42)(17, "label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 44)(24, "div", 45);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275template(27, FeedbackFormCaesareaComponent_div_6_div_33_span_27_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "Evaluation Summary"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.managerEvaluationForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.managerEvaluationInputs);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "Total Weight"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 15, ctx_r1.totalWeight, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 18, "Final Weighted Grade"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 20, ctx_r1.formData.final_weighted_grade, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c3, ctx_r1.totalWeightError, !ctx_r1.totalWeightError));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(26, 23, "Total Weight:"), " ", ctx_r1.totalWeight, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.totalWeightError);
  }
}
function FeedbackFormCaesareaComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FeedbackFormCaesareaComponent_div_6_span_12_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275template(14, FeedbackFormCaesareaComponent_div_6_button_14_Template, 3, 4, "button", 14)(15, FeedbackFormCaesareaComponent_div_6_button_15_Template, 3, 4, "button", 15)(16, FeedbackFormCaesareaComponent_div_6_button_16_Template, 3, 4, "button", 15)(17, FeedbackFormCaesareaComponent_div_6_button_17_Template, 3, 4, "button", 15)(18, FeedbackFormCaesareaComponent_div_6_button_18_Template, 3, 4, "button", 15)(19, FeedbackFormCaesareaComponent_div_6_button_19_Template, 3, 4, "button", 16)(20, FeedbackFormCaesareaComponent_div_6_div_20_Template, 15, 14, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19)(23, "div", 20);
    \u0275\u0275template(24, FeedbackFormCaesareaComponent_div_6_ng_container_24_Template, 7, 9, "ng-container", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 23)(27, "h5")(28, "b");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "app-table", 24);
    \u0275\u0275listener("action", function FeedbackFormCaesareaComponent_div_6_Template_app_table_action_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, FeedbackFormCaesareaComponent_div_6_div_33_Template, 28, 28, "div", 25);
    \u0275\u0275elementStart(34, "app-comments", 26);
    \u0275\u0275listener("action", function FeedbackFormCaesareaComponent_div_6_Template_app_comments_action_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 20, "Form for:"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formData.employee == null ? null : ctx_r1.formData.employee.getEmployeeName(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, "Form manager:"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.manager);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.isApproveStep() || ctx_r1.isSendToApproveStep()) && ctx_r1.isManager());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isApproveStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSendToApproveStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSendToVPStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFinalizeStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAssignStep());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.timelineStatuses);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 24, "Feedbacks"));
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx_r1.columns)("dataSource", ctx_r1.dataSource)("rowFormGroups", ctx_r1.tableRowFormGroups);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEmployee() || ctx_r1.isFinalizeStep());
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r1.formData.status ? ctx_r1.formData.status : "")("isRejectStep", ctx_r1.isRejectStep() && (ctx_r1.canEdit() || ctx_r1.isAdmin()))("comments", ctx_r1.formData.comments);
  }
}
function FeedbackFormCaesareaComponent_ng_template_7_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r13);
  }
}
function FeedbackFormCaesareaComponent_ng_template_7_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const score_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, score_r14 / 100, "1.0-2"), " ");
  }
}
function FeedbackFormCaesareaComponent_ng_template_7_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "-"), " ");
  }
}
function FeedbackFormCaesareaComponent_ng_template_7_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, FeedbackFormCaesareaComponent_ng_template_7_td_5_span_1_Template, 3, 4, "span", 12)(2, FeedbackFormCaesareaComponent_ng_template_7_td_5_span_2_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const score_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", score_r14 > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !score_r14);
  }
}
function FeedbackFormCaesareaComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49)(2, "tr");
    \u0275\u0275template(3, FeedbackFormCaesareaComponent_ng_template_7_th_3_Template, 2, 1, "th", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tr");
    \u0275\u0275template(5, FeedbackFormCaesareaComponent_ng_template_7_td_5_Template, 3, 2, "td", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", data_r15.headers);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", data_r15.columns);
  }
}
var FeedbackFormCaesareaComponent = class _FeedbackFormCaesareaComponent extends FeedbackFormBase {
  fb;
  idService;
  feedbacksFormRepository;
  feedbacksRepository;
  feedbacksTemplatesRepository;
  feedbacksFormCommentsRepository;
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
  feedbackHistoryRepository;
  criteriaTooltip;
  constructor(fb, idService, feedbacksFormRepository, feedbacksRepository, feedbacksTemplatesRepository, feedbacksFormCommentsRepository, supabaseAuthService, storageService, snackBar, translate, spinner, modalService, activatedRoute, commentsRepository, employeeRepository, cdr, eventService, loaderService, feedbackHistoryRepository) {
    super(fb, idService, feedbacksFormRepository, feedbacksRepository, feedbacksTemplatesRepository, feedbacksFormCommentsRepository, supabaseAuthService, storageService, snackBar, translate, spinner, modalService, activatedRoute, commentsRepository, employeeRepository, cdr, eventService, loaderService, feedbackHistoryRepository);
    this.fb = fb;
    this.idService = idService;
    this.feedbacksFormRepository = feedbacksFormRepository;
    this.feedbacksRepository = feedbacksRepository;
    this.feedbacksTemplatesRepository = feedbacksTemplatesRepository;
    this.feedbacksFormCommentsRepository = feedbacksFormCommentsRepository;
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
    this.feedbackHistoryRepository = feedbackHistoryRepository;
  }
  ngOnInit() {
    this.idService.getId("feedback-form").subscribe((id) => {
      if (id) {
        this.formId = id;
      }
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (employee) {
        this.currentEmployee = employee;
      }
    });
    this.isContainerView = this.activatedRoute.snapshot.data["isContainerView"];
    this.createManagerEvaluationForm();
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {
    this.criteriaTooltipRef = this.criteriaTooltip;
    this.initForm();
    this.initPayrolls();
  }
  static \u0275fac = function FeedbackFormCaesareaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackFormCaesareaComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(FeedbackFormsRepository), \u0275\u0275directiveInject(FeedbacksRepository), \u0275\u0275directiveInject(FeedbackTemplatesRepository), \u0275\u0275directiveInject(FeedbackCommentsRepository), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FeedbackCommentsRepository), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(FeedbacksHistoryRepository));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackFormCaesareaComponent, selectors: [["app-feedback-form-caesearea"]], viewQuery: function FeedbackFormCaesareaComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.criteriaTooltip = _t.first);
    }
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 3, consts: [["criteriaTooltip", ""], [1, "card", "flex-fill"], [1, "card-header", "d-flex", "align-items-baseline", "justify-content-between"], ["class", "alert alert-primary", 4, "ngIf"], [1, "card-body"], ["class", " mt-4 mb-5", 4, "ngIf"], [1, "alert", "alert-primary"], [1, "mt-4", "mb-5"], [1, "row"], [1, "col-lg-6", "col-sm-12", "gap-2", "d-flex", "align-items-baseline"], [1, "bg-secondary", "card", "p-3", "d-block", "mb-0"], [1, "bg-secondary", "card", "card", "p-3", "d-block", "mb-0"], [4, "ngIf"], [1, "col-lg-6", "col-sm-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "submit", "mat-raised-button", "", "color", "accent", "class", "me-2", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "class", "me-2", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "me-2", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "mt-3", "d-flex", "align-items-center", "justify-content-between"], [1, "col-12"], [1, "d-flex", "flex-row", "gap-1", "flex-wrap", "align-items-center", "step-bar"], [4, "ngFor", "ngForOf"], [1, "pt-3"], [1, "d-flex", "align-items-baseline"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "columns", "dataSource", "rowFormGroups"], ["class", "evaluation-summary-section mt-4", 4, "ngIf"], [3, "action", "status", "isRejectStep", "comments"], ["type", "submit", "mat-raised-button", "", "color", "accent", 1, "me-2", 3, "click", "disabled"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "me-2", 3, "click", "disabled"], [1, "d-flex", "align-items-center"], [1, "ms-2"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "ms-2", 3, "click", "disabled"], [1, "ms-2", "me-2"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["class", "line", 3, "ngClass", 4, "ngIf"], [1, "step-status", "flex-row", "gap-2", 3, "ngClass"], [1, "circle"], [1, "status-name"], [1, "line", 3, "ngClass"], [1, "evaluation-summary-section", "mt-4"], [1, "row", 3, "formGroup"], [1, "row", "mt-3"], [1, "col-md-3", "mb-2"], ["readonly", "", 1, "form-control", "bg-light"], [1, "w-auto", "mb-2", "d-flex", "align-items-end"], [1, "alert", 3, "ngClass"], [1, "col-md-3"], [3, "formControlName", "settings"], [1, "criteria-tooltip-table-wrapper"], [1, "criteria-tooltip-table"]], template: function FeedbackFormCaesareaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, FeedbackFormCaesareaComponent_div_4_Template, 3, 3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275template(6, FeedbackFormCaesareaComponent_div_6_Template, 35, 26, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, FeedbackFormCaesareaComponent_ng_template_7_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formData.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formData.is_duplicated);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoaded);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    DecimalPipe,
    PercentPipe,
    TranslatePipe,
    TableComponent,
    CommentsComponent,
    MatButtonModule,
    MatButton,
    FormInputComponent,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName
  ], styles: ["\n\n.criteria-tooltip-table-wrapper[_ngcontent-%COMP%] {\n  min-width: 220px;\n  max-width: 340px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);\n  background-color: var(--primary-color) !important;\n  color: #fff !important;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 13px;\n  border-collapse: collapse;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--secondary-color) !important;\n  color: black !important;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--primary-color) !important;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.criteria-tooltip-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  text-align: center;\n  border-bottom: 1px solid #757575;\n  color: inherit;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=feedback-form-caesearea.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackFormCaesareaComponent, { className: "FeedbackFormCaesareaComponent", filePath: "src/app/main/feedback/feedback-form/custom/feedback-form-caesearea.component.ts", lineNumber: 41 });
})();

// src/app/main/feedback/feedback-form/feedback-form-main/feedback-form-main.component.ts
var _c02 = ["criteriaTooltip"];
var _c12 = (a0, a1, a2) => ({ "completed": a0, "current": a1, "pending": a2 });
var _c22 = (a0) => ({ "completed": a0 });
var _c32 = (a0, a1) => ({ "alert-danger": a0, "alert-success": a1 });
function FeedbackFormComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "This form is duplicated!"), " ");
  }
}
function FeedbackFormComponent_div_6_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.manager.getEmployeeName(), "");
  }
}
function FeedbackFormComponent_div_6_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveFeedbacks());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Save"), " ");
  }
}
function FeedbackFormComponent_div_6_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onReassignClick("reassign"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Reassign"), " ");
  }
}
function FeedbackFormComponent_div_6_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApproveClick("approve"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Approve"), " ");
  }
}
function FeedbackFormComponent_div_6_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onApproveClick("send_to_approve"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Send to approve"), " ");
  }
}
function FeedbackFormComponent_div_6_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendToVPClick("send_to_vp"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Send to VP"), " ");
  }
}
function FeedbackFormComponent_div_6_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFinalizeClick("finalize"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "Finalize"), " ");
  }
}
function FeedbackFormComponent_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "b")(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_div_20_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignToManager());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "b")(9, "span", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275listener("click", function FeedbackFormComponent_div_6_div_20_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignToEmployee());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "Assign Form to:"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, "Manager"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "or"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 12, "Employee"), " ");
  }
}
function FeedbackFormComponent_div_6_ng_container_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
  if (rf & 2) {
    const i_r10 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(1, _c22, ctx_r1.isCompleted(i_r10)));
  }
}
function FeedbackFormComponent_div_6_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FeedbackFormComponent_div_6_ng_container_24_div_1_Template, 1, 3, "div", 34);
    \u0275\u0275elementStart(2, "div", 35);
    \u0275\u0275element(3, "div", 36);
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const status_r11 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r10 > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c12, ctx_r1.isCompleted(i_r10), ctx_r1.isCurrent(i_r10), !ctx_r1.isCompleted(i_r10) && !ctx_r1.isCurrent(i_r10)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, status_r11.name));
  }
}
function FeedbackFormComponent_div_6_div_33_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275element(2, "app-form-input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const input_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("formControlName", input_r12.formControlName)("settings", input_r12);
  }
}
function FeedbackFormComponent_div_6_div_33_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "Total must be 100%"), ")");
  }
}
function FeedbackFormComponent_div_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "h5")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "hr");
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275template(7, FeedbackFormComponent_div_6_div_33_ng_container_7_Template, 3, 2, "ng-container", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 41)(9, "div", 42)(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 43);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 42)(17, "label");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 44)(24, "div", 45);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275template(27, FeedbackFormComponent_div_6_div_33_span_27_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 11, "Evaluation Summary"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.managerEvaluationForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.managerEvaluationInputs);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 13, "Total Weight"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 15, ctx_r1.totalWeight, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 18, "Final Weighted Grade"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 20, ctx_r1.formData.final_weighted_grade, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c32, ctx_r1.totalWeightError, !ctx_r1.totalWeightError));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(26, 23, "Total Weight:"), " ", ctx_r1.totalWeight, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.totalWeightError);
  }
}
function FeedbackFormComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11)(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FeedbackFormComponent_div_6_span_12_Template, 2, 1, "span", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275template(14, FeedbackFormComponent_div_6_button_14_Template, 3, 4, "button", 14)(15, FeedbackFormComponent_div_6_button_15_Template, 3, 4, "button", 15)(16, FeedbackFormComponent_div_6_button_16_Template, 3, 4, "button", 15)(17, FeedbackFormComponent_div_6_button_17_Template, 3, 4, "button", 15)(18, FeedbackFormComponent_div_6_button_18_Template, 3, 4, "button", 15)(19, FeedbackFormComponent_div_6_button_19_Template, 3, 4, "button", 16)(20, FeedbackFormComponent_div_6_div_20_Template, 15, 14, "div", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 18)(22, "div", 19)(23, "div", 20);
    \u0275\u0275template(24, FeedbackFormComponent_div_6_ng_container_24_Template, 7, 9, "ng-container", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 22)(26, "div", 23)(27, "h5")(28, "b");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "hr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "app-table", 24);
    \u0275\u0275listener("action", function FeedbackFormComponent_div_6_Template_app_table_action_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, FeedbackFormComponent_div_6_div_33_Template, 28, 28, "div", 25);
    \u0275\u0275elementStart(34, "app-comments", 26);
    \u0275\u0275listener("action", function FeedbackFormComponent_div_6_Template_app_comments_action_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onActionClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 20, "Form for:"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formData.employee == null ? null : ctx_r1.formData.employee.getEmployeeName(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 22, "Form manager:"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.manager);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canEdit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.isApproveStep() || ctx_r1.isSendToApproveStep()) && ctx_r1.isManager());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isApproveStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSendToApproveStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSendToVPStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isFinalizeStep());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAssignStep());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.timelineStatuses);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 24, "Feedbacks"));
    \u0275\u0275advance(3);
    \u0275\u0275property("columns", ctx_r1.columns)("dataSource", ctx_r1.dataSource)("rowFormGroups", ctx_r1.tableRowFormGroups);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isEmployee() || ctx_r1.isFinalizeStep());
    \u0275\u0275advance();
    \u0275\u0275property("status", ctx_r1.formData.status ? ctx_r1.formData.status : "")("isRejectStep", ctx_r1.isRejectStep() && (ctx_r1.canEdit() || ctx_r1.isAdmin()))("comments", ctx_r1.formData.comments);
  }
}
function FeedbackFormComponent_ng_template_7_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r13);
  }
}
function FeedbackFormComponent_ng_template_7_td_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "percent");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const score_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, score_r14 / 100, "1.0-2"), " ");
  }
}
function FeedbackFormComponent_ng_template_7_td_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "-"), " ");
  }
}
function FeedbackFormComponent_ng_template_7_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, FeedbackFormComponent_ng_template_7_td_5_span_1_Template, 3, 4, "span", 12)(2, FeedbackFormComponent_ng_template_7_td_5_span_2_Template, 3, 3, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const score_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", score_r14 > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !score_r14);
  }
}
function FeedbackFormComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "table", 49)(2, "tr");
    \u0275\u0275template(3, FeedbackFormComponent_ng_template_7_th_3_Template, 2, 1, "th", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "tr");
    \u0275\u0275template(5, FeedbackFormComponent_ng_template_7_td_5_Template, 3, 2, "td", 21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", data_r15.headers);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", data_r15.columns);
  }
}
var FeedbackFormComponent = class _FeedbackFormComponent extends FeedbackFormBase {
  fb;
  idService;
  feedbacksFormRepository;
  feedbacksRepository;
  feedbacksTemplatesRepository;
  feedbacksFormCommentsRepository;
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
  feedbackHistoryRepository;
  criteriaTooltip;
  constructor(fb, idService, feedbacksFormRepository, feedbacksRepository, feedbacksTemplatesRepository, feedbacksFormCommentsRepository, supabaseAuthService, storageService, snackBar, translate, spinner, modalService, activatedRoute, commentsRepository, employeeRepository, cdr, eventService, loaderService, feedbackHistoryRepository) {
    super(fb, idService, feedbacksFormRepository, feedbacksRepository, feedbacksTemplatesRepository, feedbacksFormCommentsRepository, supabaseAuthService, storageService, snackBar, translate, spinner, modalService, activatedRoute, commentsRepository, employeeRepository, cdr, eventService, loaderService, feedbackHistoryRepository);
    this.fb = fb;
    this.idService = idService;
    this.feedbacksFormRepository = feedbacksFormRepository;
    this.feedbacksRepository = feedbacksRepository;
    this.feedbacksTemplatesRepository = feedbacksTemplatesRepository;
    this.feedbacksFormCommentsRepository = feedbacksFormCommentsRepository;
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
    this.feedbackHistoryRepository = feedbackHistoryRepository;
  }
  ngOnInit() {
    this.idService.getId("feedback-form").subscribe((id) => {
      if (id) {
        this.formId = id;
      }
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (employee) {
        this.currentEmployee = employee;
      }
    });
    this.isContainerView = this.activatedRoute.snapshot.data["isContainerView"];
    this.createManagerEvaluationForm();
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {
    this.criteriaTooltipRef = this.criteriaTooltip;
    this.initForm();
    this.initPayrolls();
  }
  static \u0275fac = function FeedbackFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(FeedbackFormsRepository), \u0275\u0275directiveInject(FeedbacksRepository), \u0275\u0275directiveInject(FeedbackTemplatesRepository), \u0275\u0275directiveInject(FeedbackCommentsRepository), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(FeedbackCommentsRepository), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(FeedbacksHistoryRepository));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackFormComponent, selectors: [["app-feedback-form-main"]], viewQuery: function FeedbackFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.criteriaTooltip = _t.first);
    }
  }, features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 3, consts: [["criteriaTooltip", ""], [1, "card", "flex-fill"], [1, "card-header", "d-flex", "align-items-baseline", "justify-content-between"], ["class", "alert alert-primary", 4, "ngIf"], [1, "card-body"], ["class", " mt-4 mb-5", 4, "ngIf"], [1, "alert", "alert-primary"], [1, "mt-4", "mb-5"], [1, "row"], [1, "col-lg-6", "col-sm-12", "gap-2", "d-flex", "align-items-baseline"], [1, "bg-secondary", "card", "p-3", "d-block", "mb-0"], [1, "bg-secondary", "card", "card", "p-3", "d-block", "mb-0"], [4, "ngIf"], [1, "col-lg-6", "col-sm-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "submit", "mat-raised-button", "", "color", "accent", "class", "me-2", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "primary", "class", "me-2", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "me-2", "mat-raised-button", "", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["class", "d-flex align-items-center", 4, "ngIf"], [1, "mt-3", "d-flex", "align-items-center", "justify-content-between"], [1, "col-12"], [1, "d-flex", "flex-row", "gap-1", "flex-wrap", "align-items-center", "step-bar"], [4, "ngFor", "ngForOf"], [1, "pt-3"], [1, "d-flex", "align-items-baseline"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "columns", "dataSource", "rowFormGroups"], ["class", "evaluation-summary-section mt-4", 4, "ngIf"], [3, "action", "status", "isRejectStep", "comments"], ["type", "submit", "mat-raised-button", "", "color", "accent", 1, "me-2", 3, "click", "disabled"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "me-2", 3, "click", "disabled"], [1, "d-flex", "align-items-center"], [1, "ms-2"], ["type", "submit", "mat-raised-button", "", "color", "primary", 1, "ms-2", 3, "click", "disabled"], [1, "ms-2", "me-2"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["class", "line", 3, "ngClass", 4, "ngIf"], [1, "step-status", "flex-row", "gap-2", 3, "ngClass"], [1, "circle"], [1, "status-name"], [1, "line", 3, "ngClass"], [1, "evaluation-summary-section", "mt-4"], [1, "row", 3, "formGroup"], [1, "row", "mt-3"], [1, "col-md-3", "mb-2"], ["readonly", "", 1, "form-control", "bg-light"], [1, "w-auto", "mb-2", "d-flex", "align-items-end"], [1, "alert", 3, "ngClass"], [1, "col-md-3"], [3, "formControlName", "settings"], [1, "criteria-tooltip-table-wrapper"], [1, "criteria-tooltip-table"]], template: function FeedbackFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h5");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, FeedbackFormComponent_div_4_Template, 3, 3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275template(6, FeedbackFormComponent_div_6_Template, 35, 26, "div", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(7, FeedbackFormComponent_ng_template_7_Template, 6, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.formData.title);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.formData.is_duplicated);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoaded);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    DecimalPipe,
    PercentPipe,
    TranslatePipe,
    TableComponent,
    CommentsComponent,
    MatButtonModule,
    MatButton,
    FormInputComponent,
    ReactiveFormsModule,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName
  ], styles: ["\n\n.criteria-tooltip-table-wrapper[_ngcontent-%COMP%] {\n  min-width: 220px;\n  max-width: 340px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);\n  background-color: var(--primary-color) !important;\n  color: #fff !important;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 13px;\n  border-collapse: collapse;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: var(--secondary-color) !important;\n  color: black !important;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: var(--primary-color) !important;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.criteria-tooltip-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  text-align: center;\n  border-bottom: 1px solid #757575;\n  color: inherit;\n}\n.criteria-tooltip-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=feedback-form-main.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackFormComponent, { className: "FeedbackFormComponent", filePath: "src/app/main/feedback/feedback-form/feedback-form-main/feedback-form-main.component.ts", lineNumber: 42 });
})();

// src/app/main/feedback/feedback-form/feedback-form-wrapper.component.ts
var _c03 = ["container"];
function FeedbackFormWrapperComponent_ng_template_0_Template(rf, ctx) {
}
var COMPONENT_MAP = {
  main: FeedbackFormComponent,
  caesarea: FeedbackFormCaesareaComponent
};
var FeedbackFormWrapperComponent = class _FeedbackFormWrapperComponent {
  injector;
  companyRepository;
  container;
  componentRef;
  constructor(injector, companyRepository) {
    this.injector = injector;
    this.companyRepository = companyRepository;
  }
  ngOnInit() {
    this.loadComponent("caesarea");
  }
  loadComponent(type) {
    this.container.clear();
    const component = COMPONENT_MAP[type] || COMPONENT_MAP["main"];
    this.componentRef = this.container.createComponent(component, { injector: this.injector });
  }
  static \u0275fac = function FeedbackFormWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackFormWrapperComponent)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(CompanyRepository));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackFormWrapperComponent, selectors: [["app-feedback-form-wrapper"]], viewQuery: function FeedbackFormWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 7, ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.container = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["container", ""]], template: function FeedbackFormWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, FeedbackFormWrapperComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackFormWrapperComponent, { className: "FeedbackFormWrapperComponent", filePath: "src/app/main/feedback/feedback-form/feedback-form-wrapper.component.ts", lineNumber: 24 });
})();
export {
  FeedbackFormWrapperComponent
};
//# sourceMappingURL=chunk-MPWFQLWG.js.map
