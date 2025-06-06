import {
  ChangeRequestsRepository
} from "./chunk-4MP457FT.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  ActivatedRoute,
  Router,
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-XVQ6O2EZ.js";

// src/app/redirections-handler/redirections-handler.component.ts
var RedirectionsHandlerComponent = class _RedirectionsHandlerComponent {
  route;
  router;
  idService;
  changeRequestsRepository;
  constructor(route, router, idService, changeRequestsRepository) {
    this.route = route;
    this.router = router;
    this.idService = idService;
    this.changeRequestsRepository = changeRequestsRepository;
    this.route.queryParams.subscribe((params) => {
      const requestId = params["requestId"];
      const objectiveFormId = params["objectiveFormId"];
      const feedbackFormId = params["feedbackFormId"];
      if (requestId) {
        this.handleChangeRequest(Number(requestId));
      } else if (objectiveFormId) {
        this.idService.setId("objective-form", Number(objectiveFormId));
        this.router.navigate(["/objective-form"]);
      } else if (feedbackFormId) {
        this.idService.setId("feedback-form", Number(feedbackFormId));
        this.router.navigate(["/feedback-form"]);
      } else {
        this.router.navigate(["/error-page"], {
          queryParams: { message: "Request ID is missing" }
        });
      }
    });
  }
  handleChangeRequest(requestId) {
    this.changeRequestsRepository.getById(requestId).then((data) => {
      if (data) {
        switch (data.target_table) {
          case "employee-document": {
            this.idService.setId("profile", data.target_id);
            this.router.navigate(["/profile"]);
            break;
          }
          case "employee": {
            this.idService.setId("profile-edit", data.target_id);
            this.router.navigate(["/edit-profile"]);
            break;
          }
        }
      } else {
        this.router.navigate(["/profile"]);
      }
    }, (error) => {
      console.error("Error fetching change request:", error);
      this.router.navigate(["/profile"]);
    });
  }
  static \u0275fac = function RedirectionsHandlerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RedirectionsHandlerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(ChangeRequestsRepository));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RedirectionsHandlerComponent, selectors: [["app-redirections-handler"]], decls: 4, vars: 3, consts: [[1, "m-3"]], template: function RedirectionsHandlerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "p");
      \u0275\u0275text(2);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "Redirecting..."));
    }
  }, dependencies: [TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RedirectionsHandlerComponent, { className: "RedirectionsHandlerComponent", filePath: "src/app/redirections-handler/redirections-handler.component.ts", lineNumber: 15 });
})();
export {
  RedirectionsHandlerComponent
};
//# sourceMappingURL=chunk-TQP6TCI4.js.map
