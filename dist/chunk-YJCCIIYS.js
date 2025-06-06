import {
  FeaturesRepository,
  IframeViewerComponent,
  PageFeaturesRepository
} from "./chunk-SLFN5ZXT.js";
import {
  BehaviorSubject,
  createComponent,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/app/shared/app-services/feature-renderer.service.ts
var FeatureRendererService = class _FeatureRendererService {
  featuresRepository;
  pageFeaturesRepository;
  featuresSubject = new BehaviorSubject([]);
  featureParametersSubject = new BehaviorSubject([]);
  pageFeatureParametersSubject = new BehaviorSubject({});
  features$ = this.featuresSubject.asObservable();
  featureParameters$ = this.featureParametersSubject.asObservable();
  pageFeatureParameters$ = this.pageFeatureParametersSubject.asObservable();
  componentMap = {
    "iframe-viewer": IframeViewerComponent
  };
  constructor(featuresRepository, pageFeaturesRepository) {
    this.featuresRepository = featuresRepository;
    this.pageFeaturesRepository = pageFeaturesRepository;
    this.initFeatures();
  }
  initFeatures() {
    return __async(this, null, function* () {
      const features = yield this.featuresRepository.getAll();
      this.featuresSubject.next(features);
    });
  }
  renderFeature(container, pageFeatureId) {
    return __async(this, null, function* () {
      const pageFeatureParameters = this.pageFeatureParametersSubject.value[pageFeatureId] || [];
      const features = this.featuresSubject.value;
      const pageFeature = yield this.pageFeaturesRepository.getById(pageFeatureId);
      if (!pageFeature) {
        console.error(`Page feature with id ${pageFeatureId} not found`);
        return void 0;
      }
      const feature = features.find((f) => f.id === pageFeature.feature_id);
      if (!feature) {
        console.error(`Feature with id ${pageFeature.feature_id} not found`);
        return void 0;
      }
      try {
        container.clear();
        if (!feature.component_name) {
          console.error(`Component name not defined for feature ${feature.id}`);
          return void 0;
        }
        const componentType = this.componentMap[feature.component_name];
        if (!componentType) {
          console.error(`Component for feature ${feature.component_name} not found`);
          return void 0;
        }
        const componentRef = createComponent(componentType, {
          environmentInjector: container.injector
        });
        if ("parameters" in componentRef.instance) {
          componentRef.setInput("parameters", pageFeatureParameters);
        }
        if (componentRef.instance.initialize) {
          componentRef.instance.initialize();
        }
        container.insert(componentRef.hostView);
        return componentRef;
      } catch (error) {
        console.error(`Error rendering feature ${feature.name}:`, error);
        return void 0;
      }
    });
  }
  static \u0275fac = function FeatureRendererService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureRendererService)(\u0275\u0275inject(FeaturesRepository), \u0275\u0275inject(PageFeaturesRepository));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureRendererService, factory: _FeatureRendererService.\u0275fac, providedIn: "root" });
};

export {
  FeatureRendererService
};
//# sourceMappingURL=chunk-YJCCIIYS.js.map
