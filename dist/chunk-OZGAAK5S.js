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

// src/supabase/repositories/company.repository.ts
var CompanyRepository = class _CompanyRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "company", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function CompanyRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyRepository, factory: _CompanyRepository.\u0275fac, providedIn: "root" });
};

export {
  CompanyRepository
};
//# sourceMappingURL=chunk-OZGAAK5S.js.map
