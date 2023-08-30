"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruckIcon = exports.StorePickupIcon = exports.HomeHero = exports.ArchiesOrderTypes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _Modal = require("../../../../../components/Modal");
var _AddressForm = require("../AddressForm");
var _AddressList = require("../AddressList");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var HomeHero = function HomeHero(props) {
  var _configState$configs, _props$beforeElements, _props$beforeComponen, _theme$images9, _theme$defaultLanguag, _theme$defaultLanguag2, _orderState$options4, _theme$defaultLanguag3, _props$afterComponent, _props$afterElements;
  var onFindBusiness = props.onFindBusiness;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modals = _useState2[0],
    setModals = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var userCustomer = parseInt(window.localStorage.getItem('user-customer'));
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var history = (0, _reactRouterDom.useHistory)();
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options;
    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options = _orderState$options.address) !== null && _orderState$options !== void 0 && _orderState$options.location)) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
      return;
    }
    setModals({
      listOpen: false,
      formOpen: false
    });
    onFindBusiness && onFindBusiness();
  };
  var handleAddressInput = function handleAddressInput() {
    var _orderState$options2;
    if (auth && orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2 = _orderState$options2.address) !== null && _orderState$options2 !== void 0 && _orderState$options2.location) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };
  (0, _react.useEffect)(function () {
    return function () {
      return setModals({
        listOpen: false,
        formOpen: false
      });
    };
  }, []);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    submited = _useState4[0],
    setSubmited = _useState4[1];
  var handleSaveAddress = function handleSaveAddress() {
    setSubmited(true);
    setModals(_objectSpread(_objectSpread({}, modals), {}, {
      formOpen: false
    }));
  };
  (0, _react.useEffect)(function () {
    var _orderState$options3;
    if (orderState !== null && orderState !== void 0 && (_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && (_orderState$options3 = _orderState$options3.address) !== null && _orderState$options3 !== void 0 && _orderState$options3.address && submited) {
      history.push('/search');
    }
  }, [orderState, submited]);
  var today = new Date();
  var curHr = today.getHours();
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    bgImage = _useState6[0],
    setBgImage = _useState6[1];
  (0, _react.useEffect)(function () {
    if (curHr < 12) {
      var _theme$images, _theme$images2, _theme$images3, _theme$images4;
      windowSize.width > 480 ? setBgImage(((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.alsea) === null || _theme$images === void 0 ? void 0 : _theme$images.moringHomeBackDesktop) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.homeHero)) : setBgImage(((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.alsea) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.moringHomeBackMobile) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.general) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.homeHero));
    } else {
      var _theme$images5, _theme$images6, _theme$images7, _theme$images8;
      windowSize.width > 480 ? setBgImage(((_theme$images5 = theme.images) === null || _theme$images5 === void 0 || (_theme$images5 = _theme$images5.alsea) === null || _theme$images5 === void 0 ? void 0 : _theme$images5.afternoonHomeBackDesktop) || ((_theme$images6 = theme.images) === null || _theme$images6 === void 0 || (_theme$images6 = _theme$images6.general) === null || _theme$images6 === void 0 ? void 0 : _theme$images6.homeHero)) : setBgImage(((_theme$images7 = theme.images) === null || _theme$images7 === void 0 || (_theme$images7 = _theme$images7.alsea) === null || _theme$images7 === void 0 ? void 0 : _theme$images7.afternoonHomeBackMobile) || ((_theme$images8 = theme.images) === null || _theme$images8 === void 0 || (_theme$images8 = _theme$images8.general) === null || _theme$images8 === void 0 ? void 0 : _theme$images8.homeHero));
    }
  }, [curHr, windowSize]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HeroContainer, {
    bgimage: bgImage
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.DiscountBars, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images9 = theme.images) === null || _theme$images9 === void 0 || (_theme$images9 = _theme$images9.alsea) === null || _theme$images9 === void 0 ? void 0 : _theme$images9.discountBanner,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_styles.SloganContent, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.TITLE_HOME) || 'All We need is Food.')), /*#__PURE__*/_react.default.createElement(ArchiesOrderTypes, {
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1,
    handleAddressInput: handleAddressInput
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ADDRESS) || 'Address'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
    // onSaveAddress={() => setModals({ ...modals, formOpen: false })}
    ,
    onSaveAddress: function onSaveAddress() {
      return handleSaveAddress();
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ADDRESSES) || 'Addresses'),
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
    userId: isNaN(userCustomer) ? null : userCustomer,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    }
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.HomeHero = HomeHero;
var ArchiesOrderTypeUI = function ArchiesOrderTypeUI(props) {
  var handleChangeOrderType = props.handleChangeOrderType,
    configTypes = props.configTypes,
    orderTypes = props.orderTypes,
    handleAddressInput = props.handleAddressInput;
  var handleOrderType = function handleOrderType(orderType) {
    if (configTypes && configTypes.includes(orderType.value)) {
      handleChangeOrderType(orderType.value);
    }
    handleAddressInput();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.WrapOrderyType, null, orderTypes && orderTypes.map(function (orderType) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeItem, {
      key: orderType.value,
      onClick: function onClick() {
        return handleOrderType(orderType);
      }
    }, orderType.icon, orderType.content);
  }));
};
var ArchiesOrderTypes = function ArchiesOrderTypes(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ArchiesOrderTypeUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      icon: /*#__PURE__*/_react.default.createElement(TruckIcon, null),
      content: /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY', 'Delivery'))
    }, {
      value: 2,
      icon: /*#__PURE__*/_react.default.createElement(StorePickupIcon, null),
      content: /*#__PURE__*/_react.default.createElement("span", null, t('PICKUP', 'Pickup'))
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};
exports.ArchiesOrderTypes = ArchiesOrderTypes;
var StorePickupIcon = function StorePickupIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/_react.default.createElement("g", {
    id: "shop-store-market-donut-drink"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M26,16a3,3,0,1,0-3-3A3,3,0,0,0,26,16Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,26,12Z"
  }), /*#__PURE__*/_react.default.createElement("rect", {
    x: "20",
    y: "47",
    width: "2",
    height: "2"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M59,56H57V28.9A5.017,5.017,0,0,0,61,24a.808.808,0,0,0-.01-.16L59.26,13.51A2.978,2.978,0,0,0,56.31,11H49V5a3.009,3.009,0,0,0-3-3H18a3.009,3.009,0,0,0-3,3v6H7.69a2.978,2.978,0,0,0-2.95,2.51L3.01,23.84A.808.808,0,0,0,3,24a5.017,5.017,0,0,0,4,4.9V56H5a3,3,0,0,0,0,6H59a3,3,0,0,0,0-6ZM53,13h3.31a.989.989,0,0,1,.98.84L59,24.08A3,3,0,0,1,53,24Zm-4,8V13h2V24a3,3,0,0,1-6,0h1A3.009,3.009,0,0,0,49,21ZM17,5a1,1,0,0,1,1-1H46a1,1,0,0,1,1,1V21a1,1,0,0,1-1,1H18a1,1,0,0,1-1-1ZM43,24a3,3,0,0,1-6,0Zm-8,0a3,3,0,0,1-6,0Zm-8,0a3,3,0,0,1-6,0ZM13,13h2v8a3.009,3.009,0,0,0,3,3h1a3,3,0,0,1-6,0ZM12,27a5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,5,5,0,0,0,8,0,4.994,4.994,0,0,0,3,1.89V56H25V43a7,7,0,0,0-14,0V56H9V28.89A4.994,4.994,0,0,0,12,27ZM23,43V56H13V43a5,5,0,0,1,10,0ZM5,24.08,6.71,13.84A.989.989,0,0,1,7.69,13H11V24a3,3,0,0,1-6,.08ZM59,60H5a1,1,0,0,1,0-2H59a1,1,0,0,1,0,2Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M43.79,10.38A1,1,0,0,0,43,10H40V8h3V6H39a1,1,0,0,0-1,1v3H35a1,1,0,0,0-.79.38,1.022,1.022,0,0,0-.18.86l2,8A1,1,0,0,0,37,20h4a1,1,0,0,0,.97-.76l2-8A1.022,1.022,0,0,0,43.79,10.38ZM40.22,18H37.78l-1.5-6h5.44Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26,6a7,7,0,1,0,7,7A7.008,7.008,0,0,0,26,6Zm0,12a5,5,0,1,1,5-5A5,5,0,0,1,26,18Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M50,32H30a3.009,3.009,0,0,0-3,3V51a3.009,3.009,0,0,0,3,3H50a3.009,3.009,0,0,0,3-3V35A3.009,3.009,0,0,0,50,32Zm1,19a1,1,0,0,1-1,1H30a1,1,0,0,1-1-1V35a1,1,0,0,1,1-1H50a1,1,0,0,1,1,1Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M44.79,40.38A1,1,0,0,0,44,40H41V38h3V36H40a1,1,0,0,0-1,1v3H36a1,1,0,0,0-.79.38,1.022,1.022,0,0,0-.18.86l2,8A1,1,0,0,0,38,50h4a1,1,0,0,0,.97-.76l2-8A1.022,1.022,0,0,0,44.79,40.38ZM41.22,48H38.78l-1.5-6h5.44Z"
  })));
};
exports.StorePickupIcon = StorePickupIcon;
var TruckIcon = function TruckIcon() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    x: "0px",
    y: "0px",
    viewBox: "0 0 462.522 462.522",
    xmlSpace: "preserve"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M432.958,222.262c-1.452-0.305-2.823-0.592-4.042-0.909c-13.821-3.594-20.129-5.564-24.793-14.569l-17.667-35.768 c-5.678-10.961-20.339-19.879-32.682-19.879h-31.453v-41.303c0-7.416-6.034-13.45-13.452-13.45l-219.07,0.22 c-7.218,0-12.661,5.736-12.661,13.343v12.208H21.018C9.429,122.156,0,131.584,0,143.174s9.429,21.018,21.018,21.018h56.119v20.145 H40.394c-11.589,0-21.018,9.429-21.018,21.018s9.429,21.018,21.018,21.018h36.743v20.145H59.77 c-11.589,0-21.018,9.429-21.018,21.018s9.429,21.018,21.018,21.018h17.367v21.07c0,7.416,6.034,13.45,13.45,13.45h22.788 c3.549,24.323,24.542,43.064,49.837,43.064c25.297,0,46.291-18.741,49.841-43.064h92.224c0.479,0,0.97-0.032,1.46-0.064 c3.522,24.354,24.528,43.128,49.845,43.128c25.297,0,46.291-18.741,49.841-43.064h32.732c12.885,0,23.368-10.482,23.368-23.366 v-39.648C462.522,228.465,444.73,224.732,432.958,222.262z M356.582,297.46c10.1,0,18.317,8.214,18.317,18.311 s-8.217,18.311-18.317,18.311c-10.096,0-18.31-8.214-18.31-18.311S346.486,297.46,356.582,297.46z M322.321,219.414v-48.77h24.036 c9.238,0,20.634,6.932,24.864,15.094l15.721,31.829c0.333,0.644,0.679,1.258,1.038,1.846H322.321z M181.529,315.77 c0,10.096-8.217,18.311-18.317,18.311c-10.096,0-18.309-8.214-18.309-18.311s8.213-18.311,18.309-18.311 C173.312,297.46,181.529,305.674,181.529,315.77z"
  }));
};
exports.TruckIcon = TruckIcon;