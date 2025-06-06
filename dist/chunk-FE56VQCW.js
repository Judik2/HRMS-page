import {
  SMSAuthService
} from "./chunk-U4XX5UOH.js";
import {
  StylesSettingsService
} from "./chunk-3KR3UNHC.js";
import "./chunk-BV2EUPGA.js";
import "./chunk-6X5DL6OJ.js";
import "./chunk-NJHAENO7.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  DefaultValueAccessor,
  Dir,
  FormsModule,
  MatButton,
  MatButtonModule,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-JDSXESFV.js";
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import "./chunk-NKEEF4XY.js";
import "./chunk-LHQOL4PU.js";
import "./chunk-YW5JDNY2.js";
import {
  Router,
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  map,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-XVQ6O2EZ.js";

// src/app/auth/login/login.component.ts
function LoginComponent_div_1_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 8);
    \u0275\u0275listener("ngSubmit", function LoginComponent_div_1_form_4_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendSMSClick());
    });
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "Please confirm your person."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(6, 6, "SMS will be sended to this number:"), " ", ctx_r1.currentEmployee == null ? null : ctx_r1.currentEmployee.phone, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "Send SMS"));
  }
}
function LoginComponent_div_1_form_5_span_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind1(2, 3, "(Please wait"), " ", ctx_r1.countdownDisabledButton, " ", \u0275\u0275pipeBind1(3, 5, "seconds)"), "");
  }
}
function LoginComponent_div_1_form_5_small_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_div_1_form_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form")(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10)(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11)(12, "input", 12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_1_form_5_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode, $event) || (ctx_r1.smsCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 13)(15, "span", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function LoginComponent_div_1_form_5_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendSMSClick());
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275template(21, LoginComponent_div_1_form_5_span_21_Template, 4, 7, "span", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, LoginComponent_div_1_form_5_small_22_Template, 2, 1, "small", 16);
    \u0275\u0275elementStart(23, "button", 17);
    \u0275\u0275listener("click", function LoginComponent_div_1_form_5_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLoginClick());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 14, "Confirm SMS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 16, "SMS was sended to this number:"), " ", ctx_r1.currentEmployee == null ? null : ctx_r1.currentEmployee.phone, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(10, 18, "The code sent will be valid for 3 minutes."), " (", ctx_r1.transform(ctx_r1.countdownCodeSended), ")");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 20, "Enter SMS code"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 22, "Didn't receive a code?"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.countdownDisabledButton > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 24, "Send again"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.countdownDisabledButton > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.countdownCodeSended == 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "Login"), "");
  }
}
function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 3)(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, LoginComponent_div_1_form_4_Template, 10, 10, "form", 6)(5, LoginComponent_div_1_form_5_Template, 26, 28, "form", 7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isSMSSended);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSMSSended);
  }
}
function LoginComponent_div_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "h2", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 33)(9, "label", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 35);
    \u0275\u0275element(13, "input", 36);
    \u0275\u0275elementStart(14, "span", 37);
    \u0275\u0275element(15, "i", 38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 33)(17, "button", 39);
    \u0275\u0275listener("click", function LoginComponent_div_2_ng_container_11_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendSMSClick());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "Sign In"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "Please enter your details to sign in"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "Phone Number"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.currentEmployee == null ? null : ctx_r1.currentEmployee.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 11, "Send SMS"));
  }
}
function LoginComponent_div_2_ng_container_12_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.countdownDisabledButton, ")");
  }
}
function LoginComponent_div_2_ng_container_12_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function LoginComponent_div_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30)(2, "h2", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 40)(9, "div", 41)(10, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_2_ng_container_12_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode[0], $event) || (ctx_r1.smsCode[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_2_ng_container_12_Template_input_input_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, 0));
    })("paste", function LoginComponent_div_2_ng_container_12_Template_input_paste_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpPaste($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_2_ng_container_12_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode[1], $event) || (ctx_r1.smsCode[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_2_ng_container_12_Template_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, 1));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_2_ng_container_12_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode[2], $event) || (ctx_r1.smsCode[2] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_2_ng_container_12_Template_input_input_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, 2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_2_ng_container_12_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode[3], $event) || (ctx_r1.smsCode[3] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_2_ng_container_12_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, 3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_2_ng_container_12_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode[4], $event) || (ctx_r1.smsCode[4] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_2_ng_container_12_Template_input_input_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, 4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_div_2_ng_container_12_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.smsCode[5], $event) || (ctx_r1.smsCode[5] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function LoginComponent_div_2_ng_container_12_Template_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onOtpInput($event, 5));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "div", 48)(18, "p", 49);
    \u0275\u0275element(19, "i", 50);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 51)(22, "p", 52);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementStart(25, "a", 53);
    \u0275\u0275listener("click", function LoginComponent_div_2_ng_container_12_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onSendSMSClick());
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275template(28, LoginComponent_div_2_ng_container_12_span_28_Template, 2, 1, "span", 7);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 33)(30, "button", 54);
    \u0275\u0275listener("click", function LoginComponent_div_2_ng_container_12_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onLoginClick());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(33, LoginComponent_div_2_ng_container_12_div_33_Template, 2, 1, "div", 55);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 18, "SMS OTP Verification"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(7, 20, "OTP sent to your phone number ending"), " ", ctx_r1.currentEmployee == null ? null : ctx_r1.currentEmployee.phone == null ? null : ctx_r1.currentEmployee.phone.slice(-4), "");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode[0]);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode[1]);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode[2]);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode[3]);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode[4]);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.smsCode[5]);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.transform(ctx_r1.countdownCodeSended));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 22, "Didn't get the OTP?"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.countdownDisabledButton > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 24, "Resend OTP"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.countdownDisabledButton > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.countdownCodeSended == 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 26, "Verify & Proceed"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
  }
}
function LoginComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 19)(2, "div", 20)(3, "div", 21)(4, "div", 22)(5, "form", 23)(6, "div", 24)(7, "div", 25);
    \u0275\u0275element(8, "img", 26);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 27);
    \u0275\u0275template(11, LoginComponent_div_2_ng_container_11_Template, 20, 13, "ng-container", 7)(12, LoginComponent_div_2_ng_container_12_Template, 34, 28, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 28)(14, "p", 29);
    \u0275\u0275text(15, "Copyright \xA9 2025 - ofekpoint");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(9, 3, ctx_r1.logoUrl$), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.isSMSSended);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isSMSSended);
  }
}
var LoginComponent = class _LoginComponent {
  supabaseAuthService;
  smsAuthService;
  eventService;
  stylesSettingsService;
  router;
  loginType = "base-smart-hr";
  isSMSSended = false;
  countdownDisabledButton = 15;
  countdownCodeSended = 180;
  intervalDisabledButtonId;
  intervalCodeSendedId;
  currentEmployee;
  smsCode = ["", "", "", "", "", ""];
  errorMessage = "";
  logoUrl$ = of("assets/img/logo.svg");
  constructor(supabaseAuthService, smsAuthService, eventService, stylesSettingsService, router) {
    this.supabaseAuthService = supabaseAuthService;
    this.smsAuthService = smsAuthService;
    this.eventService = eventService;
    this.stylesSettingsService = stylesSettingsService;
    this.router = router;
  }
  ngOnInit() {
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
    this.logoUrl$ = this.stylesSettingsService.stylesSettingsSubject.pipe(map((settings) => {
      const logos = Array.isArray(settings?.logos) ? settings.logos : [];
      return logos.length > 0 && typeof logos[0] === "string" ? logos[0] : "assets/img/logo.svg";
    }));
  }
  onSendSMSClick() {
    this.countdownDisabledButton = 15;
    this.countdownCodeSended = 180;
    this.intervalDisabledButtonId = setInterval(() => {
      if (this.countdownDisabledButton > 0) {
        this.countdownDisabledButton--;
      } else {
        clearInterval(this.intervalDisabledButtonId);
      }
    }, 1e3);
    this.intervalCodeSendedId = setInterval(() => {
      if (this.countdownCodeSended > 0) {
        this.countdownCodeSended--;
      } else {
        clearInterval(this.intervalCodeSendedId);
      }
    }, 1e3);
    this.isSMSSended = true;
    if (this.currentEmployee && this.currentEmployee.phone && this.currentEmployee.user_id) {
      this.smsAuthService.sendCode(this.currentEmployee.user_id, this.currentEmployee.phone);
      this.eventService.next(EventConstants.LOGIN_SMS_SENT, { userId: this.currentEmployee?.user_id, phone: this.currentEmployee?.phone });
    }
  }
  onOtpInput(event, index) {
    const input = event.target;
    const value = input.value;
    if (value && value.length === 1 && index < 5) {
      const nextInput = document.querySelector(`input[name='digit${index + 2}']`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  onOtpPaste(event) {
    const paste = event.clipboardData?.getData("text") || "";
    if (paste.length === 6 && /^[0-9]+$/.test(paste)) {
      for (let i = 0; i < 6; i++) {
        this.smsCode[i] = paste[i];
      }
      setTimeout(() => {
        const lastInput = document.querySelector(`input[name='digit6']`);
        if (lastInput)
          lastInput.focus();
      });
      event.preventDefault();
    }
  }
  onLoginClick() {
    if (this.currentEmployee && this.currentEmployee.user_id) {
      const code = this.smsCode.join("");
      if (!code || code.length !== 6) {
        this.errorMessage = "Please enter the 6-digit code.";
        return;
      }
      this.smsAuthService.verifyOtp(this.currentEmployee.user_id, code).then((isVerified) => {
        if (isVerified) {
          this.errorMessage = "";
          this.smsAuthService.signInOTP(this.currentEmployee);
          this.eventService.next(EventConstants.LOGIN_SUCCESS, { userId: this.currentEmployee?.user_id });
        } else {
          this.errorMessage = "SMS code not valid!";
          this.eventService.next(EventConstants.LOGIN_ERROR, { userId: this.currentEmployee?.user_id, error: "SMS code not valid!" });
        }
      }).catch((error) => {
        this.eventService.next(EventConstants.LOGIN_ERROR, { userId: this.currentEmployee?.user_id, error });
      });
    }
  }
  transform(value) {
    if (value < 0 || !Number.isFinite(value)) {
      return "0:00";
    }
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${paddedSeconds}`;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(SMSAuthService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(StylesSettingsService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], inputs: { loginType: "loginType" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "content", "m-5", "align-items-center", "d-flex", "justify-content-center"], [1, "card", "ms-auto", "me-auto", "mt-auto", 2, "max-width", "20rem", "margin-bottom", "30rem"], [1, "card-body"], [3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], [3, "ngSubmit"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "mb-4", "mb-md-5", "mt-2"], [1, "flex-column"], [1, "form-group", "mb-4"], ["type", "text", "name", "sms", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel"], ["role", "alert", 1, "alert", "alert-warning", "p-1", "mt-4", "alert-send-again", "d-flex", "justify-content-between"], [1, "align-self-center"], ["type", "button", "mat-stroked-button", "", "color", "primary", 1, "btn", "btn-warning", 3, "click", "disabled"], ["class", "text-danger", "role", "alert", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", 1, "mt-2", 3, "click", "disabled"], ["role", "alert", 1, "text-danger"], [1, "container-fuild", "bg-base-smart-hr-login"], [1, "w-100", "overflow-hidden", "position-relative", "flex-wrap", "d-block", "vh-100"], [1, "row", "justify-content-center", "align-items-center", "vh-100", "overflow-auto", "flex-wrap"], [1, "col-md-3", "mx-auto", "vh-100"], [1, "vh-100"], [1, "vh-100", "d-flex", "flex-column", "justify-content-between", "p-4", "pb-0"], [1, "mx-auto", "mt-5", "text-center"], ["alt", "Logo", 1, "img-fluid", 3, "src"], [1, ""], [1, "mt-5", "pb-4", "text-center"], [1, "mb-0", "text-gray-9"], [1, "text-center", "mb-3"], [1, "mb-2"], [1, "mb-0"], [1, "mb-3"], [1, "form-label"], [1, "input-group"], ["type", "text", "readonly", "", 1, "form-control", "border-end-0", 3, "value"], [1, "input-group-text", "border-start-0"], [1, "ti", "ti-phone"], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "click"], [1, "text-center", "otp-input"], ["dir", "ltr", 1, "d-flex", "align-items-center", "mb-3"], ["type", "text", "maxlength", "1", "name", "digit1", "autocomplete", "one-time-code", 1, "rounded", "w-100", "py-sm-2", "py-2", "text-center", "fs-26", "fw-bold", "me-3", 3, "ngModelChange", "input", "paste", "ngModel"], ["type", "text", "maxlength", "1", "name", "digit2", "autocomplete", "one-time-code", 1, "rounded", "w-100", "py-sm-2", "py-2", "text-center", "fs-26", "fw-bold", "me-3", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "maxlength", "1", "name", "digit3", "autocomplete", "one-time-code", 1, "rounded", "w-100", "py-sm-2", "py-2", "text-center", "fs-26", "fw-bold", "me-3", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "maxlength", "1", "name", "digit4", "autocomplete", "one-time-code", 1, "rounded", "w-100", "py-sm-2", "py-2", "text-center", "fs-26", "fw-bold", "me-3", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "maxlength", "1", "name", "digit5", "autocomplete", "one-time-code", 1, "rounded", "w-100", "py-sm-2", "py-2", "text-center", "fs-26", "fw-bold", "me-3", 3, "ngModelChange", "input", "ngModel"], ["type", "text", "maxlength", "1", "name", "digit6", "autocomplete", "one-time-code", 1, "rounded", "w-100", "py-sm-2", "py-2", "text-center", "fs-26", "fw-bold", 3, "ngModelChange", "input", "ngModel"], [1, "badge", "bg-primary-transparent", "mb-3"], [1, "d-flex", "align-items-center"], [1, "ti", "ti-clock", "me-1"], [1, "mb-3", "d-flex", "justify-content-center"], [1, "text-gray-9"], ["href", "javascript:void(0);", 1, "text-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], ["class", "w-100 alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "w-100", "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, LoginComponent_div_1_Template, 6, 2, "div", 1)(2, LoginComponent_div_2_Template, 16, 5, "div", 2);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngSwitch", ctx.loginType);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSwitchCase", "base-smart-hr");
    }
  }, dependencies: [CommonModule, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, MatButtonModule, MatButton, Dir, TranslatePipe], styles: ["\n\n.btn[_ngcontent-%COMP%]:disabled {\n  background-color: lightgray;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.component.ts", lineNumber: 29 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-FE56VQCW.js.map
