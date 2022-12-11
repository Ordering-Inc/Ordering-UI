"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));
var _BilStripe = _interopRequireDefault(require("@meronex/icons/bi/BilStripe"));
var _FaCcStripe = _interopRequireDefault(require("@meronex/icons/fa/FaCcStripe"));
var _FaStripeS = _interopRequireDefault(require("@meronex/icons/fa/FaStripeS"));
var _GrStripe = _interopRequireDefault(require("@meronex/icons/gr/GrStripe"));
var _EnPaypal = _interopRequireDefault(require("@meronex/icons/en/EnPaypal"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _Modal = require("../Modal");
var _Confirm = require("../Confirm");
var _PaymentOptionCash = require("../PaymentOptionCash");
var _PaymentOptionStripe = require("../PaymentOptionStripe");
var _PaymentOptionPaypal = require("../../../../../components/PaymentOptionPaypal");
var _StripeElementsForm = require("../StripeElementsForm");
var _StripeRedirectForm = require("../StripeRedirectForm");
var _NotFoundSource = require("../NotFoundSource");
var _utils = require("../../../../../utils");
var _PaymentOptionSquare = require("../../../../../components/PaymentOptionSquare");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var stripeOptions = ['stripe_direct', 'stripe', 'stripe_connect'];
var stripeRedirectOptions = [{
  name: 'Bancontact',
  value: 'bancontact'
}, {
  name: 'Alipay',
  value: 'alipay'
}, {
  name: 'Giropay',
  value: 'giropay'
}, {
  name: 'iDEAL',
  value: 'ideal'
}];
var getPayIcon = function getPayIcon(method) {
  switch (method) {
    case 1:
      return /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cash, null);
    case 22:
      return /*#__PURE__*/_react.default.createElement(_BilStripe.default, null);
    case 28:
      return /*#__PURE__*/_react.default.createElement(_FaCcStripe.default, null);
    case 31:
      return /*#__PURE__*/_react.default.createElement(_FaStripeS.default, null);
    case 32:
      return /*#__PURE__*/_react.default.createElement(_GrStripe.default, null);
    case 3:
      return /*#__PURE__*/_react.default.createElement(_EnPaypal.default, null);
    case 2:
      return /*#__PURE__*/_react.default.createElement(CreditCard2, null);
    default:
      return /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CreditCard, null);
  }
};
var CreditCard2 = function CreditCard2() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 10.8095C0.214008 10.5448 0.518751 10.3843 0.79596 10.1926C2.18389 9.23434 3.58245 8.29464 4.92594 7.28367C5.36397 6.95666 5.73379 6.55718 6.19497 6.25772C6.69996 5.93251 7.23873 5.8313 7.82194 6.01516C7.97274 6.06308 8.04345 6.02055 8.12856 5.91035C8.59475 5.30545 9.21362 5 10.0121 5C13.8989 5.00679 17.7852 5.00799 21.6711 5.00359C22.8876 4.98563 23.9664 5.91395 23.9983 7.09621C23.9983 9.4236 24.0021 11.751 23.9983 14.0784C23.9991 14.3409 23.9457 14.6009 23.8413 14.8437C23.7369 15.0864 23.5835 15.307 23.3899 15.493C23.1963 15.6789 22.9663 15.8264 22.713 15.9271C22.4597 16.0279 22.1882 16.0798 21.9139 16.08C20.6186 16.0883 19.3233 16.0883 18.028 16.08C17.8221 16.08 17.7333 16.1177 17.7001 16.3393C17.5881 17.0999 17.3572 17.8204 16.7214 18.3469C16.132 18.8344 15.4699 18.9991 14.7253 18.7062C14.5895 18.6523 14.5269 18.7122 14.4443 18.7853C14.0194 19.1644 13.5351 19.4291 12.9356 19.3986C12.3192 19.3668 11.7692 19.1805 11.4338 18.6349C11.3556 18.508 11.2899 18.5187 11.1754 18.5876C10.4457 19.056 9.08847 19.0919 8.63292 18.26C8.5597 18.1288 8.49212 18.0995 8.34069 18.157C7.62921 18.4265 6.88393 18.5223 6.12301 18.5559C4.82269 18.6158 3.52363 18.693 2.22393 18.7631C1.67139 18.793 1.11885 18.8296 0.565683 18.8493C0.301614 18.8583 0.0988693 18.7457 0.00250302 18.4942V18.2247C0.117642 17.9414 0.371698 17.8791 0.646405 17.8653C2.67698 17.7396 4.71381 17.6695 6.74063 17.5347C8.72052 17.4245 9.43138 16.1189 10.7761 14.9941C10.8634 14.9199 10.9642 14.8617 11.0734 14.8222C11.3806 14.7138 11.6891 14.6066 11.9901 14.4832C13.0983 14.0101 14.9311 13.2746 14.8379 11.8827C14.7415 10.7801 13.5163 11.064 12.7917 11.4036C11.0039 12.1864 9.23552 13.0123 7.44023 13.7801C7.16114 13.8939 6.87705 13.7861 6.76379 13.5525C6.65052 13.319 6.74376 13.0686 7.00282 12.9213C7.1302 12.8492 7.26452 12.789 7.40393 12.7416C7.58791 12.6787 7.64235 12.5619 7.64109 12.3822C7.64485 10.6538 7.61419 8.9235 7.65361 7.19623C7.66425 6.99679 7.58165 6.94887 7.4152 6.92013C7.07291 6.86023 6.80634 7.00757 6.56354 7.20761C6.23753 7.47532 5.93153 7.7664 5.59488 8.02034C4.06365 9.16726 2.47111 10.2363 0.888572 11.3168C0.509365 11.5755 0.267197 11.5282 0 11.1688V10.8095ZM13.1133 15.1109H21.7287C22.5522 15.1109 22.9871 14.6917 22.9884 13.9077C22.9884 12.4403 22.9884 10.9732 22.9884 9.50625C22.9884 9.19781 22.9884 9.19661 22.6636 9.19661C18.0973 9.19661 13.5311 9.19661 8.96519 9.19661C8.79186 9.19661 8.66483 9.2026 8.66796 9.42779C8.67797 10.2663 8.67422 11.1048 8.66796 11.9432C8.66796 12.1229 8.72303 12.1517 8.8876 12.0774C9.39509 11.8468 9.9032 11.6168 10.4182 11.4018C11.2198 11.0676 11.977 10.6418 12.7961 10.3519C13.3223 10.1657 13.8649 10.0429 14.423 10.1507C15.3879 10.3357 16.0193 11.3449 15.8316 12.3553C15.5944 13.7472 14.276 14.4569 13.1133 15.1133V15.1109ZM15.8041 7.29445H22.6398C23.0059 7.29445 23.0472 7.24294 22.9577 6.90276C22.81 6.34397 22.2838 5.97144 21.6286 5.97144C17.7598 5.97144 13.8907 5.97144 10.0215 5.97144C9.37756 5.97144 8.88635 6.33079 8.70738 6.92432C8.61352 7.23875 8.65669 7.29505 8.99398 7.29505L15.8041 7.29445ZM13.2347 16.0806H12.8843C12.3799 16.0806 12.368 16.0806 12.3048 16.5513C12.2529 16.9424 12.1678 17.3299 12.1866 17.73C12.2054 18.13 12.3674 18.3079 12.7685 18.3978C13.2184 18.4984 13.5332 18.2858 13.8192 18.0025C13.8993 17.9234 14.0175 17.8438 14.0069 17.7282C13.9575 17.2329 14.0069 16.7448 14.0826 16.2566C14.1014 16.1339 14.0451 16.077 13.9124 16.077C13.6884 16.0865 13.4625 16.0836 13.2372 16.083L13.2347 16.0806ZM15.005 17.1987C14.9997 17.2959 14.9997 17.3932 15.005 17.4904C15.0388 17.7899 15.1301 17.8647 15.443 17.8599C15.8366 17.8539 16.0919 17.63 16.299 17.3461C16.5375 17.0197 16.6182 16.6358 16.6958 16.2536C16.7221 16.1237 16.6582 16.0788 16.5287 16.08C16.1232 16.083 15.7152 16.0841 15.3122 16.08C15.1727 16.08 15.1107 16.1428 15.1013 16.2644C15.0807 16.5789 14.9918 16.8855 15.0075 17.2011L15.005 17.1987ZM9.98642 17.9426C10.487 17.9426 11.1403 17.5168 11.2079 17.1454C11.2586 16.8657 11.2861 16.5824 11.318 16.3004C11.3255 16.2309 11.3531 16.1381 11.2605 16.1009C11.2177 16.0817 11.1704 16.0738 11.1233 16.0781C11.0763 16.0824 11.0314 16.0988 10.9933 16.1255C10.9393 16.1686 10.8881 16.2148 10.84 16.2638C10.4501 16.6298 10.0953 17.0304 9.6748 17.3664C9.56091 17.4575 9.4245 17.5347 9.48144 17.7126C9.53838 17.8905 9.70045 17.9067 9.85251 17.9354C9.89687 17.9413 9.94166 17.9437 9.98642 17.9426V17.9426Z",
    fill: "#DEE2E6"
  }));
};
var paypalBtnStyle = {
  color: 'gold',
  shape: 'pill',
  label: 'paypal',
  size: 'responsive'
};
var PaymentOptionsUI = function PaymentOptionsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _paymethodsList$error, _cart$balance, _paymethodSelected$da2, _isOpenMethod$paymeth, _isOpenMethod$paymeth2, _isOpenMethod$paymeth3, _isOpenMethod$paymeth4, _isOpenMethod$paymeth5, _paymethodData$card, _paymethodData$card2, _paymethodData$card3, _isOpenMethod$paymeth6, _isOpenMethod$paymeth7, _isOpenMethod$paymeth8, _isOpenMethod$paymeth9, _isOpenMethod$paymeth10, _cart$balance2, _isOpenMethod$paymeth11, _isOpenMethod$paymeth12, _isOpenMethod$paymeth13, _isOpenMethod$paymeth14, _isOpenMethod$paymeth15, _isOpenMethod$paymeth16, _isOpenMethod$paymeth17, _isOpenMethod$paymeth18, _isOpenMethod$paymeth19, _isOpenMethod$paymeth20, _isOpenMethod$paymeth21, _isOpenMethod$paymeth22, _isOpenMethod$paymeth23, _isOpenMethod$paymeth24, _isOpenMethod$paymeth25, _isOpenMethod$paymeth26, _isOpenMethod$paymeth27, _isOpenMethod$paymeth28, _props$afterComponent, _props$afterElements;
  var cart = props.cart,
    errorCash = props.errorCash,
    isLoading = props.isLoading,
    isDisabled = props.isDisabled,
    useKioskApp = props.useKioskApp,
    paymethodData = props.paymethodData,
    paymethodsList = props.paymethodsList,
    setPaymethodData = props.setPaymethodData,
    handleOrderRedirect = props.handleOrderRedirect,
    handlePaymethodClick = props.handlePaymethodClick,
    handlePaymethodDataChange = props.handlePaymethodDataChange,
    isCustomerMode = props.isCustomerMode,
    isOpenMethod = props.isOpenMethod,
    onPaymentChange = props.onPaymentChange,
    setCreateOrder = props.setCreateOrder,
    onPlaceOrderClick = props.onPlaceOrderClick,
    handlePlaceOrder = props.handlePlaceOrder,
    paymethods = props.paymethods;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var paymethodSelected = props.paySelected || props.paymethodSelected;
  var methodsPay = ['google_pay', 'apple_pay'];
  var stripeDirectMethods = ['stripe_direct'].concat(methodsPay);
  var includeKioskPaymethods = ['cash', 'card_delivery'];
  var list = paymethodsList ? paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods : paymethods === null || paymethods === void 0 ? void 0 : paymethods.map(function (pay) {
    return pay.paymethod;
  });
  var popupMethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect', 'paypal', 'square', 'google_pay', 'apple_pay'];
  var supportedMethods = list === null || list === void 0 ? void 0 : list.filter(function (p) {
    return useKioskApp ? includeKioskPaymethods.includes(p.gateway) : p;
  });
  var handlePaymentMethodClick = function handlePaymentMethodClick(paymethod) {
    if ((cart === null || cart === void 0 ? void 0 : cart.balance) > 0) {
      var isPopupMethod = popupMethods.includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway);
      handlePaymethodClick(paymethod, isPopupMethod);
      return;
    }
    setAlertState({
      open: true,
      content: [t('CART_BALANCE_ZERO', 'Sorry, the amount to pay is equal to zero and it is not necessary to select a payment method')]
    });
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  (0, _react.useEffect)(function () {
    var _supportedMethods$;
    if ((supportedMethods === null || supportedMethods === void 0 ? void 0 : supportedMethods.length) === 1 && !paymethodSelected && !popupMethods.includes((_supportedMethods$ = supportedMethods[0]) === null || _supportedMethods$ === void 0 ? void 0 : _supportedMethods$.gateway)) {
      handlePaymethodClick && handlePaymethodClick(supportedMethods[0]);
    }
  }, [supportedMethods]);
  (0, _react.useEffect)(function () {
    if ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'cash' && errorCash) {
      props.setErrorCash(false);
    }
  }, [paymethodSelected]);
  (0, _react.useEffect)(function () {
    var _props$paySelected;
    if (props.paySelected && (_props$paySelected = props.paySelected) !== null && _props$paySelected !== void 0 && _props$paySelected.data) {
      var _props$paySelected2;
      setPaymethodData((_props$paySelected2 = props.paySelected) === null || _props$paySelected2 === void 0 ? void 0 : _props$paySelected2.data);
      var isRequiredModal = ['paypal'];
      if (isRequiredModal.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway)) {
        handlePaymentMethodClick(null);
      }
    }
  }, [props.paySelected]);
  (0, _react.useEffect)(function () {
    var _paymethodSelected$da;
    if (methodsPay.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && paymethodData !== null && paymethodData !== void 0 && paymethodData.id && paymethodSelected !== null && paymethodSelected !== void 0 && (_paymethodSelected$da = paymethodSelected.data) !== null && _paymethodSelected$da !== void 0 && _paymethodSelected$da.card) {
      handlePlaceOrder();
    }
  }, [paymethodData, paymethodSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodsList, {
    className: "payments-list"
  }, !(paymethodsList.loading || isLoading) && supportedMethods.length > 0 && supportedMethods.sort(function (a, b) {
    return a.id - b.id;
  }).map(function (paymethod) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: paymethod.id
    }, (!isCustomerMode || isCustomerMode && (paymethod.gateway === 'card_delivery' || paymethod.gateway === 'cash')) && /*#__PURE__*/_react.default.createElement(_styles.PayCard, {
      isDisabled: isDisabled,
      className: "card ".concat((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id) === paymethod.id ? 'active' : ''),
      onClick: function onClick() {
        return handlePaymentMethodClick(paymethod);
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, getPayIcon(paymethod.id)), /*#__PURE__*/_react.default.createElement("p", null, t(paymethod.gateway.toUpperCase(), paymethod.name))));
  }), (paymethodsList.loading || isLoading) && _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PayCard, {
      key: i,
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i,
      width: 100,
      height: 60,
      style: {
        marginLeft: '10px'
      }
    }));
  }), paymethodsList.error && paymethodsList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (paymethodsList === null || paymethodsList === void 0 ? void 0 : (_paymethodsList$error = paymethodsList.error[0]) === null || _paymethodsList$error === void 0 ? void 0 : _paymethodsList$error.message) || (paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.error[0])
  }), !(paymethodsList.loading || isLoading) && !paymethodsList.error && (!(paymethodsList !== null && paymethodsList !== void 0 && paymethodsList.paymethods) || supportedMethods.length === 0) && /*#__PURE__*/_react.default.createElement("p", null, t('NO_PAYMENT_METHODS', 'No payment methods!'))), (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' && /*#__PURE__*/_react.default.createElement(_PaymentOptionCash.PaymentOptionCash, {
    data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data,
    orderTotal: (_cart$balance = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance !== void 0 ? _cart$balance : cart === null || cart === void 0 ? void 0 : cart.total,
    defaultValue: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da2 = paymethodSelected.data) === null || _paymethodSelected$da2 === void 0 ? void 0 : _paymethodSelected$da2.cash,
    onChangeData: handlePaymethodDataChange,
    setErrorCash: props.setErrorCash
  }), (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth === void 0 ? void 0 : _isOpenMethod$paymeth.gateway) === 'stripe' && ((_isOpenMethod$paymeth2 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth2 === void 0 ? void 0 : _isOpenMethod$paymeth2.gateway) === 'stripe' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth3 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth3 === void 0 ? void 0 : (_isOpenMethod$paymeth4 = _isOpenMethod$paymeth3.credentials) === null || _isOpenMethod$paymeth4 === void 0 ? void 0 : _isOpenMethod$paymeth4.publishable,
    onPaymentChange: onPaymentChange,
    payType: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth5 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth5 === void 0 ? void 0 : _isOpenMethod$paymeth5.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  }), stripeOptions.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (paymethodData === null || paymethodData === void 0 ? void 0 : paymethodData.card) && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.PayCardSelected, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "checks"
  }, /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "brand"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _utils.getIconCard)(paymethodData === null || paymethodData === void 0 ? void 0 : (_paymethodData$card = paymethodData.card) === null || _paymethodData$card === void 0 ? void 0 : _paymethodData$card.brand),
    alt: paymethodData === null || paymethodData === void 0 ? void 0 : (_paymethodData$card2 = paymethodData.card) === null || _paymethodData$card2 === void 0 ? void 0 : _paymethodData$card2.brand
  })), /*#__PURE__*/_react.default.createElement("span", null, "XXXX-XXXX-XXXX-", paymethodData === null || paymethodData === void 0 ? void 0 : (_paymethodData$card3 = paymethodData.card) === null || _paymethodData$card3 === void 0 ? void 0 : _paymethodData$card3.last4))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "modal-info",
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth6 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth6 === void 0 ? void 0 : _isOpenMethod$paymeth6.gateway) === 'paypal' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('PAY_WITH_PAYPAL', 'Pay with PayPal')
  }, (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth7 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth7 === void 0 ? void 0 : _isOpenMethod$paymeth7.gateway) === 'paypal' && /*#__PURE__*/_react.default.createElement(_PaymentOptionPaypal.PaymentOptionPaypal, {
    clientId: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth8 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth8 === void 0 ? void 0 : (_isOpenMethod$paymeth9 = _isOpenMethod$paymeth8.credentials) === null || _isOpenMethod$paymeth9 === void 0 ? void 0 : _isOpenMethod$paymeth9.client_id,
    body: {
      paymethod_id: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth10 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth10 === void 0 ? void 0 : _isOpenMethod$paymeth10.id,
      amount: (_cart$balance2 = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance2 !== void 0 ? _cart$balance2 : cart.total,
      delivery_zone_id: cart.delivery_zone_id,
      cartUuid: cart.uuid
    },
    btnStyle: paypalBtnStyle,
    noAuthMessage: !token ? t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method') : null,
    handlerChangePaypal: function handlerChangePaypal(uuid) {
      return handleOrderRedirect && handleOrderRedirect(uuid);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('SELECT_A_CARD', 'Select a card'),
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth11 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth11 === void 0 ? void 0 : _isOpenMethod$paymeth11.gateway) === 'stripe_connect' && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth12 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth12 === void 0 ? void 0 : _isOpenMethod$paymeth12.gateway) === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth13 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth13 === void 0 ? void 0 : (_isOpenMethod$paymeth14 = _isOpenMethod$paymeth13.credentials) === null || _isOpenMethod$paymeth14 === void 0 ? void 0 : (_isOpenMethod$paymeth15 = _isOpenMethod$paymeth14.stripe) === null || _isOpenMethod$paymeth15 === void 0 ? void 0 : _isOpenMethod$paymeth15.publishable,
    clientSecret: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth16 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth16 === void 0 ? void 0 : (_isOpenMethod$paymeth17 = _isOpenMethod$paymeth16.credentials) === null || _isOpenMethod$paymeth17 === void 0 ? void 0 : _isOpenMethod$paymeth17.publishable,
    payType: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADD_CARD', 'Add card'),
    open: (stripeDirectMethods === null || stripeDirectMethods === void 0 ? void 0 : stripeDirectMethods.includes(isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth18 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth18 === void 0 ? void 0 : _isOpenMethod$paymeth18.gateway)) && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (stripeDirectMethods === null || stripeDirectMethods === void 0 ? void 0 : stripeDirectMethods.includes(isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth19 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth19 === void 0 ? void 0 : _isOpenMethod$paymeth19.gateway)) && /*#__PURE__*/_react.default.createElement(_StripeElementsForm.StripeElementsForm, {
    methodsPay: methodsPay,
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth20 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth20 === void 0 ? void 0 : _isOpenMethod$paymeth20.gateway,
    businessId: props.businessId,
    cart: cart,
    publicKey: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth21 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth21 === void 0 ? void 0 : (_isOpenMethod$paymeth22 = _isOpenMethod$paymeth21.credentials) === null || _isOpenMethod$paymeth22 === void 0 ? void 0 : _isOpenMethod$paymeth22.publishable) || (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth23 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth23 === void 0 ? void 0 : (_isOpenMethod$paymeth24 = _isOpenMethod$paymeth23.credentials) === null || _isOpenMethod$paymeth24 === void 0 ? void 0 : _isOpenMethod$paymeth24.publishable_key),
    handleSource: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    },
    handlePlaceOrder: handlePlaceOrder
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('STRIPE_REDIRECT', 'Stripe Redirect'),
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth25 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth25 === void 0 ? void 0 : _isOpenMethod$paymeth25.gateway) === 'stripe_redirect' && !paymethodData.type,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_StripeRedirectForm.StripeRedirectForm, {
    businessId: props.businessId,
    currency: props.currency,
    paymethods: stripeRedirectOptions,
    handleStripeRedirect: handlePaymethodDataChange
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('SQUARE', 'Square'),
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth26 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth26 === void 0 ? void 0 : _isOpenMethod$paymeth26.gateway) === 'square' && !paymethodData.token,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_PaymentOptionSquare.PaymentOptionSquare, {
    businessId: props.businessId,
    cartTotal: cart === null || cart === void 0 ? void 0 : cart.total,
    data: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth27 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth27 === void 0 ? void 0 : _isOpenMethod$paymeth27.credentials,
    body: {
      paymethod_id: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth28 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth28 === void 0 ? void 0 : _isOpenMethod$paymeth28.id,
      amount: cart.total,
      delivery_zone_id: cart.delivery_zone_id,
      cartUuid: cart.uuid
    },
    onPlaceOrderClick: onPlaceOrderClick,
    setCreateOrder: setCreateOrder
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PAYMENT_METHODS', 'Payment methods'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
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
var PaymentOptions = function PaymentOptions(props) {
  var paymentOptions = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptions, paymentOptions);
};
exports.PaymentOptions = PaymentOptions;