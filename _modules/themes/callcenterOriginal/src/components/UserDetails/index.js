"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FcCancel = _interopRequireDefault(require("@meronex/icons/fc/FcCancel"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles = require("./styles");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));
var _libphonenumberJs = require("libphonenumber-js");
var _orderingComponents = require("ordering-components");
var _UserFormDetails = require("../UserFormDetails");
var _Modal = require("../Modal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var UserDetailsUI = function UserDetailsUI(props) {
  var _userState$result, _formState$result, _Object$values, _validationFields$fie, _userData$country_pho, _props$beforeElements, _props$beforeComponen, _parsePhoneNumber, _userData$cellphone, _props$afterComponent, _props$afterElements;
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
    userConfirmPhone = props.userConfirmPhone,
    setUserConfirmPhone = props.setUserConfirmPhone;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var userData = ((_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : _userState$result.result) || props.userData || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) || user;
  var validationFieldsLength = (_Object$values = Object.values(validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.checkout)) === null || _Object$values === void 0 ? void 0 : _Object$values.map(function (field) {
    return field.enabled;
  });
  var countryPhoneCode = (_userData$country_pho = userData === null || userData === void 0 ? void 0 : userData.country_phone_code) !== null && _userData$country_pho !== void 0 ? _userData$country_pho : userData === null || userData === void 0 ? void 0 : userData.country_code;
  var inputsConfirmAddress = [{
    id: 1,
    name: 'Name',
    type: 'text',
    code: 'name'
  }, {
    id: 2,
    name: 'Lastname',
    type: 'text',
    code: 'lastname'
  }];
  (0, _react.useEffect)(function () {
    if (isUserDetailsEdit) {
      !isEdit && toggleIsEdit();
    }
  }, [isUserDetailsEdit]);
  (0, _react.useEffect)(function () {
    setIsOpenUserData && setIsOpenUserData(isEdit);
  }, [isEdit]);
  var toggleEditState = function toggleEditState() {
    toggleIsEdit();
    cleanFormState({
      changes: {}
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (validationFields.loading || formState.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.UserData, {
    isModal: isModal
  }, isModal ? _toConsumableArray(Array(4)).map(function (_, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i,
      width: 150 + i * 10,
      height: 15
    });
  }) : validationFieldsLength === null || validationFieldsLength === void 0 ? void 0 : validationFieldsLength.map(function (field, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field === null || field === void 0 ? void 0 : field.id
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 250,
      height: 50
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 180,
      height: 25
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 210,
      height: 50
    }));
  })), !(validationFields.loading || formState.loading || userState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Container, null, isModal && /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, {
    isAddressFormOpen: isAddressFormOpen && !isEdit
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  })), /*#__PURE__*/_react.default.createElement("h1", null, t('CUSTOMER_DETAILS', 'Customer Details'))), /*#__PURE__*/_react.default.createElement(_styles.Header, {
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
  }))), !isEdit ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, (userData === null || userData === void 0 ? void 0 : userData.address) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.address), ((userData === null || userData === void 0 ? void 0 : userData.name) || (userData === null || userData === void 0 ? void 0 : userData.middle_name) || (userData === null || userData === void 0 ? void 0 : userData.lastname) || (userData === null || userData === void 0 ? void 0 : userData.second_lastname)) && /*#__PURE__*/_react.default.createElement(_styles.UserName, null, userData === null || userData === void 0 ? void 0 : userData.name, " ", userData === null || userData === void 0 ? void 0 : userData.middle_name, " ", userData === null || userData === void 0 ? void 0 : userData.lastname, " ", userData === null || userData === void 0 ? void 0 : userData.second_lastname), (userData === null || userData === void 0 ? void 0 : userData.email) && /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.email), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (user === null || user === void 0 ? void 0 : user.cellphone)) && /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CountryFlag, null, countryPhoneCode && (userData === null || userData === void 0 ? void 0 : userData.cellphone) && /*#__PURE__*/_react.default.createElement(_reactPhoneNumberInput.default, {
    onChange: function onChange() {},
    defaultCountry: (_parsePhoneNumber = (0, _libphonenumberJs.parsePhoneNumber)("+".concat(countryPhoneCode === null || countryPhoneCode === void 0 ? void 0 : countryPhoneCode.replace('+', ''), " ").concat(userData === null || userData === void 0 || (_userData$cellphone = userData.cellphone) === null || _userData$cellphone === void 0 ? void 0 : _userData$cellphone.replace("+".concat(countryPhoneCode), '')))) === null || _parsePhoneNumber === void 0 ? void 0 : _parsePhoneNumber.country
  })), /*#__PURE__*/_react.default.createElement("p", null, userData === null || userData === void 0 ? void 0 : userData.cellphone))) : /*#__PURE__*/_react.default.createElement(_styles.SideForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    userData: userData,
    isCustomerMode: isCustomerMode
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('CONFIRM_CELLPHONE_CLIENT', 'Confirm client\'s cellphone'),
    open: userConfirmPhone === null || userConfirmPhone === void 0 ? void 0 : userConfirmPhone.open,
    onClose: function onClose() {
      return setUserConfirmPhone({
        open: false,
        result: null
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    confirmDataLayout: true,
    isEdit: true,
    inputsconfirmData: inputsConfirmAddress,
    userData: userData,
    isCustomerMode: isCustomerMode
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
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