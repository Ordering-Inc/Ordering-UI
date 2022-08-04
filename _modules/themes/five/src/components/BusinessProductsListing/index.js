"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _reactRouterDom = require("react-router-dom");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _NotFoundSource = require("../NotFoundSource");

var _PageNotFound = require("../../../../../components/PageNotFound");

var _ProductForm = require("../ProductForm");

var _Modal = require("../Modal");

var _Buttons = require("../../styles/Buttons");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _RenderProductsLayout = require("../RenderProductsLayout");

var _Cart = require("../Cart");

var _Confirm = require("../../../../../components/Confirm");

var _FloatingButton = require("../../../../../components/FloatingButton");

var _UpsellingPage = require("../../../../../components/UpsellingPage");

var _ServiceForm = require("../ServiceForm");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PIXELS_TO_SCROLL = 300;

var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _Object$values$find, _businessState$busine, _theme$layouts, _theme$layouts$busine, _theme$layouts$busine2, _theme$layouts$busine3, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _currentCart$products, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _error$, _theme$defaultLanguag11, _currentCart$products2, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _currentCart$products3, _currentCart$products4, _currentCart$products5, _productModal$error$, _theme$defaultLanguag16, _productModal$product2;

  var errors = props.errors,
      openCategories = props.openCategories,
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
      updateProductModal = props.updateProductModal,
      onProductRedirect = props.onProductRedirect,
      handleChangeSearch = props.handleChangeSearch,
      handleSearchRedirect = props.handleSearchRedirect,
      featuredProducts = props.featuredProducts,
      handleChangeSortBy = props.handleChangeSortBy,
      isCartOnProductsList = props.isCartOnProductsList,
      errorQuantityProducts = props.errorQuantityProducts,
      multiRemoveProducts = props.multiRemoveProducts,
      setAlertState = props.setAlertState,
      alertState = props.alertState,
      onCheckoutRedirect = props.onCheckoutRedirect,
      handleUpdateProducts = props.handleUpdateProducts,
      professionalSelected = props.professionalSelected,
      handleChangeProfessionalSelected = props.handleChangeProfessionalSelected;
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

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var location = (0, _reactRouterDom.useLocation)();
  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useSite = (0, _orderingComponents.useSite)(),
      _useSite2 = _slicedToArray(_useSite, 1),
      site = _useSite2[0].site;

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
      openUpselling = _useState6[0],
      setOpenUpselling = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      canOpenUpselling = _useState8[0],
      setCanOpenUpselling = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openBusinessInformation = _useState10[0],
      setOpenBusinessInformation = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isCartOpen = _useState12[0],
      setIsCartOpen = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isCartModal = _useState14[0],
      setisCartModal = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      subcategoriesSelected = _useState16[0],
      setSubcategoriesSelected = _useState16[1];

  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;

    return (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var isLazy = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended;
  var showViewOrderButton = !(theme !== null && theme !== void 0 && (_theme$layouts = theme.layouts) !== null && _theme$layouts !== void 0 && (_theme$layouts$busine = _theme$layouts.business_view) !== null && _theme$layouts$busine !== void 0 && (_theme$layouts$busine2 = _theme$layouts$busine.components) !== null && _theme$layouts$busine2 !== void 0 && (_theme$layouts$busine3 = _theme$layouts$busine2.order_view_button) !== null && _theme$layouts$busine3 !== void 0 && _theme$layouts$busine3.hidden);
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
    if (!((product === null || product === void 0 ? void 0 : product.type) === 'service' && professionalSelected)) {
      var _product$category;

      onProductRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug,
        product: site.product_url_template.includes('product_slug') ? product === null || product === void 0 ? void 0 : product.slug : product.id,
        category: site.product_url_template.includes('category_slug') ? product === null || product === void 0 ? void 0 : (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.slug : product.category_id
      });
    }

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

  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;

    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage);
    if (badScrollPosition || categoryState.loading || !hasMore) return;
    getNextProducts({
      isNextPage: true
    });
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

  var handleGoToBusinessList = function handleGoToBusinessList() {
    events.emit('go_to_page', {
      page: 'search'
    });
  };

  var adjustBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(adjustBusinessId) {
      var _carts$adjustBusiness;

      var _carts, products, unavailableProducts, alreadyRemoved;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _carts = carts === null || carts === void 0 ? void 0 : carts[adjustBusinessId];
              products = carts === null || carts === void 0 ? void 0 : (_carts$adjustBusiness = carts[adjustBusinessId]) === null || _carts$adjustBusiness === void 0 ? void 0 : _carts$adjustBusiness.products;
              unavailableProducts = products.filter(function (product) {
                return product.valid !== true;
              });
              alreadyRemoved = sessionStorage.getItem('already-removed');
              sessionStorage.removeItem('already-removed');

              if (!(unavailableProducts.length > 0)) {
                _context.next = 11;
                break;
              }

              _context.t0 = multiRemoveProducts;

              if (!_context.t0) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return multiRemoveProducts(unavailableProducts, _carts);

            case 10:
              return _context.abrupt("return");

            case 11:
              if (alreadyRemoved === 'removed') {
                setAlertState({
                  open: true,
                  content: [t('NOT_AVAILABLE_PRODUCT', 'This product is not available.')]
                });
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function adjustBusiness(_x) {
      return _ref.apply(this, arguments);
    };
  }();

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
    var _business$schedule;

    if (business !== null && business !== void 0 && (_business$schedule = business.schedule) !== null && _business$schedule !== void 0 && _business$schedule.length) {
      window.localStorage.setItem('business_schedule', JSON.stringify(business === null || business === void 0 ? void 0 : business.schedule));
    }

    return function () {
      var _business$schedule2;

      if (business !== null && business !== void 0 && (_business$schedule2 = business.schedule) !== null && _business$schedule2 !== void 0 && _business$schedule2.length) {
        window.localStorage.removeItem('business_schedule');
      }
    };
  }, [business === null || business === void 0 ? void 0 : business.schedule]);
  (0, _react.useEffect)(function () {
    var adjustBusinessId = sessionStorage.getItem('adjust-cart-products');

    if (currentCart && adjustBusinessId) {
      sessionStorage.removeItem('adjust-cart-products');
      adjustBusiness(adjustBusinessId);
    }
  }, [currentCart]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, !props.useKioskApp && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, {
    onClick: function onClick() {
      return handleGoToBusinessList();
    }
  }), /*#__PURE__*/_react.default.createElement(_RenderProductsLayout.RenderProductsLayout, {
    errors: errors,
    isError: error,
    isLoading: loading,
    isLazy: isLazy,
    business: business,
    categoryId: categoryId,
    searchValue: searchValue,
    sortByValue: sortByValue,
    currentCart: currentCart,
    businessState: businessState,
    sortByOptions: sortByOptions,
    categoryState: categoryState,
    categoriesState: props.categoriesState,
    isCustomLayout: props.isCustomLayout,
    useKioskApp: props.useKioskApp,
    categorySelected: categorySelected,
    openCategories: openCategories,
    openBusinessInformation: openBusinessInformation,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.length) > 0,
    handleChangeSortBy: handleChangeSortBy,
    errorQuantityProducts: errorQuantityProducts,
    onClickCategory: handleChangeCategory,
    featuredProducts: featuredProducts,
    subcategoriesSelected: subcategoriesSelected,
    handler: handler,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    handleChangeSearch: handleChangeSearch,
    setOpenBusinessInformation: setOpenBusinessInformation,
    handleCartOpen: function handleCartOpen(val) {
      return setIsCartOpen(val);
    },
    setSubcategoriesSelected: setSubcategoriesSelected,
    handleUpdateProducts: handleUpdateProducts,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected
  }), !loading && business && !Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESS_PRODUCTS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.NOT_FOUND_BUSINESS_PRODUCTS) || 'No products to show at this business, please try with other business.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }), !loading && !business && location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_STORE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ERROR_NOT_FOUND_STORE) || 'Sorry, an error has occurred with business selected.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0 && auth && !isCartOpen && showViewOrderButton && /*#__PURE__*/_react.default.createElement(_FloatingButton.FloatingButton, {
    btnText: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.MAXIMUM_SUBTOTAL_ORDER) || 'Maximum subtotal order'), ": ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.maximum)) : !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) && !((currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_type) === 1 && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.MINIMUN_SUBTOTAL_ORDER) || 'Minimum subtotal order:'), " ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum)) : !openUpselling !== canOpenUpselling ? t('VIEW_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.VIEW_ORDER) || 'View Order') : t('LOADING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.LOADING) || 'Loading'),
    isSecondaryBtn: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) && !((currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_type) === 1 && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_rate) === 100),
    btnValue: currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length,
    handleClick: function handleClick() {
      return setOpenUpselling(true);
    },
    disabled: openUpselling || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_minimum) && !((currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_type) === 1 && (currentCart === null || currentCart === void 0 ? void 0 : currentCart.discount_rate) === 100)
  }), windowSize.width < 500 && (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.MobileCartViewWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.total)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setisCartModal(true);
    }
  }, t('VIEW_CART', 'View cart'))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "45%",
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
  }, t('YOUR_CART', 'Your cart')), (currentCart === null || currentCart === void 0 ? void 0 : (_currentCart$products5 = currentCart.products) === null || _currentCart$products5 === void 0 ? void 0 : _currentCart$products5.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: function handleCartOpen(val) {
      return setIsCartOpen(val);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart')))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: props.useKioskApp ? '80%' : '760px',
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true,
    disableOverflowX: true
  }, productModal.loading && !productModal.error && /*#__PURE__*/_react.default.createElement(_styles.ProductLoading, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 45,
    count: props.useKioskApp ? 12 : 8
  }))), productModal.error && productModal.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_productModal$error$ = productModal.error[0]) === null || _productModal$error$ === void 0 ? void 0 : _productModal$error$.message) || productModal.error[0]
  }), isInitialRender && !productModal.loading && !productModal.error && !productModal.product && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_GET_PRODUCT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ERROR_GET_PRODUCT) || 'Sorry, we couldn\'t find the requested product.')
  }), (productModal.product || curProduct) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((productModal === null || productModal === void 0 ? void 0 : (_productModal$product2 = productModal.product) === null || _productModal$product2 === void 0 ? void 0 : _productModal$product2.type) === 'service' || (curProduct === null || curProduct === void 0 ? void 0 : curProduct.type) === 'service') && professionalSelected ? /*#__PURE__*/_react.default.createElement(_ServiceForm.ServiceForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    useKioskApp: props.useKioskApp,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction,
    professionalList: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessional: handleChangeProfessionalSelected
  }) : /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    useKioskApp: props.useKioskApp,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState === null || alertState === void 0 ? void 0 : alertState.open,
    content: t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.'),
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    }
  }), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && openUpselling && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }));
};

var BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      isInitialRender = _useState18[0],
      setIsInitialRender = _useState18[1];

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