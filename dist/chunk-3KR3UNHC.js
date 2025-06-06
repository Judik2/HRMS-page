import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-ERGQW4H6.js";

// src/app/shared/app-services/styles-settings.service.ts
var StylesSettingsService = class _StylesSettingsService {
  stylesSettingsSubject = new BehaviorSubject({});
  constructor() {
  }
  setStylesSettings(styles_settings) {
    if (styles_settings.main_color) {
      document.documentElement.style.setProperty("--primary-color", styles_settings.main_color);
      document.documentElement.style.setProperty("--primary-color-rgb", this.hexToRgb(styles_settings.main_color));
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
    this.stylesSettingsSubject.next(styles_settings);
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
  hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex.split("").map((x) => x + x).join("");
    }
    const num = parseInt(hex, 16);
    return [num >> 16 & 255, num >> 8 & 255, num & 255].join(",");
  }
  static \u0275fac = function StylesSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StylesSettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StylesSettingsService, factory: _StylesSettingsService.\u0275fac, providedIn: "root" });
};

export {
  StylesSettingsService
};
//# sourceMappingURL=chunk-3KR3UNHC.js.map
