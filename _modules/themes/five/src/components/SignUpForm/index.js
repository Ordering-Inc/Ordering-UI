"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");
var _useRecaptcha3 = require("../../../../../hooks/useRecaptcha");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _Tabs = require("../../styles/Tabs");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _Checkbox = require("../../../../../styles/Checkbox");
var _utils = require("../../../../../utils");
var _InputPhoneNumber = require("../InputPhoneNumber");
var _FacebookLogin = require("../FacebookLogin");
var _GoogleLogin = require("../GoogleLogin");
var _AppleLogin = require("../AppleLogin");
var _Confirm = require("../Confirm");
var _styles = require("../LoginForm/styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var notValidationFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'address_notes'];
var SignUpFormUI = function SignUpFormUI(props) {
  var _configs$facebook_log, _configs$facebook_log2, _configs$google_login, _configs$google_login2, _configs$facebook_log3, _configs$facebook_log4, _configs$apple_login_, _configs$apple_login_2, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _configs$verification, _configs$google_login3, _configs$facebook_log5, _configs$facebook_log6, _configs$facebook_id, _configs$google_login4, _configs$google_login5, _configs$google_login6, _configs$apple_login_3, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie12, _validationFields$fie13, _formMethods$errors9, _formMethods$errors10, _formMethods$errors11, _formMethods$errors12, _formMethods$errors13, _formMethods$errors14, _formMethods$errors15, _formMethods$errors16, _formMethods$errors17, _formMethods$errors18, _formMethods$errors19, _formMethods$errors20, _props$afterMidElemen, _props$afterMidCompon, _configs$terms_and_co, _formMethods$errors21, _formMethods$errors22, _formMethods$errors23, _configs$terms_and_co2, _configs$business_sig, _configs$driver_signu, _configs$business_sig2, _configs$driver_signu2, _configs$facebook_id2, _configs$facebook_id3, _configs$apple_login_4, _configs$google_login7, _configs$google_login8, _configs$google_login9, _props$afterComponent, _props$afterElements;
  var handleChangeInput = props.handleChangeInput,
    handleButtonSignupClick = props.handleButtonSignupClick,
    handleReCaptcha = props.handleReCaptcha,
    elementLinkToLogin = props.elementLinkToLogin,
    useChekoutFileds = props.useChekoutFileds,
    validationFields = props.validationFields,
    showField = props.showField,
    isRequiredField = props.isRequiredField,
    formState = props.formState,
    handleSuccessSignup = props.handleSuccessSignup,
    isPopup = props.isPopup,
    externalPhoneNumber = props.externalPhoneNumber,
    saveCustomerUser = props.saveCustomerUser,
    fieldsNotValid = props.fieldsNotValid,
    signupData = props.signupData,
    enableReCaptcha = props.enableReCaptcha,
    closeModal = props.closeModal,
    handleChangePromotions = props.handleChangePromotions,
    isCustomerMode = props.isCustomerMode,
    checkPhoneCodeState = props.checkPhoneCodeState,
    generateOtpCode = props.generateOtpCode,
    numOtpInputs = props.numOtpInputs,
    setWillVerifyOtpState = props.setWillVerifyOtpState,
    willVerifyOtpState = props.willVerifyOtpState,
    setOtpState = props.setOtpState,
    otpState = props.otpState,
    setSignUpTab = props.setSignUpTab,
    signUpTab = props.signUpTab,
    useSignUpFullDetails = props.useSignUpFullDetails,
    useSignUpOtpEmail = props.useSignUpOtpEmail,
    useSignUpOtpCellphone = props.useSignUpOtpCellphone;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var formMethods = (0, _reactHookForm.useForm)();
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useRecaptcha = (0, _useRecaptcha3.useRecaptcha)(enableReCaptcha),
    _useRecaptcha2 = _slicedToArray(_useRecaptcha, 1),
    recaptchaConfig = _useRecaptcha2[0];
  var _useState3 = (0, _react.useState)({
      version: '',
      siteKey: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    reCaptchaVersion = _useState4[0],
    setRecaptchaVersion = _useState4[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    login = _useSession2[1].login;
  var isFacebookLogin = (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log = configs.facebook_login) === null || _configs$facebook_log === void 0 ? void 0 : _configs$facebook_log.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log2 = configs.facebook_login) === null || _configs$facebook_log2 === void 0 ? void 0 : _configs$facebook_log2.value) === '1';
  var googleLoginEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$google_login = configs.google_login_enabled) === null || _configs$google_login === void 0 ? void 0 : _configs$google_login.value) === '1' || !(configs !== null && configs !== void 0 && (_configs$google_login2 = configs.google_login_enabled) !== null && _configs$google_login2 !== void 0 && _configs$google_login2.enabled);
  var facebookLoginEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log3 = configs.facebook_login_enabled) === null || _configs$facebook_log3 === void 0 ? void 0 : _configs$facebook_log3.value) === '1' || !(configs !== null && configs !== void 0 && (_configs$facebook_log4 = configs.facebook_login_enabled) !== null && _configs$facebook_log4 !== void 0 && _configs$facebook_log4.enabled);
  var appleLoginEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$apple_login_ = configs.apple_login_enabled) === null || _configs$apple_login_ === void 0 ? void 0 : _configs$apple_login_.value) === '1' || !(configs !== null && configs !== void 0 && (_configs$apple_login_2 = configs.apple_login_enabled) !== null && _configs$apple_login_2 !== void 0 && _configs$apple_login_2.enabled);
  var otpPlaceholder = _toConsumableArray(Array(numOtpInputs)).fill(0).join('');
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    _ = _useCountdownTimer2[1],
    resetOtpLeftTime = _useCountdownTimer2[2];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    userPhoneNumber = _useState6[0],
    setUserPhoneNumber = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    isValidPhoneNumber = _useState8[0],
    setIsValidPhoneNumber = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    passwordSee = _useState10[0],
    setPasswordSee = _useState10[1];
  var _useState11 = (0, _react.useState)(1),
    _useState12 = _slicedToArray(_useState11, 2),
    fieldNumber = _useState12[0],
    setFieldNumber = _useState12[1];
  var showInputPhoneNumber = ((_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false) || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1';
  var initParams = {
    client_id: configs === null || configs === void 0 ? void 0 : (_configs$google_login3 = configs.google_login_client_id) === null || _configs$google_login3 === void 0 ? void 0 : _configs$google_login3.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  };
  var hasSocialLogin = ((configs === null || configs === void 0 ? void 0 : (_configs$facebook_log5 = configs.facebook_login) === null || _configs$facebook_log5 === void 0 ? void 0 : _configs$facebook_log5.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log6 = configs.facebook_login) === null || _configs$facebook_log6 === void 0 ? void 0 : _configs$facebook_log6.value) === '1') && (configs === null || configs === void 0 ? void 0 : (_configs$facebook_id = configs.facebook_id) === null || _configs$facebook_id === void 0 ? void 0 : _configs$facebook_id.value) || (configs === null || configs === void 0 ? void 0 : (_configs$google_login4 = configs.google_login_client_id) === null || _configs$google_login4 === void 0 ? void 0 : _configs$google_login4.value) && (configs === null || configs === void 0 ? void 0 : (_configs$google_login5 = configs.google_login_auth_domain) === null || _configs$google_login5 === void 0 ? void 0 : _configs$google_login5.value) && (configs === null || configs === void 0 ? void 0 : (_configs$google_login6 = configs.google_login_api_key) === null || _configs$google_login6 === void 0 ? void 0 : _configs$google_login6.value) && googleLoginEnabled || (configs === null || configs === void 0 ? void 0 : (_configs$apple_login_3 = configs.apple_login_client_id) === null || _configs$apple_login_3 === void 0 ? void 0 : _configs$apple_login_3.value) && appleLoginEnabled;
  var hasSocialEnabled = googleLoginEnabled || facebookLoginEnabled || appleLoginEnabled;
  var handleSuccessFacebook = function handleSuccessFacebook(user) {
    var _user$session;
    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };
  var handleSuccessApple = function handleSuccessApple(user) {
    var _user$session2;
    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session2 = user.session) === null || _user$session2 === void 0 ? void 0 : _user$session2.access_token
    });
  };
  var handleSuccessGoogle = function handleSuccessGoogle(user) {
    var _user$session3;
    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session3 = user.session) === null || _user$session3 === void 0 ? void 0 : _user$session3.access_token
    });
  };
  var togglePasswordView = function togglePasswordView() {
    setPasswordSee(!passwordSee);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    closeModal && closeModal();
  };
  var handleSendOtp = function handleSendOtp() {
    if (otpLeftTime < 520 && willVerifyOtpState) {
      resetOtpLeftTime();
      onSubmit();
    }
  };
  var handleSignUpTab = function handleSignUpTab(tab) {
    setSignUpTab(tab);
    formMethods.clearErrors();
  };
  var onSubmit = function onSubmit() {
    var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _configs$verification2;
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
    if (!userPhoneNumber && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie7 = _validationFields$fie6.cellphone) !== null && _validationFields$fie7 !== void 0 && _validationFields$fie7.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && (_validationFields$fie9 = _validationFields$fie8.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie10 = _validationFields$fie9.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1') && signUpTab !== 'otpEmail') {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required.')]
      });
      return;
    }
    if (!isPhoneNumberValid && signUpTab !== 'otpEmail') {
      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
      });
      return;
    }
    if (signUpTab === 'otpEmail' || signUpTab === 'otpCellphone') {
      generateOtpCode();
      return;
    }
    handleButtonSignupClick && handleButtonSignupClick();
    if (!formState.loading && formState.result.result && !formState.result.error) {
      handleSuccessSignup(formState.result.result);
    }
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
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
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result4, _formState$result5;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2, _formState$result2$re, _formState$result3;
      if (((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : (_formState$result2$re = _formState$result2.result) === null || _formState$result2$re === void 0 ? void 0 : _formState$result2$re[0]) === 'ERROR_AUTH_VERIFICATION_CODE') {
        var _configs$security_rec;
        if (configs !== null && configs !== void 0 && (_configs$security_rec = configs.security_recaptcha_site_key) !== null && _configs$security_rec !== void 0 && _configs$security_rec.value) {
          var _configs$security_rec2;
          setRecaptchaVersion({
            version: 'v2',
            siteKey: configs === null || configs === void 0 ? void 0 : (_configs$security_rec2 = configs.security_recaptcha_site_key) === null || _configs$security_rec2 === void 0 ? void 0 : _configs$security_rec2.value
          });
          setAlertState({
            open: true,
            content: [t('TRY_AGAIN', 'Please try again')]
          });
          return;
        }
        setAlertState({
          open: true,
          content: [t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key')]
        });
        return;
      }
      setAlertState({
        open: true,
        content: ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) || [t('ERROR', 'Error')]
      });
    } else if (!formState.loading && !((_formState$result4 = formState.result) !== null && _formState$result4 !== void 0 && _formState$result4.error) && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result) {
      var _formState$result6;
      saveCustomerUser && saveCustomerUser((_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result);
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    Object.keys(signupData).map(function (fieldName) {
      formMethods.setValue(fieldName, signupData[fieldName]);
    });
  }, [signupData]);
  (0, _react.useEffect)(function () {
    if (externalPhoneNumber) {
      setUserPhoneNumber(externalPhoneNumber);
      handleChangePhoneNumber(externalPhoneNumber, true);
    }
  }, [externalPhoneNumber]);
  (0, _react.useEffect)(function () {
    var _validationFields$fie11;
    if (useChekoutFileds && validationFields !== null && validationFields !== void 0 && validationFields.loading) return;
    var fieldnum = 0;
    (0, _utils.sortInputFields)({
      values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.checkout
    }).forEach(function (field) {
      if (showField && showField(field.code) && field.code !== 'email') fieldnum += 1;
    });
    setFieldNumber(fieldnum);
  }, [validationFields]);
  (0, _react.useEffect)(function () {
    if (signUpTab === 'default' || signUpTab === 'otpCellphone') {
      formMethods.register('cellphone', {
        required: isRequiredField('cellphone') ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone')) : null
      });
    } else {
      formMethods.unregister('cellphone');
    }
  }, [formMethods, signUpTab]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$, _checkPhoneCodeState$3, _checkPhoneCodeState$4, _checkPhoneCodeState$5;
    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error) {
      var _checkPhoneCodeState$2;
      setAlertState({
        open: true,
        content: (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$2 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$2 === void 0 ? void 0 : _checkPhoneCodeState$2.result) || [t('ERROR', 'Error')]
      });
    } else if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$3 = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$3 !== void 0 && _checkPhoneCodeState$3.result && (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$4 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$4 === void 0 ? void 0 : (_checkPhoneCodeState$5 = _checkPhoneCodeState$4.result) === null || _checkPhoneCodeState$5 === void 0 ? void 0 : _checkPhoneCodeState$5[0]) === 'VERIFICATION_CODE_WAS_SENT_TO') {
      setAlertState({
        open: true,
        content: t('CODE_SENT', 'The code has been sent')
      });
      resetOtpLeftTime();
    }
  }, [checkPhoneCodeState]);
  (0, _react.useEffect)(function () {
    if (recaptchaConfig !== null && recaptchaConfig !== void 0 && recaptchaConfig.siteKey) {
      setRecaptchaVersion({
        version: recaptchaConfig === null || recaptchaConfig === void 0 ? void 0 : recaptchaConfig.version,
        siteKey: recaptchaConfig === null || recaptchaConfig === void 0 ? void 0 : recaptchaConfig.siteKey
      });
    }
  }, [recaptchaConfig]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles2.SignUpContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('SIGN_UP', 'Sign up')), Number(useSignUpFullDetails) + Number(useSignUpOtpEmail) + Number(useSignUpOtpCellphone) > 1 && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.LoginWith, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, useSignUpFullDetails && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleSignUpTab('default');
    },
    active: signUpTab === 'default',
    borderBottom: signUpTab === 'default'
  }, t('DEFAULT', 'Default')), useSignUpOtpEmail && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleSignUpTab('otpEmail');
    },
    active: signUpTab === 'otpEmail',
    borderBottom: signUpTab === 'otpEmail'
  }, t('BY_OTP_EMAIL', 'by Otp Email')), useSignUpOtpCellphone && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleSignUpTab('otpCellphone');
    },
    active: signUpTab === 'otpCellphone',
    borderBottom: signUpTab === 'otpCellphone'
  }, t('BY_OTP_CELLPHONE', 'by Otp Cellphone')))), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    onSubmit: formMethods.handleSubmit(onSubmit),
    isSkeleton: useChekoutFileds && (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !(useChekoutFileds && validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie12 = validationFields.fields) === null || _validationFields$fie12 === void 0 ? void 0 : _validationFields$fie12.checkout) && (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 ? void 0 : _validationFields$fie13.checkout
  }).map(function (field) {
    var _formMethods$errors, _formMethods$errors$e, _formMethods$errors2, _formMethods$errors2$, _formMethods$errors3, _formMethods$errors3$, _formMethods$errors4, _formMethods$errors5, _formMethods$errors6, _formMethods$errors7, _formMethods$errors8;
    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (signUpTab === 'default' || signUpTab === 'otpEmail') && /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, null, (formMethods === null || formMethods === void 0 ? void 0 : (_formMethods$errors = formMethods.errors) === null || _formMethods$errors === void 0 ? void 0 : (_formMethods$errors$e = _formMethods$errors.email) === null || _formMethods$errors$e === void 0 ? void 0 : _formMethods$errors$e.type) === 'required' && !notValidationFields.includes(field.code) && /*#__PURE__*/_react.default.createElement(_styles2.ValidationText, null, (_formMethods$errors2 = formMethods.errors) === null || _formMethods$errors2 === void 0 ? void 0 : (_formMethods$errors2$ = _formMethods$errors2.email) === null || _formMethods$errors2$ === void 0 ? void 0 : _formMethods$errors2$.message, " *"), ((_formMethods$errors3 = formMethods.errors) === null || _formMethods$errors3 === void 0 ? void 0 : (_formMethods$errors3$ = _formMethods$errors3.email) === null || _formMethods$errors3$ === void 0 ? void 0 : _formMethods$errors3$.type) === 'pattern' && !notValidationFields.includes(field.code) && /*#__PURE__*/_react.default.createElement(_styles2.ValidationText, null, t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.type,
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field.name),
      onChange: handleChangeInputEmail,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
      }),
      required: !!field.required,
      autoComplete: "off",
      isError: ((_formMethods$errors4 = formMethods.errors) === null || _formMethods$errors4 === void 0 ? void 0 : _formMethods$errors4.email) && !notValidationFields.includes(field.code)
    }), /*#__PURE__*/_react.default.createElement(_styles2.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, signUpTab === 'default' && /*#__PURE__*/_react.default.createElement(_styles2.InputContainer, {
      isHalf: fieldNumber % 2 === 0
    }, ((_formMethods$errors5 = formMethods.errors) === null || _formMethods$errors5 === void 0 ? void 0 : _formMethods$errors5["".concat(field.code)]) && !notValidationFields.includes(field.code) && /*#__PURE__*/_react.default.createElement(_styles2.ValidationText, null, (_formMethods$errors6 = formMethods.errors) === null || _formMethods$errors6 === void 0 ? void 0 : (_formMethods$errors7 = _formMethods$errors6["".concat(field.code)]) === null || _formMethods$errors7 === void 0 ? void 0 : _formMethods$errors7.message, " *"), /*#__PURE__*/_react.default.createElement(_styles2.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      type: field.type,
      name: field.code,
      "aria-label": field.code,
      className: "form",
      placeholder: t(field.code.toUpperCase(), field.name),
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field.name, " is required")).replace('_attribute_', t(field.name, field.code)) : null
      }),
      required: field.required,
      autoComplete: "off",
      isError: ((_formMethods$errors8 = formMethods.errors) === null || _formMethods$errors8 === void 0 ? void 0 : _formMethods$errors8["".concat(field.code)]) && !notValidationFields.includes(field.code)
    }), /*#__PURE__*/_react.default.createElement(_styles2.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Person, null))))));
  }), !!showInputPhoneNumber && (signUpTab === 'default' || signUpTab === 'otpCellphone') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors9 = formMethods.errors) === null || _formMethods$errors9 === void 0 ? void 0 : _formMethods$errors9.cellphone) && !userPhoneNumber && /*#__PURE__*/_react.default.createElement(_styles2.ValidationText, null, (_formMethods$errors10 = formMethods.errors) === null || _formMethods$errors10 === void 0 ? void 0 : (_formMethods$errors11 = _formMethods$errors10.cellphone) === null || _formMethods$errors11 === void 0 ? void 0 : _formMethods$errors11.message, " ", (formMethods === null || formMethods === void 0 ? void 0 : (_formMethods$errors12 = formMethods.errors) === null || _formMethods$errors12 === void 0 ? void 0 : (_formMethods$errors13 = _formMethods$errors12.cellphone) === null || _formMethods$errors13 === void 0 ? void 0 : _formMethods$errors13.type) === 'required' && '*'), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber,
    isError: ((_formMethods$errors14 = formMethods.errors) === null || _formMethods$errors14 === void 0 ? void 0 : _formMethods$errors14.cellphone) && !userPhoneNumber
  })), signUpTab === 'default' && (!fieldsNotValid || fieldsNotValid && !fieldsNotValid.includes('password')) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors15 = formMethods.errors) === null || _formMethods$errors15 === void 0 ? void 0 : _formMethods$errors15.password) && /*#__PURE__*/_react.default.createElement(_styles2.ValidationText, null, (_formMethods$errors16 = formMethods.errors) === null || _formMethods$errors16 === void 0 ? void 0 : (_formMethods$errors17 = _formMethods$errors16.password) === null || _formMethods$errors17 === void 0 ? void 0 : _formMethods$errors17.message, " ", (formMethods === null || formMethods === void 0 ? void 0 : (_formMethods$errors18 = formMethods.errors) === null || _formMethods$errors18 === void 0 ? void 0 : (_formMethods$errors19 = _formMethods$errors18.password) === null || _formMethods$errors19 === void 0 ? void 0 : _formMethods$errors19.type) === 'required' && '*'), /*#__PURE__*/_react.default.createElement(_styles2.WrapperPassword, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    "aria-label": "password",
    className: "form",
    placeholder: t('PASSWORD', 'Password'),
    onChange: handleChangeInput,
    required: true,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    }),
    isError: (_formMethods$errors20 = formMethods.errors) === null || _formMethods$errors20 === void 0 ? void 0 : _formMethods$errors20.password
  }), /*#__PURE__*/_react.default.createElement(_styles2.TogglePassword, {
    onClick: togglePasswordView
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Eye, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.EyeSlash, null)), /*#__PURE__*/_react.default.createElement(_styles2.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Lock, null)))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(5)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 43
    }));
  })), props.isRecaptchaEnable && enableReCaptcha && /*#__PURE__*/_react.default.createElement(_styles2.ReCaptchaWrapper, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.ReCaptcha, {
    handleReCaptcha: handleReCaptcha,
    reCaptchaVersion: reCaptchaVersion
  })), /*#__PURE__*/_react.default.createElement(_styles2.CheckboxArea, null, signUpTab === 'default' && /*#__PURE__*/_react.default.createElement(_styles2.PromotionsWrapper, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    name: "promotions",
    id: "promotions",
    onChange: handleChangePromotions
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "promotions"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('RECEIVE_NEWS_EXCLUSIVE_PROMOTIONS', 'Receive newsletters and exclusive promotions')))), (configs === null || configs === void 0 ? void 0 : (_configs$terms_and_co = configs.terms_and_conditions) === null || _configs$terms_and_co === void 0 ? void 0 : _configs$terms_and_co.value) === 'true' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors21 = formMethods.errors) === null || _formMethods$errors21 === void 0 ? void 0 : _formMethods$errors21.acceptTerms) && /*#__PURE__*/_react.default.createElement(_styles2.ValidationText, null, (_formMethods$errors22 = formMethods.errors) === null || _formMethods$errors22 === void 0 ? void 0 : (_formMethods$errors23 = _formMethods$errors22.acceptTerms) === null || _formMethods$errors23 === void 0 ? void 0 : _formMethods$errors23.message, " *"), /*#__PURE__*/_react.default.createElement(_styles2.TermsConditionWrapper, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    name: "acceptTerms",
    ref: formMethods.register({
      required: t('ERROR_ACCEPT_TERMS', 'You must accept the Terms & Conditions.')
    }),
    id: "acceptTerms"
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "acceptTerms"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('TERMS_AND_CONDITIONS_TEXT', 'I’m agree with')), /*#__PURE__*/_react.default.createElement("a", {
    href: configs === null || configs === void 0 ? void 0 : (_configs$terms_and_co2 = configs.terms_and_conditions_url) === null || _configs$terms_and_co2 === void 0 ? void 0 : _configs$terms_and_co2.value,
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('TERMS_AND_CONDITIONS', 'Terms & Conditions')))))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    type: "submit",
    disabled: formState.loading || (validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading)
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : signUpTab === 'default' ? t('SIGN_UP', 'Sign up') : t('GET_VERIFY_CODE', 'Get verify code'))), willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs || 6,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: otpPlaceholder,
    isInputNum: true,
    shouldAutoFocus: true
  })), /*#__PURE__*/_react.default.createElement(_styles.ResendCode, {
    disabled: otpLeftTime > 520,
    onClick: handleSendOtp
  }, t('RESEND_AGAIN', 'Resend again'), "?"), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: formState.loading,
    onClick: function onClick() {
      setWillVerifyOtpState(false);
    }
  }, t('CANCEL', 'Cancel'))), (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      height: 160
    }
  }), elementLinkToLogin && /*#__PURE__*/_react.default.createElement(_styles2.RedirectLink, {
    register: true,
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('MOBILE_FRONT_ALREADY_HAVE_AN_ACCOUNT', 'Already have an account?')), elementLinkToLogin), Object.keys(configs).length > 0 && ((configs === null || configs === void 0 ? void 0 : (_configs$business_sig = configs.business_signup_allow) === null || _configs$business_sig === void 0 ? void 0 : _configs$business_sig.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$driver_signu = configs.driver_signup_allow) === null || _configs$driver_signu === void 0 ? void 0 : _configs$driver_signu.value) === '1') && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles2.BussinessAndDriverSignUp, null, (configs === null || configs === void 0 ? void 0 : (_configs$business_sig2 = configs.business_signup_allow) === null || _configs$business_sig2 === void 0 ? void 0 : _configs$business_sig2.value) === '1' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primaryContrast",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup_business'
      });
    }
  }, t('SIGNUP_FOR_BUSINESS', 'Sign up for business')), (configs === null || configs === void 0 ? void 0 : (_configs$driver_signu2 = configs.driver_signup_allow) === null || _configs$driver_signu2 === void 0 ? void 0 : _configs$driver_signu2.value) === '1' && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primaryContrast",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup_driver'
      });
    }
  }, t('SIGNUP_FOR_DRIVER', 'Sign up for driver'))), hasSocialLogin && hasSocialEnabled && /*#__PURE__*/_react.default.createElement(_styles2.LoginDivider, null, /*#__PURE__*/_react.default.createElement(_styles2.DividerLine, null), /*#__PURE__*/_react.default.createElement("p", null, t('OR', 'or')), /*#__PURE__*/_react.default.createElement(_styles2.DividerLine, null)), !externalPhoneNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(configs).length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.SocialButtons, {
    isPopup: isPopup
  }, isFacebookLogin && (configs === null || configs === void 0 ? void 0 : (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value) && facebookLoginEnabled && /*#__PURE__*/_react.default.createElement(_FacebookLogin.FacebookLoginButton, {
    appId: configs === null || configs === void 0 ? void 0 : (_configs$facebook_id3 = configs.facebook_id) === null || _configs$facebook_id3 === void 0 ? void 0 : _configs$facebook_id3.value,
    handleSuccessFacebookLogin: handleSuccessFacebook
  }), (configs === null || configs === void 0 ? void 0 : (_configs$apple_login_4 = configs.apple_login_client_id) === null || _configs$apple_login_4 === void 0 ? void 0 : _configs$apple_login_4.value) && appleLoginEnabled && /*#__PURE__*/_react.default.createElement(_AppleLogin.AppleLogin, {
    onSuccess: handleSuccessApple,
    onFailure: function onFailure(data) {
      return setAlertState({
        open: true,
        content: data
      });
    }
  }), (configs === null || configs === void 0 ? void 0 : (_configs$google_login7 = configs.google_login_client_id) === null || _configs$google_login7 === void 0 ? void 0 : _configs$google_login7.value) && (configs === null || configs === void 0 ? void 0 : (_configs$google_login8 = configs.google_login_auth_domain) === null || _configs$google_login8 === void 0 ? void 0 : _configs$google_login8.value) && (configs === null || configs === void 0 ? void 0 : (_configs$google_login9 = configs.google_login_api_key) === null || _configs$google_login9 === void 0 ? void 0 : _configs$google_login9.value) && googleLoginEnabled && /*#__PURE__*/_react.default.createElement(_GoogleLogin.GoogleLoginButton, {
    initParams: initParams,
    handleSuccessGoogleLogin: handleSuccessGoogle,
    onFailure: function onFailure(data) {
      return console.log('onFailure', data);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles2.SkeletonSocialWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('SIGN_UP', 'Sign up'),
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
var SignUpForm = function SignUpForm(props) {
  var _numOtpInputs = 6;
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    isRecaptchaEnable: true,
    numOtpInputs: _numOtpInputs,
    UIComponent: SignUpFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SignupForm, loginControllerProps);
};
exports.SignUpForm = SignUpForm;