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

// src/supabase/repositories/objectives.repository.ts
var ObjectivesRepository = class _ObjectivesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "objectives", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAllByTemplateId(template_id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, objective_form(status)").eq("template_id", template_id).neq("objective_form.status", AppConstants.FINISHED);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function ObjectivesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObjectivesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ObjectivesRepository, factory: _ObjectivesRepository.\u0275fac, providedIn: "root" });
};

export {
  ObjectivesRepository
};
//# sourceMappingURL=chunk-BRZVXPA7.js.map
