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

// src/supabase/repositories/feature-parameters.repository.ts
var FeatureParametersRepository = class _FeatureParametersRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feature_parameters", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByFeatureId(featureId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*").eq("feature_id", featureId);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Get by feature ID error: ${error.message}`);
      }
      return data;
    });
  }
  deleteByFeatureId(featureId) {
    return __async(this, null, function* () {
      const { error } = yield this.client.from(this.tableName).delete().eq("feature_id", featureId);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Delete by feature ID error: ${error.message}`);
      }
    });
  }
  static \u0275fac = function FeatureParametersRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureParametersRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureParametersRepository, factory: _FeatureParametersRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/page-feature-parameters.repository.ts
var PageFeatureParametersRepository = class _PageFeatureParametersRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "page_feature_parameters", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByPageFeatureId(pageFeatureId) {
    return __async(this, null, function* () {
      try {
        this.spinner.show();
        this.loaderService.show();
        const { data, error } = yield this.client.from(this.tableName).select("*").eq("page_feature_id", pageFeatureId);
        if (error)
          throw error;
        return data || [];
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  upsertParameter(pageFeatureId, parameterName, value) {
    return __async(this, null, function* () {
      try {
        this.spinner.show();
        this.loaderService.show();
        const { error } = yield this.client.from(this.tableName).upsert({
          page_feature_id: pageFeatureId,
          parameter_name: parameterName,
          value
        }, {
          onConflict: "page_feature_id,parameter_name",
          ignoreDuplicates: false
        });
        if (error)
          throw error;
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  deleteByPageFeatureId(pageFeatureId) {
    return __async(this, null, function* () {
      try {
        this.spinner.show();
        this.loaderService.show();
        const { error } = yield this.client.from(this.tableName).delete().eq("page_feature_id", pageFeatureId);
        if (error)
          throw error;
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  static \u0275fac = function PageFeatureParametersRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageFeatureParametersRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageFeatureParametersRepository, factory: _PageFeatureParametersRepository.\u0275fac, providedIn: "root" });
};

export {
  FeatureParametersRepository,
  PageFeatureParametersRepository
};
//# sourceMappingURL=chunk-GGIVJW3X.js.map
