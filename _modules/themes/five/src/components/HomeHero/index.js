"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeHero = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _OriginalHomeHero = require("./layouts/OriginalHomeHero");

var _RedHomeHero = require("./layouts/RedHomeHero");

var _StarbucksHomeHero = require("./layouts/StarbucksHomeHero");

var _PFChangsHomeHero = require("./layouts/PFChangsHomeHero");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HomeHero = function HomeHero(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _HomeLayoutConfig$hom, _HomeLayoutConfig$hom2, _HomeLayoutConfig$hom3, _HomeLayoutConfig$hom4;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0]; // *****************************
  // HomeLayout = configs


  var HomeLayoutConfig = {
    homepage_settings: {
      layout: 'pfchangs' || (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.homepage_view) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : _orderingTheme$theme$3.type),
      // 'original', 'starbucks', 'red'
      contentPosition: orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.homepage_view) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.layout) === null || _orderingTheme$theme5 === void 0 ? void 0 : _orderingTheme$theme5.position // 'left', 'right', top, 'bottom', 'center'

    }
  };
  var layout = (HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom === void 0 ? void 0 : _HomeLayoutConfig$hom.layout) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom2 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom2 === void 0 ? void 0 : _HomeLayoutConfig$hom2.layout : 'original'; // *****************************

  var homeLayoutProps = _objectSpread(_objectSpread({}, props), {}, {
    layout: layout,
    contentPosition: (HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom3 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom3 === void 0 ? void 0 : _HomeLayoutConfig$hom3.contentPosition) !== undefined ? HomeLayoutConfig === null || HomeLayoutConfig === void 0 ? void 0 : (_HomeLayoutConfig$hom4 = HomeLayoutConfig.homepage_settings) === null || _HomeLayoutConfig$hom4 === void 0 ? void 0 : _HomeLayoutConfig$hom4.contentPosition : 'left'
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalHomeHero.OriginalHomeHero, homeLayoutProps), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_StarbucksHomeHero.StarbucksHomeHero, homeLayoutProps), layout === 'red' && /*#__PURE__*/_react.default.createElement(_RedHomeHero.RedHomeHero, homeLayoutProps), layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_PFChangsHomeHero.PFChangsHomeHero, homeLayoutProps));
};

exports.HomeHero = HomeHero;