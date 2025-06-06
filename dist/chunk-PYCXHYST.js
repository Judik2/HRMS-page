import {
  Subject,
  filter,
  map,
  ɵɵdefineInjectable
} from "./chunk-ERGQW4H6.js";

// src/app/shared/app-services/event.service.ts
var EventService = class _EventService {
  eventSubject = new Subject();
  /**
   * Publishes an event with name and payload
   * @param eventName The name of the event
   * @param payload Optional payload data for the event
   */
  next(eventName, payload) {
    this.eventSubject.next({
      type: eventName,
      payload,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Subscribes to a specific event by name
   * @param eventName The name of the event to subscribe to
   * @returns Observable of the event payload
   */
  on(eventName) {
    return this.eventSubject.pipe(filter((event) => event.type === eventName), map((event) => event.payload));
  }
  /**
   * Subscribes to all events
   * @returns Observable of all events
   */
  subscribe() {
    return this.eventSubject.asObservable();
  }
  static \u0275fac = function EventService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventService, factory: _EventService.\u0275fac, providedIn: "root" });
};

export {
  EventService
};
//# sourceMappingURL=chunk-PYCXHYST.js.map
