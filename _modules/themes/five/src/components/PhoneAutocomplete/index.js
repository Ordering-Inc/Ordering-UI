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
var _AddressList = require("../AddressList");
var _UserDetails = require("../UserDetails");
var _styles = require("./styles");
var _MdcCellphoneAndroid = _interopRequireDefault(require("@meronex/icons/mdc/MdcCellphoneAndroid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PhoneAutocompleteUI = function PhoneAutocompleteUI(props) {
  var _orderState$options, _configState$configs, _customersPhones$user2, _orderState$options4, _orderState$options7, _theme$images, _theme$images2, _orderState$options8, _orderState$options9, _orderState$options11, _orderState$options12, _theme$colors, _theme$images3, _customerState$result, _customerState$result2;
  var phone = props.phone,
    customerState = props.customerState,
    customersPhones = props.customersPhones,
    setCustomersPhones = props.setCustomersPhones,
    openModal = props.openModal,
    limitPhoneLength = props.limitPhoneLength,
    setOpenModal = props.setOpenModal,
    onChangeNumber = props.onChangeNumber,
    setCustomerState = props.setCustomerState,
    countryCallingCode = props.countryCallingCode,
    onRedirectPage = props.onRedirectPage,
    urlPhone = props.urlPhone,
    orderTypes = props.orderTypes,
    localPhoneCode = props.localPhoneCode;
  var allOrderTypes = [1, 2, 3, 4, 5];
  var pickupTypes = [2, 3, 4, 5];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changeType = _useOrder2[1].changeType;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)(urlPhone !== null && urlPhone !== void 0 ? urlPhone : ''),
    _useState4 = _slicedToArray(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    optSelected = _useState6[0],
    setOptSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOpenUserData = _useState8[0],
    setIsOpenUserData = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isAddressFormOpen = _useState10[0],
    setIsAddressFormOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(pickupTypes.includes(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type)),
    _useState12 = _slicedToArray(_useState11, 2),
    isPickupSelected = _useState12[0],
    setIsPickupSelected = _useState12[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').filter(function (value) {
    return allOrderTypes.includes(Number(value));
  }).map(function (value) {
    return Number(value);
  })) || [];
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
    var _orderState$options2;
    if (userCustomer !== null && userCustomer !== void 0 && userCustomer.id && orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2 = _orderState$options2.address) !== null && _orderState$options2 !== void 0 && _orderState$options2.address) {
      onRedirectPage && onRedirectPage('search');
    } else {
      setAlertState({
        open: true,
        content: t('SELECT_ADDRESS_CUSTOMER', 'Please select an address for the selected customer')
      });
    }
  };
  var handleChangeType = function handleChangeType(value) {
    if (!(orderState !== null && orderState !== void 0 && orderState.loading)) {
      changeType(value);
      if (value === 1) {
        setIsPickupSelected(false);
      }
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
    if (action === 'menu-close' || action === 'input-blur' || action === 'set-value' || inputValue.charAt(0) === '0') {
      return;
    }
    if (!inputValue) {
      setInputValue(inputValue);
      onChangeNumber(inputValue);
    }
    if (inputValue && inputValue.length > limitPhoneLength || !/^[0-9]+$/.test(inputValue)) {
      return;
    }
    setInputValue(inputValue);
    onChangeNumber(inputValue);
  };
  var onChange = function onChange(option) {
    var _customersPhones$user;
    setOptSelected(option);
    setInputValue(option ? option === null || option === void 0 ? void 0 : option.value : '');
    if (!option) {
      onChangeNumber('');
      return;
    }
    var user = (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.find(function (user) {
      return user.cellphone === (option === null || option === void 0 ? void 0 : option.value) || user.phone === (option === null || option === void 0 ? void 0 : option.value);
    });
    if (user) {
      setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
        result: user
      }));
      setOpenModal({
        signup: false,
        customer: true
      });
    } else {
      setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
        result: {
          error: false
        }
      }));
      setOpenModal({
        customer: false,
        signup: true
      });
    }
  };
  var createNewUser = function createNewUser() {
    var _optSelected$value;
    if (optSelected && (optSelected === null || optSelected === void 0 || (_optSelected$value = optSelected.value) === null || _optSelected$value === void 0 ? void 0 : _optSelected$value.length) === limitPhoneLength || !optSelected && phone.length === limitPhoneLength) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: true
      }));
    } else {
      setAlertState({
        open: true,
        content: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be :length: characters').replace(':length:', limitPhoneLength)
      });
    }
  };
  var handleCloseAddressList = function handleCloseAddressList() {
    setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
      customer: false
    }));
    setCustomerState(_objectSpread(_objectSpread({}, customerState), {}, {
      result: {
        error: false
      }
    }));
    deleteUserCustomer(true);
  };
  var handleChangeToPickup = function handleChangeToPickup() {
    var _orderTypes$find;
    var firstEnabledPickupType = (_orderTypes$find = orderTypes.find(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.value;
    handleChangeType(firstEnabledPickupType);
    setIsPickupSelected(true);
  };
  var optionsToSelect = customersPhones.users.map(function (user) {
    var obj = {};
    obj.value = user.cellphone || user.phone;
    obj.label = "".concat(user !== null && user !== void 0 && user.country_phone_code ? "(".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, ")") : '', " ").concat(user !== null && user !== void 0 && user.phone && !(user !== null && user !== void 0 && user.cellphone) ? "".concat(user === null || user === void 0 ? void 0 : user.phone) : '', " ").concat(user !== null && user !== void 0 && user.cellphone ? "".concat(user.cellphone) : '', " - {").concat(user.name, "}");
    return obj;
  }) || [];
  (0, _react.useEffect)(function () {
    if (!urlPhone) return;
    onInputChange(urlPhone, {
      action: 'url'
    });
    onChange({
      value: urlPhone,
      label: urlPhone
    });
  }, [urlPhone, customersPhones === null || customersPhones === void 0 || (_customersPhones$user2 = customersPhones.users) === null || _customersPhones$user2 === void 0 ? void 0 : _customersPhones$user2.length]);
  (0, _react.useEffect)(function () {
    var _orderState$options3;
    if (pickupTypes.includes(orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type)) {
      setIsPickupSelected(true);
    }
  }, [orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type]);
  var OrderTypesComponent = function OrderTypesComponent() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderTypes && (configTypes ? orderTypes.filter(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    }) : orderTypes).map(function (item, i) {
      var _orderState$options5, _orderState$options6;
      return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        key: item.value,
        onClick: function onClick() {
          return handleChangeType(item.value);
        },
        color: (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) === (item === null || item === void 0 ? void 0 : item.value) ? 'primary' : 'secondary',
        disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
        className: (orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type) !== (item === null || item === void 0 ? void 0 : item.value) ? 'activated' : ''
      }, item.text);
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('TITLE_HOME_CALLCENTER', 'Welcome to your Ordering Call Center.')), /*#__PURE__*/_react.default.createElement(_styles.Slogan, null, t('SUBTITLE_HOME_CALLCENTER', 'Start first by selecting a delivery type')), !(userCustomer && orderState !== null && orderState !== void 0 && (_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && (_orderState$options7 = _orderState$options7.address) !== null && _orderState$options7 !== void 0 && _orderState$options7.address) && /*#__PURE__*/_react.default.createElement(_styles.TypesContainer, null, configTypes.includes(1) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    onClick: function onClick() {
      return handleChangeType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: !isPickupSelected
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: !isPickupSelected
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.deliveryIco,
    width: 20,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY', 'Delivery'))), configTypes.some(function (type) {
    return pickupTypes.includes(type);
  }) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: isPickupSelected,
    onClick: function onClick() {
      return handleChangeToPickup();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: isPickupSelected
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.pickupIco,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP', 'Pickup')))), isPickupSelected && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')), /*#__PURE__*/_react.default.createElement(_styles.AdditionalTypesContainer, null, /*#__PURE__*/_react.default.createElement(OrderTypesComponent, null))), configTypes.includes(orderState === null || orderState === void 0 || (_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.type) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !userCustomer && /*#__PURE__*/_react.default.createElement(_styles.PhoneAutocompleteContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ADDING_CUSTOMERS_PHONE_NUMBER', 'Adding the customers’ phone number')), /*#__PURE__*/_react.default.createElement(_styles.WrappBtn, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: inputValue || userCustomer && orderState !== null && orderState !== void 0 && (_orderState$options9 = orderState.options) !== null && _orderState$options9 !== void 0 && (_orderState$options9 = _orderState$options9.address) !== null && _orderState$options9 !== void 0 && _orderState$options9.address ? 'primary' : 'secundary',
    onMouseDown: function onMouseDown() {
      var _orderState$options10;
      return !(userCustomer && orderState !== null && orderState !== void 0 && (_orderState$options10 = orderState.options) !== null && _orderState$options10 !== void 0 && (_orderState$options10 = _orderState$options10.address) !== null && _orderState$options10 !== void 0 && _orderState$options10.address) ? createNewUser() : handleFindClick();
    },
    disabled: !inputValue && !(userCustomer && orderState !== null && orderState !== void 0 && (_orderState$options11 = orderState.options) !== null && _orderState$options11 !== void 0 && (_orderState$options11 = _orderState$options11.address) !== null && _orderState$options11 !== void 0 && _orderState$options11.address)
  }, !(userCustomer && orderState !== null && orderState !== void 0 && (_orderState$options12 = orderState.options) !== null && _orderState$options12 !== void 0 && (_orderState$options12 = _orderState$options12.address) !== null && _orderState$options12 !== void 0 && _orderState$options12.address) ? t('CREATE_CUSTOMER', 'Create new customer') : "".concat(t('CONTINUE_WITH', 'Continue with'), " ").concat(userName))), /*#__PURE__*/_react.default.createElement(_styles.SelectContainer, null, /*#__PURE__*/_react.default.createElement(_MdcCellphoneAndroid.default, {
    size: 18,
    color: theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary
  }), /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    isSearchable: true,
    isClearable: true,
    className: "basic-single",
    classNamePrefix: "select",
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    value: optSelected,
    noOptionsMessage: function noOptionsMessage() {
      return (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) > 6 ? t('NO_OPTIONS', 'No options') : t('TYPE_AT_LEAST_NUMBER_SUGGEST', 'Type at least 7 numbers for suggesstions');
    },
    inputValue: !optSelected ? inputValue : '',
    onChange: onChange,
    onInputChange: onInputChange,
    isLoading: customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.loading,
    options: optionsToSelect
  }), optSelected && /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return onChange(optSelected);
    },
    color: "primary"
  }, t('CONTINUE', 'Continue'))))))), /*#__PURE__*/_react.default.createElement(_styles.ImageWrapper, {
    bgimage: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.phoneHero
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.signup,
    width: "80%",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    externalPhoneNumber: "".concat(localPhoneCode || countryCallingCode, " ").concat((optSelected === null || optSelected === void 0 ? void 0 : optSelected.value) || phone),
    saveCustomerUser: saveCustomerUser,
    fieldsNotValid: props.fieldsNotValid,
    useChekoutFileds: true,
    isCustomerMode: true,
    isPopup: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.customer,
    width: "80%",
    onClose: function onClose() {
      return handleCloseAddressList();
    },
    hideCloseDefault: true,
    padding: "20px"
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(customerState !== null && customerState !== void 0 && customerState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isAddressFormOpen: isAddressFormOpen,
    isOpenUserData: isOpenUserData,
    userId: customerState === null || customerState === void 0 || (_customerState$result = customerState.result) === null || _customerState$result === void 0 ? void 0 : _customerState$result.id,
    isCustomerMode: true,
    isModal: true,
    setIsOpenUserData: setIsOpenUserData,
    onClose: function onClose() {
      return handleCloseAddressList();
    }
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 || (_customerState$result2 = customerState.result) === null || _customerState$result2 === void 0 ? void 0 : _customerState$result2.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: _objectSpread(_objectSpread({}, customerState === null || customerState === void 0 ? void 0 : customerState.result), {}, {
      phone: phone,
      urlPhone: urlPhone
    }),
    isEnableContinueButton: true,
    isCustomerMode: true,
    isOpenUserData: isOpenUserData,
    setIsOpenUserData: setIsOpenUserData,
    setIsAddressFormOpen: setIsAddressFormOpen
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState.open,
    content: alertState.content,
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  }));
};
var PhoneAutocomplete = function PhoneAutocomplete(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var phoneProps = _objectSpread(_objectSpread({
    UIComponent: PhoneAutocompleteUI
  }, props), {}, {
    orderTypes: props.orderTypes || [{
      value: 1,
      text: t('DELIVERY', 'Delivery'),
      description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description')
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description')
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description')
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description')
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PhoneAutocomplete, phoneProps);
};
exports.PhoneAutocomplete = PhoneAutocomplete;
PhoneAutocompleteUI.defaultProps = {
  limitPhoneLength: 10
};