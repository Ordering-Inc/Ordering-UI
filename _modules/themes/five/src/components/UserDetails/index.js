"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FcCancel = _interopRequireDefault(require("@meronex/icons/fc/FcCancel"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _VerifyCodeForm = require("../VerifyCodeForm");
var _styles = require("./styles");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));
var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");
var _libphonenumberJs = require("libphonenumber-js");
var _orderingComponents = require("ordering-components");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _UserFormDetails = require("../UserFormDetails");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var UserDetailsUI = function UserDetailsUI(props) {
  var _userState$result, _formState$result, _verifyPhoneState$res3, _props$beforeElements, _props$beforeComponen, _userData$email, _userData$cellphone, _user$cellphone, _userData$cellphone2, _parsePhoneNumber, _userData$country_pho, _userData, _configs$default_coun, _props$afterComponent, _props$afterElements;
  var isEdit = props.isEdit,
    formState = props.formState,
    cleanFormState = props.cleanFormState,
    cartStatus = props.cartStatus,
    toggleIsEdit = props.toggleIsEdit,
    validationFields = props.validationFields,
    isUserDetailsEdit = props.isUserDetailsEdit,
    isCustomerMode = props.isCustomerMode,
    userState = props.userState,
    isModal = props.isModal,
    setIsOpenUserData = props.setIsOpenUserData,
    isAddressFormOpen = props.isAddressFormOpen,
    onClose = props.onClose,
    handleSendVerifyCode = props.handleSendVerifyCode,
    verifyPhoneState = props.verifyPhoneState,
    requiredFields = props.requiredFields,
    setFormState = props.setFormState,
    setIsSuccess = props.setIsSuccess,
    isCheckoutPlace = props.isCheckoutPlace;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    loading = _useSession2$.loading;
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
  var _useState3 = (0, _react.useState)(requiredFields),
    _useState4 = _slicedToArray(_useState3, 1),
    skeletonsLength = _useState4[0];
  var userData = ((_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : _userState$result.result) || props.userData || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) || user;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    willVerifyOtpState = _useState6[0],
    setWillVerifyOtpState = _useState6[1];
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, willVerifyOtpState),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    resetOtpLeftTime = _useCountdownTimer2[2];
  (0, _react.useEffect)(function () {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit();
    }
  }, [isUserDetailsEdit]);
  (0, _react.useEffect)(function () {
    setIsOpenUserData && setIsOpenUserData(isEdit);
  }, [isEdit]);
  (0, _react.useEffect)(function () {
    var _verifyPhoneState$res;
    if (verifyPhoneState !== null && verifyPhoneState !== void 0 && (_verifyPhoneState$res = verifyPhoneState.result) !== null && _verifyPhoneState$res !== void 0 && _verifyPhoneState$res.error) {
      var _verifyPhoneState$res2;
      setAlertState({
        open: true,
        content: (verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$res2 = verifyPhoneState.result) === null || _verifyPhoneState$res2 === void 0 ? void 0 : _verifyPhoneState$res2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$res3 = verifyPhoneState.result) === null || _verifyPhoneState$res3 === void 0 ? void 0 : _verifyPhoneState$res3.result]);
  var toggleEditState = function toggleEditState() {
    toggleIsEdit();
    cleanFormState({
      changes: {}
    });
  };
  var handleSendOtp = function handleSendOtp() {
    var _formState$changes, _formState$changes2;
    if (willVerifyOtpState && formState !== null && formState !== void 0 && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.cellphone && formState !== null && formState !== void 0 && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.country_phone_code) {
      var _formState$changes3 = formState === null || formState === void 0 ? void 0 : formState.changes,
        cellphone = _formState$changes3.cellphone,
        countryPhoneCode = _formState$changes3.country_phone_code;
      resetOtpLeftTime();
      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      });
    }
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var handleSendPhoneCode = function handleSendPhoneCode(values) {
    setWillVerifyOtpState(false);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
        verification_code: values === null || values === void 0 ? void 0 : values.code
      })
    }));
  };
  (0, _react.useEffect)(function () {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      });
    }
  }, [otpLeftTime]);
  (0, _react.useEffect)(function () {
    handleSendOtp();
  }, [willVerifyOtpState]);
  (0, _react.useEffect)(function () {
    if (isCheckoutPlace && ((requiredFields === null || requiredFields === void 0 ? void 0 : requiredFields.length) === 0 || (requiredFields === null || requiredFields === void 0 ? void 0 : requiredFields.length) === 1 && requiredFields !== null && requiredFields !== void 0 && requiredFields.includes('email') && isCustomerMode) && !(formState !== null && formState !== void 0 && formState.loading)) {
      setIsSuccess && setIsSuccess(true);
      onClose && onClose();
    }
  }, [isCheckoutPlace, requiredFields]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (validationFields.loading || formState.loading || userState.loading || loading) && /*#__PURE__*/_react.default.createElement(_styles.SkeletonsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UserData, null, skeletonsLength === null || skeletonsLength === void 0 ? void 0 : skeletonsLength.map(function (field) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: field === null || field === void 0 ? void 0 : field.id
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 250,
      height: 35
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: "100%",
      height: 40
    }));
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: "100%",
    height: 44,
    style: {
      marginTop: 20
    }
  }))), !(validationFields.loading || formState.loading || userState.loading || loading) && /*#__PURE__*/_react.default.createElement(_styles.Container, null, isModal && /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, {
    isAddressFormOpen: isAddressFormOpen && !isEdit
  }, !isCheckoutPlace && /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  })), /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details'))), !isCheckoutPlace && /*#__PURE__*/_react.default.createElement(_styles.Header, {
    className: "user-form"
  }, !isModal && /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details')), cartStatus !== 2 && isEdit && /*#__PURE__*/_react.default.createElement(_FcCancel.default, {
    className: "cancel",
    onClick: function onClick() {
      return toggleEditState();
    }
  })), !isEdit ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, ((userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.middle_name) || (userData === null || userData === void 0 ? void 0 : userData.lastname) || (userData === null || userData === void 0 ? void 0 : userData.second_lastname)) && /*#__PURE__*/_react.default.createElement(_styles.UserName, null, userData === null || userData === void 0 ? void 0 : userData.name, " ", userData === null || userData === void 0 ? void 0 : userData.middle_name, " ", userData === null || userData === void 0 ? void 0 : userData.lastname, " ", userData === null || userData === void 0 ? void 0 : userData.second_lastname), ((_userData$email = userData === null || userData === void 0 ? void 0 : userData.email) !== null && _userData$email !== void 0 ? _userData$email : userData === null || userData === void 0 ? void 0 : userData.guest_email) && /*#__PURE__*/_react.default.createElement("p", null, userData !== null && userData !== void 0 && userData.guest_id ? userData === null || userData === void 0 ? void 0 : userData.guest_email : userData === null || userData === void 0 ? void 0 : userData.email), (((_userData$cellphone = userData === null || userData === void 0 ? void 0 : userData.cellphone) !== null && _userData$cellphone !== void 0 ? _userData$cellphone : userData === null || userData === void 0 ? void 0 : userData.guest_cellphone) || ((_user$cellphone = user === null || user === void 0 ? void 0 : user.cellphone) !== null && _user$cellphone !== void 0 ? _user$cellphone : user === null || user === void 0 ? void 0 : user.guest_cellphone)) && /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CountryFlag, null, (userData === null || userData === void 0 ? void 0 : userData.country_phone_code) && ((_userData$cellphone2 = userData === null || userData === void 0 ? void 0 : userData.cellphone) !== null && _userData$cellphone2 !== void 0 ? _userData$cellphone2 : userData === null || userData === void 0 ? void 0 : userData.guest_cellphone) && /*#__PURE__*/_react.default.createElement(_reactPhoneNumberInput.default, {
    onChange: function onChange() {},
    defaultCountry: ((_parsePhoneNumber = (0, _libphonenumberJs.parsePhoneNumber)("+".concat(userData === null || userData === void 0 || (_userData$country_pho = userData.country_phone_code) === null || _userData$country_pho === void 0 ? void 0 : _userData$country_pho.replace('+', ''), " ").concat(userData === null || userData === void 0 || (_userData = userData[userData !== null && userData !== void 0 && userData.guest_id ? 'guest_cellphone' : 'cellphone']) === null || _userData === void 0 ? void 0 : _userData.replace("+".concat(userData === null || userData === void 0 ? void 0 : userData.country_phone_code), '')))) === null || _parsePhoneNumber === void 0 ? void 0 : _parsePhoneNumber.country) || (configs === null || configs === void 0 || (_configs$default_coun = configs.default_country_code) === null || _configs$default_coun === void 0 ? void 0 : _configs$default_coun.value)
  })), /*#__PURE__*/_react.default.createElement("p", null, userData !== null && userData !== void 0 && userData.guest_id ? userData === null || userData === void 0 ? void 0 : userData.guest_cellphone : userData === null || userData === void 0 ? void 0 : userData.cellphone)), /*#__PURE__*/_react.default.createElement(_styles.ChangeCustomerText, null, cartStatus !== 2 && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return toggleIsEdit();
    }
  }, t('CHANGE_USER_DETAILS', 'Change customer details')))) : /*#__PURE__*/_react.default.createElement(_styles.SideForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    userData: userData,
    isCustomerMode: isCustomerMode,
    setWillVerifyOtpState: setWillVerifyOtpState
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ENTER_VERIFICATION_CODE', 'Enter verification code'),
    open: willVerifyOtpState,
    width: "700px",
    height: "420px",
    onClose: function onClose() {
      return setWillVerifyOtpState(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_VerifyCodeForm.VerifyCodeForm, {
    otpLeftTime: otpLeftTime,
    credentials: formState === null || formState === void 0 ? void 0 : formState.changes,
    handleSendOtp: handleSendOtp,
    handleCheckPhoneCode: handleSendPhoneCode,
    email: (userData === null || userData === void 0 ? void 0 : userData.email) || (user === null || user === void 0 ? void 0 : user.email),
    isPhone: true
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
var UserDetails = exports.UserDetails = function UserDetails(props) {
  var userDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, userDetailsProps);
};