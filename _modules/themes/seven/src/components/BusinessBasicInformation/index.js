"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessBasicInformation = exports.BusinessBasicInformation = function BusinessBasicInformation(props) {
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