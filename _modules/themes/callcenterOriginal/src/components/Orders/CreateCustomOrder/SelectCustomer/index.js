"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectCustomer = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _UserAddForm = require("../../UserAddForm");
var _AddressList = require("../../AddressList");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _CgSpinnerTwoAlt = _interopRequireDefault(require("@meronex/icons/cg/CgSpinnerTwoAlt"));
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SelectCustomer = function SelectCustomer(props) {
  var _customersPhones$user, _customersPhones$user2;
  var phone = props.phone,
    customersPhones = props.customersPhones,
    selectedUser = props.selectedUser,
    setSelectedUser = props.setSelectedUser,
    onChangeNumber = props.onChangeNumber,
    handleParentSidebarMove = props.handleParentSidebarMove,
    customerAddress = props.customerAddress;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    searchInputFocus = _useState2[0],
    setSearchInputFocus = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    showSearchbar = _useState4[0],
    setShowSearchbar = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    openSidebar = _useState6[0],
    setOpenSidebar = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openExtraAdddress = _useState8[0],
    setOpenExtraAddress = _useState8[1];
  var timeout = null;
  var onInputChange = function onInputChange(inputValue) {
    if (inputValue && inputValue.length > 10) {
      return;
    }
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onChangeNumber(inputValue);
    }, 750);
  };
  var onSelectUser = function onSelectUser(user) {
    setUserCustomer(user, true);
    setSelectedUser(user);
    setShowSearchbar(false);
  };
  var handleOpenAddForm = function handleOpenAddForm() {
    setOpenSidebar('user_add_form');
    handleParentSidebarMove(500);
  };
  var handleCloseSidebar = function handleCloseSidebar() {
    setOpenSidebar(null);
    handleParentSidebarMove(0);
  };
  var onPhoneNumberPaste = function onPhoneNumberPaste(event) {
    event.preventDefault();
    var pastedValue = event.clipboardData.getData('text/plain');
    var trimmedValue = pastedValue.replace(/\D/g, '');
    document.execCommand('insertText', false, trimmedValue);
    onChangeNumber(trimmedValue);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SectionContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('CUSTOMER', 'Customer')), /*#__PURE__*/_react.default.createElement("p", null, t('SEARCH_WITH_PHONE_FOR_CUSTOM_ORDER', 'Search with the phone the customer who will assign the custom order.')), /*#__PURE__*/_react.default.createElement(_styles2.SearchBarContainer, null, showSearchbar ? /*#__PURE__*/_react.default.createElement(_styles2.SearchBarWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Input, {
    placeholder: t('PHONE_NUMBER', 'Phone number'),
    onChange: function onChange(e) {
      return onInputChange(e.target.value);
    },
    defaultValue: phone,
    onKeyPress: function onKeyPress(e) {
      if (!/^[0-9]$/.test(e.key) || e.target.value.length >= 10) {
        e.preventDefault();
      }
    },
    onFocus: function onFocus() {
      return setSearchInputFocus(true);
    },
    onBlur: function onBlur() {
      setTimeout(function () {
        setSearchInputFocus(false);
      }, 300);
    },
    onPaste: function onPaste(event) {
      return onPhoneNumberPaste(event);
    }
  }), customersPhones.loading && /*#__PURE__*/_react.default.createElement("span", {
    className: "loading"
  }, /*#__PURE__*/_react.default.createElement(_CgSpinnerTwoAlt.default, null)), searchInputFocus && /*#__PURE__*/_react.default.createElement(_styles2.OptionsToSelectContainer, null, (customersPhones === null || customersPhones === void 0 ? void 0 : (_customersPhones$user = customersPhones.users) === null || _customersPhones$user === void 0 ? void 0 : _customersPhones$user.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, customersPhones === null || customersPhones === void 0 ? void 0 : (_customersPhones$user2 = customersPhones.users) === null || _customersPhones$user2 === void 0 ? void 0 : _customersPhones$user2.map(function (user) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, {
      key: user.id,
      onClick: function onClick() {
        return onSelectUser(user);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, (user === null || user === void 0 ? void 0 : user.cellphone) || (user === null || user === void 0 ? void 0 : user.phone)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, user !== null && user !== void 0 && user.photo ? /*#__PURE__*/_react.default.createElement("img", {
      src: optimizeImage(user === null || user === void 0 ? void 0 : user.photo, 'h_50,c_limit'),
      alt: ""
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "name"
    }, user === null || user === void 0 ? void 0 : user.name, " ", user === null || user === void 0 ? void 0 : user.lastname));
  })) : /*#__PURE__*/_react.default.createElement("p", null, customersPhones.loading ? t('LOADING', 'Loading') : (phone === null || phone === void 0 ? void 0 : phone.length) > 6 ? t('NO_OPTIONS', 'No options') : t('TYPE_AT_LEAST_NUMBER_SUGGEST', 'Type at least 7 numbers for suggesstions')))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectedUserWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.SelectOption, {
    onClick: function onClick() {
      return setShowSearchbar(true);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.cellphone) || (selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.phone)), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Dot, null), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, selectedUser !== null && selectedUser !== void 0 && selectedUser.photo ? /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.photo, 'h_50,c_limit'),
    alt: ""
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name, " ", selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.lastname)))), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    disabled: openSidebar === 'user_add_form',
    onClick: function onClick() {
      return handleOpenAddForm();
    }
  }, t('USERS_REGISTER', 'New user'))), selectedUser && /*#__PURE__*/_react.default.createElement(_styles2.CustomerAddressWrapper, null, (customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), /*#__PURE__*/_react.default.createElement("span", null, customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.address)), /*#__PURE__*/_react.default.createElement(_styles.LinkButton, {
    onClick: function onClick() {
      setOpenSidebar('address_list');
      handleParentSidebarMove(500);
    }
  }, customerAddress !== null && customerAddress !== void 0 && customerAddress.address ? t('CHANGE', 'Change') : t('ADD_NEW_ADDRESS', 'Add new address')))), openSidebar === 'user_add_form' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: true,
    sidebarId: "user_add_form",
    open: openSidebar === 'user_add_form',
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_UserAddForm.UserAddForm, {
    isFromCustomOrder: true
    // defaultPhoneNumber={
    //   findExitingCountryPhoneCode(configs?.default_country_code?.value?.toUpperCase())
    //     ? `+${findExitingCountryPhoneCode(configs?.default_country_code?.value?.toUpperCase())} ${selectedUser?.cellphone || selectedUser?.phone || phone}`
    //     : `+1 ${selectedUser?.cellphone || selectedUser?.phone || phone}`
    // }
    ,
    handleSuccessAdd: onSelectUser,
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  })), openSidebar === 'address_list' && /*#__PURE__*/_react.default.createElement(_Shared.SideBar, {
    isBorderShow: !openExtraAdddress,
    sidebarId: "address_list",
    defaultSideBarWidth: openExtraAdddress ? 1000 : 500,
    moveDistance: openExtraAdddress ? 500 : 0,
    open: openSidebar === 'address_list',
    onClose: function onClose() {
      return handleCloseSidebar();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.SavedPlaces, null, /*#__PURE__*/_react.default.createElement("h2", null, selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.name, " ", selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('SELECT_CUSTOMER_ADDRESS', 'Select customer address')), /*#__PURE__*/_react.default.createElement(_styles2.AddressListWrapper, null, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isSeletectedUserAddresses: true,
    userId: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.id,
    addresses: selectedUser === null || selectedUser === void 0 ? void 0 : selectedUser.addresses,
    userState: {
      user: selectedUser
    },
    setExtraOpen: setOpenExtraAddress,
    handleSuccessUpdate: setSelectedUser
  })))));
};
exports.SelectCustomer = SelectCustomer;