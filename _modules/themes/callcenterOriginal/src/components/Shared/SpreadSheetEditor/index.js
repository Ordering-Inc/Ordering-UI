"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@handsontable/react");
require("handsontable/dist/handsontable.full.css");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
              hotRef === null || hotRef === void 0 || hotRef.listen();
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
      var _hotTableRef$current0;
      var hotTableObj = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current0 = hotTableRef.current) === null || _hotTableRef$current0 === void 0 ? void 0 : _hotTableRef$current0.hotInstance;
      handleAfterSectionEnd && handleAfterSectionEnd(row, col, row1, col1, hotTableObj);
    }
  };
  var _outsideClickDeselects = function outsideClickDeselects(event) {
    var _hotTableRef$current1;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current1 = hotTableRef.current) !== null && _hotTableRef$current1 !== void 0 && _hotTableRef$current1.hotInstance) {
      handleoutsideClickDeselects && handleoutsideClickDeselects(event);
    }
  };
  (0, _react.useEffect)(function () {
    var _hotTableRef$current10;
    if (typeof hiddenColumns === 'undefined') return;
    if (hotTableRef !== null && hotTableRef !== void 0 && (_hotTableRef$current10 = hotTableRef.current) !== null && _hotTableRef$current10 !== void 0 && _hotTableRef$current10.hotInstance) {
      var _hotTableRef$current11;
      var hotTableObj = hotTableRef === null || hotTableRef === void 0 || (_hotTableRef$current11 = hotTableRef.current) === null || _hotTableRef$current11 === void 0 ? void 0 : _hotTableRef$current11.hotInstance;
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
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(SpreadSheetEditor);