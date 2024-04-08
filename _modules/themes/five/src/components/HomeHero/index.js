"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeHero = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _OriginalHomeHero = require("./layouts/OriginalHomeHero");
var _RedHomeHero = require("./layouts/RedHomeHero");
var _StarbucksHomeHero = require("./layouts/StarbucksHomeHero");
var _OloHomeHero = require("./franchises/OloHomeHero");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HomeHero = exports.HomeHero = function HomeHero(props) {
  var _theme$my_products, _theme$homepage_view, _theme$homepage_view2, _HomeLayoutConfig$hom, _HomeLayoutConfig$hom2, _theme$my_products2, _HomeLayoutConfig$hom3, _HomeLayoutConfig$hom4;
  var theme = (0, _styledComponents.useTheme)();
  var websiteTheme = theme === null || theme === void 0 || (_theme$my_products = theme.my_products) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.website_theme) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 ? void 0 : _theme$my_products.type;
  var HomeLayoutConfig = {
    homepage_settings: {
      layout: (theme === null || theme === void 0 || (_theme$homepage_view = theme.homepage_view) === null || _theme$homepage_view === void 0 || (_theme$homepage_view = _theme$homepage_view.components) === null || _theme$homepage_view === void 0 || (_theme$homepage_view = _theme$homepage_view.layout) === null || _theme$homepage_view === void 0 ? void 0 : _theme$homepage_view.type) || 'original',
      // 'original', 'starbucks', 'red'
      contentPosition: (theme === null || theme === void 0 || (_theme$homepage_view2 = theme.homepage_view) === null || _theme$homepage_view2 === void 0 || (_theme$homepage_view2 = _theme$homepage_view2.components) === null || _theme$homepage_view2 === void 0 || (_theme$homepage_view2 = _theme$homepage_view2.layout) === null || _theme$homepage_view2 === void 0 ? void 0 : _theme$homepage_view2.position) || 'left' // 'left', 'right', top, 'bottom', 'center'
    }
  };
  var layout = (HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom === void 0 ? void 0 : _HomeLayoutConfig$hom.layout) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom2 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom2 === void 0 ? void 0 : _HomeLayoutConfig$hom2.layout : 'original';
  var franchiseLayout = theme === null || theme === void 0 || (_theme$my_products2 = theme.my_products) === null || _theme$my_products2 === void 0 || (_theme$my_products2 = _theme$my_products2.components) === null || _theme$my_products2 === void 0 || (_theme$my_products2 = _theme$my_products2.website_theme) === null || _theme$my_products2 === void 0 || (_theme$my_products2 = _theme$my_products2.components) === null || _theme$my_products2 === void 0 ? void 0 : _theme$my_products2.franchise_slug;
  var homeLayoutProps = _objectSpread(_objectSpread({}, props), {}, {
    layout: layout,
    contentPosition: (HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom3 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom3 === void 0 ? void 0 : _HomeLayoutConfig$hom3.contentPosition) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom4 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom4 === void 0 ? void 0 : _HomeLayoutConfig$hom4.contentPosition : 'left'
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, websiteTheme === 'franchise' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, franchiseLayout === 'franchise_1' && /*#__PURE__*/_react.default.createElement(_OloHomeHero.OloHomeHero, homeLayoutProps), !franchiseLayout && /*#__PURE__*/_react.default.createElement(_OriginalHomeHero.OriginalHomeHero, homeLayoutProps)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalHomeHero.OriginalHomeHero, homeLayoutProps), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_StarbucksHomeHero.StarbucksHomeHero, homeLayoutProps), layout === 'red' && /*#__PURE__*/_react.default.createElement(_RedHomeHero.RedHomeHero, homeLayoutProps)));
};