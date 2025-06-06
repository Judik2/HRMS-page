import {
  EmployeeDto,
  EmployeeRowDto
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
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/repositories/employee.repository.ts
var EmployeeRepository = class _EmployeeRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "employee", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAllSimple() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("display_name, role, id, email");
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAllDepartments() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("department");
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      const uniqueDivisions = [...new Set(data.filter((item) => item.department && item.department.trim() !== "").map((item) => item.department))];
      return uniqueDivisions;
    });
  }
  getAllDivisions() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("division");
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      const uniqueDivisions = [...new Set(data.filter((item) => item.division && item.division.trim() !== "").map((item) => item.division))];
      return uniqueDivisions;
    });
  }
  getManagers() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("id, display_name, role, email").eq("role", AppConstants.ROLE_MANAGER);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAdmins() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("id, display_name, role, email").or(`role.eq.${AppConstants.ROLE_PAYROLL},role.eq.${AppConstants.ROLE_HR}`);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAllForObjective() {
    return __async(this, null, function* () {
      let query = this.client.from(this.tableName).select();
      query = query.not("reporting_manager_id", "is", null);
      const { data, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAllForObjectiveCount() {
    return __async(this, null, function* () {
      const { count, error } = yield this.client.from(this.tableName).select("*", { count: "exact", head: true }).not("reporting_manager_id", "is", null).eq("is_active", true);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return count || 0;
    });
  }
  getBySystemId(systemId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().eq("email", systemId.toLowerCase()).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getByIdForProfile(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, salaries:employee_salary(*), childrens:childrens(*), reporting_manager:employee(*)").eq("id", id).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getAllForBirthdayCalendar() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("id, date_of_birthday, avatar_url, avatar_name, display_name, hebrew_display_name, childrens:childrens(birth_date, name)");
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  getEmployeesForManager(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().eq("reporting_manager_id", id);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find list employees by manager ID error: ${error.message}`);
      }
      const employeeData = data.map((item) => {
        const employee = new EmployeeRowDto();
        Object.assign(employee, item);
        return employee;
      });
      return employeeData;
    });
  }
  getFilteredEmployees(filters) {
    return __async(this, null, function* () {
      Object.keys(filters).forEach((key) => {
        if (filters[key] === null || filters[key] === void 0 || filters[key] === "") {
          delete filters[key];
        }
      });
      const { data, error } = yield this.client.rpc("get_filtered_employees", { filters });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Create range error: ${error.message}`);
      }
      return data;
    });
  }
  getFilteredEmployeesCount(filters) {
    return __async(this, null, function* () {
      Object.keys(filters).forEach((key) => {
        if (filters[key] === null || filters[key] === void 0 || filters[key] === "") {
          delete filters[key];
        }
      });
      const { data, error } = yield this.client.rpc("get_filtered_employee_count", { filters });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Create range error: ${error.message}`);
      }
      return data || 0;
    });
  }
  createRange(employees) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).insert(employees);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Create range error: ${error.message}`);
      }
    });
  }
  updateRangeByEmail(employees) {
    return __async(this, null, function* () {
      for (const employee of employees) {
        const { error } = yield this.client.from(this.tableName).update(employee).eq("email", employee.email);
        if (error) {
          this.spinner.hide();
          this.loaderService.hide();
          throw new Error(`Update range error for email ${employee.email}: ${error.message}`);
        }
      }
    });
  }
  upsertRangeWithChildrens(employees) {
    return __async(this, null, function* () {
      try {
        const employeesCopy = JSON.parse(JSON.stringify(employees));
        const employeesToUpdate = employeesCopy.filter((x) => x.id).map((x) => {
          delete x.childrens;
          return x;
        });
        const employeesToCreate = employeesCopy.filter((x) => !x.id).map((x) => {
          delete x.childrens;
          return x;
        });
        const { error: employeeUpdateError } = yield this.client.from(this.tableName).upsert(employeesToUpdate);
        if (employeeUpdateError) {
          throw new Error(`Bulk update error for employees: ${employeeUpdateError.message}`);
        }
        const { error: employeeCreateError } = yield this.client.from(this.tableName).upsert(employeesToCreate);
        if (employeeCreateError) {
          throw new Error(`Bulk update error for employees: ${employeeCreateError.message}`);
        }
        const { data: updatedEmployees, error: fetchEmployeesError } = yield this.client.from(this.tableName).select("id, email");
        if (fetchEmployeesError) {
          throw new Error(`Fetch employees error: ${fetchEmployeesError.message}`);
        }
        const idMap = updatedEmployees.reduce((map, emp) => {
          map[emp.email] = emp.id;
          return map;
        }, {});
        employees.forEach((employee) => {
          if (employee.email) {
            employee.id = idMap[employee.email];
          }
        });
        const employeeIds = employees.map((e) => e.id).filter(Boolean);
        const { data: existingChildren, error: fetchChildrenError } = yield this.client.from("childrens").select("id, employee_id, gender, birth_date, name").in("employee_id", employeeIds);
        if (fetchChildrenError) {
          throw new Error(`Fetch children error: ${fetchChildrenError.message}`);
        }
        const employeeChildrens = [];
        employees.forEach((employee) => {
          if (!employee.childrens || !employee.id) {
            return;
          }
          const updatedChildrens = employee.childrens.filter((child) => {
            const exists = existingChildren?.some((existingChild) => existingChild.employee_id === employee.id && existingChild.gender === child.gender && existingChild.birth_date === child.birth_date && existingChild.name === child.name);
            return !exists;
          }).map((child) => __spreadProps(__spreadValues({}, child), {
            employee_id: employee.id
          }));
          employeeChildrens.push(...updatedChildrens);
        });
        if (employeeChildrens.length > 0) {
          const { error: upsertError } = yield this.client.from("childrens").upsert(employeeChildrens);
          if (upsertError) {
            throw new Error(`Upsert error for children: ${upsertError.message}`);
          }
        }
      } catch (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw error;
      }
    });
  }
  getAllByBirthday(date) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.rpc("find_birthdays_on", { d: date.toISOString().split("T")[0] });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find list employees by birthday date error: ${error.message}`);
      }
      const employeesData = data.map((item) => {
        const employee = new EmployeeDto(item);
        return employee;
      });
      return employeesData;
    });
  }
  getAllBirthdaysOn(date) {
    return __async(this, null, function* () {
      const dateStr = date.toISOString().slice(0, 10);
      return yield this.client.rpc("find_birthdays_on", { d: dateStr }).then(({ data, error }) => {
        if (error)
          throw error;
        return data;
      });
    });
  }
  getBirthdaysByPeriod(periodType, date) {
    return __async(this, null, function* () {
      const dateStr = date.toISOString().slice(0, 10);
      const { data, error } = yield this.client.rpc("find_birthdays_by_period", { period_type: periodType, d: dateStr });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find birthdays by period error: ${error.message}`);
      }
      return data;
    });
  }
  getBirthdaysInRange(startDate, endDate) {
    return __async(this, null, function* () {
      const startDateStr = startDate.toISOString().slice(0, 10);
      const endDateStr = endDate.toISOString().slice(0, 10);
      const { data, error } = yield this.client.rpc("find_birthdays_in_range", { start_date: startDateStr, end_date: endDateStr });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find birthdays in range error: ${error.message}`);
      }
      return data;
    });
  }
  getReportingManagers(employeeId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.rpc("get_reporting_managers", { employee_id_input: employeeId });
      if (error)
        throw error;
      return data;
    });
  }
  static \u0275fac = function EmployeeRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeRepository, factory: _EmployeeRepository.\u0275fac, providedIn: "root" });
};
var EmployeeSearchParams = class {
  employee_display_name;
  phone;
  email;
  work_phone;
  job_position;
  department;
  division;
  company;
  joining_date;
  reporting_manager_display_name;
  is_active = null;
  gender;
  role;
  search;
  // For searching across multiple fields
  sort_by;
  // Field to sort by
  sort_direction = "asc";
  page;
  page_size;
  employee_id;
  constructor(filters = null) {
    if (filters) {
      this.employee_display_name = filters.employee_display_name || null;
      this.phone = filters.phone || null;
      this.work_phone = filters.work_phone || null;
      this.email = filters.email || null;
      this.job_position = filters.job_position || null;
      this.department = filters.department || null;
      this.division = filters.division || null;
      this.company = filters.company || null;
      this.joining_date = filters.joining_date || null;
      this.reporting_manager_display_name = filters.reporting_manager_display_name || null;
      this.is_active = filters.is_active === void 0 ? null : filters.is_active;
      this.gender = filters.gender || null;
      this.search = filters.search || null;
      this.sort_by = filters.sort_by || null;
      this.sort_direction = filters.sort_direction || null;
      this.page = filters.page || null;
      this.page_size = filters.page_size || null;
      this.employee_id = filters.employee_id || null;
    }
  }
};

export {
  EmployeeRepository,
  EmployeeSearchParams
};
//# sourceMappingURL=chunk-TLWCP54H.js.map
