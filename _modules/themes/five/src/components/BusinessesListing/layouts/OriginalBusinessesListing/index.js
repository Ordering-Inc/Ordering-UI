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
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../../../hooks/useWindowSize");
var _Buttons = require("../../../../styles/Buttons");
var _NotFoundSource = require("../../../NotFoundSource");
var _Modal = require("../../../Modal");
var _Confirm = require("../../../Confirm");
var _SearchBar = require("../../../SearchBar");
var _BusinessTypeFilter = require("../../../BusinessTypeFilter");
var _BusinessController = require("../../../BusinessController");
var _BusinessesMap = require("../../../../../../../components/BusinessesMap");
var _HighestRated = require("../../../HighestRated");
var _BusinessPreorder = require("../../../BusinessPreorder");
var _OrderProgress = require("../../../OrderProgress");
var _PageBanner = require("../../../PageBanner");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _AutoScroll = require("../../../AutoScroll");
var _CitiesControl = require("../../../CitiesControl");
var _OrderContextUI = require("../../../OrderContextUI");
var _OrdersSection = require("./OrdersSection");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _ref, _theme$business_listi, _theme$business_listi2, _theme$business_listi3, _orderState$options, _theme$business_listi4, _theme$business_listi5, _theme$business_listi6, _theme$business_listi7, _theme$business_listi8, _theme$business_listi9, _theme$business_listi10, _theme$business_listi11, _theme$business_listi12, _theme$business_listi13, _theme$business_listi14, _theme$business_listi15, _theme$business_listi16, _theme$business_listi17, _theme$business_listi18, _theme$business_listi19, _theme$business_listi20, _theme$business_listi21, _businessesList$busin, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderingTheme$theme$4, _businessesList$busin3, _configs$business_lis, _configs$business_lis2, _theme$images2, _theme$images2$genera, _theme$business_listi22, _theme$business_listi23, _theme$business_listi24, _theme$business_listi25, _Object$values, _configs$business_lis3, _theme$images3, _theme$images3$genera, _theme$business_listi26, _theme$business_listi27, _theme$business_listi28, _theme$business_listi29, _citiesState$cities2, _citiesState$cities3, _citiesState$cities3$, _configs$advanced_bus, _orderState$options4, _orderState$options4$, _configs$advanced_bus2, _citiesState$cities4, _citiesState$cities5, _citiesState$cities5$, _orderState$options6, _orderState$options6$, _businessesList$busin6, _businessesList$busin7;
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
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
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
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    mapErrors = _useState8[0],
    setMapErrors = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isPreorder = _useState10[0],
    setIsPreorder = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    preorderBusiness = _useState12[0],
    setPreorderBusiness = _useState12[1];
  var _useState13 = (0, _react.useState)(true),
    _useState14 = _slicedToArray(_useState13, 2),
    hasHighRatedBusiness = _useState14[0],
    setHasHighRatedBusiness = _useState14[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    favoriteIds = _useState16[0],
    setFavoriteIds = _useState16[1];
  var hideCities = (_ref = (theme === null || theme === void 0 ? void 0 : (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 ? void 0 : (_theme$business_listi2 = _theme$business_listi.components) === null || _theme$business_listi2 === void 0 ? void 0 : (_theme$business_listi3 = _theme$business_listi2.cities) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.hidden) || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) !== 2) !== null && _ref !== void 0 ? _ref : true;
  var hideSearch = theme === null || theme === void 0 ? void 0 : (_theme$business_listi4 = theme.business_listing_view) === null || _theme$business_listi4 === void 0 ? void 0 : (_theme$business_listi5 = _theme$business_listi4.components) === null || _theme$business_listi5 === void 0 ? void 0 : (_theme$business_listi6 = _theme$business_listi5.search) === null || _theme$business_listi6 === void 0 ? void 0 : _theme$business_listi6.hidden;
  var hideFilter = (theme === null || theme === void 0 ? void 0 : (_theme$business_listi7 = theme.business_listing_view) === null || _theme$business_listi7 === void 0 ? void 0 : (_theme$business_listi8 = _theme$business_listi7.components) === null || _theme$business_listi8 === void 0 ? void 0 : (_theme$business_listi9 = _theme$business_listi8.filter) === null || _theme$business_listi9 === void 0 ? void 0 : _theme$business_listi9.hidden) || hideSearch;
  var hideHero = theme === null || theme === void 0 ? void 0 : (_theme$business_listi10 = theme.business_listing_view) === null || _theme$business_listi10 === void 0 ? void 0 : (_theme$business_listi11 = _theme$business_listi10.components) === null || _theme$business_listi11 === void 0 ? void 0 : (_theme$business_listi12 = _theme$business_listi11.business_hero) === null || _theme$business_listi12 === void 0 ? void 0 : _theme$business_listi12.hidden;
  var hidePreviousOrders = theme === null || theme === void 0 ? void 0 : (_theme$business_listi13 = theme.business_listing_view) === null || _theme$business_listi13 === void 0 ? void 0 : (_theme$business_listi14 = _theme$business_listi13.components) === null || _theme$business_listi14 === void 0 ? void 0 : (_theme$business_listi15 = _theme$business_listi14.previous_orders_block) === null || _theme$business_listi15 === void 0 ? void 0 : _theme$business_listi15.hidden;
  var hideHighestBusiness = theme === null || theme === void 0 ? void 0 : (_theme$business_listi16 = theme.business_listing_view) === null || _theme$business_listi16 === void 0 ? void 0 : (_theme$business_listi17 = _theme$business_listi16.components) === null || _theme$business_listi17 === void 0 ? void 0 : (_theme$business_listi18 = _theme$business_listi17.highest_rated_business_block) === null || _theme$business_listi18 === void 0 ? void 0 : _theme$business_listi18.hidden;
  var hideSearchSection = hideCities && hideSearch && hideFilter;
  var isAllCategoriesHidden = theme === null || theme === void 0 ? void 0 : (_theme$business_listi19 = theme.business_listing_view) === null || _theme$business_listi19 === void 0 ? void 0 : (_theme$business_listi20 = _theme$business_listi19.components) === null || _theme$business_listi20 === void 0 ? void 0 : (_theme$business_listi21 = _theme$business_listi20.categories) === null || _theme$business_listi21 === void 0 ? void 0 : _theme$business_listi21.hidden;
  var businessesIds = businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var isChew = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.header) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : (_orderingTheme$theme$4 = _orderingTheme$theme$3.type) === null || _orderingTheme$theme$4 === void 0 ? void 0 : _orderingTheme$theme$4.toLowerCase()) === 'chew';
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
  if (logosLayout) {
    var _businessesList$busin4, _businessesList$busin5;
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessLogosWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogosContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
      scrollId: "businessLogos"
    }, businessesList !== null && businessesList !== void 0 && businessesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      count: 12,
      height: 75,
      width: 75
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_businessesList$busin4 = businessesList.businesses) === null || _businessesList$busin4 === void 0 ? void 0 : (_businessesList$busin5 = _businessesList$busin4.filter(function (business) {
      return business === null || business === void 0 ? void 0 : business.open;
    })) === null || _businessesList$busin5 === void 0 ? void 0 : _businessesList$busin5.map(function (business) {
      var _theme$images, _theme$images$dummies;
      return /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
        key: business === null || business === void 0 ? void 0 : business.id,
        isActive: actualSlug === (business === null || business === void 0 ? void 0 : business.slug),
        bgimage: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
        onClick: function onClick() {
          return onBusinessClick(business);
        }
      });
    })))));
  }
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, (windowSize.width < 576 || (configs === null || configs === void 0 ? void 0 : (_configs$business_lis = configs.business_listing_hide_image) === null || _configs$business_lis === void 0 ? void 0 : _configs$business_lis.value) !== '1' && !isChew) && /*#__PURE__*/_react.default.createElement(_styles.BusinessBanner, null, windowSize.width < 576 && /*#__PURE__*/_react.default.createElement(_OrderContextUI.OrderContextUI, {
    isBusinessList: true,
    hideHero: !hideHero
  }), (configs === null || configs === void 0 ? void 0 : (_configs$business_lis2 = configs.business_listing_hide_image) === null || _configs$business_lis2 === void 0 ? void 0 : _configs$business_lis2.value) !== '1' && !isChew && !hideHero && /*#__PURE__*/_react.default.createElement(_styles.BusinessHeroImg, {
    bgimage: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.businessHero,
    height: theme === null || theme === void 0 ? void 0 : (_theme$business_listi22 = theme.business_listing_view) === null || _theme$business_listi22 === void 0 ? void 0 : (_theme$business_listi23 = _theme$business_listi22.components) === null || _theme$business_listi23 === void 0 ? void 0 : (_theme$business_listi24 = _theme$business_listi23.business_hero) === null || _theme$business_listi24 === void 0 ? void 0 : (_theme$business_listi25 = _theme$business_listi24.style) === null || _theme$business_listi25 === void 0 ? void 0 : _theme$business_listi25.height
  })), !!((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) !== null && _Object$values !== void 0 && _Object$values.length) && /*#__PURE__*/_react.default.createElement(_OrderProgress.OrderProgress, {
    isChew: isChew,
    franchiseId: props.franchiseId,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    asDashboard: isCustomerMode,
    isCustomerMode: isCustomerMode
  }), (configs === null || configs === void 0 ? void 0 : (_configs$business_lis3 = configs.business_listing_hide_image) === null || _configs$business_lis3 === void 0 ? void 0 : _configs$business_lis3.value) !== '1' && isChew && /*#__PURE__*/_react.default.createElement(_styles.BusinessHeroImg, {
    bgimage: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$genera = _theme$images3.general) === null || _theme$images3$genera === void 0 ? void 0 : _theme$images3$genera.businessHero,
    height: theme === null || theme === void 0 ? void 0 : (_theme$business_listi26 = theme.business_listing_view) === null || _theme$business_listi26 === void 0 ? void 0 : (_theme$business_listi27 = _theme$business_listi26.components) === null || _theme$business_listi27 === void 0 ? void 0 : (_theme$business_listi28 = _theme$business_listi27.business_hero) === null || _theme$business_listi28 === void 0 ? void 0 : (_theme$business_listi29 = _theme$business_listi28.style) === null || _theme$business_listi29 === void 0 ? void 0 : _theme$business_listi29.height
  }), isCustomerMode && !hidePreviousOrders && !businessesList.loading && /*#__PURE__*/_react.default.createElement(_OrdersSection.OrdersSection, {
    titleContent: t('PREVIOUS_ORDERS', 'Previous orders'),
    onRedirectPage: onRedirectPage,
    businessesIds: businessesIds,
    getCustomArray: getCustomArray,
    businessesList: businessesList,
    isCustomerMode: isCustomerMode,
    userCustomer: userCustomer
  }), !isCustomerMode && !hideSearchSection && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearch, {
    isCustomLayout: isCustomLayout,
    isCustomerMode: isCustomerMode
  }, !hideSearch && windowSize.width <= 1200 && /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
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
    var _orderState$options3;
    return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.city_id);
  })) === null || _citiesState$cities3$ === void 0 ? void 0 : _citiesState$cities3$.name) || t('SELECT_A_CITY', 'Select a city')), !hideFilter && (configs === null || configs === void 0 ? void 0 : (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1' && /*#__PURE__*/_react.default.createElement(_FiFilter.default, {
    onClick: function onClick() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  })), activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$.location,
    setErrors: setMapErrors
  })), !isChew && hasHighRatedBusiness && !props.franchiseId && !hideHighestBusiness && /*#__PURE__*/_react.default.createElement(_styles.HightestRatedWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_HighestRated.HighestRated, {
    handleClickAddress: handleClickAddress,
    setHasHighRatedBusiness: setHasHighRatedBusiness,
    onBusinessClick: onBusinessClick,
    isCustomerMode: isCustomerMode,
    favoriteIds: favoriteIds,
    setFavoriteIds: setFavoriteIds,
    disabledCities: true
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), /*#__PURE__*/_react.default.createElement(_PageBanner.PageBanner, {
    position: "web_business_listing"
  }), (configs && (configs === null || configs === void 0 ? void 0 : configs.business_listing_categories) !== false || !isCustomLayout) && !isAllCategoriesHidden && /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
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
  }), !hideCities && (citiesState === null || citiesState === void 0 ? void 0 : (_citiesState$cities4 = citiesState.cities) === null || _citiesState$cities4 === void 0 ? void 0 : _citiesState$cities4.length) > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleOpenCities
  }, (citiesState === null || citiesState === void 0 ? void 0 : (_citiesState$cities5 = citiesState.cities) === null || _citiesState$cities5 === void 0 ? void 0 : (_citiesState$cities5$ = _citiesState$cities5.find(function (city) {
    var _orderState$options5;
    return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.city_id);
  })) === null || _citiesState$cities5$ === void 0 ? void 0 : _citiesState$cities5$.name) || t('SELECT_A_CITY', 'Select a city')))), isCustomerMode && activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : _orderState$options6$.location,
    setErrors: setMapErrors
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!isCustomLayout && isCustomerMode && (businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin6 = businessesList.businesses) === null || _businessesList$busin6 === void 0 ? void 0 : _businessesList$busin6.length) > 0 || isChew) && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && (businessesList === null || businessesList === void 0 ? void 0 : businessesList.fetched) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
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
  }), (businessesList.loading || !(businessesList !== null && businessesList !== void 0 && businessesList.fetched)) && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
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
    title: t('SELECT_A_STORE', 'Select a store'),
    open: modals.citiesOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        citiesOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_CitiesControl.CitiesControl, {
    cities: citiesState === null || citiesState === void 0 ? void 0 : citiesState.cities,
    handleChangeCity: handleChangeCity,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        citiesOpen: false
      }));
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