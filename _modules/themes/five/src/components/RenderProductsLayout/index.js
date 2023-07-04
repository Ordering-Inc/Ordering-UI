"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderProductsLayout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _CgSearch = _interopRequireDefault(require("@meronex/icons/cg/CgSearch"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BusinessBasicInformation = require("../BusinessBasicInformation");
var _seven = require("../../../../seven");
var _six = require("../../../../six");
var _BusinessBasicInformation2 = require("../../../../../components/BusinessBasicInformation");
var _BusinessProductsCategories = require("../BusinessProductsCategories");
var _BusinessProductsList = require("../BusinessProductsList");
var _groceries = require("../BusinessProductsCategories/layouts/groceries");
var _groceries2 = require("../BusinessProductsList/layouts/groceries");
var _Modal = require("../Modal");
var _BusinessesListing = require("../BusinessesListing");
var _Cart = require("../Cart");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
var _SearchProducts = require("../../../../../themes/five/src/components/SearchProducts");
var _SearchProducts2 = require("../../../../../components/RenderProductsLayout/SearchProducts");
var _SearchProducts3 = require("../../../../six/src/components/BusinessProductsListing/SearchProducts");
var _ProfessionalFilter = require("../ProfessionalFilter");
var _styles2 = require("../BusinessBasicInformation/styles");
var _OrderItAgain = require("../OrderItAgain");
var _ProfessionalBusinessFilter = require("../ProfessionalBusinessFilter");
var _PageBanner = require("../PageBanner");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _utils = require("../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var layoutOne = 'groceries';
var RenderProductsLayout = function RenderProductsLayout(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view$, _theme$business_view7, _theme$business_view8, _businessState$busine, _businessState$busine2, _businessState$busine3, _businessState$busine4, _business$previously_, _business$professiona, _business$categories, _theme$defaultLanguag, _theme$defaultLanguag2, _business$professiona2, _business$categories2, _theme$defaultLanguag4, _theme$defaultLanguag5, _business$professiona3, _currentCart$products, _business$professiona4, _business$categories3, _theme$defaultLanguag6, _theme$defaultLanguag7, _business$previously_2, _theme$defaultLanguag8, _theme$defaultLanguag9, _currentCart$products2, _currentCart$products3;
  var errors = props.errors,
    isError = props.isError,
    isLoading = props.isLoading,
    business = props.business,
    categoryId = props.categoryId,
    searchValue = props.searchValue,
    sortByValue = props.sortByValue,
    currentCart = props.currentCart,
    businessState = props.businessState,
    sortByOptions = props.sortByOptions,
    categoryState = props.categoryState,
    categorySelected = props.categorySelected,
    openCategories = props.openCategories,
    openBusinessInformation = props.openBusinessInformation,
    isCartOnProductsList = props.isCartOnProductsList,
    handleChangeSortBy = props.handleChangeSortBy,
    errorQuantityProducts = props.errorQuantityProducts,
    handler = props.handler,
    onClickCategory = props.onClickCategory,
    featuredProducts = props.featuredProducts,
    onProductClick = props.onProductClick,
    handleSearchRedirect = props.handleSearchRedirect,
    handleChangeSearch = props.handleChangeSearch,
    setOpenBusinessInformation = props.setOpenBusinessInformation,
    handleCartOpen = props.handleCartOpen,
    isCustomLayout = props.isCustomLayout,
    useKioskApp = props.useKioskApp,
    setSubcategoriesSelected = props.setSubcategoriesSelected,
    subcategoriesSelected = props.subcategoriesSelected,
    isLazy = props.isLazy,
    handleUpdateProducts = props.handleUpdateProducts,
    handleChangeProfessionalSelected = props.handleChangeProfessionalSelected,
    professionalSelected = props.professionalSelected,
    onBusinessClick = props.onBusinessClick,
    handleChangePriceFilterValues = props.handleChangePriceFilterValues,
    priceFilterValues = props.priceFilterValues,
    handleUpdateProfessionals = props.handleUpdateProfessionals,
    isCustomerMode = props.isCustomerMode;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCartModal = _useState2[0],
    setisCartModal = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openSearchProducts = _useState4[0],
    setOpenSearchProducts = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    categoryClicked = _useState6[0],
    setCategoryClicked = _useState6[1];
  var isUseParentCategory = ((configs === null || configs === void 0 || (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 || (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1') && !useKioskApp;
  var BusinessBasicInformationComponent = (theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.header) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.layout) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.type) === 'red' ? _seven.BusinessBasicInformation : (theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.header) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.layout) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.type) === 'starbucks' ? _six.BusinessBasicInformation : (theme === null || theme === void 0 || (_theme$business_view3 = theme.business_view) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.header) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.layout) === null || _theme$business_view3 === void 0 ? void 0 : _theme$business_view3.type) === 'old' ? _BusinessBasicInformation2.BusinessBasicInformation : _BusinessBasicInformation.BusinessBasicInformation;
  var SearchProductsComponent = (theme === null || theme === void 0 || (_theme$business_view4 = theme.business_view) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.product_search) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.layout) === null || _theme$business_view4 === void 0 ? void 0 : _theme$business_view4.type) === 'old' ? _SearchProducts2.SearchProducts : (theme === null || theme === void 0 || (_theme$business_view5 = theme.business_view) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.product_search) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.layout) === null || _theme$business_view5 === void 0 ? void 0 : _theme$business_view5.type) === 'starbucks' ? _SearchProducts3.SearchProducts : null;
  var frontLayout = business === null || business === void 0 ? void 0 : business.front_layout;
  var businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  };
  var showCartOnProductList = !(theme !== null && theme !== void 0 && (_theme$business_view6 = theme.business_view) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.components) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.cart) !== null && _theme$business_view6 !== void 0 && (_theme$business_view6 = _theme$business_view6.components) !== null && _theme$business_view6 !== void 0 && _theme$business_view6.hidden);
  var hideBusinessNearCity = (_theme$business_view$ = theme === null || theme === void 0 || (_theme$business_view7 = theme.business_view) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.near_business) === null || _theme$business_view7 === void 0 ? void 0 : _theme$business_view7.hidden) !== null && _theme$business_view$ !== void 0 ? _theme$business_view$ : true;
  var hidePreviousOrdered = theme === null || theme === void 0 || (_theme$business_view8 = theme.business_view) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.components) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.products_ordered) === null || _theme$business_view8 === void 0 ? void 0 : _theme$business_view8.hidden;
  var BusinessLayoutCategories = businessLayout.layoutOne ? _groceries.BusinessProductsCategories : _BusinessProductsCategories.BusinessProductsCategories;
  var BusinessLayoutProductsList = businessLayout.layoutOne ? _groceries2.BusinessProductsList : _BusinessProductsList.BusinessProductsList;
  var handleSaveProduct = function handleSaveProduct() {
    if (windowSize.width < 993) {
      return;
    }
    var productContainer = document.getElementsByClassName('bp-list')[0];
    (0, _utils.scrollTo)(productContainer, 500, 1250);
  };
  (0, _react.useEffect)(function () {
    handleSaveProduct();
  }, [categorySelected]);
  (0, _react.useEffect)(function () {
    if (windowSize.width < 993 && categoryClicked && document.getElementsByClassName('category-title')) {
      var extraHeight = 80;
      var top = document.getElementsByClassName('category-title')[0].offsetTop - extraHeight;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    } else {
      window.scroll(0, 0);
    }
  }, [categoryClicked]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isLoading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isCartOnProductsList: isCartOnProductsList
  }, (!hideBusinessNearCity && !useKioskApp || props.forceShowNearBusiness) && !isCustomLayout && /*#__PURE__*/_react.default.createElement(_styles.NearBusiness, null, /*#__PURE__*/_react.default.createElement(_BusinessesListing.BusinessesListing, {
    logosLayout: true,
    propsToFetch: ['id', 'logo', 'location', 'timezone', 'schedule', 'open', 'slug'],
    cityId: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.city_id,
    onBusinessClick: onBusinessClick,
    actualSlug: businessState === null || businessState === void 0 || (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.slug
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "bp-list"
  }, !useKioskApp && /*#__PURE__*/_react.default.createElement(BusinessBasicInformationComponent, _extends({}, props, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation,
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    handleChangeSortBy: handleChangeSortBy,
    categoryState: categoryState,
    errorQuantityProducts: errorQuantityProducts,
    sortByValue: sortByValue,
    categoryClicked: categoryClicked,
    categorySelected: categorySelected,
    setCategoryClicked: setCategoryClicked
  })), (businessState === null || businessState === void 0 || (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.id) && /*#__PURE__*/_react.default.createElement(_styles.PageBannerWrapper, null, /*#__PURE__*/_react.default.createElement(_PageBanner.PageBanner, {
    position: "web_business_page",
    businessId: businessState === null || businessState === void 0 || (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.id,
    isCustomerMode: isCustomerMode
  })), !errorQuantityProducts && SearchProductsComponent && !useKioskApp && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(SearchProductsComponent, {
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    sortByValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    },
    businessState: businessState
  }))), !(business !== null && business !== void 0 && business.loading) && (business === null || business === void 0 || (_business$previously_ = business.previously_products) === null || _business$previously_ === void 0 ? void 0 : _business$previously_.length) > 0 && !hidePreviousOrdered && windowSize.width < 993 && !categoryClicked && /*#__PURE__*/_react.default.createElement(_OrderItAgain.OrderItAgain, {
    onProductClick: onProductClick,
    productList: business === null || business === void 0 ? void 0 : business.previously_products,
    businessId: business === null || business === void 0 ? void 0 : business.id
  }), !businessLayout.layoutOne && /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, {
    isCustomLayout: isCustomLayout || useKioskApp,
    id: "wrapper-categories"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, {
    showCartOnProductList: showCartOnProductList
  }, (business === null || business === void 0 || (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0 && !useKioskApp && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProfessionalBusinessFilter.ProfessionalBusinessFilter, {
    sortByOptions: sortByOptions,
    handleChangeSortBy: handleChangeSortBy,
    sortByValue: sortByValue,
    handleChangeSearch: handleChangeSearch,
    business: business,
    handleChangePriceFilterValues: handleChangePriceFilterValues,
    priceFilterValues: priceFilterValues
  }), /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected,
    handleUpdateProfessionals: handleUpdateProfessionals
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, !((business === null || business === void 0 || (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) === 0 && !categoryId) && !(categorySelected !== null && categorySelected !== void 0 && categorySelected.id) && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    categorySelected: categorySelected,
    onClickCategory: onClickCategory,
    featured: featuredProducts,
    useKioskApp: useKioskApp,
    openBusinessInformation: openBusinessInformation,
    business: business,
    currentCart: currentCart,
    wContainerStyle: useKioskApp && 'calc(100% - 50px)',
    isProfessional: (business === null || business === void 0 || (_business$professiona2 = business.professionals) === null || _business$professiona2 === void 0 ? void 0 : _business$professiona2.length) > 0 && !useKioskApp
  }), !((business === null || business === void 0 || (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.length) === 0 && !categoryId) && (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) && /*#__PURE__*/_react.default.createElement(_styles.BackButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    initialIcon: true,
    onClick: function onClick() {
      var _theme$defaultLanguag3;
      return onClickCategory({
        id: null,
        name: t('ALL', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ALL) || 'All')
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, null), /*#__PURE__*/_react.default.createElement("div", null, t('GO_TO_ALL_CATEGORIES', 'Go to all categories')))), useKioskApp && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearchAbsolute, {
    id: "WrapperSearchAbsolute"
  }, /*#__PURE__*/_react.default.createElement(_styles2.SearchIconWrapper, {
    onClick: function onClick() {
      return setOpenSearchProducts(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_CgSearch.default, null)), openSearchProducts && /*#__PURE__*/_react.default.createElement(_SearchProducts.SearchProducts, _extends({}, props, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation,
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    handleChangeSortBy: handleChangeSortBy,
    categoryState: categoryState,
    errorQuantityProducts: errorQuantityProducts,
    sortByValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    },
    business: businessState.business,
    onClose: function onClose() {
      handleChangeSearch('');
      setOpenSearchProducts(false);
    }
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, {
    id: "businessProductList"
  }, /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsList, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    isLazy: isLazy,
    category: categorySelected,
    categoryState: categoryState,
    useKioskApp: useKioskApp,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    errors: errors,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    featured: featuredProducts,
    searchValue: searchValue,
    isCartOnProductsList: isCartOnProductsList,
    handleClearSearch: handleChangeSearch,
    errorQuantityProducts: errorQuantityProducts,
    business: business,
    currentCart: currentCart,
    setSubcategoriesSelected: setSubcategoriesSelected,
    subcategoriesSelected: subcategoriesSelected,
    onClickCategory: onClickCategory,
    handleUpdateProducts: handleUpdateProducts,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  }))), windowSize.width >= 1000 && windowSize.height >= 600 && showCartOnProductList && /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContainer, {
    isProfessional: (business === null || business === void 0 || (_business$professiona3 = business.professionals) === null || _business$professiona3 === void 0 ? void 0 : _business$professiona3.length) > 0 && !useKioskApp
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContent, {
    maxHeight: window.innerHeight - 100
  }, (currentCart === null || currentCart === void 0 || (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('YOUR_CART', 'Your cart')), /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    useKioskApp: useKioskApp,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: handleCartOpen,
    businessConfigs: business === null || business === void 0 ? void 0 : business.configs
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart'))))))), businessLayout.layoutOne && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 || (_business$professiona4 = business.professionals) === null || _business$professiona4 === void 0 ? void 0 : _business$professiona4.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, {
    isTop: true
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected,
    handleUpdateProfessionals: handleUpdateProfessionals
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoriesContainer, {
    offSticky: true
  }, !((business === null || business === void 0 || (_business$categories3 = business.categories) === null || _business$categories3 === void 0 ? void 0 : _business$categories3.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!categoryClicked || windowSize.width >= 993) && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
    component: "categories",
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    categorySelected: categorySelected,
    onClickCategory: onClickCategory,
    featured: featuredProducts,
    openBusinessInformation: openBusinessInformation,
    openCategories: openCategories,
    business: business,
    currentCart: currentCart,
    useKioskApp: useKioskApp,
    setCategoryClicked: setCategoryClicked
  }))), (categoryClicked || windowSize.width >= 993) && /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapContent, {
    isGroceries: true,
    id: "groceries"
  }, !(business !== null && business !== void 0 && business.loading) && !hidePreviousOrdered && (business === null || business === void 0 || (_business$previously_2 = business.previously_products) === null || _business$previously_2 === void 0 ? void 0 : _business$previously_2.length) > 0 && windowSize.width >= 993 && /*#__PURE__*/_react.default.createElement(_OrderItAgain.OrderItAgain, {
    onProductClick: onProductClick,
    productList: business === null || business === void 0 ? void 0 : business.previously_products,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    isGroceries: true
  }), /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsList, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 || (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 || (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    category: categorySelected,
    onClickCategory: onClickCategory,
    categoriesState: props.categoriesState,
    categoryState: categoryState,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    errors: errors,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    featured: featuredProducts,
    searchValue: searchValue,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 || (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0,
    handleClearSearch: handleChangeSearch,
    errorQuantityProducts: errorQuantityProducts,
    business: business,
    currentCart: currentCart,
    handleUpdateProducts: handleUpdateProducts,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  }))))))), isLoading && !isError && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomLayout && !useKioskApp && /*#__PURE__*/_react.default.createElement(BusinessBasicInformationComponent, {
    isSkeleton: true,
    handler: handler,
    businessState: {
      business: {},
      loading: true
    },
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, {
    isCustomLayout: isCustomLayout || useKioskApp,
    id: "wrapper-categories"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, {
    showCartOnProductList: showCartOnProductList
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    isSkeleton: true,
    categories: [],
    openBusinessInformation: openBusinessInformation,
    isCustomerMode: isCustomerMode
  })))), (categoryClicked || windowSize.width >= 993) && /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    useKioskApp: useKioskApp,
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: isLoading,
    handleUpdateProducts: handleUpdateProducts,
    errorQuantityProducts: errorQuantityProducts
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "40%",
    open: isCartModal,
    onClose: function onClose() {
      return setisCartModal(false);
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContent, {
    isModal: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, {
    style: {
      textAlign: 'center',
      marginTop: '5px'
    }
  }, t('YOUR_CART', 'Your cart')), (currentCart === null || currentCart === void 0 || (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    cart: currentCart,
    useKioskApp: useKioskApp,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: handleCartOpen,
    businessConfigs: business === null || business === void 0 ? void 0 : business.configs
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart')))))));
};
exports.RenderProductsLayout = RenderProductsLayout;