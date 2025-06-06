import {
  Observable,
  from,
  of
} from "./chunk-ERGQW4H6.js";

// src/app/shared/models/dto/objective/objective-form-view.dto.ts
var ObjectiveFormViewDto = class {
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
  is_employee_approved;
  is_manager_approved;
  step;
  is_active;
  manager_assessment_load_percent;
  manager_assessment_weighted_score;
  qualities_load_percent;
  quantities_load_percent;
  weighted_score_sum;
  avatar_src = null;
  isSelected = false;
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
      this.is_employee_approved = params.is_employee_approved || null;
      this.is_manager_approved = params.is_manager_approved || null;
      this.step = params.step || null;
      this.is_active = params.is_active || null;
      this.qualities_load_percent = params.qualities_load_percent || null;
      this.quantities_load_percent = params.quantities_load_percent || null;
      this.manager_assessment_load_percent = params.manager_assessment_load_percent || null;
      this.manager_assessment_weighted_score = params.manager_assessment_weighted_score || null;
      this.weighted_score_sum = params.weighted_score_sum || null;
    }
    this.loadEmployeeAvatar(storageService);
  }
  getEmployeeId() {
    return this.employee_id ? this.employee_id : 0;
  }
  getEmployeeName() {
    return this.employee_display_name ? this.employee_display_name : "";
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

export {
  ObjectiveFormViewDto
};
//# sourceMappingURL=chunk-25KMDAIC.js.map
