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

// src/app/shared/app-services/language-settings.service.ts
var LanguageSettingsService = class _LanguageSettingsService {
  translate;
  translationsSettingsSubject = new BehaviorSubject({});
  constructor(translate) {
    this.translate = translate;
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
    this.translationsSettingsSubject.next(translation_settings);
  }
  static \u0275fac = function LanguageSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettingsService)(\u0275\u0275inject(TranslateService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageSettingsService, factory: _LanguageSettingsService.\u0275fac, providedIn: "root" });
};

export {
  LanguageSettingsService
};
//# sourceMappingURL=chunk-PAPOGBTA.js.map
