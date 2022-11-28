"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactRouterDom = require("react-router-dom");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _PageNotFound = require("../../../../../components/PageNotFound");
var _Cart = require("../../../../../components/Cart");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _BusinessBasicInformation = require("../BusinessBasicInformation");
var _BusinessProductsCategories = require("../BusinessProductsCategories");
var _BusinessProductsList = require("../BusinessProductsList");
var _ProductForm = require("../ProductForm");
var _CartFullPage = require("../CartFullPage");
var _FlotingStatusBar = require("../FlotingStatusBar");
var _SearchProducts = require("./SearchProducts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _Object$values$find, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _props$beforeElements, _props$beforeComponen, _currentCart$products, _business$categories, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _business$categories2, _theme$defaultLanguag11, _theme$defaultLanguag12, _currentCart$products2, _currentCart$products3, _currentCart$products4, _business$categories3, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _error$, _theme$defaultLanguag17, _props$afterComponent, _props$afterElements;
  var errors = props.errors,
    isInitialRender = props.isInitialRender,
    businessState = props.businessState,
    categorySelected = props.categorySelected,
    searchValue = props.searchValue,
    sortByValue = props.sortByValue,
    categoryState = props.categoryState,
    categoryId = props.categoryId,
    productId = props.productId,
    productModal = props.productModal,
    getNextProducts = props.getNextProducts,
    handleChangeCategory = props.handleChangeCategory,
    handleUpdateInitialRender = props.handleUpdateInitialRender,
    onProductRedirect = props.onProductRedirect,
    handleChangeSearch = props.handleChangeSearch,
    handleSearchRedirect = props.handleSearchRedirect,
    featuredProducts = props.featuredProducts,
    handleChangeSortBy = props.handleChangeSortBy,
    isCartOnProductsList = props.isCartOnProductsList,
    errorQuantityProducts = props.errorQuantityProducts;
  var business = businessState.business,
    loading = businessState.loading,
    error = businessState.error;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    carts = _useOrder2[0].carts;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var location = (0, _reactRouterDom.useLocation)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openProduct = _useState2[0],
    setModalIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(props.product),
    _useState4 = _slicedToArray(_useState3, 2),
    curProduct = _useState4[0],
    setCurProduct = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openBusinessInformation = _useState6[0],
    setOpenBusinessInformation = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCartOpen = _useState8[0],
    setIsCartOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    cartFullPage = _useState10[0],
    setCartFullPage = _useState10[1];
  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var sortByOptions = [{
    value: null,
    content: t('SORT_BY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SORT_BY) || 'Sort By'),
    showOnSelected: t('SORT_BY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SORT_BY) || 'Sort By')
  }, {
    value: 'rank',
    content: t('RANK', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.RANK) || 'Rank'),
    showOnSelected: t('RANK', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.RANK) || 'Rank')
  }, {
    value: 'a-z',
    content: t('A_to_Z', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.A_to_Z) || 'A-Z'),
    showOnSelected: t('A_to_Z', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.A_to_Z) || 'A-Z')
  }];
  var handler = function handler() {
    setOpenBusinessInformation(true);
  };
  var onProductClick = function onProductClick(product) {
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug,
      product: product.id,
      category: product.category_id
    });
    setCurProduct(product);
    events.emit('product_clicked', product);
  };
  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      onProductRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug
      });
    }
    closeModalProductForm();
  };
  var closeModalProductForm = function closeModalProductForm() {
    handleUpdateInitialRender(false);
    setCurProduct(null);
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug
    });
  };
  var openFullCart = function openFullCart() {
    setCartFullPage(true);
  };
  var handleGoBackPage = function handleGoBackPage() {
    closeModalProductForm();
    setCartFullPage(false);
  };
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage);
    if (badScrollPosition || categoryState.loading || !hasMore) return;
    getNextProducts();
  }, [categoryState]);
  var handleChangePage = function handleChangePage(data) {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false);
    }
  };
  (0, _react.useEffect)(function () {
    if (categoryId && productId && isInitialRender) {
      var _productModal$product;
      if (productModal !== null && productModal !== void 0 && (_productModal$product = productModal.product) !== null && _productModal$product !== void 0 && _productModal$product.id) {
        setCurProduct(productModal.product);
      }
      setModalIsOpen(true);
    }
  }, [productModal]);
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
    if (categoryId && productId) {
      handleUpdateInitialRender(true);
    }
    events.emit('get_current_view');
  }, []);
  (0, _react.useEffect)(function () {
    events.on('change_view', handleChangePage);
    return function () {
      events.off('change_view', handleChangePage);
    };
  }, [openProduct]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  (0, _react.useEffect)(function () {
    if (curProduct) {
      window.scrollTo(0, 0);
    }
  }, [curProduct]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, !loading && (business === null || business === void 0 ? void 0 : business.id) && !curProduct && !cartFullPage && /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bp-list"
  }, windowSize.width < 850 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation
  })), (categoryState.products.length !== 0 || searchValue) && !errorQuantityProducts && /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_SearchProducts.SearchProducts, {
    handleChangeSearch: handleChangeSearch,
    searchValue: searchValue,
    sortByOptions: sortByOptions,
    sortByValue: sortByValue,
    onChange: function onChange(val) {
      return handleChangeSortBy && handleChangeSortBy(val);
    },
    businessState: businessState
  })), !((business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: windowSize.width > 850 ? [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.FEATURED) || 'Featured')
    }] : [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    categorySelected: categorySelected,
    onClickCategory: handleChangeCategory,
    featured: featuredProducts,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, {
    className: "wrap-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapProductsCategroy, null, !((business === null || business === void 0 ? void 0 : (_business$categories2 = business.categories) === null || _business$categories2 === void 0 ? void 0 : _business$categories2.length) === 0 && !categoryId) && windowSize.width > 850 && /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    })),
    categorySelected: categorySelected,
    onClickCategory: handleChangeCategory,
    featured: featuredProducts,
    openBusinessInformation: openBusinessInformation,
    sideCategory: true
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapBusinessList, {
    className: "right-list-panel"
  }, windowSize.width > 850 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation
  })), /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    category: categorySelected,
    categoryState: categoryState,
    businessId: business.id,
    errors: errors,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    featured: featuredProducts,
    searchValue: searchValue,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0,
    handleClearSearch: handleChangeSearch,
    errorQuantityProducts: errorQuantityProducts
  })))), isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0 && /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isForceOpenCart: true,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.length) > 0,
    handleCartOpen: function handleCartOpen(val) {
      return setIsCartOpen(val);
    }
  })), !loading && (business === null || business === void 0 ? void 0 : business.id) && !cartFullPage && curProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductDetail, null, /*#__PURE__*/_react.default.createElement(_styles.BackMenu, {
    className: "productDetail-close"
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return closeModalProductForm();
    }
  })), /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction
  })), !loading && (business === null || business === void 0 ? void 0 : business.id) && cartFullPage && /*#__PURE__*/_react.default.createElement(_CartFullPage.CartFullPage, {
    goBack: handleGoBackPage,
    currentCart: currentCart,
    business: business,
    individualBusinessCart: true
  }), loading && !error && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bp-list"
  }, windowSize.width < 850 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: {
      business: {},
      loading: true
    },
    isSkeleton: true,
    handler: handler,
    openBusinessInformation: openBusinessInformation
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  }), '  ', /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  })), !((business === null || business === void 0 ? void 0 : (_business$categories3 = business.categories) === null || _business$categories3 === void 0 ? void 0 : _business$categories3.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: [],
    isSkeleton: true,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, {
    className: "wrap-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapProductsCategroy, null, windowSize.width > 850 && /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: [],
    isSkeleton: true,
    openBusinessInformation: openBusinessInformation,
    sideCategory: true
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapBusinessList, {
    className: "right-list-panel"
  }, windowSize.width > 850 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: {
      business: {},
      loading: true
    },
    isSkeleton: true,
    handler: handler,
    openBusinessInformation: openBusinessInformation
  })), /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: loading,
    errorQuantityProducts: errorQuantityProducts
  })))))), !loading && business && !Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESS_PRODUCTS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.NOT_FOUND_BUSINESS_PRODUCTS) || 'No products to show at this business, please try with other business.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }), !loading && !business && location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_STORE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ERROR_NOT_FOUND_STORE) || 'Sorry, an error has occurred with business selected.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), /*#__PURE__*/_react.default.createElement(_FlotingStatusBar.FlotingStatusBar, {
    currentCart: currentCart,
    goToCart: openFullCart,
    businessName: business === null || business === void 0 ? void 0 : business.name
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isInitialRender = _useState12[0],
    setIsInitialRender = _useState12[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListingUI,
    isInitialRender: isInitialRender,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessAndProductList, businessProductslistingProps);
};
exports.BusinessProductsListing = BusinessProductsListing;