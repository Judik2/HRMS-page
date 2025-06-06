import {
  LogsInsertDto
} from "./chunk-BV2EUPGA.js";
import {
  LogsRepository
} from "./chunk-6X5DL6OJ.js";
import {
  require_sweetalert2_all
} from "./chunk-NJHAENO7.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  HttpClient,
  LoaderService,
  NgxSpinnerService,
  Router,
  SupabaseContext,
  TranslateService,
  environment
} from "./chunk-HDIRTHWB.js";
import {
  of,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";
import {
  __async,
  __toESM
} from "./chunk-XVQ6O2EZ.js";

// src/app/shared/app-services/sms-auth.service.ts
var import_sweetalert2 = __toESM(require_sweetalert2_all());
var SMSAuthService = class _SMSAuthService {
  router;
  supabaseContext;
  translate;
  idService;
  spinner;
  logsRepository;
  supabaseAuthService;
  loaderService;
  http;
  inactivityTimeout;
  currentEmployee;
  inactivityDuration = 10 * 60 * 1e3;
  // 10 min in ms
  client;
  last_active_time = null;
  constructor(router, supabaseContext, translate, idService, spinner, logsRepository, supabaseAuthService, loaderService, http) {
    this.router = router;
    this.supabaseContext = supabaseContext;
    this.translate = translate;
    this.idService = idService;
    this.spinner = spinner;
    this.logsRepository = logsRepository;
    this.supabaseAuthService = supabaseAuthService;
    this.loaderService = loaderService;
    this.http = http;
    this.initEmployee();
    this.client = this.supabaseContext.getClient();
  }
  initEmployee() {
    this.supabaseAuthService.getCurrentEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
      if (this.currentEmployee?.is_2fa_enabled) {
        this.setupActivityListeners();
      }
      if (this.currentEmployee.sms_authenticated_at) {
        this.last_active_time = new Date(this.currentEmployee.sms_authenticated_at);
      }
    });
  }
  verifyOtp(p_user_id, p_verification_code) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.rpc("is_phone_code_valid", { p_user_id, p_verification_code });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Execute validation error: ${error.message}`);
      }
      return data;
    });
  }
  signInOTP(payload) {
    return __async(this, null, function* () {
      this.getEmployeeSMSAuthTime().then((sms_authenticated_at) => {
        if (!this.currentEmployee) {
          return;
        }
        this.last_active_time = new Date(sms_authenticated_at);
        this.idService.setId("profile", payload.id);
        this.router.navigate(["/profile"]);
        let logRequest = new LogsInsertDto({
          description: `Employee logged in.`,
          employee_id: payload.id,
          event_time: (/* @__PURE__ */ new Date()).toJSON(),
          event_type: "ACTIVITY_CHANGED"
        });
        this.logsRepository.create(logRequest).then(() => {
        });
      });
    });
  }
  getEmployeeSMSAuthTime() {
    return __async(this, null, function* () {
      if (!this.currentEmployee) {
        return "";
      }
      const { data, error } = yield this.client.from("employee").select("sms_authenticated_at").eq("id", this.currentEmployee.id).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Execute validation error: ${error.message}`);
      }
      return data.sms_authenticated_at;
    });
  }
  isAuthenticated() {
    if (!this.currentEmployee || !this.last_active_time) {
      return false;
    }
    const now = Date.now();
    const smsAuthDate = new Date(this.last_active_time).getTime();
    const timezoneOffset = (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4;
    const adjustedSmsAuthDate = smsAuthDate - timezoneOffset;
    return adjustedSmsAuthDate + this.inactivityDuration > now;
  }
  isAuthenticated$() {
    return of(this.isAuthenticated());
  }
  // Logout
  logout() {
    this.last_active_time = null;
    this.setEmployeeSMSAuthTime(null);
    clearTimeout(this.inactivityTimeout);
    this.router.navigate(["/login"]);
    console.log("User logged out.");
    if (this.currentEmployee) {
      let logRequest = new LogsInsertDto({
        description: `Employee logged out.`,
        employee_id: this.currentEmployee.id,
        event_time: (/* @__PURE__ */ new Date()).toJSON(),
        event_type: "ACTIVITY_CHANGED"
      });
      this.logsRepository.create(logRequest).then(() => {
      });
    }
  }
  // Reset inactivity timer
  resetInactivityTimer() {
    clearTimeout(this.inactivityTimeout);
    if (this.isAuthenticated()) {
      this.last_active_time = /* @__PURE__ */ new Date();
    }
    this.inactivityTimeout = setTimeout(() => {
      this.logout();
      alert(this.translate.instant("You have been logged out due to inactivity."));
    }, this.inactivityDuration);
  }
  setEmployeeSMSAuthTime(last_active_time = null) {
    if (!this.currentEmployee) {
      console.error("No authenticated employee found");
      return;
    }
    fetch(`${environment.SUPABASE_URL}/rest/v1/rpc/update_employee_sms_auth_time`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": environment.SUPABASE_ANON_KEY
      },
      body: JSON.stringify({
        emp_id: this.currentEmployee.id,
        auth_time: last_active_time ? last_active_time?.toISOString() : null
      }),
      keepalive: true
    });
  }
  setupUnloadListener() {
    window.addEventListener("beforeunload", () => {
      if (this.isAuthenticated()) {
        this.setEmployeeSMSAuthTime(this.last_active_time);
      } else {
        this.setEmployeeSMSAuthTime();
      }
    });
  }
  // Setup activity listeners
  setupActivityListeners() {
    const resetTimer = () => {
      this.resetInactivityTimer();
    };
    this.setupUnloadListener();
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
  }
  sendCode(userId, phone) {
    const payload = { phone, userId };
    this.http.post(environment.SMS_URL, payload).subscribe({
      next: () => {
        console.log("SMS sent:", payload);
        import_sweetalert2.default.fire(this.translate.instant("Success"), this.translate.instant("SMS sent successfully."), "success");
      },
      error: (error) => {
        console.error("Failed to send SMS:", error);
        import_sweetalert2.default.fire(this.translate.instant("Error"), this.translate.instant("Failed to send SMS. Please try again."), "error");
      }
    });
  }
  static \u0275fac = function SMSAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SMSAuthService)(\u0275\u0275inject(Router), \u0275\u0275inject(SupabaseContext), \u0275\u0275inject(TranslateService), \u0275\u0275inject(IdService), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LogsRepository), \u0275\u0275inject(SupabaseAuthService), \u0275\u0275inject(LoaderService), \u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SMSAuthService, factory: _SMSAuthService.\u0275fac, providedIn: "root" });
};

export {
  SMSAuthService
};
//# sourceMappingURL=chunk-U4XX5UOH.js.map
