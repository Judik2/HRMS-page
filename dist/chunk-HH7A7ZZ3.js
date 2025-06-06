import {
  PaginationComponent
} from "./chunk-EQM2SLMA.js";
import {
  LogsRepository
} from "./chunk-6X5DL6OJ.js";
import {
  MatTableDataSource,
  TableComponent
} from "./chunk-X45EM66I.js";
import "./chunk-BWIOX5TR.js";
import "./chunk-JYDETW4E.js";
import "./chunk-M2EJXGZP.js";
import "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-726REOYR.js";
import "./chunk-ZKADD55Q.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-JDSXESFV.js";
import "./chunk-PTMC7Z3G.js";
import "./chunk-NPYWTI7B.js";
import "./chunk-YB7VYXZC.js";
import "./chunk-BSJGXNL2.js";
import "./chunk-SNL7CR3M.js";
import "./chunk-POF6P2IF.js";
import "./chunk-BCSCWTDQ.js";
import "./chunk-XEW2RVSV.js";
import "./chunk-2R2VMYXT.js";
import "./chunk-34SSTWFD.js";
import "./chunk-PVOL3XIB.js";
import "./chunk-PPDZQ3XB.js";
import "./chunk-O2426PIE.js";
import "./chunk-CN2NLH3R.js";
import "./chunk-6VMHCKIO.js";
import "./chunk-Z4NK5ERE.js";
import "./chunk-CLKJFHPN.js";
import "./chunk-3IAPPBJB.js";
import "./chunk-4JBIDYYM.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import "./chunk-NKEEF4XY.js";
import "./chunk-LHQOL4PU.js";
import {
  IdService
} from "./chunk-YW5JDNY2.js";
import {
  LoaderService,
  NgxSpinnerService,
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import "./chunk-XVQ6O2EZ.js";

// src/app/main/employee/employee-logs/employee-logs.component.ts
var EmployeeLogsComponent = class _EmployeeLogsComponent {
  idService;
  logsRepository;
  spinner;
  eventService;
  loaderService;
  dataSource = new MatTableDataSource();
  sortDirection = "";
  sortColumn = "";
  pageIndex = 1;
  pageSize = 100;
  totalCount = 0;
  totalRows = 0;
  fromDate = "";
  toDate = "";
  columns = [
    { title: "Type", field: "event_type", type: "text", width: "10%" },
    { title: "Description", field: "description", type: "text", width: "80%" },
    { title: "Time", field: "event_time", type: "datetime", width: "10%" }
  ];
  constructor(idService, logsRepository, spinner, eventService, loaderService) {
    this.idService = idService;
    this.logsRepository = logsRepository;
    this.spinner = spinner;
    this.eventService = eventService;
    this.loaderService = loaderService;
  }
  ngOnInit() {
    this.initLogs();
  }
  initLogs() {
    this.spinner.show();
    this.loaderService.show();
    this.idService.getId("employee-logs").subscribe((employeeId) => {
      this.logsRepository.getAllByEmployeeIdCount(employeeId, this.fromDate, this.toDate).then((totalCount) => {
        this.totalCount = Math.ceil(totalCount / this.pageSize);
        this.totalRows = totalCount;
        this.logsRepository.getAllByEmployeeId(employeeId, this.fromDate, this.toDate, this.sortColumn, this.sortDirection, this.pageSize, this.pageIndex).then((data) => {
          this.dataSource.data = data;
          this.spinner.hide();
          this.loaderService.hide();
        });
      });
    });
  }
  onActionClick(event) {
    switch (event.action) {
      case "sort": {
        this.sortColumn = event.data.field;
        this.sortDirection = event.data.sort;
        this.initLogs();
        break;
      }
    }
  }
  static \u0275fac = function EmployeeLogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmployeeLogsComponent)(\u0275\u0275directiveInject(IdService), \u0275\u0275directiveInject(LogsRepository), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmployeeLogsComponent, selectors: [["app-employee-logs"]], decls: 12, vars: 13, consts: [[1, "card", "flex-fill"], [1, "card-body"], [1, "mb-2"], [1, "d-flex", "p-2", "w-100"], ["type", "datetime-local", 1, "app-input", 3, "ngModelChange", "change", "placeholder", "ngModel"], [1, "ml-2"], ["tableLayout", "fixed", "tableClasses", "app-table no-wrap", 3, "action", "columns", "dataSource"], ["paginationType", "datatable-js", 1, "w-100", 3, "pageSizeChange", "pageChange", "totalRows", "pageSize", "totalPages"]], template: function EmployeeLogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "input", 4);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EmployeeLogsComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function EmployeeLogsComponent_Template_input_change_5_listener() {
        return ctx.initLogs();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "input", 4);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EmployeeLogsComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275listener("change", function EmployeeLogsComponent_Template_input_change_8_listener() {
        return ctx.initLogs();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "app-table", 6);
      \u0275\u0275listener("action", function EmployeeLogsComponent_Template_app_table_action_10_listener($event) {
        return ctx.onActionClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "app-pagination", 7);
      \u0275\u0275listener("pageSizeChange", function EmployeeLogsComponent_Template_app_pagination_pageSizeChange_11_listener($event) {
        ctx.pageSize = $event;
        return ctx.initLogs();
      })("pageChange", function EmployeeLogsComponent_Template_app_pagination_pageChange_11_listener($event) {
        ctx.pageIndex = $event;
        return ctx.initLogs();
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(6, 9, "From"));
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275advance(3);
      \u0275\u0275propertyInterpolate("placeholder", \u0275\u0275pipeBind1(9, 11, "To"));
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275advance(2);
      \u0275\u0275property("columns", ctx.columns)("dataSource", ctx.dataSource);
      \u0275\u0275advance();
      \u0275\u0275property("totalRows", ctx.totalRows)("pageSize", ctx.pageSize)("totalPages", ctx.totalCount);
    }
  }, dependencies: [
    TableComponent,
    CommonModule,
    TranslatePipe,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    PaginationComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmployeeLogsComponent, { className: "EmployeeLogsComponent", filePath: "src/app/main/employee/employee-logs/employee-logs.component.ts", lineNumber: 27 });
})();
export {
  EmployeeLogsComponent
};
//# sourceMappingURL=chunk-HH7A7ZZ3.js.map
