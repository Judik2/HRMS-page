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

// src/supabase/repositories/feedbacks.repository.ts
var FeedbacksRepository = class _FeedbacksRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feedbacks", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAllByTemplateId(template_id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, feedback_form(status)").eq("template_id", template_id).neq("feedback_form.status", AppConstants.FINISHED);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function FeedbacksRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbacksRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbacksRepository, factory: _FeedbacksRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/feedback-templates.repository.ts
var FeedbackTemplatesRepository = class _FeedbackTemplatesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feedback_templates", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function FeedbackTemplatesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeedbackTemplatesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeedbackTemplatesRepository, factory: _FeedbackTemplatesRepository.\u0275fac, providedIn: "root" });
};

export {
  FeedbacksRepository,
  FeedbackTemplatesRepository
};
//# sourceMappingURL=chunk-54OQQ7WD.js.map
