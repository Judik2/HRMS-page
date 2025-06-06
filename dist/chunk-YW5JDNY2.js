import {
  BehaviorSubject,
  ɵɵdefineInjectable
} from "./chunk-ERGQW4H6.js";

// src/app/shared/app-services/current-id.service.ts
var IdService = class _IdService {
  idSubjects = /* @__PURE__ */ new Map();
  constructor() {
  }
  // Getter for a specific subject by its key
  getId(key) {
    if (!this.idSubjects.has(key)) {
      this.createSubject(key);
    }
    return this.idSubjects.get(key)?.asObservable() || new BehaviorSubject(null).asObservable();
  }
  // Setter for the subject, creates a new subject if not exists
  setId(key, value) {
    if (!this.idSubjects.has(key)) {
      this.createSubject(key);
    }
    this.idSubjects.get(key)?.next(value);
    this.saveStateToStorage();
  }
  // Create a new BehaviorSubject for the key
  createSubject(key) {
    const newBehaviorSubject = new BehaviorSubject(null);
    this.idSubjects.set(key, newBehaviorSubject);
  }
  // Clear a specific subject by key
  clearSubject(key) {
    this.idSubjects.delete(key);
    this.saveStateToStorage();
  }
  // Clear all subjects
  clearAllSubjects() {
    this.idSubjects.clear();
    this.saveStateToStorage();
  }
  // Load state from localStorage
  loadStateFromStorage() {
    const storedState = sessionStorage.getItem("idSubjects");
    if (storedState) {
      const parsedState = JSON.parse(storedState);
      Object.keys(parsedState).forEach((key) => {
        const value = parsedState[key];
        this.createSubject(key);
        this.setId(key, value);
      });
    }
  }
  // Save state to localStorage
  saveStateToStorage() {
    const state = {};
    this.idSubjects.forEach((subject, key) => {
      state[key] = subject.getValue();
    });
    sessionStorage.setItem("idSubjects", JSON.stringify(state));
  }
  static \u0275fac = function IdService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IdService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IdService, factory: _IdService.\u0275fac, providedIn: "root" });
};

export {
  IdService
};
//# sourceMappingURL=chunk-YW5JDNY2.js.map
