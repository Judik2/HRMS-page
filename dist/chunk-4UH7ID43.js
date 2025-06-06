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

// src/supabase/repositories/employee-salary.repository.ts
var EmployeeSalaryRepository = class _EmployeeSalaryRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "employee_salary", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function EmployeeSalaryRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeSalaryRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmployeeSalaryRepository, factory: _EmployeeSalaryRepository.\u0275fac, providedIn: "root" });
};

export {
  EmployeeSalaryRepository
};
//# sourceMappingURL=chunk-4UH7ID43.js.map
