import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-YRC2QXLI.js";
import "./chunk-Z4NK5ERE.js";
import "./chunk-CLKJFHPN.js";
import {
  readTask,
  writeTask
} from "./chunk-3IAPPBJB.js";
import {
  componentOnReady
} from "./chunk-4JBIDYYM.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// node_modules/@ionic/core/dist/esm/status-tap-6367b913.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(void 0, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
/*! Bundled license information:

@ionic/core/dist/esm/status-tap-6367b913.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-66V22CLU.js.map
