"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var _UserDetails = require("../UserDetails");
var _AddressDetails = require("../AddressDetails");
var _MultiCartsPaymethodsAndWallets = require("../MultiCartsPaymethodsAndWallets");
var _CouponControl = require("../../../../../components/CouponControl");
var _styles = require("./styles");
var _DriverTips = require("../DriverTips");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};
var MultiCheckoutUI = function MultiCheckoutUI(props) {
  var _paymethodSelected$pa, _cardList$cards, _Object$values, _configs$checkout_mul, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _configs$multi_busine, _configs$driver_tip_o4, _configs$driver_tip_o5, _configs$google_maps_, _customerState$user, _validationFields$fie9, _validationFields$fie10, _validationFields$fie11, _configs$multi_busine2, _validationFields$fie12, _validationFields$fie13, _validationFields$fie14, _configs$driver_tip_t, _configs$driver_tip_u, _configs$driver_tip_t2, _openCarts$, _openCarts$2, _configs$multi_busine6, _configs$multi_busine7;
  var placing = props.placing,
    isCustomerMode = props.isCustomerMode,
    openCarts = props.openCarts,
    rewardRate = props.rewardRate,
    totalCartsPrice = props.totalCartsPrice,
    handleGroupPlaceOrder = props.handleGroupPlaceOrder,
    paymethodSelected = props.paymethodSelected,
    handleSelectPaymethod = props.handleSelectPaymethod,
    handleSelectWallet = props.handleSelectWallet,
    handlePaymethodDataChange = props.handlePaymethodDataChange,
    onRedirectPage = props.onRedirectPage,
    cartGroup = props.cartGroup,
    cartUuid = props.cartUuid,
    totalCartsFee = props.totalCartsFee,
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
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var history = (0, _reactRouterDom.useHistory)();
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
  var _useState7 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    alertState = _useState8[0],
    setAlertState = _useState8[1];
  var isDisablePlaceOrderButton = !(paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_id || paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.wallet_id) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa = paymethodSelected.paymethod) === null || _paymethodSelected$pa === void 0 ? void 0 : _paymethodSelected$pa.gateway) === 'stripe' && !(paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod_data) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe' && (cardList === null || cardList === void 0 ? void 0 : (_cardList$cards = cardList.cards) === null || _cardList$cards === void 0 ? void 0 : _cardList$cards.length) === 0;
  var walletCarts = ((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (cart === null || cart === void 0 ? void 0 : cart.valid_schedule) && (cart === null || cart === void 0 ? void 0 : cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.valid_maximum) && (cart === null || cart === void 0 ? void 0 : cart.valid_minimum) && (cart === null || cart === void 0 ? void 0 : cart.wallets);
  })) || null || [];
  var isMultiDriverTips = (configs === null || configs === void 0 ? void 0 : (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var driverTipsOptions = typeof (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var totalFeeEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine === void 0 ? void 0 : _configs$multi_busine.value) === '1' ? JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o4 = configs.driver_tip_options) === null || _configs$driver_tip_o4 === void 0 ? void 0 : _configs$driver_tip_o4.value) || [] : (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o5 = configs.driver_tip_options) === null || _configs$driver_tip_o5 === void 0 ? void 0 : _configs$driver_tip_o5.value) || [];
  var loyaltyRewardValue = Math.round(openCarts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.subtotal);
  }, 0) / rewardRate);
  var handlePlaceOrder = function handlePlaceOrder() {
    if (!userErrors.length) {
      handleGroupPlaceOrder && handleGroupPlaceOrder();
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
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setIsUserDetailsEdit(false);
  };
  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _configs$verification;
    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    var userSelected = isCustomerMode ? customerState.user : user;
    Object.values(validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          errors.push(t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "The field ".concat(field === null || field === void 0 ? void 0 : field.name, " is required")));
        }
      }
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie3 = _validationFields$fie2.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie4 = _validationFields$fie3.cellphone) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie7 = _validationFields$fie6.cellphone) !== null && _validationFields$fie7 !== void 0 && _validationFields$fie7.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'));
    }
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
  (0, _react.useEffect)(function () {
    var _validationFields$fie8;
    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && _validationFields$fie8.checkout) {
      checkValidationFields();
    }
  }, [validationFields, user, customerState]);
  (0, _react.useEffect)(function () {
    if (openCarts.length || cartGroup.loading) return;
    onRedirectPage && onRedirectPage({
      page: 'search'
    });
  }, [openCarts, cartGroup]);
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
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 ? void 0 : (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.id),
    isCheckout: true
  }))), /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement(_MultiCartsPaymethodsAndWallets.MultiCartsPaymethodsAndWallets, {
    userId: props.userId,
    openCarts: openCarts,
    paymethodSelected: paymethodSelected,
    handleSelectPaymethod: handleSelectPaymethod,
    handleSelectWallet: handleSelectWallet,
    handlePaymethodDataChange: handlePaymethodDataChange,
    cartUuid: cartUuid,
    setCardList: setCardList
  })), (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie9 = validationFields.fields) === null || _validationFields$fie9 === void 0 ? void 0 : (_validationFields$fie10 = _validationFields$fie9.checkout) === null || _validationFields$fie10 === void 0 ? void 0 : (_validationFields$fie11 = _validationFields$fie10.coupon) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.enabled) && openCarts.every(function (cart) {
    return cart.business_id && cart.status !== 2;
  }) && (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine2 = configs.multi_business_checkout_coupon_input_style) === null || _configs$multi_busine2 === void 0 ? void 0 : _configs$multi_busine2.value) === 'group' && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DISCOUNT_COUPON', 'Discount coupon')), /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    carts: openCarts,
    businessIds: openCarts.map(function (cart) {
      return cart.business_id;
    }),
    price: openCarts.reduce(function (total, cart) {
      return total + cart.total;
    }, 0)
  }))), isMultiDriverTips && (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie12 = validationFields.fields) === null || _validationFields$fie12 === void 0 ? void 0 : (_validationFields$fie13 = _validationFields$fie12.checkout) === null || _validationFields$fie13 === void 0 ? void 0 : (_validationFields$fie14 = _validationFields$fie13.driver_tip) === null || _validationFields$fie14 === void 0 ? void 0 : _validationFields$fie14.enabled) && openCarts.every(function (cart) {
    return cart.business_id && cart.status !== 2;
  }) && driverTipsOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    isMulti: true,
    carts: openCarts,
    businessIds: openCarts.map(function (cart) {
      return cart.business_id;
    }),
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? (_openCarts$ = openCarts[0]) === null || _openCarts$ === void 0 ? void 0 : _openCarts$.driver_tip : (_openCarts$2 = openCarts[0]) === null || _openCarts$2 === void 0 ? void 0 : _openCarts$2.driver_tip_rate,
    useOrderContext: true
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CartHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MOBILE_FRONT_YOUR_ORDER', 'Your order'))), openCarts.map(function (cart) {
    var _configs$multi_busine3, _cart$products2, _configs$multi_busine4, _configs$multi_busine5, _cart$business;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: cart.uuid
    }, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
      cart: cart,
      isMultiCheckout: true,
      isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
      hideCouponInput: (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine3 = configs.multi_business_checkout_coupon_input_style) === null || _configs$multi_busine3 === void 0 ? void 0 : _configs$multi_busine3.value) === 'group',
      isProducts: (cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length) || 0,
      hideDeliveryFee: (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine4 = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine4 === void 0 ? void 0 : _configs$multi_busine4.value) === '1',
      hideDriverTip: (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine5 = configs.multi_business_checkout_show_combined_driver_tip) === null || _configs$multi_busine5 === void 0 ? void 0 : _configs$multi_busine5.value) === '1',
      businessConfigs: cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.configs
    }), /*#__PURE__*/_react.default.createElement(_styles.DriverTipDivider, null));
  }), walletCarts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_PARTIAL_WALLET_CARTS', 'Important: One or more carts can`t be completed due a partial payment with cash/points wallet and requires to be paid individually')), openCarts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.MultiCartPriceContainer, {
    totalFeeEnabled: totalFeeEnabled
  }, !!totalCartsFee && (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine6 = configs.multi_business_checkout_show_combined_delivery_fee) === null || _configs$multi_busine6 === void 0 ? void 0 : _configs$multi_busine6.value) === '1' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('TOTAL_DELIVERY_FEE', 'Total delivery fee')), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(totalCartsFee))), openCarts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
  }, 0) > 0 && (configs === null || configs === void 0 ? void 0 : (_configs$multi_busine7 = configs.multi_business_checkout_show_combined_driver_tip) === null || _configs$multi_busine7 === void 0 ? void 0 : _configs$multi_busine7.value) === '1' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER_TIP', 'Driver tip')), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(openCarts.reduce(function (sum, cart) {
    return sum + (cart === null || cart === void 0 ? void 0 : cart.driver_tip);
  }, 0)))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h4", null, t('TOTAL_FOR_ALL_CARTS', 'Total for all Carts')), /*#__PURE__*/_react.default.createElement("h4", null, parsePrice(totalCartsPrice))), !!loyaltyRewardValue && isFinite(loyaltyRewardValue) && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, "\xA0"), /*#__PURE__*/_react.default.createElement("p", null, t('REWARD_LOYALTY_POINT', 'Reward :amount: on loyalty points').replace(':amount:', loyaltyRewardValue))), /*#__PURE__*/_react.default.createElement("p", null, t('MULTI_CHECKOUT_DESCRIPTION', 'You will receive a receipt for each business. The payment is not combined between multiple stores. Each payment is processed by the store')))), /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
  })));
};
var MultiCheckout = function MultiCheckout(props) {
  var multiCheckoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: MultiCheckoutUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.MultiCheckout, multiCheckoutProps);
};
exports.MultiCheckout = MultiCheckout;