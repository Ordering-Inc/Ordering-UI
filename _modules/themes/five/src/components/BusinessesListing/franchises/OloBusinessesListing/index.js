"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OloBusinessesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Buttons = require("../../../../styles/Buttons");
var _NotFoundSource = require("../../../NotFoundSource");
var _Modal = require("../../../Modal");
var _Confirm = require("../../../Confirm");
var _OloBusinessController = require("../../../BusinessController/franchises/OloBusinessController");
var _OloHighestRated = require("../../../HighestRated/franchises/OloHighestRated");
var _BusinessPreorder = require("../../../BusinessPreorder");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _CitiesControl = require("../../../CitiesControl");
var _utils = require("../../../../../../../utils");
var _AddressList = require("../../../AddressList");
var _AddressForm = require("../../../AddressForm");
var _Pagination = require("../../../Pagination");
var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));
var _RiArrowDropDownLine = _interopRequireDefault(require("@meronex/icons/ri/RiArrowDropDownLine"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OloBusinessesListingUI = function OloBusinessesListingUI(props) {
  var _orderState$options, _orderState$options2, _theme$business_listi, _theme$header, _orderState$options3, _orderState$options4, _configs$order_types_, _configs$google_maps_, _configs$unaddressed_, _orderState$options5, _businessesList$busin2, _orderState$options9, _theme$images2, _theme$images3, _theme$images4, _orderState$options12, _theme$defaultLanguag, _citiesState$cities4, _orderState$options14, _orderState$options15, _orderState$options16, _businessesList$busin6, _orderState$options18, _orderState$options20, _orderState$options21, _orderState$options22, _configs$meters_to_ch, _orderState$options23;
  var businessesList = props.businessesList,
    paginationProps = props.paginationProps,
    getBusinesses = props.getBusinesses,
    isCustomLayout = props.isCustomLayout,
    isCustomerMode = props.isCustomerMode,
    handleBusinessClick = props.handleBusinessClick,
    _onBusinessClick = props.onBusinessClick,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    getCities = props.getCities,
    citiesState = props.citiesState,
    orderTypes = props.orderTypes,
    franchiseId = props.franchiseId;
  var allOrderTypes = [1, 2, 3, 4, 5, 7, 8];
  var pickupTypes = [2, 3, 4, 5];
  var cateringTypes = [7, 8];
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
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    mapErrors = _useState6[0],
    setMapErrors = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isPreorder = _useState8[0],
    setIsPreorder = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    preorderBusiness = _useState10[0],
    setPreorderBusiness = _useState10[1];
  var _useState11 = (0, _react.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    hasHighRatedBusiness = _useState12[0],
    setHasHighRatedBusiness = _useState12[1];
  var _useState13 = (0, _react.useState)(pickupTypes.includes(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type)),
    _useState14 = _slicedToArray(_useState13, 2),
    isPickupSelected = _useState14[0],
    setIsPickupSelected = _useState14[1];
  var _useState15 = (0, _react.useState)(cateringTypes.includes(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type)),
    _useState16 = _slicedToArray(_useState15, 2),
    isCateringSelected = _useState16[0],
    setIsCateringSelected = _useState16[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    favoriteIds = _useState18[0],
    setFavoriteIds = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    businessesLocations = _useState20[0],
    setBusinessesLocations = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    filterByCity = _useState22[0],
    setFilterByCity = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    citySelected = _useState24[0],
    setCitySelected = _useState24[1];
  var hideHighestBusiness = theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.highest_rated_business_block) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.hidden;
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var cateringTypeString = (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 7 ? 'catering_delivery' : (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) === 8 ? 'catering_pickup' : null;
  var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').filter(function (value) {
    return allOrderTypes.includes(Number(value));
  }).map(function (value) {
    return Number(value);
  })) || [];
  var cateringValues = (preorderBusiness === null || preorderBusiness === void 0 ? void 0 : preorderBusiness.configs) && (0, _utils.getCateringValues)(cateringTypeString, preorderBusiness === null || preorderBusiness === void 0 ? void 0 : preorderBusiness.configs);
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var unaddressedTypes = (configs === null || configs === void 0 || (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isAllowUnaddressOrderType = unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type);
  var defaultLocation = {
    lat: 40.7744146,
    lng: -73.9678064
  };
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
  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
    setMapErrors('');
  };
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  var handleOpenCities = function handleOpenCities(value) {
    var _citiesState$cities;
    if (!(citiesState !== null && citiesState !== void 0 && (_citiesState$cities = citiesState.cities) !== null && _citiesState$cities !== void 0 && _citiesState$cities.length)) {
      getCities();
    }
    setFilterByCity(value);
  };
  var handleChangeCity = function handleChangeCity(cityId) {
    var _orderState$options6;
    changeCityFilter(cityId === (orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.city_id) ? null : cityId);
  };
  var handleChangeType = function handleChangeType(value) {
    if (!(orderState !== null && orderState !== void 0 && orderState.loading)) {
      changeType(value);
      if (value === 1) {
        setIsPickupSelected(false);
        setIsCateringSelected(false);
      }
    }
  };
  var handleChangeOrderTypes = function handleChangeOrderTypes(configTypes, isPickup) {
    var _orderTypes$find;
    var firstEnabledPickupType = (_orderTypes$find = orderTypes.find(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.value;
    handleChangeType(firstEnabledPickupType);
    if (isPickup) {
      setIsPickupSelected(true);
      setIsCateringSelected(false);
    } else {
      setIsCateringSelected(true);
      setIsPickupSelected(false);
    }
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  (0, _react.useEffect)(function () {
    var _businessesList$busin;
    if (!(businessesList !== null && businessesList !== void 0 && (_businessesList$busin = businessesList.businesses) !== null && _businessesList$busin !== void 0 && _businessesList$busin.length)) return;
    var ids = _toConsumableArray(favoriteIds);
    businessesList.businesses.forEach(function (business) {
      if (business !== null && business !== void 0 && business.favorite) {
        ids.push(business.id);
      }
    });
    setFavoriteIds(_toConsumableArray(new Set(ids)));
  }, [businessesList === null || businessesList === void 0 || (_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.length]);
  (0, _react.useEffect)(function () {
    var _citiesState$cities2, _orderState$options7, _citiesState$cities3;
    if (!(citiesState !== null && citiesState !== void 0 && (_citiesState$cities2 = citiesState.cities) !== null && _citiesState$cities2 !== void 0 && _citiesState$cities2.length) || !(orderState !== null && orderState !== void 0 && (_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.city_id)) return;
    var selectedCity = citiesState === null || citiesState === void 0 || (_citiesState$cities3 = citiesState.cities) === null || _citiesState$cities3 === void 0 ? void 0 : _citiesState$cities3.find(function (city) {
      var _orderState$options8;
      return (city === null || city === void 0 ? void 0 : city.id) === (orderState === null || orderState === void 0 || (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.city_id);
    });
    if (!selectedCity || !(selectedCity !== null && selectedCity !== void 0 && selectedCity.enabled)) changeCityFilter(null);
  }, [citiesState, orderState === null || orderState === void 0 || (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.city_id]);
  (0, _react.useEffect)(function () {
    var _businessesList$busin3;
    setBusinessesLocations(businessesList === null || businessesList === void 0 || (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : _businessesList$busin3.map(function (business) {
      var _theme$images;
      return _objectSpread(_objectSpread({}, business === null || business === void 0 ? void 0 : business.location), {}, {
        icon: (business === null || business === void 0 ? void 0 : business.logo) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo),
        slug: business === null || business === void 0 ? void 0 : business.slug,
        id: business === null || business === void 0 ? void 0 : business.id,
        address: business === null || business === void 0 ? void 0 : business.address
      });
    }));
  }, [businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses]);
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
    isMarkerDraggable: false
  };
  var OrderTypesComponent = function OrderTypesComponent(_ref) {
    var title = _ref.title,
      configTypes = _ref.configTypes;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AdditionalTypesWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, title), /*#__PURE__*/_react.default.createElement(_styles.AdditionalTypesContainer, null, orderTypes && (configTypes ? orderTypes.filter(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    }) : orderTypes).map(function (item, i) {
      var _orderState$options10, _orderState$options11;
      return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        key: item.value,
        onClick: function onClick() {
          return handleChangeType(item.value);
        },
        color: (orderState === null || orderState === void 0 || (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type) === (item === null || item === void 0 ? void 0 : item.value) ? 'primary' : 'secondary',
        disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
        className: (orderState === null || orderState === void 0 || (_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.type) !== (item === null || item === void 0 ? void 0 : item.value) ? 'activated' : ''
      }, item.text);
    }))));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('SELECT_YOUR_DELIVERY_TYPE', 'Select your Delivery type')), /*#__PURE__*/_react.default.createElement(_styles.Subtitle, null, t('SELECT_YOUR_DELIVERY_TYPE_DESCRIPTION', 'Please select the type of delivery for your order.')), /*#__PURE__*/_react.default.createElement(_styles.TypesContainer, null, configTypes.includes(1) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    onClick: function onClick() {
      return handleChangeType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: !isPickupSelected && !isCateringSelected
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: !isPickupSelected && !isCateringSelected
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.deliveryIco,
    width: 20,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY', 'Delivery'))), configTypes.some(function (type) {
    return pickupTypes.includes(type);
  }) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: isPickupSelected,
    onClick: function onClick() {
      return handleChangeOrderTypes(pickupTypes, true);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: isPickupSelected
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.pickupIco,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP', 'Pickup'))), configTypes.some(function (type) {
    return cateringTypes.includes(type);
  }) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: isCateringSelected,
    onClick: function onClick() {
      return handleChangeOrderTypes(cateringTypes);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: isCateringSelected
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.general) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.cateringIco,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("p", null, t('CATERING', 'Catering')))), isPickupSelected && /*#__PURE__*/_react.default.createElement(OrderTypesComponent, {
    title: t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?'),
    configTypes: pickupTypes
  }), isCateringSelected && /*#__PURE__*/_react.default.createElement(OrderTypesComponent, {
    title: t('WHAT_CATERING_YOU_NEED', 'What kind of catering do you need?'),
    configTypes: cateringTypes
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapInput, {
    onClick: handleClickAddress,
    withIcon: true
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, null), /*#__PURE__*/_react.default.createElement("p", null, (orderState === null || orderState === void 0 || (_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 || (_orderState$options12 = _orderState$options12.address) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.address) || t('WHERE_DO_WE_DELIVERY', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.WHERE_DO_WE_DELIVERY) || 'Where do we delivery?'))), /*#__PURE__*/_react.default.createElement(_styles.ViewLocations, null, /*#__PURE__*/_react.default.createElement("p", {
    onClick: function onClick() {
      return filterByCity ? handleOpenCities(false) : handleOpenCities(true);
    }
  }, filterByCity ? t('HIDE_LOCATIONS', 'Hide locations') : t('VIEW_ALL_LOCATIONS', 'View all locations'))), filterByCity && /*#__PURE__*/_react.default.createElement(_styles.CitiesContainer, null, citiesState === null || citiesState === void 0 || (_citiesState$cities4 = citiesState.cities) === null || _citiesState$cities4 === void 0 || (_citiesState$cities4 = _citiesState$cities4.filter(function (city) {
    var _businessesList$busin4;
    return (_businessesList$busin4 = businessesList.businesses) === null || _businessesList$busin4 === void 0 ? void 0 : _businessesList$busin4.some(function (business) {
      return (business === null || business === void 0 ? void 0 : business.city_id) === (city === null || city === void 0 ? void 0 : city.id);
    });
  })) === null || _citiesState$cities4 === void 0 ? void 0 : _citiesState$cities4.map(function (city, i, hash) {
    var _businessesList$busin5;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: city === null || city === void 0 ? void 0 : city.id
    }, /*#__PURE__*/_react.default.createElement(_styles.CityContainer, {
      isSelected: (citySelected === null || citySelected === void 0 ? void 0 : citySelected.id) === (city === null || city === void 0 ? void 0 : city.id),
      onClick: function onClick() {
        return setCitySelected((citySelected === null || citySelected === void 0 ? void 0 : citySelected.id) === (city === null || city === void 0 ? void 0 : city.id) ? null : city);
      }
    }, /*#__PURE__*/_react.default.createElement("h3", null, city === null || city === void 0 ? void 0 : city.name), /*#__PURE__*/_react.default.createElement(_RiArrowDropDownLine.default, {
      size: 18
    })), (citySelected === null || citySelected === void 0 ? void 0 : citySelected.id) === (city === null || city === void 0 ? void 0 : city.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_businessesList$busin5 = businessesList.businesses) === null || _businessesList$busin5 === void 0 || (_businessesList$busin5 = _businessesList$busin5.filter(function (business) {
      return (business === null || business === void 0 ? void 0 : business.city_id) === (city === null || city === void 0 ? void 0 : city.id);
    })) === null || _businessesList$busin5 === void 0 ? void 0 : _businessesList$busin5.map(function (business) {
      var _orderState$options13, _business$reviews;
      return /*#__PURE__*/_react.default.createElement(_OloBusinessController.BusinessController, {
        key: business.id,
        className: "card",
        business: business,
        isBusinessOpen: business.open,
        handleCustomClick: handleBusinessClick,
        orderType: orderState === null || orderState === void 0 || (_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : _orderState$options13.type,
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
    }), (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) < (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.LoadMoreButtonCityWrap, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return getBusinesses();
      },
      color: "primary"
    }, t('LOAD_MORE_BUSINESSES', 'Load more businesses')))), i + 1 !== (hash === null || hash === void 0 ? void 0 : hash.length) && /*#__PURE__*/_react.default.createElement(_styles.Separator, null));
  })), filterByCity && (citiesState === null || citiesState === void 0 ? void 0 : citiesState.loading) && _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 70,
      style: {
        marginBottom: 5
      },
      key: i
    });
  }), !filterByCity && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (isAllowUnaddressOrderType || (orderState === null || orderState === void 0 || (_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 || (_orderState$options14 = _orderState$options14.address) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.location)) && !isChew && hasHighRatedBusiness && !hideHighestBusiness && /*#__PURE__*/_react.default.createElement(_styles.HightestRatedWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_OloHighestRated.HighestRated, {
    propsToFetch: props.propsToFetch,
    handleClickAddress: handleClickAddress,
    setHasHighRatedBusiness: setHasHighRatedBusiness,
    onBusinessClick: _onBusinessClick,
    isCustomerMode: isCustomerMode,
    favoriteIds: favoriteIds,
    setFavoriteIds: setFavoriteIds,
    disabledCities: true,
    franchiseId: franchiseId
  }), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, (isAllowUnaddressOrderType || (orderState === null || orderState === void 0 || (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 || (_orderState$options15 = _orderState$options15.address) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.location)) && !businessesList.loading && businessesList.businesses.length === 0 && (businessesList === null || businessesList === void 0 ? void 0 : businessesList.fetched) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
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
  }, t('CHANGE_ADDRESS', 'Select other Address'))), isAllowUnaddressOrderType || orderState !== null && orderState !== void 0 && (_orderState$options16 = orderState.options) !== null && _orderState$options16 !== void 0 && (_orderState$options16 = _orderState$options16.address) !== null && _orderState$options16 !== void 0 && _orderState$options16.location ? (_businessesList$busin6 = businessesList.businesses) === null || _businessesList$busin6 === void 0 ? void 0 : _businessesList$busin6.map(function (business) {
    var _orderState$options17, _business$reviews2;
    return /*#__PURE__*/_react.default.createElement(_OloBusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: handleBusinessClick,
      orderType: orderState === null || orderState === void 0 || (_orderState$options17 = orderState.options) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      onPreorderBusiness: setPreorderBusiness,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 || (_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      handleUpdateBusinessList: handleUpdateBusinessList,
      favoriteIds: favoriteIds,
      setFavoriteIds: setFavoriteIds
    });
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('ENTER_FULL_ADDRESS_TO_ORDER', 'Enter your full street address to start your delivery order.')), (isAllowUnaddressOrderType || (orderState === null || orderState === void 0 || (_orderState$options18 = orderState.options) === null || _orderState$options18 === void 0 || (_orderState$options18 = _orderState$options18.address) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.location)) && (businessesList.loading || !(businessesList !== null && businessesList !== void 0 && businessesList.fetched)) && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? paginationProps.nextPageItems : 8).keys()).map(function (i) {
    var _orderState$options19;
    return /*#__PURE__*/_react.default.createElement(_OloBusinessController.BusinessController, {
      key: i,
      className: "card",
      business: {},
      isSkeleton: true,
      orderType: orderState === null || orderState === void 0 || (_orderState$options19 = orderState.options) === null || _orderState$options19 === void 0 ? void 0 : _orderState$options19.type
    });
  }), (isAllowUnaddressOrderType || (orderState === null || orderState === void 0 || (_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 || (_orderState$options20 = _orderState$options20.address) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.location)) && /*#__PURE__*/_react.default.createElement(_styles.PaginationContainer, null, /*#__PURE__*/_react.default.createElement(_Pagination.Pagination, {
    currentPage: paginationProps.currentPage,
    totalPages: Math.ceil(paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages),
    handleChangePage: function handleChangePage(page) {
      return getBusinesses(true, page);
    }
  })))))), !!googleMapsApiKey && ((orderState === null || orderState === void 0 || (_orderState$options21 = orderState.options) === null || _orderState$options21 === void 0 || (_orderState$options21 = _orderState$options21.address) === null || _orderState$options21 === void 0 ? void 0 : _orderState$options21.location) || isAllowUnaddressOrderType) && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    apiKey: googleMapsApiKey,
    location: (orderState === null || orderState === void 0 || (_orderState$options22 = orderState.options) === null || _orderState$options22 === void 0 || (_orderState$options22 = _orderState$options22.address) === null || _orderState$options22 === void 0 ? void 0 : _orderState$options22.location) || defaultLocation,
    locations: businessesLocations,
    onBusinessClick: function onBusinessClick(slug) {
      return _onBusinessClick({
        slug: slug
      });
    },
    businessMap: true,
    noDistanceValidation: true,
    mapControls: googleMapsControls,
    maxLimitLocation: parseInt(configs === null || configs === void 0 || (_configs$meters_to_ch = configs.meters_to_change_address) === null || _configs$meters_to_ch === void 0 ? void 0 : _configs$meters_to_ch.value)
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
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
    address: (orderState === null || orderState === void 0 || (_orderState$options23 = orderState.options) === null || _orderState$options23 === void 0 ? void 0 : _orderState$options23.address) || {},
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
var OloBusinessesListing = exports.OloBusinessesListing = function OloBusinessesListing(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OloBusinessesListingUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 25,
      controlType: 'infinity'
    },
    orderTypes: props.orderTypes || [{
      value: 1,
      text: t('DELIVERY', 'Delivery')
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup')
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside')
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru')
    }, {
      value: 7,
      text: t('CATERING_DELIVERY', 'Catering delivery')
    }, {
      value: 8,
      text: t('CATERING_PICKUP', 'Catering pickup')
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, businessListingProps);
};