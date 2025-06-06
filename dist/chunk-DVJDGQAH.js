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

// src/supabase/repositories/objective-templates.repository.ts
var ObjectiveTemplatesRepository = class _ObjectiveTemplatesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "objective_templates", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function ObjectiveTemplatesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectiveTemplatesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ObjectiveTemplatesRepository, factory: _ObjectiveTemplatesRepository.\u0275fac, providedIn: "root" });
};

export {
  ObjectiveTemplatesRepository
};
//# sourceMappingURL=chunk-DVJDGQAH.js.map
