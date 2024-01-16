"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _OurBusinesses = require("../OurBusinesses");
var _PromotionsBusinesses = require("../PromotionsBusinesses");
var _DiscountedBusinesses = require("../DiscountedBusinesses");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesListing = exports.BusinessesListing = function BusinessesListing(props) {
  var _theme$images;
  var isShowHero = props.isShowHero;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShowHero && /*#__PURE__*/_react.default.createElement(_styles.BusinessListHero, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.businessesHero
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('PLACE_TO_ENJOY_GOOD_FOOD', 'A place to enjoy good food'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SectionContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('OUR_RESTAURANTS', 'Our restaurants')), /*#__PURE__*/_react.default.createElement(_OurBusinesses.OurBusinesses, props)), /*#__PURE__*/_react.default.createElement(_styles.SectionContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement(_PromotionsBusinesses.PromotionsBusinesses, props)), /*#__PURE__*/_react.default.createElement(_styles.SectionContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DISCOUNTED_RESTAURANTS', 'Discounted restaurants')), /*#__PURE__*/_react.default.createElement(_DiscountedBusinesses.DiscountedBusinesses, props))));
};