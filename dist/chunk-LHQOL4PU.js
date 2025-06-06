import {
  environment
} from "./chunk-HDIRTHWB.js";

// src/app/shared/constants/app.constants.ts
var AppConstants = class {
  static PENDING_PERFORMANCE_ENTRY = "pending_performance_entry";
  static AWAITING_EMPLOYEE = "awaiting_employee";
  static AWAITING_MANAGER = "awaiting_manager";
  static AWAITED_PROBLEM_RESOLVING = "awaited_problem_resolving";
  static APPROVED_BY_EMPLOYEE_AND_MANAGER = "approved_by_employee_and_manager";
  static SENT_FOR_PAYROLL_APPROVAL = "sent_for_payroll_approval";
  static FINISHED = "finished";
  static SENT_FOR_VP_APPROVAL = "sent_for_vp_approval";
  static INITIATE_STEP = "initiate";
  static FILL_YEARLY_STEP = "fill_yearly";
  static ROLE_EMPLOYEE = "employee";
  static ROLE_MANAGER = "manager";
  static ROLE_HR = "hr";
  static ROLE_PAYROLL = "payroll";
  static ROLE_GLOBAL_ADMIN = "global-admin";
  static ROLE_ADMIN = "admin";
  static TREND_STABLE = "stable";
  static TREND_UP = "up";
  static TREND_DOWN = "down";
  static MENU_ITEM_TYPE_ITEM = "item";
  static MENU_ITEM_TYPE_CONTAINER = "container";
  static MENU_ITEM_TYPE_HEADER = "header";
  static trends = [
    { key: this.TREND_STABLE, name: "Stable", icon: "fa-solid fa-minus" },
    { key: this.TREND_UP, name: "Up", icon: "fa-solid fa-angles-up text-success" },
    { key: this.TREND_DOWN, name: "Down", icon: "fa-solid fa-angles-down text-danger" }
  ];
  static roles = [
    { key: this.ROLE_EMPLOYEE, name: "Employee", color: "#a1aace" },
    // Light Green
    { key: this.ROLE_MANAGER, name: "Manager", color: "#c4c8db" },
    // Light Orange
    { key: this.ROLE_HR, name: "HR", color: "#a1aace" },
    // Light Blue
    { key: this.ROLE_PAYROLL, name: "Payroll", color: "#a1aace" }
    // Light Gray
  ];
  static objectiveStatuses = [
    { key: this.PENDING_PERFORMANCE_ENTRY, name: "Pending objectives entry" },
    { key: this.AWAITING_EMPLOYEE, name: "Awaiting employee" },
    { key: this.AWAITING_MANAGER, name: "Awaiting manager" },
    { key: this.AWAITED_PROBLEM_RESOLVING, name: "Awaited problem resolving" },
    { key: this.APPROVED_BY_EMPLOYEE_AND_MANAGER, name: "Approved by employee and manager" },
    { key: this.SENT_FOR_PAYROLL_APPROVAL, name: "Sent for payroll approval" },
    { key: this.FINISHED, name: "Finished" }
  ];
  static feedbackStatuses = [
    { key: this.PENDING_PERFORMANCE_ENTRY, name: "Pending entry" },
    { key: this.AWAITING_EMPLOYEE, name: "Awaiting employee" },
    { key: this.AWAITING_MANAGER, name: "Awaiting manager" },
    { key: this.AWAITED_PROBLEM_RESOLVING, name: "Awaited problem resolving" },
    { key: this.APPROVED_BY_EMPLOYEE_AND_MANAGER, name: "Approved by employee and manager" },
    { key: this.SENT_FOR_VP_APPROVAL, name: "Sent for vp approval" },
    { key: this.FINISHED, name: "Finished" }
  ];
  static steps = [
    { key: this.INITIATE_STEP, name: "Initiate Step" },
    { key: this.FILL_YEARLY_STEP, name: "Fill Yearly Step" }
  ];
  static menuItemTypes = [
    { key: this.MENU_ITEM_TYPE_ITEM, name: "Item" },
    { key: this.MENU_ITEM_TYPE_CONTAINER, name: "Container" },
    { key: this.MENU_ITEM_TYPE_HEADER, name: "Header" }
  ];
  static getRoleColor(role) {
    if (!role) {
      role = "employee";
    }
    const roleObj = this.roles.find((r) => r.name.toLowerCase() === role.toLowerCase());
    return roleObj ? roleObj.color : "#a1aace";
  }
  static getObjectiveFormStatusClass(status) {
    switch (status) {
      case this.PENDING_PERFORMANCE_ENTRY:
        return "panding";
      case this.APPROVED_BY_EMPLOYEE_AND_MANAGER:
        return "approved";
      case this.AWAITING_EMPLOYEE:
        return "panding";
      case this.AWAITING_MANAGER:
        return "panding";
      case this.SENT_FOR_PAYROLL_APPROVAL:
        return "approved-done";
      case this.SENT_FOR_VP_APPROVAL:
        return "approved-done";
      case this.AWAITED_PROBLEM_RESOLVING:
        return "panding";
      case this.FINISHED:
        return "approved";
      default:
        return "";
    }
  }
  static getFormStepNameByKey(key) {
    const status = this.steps.find((status2) => status2.key === key);
    return status ? status.name : "";
  }
  static getFormStatusNameByKey(translate, row, status_prefix) {
    const status = status_prefix == "objective" ? this.objectiveStatuses.find((status2) => status2.key === row.status)?.name : this.feedbackStatuses.find((status2) => status2.key === row.status)?.name;
    let suffix = "";
    let prefix = "";
    if (row.is_manager_approved && !row.is_employee_approved && row.assigned_to == this.AWAITING_EMPLOYEE) {
      suffix = translate.instant("approve");
    }
    if (row.is_employee_approved && !row.is_manager_approved && row.assigned_to == this.AWAITING_MANAGER) {
      suffix = translate.instant("approve");
    }
    if (row.step) {
      prefix = `(${translate.instant(this.getFormStepNameByKey(row.step))})`;
    }
    return status ? `${prefix} ${translate.instant(status_prefix + " " + status)} ${suffix}` : "";
  }
  static addTimestamp(name) {
    name = name.replace(/\s/g, "");
    name = name.replace(/[^a-zA-Z0-9-_\.]/g, "_");
    const timestamp = (/* @__PURE__ */ new Date()).getTime();
    const newName = `${timestamp}_${name}`;
    return newName;
  }
  static getRoleName(key) {
    const role = this.roles.find((status) => status.key === key);
    return role ? role.name : "";
  }
  static sortData(sort, data) {
    if (!sort)
      return [];
    return data.sort((a, b) => {
      const valueA = this.getNestedValue(a, sort.active);
      const valueB = this.getNestedValue(b, sort.active);
      if (valueA == null || valueB == null)
        return 0;
      if (valueA < valueB)
        return sort.direction === "asc" ? -1 : 1;
      if (valueA > valueB)
        return sort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }
  static getNestedValue(obj, field) {
    return field.split(".").reduce((value, key) => value?.[key], obj);
  }
  static getAsset(path) {
    return `${environment.ASSETS_URL}${path}`;
  }
  static getRandomColor() {
    const colors = [
      "#FFD700",
      // Gold
      "#FF5733",
      // Orange Red
      "#4CAF50",
      // Green
      "#2196F3",
      // Blue
      "#9C27B0",
      // Purple
      "#FF9800",
      // Amber
      "#00BCD4",
      // Cyan
      "#673AB7",
      // Deep Purple
      "#E91E63"
      // Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  static badgeColors = [
    { badge: "badge-primary", text: "text-primary" },
    { badge: "badge-skyblue", text: "text-skyblue" },
    { badge: "badge-pink", text: "text-pink" },
    { badge: "badge-success", text: "text-success" },
    { badge: "badge-purple", text: "text-purple" },
    { badge: "badge-warning", text: "text-warning" },
    { badge: "badge-danger", text: "text-danger" },
    { badge: "badge-info", text: "text-info" }
  ];
  static getRandomTransparentBadge() {
    const idx = Math.floor(Math.random() * this.badgeColors.length);
    const base = this.badgeColors[idx];
    let badgeClass = base.badge;
    if (!badgeClass.endsWith("-transparent")) {
      badgeClass += "-transparent";
    }
    return {
      badge: badgeClass,
      text: base.text
    };
  }
};

export {
  AppConstants
};
//# sourceMappingURL=chunk-LHQOL4PU.js.map
