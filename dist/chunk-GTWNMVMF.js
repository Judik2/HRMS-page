import {
  createColorClasses
} from "./chunk-PVOL3XIB.js";
import {
  getIonMode
} from "./chunk-CLKJFHPN.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-3IAPPBJB.js";
import "./chunk-XVQ6O2EZ.js";

// node_modules/@ionic/core/dist/esm/ion-text.entry.js
var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var IonTextStyle0 = textCss;
var Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "0c2546ea3f24b0a6bfd606199441d0a4edfa4ca1",
      class: createColorClasses(this.color, {
        [mode]: true
      })
    }, h("slot", {
      key: "b7623ccb06f9461090a1f33e9f85886c7a4d5eff"
    }));
  }
};
Text.style = IonTextStyle0;
export {
  Text as ion_text
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-text.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-GTWNMVMF.js.map
