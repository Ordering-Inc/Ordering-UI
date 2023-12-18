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
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessProductsCategoriesUI = function BusinessProductsCategoriesUI(props) {
  var _theme$header, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    categories = props.categories,
    featured = props.featured,
    openBusinessInformation = props.openBusinessInformation,
    business = props.business,
    handlerClickCategory = props.handlerClickCategory,
    categorySelected = props.categorySelected,
    useKioskApp = props.useKioskApp,
    isProfessional = props.isProfessional;
  var theme = (0, _styledComponents.useTheme)();
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)({
      id: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCateogry = _useState2[1];
  var scrollTopSpan = 60;
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var handleChangeCategory = function handleChangeCategory(category) {
    var _document$getElementB, _document$getElementB2;
    var isBlockScroll = window.location.search.includes('category') && window.location.search.includes('product');
    if (business !== null && business !== void 0 && business.lazy_load_products_recommended) {
      handlerClickCategory(_objectSpread({}, category));
      return;
    }
    var topPos = 0;
    if (!(category !== null && category !== void 0 && category.id)) topPos = (_document$getElementB = document.getElementById('businessProductList')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetTop;else topPos = (_document$getElementB2 = document.getElementById("category".concat(category.id))) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.offsetTop;
    if (!isBlockScroll) {
      window.scroll({
        top: topPos - scrollTopSpan,
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  var ProductCategories = function ProductCategories() {
    return categories && categories.length && categories.map(function (category, i) {
      return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
        key: i,
        id: "category-menu".concat((category === null || category === void 0 ? void 0 : category.id) || '-all'),
        className: "category ".concat(category.id === 'featured' ? 'special' : ''),
        active: business !== null && business !== void 0 && business.lazy_load_products_recommended ? (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id : (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === category.id,
        onClick: function onClick() {
          return handleChangeCategory(category);
        },
        borderBottom: true
      }, category.name);
    });
  };
  var handleScroll = function handleScroll() {
    if (business !== null && business !== void 0 && business.lazy_load_products_recommended) return;
    var featuredElement = document.getElementById('categoryfeatured');
    var _categories = featuredElement ? _toConsumableArray(categories) : categories.filter(function (category) {
      return category.id !== 'featured';
    });
    var windowTop = window.scrollY;
    var categoryListsElement = document.getElementById('category-lists');
    var categoryAreaWidth = (categoryListsElement === null || categoryListsElement === void 0 ? void 0 : categoryListsElement.clientWidth) || 0;
    var categoryScrollChange = categoryListsElement === null || categoryListsElement === void 0 ? void 0 : categoryListsElement.scrollLeft;
    var _diff = -50;
    var _moveDiff = 30;
    var _paddDiff = scrollTopSpan + 10;
    (_categories === null || _categories === void 0 ? void 0 : _categories.length) && _categories.some(function (category) {
      var _document$getElementB3, _document$getElementB4, _document$getElementB5;
      var topPos = category !== null && category !== void 0 && category.id ? (_document$getElementB3 = document.getElementById("category".concat(category.id))) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.offsetTop : (_document$getElementB4 = document.getElementById('businessProductList')) === null || _document$getElementB4 === void 0 ? void 0 : _document$getElementB4.offsetTop;
      var HeightOfEle = category !== null && category !== void 0 && category.id ? (_document$getElementB5 = document.getElementById("category".concat(category.id))) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.clientHeight : 0;
      if (windowTop > topPos - _paddDiff && windowTop < topPos + HeightOfEle - _paddDiff && category !== null && category !== void 0 && category.id) {
        var choosedCategory = document.getElementById("category-menu".concat((category === null || category === void 0 ? void 0 : category.id) || '-all'));
        var choosedCategoryLeft = (choosedCategory === null || choosedCategory === void 0 ? void 0 : choosedCategory.offsetLeft) || 0;
        if (choosedCategoryLeft - categoryAreaWidth - categoryScrollChange > _diff || categoryScrollChange - choosedCategoryLeft > 0) {
          var moveAmount = choosedCategoryLeft < 100 ? 0 : choosedCategoryLeft - _moveDiff;
          categoryListsElement.scrollTo({
            top: 0,
            left: moveAmount,
            behavior: 'auto'
          });
        }
        setSelectedCateogry(category);
        return true;
      }
    });
    var navbar = document.getElementById('category-lists');
    var search = document.getElementById('WrapperSearchAbsolute');
    var wrapperCategories = document.getElementById('wrapper-categories');
    var limit;
    if (windowSize.width >= 993) {
      limit = window.pageYOffset >= (wrapperCategories === null || wrapperCategories === void 0 ? void 0 : wrapperCategories.offsetTop) && window.pageYOffset > 0;
    } else {
      limit = window.pageYOffset >= (wrapperCategories === null || wrapperCategories === void 0 ? void 0 : wrapperCategories.offsetTop) - 56 && window.pageYOffset > 0;
    }
    if (limit) {
      var classAdded = navbar.classList.contains('sticky-prod-cat');
      if (!classAdded) {
        navbar && navbar.classList.add('sticky-prod-cat');
        search && search.classList.add('sticky-search');
      }
    } else {
      navbar && navbar.classList.remove('sticky-prod-cat');
      search && search.classList.remove('sticky-search');
    }
  };
  (0, _react.useEffect)(function () {
    var _document$getElementB6, _Object$values;
    var styleSheet = (_document$getElementB6 = document.getElementById('styles')) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.sheet;
    if ((_Object$values = Object.values(styleSheet.cssRules)) !== null && _Object$values !== void 0 && _Object$values.length) {
      styleSheet === null || styleSheet === void 0 || styleSheet.deleteRule(0);
    }
    var disabledCustomWidth = isChew || !useKioskApp;
    var style0 = '.sticky-prod-cat {';
    style0 += 'position: fixed !important;';
    style0 += "top: ".concat(useKioskApp ? '0px' : '56px', " !important;");
    style0 += 'left: 0px !important;';
    style0 += 'z-index: 9999 !important;';
    style0 += 'padding: 5px 5px 0px 20px !important;';
    style0 += 'width: 100% !important;';
    !disabledCustomWidth && (style0 += "width: calc(100% - ".concat(useKioskApp ? '50px' : '0px', ") !important;"));
    style0 += '}';
    var style1 = '.sticky-search {';
    style1 += 'position: fixed !important;';
    style1 += 'top: 0px !important;';
    style1 += 'right: 0% !important;';
    style1 += 'z-index: 9999 !important;';
    style1 += 'width: 50px !important;';
    style1 += "background-color: ".concat(theme.colors.backgroundPage, " !important;");
    style1 += '}';
    styleSheet.insertRule(style0, 0);
    styleSheet.insertRule(style1, 1);
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [useKioskApp, isChew, windowSize.width]);
  (0, _react.useEffect)(function () {
    var _business$professiona;
    if ((business === null || business === void 0 || (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0 && !useKioskApp) {
      var element = document.getElementById('category-lists');
      element.setAttribute('style', 'width: 100% !important');
    }
  }, [business === null || business === void 0 ? void 0 : business.professionals, useKioskApp]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    id: "category-lists",
    className: "category-lists",
    featured: featured,
    w: props.wContainerStyle,
    isProfessional: isProfessional
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