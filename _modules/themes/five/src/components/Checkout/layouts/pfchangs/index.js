"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _Modal = require("../../../Modal");

var _orderingComponents = require("ordering-components");

var _UpsellingPage = require("../../../UpsellingPage");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _reactRouterDom = require("react-router-dom");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styles = require("./styles");

var _Buttons = require("../../../../styles/Buttons");

var _Inputs = require("../../../../styles/Inputs");

var _NotFoundSource = require("../../../NotFoundSource");

var _AddressDetails = require("../../../AddressDetails");

var _pfchangs = require("../../../UserDetails/layouts/pfchangs");

var _PaymentOptions = require("../../../PaymentOptions");

var _PaymentOptionWallet = require("../../../PaymentOptionWallet");

var _DriverTips = require("../../../DriverTips");

var _pfchangs2 = require("../../../Cart/layouts/pfchangs");

var _Confirm = require("../../../Confirm");

var _CartContent = require("../../../CartContent");

var _Select = require("../../../../styles/Select");

var _PlaceSpot = require("../../../PlaceSpot");

var _pfchangs3 = require("../../../AddressForm/layouts/pfchangs");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};

var CheckoutUI = function CheckoutUI(props) {
  var _businessDetails$busi, _businessDetails$busi2, _businessConfigs$find, _businessConfigs$find2, _configs$cash_wallet, _configs$wallet_enabl, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _instructionsOptions$, _instructionsOptions$2, _customerState$user, _customerState$user2, _configs$driver_tip_t, _configs$driver_tip_t2, _businessDetails$busi3, _businessDetails$busi4, _businessDetails$busi5, _Object$values, _businessDetails$busi6, _businessDetails$busi7, _cart$products2, _validationFields$fie15, _validationFields$fie16, _validationFields$fie17, _validationFields$fie18, _validationFields$fie19, _validationFields$fie20, _customerState$user3;

  var cart = props.cart,
      errors = props.errors,
      placing = props.placing,
      cartState = props.cartState,
      useKioskApp = props.useKioskApp,
      businessDetails = props.businessDetails,
      paymethodSelected = props.paymethodSelected,
      handlePaymethodChange = props.handlePaymethodChange,
      handlerClickPlaceOrder = props.handlerClickPlaceOrder,
      handleOrderRedirect = props.handleOrderRedirect,
      isCustomerMode = props.isCustomerMode,
      isResetPaymethod = props.isResetPaymethod,
      setIsResetPaymethod = props.setIsResetPaymethod,
      handleChangeDeliveryOption = props.handleChangeDeliveryOption,
      instructionsOptions = props.instructionsOptions,
      deliveryOptionSelected = props.deliveryOptionSelected,
      handleStoreRedirect = props.handleStoreRedirect,
      onPlaceOrderClick = props.onPlaceOrderClick;
  var theme = (0, _styledComponents.useTheme)();

  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
      _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
      validationFields = _useValidationFields2[0]; // const [{ options, loading }, { changePaymethod }] = useOrder()


  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      _useOrder2$ = _useOrder2[0],
      options = _useOrder2$.options,
      loading = _useOrder2$.loading;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 1),
      customerState = _useCustomer2[0];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var history = (0, _reactRouterDom.useHistory)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      errorCash = _useState2[0],
      setErrorCash = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      userErrors = _useState4[0],
      setUserErrors = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      isUserDetailsEdit = _useState8[0],
      setIsUserDetailsEdit = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      behalfName = _useState10[0],
      setBehalfName = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isOpen = _useState12[0],
      setIsOpen = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      requiredFields = _useState14[0],
      setRequiredFields = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isSuccess = _useState16[0],
      setIsSuccess = _useState16[1];

  var _useState17 = (0, _react.useState)(true),
      _useState18 = _slicedToArray(_useState17, 2),
      hasWallets = _useState18[0],
      setHasWallets = _useState18[1];

  var businessConfigs = (_businessDetails$busi = businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.configs) !== null && _businessDetails$busi !== void 0 ? _businessDetails$busi : [];
  var isWalletCashEnabled = ((_businessConfigs$find = businessConfigs.find(function (config) {
    return config.key === 'wallet_cash_enabled';
  })) === null || _businessConfigs$find === void 0 ? void 0 : _businessConfigs$find.value) === '1';
  var isWalletCreditPointsEnabled = ((_businessConfigs$find2 = businessConfigs.find(function (config) {
    return config.key === 'wallet_credit_point_enabled';
  })) === null || _businessConfigs$find2 === void 0 ? void 0 : _businessConfigs$find2.value) === '1';
  var isWalletEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 ? void 0 : (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !useKioskApp;
  var placeSpotTypes = [3, 4, 5];
  var placeSpotsEnabled = placeSpotTypes.includes(options === null || options === void 0 ? void 0 : options.type) && !useKioskApp; // const [hasBusinessPlaces, setHasBusinessPlaces] = useState(null)

  var isDisablePlaceOrderButton = !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 || placing || errorCash || loading || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || // (((placeSpotTypes.includes(options?.type) && !cart?.place) && hasBusinessPlaces)) ||
  options.type === 1 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.driver_tip) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled) && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : (_validationFields$fie5 = _validationFields$fie4.checkout) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.driver_tip) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0;
  var tipsDefault = [0, 18, 20, 22];
  var driverTipsOptions = typeof (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || tipsDefault : (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || tipsDefault;
  var deliveryOptions = (instructionsOptions === null || instructionsOptions === void 0 ? void 0 : instructionsOptions.result) && (instructionsOptions === null || instructionsOptions === void 0 ? void 0 : (_instructionsOptions$ = instructionsOptions.result) === null || _instructionsOptions$ === void 0 ? void 0 : (_instructionsOptions$2 = _instructionsOptions$.filter(function (option) {
    return option === null || option === void 0 ? void 0 : option.enabled;
  })) === null || _instructionsOptions$2 === void 0 ? void 0 : _instructionsOptions$2.map(function (option) {
    return {
      value: option === null || option === void 0 ? void 0 : option.id,
      content: t(option === null || option === void 0 ? void 0 : option.name.toUpperCase().replace(/\s/g, '_'), option === null || option === void 0 ? void 0 : option.name),
      showOnSelected: t(option === null || option === void 0 ? void 0 : option.name.toUpperCase().replace(/\s/g, '_'), option === null || option === void 0 ? void 0 : option.name)
    };
  }));

  var handlePlaceOrder = function handlePlaceOrder() {
    if (!userErrors.length && !(requiredFields !== null && requiredFields !== void 0 && requiredFields.length)) {
      var body = {};

      if (behalfName) {
        body.on_behalf_of = behalfName;
      }

      handlerClickPlaceOrder && handlerClickPlaceOrder(null, body);
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

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setIsUserDetailsEdit(false);
  };

  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _validationFields$fie11, _validationFields$fie12, _validationFields$fie13, _configs$verification;

    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = [];
    Object.values(validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          _requiredFields.push(field === null || field === void 0 ? void 0 : field.code);
        }
      }
    });

    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && (_validationFields$fie9 = _validationFields$fie8.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie10 = _validationFields$fie9.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie11 = validationFields.fields) !== null && _validationFields$fie11 !== void 0 && (_validationFields$fie12 = _validationFields$fie11.checkout) !== null && _validationFields$fie12 !== void 0 && (_validationFields$fie13 = _validationFields$fie12.cellphone) !== null && _validationFields$fie13 !== void 0 && _validationFields$fie13.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
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

  var handleGoToStore = function handleGoToStore(slug) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: slug
      }
    });
  };

  (0, _react.useEffect)(function () {
    var _validationFields$fie14;

    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie14 = validationFields.fields) !== null && _validationFields$fie14 !== void 0 && _validationFields$fie14.checkout) {
      checkValidationFields();
    }
  }, [validationFields, user, customerState]);
  (0, _react.useEffect)(function () {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (isResetPaymethod) {
      handlePaymethodChange(null);
      setIsResetPaymethod(true); // changePaymethod(cart?.business_id, null, null)
    }
  }, [isResetPaymethod]);
  (0, _react.useEffect)(function () {
    var _cart$products, _cart$business;

    if (cart !== null && cart !== void 0 && (_cart$products = cart.products) !== null && _cart$products !== void 0 && _cart$products.length) return;
    handleStoreRedirect(cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug);
  }, [cart === null || cart === void 0 ? void 0 : cart.products]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isLoading: cartState.loading
  }, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.GoBackContainer, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, {
    className: "back-arrow",
    onClick: function onClick() {
      return history.goBack();
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContent, null, !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, cartState.loading || isCustomerMode && !(customerState !== null && customerState !== void 0 && (_customerState$user = customerState.user) !== null && _customerState$user !== void 0 && _customerState$user.id) ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: '50px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  })) : /*#__PURE__*/_react.default.createElement(_pfchangs.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 ? void 0 : (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id),
    isSuccess: isSuccess,
    isCheckout: true
  }))), !(cartState !== null && cartState !== void 0 && cartState.loading) ? /*#__PURE__*/_react.default.createElement(_styles.HandoffContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ItemHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('HANDOFF_DETAILS', 'Handoff Details'))), /*#__PURE__*/_react.default.createElement(_styles.HandoffContent, null, /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_ADDRESS', 'Your Address')), /*#__PURE__*/_react.default.createElement(_pfchangs3.AddressForm, {
    useValidationFileds: true,
    address: (options === null || options === void 0 ? void 0 : options.address) || {}
  }))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30,
    style: {
      margin: '10px 0px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    style: {
      marginBottom: '10px'
    }
  }))), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && driverTipsOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ItemHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_TIP', 'Add Tip'))), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    driverTip: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true,
    pfchangs: true
  }))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ItemHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods'))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    useKioskApp: useKioskApp,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.id,
    isLoading: businessDetails.loading,
    paymethods: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isCustomerMode: isCustomerMode,
    paySelected: paymethodSelected,
    handlePlaceOrder: handlePlaceOrder,
    onPlaceOrderClick: onPlaceOrderClick
  })), isWalletEnabled && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.loading) && hasWallets && /*#__PURE__*/_react.default.createElement(_styles.WalletPaymentOptionContainer, null, /*#__PURE__*/_react.default.createElement(_PaymentOptionWallet.PaymentOptionWallet, {
    cart: cart,
    businessConfigs: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.configs,
    setHasWallets: setHasWallets
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.loading) || cartState.loading) && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.error) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }))), !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && ((_Object$values = Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.BusinessDetails, null, /*#__PURE__*/_react.default.createElement("img", {
    src: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi6 = businessDetails.business) === null || _businessDetails$busi6 === void 0 ? void 0 : _businessDetails$busi6.header
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi7 = businessDetails.business) === null || _businessDetails$busi7 === void 0 ? void 0 : _businessDetails$busi7.name), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      var _cart$business2, _cart$business3;

      return (cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.slug) && handleGoToStore(cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.slug);
    }
  }, ('GO_TO_BUSINESS', 'Go to business')))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement(_pfchangs2.Cart, {
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    cart: cart,
    useKioskApp: useKioskApp,
    isCheckout: true,
    isProducts: (cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length) || 0
  })), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: isDisablePlaceOrderButton,
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')), options.type === 1 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie15 = validationFields.fields) === null || _validationFields$fie15 === void 0 ? void 0 : (_validationFields$fie16 = _validationFields$fie15.checkout) === null || _validationFields$fie16 === void 0 ? void 0 : (_validationFields$fie17 = _validationFields$fie16.driver_tip) === null || _validationFields$fie17 === void 0 ? void 0 : _validationFields$fie17.enabled) && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie18 = validationFields.fields) === null || _validationFields$fie18 === void 0 ? void 0 : (_validationFields$fie19 = _validationFields$fie18.checkout) === null || _validationFields$fie19 === void 0 ? void 0 : (_validationFields$fie20 = _validationFields$fie19.driver_tip) === null || _validationFields$fie20 === void 0 ? void 0 : _validationFields$fie20.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CUSTOMER_DETAILS', 'Customer Details'),
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
  }, /*#__PURE__*/_react.default.createElement(_pfchangs.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 ? void 0 : (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id),
    requiredFields: requiredFields,
    setIsSuccess: setIsSuccess,
    isCheckout: true,
    isEdit: true,
    isModal: true,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  })));
};

var Checkout = function Checkout(props) {
  var _Object$values2, _cartState$error, _cartState$cart;

  var errors = props.errors,
      clearErrors = props.clearErrors,
      cartUuid = props.cartUuid,
      handleOrderRedirect = props.handleOrderRedirect,
      handleCheckoutRedirect = props.handleCheckoutRedirect,
      handleSearchRedirect = props.handleSearchRedirect,
      handleCheckoutListRedirect = props.handleCheckoutListRedirect;

  var _useOrder3 = (0, _orderingComponents.useOrder)(),
      _useOrder4 = _slicedToArray(_useOrder3, 2),
      orderState = _useOrder4[0],
      confirmCart = _useOrder4[1].confirmCart;

  var _useSession3 = (0, _orderingComponents.useSession)(),
      _useSession4 = _slicedToArray(_useSession3, 1),
      token = _useSession4[0].token;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var _useState19 = (0, _react.useState)({
    loading: true,
    error: null,
    cart: null
  }),
      _useState20 = _slicedToArray(_useState19, 2),
      cartState = _useState20[0],
      setCartState = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = _slicedToArray(_useState21, 2),
      openUpselling = _useState22[0],
      setOpenUpselling = _useState22[1];

  var _useState23 = (0, _react.useState)(false),
      _useState24 = _slicedToArray(_useState23, 2),
      canOpenUpselling = _useState24[0],
      setCanOpenUpselling = _useState24[1];

  var _useState25 = (0, _react.useState)(null),
      _useState26 = _slicedToArray(_useState25, 2),
      currentCart = _useState26[0],
      setCurrentCart = _useState26[1];

  var _useState27 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState28 = _slicedToArray(_useState27, 2),
      alertState = _useState28[0],
      setAlertState = _useState28[1];

  var _useState29 = (0, _react.useState)(false),
      _useState30 = _slicedToArray(_useState29, 2),
      isResetPaymethod = _useState30[0],
      setIsResetPaymethod = _useState30[1];

  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && (((_Object$values2 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.filter(function (cart) {
    var _cart$products3;

    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 ? void 0 : (_cart$products3 = cart.products) === null || _cart$products3 === void 0 ? void 0 : _cart$products3.length);
  })) || null);

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    clearErrors && clearErrors();
  };

  var handleUpsellingPage = function handleUpsellingPage() {
    setOpenUpselling(false);
    setCurrentCart(null);
    setCanOpenUpselling(false);
    handleCheckoutRedirect(currentCart.uuid);
  };

  (0, _react.useEffect)(function () {
    if (!orderState.loading && currentCart !== null && currentCart !== void 0 && currentCart.business_id) {
      var _Object$values3;

      setCurrentCart.apply(void 0, _toConsumableArray((_Object$values3 = Object.values(orderState.carts)) === null || _Object$values3 === void 0 ? void 0 : _Object$values3.filter(function (cart) {
        return (cart === null || cart === void 0 ? void 0 : cart.business_id) === (currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id);
      })));
    }
  }, [orderState.loading]);
  (0, _react.useEffect)(function () {
    if (currentCart !== null && currentCart !== void 0 && currentCart.products) {
      setOpenUpselling(true);
    }
  }, [currentCart]);
  (0, _react.useEffect)(function () {
    if (errors !== null && errors !== void 0 && errors.length) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);

  var getOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(cartId) {
      var _result$order, userCustomer, url, response, _yield$response$json, result, _confirmCartRes$resul, confirmCartRes, cart, spotNumberFromStorage, _JSON$parse, _JSON$parse2, _cart, _cart$business4, spotNumber, slug;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: true
              }));
              userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
              url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
              _context.next = 6;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 6:
              response = _context.sent;
              _context.next = 9;
              return response.json();

            case 9:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;

              if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
                _context.next = 16;
                break;
              }

              handleOrderRedirect(result.order.uuid);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false
              }));
              _context.next = 35;
              break;

            case 16:
              if (!(result.status === 2)) {
                _context.next = 31;
                break;
              }

              _context.prev = 17;
              _context.next = 20;
              return confirmCart(cartUuid);

            case 20:
              confirmCartRes = _context.sent;

              if (confirmCartRes.error) {
                setAlertState({
                  open: true,
                  content: typeof confirmCartRes.result === 'string' ? [confirmCartRes.result] : confirmCartRes.result
                });
                setIsResetPaymethod(true);
              }

              if ((_confirmCartRes$resul = confirmCartRes.result.order) !== null && _confirmCartRes$resul !== void 0 && _confirmCartRes$resul.uuid) {
                handleOrderRedirect(confirmCartRes.result.order.uuid);
              }

              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: result
              }));
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](17);
              setAlertState({
                open: true,
                content: [_context.t0.message]
              });

            case 29:
              _context.next = 35;
              break;

            case 31:
              cart = Array.isArray(result) ? null : result;
              spotNumberFromStorage = window.localStorage.getItem('table_number');

              if (spotNumberFromStorage) {
                spotNumber = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.tableNumber;
                slug = (_JSON$parse2 = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.slug;

                if (((_cart = cart) === null || _cart === void 0 ? void 0 : (_cart$business4 = _cart.business) === null || _cart$business4 === void 0 ? void 0 : _cart$business4.slug) === slug) {
                  cart = _objectSpread(_objectSpread({}, cart), {}, {
                    spot_number: parseInt(spotNumber, 10)
                  });
                }
              }

              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: cart,
                error: cart ? null : result
              }));

            case 35:
              _context.next = 40;
              break;

            case 37:
              _context.prev = 37;
              _context.t1 = _context["catch"](0);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                error: [_context.t1.toString()]
              }));

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 37], [17, 26]]);
    }));

    return function getOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (token && cartUuid) {
      getOrder(cartUuid);
    }
  }, [token, cartUuid]);

  var checkoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutUI,
    cartState: cartState,
    uuid: cartUuid,
    isResetPaymethod: isResetPaymethod,
    setIsResetPaymethod: setIsResetPaymethod
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && orderState.carts && cartsWithProducts && (cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !cartUuid && orderState.carts && cartsWithProducts && (cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CartsList, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    isForceOpenCart: true
  })), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartState.loading && !(window.location.pathname === '/checkout') && /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, {
    style: {
      marginTop: '70px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_styles.TipsSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    width: 65,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    width: 65,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    width: 65,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    width: 65,
    style: {
      marginBottom: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginTop: '45px',
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 60
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80,
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 60
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80,
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }))), cartUuid && cartState.cart && ((_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }));
};

exports.Checkout = Checkout;