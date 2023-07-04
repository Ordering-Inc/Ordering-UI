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
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _PageNotFound = require("../../../../../components/PageNotFound");
var _FloatingButton = require("../../../../../components/FloatingButton");
var _UpsellingPage = require("../../../../../components/UpsellingPage");
var _ProductForm = require("../ProductForm");
var _BusinessProductsCategories = require("../BusinessProductsCategories");
var _BusinessProductsList = require("../BusinessProductsList");
var _NavBar = require("../NavBar");
var _styles = require("./styles");
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _configs$add_product_, _Object$values$find, _props$beforeElements, _props$beforeComponen, _businessState$busine, _currentCart$products2, _business$categories, _theme$defaultLanguag, _theme$defaultLanguag2, _currentCart$products3, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _error$, _theme$defaultLanguag7, _currentCart$products4, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _currentCart$products5, _productModal$product2, _productModal$error$, _theme$defaultLanguag12, _props$afterComponent, _props$afterElements;
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
    errorQuantityProducts = props.errorQuantityProducts,
    onBusinessCartRedirect = props.onBusinessCartRedirect,
    onCategoryRedirect = props.onCategoryRedirect;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isQuickAddProduct = (configs === null || configs === void 0 || (_configs$add_product_ = configs.add_product_with_one_click) === null || _configs$add_product_ === void 0 ? void 0 : _configs$add_product_.value) === '1';
  var business = businessState.business,
    loading = businessState.loading,
    error = businessState.error;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    _useOrder2$ = _useOrder2[1],
    addProduct = _useOrder2$.addProduct,
    updateProduct = _useOrder2$.updateProduct;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var location = (0, _reactRouterDom.useLocation)();
  var _useState = (0, _react.useState)(props.product),
    _useState2 = _slicedToArray(_useState, 2),
    curProduct = _useState2[0],
    setCurProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openUpselling = _useState4[0],
    setOpenUpselling = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    canOpenUpselling = _useState6[0],
    setCanOpenUpselling = _useState6[1];
  var _useState7 = (0, _react.useState)('categories'),
    _useState8 = _slicedToArray(_useState7, 2),
    showOption = _useState8[0],
    setShowOption = _useState8[1];
  var _useState9 = (0, _react.useState)('categories'),
    _useState10 = _slicedToArray(_useState9, 2),
    previousShowOption = _useState10[0],
    setPreviousShowOption = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    categorySearchValue = _useState12[0],
    setCategorySearchValue = _useState12[1];
  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var handleBackShowOption = function handleBackShowOption() {
    setShowOption(previousShowOption);
  };
  var handleShowOption = function handleShowOption(option) {
    setPreviousShowOption(showOption);
    setShowOption(option);
  };
  var onProductClick = function onProductClick(product) {
    if (product.extras.length === 0 && !product.inventoried && auth && isQuickAddProduct) {
      var _currentCart$products;
      var isProductAddedToCart = currentCart === null || currentCart === void 0 || (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.find(function (Cproduct) {
        return Cproduct.id === product.id;
      });
      var productQuantity = isProductAddedToCart === null || isProductAddedToCart === void 0 ? void 0 : isProductAddedToCart.quantity;
      var addCurrentProduct = _objectSpread(_objectSpread({}, product), {}, {
        quantity: 1
      });
      var updateCurrentProduct = {
        businessid: business.id,
        id: product.id,
        code: isProductAddedToCart === null || isProductAddedToCart === void 0 ? void 0 : isProductAddedToCart.code,
        quantity: productQuantity + 1
      };
      if (isProductAddedToCart) {
        updateProduct(updateCurrentProduct, currentCart);
      } else {
        addProduct(addCurrentProduct, currentCart, isQuickAddProduct);
      }
    } else {
      onProductRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug,
        product: product.id,
        category: product.category_id
      });
      setCurProduct(product);
      handleShowOption('productForm');
      events.emit('product_clicked', product);
    }
  };
  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      handleBackShowOption();
      onCategoryRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug,
        category: categoryId,
        replace: false
      });
    }
  };
  var closeModalProductForm = function closeModalProductForm() {
    handleBackShowOption();
    handleUpdateInitialRender(false);
    updateProductModal(null);
    setCurProduct(null);
    onCategoryRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug,
      category: categoryId,
      replace: false
    });
  };
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage);
    if (badScrollPosition || categoryState.loading || !hasMore || loading) return;
    getNextProducts();
  }, [categoryState]);
  var handleChangePage = function handleChangePage(data) {
    if (Object.entries(data.query).length === 0 && showOption === 'productForm') {
      handleBackShowOption();
    }
  };
  var handleUpsellingPage = function handleUpsellingPage() {
    onCheckoutRedirect(currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid);
    setOpenUpselling(false);
    setCanOpenUpselling(false);
  };
  (0, _react.useEffect)(function () {
    if (categoryId && productId && isInitialRender) {
      var _productModal$product;
      if (productModal !== null && productModal !== void 0 && (_productModal$product = productModal.product) !== null && _productModal$product !== void 0 && _productModal$product.id) {
        setCurProduct(productModal.product);
      }
      handleShowOption('productForm');
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
    if (showOption !== 'productForm') return;
    events.on('change_view', handleChangePage);
    return function () {
      events.off('change_view', handleChangePage);
    };
  }, [showOption]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  var onClickCategory = function onClickCategory(category) {
    onCategoryRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug,
      category: category.id,
      replace: false
    });
    handleChangeCategory(category);
    handleShowOption('products');
  };
  (0, _react.useEffect)(function () {
    if (loading) return;
    if (categoryId && productId) {
      if (!curProduct) {
        handleUpdateInitialRender(true);
        handleShowOption('productForm');
      }
      return;
    }
    if (!categoryId) {
      handleShowOption('categories');
    } else {
      setCurProduct(null);
      updateProductModal(null);
      if (showOption !== 'products') {
        var selectedCategory = business === null || business === void 0 ? void 0 : business.categories.find(function (category) {
          return category.id.toString() === categoryId;
        });
        onCategoryRedirect({
          slug: business === null || business === void 0 ? void 0 : business.slug,
          category: selectedCategory.id,
          replace: true
        });
        handleChangeCategory(selectedCategory);
        handleShowOption('products');
      }
    }
  }, [categoryId, productId, loading, curProduct]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), showOption === 'categories' && /*#__PURE__*/_react.default.createElement(_NavBar.NavBar, {
    title: t('MENU_V21', 'Menu'),
    handleGoBack: function handleGoBack() {
      return handleSearchRedirect();
    },
    isSearchShow: true,
    searchValue: categorySearchValue,
    handleChangeSearch: function handleChangeSearch(val) {
      return setCategorySearchValue(val);
    }
  }), showOption === 'products' && /*#__PURE__*/_react.default.createElement(_NavBar.NavBar, {
    title: categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name,
    handleGoBack: function handleGoBack() {
      return onProductRedirect({
        slug: business.slug
      });
    },
    isSearchShow: true,
    searchValue: searchValue,
    handleChangeSearch: handleChangeSearch,
    lazyLoad: businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended
  }), (showOption === 'categories' || showOption === 'products') && /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, !loading && (business === null || business === void 0 ? void 0 : business.id) && /*#__PURE__*/_react.default.createElement(_styles.WrappLayout, {
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 || (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "bp-list"
  }, showOption === 'categories' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !((business === null || business === void 0 || (_business$categories = business.categories) === null || _business$categories === void 0 ? void 0 : _business$categories.length) === 0 && !categoryId) ? /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: _toConsumableArray(business === null || business === void 0 ? void 0 : business.categories).filter(function (category) {
      return category === null || category === void 0 ? void 0 : category.name.toLowerCase().includes(categorySearchValue.toLowerCase());
    }).sort(function (a, b) {
      return a.rank - b.rank;
    }),
    categorySelected: categorySelected,
    onClickCategory: onClickCategory,
    featured: featuredProducts,
    searchValue: categorySearchValue,
    handleClearSearch: function handleClearSearch(val) {
      return setCategorySearchValue(val);
    },
    handleSearchRedirect: handleSearchRedirect
  }) : /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }))), showOption === 'products' && /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [{
      id: null,
      name: t('ALL', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ALL) || 'All')
    }, {
      id: 'featured',
      name: t('FEATURED', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.FEATURED) || 'Featured')
    }].concat(_toConsumableArray(business === null || business === void 0 ? void 0 : business.categories.sort(function (a, b) {
      return a.rank - b.rank;
    }))),
    isOpen: showOption === 'products',
    category: categorySelected,
    categoryState: categoryState,
    businessId: business.id,
    errors: errors,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    featured: featuredProducts,
    searchValue: searchValue,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 || (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0,
    handleClearSearch: handleChangeSearch,
    errorQuantityProducts: errorQuantityProducts,
    currentCart: currentCart
  })))), loading && !error && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'categories' && /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, {
    categories: [],
    isSkeleton: true
  }), showOption === 'products' && /*#__PURE__*/_react.default.createElement(_styles.WrapContent, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsList.BusinessProductsList, {
    categories: [],
    category: categorySelected,
    categoryState: categoryState,
    isBusinessLoading: loading,
    errorQuantityProducts: errorQuantityProducts
  }))), !loading && business && !Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESS_PRODUCTS', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.NOT_FOUND_BUSINESS_PRODUCTS) || 'No products to show at this business, please try with other business.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }), !loading && !business && location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_STORE', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.ERROR_NOT_FOUND_STORE) || 'Sorry, an error has occurred with business selected.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), (currentCart === null || currentCart === void 0 || (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.length) > 0 && auth && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.valid_schedule) && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.valid_products) && showOption !== 'productForm' && showOption !== 'cart' && /*#__PURE__*/_react.default.createElement(_FloatingButton.FloatingButton, {
    btnText: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.MAXIMUM_SUBTOTAL_ORDER) || 'Maximum subtotal order'), ": ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.maximum)) : !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) && !((currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_type) === 1 && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.MINIMUN_SUBTOTAL_ORDER) || 'Minimum subtotal order:'), " ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum)) : !openUpselling ^ canOpenUpselling ? t('VIEW_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.VIEW_ORDER) || 'View Order') : t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.LOADING) || 'Loading'),
    isSecondaryBtn: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) && !((currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_type) === 1 && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_rate) === 100),
    btnValue: currentCart === null || currentCart === void 0 || (_currentCart$products5 = currentCart.products) === null || _currentCart$products5 === void 0 ? void 0 : _currentCart$products5.length,
    handleClick: function handleClick() {
      return onBusinessCartRedirect(business === null || business === void 0 ? void 0 : business.slug);
    },
    disabled: openUpselling || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) && !((currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_type) === 1 && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_rate) === 100)
  }), showOption === 'productForm' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductDetailsHeader, null, /*#__PURE__*/_react.default.createElement("p", null, ((_productModal$product2 = productModal.product) === null || _productModal$product2 === void 0 ? void 0 : _productModal$product2.name) || (curProduct === null || curProduct === void 0 ? void 0 : curProduct.name)), /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return closeModalProductForm();
    }
  })), productModal.loading && !productModal.error && /*#__PURE__*/_react.default.createElement(_styles.ProductLoading, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 45,
    count: 8
  }))), productModal.error && productModal.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_productModal$error$ = productModal.error[0]) === null || _productModal$error$ === void 0 ? void 0 : _productModal$error$.message) || productModal.error[0]
  }), isInitialRender && !productModal.loading && !productModal.error && !productModal.product && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_GET_PRODUCT', (theme === null || theme === void 0 || (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.ERROR_GET_PRODUCT) || 'Sorry, we couldn\'t find the requested product.')
  }), (productModal.product || curProduct) && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction
  })), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && openUpselling && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
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
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isInitialRender = _useState14[0],
    setIsInitialRender = _useState14[1];
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