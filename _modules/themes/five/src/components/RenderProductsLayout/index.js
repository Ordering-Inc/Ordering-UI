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

var _pfchangs = require("../BusinessProductsCategories/layouts/pfchangs");

var _groceries2 = require("../BusinessProductsList/layouts/groceries");

var _pfchangs2 = require("../BusinessProductsList/layouts/pfchangs");

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

var _pfchangs3 = require("../BusinessBasicInformation/layouts/pfchangs");

var _OrderItAgain = require("../OrderItAgain");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var _configs$use_parent_c, _configs$use_parent_c2, _theme$business_view, _theme$business_view$, _theme$business_view$2, _theme$business_view$3, _theme$business_view$4, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _orderingTheme$theme$5, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view$5, _theme$business_view5, _theme$business_view6, _theme$business_view7, _theme$business_view8, _theme$business_view9, _theme$business_view10, _theme$business_view11, _theme$business_view12, _business$categories, _business$categories$, _businessState$busine, _businessState$busine2, _business$professiona, _business$categories2, _theme$defaultLanguag, _theme$defaultLanguag2, _categorySelected$sub, _categorySelected$sub2, _business$professiona2, _business$previously_, _categorySelected$sor, _theme$defaultLanguag3, _theme$defaultLanguag4, _currentCart$products, _business$professiona3, _business$categories3, _theme$defaultLanguag5, _theme$defaultLanguag6, _business$previously_2, _theme$defaultLanguag7, _theme$defaultLanguag8, _currentCart$products2, _currentCart$products3;

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
      pfChangsCategories = props.pfChangsCategories;
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

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      subcategorySelected = _useState6[0],
      setSubcategorySelected = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showGoTopButton = _useState8[0],
      setShowGoTopButton = _useState8[1];

  var isUseParentCategory = ((configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c = configs.use_parent_category) === null || _configs$use_parent_c === void 0 ? void 0 : _configs$use_parent_c.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$use_parent_c2 = configs.use_parent_category) === null || _configs$use_parent_c2 === void 0 ? void 0 : _configs$use_parent_c2.value) === '1') && !useKioskApp;
  var headerType = theme === null || theme === void 0 ? void 0 : (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 ? void 0 : (_theme$business_view$ = _theme$business_view.components) === null || _theme$business_view$ === void 0 ? void 0 : (_theme$business_view$2 = _theme$business_view$.header) === null || _theme$business_view$2 === void 0 ? void 0 : (_theme$business_view$3 = _theme$business_view$2.components) === null || _theme$business_view$3 === void 0 ? void 0 : (_theme$business_view$4 = _theme$business_view$3.layout) === null || _theme$business_view$4 === void 0 ? void 0 : _theme$business_view$4.type;
  var BusinessBasicInformationComponent = headerType === 'red' ? _seven.BusinessBasicInformation : headerType === 'starbucks' ? _six.BusinessBasicInformation : headerType === 'old' ? _BusinessBasicInformation2.BusinessBasicInformation : headerType === 'pfchangs' ? _pfchangs3.BusinessBasicInformationPFChangs : _BusinessBasicInformation.BusinessBasicInformation;
  var SearchProductsComponent = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.business_view) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.product_search) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.components) === null || _orderingTheme$theme$4 === void 0 ? void 0 : (_orderingTheme$theme$5 = _orderingTheme$theme$4.layout) === null || _orderingTheme$theme$5 === void 0 ? void 0 : _orderingTheme$theme$5.type) === 'old' ? _SearchProducts2.SearchProducts : (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme2 = orderingTheme.theme) === null || _orderingTheme$theme2 === void 0 ? void 0 : (_orderingTheme$theme3 = _orderingTheme$theme2.business_view) === null || _orderingTheme$theme3 === void 0 ? void 0 : (_orderingTheme$theme4 = _orderingTheme$theme3.components) === null || _orderingTheme$theme4 === void 0 ? void 0 : (_orderingTheme$theme5 = _orderingTheme$theme4.product_search) === null || _orderingTheme$theme5 === void 0 ? void 0 : (_orderingTheme$theme6 = _orderingTheme$theme5.components) === null || _orderingTheme$theme6 === void 0 ? void 0 : (_orderingTheme$theme7 = _orderingTheme$theme6.layout) === null || _orderingTheme$theme7 === void 0 ? void 0 : _orderingTheme$theme7.type) === 'starbucks' ? _SearchProducts3.SearchProducts : null;
  var frontLayout = business === null || business === void 0 ? void 0 : business.front_layout;
  var businessLayout = {
    layoutOne: frontLayout === layoutOne && isUseParentCategory
  };
  var showCartOnProductList = !(theme !== null && theme !== void 0 && (_theme$business_view2 = theme.business_view) !== null && _theme$business_view2 !== void 0 && (_theme$business_view3 = _theme$business_view2.components) !== null && _theme$business_view3 !== void 0 && (_theme$business_view4 = _theme$business_view3.cart) !== null && _theme$business_view4 !== void 0 && _theme$business_view4.hidden);
  var hideBusinessNearCity = (_theme$business_view$5 = theme === null || theme === void 0 ? void 0 : (_theme$business_view5 = theme.business_view) === null || _theme$business_view5 === void 0 ? void 0 : (_theme$business_view6 = _theme$business_view5.components) === null || _theme$business_view6 === void 0 ? void 0 : (_theme$business_view7 = _theme$business_view6.near_business) === null || _theme$business_view7 === void 0 ? void 0 : _theme$business_view7.hidden) !== null && _theme$business_view$5 !== void 0 ? _theme$business_view$5 : true;
  var categoriesMode = theme === null || theme === void 0 ? void 0 : (_theme$business_view8 = theme.business_view) === null || _theme$business_view8 === void 0 ? void 0 : (_theme$business_view9 = _theme$business_view8.components) === null || _theme$business_view9 === void 0 ? void 0 : (_theme$business_view10 = _theme$business_view9.categories) === null || _theme$business_view10 === void 0 ? void 0 : (_theme$business_view11 = _theme$business_view10.components) === null || _theme$business_view11 === void 0 ? void 0 : (_theme$business_view12 = _theme$business_view11.layout) === null || _theme$business_view12 === void 0 ? void 0 : _theme$business_view12.type;
  var pfchangsSubcategories = business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : (_business$categories$ = _business$categories.filter(function (category) {
    var _category$name, _category$name$toLowe, _category$name2, _category$name2$toLow;

    return (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name) === t('CATERING_MENU', 'Catering Menu') ? category === null || category === void 0 ? void 0 : (_category$name = category.name) === null || _category$name === void 0 ? void 0 : (_category$name$toLowe = _category$name.toLowerCase()) === null || _category$name$toLowe === void 0 ? void 0 : _category$name$toLowe.includes(t('CATERING', 'catering')) : !(category !== null && category !== void 0 && (_category$name2 = category.name) !== null && _category$name2 !== void 0 && (_category$name2$toLow = _category$name2.toLowerCase()) !== null && _category$name2$toLow !== void 0 && _category$name2$toLow.includes(t('CATERING', 'catering')));
  })) === null || _business$categories$ === void 0 ? void 0 : _business$categories$.sort(function (a, b) {
    return a.rank - b.rank;
  });
  var BusinessLayoutCategories = headerType === 'pfchangs' ? _pfchangs.BusinessProductsCategories : businessLayout.layoutOne ? _groceries.BusinessProductsCategories : _BusinessProductsCategories.BusinessProductsCategories;
  var BusinessLayoutProductsList = headerType === 'pfchangs' ? _pfchangs2.BusinessProductsList : businessLayout.layoutOne ? _groceries2.BusinessProductsList : _BusinessProductsList.BusinessProductsList;
  var BusinessLayoutCategoriesSkeleton = headerType === 'pfchangs' ? _pfchangs.BusinessProductsCategories : _BusinessProductsCategories.BusinessProductsCategories;
  var BusinessLayoutProductsListSkeleton = headerType === 'pfchangs' ? _pfchangs2.BusinessProductsList : _BusinessProductsList.BusinessProductsList;

  var handleScrollToTop = function handleScrollToTop() {
    setTimeout(function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 300);
  };

  var handleShowGoTopButton = function handleShowGoTopButton() {
    if (window.scrollY > 500) {
      setShowGoTopButton(true);
    } else {
      setShowGoTopButton(false);
    }
  };

  (0, _react.useEffect)(function () {
    if (headerType === 'pfchangs') {
      window.addEventListener('scroll', handleShowGoTopButton);
      return function () {
        return window.removeEventListener('scroll', handleShowGoTopButton);
      };
    }
  }, [headerType]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isLoading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isCartOnProductsList: isCartOnProductsList
  }, !hideBusinessNearCity && !useKioskApp && /*#__PURE__*/_react.default.createElement(_styles.NearBusiness, null, /*#__PURE__*/_react.default.createElement(_BusinessesListing.BusinessesListing, {
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
  }))), (!businessLayout.layoutOne || headerType === 'pfchangs') && /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, {
    isCustomLayout: isCustomLayout || useKioskApp,
    id: "wrapper-categories"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, {
    showCartOnProductList: showCartOnProductList
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, (business === null || business === void 0 ? void 0 : (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0 && headerType !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  })), !((business === null || business === void 0 ? void 0 : (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
    categories: categoriesMode === 'twocategories' ? pfChangsCategories : headerType === 'pfchangs' ? business === null || business === void 0 ? void 0 : business.categories.filter(function (category) {
      var _category$subcategori;

      return (category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0;
    }).sort(function (a, b) {
      return a.rank - b.rank;
    }) : [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    categorySelected: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === null && categoriesMode === 'twocategories' ? pfChangsCategories[0] : categorySelected,
    onClickCategory: onClickCategory,
    featured: featuredProducts,
    useKioskApp: useKioskApp,
    openBusinessInformation: openBusinessInformation,
    business: business,
    currentCart: currentCart,
    wContainerStyle: useKioskApp && 'calc(100% - 50px)',
    setSubcategoriesSelected: setSubcategoriesSelected,
    subcategoriesSelected: subcategoriesSelected,
    PFChangsCategoriesLayout: headerType === 'pfchangs',
    setSubcategorySelected: setSubcategorySelected
  }), ((categorySelected === null || categorySelected === void 0 ? void 0 : (_categorySelected$sub = categorySelected.subcategories) === null || _categorySelected$sub === void 0 ? void 0 : _categorySelected$sub.length) > 0 && headerType === 'pfchangs' || categoriesMode === 'twocategories') && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
    categories: categoriesMode === 'twocategories' ? pfchangsSubcategories : categorySelected === null || categorySelected === void 0 ? void 0 : (_categorySelected$sub2 = categorySelected.subcategories) === null || _categorySelected$sub2 === void 0 ? void 0 : _categorySelected$sub2.sort(function (a, b) {
      return a.rank - b.rank;
    }),
    categorySelected: categorySelected,
    onClickCategory: onClickCategory,
    featured: featuredProducts,
    useKioskApp: useKioskApp,
    openBusinessInformation: openBusinessInformation,
    business: business,
    currentCart: currentCart,
    wContainerStyle: useKioskApp && 'calc(100% - 50px)',
    subcategoriesLayout: true,
    subcategorySelected: subcategorySelected,
    setSubcategorySelected: setSubcategorySelected
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
    id: "businessProductList",
    pfchangs: headerType === 'pfchangs'
  }, (business === null || business === void 0 ? void 0 : (_business$professiona2 = business.professionals) === null || _business$professiona2 === void 0 ? void 0 : _business$professiona2.length) > 0 && headerType !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, null, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  })), !(business !== null && business !== void 0 && business.loading) && (business === null || business === void 0 ? void 0 : (_business$previously_ = business.previously_products) === null || _business$previously_ === void 0 ? void 0 : _business$previously_.length) > 0 && headerType !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_OrderItAgain.OrderItAgain, {
    onProductClick: onProductClick,
    productList: business === null || business === void 0 ? void 0 : business.previously_products,
    businessId: business === null || business === void 0 ? void 0 : business.id
  }), headerType === 'pfchangs' ? /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsList, {
    categories: categoriesMode !== 'twocategories' ? categorySelected !== null && categorySelected !== void 0 && categorySelected.id ? _toConsumableArray(categorySelected === null || categorySelected === void 0 ? void 0 : (_categorySelected$sor = categorySelected.sort(function (a, b) {
      return a.rank - b.rank;
    })) === null || _categorySelected$sor === void 0 ? void 0 : _categorySelected$sor.map(function (category) {
      var _categorySelected$pro;

      return _objectSpread(_objectSpread({}, category), {}, {
        products: categorySelected === null || categorySelected === void 0 ? void 0 : (_categorySelected$pro = categorySelected.products) === null || _categorySelected$pro === void 0 ? void 0 : _categorySelected$pro.filter(function (product) {
          return (product === null || product === void 0 ? void 0 : product.category_id) === (category === null || category === void 0 ? void 0 : category.id);
        })
      });
    })) : business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }) : pfchangsSubcategories.map(function (category) {
      return _objectSpread(_objectSpread({}, category), {}, {
        products: category.products
      });
    }),
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
  }) : /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsList, {
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
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart'))))))), businessLayout.layoutOne && headerType !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (business === null || business === void 0 ? void 0 : (_business$professiona3 = business.professionals) === null || _business$professiona3 === void 0 ? void 0 : _business$professiona3.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProfessionalFilterWrapper, {
    isTop: true
  }, /*#__PURE__*/_react.default.createElement(_ProfessionalFilter.ProfessionalFilter, {
    professionals: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoriesContainer, null, !((business === null || business === void 0 ? void 0 : (_business$categories3 = business.categories) === null || _business$categories3 === void 0 ? void 0 : _business$categories3.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(BusinessLayoutCategories, {
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
    currentCart: currentCart,
    useKioskApp: useKioskApp
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryProductWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.WrapContent, {
    isGroceries: true
  }, !(business !== null && business !== void 0 && business.loading) && (business === null || business === void 0 ? void 0 : (_business$previously_2 = business.previously_products) === null || _business$previously_2 === void 0 ? void 0 : _business$previously_2.length) > 0 && /*#__PURE__*/_react.default.createElement(_OrderItAgain.OrderItAgain, {
    onProductClick: onProductClick,
    productList: business === null || business === void 0 ? void 0 : business.previously_products,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    isGroceries: true
  }), /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsList, {
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
    handleChangeProfessionalSelected: handleChangeProfessionalSelected,
    subcategorySelected: subcategorySelected
  })))))), showGoTopButton && /*#__PURE__*/_react.default.createElement(_styles.BackToTop, {
    onClick: function onClick() {
      return handleScrollToTop();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretUpFill, null), t('BACK_TO_TOP', 'Back to top'))), isLoading && !isError && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomLayout && !useKioskApp && /*#__PURE__*/_react.default.createElement(BusinessBasicInformationComponent, {
    isSkeleton: true,
    handler: handler,
    businessState: {
      business: {},
      loading: true
    },
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(BusinessLayoutCategoriesSkeleton, {
    isSkeleton: true,
    categories: [],
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(BusinessLayoutProductsListSkeleton, {
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