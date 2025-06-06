import {
  ObjectiveAnnualGrantComponent
} from "./chunk-WVSW2X76.js";
import {
  SafeUrlPipe
} from "./chunk-CRLS72DG.js";
import {
  BirthdayCalendarComponent
} from "./chunk-A4AE5KKX.js";
import {
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  SupabaseContext
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate
} from "./chunk-ERGQW4H6.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/app/shared/templates/iframe-viewer/iframe-viewer.component.ts
function IframeViewerComponent_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 2);
    \u0275\u0275pipe(1, "safeUrl");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 3, ctx_r0.src), \u0275\u0275sanitizeResourceUrl)("width", ctx_r0.width)("height", ctx_r0.height);
  }
}
var IframeViewerComponent = class _IframeViewerComponent {
  parameters = [];
  src;
  width = "100%";
  height = "100%";
  sandbox;
  ngOnInit() {
  }
  initialize() {
    console.log(this.parameters);
    this.parameters.forEach((param) => {
      if (!param.value)
        return;
      switch (param.parameter_name) {
        case "src":
          this.src = param.value;
          break;
        case "width":
          this.width = param.value;
          break;
        case "height":
          this.height = param.value;
          break;
        case "sandbox":
          this.sandbox = param.value;
          break;
      }
    });
  }
  static \u0275fac = function IframeViewerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IframeViewerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IframeViewerComponent, selectors: [["app-iframe-viewer"]], decls: 2, vars: 1, consts: [[1, "iframe-container"], ["frameborder", "0", "class", "iframe-content", 3, "src", "width", "height", 4, "ngIf"], ["frameborder", "0", 1, "iframe-content", 3, "src", "width", "height"]], template: function IframeViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, IframeViewerComponent_iframe_1_Template, 2, 5, "iframe", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.src);
    }
  }, dependencies: [CommonModule, NgIf, SafeUrlPipe], styles: ["\n\n.iframe-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.iframe-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n/*# sourceMappingURL=iframe-viewer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IframeViewerComponent, { className: "IframeViewerComponent", filePath: "src/app/shared/templates/iframe-viewer/iframe-viewer.component.ts", lineNumber: 14 });
})();

// src/app/shared/registers/feature-registry.ts
var FeatureRegistry = class {
  static components = /* @__PURE__ */ new Map([
    ["BirthdayCalendarComponent", BirthdayCalendarComponent],
    ["ObjectiveAnnualGrantComponent", ObjectiveAnnualGrantComponent],
    ["IframeViewerComponent", IframeViewerComponent]
  ]);
  static getComponent(name) {
    return this.components.get(name);
  }
  static getAllFeatures() {
    return Array.from(this.components.keys());
  }
};

// src/supabase/repositories/features.repository.ts
var FeaturesRepository = class _FeaturesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "features", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAllWithParameters() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select(`
                *,
                parameters:feature_parameters(
                    id,
                    name,
                    type,
                    required
                )
            `);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Get all with parameters error: ${error.message}`);
      }
      return data;
    });
  }
  getByPageId(pageId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*").eq("page_id", pageId);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function FeaturesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeaturesRepository, factory: _FeaturesRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/page-features.repository.ts
var PageFeaturesRepository = class _PageFeaturesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "page_features", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByPageId(pageId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select(`
                *,
                features!page_features_feature_id_fkey(
                    id,
                    name,
                    component_name,
                    description,
                    preview_url,
                    price,
                    status
                )
            `).eq("page_id", pageId).order("position_x", { ascending: true });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Get by page id error: ${error.message}`);
      }
      return data;
    });
  }
  getByFeatureId(featureId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*").eq("feature_id", featureId);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Get by feature id error: ${error.message}`);
      }
      return data;
    });
  }
  deleteByPageId(pageId) {
    return __async(this, null, function* () {
      const { error } = yield this.client.from(this.tableName).delete().eq("page_id", pageId);
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Delete by page id error: ${error.message}`);
      }
    });
  }
  static \u0275fac = function PageFeaturesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PageFeaturesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PageFeaturesRepository, factory: _PageFeaturesRepository.\u0275fac, providedIn: "root" });
};

export {
  IframeViewerComponent,
  FeatureRegistry,
  FeaturesRepository,
  PageFeaturesRepository
};
//# sourceMappingURL=chunk-SLFN5ZXT.js.map
