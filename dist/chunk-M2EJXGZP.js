import {
  AppOptions,
  CdkTextareaAutosize,
  DocumentComponent,
  DocumentInsertDto,
  DocumentRepository,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSuffix
} from "./chunk-CRLS72DG.js";
import {
  MatIcon,
  MatIconModule,
  MatList,
  MatListItem,
  MatListItemTitle,
  MatListModule
} from "./chunk-ZKADD55Q.js";
import {
  DefaultValueAccessor,
  Dir,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  StorageService,
  ɵNgSelectMultipleOption
} from "./chunk-JDSXESFV.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  NgxSpinnerService,
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  AsyncPipe,
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  map,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ERGQW4H6.js";

// src/app/shared/templates/app-input/app-input.component.ts
function AppInputComponent_ng_container_1_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_1_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "input", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_1_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppInputComponent_ng_container_1_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    })("blur", function AppInputComponent_ng_container_1_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    })("input", function AppInputComponent_ng_container_1_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkNegative($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass);
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("disabled", ctx_r1.isDisabled())("placeholder", ctx_r1.settings.placeholder ? \u0275\u0275pipeBind1(4, 12, ctx_r1.settings.placeholder) : "")("type", ctx_r1.settings.type);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("id", ctx_r1.settings.id)("required", ctx_r1.isRequired());
  }
}
function AppInputComponent_ng_container_2_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_2_mat_list_7_mat_list_item_1_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-icon", 15);
    \u0275\u0275listener("click", function AppInputComponent_ng_container_2_mat_list_7_mat_list_item_1_mat_icon_3_Template_mat_icon_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const i_r5 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeItem(i_r5));
    });
    \u0275\u0275text(1, "delete");
    \u0275\u0275elementEnd();
  }
}
function AppInputComponent_ng_container_2_mat_list_7_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item", 12)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275template(3, AppInputComponent_ng_container_2_mat_list_7_mat_list_item_1_mat_icon_3_Template, 2, 0, "mat-icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isDisabled());
  }
}
function AppInputComponent_ng_container_2_mat_list_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list");
    \u0275\u0275template(1, AppInputComponent_ng_container_2_mat_list_7_mat_list_item_1_Template, 4, 2, "mat-list-item", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.modelValue);
  }
}
function AppInputComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_2_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "input", 8);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_2_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newArrayItem, $event) || (ctx_r1.newArrayItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function AppInputComponent_ng_container_2_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function AppInputComponent_ng_container_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addItem());
    });
    \u0275\u0275text(6, " Add ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, AppInputComponent_ng_container_2_mat_list_7_Template, 2, 1, "mat-list", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass);
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newArrayItem);
    \u0275\u0275property("disabled", ctx_r1.isDisabled())("placeholder", ctx_r1.settings.placeholder ? \u0275\u0275pipeBind1(4, 14, ctx_r1.settings.placeholder) : "")("type", ctx_r1.settings.type)("id", ctx_r1.settings.id)("required", ctx_r1.isRequired());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.isDisabled());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.modelValue.length);
  }
}
function AppInputComponent_ng_container_3_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_3_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_3_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("dateChange", function AppInputComponent_ng_container_3_Template_input_dateChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    })("blur", function AppInputComponent_ng_container_3_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-datepicker-toggle", 17)(5, "mat-datepicker", null, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const picker_r8 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass);
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("matDatepicker", picker_r8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("disabled", ctx_r1.isDisabled())("placeholder", "dd/MM/yyyy")("name", ctx_r1.settings.id)("required", ctx_r1.isRequired())("min", ctx_r1.settings.additional && ctx_r1.settings.additional.disable_before_today ? ctx_r1.today : null);
    \u0275\u0275advance();
    \u0275\u0275property("for", picker_r8);
  }
}
function AppInputComponent_ng_container_4_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_4_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "textarea", 18);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_4_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppInputComponent_ng_container_4_Template_textarea_change_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    })("blur", function AppInputComponent_ng_container_4_Template_textarea_blur_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    });
    \u0275\u0275text(5, "            ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass);
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("disabled", ctx_r1.isDisabled())("placeholder", ctx_r1.settings.placeholder ? \u0275\u0275pipeBind1(4, 12, ctx_r1.settings.placeholder) : "");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("name", ctx_r1.settings.id)("id", ctx_r1.settings.id)("required", ctx_r1.isRequired());
  }
}
function AppInputComponent_ng_container_5_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_5_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    \u0275\u0275property("value", option_r11["value"] ? option_r11["value"] : option_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r11["label"] ? option_r11["label"] : option_r11, " ");
  }
}
function AppInputComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_5_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "mat-select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_5_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function AppInputComponent_ng_container_5_Template_mat_select_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectChange($event));
    })("blur", function AppInputComponent_ng_container_5_Template_mat_select_blur_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    });
    \u0275\u0275element(4, "option", 20);
    \u0275\u0275template(5, AppInputComponent_ng_container_5_mat_option_5_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass);
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("disabled", ctx_r1.isDisabled());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("required", ctx_r1.isRequired());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.settings.options));
  }
}
function AppInputComponent_ng_container_6_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_6_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275element(1, "i");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    \u0275\u0275property("value", option_r13["key"]);
    \u0275\u0275advance();
    \u0275\u0275classMap(option_r13["icon"] + " trend-icon");
  }
}
function AppInputComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_6_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "mat-select", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_6_Template_mat_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("selectionChange", function AppInputComponent_ng_container_6_Template_mat_select_selectionChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectChange($event));
    })("blur", function AppInputComponent_ng_container_6_Template_mat_select_blur_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleBlur());
    });
    \u0275\u0275element(4, "option", 20);
    \u0275\u0275template(5, AppInputComponent_ng_container_6_mat_option_5_Template, 2, 3, "mat-option", 21);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass + " trend-select");
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("disabled", ctx_r1.isDisabled());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("required", ctx_r1.isRequired());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 10, ctx_r1.trends));
  }
}
function AppInputComponent_ng_container_7_mat_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 4, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", "");
  }
}
function AppInputComponent_ng_container_7_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    \u0275\u0275property("value", option_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r15["label"] ? option_r15["label"] : option_r15, " ");
  }
}
function AppInputComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_7_mat_label_1_Template, 3, 6, "mat-label", 5);
    \u0275\u0275elementStart(2, "mat-form-field", 6)(3, "input", 23);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("change", function AppInputComponent_ng_container_7_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    })("focus", function AppInputComponent_ng_container_7_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocusAutocomplete());
    })("input", function AppInputComponent_ng_container_7_Template_input_input_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAutocompleteInput($event));
    });
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-autocomplete", 24, 1);
    \u0275\u0275listener("optionSelected", function AppInputComponent_ng_container_7_Template_mat_autocomplete_optionSelected_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAutocompleteSelect($event));
    });
    \u0275\u0275template(7, AppInputComponent_ng_container_7_mat_option_7_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const auto_r16 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.settings.formFieldClass);
    \u0275\u0275property("appearance", ctx_r1.settings.appearance);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", ctx_r1.settings.placeholder ? \u0275\u0275pipeBind1(4, 10, ctx_r1.settings.placeholder) : "")("matAutocomplete", auto_r16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("disabled", ctx_r1.isDisabled());
    \u0275\u0275advance(2);
    \u0275\u0275property("displayWith", ctx_r1.displayWith);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 12, ctx_r1.settings.filteredOptions));
  }
}
function AppInputComponent_ng_container_8_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275property("for", ctx_r1.settings.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 5, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_8_label_1_Template, 3, 7, "label", 25);
    \u0275\u0275elementStart(2, "div", 26)(3, "input", 27);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("change", function AppInputComponent_ng_container_8_Template_input_change_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handleChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("disabled", ctx_r1.isDisabled())("required", ctx_r1.isRequired())("placeholder", ctx_r1.settings.placeholder ? \u0275\u0275pipeBind1(4, 8, ctx_r1.settings.placeholder) : "")("id", ctx_r1.settings.id)("checked", ctx_r1.modelValue);
  }
}
function AppInputComponent_ng_container_9_label_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.labelClass);
    \u0275\u0275property("for", ctx_r1.settings.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 5, ctx_r1.settings.label), " ", ctx_r1.isRequired() ? "*" : "", " ");
  }
}
function AppInputComponent_ng_container_9_app_document_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-document", 31);
    \u0275\u0275listener("deleted", function AppInputComponent_ng_container_9_app_document_2_Template_app_document_deleted_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.handleChange(null));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("document_id", ctx_r1.modelValue);
  }
}
function AppInputComponent_ng_container_9_input_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 32);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AppInputComponent_ng_container_9_input_3_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.modelValue, $event) || (ctx_r1.modelValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function AppInputComponent_ng_container_9_input_3_Template_input_change_0_listener($event) {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uploadFile($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.settings.inputClass);
    \u0275\u0275property("disabled", ctx_r1.isDisabled())("placeholder", ctx_r1.settings.placeholder ? \u0275\u0275pipeBind1(1, 8, ctx_r1.settings.placeholder) : "")("type", ctx_r1.settings.type);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.modelValue);
    \u0275\u0275property("id", ctx_r1.settings.id)("required", ctx_r1.isRequired());
  }
}
function AppInputComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppInputComponent_ng_container_9_label_1_Template, 3, 7, "label", 25)(2, AppInputComponent_ng_container_9_app_document_2_Template, 1, 1, "app-document", 29)(3, AppInputComponent_ng_container_9_input_3_Template, 2, 10, "input", 30);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.settings.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modelValue);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.modelValue);
  }
}
var AppInputComponent = class _AppInputComponent {
  storageService;
  documentRepository;
  spinner;
  settings;
  element;
  change = new EventEmitter();
  select = new EventEmitter();
  blur = new EventEmitter();
  appOptions = AppOptions;
  today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  get modelValue() {
    let value = this.settings.field ? this.element[this.settings.field] : this.element;
    if (this.settings.type === "number" && value !== null && value !== void 0) {
      return Number(value);
    }
    return value;
  }
  set modelValue(value) {
    if (this.settings.type === "number" && value !== null && value !== void 0) {
      value = Number(value);
    }
    if (this.settings.field) {
      this.element[this.settings.field] = value;
    } else {
      this.element = value;
    }
  }
  trends = of(AppConstants.trends);
  constructor(storageService, documentRepository, spinner) {
    this.storageService = storageService;
    this.documentRepository = documentRepository;
    this.spinner = spinner;
  }
  ngOnInit() {
    if (this.settings.type === "trend-select") {
      this.settings.options = AppOptions.getTrendOptions();
    }
  }
  handleChange(event) {
    if (event) {
      if (event.target.type == "checkbox") {
        this.change.emit(event.target.checked);
        if (typeof this.settings.change === "function") {
          this.settings.change(event.target.checked);
        }
        return;
      }
      this.change.emit(event.target.value);
      if (typeof this.settings.change === "function") {
        this.settings.change(event.target.value);
      }
    } else {
      this.change.emit(null);
      if (typeof this.settings.change === "function") {
        this.settings.change(null);
      }
    }
  }
  handleSelect2Change(event) {
    this.change.emit(event.value);
  }
  handleAutocompleteChange(event, key = null) {
    this.modelValue = key && event[key] ? event[key] : event;
    this.change.emit(this.modelValue);
  }
  handleBlur() {
    this.blur.emit();
  }
  uploadFile(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (file) {
      this.uploadDocument(file);
    }
  }
  uploadDocument(file) {
    let filePath = AppConstants.addTimestamp(file.name);
    let document = new DocumentInsertDto();
    document.path = filePath;
    document.name = this.settings.additional && this.settings.additional.documentName && typeof this.settings.additional.documentName === "function" ? this.settings.additional.documentName(file) : this.settings.additional.documentName || file.name;
    document.type = this.settings.additional && this.settings.additional.documentType && typeof this.settings.additional.documentType === "function" ? this.settings.additional.documentType(file) : this.settings.additional.documentType;
    if (document.type) {
      this.storageService.uploadFile(document.type, filePath, file).then((value) => {
        this.documentRepository.create(document).then((value2) => {
          this.handleChange(value2[0].id);
        });
      });
    }
  }
  // Array input
  newArrayItem = "";
  addItem() {
    if (this.newArrayItem) {
      this.modelValue = [...this.modelValue || [], this.newArrayItem];
      this.newArrayItem = "";
    }
  }
  removeItem(index) {
    const updatedList = [...this.modelValue];
    updatedList.splice(index, 1);
    this.modelValue = updatedList;
  }
  // --------- AUTOCOMPLETE ---------
  displayWith(option) {
    return option && option["label"] ? option["label"] : option;
  }
  onAutocompleteSelect(event) {
    this.select.emit(event.option.value["value"] ? event.option.value["value"] : event.option.value);
  }
  onFocusAutocomplete() {
    this.settings.filteredOptions = this.settings.options || of([]);
  }
  onAutocompleteInput(event) {
    const filterValue = (event.target.value || "").toString().toLowerCase();
    if (!filterValue) {
      this.change.emit(null);
      return;
    }
    if (this.settings.options) {
      this.settings.filteredOptions = this.settings.options.pipe(map((options) => options.filter((option) => {
        if (option && option.hasOwnProperty("label")) {
          return option["label"].toString().toLowerCase().includes(filterValue);
        } else {
          return option.toString().toLowerCase().includes(filterValue);
        }
      })));
    }
  }
  // --------- SELECT ---------
  onSelectChange(event) {
    this.change.emit(event.value ? event.value : event.value);
  }
  isDisabled() {
    const disabled = this.settings.disabled;
    return typeof disabled === "function" ? disabled() : !!disabled;
  }
  isRequired() {
    const required = this.settings.required;
    return typeof required === "function" ? required() : !!required;
  }
  checkNegative(event) {
    if (this.settings.isNegativeNotAllowed && this.settings.type === "number") {
      if (Number(event.target.value) < 0) {
        event.target.value = 0;
        this.modelValue = 0;
      }
    }
  }
  static \u0275fac = function AppInputComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppInputComponent)(\u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(DocumentRepository), \u0275\u0275directiveInject(NgxSpinnerService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppInputComponent, selectors: [["app-input"]], inputs: { settings: "settings", element: "element" }, outputs: { change: "change", select: "select", blur: "blur" }, decls: 10, vars: 9, consts: [["picker", ""], ["auto", "matAutocomplete"], [3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [3, "class", 4, "ngIf"], ["dir", "rtl", 3, "appearance"], ["matInput", "", 3, "ngModelChange", "change", "blur", "input", "disabled", "placeholder", "type", "ngModel", "id", "required"], ["matInput", "", 3, "ngModelChange", "blur", "ngModel", "disabled", "placeholder", "type", "id", "required"], ["matSuffix", "", "type", "button", 3, "click", "disabled"], [4, "ngIf"], ["dir", "rtl", 4, "ngFor", "ngForOf"], ["dir", "rtl"], ["matListItemTitle", "", 1, "w-100", "d-flex", "align-items-center", "justify-content-between"], ["color", "primary", 3, "click", 4, "ngIf"], ["color", "primary", 3, "click"], ["matInput", "", 3, "ngModelChange", "dateChange", "blur", "matDatepicker", "ngModel", "disabled", "placeholder", "name", "required", "min"], ["matSuffix", "", 3, "for"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "3", "cdkAutosizeMaxRows", "10", 3, "ngModelChange", "change", "blur", "disabled", "placeholder", "ngModel", "name", "id", "required"], ["data-container", "body", 3, "ngModelChange", "selectionChange", "blur", "disabled", "ngModel", "required"], ["hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "matInput", "", 3, "change", "focus", "input", "ngModelChange", "placeholder", "matAutocomplete", "ngModel", "disabled"], [3, "optionSelected", "displayWith"], [3, "class", "for", 4, "ngIf"], [1, "form-check", "form-switch"], ["type", "checkbox", 1, "form-check-input", 3, "change", "disabled", "required", "placeholder", "id", "checked"], [3, "for"], [3, "document_id", "deleted", 4, "ngIf"], [3, "disabled", "placeholder", "type", "ngModel", "id", "class", "required", "ngModelChange", "change", 4, "ngIf"], [3, "deleted", "document_id"], [3, "ngModelChange", "change", "disabled", "placeholder", "type", "ngModel", "id", "required"]], template: function AppInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 2);
      \u0275\u0275template(1, AppInputComponent_ng_container_1_Template, 5, 14, "ng-container", 3)(2, AppInputComponent_ng_container_2_Template, 8, 16, "ng-container", 4)(3, AppInputComponent_ng_container_3_Template, 7, 14, "ng-container", 4)(4, AppInputComponent_ng_container_4_Template, 6, 14, "ng-container", 4)(5, AppInputComponent_ng_container_5_Template, 7, 12, "ng-container", 4)(6, AppInputComponent_ng_container_6_Template, 7, 12, "ng-container", 4)(7, AppInputComponent_ng_container_7_Template, 9, 14, "ng-container", 4)(8, AppInputComponent_ng_container_8_Template, 5, 10, "ng-container", 4)(9, AppInputComponent_ng_container_9_Template, 4, 3, "ng-container", 4);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngSwitch", ctx.settings.type);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSwitchCase", "array");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "date");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "textarea");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "select");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "trend-select");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "autocomplete");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "switch");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "file");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    AsyncPipe,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    TranslatePipe,
    DocumentComponent,
    MatListModule,
    MatList,
    MatListItem,
    Dir,
    MatListItemTitle,
    MatIconModule,
    MatIcon,
    MatSelectModule,
    MatFormField,
    MatLabel,
    MatSuffix,
    MatSelect,
    MatOption,
    MatInputModule,
    MatInput,
    CdkTextareaAutosize,
    MatAutocompleteModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle
  ], styles: ["\n\nselect[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  background-color: light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3));\n  color: light-dark(rgb(84, 84, 84), rgb(170, 170, 170));\n}\n.trend-select[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.trend-select[_ngcontent-%COMP%]     .mat-mdc-select-trigger {\n  padding: 0;\n  min-height: 24px;\n  height: 24px;\n}\n.trend-select[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  padding: 0px !important;\n}\n.trend-select[_ngcontent-%COMP%]     .mat-mdc-select-value {\n  padding: 0;\n  height: 24px;\n  line-height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.trend-select[_ngcontent-%COMP%]     .mat-mdc-select-arrow {\n  margin: 0;\n  width: 16px;\n}\n.trend-select[_ngcontent-%COMP%]     .mat-mdc-option {\n  min-height: 32px;\n  height: 32px;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.trend-select[_ngcontent-%COMP%]     .mdc-list-item__primary-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.trend-select[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n  vertical-align: middle;\n}\n.trend-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=app-input.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppInputComponent, { className: "AppInputComponent", filePath: "src/app/shared/templates/app-input/app-input.component.ts", lineNumber: 44 });
})();

export {
  AppInputComponent
};
//# sourceMappingURL=chunk-M2EJXGZP.js.map
