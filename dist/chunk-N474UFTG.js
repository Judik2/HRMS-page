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

// src/supabase/repositories/criterias.repository.ts
var CriteriasRepository = class _CriteriasRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "criterias", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function CriteriasRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CriteriasRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CriteriasRepository, factory: _CriteriasRepository.\u0275fac, providedIn: "root" });
};

export {
  CriteriasRepository
};
//# sourceMappingURL=chunk-N474UFTG.js.map
