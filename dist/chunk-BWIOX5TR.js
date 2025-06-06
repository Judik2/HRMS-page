import {
  MatSnackBar
} from "./chunk-JYDETW4E.js";
import {
  AppModalComponent,
  ModalService
} from "./chunk-CRLS72DG.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ZKADD55Q.js";
import {
  MatButton,
  MatButtonModule,
  StorageService
} from "./chunk-JDSXESFV.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  AsyncPipe,
  CommonModule,
  EventEmitter,
  NgClass,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";

// src/app/shared/templates/circle-employee-img/circle-employee-img.component.ts
var _c0 = ["modalContent"];
var _c1 = ["fileInput"];
var _c2 = (a0, a1, a2) => ({ "edit": a0, "avatar-offline": a1, "avatar-online": a2 });
function CircleEmployeeImgComponent_div_0_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r0.size);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 3, ctx_r0.employee.getEmployeeAvatar()), \u0275\u0275sanitizeUrl);
  }
}
function CircleEmployeeImgComponent_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.employee.getEmployeeSign());
  }
}
function CircleEmployeeImgComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function CircleEmployeeImgComponent_div_0_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePhotoModal());
    });
    \u0275\u0275element(1, "i", 9);
    \u0275\u0275elementEnd();
  }
}
function CircleEmployeeImgComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, CircleEmployeeImgComponent_div_0_img_1_Template, 2, 5, "img", 4)(2, CircleEmployeeImgComponent_div_0_span_2_Template, 2, 1, "span", 5)(3, CircleEmployeeImgComponent_div_0_div_3_Template, 2, 0, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("", ctx_r0.size, " avatar avatar-rounded border border-2 border-white m-auto d-flex");
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(7, _c2, ctx_r0.isEditable, !ctx_r0.employee.isActive(), ctx_r0.employee.isActive()));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.employee.getEmployeeAvatar());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.employee.getEmployeeAvatar());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditable && ctx_r0.currentEmployee && ctx_r0.currentEmployee.isAdmin());
  }
}
function CircleEmployeeImgComponent_ng_template_1_img_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 1, ctx_r0.employee == null ? null : ctx_r0.employee.getEmployeeAvatar()), \u0275\u0275sanitizeUrl);
  }
}
function CircleEmployeeImgComponent_ng_template_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "Click or drag to upload"));
  }
}
function CircleEmployeeImgComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275listener("dragover", function CircleEmployeeImgComponent_ng_template_1_Template_div_dragover_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragOver($event));
    })("dragleave", function CircleEmployeeImgComponent_ng_template_1_Template_div_dragleave_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDragLeave($event));
    })("drop", function CircleEmployeeImgComponent_ng_template_1_Template_div_drop_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDrop($event));
    })("click", function CircleEmployeeImgComponent_ng_template_1_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const fileInput_r4 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fileInput_r4.click());
    });
    \u0275\u0275elementStart(2, "input", 12, 1);
    \u0275\u0275listener("change", function CircleEmployeeImgComponent_ng_template_1_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, CircleEmployeeImgComponent_ng_template_1_img_6_Template, 2, 3, "img", 14);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, CircleEmployeeImgComponent_ng_template_1_div_8_Template, 6, 3, "div", 15);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16)(11, "button", 17);
    \u0275\u0275listener("click", function CircleEmployeeImgComponent_ng_template_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.deleteImage());
    });
    \u0275\u0275elementStart(12, "mat-icon", 18);
    \u0275\u0275text(13, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 19);
    \u0275\u0275listener("click", function CircleEmployeeImgComponent_ng_template_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uploadPhoto());
    });
    \u0275\u0275elementStart(17, "mat-icon", 18);
    \u0275\u0275text(18, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("drag-over", ctx_r0.isDragging);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-image", \u0275\u0275pipeBind1(5, 8, ctx_r0.employee == null ? null : ctx_r0.employee.getEmployeeAvatar()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 10, ctx_r0.employee == null ? null : ctx_r0.employee.getEmployeeAvatar()));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(9, 12, ctx_r0.employee == null ? null : ctx_r0.employee.getEmployeeAvatar()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "Delete Image"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 16, "Save Image"), " ");
  }
}
var CircleEmployeeImgComponent = class _CircleEmployeeImgComponent {
  storageService;
  modalService;
  supabaseAuthService;
  snackBar;
  translate;
  avatar;
  employee;
  isEditable = false;
  size = "avatar-xl";
  onUpload = new EventEmitter();
  onDelete = new EventEmitter();
  currentEmployee;
  modalContent = null;
  dialogRef = null;
  fileInput;
  imageUrl = null;
  imageSelected = new EventEmitter();
  isDragging = false;
  constructor(storageService, modalService, supabaseAuthService, snackBar, translate) {
    this.storageService = storageService;
    this.modalService = modalService;
    this.supabaseAuthService = supabaseAuthService;
    this.snackBar = snackBar;
    this.translate = translate;
  }
  ngOnInit() {
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
  }
  onFileChange(event) {
    const file = event.target.files?.[0];
    if (file) {
      this.handleFile(file);
    }
  }
  onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        this.handleFile(file);
      }
    }
  }
  handleFile(file) {
    this.avatar = file;
    const reader = new FileReader();
    reader.onload = () => {
      if (!this.employee) {
        return;
      }
      this.employee.setEmployeeAvatar(reader.result, file.name);
    };
    reader.readAsDataURL(file);
  }
  uploadPhoto() {
    if (this.avatar) {
      const filePath = AppConstants.addTimestamp(this.avatar.name);
      this.storageService.uploadFile("avatars", filePath, this.avatar).then(() => {
        this.dialogRef?.close();
        this.snackBar.open(this.translate.instant("Avatar uploaded!"), this.translate.instant("Close"), { duration: 2e3 });
        this.onUpload.emit(filePath);
      });
    }
  }
  deleteImage() {
    this.avatar = void 0;
    this.onDelete.emit();
    this.dialogRef?.close();
  }
  togglePhotoModal() {
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.translate.instant("Upload Photo"),
        template: this.modalContent,
        showFooter: false
      }
    });
  }
  static \u0275fac = function CircleEmployeeImgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CircleEmployeeImgComponent)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CircleEmployeeImgComponent, selectors: [["app-circle-employee-img"]], viewQuery: function CircleEmployeeImgComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.modalContent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
    }
  }, inputs: { employee: "employee", isEditable: "isEditable", size: "size", imageUrl: "imageUrl" }, outputs: { onUpload: "onUpload", onDelete: "onDelete", imageSelected: "imageSelected" }, decls: 3, vars: 1, consts: [["modalContent", ""], ["fileInput", ""], [3, "ngClass", "class", 4, "ngIf"], [3, "ngClass"], ["alt", "Username", 3, "height", "src", 4, "ngIf"], [4, "ngIf"], ["class", "edit-pen", 3, "click", 4, "ngIf"], ["alt", "Username", 3, "src"], [1, "edit-pen", 3, "click"], [1, "fa-solid", "fa-pen"], [1, "modal-body"], [1, "upload-section", 3, "dragover", "dragleave", "drop", "click"], ["type", "file", "accept", "image/*", 1, "d-none", 3, "change"], [1, "circle-employee-img"], ["alt", "Preview", 3, "src", 4, "ngIf"], ["class", "no-image", 4, "ngIf"], [1, "d-flex", "justify-content-center", "w-100", "mt-4"], ["type", "button", "mat-raised-button", "", "color", "warn", 1, "me-2", 3, "click"], [1, "me-2"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["alt", "Preview", 3, "src"], [1, "no-image"], [1, "upload-text"]], template: function CircleEmployeeImgComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CircleEmployeeImgComponent_div_0_Template, 4, 11, "div", 2)(1, CircleEmployeeImgComponent_ng_template_1_Template, 21, 18, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.employee);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgIf,
    AsyncPipe,
    TranslatePipe,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatButton
  ], styles: ['\n\n.avatar[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-color: var(--primary-color);\n  background: var(--primary-color);\n  overflow: visible;\n}\n.avatar[_ngcontent-%COMP%]   .edit-pen[_ngcontent-%COMP%] {\n  min-width: 45% !important;\n  cursor: pointer;\n  display: none;\n}\n.avatar.edit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  display: none;\n}\n.avatar[_ngcontent-%COMP%]:hover   .edit-pen[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: block;\n}\n.avatar-offline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  top: 75%;\n  right: 0%;\n  border: 2px solid white;\n  z-index: 9;\n  background-color: rgb(164, 166, 164);\n}\n.avatar-online[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  display: block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  top: 75%;\n  right: 0%;\n  border: 2px solid white;\n  z-index: 9;\n  background-color: rgb(37, 201, 37);\n}\n.upload-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 2rem;\n  border: 2px dashed var(--primary-color);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(var(--primary-color-rgb), 0.1),\n      rgba(var(--primary-color-rgb), 0.05));\n}\n.upload-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.3) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  transform: rotate(45deg);\n  transition: all 0.3s ease;\n  opacity: 0;\n}\n.upload-section[_ngcontent-%COMP%]:hover::before {\n  animation: _ngcontent-%COMP%_shine 1.5s ease-in-out;\n}\n.upload-section.drag-over[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n  background-color: rgba(var(--primary-color-rgb), 0.15);\n  transform: scale(1.02);\n}\n@keyframes _ngcontent-%COMP%_shine {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%) rotate(45deg);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%) rotate(45deg);\n  }\n}\n.circle-employee-img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #e0e0e0;\n  transition: all 0.3s ease;\n  position: relative;\n}\n.circle-employee-img.has-image[_ngcontent-%COMP%] {\n  border-color: var(--primary-color);\n}\n.circle-employee-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.circle-employee-img[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: var(--primary-color);\n  gap: 1rem;\n}\n.circle-employee-img[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  width: 64px;\n  height: 64px;\n  opacity: 0.7;\n}\n.circle-employee-img[_ngcontent-%COMP%]   .no-image[_ngcontent-%COMP%]   .upload-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  text-align: center;\n  color: var(--primary-color);\n  opacity: 0.8;\n}\n.upload-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.upload-controls[_ngcontent-%COMP%]   .drag-drop-text[_ngcontent-%COMP%] {\n  color: #757575;\n  font-size: 0.875rem;\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=circle-employee-img.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CircleEmployeeImgComponent, { className: "CircleEmployeeImgComponent", filePath: "src/app/shared/templates/circle-employee-img/circle-employee-img.component.ts", lineNumber: 27 });
})();

export {
  CircleEmployeeImgComponent
};
//# sourceMappingURL=chunk-BWIOX5TR.js.map
