"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var BusinessProductsCategories = exports.BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};