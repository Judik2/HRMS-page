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

// src/supabase/types/objective-form.dto.ts
var ObjectiveFormUpdateDto = class {
  assigned_to;
  created_at;
  creator_id;
  due_date;
  employee_id;
  id;
  is_active;
  is_employee_approved;
  is_manager_approved;
  manager_assessment_load_percent;
  manager_assessment_weighted_score;
  qualities_load_percent;
  quantities_load_percent;
  rejected_by;
  status;
  step;
  updated_at;
  constructor(param = null) {
    if (param) {
      this.assigned_to = param.assigned_to;
      this.created_at = param.created_at;
      this.creator_id = param.creator_id;
      this.due_date = param.due_date;
      this.employee_id = param.employee_id;
      this.id = param.id;
      this.is_active = param.is_active;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.manager_assessment_load_percent = param.manager_assessment_load_percent;
      this.manager_assessment_weighted_score = param.manager_assessment_weighted_score;
      this.qualities_load_percent = param.qualities_load_percent;
      this.quantities_load_percent = param.quantities_load_percent;
      this.rejected_by = param.rejected_by;
      this.status = param.status;
      this.step = param.step;
      this.updated_at = param.updated_at;
    }
  }
};
var ObjectiveFormInsertDto = class {
  assigned_to;
  created_at;
  creator_id;
  due_date;
  employee_id;
  id;
  is_active;
  is_employee_approved;
  is_manager_approved;
  manager_assessment_load_percent;
  manager_assessment_weighted_score;
  qualities_load_percent;
  quantities_load_percent;
  rejected_by;
  status;
  step;
  updated_at;
  constructor(param = null) {
    if (param) {
      this.assigned_to = param.assigned_to;
      this.created_at = param.created_at;
      this.creator_id = param.creator_id;
      this.due_date = param.due_date;
      this.employee_id = param.employee_id;
      this.id = param.id;
      this.is_active = param.is_active;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.manager_assessment_load_percent = param.manager_assessment_load_percent;
      this.manager_assessment_weighted_score = param.manager_assessment_weighted_score;
      this.qualities_load_percent = param.qualities_load_percent;
      this.quantities_load_percent = param.quantities_load_percent;
      this.rejected_by = param.rejected_by;
      this.status = param.status;
      this.step = param.step;
      this.updated_at = param.updated_at;
    }
  }
};
var ObjectiveFormRowDto = class {
  assigned_to;
  created_at;
  creator_id;
  due_date;
  employee_id;
  id;
  is_active;
  is_employee_approved;
  is_manager_approved;
  manager_assessment_load_percent;
  manager_assessment_weighted_score;
  qualities_load_percent;
  quantities_load_percent;
  rejected_by;
  status;
  step;
  updated_at;
  constructor(param = null) {
    if (param) {
      this.assigned_to = param.assigned_to;
      this.created_at = param.created_at;
      this.creator_id = param.creator_id;
      this.due_date = param.due_date;
      this.employee_id = param.employee_id;
      this.id = param.id;
      this.is_active = param.is_active;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.manager_assessment_load_percent = param.manager_assessment_load_percent;
      this.manager_assessment_weighted_score = param.manager_assessment_weighted_score;
      this.qualities_load_percent = param.qualities_load_percent;
      this.quantities_load_percent = param.quantities_load_percent;
      this.rejected_by = param.rejected_by;
      this.status = param.status;
      this.step = param.step;
      this.updated_at = param.updated_at;
    }
  }
};

// src/app/shared/models/dto/objective/objective-form.dto.ts
var ObjectiveFormDto = class extends ObjectiveFormRowDto {
  objectives = [];
  employee;
  comments;
  constructor(param = null) {
    super(param);
    if (param) {
      this.objectives = param.objectives || [];
      this.employee = param.employee ? new EmployeeDto(param.employee) : void 0;
    }
  }
};

// src/supabase/types/objectives.dto.ts
var ObjectivesInsertDto = class {
  comments;
  criteria;
  id;
  is_template;
  load_percentage;
  objective_form_id;
  performance_percentage;
  template_id;
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
      this.is_template = param.is_template;
      this.load_percentage = param.load_percentage;
      this.objective_form_id = param.objective_form_id;
      this.performance_percentage = param.performance_percentage;
      this.template_id = param.template_id;
      this.type = param.type;
      this.unit_of_measurement = param.unit_of_measurement;
      this.weight = param.weight;
      this.weighted_score = param.weighted_score;
      this.yearly_goal = param.yearly_goal;
      this.yearly_performance = param.yearly_performance;
    }
  }
};
var ObjectivesRowDto = class {
  comments;
  criteria;
  id;
  is_template;
  load_percentage;
  objective_form_id;
  performance_percentage;
  template_id;
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
      this.is_template = param.is_template;
      this.load_percentage = param.load_percentage;
      this.objective_form_id = param.objective_form_id;
      this.performance_percentage = param.performance_percentage;
      this.template_id = param.template_id;
      this.type = param.type;
      this.unit_of_measurement = param.unit_of_measurement;
      this.weight = param.weight;
      this.weighted_score = param.weighted_score;
      this.yearly_goal = param.yearly_goal;
      this.yearly_performance = param.yearly_performance;
    }
  }
};

// src/app/shared/models/dto/objective/objective.dto.ts
var ObjectiveDto = class extends ObjectivesRowDto {
  objective_form;
  isEdit;
  isAdd;
  app_form_id;
};

// src/supabase/repositories/objective-form.repository.ts
var ObjectiveFormRepository = class _ObjectiveFormRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "objective_form", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAllActive() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().neq("status", AppConstants.FINISHED);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAllFinished() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().eq("status", AppConstants.FINISHED);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getObjectivesForEmployee(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, objectives(*)").eq("employee_id", id);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find list employees by manager ID error: ${error.message}`);
      }
      let objectivesData = [];
      data.forEach((objectiveForm) => {
        objectiveForm.objectives.forEach((objective) => {
          const objectiveItem = new ObjectiveDto(objective);
          objectiveItem.objective_form = objectiveForm;
          objectivesData.push(objectiveItem);
        });
      });
      return objectivesData;
    });
  }
  getActiveObjectivesForEmployee(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, objectives(*)").eq("employee_id", id).or(`status.eq.${AppConstants.AWAITING_EMPLOYEE},status.eq.${AppConstants.AWAITING_MANAGER},status.eq.${AppConstants.APPROVED_BY_EMPLOYEE_AND_MANAGER},status.eq.${AppConstants.SENT_FOR_PAYROLL_APPROVAL}`);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find list employees by manager ID error: ${error.message}`);
      }
      let objectivesData = [];
      data.forEach((objectiveForm) => {
        if (objectiveForm.objectives.length > 0) {
          const objectiveItem = new ObjectiveFormDto(objectiveForm);
          objectivesData.push(objectiveItem);
        }
      });
      return objectivesData;
    });
  }
  getLastFormsForEmployeeList(employeeIds) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select(`
      *,
      objectives(*)
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
  getHistoryObjectivesForEmployee(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, objectives(*)").eq("employee_id", id).eq("status", AppConstants.FINISHED);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find list employees by manager ID error: ${error.message}`);
      }
      let objectivesData = [];
      data.forEach((objectiveForm) => {
        const objectiveItem = new ObjectiveFormDto(objectiveForm);
        objectivesData.push(objectiveItem);
      });
      return objectivesData;
    });
  }
  getFilteredForms(searchParams, isAwaited) {
    return __async(this, null, function* () {
      var filters = new ObjectiveFormSearchParams(searchParams);
      if (isAwaited) {
        delete filters.role;
        filters.is_awaited = true;
      }
      Object.keys(filters).forEach((key) => {
        if (key !== "role" && (filters[key] === null || filters[key] === void 0 || filters[key] === "")) {
          delete filters[key];
        }
      });
      const { data, error } = yield this.client.rpc("get_filtered_objective_forms", { filters });
      if (error) {
        console.error("Supabase Error:", error);
        return [];
      }
      return data;
    });
  }
  getFilteredFormsCount(searchParams, isAwaited) {
    return __async(this, null, function* () {
      var filters = new ObjectiveFormSearchParams(searchParams);
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
      const { data: count, error } = yield this.client.rpc("get_filtered_objective_forms_count", { filters });
      if (error) {
        console.error("Supabase Error:", error);
        return 0;
      }
      return count || 0;
    });
  }
  getByIdWithObjectives(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, objectives(*), employee!fk_objective_form_employee_employee_id_fkey(*), comments:objective_form_comments(*, employee(*))").eq("id", id).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getByIds(ids) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*").in("id", ids);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getAwaitedObjectiveFormCount(email) {
    return __async(this, null, function* () {
      let { data, error } = yield this.client.rpc("is_any_objectives_for_employee", { email });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getManagerObjectiveFormCount(email) {
    return __async(this, null, function* () {
      let { data, error } = yield this.client.rpc("is_any_objectives_for_manager", { email });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getAwaitedObjectiveForm(employee) {
    return __async(this, null, function* () {
      let { data, error } = yield this.client.from(this.tableName).select("*").in("status", ["awaiting_employee", "awaited_problem_resolving"]).eq("employee_id", employee.id);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data || [];
    });
  }
  getManagerObjectiveForm(employee) {
    return __async(this, null, function* () {
      let query = this.client.from(this.tableName).select("*, employee!fk_objective_form_employee_employee_id_fkey!inner(*)");
      if (employee.role === AppConstants.ROLE_HR || employee.role === AppConstants.ROLE_PAYROLL) {
        query = query.eq("step", "fill_yearly").eq("status", "sent_for_payroll_approval");
      } else {
        query = query.eq("step", "initiate").in("status", ["awaiting_manager", "pending_performance_entry", "awaited_problem_resolving"]).eq("employee.reporting_manager_id", employee.id);
      }
      const { data, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find objectives error: ${error.message}`);
      }
      let objectivesData = [];
      data.forEach((objectiveForm) => {
        const objectiveItem = new ObjectiveFormDto(objectiveForm);
        objectivesData.push(objectiveItem);
      });
      return objectivesData;
    });
  }
  static \u0275fac = function ObjectiveFormRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveFormRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ObjectiveFormRepository, factory: _ObjectiveFormRepository.\u0275fac, providedIn: "root" });
};
var BaseFormSearchParams = class {
  employee_id;
  status;
  is_awaited = false;
  department;
  division;
  due_date;
  employee_display_name;
  role;
  search;
  // For searching across multiple fields
  sort_by;
  // Field to sort by
  sort_direction = "asc";
  page;
  page_size;
  constructor(filters = null) {
    if (filters) {
      this.employee_display_name = filters.employee_display_name || null;
      this.employee_id = filters.employee_id || null;
      this.department = filters.department || null;
      this.division = filters.division || null;
      this.role = filters.role || null;
      this.due_date = filters.due_date || null;
      this.status = filters.status || null;
      this.search = filters.search || null;
      this.sort_by = filters.sort_by || null;
      this.sort_direction = filters.sort_direction || null;
      this.page = filters.page || null;
      this.page_size = filters.page_size || null;
    }
  }
};
var ObjectiveFormSearchParams = class extends BaseFormSearchParams {
  constructor(filters = null) {
    super(filters);
  }
};
var FeedbackFormSearchParams = class extends BaseFormSearchParams {
  constructor(filters = null) {
    super(filters);
  }
};

export {
  ObjectiveFormUpdateDto,
  ObjectiveFormInsertDto,
  ObjectiveFormDto,
  ObjectivesInsertDto,
  ObjectiveFormRepository,
  ObjectiveFormSearchParams,
  FeedbackFormSearchParams
};
//# sourceMappingURL=chunk-S5OCFGQY.js.map
