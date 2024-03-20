"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _IosCash = _interopRequireDefault(require("@meronex/icons/ios/IosCash"));
var _IosCard = _interopRequireDefault(require("@meronex/icons/ios/IosCard"));
var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));
var _FaStripe = _interopRequireDefault(require("@meronex/icons/fa/FaStripe"));
var _FaCcStripe = _interopRequireDefault(require("@meronex/icons/fa/FaCcStripe"));
var _FaStripeS = _interopRequireDefault(require("@meronex/icons/fa/FaStripeS"));
var _GrStripe = _interopRequireDefault(require("@meronex/icons/gr/GrStripe"));
var _EnPaypal = _interopRequireDefault(require("@meronex/icons/en/EnPaypal"));
var _orderingComponents = require("ordering-components");
var _Modal = require("../Modal");
var _PaymentOptionCash = require("../PaymentOptionCash");
var _PaymentOptionStripe = require("../PaymentOptionStripe");
var _PaymentOptionPaypal = require("../PaymentOptionPaypal");
var _StripeElementsForm = require("../StripeElementsForm");
var _StripeRedirectForm = require("../StripeRedirectForm");
var _PaymentOptionSquare = require("../PaymentOptionSquare");
var _NotFoundSource = require("../NotFoundSource");
var _utils = require("../../utils");
var _styles = require("./styles");
var _Confirm = require("../Confirm");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
      return /*#__PURE__*/_react.default.createElement(_IosCash.default, null);
    case 22:
      return /*#__PURE__*/_react.default.createElement(_FaStripe.default, null);
    case 28:
      return /*#__PURE__*/_react.default.createElement(_FaCcStripe.default, null);
    case 31:
      return /*#__PURE__*/_react.default.createElement(_FaStripeS.default, null);
    case 32:
      return /*#__PURE__*/_react.default.createElement(_GrStripe.default, null);
    case 3:
      return /*#__PURE__*/_react.default.createElement(_EnPaypal.default, null);
    default:
      return /*#__PURE__*/_react.default.createElement(_IosCard.default, null);
  }
};
var paypalBtnStyle = {
  color: 'gold',
  shape: 'pill',
  label: 'paypal',
  size: 'responsive'
};
var PaymentOptionsUI = function PaymentOptionsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _paymethodsList$error, _paymethodSelected$da2, _paymethodData$card, _paymethodData$card2, _isOpenMethod$paymeth, _isOpenMethod$paymeth2, _isOpenMethod$paymeth3, _isOpenMethod$paymeth4, _isOpenMethod$paymeth5, _isOpenMethod$paymeth6, _isOpenMethod$paymeth7, _isOpenMethod$paymeth8, _isOpenMethod$paymeth9, _isOpenMethod$paymeth10, _isOpenMethod$paymeth11, _isOpenMethod$paymeth12, _isOpenMethod$paymeth13, _isOpenMethod$paymeth14, _isOpenMethod$paymeth15, _isOpenMethod$paymeth16, _isOpenMethod$paymeth17, _isOpenMethod$paymeth18, _isOpenMethod$paymeth19, _isOpenMethod$paymeth20, _isOpenMethod$paymeth21, _props$afterComponent, _props$afterElements;
  var cart = props.cart,
    errorCash = props.errorCash,
    isLoading = props.isLoading,
    isDisabled = props.isDisabled,
    paymethodData = props.paymethodData,
    paymethodsList = props.paymethodsList,
    setPaymethodData = props.setPaymethodData,
    handleOrderRedirect = props.handleOrderRedirect,
    handlePaymethodClick = props.handlePaymethodClick,
    handlePaymethodDataChange = props.handlePaymethodDataChange,
    isCustomerMode = props.isCustomerMode,
    isOpenMethod = props.isOpenMethod,
    setCardData = props.setCardData,
    onPlaceOrderClick = props.onPlaceOrderClick,
    setCreateOrder = props.setCreateOrder,
    handlePlaceOrder = props.handlePlaceOrder,
    paymethods = props.paymethods,
    userErrors = props.userErrors,
    handleCheckoutValidationError = props.handleCheckoutValidationError;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    options = _useOrder2[0].options;
  var _useOrder3 = (0, _orderingComponents.useOrder)(),
    _useOrder4 = _slicedToArray(_useOrder3, 1),
    loadingOptions = _useOrder4[0].loading;
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var list = paymethodsList ? paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.paymethods : paymethods === null || paymethods === void 0 ? void 0 : paymethods.map(function (pay) {
    return pay.paymethod;
  });
  var paymethodSelected = props.paySelected || props.paymethodSelected;
  var methodsPay = ['google_pay', 'apple_pay'];
  var stripeDirectMethods = ['stripe_direct'].concat(methodsPay);
  var handlePaymentMethodClick = function handlePaymentMethodClick(paymethod) {
    var _validationFields$fie, _validationFields$fie2;
    if ((paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway) === 'paypal' && (userErrors === null || userErrors === void 0 ? void 0 : userErrors.length) > 0) {
      handleCheckoutValidationError();
      return;
    }
    if ((paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway) === 'paypal' && options.type === 1 && validationFields !== null && validationFields !== void 0 && (_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.checkout) !== null && _validationFields$fie !== void 0 && (_validationFields$fie = _validationFields$fie.driver_tip) !== null && _validationFields$fie !== void 0 && _validationFields$fie.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.checkout) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.driver_tip) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2.required && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0) {
      setAlertState({
        open: true,
        content: [t('DRIVER_TIPS_REQUIRED', 'Driver tips is required, please select a driver tip before select this paymethod')]
      });
      return;
    }
    var isPopupMethod = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect', 'paypal', 'square', 'google_pay', 'apple_pay'].includes(paymethod === null || paymethod === void 0 ? void 0 : paymethod.gateway);
    handlePaymethodClick(paymethod, isPopupMethod);
  };
  (0, _react.useEffect)(function () {
    if ((list === null || list === void 0 ? void 0 : list.length) === 1) {
      handlePaymethodClick && handlePaymethodClick(list[0]);
    }
  }, [list]);
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
    }
  }, [props.paySelected]);
  (0, _react.useEffect)(function () {
    var _paymethodSelected$da;
    setCardData && setCardData(paymethodData);
    if (methodsPay.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && paymethodData !== null && paymethodData !== void 0 && paymethodData.id && paymethodSelected !== null && paymethodSelected !== void 0 && (_paymethodSelected$da = paymethodSelected.data) !== null && _paymethodSelected$da !== void 0 && _paymethodSelected$da.card) {
      handlePlaceOrder();
    }
  }, [paymethodData, paymethodSelected]);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
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
  }, !(paymethodsList.loading || isLoading || loadingOptions) && (list === null || list === void 0 ? void 0 : list.length) > 0 && (list === null || list === void 0 ? void 0 : list.sort(function (a, b) {
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
    }, getPayIcon(paymethod.id), /*#__PURE__*/_react.default.createElement("p", null, t(paymethod.gateway.toUpperCase(), paymethod.name))));
  })), (paymethodsList.loading || isLoading || loadingOptions) && _toConsumableArray(Array(5).keys()).map(function (i) {
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
    content: (paymethodsList === null || paymethodsList === void 0 || (_paymethodsList$error = paymethodsList.error[0]) === null || _paymethodsList$error === void 0 ? void 0 : _paymethodsList$error.message) || (paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.error[0])
  }), !(paymethodsList.loading || isLoading || loadingOptions) && !paymethodsList.error && !(list || list !== null && list !== void 0 && list.length) && /*#__PURE__*/_react.default.createElement("p", null, t('NO_PAYMENT_METHODS', 'No payment methods!'))), (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' && /*#__PURE__*/_react.default.createElement(_PaymentOptionCash.PaymentOptionCash, {
    data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data,
    orderTotal: cart.total,
    defaultValue: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da2 = paymethodSelected.data) === null || _paymethodSelected$da2 === void 0 ? void 0 : _paymethodSelected$da2.cash,
    onChangeData: handlePaymethodDataChange,
    setErrorCash: props.setErrorCash
  }), stripeOptions.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (paymethodData === null || paymethodData === void 0 ? void 0 : paymethodData.card) && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.PayCardSelected, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "checks"
  }, /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "brand"
  }, (0, _utils.getIconCard)(paymethodData === null || paymethodData === void 0 || (_paymethodData$card = paymethodData.card) === null || _paymethodData$card === void 0 ? void 0 : _paymethodData$card.brand)), /*#__PURE__*/_react.default.createElement("span", null, "XXXX-XXXX-XXXX-", paymethodData === null || paymethodData === void 0 || (_paymethodData$card2 = paymethodData.card) === null || _paymethodData$card2 === void 0 ? void 0 : _paymethodData$card2.last4))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "modal-info",
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth === void 0 ? void 0 : _isOpenMethod$paymeth.gateway) === 'paypal' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('PAY_WITH_PAYPAL', 'Pay with PayPal')
  }, (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth2 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth2 === void 0 ? void 0 : _isOpenMethod$paymeth2.gateway) === 'paypal' && /*#__PURE__*/_react.default.createElement(_PaymentOptionPaypal.PaymentOptionPaypal, {
    clientId: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth3 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth3 === void 0 || (_isOpenMethod$paymeth3 = _isOpenMethod$paymeth3.credentials) === null || _isOpenMethod$paymeth3 === void 0 ? void 0 : _isOpenMethod$paymeth3.client_id,
    body: {
      paymethod_id: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth4 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth4 === void 0 ? void 0 : _isOpenMethod$paymeth4.id,
      amount: cart.total,
      delivery_zone_id: cart.delivery_zone_id,
      cartUuid: cart.uuid
    },
    btnStyle: paypalBtnStyle,
    noAuthMessage: !token ? t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method') : null,
    handlerChangePaypal: function handlerChangePaypal(uuid) {
      return handleOrderRedirect && handleOrderRedirect(uuid);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "modal-info",
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth5 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth5 === void 0 ? void 0 : _isOpenMethod$paymeth5.gateway) === 'stripe' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('SELECT_A_CARD', 'Select a card')
  }, ((_isOpenMethod$paymeth6 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth6 === void 0 ? void 0 : _isOpenMethod$paymeth6.gateway) === 'stripe' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth7 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth7 === void 0 || (_isOpenMethod$paymeth7 = _isOpenMethod$paymeth7.credentials) === null || _isOpenMethod$paymeth7 === void 0 ? void 0 : _isOpenMethod$paymeth7.publishable,
    payType: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth8 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth8 === void 0 ? void 0 : _isOpenMethod$paymeth8.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('SELECT_A_CARD', 'Select a card'),
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth9 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth9 === void 0 ? void 0 : _isOpenMethod$paymeth9.gateway) === 'stripe_connect' && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth10 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth10 === void 0 ? void 0 : _isOpenMethod$paymeth10.gateway) === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth11 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth11 === void 0 || (_isOpenMethod$paymeth11 = _isOpenMethod$paymeth11.credentials) === null || _isOpenMethod$paymeth11 === void 0 || (_isOpenMethod$paymeth11 = _isOpenMethod$paymeth11.stripe) === null || _isOpenMethod$paymeth11 === void 0 ? void 0 : _isOpenMethod$paymeth11.publishable,
    clientSecret: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth12 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth12 === void 0 ? void 0 : _isOpenMethod$paymeth12.credentials.publishable,
    payType: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADD_CARD', 'Add card'),
    open: (stripeDirectMethods === null || stripeDirectMethods === void 0 ? void 0 : stripeDirectMethods.includes(isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth13 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth13 === void 0 ? void 0 : _isOpenMethod$paymeth13.gateway)) && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (stripeDirectMethods === null || stripeDirectMethods === void 0 ? void 0 : stripeDirectMethods.includes(isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth14 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth14 === void 0 ? void 0 : _isOpenMethod$paymeth14.gateway)) && /*#__PURE__*/_react.default.createElement(_StripeElementsForm.StripeElementsForm, {
    methodsPay: methodsPay,
    paymethod: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth15 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth15 === void 0 ? void 0 : _isOpenMethod$paymeth15.gateway,
    cart: cart,
    businessId: props.businessId,
    publicKey: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth16 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth16 === void 0 || (_isOpenMethod$paymeth16 = _isOpenMethod$paymeth16.credentials) === null || _isOpenMethod$paymeth16 === void 0 ? void 0 : _isOpenMethod$paymeth16.publishable) || (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth17 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth17 === void 0 || (_isOpenMethod$paymeth17 = _isOpenMethod$paymeth17.credentials) === null || _isOpenMethod$paymeth17 === void 0 ? void 0 : _isOpenMethod$paymeth17.publishable_key),
    handleSource: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    },
    handlePlaceOrder: handlePlaceOrder
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('STRIPE_REDIRECT', 'Stripe Redirect'),
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth18 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth18 === void 0 ? void 0 : _isOpenMethod$paymeth18.gateway) === 'stripe_redirect' && !paymethodData.type,
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
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth19 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth19 === void 0 ? void 0 : _isOpenMethod$paymeth19.gateway) === 'square' && !paymethodData.token,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_PaymentOptionSquare.PaymentOptionSquare, {
    businessId: props.businessId,
    cartTotal: cart === null || cart === void 0 ? void 0 : cart.total,
    data: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth20 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth20 === void 0 ? void 0 : _isOpenMethod$paymeth20.credentials,
    body: {
      paymethod_id: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth21 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth21 === void 0 ? void 0 : _isOpenMethod$paymeth21.id,
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
var PaymentOptions = exports.PaymentOptions = function PaymentOptions(props) {
  var paymentOptions = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptions, paymentOptions);
};