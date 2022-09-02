"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategories = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _AutoScroll = require("../../../../../../../components/AutoScroll");

var _styles = require("./styles");

var _Tabs = require("../../../../styles/Tabs");

var _pfchangs = require("../../../../styles/Tabs/theme/pfchangs");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessProductsCategoriesUI = function BusinessProductsCategoriesUI(props) {
  var isSkeleton = props.isSkeleton,
      categories = props.categories,
      featured = props.featured,
      openBusinessInformation = props.openBusinessInformation,
      business = props.business,
      handlerClickCategory = props.handlerClickCategory,
      categorySelected = props.categorySelected,
      PFChangsCategoriesLayout = props.PFChangsCategoriesLayout,
      setSubcategorySelected = props.setSubcategorySelected,
      subcategorySelected = props.subcategorySelected,
      subcategoriesLayout = props.subcategoriesLayout;

  var _useState = (0, _react.useState)({
    id: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setSelectedCategory = _useState2[1];

  var theme = (0, _styledComponents.useTheme)();

  var handleChangeCategory = function handleChangeCategory(category) {
    var _document$getElementB, _document$getElementB2;

    var isBlockScroll = window.location.search.includes('category') && window.location.search.includes('product');

    if (business !== null && business !== void 0 && business.lazy_load_products_recommended || PFChangsCategoriesLayout) {
      handlerClickCategory(_objectSpread({}, category));
      return;
    }

    var topPos = 0;
    if (!(category !== null && category !== void 0 && category.id)) topPos = (_document$getElementB = document.getElementById('businessProductList')) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.offsetTop;else topPos = (_document$getElementB2 = document.getElementById("category".concat(category.id))) === null || _document$getElementB2 === void 0 ? void 0 : _document$getElementB2.offsetTop;

    if (!isBlockScroll) {
      window.scroll({
        top: topPos - 60,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  var TabsComponent = function TabsComponent(props) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.pfchangs ? /*#__PURE__*/_react.default.createElement(_pfchangs.Tabs, props, props.children) : /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, props, props.children));
  };

  var TabComponent = function TabComponent(props) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.pfchangs ? /*#__PURE__*/_react.default.createElement(_pfchangs.Tab, props, props.children) : /*#__PURE__*/_react.default.createElement(_Tabs.Tab, props, props.children));
  };

  var Category = function Category(_ref) {
    var _theme$colors, _theme$colors2;

    var category = _ref.category,
        pfchangs = _ref.pfchangs;
    return /*#__PURE__*/_react.default.createElement(TabComponent, {
      className: "category".concat(subcategoriesLayout ? category === null || category === void 0 ? void 0 : category.id : category.id === ' featured' ? ' special' : ''),
      active: subcategoriesLayout ? (subcategorySelected === null || subcategorySelected === void 0 ? void 0 : subcategorySelected.id) === (category === null || category === void 0 ? void 0 : category.id) : business !== null && business !== void 0 && business.lazy_load_products_recommended ? (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id : (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === category.id,
      onClick: function onClick() {
        return handleChangeCategory(category);
      },
      borderBottom: true,
      pfchangs: pfchangs,
      activeColor: (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.gold,
      color: (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.gold
    }, category.name);
  };

  var ProductCategories = function ProductCategories(_ref2) {
    var pfchangs = _ref2.pfchangs;
    return categories && categories.length && categories.map(function (category, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: category === null || category === void 0 ? void 0 : category.id
      }, pfchangs ? /*#__PURE__*/_react.default.createElement(_styles.CategoryPFChangs, {
        active: business !== null && business !== void 0 && business.lazy_load_products_recommended || PFChangsCategoriesLayout ? (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id : (selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.id) === category.id
      }, /*#__PURE__*/_react.default.createElement(Category, {
        category: category,
        pfchangs: true
      }), /*#__PURE__*/_react.default.createElement("span", null)) : /*#__PURE__*/_react.default.createElement(Category, {
        category: category
      }));
    });
  };

  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      if (business !== null && business !== void 0 && business.lazy_load_products_recommended || PFChangsCategoriesLayout) return;
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
          subcategoriesLayout ? setSubcategorySelected(category) : setSelectedCategory(category);
        }
      });
      var navbar = document.getElementById('category-lists');
      var cart = document.getElementById('BusinessCartContainer');
      var search = document.getElementById('WrapperSearchAbsolute');
      var wrapperCategories = document.getElementById('wrapper-categories');
      var styleSheet = document.getElementById('styles').sheet;
      var style0 = '.sticky-prod-cat {';
      style0 += 'position: fixed !important;';
      style0 += 'top: 0 !important;';
      style0 += "width: ".concat(subcategoriesLayout ? '100%' : '65.5%', " !important;");
      style0 += '}';
      var style1 = '.sticky-prod-cart {';
      style1 += 'position: fixed !important;';
      style1 += 'top: 0 !important;';
      style1 += 'right: 2.5% !important;';
      style1 += 'width: 28.5% !important;';
      style1 += '}';
      var style2 = '.sticky-search {';
      style2 += 'position: fixed !important;';
      style2 += 'top: 10px !important;';
      style2 += 'right: 32% !important;';
      style2 += 'height: 50px !important;';
      style2 += 'z-index: 9999 !important;';
      style2 += '}';
      styleSheet.insertRule(style0, 0);
      styleSheet.insertRule(style1, 1);
      styleSheet.insertRule(style2, 2);
      var limit = window.pageYOffset >= (wrapperCategories === null || wrapperCategories === void 0 ? void 0 : wrapperCategories.offsetTop) && window.pageYOffset > 0;

      if (limit) {
        navbar && navbar.classList.add('sticky-prod-cat');
        cart && cart.classList.add('sticky-prod-cart');
        search && search.classList.add('sticky-search');
      } else {
        navbar && navbar.classList.remove('sticky-prod-cat');
        cart && cart.classList.remove('sticky-prod-cart');
        search && search.classList.remove('sticky-search');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CategoriesWrapper, null, PFChangsCategoriesLayout ? /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    pfchangs: true
  }, /*#__PURE__*/_react.default.createElement(TabsComponent, null, /*#__PURE__*/_react.default.createElement(ProductCategories, {
    pfchangs: true
  }))) : /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    id: "category-lists",
    className: "category-lists",
    featured: featured,
    w: props.wContainerStyle,
    pfchangs: true,
    subcategoriesLayout: subcategoriesLayout
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, openBusinessInformation ? /*#__PURE__*/_react.default.createElement(ProductCategories, null) : /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, /*#__PURE__*/_react.default.createElement(ProductCategories, {
    isPfchangsLayout: true
  }))) : /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }));
  })))));
};

var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};

exports.BusinessProductsCategories = BusinessProductsCategories;