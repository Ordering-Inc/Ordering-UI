"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _styledComponents = require("styled-components");
var _SignUpForm = require("../SignUpForm");
var _styles = require("./styles");
var _Switch = require("../../../../../styles/Switch");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _InputPhoneNumber = require("../../../../../components/InputPhoneNumber");
var _LanguageSelector = require("../../../../../components/LanguageSelector");
var _Confirm = require("../Confirm");
var _utils = require("../../../../../utils");
var _Modal = _interopRequireDefault(require("../Modal"));
var _moment = _interopRequireDefault(require("moment"));
var _DatePicker = require("../DatePicker");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _formState$result, _formState$result2, _formState$changes$se, _formState$changes, _user$settings, _formState$result3, _formState$result4, _formState$changes$se2, _formState$changes2, _user$settings2, _formState$result5, _formState$result6, _formState$changes$se3, _formState$changes3, _user$settings3, _theme$profile, _theme$profile2, _theme$profile3, _theme$profile4, _theme$profile5, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _configs$verification3, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie7, _requiredFields$inclu4, _requiredFields$inclu5, _requiredFields$inclu6, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var isEdit = props.isEdit,
    formState = props.formState,
    onCancel = props.onCancel,
    showField = props.showField,
    cleanFormState = props.cleanFormState,
    onCloseProfile = props.onCloseProfile,
    isRequiredField = props.isRequiredField,
    validationFields = props.validationFields,
    handleChangeInput = props.handleChangeInput,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    isCheckout = props.isCheckout,
    userData = props.userData,
    isCustomerMode = props.isCustomerMode,
    setWillVerifyOtpState = props.setWillVerifyOtpState,
    handleChangePromotions = props.handleChangePromotions,
    isOldLayout = props.isOldLayout,
    requiredFields = props.requiredFields,
    handleChangeNotifications = props.handleChangeNotifications,
    handlePlaceOrderAsGuest = props.handlePlaceOrderAsGuest,
    isAllowGuest = props.isAllowGuest;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    userSession = _useSession2[0].user,
    login = _useSession2[1].login;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    isValidPhoneNumber = _useState2[0],
    setIsValidPhoneNumber = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userPhoneNumber = _useState4[0],
    setUserPhoneNumber = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isChanged = _useState8[0],
    setIsChanged = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    modalIsOpen = _useState10[0],
    setModalIsOpen = _useState10[1];
  var emailInput = (0, _react.useRef)(null);
  var user = userData || userSession;
  var _useState11 = (0, _react.useState)(user !== null && user !== void 0 && user.birthdate ? (0, _moment.default)(user === null || user === void 0 ? void 0 : user.birthdate, 'YYYY-MM-DD').toDate() : null),
    _useState12 = _slicedToArray(_useState11, 2),
    birthdate = _useState12[0],
    setBirthdate = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openCalendar = _useState14[0],
    setOpenCalendar = _useState14[1];
  var _useState15 = (0, _react.useState)({
      email: formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.result ? !!(formState !== null && formState !== void 0 && (_formState$result2 = formState.result) !== null && _formState$result2 !== void 0 && (_formState$result2 = _formState$result2.result) !== null && _formState$result2 !== void 0 && (_formState$result2 = _formState$result2.settings) !== null && _formState$result2 !== void 0 && (_formState$result2 = _formState$result2.email) !== null && _formState$result2 !== void 0 && _formState$result2.newsletter) : !!((_formState$changes$se = formState === null || formState === void 0 || (_formState$changes = formState.changes) === null || _formState$changes === void 0 || (_formState$changes = _formState$changes.settings) === null || _formState$changes === void 0 || (_formState$changes = _formState$changes.email) === null || _formState$changes === void 0 ? void 0 : _formState$changes.newsletter) !== null && _formState$changes$se !== void 0 ? _formState$changes$se : user && (user === null || user === void 0 || (_user$settings = user.settings) === null || _user$settings === void 0 || (_user$settings = _user$settings.email) === null || _user$settings === void 0 ? void 0 : _user$settings.newsletter)),
      sms: formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? !!(formState !== null && formState !== void 0 && (_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && (_formState$result4 = _formState$result4.result) !== null && _formState$result4 !== void 0 && (_formState$result4 = _formState$result4.settings) !== null && _formState$result4 !== void 0 && (_formState$result4 = _formState$result4.sms) !== null && _formState$result4 !== void 0 && _formState$result4.newsletter) : !!((_formState$changes$se2 = formState === null || formState === void 0 || (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 || (_formState$changes2 = _formState$changes2.settings) === null || _formState$changes2 === void 0 || (_formState$changes2 = _formState$changes2.sms) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.newsletter) !== null && _formState$changes$se2 !== void 0 ? _formState$changes$se2 : user && (user === null || user === void 0 || (_user$settings2 = user.settings) === null || _user$settings2 === void 0 || (_user$settings2 = _user$settings2.sms) === null || _user$settings2 === void 0 ? void 0 : _user$settings2.newsletter)),
      notification: formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? !!(formState !== null && formState !== void 0 && (_formState$result6 = formState.result) !== null && _formState$result6 !== void 0 && (_formState$result6 = _formState$result6.result) !== null && _formState$result6 !== void 0 && (_formState$result6 = _formState$result6.settings) !== null && _formState$result6 !== void 0 && (_formState$result6 = _formState$result6.notification) !== null && _formState$result6 !== void 0 && _formState$result6.newsletter) : !!((_formState$changes$se3 = formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 || (_formState$changes3 = _formState$changes3.settings) === null || _formState$changes3 === void 0 || (_formState$changes3 = _formState$changes3.notification) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.newsletter) !== null && _formState$changes$se3 !== void 0 ? _formState$changes$se3 : user && (user === null || user === void 0 || (_user$settings3 = user.settings) === null || _user$settings3 === void 0 || (_user$settings3 = _user$settings3.notification) === null || _user$settings3 === void 0 ? void 0 : _user$settings3.newsletter))
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    notificationList = _useState16[0],
    setNotificationList = _useState16[1];
  var showCustomerCellphone = !(theme !== null && theme !== void 0 && (_theme$profile = theme.profile) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.components) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.cellphone) !== null && _theme$profile !== void 0 && _theme$profile.hidden);
  var showCustomerPassword = !(theme !== null && theme !== void 0 && (_theme$profile2 = theme.profile) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.components) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.password) !== null && _theme$profile2 !== void 0 && _theme$profile2.hidden);
  var showCustomerPromotions = !(theme !== null && theme !== void 0 && (_theme$profile3 = theme.profile) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.components) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.promotions) !== null && _theme$profile3 !== void 0 && _theme$profile3.hidden);
  var showLangauges = !(theme !== null && theme !== void 0 && (_theme$profile4 = theme.profile) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.components) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.languages) !== null && _theme$profile4 !== void 0 && _theme$profile4.hidden);
  var showNotifications = !(theme !== null && theme !== void 0 && (_theme$profile5 = theme.profile) !== null && _theme$profile5 !== void 0 && (_theme$profile5 = _theme$profile5.components) !== null && _theme$profile5 !== void 0 && (_theme$profile5 = _theme$profile5.notification_settings) !== null && _theme$profile5 !== void 0 && _theme$profile5.hidden);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
    handlePlaceOrderAsGuest && handlePlaceOrderAsGuest();
  };
  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.cellphone) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;
  var showInputBirthday = (_validationFields$fie3 = validationFields === null || validationFields === void 0 || (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.checkout) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.birthdate) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie3 !== void 0 ? _validationFields$fie3 : false;
  var setUserCellPhone = function setUserCellPhone() {
    var isEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }
    if (user !== null && user !== void 0 && user.cellphone) {
      var _formState$changes4, _formState$changes5;
      var phone = null;
      if (formState.result.error && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.cellphone && (_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.country_phone_code) {
        var _formState$changes6, _formState$changes7;
        phone = "+".concat((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.country_phone_code, " ").concat((_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.cellphone);
        setUserPhoneNumber(phone);
        return;
      }
      if (user !== null && user !== void 0 && user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }
      setUserPhoneNumber(phone);
      return;
    }
    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };
  var onSubmit = function onSubmit() {
    var _validationFields$fie5, _validationFields$fie6, _configs$verification;
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
    if (!userPhoneNumber && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie5 = _validationFields$fie5.checkout) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie5 = _validationFields$fie5.cellphone) !== null && _validationFields$fie5 !== void 0 && _validationFields$fie5.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie6 = validationFields.fields) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie6 = _validationFields$fie6.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie6 = _validationFields$fie6.cellphone) !== null && _validationFields$fie6 !== void 0 && _validationFields$fie6.required || (configs === null || configs === void 0 || (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      });
      return;
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user !== null && user !== void 0 && user.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        });
        return;
      }
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      });
      return;
    }
    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      var changes = null;
      if (user !== null && user !== void 0 && user.cellphone && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        };
      }
      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true);
      }
      handleButtonUpdateClick(changes);
    }
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
    setIsChanged(true);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };
    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      };
    }
    handleChangeInput(phoneNumber, true);
  };
  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    handleChangeInput({
      target: {
        name: 'email',
        value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    if (emailInput.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
    }
  };
  var showFieldWithTheme = function showFieldWithTheme(name) {
    var _theme$profile6;
    return !(theme !== null && theme !== void 0 && (_theme$profile6 = theme.profile) !== null && _theme$profile6 !== void 0 && (_theme$profile6 = _theme$profile6.components) !== null && _theme$profile6 !== void 0 && (_theme$profile6 = _theme$profile6[name]) !== null && _theme$profile6 !== void 0 && _theme$profile6.hidden);
  };
  var _handleChangeDate = function _handleChangeDate(date) {
    setBirthdate(date);
    var _birthdate = (0, _moment.default)(date).format('YYYY-MM-DD');
    handleChangeInput({
      target: {
        name: 'birthdate',
        value: _birthdate
      }
    });
    setOpenCalendar(false);
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result7;
    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.error) {
      var _formState$result8;
      setAlertState({
        open: true,
        content: ((_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (!isEdit && onCloseProfile) {
      onCloseProfile();
    }
    if ((user || !isEdit) && !(formState !== null && formState !== void 0 && formState.loading)) {
      setUserCellPhone();
      if (!isEdit) {
        cleanFormState && cleanFormState({
          changes: {}
        });
      }
    }
    if (!isEdit) onCancel && onCancel();
  }, [user, isEdit]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result9, _formState$result10, _ref, _formState$changes$em, _formState$changes8;
      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result9 = formState.result) !== null && _formState$result9 !== void 0 && _formState$result9.result ? formState === null || formState === void 0 || (_formState$result10 = formState.result) === null || _formState$result10 === void 0 || (_formState$result10 = _formState$result10.result) === null || _formState$result10 === void 0 ? void 0 : _formState$result10.email : (_ref = (_formState$changes$em = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : user && (user === null || user === void 0 ? void 0 : user.email)) !== null && _ref !== void 0 ? _ref : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && birthdate) {
      var _formState$result11, _formState$result12, _ref2, _formState$changes$bi, _formState$changes9;
      formMethods.setValue('birthdate', formState !== null && formState !== void 0 && (_formState$result11 = formState.result) !== null && _formState$result11 !== void 0 && _formState$result11.result ? formState === null || formState === void 0 || (_formState$result12 = formState.result) === null || _formState$result12 === void 0 || (_formState$result12 = _formState$result12.result) === null || _formState$result12 === void 0 ? void 0 : _formState$result12.birthdate : (_ref2 = (_formState$changes$bi = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.birthdate) !== null && _formState$changes$bi !== void 0 ? _formState$changes$bi : user && (user === null || user === void 0 ? void 0 : user.birthdate)) !== null && _ref2 !== void 0 ? _ref2 : '');
    }
  }, [validationFields, birthdate]);
  (0, _react.useEffect)(function () {
    if (requiredFields) return;
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    var _formState$changes10, _formState$changes11, _configs$verification2;
    if (isChanged && userPhoneNumber && isValidPhoneNumber && formState !== null && formState !== void 0 && (_formState$changes10 = formState.changes) !== null && _formState$changes10 !== void 0 && _formState$changes10.country_phone_code && formState !== null && formState !== void 0 && (_formState$changes11 = formState.changes) !== null && _formState$changes11 !== void 0 && _formState$changes11.cellphone && (configs === null || configs === void 0 || (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1') {
      setWillVerifyOtpState && setWillVerifyOtpState(true);
    }
  }, [isValidPhoneNumber, userPhoneNumber, configs === null || configs === void 0 || (_configs$verification3 = configs.verification_phone_required) === null || _configs$verification3 === void 0 ? void 0 : _configs$verification3.value, isChanged]);
  (0, _react.useEffect)(function () {
    var _requiredFields$inclu;
    if (requiredFields && !(requiredFields !== null && requiredFields !== void 0 && (_requiredFields$inclu = requiredFields.includes) !== null && _requiredFields$inclu !== void 0 && _requiredFields$inclu.call(requiredFields, 'cellphone'))) setIsValidPhoneNumber(true);
  }, [requiredFields]);
  var handleEditNotifications = function handleEditNotifications(key, value) {
    setNotificationList(_objectSpread(_objectSpread({}, notificationList), {}, _defineProperty({}, key, value)));
  };
  (0, _react.useEffect)(function () {
    isEdit && handleChangeNotifications(notificationList);
  }, [notificationList]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 || (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.checkout
  }).map(function (field) {
    var _requiredFields$inclu2, _ref3, _formState$changes$fi, _requiredFields$inclu3, _ref4, _formState$changes$fi2;
    return (showField && showField(field.code) && showFieldWithTheme(field.code) || (user === null || user === void 0 ? void 0 : user.guest_id)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? (requiredFields && (requiredFields === null || requiredFields === void 0 || (_requiredFields$inclu2 = requiredFields.includes) === null || _requiredFields$inclu2 === void 0 ? void 0 : _requiredFields$inclu2.call(requiredFields, field.code)) || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      borderBottom: true,
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (_ref3 = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref3 !== void 0 ? _ref3 : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    })) : (requiredFields && (requiredFields === null || requiredFields === void 0 || (_requiredFields$inclu3 = requiredFields.includes) === null || _requiredFields$inclu3 === void 0 ? void 0 : _requiredFields$inclu3.call(requiredFields, field.code)) || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      borderBottom: true,
      name: field.code,
      className: "form",
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (_ref4 = (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : user && user[field.code]) !== null && _ref4 !== void 0 ? _ref4 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    })));
  }), (!(user !== null && user !== void 0 && user.guest_id) && showInputBirthday || (user === null || user === void 0 ? void 0 : user.guest_id) && (requiredFields === null || requiredFields === void 0 || (_requiredFields$inclu4 = requiredFields.includes) === null || _requiredFields$inclu4 === void 0 ? void 0 : _requiredFields$inclu4.call(requiredFields, 'birthdate'))) && /*#__PURE__*/_react.default.createElement(_styles.InputPhoneNumberWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('BIRTHDATE', 'Birthdate')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    borderBottom: true,
    className: "form",
    value: birthdate ? (0, _moment.default)(birthdate).format('YYYY/MM/DD') : '',
    autoComplete: "off",
    onFocus: function onFocus() {
      return setOpenCalendar(true);
    }
  }), openCalendar && /*#__PURE__*/_react.default.createElement(_DatePicker.DatePickerUI, {
    value: birthdate,
    onChange: _handleChangeDate,
    name: 'birthdate'
  })), (!(user !== null && user !== void 0 && user.guest_id) && !!showInputPhoneNumber || (user === null || user === void 0 ? void 0 : user.guest_id) && (requiredFields === null || requiredFields === void 0 || (_requiredFields$inclu5 = requiredFields.includes) === null || _requiredFields$inclu5 === void 0 ? void 0 : _requiredFields$inclu5.call(requiredFields, 'cellphone'))) && showCustomerCellphone && (requiredFields && (requiredFields === null || requiredFields === void 0 || (_requiredFields$inclu6 = requiredFields.includes) === null || _requiredFields$inclu6 === void 0 ? void 0 : _requiredFields$inclu6.call(requiredFields, 'cellphone')) || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputPhoneNumberWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber,
    disabled: !isEdit
  })), !isCheckout && showCustomerPassword && !requiredFields && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t('PASSWORD', 'Password')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    className: "form",
    disabled: !isEdit,
    borderBottom: true,
    placeholder: t('FRONT_VISUALS_PASSWORD', 'Password'),
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  })), showNotifications && showCustomerPromotions && !requiredFields && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.NotificationsGroupSwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('MARKETING_NOTIFICATIONS', 'Marketing Notifications')), /*#__PURE__*/_react.default.createElement(_styles.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('EMAILS', 'Emails')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    onChange: function onChange(value) {
      return handleEditNotifications('email', value);
    },
    defaultChecked: notificationList === null || notificationList === void 0 ? void 0 : notificationList.email
  })), /*#__PURE__*/_react.default.createElement(_styles.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('SMS', 'Sms')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    onChange: function onChange(value) {
      return handleEditNotifications('sms', value);
    },
    defaultChecked: notificationList === null || notificationList === void 0 ? void 0 : notificationList.sms
  })), /*#__PURE__*/_react.default.createElement(_styles.SwitchWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PUSH_NOTIFICATIONS', 'Push Notifications')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    onChange: function onChange(value) {
      return handleEditNotifications('notification', value);
    },
    defaultChecked: notificationList === null || notificationList === void 0 ? void 0 : notificationList.notification
  })))), showLangauges && !requiredFields && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('LANGUAGE', 'Language')), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, onCancel && isOldLayout && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    onClick: function onClick() {
      return onCancel(false);
    },
    disabled: formState.loading
  }, t('CANCEL', 'Cancel')), !requiredFields && (formState && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && isEdit || (formState === null || formState === void 0 ? void 0 : formState.loading)) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')), requiredFields && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('CONTINUE', 'Continue')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
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
  }), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "760px"
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true,
    isGuest: true
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
exports.UserFormDetailsUI = UserFormDetailsUI;