"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedBusinessesListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _FiMap = _interopRequireDefault(require("@meronex/icons/fi/FiMap"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

var _Buttons = require("../../../../../../seven/src/styles/Buttons");

var _NotFoundSource = require("../../../../../../../components/NotFoundSource");

var _BusinessTypeFilter = require("../../../../../../../components/BusinessTypeFilter");

var _OrdersOption = require("../../../../../../../components/OrdersOption");

var _Modal = require("../../../../../../../components/Modal");

var _Confirm = require("../../../../../../../components/Confirm");

var _AddressForm = require("../../../../../../seven/src/components/AddressForm");

var _AddressList = require("../../../../../../seven/src/components/AddressList");

var _SearchBar = require("../../../../../../seven/src/components/SearchBar");

var _BusinessController = require("../../../../../../seven/src/components/BusinessController");

var _BusinessesMap = require("../../../../../../seven/src/components/BusinessesMap");

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var PIXELS_TO_SCROLL = 300;

var BusinessesListingUI = function BusinessesListingUI(props) {
  var _businessesList$busin, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _getCustomArray, _businessesList$busin2, _businessesList$busin3, _orderState$options6, _orderState$options6$, _orderState$options7, _props$afterComponent, _props$afterElements;

  var businessesList = props.businessesList,
      paginationProps = props.paginationProps,
      searchValue = props.searchValue,
      getBusinesses = props.getBusinesses,
      isCustomLayout = props.isCustomLayout,
      onRedirectPage = props.onRedirectPage,
      handleChangeSearch = props.handleChangeSearch,
      handleChangeBusinessType = props.handleChangeBusinessType,
      handleBusinessClick = props.handleBusinessClick,
      currentPageParam = props.currentPageParam;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      auth = _useSession2[0].auth;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var history = (0, _reactRouterDom.useHistory)();
  var location = (0, _reactRouterDom.useLocation)();

  var _useState = (0, _react.useState)({
    listOpen: false,
    formOpen: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      modals = _useState2[0],
      setModals = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      activeMap = _useState6[0],
      setActiveMap = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isPickup = _useState8[0],
      setIsPickup = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      mapErrors = _useState10[0],
      setMapErrors = _useState10[1];

  var _useState11 = (0, _react.useState)({
    page: currentPageParam || 1,
    loading: false
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      prevPage = _useState12[0],
      setPrevPage = _useState12[1];

  var _useState13 = (0, _react.useState)({
    page: currentPageParam || 1,
    loading: false
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      nextPage = _useState14[0],
      setNextPage = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 1),
      categoryShow = _useState16[0];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      brandBusiness = _useState18[0],
      setBrandBusiness = _useState18[1];

  var _useState19 = (0, _react.useState)(),
      _useState20 = _slicedToArray(_useState19, 2),
      targetBusiness = _useState20[0],
      setTargetedBusiness = _useState20[1];

  var isSearchPage = location.pathname === '/search';
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var businessesIds = isCustomLayout && businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;

    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    var nextPageHasMore = !(paginationProps.totalPages === nextPage.page);
    if (badScrollPosition || businessesList.loading || !hasMore || !nextPageHasMore) return;
    handleClickNextItems(false, nextPage.page + 1, false);
  }, [businessesList, paginationProps]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  (0, _react.useEffect)(function () {
    if (!businessesList.loading) {
      setNextPage(_objectSpread(_objectSpread({}, nextPage), {}, {
        loading: false
      }));
      setPrevPage(_objectSpread(_objectSpread({}, prevPage), {}, {
        loading: false
      }));
    }
  }, [businessesList.loading]);
  (0, _react.useEffect)(function () {
    if (mapErrors) {
      handleMapErrors(mapErrors);
      setActiveMap(false);
    }
  }, [mapErrors]);
  (0, _react.useEffect)(function () {
    if (orderState.loading && !businessesList.loading) {
      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname;
      window.history.pushState({
        path: newurl
      }, '', newurl);
      var params = new URLSearchParams();
      history.replace({
        pathname: location.pathname,
        search: params.toString()
      });
      setPrevPage({
        loading: true,
        page: 1
      });
      setNextPage({
        loading: true,
        page: 1
      });
    }
  }, [orderState.loading]);

  var handleClickAddress = function handleClickAddress(e) {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };

  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;

    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setAlertState({
        open: true,
        content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')]
      });
      return;
    }

    setModals({
      listOpen: false,
      formOpen: false
    });
  };

  var toggleMap = function toggleMap() {
    setActiveMap(!activeMap);
  };

  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
    setMapErrors('');
  };

  var handleMapErrors = function handleMapErrors(errKey) {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    });
  };

  var getCustomArray = function getCustomArray(list) {
    var isArray = Array.isArray(list);
    return isArray ? list : Object.values(list);
  };

  var handleClickNextItems = function handleClickNextItems() {
    getBusinesses(false, nextPage.page + 1, false);
    var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + "?page=".concat(nextPage.page + 1);
    window.history.pushState({
      path: newurl
    }, '', newurl);
    setNextPage({
      loading: true,
      page: nextPage.page + 1
    });
  };

  var handleClickPrevItems = function handleClickPrevItems() {
    getBusinesses(false, prevPage.page - 1, true);
    setPrevPage({
      loading: true,
      page: prevPage.page - 1
    });
  };

  var changeBusinessType = function changeBusinessType(category) {
    setNextPage({
      loading: true,
      page: 1
    });
    setPrevPage({
      loading: true,
      page: 1
    });
    var params = new URLSearchParams({
      page: 1
    });
    history.replace({
      pathname: location.pathname,
      search: params.toString()
    });
    handleChangeBusinessType(category);
  };

  var fillterBrand = function fillterBrand() {
    var containBrandBusineess;

    if (!businessesList.loading) {
      // const mainbrand = 'Archie'
      containBrandBusineess = businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses;
      containBrandBusineess.sort(function (a, b) {
        return a.distance - b.distance;
      });
    }

    setBrandBusiness(containBrandBusineess);
  };

  (0, _react.useEffect)(function () {
    if (!businessesList.loading) {
      fillterBrand();
    }
  }, [businessesList]);
  (0, _react.useEffect)(function () {
    var _orderState$options2;

    if ((orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 2) {
      setIsPickup(true);
    } else {
      setIsPickup(false);
    }
  }, [orderState]);

  var forceGotoBusiness = function forceGotoBusiness(business) {
    var storeParam = business.slug;
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: storeParam
      }
    });
  };

  (0, _react.useEffect)(function () {
    if (brandBusiness.length > 0 && orderState.options.type === 1) {
      var _distances = brandBusiness.map(function (business) {
        return business === null || business === void 0 ? void 0 : business.distance;
      });

      var minDis = Math.min.apply(Math, _toConsumableArray(_distances));
      var haveMindisBusiness = brandBusiness.filter(function (business) {
        return (business === null || business === void 0 ? void 0 : business.distance) === minDis;
      })[0];
      setTargetedBusiness(haveMindisBusiness);
    }
  }, [brandBusiness]);

  var handleGotoHome = function handleGotoHome() {
    history.push('/home');
  };

  (0, _react.useEffect)(function () {
    if (targetBusiness && orderState.options.type === 1 && isSearchPage) {
      forceGotoBusiness(targetBusiness);
    }
  }, [targetBusiness, orderState.options.type === 1, isSearchPage]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, categoryShow && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (configs && (configs === null || configs === void 0 ? void 0 : configs.business_listing_categories) !== false || !isCustomLayout) && /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    images: props.images,
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: changeBusinessType
  })), /*#__PURE__*/_react.default.createElement(_styles.Banner, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.businessListBaner
  }, !((_theme$images2 = theme.images) !== null && _theme$images2 !== void 0 && (_theme$images2$genera = _theme$images2.general) !== null && _theme$images2$genera !== void 0 && _theme$images2$genera.businessListBaner) && /*#__PURE__*/_react.default.createElement("p", null, "1440px X  539px banner image")), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  })), isCustomLayout && onRedirectPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    horizontal: true,
    isBusinessesPage: true,
    onRedirectPage: onRedirectPage,
    titleContent: t('CARTS', 'Carts'),
    businessesIds: businessesIds,
    customArray: (_getCustomArray = getCustomArray(orderState.carts)) === null || _getCustomArray === void 0 ? void 0 : _getCustomArray.filter(function (cart) {
      return cart.products.length > 0;
    }),
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading
  }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    horizontal: true,
    asDashboard: true,
    isBusinessesPage: true,
    businessesIds: businessesIds,
    onRedirectPage: onRedirectPage,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.length) > 0 ? /*#__PURE__*/_react.default.createElement(_styles.Layout, null, /*#__PURE__*/_react.default.createElement(_styles.BusinissWrapper, {
    isPickup: isPickup
  }, (businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('FEATURES_BUSINESS', 'Features Businesses')), paginationProps.currentPage !== 1 && prevPage.page !== 1 && /*#__PURE__*/_react.default.createElement(_styles.PreviousButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return handleClickPrevItems();
    },
    color: "primary"
  }, t('SHOW_PREVIOUS_BUSINESS', 'Show previous businesses...'))), businessesList.loading && prevPage.loading && _toConsumableArray(Array(paginationProps.pageSize).keys()).map(function (i) {
    var _orderState$options3;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type,
      isPickup: isPickup
    });
  }), !businessesList.loading && brandBusiness.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, null), brandBusiness === null || brandBusiness === void 0 ? void 0 : brandBusiness.map(function (business) {
    var _orderState$options4;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type,
      isCustomLayout: isCustomLayout,
      isShowCallcenterInformation: isCustomLayout,
      isPickup: isPickup
    });
  }), businessesList.loading && nextPage.loading && _toConsumableArray(Array(paginationProps.nextPageItems ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options5;

    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type,
      isPickup: isPickup
    });
  })), isPickup && /*#__PURE__*/_react.default.createElement(_styles.MapWrapper, {
    isPickup: isPickup
  }, activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: brandBusiness,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : _orderState$options6$.location,
    setErrors: setMapErrors
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !businessesList.loading && businessesList.businesses.length === 0 ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  }, /*#__PURE__*/_react.default.createElement(_styles.NotFoundButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleClickAddress();
    }
  }, t('CHANGE_ADDRESS', 'Select other Address')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleGotoHome();
    }
  }, t('GO_HOME', 'Go to home')))) : /*#__PURE__*/_react.default.createElement(_styles.Layout, null, /*#__PURE__*/_react.default.createElement(_styles.BusinissWrapper, {
    isPickup: isPickup
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect"
  }))), /*#__PURE__*/_react.default.createElement(_styles.MapWrapper, {
    isPickup: isPickup,
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    variant: "rect",
    height: 420
  })))), businessesList.error && businessesList.error.length > 0 && businessesList.businesses.length === 0 && businessesList.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', 'Address List'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: !mapErrors ? t('SEARCH', 'Search') : t('BUSINESSES_MAP', 'Businesses Map'),
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
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var RedBusinessesListing = function RedBusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};

exports.RedBusinessesListing = RedBusinessesListing;