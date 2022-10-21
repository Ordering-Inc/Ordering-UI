"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OriginalBusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _FiMap = _interopRequireDefault(require("@meronex/icons/fi/FiMap"));
var _FiFilter = _interopRequireDefault(require("@meronex/icons/fi/FiFilter"));
var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _FaMapMarkerAlt = _interopRequireDefault(require("@meronex/icons/fa/FaMapMarkerAlt"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../../../hooks/useWindowSize");
var _Buttons = require("../../../../styles/Buttons");
var _NotFoundSource = require("../../../NotFoundSource");
var _Modal = require("../../../Modal");
var _Confirm = require("../../../Confirm");
var _AddressForm = require("../../../AddressForm");
var _AddressList = require("../../../AddressList");
var _SearchBar = require("../../../SearchBar");
var _BusinessTypeFilter = require("../../../BusinessTypeFilter");
var _BusinessController = require("../../../BusinessController");
var _OrdersOption = require("../../../OrdersOption");
var _BusinessesMap = require("../../../../../../../components/BusinessesMap");
var _HighestRated = require("../../../HighestRated");
var _BusinessPreorder = require("../../../BusinessPreorder");
var _OrderProgress = require("../../../OrderProgress");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _MomentPopover = require("../../../../../../pwa/src/components/MomentPopover");
var _OrderTypeSelectorHeader = require("../../../../../../../components/OrderTypeSelectorHeader");
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _theme$business_listi, _theme$business_listi2, _theme$business_listi3, _theme$business_listi4, _businessesList$busin, _businessesList$busin3, _props$beforeElements, _props$beforeComponen, _orderState$options3, _orderState$options3$, _theme$images2, _theme$images2$genera, _theme$business_listi5, _theme$business_listi6, _theme$business_listi7, _theme$business_listi8, _Object$values, _citiesState$cities2, _citiesState$cities3, _citiesState$cities3$, _configs$advanced_bus, _orderState$options5, _orderState$options5$, _configs$advanced_bus2, _orderState$options6, _orderState$options6$, _businessesList$busin6, _businessesList$busin7, _orderState$options9, _citiesState$cities4, _props$afterComponent, _props$afterElements;
  var businessesList = props.businessesList,
    paginationProps = props.paginationProps,
    searchValue = props.searchValue,
    getBusinesses = props.getBusinesses,
    isCustomLayout = props.isCustomLayout,
    isCustomerMode = props.isCustomerMode,
    onRedirectPage = props.onRedirectPage,
    handleChangeSearch = props.handleChangeSearch,
    handleChangeBusinessType = props.handleChangeBusinessType,
    handleBusinessClick = props.handleBusinessClick,
    onBusinessClick = props.onBusinessClick,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    getCities = props.getCities,
    citiesState = props.citiesState,
    logosLayout = props.logosLayout,
    actualSlug = props.actualSlug;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changeCityFilter = _useOrder2[1].changeCityFilter;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false,
      citiesOpen: false
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
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    activeMap = _useState6[0],
    setActiveMap = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    openPopover = _useState8[0],
    setOpenPopover = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    mapErrors = _useState10[0],
    setMapErrors = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isPreorder = _useState12[0],
    setIsPreorder = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    preorderBusiness = _useState14[0],
    setPreorderBusiness = _useState14[1];
  var _useState15 = (0, _react.useState)(true),
    _useState16 = _slicedToArray(_useState15, 2),
    hasHighRatedBusiness = _useState16[0],
    setHasHighRatedBusiness = _useState16[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    favoriteIds = _useState18[0],
    setFavoriteIds = _useState18[1];
  var hideCities = (_theme$business_listi = theme === null || theme === void 0 ? void 0 : (_theme$business_listi2 = theme.business_listing_view) === null || _theme$business_listi2 === void 0 ? void 0 : (_theme$business_listi3 = _theme$business_listi2.components) === null || _theme$business_listi3 === void 0 ? void 0 : (_theme$business_listi4 = _theme$business_listi3.cities) === null || _theme$business_listi4 === void 0 ? void 0 : _theme$business_listi4.hidden) !== null && _theme$business_listi !== void 0 ? _theme$business_listi : true;
  var businessesIds = isCustomLayout && businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2, _businessesList$error;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || ((_businessesList$error = businessesList.error) === null || _businessesList$error === void 0 ? void 0 : _businessesList$error.length) > 0 || !hasMore) return;
    getBusinesses();
  }, [businessesList.loading, paginationProps]);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
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
  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };
  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
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
  (0, _react.useEffect)(function () {
    if (mapErrors) {
      handleMapErrors(mapErrors);
      setActiveMap(false);
    }
  }, [mapErrors]);
  var getCustomArray = function getCustomArray(list) {
    var isArray = Array.isArray(list);
    return isArray ? list : Object.values(list);
  };
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  var handleOpenCities = function handleOpenCities() {
    var _citiesState$cities;
    if (!(citiesState !== null && citiesState !== void 0 && (_citiesState$cities = citiesState.cities) !== null && _citiesState$cities !== void 0 && _citiesState$cities.length)) {
      getCities();
    }
    setModals(_objectSpread(_objectSpread({}, modals), {}, {
      citiesOpen: true
    }));
  };
  var handleChangeCity = function handleChangeCity(cityId) {
    var _orderState$options2;
    changeCityFilter(cityId === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.city_id) ? null : cityId);
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  (0, _react.useEffect)(function () {
    var _businessesList$busin2;
    if (!(businessesList !== null && businessesList !== void 0 && (_businessesList$busin2 = businessesList.businesses) !== null && _businessesList$busin2 !== void 0 && _businessesList$busin2.length)) return;
    var ids = _toConsumableArray(favoriteIds);
    businessesList.businesses.forEach(function (business) {
      if (business !== null && business !== void 0 && business.favorite) {
        ids.push(business.id);
      }
    });
    setFavoriteIds(_toConsumableArray(new Set(ids)));
  }, [businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.length]);
  var OrdersSection = function OrdersSection(_ref) {
    var _getCustomArray;
    var titleContent = _ref.titleContent;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomLayout && onRedirectPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
      horizontal: true,
      isBusinessesPage: true,
      onRedirectPage: onRedirectPage,
      titleContent: t('CARTS', 'Carts'),
      businessesIds: businessesIds,
      customArray: (_getCustomArray = getCustomArray(orderState.carts)) === null || _getCustomArray === void 0 ? void 0 : _getCustomArray.filter(function (cart) {
        return cart.products.length > 0;
      }),
      isCustomLayout: true,
      isBusinessesLoading: businessesList.loading,
      isCustomerMode: isCustomerMode,
      franchiseId: props.franchiseId
    }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
      horizontal: true,
      asDashboard: true,
      isBusinessesPage: true,
      businessesIds: businessesIds,
      onRedirectPage: onRedirectPage,
      userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
      isCustomLayout: true,
      titleContent: titleContent,
      isBusinessesLoading: businessesList.loading,
      isCustomerMode: isCustomerMode,
      franchiseId: props.franchiseId
    })));
  };
  if (logosLayout) {
    var _businessesList$busin4, _businessesList$busin5;
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessLogosContainer, null, businessesList !== null && businessesList !== void 0 && businessesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      count: 12,
      height: 75,
      width: 75
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_businessesList$busin4 = businessesList.businesses) === null || _businessesList$busin4 === void 0 ? void 0 : (_businessesList$busin5 = _businessesList$busin4.filter(function (business) {
      return (business === null || business === void 0 ? void 0 : business.slug) !== actualSlug && (business === null || business === void 0 ? void 0 : business.open);
    })) === null || _businessesList$busin5 === void 0 ? void 0 : _businessesList$busin5.map(function (business) {
      var _theme$images, _theme$images$dummies;
      return /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
        key: business === null || business === void 0 ? void 0 : business.id,
        bgimage: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
        onClick: function onClick() {
          return onBusinessClick(business);
        }
      });
    })));
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessBanner, null, windowSize.width < 576 && /*#__PURE__*/_react.default.createElement(_styles.BusinessFeatures, null, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick() {
      return handleClickAddress();
    }
  }, /*#__PURE__*/_react.default.createElement(_FaMapMarkerAlt.default, null), /*#__PURE__*/_react.default.createElement("span", null, ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : _orderState$options3$.address) || t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?'))), /*#__PURE__*/_react.default.createElement(_styles.FeatureItems, null, /*#__PURE__*/_react.default.createElement(_styles.ItemInline, null, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, null)), /*#__PURE__*/_react.default.createElement(_styles.ItemInline, null, /*#__PURE__*/_react.default.createElement(_MomentPopover.MomentPopover, {
    open: openPopover.moment,
    onClick: function onClick() {
      return handleTogglePopover('moment');
    },
    onClose: function onClose() {
      return handleClosePopover('moment');
    },
    isBanner: true
  })))), /*#__PURE__*/_react.default.createElement(_styles.BusinessHeroImg, {
    bgimage: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.businessHero,
    height: theme === null || theme === void 0 ? void 0 : (_theme$business_listi5 = theme.business_listing_view) === null || _theme$business_listi5 === void 0 ? void 0 : (_theme$business_listi6 = _theme$business_listi5.components) === null || _theme$business_listi6 === void 0 ? void 0 : (_theme$business_listi7 = _theme$business_listi6.business_hero) === null || _theme$business_listi7 === void 0 ? void 0 : (_theme$business_listi8 = _theme$business_listi7.style) === null || _theme$business_listi8 === void 0 ? void 0 : _theme$business_listi8.height
  })), !!((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) !== null && _Object$values !== void 0 && _Object$values.length) && /*#__PURE__*/_react.default.createElement(_styles.OrderProgressWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderProgress.OrderProgress, {
    franchiseId: props.franchiseId,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    asDashboard: isCustomerMode,
    isCustomerMode: isCustomerMode
  })), isCustomerMode && /*#__PURE__*/_react.default.createElement(OrdersSection, {
    titleContent: t('PREVIOUS_ORDERS', 'Previous orders')
  }), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout,
    isCustomerMode: isCustomerMode
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch,
    handleCustomEnter: function handleCustomEnter() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  }), !hideCities && (citiesState === null || citiesState === void 0 ? void 0 : (_citiesState$cities2 = citiesState.cities) === null || _citiesState$cities2 === void 0 ? void 0 : _citiesState$cities2.length) > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleOpenCities
  }, (citiesState === null || citiesState === void 0 ? void 0 : (_citiesState$cities3 = citiesState.cities) === null || _citiesState$cities3 === void 0 ? void 0 : (_citiesState$cities3$ = _citiesState$cities3.find(function (city) {
    var _orderState$options4;
    return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.city_id);
  })) === null || _citiesState$cities3$ === void 0 ? void 0 : _citiesState$cities3$.name) || t('SELECT_A_CITY', 'Select a city')), (configs === null || configs === void 0 ? void 0 : (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1' && /*#__PURE__*/_react.default.createElement(_FiFilter.default, {
    onClick: function onClick() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  })), activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : _orderState$options5$.location,
    setErrors: setMapErrors
  })), hasHighRatedBusiness && !props.franchiseId && /*#__PURE__*/_react.default.createElement(_styles.HightestRatedWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_HighestRated.HighestRated, {
    handleClickAddress: handleClickAddress,
    setHasHighRatedBusiness: setHasHighRatedBusiness,
    onBusinessClick: onBusinessClick,
    isCustomerMode: isCustomerMode,
    favoriteIds: favoriteIds,
    setFavoriteIds: setFavoriteIds
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), (configs && (configs === null || configs === void 0 ? void 0 : configs.business_listing_categories) !== false || !isCustomLayout) && /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    images: props.images,
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType
  }), isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.SearchContainer, null, isCustomLayout && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, {
    isCustomerMode: isCustomerMode
  }, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout,
    isCustomerMode: isCustomerMode
  }, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    lazyLoad: true,
    search: searchValue,
    isCustomLayout: isCustomLayout,
    placeholder: t('SEARCH_BUSINESSES', 'Search Businesses'),
    onSearch: handleChangeSearch
  }), (configs === null || configs === void 0 ? void 0 : (_configs$advanced_bus2 = configs.advanced_business_search_enabled) === null || _configs$advanced_bus2 === void 0 ? void 0 : _configs$advanced_bus2.value) === '1' && /*#__PURE__*/_react.default.createElement(_FiFilter.default, {
    onClick: function onClick() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  }))), isCustomerMode && activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : _orderState$options6$.location,
    setErrors: setMapErrors
  }), !isCustomerMode && /*#__PURE__*/_react.default.createElement(OrdersSection, null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomLayout && isCustomerMode && (businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin6 = businessesList.businesses) === null || _businessesList$busin6 === void 0 ? void 0 : _businessesList$busin6.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return handleClickAddress();
    },
    style: {
      height: '44px'
    }
  }, t('CHANGE_ADDRESS', 'Select other Address'))), (_businessesList$busin7 = businessesList.businesses) === null || _businessesList$busin7 === void 0 ? void 0 : _businessesList$busin7.map(function (business) {
    var _orderState$options7, _business$reviews;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      onPreorderBusiness: setPreorderBusiness,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      handleUpdateBusinessList: handleUpdateBusinessList,
      favoriteIds: favoriteIds,
      setFavoriteIds: setFavoriteIds
    });
  }), businessesList.loading && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options8;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.type
    });
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.address) || {},
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
    },
    isCustomerMode: isCustomerMode
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('FILTER_BUSINESS_BY_CITY', 'Filter business by city'),
    open: modals.citiesOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        citiesOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCityList, null, orderState !== null && orderState !== void 0 && orderState.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, citiesState === null || citiesState === void 0 ? void 0 : (_citiesState$cities4 = citiesState.cities) === null || _citiesState$cities4 === void 0 ? void 0 : _citiesState$cities4.map(function (city) {
    var _orderState$options10;
    return /*#__PURE__*/_react.default.createElement(_styles.CityItem, {
      key: city === null || city === void 0 ? void 0 : city.id,
      onClick: function onClick() {
        return handleChangeCity(city === null || city === void 0 ? void 0 : city.id);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "radio"
    }, (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.city_id) ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, {
      className: "city-checked"
    }) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), city === null || city === void 0 ? void 0 : city.name);
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
var OriginalBusinessesListing = function OriginalBusinessesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 25,
      controlType: 'infinity'
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};
exports.OriginalBusinessesListing = OriginalBusinessesListing;