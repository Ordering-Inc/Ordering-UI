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
var _utils = require("../../../../../../../utils");
var _AddressList = require("../../../AddressList");
var _AddressForm = require("../../../AddressForm");
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
  var _orderState$options, _citiesState$cities, _ref, _theme$business_listi, _orderState$options2, _theme$business_listi2, _theme$business_listi3, _theme$business_listi4, _theme$business_listi5, _theme$business_listi6, _theme$business_listi7, _businessesList$busin, _theme$header, _orderState$options3, _orderState$options4, _configs$order_types_, _businessesList$busin3, _orderState$options8, _configs$business_lis, _configs$business_lis2, _configs$business_lis3, _theme$images2, _theme$business_listi8, _orderState$options11, _orderState$options12, _orderState$options13, _theme$images3, _theme$images4, _configs$business_lis4, _theme$images5, _theme$business_listi9, _citiesState$cities5, _citiesState$cities6, _orderState$options15, _configs$advanced_bus2, _citiesState$cities7, _citiesState$cities8, _orderState$options17, _businessesList$busin5, _businessesList$busin6, _orderState$options20;
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
    actualSlug = props.actualSlug,
    orderTypes = props.orderTypes;
  var allOrderTypes = [1, 2, 3, 4, 5];
  var pickupTypes = [2, 3, 4, 5];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    _useOrder2$ = _useOrder2[1],
    changeCityFilter = _useOrder2$.changeCityFilter,
    changeType = _useOrder2$.changeType;
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
  var _useState15 = (0, _react.useState)(pickupTypes.includes(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type)),
    _useState16 = _slicedToArray(_useState15, 2),
    isPickupSelected = _useState16[0],
    setIsPickupSelected = _useState16[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    favoriteIds = _useState18[0],
    setFavoriteIds = _useState18[1];
  var allCitiesDisabled = citiesState === null || citiesState === void 0 || (_citiesState$cities = citiesState.cities) === null || _citiesState$cities === void 0 ? void 0 : _citiesState$cities.every(function (city) {
    return !city.enabled;
  });
  var hideCities = (_ref = (theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.cities) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.hidden) || (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) !== 2 || allCitiesDisabled) !== null && _ref !== void 0 ? _ref : true;
  var hideSearch = theme === null || theme === void 0 || (_theme$business_listi2 = theme.business_listing_view) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.components) === null || _theme$business_listi2 === void 0 || (_theme$business_listi2 = _theme$business_listi2.search) === null || _theme$business_listi2 === void 0 ? void 0 : _theme$business_listi2.hidden;
  var hideFilter = (theme === null || theme === void 0 || (_theme$business_listi3 = theme.business_listing_view) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.components) === null || _theme$business_listi3 === void 0 || (_theme$business_listi3 = _theme$business_listi3.filter) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.hidden) || hideSearch;
  var hideHero = theme === null || theme === void 0 || (_theme$business_listi4 = theme.business_listing_view) === null || _theme$business_listi4 === void 0 || (_theme$business_listi4 = _theme$business_listi4.components) === null || _theme$business_listi4 === void 0 || (_theme$business_listi4 = _theme$business_listi4.business_hero) === null || _theme$business_listi4 === void 0 ? void 0 : _theme$business_listi4.hidden;
  var hidePreviousOrders = theme === null || theme === void 0 || (_theme$business_listi5 = theme.business_listing_view) === null || _theme$business_listi5 === void 0 || (_theme$business_listi5 = _theme$business_listi5.components) === null || _theme$business_listi5 === void 0 || (_theme$business_listi5 = _theme$business_listi5.previous_orders_block) === null || _theme$business_listi5 === void 0 ? void 0 : _theme$business_listi5.hidden;
  var hideHighestBusiness = theme === null || theme === void 0 || (_theme$business_listi6 = theme.business_listing_view) === null || _theme$business_listi6 === void 0 || (_theme$business_listi6 = _theme$business_listi6.components) === null || _theme$business_listi6 === void 0 || (_theme$business_listi6 = _theme$business_listi6.highest_rated_business_block) === null || _theme$business_listi6 === void 0 ? void 0 : _theme$business_listi6.hidden;
  var hideSearchSection = hideCities && hideSearch && hideFilter;
  var isAllCategoriesHidden = (theme === null || theme === void 0 || (_theme$business_listi7 = theme.business_listing_view) === null || _theme$business_listi7 === void 0 || (_theme$business_listi7 = _theme$business_listi7.components) === null || _theme$business_listi7 === void 0 || (_theme$business_listi7 = _theme$business_listi7.categories) === null || _theme$business_listi7 === void 0 ? void 0 : _theme$business_listi7.hidden) || (props === null || props === void 0 ? void 0 : props.franchiseId);
  var businessesIds = businessesList.businesses && ((_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business.id;
  }));
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var cateringTypeString = (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 7 ? 'catering_delivery' : (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) === 8 ? 'catering_pickup' : null;
  var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').filter(function (value) {
    return allOrderTypes.includes(Number(value));
  }).map(function (value) {
    return Number(value);
  })) || [];
  var cateringValues = (preorderBusiness === null || preorderBusiness === void 0 ? void 0 : preorderBusiness.configs) && (0, _utils.getCateringValues)(cateringTypeString, preorderBusiness === null || preorderBusiness === void 0 ? void 0 : preorderBusiness.configs);
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2, _businessesList$error;
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(paginationProps.totalPages === paginationProps.currentPage);
    if (badScrollPosition || businessesList.loading || ((_businessesList$error = businessesList.error) === null || _businessesList$error === void 0 ? void 0 : _businessesList$error.length) > 0 || !hasMore) return;
    getBusinesses();
  }, [businessesList, paginationProps]);
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
    var _citiesState$cities2;
    if (!(citiesState !== null && citiesState !== void 0 && (_citiesState$cities2 = citiesState.cities) !== null && _citiesState$cities2 !== void 0 && _citiesState$cities2.length)) {
      getCities();
    }
    setModals(_objectSpread(_objectSpread({}, modals), {}, {
      citiesOpen: true
    }));
  };
  var handleChangeCity = function handleChangeCity(cityId) {
    var _orderState$options5;
    changeCityFilter(cityId === (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.city_id) ? null : cityId);
  };
  var handleChangeType = function handleChangeType(value) {
    if (!(orderState !== null && orderState !== void 0 && orderState.loading)) {
      changeType(value);
      if (value === 1) {
        setIsPickupSelected(false);
      }
    }
  };
  var handleChangeToPickup = function handleChangeToPickup() {
    var _orderTypes$find;
    var firstEnabledPickupType = (_orderTypes$find = orderTypes.find(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.value;
    handleChangeType(firstEnabledPickupType);
    setIsPickupSelected(true);
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  (0, _react.useEffect)(function () {
    var _businessesList$busin2;
    setActiveMap(false);
    if (!(businessesList !== null && businessesList !== void 0 && (_businessesList$busin2 = businessesList.businesses) !== null && _businessesList$busin2 !== void 0 && _businessesList$busin2.length)) return;
    var ids = _toConsumableArray(favoriteIds);
    businessesList.businesses.forEach(function (business) {
      if (business !== null && business !== void 0 && business.favorite) {
        ids.push(business.id);
      }
    });
    setFavoriteIds(_toConsumableArray(new Set(ids)));
  }, [businessesList === null || businessesList === void 0 || (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.length]);
  (0, _react.useEffect)(function () {
    var _citiesState$cities3, _orderState$options6, _citiesState$cities4;
    if (!(citiesState !== null && citiesState !== void 0 && (_citiesState$cities3 = citiesState.cities) !== null && _citiesState$cities3 !== void 0 && _citiesState$cities3.length) || !(orderState !== null && orderState !== void 0 && (_orderState$options6 = orderState.options) !== null && _orderState$options6 !== void 0 && _orderState$options6.city_id)) return;
    var selectedCity = citiesState === null || citiesState === void 0 || (_citiesState$cities4 = citiesState.cities) === null || _citiesState$cities4 === void 0 ? void 0 : _citiesState$cities4.find(function (city) {
      var _orderState$options7;
      return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.city_id);
    });
    if (!selectedCity || !(selectedCity !== null && selectedCity !== void 0 && selectedCity.enabled)) changeCityFilter(null);
  }, [citiesState, orderState === null || orderState === void 0 || (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.city_id]);
  var OrderTypesComponent = function OrderTypesComponent() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderTypes && (configTypes ? orderTypes.filter(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    }) : orderTypes).map(function (item, i) {
      var _orderState$options9, _orderState$options10;
      return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        key: item.value,
        onClick: function onClick() {
          return handleChangeType(item.value);
        },
        color: (orderState === null || orderState === void 0 || (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.type) === (item === null || item === void 0 ? void 0 : item.value) ? 'primary' : 'secondary',
        disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
        className: (orderState === null || orderState === void 0 || (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type) !== (item === null || item === void 0 ? void 0 : item.value) ? 'activated' : ''
      }, item.text);
    }));
  };
  if (logosLayout) {
    var _businessesList$busin4;
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessLogosWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogosContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
      scrollId: "businessLogos"
    }, businessesList !== null && businessesList !== void 0 && businessesList.loading ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      count: 12,
      height: 75,
      width: 75
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_businessesList$busin4 = businessesList.businesses) === null || _businessesList$busin4 === void 0 || (_businessesList$busin4 = _businessesList$busin4.filter(function (business) {
      return business === null || business === void 0 ? void 0 : business.open;
    })) === null || _businessesList$busin4 === void 0 ? void 0 : _businessesList$busin4.map(function (business) {
      var _theme$images;
      return /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
        key: business === null || business === void 0 ? void 0 : business.id,
        isActive: actualSlug === (business === null || business === void 0 ? void 0 : business.slug),
        bgimage: (business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo),
        onClick: function onClick() {
          return onBusinessClick(business);
        }
      });
    })))));
  }
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_PageBanner.PageBanner, {
    position: "web_business_listing",
    isCustomerMode: isCustomerMode
  }), (windowSize.width < 576 || (configs === null || configs === void 0 || (_configs$business_lis = configs.business_listing_hide_image) === null || _configs$business_lis === void 0 ? void 0 : _configs$business_lis.value) !== '1' && !isChew) && /*#__PURE__*/_react.default.createElement(_styles.BusinessBanner, null, windowSize.width < 576 && /*#__PURE__*/_react.default.createElement(_OrderContextUI.OrderContextUI, {
    isBusinessList: true,
    hideHero: (configs === null || configs === void 0 || (_configs$business_lis2 = configs.business_listing_hide_image) === null || _configs$business_lis2 === void 0 ? void 0 : _configs$business_lis2.value) !== '1' && !isChew && !hideHero
  }), (configs === null || configs === void 0 || (_configs$business_lis3 = configs.business_listing_hide_image) === null || _configs$business_lis3 === void 0 ? void 0 : _configs$business_lis3.value) !== '1' && !isChew && !hideHero && /*#__PURE__*/_react.default.createElement(_styles.BusinessHeroImg, {
    bgimage: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessHero,
    height: theme === null || theme === void 0 || (_theme$business_listi8 = theme.business_listing_view) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.components) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.business_hero) === null || _theme$business_listi8 === void 0 || (_theme$business_listi8 = _theme$business_listi8.style) === null || _theme$business_listi8 === void 0 ? void 0 : _theme$business_listi8.height
  })), userCustomer && (orderState === null || orderState === void 0 || (_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 || (_orderState$options11 = _orderState$options11.address) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.address) && isCustomerMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('DELIVERY_TYPE', 'Delivery Type')), /*#__PURE__*/_react.default.createElement(_styles.TypesContainer, null, configTypes.includes(1) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    onClick: function onClick() {
      return handleChangeType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: (orderState === null || orderState === void 0 || (_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.type) === 1
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: (orderState === null || orderState === void 0 || (_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.type) === 1
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.deliveryIco,
    width: 20,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY', 'Delivery'))), configTypes.some(function (type) {
    return pickupTypes.includes(type);
  }) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: isPickupSelected,
    onClick: function onClick() {
      return handleChangeToPickup();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: isPickupSelected
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.general) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.pickupIco,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP', 'Pickup')))), isPickupSelected && /*#__PURE__*/_react.default.createElement(_styles.TypesWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')), /*#__PURE__*/_react.default.createElement(_styles.AdditionalTypesContainer, null, /*#__PURE__*/_react.default.createElement(OrderTypesComponent, null)))), /*#__PURE__*/_react.default.createElement(_OrderProgress.OrderProgress, {
    isChew: isChew,
    franchiseId: props.franchiseId,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    asDashboard: isCustomerMode,
    isCustomerMode: isCustomerMode
  }), (configs === null || configs === void 0 || (_configs$business_lis4 = configs.business_listing_hide_image) === null || _configs$business_lis4 === void 0 ? void 0 : _configs$business_lis4.value) !== '1' && isChew && /*#__PURE__*/_react.default.createElement(_styles.BusinessHeroImg, {
    bgimage: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 || (_theme$images5 = _theme$images5.general) === null || _theme$images5 === void 0 ? void 0 : _theme$images5.businessHero,
    height: theme === null || theme === void 0 || (_theme$business_listi9 = theme.business_listing_view) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.components) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.business_hero) === null || _theme$business_listi9 === void 0 || (_theme$business_listi9 = _theme$business_listi9.style) === null || _theme$business_listi9 === void 0 ? void 0 : _theme$business_listi9.height
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
      var _configs$advanced_bus;
      return (configs === null || configs === void 0 || (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '0' ? null : onRedirectPage({
        page: 'business_search'
      });
    }
  }), !hideCities && (citiesState === null || citiesState === void 0 || (_citiesState$cities5 = citiesState.cities) === null || _citiesState$cities5 === void 0 ? void 0 : _citiesState$cities5.length) > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleOpenCities
  }, (citiesState === null || citiesState === void 0 || (_citiesState$cities6 = citiesState.cities) === null || _citiesState$cities6 === void 0 || (_citiesState$cities6 = _citiesState$cities6.find(function (city) {
    var _orderState$options14;
    return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 || (_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.city_id);
  })) === null || _citiesState$cities6 === void 0 ? void 0 : _citiesState$cities6.name) || t('SELECT_A_CITY', 'Select a city')), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  })), activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 || (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 || (_orderState$options15 = _orderState$options15.address) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.location,
    setErrors: setMapErrors
  })), !isChew && hasHighRatedBusiness && !props.franchiseId && !hideHighestBusiness && /*#__PURE__*/_react.default.createElement(_styles.HightestRatedWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_HighestRated.HighestRated, {
    propsToFetch: props.propsToFetch,
    handleClickAddress: handleClickAddress,
    setHasHighRatedBusiness: setHasHighRatedBusiness,
    onBusinessClick: onBusinessClick,
    isCustomerMode: isCustomerMode,
    favoriteIds: favoriteIds,
    setFavoriteIds: setFavoriteIds,
    disabledCities: true
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), (configs && (configs === null || configs === void 0 ? void 0 : configs.business_listing_categories) !== false || !isCustomLayout) && !isAllCategoriesHidden && /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
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
  }), (configs === null || configs === void 0 || (_configs$advanced_bus2 = configs.advanced_business_search_enabled) === null || _configs$advanced_bus2 === void 0 ? void 0 : _configs$advanced_bus2.value) === '1' && /*#__PURE__*/_react.default.createElement(_FiFilter.default, {
    onClick: function onClick() {
      return onRedirectPage({
        page: 'business_search'
      });
    }
  }), isCustomLayout && /*#__PURE__*/_react.default.createElement(_FiMap.default, {
    onClick: toggleMap
  }), !hideCities && (citiesState === null || citiesState === void 0 || (_citiesState$cities7 = citiesState.cities) === null || _citiesState$cities7 === void 0 ? void 0 : _citiesState$cities7.length) > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: handleOpenCities
  }, (citiesState === null || citiesState === void 0 || (_citiesState$cities8 = citiesState.cities) === null || _citiesState$cities8 === void 0 || (_citiesState$cities8 = _citiesState$cities8.find(function (city) {
    var _orderState$options16;
    return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 || (_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.city_id);
  })) === null || _citiesState$cities8 === void 0 ? void 0 : _citiesState$cities8.name) || t('SELECT_A_CITY', 'Select a city')))), isCustomerMode && activeMap && /*#__PURE__*/_react.default.createElement(_BusinessesMap.BusinessesMap, {
    businessList: businessesList.businesses,
    userLocation: orderState === null || orderState === void 0 || (_orderState$options17 = orderState.options) === null || _orderState$options17 === void 0 || (_orderState$options17 = _orderState$options17.address) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.location,
    setErrors: setMapErrors
  }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!isCustomLayout && isCustomerMode && (businessesList === null || businessesList === void 0 || (_businessesList$busin5 = businessesList.businesses) === null || _businessesList$busin5 === void 0 ? void 0 : _businessesList$busin5.length) > 0 || isChew) && /*#__PURE__*/_react.default.createElement(_styles.BusinessesTitle, null, t('BUSINESSES', 'Businesses')), /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, !businessesList.loading && businessesList.businesses.length === 0 && (businessesList === null || businessesList === void 0 ? void 0 : businessesList.fetched) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
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
  }, t('CHANGE_ADDRESS', 'Select other Address'))), (_businessesList$busin6 = businessesList.businesses) === null || _businessesList$busin6 === void 0 ? void 0 : _businessesList$busin6.map(function (business) {
    var _orderState$options18, _business$reviews;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 || (_orderState$options18 = orderState.options) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      onPreorderBusiness: setPreorderBusiness,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      handleUpdateBusinessList: handleUpdateBusinessList,
      favoriteIds: favoriteIds,
      setFavoriteIds: setFavoriteIds
    });
  }), (businessesList.loading || !(businessesList !== null && businessesList !== void 0 && businessesList.fetched)) && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options19;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options19 = orderState.options) === null || _orderState$options19 === void 0 ? void 0 : _orderState$options19.type
    });
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, _extends({
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true,
    cateringPreorder: !!cateringTypeString
  }, cateringValues))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, _extends({}, !auth && {
    title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')
  }, {
    open: modals.formOpen || modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false,
        listOpen: false
      }));
    }
  }), modals.listOpen ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    isCustomerMode: isCustomerMode
  }) : /*#__PURE__*/_react.default.createElement(_styles.AddressFormWrapper, null, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 || (_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.address) || {},
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    isCustomerMode: isCustomerMode
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 25,
      controlType: 'infinity'
    },
    orderTypes: props.orderTypes || [{
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description')
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description')
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description')
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};
exports.OriginalBusinessesListing = OriginalBusinessesListing;