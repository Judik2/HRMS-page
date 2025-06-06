// src/supabase/types/feedbacks.dto.ts
var FeedbacksUpdateDto = class {
  criteria;
  form_id;
  id;
  improvement_employee;
  improvement_manager;
  is_employee_approved;
  is_manager_approved;
  periodic_score;
  preservation_employee;
  preservation_manager;
  template_id;
  trend;
  weight;
  weighted_score;
  constructor(param = null) {
    if (param) {
      this.criteria = param.criteria;
      this.form_id = param.form_id;
      this.id = param.id;
      this.improvement_employee = param.improvement_employee;
      this.improvement_manager = param.improvement_manager;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.periodic_score = param.periodic_score;
      this.preservation_employee = param.preservation_employee;
      this.preservation_manager = param.preservation_manager;
      this.template_id = param.template_id;
      this.trend = param.trend;
      this.weight = param.weight;
      this.weighted_score = param.weighted_score;
    }
  }
};
var FeedbacksInsertDto = class {
  criteria;
  form_id;
  id;
  improvement_employee;
  improvement_manager;
  is_employee_approved;
  is_manager_approved;
  periodic_score;
  preservation_employee;
  preservation_manager;
  template_id;
  trend;
  weight;
  weighted_score;
  constructor(param = null) {
    if (param) {
      this.criteria = param.criteria;
      this.form_id = param.form_id;
      this.id = param.id;
      this.improvement_employee = param.improvement_employee;
      this.improvement_manager = param.improvement_manager;
      this.is_employee_approved = param.is_employee_approved;
      this.is_manager_approved = param.is_manager_approved;
      this.periodic_score = param.periodic_score;
      this.preservation_employee = param.preservation_employee;
      this.preservation_manager = param.preservation_manager;
      this.template_id = param.template_id;
      this.trend = param.trend;
      this.weight = param.weight;
      this.weighted_score = param.weighted_score;
    }
  }
};

export {
  FeedbacksUpdateDto,
  FeedbacksInsertDto
};
//# sourceMappingURL=chunk-6MR5BGHJ.js.map
