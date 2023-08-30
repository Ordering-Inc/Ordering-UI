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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var HomeHero = function HomeHero(props) {
  var _theme$homepage_view, _theme$homepage_view2, _HomeLayoutConfig$hom, _HomeLayoutConfig$hom2, _HomeLayoutConfig$hom3, _HomeLayoutConfig$hom4;
  var theme = (0, _styledComponents.useTheme)();
  var HomeLayoutConfig = {
    homepage_settings: {
      layout: (theme === null || theme === void 0 || (_theme$homepage_view = theme.homepage_view) === null || _theme$homepage_view === void 0 || (_theme$homepage_view = _theme$homepage_view.components) === null || _theme$homepage_view === void 0 || (_theme$homepage_view = _theme$homepage_view.layout) === null || _theme$homepage_view === void 0 ? void 0 : _theme$homepage_view.type) || 'original',
      // 'original', 'starbucks', 'red'
      contentPosition: (theme === null || theme === void 0 || (_theme$homepage_view2 = theme.homepage_view) === null || _theme$homepage_view2 === void 0 || (_theme$homepage_view2 = _theme$homepage_view2.components) === null || _theme$homepage_view2 === void 0 || (_theme$homepage_view2 = _theme$homepage_view2.layout) === null || _theme$homepage_view2 === void 0 ? void 0 : _theme$homepage_view2.position) || 'left' // 'left', 'right', top, 'bottom', 'center'
    }
  };

  var layout = (HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom === void 0 ? void 0 : _HomeLayoutConfig$hom.layout) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom2 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom2 === void 0 ? void 0 : _HomeLayoutConfig$hom2.layout : 'original';
  var homeLayoutProps = _objectSpread(_objectSpread({}, props), {}, {
    layout: layout,
    contentPosition: (HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom3 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom3 === void 0 ? void 0 : _HomeLayoutConfig$hom3.contentPosition) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 || (_HomeLayoutConfig$hom4 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom4 === void 0 ? void 0 : _HomeLayoutConfig$hom4.contentPosition : 'left'
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalHomeHero.OriginalHomeHero, homeLayoutProps), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_StarbucksHomeHero.StarbucksHomeHero, homeLayoutProps), layout === 'red' && /*#__PURE__*/_react.default.createElement(_RedHomeHero.RedHomeHero, homeLayoutProps));
};
exports.HomeHero = HomeHero;