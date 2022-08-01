"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserDetailsUI = function UserDetailsUI(props) {
  var _userState$result, _formState$result, _verifyPhoneState$res3, _props$beforeElements, _props$beforeComponen, _parsePhoneNumber, _props$afterComponent, _props$afterElements;

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
      setFormState = props.setFormState;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var userData = ((_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : _userState$result.result) || props.userData || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) || user;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      willVerifyOtpState = _useState4[0],
      setWillVerifyOtpState = _useState4[1];

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
        content: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : (_verifyPhoneState$res2 = verifyPhoneState.result) === null || _verifyPhoneState$res2 === void 0 ? void 0 : _verifyPhoneState$res2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : (_verifyPhoneState$res3 = verifyPhoneState.result) === null || _verifyPhoneState$res3 === void 0 ? void 0 : _verifyPhoneState$res3.result]);

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
    if (!isEdit && requiredFields) {
      onClose && onClose();
    }
  }, [isEdit, requiredFields]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (validationFields.loading || formState.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 180,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 210,
    height: 25
  })), !(validationFields.loading || formState.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Container, null, isModal && /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, {
    isAddressFormOpen: isAddressFormOpen && !isEdit
  }, !requiredFields && /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  })), /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details'))), !requiredFields && /*#__PURE__*/_react.default.createElement(_styles.Header, {
    className: "user-form"
  }, !isModal && /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details')), cartStatus !== 2 && (!isEdit ? /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return toggleIsEdit();
    }
  }, t('CHANGE', 'Change')) : /*#__PURE__*/_react.default.createElement(_FcCancel.default, {
    className: "cancel",
    onClick: function onClick() {
      return toggleEditState();
    }
  }))), !isEdit ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, ((userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.middle_name) || (userData === null || userData === void 0 ? void 0 : userData.lastname) || (userData === null || userData === void 0 ? void 0 : userData.second_lastname)) && /*#__PURE__*/_react.default.createElement(_styles.UserName, null, userData === null || userData === void 0 ? void 0 : userData.name, " ", userData === null || userData === void 0 ? void 0 : userData.middle_name, " ", userData === null || userData === void 0 ? void 0 : userData.lastname, " ", userData === null || userData === void 0 ? void 0 : userData.second_lastname), (userData === null || userData === void 0 ? void 0 : userData.email) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.email), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CountryFlag, null, (userData === null || userData === void 0 ? void 0 : userData.country_phone_code) && /*#__PURE__*/_react.default.createElement(_reactPhoneNumberInput.default, {
    onChange: function onChange() {},
    defaultCountry: (_parsePhoneNumber = (0, _libphonenumberJs.parsePhoneNumber)("+".concat(userData === null || userData === void 0 ? void 0 : userData.country_phone_code, " ").concat(userData === null || userData === void 0 ? void 0 : userData.cellphone))) === null || _parsePhoneNumber === void 0 ? void 0 : _parsePhoneNumber.country
  })), /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.cellphone))) : /*#__PURE__*/_react.default.createElement(_styles.SideForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
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

var UserDetails = function UserDetails(props) {
  var userDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.UserFormDetails, userDetailsProps);
};

exports.UserDetails = UserDetails;