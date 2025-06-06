import {
  PagesRepository
} from "./chunk-ZQOC7KHR.js";
import "./chunk-G7IEYWLY.js";
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
import "./chunk-NKEEF4XY.js";
import "./chunk-LHQOL4PU.js";
import "./chunk-YW5JDNY2.js";
import {
  Router
} from "./chunk-HDIRTHWB.js";
import {
  BehaviorSubject,
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async,
  __spreadValues
} from "./chunk-XVQ6O2EZ.js";

// src/app/admin/page/pages-management/pages-management.component.ts
var PagesManagementComponent = class _PagesManagementComponent {
  pagesRepository;
  router;
  dataSource = new MatTableDataSource();
  editingPage = null;
  newPage = {};
  pagesSubject = new BehaviorSubject([]);
  pages$ = this.pagesSubject.asObservable();
  columns = [
    { field: "id", title: "ID", type: "number", width: "10%" },
    { field: "name", title: "Name", width: "80%" },
    {
      field: "actions",
      width: "10%",
      title: "Actions",
      type: "buttons",
      columnClass: "text-center",
      columnHeaderClass: "text-center",
      buttons: [
        {
          name: "Edit",
          icon: "create-outline",
          class: "icon-edit"
        },
        {
          name: "Delete",
          icon: "trash-outline",
          class: "icon-trash"
        }
      ]
    }
  ];
  constructor(pagesRepository, router) {
    this.pagesRepository = pagesRepository;
    this.router = router;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadPages();
      this.pages$.subscribe((pages) => {
        this.dataSource.data = pages;
      });
    });
  }
  loadPages() {
    return __async(this, null, function* () {
      const pages = yield this.pagesRepository.getAll();
      this.pagesSubject.next(pages);
    });
  }
  handleTableAction(event) {
    switch (event.action) {
      case "Edit":
        if (event.data?.id) {
          this.router.navigate(["/admin/page-settings/editor", event.data.id]);
        }
        break;
      case "Delete":
        if (event.data?.id) {
          this.deletePage(event.data.id);
        }
        break;
    }
  }
  startEdit(page) {
    this.editingPage = __spreadValues({}, page);
  }
  cancelEdit() {
    this.editingPage = null;
  }
  saveEdit() {
    return __async(this, null, function* () {
      if (this.editingPage?.id) {
        yield this.pagesRepository.update(this.editingPage.id, this.editingPage);
        this.editingPage = null;
        yield this.loadPages();
      }
    });
  }
  createPage() {
    return __async(this, null, function* () {
      if (!this.newPage.name) {
        return;
      }
      const pageToCreate = {
        name: this.newPage.name
      };
      yield this.pagesRepository.create(pageToCreate);
      this.newPage = {};
      yield this.loadPages();
    });
  }
  deletePage(id) {
    return __async(this, null, function* () {
      if (confirm("Are you sure you want to delete this page?")) {
        yield this.pagesRepository.delete(id);
        yield this.loadPages();
      }
    });
  }
  static \u0275fac = function PagesManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PagesManagementComponent)(\u0275\u0275directiveInject(PagesRepository), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PagesManagementComponent, selectors: [["app-pages-management"]], decls: 15, vars: 3, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "create-section"], [1, "form-group"], ["type", "text", "placeholder", "Page Name", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [1, "pages-list"], ["tableLayout", "fixed", 3, "action", "dataSource", "columns"]], template: function PagesManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Pages Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "h3");
      \u0275\u0275text(6, "Create New Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "input", 5);
      \u0275\u0275twoWayListener("ngModelChange", function PagesManagementComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.newPage.name, $event) || (ctx.newPage.name = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 6);
      \u0275\u0275listener("click", function PagesManagementComponent_Template_button_click_9_listener() {
        return ctx.createPage();
      });
      \u0275\u0275text(10, "Create");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "h3");
      \u0275\u0275text(13, "Existing Pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "app-table", 8);
      \u0275\u0275listener("action", function PagesManagementComponent_Template_app_table_action_14_listener($event) {
        return ctx.handleTableAction($event);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.newPage.name);
      \u0275\u0275advance(6);
      \u0275\u0275property("dataSource", ctx.dataSource)("columns", ctx.columns);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TableComponent], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.create-section[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  padding: 20px;\n  background-color: #f8f9fa;\n  border-radius: 5px;\n}\n.create-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 10px;\n}\n.create-section[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.pages-list[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n}\n.pages-list[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pages-list[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px;\n  text-align: left;\n  border-bottom: 1px solid #dee2e6;\n}\n.pages-list[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-weight: 600;\n}\n.pages-list[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.pages-list[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=pages-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PagesManagementComponent, { className: "PagesManagementComponent", filePath: "src/app/admin/page/pages-management/pages-management.component.ts", lineNumber: 19 });
})();
export {
  PagesManagementComponent
};
//# sourceMappingURL=chunk-OPCVI7AH.js.map
