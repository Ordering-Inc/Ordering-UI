"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileBusinesBasicInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _FaStar = _interopRequireDefault(require("@meronex/icons/fa/FaStar"));
var _GiTronArrow = _interopRequireDefault(require("@meronex/icons/gi/GiTronArrow"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _Buttons = require("../../styles/Buttons");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var types = ['food', 'laundry', 'alcohol', 'groceries'];
var ProfileBusinesBasicInformation = exports.ProfileBusinesBasicInformation = function ProfileBusinesBasicInformation(props) {
  var _theme$images, _business$reviews, _business$today, _business$today2, _business$today3, _business$today4, _business$today5;
  var isSkeleton = props.isSkeleton,
    business = props.business,
    onBusinesClick = props.onBusinesClick;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parseDistance = _useUtils2$.parseDistance,
    optimizeImage = _useUtils2$.optimizeImage;
  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 || (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types;
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    onClick: function onClick() {
      return !isSkeleton && onBusinesClick(business);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessLogo, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 70,
    width: 70
  })), /*#__PURE__*/_react.default.createElement(_styles.MetaInfo, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement("h1", null, business === null || business === void 0 ? void 0 : business.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "primary"
  }, business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total), /*#__PURE__*/_react.default.createElement(_FaStar.default, {
    className: "star"
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "primary"
  }, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary"
  }, /*#__PURE__*/_react.default.createElement(_GiTronArrow.default, null), t('IR', 'IR'))), /*#__PURE__*/_react.default.createElement(_styles.BuinsinessInfo, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.address) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", null, (business === null || business === void 0 || (_business$today = business.today) === null || _business$today === void 0 ? void 0 : _business$today.enabled) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "open"
  }, t('OPEN', 'Open')), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(business === null || business === void 0 || (_business$today2 = business.today) === null || _business$today2 === void 0 || (_business$today2 = _business$today2.lapses[0]) === null || _business$today2 === void 0 || (_business$today2 = _business$today2.open) === null || _business$today2 === void 0 ? void 0 : _business$today2.hour, business === null || business === void 0 || (_business$today3 = business.today) === null || _business$today3 === void 0 || (_business$today3 = _business$today3.lapses[0]) === null || _business$today3 === void 0 || (_business$today3 = _business$today3.open) === null || _business$today3 === void 0 ? void 0 : _business$today3.minute)), /*#__PURE__*/_react.default.createElement("span", null, "-"), /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.getHourMin)(business === null || business === void 0 || (_business$today4 = business.today) === null || _business$today4 === void 0 || (_business$today4 = _business$today4.lapses[0]) === null || _business$today4 === void 0 || (_business$today4 = _business$today4.close) === null || _business$today4 === void 0 ? void 0 : _business$today4.hour, business === null || business === void 0 || (_business$today5 = business.today) === null || _business$today5 === void 0 || (_business$today5 = _business$today5.lapses[0]) === null || _business$today5 === void 0 || (_business$today5 = _business$today5.close) === null || _business$today5 === void 0 ? void 0 : _business$today5.minute)))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, getBusinessType().map(function (type) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "type",
      key: type
    }, type);
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })));
};