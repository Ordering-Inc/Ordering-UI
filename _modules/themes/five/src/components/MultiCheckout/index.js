"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiCheckout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _NotFoundSource = require("../NotFoundSource");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Buttons = require("../../styles/Buttons");
var _Cart = require("../Cart");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _SignUpForm = require("../SignUpForm");
var _LoginForm = require("../LoginForm");
var _UserDetails = require("../UserDetails");
var _AddressDetails = require("../AddressDetails");
var _MultiCartsPaymethodsAndWallets = require("../MultiCartsPaymethodsAndWallets");
var _CouponControl = require("../../../../../components/CouponControl");
var _styles = require("./styles");
var _DriverTips = require("../DriverTips");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};
var MultiCheckoutUI = function MultiCheckoutUI(props) {
  var _Object$values, _cartGroup$result, _paymethodSelected$pa, _cardList$cards, _configs$checkout_mul, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _configs$multi_busine, _configs$driver_tip_o4, _configs$driver_tip_o5, _cartGroup$result2, _loyaltyPlansState$re, _creditPointPlan$busi, _creditPointPlan$busi2, _loyaltyPlansState$re2, _creditPointGeneralPl, _creditPointGeneralPl2, _configs$cash_wallet, _configs$wallet_enabl, _configs$wallet_cash_, _configs$wallet_credi, _configs$google_maps_, _customerState$user, _cartGroup$result3, _cartGroup$result4, _validationFields$fie5, _configs$multi_busine2, _validationFields$fie6, _configs$driver_tip_t, _configs$driver_tip_u, _configs$driver_tip_t2, _openCarts$, _configs$multi_busine6, _configs$multi_busine7, _customerState$user2;
  var placing = props.placing,
    isCustomerMode = props.isCustomerMode,
    openCarts = props.openCarts,
    loyaltyPlansState = props.loyaltyPlansState,
    handleGroupPlaceOrder = props.handleGroupPlaceOrder,
    paymethodSelected = props.paymethodSelected,
    handleSelectPaymethod = props.handleSelectPaymethod,
    handleSelectWallet = props.handleSelectWallet,
    handlePaymethodDataChange = props.handlePaymethodDataChange,
    onRedirectPage = props.onRedirectPage,
    cartGroup = props.cartGroup,
    cartUuid = props.cartUuid,
    totalCartsFee = props.totalCartsFee,
    walletState = props.walletState,
    handleSearchRedirect = props.handleSearchRedirect;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    customerState = _useCustomer2[0];
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    user = _useSession2[0].user,
    login = _useSession2[1].login;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cardList = _useState2[0],
    setCardList = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    userErrors = _useState4[0],
    setUserErrors = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    isUserDetailsEdit = _useState6[0],
    setIsUserDetailsEdit = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    requiredFields = _useState8[0],
    setRequiredFields = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isSuccess = _useState10[0],
    setIsSuccess = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpen = _useState12[0],
    setIsOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    allowedGuest = _useState14[0],
    setAllowedGuest = _useState14[1];
  var _useState15 = (0, _react.useState)({
      login: false,
      signup: false,
      isGuest: false
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    openModal = _useState16[0],
    setOpenModal = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    alertState = _useState18[0],
    setAlertState = _useState18[1];
  var walletCarts = ((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (cart === null || cart === void 0 ? void 0 : cart.valid_schedule) && (cart === null || cart === void 0 ? void 0 : cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.valid_maximum) && (cart === null || cart === void 0 ? void 0 : cart.valid_minimum) && (cart === null || cart === void 0 ? void 0 : cart.wallets);
  })) || null || [];
  var isDisablePlaceOrderButton = (cartGroup === null || cartGroup === void 0 ? void 0 : cartGroup.loading) || !(paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_id || paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) && (cartGroup === null || cartGroup === void 0 || (_cartGroup$result = cartGroup.result) === null || _cartGroup$result === void 0 ? void 0 : _cartGroup$result.balance) > 0 || (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway) === 'stripe' && !(paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe' && (cardList === null || cardList === void 0 || (_cardList$cards = cardList.cards) === null || _cardList$cards === void 0 ? void 0 : _cardList$cards.length) === 0 || walletCarts.length > 0;
  var isMultiDriverTips = (configs === null || configs === void 0 || (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var driverTipsOptions = typeof (configs === null || configs === void 0 || (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 || (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 || (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var totalFeeEnabled = (configs === null || configs === void 0 || (_configs$multi_busine = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine === void 0 ? void 0 : _configs$multi_busine.value) === '1' ? JSON.parse(configs === null || configs === void 0 || (_configs$driver_tip_o4 = configs.driver_tip_options) === null || _configs$driver_tip_o4 === void 0 ? void 0 : _configs$driver_tip_o4.value) || [] : (configs === null || configs === void 0 || (_configs$driver_tip_o5 = configs.driver_tip_options) === null || _configs$driver_tip_o5 === void 0 ? void 0 : _configs$driver_tip_o5.value) || [];
  var totalCartsPrice = cartGroup === null || cartGroup === void 0 || (_cartGroup$result2 = cartGroup.result) === null || _cartGroup$result2 === void 0 ? void 0 : _cartGroup$result2.balance;
  var methodsPay = ['global_google_pay', 'global_apple_pay'];
  var stripePaymethods = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect'];
  var creditPointPlan = loyaltyPlansState === null || loyaltyPlansState === void 0 || (_loyaltyPlansState$re = loyaltyPlansState.result) === null || _loyaltyPlansState$re === void 0 ? void 0 : _loyaltyPlansState$re.find(function (loyal) {
    return loyal.type === 'credit_point';
  });
  var businessIds = openCarts.map(function (cart) {
    return cart.business_id;
  });
  var loyalBusinessIds = (_creditPointPlan$busi = creditPointPlan === null || creditPointPlan === void 0 || (_creditPointPlan$busi2 = creditPointPlan.businesses) === null || _creditPointPlan$busi2 === void 0 ? void 0 : _creditPointPlan$busi2.filter(function (b) {
    return b.accumulates;
  }).map(function (item) {
    return item.business_id;
  })) !== null && _creditPointPlan$busi !== void 0 ? _creditPointPlan$busi : [];
  var creditPointPlanOnBusiness = businessIds.every(function (bid) {
    return loyalBusinessIds.includes(bid);
  }) && creditPointPlan;
  var creditPointGeneralPlan = loyaltyPlansState === null || loyaltyPlansState === void 0 || (_loyaltyPlansState$re2 = loyaltyPlansState.result) === null || _loyaltyPlansState$re2 === void 0 ? void 0 : _loyaltyPlansState$re2.find(function (loyal) {
    return loyal.type === 'credit_point';
  });
  var loyalBusinessAvailable = (_creditPointGeneralPl = creditPointGeneralPlan === null || creditPointGeneralPlan === void 0 || (_creditPointGeneralPl2 = creditPointGeneralPlan.businesses) === null || _creditPointGeneralPl2 === void 0 ? void 0 : _creditPointGeneralPl2.filter(function (b) {
    return b.accumulates;
  })) !== null && _creditPointGeneralPl !== void 0 ? _creditPointGeneralPl : [];
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && ((configs === null || configs === void 0 || (_configs$wallet_cash_ = configs.wallet_cash_enabled) === null || _configs$wallet_cash_ === void 0 ? void 0 : _configs$wallet_cash_.value) === '1' || (configs === null || configs === void 0 || (_configs$wallet_credi = configs.wallet_credit_point_enabled) === null || _configs$wallet_credi === void 0 ? void 0 : _configs$wallet_credi.value) === '1');
  var accumulationRateBusiness = function accumulationRateBusiness(businessId) {
    var _loyalBusinessAvailab, _loyalBusinessAvailab2, _creditPointGeneralPl3;
    var value = (_loyalBusinessAvailab = loyalBusinessAvailable === null || loyalBusinessAvailable === void 0 || (_loyalBusinessAvailab2 = loyalBusinessAvailable.find(function (loyal) {
      return loyal.business_id === businessId;
    })) === null || _loyalBusinessAvailab2 === void 0 ? void 0 : _loyalBusinessAvailab2.accumulation_rate) !== null && _loyalBusinessAvailab !== void 0 ? _loyalBusinessAvailab : 0;
    return value || ((_creditPointGeneralPl3 = creditPointGeneralPlan === null || creditPointGeneralPlan === void 0 ? void 0 : creditPointGeneralPlan.accumulation_rate) !== null && _creditPointGeneralPl3 !== void 0 ? _creditPointGeneralPl3 : 0);
  };
  var getIncludedTaxes = function getIncludedTaxes(cart) {
    if ((cart === null || cart === void 0 ? void 0 : cart.taxes) === null || !(cart !== null && cart !== void 0 && cart.taxes)) {
      var _cart$business;
      return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax_type) === 1 ? cart === null || cart === void 0 ? void 0 : cart.tax : 0;
    } else {
      return cart === null || cart === void 0 ? void 0 : cart.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (tax.type === 1 ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var clearAmount = function clearAmount(value) {
    var _configs$format_numbe, _configs$format_numbe2;
    return parseFloat((Math.trunc(value * 100) / 100).toFixed((_configs$format_numbe = (_configs$format_numbe2 = configs.format_number_decimal_length) === null || _configs$format_numbe2 === void 0 ? void 0 : _configs$format_numbe2.value) !== null && _configs$format_numbe !== void 0 ? _configs$format_numbe : 2));
  };
  var loyaltyRewardValue = openCarts.reduce(function (sum, cart) {
    return sum + clearAmount(((cart === null || cart === void 0 ? void 0 : cart.subtotal) + getIncludedTaxes(cart)) * accumulationRateBusiness(cart === null || cart === void 0 ? void 0 : cart.business_id));
  }, 0);
  var handlePlaceOrder = function handlePlaceOrder() {
    if (stripePaymethods.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && user !== null && user !== void 0 && user.guest_id) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: true,
        isGuest: true
      }));
      return;
    }
    if (!userErrors.length && (!(requiredFields !== null && requiredFields !== void 0 && requiredFields.length) || allowedGuest && ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'card_delivery'))) {
      handleGroupPlaceOrder && handleGroupPlaceOrder();
      return;
    }
    if (requiredFields !== null && requiredFields !== void 0 && requiredFields.length) {
      setIsOpen(true);
      return;
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(function (error) {
        return error;
      })
    });
    setIsUserDetailsEdit(true);
  };
  var handlePlaceOrderAsGuest = function handlePlaceOrderAsGuest() {
    setIsOpen(false);
    handleGroupPlaceOrder && handleGroupPlaceOrder();
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setIsUserDetailsEdit(false);
  };
  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _configs$verification;
    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = [];
    Object.values(validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          _requiredFields.push(field === null || field === void 0 ? void 0 : field.code);
        }
      }
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.checkout) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.cellphone) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie3 = validationFields.fields) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.cellphone) !== null && _validationFields$fie3 !== void 0 && _validationFields$fie3.required || (configs === null || configs === void 0 || (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      _requiredFields.push('cellphone');
    }
    setRequiredFields(_requiredFields);
    if (userSelected && userSelected !== null && userSelected !== void 0 && userSelected.cellphone) {
      if (userSelected !== null && userSelected !== void 0 && userSelected.country_phone_code) {
        var phone = null;
        phone = "+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code).concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone);
        var phoneNumber = (0, _libphonenumberJs.default)(phone);
        if (!(phoneNumber !== null && phoneNumber !== void 0 && phoneNumber.isValid())) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'));
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      }
    }
    setUserErrors(errors);
  };
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
    (openModal === null || openModal === void 0 ? void 0 : openModal.isGuest) && handlePlaceOrderAsGuest();
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
      signup: false,
      isGuest: false
    }));
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
      login: false
    }));
  };
  (0, _react.useEffect)(function () {
    var _validationFields$fie4;
    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie4 = validationFields.fields) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.checkout) {
      checkValidationFields();
    }
  }, [validationFields, user, customerState]);
  (0, _react.useEffect)(function () {
    if (openCarts.length || cartGroup.loading) {
      if (openCarts.length === 1) {
        onRedirectPage && onRedirectPage({
          page: 'checkout',
          params: {
            cartUuid: openCarts[0].uuid
          }
        });
      }
      return;
    }
    onRedirectPage && onRedirectPage({
      page: 'search'
    });
  }, [openCarts, cartGroup]);
  (0, _react.useEffect)(function () {
    if (walletState.error) {
      var _walletState$error;
      showToast(_orderingComponents.ToastType.Error, t(walletState.error, (_walletState$error = walletState.error) === null || _walletState$error === void 0 || (_walletState$error = _walletState$error[0]) === null || _walletState$error === void 0 ? void 0 : _walletState$error.replace(/_/g, ' ')));
    }
  }, [walletState.error]);
  (0, _react.useEffect)(function () {
    var _paymethodSelected$pa2;
    if (methodsPay.includes(paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$pa2 = paymethodSelected.paymethod) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.gateway) && typeof (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data) === 'string') {
      var _JSON$parse;
      var hasSource = (_JSON$parse = JSON.parse(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethod_data)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.source_id;
      if (hasSource) {
        handlePlaceOrder();
      }
    }
  }, [paymethodSelected]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !(cartGroup !== null && cartGroup !== void 0 && cartGroup.loading) && openCarts.length === 0 || !cartUuid ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }) : /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContent, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, {
    className: "back-arrow",
    onClick: function onClick() {
      return history.goBack();
    }
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "checkout-title"
  }, t('CHECKOUT', 'Checkout')), /*#__PURE__*/_react.default.createElement(_AddressDetails.AddressDetails, {
    isMultiCheckout: true,
    openCarts: openCarts,
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, user !== null && user !== void 0 && user.guest_id && !allowedGuest ? /*#__PURE__*/_react.default.createElement(_styles.AuthButtonList, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CUSTOMER_DETAILS', 'Customer details')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: true
      }));
    }
  }, t('SIGN_UP', 'Sign up')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        login: true
      }));
    }
  }, t('LOGIN', 'Login')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "black",
    outline: true,
    onClick: function onClick() {
      return setAllowedGuest(true);
    }
  }, t('CONTINUE_AS_GUEST', 'Continue as guest'))) : /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 || (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.id),
    isCheckout: true,
    isSuccess: isSuccess
  }))), /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement(_MultiCartsPaymethodsAndWallets.MultiCartsPaymethodsAndWallets, {
    userId: props.userId,
    openCarts: openCarts,
    balance: cartGroup === null || cartGroup === void 0 || (_cartGroup$result3 = cartGroup.result) === null || _cartGroup$result3 === void 0 ? void 0 : _cartGroup$result3.balance,
    walletsPaymethod: cartGroup === null || cartGroup === void 0 || (_cartGroup$result4 = cartGroup.result) === null || _cartGroup$result4 === void 0 ? void 0 : _cartGroup$result4.wallets,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange,
    cartUuid: cartUuid,
    isCustomerMode: isCustomerMode,
    cartGroup: cartGroup,
    setCardList: setCardList,
    handlePlaceOrder: handlePlaceOrder
  })), (validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.checkout) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.coupon) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && openCarts.every(function (cart) {
    return cart.business_id && cart.status !== 2;
  }) && (configs === null || configs === void 0 || (_configs$multi_busine2 = configs.multi_business_checkout_coupon_input_style) === null || _configs$multi_busine2 === void 0 ? void 0 : _configs$multi_busine2.value) === 'group' && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DISCOUNT_COUPON', 'Discount coupon')), /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    carts: openCarts,
    businessIds: openCarts.map(function (cart) {
      return cart.business_id;
    }),
    price: openCarts.reduce(function (total, cart) {
      return total + cart.total;
    }, 0)
  }))), isMultiDriverTips && (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && (validationFields === null || validationFields === void 0 || (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.checkout) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.driver_tip) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.enabled) && openCarts.every(function (cart) {
    return cart.business_id && cart.status !== 2;
  }) && driverTipsOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    isMulti: true,
    carts: openCarts,
    businessIds: openCarts.map(function (cart) {
      return cart.business_id;
    }),
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? openCarts === null || openCarts === void 0 ? void 0 : openCarts.reduce(function (sum, cart) {
      return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
    }, 0) : (_openCarts$ = openCarts[0]) === null || _openCarts$ === void 0 ? void 0 : _openCarts$.driver_tip_rate,
    useOrderContext: true
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CartHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MOBILE_FRONT_YOUR_ORDER', 'Your order'))), openCarts.map(function (cart) {
    var _configs$multi_busine3, _cart$products2, _configs$multi_busine4, _configs$multi_busine5, _cart$business2;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: cart.uuid
    }, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
      cart: cart,
      isMultiCheckout: true,
      isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
      hideCouponInput: (configs === null || configs === void 0 || (_configs$multi_busine3 = configs.multi_business_checkout_coupon_input_style) === null || _configs$multi_busine3 === void 0 ? void 0 : _configs$multi_busine3.value) === 'group',
      isProducts: (cart === null || cart === void 0 || (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length) || 0,
      hideDeliveryFee: (configs === null || configs === void 0 || (_configs$multi_busine4 = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine4 === void 0 ? void 0 : _configs$multi_busine4.value) === '1',
      hideDriverTip: (configs === null || configs === void 0 || (_configs$multi_busine5 = configs.multi_business_checkout_show_combined_driver_tip) === null || _configs$multi_busine5 === void 0 ? void 0 : _configs$multi_busine5.value) === '1',
      businessConfigs: cart === null || cart === void 0 || (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.configs
    }), /*#__PURE__*/_react.default.createElement(_styles.DriverTipDivider, null));
  }), walletCarts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_PARTIAL_WALLET_CARTS', 'Important: One or more carts can`t be completed due a partial payment with cash/points wallet and requires to be paid individually')), openCarts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.MultiCartPriceContainer, {
    totalFeeEnabled: totalFeeEnabled
  }, !!totalCartsFee && (configs === null || configs === void 0 || (_configs$multi_busine6 = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine6 === void 0 ? void 0 : _configs$multi_busine6.value) === '1' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('TOTAL_DELIVERY_FEE', 'Total delivery fee')), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(totalCartsFee))), openCarts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
  }, 0) > 0 && (configs === null || configs === void 0 || (_configs$multi_busine7 = configs.multi_business_checkout_show_combined_driver_tip) === null || _configs$multi_busine7 === void 0 ? void 0 : _configs$multi_busine7.value) === '1' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_TIP', 'Driver tip')), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(openCarts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
  }, 0)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')), /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(totalCartsPrice))), isWalletEnabled && !!loyaltyRewardValue && isFinite(loyaltyRewardValue) && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, "\xA0"), /*#__PURE__*/_react.default.createElement("p", null, t('REWARD_LOYALTY_POINT', 'Reward :amount: on loyalty points').replace(':amount:', loyaltyRewardValue))), /*#__PURE__*/_react.default.createElement("p", null, t('MULTI_CHECKOUT_DESCRIPTION', 'You will receive a receipt for each business. The payment is not combined between multiple stores. Each payment is processed by the store')))), /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: isDisablePlaceOrderButton || placing || (cartGroup === null || cartGroup === void 0 ? void 0 : cartGroup.loading),
    onClick: handlePlaceOrder
  }, placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CHECKOUT ', 'Checkout'),
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
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isOpen,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id),
    requiredFields: requiredFields,
    setIsSuccess: setIsSuccess,
    isCheckout: true,
    isEdit: true,
    isModal: true,
    handlePlaceOrderAsGuest: handlePlaceOrderAsGuest,
    isAllowGuest: (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'card_delivery',
    onClose: function onClose() {
      setIsOpen(false);
      handlePlaceOrder();
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.signup,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: false,
        isGuest: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true,
    isGuest: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.login,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        login: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    isPopup: true,
    isGuest: true
  }))));
};
var MultiCheckout = exports.MultiCheckout = function MultiCheckout(props) {
  var multiCheckoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MultiCheckoutUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MultiCheckout, multiCheckoutProps);
};