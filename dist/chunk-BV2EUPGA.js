// src/supabase/types/logs.dto.ts
var LogsInsertDto = class {
  description;
  employee_id;
  event_time;
  event_type;
  id;
  constructor(param = null) {
    if (param) {
      this.description = param.description;
      this.employee_id = param.employee_id;
      this.event_time = param.event_time;
      this.event_type = param.event_type;
      this.id = param.id;
    }
  }
};
var LogsRowDto = class {
  description;
  employee_id;
  event_time;
  event_type;
  id;
  constructor(param = null) {
    if (param) {
      this.description = param.description;
      this.employee_id = param.employee_id;
      this.event_time = param.event_time;
      this.event_type = param.event_type;
      this.id = param.id;
    }
  }
};

export {
  LogsInsertDto,
  LogsRowDto
};
//# sourceMappingURL=chunk-BV2EUPGA.js.map
