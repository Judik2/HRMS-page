import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  Observable,
  from,
  of
} from "./chunk-ERGQW4H6.js";

// src/supabase/types/employee.dto.ts
var EmployeeUpdateDto = class {
  ad_id;
  address;
  avatar_name;
  avatar_url;
  card_id;
  city;
  company;
  date_of_birthday;
  department;
  display_name;
  division;
  email;
  gender;
  hebrew_display_name;
  id;
  is_2fa_enabled;
  is_active;
  is_for_hr_system;
  is_for_objective_system;
  is_test;
  job_position;
  joining_date;
  marital_status;
  partner_display_name;
  phone;
  reporting_manager_id;
  role;
  sms_authenticated_at;
  user_id;
  work_phone;
  constructor(param = null) {
    if (param) {
      this.ad_id = param.ad_id;
      this.address = param.address;
      this.avatar_name = param.avatar_name;
      this.avatar_url = param.avatar_url;
      this.card_id = param.card_id;
      this.city = param.city;
      this.company = param.company;
      this.date_of_birthday = param.date_of_birthday;
      this.department = param.department;
      this.display_name = param.display_name;
      this.division = param.division;
      this.email = param.email;
      this.gender = param.gender;
      this.hebrew_display_name = param.hebrew_display_name;
      this.id = param.id;
      this.is_2fa_enabled = param.is_2fa_enabled;
      this.is_active = param.is_active;
      this.is_for_hr_system = param.is_for_hr_system;
      this.is_for_objective_system = param.is_for_objective_system;
      this.is_test = param.is_test;
      this.job_position = param.job_position;
      this.joining_date = param.joining_date;
      this.marital_status = param.marital_status;
      this.partner_display_name = param.partner_display_name;
      this.phone = param.phone;
      this.reporting_manager_id = param.reporting_manager_id;
      this.role = param.role;
      this.sms_authenticated_at = param.sms_authenticated_at;
      this.user_id = param.user_id;
      this.work_phone = param.work_phone;
    }
  }
};
var EmployeeInsertDto = class {
  ad_id;
  address;
  avatar_name;
  avatar_url;
  card_id;
  city;
  company;
  date_of_birthday;
  department;
  display_name;
  division;
  email;
  gender;
  hebrew_display_name;
  id;
  is_2fa_enabled;
  is_active;
  is_for_hr_system;
  is_for_objective_system;
  is_test;
  job_position;
  joining_date;
  marital_status;
  partner_display_name;
  phone;
  reporting_manager_id;
  role;
  sms_authenticated_at;
  user_id;
  work_phone;
  constructor(param = null) {
    if (param) {
      this.ad_id = param.ad_id;
      this.address = param.address;
      this.avatar_name = param.avatar_name;
      this.avatar_url = param.avatar_url;
      this.card_id = param.card_id;
      this.city = param.city;
      this.company = param.company;
      this.date_of_birthday = param.date_of_birthday;
      this.department = param.department;
      this.display_name = param.display_name;
      this.division = param.division;
      this.email = param.email;
      this.gender = param.gender;
      this.hebrew_display_name = param.hebrew_display_name;
      this.id = param.id;
      this.is_2fa_enabled = param.is_2fa_enabled;
      this.is_active = param.is_active;
      this.is_for_hr_system = param.is_for_hr_system;
      this.is_for_objective_system = param.is_for_objective_system;
      this.is_test = param.is_test;
      this.job_position = param.job_position;
      this.joining_date = param.joining_date;
      this.marital_status = param.marital_status;
      this.partner_display_name = param.partner_display_name;
      this.phone = param.phone;
      this.reporting_manager_id = param.reporting_manager_id;
      this.role = param.role;
      this.sms_authenticated_at = param.sms_authenticated_at;
      this.user_id = param.user_id;
      this.work_phone = param.work_phone;
    }
  }
};
var EmployeeRowDto = class {
  ad_id;
  address;
  avatar_name;
  avatar_url;
  card_id;
  city;
  company;
  date_of_birthday;
  department;
  display_name;
  division;
  email;
  gender;
  hebrew_display_name;
  id;
  is_2fa_enabled;
  is_active;
  is_for_hr_system;
  is_for_objective_system;
  is_test;
  job_position;
  joining_date;
  marital_status;
  partner_display_name;
  phone;
  reporting_manager_id;
  role;
  sms_authenticated_at;
  user_id;
  work_phone;
  constructor(param = null) {
    if (param) {
      this.ad_id = param.ad_id;
      this.address = param.address;
      this.avatar_name = param.avatar_name;
      this.avatar_url = param.avatar_url;
      this.card_id = param.card_id;
      this.city = param.city;
      this.company = param.company;
      this.date_of_birthday = param.date_of_birthday;
      this.department = param.department;
      this.display_name = param.display_name;
      this.division = param.division;
      this.email = param.email;
      this.gender = param.gender;
      this.hebrew_display_name = param.hebrew_display_name;
      this.id = param.id;
      this.is_2fa_enabled = param.is_2fa_enabled;
      this.is_active = param.is_active;
      this.is_for_hr_system = param.is_for_hr_system;
      this.is_for_objective_system = param.is_for_objective_system;
      this.is_test = param.is_test;
      this.job_position = param.job_position;
      this.joining_date = param.joining_date;
      this.marital_status = param.marital_status;
      this.partner_display_name = param.partner_display_name;
      this.phone = param.phone;
      this.reporting_manager_id = param.reporting_manager_id;
      this.role = param.role;
      this.sms_authenticated_at = param.sms_authenticated_at;
      this.user_id = param.user_id;
      this.work_phone = param.work_phone;
    }
  }
};

// src/app/shared/models/dto/employee/employee.dto.ts
var EmployeeDto = class extends EmployeeRowDto {
  // sub fields
  current_salary;
  salary;
  reporting_manager;
  vp;
  salaries;
  childrens;
  isSelected = false;
  avatar_src = null;
  /**
   *
   */
  constructor(param = null, storageService = null) {
    super(param);
    if (param) {
      if (param.salaries) {
        this.childrens = param.childrens;
        this.salaries = param.salaries;
        this.reporting_manager = param.reporting_manager;
        this.setCurrentSalary();
      }
    }
    this.loadEmployeeAvatar(storageService);
  }
  getEmployeeId() {
    return this.id ? this.id : 0;
  }
  getEmployeeName() {
    if (this.hebrew_display_name) {
      return this.hebrew_display_name;
    }
    return this.display_name ? this.display_name : "N/A";
  }
  getEmployeeSign() {
    if (this.hebrew_display_name) {
      const names = this.hebrew_display_name.trim().split(/\s+/);
      const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
      const secondInitial = names.length > 1 ? names[1]?.charAt(0).toUpperCase() : "";
      return firstInitial + secondInitial;
    } else if (this.display_name) {
      const names = this.display_name.trim().split(/\s+/);
      const firstInitial = names[0]?.charAt(0).toUpperCase() || "";
      const secondInitial = names.length > 1 ? names[1]?.charAt(0).toUpperCase() : "";
      return firstInitial + secondInitial;
    }
    return "N/A";
  }
  isActive() {
    return this.is_active ?? false;
  }
  getEmployeeAvatar() {
    return this.avatar_src;
  }
  setEmployeeAvatar(avatar_url, avatar_name) {
    this.avatar_src = new Observable((observer) => {
      observer.next(avatar_url);
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
  isSameSalary(salary) {
    return Number(this.current_salary?.salary) == Number(salary);
  }
  setCurrentSalary() {
    if (this.salaries && this.salaries.length > 0) {
      const sortedSalaries = this.salaries.sort((a, b) => new Date(a.create_at ? a.create_at : 0).getTime() - new Date(b.create_at ? b.create_at : 0).getTime());
      this.current_salary = sortedSalaries[sortedSalaries.length - 1];
      if (this.current_salary) {
        this.salary = Number(this.current_salary.salary);
      }
    }
  }
  isAdmin() {
    return this.role == AppConstants.ROLE_PAYROLL || this.role == AppConstants.ROLE_HR || this.role == AppConstants.ROLE_GLOBAL_ADMIN;
  }
  isManager() {
    return this.role == AppConstants.ROLE_MANAGER;
  }
  isEmployee() {
    return this.role == AppConstants.ROLE_EMPLOYEE || this.role == null;
  }
  isGlobalAdmin() {
    return this.role == AppConstants.ROLE_GLOBAL_ADMIN;
  }
};
var EmployeeSearchDto = class {
  id;
  avatar_name;
  avatar_url;
  employee_display_name;
  phone;
  email;
  work_phone;
  job_position;
  department;
  company;
  joining_date;
  reporting_manager_display_name;
  reporting_manager_id;
  is_active;
  ad_id;
  role;
  /**
   *
   */
  constructor(param = null, storageService = null) {
    if (param) {
      this.id = param.id;
      this.role = param.role;
      this.avatar_name = param.avatar_name;
      this.avatar_url = param.avatar_url;
      this.employee_display_name = param.employee_display_name || "N/A";
      this.phone = param.phone;
      this.email = param.email;
      this.work_phone = param.work_phone;
      this.job_position = param.job_position;
      this.department = param.department;
      this.company = param.company;
      this.joining_date = param.joining_date;
      this.reporting_manager_display_name = param.reporting_manager_display_name;
      this.is_active = param.is_active;
      this.reporting_manager_id = param.reporting_manager_id;
      this.ad_id = param.ad_id;
    }
    this.loadEmployeeAvatar(storageService);
  }
  // app params
  isSelected;
  avatar_src = null;
  getEmployeeId() {
    return this.id ? this.id : 0;
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
  setEmployeeAvatar(avatar_url, avatar_name) {
    this.avatar_src = new Observable((observer) => {
      observer.next(avatar_url);
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
  EmployeeUpdateDto,
  EmployeeInsertDto,
  EmployeeRowDto,
  EmployeeDto,
  EmployeeSearchDto
};
//# sourceMappingURL=chunk-NKEEF4XY.js.map
