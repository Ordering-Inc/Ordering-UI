"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserVerification = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");
var _utils = require("../../../../../utils");
var _InputPhoneNumber = require("../../../../../components/InputPhoneNumber");
var _UserFormDetails = require("../UserFormDetails");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserDetails = function UserDetails(props) {
  var userDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    isEdit: true,
    useValidationFields: true,
    useDefualtSessionManager: true,
    UIComponent: _UserFormDetails.UserFormDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, userDetailsProps);
};
var UserVerificationUI = function UserVerificationUI(props) {
  var _configs$verification, _configs$verification2, _phoneState$cellphone, _phoneState$cellphone2;
  var verifyEmailState = props.verifyEmailState,
    verifyPhoneState = props.verifyPhoneState,
    sendVerifyEmailCode = props.sendVerifyEmailCode,
    sendVerifyPhoneCode = props.sendVerifyPhoneCode,
    checkVerifyEmailCode = props.checkVerifyEmailCode,
    checkVerifyPhoneCode = props.checkVerifyPhoneCode,
    cleanErrorsState = props.cleanErrorsState;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    user = _useSession2$.user;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    otpState = _useState2[0],
    setOtpState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      email: false,
      phone: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    verificationState = _useState6[0],
    setVerificationState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    phoneState = _useState8[0],
    setPhoneState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    modalIsOpen = _useState10[0],
    setModalIsOpen = _useState10[1];
  var isEmailVerifyRequired = auth && (configs === null || configs === void 0 || (_configs$verification = configs.verification_email_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1' && !(user !== null && user !== void 0 && user.email_verified);
  var isPhoneVerifyRequired = auth && (configs === null || configs === void 0 || (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1' && !(user !== null && user !== void 0 && user.phone_verified);
  var phoneLength = (phoneState === null || phoneState === void 0 ? void 0 : phoneState.cellphone) && (phoneState === null || phoneState === void 0 ? void 0 : phoneState.country_phone_code) && (phoneState === null || phoneState === void 0 || (_phoneState$cellphone = phoneState.cellphone) === null || _phoneState$cellphone === void 0 || (_phoneState$cellphone = _phoneState$cellphone.split('')) === null || _phoneState$cellphone === void 0 ? void 0 : _phoneState$cellphone.length);
  var lastNumbers = (phoneState === null || phoneState === void 0 ? void 0 : phoneState.cellphone) && (phoneState === null || phoneState === void 0 ? void 0 : phoneState.country_phone_code) && (phoneState === null || phoneState === void 0 || (_phoneState$cellphone2 = phoneState.cellphone) === null || _phoneState$cellphone2 === void 0 ? void 0 : _phoneState$cellphone2.split('').fill('*', 0, phoneLength - 2).join(''));
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, isEmailVerifyRequired ? verificationState.email : verificationState.phone),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    resetOtpLeftTime = _useCountdownTimer2[2];
  var numOtpInputs = isEmailVerifyRequired ? 6 : 4;
  var handleSendOtp = function handleSendOtp(opt) {
    resetOtpLeftTime();
    if (opt === 'phone') {
      sendVerifyPhoneCode({
        cellphone: phoneState === null || phoneState === void 0 ? void 0 : phoneState.cellphone,
        country_phone_code: phoneState === null || phoneState === void 0 ? void 0 : phoneState.country_phone_code
      });
      return;
    }
    sendVerifyEmailCode({
      email: user === null || user === void 0 ? void 0 : user.email
    });
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanErrorsState();
    cleanErrorsState('phone');
    setOtpState('');
  };
  var setupUserPhoneNumber = function setupUserPhoneNumber() {
    if (!user || !(user !== null && user !== void 0 && user.cellphone) || !(user !== null && user !== void 0 && user.country_phone_code)) return;
    setPhoneState({
      cellphone: user === null || user === void 0 ? void 0 : user.cellphone,
      country_phone_code: user === null || user === void 0 ? void 0 : user.country_phone_code,
      formatted: "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone)
    });
  };
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      if (verificationState.email) {
        checkVerifyEmailCode({
          code: otpState
        });
        return;
      }
      if (verificationState.phone) {
        checkVerifyPhoneCode({
          cellphone: phoneState === null || phoneState === void 0 ? void 0 : phoneState.cellphone,
          country_phone_code: +(phoneState === null || phoneState === void 0 ? void 0 : phoneState.country_phone_code),
          code: otpState
        });
      }
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    if (verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.errorSendCode || verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.errorCheckCode) {
      var _ref, _verifyEmailState$err, _verifyEmailState$err2, _verifyEmailState$err3;
      setAlertState({
        open: true,
        content: (_ref = (_verifyEmailState$err = verifyEmailState === null || verifyEmailState === void 0 || (_verifyEmailState$err2 = verifyEmailState.errorSendCode) === null || _verifyEmailState$err2 === void 0 ? void 0 : _verifyEmailState$err2[0]) !== null && _verifyEmailState$err !== void 0 ? _verifyEmailState$err : verifyEmailState === null || verifyEmailState === void 0 || (_verifyEmailState$err3 = verifyEmailState.errorCheckCode) === null || _verifyEmailState$err3 === void 0 ? void 0 : _verifyEmailState$err3[0]) !== null && _ref !== void 0 ? _ref : t('ERROR', 'Error')
      });
    }
    if (verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.errorSendCode || verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.errorCheckCode) {
      var _ref2, _verifyPhoneState$err, _verifyPhoneState$err2, _verifyPhoneState$err3;
      setAlertState({
        open: true,
        content: (_ref2 = (_verifyPhoneState$err = verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$err2 = verifyPhoneState.errorSendCode) === null || _verifyPhoneState$err2 === void 0 ? void 0 : _verifyPhoneState$err2[0]) !== null && _verifyPhoneState$err !== void 0 ? _verifyPhoneState$err : verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$err3 = verifyPhoneState.errorCheckCode) === null || _verifyPhoneState$err3 === void 0 ? void 0 : _verifyPhoneState$err3[0]) !== null && _ref2 !== void 0 ? _ref2 : t('ERROR', 'Error')
      });
    }
  }, [verifyEmailState, verifyPhoneState]);
  (0, _react.useEffect)(function () {
    if (!(verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.loadingSendCode) && isEmailVerifyRequired) {
      setVerificationState(_objectSpread(_objectSpread({}, verificationState), {}, {
        phone: false,
        email: !!(verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.resultSendCode)
      }));
    }
    if (!(verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.loadingSendCode) && isPhoneVerifyRequired && !isEmailVerifyRequired) {
      setVerificationState(_objectSpread(_objectSpread({}, verificationState), {}, {
        email: false,
        phone: !!(verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.resultSendCode)
      }));
    }
  }, [verifyEmailState, verifyPhoneState]);
  (0, _react.useEffect)(function () {
    if (otpState) {
      setOtpState('');
    }
  }, [verificationState]);
  (0, _react.useEffect)(function () {
    setupUserPhoneNumber();
  }, [user]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.FormInput, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperText, null, /*#__PURE__*/_react.default.createElement("span", null, t('VERIFICATION_CODE', 'Verification Code')), isEmailVerifyRequired && /*#__PURE__*/_react.default.createElement("span", null, !verificationState.email ? t('VERIFICATION_EMAIL_CODE_MESSAGE', 'In order to continue using our platform please verify your email') : t('VERIFICATION_EMAIL_CODE_SENT_MESSAGE', 'Please type the verification code sent to your email')), isPhoneVerifyRequired && !isEmailVerifyRequired && /*#__PURE__*/_react.default.createElement("span", null, !verificationState.phone ? "".concat(t('VERIFICATION_PHONE_CODE_MESSAGE', 'In order to continue using our platform please verify your phone number')) : "".concat(t('VERIFICATION_PHONE_CODE_SENT_MESSAGE', 'Please, enter the verification code we sent to your mobile ending with :number').replace(':number', lastNumbers)))), isEmailVerifyRequired && (!verificationState.email ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    readOnly: true,
    type: "email",
    name: "email",
    "aria-label": "email",
    placeholder: user === null || user === void 0 ? void 0 : user.email,
    autoComplete: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "primary",
    disabled: (verifyEmailState === null || verifyEmailState === void 0 ? void 0 : verifyEmailState.loadingSendCode) || (verifyEmailState === null || verifyEmailState === void 0 ? void 0 : verifyEmailState.loadingCheckCode),
    onClick: handleSendOtp
  }, t('SEND_CODE', 'Send code'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CountdownTimer, {
    error: otpLeftTime === 0
  }, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: new Array(numOtpInputs).fill(0).join(''),
    isInputNum: true,
    shouldAutoFocus: true
  })), /*#__PURE__*/_react.default.createElement(_styles.ButtonsWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '48%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: (verifyEmailState === null || verifyEmailState === void 0 ? void 0 : verifyEmailState.loadingSendCode) || (verifyEmailState === null || verifyEmailState === void 0 ? void 0 : verifyEmailState.loadingCheckCode),
    onClick: function onClick() {
      setVerificationState(_objectSpread(_objectSpread({}, verificationState), {}, {
        email: false
      }));
    }
  }, t('CANCEL', 'Cancel'))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '48%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: (verifyEmailState === null || verifyEmailState === void 0 ? void 0 : verifyEmailState.loadingSendCode) || (verifyEmailState === null || verifyEmailState === void 0 ? void 0 : verifyEmailState.loadingCheckCode),
    onClick: handleSendOtp
  }, t('RESEND_AGAIN', 'Resend again?')))))), isPhoneVerifyRequired && !isEmailVerifyRequired && (!verificationState.phone ? phoneState !== null && phoneState !== void 0 && phoneState.formatted ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
    phone: true
  }, /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: phoneState === null || phoneState === void 0 ? void 0 : phoneState.formatted,
    disabled: !!(phoneState !== null && phoneState !== void 0 && phoneState.formatted),
    setValue: function setValue() {},
    handleIsValid: function handleIsValid() {}
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "primary",
    disabled: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loadingSendCode) || (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loadingCheckCode),
    onClick: function onClick() {
      return handleSendOtp('phone');
    }
  }, t('SEND_CODE', 'Send code'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_PHONE_CODE_VALIDATION', 'Please update your phone number to continue')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "primary",
    onClick: function onClick() {
      return setModalIsOpen(true);
    }
  }, t('UPDATE_PROFILE', 'Update profile'))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CountdownTimer, {
    error: otpLeftTime === 0
  }, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: new Array(numOtpInputs).fill(0).join(''),
    isInputNum: true,
    shouldAutoFocus: true
  })), /*#__PURE__*/_react.default.createElement(_styles.ButtonsWrapper, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '48%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loadingSendCode) || (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loadingCheckCode),
    onClick: function onClick() {
      setVerificationState(_objectSpread(_objectSpread({}, verificationState), {}, {
        phone: false
      }));
    }
  }, t('CANCEL', 'Cancel'))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '48%'
    }
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loadingSendCode) || (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loadingCheckCode),
    onClick: function onClick() {
      return handleSendOtp('phone');
    }
  }, t('RESEND_AGAIN', 'Resend again?'))))))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('UPDATE_PROFILE', 'Update Profile'),
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "700px"
  }, /*#__PURE__*/_react.default.createElement(UserDetails, {
    user: user,
    handleSuccessUpdate: function handleSuccessUpdate() {
      return setModalIsOpen(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('VERIFY_EMAIL', 'Verify email'),
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
var UserVerification = exports.UserVerification = function UserVerification(props) {
  var verifyProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserVerificationUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserVerification, verifyProps);
};