import {
  LanguageSettingsService
} from "./chunk-PAPOGBTA.js";
import {
  AppSettingsRepository
} from "./chunk-RYUCLK6V.js";
import {
  StylesSettingsService
} from "./chunk-3KR3UNHC.js";
import {
  AppOptions
} from "./chunk-CRLS72DG.js";
import {
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  BehaviorSubject,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";

// src/app/shared/app-services/feature-settings.service.ts
var FeatureSettingsService = class _FeatureSettingsService {
  featureSettingsSubject = new BehaviorSubject(null);
  setFeatureSettings(feature_settings) {
    if (!feature_settings) {
      console.error("No feature settings provided.");
      return;
    }
    this.featureSettingsSubject.next(feature_settings);
  }
  static \u0275fac = function FeatureSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureSettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureSettingsService, factory: _FeatureSettingsService.\u0275fac, providedIn: "root" });
};

// src/supabase/types/app-settings.dto.ts
var AppSettingsUpdateDto = class {
  company_id;
  feature_settings_id;
  id;
  styles_settings_id;
  translation_settings_id;
  constructor(param = null) {
    if (param) {
      this.company_id = param.company_id;
      this.feature_settings_id = param.feature_settings_id;
      this.id = param.id;
      this.styles_settings_id = param.styles_settings_id;
      this.translation_settings_id = param.translation_settings_id;
    }
  }
};

// src/app/shared/app-services/app-settings.service.ts
var AppSettingsService = class _AppSettingsService {
  translate;
  appSettingsRepository;
  stylesSettingsService;
  languageSettingsService;
  featureSettingsService;
  appSettings = {};
  constructor(translate, appSettingsRepository, stylesSettingsService, languageSettingsService, featureSettingsService) {
    this.translate = translate;
    this.appSettingsRepository = appSettingsRepository;
    this.stylesSettingsService = stylesSettingsService;
    this.languageSettingsService = languageSettingsService;
    this.featureSettingsService = featureSettingsService;
  }
  getAppSettings() {
    return this.appSettings;
  }
  updateAppSettings(appSettings) {
    let updateModel = new AppSettingsUpdateDto(appSettings);
    updateModel.feature_settings_id = appSettings.feature_settings_id || this.appSettings.feature_settings_id;
    updateModel.styles_settings_id = appSettings.styles_settings_id || this.appSettings.styles_settings_id;
    updateModel.translation_settings_id = appSettings.translation_settings_id || this.appSettings.translation_settings_id;
    updateModel.company_id = appSettings.company_id || this.appSettings.company_id;
    if (updateModel.id) {
      this.appSettingsRepository.update(updateModel.id, updateModel).then(() => {
      });
    }
  }
  initAppSettings() {
    this.appSettingsRepository.getAppSettings().then((result) => {
      if (result) {
        if (result.styles_settings) {
          this.stylesSettingsService.setStylesSettings(result.styles_settings);
        }
        if (result.translation_settings) {
          this.languageSettingsService.setTranslationSettings(result.translation_settings);
        }
        if (result.feature_settings) {
          this.featureSettingsService.setFeatureSettings(result.feature_settings);
        }
        this.appSettings = result;
      }
    });
  }
  setTranslationSettings(translation_settings) {
    if (!translation_settings || !translation_settings.languages || translation_settings.languages.length === 0) {
      console.error("No translation languages available in settings.");
      return;
    }
    let langCodes = translation_settings.languages.map((x) => x.code);
    if (langCodes && langCodes.length > 0) {
      this.translate.addLangs(langCodes);
      const defaultLang = translation_settings.languages.find((x) => x.is_default)?.code || langCodes[0];
      if (defaultLang) {
        this.translate.setDefaultLang(defaultLang);
        this.translate.use(defaultLang).subscribe((translations) => {
          AppOptions.initializeTranslations(this.translate);
        });
      }
    }
  }
  setStylesSettings(styles_settings) {
    if (styles_settings.main_color) {
      document.documentElement.style.setProperty("--primary-color", styles_settings.main_color);
    }
    if (styles_settings.secondary_color) {
      document.documentElement.style.setProperty("--secondary-color", styles_settings.secondary_color);
    }
    if (styles_settings.favicon) {
      this.updateFavicon(styles_settings.favicon);
    }
    if (styles_settings.title) {
      document.title = styles_settings.title;
    }
  }
  updateFavicon(faviconUrl) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }
  static \u0275fac = function AppSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSettingsService)(\u0275\u0275inject(TranslateService), \u0275\u0275inject(AppSettingsRepository), \u0275\u0275inject(StylesSettingsService), \u0275\u0275inject(LanguageSettingsService), \u0275\u0275inject(FeatureSettingsService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AppSettingsService, factory: _AppSettingsService.\u0275fac, providedIn: "root" });
};

export {
  FeatureSettingsService,
  AppSettingsService
};
//# sourceMappingURL=chunk-N7SNON5D.js.map
