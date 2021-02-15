"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Modal = require("../Modal");

var _SignUpForm = require("../SignUpForm");

var _Buttons = require("../../styles/Buttons");

var _Inputs = require("../../styles/Inputs");

var _Confirm = require("../Confirm");

var _UserDetails = require("../UserDetails");

var _AddressList = require("../AddressList");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PhoneAutocompleteUI = function PhoneAutocompleteUI(props) {
  var _userState$result, _userState$result2;

  var onChangeNumber = props.onChangeNumber,
      phone = props.phone,
      errorMinLength = props.errorMinLength,
      setErrorMinLength = props.setErrorMinLength,
      openCustomer = props.openCustomer,
      setOpenCustomer = props.setOpenCustomer,
      openAddress = props.openAddress,
      setOpenAddress = props.setOpenAddress,
      userState = props.userState,
      gettingPhones = props.gettingPhones;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var handleCloseAlert = function handleCloseAlert() {
    setErrorMinLength({
      error: false,
      dispatch: false
    });
  };

  var handleCloseCustomer = function handleCloseCustomer() {
    setOpenCustomer(false);
  };

  var handleCloseAddress = function handleCloseAddress() {
    setOpenAddress(false);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME', 'All We need is Food.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME', 'Let\'s start to order food now')), /*#__PURE__*/_react.default.createElement(_styles.AutoComplete, {
    className: "autocomplete"
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "phone-input",
    id: "phone-input",
    placeholder: "Phone",
    type: "text",
    pattern: "[0-9]*",
    onInput: onChangeNumber,
    value: phone,
    onChange: function onChange() {},
    maxLength: "10",
    autoComplete: "off",
    disabled: gettingPhones === null || gettingPhones === void 0 ? void 0 : gettingPhones.loading
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    name: ""
  }, t('FIND', 'Find')))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openCustomer,
    width: "80%",
    onClose: handleCloseCustomer
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    externalPhoneNumber: phone,
    externalCloseModal: handleCloseCustomer
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openAddress,
    width: "60%",
    onClose: handleCloseAddress
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(userState !== null && userState !== void 0 && userState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    userData: userState === null || userState === void 0 ? void 0 : userState.result,
    isLoading: userState === null || userState === void 0 ? void 0 : userState.loading,
    userId: userState === null || userState === void 0 ? void 0 : (_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : _userState$result.id
  }), !(userState !== null && userState !== void 0 && userState.loading) && /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: userState === null || userState === void 0 ? void 0 : (_userState$result2 = userState.result) === null || _userState$result2 === void 0 ? void 0 : _userState$result2.id,
    changeOrderAddressWithDefault: true
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    open: errorMinLength.dispatch,
    content: "The Phone / Mobile must be 10 characters",
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  }));
};

var PhoneAutocomplete = function PhoneAutocomplete(props) {
  var phoneProps = _objectSpread({
    UIComponent: PhoneAutocompleteUI
  }, props);

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PhoneAutocomplete, phoneProps);
};

exports.PhoneAutocomplete = PhoneAutocomplete;