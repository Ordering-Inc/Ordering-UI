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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessesListing = function BusinessesListing(props) {
  var _theme$images, _theme$images$general;

  var isShowHero = props.isShowHero;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShowHero && /*#__PURE__*/_react.default.createElement(_styles.BusinessListHero, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.businessesHero
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('PLACE_TO_ENJOY_GOOD_FOOD', 'A place to enjoy good food'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SectionContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('OUR_RESTAURANTS', 'Our restaurants')), /*#__PURE__*/_react.default.createElement(_OurBusinesses.OurBusinesses, props)), /*#__PURE__*/_react.default.createElement(_styles.SectionContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PROMOTIONS', 'Promotions')), /*#__PURE__*/_react.default.createElement(_PromotionsBusinesses.PromotionsBusinesses, props)), /*#__PURE__*/_react.default.createElement(_styles.SectionContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DISCOUNTED_RESTAURANTS', 'Discounted restaurants')), /*#__PURE__*/_react.default.createElement(_DiscountedBusinesses.DiscountedBusinesses, props))));
};

exports.BusinessesListing = BusinessesListing;