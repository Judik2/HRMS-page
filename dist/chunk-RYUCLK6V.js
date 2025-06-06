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

// src/supabase/repositories/app-settings.repository.ts
var AppSettingsRepository = class _AppSettingsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "app_settings", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAppSettings() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, styles_settings(*), company(*), translation_settings(*, languages:language(*)), feature_settings:feature_settings(*, feature_settings_features(*, feature:features(*)))").single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
      }
      return data;
    });
  }
  static \u0275fac = function AppSettingsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSettingsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppSettingsRepository, factory: _AppSettingsRepository.\u0275fac, providedIn: "root" });
};

export {
  AppSettingsRepository
};
//# sourceMappingURL=chunk-RYUCLK6V.js.map
