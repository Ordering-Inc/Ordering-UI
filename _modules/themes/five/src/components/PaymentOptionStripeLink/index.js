"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionStripeLinkUI = exports.PaymentOptionStripeLink = void 0;
var _react = _interopRequireWildcard(require("react"));
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactPhoneNumberInput = require("react-phone-number-input");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _Confirm = require("../Confirm");
var _InputPhoneNumber = require("../InputPhoneNumber");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PaymentOptionStripeLinkUI = exports.PaymentOptionStripeLinkUI = function PaymentOptionStripeLinkUI(props) {
  var _ref, _userInfo$name, _ref2, _userInfo$lastname;
  var userInfo = props.userInfo,
    stripeLinkState = props.stripeLinkState,
    setStripeLinkState = props.setStripeLinkState,
    handleSendStripeLink = props.handleSendStripeLink,
    handleChangeUserInfo = props.handleChangeUserInfo;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    isValidPhoneNumber = _useState4[0],
    setIsValidPhoneNumber = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    userPhoneNumber = _useState6[0],
    setUserPhoneNumber = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showCountdown = _useState8[0],
    setShowCountdown = _useState8[1];
  var _useState9 = (0, _react.useState)(59),
    _useState10 = _slicedToArray(_useState9, 2),
    countdown = _useState10[0],
    setCountdown = _useState10[1];
  var setUserCellPhone = function setUserCellPhone(_user) {
    if (userPhoneNumber && !userPhoneNumber.includes('null')) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }
    var cellphone = _user !== null && _user !== void 0 && _user.guest_id ? _user === null || _user === void 0 ? void 0 : _user.guest_cellphone : _user === null || _user === void 0 ? void 0 : _user.cellphone;
    if (cellphone) {
      var phone = null;
      if (_user !== null && _user !== void 0 && _user.country_phone_code) {
        phone = "+".concat(_user === null || _user === void 0 ? void 0 : _user.country_phone_code, " ").concat(cellphone);
      } else {
        phone = cellphone;
      }
      setUserPhoneNumber(phone);
      handleChangeUserInfo({
        name: user === null || user === void 0 ? void 0 : user.name,
        lastname: user === null || user === void 0 ? void 0 : user.lastname,
        country_phone_code: _user === null || _user === void 0 ? void 0 : _user.country_phone_code,
        cellphone: cellphone
      });
      return;
    }
    setUserPhoneNumber(cellphone || '');
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid, rawNumber) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: '',
      cellphone: ''
    };
    if (isValid) {
      var _configs$validation_p, _configs$validation_p2;
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
      if (!parseInt((_configs$validation_p = configs === null || configs === void 0 || (_configs$validation_p2 = configs.validation_phone_number_lib) === null || _configs$validation_p2 === void 0 ? void 0 : _configs$validation_p2.value) !== null && _configs$validation_p !== void 0 ? _configs$validation_p : 1, 10)) {
        var _phoneNumberParser, _formatPhoneNumber, _formatPhoneNumber$re;
        if ((_phoneNumberParser = phoneNumberParser) !== null && _phoneNumberParser !== void 0 && _phoneNumberParser.nationalNumber) phoneNumberParser.nationalNumber = (_formatPhoneNumber = (0, _reactPhoneNumberInput.formatPhoneNumber)(number)) === null || _formatPhoneNumber === void 0 || (_formatPhoneNumber$re = _formatPhoneNumber.replace) === null || _formatPhoneNumber$re === void 0 ? void 0 : _formatPhoneNumber$re.call(_formatPhoneNumber, /\s/g, '');
      }
    }
    if (phoneNumberParser) {
      var _phoneNumberParser2, _phoneNumberParser3;
      phoneNumber = {
        country_phone_code: (_phoneNumberParser2 = phoneNumberParser) === null || _phoneNumberParser2 === void 0 ? void 0 : _phoneNumberParser2.countryCallingCode,
        cellphone: (_phoneNumberParser3 = phoneNumberParser) === null || _phoneNumberParser3 === void 0 ? void 0 : _phoneNumberParser3.nationalNumber
      };
    }
    handleChangeUserInfo(_objectSpread({}, phoneNumber));
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setStripeLinkState(_objectSpread(_objectSpread({}, stripeLinkState), {}, {
      error: null
    }));
  };
  var onSubmit = function onSubmit(type) {
    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
    var content = [];
    if (!userPhoneNumber) {
      content.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.'));
      setAlertState({
        open: true,
        content: content
      });
      return;
    }
    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user !== null && user !== void 0 && user.country_phone_code) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid'));
        setAlertState({
          open: true,
          content: content
        });
        return;
      }
      content.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      setAlertState({
        open: true,
        content: content
      });
      return;
    }
    if (Object.keys(userInfo).length > 0 && isPhoneNumberValid) {
      if ((content === null || content === void 0 ? void 0 : content.length) > 0) {
        setAlertState({
          open: true,
          content: content
        });
        return;
      }
      if (!(stripeLinkState !== null && stripeLinkState !== void 0 && stripeLinkState.paymentURL)) {
        setAlertState({
          open: true,
          content: [t('ERROR_LINK_NOT_AVAILABLE', 'The link is not available please reload the page')]
        });
        return;
      }
      handleSendStripeLink(type, function () {
        setShowCountdown(true);
      });
    }
  };
  (0, _react.useEffect)(function () {
    var timer;
    if (showCountdown && countdown > 0) {
      timer = setTimeout(function () {
        return setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setShowCountdown(false);
      setCountdown(59);
    }
    return function () {
      return clearTimeout(timer);
    };
  }, [showCountdown, countdown]);
  (0, _react.useEffect)(function () {
    if (user) {
      setUserCellPhone(user);
    }
  }, [user]);
  (0, _react.useEffect)(function () {
    if (!(stripeLinkState !== null && stripeLinkState !== void 0 && stripeLinkState.loading) && stripeLinkState !== null && stripeLinkState !== void 0 && stripeLinkState.error) {
      setAlertState({
        open: true,
        content: (stripeLinkState === null || stripeLinkState === void 0 ? void 0 : stripeLinkState.error) || [t('ERROR', 'Error')]
      });
    }
  }, [stripeLinkState === null || stripeLinkState === void 0 ? void 0 : stripeLinkState.loading]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showCountdown ? /*#__PURE__*/_react.default.createElement(_styles.CodeSentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CODE_HAS_BEEN_SENT_TO', 'Link has been sent to _phone_').replace('_phone_', userPhoneNumber)), /*#__PURE__*/_react.default.createElement("div", {
    className: "countdown"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, countdown))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: true
  }, t('RESEND_LINK', 'Resend link'))) : /*#__PURE__*/_react.default.createElement(_styles.StripeLinkContainer, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "message"
  }, t('SEND_SMS_WHATSAPP_MESSAGE', 'The link will be send to the following number')), /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inputs-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "first-input"
  }, /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Person, null)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "name",
    className: "form",
    placeholder: t('NAME', 'Name'),
    defaultValue: (_ref = (_userInfo$name = userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) !== null && _userInfo$name !== void 0 ? _userInfo$name : user === null || user === void 0 ? void 0 : user.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeUserInfo({
        name: e.target.value
      });
    },
    autoComplete: "off"
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIconWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Person, null)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "lastname",
    className: "form",
    placeholder: t('LAST_NAME', 'Last name'),
    defaultValue: (_ref2 = (_userInfo$lastname = userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastname) !== null && _userInfo$lastname !== void 0 ? _userInfo$lastname : user === null || user === void 0 ? void 0 : user.lastname) !== null && _ref2 !== void 0 ? _ref2 : '',
    onChange: function onChange(e) {
      return handleChangeUserInfo({
        lastname: e.target.value
      });
    },
    autoComplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_styles.InputPhoneNumberWrapper, null, /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "buttons-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onSubmit('sms');
    },
    disabled: stripeLinkState.loading
  }, t('SEND_SMS', 'Send SMS'))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return onSubmit('whatsapp');
    },
    disabled: stripeLinkState.loading
  }, t('SEND_WHATSAPP', 'Send WhatsApp'))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
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
var PaymentOptionStripeLink = exports.PaymentOptionStripeLink = function PaymentOptionStripeLink(props) {
  var paymentOptionStripeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionStripeLinkUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PaymentOptionStripeLink, paymentOptionStripeProps);
};