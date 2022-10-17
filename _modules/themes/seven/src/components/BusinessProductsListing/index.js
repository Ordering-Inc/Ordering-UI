"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = exports.BusinessProductsListing = exports.BreackFastCheck = exports.AgeCheckForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _BusinessProductsList = require("../BusinessProductsList");
var _PageNotFound = require("../../../../../components/PageNotFound");
var _Modal = require("../../../../../components/Modal");
var _UpsellingPage = require("../../../../../components/UpsellingPage");
var _BusinessBasicInformation = require("../BusinessBasicInformation");
var _BusinessProductsCategories = require("../BusinessProductsCategories");
var _CustomModal = require("../CustomModal");
var _ProductForm = require("../ProductForm");
var _Confirm = require("../../../../../components/Confirm");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _Object$values$find, _props$beforeElements, _props$beforeComponen, _currentCart$products, _business$categories, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _currentCart$products2, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _error$, _theme$defaultLanguag9, _productModal$error$, _theme$defaultLanguag10, _props$afterComponent, _props$afterElements;
  var errors = props.errors,
    isInitialRender = props.isInitialRender,
    businessState = props.businessState,
    categorySelected = props.categorySelected,
    searchValue = props.searchValue,
    categoryState = props.categoryState,
    categoryId = props.categoryId,
    productId = props.productId,
    productModal = props.productModal,
    getNextProducts = props.getNextProducts,
    handleChangeCategory = props.handleChangeCategory,
    handleUpdateInitialRender = props.handleUpdateInitialRender,
    updateProductModal = props.updateProductModal,
    onProductRedirect = props.onProductRedirect,
    onCheckoutRedirect = props.onCheckoutRedirect,
    handleChangeSearch = props.handleChangeSearch,
    handleSearchRedirect = props.handleSearchRedirect,
    featuredProducts = props.featuredProducts,
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
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var location = (0, _reactRouterDom.useLocation)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openProduct = _useState2[0],
    setModalIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openAgeConfirm = _useState4[0],
    setOpenAgeConfirm = _useState4[1];
  var _useState5 = (0, _react.useState)(props.product),
    _useState6 = _slicedToArray(_useState5, 2),
    curProduct = _useState6[0],
    setCurProduct = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openUpselling = _useState8[0],
    setOpenUpselling = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    canOpenUpselling = _useState10[0],
    setCanOpenUpselling = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openBusinessInformation = _useState12[0],
    setOpenBusinessInformation = _useState12[1];
  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isOver18Age = _useState14[0],
    setIsOver18Age = _useState14[1];
  var _useState15 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    alertState = _useState16[0],
    setAlertState = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    ageError = _useState18[0],
    setAgeError = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isNestBreackFast = _useState20[0],
    setIsNestBreackFast = _useState20[1];
  var _useState21 = (0, _react.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    businessOpentime = _useState22[0],
    setBusinessOpentime = _useState22[1];
  var ageValidationCategorys = ['Vinos'.toUpperCase(), 'Cervezas'.toUpperCase()];
  var breakFastCategories = ['Desayunos'.toUpperCase(), 'Desayuno'.toUpperCase()];
  var url = window.location.pathname;
  (0, _react.useEffect)(function () {
    var urls = url.split('/');
    if (business !== null && business !== void 0 && business.categories && (business === null || business === void 0 ? void 0 : business.categories.length) > 0 && urls.length === 5 && urls[1] === 'store') {
      var _curCategory$;
      var _curCategory = business.categories.filter(function (c) {
        return c.id === parseInt(urls[3]);
      });
      var _curProduct = (_curCategory$ = _curCategory[0]) === null || _curCategory$ === void 0 ? void 0 : _curCategory$.products.filter(function (p) {
        return p.id === parseInt(urls[4]);
      });
      setCurProduct(_curProduct[0]);
      setModalIsOpen(true);
      events.emit('product_clicked', _curProduct[0]);
    }
  }, [business, url]);
  var handler = function handler() {
    setOpenBusinessInformation(true);
  };
  var scheduleFormatted = function scheduleFormatted(_ref) {
    var hour = _ref.hour,
      minute = _ref.minute;
    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };
    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };
  var checkIsHaveBreakFast = function checkIsHaveBreakFast(product) {
    var existIndex = Object.keys(product).findIndex(function (name) {
      return name === 'breakfast';
    });
    if (existIndex > -1) {
      return true;
    }
    return false;
  };
  var onProductClick = function onProductClick(product) {
    var _categoryName = business === null || business === void 0 ? void 0 : business.categories.filter(function (category) {
      return category.id === (product === null || product === void 0 ? void 0 : product.category_id);
    })[0].name;
    if (_categoryName.indexOf('/')) {
      _categoryName = _categoryName.split('/')[0];
      _categoryName.toUpperCase();
    } else {
      _categoryName.toUpperCase();
    }
    if (breakFastCategories.indexOf(_categoryName) > -1) {
      var hour = new Date().getHours();
      var businessOpenTime = scheduleFormatted(business.today.lapses[0].open);
      var _isHaveBreakFastMeta = checkIsHaveBreakFast(product);
      if (_isHaveBreakFastMeta && hour >= 12) {
        setBusinessOpentime(businessOpenTime);
        setIsNestBreackFast(true);
        return;
      }
    }
    if (ageError && ageValidationCategorys.indexOf(_categoryName) > -1) {
      setAlertState(_objectSpread(_objectSpread({}, alertState), {}, {
        open: true,
        content: [t('UNDERAGE_MESSAGE', 'We cannot add this product because you are a minor.')]
      }));
      return;
    }
    if (!isOver18Age && ageValidationCategorys.indexOf(_categoryName) > -1) {
      setOpenAgeConfirm(true);
      return;
    }
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug,
      product: product.id,
      category: product.category_id
    });
    setCurProduct(product);
    setModalIsOpen(true);
    events.emit('product_clicked', product);
  };
  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      setModalIsOpen(false);
      onProductRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug
      });
    }
  };
  var closeModalProductForm = function closeModalProductForm() {
    setModalIsOpen(false);
    handleUpdateInitialRender(false);
    updateProductModal(null);
    setCurProduct(null);
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug
    });
  };
  var closeCustomModal = function closeCustomModal() {
    setOpenAgeConfirm(false);
    setIsNestBreackFast(false);
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
  var handleUpsellingPage = function handleUpsellingPage() {
    onCheckoutRedirect(currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid);
    setOpenUpselling(false);
    setCanOpenUpselling(false);
  };
  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
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
    if (user !== null && user !== void 0 && user.birthdate) {
      var date = new Date();
      var formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).replace(/ /g, '-');
      var thisYear = parseInt(formattedDate.slice(-4));
      var birthDateYear = parseInt((user === null || user === void 0 ? void 0 : user.birthdate).slice(0, 4));
      var result = thisYear - birthDateYear;
      if (result <= 18) {
        setAgeError(true);
      } else {
        setIsOver18Age(true);
      }
    }
  }, [user === null || user === void 0 ? void 0 : user.birthdate]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, !loading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: businessState,
    setOpenBusinessInformation: setOpenBusinessInformation,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0
  }, !((business === null || business === void 0 ? void 0 : (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) === 0 && !categoryId) && /*#__PURE__*/_react.default.createElement(_styles.BusinessProductsCategorieWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.CartegoryTitle, null, t('OUR_MENU', 'Our Menu')), /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
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
    onClickCategory: handleChangeCategory,
    featured: featuredProducts,
    openBusinessInformation: openBusinessInformation,
    isVerticalList: true
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, {
    id: "productWrapper"
  }, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.FEATURED) || 'Featured')
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
  })))), loading && !error && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BusinessBasicInformation.BusinessBasicInformation, {
    businessState: {
      business: {},
      loading: true
    },
    isSkeleton: true,
    handler: handler,
    openBusinessInformation: openBusinessInformation
  }), /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessProductsCategorieWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 120
  })), /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: [],
    isSkeleton: true,
    openBusinessInformation: openBusinessInformation,
    isVerticalList: true
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: loading,
    errorQuantityProducts: errorQuantityProducts
  })))), !loading && business && !Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESS_PRODUCTS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.NOT_FOUND_BUSINESS_PRODUCTS) || 'No products to show at this business, please try with other business.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }), !loading && !business && location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_STORE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.ERROR_NOT_FOUND_STORE) || 'Sorry, an error has occurred with business selected.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "60%",
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true
  }, productModal.loading && !productModal.error && /*#__PURE__*/_react.default.createElement(_styles.ProductLoading, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 45,
    count: 8
  }))), productModal.error && productModal.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_productModal$error$ = productModal.error[0]) === null || _productModal$error$ === void 0 ? void 0 : _productModal$error$.message) || productModal.error[0]
  }), isInitialRender && !productModal.loading && !productModal.error && !productModal.product && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_GET_PRODUCT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.ERROR_GET_PRODUCT) || 'Sorry, we couldn\'t find the requested product.')
  }), (productModal.product || curProduct) && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction
  })), /*#__PURE__*/_react.default.createElement(_CustomModal.CustomModal, {
    width: "40%",
    padding: "0",
    open: openAgeConfirm || isNestBreackFast,
    onClose: function onClose() {
      return closeCustomModal();
    }
  }, openAgeConfirm && /*#__PURE__*/_react.default.createElement(AgeCheckForm, {
    setIsOver18Age: setIsOver18Age,
    setOpenAgeConfirm: setOpenAgeConfirm,
    setAgeError: setAgeError
  }), isNestBreackFast && /*#__PURE__*/_react.default.createElement(BreackFastCheck, {
    businessOpentime: businessOpentime,
    closeCustomModal: closeCustomModal
  })), ageError && /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: "Alsea Colombia",
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return handleCloseAlerts();
    },
    onAccept: function onAccept() {
      return handleCloseAlerts();
    },
    closeOnBackdrop: false
  }), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && openUpselling && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
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
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isInitialRender = _useState24[0],
    setIsInitialRender = _useState24[1];
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
var AgeCheckForm = function AgeCheckForm(props) {
  var _theme$images, _theme$images$alsea, _theme$images2, _theme$images2$alsea;
  var theme = (0, _styledComponents.useTheme)();
  var windowSize = useWindowSize();
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var setIsOver18Age = props.setIsOver18Age,
    setOpenAgeConfirm = props.setOpenAgeConfirm,
    setAgeError = props.setAgeError;
  return /*#__PURE__*/_react.default.createElement(_styles.AgeConfirmContainer, {
    bgimage: windowSize.width < 768 ? (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$alsea = _theme$images.alsea) === null || _theme$images$alsea === void 0 ? void 0 : _theme$images$alsea.confirmBackMobile : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$alsea = _theme$images2.alsea) === null || _theme$images2$alsea === void 0 ? void 0 : _theme$images2$alsea.confirmBackDesktop
  }, /*#__PURE__*/_react.default.createElement(_styles.UnderAge, null, /*#__PURE__*/_react.default.createElement("h2", null, t('AGE_CONFIRM_TITLE', 'You are of age?')), /*#__PURE__*/_react.default.createElement(_styles.UnderAgeButtons, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      setIsOver18Age(true);
      setOpenAgeConfirm(false);
    }
  }, " ", t('YES', 'Yes')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      setAgeError(true);
      setOpenAgeConfirm(false);
    }
  }, " ", t('NO', 'No')))));
};
exports.AgeCheckForm = AgeCheckForm;
var BreackFastCheck = function BreackFastCheck(props) {
  var _useLanguage5 = (0, _orderingComponents.useLanguage)(),
    _useLanguage6 = _slicedToArray(_useLanguage5, 2),
    t = _useLanguage6[1];
  var businessOpentime = props.businessOpentime,
    closeCustomModal = props.closeCustomModal;
  return /*#__PURE__*/_react.default.createElement(_styles.BreackFastCheckModalContent, null, /*#__PURE__*/_react.default.createElement("p", null, t('ARCHIES_BREAKFAST_ALERT').replaceAll('_schedule_open_', businessOpentime)), /*#__PURE__*/_react.default.createElement(_styles.AgreeButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return closeCustomModal();
    }
  }, " ", t('OK', 'Ok'))));
};
exports.BreackFastCheck = BreackFastCheck;
var useWindowSize = function useWindowSize() {
  var _useState25 = (0, _react.useState)({
      width: undefined,
      height: undefined
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    windowSize = _useState26[0],
    setWindowSize = _useState26[1];
  (0, _react.useEffect)(function () {
    var handleResize = function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowSize;
};
exports.useWindowSize = useWindowSize;