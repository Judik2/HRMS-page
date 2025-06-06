import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  DragDropModule
} from "./chunk-BP2MFMSD.js";
import {
  PagesRepository
} from "./chunk-ZQOC7KHR.js";
import "./chunk-G7IEYWLY.js";
import {
  MenuItemType,
  SideBarService,
  SidebarMenuItemsDto,
  SidebarMenuItemsRepository,
  SidebarMenuRepository
} from "./chunk-SUBMYCX5.js";
import "./chunk-KG3BOM3F.js";
import "./chunk-S5OCFGQY.js";
import {
  AppInputComponent
} from "./chunk-M2EJXGZP.js";
import {
  AppModalComponent,
  AppOptions,
  FormInputComponent,
  ModalService
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-726REOYR.js";
import {
  MatIcon,
  MatIconModule,
  MatList,
  MatListItem,
  MatListModule
} from "./chunk-ZKADD55Q.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import {
  LoaderService,
  NgxSpinnerService,
  TranslateService
} from "./chunk-HDIRTHWB.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  of,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-ERGQW4H6.js";
import "./chunk-KQ2G4OE2.js";
import "./chunk-N6SQHGEH.js";
import "./chunk-RTA6YFKO.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XVQ6O2EZ.js";

// src/app/admin/app-settings/sidebar-management/sidebar-management.component.ts
var _c0 = ["formModal"];
var _c1 = ["sidebarMenuContent"];
var _c2 = () => ({ "col-12": true });
function SidebarManagementComponent_ng_container_14_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function SidebarManagementComponent_ng_container_14_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleExpand(item_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isExpanded(item_r5.id) ? "expand_less" : "expand_more");
  }
}
function SidebarManagementComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-list-item", 12);
    \u0275\u0275listener("cdkDragStarted", function SidebarManagementComponent_ng_container_14_Template_mat_list_item_cdkDragStarted_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStarted($event));
    })("cdkDragEnded", function SidebarManagementComponent_ng_container_14_Template_mat_list_item_cdkDragEnded_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnded($event));
    })("cdkDragMoved", function SidebarManagementComponent_ng_container_14_Template_mat_list_item_cdkDragMoved_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragMoved($event));
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "div", 14)(4, "span", 15)(5, "div", 16);
    \u0275\u0275element(6, "i", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275template(9, SidebarManagementComponent_ng_container_14_button_9_Template, 3, 1, "button", 19);
    \u0275\u0275elementStart(10, "app-input", 20);
    \u0275\u0275listener("change", function SidebarManagementComponent_ng_container_14_Template_app_input_change_10_listener($event) {
      const item_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleIsVisible(item_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 21);
    \u0275\u0275listener("click", function SidebarManagementComponent_ng_container_14_Template_button_click_11_listener() {
      const item_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editItem(item_r5));
    });
    \u0275\u0275elementStart(12, "mat-icon", 22);
    \u0275\u0275text(13, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275listener("click", function SidebarManagementComponent_ng_container_14_Template_button_click_14_listener() {
      const item_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteItem(item_r5));
    });
    \u0275\u0275elementStart(15, "mat-icon", 23);
    \u0275\u0275text(16, "delete");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("margin-left", ctx_r2.getIndentLevel(item_r5), "px");
    \u0275\u0275classProp("expanded", ctx_r2.isExpanded(item_r5.id))("child-item", item_r5.parent_id);
    \u0275\u0275property("cdkDragData", item_r5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", item_r5.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.hasChildren(item_r5));
    \u0275\u0275advance();
    \u0275\u0275property("settings", ctx_r2.getIsVisibleInputSettings(item_r5))("element", item_r5);
  }
}
function SidebarManagementComponent_ng_template_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "app-form-input", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r7 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction0(3, _c2));
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", input_r7.formControlName)("settings", input_r7);
  }
}
function SidebarManagementComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 24);
    \u0275\u0275listener("ngSubmit", function SidebarManagementComponent_ng_template_15_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveItem());
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, SidebarManagementComponent_ng_template_15_div_2_Template, 2, 4, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.menuItemForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.formInputs);
  }
}
var SidebarManagementComponent = class _SidebarManagementComponent {
  sidebarMenuRepository;
  sidebarMenuItemsRepository;
  pagesRepository;
  spinner;
  modalService;
  fb;
  sideBarService;
  translate;
  eventService;
  loaderService;
  formModal = null;
  sidebarMenuContent;
  dialogRef = null;
  AppConstants = AppConstants;
  MenuItemType = MenuItemType;
  menuItems = [];
  pages = [];
  showForm = false;
  editingItem = null;
  currentItem = {};
  expandedItems = /* @__PURE__ */ new Set();
  draggedItem = null;
  menuItemTypeOptions$;
  pageOptions$;
  parentOptions$;
  menuItemsMap = /* @__PURE__ */ new Map();
  formInputs = [];
  menuItemForm;
  isVisibleInputSettings = {
    type: "switch",
    field: "is_visible",
    id: "is_visible"
  };
  constructor(sidebarMenuRepository, sidebarMenuItemsRepository, pagesRepository, spinner, modalService, fb, sideBarService, translate, eventService, loaderService) {
    this.sidebarMenuRepository = sidebarMenuRepository;
    this.sidebarMenuItemsRepository = sidebarMenuItemsRepository;
    this.pagesRepository = pagesRepository;
    this.spinner = spinner;
    this.modalService = modalService;
    this.fb = fb;
    this.sideBarService = sideBarService;
    this.translate = translate;
    this.eventService = eventService;
    this.loaderService = loaderService;
    this.menuItemTypeOptions$ = AppOptions.getMenuItemTypeOptions();
    this.pageOptions$ = of([]);
    this.parentOptions$ = of([]);
    this.menuItemForm = this.fb.group({
      name: ["", Validators.required],
      type: ["", Validators.required],
      icon: [""],
      route: [""],
      page_id: [""],
      parent_id: [""],
      accessibility: ["*"],
      is_visible: [true],
      order_index: [0]
    });
    this.menuItemForm.get("page_id")?.valueChanges.subscribe((value) => {
      if (typeof value === "object") {
        this.menuItemForm.get("page_id")?.setValue(null);
      }
      this.updateRouteFieldState();
    });
    this.menuItemForm.get("parent_id")?.valueChanges.subscribe((value) => {
      if (typeof value === "object") {
        this.menuItemForm.get("parent_id")?.setValue(null);
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.loadData();
      this.initializeFormInputs();
    });
  }
  initializeFormInputs() {
    this.formInputs = [
      {
        formControlName: "name",
        type: "text",
        label: "Name",
        id: "name",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        placeholder: "Enter menu item name"
      },
      {
        formControlName: "order_index",
        type: "number",
        label: "Order Index",
        id: "order_index",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        placeholder: "Enter menu item order index"
      },
      {
        formControlName: "type",
        type: "select",
        label: "Type",
        id: "type",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        options: this.menuItemTypeOptions$
      },
      {
        formControlName: "parent_id",
        type: "autocomplete",
        label: "Parent",
        id: "parent_id",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        options: this.parentOptions$,
        placeholder: "Select parent menu item"
      },
      {
        formControlName: "icon",
        type: "text",
        label: "Icon",
        id: "icon",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        placeholder: "Enter icon class (e.g., fas fa-home)"
      },
      {
        formControlName: "route",
        type: "text",
        label: "Route",
        id: "route",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        placeholder: "Enter route path",
        disabled: (form) => {
          const pageId = form.get("page_id")?.value;
          return pageId !== null && pageId !== void 0;
        }
      },
      {
        formControlName: "page_id",
        type: "autocomplete",
        label: "Page",
        id: "page_id",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        options: this.pageOptions$,
        placeholder: "Select page"
      },
      {
        formControlName: "accessibility",
        type: "text",
        label: "Accessibility",
        id: "accessibility",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline",
        placeholder: "Enter accessibility roles (e.g., admin,user)"
      },
      {
        formControlName: "is_visible",
        type: "checkbox",
        label: "Visible",
        id: "is_visible",
        labelClass: "app-label",
        inputClass: "w-100",
        formFieldClass: "w-100",
        appearance: "outline"
      }
    ];
  }
  loadData() {
    return __async(this, null, function* () {
      try {
        this.spinner.show();
        this.loaderService.show();
        const menus = yield this.sidebarMenuRepository.getAll();
        if (menus?.length) {
          const mainMenu = menus[0];
          if (mainMenu.id) {
            const menuItems = yield this.sidebarMenuItemsRepository.getFullMenuStructure(mainMenu.id);
            this.menuItems = menuItems.map((item) => new SidebarMenuItemsDto(item)).sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
            this.menuItemsMap.clear();
            this.menuItems.forEach((item) => {
              if (item.id) {
                this.memoizedGetChildren(item.id);
              }
            });
          }
          this.pages = yield this.pagesRepository.getAll();
          this.pageOptions$ = of([
            { value: null, label: "None" },
            ...this.pages.map((p) => ({ value: p.id, label: p.name }))
          ]);
          this.parentOptions$ = of([
            { value: null, label: "None" },
            ...this.menuItems.map((item) => ({ value: item.id, label: item.name }))
          ]);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  toggleExpand(itemId) {
    return __async(this, null, function* () {
      if (!itemId)
        return;
      if (this.expandedItems.has(itemId)) {
        this.expandedItems.delete(itemId);
      } else {
        this.expandedItems.add(itemId);
      }
    });
  }
  onDrop(event) {
    return __async(this, null, function* () {
      if (!event.item.data)
        return;
      const item = event.item.data;
      const dropPoint = event.dropPoint;
      const element = event.container.element.nativeElement;
      const rect = element.getBoundingClientRect();
      const threshold = 50;
      const relativeX = dropPoint.x - rect.left;
      const indentLevel = Math.floor(relativeX / threshold);
      const visibleItems = this.getAllItems();
      const currentIndex = event.currentIndex;
      const previousIndex = event.previousIndex;
      let newParentId = null;
      if (indentLevel > 0) {
        for (let i = currentIndex - 1; i >= 0; i--) {
          const prevItem = visibleItems[i];
          if (!prevItem)
            continue;
          const prevItemIndent = this.getIndentLevel(prevItem) / 24;
          if (prevItemIndent < indentLevel) {
            newParentId = prevItem.id || null;
            break;
          }
        }
      }
      if (newParentId !== null && item.id && this.wouldCreateCircularReference(item.id, newParentId)) {
        return;
      }
      try {
        this.spinner.show();
        this.loaderService.show();
        if (item.id) {
          if (newParentId === item.parent_id) {
            const siblings = this.menuItems.filter((i) => i.parent_id === item.parent_id).sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
            for (let i = 0; i < siblings.length; i++) {
              const sibling = siblings[i];
              if (sibling.id) {
                yield this.sidebarMenuItemsRepository.update(sibling.id, {
                  order_index: i
                });
              }
            }
          } else {
            yield this.updateItemParentAndOrder(item.id, newParentId, currentIndex);
          }
          yield this.loadData();
        }
      } catch (error) {
        console.error("Error handling drop:", error);
      } finally {
        this.spinner.hide();
        this.loaderService.hide();
      }
    });
  }
  updateItemParentAndOrder(itemId, newParentId, newOrderIndex) {
    return __async(this, null, function* () {
      try {
        const updateDto = {
          parent_id: newParentId,
          order_index: newOrderIndex
        };
        yield this.sidebarMenuItemsRepository.update(itemId, updateDto);
      } catch (error) {
        console.error("Error updating item position:", error);
        throw error;
      }
    });
  }
  getItemIndent(item) {
    return item.parent_id ? 20 : 0;
  }
  getTypeClass(item) {
    return item.type || "";
  }
  isExpanded(itemId) {
    return itemId ? this.expandedItems.has(itemId) : false;
  }
  hasChildren(item) {
    return this.menuItems.some((i) => i.parent_id === item.id);
  }
  memoizedGetChildren(parentId) {
    if (!parentId)
      return [];
    if (!this.menuItemsMap.has(parentId)) {
      const children = this.menuItems.filter((item) => item.parent_id === parentId).sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
      this.menuItemsMap.set(parentId, children);
    }
    return this.menuItemsMap.get(parentId) || [];
  }
  getChildren(parentId) {
    return this.memoizedGetChildren(parentId);
  }
  addNewItem() {
    this.showForm = true;
    this.editingItem = null;
    this.menuItemForm.reset({
      type: MenuItemType.Item,
      accessibility: "*",
      is_visible: true
    });
    this.updateRouteFieldState();
    this.openModal();
  }
  editItem(item) {
    this.showForm = true;
    this.editingItem = item;
    this.menuItemForm.patchValue(item);
    this.updateRouteFieldState();
    this.openModal();
  }
  updateRouteFieldState() {
    const pageId = this.menuItemForm.get("page_id")?.value;
    if (pageId) {
      const id = typeof pageId === "object" ? pageId.value : pageId;
      if (id) {
        this.menuItemForm.patchValue({ route: `/page/${id}` }, { emitEvent: false });
      }
    }
  }
  saveItem() {
    return __async(this, null, function* () {
      if (this.menuItemForm.valid) {
        try {
          this.spinner.show();
          this.loaderService.show();
          const formValue = this.menuItemForm.value;
          if (this.editingItem?.id) {
            yield this.sidebarMenuItemsRepository.update(this.editingItem.id, formValue);
            this.eventService.next(EventConstants.SIDEBAR_MENU_ITEM_UPDATED, { id: this.editingItem.id, data: formValue });
          } else {
            const menus = yield this.sidebarMenuRepository.getAll();
            if (menus?.length) {
              const mainMenu = menus[0];
              if (mainMenu.id) {
                const created = yield this.sidebarMenuItemsRepository.create(__spreadProps(__spreadValues({}, formValue), {
                  menu_id: mainMenu.id
                }));
                if (created && created[0]?.id) {
                  this.eventService.next(EventConstants.SIDEBAR_MENU_ITEM_CREATED, { id: created[0].id, data: formValue });
                }
              }
            }
          }
          yield this.loadData();
          yield this.sideBarService.loadMenuFromDatabase();
          this.cancelEdit();
        } catch (error) {
          this.eventService.next(EventConstants.SIDEBAR_MENU_ITEM_CREATE_OR_UPDATE_ERROR, { error });
          console.error("Error saving item:", error);
        } finally {
          this.spinner.hide();
          this.loaderService.hide();
        }
      } else {
        this.menuItemForm.markAllAsTouched();
      }
    });
  }
  deleteItem(item) {
    return __async(this, null, function* () {
      if (confirm("Are you sure you want to delete this menu item?")) {
        try {
          this.spinner.show();
          this.loaderService.show();
          if (item.id) {
            yield this.sidebarMenuItemsRepository.delete(item.id);
            this.eventService.next(EventConstants.SIDEBAR_MENU_ITEM_DELETED, { id: item.id });
            yield this.loadData();
            yield this.sideBarService.loadMenuFromDatabase();
          }
        } catch (error) {
          this.eventService.next(EventConstants.SIDEBAR_MENU_ITEM_DELETE_ERROR, { id: item.id, error });
          console.error("Error deleting item:", error);
        } finally {
          this.spinner.hide();
          this.loaderService.hide();
        }
      }
    });
  }
  cancelEdit() {
    this.showForm = false;
    this.editingItem = null;
    this.menuItemForm.reset();
    if (this.dialogRef) {
      this.modalService.hide(this.dialogRef);
    }
  }
  wouldCreateCircularReference(itemId, potentialParentId, visited = /* @__PURE__ */ new Set()) {
    if (visited.has(potentialParentId)) {
      return false;
    }
    if (potentialParentId === itemId) {
      return true;
    }
    visited.add(potentialParentId);
    const parent = this.menuItems.find((item) => item.id === potentialParentId);
    if (!parent?.parent_id) {
      return false;
    }
    return this.wouldCreateCircularReference(itemId, parent.parent_id, visited);
  }
  getIndentLevel(item) {
    let level = 0;
    let currentItem = item;
    while (currentItem.parent_id) {
      level++;
      const parent = this.menuItems.find((i) => i.id === currentItem.parent_id);
      if (!parent)
        break;
      currentItem = parent;
    }
    return level * 24;
  }
  onDragStarted(event) {
    this.draggedItem = event.source.data;
  }
  onDragEnded(event) {
    this.draggedItem = null;
  }
  onDragMoved(event) {
    if (!this.draggedItem)
      return;
    const element = event.event.target;
    const container = element.closest("mat-list");
    if (!container)
      return;
    const rect = container.getBoundingClientRect();
    const threshold = 50;
    const relativeX = event.pointerPosition.x - rect.left;
    const indentLevel = Math.floor(relativeX / threshold);
    const preview = document.querySelector(".cdk-drag-preview");
    if (preview) {
      preview.style.marginLeft = `${indentLevel * 24}px`;
    }
  }
  renderMenuItem(item) {
    const result = [item];
    if (this.isExpanded(item.id)) {
      const children = this.getChildren(item.id);
      children.forEach((child) => {
        result.push(...this.renderMenuItem(child));
      });
    }
    return result;
  }
  getAllItems() {
    const result = [];
    const rootItems = this.menuItems.filter((item) => !item.parent_id).sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
    const addItemAndChildren = (item) => {
      result.push(item);
      if (this.isExpanded(item.id)) {
        const children = this.getChildren(item.id);
        children.forEach((child) => addItemAndChildren(child));
      }
    };
    rootItems.forEach((item) => addItemAndChildren(item));
    return result;
  }
  toggleIsVisible(item, isVisible) {
    return __async(this, null, function* () {
      item.is_visible = isVisible;
      if (item.id) {
        yield this.sidebarMenuItemsRepository.update(item.id, { is_visible: isVisible });
        yield this.loadData();
        yield this.sideBarService.loadMenuFromDatabase();
      }
    });
  }
  getIsVisibleInputSettings(item) {
    return __spreadProps(__spreadValues({}, this.isVisibleInputSettings), { id: "is_visible_" + item.id });
  }
  openModal() {
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: this.editingItem ? this.translate.instant("Edit Menu Item") : this.translate.instant("New Menu Item"),
        template: this.sidebarMenuContent,
        showCancelButton: true,
        confirmText: this.translate.instant("Save"),
        cancelText: this.translate.instant("Cancel")
      }
    });
    this.dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.saveItem();
      }
    });
  }
  clearForm() {
    this.showForm = false;
    this.editingItem = null;
    this.menuItemForm.reset();
  }
  static \u0275fac = function SidebarManagementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarManagementComponent)(\u0275\u0275directiveInject(SidebarMenuRepository), \u0275\u0275directiveInject(SidebarMenuItemsRepository), \u0275\u0275directiveInject(PagesRepository), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SideBarService), \u0275\u0275directiveInject(TranslateService), \u0275\u0275directiveInject(EventService), \u0275\u0275directiveInject(LoaderService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SidebarManagementComponent, selectors: [["app-sidebar-management"]], viewQuery: function SidebarManagementComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.formModal = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidebarMenuContent = _t.first);
    }
  }, decls: 17, vars: 1, consts: [["sidebarMenuContent", ""], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", 2, "background-color", "transparent !important"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center", 2, "background-color", "white !important"], [1, "card-title"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "card-body"], [1, "sidebar-management-container"], ["cdkDropList", "", 1, "menu-list", 3, "cdkDropListDropped"], [4, "ngFor", "ngForOf"], ["cdkDrag", "", 3, "cdkDragStarted", "cdkDragEnded", "cdkDragMoved", "cdkDragData"], [1, "item-content"], [1, "item-header"], [1, "item-title", "d-flex", "align-items-center"], ["cdkDragHandle", "", 1, "drag-handle"], [1, "fas", "fa-grip-vertical"], [1, "item-actions"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [3, "change", "settings", "element"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["color", "warn"], [3, "ngSubmit", "formGroup"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "formControlName", "settings"]], template: function SidebarManagementComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "h4", 6);
      \u0275\u0275text(6, "Sidebar Menu Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275listener("click", function SidebarManagementComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.addNewItem());
      });
      \u0275\u0275elementStart(8, "mat-icon");
      \u0275\u0275text(9, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, " Add New Item ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "mat-list", 10);
      \u0275\u0275listener("cdkDropListDropped", function SidebarManagementComponent_Template_mat_list_cdkDropListDropped_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event));
      });
      \u0275\u0275template(14, SidebarManagementComponent_ng_container_14_Template, 17, 11, "ng-container", 11);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(15, SidebarManagementComponent_ng_template_15_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("ngForOf", ctx.getAllItems());
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    MatListModule,
    MatList,
    MatListItem,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatButton,
    MatIconButton,
    DragDropModule,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    FormInputComponent,
    AppInputComponent
  ], styles: ["\n\n.sidebar-management[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  padding: 1rem;\n}\n.sidebar-management[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%], \n.sidebar-management[_ngcontent-%COMP%]   .menu-form[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 800px;\n}\n.sidebar-management[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.sidebar-management[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.sidebar-management[_ngcontent-%COMP%]   .menu-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.sidebar-management[_ngcontent-%COMP%]   .menu-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.sidebar-management[_ngcontent-%COMP%]   .menu-form[_ngcontent-%COMP%] {\n  max-width: 500px;\n  padding: 1.5rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  border: 1px solid #dee2e6;\n}\n.sidebar-management[_ngcontent-%COMP%]   .menu-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n  gap: 1rem;\n}\n.card[_ngcontent-%COMP%] {\n  margin: 1rem;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 1rem;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 0;\n}\nmat-list[_ngcontent-%COMP%] {\n  padding: 0;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n}\nmat-list-item[_ngcontent-%COMP%]:hover {\n  border-color: #e0e0e0;\n  background-color: #fafafa;\n}\nmat-list-item.has-children[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\nmat-list-item.has-children[_ngcontent-%COMP%]:hover {\n  background-color: #eeeeee;\n}\n.child-items[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  padding-left: 1rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n}\n.child-items.expanded[_ngcontent-%COMP%] {\n  max-height: 1000px;\n}\n.child-items[_ngcontent-%COMP%]   .child-item[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  border-left: 2px solid #e0e0e0;\n}\n.child-indent[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s ease;\n}\nmat-list-item[_ngcontent-%COMP%]:hover   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  padding: 0 8px;\n  display: flex;\n  align-items: center;\n  color: #666;\n}\n.drag-handle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.drag-handle[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\nmat-list-item[_ngcontent-%COMP%]:hover   .drag-handle[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  background: #e3f2fd;\n  border: 2px dashed #2196f3;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n@media (max-width: 992px) {\n  .sidebar-management[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sidebar-management[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%], \n   .sidebar-management[_ngcontent-%COMP%]   .menu-form[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.sidebar-management-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  margin: 0 auto;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.menu-list[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  padding: 0;\n}\nmat-list-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #eee;\n  padding: 12px 16px;\n  transition: background-color 0.2s;\n}\nmat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\nmat-list-item.expanded[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\nmat-list-item.child-item[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.drag-handle[_ngcontent-%COMP%] {\n  cursor: move;\n  margin-right: 12px;\n  color: #666;\n}\n.item-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.item-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 16px;\n}\n.item-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #666;\n  font-size: 14px;\n}\n.item-type[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n.item-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.menu-item-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 600px;\n  margin: 0 auto;\n}\n.menu-item-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.menu-item-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #333;\n}\n.menu-item-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.menu-item-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s;\n}\n.menu-item-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.menu-item-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1976d2;\n}\n.menu-item-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 24px;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: white;\n  padding: 12px 16px;\n  display: flex;\n  align-items: center;\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.menu-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=sidebar-management.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SidebarManagementComponent, { className: "SidebarManagementComponent", filePath: "src/app/admin/app-settings/sidebar-management/sidebar-management.component.ts", lineNumber: 47 });
})();
export {
  SidebarManagementComponent
};
//# sourceMappingURL=chunk-MAW45KDV.js.map
