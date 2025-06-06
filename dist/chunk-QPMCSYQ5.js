import {
  SideBarService
} from "./chunk-SUBMYCX5.js";
import {
  StylesSettingsService
} from "./chunk-3KR3UNHC.js";
import {
  FeedbackFormsRepository
} from "./chunk-KG3BOM3F.js";
import {
  ObjectiveFormRepository
} from "./chunk-S5OCFGQY.js";
import {
  SupabaseAuthService
} from "./chunk-726REOYR.js";
import {
  MatIcon,
  MatIconModule,
  MatListModule
} from "./chunk-ZKADD55Q.js";
import {
  MatButtonModule,
  MatIconButton,
  StorageService
} from "./chunk-JDSXESFV.js";
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import {
  EmployeeRepository
} from "./chunk-TLWCP54H.js";
import {
  EmployeeDto
} from "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  Router,
  TranslatePipe,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  combineLatest,
  map,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XVQ6O2EZ.js";

// src/app/main/home/home.component.ts
var _c0 = (a0, a1) => ({ "col-lg-9 col-md-9 col-sm-12": a0, "col-12": a1 });
var _c1 = (a0) => ({ "d-none": a0 });
var _c2 = (a0, a1) => [a0, a1];
function HomeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.logoUrl, \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_div_7_button_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 14)(1, "mat-icon");
    \u0275\u0275text(2, "arrow_backward");
    \u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_7_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function HomeComponent_div_7_ng_container_11_div_1_Template_div_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const section_r3 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.redirect(section_r3.redirectTo, item_r5.id));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div", 18)(3, "div", 19)(4, "h6", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275element(11, "div", 23);
    \u0275\u0275elementStart(12, "div", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "button", 14)(15, "mat-icon");
    \u0275\u0275text(16, "arrow_backward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const section_r3 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 6, "Form for:"), " ", item_r5.employee.getEmployeeName(), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 8, item_r5.due_date, "dd/MM/yyyy"), "");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r0.appConstants.getObjectiveFormStatusClass(item_r5.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.appConstants.getFormStatusNameByKey(ctx_r0.translate, item_r5, section_r3.type || ""), " ");
  }
}
function HomeComponent_div_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HomeComponent_div_7_ng_container_11_div_1_Template, 17, 11, "div", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const section_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", section_r3.items);
  }
}
function HomeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function HomeComponent_div_7_Template_div_click_0_listener() {
      const section_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!(section_r3.items && section_r3.items.length > 0) ? ctx_r0.redirect(section_r3.redirectTo) : null);
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div")(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, HomeComponent_div_7_button_10_Template, 3, 0, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, HomeComponent_div_7_ng_container_11_Template, 2, 1, "ng-container", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r3 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c1, !section_r3.visible));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, section_r3.title));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 7, section_r3.description));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !section_r3.items || section_r3.items.length == 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", section_r3.items && section_r3.items.length > 0);
  }
}
function HomeComponent_div_9_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275element(2, "img", 33);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const birthday_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("alt", birthday_r6.name);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(3, 2, birthday_r6.avatar_src), \u0275\u0275sanitizeUrl);
  }
}
function HomeComponent_div_9_div_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const birthday_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getSign(birthday_r6.details), " ");
  }
}
function HomeComponent_div_9_div_5_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "Child"));
  }
}
function HomeComponent_div_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, HomeComponent_div_9_div_5_ng_container_1_Template, 4, 4, "ng-container", 30)(2, HomeComponent_div_9_div_5_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, HomeComponent_div_9_div_5_span_4_Template, 3, 3, "span", 31);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const birthday_r6 = ctx.$implicit;
    const signBlock_r7 = \u0275\u0275reference(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c2, birthday_r6.badgeClass || "", birthday_r6.textClass || ""));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", birthday_r6.avatar_src)("ngIfElse", signBlock_r7);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", birthday_r6.isChild);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(birthday_r6.name || "-");
  }
}
function HomeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "h2", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27);
    \u0275\u0275template(5, HomeComponent_div_9_div_5_Template, 7, 8, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "Today's Birthdays"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.todaysBirthdays);
  }
}
var HomeComponent = class _HomeComponent {
  router;
  employeeRepository;
  objectiveFormRepository;
  feedbackFormRepository;
  idService;
  translate;
  supabaseAuthService;
  storageService;
  stylesSettingsService;
  sideBarService;
  eventService;
  currentEmployee;
  sectionsSubject = new BehaviorSubject([]);
  sections$ = this.sectionsSubject.asObservable();
  sectionsWithVisibility$;
  appConstants = AppConstants;
  todaysBirthdays = [];
  logoUrl = null;
  constructor(router, employeeRepository, objectiveFormRepository, feedbackFormRepository, idService, translate, supabaseAuthService, storageService, stylesSettingsService, sideBarService, eventService) {
    this.router = router;
    this.employeeRepository = employeeRepository;
    this.objectiveFormRepository = objectiveFormRepository;
    this.feedbackFormRepository = feedbackFormRepository;
    this.idService = idService;
    this.translate = translate;
    this.supabaseAuthService = supabaseAuthService;
    this.storageService = storageService;
    this.stylesSettingsService = stylesSettingsService;
    this.sideBarService = sideBarService;
    this.eventService = eventService;
    this.sectionsWithVisibility$ = combineLatest([
      this.sections$,
      this.sideBarService.sidebarMenuItems$
    ]).pipe(map(([sections, items]) => sections.map((section) => __spreadProps(__spreadValues({}, section), {
      visible: this.sideBarService.isRouteVisible(items, section.isVisibleBy)
    }))));
  }
  ngOnInit() {
    this.stylesSettingsService.stylesSettingsSubject.subscribe((settings) => {
      const logos = settings && Array.isArray(settings.logos) ? settings.logos : [];
      this.logoUrl = logos.length > 0 && typeof logos[0] === "string" ? logos[0] : null;
    });
    this.supabaseAuthService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
      const sections = [
        {
          isVisibleBy: "/objectives-awaited",
          title: "Complete your awaited objective form",
          description: "",
          type: "objective",
          redirectTo: "/objectives-awaited"
        },
        {
          isVisibleBy: "/feedback-awaited",
          title: "Complete your awaited feedback form",
          description: "",
          type: "feedback",
          redirectTo: "/feedback-awaited"
        }
      ];
      if (!this.currentEmployee.isEmployee()) {
        Promise.all([
          this.objectiveFormRepository.getManagerObjectiveForm(this.currentEmployee),
          this.feedbackFormRepository.getManagerFeedbackForm(this.currentEmployee)
        ]).then(([objectives, feedbacks]) => {
          sections.push({
            isVisibleBy: "/objectives-management",
            title: "Employee objective forms needs your attention",
            description: "",
            redirectTo: "/objective-form",
            type: "objective",
            items: objectives.slice(0, 4)
          }, {
            isVisibleBy: "/feedback-management",
            title: "Employee feedback forms needs your attention",
            description: "",
            redirectTo: "/feedback-form",
            type: "feedback",
            items: feedbacks.slice(0, 4)
          });
          this.sectionsSubject.next([...sections]);
          this.eventService.next(EventConstants.HOME_SECTIONS_LOADED, { sections });
        }).catch((error) => {
          this.eventService.next(EventConstants.HOME_SECTIONS_LOAD_ERROR, { error });
        });
      } else {
        this.sectionsSubject.next([...sections]);
        this.eventService.next(EventConstants.HOME_SECTIONS_LOADED, { sections });
      }
    });
    this.getTodaysBirthdays();
  }
  getTodaysBirthdays() {
    const date = /* @__PURE__ */ new Date();
    this.employeeRepository.getAllBirthdaysOn(date).then((birthdays) => {
      this.todaysBirthdays = birthdays.map((birthday) => {
        const badge = AppConstants.getRandomTransparentBadge();
        const dto = new EmployeeDto(birthday);
        return __spreadProps(__spreadValues({}, birthday), {
          avatar_src: dto.avatar_src,
          badgeClass: badge.badge,
          textClass: badge.text,
          isChild: birthday.is_child,
          details: birthday
        });
      });
      this.eventService.next(EventConstants.HOME_TODAYS_BIRTHDAYS_LOADED, { count: this.todaysBirthdays.length });
    }).catch((error) => {
      this.eventService.next(EventConstants.HOME_TODAYS_BIRTHDAYS_LOAD_ERROR, { error });
    });
  }
  getSign(details) {
    let name = details?.hebrew_display_name || details?.display_name || details?.name || "";
    if (!name)
      return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1)
      return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  redirect(path, id) {
    if (id) {
      switch (path) {
        case "/objective-form":
          this.idService.setId("objective-form", id);
          break;
        case "/feedback-form":
          this.idService.setId("feedback-form", id);
          break;
      }
    }
    this.router.navigate([path]);
  }
  getObjectivesForEmployee() {
    return;
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(EmployeeRepository), \u0275\u0275directiveInject(ObjectiveFormRepository), \u0275\u0275directiveInject(FeedbackFormsRepository), \u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(SupabaseAuthService), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(StylesSettingsService), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 10, vars: 12, consts: [["signBlock", ""], [1, "row"], [3, "ngClass"], [1, "text-center"], ["class", "hrms-logo", "style", "display: flex; justify-content: center; align-items: center; margin-bottom: 2rem;", 4, "ngIf"], ["class", "card ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "col-3 card", 4, "ngIf"], [1, "hrms-logo", 2, "display", "flex", "justify-content", "center", "align-items", "center", "margin-bottom", "2rem"], ["alt", "HRMS Logo", 2, "max-width", "300px", "width", "100%", "height", "auto", 3, "src"], [1, "card", 3, "click", "ngClass"], [1, "card-body", "d-flex", "flex-column"], [1, "d-flex", "justify-content-between", "align-items-center"], ["mat-icon-button", "", "color", "primary", 4, "ngIf"], [4, "ngIf"], ["mat-icon-button", "", "color", "primary"], ["class", "card w-100", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "w-100", 3, "click"], [1, "card-body", "d-flex", "justify-content-between", "align-items-center", "p-2"], [1, "w-100"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "col-5"], [1, "col-2"], [1, "d-flex", "align-baseline", "col-5"], [1, "entry-status", "me-2"], [1, "objective-form-status"], [1, "col-3", "card"], [1, "card-header"], [1, "card-body", "birthday-list"], ["class", "employee-text badge mb-2", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "employee-text", "badge", "mb-2", 3, "ngClass"], [4, "ngIf", "ngIfElse"], ["class", "event-badge", 4, "ngIf"], [1, "calendar-image"], [3, "src", "alt"], [1, "sign-circle"], [1, "event-badge"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "h2", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, HomeComponent_div_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementContainerStart(6);
      \u0275\u0275template(7, HomeComponent_div_7_Template, 12, 11, "div", 5);
      \u0275\u0275pipe(8, "async");
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, HomeComponent_div_9_Template, 6, 4, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c0, ctx.currentEmployee == null ? null : ctx.currentEmployee.isAdmin(), !(ctx.currentEmployee == null ? null : ctx.currentEmployee.isAdmin())));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "Welcome to HRMS"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.logoUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(8, 7, ctx.sectionsWithVisibility$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentEmployee == null ? null : ctx.currentEmployee.isAdmin());
    }
  }, dependencies: [
    MatIconModule,
    MatIcon,
    MatListModule,
    MatButtonModule,
    MatIconButton,
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    AsyncPipe,
    DatePipe,
    TranslatePipe
  ], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 1rem;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 1.5rem;\n  text-align: center;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.section-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.birthday-card[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: #f5f5f5;\n  border-radius: 16px;\n  padding: 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n  .birthday-item {\n  border-bottom: 1px solid #eaeaea;\n  border-radius: 10px !important;\n  margin-top: 10px;\n  color: rgb(57, 51, 51) !important;\n  font-weight: bold !important;\n}\n  .birthday-item .mat-mdc-list-item-unscoped-content {\n  color: rgb(57, 51, 51) !important;\n  font-weight: bold !important;\n}\n.employee-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  width: auto;\n  min-width: 0;\n  border-radius: 1rem;\n  border: 2px solid rgba(var(--primary-color-rgb, 49, 43, 132), 0.3);\n  padding: 0.2rem 0.5rem 0.2rem 1.5rem;\n}\n.calendar-image[_ngcontent-%COMP%], \n.sign-circle[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 2px solid #e0e0e0;\n  margin-right: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #555;\n  flex-shrink: 0;\n}\n.calendar-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.sign-circle[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  color: #333;\n}\n.event-badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 0.1rem 0.5rem;\n  border-radius: 0.4rem;\n  margin-left: 0.5rem;\n  background: #f5f5f5;\n  color: #888;\n}\n.birthday-list[_ngcontent-%COMP%]   .employee-text[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n}\n.birthday-list[_ngcontent-%COMP%]   .calendar-image[_ngcontent-%COMP%], \n.birthday-list[_ngcontent-%COMP%]   .sign-circle[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 2px solid white;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #555;\n  flex-shrink: 0;\n}\n.birthday-list[_ngcontent-%COMP%]   .calendar-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.birthday-list[_ngcontent-%COMP%]   .sign-circle[_ngcontent-%COMP%] {\n  background: var(--secondary-color);\n  color: #333;\n}\n.birthday-list[_ngcontent-%COMP%]   .event-badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 0.1rem 0.5rem;\n  border-radius: 0.4rem;\n  margin-left: 0.5rem;\n  background: #f5f5f5;\n  color: #888;\n}\n@media (max-width: 600px) {\n  .birthday-list[_ngcontent-%COMP%]   .employee-text[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 0.1rem 0.3rem;\n    min-height: 1.5rem;\n  }\n  .birthday-list[_ngcontent-%COMP%]   .calendar-image[_ngcontent-%COMP%], \n   .birthday-list[_ngcontent-%COMP%]   .sign-circle[_ngcontent-%COMP%] {\n    width: 1.3rem;\n    height: 1.3rem;\n    font-size: 0.8rem;\n  }\n  .birthday-list[_ngcontent-%COMP%]   .event-badge[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n    padding: 0.05rem 0.3rem;\n    margin-left: 0.2rem;\n  }\n}\n.hrms-logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.hrms-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 300px;\n  width: 60vw;\n  min-width: 120px;\n  height: auto;\n  object-fit: contain;\n  transition: max-width 0.2s, width 0.2s;\n}\nh2.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 2rem;\n  margin-bottom: 1.5rem;\n  font-weight: 600;\n}\n@media (max-width: 768px) {\n  .hrms-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 180px;\n    width: 80vw;\n  }\n  h2.text-center[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n    margin-top: 1.2rem;\n    margin-bottom: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .hrms-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 120px;\n    width: 90vw;\n  }\n  h2.text-center[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    margin-top: 0.8rem;\n    margin-bottom: 0.7rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/main/home/home.component.ts", lineNumber: 44 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-QPMCSYQ5.js.map
