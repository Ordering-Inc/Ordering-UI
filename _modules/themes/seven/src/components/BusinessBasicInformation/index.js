"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessBasicInformation = function BusinessBasicInformation(props) {
  var _props$beforeElements, _props$beforeComponen, _business$today, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    businessState = props.businessState;
  var business = businessState.business,
    loading = businessState.loading;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
      minute = _ref.minute;
    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };
    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    isSkeleton: isSkeleton,
    id: "container"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessName, {
    isClosed: !(business !== null && business !== void 0 && business.open)
  }, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), (business === null || business === void 0 || (_business$today = business.today) === null || _business$today === void 0 ? void 0 : _business$today.enabled) && /*#__PURE__*/_react.default.createElement(_styles.ScheduleDate, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleTitle, null, " ", t('TODAY_DATE', "Today's Hours"), ' : ', " "), /*#__PURE__*/_react.default.createElement(_styles.ScheduleTime, null, scheduleFormatted(business.today.lapses[0].open)), /*#__PURE__*/_react.default.createElement(_styles.ScheduleTime, null, " ", ' - '), /*#__PURE__*/_react.default.createElement(_styles.ScheduleTime, null, scheduleFormatted(business.today.lapses[0].close)))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 25
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    isClosed: !(business !== null && business !== void 0 && business.open),
    bgimage: business === null || business === void 0 ? void 0 : business.header
  }), !(business !== null && business !== void 0 && business.open) && /*#__PURE__*/_react.default.createElement(_styles.CloseOverall, null, !isSkeleton && /*#__PURE__*/_react.default.createElement("h1", null, t('CLOSED', 'Closed')))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.BusinessBasicInformation = BusinessBasicInformation;