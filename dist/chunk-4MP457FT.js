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

// src/supabase/repositories/change-requests.repository.ts
var ChangeRequestsRepository = class _ChangeRequestsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "change_requests", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getForInputCheck(fieldName, tableName, targetId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().eq("target_table", tableName).eq("target_id", targetId).eq("field_name", fieldName).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        console.error("Error fetching data:", error);
        return null;
      }
      return data ? data : null;
    });
  }
  getForChildrensCheck(tableName, targetId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().eq("target_table", tableName).eq("target_id", targetId).select();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        console.error("Error fetching data:", error);
        return null;
      }
      return data ? data : null;
    });
  }
  getForDocumentCheck(tableName, targetId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select().eq("target_table", tableName).eq("target_id", targetId);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        console.error("Error fetching data:", error);
        return null;
      }
      return data ? data : null;
    });
  }
  static \u0275fac = function ChangeRequestsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangeRequestsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChangeRequestsRepository, factory: _ChangeRequestsRepository.\u0275fac, providedIn: "root" });
};

export {
  ChangeRequestsRepository
};
//# sourceMappingURL=chunk-4MP457FT.js.map
