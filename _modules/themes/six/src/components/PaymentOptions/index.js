"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var _PaymentOptionStripe = require("../../../../../components/PaymentOptionStripe");

var _PaymentOptionPaypal = require("../../../../../components/PaymentOptionPaypal");

var _StripeElementsForm = require("../../../../../components/StripeElementsForm");

var _StripeRedirectForm = require("../../../../../components/StripeRedirectForm");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _utils = require("../../../../../utils");

var _Select = require("../../styles/Select");

var _Modal = require("../Modal");

var _PaymentOptionCash = require("../PaymentOptionCash");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  var _props$beforeElements, _props$beforeComponen, _paymethodsList$error, _paymethodSelected$da, _paymethodData$card, _paymethodData$card2, _isOpenMethod$paymeth, _isOpenMethod$paymeth2, _isOpenMethod$paymeth3, _isOpenMethod$paymeth4, _isOpenMethod$paymeth5, _isOpenMethod$paymeth6, _isOpenMethod$paymeth7, _isOpenMethod$paymeth8, _isOpenMethod$paymeth9, _isOpenMethod$paymeth10, _isOpenMethod$paymeth11, _isOpenMethod$paymeth12, _isOpenMethod$paymeth13, _isOpenMethod$paymeth14, _isOpenMethod$paymeth15, _isOpenMethod$paymeth16, _isOpenMethod$paymeth17, _isOpenMethod$paymeth18, _isOpenMethod$paymeth19, _isOpenMethod$paymeth20, _isOpenMethod$paymeth21, _props$afterComponent, _props$afterElements;

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
      isOpenMethod = props.isOpenMethod;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var paymethodSelected = props.paySelected || props.paymethodSelected;

  var handlePaymentMethodClick = function handlePaymentMethodClick(paymethodId) {
    var selectedPaymethod = paymethodsList.paymethods.find(function (paymethod) {
      return paymethod.id === paymethodId;
    });
    var isPopupMethod = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect', 'paypal'].includes(selectedPaymethod === null || selectedPaymethod === void 0 ? void 0 : selectedPaymethod.gateway);
    handlePaymethodClick(selectedPaymethod, isPopupMethod);
  };

  (0, _react.useEffect)(function () {
    if (paymethodsList.paymethods.length === 1) {
      handlePaymethodClick && handlePaymethodClick(paymethodsList.paymethods[0]);
    }
  }, [paymethodsList.paymethods]);
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

  var _paymentType = paymethodsList.paymethods.sort(function (a, b) {
    return a.id - b.id;
  }).map(function (paymethod) {
    return {
      value: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id,
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: paymethod.id
      }, (!isCustomerMode || isCustomerMode && (paymethod.gateway === 'card_delivery' || paymethod.gateway === 'cash')) && /*#__PURE__*/_react.default.createElement(_styles.PayCard, {
        isDisabled: isDisabled,
        className: "card ".concat((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id) === paymethod.id ? 'active' : '')
      }, getPayIcon(paymethod.id), /*#__PURE__*/_react.default.createElement("p", null, t(paymethod.gateway.toUpperCase(), paymethod.name))))
    };
  });

  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PayCard, null, t('SELECT_PAYMETHOD', 'Select a paymethod'));

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
  }, paymethodsList.paymethods.length > 0 && /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: placeholder,
    defaultValue: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id,
    options: _paymentType,
    onChange: function onChange(paymethod) {
      return handlePaymentMethodClick(paymethod);
    },
    isFullWidth: true
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
  }), !(paymethodsList.loading || isLoading) && !paymethodsList.error && (!(paymethodsList !== null && paymethodsList !== void 0 && paymethodsList.paymethods) || paymethodsList.paymethods.length === 0) && /*#__PURE__*/_react.default.createElement("p", null, t('NO_PAYMENT_METHODS', 'No payment methods!'))), (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' && /*#__PURE__*/_react.default.createElement(_PaymentOptionCash.PaymentOptionCash, {
    orderTotal: cart.total,
    defaultValue: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.cash,
    onChangeData: handlePaymethodDataChange,
    setErrorCash: props.setErrorCash
  }), stripeOptions.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (paymethodData === null || paymethodData === void 0 ? void 0 : paymethodData.card) && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.PayCardSelected, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "checks"
  }, /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "brand"
  }, (0, _utils.getIconCard)(paymethodData === null || paymethodData === void 0 ? void 0 : (_paymethodData$card = paymethodData.card) === null || _paymethodData$card === void 0 ? void 0 : _paymethodData$card.brand)), /*#__PURE__*/_react.default.createElement("span", null, "XXXX-XXXX-XXXX-", paymethodData === null || paymethodData === void 0 ? void 0 : (_paymethodData$card2 = paymethodData.card) === null || _paymethodData$card2 === void 0 ? void 0 : _paymethodData$card2.last4))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "modal-info",
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth === void 0 ? void 0 : _isOpenMethod$paymeth.gateway) === 'paypal' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('PAY_WITH_PAYPAL', 'Pay with PayPal')
  }, (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth2 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth2 === void 0 ? void 0 : _isOpenMethod$paymeth2.gateway) === 'paypal' && /*#__PURE__*/_react.default.createElement(_PaymentOptionPaypal.PaymentOptionPaypal, {
    clientId: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth3 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth3 === void 0 ? void 0 : (_isOpenMethod$paymeth4 = _isOpenMethod$paymeth3.credentials) === null || _isOpenMethod$paymeth4 === void 0 ? void 0 : _isOpenMethod$paymeth4.client_id,
    body: {
      paymethod_id: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth5 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth5 === void 0 ? void 0 : _isOpenMethod$paymeth5.id,
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
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth6 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth6 === void 0 ? void 0 : _isOpenMethod$paymeth6.gateway) === 'stripe' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('SELECT_A_CARD', 'Select a card')
  }, ((_isOpenMethod$paymeth7 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth7 === void 0 ? void 0 : _isOpenMethod$paymeth7.gateway) === 'stripe' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth8 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth8 === void 0 ? void 0 : (_isOpenMethod$paymeth9 = _isOpenMethod$paymeth8.credentials) === null || _isOpenMethod$paymeth9 === void 0 ? void 0 : _isOpenMethod$paymeth9.publishable,
    payType: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth10 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth10 === void 0 ? void 0 : _isOpenMethod$paymeth10.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
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
    clientSecret: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth16 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth16 === void 0 ? void 0 : _isOpenMethod$paymeth16.credentials.publishable,
    payType: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADD_CARD', 'Add card'),
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth17 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth17 === void 0 ? void 0 : _isOpenMethod$paymeth17.gateway) === 'stripe_direct' && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth18 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth18 === void 0 ? void 0 : _isOpenMethod$paymeth18.gateway) === 'stripe_direct' && /*#__PURE__*/_react.default.createElement(_StripeElementsForm.StripeElementsForm, {
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth19 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth19 === void 0 ? void 0 : (_isOpenMethod$paymeth20 = _isOpenMethod$paymeth19.credentials) === null || _isOpenMethod$paymeth20 === void 0 ? void 0 : _isOpenMethod$paymeth20.publishable,
    handleSource: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('STRIPE_REDIRECT', 'Stripe Redirect'),
    open: (isOpenMethod === null || isOpenMethod === void 0 ? void 0 : (_isOpenMethod$paymeth21 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth21 === void 0 ? void 0 : _isOpenMethod$paymeth21.gateway) === 'stripe_redirect' && !paymethodData.type,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_StripeRedirectForm.StripeRedirectForm, {
    businessId: props.businessId,
    currency: props.currency,
    paymethods: stripeRedirectOptions,
    handleStripeRedirect: handlePaymethodDataChange
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

var PaymentOptions = function PaymentOptions(props) {
  var paymentOptions = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptions, paymentOptions);
};

exports.PaymentOptions = PaymentOptions;