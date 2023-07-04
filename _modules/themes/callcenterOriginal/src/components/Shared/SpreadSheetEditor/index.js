"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@handsontable/react");
require("handsontable/dist/handsontable.full.css");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SpreadSheetEditor = function SpreadSheetEditor(props) {
  var headerItems = props.headerItems,
    hotTableData = props.hotTableData,
    handleItemChange = props.handleItemChange,
    handleRowRemove = props.handleRowRemove,
    handleAfterSectionEnd = props.handleAfterSectionEnd,
    handleoutsideClickDeselects = props.handleoutsideClickDeselects,
    isRemove = props.isRemove,
    isUndo = props.isUndo,
    isRedo = props.isRedo,
    isBusinessProducts = props.isBusinessProducts,
    hiddenColumns = props.hiddenColumns;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    cache = _useState2[0],
    setCache = _useState2[1];
  var hotTableRef = (0, _react.useRef)(null);
  var productIdColumnRenderer = function productIdColumnRenderer(instance, td, row, col, prop, value, cellProperties) {
    if (value !== null) {
      td.innerHTML = '<span class="product-id">' + value + '</span>';
    }
  };
  var settings = {
    // data: hotTableData,
    licenseKey: 'non-commercial-and-evaluation',
    autoRowSize: false,
    autoColumnSize: false,
    width: '100%',
    height: '100%',
    minSpareRows: 1,
    stretchH: 'all',
    copyPaste: true,
    undo: true,
    contextMenu: {
      items: _objectSpread(_objectSpread(_objectSpread(_objectSpread({
        copy: {
          name: t('SPREADSHEET_COPY')
        }
      }, isUndo && {
        undo: {
          name: t('SPREADSHEET_UNDO')
        }
      }), isRedo && {
        redo: {
          name: t('SPREADSHEET_REDO')
        }
      }), isRemove && {
        remove_row: {
          name: t('SPREADSHEET_REMOVE_ROW')
        }
      }), {}, {
        paste: {
          key: 'paste',
          name: t('SPREADSHEET_PASTE'),
          disabled: function disabled() {
            return cache;
          },
          callback: function callback() {
            var _hotTableRef$current;
            if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current = hotTableRef.current) !== null && _hotTableRef$current !== void 0 && _hotTableRef$current.hotInstance) {
              var _hotTableRef$current2;
              var hotRef = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current2 = hotTableRef.current) === null || _hotTableRef$current2 === void 0 ? void 0 : _hotTableRef$current2.hotInstance;
              var plugin = hotRef === null || hotRef === void 0 ? void 0 : hotRef.getPlugin('copyPaste');
              // eslint-disable-next-line no-unused-expressions
              hotRef === null || hotRef === void 0 ? void 0 : hotRef.listen();
              plugin.paste(cache);
            }
          }
        }
      })
    },
    cells: function cells(row, column, prop) {
      var _hotTableRef$current3;
      var cellProperties = {
        readOnly: false
      };
      if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current3 = hotTableRef.current) !== null && _hotTableRef$current3 !== void 0 && _hotTableRef$current3.hotInstance && isBusinessProducts) {
        var _hotTableRef$current4;
        var visualColIndex = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current4 = hotTableRef.current) === null || _hotTableRef$current4 === void 0 || (_hotTableRef$current4 = _hotTableRef$current4.hotInstance) === null || _hotTableRef$current4 === void 0 ? void 0 : _hotTableRef$current4.toVisualColumn(column);
        if (visualColIndex === 0) {
          cellProperties.readOnly = true;
        }
      }
      if (isBusinessProducts && column === 0) {
        cellProperties.renderer = productIdColumnRenderer;
      }
      return cellProperties;
    },
    beforeKeyDown: function beforeKeyDown(e) {
      var selectedLast = this.getSelectedLast();
      if (!selectedLast) {
        return;
      }
      var row = selectedLast[0];
      var col = selectedLast[1];
      var celltype = this.getCellMeta(row, col).type;
      if (celltype === 'numeric') {
        var evt = e || window.event;
        var key = evt.charCode || evt.keyCode || 0;

        // check for cut and paste
        var isClipboard = false;
        var ctrlDown = evt.ctrlKey || evt.metaKey; // Mac support

        // Check for Alt+Gr (http://en.wikipedia.org/wiki/AltGr_key)
        if (ctrlDown && evt.altKey) isClipboard = false;
        // Check for ctrl+c, v and x
        else if (ctrlDown && key === 67) isClipboard = true; // c
        else if (ctrlDown && key === 86) isClipboard = true; // v
        else if (ctrlDown && key === 88) isClipboard = true; // x

        var isNumeric = key === 8 || key === 9 || key === 13 || key === 46 || key === 110 || key === 116 || key === 123 || key === 189 || key === 190 || key >= 35 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
        if (!isNumeric && !isClipboard) {
          e.stopImmediatePropagation();
          e.preventDefault();
        }
      }
    }
  };
  var handleAfterChange = function handleAfterChange(changes, accionHanson) {
    var _hotTableRef$current5;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current5 = hotTableRef.current) !== null && _hotTableRef$current5 !== void 0 && _hotTableRef$current5.hotInstance) {
      var _hotTableRef$current6;
      var hotTableObj = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current6 = hotTableRef.current) === null || _hotTableRef$current6 === void 0 ? void 0 : _hotTableRef$current6.hotInstance;
      handleItemChange && handleItemChange(changes, accionHanson, hotTableObj);
    }
  };
  var handleBeforeRemoveRow = function handleBeforeRemoveRow(index, amount, physicalRows) {
    var _hotTableRef$current7;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current7 = hotTableRef.current) !== null && _hotTableRef$current7 !== void 0 && _hotTableRef$current7.hotInstance) {
      var _hotTableRef$current8;
      var hotTableObj = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current8 = hotTableRef.current) === null || _hotTableRef$current8 === void 0 ? void 0 : _hotTableRef$current8.hotInstance;
      handleRowRemove && handleRowRemove(index, amount, physicalRows, hotTableObj);
    }
  };
  var _afterSelectionEnd = function afterSelectionEnd(row, col, row1, col1) {
    var _hotTableRef$current9;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current9 = hotTableRef.current) !== null && _hotTableRef$current9 !== void 0 && _hotTableRef$current9.hotInstance) {
      var _hotTableRef$current10;
      var hotTableObj = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current10 = hotTableRef.current) === null || _hotTableRef$current10 === void 0 ? void 0 : _hotTableRef$current10.hotInstance;
      handleAfterSectionEnd && handleAfterSectionEnd(row, col, row1, col1, hotTableObj);
    }
  };
  var _outsideClickDeselects = function outsideClickDeselects(event) {
    var _hotTableRef$current11;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current11 = hotTableRef.current) !== null && _hotTableRef$current11 !== void 0 && _hotTableRef$current11.hotInstance) {
      handleoutsideClickDeselects && handleoutsideClickDeselects(event);
    }
  };
  (0, _react.useEffect)(function () {
    var _hotTableRef$current12;
    if (typeof hiddenColumns === 'undefined') return;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current12 = hotTableRef.current) !== null && _hotTableRef$current12 !== void 0 && _hotTableRef$current12.hotInstance) {
      var _hotTableRef$current13;
      var hotTableObj = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current13 = hotTableRef.current) === null || _hotTableRef$current13 === void 0 ? void 0 : _hotTableRef$current13.hotInstance;
      hotTableObj.updateSettings({
        hiddenColumns: {
          columns: hiddenColumns
        }
      });
    }
  }, [hiddenColumns]);
  var handleCache = (0, _react.useCallback)(function () {
    var interVal = setInterval(function () {
      if (navigator.clipboard) {
        navigator.clipboard.readText && navigator.clipboard.readText().then(function (clipboardData) {
          if (clipboardData) setCache(clipboardData);
        }).catch(function (e) {});
      }
    }, 500);
    return function () {
      return clearInterval(interVal);
    };
  }, [cache]);
  (0, _react.useEffect)(function () {
    handleCache();
  }, [handleCache]);
  return /*#__PURE__*/_react.default.createElement(_styles.SpreadSheetContainer, null, /*#__PURE__*/_react.default.createElement(_react2.HotTable, {
    data: hotTableData,
    settings: settings,
    ref: hotTableRef,
    beforeRemoveRow: function beforeRemoveRow(index, amount, physicalRows) {
      return handleBeforeRemoveRow(index, amount, physicalRows);
    },
    afterChange: function afterChange(changes, accionHanson) {
      return handleAfterChange(changes, accionHanson);
    },
    afterSelectionEnd: function afterSelectionEnd(row, col, row1, col1) {
      return _afterSelectionEnd(row, col, row1, col1);
    },
    outsideClickDeselects: function outsideClickDeselects(event) {
      return _outsideClickDeselects(event);
    }
  }, headerItems && headerItems.length > 0 && headerItems.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_react2.HotColumn, {
      key: i,
      title: item.title,
      readOnly: item.readOnly,
      data: item.code,
      type: item.type
    });
  })));
};
var _default = /*#__PURE__*/(0, _react.memo)(SpreadSheetEditor);
exports.default = _default;