import {
  StorageService
} from "./chunk-JDSXESFV.js";
import {
  EmployeeDto
} from "./chunk-NKEEF4XY.js";
import {
  SupabaseContext,
  environment
} from "./chunk-HDIRTHWB.js";
import {
  BehaviorSubject,
  combineLatest,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/services/supabase-auth.service.ts
var SupabaseAuthService = class _SupabaseAuthService {
  storageService;
  supabaseContext;
  client;
  session$ = new BehaviorSubject(null);
  user$ = new BehaviorSubject(null);
  employee$ = new BehaviorSubject(null);
  additionalEmployee$ = new BehaviorSubject(null);
  constructor(storageService, supabaseContext) {
    this.storageService = storageService;
    this.supabaseContext = supabaseContext;
    this.client = supabaseContext.getClient();
    this.client.auth.onAuthStateChange((event, session) => {
      this.session$.next(session);
      this.user$.next(session?.user ?? null);
      if (!environment.production) {
        console.log("[Supabase] Auth state changed:", event, session);
      }
    });
    this.loadSessionIfNeeded();
  }
  loadSessionIfNeeded() {
    return __async(this, null, function* () {
      if (!this.session$.value) {
        const { data } = yield this.client.auth.getSession();
        if (data?.session) {
          this.session$.next(data.session);
          this.user$.next(data.session.user);
          const { data: employee, error } = yield this.client.from("employee").select("*").eq("email", data.session.user.email).single();
          if (error) {
            console.error("Supabase get employee error:", error);
          } else {
            this.employee$.next(new EmployeeDto(employee, this.storageService));
          }
        } else {
          this.signInWithAzure();
        }
      }
    });
  }
  // Sign in with Azure OAuth
  signInWithAzure() {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.auth.signInWithOAuth({
        provider: "azure",
        options: {
          scopes: "openid profile email",
          redirectTo: `${environment.REDIRECT_URL}/#/home`
        }
      });
      if (error)
        console.error("Supabase login error:", error);
      return { data, error };
    });
  }
  // Sign out
  signOut() {
    return __async(this, null, function* () {
      yield this.client.auth.signOut();
      this.session$.next(null);
      this.user$.next(null);
    });
  }
  // Get session observable
  getSession$() {
    return this.session$.asObservable();
  }
  // Get current user observable
  getUser$() {
    return this.user$.asObservable();
  }
  getCurrentEmployee$() {
    return this.employee$.asObservable();
  }
  // Get current user observable
  getEmployee$() {
    return combineLatest([this.additionalEmployee$, this.employee$]).pipe(map(([additional, base]) => additional ?? base));
  }
  // Get current user observable
  getAdditionalEmployee$() {
    return this.additionalEmployee$.asObservable();
  }
  // Get current user instantly
  getCurrentUser() {
    return this.user$.value;
  }
  // Get current session instantly
  getCurrentSession() {
    return this.session$.value;
  }
  // Get current user instantly
  getCurrentEmployee() {
    return this.employee$.value;
  }
  // Get current user instantly
  getCurrentAdditionalEmployee() {
    return this.additionalEmployee$.value;
  }
  // Set current user instantly
  setAdditionalEmployee(employee) {
    if (employee === null) {
      return this.additionalEmployee$.next(null);
    }
    let employeeData = new EmployeeDto(employee, this.storageService);
    return this.additionalEmployee$.next(employeeData);
  }
  ping() {
    return __async(this, null, function* () {
      try {
        const { data, error } = yield this.client.rpc("ping_db");
        if (error) {
          console.error("[Supabase Ping] DB error:", error.message);
          return null;
        }
        return data;
      } catch (e) {
        console.error("[Supabase Ping] Unexpected error:", e);
        return null;
      }
    });
  }
  isAuthenticated() {
    return !!this.user$.value;
  }
  isAuthenticated$() {
    return this.user$.asObservable().pipe(map((user) => !!user));
  }
  static \u0275fac = function SupabaseAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupabaseAuthService)(\u0275\u0275inject(StorageService), \u0275\u0275inject(SupabaseContext));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupabaseAuthService, factory: _SupabaseAuthService.\u0275fac, providedIn: "root" });
};

export {
  SupabaseAuthService
};
//# sourceMappingURL=chunk-726REOYR.js.map
