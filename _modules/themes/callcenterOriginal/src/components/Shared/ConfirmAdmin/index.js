"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmAdmin = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _orderingComponents = require("ordering-components");
var _Modal = require("../Modal");
var _styles = require("../../../styles");
var _Confirm = require("../Confirm");
var _useCountdownTimer3 = require("../../../../../../hooks/useCountdownTimer");
var _utils = require("../../../../../../utils");
var _styles2 = require("./styles");
var _InputPhoneNumber = require("../InputPhoneNumber");
var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ConfirmAdminUI = function ConfirmAdminUI(props) {
  var checkPasswordStatus = props.checkPasswordStatus,
    getCheckPassword = props.getCheckPassword,
    open = props.open,
    _onClose = props.onClose,
    onConfirm = props.onConfirm,
    confirmTab = props.confirmTab,
    otpType = props.otpType,
    setOtpType = props.setOtpType,
    handleChangeTab = props.handleChangeTab,
    setOtpState = props.setOtpState,
    otpState = props.otpState,
    generateOtpCode = props.generateOtpCode,
    checkCodeState = props.checkCodeState,
    handleChangeInput = props.handleChangeInput,
    handleChangeCredentials = props.handleChangeCredentials,
    setCellphoneStartZero = props.setCellphoneStartZero;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useForm = (0, _reactHookForm.useForm)(),
    handleSubmit = _useForm.handleSubmit,
    register = _useForm.register,
    errors = _useForm.errors;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    willVerifyOtpState = _useState4[0],
    setWillVerifyOtpState = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    userPhoneNumber = _useState6[0],
    setUserPhoneNumber = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    isValidPhoneNumber = _useState8[0],
    setIsValidPhoneNumber = _useState8[1];
  var numOtpInputs = confirmTab === 'otp' ? 6 : 4;
  var otpPlaceholder = _toConsumableArray(Array(numOtpInputs)).fill(0).join('');
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkCodeState !== null && checkCodeState !== void 0 && checkCodeState.loading) && willVerifyOtpState),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    resetOtpLeftTime = _useCountdownTimer2[2];
  var isOtpEmail = confirmTab === 'otp' && otpType === 'email';
  var isOptCellphone = confirmTab === 'otp' && otpType === 'cellphone';
  var handleChangeOtpType = function handleChangeOtpType(type) {
    setWillVerifyOtpState(false);
    handleChangeTab('otp');
    setOtpType(type);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setOtpState('');
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid, rawNumber) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var values = {
      country_phone_code: '',
      cellphone: ''
    };
    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }
    if (phoneNumberParser) {
      values = {
        country_phone_code: phoneNumberParser.countryCallingCode,
        cellphone: phoneNumberParser.nationalNumber
      };
    }
    setCellphoneStartZero && setCellphoneStartZero(rawNumber !== null && rawNumber !== void 0 && rawNumber.number && rawNumber !== null && rawNumber !== void 0 && rawNumber.countryCallingCode ? rawNumber === null || rawNumber === void 0 ? void 0 : rawNumber.number : null);
    handleChangeCredentials(values);
  };
  var handleSendOtp = function handleSendOtp() {
    if (willVerifyOtpState) {
      setOtpState('');
      resetOtpLeftTime();
      if (confirmTab === 'otp') {
        generateOtpCode();
        setWillVerifyOtpState(true);
      }
    }
  };
  var onSubmit = function onSubmit() {
    if (confirmTab === 'otp' && otpType === 'cellphone') {
      var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
      if (!userPhoneNumber) {
        setAlertState({
          open: true,
          content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
        });
        return;
      }
      if (!isPhoneNumberValid && userPhoneNumber) {
        setAlertState({
          open: true,
          content: [t('PHONE_NUMBER_IS_NOT_VALID', 'Phone number is not valid')]
        });
        return;
      }
    }
    if (confirmTab === 'password') {
      getCheckPassword();
    }
    if (confirmTab === 'otp') {
      generateOtpCode();
      setWillVerifyOtpState(true);
    }
  };
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      if (confirmTab === 'otp') {
        onConfirm(otpState);
      }
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    if (checkPasswordStatus.error) {
      setAlertState({
        open: true,
        content: checkPasswordStatus.error
      });
      return;
    }
    if (checkPasswordStatus.result === 'OK') {
      onConfirm();
    }
  }, [checkPasswordStatus.error, checkPasswordStatus.result]);
  (0, _react.useEffect)(function () {
    var _checkCodeState$resul, _checkCodeState$resul3;
    if (checkCodeState !== null && checkCodeState !== void 0 && (_checkCodeState$resul = checkCodeState.result) !== null && _checkCodeState$resul !== void 0 && _checkCodeState$resul.error) {
      var _checkCodeState$resul2;
      setAlertState({
        open: true,
        content: (checkCodeState === null || checkCodeState === void 0 || (_checkCodeState$resul2 = checkCodeState.result) === null || _checkCodeState$resul2 === void 0 ? void 0 : _checkCodeState$resul2.error) || [t('ERROR', 'Error')]
      });
    } else if (checkCodeState !== null && checkCodeState !== void 0 && (_checkCodeState$resul3 = checkCodeState.result) !== null && _checkCodeState$resul3 !== void 0 && _checkCodeState$resul3.result) {
      setAlertState({
        open: true,
        content: t('CODE_SENT', 'The code has been sent')
      });
      resetOtpLeftTime();
    }
  }, [checkCodeState]);
  (0, _react.useEffect)(function () {
    if (Object.keys(errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    var _credentials = {};
    if (user) {
      if (user !== null && user !== void 0 && user.cellphone) {
        var phone = null;
        if (user !== null && user !== void 0 && user.cellphone && user !== null && user !== void 0 && user.country_phone_code) {
          phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
          _credentials.country_phone_code = user.country_phone_code;
          _credentials.cellphone = user.cellphone;
        } else if (user !== null && user !== void 0 && user.country_phone_code) {
          phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
          _credentials.country_phone_code = user.country_phone_code;
          _credentials.cellphone = user === null || user === void 0 ? void 0 : user.cellphone;
        } else {
          phone = user === null || user === void 0 ? void 0 : user.cellphone;
          _credentials.cellphone = user === null || user === void 0 ? void 0 : user.cellphone;
        }
        setUserPhoneNumber(phone);
      }
      if (user !== null && user !== void 0 && user.email) {
        _credentials.email = user === null || user === void 0 ? void 0 : user.email;
      }
      handleChangeCredentials(_credentials);
    }
  }, [user]);
  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: open,
    width: props.width || '600px',
    onClose: function onClose() {
      return _onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.WrapperCheckPassword, {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement("h3", null, t('CONFIRM_PASSWORD', 'Confirm password')), /*#__PURE__*/_react.default.createElement(_styles2.Tabs, null, /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: confirmTab === 'password',
    onClick: function onClick() {
      setWillVerifyOtpState(false);
      handleChangeTab('password');
    }
  }, t('BY_PASSWORD', 'by Password')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: isOtpEmail,
    onClick: function onClick() {
      return handleChangeOtpType('email');
    }
  }, t('BY_OTP_EMAIL', 'by Otp Email')), /*#__PURE__*/_react.default.createElement(_styles2.Tab, {
    active: isOptCellphone,
    onClick: function onClick() {
      return handleChangeOtpType('cellphone');
    }
  }, t('BY_OTP_PHONE', 'by Otp Phone'))), confirmTab === 'password' && /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "password",
    name: "password",
    placeholder: t('TYPE_YOUR_PASSWORD_TO_CONFIRM_DELETE', 'Type your password to confirm delete.'),
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    autoComplete: "off",
    autoCapitalize: "off"
  })), !willVerifyOtpState && confirmTab === 'otp' && otpType === 'email' && /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    type: "email",
    name: "email",
    placeholder: t('EMAIL', 'Email'),
    defaultValue: user === null || user === void 0 ? void 0 : user.email,
    ref: register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Email is required').replace('_attribute_', t('EMAIL', 'Email')),
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('VALIDATION_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    autoComplete: "off",
    autoCapitalize: "off"
  })), !willVerifyOtpState && confirmTab === 'otp' && otpType === 'cellphone' && /*#__PURE__*/_react.default.createElement(_styles2.FormController, null, /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    isUser: true,
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  })), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    type: "submit",
    disabled: checkPasswordStatus.loading
  }, checkPasswordStatus.loading ? t('LOADING', 'Loading') : confirmTab === 'otp' ? t('GET_VERIFY_CODE', 'Get verify code') : t('CONFIRM', 'Confirm')), willVerifyOtpState && !(checkCodeState !== null && checkCodeState !== void 0 && checkCodeState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles2.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: otpPlaceholder,
    isInputNum: true,
    shouldAutoFocus: true,
    isDisabled: otpLeftTime === 0
  })), /*#__PURE__*/_react.default.createElement(_styles2.ResendCode, {
    disabled: otpLeftTime > 520,
    onClick: handleSendOtp
  }, t('RESEND_AGAIN', 'Resend again'), "?"), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    type: "button",
    color: "primary",
    onClick: function onClick() {
      setWillVerifyOtpState(false);
    }
  }, t('CANCEL', 'Cancel')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT'),
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
var ConfirmAdmin = exports.ConfirmAdmin = function ConfirmAdmin(props) {
  var checkPasswordControlProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ConfirmAdminUI
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.open && /*#__PURE__*/_react.default.createElement(_orderingComponents.CheckPassword, checkPasswordControlProps));
};