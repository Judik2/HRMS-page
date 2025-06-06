import {
  FeedbackFormSearchParams
} from "./chunk-S5OCFGQY.js";
import {
  EmployeeDto
} from "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  SupabaseContext
} from "./chunk-HDIRTHWB.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/types/feedback-forms.dto.ts
var FeedbackFormsUpdateDto = class {
  assigned_to;
  created_at;
  creator_id;
  due_date;
  employee_id;
  final_weighted_grade;
  id;
  is_duplicated;
  is_employee_approved;
  is_manager_approved;
  manager_evaluation_text;
  manager_periodic_score;
  manager_weight;
  manager_weighted_score;
  status;
  title;
  constructor(param = null) {
    if (param) {
      this.assigned_to = param.assigned_to;
      this.created_at = param.created_at;
      this.creator_id = param.creator_id;
      this.due_date = param.due_date;
      this.employee_id = param.employee_id;
      this.final_weighted_grade = param.final_weighted_grade;
      this.id = param.id;
      this.is_duplicated = param.is_duplicated;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.manager_evaluation_text = param.manager_evaluation_text;
      this.manager_periodic_score = param.manager_periodic_score;
      this.manager_weight = param.manager_weight;
      this.manager_weighted_score = param.manager_weighted_score;
      this.status = param.status;
      this.title = param.title;
    }
  }
};
var FeedbackFormsInsertDto = class {
  assigned_to;
  created_at;
  creator_id;
  due_date;
  employee_id;
  final_weighted_grade;
  id;
  is_duplicated;
  is_employee_approved;
  is_manager_approved;
  manager_evaluation_text;
  manager_periodic_score;
  manager_weight;
  manager_weighted_score;
  status;
  title;
  constructor(param = null) {
    if (param) {
      this.assigned_to = param.assigned_to;
      this.created_at = param.created_at;
      this.creator_id = param.creator_id;
      this.due_date = param.due_date;
      this.employee_id = param.employee_id;
      this.final_weighted_grade = param.final_weighted_grade;
      this.id = param.id;
      this.is_duplicated = param.is_duplicated;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.manager_evaluation_text = param.manager_evaluation_text;
      this.manager_periodic_score = param.manager_periodic_score;
      this.manager_weight = param.manager_weight;
      this.manager_weighted_score = param.manager_weighted_score;
      this.status = param.status;
      this.title = param.title;
    }
  }
};
var FeedbackFormsRowDto = class {
  assigned_to;
  created_at;
  creator_id;
  due_date;
  employee_id;
  final_weighted_grade;
  id;
  is_duplicated;
  is_employee_approved;
  is_manager_approved;
  manager_evaluation_text;
  manager_periodic_score;
  manager_weight;
  manager_weighted_score;
  status;
  title;
  constructor(param = null) {
    if (param) {
      this.assigned_to = param.assigned_to;
      this.created_at = param.created_at;
      this.creator_id = param.creator_id;
      this.due_date = param.due_date;
      this.employee_id = param.employee_id;
      this.final_weighted_grade = param.final_weighted_grade;
      this.id = param.id;
      this.is_duplicated = param.is_duplicated;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.manager_evaluation_text = param.manager_evaluation_text;
      this.manager_periodic_score = param.manager_periodic_score;
      this.manager_weight = param.manager_weight;
      this.manager_weighted_score = param.manager_weighted_score;
      this.status = param.status;
      this.title = param.title;
    }
  }
};

// src/app/shared/models/dto/feedback/feedback-form.dto.ts
var FeedbackFormDto = class extends FeedbackFormsRowDto {
  feedbacks = [];
  employee;
  creator;
  comments;
  employee_display_name;
  manager_display_name;
  avatar_src = null;
  constructor(param = null, storageService = null) {
    super(param);
    if (param) {
      this.feedbacks = param.feedbacks || [];
      this.creator = new EmployeeDto(param.creator) || null;
      this.employee = new EmployeeDto(param.employee) || null;
      this.comments = param.comments || [];
      this.is_duplicated = param.is_duplicated ?? false;
    }
    this.loadEmployeeAvatar(storageService);
  }
  getEmployeeId() {
    return this.employee_id ? this.employee_id : 0;
  }
  getEmployeeName() {
    return this.employee?.getEmployeeName() || "N/A";
  }
  loadEmployeeAvatar(storageService) {
    if (this.employee) {
      this.employee.loadEmployeeAvatar(storageService);
    }
  }
  getEmployeeSign() {
    return this.employee?.getEmployeeSign() || "";
  }
  isActive() {
    return this.employee?.isActive() || false;
  }
  getEmployeeAvatar() {
    return this.employee?.getEmployeeAvatar() || null;
  }
  setEmployeeAvatar(avatar_url, avatar_name) {
    this.employee?.setEmployeeAvatar(avatar_url, avatar_name);
  }
};

// src/supabase/repositories/feedback-forms.repository.ts
var FeedbackFormsRepository = class _FeedbackFormsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feedback_forms", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByIdWithFeedbacks(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, feedbacks(*), employee!feedback_forms_employee_id_fkey(*), creator:employee!feedback_forms_creator_id_fkey(*), comments:feedback_comments(*, employee(*))").eq("id", id).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getLastFormsForEmployeeList(employeeIds) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select(`
          *,
          feedbacks(*)
        `).in("employee_id", employeeIds).order("employee_id", { ascending: true }).order("created_at", { ascending: false });
      if (error) {
        throw new Error(`Error fetching last forms: ${error.message}`);
      }
      if (!data) {
        return [];
      }
      const latestForms = Object.values(data.reduce((acc, form) => {
        if (!acc[form.employee_id]) {
          acc[form.employee_id] = form;
        }
        return acc;
      }, {}));
      return latestForms;
    });
  }
  getFilteredForms(searchParams, isAwaited) {
    return __async(this, null, function* () {
      var filters = new FeedbackFormSearchParams(searchParams);
      if (isAwaited) {
        delete filters.role;
        filters.is_awaited = true;
      }
      Object.keys(filters).forEach((key) => {
        if (key !== "role" && (filters[key] === null || filters[key] === void 0 || filters[key] === "")) {
          delete filters[key];
        }
      });
      const { data, error } = yield this.client.rpc("get_filtered_feedback_forms", { filters });
      if (error) {
        console.error("Supabase Error:", error);
        return [];
      }
      return data;
    });
  }
  getFilteredFormsCount(searchParams, isAwaited) {
    return __async(this, null, function* () {
      var filters = new FeedbackFormSearchParams(searchParams);
      delete filters.page;
      delete filters.page_size;
      delete filters.sort_by;
      delete filters.sort_direction;
      if (isAwaited) {
        delete filters.role;
        filters.is_awaited = true;
      }
      Object.keys(filters).forEach((key) => {
        if (key !== "role" && (filters[key] === null || filters[key] === void 0 || filters[key] === "")) {
          delete filters[key];
        }
      });
      const { data: count, error } = yield this.client.rpc("get_filtered_feedback_forms_count", { filters });
      if (error) {
        console.error("Supabase Error:", error);
        return 0;
      }
      return count || 0;
    });
  }
  getManagerFeedbackForm(employee) {
    return __async(this, null, function* () {
      const { data: employeeIds, error: hierarchyError } = yield this.client.rpc("get_employee_hierarchy_by_user_id", { manager_id: employee.user_id });
      if (hierarchyError) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find objectives error: ${hierarchyError.message}`);
      }
      let query = this.client.from(this.tableName).select("*, employee!feedback_forms_employee_id_fkey!inner(*)");
      if (employee.role === AppConstants.ROLE_HR || employee.role === AppConstants.ROLE_PAYROLL) {
        query = query.eq("status", "sent_for_payroll_approval");
      } else {
        query = query.in("status", ["awaiting_manager", "pending_performance_entry", "awaited_problem_resolving"]).in("employee_id", employeeIds.map((emp) => emp.id));
      }
      const { data, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find objectives error: ${error.message}`);
      }
      let objectivesData = [];
      data.forEach((objectiveForm) => {
        const objectiveItem = new FeedbackFormDto(objectiveForm);
        objectivesData.push(objectiveItem);
      });
      return objectivesData;
    });
  }
  getAwaitedFeedbacksFormCount(email) {
    return __async(this, null, function* () {
      let { data, error } = yield this.client.rpc("is_any_feedbacks_for_employee", { email });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getManagerFeedbacksFormCount(email) {
    return __async(this, null, function* () {
      let { data, error } = yield this.client.rpc("is_any_feedbacks_for_manager", { email });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getActiveFeedbackFormsForEmployee(employeeId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, feedbacks(*)").eq("employee_id", employeeId).or(`status.eq.${AppConstants.AWAITING_EMPLOYEE},status.eq.${AppConstants.AWAITING_MANAGER},status.eq.${AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER},status.eq.${AppConstants.SENT_FOR_VP_APPROVAL},status.eq.${AppConstants.PENDING_PERFORMANCE_ENTRY},status.eq.${AppConstants.AWAITED_PROBLEM_RESOLVING}`);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find feedback forms error: ${error.message}`);
      }
      let feedbackFormsData = [];
      data.forEach((form) => {
        const feedbackForm = new FeedbackFormDto(form);
        feedbackFormsData.push(feedbackForm);
      });
      return feedbackFormsData;
    });
  }
  getHistoryFeedbackFormsForEmployee(employeeId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, feedbacks(*)").eq("employee_id", employeeId).eq("status", AppConstants.FINISHED);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find feedback forms error: ${error.message}`);
      }
      let feedbackFormsData = [];
      data.forEach((form) => {
        const feedbackForm = new FeedbackFormDto(form);
        feedbackFormsData.push(feedbackForm);
      });
      return feedbackFormsData;
    });
  }
  static \u0275fac = function FeedbackFormsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackFormsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbackFormsRepository, factory: _FeedbackFormsRepository.\u0275fac, providedIn: "root" });
};

export {
  FeedbackFormsUpdateDto,
  FeedbackFormsInsertDto,
  FeedbackFormDto,
  FeedbackFormsRepository
};
//# sourceMappingURL=chunk-KG3BOM3F.js.map
