"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificBusiness = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _HiLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiLocationMarker"));
var _MdcClockTimeThree = _interopRequireDefault(require("@meronex/icons/mdc/MdcClockTimeThree"));
var _MdcSilverwareForkKnife = _interopRequireDefault(require("@meronex/icons/mdc/MdcSilverwareForkKnife"));
var _FaPhoneAlt = _interopRequireDefault(require("@meronex/icons/fa/FaPhoneAlt"));
var _EnDotSingle = _interopRequireDefault(require("@meronex/icons/en/EnDotSingle"));
var _utils = require("../../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SpecificBusiness = exports.SpecificBusiness = function SpecificBusiness(props) {
  var _theme$images, _business$today, _business$today2, _business$today3, _business$today4;
  var business = props.business;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement("h1", null, business === null || business === void 0 ? void 0 : business.name)), /*#__PURE__*/_react.default.createElement(_styles.BuisinessInfo, null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_HiLocationMarker.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.address))), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_MdcClockTimeThree.default, null), /*#__PURE__*/_react.default.createElement("span", {
    className: "open"
  }, t('OPEN', 'Open')), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(business === null || business === void 0 || (_business$today = business.today) === null || _business$today === void 0 || (_business$today = _business$today.lapses[0]) === null || _business$today === void 0 || (_business$today = _business$today.open) === null || _business$today === void 0 ? void 0 : _business$today.hour, business === null || business === void 0 || (_business$today2 = business.today) === null || _business$today2 === void 0 || (_business$today2 = _business$today2.lapses[0]) === null || _business$today2 === void 0 || (_business$today2 = _business$today2.open) === null || _business$today2 === void 0 ? void 0 : _business$today2.minute)), /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(business === null || business === void 0 || (_business$today3 = business.today) === null || _business$today3 === void 0 || (_business$today3 = _business$today3.lapses[0]) === null || _business$today3 === void 0 || (_business$today3 = _business$today3.close) === null || _business$today3 === void 0 ? void 0 : _business$today3.hour, business === null || business === void 0 || (_business$today4 = business.today) === null || _business$today4 === void 0 || (_business$today4 = _business$today4.lapses[0]) === null || _business$today4 === void 0 || (_business$today4 = _business$today4.close) === null || _business$today4 === void 0 ? void 0 : _business$today4.minute))), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_MdcSilverwareForkKnife.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('MENU', 'Menu')), /*#__PURE__*/_react.default.createElement(_EnDotSingle.default, null), business === null || business === void 0 ? void 0 : business.menus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: menu.id
    }, menu === null || menu === void 0 ? void 0 : menu.name, ",");
  })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement(_FaPhoneAlt.default, null), /*#__PURE__*/_react.default.createElement("span", null, business === null || business === void 0 ? void 0 : business.phone)));
};