import {
  getIonMode
} from "./chunk-CLKJFHPN.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-3IAPPBJB.js";
import "./chunk-XVQ6O2EZ.js";

// node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js
var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var IonBackdropIosStyle0 = backdropIosCss;
var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var IonBackdropMdStyle0 = backdropMdCss;
var Backdrop = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionBackdropTap = createEvent(this, "ionBackdropTap", 7);
    this.visible = true;
    this.tappable = true;
    this.stopPropagation = true;
  }
  onMouseDown(ev) {
    this.emitTap(ev);
  }
  emitTap(ev) {
    if (this.stopPropagation) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    if (this.tappable) {
      this.ionBackdropTap.emit();
    }
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "7abaf2c310aa399607451b14063265e8a5846938",
      "aria-hidden": "true",
      class: {
        [mode]: true,
        "backdrop-hide": !this.visible,
        "backdrop-no-tappable": !this.tappable
      }
    });
  }
};
Backdrop.style = {
  ios: IonBackdropIosStyle0,
  md: IonBackdropMdStyle0
};
export {
  Backdrop as ion_backdrop
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-backdrop.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-YH2X6BLJ.js.map
