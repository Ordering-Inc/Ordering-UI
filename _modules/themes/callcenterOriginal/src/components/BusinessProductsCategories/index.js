"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategories = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _AutoScroll = require("../../../../../components/AutoScroll");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessProductsCategoriesUI = function BusinessProductsCategoriesUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    categories = props.categories,
    featured = props.featured,
    openBusinessInformation = props.openBusinessInformation,
    business = props.business,
    handlerClickCategory = props.handlerClickCategory,
    categorySelected = props.categorySelected;
  var _useState = (0, _react.useState)({
      id: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCateogry = _useState2[1];
  var handleChangeCategory = function handleChangeCategory(category) {
    var _document$getElementB, _document$getElementB2;
    if (business !== null && business !== void 0 && business.lazy_load_products_recommended) {
      handlerClickCategory(_objectSpread({}, category));
      return;
    }
    var topPos = 0;
    if (!(category !== null && category !== void 0 && category.id)) topPos = (_document$getElementB = document.getElementById('businessProductList')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetTop;else topPos = (_document$getElementB2 = document.getElementById("category".concat(category.id))) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.offsetTop;
    window.scroll({
      top: topPos - 60,
      left: 0,
      behavior: 'smooth'
    });
  };
  var ProductCategories = function ProductCategories() {
    return categories && categories.length && categories.map(function (category, i) {
      return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
        key: i,
        className: "category ".concat(category.id === 'featured' ? 'special' : ''),
        active: business !== null && business !== void 0 && business.lazy_load_products_recommended ? (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id : (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === category.id,
        onClick: function onClick() {
          return handleChangeCategory(category);
        },
        borderBottom: true
      }, category.name);
    });
  };
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (business !== null && business !== void 0 && business.lazy_load_products_recommended) return;
      var featuredElement = document.getElementById('categoryfeatured');
      var _categories = featuredElement ? _toConsumableArray(categories) : categories.filter(function (category) {
        return category.id !== 'featured';
      });
      (_categories === null || _categories === void 0 ? void 0 : _categories.length) && _categories.forEach(function (category) {
        var _document$getElementB3, _document$getElementB4;
        var windowTop = window.scrollY;
        var topPos = 0;
        if (!(category !== null && category !== void 0 && category.id)) topPos = (_document$getElementB3 = document.getElementById('businessProductList')) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.offsetTop;else topPos = (_document$getElementB4 = document.getElementById("category".concat(category.id))) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.offsetTop;
        if (windowTop >= topPos - 60) {
          setSelectedCateogry(category);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    className: "category-lists",
    featured: featured
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, openBusinessInformation ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ProductCategories, null)) : /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, /*#__PURE__*/_react.default.createElement(ProductCategories, null))) : /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }));
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};
exports.BusinessProductsCategories = BusinessProductsCategories;