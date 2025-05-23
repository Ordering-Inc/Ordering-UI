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
var _InputPhoneNumber = require("../InputPhoneNumber");
var _UserFormDetails = require("../UserFormDetails");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    _useState0 = _slicedToArray(_useState9, 2),
    modalIsOpen = _useState0[0],
    setModalIsOpen = _useState0[1];
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
    useProfileFormStyle: true,
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