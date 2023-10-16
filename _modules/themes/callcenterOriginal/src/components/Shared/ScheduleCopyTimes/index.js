"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleCopyTimes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));
var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));
var _orderingComponents = require("ordering-components");
var _MdcContentCopy = _interopRequireDefault(require("@meronex/icons/mdc/MdcContentCopy"));
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ScheduleCopyTimes = exports.ScheduleCopyTimes = function ScheduleCopyTimes(props) {
  var disabled = props.disabled,
    open = props.open,
    daysOfWeekIndex = props.daysOfWeekIndex,
    selectedCopyDays = props.selectedCopyDays,
    handleSelectDays = props.handleSelectDays,
    cleanSelectedCopyDays = props.cleanSelectedCopyDays,
    handleApplyScheduleCopyTimes = props.handleApplyScheduleCopyTimes;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var daysOptions = [{
    value: 0,
    content: t('DAY7', 'Sunday')
  }, {
    value: 1,
    content: t('DAY1', 'Monday')
  }, {
    value: 2,
    content: t('DAY2', 'Tuesday')
  }, {
    value: 3,
    content: t('DAY3', 'Wednesday')
  }, {
    value: 4,
    content: t('DAY4', 'Thursday')
  }, {
    value: 5,
    content: t('DAY5', 'Friday')
  }, {
    value: 6,
    content: t('DAY6', 'Saturday')
  }];
  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;
    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) !== null && _popperElement$curren !== void 0 && _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) !== null && _referenceElement$cur !== void 0 && _referenceElement$cur.contains(e.target));
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose();
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };
  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    cleanSelectedCopyDays();
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.HeaderItem, {
    ref: referenceElement,
    disabled: disabled,
    onClick: function onClick() {
      return props.onClick(daysOfWeekIndex);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdcContentCopy.default, null)), open && /*#__PURE__*/_react.default.createElement(_styles2.PopoverBody, {
    ref: popperElement
  }, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('COPY_TIMES_TO', 'Copy times to')), /*#__PURE__*/_react.default.createElement(_styles2.PopoverList, null, daysOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: option.value
    }, /*#__PURE__*/_react.default.createElement(_styles2.CopyItem, {
      disabled: option.value === daysOfWeekIndex,
      isChecked: selectedCopyDays.includes(option.value),
      onClick: function onClick() {
        return handleSelectDays(option.value);
      }
    }, option.value === daysOfWeekIndex || selectedCopyDays.includes(option.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, option.content)));
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      handleApplyScheduleCopyTimes(daysOfWeekIndex);
      props.onClose && props.onClose();
    }
  }, t('APPLY', 'Apply'))));
};