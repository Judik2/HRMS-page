import {
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-CRLS72DG.js";
import {
  Dir,
  FormsModule,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-JDSXESFV.js";
import {
  TranslatePipe
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate6,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ERGQW4H6.js";

// src/app/shared/templates/pagination/pagination.component.ts
function PaginationComponent_div_1_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r3 = ctx.$implicit;
    \u0275\u0275property("value", size_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r3);
  }
}
function PaginationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "mat-select", 6);
    \u0275\u0275listener("selectionChange", function PaginationComponent_div_1_Template_mat_select_selectionChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageSize($event));
    });
    \u0275\u0275twoWayListener("valueChange", function PaginationComponent_div_1_Template_mat_select_valueChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(7, PaginationComponent_div_1_mat_option_7_Template, 2, 2, "mat-option", 7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ul", 8)(9, "li", 9);
    \u0275\u0275listener("click", function PaginationComponent_div_1_Template_li_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToFirstPage());
    });
    \u0275\u0275elementStart(10, "a", 10)(11, "div", 11);
    \u0275\u0275element(12, "i", 12)(13, "i", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "li", 9);
    \u0275\u0275listener("click", function PaginationComponent_div_1_Template_li_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPreviousPage());
    });
    \u0275\u0275elementStart(15, "a", 10)(16, "div", 11);
    \u0275\u0275element(17, "i", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "li")(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "mat-form-field", 5)(23, "input", 13);
    \u0275\u0275listener("change", function PaginationComponent_div_1_Template_input_change_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageInputChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "li", 9);
    \u0275\u0275listener("click", function PaginationComponent_div_1_Template_li_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNextPage());
    });
    \u0275\u0275elementStart(27, "a", 10)(28, "div", 11);
    \u0275\u0275element(29, "i", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "li", 9);
    \u0275\u0275listener("click", function PaginationComponent_div_1_Template_li_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToLastPage());
    });
    \u0275\u0275elementStart(31, "a", 10)(32, "div", 11);
    \u0275\u0275element(33, "i", 14)(34, "i", 14);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 25, "Items per page:"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("value", ctx_r1.pageSize);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizes);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 27, "Page"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.currentPage)("min", 1)("max", ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(25, 29, "of"), " ", ctx_r1.totalPages, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
function PaginationComponent_div_2_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const size_r5 = ctx.$implicit;
    \u0275\u0275property("value", size_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(size_r5);
  }
}
function PaginationComponent_div_2_li_23_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275listener("click", function PaginationComponent_div_2_li_23_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const page_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(page_r7));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r7);
  }
}
function PaginationComponent_div_2_li_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function PaginationComponent_div_2_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30);
    \u0275\u0275template(1, PaginationComponent_div_2_li_23_a_1_Template, 2, 1, "a", 31)(2, PaginationComponent_div_2_li_23_span_2_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", page_r7 === ctx_r1.currentPage)("disabled", page_r7 === "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r7 !== "...");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", page_r7 === "...");
  }
}
function PaginationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "select", 20);
    \u0275\u0275listener("change", function PaginationComponent_div_2_Template_select_change_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePageSize($event));
    });
    \u0275\u0275twoWayListener("valueChange", function PaginationComponent_div_2_Template_select_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.currentPage, $event) || (ctx_r1.currentPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(8, PaginationComponent_div_2_option_8_Template, 2, 2, "option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 17)(12, "div", 21);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 17)(18, "div", 22)(19, "ul", 23)(20, "li", 24)(21, "a", 25);
    \u0275\u0275listener("click", function PaginationComponent_div_2_Template_a_click_21_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPreviousPage());
    });
    \u0275\u0275element(22, "i", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, PaginationComponent_div_2_li_23_Template, 3, 6, "li", 27);
    \u0275\u0275elementStart(24, "li", 28)(25, "a", 25);
    \u0275\u0275listener("click", function PaginationComponent_div_2_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToNextPage());
    });
    \u0275\u0275element(26, "i", 29);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 17, "Row Per Page"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("value", ctx_r1.currentPage);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pageSizes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 19, "Entries"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate6(" ", \u0275\u0275pipeBind1(14, 21, "Showing"), " ", (ctx_r1.currentPage - 1) * ctx_r1.pageSize + 1, " - ", ctx_r1.currentPage * ctx_r1.pageSize > ctx_r1.totalPages * ctx_r1.pageSize ? ctx_r1.totalPages * ctx_r1.pageSize : ctx_r1.currentPage * ctx_r1.pageSize, " ", \u0275\u0275pipeBind1(15, 23, "of"), " ", ctx_r1.totalRows, " ", \u0275\u0275pipeBind1(16, 25, "entries"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r1.currentPage === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.visiblePages);
    \u0275\u0275advance();
    \u0275\u0275classProp("disabled", ctx_r1.currentPage === ctx_r1.totalPages);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-disabled", ctx_r1.currentPage === ctx_r1.totalPages);
  }
}
var PaginationComponent = class _PaginationComponent {
  currentPage = 1;
  totalPages = 1;
  pageSize = 1;
  pageSizes = [15, 25, 40, 100];
  paginationType = "";
  totalRows = 0;
  pageChange = new EventEmitter();
  pageSizeChange = new EventEmitter();
  onPageInputChange(event) {
    const input = event.target;
    let page = parseInt(input.value, 10);
    if (page < 1)
      page = 1;
    if (page > this.totalPages)
      page = this.totalPages;
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }
  goToLastPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
      this.pageChange.emit(this.currentPage);
    }
  }
  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }
  goToFirstPage() {
    this.currentPage = 1;
    this.pageChange.emit(this.currentPage);
  }
  changePageSize(event) {
    this.pageSizeChange.emit(Number(event.value || event.target.value));
  }
  get visiblePages() {
    const pages = [];
    const total = this.totalPages;
    const current = this.currentPage;
    if (total <= 7) {
      for (let i = 1; i <= total; i++)
        pages.push(i);
      return pages;
    }
    pages.push(1);
    if (current > 4)
      pages.push("...");
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);
    for (let i = start; i <= end; i++)
      pages.push(i);
    if (end < total - 1)
      pages.push("...");
    pages.push(total);
    return pages;
  }
  goToPage(page) {
    if (typeof page === "number" && page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }
  static \u0275fac = function PaginationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaginationComponent, selectors: [["app-pagination"]], inputs: { currentPage: "currentPage", totalPages: "totalPages", pageSize: "pageSize", pageSizes: "pageSizes", paginationType: "paginationType", totalRows: "totalRows" }, outputs: { pageChange: "pageChange", pageSizeChange: "pageSizeChange" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], ["class", "card-footer", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "card-footer"], [1, "justify-content-between", "d-flex", "pt-3"], ["appearance", "outline", 1, "ms-2", "small"], [3, "selectionChange", "valueChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "pagination", "d-flex", "align-items-center", "gap-2"], [3, "click"], ["href", "javascript:void(0)"], [1, "duble-arrow", "d-flex", "align-items-center"], [1, "fa-solid", "fa-chevron-right"], ["matInput", "", "type", "number", 3, "change", "value", "min", "max"], [1, "fa-solid", "fa-chevron-left"], [3, "value"], ["dir", "ltr", 1, "row", "datatable-paginate"], [1, "col-sm-4", "col-md-4"], [1, ""], [1, "d-flex", "align-items-center", "gap-2"], [1, "form-select", "form-select-sm", 3, "change", "valueChange", "value"], ["role", "status", "aria-live", "polite", 1, "text-center"], [1, "dataTables_paginate", "paging_simple_numbers"], [1, "pagination"], [1, "paginate_button", "page-item", "previous"], [1, "page-link", 3, "click"], [1, "ti", "ti-chevron-left"], ["class", "paginate_button page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], [1, "paginate_button", "page-item", "next"], [1, "ti", "ti-chevron-right"], [1, "paginate_button", "page-item"], ["class", "page-link", 3, "click", 4, "ngIf"], [4, "ngIf"]], template: function PaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, PaginationComponent_div_1_Template, 35, 31, "div", 1)(2, PaginationComponent_div_2_Template, 27, 27, "div", 2);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngSwitch", ctx.paginationType);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngSwitchCase", "datatable-js");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    TranslatePipe,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    MatFormFieldModule,
    MatFormField,
    Dir,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption
  ], styles: ["\n\n  .mat-mdc-form-field-infix {\n  width: 40px !important;\n}\n.employee-pagination[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=pagination.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaginationComponent, { className: "PaginationComponent", filePath: "src/app/shared/templates/pagination/pagination.component.ts", lineNumber: 23 });
})();

export {
  PaginationComponent
};
//# sourceMappingURL=chunk-EQM2SLMA.js.map
