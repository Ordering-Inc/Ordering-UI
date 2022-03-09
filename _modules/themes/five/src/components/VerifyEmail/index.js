"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyEmail = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));

var _orderingComponents = require("ordering-components");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _Confirm = require("../Confirm");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VerifyEmailUI = function VerifyEmailUI(props) {
  var verifyEmailState = props.verifyEmailState,
      cleanErrorsState = props.cleanErrorsState,
      sendVerifyEmailCode = props.sendVerifyEmailCode,
      checkVerifyEmailCode = props.checkVerifyEmailCode;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

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

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      emailVerification = _useState6[0],
      setEmailVerification = _useState6[1];

  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, emailVerification),
      _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
      otpLeftTime = _useCountdownTimer2[0],
      _ = _useCountdownTimer2[1],
      resetOtpLeftTime = _useCountdownTimer2[2];

  var numOtpInputs = 6;

  var handleSendOtp = function handleSendOtp() {
    resetOtpLeftTime();
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
    setOtpState('');
  };

  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      if (emailVerification) {
        checkVerifyEmailCode({
          code: otpState
        });
        return;
      }
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    if (verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.errorSendCode || verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.errorCheckCode) {
      var _ref, _verifyEmailState$err, _verifyEmailState$err2, _verifyEmailState$err3;

      setAlertState({
        open: true,
        content: (_ref = (_verifyEmailState$err = verifyEmailState === null || verifyEmailState === void 0 ? void 0 : (_verifyEmailState$err2 = verifyEmailState.errorSendCode) === null || _verifyEmailState$err2 === void 0 ? void 0 : _verifyEmailState$err2[0]) !== null && _verifyEmailState$err !== void 0 ? _verifyEmailState$err : verifyEmailState === null || verifyEmailState === void 0 ? void 0 : (_verifyEmailState$err3 = verifyEmailState.errorCheckCode) === null || _verifyEmailState$err3 === void 0 ? void 0 : _verifyEmailState$err3[0]) !== null && _ref !== void 0 ? _ref : t('ERROR', 'Error')
      });
    }
  }, [verifyEmailState]);
  (0, _react.useEffect)(function () {
    if (!(verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.loadingSendCode)) {
      setEmailVerification(!!(verifyEmailState !== null && verifyEmailState !== void 0 && verifyEmailState.resultSendCode));
    }
  }, [verifyEmailState]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.FormInput, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperText, null, /*#__PURE__*/_react.default.createElement("span", null, t('VERIFICATION_CODE', 'Verification Code')), /*#__PURE__*/_react.default.createElement("span", null, !emailVerification ? t('VERIFICATION_CODE_MESSAGE', 'In order to continue using our platform please verify your email') : t('VERIFICATION_CODE_SENT_MESSAGE', 'Please type the verification code sent to your email'))), !emailVerification ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
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
      setEmailVerification(false);
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
  }, t('RESEND_AGAIN', 'Resend again?')))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var VerifyEmail = function VerifyEmail(props) {
  var verifyProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: VerifyEmailUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.VerifyEmail, verifyProps);
};

exports.VerifyEmail = VerifyEmail;