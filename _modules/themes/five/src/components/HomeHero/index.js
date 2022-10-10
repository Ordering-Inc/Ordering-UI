"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeHero = void 0;
var _react = _interopRequireDefault(require("react"));
var _OriginalHomeHero = require("./layouts/OriginalHomeHero");
var _RedHomeHero = require("./layouts/RedHomeHero");
var _StarbucksHomeHero = require("./layouts/StarbucksHomeHero");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var HomeHero = function HomeHero(props) {
  var _HomeLayoutConfig$hom, _HomeLayoutConfig$hom2, _HomeLayoutConfig$hom3, _HomeLayoutConfig$hom4;
  var HomeLayoutConfig = {
    homepage_settings: {
      layout: 'original',
      // 'original', 'starbucks', 'red'
      contentPosition: 'left' // 'left', 'right', top, 'bottom', 'center'
    }
  };

  var layout = (HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom === void 0 ? void 0 : _HomeLayoutConfig$hom.layout) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom2 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom2 === void 0 ? void 0 : _HomeLayoutConfig$hom2.layout : 'original';
  var homeLayoutProps = _objectSpread(_objectSpread({}, props), {}, {
    layout: layout,
    contentPosition: (HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom3 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom3 === void 0 ? void 0 : _HomeLayoutConfig$hom3.contentPosition) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom4 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom4 === void 0 ? void 0 : _HomeLayoutConfig$hom4.contentPosition : 'left'
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalHomeHero.OriginalHomeHero, homeLayoutProps), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_StarbucksHomeHero.StarbucksHomeHero, homeLayoutProps), layout === 'red' && /*#__PURE__*/_react.default.createElement(_RedHomeHero.RedHomeHero, homeLayoutProps));
};
exports.HomeHero = HomeHero;