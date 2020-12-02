"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessTypeFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _Tabs = require("../../styles/Tabs");

var _styles = require("./styles");

var _AutoScroll = require("../AutoScroll");

var _styledComponents = require("styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessTypeFilterUI = function BusinessTypeFilterUI(props) {
  var _theme$images, _theme$images$categor, _theme$images2, _theme$images2$catego, _theme$images3, _theme$images3$catego, _theme$images4, _theme$images4$catego, _theme$images5, _theme$images5$catego;

  var businessTypes = props.businessTypes,
      currentTypeSelected = props.currentTypeSelected,
      handleChangeBusinessType = props.handleChangeBusinessType;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  var images = [{
    image: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$categor = _theme$images.categories) === null || _theme$images$categor === void 0 ? void 0 : _theme$images$categor.all,
    value: 'all'
  }, {
    image: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$catego = _theme$images2.categories) === null || _theme$images2$catego === void 0 ? void 0 : _theme$images2$catego.food,
    value: 'food'
  }, {
    image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$catego = _theme$images3.categories) === null || _theme$images3$catego === void 0 ? void 0 : _theme$images3$catego.groceries,
    value: 'groceries'
  }, {
    image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$catego = _theme$images4.categories) === null || _theme$images4$catego === void 0 ? void 0 : _theme$images4$catego.alcohol,
    value: 'alcohol'
  }, {
    image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$catego = _theme$images5.categories) === null || _theme$images5$catego === void 0 ? void 0 : _theme$images5$catego.laundry,
    value: 'laundry'
  }];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      load = _useState2[0],
      setLoad = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.TypeContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, businessTypes && businessTypes.length > 0 && businessTypes.map(function (type, i) {
    return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      className: "category",
      active: type.value === currentTypeSelected,
      key: type.value
    }, !type.value || i > images.length - 1 ? /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
      active: type.value === currentTypeSelected,
      load: load
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: images[0].image,
      alt: "all",
      onLoad: function onLoad() {
        return setLoad(true);
      },
      onClick: function onClick() {
        return handleChangeBusinessType(type.value);
      }
    })) : '', images.map(function (image) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: image.value
      }, image.value === type.value ? /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, {
        active: type.value === currentTypeSelected,
        load: load
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: image.image,
        alt: type.value,
        onClick: function onClick() {
          return handleChangeBusinessType(type.value);
        }
      })) : '');
    }), t("BUSINESS_TYPE_".concat(type.value ? type.value.toUpperCase() : 'ALL'), type.key));
  }))));
};

var BusinessTypeFilter = function BusinessTypeFilter(props) {
  var businessTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessTypeFilterUI,
    businessTypes: props.businessTypes || [{
      key: 'All',
      value: null
    }, {
      key: 'Food',
      value: 'food'
    }, {
      key: 'Alcohol',
      value: 'alcohol'
    }, {
      key: 'Groceries',
      value: 'groceries'
    }, {
      key: 'Laundry',
      value: 'laundry'
    }],
    defaultBusinessType: props.defaultBusinessType || null,
    onChangeBusinessType: props.handleChangeBusinessType
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessTypeFilter, businessTypeFilterProps);
};

exports.BusinessTypeFilter = BusinessTypeFilter;