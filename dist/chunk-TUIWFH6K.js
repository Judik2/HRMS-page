import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardTitle
} from "./chunk-WFPNNZSU.js";
import {
  FeatureParametersRepository,
  PageFeatureParametersRepository
} from "./chunk-GGIVJW3X.js";
import {
  MatExpansionModule
} from "./chunk-UJWO3UBD.js";
import {
  AppSettingsService,
  FeatureSettingsService
} from "./chunk-N7SNON5D.js";
import "./chunk-PAPOGBTA.js";
import "./chunk-RYUCLK6V.js";
import {
  FeatureRegistry,
  FeaturesRepository,
  PageFeaturesRepository
} from "./chunk-SLFN5ZXT.js";
import {
  FeatureDto
} from "./chunk-G7IEYWLY.js";
import "./chunk-WVSW2X76.js";
import "./chunk-25KMDAIC.js";
import "./chunk-3KR3UNHC.js";
import "./chunk-EQM2SLMA.js";
import "./chunk-S5OCFGQY.js";
import "./chunk-NJHAENO7.js";
import "./chunk-X45EM66I.js";
import "./chunk-BWIOX5TR.js";
import "./chunk-JYDETW4E.js";
import "./chunk-M2EJXGZP.js";
import {
  AppModalComponent,
  DocumentRepository,
  FormInputComponent,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatLine,
  MatLineModule,
  MatOption,
  MatSelect,
  MatSelectModule,
  ModalService,
  setLines
} from "./chunk-CRLS72DG.js";
import "./chunk-4MP457FT.js";
import "./chunk-726REOYR.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-ZKADD55Q.js";
import {
  DefaultValueAccessor,
  Dir,
  Directionality,
  FormArrayName,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIconButton,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  StorageService,
  Validators,
  coerceNumberProperty,
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
import "./chunk-A4AE5KKX.js";
import {
  EventConstants
} from "./chunk-FET6I6E4.js";
import {
  EventService
} from "./chunk-PYCXHYST.js";
import "./chunk-TLWCP54H.js";
import "./chunk-NKEEF4XY.js";
import {
  AppConstants
} from "./chunk-LHQOL4PU.js";
import "./chunk-YW5JDNY2.js";
import {
  BaseRepository,
  LoaderService,
  NgxSpinnerService,
  Router,
  SupabaseContext,
  environment
} from "./chunk-HDIRTHWB.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  InjectionToken,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  ViewEncapsulation,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
  __async
} from "./chunk-XVQ6O2EZ.js";

// node_modules/@angular/material/fesm2022/public-api-c5ab57f5.mjs
var TileCoordinator = class {
  /** Tracking array (see class description). */
  tracker;
  /** Index at which the search for the next gap will start. */
  columnIndex = 0;
  /** The current row index. */
  rowIndex = 0;
  /** Gets the total number of rows occupied by tiles */
  get rowCount() {
    return this.rowIndex + 1;
  }
  /**
   * Gets the total span of rows occupied by tiles.
   * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
   */
  get rowspan() {
    const lastRowMax = Math.max(...this.tracker);
    return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
  }
  /** The computed (row, col) position of each tile (the output). */
  positions;
  /**
   * Updates the tile positions.
   * @param numColumns Amount of columns in the grid.
   * @param tiles Tiles to be positioned.
   */
  update(numColumns, tiles) {
    this.columnIndex = 0;
    this.rowIndex = 0;
    this.tracker = new Array(numColumns);
    this.tracker.fill(0, 0, this.tracker.length);
    this.positions = tiles.map((tile) => this._trackTile(tile));
  }
  /** Calculates the row and col position of a tile. */
  _trackTile(tile) {
    const gapStartIndex = this._findMatchingGap(tile.colspan);
    this._markTilePosition(gapStartIndex, tile);
    this.columnIndex = gapStartIndex + tile.colspan;
    return new TilePosition(this.rowIndex, gapStartIndex);
  }
  /** Finds the next available space large enough to fit the tile. */
  _findMatchingGap(tileCols) {
    if (tileCols > this.tracker.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than grid with cols="${this.tracker.length}".`);
    }
    let gapStartIndex = -1;
    let gapEndIndex = -1;
    do {
      if (this.columnIndex + tileCols > this.tracker.length) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
      if (gapStartIndex == -1) {
        this._nextRow();
        gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
        gapEndIndex = this._findGapEndIndex(gapStartIndex);
        continue;
      }
      gapEndIndex = this._findGapEndIndex(gapStartIndex);
      this.columnIndex = gapStartIndex + 1;
    } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0);
    return Math.max(gapStartIndex, 0);
  }
  /** Move "down" to the next row. */
  _nextRow() {
    this.columnIndex = 0;
    this.rowIndex++;
    for (let i = 0; i < this.tracker.length; i++) {
      this.tracker[i] = Math.max(0, this.tracker[i] - 1);
    }
  }
  /**
   * Finds the end index (exclusive) of a gap given the index from which to start looking.
   * The gap ends when a non-zero value is found.
   */
  _findGapEndIndex(gapStartIndex) {
    for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
      if (this.tracker[i] != 0) {
        return i;
      }
    }
    return this.tracker.length;
  }
  /** Update the tile tracker to account for the given tile in the given space. */
  _markTilePosition(start, tile) {
    for (let i = 0; i < tile.colspan; i++) {
      this.tracker[start + i] = tile.rowspan;
    }
  }
};
var TilePosition = class {
  row;
  col;
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
};

// node_modules/@angular/material/fesm2022/grid-list.mjs
var _c0 = ["*"];
var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
var _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}";
var MAT_GRID_LIST = new InjectionToken("MAT_GRID_LIST");
var MatGridTile = class _MatGridTile {
  _element = inject(ElementRef);
  _gridList = inject(MAT_GRID_LIST, {
    optional: true
  });
  _rowspan = 1;
  _colspan = 1;
  constructor() {
  }
  /** Amount of rows that the grid tile takes up. */
  get rowspan() {
    return this._rowspan;
  }
  set rowspan(value) {
    this._rowspan = Math.round(coerceNumberProperty(value));
  }
  /** Amount of columns that the grid tile takes up. */
  get colspan() {
    return this._colspan;
  }
  set colspan(value) {
    this._colspan = Math.round(coerceNumberProperty(value));
  }
  /**
   * Sets the style of the grid-tile element.  Needs to be set manually to avoid
   * "Changed after checked" errors that would occur with HostBinding.
   */
  _setStyle(property, value) {
    this._element.nativeElement.style[property] = value;
  }
  static \u0275fac = function MatGridTile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridTile)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatGridTile,
    selectors: [["mat-grid-tile"]],
    hostAttrs: [1, "mat-grid-tile"],
    hostVars: 2,
    hostBindings: function MatGridTile_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("rowspan", ctx.rowspan)("colspan", ctx.colspan);
      }
    },
    inputs: {
      rowspan: "rowspan",
      colspan: "colspan"
    },
    exportAs: ["matGridTile"],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    consts: [[1, "mat-grid-tile-content"]],
    template: function MatGridTile_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTile, [{
    type: Component,
    args: [{
      selector: "mat-grid-tile",
      exportAs: "matGridTile",
      host: {
        "class": "mat-grid-tile",
        // Ensures that the "rowspan" and "colspan" input value is reflected in
        // the DOM. This is needed for the grid-tile harness.
        "[attr.rowspan]": "rowspan",
        "[attr.colspan]": "colspan"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '<div class="mat-grid-tile-content">\n  <ng-content></ng-content>\n</div>\n',
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"]
    }]
  }], () => [], {
    rowspan: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }]
  });
})();
var MatGridTileText = class _MatGridTileText {
  _element = inject(ElementRef);
  _lines;
  constructor() {
  }
  ngAfterContentInit() {
    setLines(this._lines, this._element);
  }
  static \u0275fac = function MatGridTileText_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridTileText)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatGridTileText,
    selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
    contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatLine, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lines = _t);
      }
    },
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-grid-list-text"]],
    template: function MatGridTileText_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275projection(2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileText, [{
    type: Component,
    args: [{
      selector: "mat-grid-tile-header, mat-grid-tile-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: '<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content>\n<div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div>\n<ng-content></ng-content>\n'
    }]
  }], () => [], {
    _lines: [{
      type: ContentChildren,
      args: [MatLine, {
        descendants: true
      }]
    }]
  });
})();
var MatGridAvatarCssMatStyler = class _MatGridAvatarCssMatStyler {
  static \u0275fac = function MatGridAvatarCssMatStyler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridAvatarCssMatStyler)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatGridAvatarCssMatStyler,
    selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
    hostAttrs: [1, "mat-grid-avatar"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridAvatarCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "[mat-grid-avatar], [matGridAvatar]",
      host: {
        "class": "mat-grid-avatar"
      }
    }]
  }], null, null);
})();
var MatGridTileHeaderCssMatStyler = class _MatGridTileHeaderCssMatStyler {
  static \u0275fac = function MatGridTileHeaderCssMatStyler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridTileHeaderCssMatStyler)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatGridTileHeaderCssMatStyler,
    selectors: [["mat-grid-tile-header"]],
    hostAttrs: [1, "mat-grid-tile-header"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileHeaderCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "mat-grid-tile-header",
      host: {
        "class": "mat-grid-tile-header"
      }
    }]
  }], null, null);
})();
var MatGridTileFooterCssMatStyler = class _MatGridTileFooterCssMatStyler {
  static \u0275fac = function MatGridTileFooterCssMatStyler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridTileFooterCssMatStyler)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatGridTileFooterCssMatStyler,
    selectors: [["mat-grid-tile-footer"]],
    hostAttrs: [1, "mat-grid-tile-footer"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridTileFooterCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "mat-grid-tile-footer",
      host: {
        "class": "mat-grid-tile-footer"
      }
    }]
  }], null, null);
})();
var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
var TileStyler = class {
  _gutterSize;
  _rows = 0;
  _rowspan = 0;
  _cols;
  _direction;
  /**
   * Adds grid-list layout info once it is available. Cannot be processed in the constructor
   * because these properties haven't been calculated by that point.
   *
   * @param gutterSize Size of the grid's gutter.
   * @param tracker Instance of the TileCoordinator.
   * @param cols Amount of columns in the grid.
   * @param direction Layout direction of the grid.
   */
  init(gutterSize, tracker, cols, direction) {
    this._gutterSize = normalizeUnits(gutterSize);
    this._rows = tracker.rowCount;
    this._rowspan = tracker.rowspan;
    this._cols = cols;
    this._direction = direction;
  }
  /**
   * Computes the amount of space a single 1x1 tile would take up (width or height).
   * Used as a basis for other calculations.
   * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
   * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
   * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
   */
  getBaseTileSize(sizePercent, gutterFraction) {
    return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
  }
  /**
   * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
   * @param offset Number of tiles that have already been rendered in the row/column.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @return Position of the tile as a CSS calc() expression.
   */
  getTilePosition(baseSize, offset) {
    return offset === 0 ? "0" : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
  }
  /**
   * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
   * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
   * @param span The tile's rowspan or colspan.
   * @return Size of the tile as a CSS calc() expression.
   */
  getTileSize(baseSize, span) {
    return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
  }
  /**
   * Sets the style properties to be applied to a tile for the given row and column index.
   * @param tile Tile to which to apply the styling.
   * @param rowIndex Index of the tile's row.
   * @param colIndex Index of the tile's column.
   */
  setStyle(tile, rowIndex, colIndex) {
    let percentWidthPerTile = 100 / this._cols;
    let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
    this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
  }
  /** Sets the horizontal placement of the tile in the list. */
  setColStyles(tile, colIndex, percentWidth, gutterWidth) {
    let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
    let side = this._direction === "rtl" ? "right" : "left";
    tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
    tile._setStyle("width", calc(this.getTileSize(baseTileWidth, tile.colspan)));
  }
  /**
   * Calculates the total size taken up by gutters across one axis of a list.
   */
  getGutterSpan() {
    return `${this._gutterSize} * (${this._rowspan} - 1)`;
  }
  /**
   * Calculates the total size taken up by tiles across one axis of a list.
   * @param tileHeight Height of the tile.
   */
  getTileSpan(tileHeight) {
    return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
  }
  /**
   * Calculates the computed height and returns the correct style property to set.
   * This method can be implemented by each type of TileStyler.
   * @docs-private
   */
  getComputedHeight() {
    return null;
  }
};
var FixedTileStyler = class extends TileStyler {
  fixedRowHeight;
  constructor(fixedRowHeight) {
    super();
    this.fixedRowHeight = fixedRowHeight;
  }
  init(gutterSize, tracker, cols, direction) {
    super.init(gutterSize, tracker, cols, direction);
    this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    if (!cssCalcAllowedValue.test(this.fixedRowHeight) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
    }
  }
  setRowStyles(tile, rowIndex) {
    tile._setStyle("top", this.getTilePosition(this.fixedRowHeight, rowIndex));
    tile._setStyle("height", calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ["height", calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(["height", null]);
    if (list._tiles) {
      list._tiles.forEach((tile) => {
        tile._setStyle("top", null);
        tile._setStyle("height", null);
      });
    }
  }
};
var RatioTileStyler = class extends TileStyler {
  /** Ratio width:height given by user to determine row height. */
  rowHeightRatio;
  baseTileHeight;
  constructor(value) {
    super();
    this._parseRatio(value);
  }
  setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
    let percentHeightPerTile = percentWidth / this.rowHeightRatio;
    this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
    tile._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, rowIndex));
    tile._setStyle("paddingTop", calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
  }
  getComputedHeight() {
    return ["paddingBottom", calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)];
  }
  reset(list) {
    list._setListStyle(["paddingBottom", null]);
    list._tiles.forEach((tile) => {
      tile._setStyle("marginTop", null);
      tile._setStyle("paddingTop", null);
    });
  }
  _parseRatio(value) {
    const ratioParts = value.split(":");
    if (ratioParts.length !== 2 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
    }
    this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
  }
};
var FitTileStyler = class extends TileStyler {
  setRowStyles(tile, rowIndex) {
    let percentHeightPerTile = 100 / this._rowspan;
    let gutterHeightPerTile = (this._rows - 1) / this._rows;
    let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
    tile._setStyle("top", this.getTilePosition(baseTileHeight, rowIndex));
    tile._setStyle("height", calc(this.getTileSize(baseTileHeight, tile.rowspan)));
  }
  reset(list) {
    if (list._tiles) {
      list._tiles.forEach((tile) => {
        tile._setStyle("top", null);
        tile._setStyle("height", null);
      });
    }
  }
};
function calc(exp) {
  return `calc(${exp})`;
}
function normalizeUnits(value) {
  return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}
var MAT_FIT_MODE = "fit";
var MatGridList = class _MatGridList {
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  /** Number of columns being rendered. */
  _cols;
  /** Used for determining the position of each tile in the grid. */
  _tileCoordinator;
  /**
   * Row height value passed in by user. This can be one of three types:
   * - Number value (ex: "100px"):  sets a fixed row height to that value
   * - Ratio value (ex: "4:3"): sets the row height based on width:height ratio
   * - "Fit" mode (ex: "fit"): sets the row height to total height divided by number of rows
   */
  _rowHeight;
  /** The amount of space between tiles. This will be something like '5px' or '2em'. */
  _gutter = "1px";
  /** Sets position and size styles for a tile */
  _tileStyler;
  /** Query list of tiles that are being rendered. */
  _tiles;
  constructor() {
  }
  /** Amount of columns in the grid list. */
  get cols() {
    return this._cols;
  }
  set cols(value) {
    this._cols = Math.max(1, Math.round(coerceNumberProperty(value)));
  }
  /** Size of the grid list's gutter in pixels. */
  get gutterSize() {
    return this._gutter;
  }
  set gutterSize(value) {
    this._gutter = `${value == null ? "" : value}`;
  }
  /** Set internal representation of row height from the user-provided value. */
  get rowHeight() {
    return this._rowHeight;
  }
  set rowHeight(value) {
    const newValue = `${value == null ? "" : value}`;
    if (newValue !== this._rowHeight) {
      this._rowHeight = newValue;
      this._setTileStyler(this._rowHeight);
    }
  }
  ngOnInit() {
    this._checkCols();
    this._checkRowHeight();
  }
  /**
   * The layout calculation is fairly cheap if nothing changes, so there's little cost
   * to run it frequently.
   */
  ngAfterContentChecked() {
    this._layoutTiles();
  }
  /** Throw a friendly error if cols property is missing */
  _checkCols() {
    if (!this.cols && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">`);
    }
  }
  /** Default to equal width:height if rowHeight property is missing */
  _checkRowHeight() {
    if (!this._rowHeight) {
      this._setTileStyler("1:1");
    }
  }
  /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
  _setTileStyler(rowHeight) {
    if (this._tileStyler) {
      this._tileStyler.reset(this);
    }
    if (rowHeight === MAT_FIT_MODE) {
      this._tileStyler = new FitTileStyler();
    } else if (rowHeight && rowHeight.indexOf(":") > -1) {
      this._tileStyler = new RatioTileStyler(rowHeight);
    } else {
      this._tileStyler = new FixedTileStyler(rowHeight);
    }
  }
  /** Computes and applies the size and position for all children grid tiles. */
  _layoutTiles() {
    if (!this._tileCoordinator) {
      this._tileCoordinator = new TileCoordinator();
    }
    const tracker = this._tileCoordinator;
    const tiles = this._tiles.filter((tile) => !tile._gridList || tile._gridList === this);
    const direction = this._dir ? this._dir.value : "ltr";
    this._tileCoordinator.update(this.cols, tiles);
    this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
    tiles.forEach((tile, index) => {
      const pos = tracker.positions[index];
      this._tileStyler.setStyle(tile, pos.row, pos.col);
    });
    this._setListStyle(this._tileStyler.getComputedHeight());
  }
  /** Sets style on the main grid-list element, given the style name and value. */
  _setListStyle(style) {
    if (style) {
      this._element.nativeElement.style[style[0]] = style[1];
    }
  }
  static \u0275fac = function MatGridList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatGridList,
    selectors: [["mat-grid-list"]],
    contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatGridTile, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tiles = _t);
      }
    },
    hostAttrs: [1, "mat-grid-list"],
    hostVars: 1,
    hostBindings: function MatGridList_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("cols", ctx.cols);
      }
    },
    inputs: {
      cols: "cols",
      gutterSize: "gutterSize",
      rowHeight: "rowHeight"
    },
    exportAs: ["matGridList"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_GRID_LIST,
      useExisting: _MatGridList
    }])],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 0,
    template: function MatGridList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div");
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    },
    styles: [_c3],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridList, [{
    type: Component,
    args: [{
      selector: "mat-grid-list",
      exportAs: "matGridList",
      host: {
        "class": "mat-grid-list",
        // Ensures that the "cols" input value is reflected in the DOM. This is
        // needed for the grid-list harness.
        "[attr.cols]": "cols"
      },
      providers: [{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: "<div>\n  <ng-content></ng-content>\n</div>",
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}"]
    }]
  }], () => [], {
    _tiles: [{
      type: ContentChildren,
      args: [MatGridTile, {
        descendants: true
      }]
    }],
    cols: [{
      type: Input
    }],
    gutterSize: [{
      type: Input
    }],
    rowHeight: [{
      type: Input
    }]
  });
})();
var MatGridListModule = class _MatGridListModule {
  static \u0275fac = function MatGridListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatGridListModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatGridListModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatLineModule, MatCommonModule, MatLineModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatGridListModule, [{
    type: NgModule,
    args: [{
      imports: [MatLineModule, MatCommonModule, MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
      exports: [MatGridList, MatGridTile, MatGridTileText, MatLineModule, MatCommonModule, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
    }]
  }], null, null);
})();

// src/supabase/repositories/feature-settings.repository.ts
var FeatureSettingsRepository = class _FeatureSettingsRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feature_settings", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  getByIdWithFeatures(id) {
    return __async(this, null, function* () {
      const { data, error } = yield this.client.from(this.tableName).select("*, feature_settings_features(*)").eq("id", id).single();
      if (error) {
        this.spinner.hide();
        this.loaderService.hide();
        throw new Error(`Find by ID error: ${error.message}`);
      }
      return data;
    });
  }
  static \u0275fac = function FeatureSettingsRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureSettingsRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureSettingsRepository, factory: _FeatureSettingsRepository.\u0275fac, providedIn: "root" });
};

// src/supabase/repositories/feature-settings-features.repository.ts
var FeatureSettingsFeaturesRepository = class _FeatureSettingsFeaturesRepository extends BaseRepository {
  supabaseService;
  spinner;
  loaderService;
  constructor(supabaseService, spinner, loaderService) {
    super(supabaseService, "feature_settings_features", spinner, loaderService);
    this.supabaseService = supabaseService;
    this.spinner = spinner;
    this.loaderService = loaderService;
  }
  static \u0275fac = function FeatureSettingsFeaturesRepository_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureSettingsFeaturesRepository)(\u0275\u0275inject(SupabaseContext), \u0275\u0275inject(NgxSpinnerService), \u0275\u0275inject(LoaderService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureSettingsFeaturesRepository, factory: _FeatureSettingsFeaturesRepository.\u0275fac, providedIn: "root" });
};

// src/app/admin/app-settings/features-settings/features-settings.component.ts
var _c02 = ["newFeatureModal"];
function FeaturesSettingsComponent_mat_card_9_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function FeaturesSettingsComponent_mat_card_9_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const feature_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onBuyClick(feature_r3));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add_shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Buy ");
    \u0275\u0275elementEnd();
  }
}
function FeaturesSettingsComponent_mat_card_9_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Connected ");
    \u0275\u0275elementEnd();
  }
}
function FeaturesSettingsComponent_mat_card_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "mat-card-header")(3, "mat-card-title");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-card-actions")(14, "button", 12);
    \u0275\u0275listener("click", function FeaturesSettingsComponent_mat_card_9_Template_button_click_14_listener() {
      const feature_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.showEditFeatureForm(feature_r3));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, FeaturesSettingsComponent_mat_card_9_button_18_Template, 4, 0, "button", 13)(19, FeaturesSettingsComponent_mat_card_9_span_19_Template, 4, 0, "span", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", feature_r3.preview_url ? ctx_r3.getFeaturePreview(feature_r3.preview_url) : ctx_r3.appConstants.getAsset("assets/images/noimage.jpeg"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r3.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("$", feature_r3.price, "");
    \u0275\u0275advance();
    \u0275\u0275classProp("active", feature_r3.status === "active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r3.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !feature_r3.isConnected);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", feature_r3.isConnected);
  }
}
function FeaturesSettingsComponent_ng_template_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r3.getFeaturePreview((tmp_3_0 = ctx_r3.featureForm.get("preview_url")) == null ? null : tmp_3_0.value), \u0275\u0275sanitizeUrl);
  }
}
function FeaturesSettingsComponent_ng_template_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "app-form-input", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const input_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("settings", input_r7)("formControlName", input_r7.formControlName);
  }
}
function FeaturesSettingsComponent_ng_template_10_div_14_mat_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r9 = ctx.$implicit;
    \u0275\u0275property("value", type_r9.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r9.label, " ");
  }
}
function FeaturesSettingsComponent_ng_template_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "mat-form-field", 32)(4, "mat-label");
    \u0275\u0275text(5, "Parameter Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 31)(8, "mat-form-field", 32)(9, "mat-label");
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 34);
    \u0275\u0275template(12, FeaturesSettingsComponent_ng_template_10_div_14_mat_option_12_Template, 2, 2, "mat-option", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 36)(14, "mat-form-field", 32)(15, "mat-label");
    \u0275\u0275text(16, "Required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-select", 37)(18, "mat-option", 38);
    \u0275\u0275text(19, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-option", 38);
    \u0275\u0275text(21, "No");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 39)(23, "button", 40);
    \u0275\u0275listener("click", function FeaturesSettingsComponent_ng_template_10_div_14_Template_button_click_23_listener() {
      const i_r10 = \u0275\u0275restoreView(_r8).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeParameter(i_r10));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r10);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r3.parameterTypes);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function FeaturesSettingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "form", 17)(2, "div", 18);
    \u0275\u0275template(3, FeaturesSettingsComponent_ng_template_10_div_3_Template, 2, 1, "div", 19)(4, FeaturesSettingsComponent_ng_template_10_div_4_Template, 2, 2, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "div", 22)(7, "h3");
    \u0275\u0275text(8, "Parameters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function FeaturesSettingsComponent_ng_template_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addParameter());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add Parameter ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 24);
    \u0275\u0275template(14, FeaturesSettingsComponent_ng_template_10_div_14_Template, 26, 4, "div", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r3.featureForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r3.featureForm.get("preview_url")) == null ? null : tmp_3_0.value);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.formInputs);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngForOf", ctx_r3.parameters.controls);
  }
}
var FeaturesSettingsComponent = class _FeaturesSettingsComponent {
  router;
  appSettingsService;
  featureSettingsRepository;
  featureSettingsFeatureRepository;
  featuresRepository;
  featureParametersRepository;
  pageFeaturesRepository;
  pageFeatureParametersRepository;
  spinner;
  loaderService;
  modalService;
  formBuilder;
  storageService;
  documentRepository;
  featureSettingsService;
  eventService;
  newFeatureModal = null;
  dialogRef = null;
  features;
  feature_settings;
  featureForm;
  isEditing = false;
  editingFeatureId;
  componentOptionsSubject = new BehaviorSubject([]);
  appConstants = AppConstants;
  parameterTypes = [
    { value: "string", label: "Text" },
    { value: "number", label: "Number" },
    { value: "boolean", label: "Boolean" },
    { value: "date", label: "Date" }
  ];
  formInputs = [
    {
      type: "file",
      label: "Feature Image",
      formFieldClass: "col-12",
      formControlName: "preview_id",
      id: "feature-preview",
      appearance: "outline",
      additional: {
        documentType: "feature-preview",
        documentName: (file) => `feature_preview_${AppConstants.addTimestamp(file.name)}`
      }
    },
    {
      type: "text",
      label: "Feature Name",
      formFieldClass: "col-12",
      formControlName: "name",
      id: "feature-name",
      appearance: "outline",
      additional: {
        validators: [Validators.required]
      }
    },
    {
      type: "select",
      label: "Component",
      formFieldClass: "col-12",
      formControlName: "component_name",
      id: "component-name",
      appearance: "outline",
      additional: {
        validators: [Validators.required]
      },
      options: this.componentOptionsSubject.asObservable()
    },
    {
      type: "textarea",
      label: "Description",
      formFieldClass: "col-12",
      formControlName: "description",
      id: "description",
      appearance: "outline",
      additional: { rows: 3 }
    },
    {
      type: "number",
      label: "Price",
      formControlName: "price",
      id: "price",
      appearance: "outline",
      additional: {
        validators: [Validators.min(0)]
      }
    },
    {
      type: "select",
      label: "Status",
      formFieldClass: "col-12",
      formControlName: "status",
      id: "status",
      appearance: "outline",
      additional: {
        validators: [Validators.required]
      },
      options: of([
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" }
      ])
    }
  ];
  constructor(router, appSettingsService, featureSettingsRepository, featureSettingsFeatureRepository, featuresRepository, featureParametersRepository, pageFeaturesRepository, pageFeatureParametersRepository, spinner, loaderService, modalService, formBuilder, storageService, documentRepository, featureSettingsService, eventService) {
    this.router = router;
    this.appSettingsService = appSettingsService;
    this.featureSettingsRepository = featureSettingsRepository;
    this.featureSettingsFeatureRepository = featureSettingsFeatureRepository;
    this.featuresRepository = featuresRepository;
    this.featureParametersRepository = featureParametersRepository;
    this.pageFeaturesRepository = pageFeaturesRepository;
    this.pageFeatureParametersRepository = pageFeatureParametersRepository;
    this.spinner = spinner;
    this.loaderService = loaderService;
    this.modalService = modalService;
    this.formBuilder = formBuilder;
    this.storageService = storageService;
    this.documentRepository = documentRepository;
    this.featureSettingsService = featureSettingsService;
    this.eventService = eventService;
    this.featureForm = this.formBuilder.group({
      name: ["", Validators.required],
      component_name: ["", Validators.required],
      description: [""],
      price: [0, Validators.min(0)],
      status: ["active", Validators.required],
      preview_id: [""],
      preview_url: [""],
      parameters: this.formBuilder.array([])
    });
  }
  // Helper methods for parameters FormArray
  get parameters() {
    return this.featureForm.get("parameters");
  }
  newParameter() {
    return this.formBuilder.group({
      name: ["", Validators.required],
      type: ["string", Validators.required],
      required: [false]
    });
  }
  addParameter() {
    this.parameters.push(this.newParameter());
  }
  removeParameter(index) {
    this.parameters.removeAt(index);
  }
  ngOnInit() {
    this.updateComponentOptions();
    this.initConnectedFeatures();
    this.featureForm.get("preview_id")?.valueChanges.subscribe((value) => {
      if (!value) {
        this.featureForm.patchValue({ preview_url: null });
        return;
      }
      this.documentRepository.getById(value).then((document) => {
        if (document) {
          this.featureForm.patchValue({ preview_url: document.path });
        }
      });
    });
  }
  updateComponentOptions() {
    const options = FeatureRegistry.getAllFeatures().map((name) => ({
      value: name,
      label: name
    }));
    this.componentOptionsSubject.next(options);
  }
  initFeatures() {
    this.featuresRepository.getAll().then((features) => {
      this.features = features.map((x) => {
        let newFeature = new FeatureDto(x);
        newFeature.isConnected = this.feature_settings?.feature_settings_features?.some((y) => y.feature_id == x.id) || false;
        return newFeature;
      });
    });
  }
  initConnectedFeatures() {
    this.featureSettingsService.featureSettingsSubject.subscribe((feature_settings) => {
      if (!feature_settings)
        return;
      this.feature_settings = feature_settings;
      if (feature_settings.id) {
        this.initFeatures();
      } else {
        this.featureSettingsRepository.create({}).then((result) => {
          this.feature_settings = result[0];
          if (this.feature_settings) {
            let appSettings = this.appSettingsService.getAppSettings();
            appSettings.feature_settings_id = this.feature_settings.id;
            this.appSettingsService.updateAppSettings(appSettings);
            this.initFeatures();
          }
        });
      }
    });
  }
  onBuyClick(feature) {
    let connection = {
      feature_id: feature.id,
      feature_settings_id: this.feature_settings?.id
    };
    this.featureSettingsFeatureRepository.create(connection).then(() => {
      this.initConnectedFeatures();
    });
  }
  showNewFeatureForm() {
    this.isEditing = false;
    this.editingFeatureId = void 0;
    this.resetFeatureForm();
    this.openModal();
  }
  showEditFeatureForm(feature) {
    this.isEditing = true;
    this.editingFeatureId = feature.id;
    this.featureForm.patchValue({
      name: feature.name,
      component_name: feature.component_name,
      description: feature.description,
      price: feature.price,
      status: feature.status,
      preview_url: feature.preview_url
    });
    if (feature.id) {
      this.featureParametersRepository.getByFeatureId(feature.id).then((parameters) => {
        this.parameters.clear();
        parameters.forEach((param) => {
          this.parameters.push(this.formBuilder.group({
            name: [param.name, Validators.required],
            type: [param.type, Validators.required],
            required: [param.required]
          }));
        });
      });
    }
    this.openModal();
  }
  updatePageFeatureParameters(featureId, parameters) {
    return __async(this, null, function* () {
      try {
        const pageFeatures = yield this.pageFeaturesRepository.getByFeatureId(featureId);
        for (const pageFeature of pageFeatures) {
          if (!pageFeature.id)
            continue;
          for (const param of parameters) {
            yield this.pageFeatureParametersRepository.upsertParameter(pageFeature.id, param.name, null);
          }
        }
      } catch (error) {
        console.error("Error updating page feature parameters:", error);
        throw error;
      }
    });
  }
  createOrUpdateFeature() {
    return __async(this, null, function* () {
      if (this.featureForm.valid) {
        try {
          this.loaderService.show();
          const formData = this.featureForm.value;
          const featureData = {
            name: formData.name,
            component_name: formData.component_name,
            description: formData.description,
            price: formData.price,
            status: formData.status,
            preview_url: formData.preview_url
          };
          let featureId;
          let eventType = "";
          if (this.isEditing && this.editingFeatureId) {
            const result = yield this.featuresRepository.update(this.editingFeatureId, featureData);
            featureId = this.editingFeatureId;
            eventType = EventConstants.FEATURE_UPDATED;
          } else {
            const result = yield this.featuresRepository.create(featureData);
            featureId = result[0].id;
            eventType = EventConstants.FEATURE_CREATED;
          }
          const parameters = this.parameters.value;
          if (parameters && parameters.length > 0) {
            if (this.isEditing) {
              yield this.featureParametersRepository.deleteByFeatureId(featureId);
            }
            for (const param of parameters) {
              yield this.featureParametersRepository.create({
                feature_id: featureId,
                name: param.name,
                type: param.type,
                required: param.required
              });
            }
          }
          this.closeModal();
          this.resetFeatureForm();
          this.initFeatures();
          this.eventService.next(eventType, { id: featureId, data: featureData, parameters });
        } catch (error) {
          this.eventService.next(EventConstants.FEATURE_CREATE_OR_UPDATE_ERROR, { error });
          console.error("Error creating/updating feature:", error);
        } finally {
          this.loaderService.hide();
        }
      }
    });
  }
  onDeleteFeature(featureId) {
    return __async(this, null, function* () {
      try {
        yield this.featuresRepository.delete(featureId);
        this.initFeatures();
        this.eventService.next(EventConstants.FEATURE_DELETED, { id: featureId });
      } catch (error) {
        this.eventService.next(EventConstants.FEATURE_DELETE_ERROR, { id: featureId, error });
        console.error("Error deleting feature:", error);
      }
    });
  }
  resetFeatureForm() {
    this.featureForm.reset({
      name: "",
      component_name: "",
      description: "",
      price: 0,
      status: "active",
      preview_id: "",
      preview_url: ""
    });
    this.parameters.clear();
  }
  getFeaturePreview(preview_url) {
    return environment.FILES_PATH + "feature-preview/" + preview_url;
  }
  openModal(item = null) {
    if (item) {
      this.featureForm.patchValue(item);
    }
    this.dialogRef = this.modalService.show(AppModalComponent, {
      data: {
        title: "Feature",
        template: this.newFeatureModal
      }
    });
    this.dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.createOrUpdateFeature();
      }
    });
  }
  closeModal() {
    this.dialogRef?.close();
    this.resetFeatureForm();
  }
  static \u0275fac = function FeaturesSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesSettingsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AppSettingsService), \u0275\u0275directiveInject(FeatureSettingsRepository), \u0275\u0275directiveInject(FeatureSettingsFeaturesRepository), \u0275\u0275directiveInject(FeaturesRepository), \u0275\u0275directiveInject(FeatureParametersRepository), \u0275\u0275directiveInject(PageFeaturesRepository), \u0275\u0275directiveInject(PageFeatureParametersRepository), \u0275\u0275directiveInject(NgxSpinnerService), \u0275\u0275directiveInject(LoaderService), \u0275\u0275directiveInject(ModalService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(StorageService), \u0275\u0275directiveInject(DocumentRepository), \u0275\u0275directiveInject(FeatureSettingsService), \u0275\u0275directiveInject(EventService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesSettingsComponent, selectors: [["app-features-settings"]], viewQuery: function FeaturesSettingsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.newFeatureModal = _t.first);
    }
  }, decls: 12, vars: 1, consts: [["newFeatureModal", ""], [1, "container-fluid"], [1, "features-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "features-grid"], ["class", "feature-card", 4, "ngFor", "ngForOf"], [1, "feature-card"], ["mat-card-image", "", "alt", "Feature preview", 3, "src"], [1, "feature-description"], [1, "feature-details"], [1, "price"], [1, "feature-status"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "connected-badge", 4, "ngIf"], [1, "connected-badge"], [1, "modal-body"], [1, "row", 3, "formGroup"], [1, "row", "col-6"], [4, "ngIf"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "parameters-section", "col-6"], [1, "parameters-header"], ["mat-button", "", "color", "primary", "type", "button", 3, "click"], ["formArrayName", "parameters"], ["class", "parameter-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], ["alt", "Feature Preview", 1, "preview-image", 3, "src"], [1, "col-md-6"], [3, "settings", "formControlName"], [1, "parameter-item", 3, "formGroupName"], [1, "row"], [1, "col-md-4"], ["dir", "rtl", "appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Enter parameter name"], ["formControlName", "type"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["formControlName", "required"], [3, "value"], [1, "col-md-1", "parameter-actions"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"]], template: function FeaturesSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
      \u0275\u0275text(3, "Features Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 3);
      \u0275\u0275listener("click", function FeaturesSettingsComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showNewFeatureForm());
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Add New Feature ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275template(9, FeaturesSettingsComponent_mat_card_9_Template, 20, 9, "mat-card", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, FeaturesSettingsComponent_ng_template_10_Template, 15, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.features);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardTitle,
    Dir,
    MatGridListModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatExpansionModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    ReactiveFormsModule,
    FormGroupDirective,
    FormControlName,
    FormGroupName,
    FormArrayName,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatIconModule,
    MatIcon,
    FormInputComponent
  ], styles: ["\n\n.features-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  background: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.features-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.feature-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  transition: transform 0.2s, box-shadow 0.2s;\n  background: white;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n}\n.feature-card[_ngcontent-%COMP%]   .mat-mdc-card-image[_ngcontent-%COMP%] {\n  height: 200px;\n  object-fit: cover;\n  object-position: center;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0 16px;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin: 0 0 8px 0;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 16px;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-details[_ngcontent-%COMP%]   .component-name[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-details[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #2196f3;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 0.875rem;\n  text-transform: capitalize;\n  background: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .feature-status.active[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 16px;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button.connected[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n}\n.feature-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button.connected[_ngcontent-%COMP%]:disabled {\n  background-color: #a5d6a7;\n}\n.feature-card[_ngcontent-%COMP%]   .connected-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: #4caf50;\n}\n.feature-card[_ngcontent-%COMP%]   .connected-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.new-feature-form[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  margin-bottom: 20px;\n}\nmat-grid-tile[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.preview-image-container[_ngcontent-%COMP%] {\n  margin: -1rem -1rem 1rem;\n  background: #f5f5f5;\n  padding: 1rem;\n  text-align: center;\n}\n.preview-image-container[_ngcontent-%COMP%]   .preview-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 300px;\n  object-fit: contain;\n  border-radius: 8px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  font-weight: 500;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0 -0.5rem;\n}\n.modal-body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  margin-bottom: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #eee;\n}\n.parameters-section[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f8f9fa;\n  border-radius: 8px;\n  max-height: 1000px;\n  overflow-y: auto;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameters-header[_ngcontent-%COMP%] {\n  position: sticky;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameters-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.25rem;\n  font-weight: 500;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n}\n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0 -0.5rem;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%], \n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%], \n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-1[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.parameters-section[_ngcontent-%COMP%]   .parameter-item[_ngcontent-%COMP%]   button[color=warn][_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.parameter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n/*# sourceMappingURL=features-settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesSettingsComponent, { className: "FeaturesSettingsComponent", filePath: "src/app/admin/app-settings/features-settings/features-settings.component.ts", lineNumber: 63 });
})();
export {
  FeaturesSettingsComponent
};
//# sourceMappingURL=chunk-TUIWFH6K.js.map
