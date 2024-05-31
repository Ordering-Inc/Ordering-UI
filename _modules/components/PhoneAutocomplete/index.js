"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _Modal = require("../Modal");
var _SignUpForm = require("../SignUpForm");
var _Buttons = require("../../styles/Buttons");
var _Confirm = require("../Confirm");
var _UserDetails = require("../UserDetails");
var _AddressList = require("../AddressList");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var PhoneAutocompleteUI = function PhoneAutocompleteUI(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _customerState$result, _customerState$result2, _props$afterComponent, _props$afterElements;
  var phone = props.phone,
    customerState = props.customerState,
    customersPhones = props.customersPhones,
    setCustomersPhones = props.setCustomersPhones,
    openModal = props.openModal,
    setOpenModal = props.setOpenModal,
    onChangeNumber = props.onChangeNumber,
    setCustomerState = props.setCustomerState,
    countryCallingCode = props.countryCallingCode,
    onRedirectPage = props.onRedirectPage;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    optSelected = _useState6[0],
    setOptSelected = _useState6[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var userName = userCustomer !== null && userCustomer !== void 0 && userCustomer.lastname ? "".concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname) : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name;
  var handleCloseAlert = function handleCloseAlert() {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      error: null
    }));
    setAlertState({
      open: false,
      content: []
    });
  };
  var saveCustomerUser = function saveCustomerUser(user) {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      users: [].concat(_toConsumableArray(customersPhones.users), [user])
    }));
    setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
      result: user
    }));
    setOpenModal({
      customer: true,
      signup: false
    });
  };
  var handleFindClick = function handleFindClick() {
    var _orderState$options;
    if (userCustomer !== null && userCustomer !== void 0 && userCustomer.id && orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options = _orderState$options.address) !== null && _orderState$options !== void 0 && _orderState$options.address) {
      onRedirectPage && onRedirectPage('search');
    } else {
      setAlertState({
        open: true,
        content: t('SELECT_ADDRESS_CUSTOMER', 'Please select an address for the selected customer')
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (customersPhones !== null && customersPhones !== void 0 && customersPhones.error) {
      setAlertState({
        open: true,
        content: [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]
      });
    }
  }, [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]);
  var onInputChange = function onInputChange(inputValue, _ref) {
    var action = _ref.action;
    if (action === 'menu-close' || action === 'input-blur' || action === 'set-value') {
      return;
    }
    if (!inputValue) {
      setInputValue(inputValue);
    }
    if (inputValue && inputValue.length > 10 || !/^[0-9]+$/.test(inputValue)) {
      return;
    }
    setInputValue(inputValue);
    onChangeNumber(inputValue);
  };
  var onChange = function onChange(option) {
    var _customersPhones$user;
    setOptSelected(option);
    setInputValue(option ? option === null || option === void 0 ? void 0 : option.value : '');
    var user = (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.find(function (user) {
      return user.cellphone === (option === null || option === void 0 ? void 0 : option.value) || user.phone === (option === null || option === void 0 ? void 0 : option.value);
    });
    if (user) {
      setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
        result: user
      }));
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        customer: true
      }));
    }
  };
  var createNewUser = function createNewUser() {
    var _optSelected$value;
    if (optSelected && (optSelected === null || optSelected === void 0 || (_optSelected$value = optSelected.value) === null || _optSelected$value === void 0 ? void 0 : _optSelected$value.length) === 10 || !optSelected && phone.length === 10) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: true
      }));
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be 10 characters')
      });
    }
  };
  var handleCloseAddressList = function handleCloseAddressList() {
    setOpenModal({
      openModal: openModal,
      customer: false
    });
    setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
      result: {
        error: false
      }
    }));
    deleteUserCustomer(true);
  };
  var optionsToSelect = customersPhones.users.map(function (user) {
    var obj = {};
    obj.value = user.cellphone || user.phone;
    obj.label = "".concat(user !== null && user !== void 0 && user.phone ? "".concat(t('PHONE', 'Phone'), ": ").concat(user === null || user === void 0 ? void 0 : user.phone) : '', " ").concat(user !== null && user !== void 0 && user.cellphone ? "".concat(t('CELLPHONE', 'Cellphone'), ": ").concat(user.cellphone) : '', " (").concat(user.name, ")");
    return obj;
  }) || [];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, {
    bgimage: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.homeHero
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME_CALLCENTER', 'Start First by adding the customers\' phone number')), !userCustomer && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative',
      width: '60%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    isSearchable: true,
    isClearable: true,
    className: "basic-single",
    classNamePrefix: "select",
    placeholder: t('PHONE', 'Phone'),
    value: optSelected,
    noOptionsMessage: function noOptionsMessage() {
      return t('NO_OPTIONS', 'No options');
    },
    inputValue: !optSelected ? inputValue : '',
    onChange: onChange,
    onInputChange: onInputChange,
    isLoading: customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.loading,
    options: optionsToSelect
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: inputValue ? 'primary' : 'secundary',
    onClick: function onClick() {
      return createNewUser();
    },
    style: {
      position: 'absolute',
      top: 13,
      right: 60
    },
    disabled: !inputValue
  }, t('CREATE_CUSTOMER', 'Create new customer'))), (userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) && /*#__PURE__*/_react.default.createElement(_styles.WrappBtn, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    name: "find",
    onClick: function onClick() {
      return handleFindClick();
    }
  }, "".concat(t('CONTINUE_WITH', 'Continue with'), " ").concat(userName))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.signup,
    width: "80%",
    onClose: function onClose() {
      return setOpenModal({
        openModal: openModal,
        signup: false
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    externalPhoneNumber: "".concat(countryCallingCode, " ").concat((optSelected === null || optSelected === void 0 ? void 0 : optSelected.value) || phone),
    saveCustomerUser: saveCustomerUser,
    fieldsNotValid: props.fieldsNotValid,
    useChekoutFileds: true,
    isCustomerMode: props.isCustomerMode
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.customer,
    width: "60%",
    onClose: function onClose() {
      return handleCloseAddressList();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(customerState !== null && customerState !== void 0 && customerState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    userId: customerState === null || customerState === void 0 || (_customerState$result = customerState.result) === null || _customerState$result === void 0 ? void 0 : _customerState$result.id,
    isCustomerMode: true
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 || (_customerState$result2 = customerState.result) === null || _customerState$result2 === void 0 ? void 0 : _customerState$result2.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: _objectSpread(_objectSpread({}, customerState === null || customerState === void 0 ? void 0 : customerState.result), {}, {
      phone: phone
    }),
    isEnableContinueButton: true,
    isCustomerMode: true
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState.open,
    content: alertState.content,
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var PhoneAutocomplete = exports.PhoneAutocomplete = function PhoneAutocomplete(props) {
  var phoneProps = _objectSpread({
    UIComponent: PhoneAutocompleteUI
  }, props);
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PhoneAutocomplete, phoneProps);
};