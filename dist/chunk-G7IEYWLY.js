import {
  environment
} from "./chunk-HDIRTHWB.js";

// src/supabase/types/feature-parameters.dto.ts
var FeatureParametersRowDto = class {
  created_at;
  feature_id;
  id;
  name;
  required;
  type;
  updated_at;
  constructor(param = null) {
    if (param) {
      this.created_at = param.created_at;
      this.feature_id = param.feature_id;
      this.id = param.id;
      this.name = param.name;
      this.required = param.required;
      this.type = param.type;
      this.updated_at = param.updated_at;
    }
  }
};

// src/supabase/types/features.dto.ts
var FeaturesRowDto = class {
  component_name;
  description;
  id;
  name;
  preview_url;
  price;
  status;
  constructor(param = null) {
    if (param) {
      this.component_name = param.component_name;
      this.description = param.description;
      this.id = param.id;
      this.name = param.name;
      this.preview_url = param.preview_url;
      this.price = param.price;
      this.status = param.status;
    }
  }
};

// src/app/shared/models/dto/feature/feature.dto.ts
var FeatureDto = class extends FeaturesRowDto {
  isConnected = false;
  parameters = [];
  constructor(param = null) {
    super(param);
    if (param) {
      this.parameters = param.parameters?.map((param2) => new FeatureParametersRowDto(param2)) || [];
    }
  }
  getFeaturePreview() {
    return environment.FILES_PATH + "feature-preview/" + this.preview_url;
  }
};

export {
  FeatureDto
};
//# sourceMappingURL=chunk-G7IEYWLY.js.map
