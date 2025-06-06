import {
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  SupabaseContext
} from "./chunk-HDIRTHWB.js";
import {
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ERGQW4H6.js";
import {
  __async
} from "./chunk-XVQ6O2EZ.js";

// src/app/shared/constants/supabase.constants.ts
var SupabaseConstants = class {
  static sortBy(query, sort_by, sort_direction) {
    if (sort_by) {
      if (sort_by.includes(".")) {
        const [foreignTable, field] = sort_by.split(".");
        query = query.order(foreignTable + "(" + field + ")", {
          ascending: sort_direction === "asc" || sort_direction === "ASC"
        });
      } else {
        query = query.order(sort_by, {
          ascending: sort_direction === "asc" || sort_direction === "ASC"
        });
      }
    }
    return query;
  }
};

// src/supabase/repositories/logs.repository.ts
var LogsRepository = class _LogsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "logs", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getAllByEmployeeId(employeeId, fromDate, toDate, sortBy, sortDirection, pageLength, currentPage) {
    return __async(this, null, function* () {
      const start = (currentPage - 1) * pageLength;
      const end = start + pageLength - 1;
      let query = this.client.from(this.tableName).select().eq("employee_id", employeeId);
      if (fromDate) {
        query = query.gte("event_time", fromDate);
      }
      if (toDate) {
        query = query.lte("event_time", toDate);
      }
      query = SupabaseConstants.sortBy(query, sortBy, sortDirection);
      query = query.range(start, end);
      const { data, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAllByEmployeeIdCount(employeeId, fromDate, toDate) {
    return __async(this, null, function* () {
      let query = this.client.from(this.tableName).select("id", { count: "exact", head: true }).eq("employee_id", employeeId);
      if (fromDate) {
        query = query.gte("event_time", fromDate);
      }
      if (toDate) {
        query = query.lte("event_time", toDate);
      }
      const { count, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return count ? count : 0;
    });
  }
  getAllByDate(fromDate, toDate, sortBy, sortDirection, pageLength, currentPage) {
    return __async(this, null, function* () {
      const start = (currentPage - 1) * pageLength;
      const end = start + pageLength - 1;
      let query = this.client.from(this.tableName).select("*, employee(*)");
      if (fromDate) {
        query = query.gte("event_time", fromDate);
      }
      if (toDate) {
        query = query.lte("event_time", toDate);
      }
      if (sortBy && sortDirection) {
        query = query.order(sortBy, { ascending: sortDirection === "asc" });
      }
      query = query.range(start, end);
      const { data, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return data;
    });
  }
  getAllByDateCount(fromDate, toDate) {
    return __async(this, null, function* () {
      let query = this.client.from(this.tableName).select("id", { count: "exact", head: true });
      if (fromDate) {
        query = query.gte("event_time", fromDate);
      }
      if (toDate) {
        query = query.lte("event_time", toDate);
      }
      const { count, error } = yield query;
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find all error: ${error.message}`);
      }
      return count ? count : 0;
    });
  }
  static \u0275fac = function LogsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LogsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LogsRepository, factory: _LogsRepository.\u0275fac, providedIn: "root" });
};

export {
  LogsRepository
};
//# sourceMappingURL=chunk-6X5DL6OJ.js.map
