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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var layoutOne = 'groceries';

var RenderProductsLayout = function RenderProductsLayout(props) {
  var _configs$use_parent_c, _configs$use_parent_c2, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13, _orderingTheme$theme14, _orderingTheme$theme15, _orderingTheme$theme16, _orderingTheme$theme17, _orderingTheme$theme18, _orderingTheme$theme19, _orderingTheme$theme20, _orderingTheme$theme21, _orderingTheme$theme22, _orderingTheme$theme23, _orderingTheme$theme24, _orderingTheme$theme25, _orderingTheme$theme26, _orderingTheme$theme27, _orderingTheme$theme28, _orderingTheme$theme29, _orderingTheme$theme30, _theme$layouts, _theme$layouts$busine, _theme$layouts$busine2, _theme$layouts$busine3, _businessState$busine, _businessState$busine2, _business$professiona, _business$categories, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _currentCart$products, _business$professiona2, _business$categories2, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _currentCart$products2, _currentCart$products3;

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
      onBusinessClick = props.onBusinessClick;
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

  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
      _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
      orderingTheme = _useOrderingTheme2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCartModal = _useState2[0],
      setisCartModal = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openSearchProducts = _useState4[0],
      setOpenSearchProducts = _useState4[1];

  var isUseParentCategory = ((configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1') && !useKioskApp;
  var BusinessBasicInformationComponent = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.business_view) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.header) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) === null || _orderingTheme$theme$4 === void 0 ? void 0 : (_orderingTheme$theme$5 = _orderingTheme$theme$4.layout) === null || _orderingTheme$theme$5 === void 0 ? void 0 : _orderingTheme$theme$5.type) === 'red' ? _seven.BusinessBasicInformation : (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.business_view) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.header) === null || _orderingTheme$theme5 === void 0 ? void 0 : (_orderingTheme$theme6 = _orderingTheme$theme5.components) === null || _orderingTheme$theme6 === void 0 ? void 0 : (_orderingTheme$theme7 = _orderingTheme$theme6.layout) === null || _orderingTheme$theme7 === void 0 ? void 0 : _orderingTheme$theme7.type) === 'starbucks' ? _six.BusinessBasicInformation : (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme8 = orderingTheme.theme) === null || _orderingTheme$theme8 === void 0 ? void 0 : (_orderingTheme$theme9 = _orderingTheme$theme8.business_view) === null || _orderingTheme$theme9 === void 0 ? void 0 : (_orderingTheme$theme10 = _orderingTheme$theme9.components) === null || _orderingTheme$theme10 === void 0 ? void 0 : (_orderingTheme$theme11 = _orderingTheme$theme10.header) === null || _orderingTheme$theme11 === void 0 ? void 0 : (_orderingTheme$theme12 = _orderingTheme$theme11.components) === null || _orderingTheme$theme12 === void 0 ? void 0 : (_orderingTheme$theme13 = _orderingTheme$theme12.layout) === null || _orderingTheme$theme13 === void 0 ? void 0 : _orderingTheme$theme13.type) === 'old' ? _BusinessBasicInformation2.BusinessBasicInformation : _BusinessBasicInformation.BusinessBasicInformation;
  var SearchProductsComponent = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme14 = orderingTheme.theme) === null || _orderingTheme$theme14 === void 0 ? void 0 : (_orderingTheme$theme15 = _orderingTheme$theme14.business_view) === null || _orderingTheme$theme15 === void 0 ? void 0 : (_orderingTheme$theme16 = _orderingTheme$theme15.components) === null || _orderingTheme$theme16 === void 0 ? void 0 : (_orderingTheme$theme17 = _orderingTheme$theme16.product_search) === null || _orderingTheme$theme17 === void 0 ? void 0 : (_orderingTheme$theme18 = _orderingTheme$theme17.components) === null || _orderingTheme$theme18 === void 0 ? void 0 : (_orderingTheme$theme19 = _orderingTheme$theme18.layout) === null || _orderingTheme$theme19 === void 0 ? void 0 : _orderingTheme$theme19.type) === 'old' ? _SearchProducts2.SearchProducts : (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme20 = orderingTheme.theme) === null || _orderingTheme$theme20 === void 0 ? void 0 : (_orderingTheme$theme21 = _orderingTheme$theme20.business_view) === null || _orderingTheme$theme21 === void 0 ? void 0 : (_orderingTheme$theme22 = _orderingTheme$theme21.components) === null || _orderingTheme$theme22 === void 0 ? void 0 : (_orderingTheme$theme23 = _orderingTheme$theme22.product_search) === null || _orderingTheme$theme23 === void 0 ? void 0 : (_orderingTheme$theme24 = _orderingTheme$theme23.components) === null || _orderingTheme$theme24 === void 0 ? void 0 : (_orderingTheme$theme25 = _orderingTheme$theme24.layout) === null || _orderingTheme$theme25 === void 0 ? void 0 : _orderingTheme$theme25.type) === 'starbucks' ? _SearchProducts3.SearchProducts : null;
  var frontLayout = business === null || business === void 0 ? void 0 : business.front_layout;
  var businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  };
  var showCartOnProductList = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme26 = orderingTheme.theme) !== null && _orderingTheme$theme26 !== void 0 && (_orderingTheme$theme27 = _orderingTheme$theme26.business_view) !== null && _orderingTheme$theme27 !== void 0 && (_orderingTheme$theme28 = _orderingTheme$theme27.components) !== null && _orderingTheme$theme28 !== void 0 && (_orderingTheme$theme29 = _orderingTheme$theme28.cart) !== null && _orderingTheme$theme29 !== void 0 && (_orderingTheme$theme30 = _orderingTheme$theme29.components) !== null && _orderingTheme$theme30 !== void 0 && _orderingTheme$theme30.hidden);
  var showBusinessNearCity = !(theme !== null && theme !== void 0 && (_theme$layouts = theme.layouts) !== null && _theme$layouts !== void 0 && (_theme$layouts$busine = _theme$layouts.business_view) !== null && _theme$layouts$busine !== void 0 && (_theme$layouts$busine2 = _theme$layouts$busine.components) !== null && _theme$layouts$busine2 !== void 0 && (_theme$layouts$busine3 = _theme$layouts$busine2.near_business) !== null && _theme$layouts$busine3 !== void 0 && _theme$layouts$busine3.hidden);
  var BusinessLayoutCategories = businessLayout.layoutOne ? _groceries.BusinessProductsCategories : _BusinessProductsCategories.BusinessProductsCategories;
  var BusinessLayoutProductsList = businessLayout.layoutOne ? _groceries2.BusinessProductsList : _BusinessProductsList.BusinessProductsList;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isLoading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isCartOnProductsList: isCartOnProductsList
  }, showBusinessNearCity && !useKioskApp && /*#__PURE__*/_react.default.createElement(_styles.NearBusiness, null, /*#__PURE__*/_react.default.createElement(_BusinessesListing.BusinessesListing, {
    logosLayout: true,
    propsToFetch: ['id', 'logo', 'location', 'timezone', 'schedule', 'open', 'slug'],
    cityId: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.city_id,
    onBusinessClick: onBusinessClick,
    actualSlug: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.slug
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "bp-list"
  }, !isCustomLayout && !useKioskApp && /*#__PURE__*/_react.default.createElement(BusinessBasicInformationComponent, _extends({}, props, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation,
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    handleChangeSortBy: handleChangeSortBy,
    categoryState: categoryState,
    errorQuantityProducts: errorQuantityProducts,
    sortByValue: sortByValue
  })), !errorQuantityProducts && SearchProductsComponent && !useKioskApp && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(SearchProductsComponent, {
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    sortByValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    },
    businessState: businessState
  }))), !businessLayout.layoutOne && /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, {
    isCustomLayout: isCustomLayout || useKioskApp,
    id: "wrapper-categories"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, {
    showCartOnProductList: showCartOnProductList
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, (business === null || business === void 0 ? void 0 : (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  })), !((business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.FEATURED) || 'Featured')
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
    wContainerStyle: useKioskApp && 'calc(100% - 50px)'
  }), useKioskApp && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearchAbsolute, {
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
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.FEATURED) || 'Featured')
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
  }))), showCartOnProductList && /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContainer, {
    id: "BusinessCartContainer"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContent, {
    maxHeight: window.innerHeight - 100
  }, (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('YOUR_CART', 'Your cart')), /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    useKioskApp: useKioskApp,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: handleCartOpen
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart'))))))), businessLayout.layoutOne && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : (_business$professiona2 = business.professionals) === null || _business$professiona2 === void 0 ? void 0 : _business$professiona2.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, {
    isTop: true
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoriesContainer, null, !((business === null || business === void 0 ? void 0 : (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
    component: "categories",
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    categorySelected: categorySelected,
    onClickCategory: onClickCategory,
    featured: featuredProducts,
    openBusinessInformation: openBusinessInformation,
    openCategories: openCategories,
    business: business,
    currentCart: currentCart
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsList, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.FEATURED) || 'Featured')
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
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0,
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
  }), /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    isSkeleton: true,
    categories: [],
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    useKioskApp: useKioskApp,
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: isLoading,
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
  }, t('YOUR_CART', 'Your cart')), (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    cart: currentCart,
    useKioskApp: useKioskApp,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: handleCartOpen
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart')))))));
};

exports.RenderProductsLayout = RenderProductsLayout;