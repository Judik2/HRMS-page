import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-UJWO3UBD.js";
import {
  EmployeeFilterViewComponent
} from "./chunk-X45EM66I.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JDSXESFV.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  EventEmitter,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ERGQW4H6.js";

// src/app/shared/constants/core.constants.ts
var CoreConstants = class {
  static swapElementsInArray(arr, element1, element2) {
    const index1 = arr.indexOf(element1);
    const index2 = arr.indexOf(element2);
    if (index1 !== -1 && index2 !== -1) {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    } else {
      console.error("One or both elements not found in the array.");
    }
  }
};

// src/app/shared/templates/comments/comments.component.ts
var _c0 = (a0, a1) => ({ "bubble--sender": a0, "bubble--reply": a1 });
function CommentsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "hr");
    \u0275\u0275elementStart(2, "h4")(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "br");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "Comments"));
  }
}
function CommentsComponent_mat_expansion_panel_4_ng_container_5_app_employee_filter_view_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-employee-filter-view", 14);
  }
  if (rf & 2) {
    const comment_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("employee", comment_r1.employee);
  }
}
function CommentsComponent_mat_expansion_panel_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9);
    \u0275\u0275template(3, CommentsComponent_mat_expansion_panel_4_ng_container_5_app_employee_filter_view_3_Template, 1, 1, "app-employee-filter-view", 10);
    \u0275\u0275elementStart(4, "div", 11)(5, "div", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c0, ctx_r1.isManager(comment_r1), !ctx_r1.isManager(comment_r1)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", comment_r1.employee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", comment_r1.comment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r1.created_at);
  }
}
function CommentsComponent_mat_expansion_panel_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CommentsComponent_mat_expansion_panel_4_ng_container_5_Template, 9, 7, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "Comment History"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getComments());
  }
}
function CommentsComponent_div_5_app_employee_filter_view_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-employee-filter-view", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("employee", ctx_r1.lastComment.employee);
  }
}
function CommentsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9);
    \u0275\u0275template(2, CommentsComponent_div_5_app_employee_filter_view_2_Template, 1, 1, "app-employee-filter-view", 10);
    \u0275\u0275elementStart(3, "div", 11)(4, "div", 12);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c0, ctx_r1.isManager(ctx_r1.lastComment), !ctx_r1.isManager(ctx_r1.lastComment)));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.lastComment.employee);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lastComment.comment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.lastComment.created_at);
  }
}
function CommentsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "textarea", 16);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function CommentsComponent_div_7_Template_textarea_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.comment, $event) || (ctx_r1.comment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function CommentsComponent_div_7_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onReportIssueClick());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(2, 3, "Type comment here..."));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.comment);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("title", \u0275\u0275pipeBind1(4, 5, "Send Comment"));
  }
}
var CommentsComponent = class _CommentsComponent {
  fb;
  supabaseAuthService;
  comments;
  action = new EventEmitter();
  isRejectStep;
  status;
  get lastComment() {
    return this.comments && this.comments.length > 0 ? this.comments[this.comments.length - 1] : null;
  }
  comment = "";
  currentEmployee;
  constructor(fb, supabaseAuthService) {
    this.fb = fb;
    this.supabaseAuthService = supabaseAuthService;
  }
  ngOnInit() {
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (employee) {
        this.currentEmployee = employee;
      }
    });
  }
  onSendClick() {
    if (this.comment) {
      this.action.emit({ action: "send-comment", data: this.comment });
      this.comment = "";
    }
  }
  onReportIssueClick() {
    if (this.comment) {
      this.action.emit({ action: "report-issue", data: this.comment });
      this.comment = "";
    }
  }
  isManager(comment) {
    return this.currentEmployee?.id == comment.employee_id;
  }
  isAwaitingProblemResolving() {
    return this.status == AppConstants.AWAITED_PROBLEM_RESOLVING;
  }
  getComments() {
    if (this.comments) {
      if (this.isAwaitingProblemResolving()) {
        return this.comments.slice(0, this.comments.length - 1);
      } else {
        return this.comments;
      }
    }
    return [];
  }
  static \u0275fac = function CommentsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommentsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SupabaseAuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommentsComponent, selectors: [["app-comments"]], inputs: { comments: "comments", isRejectStep: "isRejectStep", status: "status" }, outputs: { action: "action" }, decls: 8, vars: 4, consts: [[1, "chat-container", "mt-4"], [4, "ngIf"], [1, "body"], [1, "chat-container"], ["class", "comment-container d-flex justify-content-end", 3, "ngClass", 4, "ngIf"], [1, "chatbox"], ["class", " d-flex", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "comment-container", "d-flex", "justify-content-end", 3, "ngClass"], [1, "bubble", "bubble--comment", 2, "width", "90%"], [3, "employee", 4, "ngIf"], [1, "bubble-body"], [1, "p-2", "ps-4", "pe-4"], [1, "p-2", "ps-4", "pe-4", "bubble-timestamp"], [3, "employee"], [1, "d-flex"], [1, "app-input", "chat-input", "w-100", 3, "ngModelChange", "ngModel", "placeholder"], [1, "app-btn-chat", "app-btn-chat-send", "ms-3", 3, "click", "title"]], template: function CommentsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, CommentsComponent_div_1_Template, 7, 3, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275template(4, CommentsComponent_mat_expansion_panel_4_Template, 6, 4, "mat-expansion-panel", 1)(5, CommentsComponent_div_5_Template, 8, 7, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275template(7, CommentsComponent_div_7_Template, 5, 7, "div", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.comments && ctx.comments.length > 0 || ctx.isRejectStep);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.comments && ctx.comments.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastComment && ctx.isAwaitingProblemResolving());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isRejectStep);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    TranslatePipe,
    EmployeeFilterViewComponent,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle
  ], styles: [`

.comment-container[_ngcontent-%COMP%] {
  padding: 10px;
  border-left: 1px solid hsl(213, 22%, 84%);
  margin-bottom: 2px;
}
.comment-container[_ngcontent-%COMP%]   .bubble-body[_ngcontent-%COMP%] {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.bubble--comment[_ngcontent-%COMP%] {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
}
.comment[_ngcontent-%COMP%] {
  white-space: pre-line;
}
.bubble-header[_ngcontent-%COMP%] {
  padding-top: 0.5rem;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid hsl(213, 22%, 93%);
}
.bubble-timestamp[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  opacity: 0.5;
  font-style: italic;
}
.bubble--reply[_ngcontent-%COMP%] {
  border-color: rgba(13, 61, 112, 0.75);
  background-color: rgba(56, 140, 229, 0.14);
}
.bubble--reply[_ngcontent-%COMP%]   .bubble-header[_ngcontent-%COMP%] {
  border-color: hsl(213, 22%, 84%);
}
.bubble--sender[_ngcontent-%COMP%] {
  border-color: hsl(225, 72%, 48%);
  background-color: rgba(236, 244, 254, 0.5);
}
.bubble--sender[_ngcontent-%COMP%]   .bubble-header[_ngcontent-%COMP%] {
  border-color: hsl(213, 22%, 84%);
}
.issue-comment[_ngcontent-%COMP%] {
  border-color: hsl(8, 88%, 49%);
  background-color: rgba(242, 117, 98, 0.373);
}
.chat-container[_ngcontent-%COMP%] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.body[_ngcontent-%COMP%] {
  max-height: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
  padding-left: 2%;
  overflow-y: auto;
}
.app-btn-chat[_ngcontent-%COMP%] {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  background-color: transparent;
  height: 35px;
}
.app-btn-chat[_ngcontent-%COMP%]:after {
  width: 20px;
  height: 20px;
  display: block;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.app-btn-chat[_ngcontent-%COMP%] {
  transform: rotate(180deg);
  cursor: pointer;
}
.app-btn-chat[_ngcontent-%COMP%]:hover {
  background-color: transparent;
}
.app-btn-chat[_ngcontent-%COMP%]:hover:after {
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.app-btn-chat-send[_ngcontent-%COMP%]:after {
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='ionicon s-ion-icon' fill='darkgrey' viewBox='0 0 512 512'%3E%3Cpath d='M16 464l480-208L16 48v160l320 48-320 48z'%3E%3C/path%3E%3C/svg%3E");
}
.app-btn-chat-send[_ngcontent-%COMP%]:hover:after {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='ionicon s-ion-icon' fill='grey' viewBox='0 0 512 512'%3E%3Cpath d='M16 464l480-208L16 48v160l320 48-320 48z'%3E%3C/path%3E%3C/svg%3E");
}
.oh-chat[_ngcontent-%COMP%] {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 98% 2%;
  grid-template-columns: 98% 2%;
}
.chat-input[_ngcontent-%COMP%] {
  width: 95% !important;
}
.mat-expansion-panel[_ngcontent-%COMP%] {
  background: #eaebf1;
}
.object-comment-box[_ngcontent-%COMP%] {
  padding-top: 20px;
}
/*# sourceMappingURL=comments.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommentsComponent, { className: "CommentsComponent", filePath: "src/app/shared/templates/comments/comments.component.ts", lineNumber: 26 });
})();

export {
  CoreConstants,
  CommentsComponent
};
//# sourceMappingURL=chunk-LKZIPKI3.js.map
