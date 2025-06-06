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
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  Router,
  SupabaseContext
} from "./chunk-HDIRTHWB.js";
import {
  BehaviorSubject,
  combineLatest,
  map,
  of,
  switchMap,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-XVQ6O2EZ.js";

// src/supabase/types/sidebar-menu-items.dto.ts
var SidebarMenuItemsRowDto = class {
  accessibility;
  created_at;
  feature;
  icon;
  id;
  is_visible;
  menu_id;
  name;
  order_index;
  page_id;
  parent_id;
  route;
  type;
  updated_at;
  constructor(param = null) {
    if (param) {
      this.accessibility = param.accessibility;
      this.created_at = param.created_at;
      this.feature = param.feature;
      this.icon = param.icon;
      this.id = param.id;
      this.is_visible = param.is_visible;
      this.menu_id = param.menu_id;
      this.name = param.name;
      this.order_index = param.order_index;
      this.page_id = param.page_id;
      this.parent_id = param.parent_id;
      this.route = param.route;
      this.type = param.type;
      this.updated_at = param.updated_at;
    }
  }
};

// src/app/shared/models/dto/app/sidebar-menu-items.dto.ts
var MenuItemType;
(function(MenuItemType2) {
  MenuItemType2["Item"] = "item";
  MenuItemType2["Container"] = "container";
  MenuItemType2["Header"] = "header";
})(MenuItemType || (MenuItemType = {}));
var SidebarMenuItemsDto = class extends SidebarMenuItemsRowDto {
  submenu;
  expanded;
  badge;
  constructor(data) {
    super(data);
    if (data) {
      this.id = data.id;
      this.name = data.name || "";
      this.type = data.type || MenuItemType.Item;
      this.icon = data.icon;
      this.route = data.route;
      this.page_id = data.page_id;
      this.parent_id = data.parent_id;
      this.menu_id = data.menu_id || 0;
      this.order_index = data.order_index || 0;
      this.accessibility = data.accessibility || "*";
      this.feature = data.feature;
      this.is_visible = data.is_visible ?? true;
      this.submenu = data.submenu || [];
      this.expanded = data.expanded || false;
    }
  }
};

// src/supabase/repositories/sidebar-menu.repository.ts
var SidebarMenuRepository = class _SidebarMenuRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "sidebar_menu", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function SidebarMenuRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarMenuRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarMenuRepository, factory: _SidebarMenuRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/sidebar-menu-items.repository.ts
var SidebarMenuItemsRepository = class _SidebarMenuItemsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "sidebar_menu_items", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getFullMenuStructure(menuId) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select(`
                *,
                pages!sidebar_menu_items_page_id_fkey (
                    id,
                    name
                )
            `).eq("menu_id", menuId).order("order_index", { ascending: true });
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Get menu structure error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function SidebarMenuItemsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SidebarMenuItemsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SidebarMenuItemsRepository, factory: _SidebarMenuItemsRepository.\u0275fac, providedIn: "root" });
};

// src/app/shared/app-services/side-bar.service.ts
var SideBarService = class _SideBarService {
  sidebarMenuRepository;
  sidebarMenuItemsRepository;
  router;
  objectiveFormRepository;
  feedbackFormsRepository;
  authService;
  toggleSidebar$ = new BehaviorSubject(false);
  isOpened = true;
  isHovered = false;
  sidebarMenu = [];
  sidebarMenuItems$ = new BehaviorSubject([]);
  badgeObservers = [];
  currentEmployee;
  constructor(sidebarMenuRepository, sidebarMenuItemsRepository, router, objectiveFormRepository, feedbackFormsRepository, authService) {
    this.sidebarMenuRepository = sidebarMenuRepository;
    this.sidebarMenuItemsRepository = sidebarMenuItemsRepository;
    this.router = router;
    this.objectiveFormRepository = objectiveFormRepository;
    this.feedbackFormsRepository = feedbackFormsRepository;
    this.authService = authService;
    this.loadCurrentEmployee();
  }
  loadCurrentEmployee() {
    this.authService.getEmployee$().subscribe((employee) => {
      if (!employee) {
        return;
      }
      this.currentEmployee = employee;
    });
  }
  loadMenuFromDatabase() {
    return __async(this, null, function* () {
      try {
        const menus = yield this.sidebarMenuRepository.getAll();
        if (menus && menus.length > 0) {
          const mainMenu = menus[0];
          if (!mainMenu.id) {
            console.error("Main menu has no ID");
            return;
          }
          const menuItems = yield this.sidebarMenuItemsRepository.getFullMenuStructure(mainMenu.id);
          const menuItemDtos = menuItems.map((item) => new SidebarMenuItemsDto(item));
          this.sidebarMenuItems$.next(menuItemDtos);
          this.sidebarMenu = this.buildMenuTree(menuItemDtos);
          this.loadState();
          this.resetBadges$().subscribe(() => {
            this.assignAllBadgeObservers();
          });
        }
      } catch (error) {
        console.error("Error loading menu:", error);
      }
    });
  }
  buildMenuTree(items) {
    items = items.filter((item) => item.is_visible !== false);
    const itemMap = /* @__PURE__ */ new Map();
    items.forEach((item) => {
      if (item.id) {
        itemMap.set(item.id, new SidebarMenuItemsDto(__spreadProps(__spreadValues({}, item), {
          submenu: [],
          expanded: false
        })));
      }
    });
    const rootItems = [];
    items.forEach((item) => {
      if (!item.id)
        return;
      const menuItem = itemMap.get(item.id);
      if (!menuItem) {
        console.error(`Menu item with id ${item.id} not found in itemMap.`);
        return;
      }
      if (item.parent_id) {
        const parent = itemMap.get(item.parent_id);
        if (!parent) {
          console.error(`Parent item with id ${item.parent_id} not found in itemMap.`);
          return;
        }
        if (parent && parent.submenu) {
          parent.submenu.push(menuItem);
        }
      } else {
        rootItems.push(menuItem);
      }
    });
    return rootItems;
  }
  loadState() {
    if (!this.sidebarMenu || this.sidebarMenu.length === 0) {
      return;
    }
    const savedState = localStorage.getItem("side-bar");
    const savedOpenState = localStorage.getItem("side-bar-open");
    const savedActiveState = localStorage.getItem("side-bar-active");
    if (savedOpenState) {
      this.isOpened = savedOpenState === "true";
    }
    if (savedState) {
      try {
        const expandedNames = JSON.parse(savedState);
        this.updateExpandedState(this.sidebarMenu, expandedNames);
      } catch (error) {
        console.error("Error loading sidebar state:", error);
      }
    }
    if (savedActiveState) {
      this.router.navigate([savedActiveState]);
    }
  }
  updateExpandedState(items, expandedNames) {
    if (!items)
      return;
    items.forEach((item) => {
      if (item.submenu && item.submenu.length > 0 && item.name) {
        item.expanded = expandedNames.includes(item.name);
        this.updateExpandedState(item.submenu, expandedNames);
      }
    });
  }
  saveActiveState(route) {
    localStorage.setItem("side-bar-active", route);
  }
  saveState() {
    if (!this.sidebarMenu || this.sidebarMenu.length === 0) {
      return;
    }
    const expandedNames = this.getExpandedNames(this.sidebarMenu);
    localStorage.setItem("side-bar", JSON.stringify(expandedNames));
    localStorage.setItem("side-bar-open", this.isOpened.toString());
  }
  getExpandedNames(items) {
    let expandedNames = [];
    items.forEach((item) => {
      if (item.expanded && item.submenu && item.submenu.length > 0 && item.name) {
        expandedNames.push(item.name);
        expandedNames = expandedNames.concat(this.getExpandedNames(item.submenu));
      }
    });
    return expandedNames;
  }
  toggleSidebar() {
    this.isOpened = !this.isOpened;
    this.saveState();
  }
  toggleMenuItem(item) {
    if (item.submenu && item.submenu.length > 0) {
      item.expanded = !item.expanded;
      this.saveState();
    }
  }
  isRouteVisible(items, route) {
    const item = items.find((i) => i.route === route);
    if (!item)
      return true;
    let current = item;
    while (current) {
      if (current.is_visible === false)
        return false;
      current = items.find((i) => i.id === current?.parent_id);
    }
    return true;
  }
  setMenuBadgeByName(name, badge) {
    const setBadge = (items) => {
      for (const item of items) {
        if (item.name === name) {
          item.badge = badge;
          return true;
        }
        if (item.submenu && setBadge(item.submenu)) {
          return true;
        }
      }
      return false;
    };
    setBadge(this.sidebarMenu);
  }
  resetBadges$() {
    return combineLatest([
      this.getTotalObjectivesManagersCount$(),
      this.getTotalObjectivesEmployeeCount$(),
      this.getTotalFeedbacksManagersCount$(),
      this.getTotalFeedbacksEmployeeCount$()
    ]).pipe(map(([managerObjectives, employeeObjectives, managerFeedbacks, employeeFeedbacks]) => [
      managerObjectives.toString(),
      employeeObjectives.toString(),
      managerFeedbacks.toString(),
      employeeFeedbacks.toString()
    ]), tap(([managerObjectives, employeeObjectives, managerFeedbacks, employeeFeedbacks]) => {
      this.addBadgeObserver("Objectives management", { value: of(managerObjectives), class: "badge-primary" });
      this.addBadgeObserver("Awaited objectives", { value: of(employeeObjectives), class: "badge-primary" });
      this.addBadgeObserver("Feedbacks management", { value: of(managerFeedbacks), class: "badge-primary" });
      this.addBadgeObserver("Awaited feedbacks", { value: of(employeeFeedbacks), class: "badge-primary" });
    }));
  }
  getTotalObjectivesEmployeeCount$() {
    return this.authService.getEmployee$().pipe(switchMap((employee) => {
      if (employee && employee.email) {
        return this.objectiveFormRepository.getAwaitedObjectiveFormCount(employee.email);
      }
      return Promise.resolve(0);
    }));
  }
  getTotalObjectivesManagersCount$() {
    return this.authService.getEmployee$().pipe(switchMap((employee) => {
      if (employee && employee.email) {
        return this.objectiveFormRepository.getManagerObjectiveFormCount(employee.email);
      }
      return Promise.resolve(0);
    }));
  }
  getTotalFeedbacksManagersCount$() {
    return this.authService.getEmployee$().pipe(switchMap((employee) => {
      if (employee && employee.email) {
        return this.feedbackFormsRepository.getManagerFeedbacksFormCount(employee.email);
      }
      return Promise.resolve(0);
    }));
  }
  getTotalFeedbacksEmployeeCount$() {
    return this.authService.getEmployee$().pipe(switchMap((employee) => {
      if (employee && employee.email) {
        return this.feedbackFormsRepository.getAwaitedFeedbacksFormCount(employee.email);
      }
      return Promise.resolve(0);
    }));
  }
  addBadgeObserver(name, badge) {
    this.badgeObservers.push({ name, badge });
  }
  assignAllBadgeObservers() {
    this.badgeObservers.forEach((badgeObs) => {
      this.setMenuBadgeByName(badgeObs.name, badgeObs.badge);
    });
  }
  static \u0275fac = function SideBarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SideBarService)(\u0275\u0275inject(SidebarMenuRepository), \u0275\u0275inject(SidebarMenuItemsRepository), \u0275\u0275inject(Router), \u0275\u0275inject(ObjectiveFormRepository), \u0275\u0275inject(FeedbackFormsRepository), \u0275\u0275inject(SupabaseAuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SideBarService, factory: _SideBarService.\u0275fac, providedIn: "root" });
};

export {
  MenuItemType,
  SidebarMenuItemsDto,
  SidebarMenuRepository,
  SidebarMenuItemsRepository,
  SideBarService
};
//# sourceMappingURL=chunk-SUBMYCX5.js.map
