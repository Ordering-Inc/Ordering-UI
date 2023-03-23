"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ScheduleCopyTimes = function ScheduleCopyTimes(props) {
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
exports.ScheduleCopyTimes = ScheduleCopyTimes;