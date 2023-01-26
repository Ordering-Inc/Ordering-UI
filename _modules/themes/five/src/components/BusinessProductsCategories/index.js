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
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessProductsCategoriesUI = function BusinessProductsCategoriesUI(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
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
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useState = (0, _react.useState)({
      id: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    selectedCategory = _useState2[0],
    setSelectedCateogry = _useState2[1];
  var scrollTopSpan = 60;
  var isChew = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.header) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.type) === null || _orderingTheme$theme$4 === void 0 ? void 0 : _orderingTheme$theme$4.toLowerCase()) === 'chew';
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
            behavior: 'smooth'
          });
        }
        setSelectedCateogry(category);
        return true;
      }
    });
    var navbar = document.getElementById('category-lists');
    var search = document.getElementById('WrapperSearchAbsolute');
    var wrapperCategories = document.getElementById('wrapper-categories');
    var limit = window.pageYOffset >= (wrapperCategories === null || wrapperCategories === void 0 ? void 0 : wrapperCategories.offsetTop) && window.pageYOffset > 0;
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
    var _Object$values;
    if (typeof useKioskApp === 'undefined') return;
    var styleSheet = document.getElementById('styles').sheet;
    if ((_Object$values = Object.values(styleSheet.cssRules)) !== null && _Object$values !== void 0 && _Object$values.length) {
      styleSheet === null || styleSheet === void 0 ? void 0 : styleSheet.deleteRule(0);
    }
    var disabledCustomWidth = isChew || !useKioskApp;
    var style0 = '.sticky-prod-cat {';
    style0 += 'position: fixed !important;';
    style0 += 'top: 0px !important;';
    style0 += 'left: 0px !important;';
    style0 += 'padding: 5px 5px 0px 5px !important;';
    style0 += "width: calc(100% - ".concat(useKioskApp ? '50px' : windowSize.width >= 993 ? '155px' : '0px', ")!important;");
    !disabledCustomWidth && (style0 += "width: calc(100% - ".concat(useKioskApp ? '50px' : '155px', ") !important;"));
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
    if ((business === null || business === void 0 ? void 0 : (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0 && !useKioskApp) {
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
var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};
exports.BusinessProductsCategories = BusinessProductsCategories;