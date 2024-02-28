"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PFChangsHomeHero = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));
var _FiMap = _interopRequireDefault(require("@meronex/icons/fi/FiMap"));
var _IosSend = _interopRequireDefault(require("@meronex/icons/ios/IosSend"));
var _styles = require("./styles");
var _Modal = require("../../../Modal");
var _pfchangs = require("../../../../styles/Buttons/theme/pfchangs");
var _AddressForm = require("../../../AddressForm");
var _AddressList = require("../../../AddressList");
var _PFChangsBusinessListing = require("../../../BusinessesListing/layouts/PFChangsBusinessListing");
var _utils = require("../../../../../../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var PFChangsHomeHero = function PFChangsHomeHero(props) {
  var _orderState$options, _configState$configs, _configState$configs$, _theme$layouts, _theme$layouts$homepa, _theme$layouts$homepa2, _theme$layouts$homepa3, _theme$layouts$homepa4, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _orderState$options4, _orderState$options4$, _orderState$options6, _orderState$options6$, _theme$images, _theme$images$general, _theme$colors, _theme$colors2, _orderState$options7, _orderState$options7$, _orderState$options8, _orderState$options8$, _configState$configs2, _configState$configs3, _orderState$options9, _orderState$options9$, _orderState$options10, _orderState$options11, _configState$configs4, _configState$configs5, _theme$images2, _theme$images2$genera, _orderState$options12, _theme$colors3, _theme$colors4, _theme$colors5, _theme$colors6;
  var contentPosition = props.contentPosition,
    brandId = props.brandId,
    handleSetGuestLogin = props.handleSetGuestLogin,
    isShowGuestLogin = props.isShowGuestLogin;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user,
    refreshUserInfo = _useSession2[1].refreshUserInfo;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changeType = _useOrder2[1].changeType;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useSite = (0, _orderingComponents.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var nearestBusinessContainer = (0, _react.useRef)(null);
  var businessUrlTemplate = (site === null || site === void 0 ? void 0 : site.business_url_template) || '/store/:business_slug';
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modals = _useState2[0],
    setModals = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    orderTypeModal = _useState4[0],
    setOrderTypeModal = _useState4[1];
  var _useState5 = (0, _react.useState)(orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type),
    _useState6 = _slicedToArray(_useState5, 2),
    orderTypeSelected = _useState6[0],
    setOrderTypeSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showAllLocations = _useState8[0],
    setShowAllLocations = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    businessesLocations = _useState10[0],
    setBusinessesLocations = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    currentLocation = _useState12[0],
    setCurrentLocation = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    businessClikedId = _useState14[0],
    setBusinessClikedId = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    geoLocation = _useState16[0],
    setGeoLocation = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isMapReady = _useState18[0],
    setIsMapReady = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    mapActivated = _useState20[0],
    setMapActivated = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    goToElement = _useState22[0],
    setGoToElement = _useState22[1];
  var _useState23 = (0, _react.useState)({}),
    _useState24 = _slicedToArray(_useState23, 2),
    imageMapDimensions = _useState24[0],
    setImageMapDimension = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    canBeRedirected = _useState26[0],
    setCanBeRedirected = _useState26[1];
  var _useState27 = (0, _react.useState)(window.innerWidth),
    _useState28 = _slicedToArray(_useState27, 2),
    innerWidth = _useState28[0],
    setInnerWidth = _useState28[1];
  var theme = (0, _styledComponents.useTheme)();
  var isResponsive = innerWidth < 768;
  var userCustomer = parseInt(window.localStorage.getItem('user-customer'));
  var googleMapsApiKey = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.google_maps_api_key) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
  var homeBackgroundImage = theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$homepa = _theme$layouts.homepage_view) === null || _theme$layouts$homepa === void 0 ? void 0 : (_theme$layouts$homepa2 = _theme$layouts$homepa.components) === null || _theme$layouts$homepa2 === void 0 ? void 0 : (_theme$layouts$homepa3 = _theme$layouts$homepa2.homepage_header) === null || _theme$layouts$homepa3 === void 0 ? void 0 : (_theme$layouts$homepa4 = _theme$layouts$homepa3.components) === null || _theme$layouts$homepa4 === void 0 ? void 0 : _theme$layouts$homepa4.image;
  var showCities = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.business_listing_view) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.cities) !== null && _orderingTheme$theme$3 !== void 0 && _orderingTheme$theme$3.hidden);
  var businessListingProps = {
    onBusinessClick: function onBusinessClick(business) {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', {
          page: 'business',
          params: {
            business_slug: business.slug
          }
        });
      } else {
        events.emit('go_to_page', {
          page: 'business',
          search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(business.slug)
        });
      }
    },
    currentPageParam: 0,
    propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'address', 'ribbon', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id', 'configs', 'metadata'],
    onRedirectPage: function onRedirectPage(data) {
      return events.emit('go_to_page', data);
    },
    brandId: brandId
  };
  var googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  };
  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options2, _orderState$options2$;
    setShowAllLocations(false);
    setCanBeRedirected(true);
    if (!(orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2$ = _orderState$options2.address) !== null && _orderState$options2$ !== void 0 && _orderState$options2$.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
      return;
    }
    setModals({
      listOpen: false,
      formOpen: false
    });
  };
  var handleAddressInput = function handleAddressInput() {
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
  var handleChangeOrderType = function handleChangeOrderType(orderType) {
    setOrderTypeSelected(orderType);
    changeType(orderType);
  };
  var handleSaveAddress = function handleSaveAddress() {
    setCanBeRedirected(true);
    setModals(_objectSpread(_objectSpread({}, modals), {}, {
      formOpen: false
    }));
  };
  var defaultLocation = {
    lat: 19.432241,
    lng: -99.177254
  };
  (0, _react.useEffect)(function () {
    navigator.permissions.query({
      name: 'geolocation'
    }).then(function (result) {
      if (result.state === 'granted' || result.state === 'prompt') {
        setGeoLocation(true);
      } else {
        !auth && setOrderTypeModal(true);
      }
    });
    return function () {
      return setModals({
        listOpen: false,
        formOpen: false
      });
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _orderState$options3, _orderState$options3$;
    if (geoLocation && !auth && !(orderState !== null && orderState !== void 0 && (_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && (_orderState$options3$ = _orderState$options3.address) !== null && _orderState$options3$ !== void 0 && _orderState$options3$.location)) {
      setOrderTypeModal(true);
    }
  }, [geoLocation, auth, orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$.location]);
  (0, _react.useEffect)(function () {
    var imageMapDimensions = document.getElementById('wrapper-map-id');
    setImageMapDimension({
      w: imageMapDimensions.clientWidth,
      h: imageMapDimensions.clientHeight
    });
  }, []);
  (0, _react.useEffect)(function () {
    if ((user === null || user === void 0 ? void 0 : user.name) === null) {
      refreshUserInfo();
    }
  }, [user === null || user === void 0 ? void 0 : user.name]);
  (0, _react.useEffect)(function () {
    var _orderState$options5, _orderState$options5$;
    if (orderState !== null && orderState !== void 0 && (_orderState$options5 = orderState.options) !== null && _orderState$options5 !== void 0 && (_orderState$options5$ = _orderState$options5.address) !== null && _orderState$options5$ !== void 0 && _orderState$options5$.location) {
      setGoToElement(true);
    }
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : _orderState$options6$.location]);
  (0, _react.useEffect)(function () {
    var timeout;
    if (goToElement && nearestBusinessContainer !== null && nearestBusinessContainer !== void 0 && nearestBusinessContainer.current) {
      timeout = setTimeout(function () {
        var elementRect = nearestBusinessContainer.current.getBoundingClientRect();
        var offsetTop = elementRect.top + window.scrollY;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        setGoToElement(false);
      }, 2000);
    }
    return function () {
      typeof timeout === 'number' && clearTimeout(timeout);
    };
  }, [goToElement]);
  (0, _react.useEffect)(function () {
    var resizeEvent = window.addEventListener('resize', function (e) {
      setInnerWidth(e.target.innerWidth);
    });
    var isOpenAddressList = JSON.parse(window.localStorage.getItem('isOpenAddressList'));
    if (isOpenAddressList) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
      window.localStorage.removeItem('isOpenAddressList');
    }
    return function () {
      window.removeEventListener('resize', resizeEvent);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!(isShowGuestLogin !== null && isShowGuestLogin !== void 0 && isShowGuestLogin.loginModal) && !(isShowGuestLogin !== null && isShowGuestLogin !== void 0 && isShowGuestLogin.addressModal) || isShowGuestLogin !== null && isShowGuestLogin !== void 0 && isShowGuestLogin.loginModal && !(isShowGuestLogin !== null && isShowGuestLogin !== void 0 && isShowGuestLogin.addressModal)) return;
    setModals(_objectSpread(_objectSpread({}, modals), {}, {
      formOpen: true
    }));
  }, [isShowGuestLogin]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: homeBackgroundImage || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.homeHero)
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, {
    contentPosition: contentPosition
  }, /*#__PURE__*/_react.default.createElement(_styles.SearchLocationsContainer, {
    id: "search-container"
  }, /*#__PURE__*/_react.default.createElement("h1", null, auth ? "".concat(t('WELCOME_BACK', 'Welcome back'), " ").concat(user === null || user === void 0 ? void 0 : user.name) : t('WELCOME', 'Welcome')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, t('SEARCH_OR_VIEW_LOCATIONS_BELOW', 'Search or view nearby locations below'))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryPickupContainer, {
    orderTypeSelected: orderTypeSelected
  }, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: orderTypeSelected === 2 ? (props === null || props === void 0 ? void 0 : props.slug) === 'pf_changs' ? '#000' : '#FFF' : (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#FFF',
    onClick: function onClick() {
      return handleChangeOrderType(2);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: orderTypeSelected === 1 ? (props === null || props === void 0 ? void 0 : props.slug) === 'pf_changs' ? '#000' : '#FFF' : (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) || '#FFF',
    onClick: function onClick() {
      return handleChangeOrderType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('DELIVERY_UPPER', 'Delivery'))), /*#__PURE__*/_react.default.createElement(_styles.AddressInputContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapInput, {
    onClick: handleAddressInput,
    withIcon: true
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement("p", null, (orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : (_orderState$options7$ = _orderState$options7.address) === null || _orderState$options7$ === void 0 ? void 0 : _orderState$options7$.address) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?'))), /*#__PURE__*/_react.default.createElement(_IosSend.default, {
    className: "geolocation-button"
  })), /*#__PURE__*/_react.default.createElement(_styles.StartOrder, {
    ref: nearestBusinessContainer
  }, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    onClick: handleAddressInput
  }, t('START_ORDER', 'Start order'))), !isResponsive && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showCities && /*#__PURE__*/_react.default.createElement(_styles.ViewLocationsContainer, null, /*#__PURE__*/_react.default.createElement("p", {
    onClick: function onClick() {
      return !showAllLocations ? setShowAllLocations(true) : setShowAllLocations(false);
    }
  }, showAllLocations ? t('HIDE_RESTAURANTS_BY_CITY', 'Hide cities') : t('VIEW_RESTAURANTS_BY_CITY', 'View restaurants by city'))), /*#__PURE__*/_react.default.createElement(_styles.Diviver, null), /*#__PURE__*/_react.default.createElement(_PFChangsBusinessListing.PFChangsBusinesListing, _extends({}, businessListingProps, {
    filterByAddress: true,
    filterByCity: showAllLocations,
    setBusinessesLocations: setBusinessesLocations,
    businessesLocations: businessesLocations,
    isMapReady: isMapReady,
    businessClikedId: businessClikedId,
    setBusinessClikedId: setBusinessClikedId,
    currentLocation: currentLocation,
    defaultLocation: defaultLocation,
    orderTypeSelected: orderTypeSelected,
    canBeRedirected: canBeRedirected,
    mapActivated: mapActivated,
    isResponsive: isResponsive,
    handleSetGuestLogin: handleSetGuestLogin
  })))), !mapActivated && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    id: "wrapper-map-id"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.ActiveMapContainer, null, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return setMapActivated(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_FiMap.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('OPEN_MAP', 'OPEN MAP')))), imageMapDimensions.w && imageMapDimensions.h && /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _utils.getGoogleMapImage)((orderState === null || orderState === void 0 ? void 0 : (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : (_orderState$options8$ = _orderState$options8.address) === null || _orderState$options8$ === void 0 ? void 0 : _orderState$options8$.location) || defaultLocation, configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.google_maps_api_key) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value, {
      size: {
        w: imageMapDimensions.w,
        h: imageMapDimensions.h
      },
      zoom: 17
    }),
    alt: "google-maps-img",
    className: "google-maps-img",
    height: "100%",
    width: "100%"
  }))), !!googleMapsApiKey && mapActivated && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: googleMapsApiKey,
    location: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : (_orderState$options9$ = _orderState$options9.address) === null || _orderState$options9$ === void 0 ? void 0 : _orderState$options9$.location) || defaultLocation,
    locations: showAllLocations || orderState !== null && orderState !== void 0 && (_orderState$options10 = orderState.options) !== null && _orderState$options10 !== void 0 && (_orderState$options11 = _orderState$options10.address) !== null && _orderState$options11 !== void 0 && _orderState$options11.location ? businessesLocations : [],
    setCurrentLocation: setCurrentLocation,
    businessMap: true,
    pfchangs: true,
    noDistanceValidation: true,
    mapControls: googleMapsControls,
    maxLimitLocation: parseInt(configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.meters_to_change_address) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value),
    setIsMapReady: setIsMapReady,
    businessClikedId: businessClikedId,
    locationPin: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.pfLocationPin
  })), isResponsive && /*#__PURE__*/_react.default.createElement(_styles.ContainerResponsiveWrapper, null, showCities && /*#__PURE__*/_react.default.createElement(_styles.ViewLocationsContainer, null, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: "primary",
    style: {
      width: '100%'
    },
    onClick: function onClick() {
      return !showAllLocations ? setShowAllLocations(true) : setShowAllLocations(false);
    }
  }, showAllLocations ? t('HIDE_ALL_CITIES', 'Hide all cities') : t('VIEW_ALL_CITIES', 'View all cities'))), /*#__PURE__*/_react.default.createElement(_styles.Diviver, null), /*#__PURE__*/_react.default.createElement(_PFChangsBusinessListing.PFChangsBusinesListing, _extends({}, businessListingProps, {
    filterByAddress: true,
    filterByCity: showAllLocations,
    setBusinessesLocations: setBusinessesLocations,
    businessesLocations: businessesLocations,
    isMapReady: isMapReady,
    businessClikedId: businessClikedId,
    setBusinessClikedId: setBusinessClikedId,
    currentLocation: currentLocation,
    defaultLocation: defaultLocation,
    orderTypeSelected: orderTypeSelected,
    canBeRedirected: canBeRedirected,
    mapActivated: mapActivated
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return handleSaveAddress();
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    geoLocation: geoLocation,
    pfchangs: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modals.listOpen,
    width: "80%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer) ? null : userCustomer,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    },
    geoLocation: geoLocation
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ELIGE_TIPO_DE_ENTREGA', 'Elige el tipo de entrega'),
    titleAlign: "left",
    open: orderTypeModal,
    onClose: function onClose() {
      return setOrderTypeModal(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.DeliveryPickupContainer, {
    orderTypeSelected: orderTypeSelected,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: orderTypeSelected === 2 ? (props === null || props === void 0 ? void 0 : props.slug) === 'pf_changs' ? '#000' : '#FFF' : (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#FFF',
    onClick: function onClick() {
      handleChangeOrderType(2);
      setOrderTypeModal(false);
      handleSetGuestLogin && handleSetGuestLogin('addressModal', true);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: orderTypeSelected === 1 ? (props === null || props === void 0 ? void 0 : props.slug) === 'pf_changs' ? '#000' : '#FFF' : (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.tertiary) || '#FFF',
    onClick: function onClick() {
      handleChangeOrderType(1);
      setOrderTypeModal(false);
      handleSetGuestLogin && handleSetGuestLogin('addressModal', true);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('DELIVERY_UPPER', 'Delivery'))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: 10,
      display: 'flex',
      background: '#F8F9FA'
    }
  }), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 16,
      fontWeight: 700
    }
  }, t('LOGIN_OR_REGISTER', 'Iniciar sesión o regístrate')), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: (props === null || props === void 0 ? void 0 : props.slug) === 'pf_changs' ? '#000' : '#FFF',
    onClick: function onClick() {
      handleSetGuestLogin && handleSetGuestLogin('loginModal', true);
      setOrderTypeModal(false);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('LOGIN', 'Iniciar sesión')), /*#__PURE__*/_react.default.createElement("div", {
    className: "seperator"
  }, /*#__PURE__*/_react.default.createElement("p", null, "o")), /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: (theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.gold) || '#FFF',
    onClick: function onClick() {
      handleSetGuestLogin && handleSetGuestLogin('loginModal', true);
      setOrderTypeModal(false);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    style: {
      border: '1px solid' + (theme === null || theme === void 0 ? void 0 : (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.gold),
      background: 'none'
    }
  }, t('REGISTER', 'Regístrate'))))));
};
exports.PFChangsHomeHero = PFChangsHomeHero;