import {
  FeatureDto
} from "./chunk-G7IEYWLY.js";
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

// src/supabase/types/page-features.dto.ts
var PageFeaturesUpdateDto = class {
  created_at;
  feature_id;
  height;
  id;
  page_id;
  position_x;
  position_y;
  updated_at;
  width;
  constructor(param = null) {
    if (param) {
      this.created_at = param.created_at;
      this.feature_id = param.feature_id;
      this.height = param.height;
      this.id = param.id;
      this.page_id = param.page_id;
      this.position_x = param.position_x;
      this.position_y = param.position_y;
      this.updated_at = param.updated_at;
      this.width = param.width;
    }
  }
};
var PageFeaturesInsertDto = class {
  created_at;
  feature_id;
  height;
  id;
  page_id;
  position_x;
  position_y;
  updated_at;
  width;
  constructor(param = null) {
    if (param) {
      this.created_at = param.created_at;
      this.feature_id = param.feature_id;
      this.height = param.height;
      this.id = param.id;
      this.page_id = param.page_id;
      this.position_x = param.position_x;
      this.position_y = param.position_y;
      this.updated_at = param.updated_at;
      this.width = param.width;
    }
  }
};
var PageFeaturesRowDto = class {
  created_at;
  feature_id;
  height;
  id;
  page_id;
  position_x;
  position_y;
  updated_at;
  width;
  constructor(param = null) {
    if (param) {
      this.created_at = param.created_at;
      this.feature_id = param.feature_id;
      this.height = param.height;
      this.id = param.id;
      this.page_id = param.page_id;
      this.position_x = param.position_x;
      this.position_y = param.position_y;
      this.updated_at = param.updated_at;
      this.width = param.width;
    }
  }
};

// src/supabase/types/page-feature-parameters.dto.ts
var PageFeatureParametersRowDto = class {
  created_at;
  id;
  page_feature_id;
  parameter_name;
  updated_at;
  value;
  constructor(param = null) {
    if (param) {
      this.created_at = param.created_at;
      this.id = param.id;
      this.page_feature_id = param.page_feature_id;
      this.parameter_name = param.parameter_name;
      this.updated_at = param.updated_at;
      this.value = param.value;
    }
  }
};

// src/app/shared/models/dto/feature/page-feature.dto.ts
var PageFeatureDto = class extends PageFeaturesRowDto {
  features;
  parameters;
  isExpanded = false;
  constructor(param = null) {
    super(param);
    if (param) {
      this.features = param.features ? new FeatureDto(param.features) : void 0;
      this.parameters = param.parameters ? param.parameters.map((p) => new PageFeatureParametersRowDto(p)) : [];
    }
  }
  get name() {
    return this.features?.name ?? "";
  }
  get componentName() {
    return this.features?.component_name ?? "";
  }
  get description() {
    return this.features?.description ?? "";
  }
  get previewUrl() {
    return this.features?.preview_url ?? "";
  }
  get price() {
    return this.features?.price ?? 0;
  }
  get status() {
    return this.features?.status ?? "";
  }
};

// src/supabase/repositories/pages.repository.ts
var PagesRepository = class _PagesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "pages", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByIdWithFeatures(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from("pages").select(`
                *,
                page_features(
                    *,
                    features!page_features_feature_id_fkey(
                        id,
                        name,
                        component_name,
                        description,
                        preview_url,
                        price,
                        status
                    ),
                    parameters:page_feature_parameters(
                        id,
                        parameter_name,
                        value
                    )
                )
            `).eq("id", id).single();
      if (error) {
        throw new Error(`Load page with features error: ${error.message}`);
      }
      if (!data) {
        return null;
      }
      return {
        page: data,
        features: data.page_features.map((f) => new PageFeatureDto(f))
      };
    });
  }
  static \u0275fac = function PagesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PagesRepository, factory: _PagesRepository.\u0275fac, providedIn: "root" });
};

export {
  PageFeaturesUpdateDto,
  PageFeaturesInsertDto,
  PageFeatureDto,
  PagesRepository
};
//# sourceMappingURL=chunk-ZQOC7KHR.js.map
