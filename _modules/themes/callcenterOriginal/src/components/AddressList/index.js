"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _NotFoundSource = require("../NotFoundSource");
var _Buttons = require("../../styles/Buttons");
var _Modal = require("../Modal");
var _AddressForm = require("../AddressForm");
var _Confirm = require("../Confirm");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
var _SpreadForm = require("../AddressForm/SpreadForm");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getSpreadAddressFormatted = function getSpreadAddressFormatted(_address) {
  var restValues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _objectSpread({
    route: _address === null || _address === void 0 ? void 0 : _address.route,
    street_number: _address === null || _address === void 0 ? void 0 : _address.street_number,
    neighborhood: _address === null || _address === void 0 ? void 0 : _address.neighborhood,
    city: _address === null || _address === void 0 ? void 0 : _address.city,
    state: _address === null || _address === void 0 ? void 0 : _address.state,
    country_code: _address === null || _address === void 0 ? void 0 : _address.country_code,
    country: _address === null || _address === void 0 ? void 0 : _address.country,
    address: _address === null || _address === void 0 ? void 0 : _address.address,
    locality: _address === null || _address === void 0 ? void 0 : _address.locality,
    location: _address === null || _address === void 0 ? void 0 : _address.location,
    zipcode: _address === null || _address === void 0 ? void 0 : _address.zipcode
  }, restValues);
};
var AddressListUI = function AddressListUI(props) {
  var _addressList$addresse, _configs$unaddressed_, _orderState$options, _orderState$options2, _configs$country_auto, _configs$country_auto2, _addressList$addresse4, _addressList$addresse5, _orderState$options8, _orderState$options9, _addressList$error$, _orderState$options10, _orderState$options11, _orderState$options12, _confirm$handleOnCanc;
  var actionStatus = props.actionStatus,
    addressList = props.addressList,
    handleDelete = props.handleDelete,
    setAddressList = props.setAddressList,
    handleSetDefault = props.handleSetDefault,
    isModal = props.isModal,
    isPopover = props.isPopover,
    isProductForm = props.isProductForm,
    onCancel = props.onCancel,
    onAccept = props.onAccept,
    userId = props.userId,
    userCustomerSetup = props.userCustomerSetup,
    isEnableContinueButton = props.isEnableContinueButton,
    setCustomerModalOpen = props.setCustomerModalOpen,
    isCustomerMode = props.isCustomerMode,
    isFromCheckout = props.isFromCheckout,
    isOpenUserData = props.isOpenUserData,
    setIsAddressFormOpen = props.setIsAddressFormOpen,
    isHeader = props.isHeader,
    notUseCustomerInfo = props.notUseCustomerInfo,
    franchiseId = props.franchiseId,
    setIsSavedAddress = props.setIsSavedAddress,
    isFromPhoneAutocomplete = props.isFromPhoneAutocomplete,
    setUserConfirmPhone = props.setUserConfirmPhone,
    userConfirmPhone = props.userConfirmPhone,
    disabledSms = props.disabledSms;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    curAddress = _useState2[0],
    setCurAddress = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addressOpen = _useState4[0],
    setAddressOpen = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      title: null,
      content: null,
      handleOnAccept: null,
      handleOnCancel: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    addressSpreadForm = _useState8[0],
    setAddressSpreadForm = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    editSpreadAddress = _useState10[0],
    setEditSpreadAddress = _useState10[1];
  var _useState11 = (0, _react.useState)('general'),
    _useState12 = _slicedToArray(_useState11, 2),
    tabSelected = _useState12[0],
    setTabSelected = _useState12[1];
  var addFormRestrictions = (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.imported_address_text) && ((_addressList$addresse = addressList.addresses) === null || _addressList$addresse === void 0 ? void 0 : _addressList$addresse.length) === 0 && !(addressList !== null && addressList !== void 0 && addressList.loading) && !(addressList !== null && addressList !== void 0 && addressList.error);
  var uniqueAddressesList = addressList.addresses && addressList.addresses.filter(function (address, i, self) {
    return i === self.findIndex(function (obj) {
      return address.address === obj.address && address.address_notes === obj.address_notes && address.zipcode === obj.zipcode && address.internal_number === obj.internal_number;
    });
  }) || [];
  var unaddressedTypes = (configs === null || configs === void 0 || (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isAllowUnaddressOrderType = unaddressedTypes.includes(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) && (user === null || user === void 0 ? void 0 : user.id) === (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.user_id);
  var countryAutocomplete = (_configs$country_auto = configs === null || configs === void 0 || (_configs$country_auto2 = configs.country_autocomplete) === null || _configs$country_auto2 === void 0 || (_configs$country_auto2 = _configs$country_auto2.value) === null || _configs$country_auto2 === void 0 ? void 0 : _configs$country_auto2.toUpperCase()) !== null && _configs$country_auto !== void 0 ? _configs$country_auto : '*';
  var openAddress = function openAddress(address) {
    setCurAddress(address);
    (address === null || address === void 0 ? void 0 : address.location) && setAddressSpreadForm(getSpreadAddressFormatted(address));
    setAddressOpen(true);
    setIsAddressFormOpen && setIsAddressFormOpen(true);
    var container = window.document.getElementsByClassName('form_edit')[0];
    container && (0, _utils.scrollTo)(container, 0, 500);
  };
  var handleSaveAddress = function handleSaveAddress(address) {
    var found = false;
    var addresses = addressList.addresses.map(function (_address) {
      if ((_address === null || _address === void 0 ? void 0 : _address.id) === (address === null || address === void 0 ? void 0 : address.id)) {
        Object.assign(_address, address);
        found = true;
      } else if (address.default) {
        _address.default = false;
      }
      return _address;
    });
    if (!found) {
      addresses.push(address);
    }
    setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
      addresses: addresses
    }));
    if (userCustomerSetup) {
      handleSetAddress(address);
      return;
    }
    setIsSavedAddress && setIsSavedAddress(true);
    handleCloseAddressForm();
  };
  var handleSetAddress = function handleSetAddress(address, options) {
    var _address$location3, _address$location4;
    if (checkAddress(address) && isCustomerMode && (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id) === (user === null || user === void 0 ? void 0 : user.id) && !isFromCheckout) {
      var _address$location, _address$location2;
      if (!(address !== null && address !== void 0 && (_address$location = address.location) !== null && _address$location !== void 0 && _address$location.lat) || !(address !== null && address !== void 0 && (_address$location2 = address.location) !== null && _address$location2 !== void 0 && _address$location2.lng)) {
        openAddress(address);
        return;
      }
      setIsSavedAddress && setIsSavedAddress(true);
      handleSetDefault(address, userCustomerSetup, true);
      setCustomerModalOpen && setCustomerModalOpen(false);
      if (!isFromPhoneAutocomplete) {
        events.emit('go_to_page', {
          page: 'search'
        });
      }
      return;
    }
    if (!(address !== null && address !== void 0 && (_address$location3 = address.location) !== null && _address$location3 !== void 0 && _address$location3.lat) || !(address !== null && address !== void 0 && (_address$location4 = address.location) !== null && _address$location4 !== void 0 && _address$location4.lng)) {
      openAddress(address);
      return;
    }
    !(options !== null && options !== void 0 && options.avoidRedirect) && setIsSavedAddress && setIsSavedAddress(true);
    handleCloseAddressForm();
    handleSetDefault(address, userCustomerSetup);
  };
  var handleDeleteClick = function handleDeleteClick(address) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ADDRESS', 'Are you sure that you want to delete the address?'),
      handleOnAccept: function handleOnAccept() {
        handleDelete(address);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var checkAddress = function checkAddress(address) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    if (userCustomerSetup) {
      return address.default;
    }
    props.forEach(function (prop) {
      if (address !== null && address !== void 0 && address[prop]) {
        if (prop === 'location') {
          var _orderState$options3, _orderState$options4;
          values.push((address === null || address === void 0 ? void 0 : address[prop].lat) === (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3[prop]) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.lat) && (address === null || address === void 0 ? void 0 : address[prop].lng) === (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4[prop]) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.lng));
        } else {
          var _orderState$options5;
          values.push((address === null || address === void 0 ? void 0 : address[prop]) === (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5[prop]));
        }
      } else {
        var _orderState$options6, _orderState$options7;
        values.push((orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 || (_orderState$options6 = _orderState$options6.address) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6[prop]) === null || (orderState === null || orderState === void 0 || (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 || (_orderState$options7 = _orderState$options7.address) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7[prop]) === '');
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var handleCloseAddressForm = function handleCloseAddressForm() {
    setAddressOpen(false);
    setIsAddressFormOpen && setIsAddressFormOpen(false);
    setEditSpreadAddress(false);
  };
  var handleOnCancel = function handleOnCancel() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false
    }));
  };

  /**
   * Close modals and alerts
   */
  (0, _react.useEffect)(function () {
    return function () {
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
      handleCloseAddressForm();
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (isOpenUserData) {
      handleCloseAddressForm();
    }
  }, [isOpenUserData]);
  (0, _react.useEffect)(function () {
    var _addressList$addresse2;
    var addressValidation = ((_addressList$addresse2 = addressList.addresses) === null || _addressList$addresse2 === void 0 ? void 0 : _addressList$addresse2.length) === 0 && !(addressList !== null && addressList !== void 0 && addressList.loading) && !(addressList !== null && addressList !== void 0 && addressList.error);
    if (userCustomerSetup !== null && userCustomerSetup !== void 0 && userCustomerSetup.imported_address_text && addressValidation && !isOpenUserData) {
      openAddress({
        address: userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.imported_address_text
      });
    }
    if (!(userCustomerSetup !== null && userCustomerSetup !== void 0 && userCustomerSetup.imported_address_text) && addressValidation && !isOpenUserData) {
      openAddress({});
    }
  }, [userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.imported_address_text, addressList.addresses, addressList === null || addressList === void 0 ? void 0 : addressList.loading, addressList === null || addressList === void 0 ? void 0 : addressList.error, isOpenUserData]);
  (0, _react.useEffect)(function () {
    var _addressList$addresse3;
    if (!(addressList !== null && addressList !== void 0 && addressList.addedBySocket)) return;
    setConfirm({
      open: true,
      title: t('NEW_ADDRESS_REGISTERED', 'New address registered'),
      content: t('NEW_ADDRESS_REGISTERED_CONTENT', 'The user has sent the address'),
      handleOnAccept: function handleOnAccept() {
        return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      },
      handleOnCancel: ''
    });
    handleSetAddress(addressList === null || addressList === void 0 ? void 0 : addressList.addresses[(addressList === null || addressList === void 0 || (_addressList$addresse3 = addressList.addresses) === null || _addressList$addresse3 === void 0 ? void 0 : _addressList$addresse3.length) - 1], {
      avoidRedirect: true
    });
  }, [addressList === null || addressList === void 0 ? void 0 : addressList.addedBySocket]);
  return /*#__PURE__*/_react.default.createElement(_styles.AddressListContainer, {
    id: "address_control",
    isLoading: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || (orderState === null || orderState === void 0 ? void 0 : orderState.loading)
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressHalfContainer, null, /*#__PURE__*/_react.default.createElement(_styles.List, {
    halfWidth: addressOpen,
    isOpenUserData: isOpenUserData,
    isHeader: isHeader,
    notUseCustomerInfo: notUseCustomerInfo,
    addFormRestrictions: addFormRestrictions
  }, !addFormRestrictions && !addressOpen && !isOpenUserData && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add",
    outline: true,
    color: (addressList === null || addressList === void 0 || (_addressList$addresse4 = addressList.addresses) === null || _addressList$addresse4 === void 0 ? void 0 : _addressList$addresse4.length) > 0 ? 'secondary' : 'primary',
    onClick: function onClick() {
      return openAddress({});
    },
    disabled: (orderState === null || orderState === void 0 ? void 0 : orderState.loading) || actionStatus.loading,
    hoverColor: "#CCC"
  }, orderState !== null && orderState !== void 0 && orderState.loading || actionStatus.loading ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add New Address')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add sms",
    color: disabledSms ? 'secondary' : 'primary',
    onClick: function onClick() {
      return setUserConfirmPhone({
        open: true,
        result: null
      });
    },
    disabled: (orderState === null || orderState === void 0 ? void 0 : orderState.loading) || actionStatus.loading || disabledSms
  }, t('SEND_SMS_TO_CLIENT', 'Send SMS to client'))), (userConfirmPhone === null || userConfirmPhone === void 0 ? void 0 : userConfirmPhone.result) && /*#__PURE__*/_react.default.createElement(_styles.WrapperSMS, null, /*#__PURE__*/_react.default.createElement("p", null, userConfirmPhone === null || userConfirmPhone === void 0 ? void 0 : userConfirmPhone.result))), isPopover && addressOpen && /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    tabSelected: tabSelected,
    setTabSelected: setTabSelected,
    addressSpreadForm: addressSpreadForm,
    setAddressSpreadForm: setAddressSpreadForm,
    editSpreadAddress: editSpreadAddress,
    setEditSpreadAddress: setEditSpreadAddress,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup,
    isAllowUnaddressOrderType: isAllowUnaddressOrderType,
    userConfirmPhone: userConfirmPhone,
    setUserConfirmPhone: setUserConfirmPhone
  }), !addressList.loading && !actionStatus.loading && !orderState.loading && !addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse5 = addressList.addresses) === null || _addressList$addresse5 === void 0 ? void 0 : _addressList$addresse5.length) > 0 && _typeof((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.address) === 'object' && !addressOpen && (user === null || user === void 0 ? void 0 : user.id) === (orderState === null || orderState === void 0 || (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.user_id) && (!addressOpen && isPopover || isModal) && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, {
    id: "list"
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressTitleContainer, {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressTitle, null, t('SELECT_ONE_OF_SAVED_PLACES', 'Select one of your saved places')), isAllowUnaddressOrderType && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, ' ', t('OR', 'or'), ' '), /*#__PURE__*/_react.default.createElement(_styles.WithoutAddressText, {
    onClick: function onClick() {
      return events.emit('go_to_page', {
        page: 'search'
      });
    }
  }, t('CONTINUE_WITHOUT_ADDRESS', 'Continue without address')))), uniqueAddressesList.map(function (address) {
    var _address$location5, _address$location6, _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles.AddressItem, {
      key: address === null || address === void 0 ? void 0 : address.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrapAddress",
      onClick: function onClick() {
        return handleSetAddress(address);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "radio"
    }, checkAddress(address) ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, {
      className: "address-checked"
    }) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: checkAddress(address) ? 'selected-tag tag' : 'tag'
    }, (address === null || address === void 0 ? void 0 : address.tag) === 'home' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.House, null), (address === null || address === void 0 ? void 0 : address.tag) === 'office' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Building, null), (address === null || address === void 0 ? void 0 : address.tag) === 'favorite' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null), (address === null || address === void 0 ? void 0 : address.tag) === 'other' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusLg, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "address"
    }, /*#__PURE__*/_react.default.createElement("span", null, address.address), /*#__PURE__*/_react.default.createElement("span", null, address.internal_number, " ", address.zipcode)), (!(address !== null && address !== void 0 && (_address$location5 = address.location) !== null && _address$location5 !== void 0 && _address$location5.lat) || !(address !== null && address !== void 0 && (_address$location6 = address.location) !== null && _address$location6 !== void 0 && _address$location6.lng)) && /*#__PURE__*/_react.default.createElement(_styles.AddressBookMarkContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddressBookMark, null, /*#__PURE__*/_react.default.createElement("img", {
      src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.bookmark,
      width: 20,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_styles.AddressHoverInfo, {
      className: "hover-info"
    }, /*#__PURE__*/_react.default.createElement("p", null, t('PLEASE_VERIFY_CUSTOMER_ADDRESS', 'Please verify the address with the customer.'))))), /*#__PURE__*/_react.default.createElement(_styles.AddressItemActions, {
      className: "form"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: actionStatus.loading || isOpenUserData ? 'disabled' : '',
      onClick: function onClick() {
        return openAddress(address);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null)), /*#__PURE__*/_react.default.createElement("a", {
      className: actionStatus.loading || address.default ? 'disabled' : '',
      onClick: function onClick() {
        return handleDeleteClick(address);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, null))));
  }), isEnableContinueButton && uniqueAddressesList.map(function (address) {
    return address.default && /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, {
      key: address.id
    }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleSetAddress(address);
      }
    }, t('CONTINUE_WITH', 'Continue with'), ": ", address.address));
  })), !(addressList.loading || actionStatus.loading || orderState.loading) && addressList.error && addressList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_addressList$error$ = addressList.error[0]) === null || _addressList$error$ === void 0 ? void 0 : _addressList$error$.message) || addressList.error[0]
  }), !(addressList.loading || actionStatus.loading || orderState.loading) && _typeof((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.address) !== 'object' && !addressList.error && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NETWORK_ERROR', 'Network error, please reload the page')
  }), !isPopover && addressOpen && /*#__PURE__*/_react.default.createElement(_styles.AddressFormContainer, null, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    tabSelected: tabSelected,
    setTabSelected: setTabSelected,
    addressSpreadForm: addressSpreadForm,
    setAddressSpreadForm: setAddressSpreadForm,
    editSpreadAddress: editSpreadAddress,
    setEditSpreadAddress: setEditSpreadAddress,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup,
    notUseCustomerInfo: notUseCustomerInfo,
    franchiseId: franchiseId,
    addFormRestrictions: addFormRestrictions,
    isAllowUnaddressOrderType: isAllowUnaddressOrderType,
    userConfirmPhone: userConfirmPhone,
    setUserConfirmPhone: setUserConfirmPhone
  }))), addressOpen && !notUseCustomerInfo && /*#__PURE__*/_react.default.createElement(_styles.AddressFormContainer, {
    width: "50%",
    addFormRestrictions: addFormRestrictions
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleFormContainer, null, !addFormRestrictions && /*#__PURE__*/_react.default.createElement(_styles.CloseIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return handleCloseAddressForm();
    }
  })), /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_NEW_ADDRESS', 'Add new address'))), tabSelected === 'country' && /*#__PURE__*/_react.default.createElement(_SpreadForm.SpreadForm, {
    address: (curAddress === null || curAddress === void 0 ? void 0 : curAddress.address) && getSpreadAddressFormatted(curAddress),
    countryAutocomplete: countryAutocomplete,
    editSpreadAddress: editSpreadAddress,
    setEditSpreadAddress: setEditSpreadAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onChangeAddress: setAddressSpreadForm
  }))), (addressList.loading || actionStatus.loading || orderState.loading || (user === null || user === void 0 ? void 0 : user.id) !== (orderState === null || orderState === void 0 || (_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.user_id)) && !isProductForm && !addressOpen && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  })), onCancel && onAccept && _typeof((_orderState$options12 = orderState.options) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.address) === 'object' && !notUseCustomerInfo && /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    disabled: addressList.loading || actionStatus.loading || orderState.loading,
    onClick: function onClick() {
      return onCancel();
    },
    hoverColor: "#CCC"
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    disabled: addressList.loading || actionStatus.loading || orderState.loading,
    id: "second-btn",
    color: "primary",
    onClick: function onClick() {
      return onAccept();
    }
  }, t('ACCEPT', 'Accept'))), !isPopover && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?'),
    open: isPopover,
    onClose: function onClose() {
      return handleCloseAddressForm();
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    tabSelected: tabSelected,
    setTabSelected: setTabSelected,
    addressSpreadForm: addressSpreadForm,
    setAddressSpreadForm: setAddressSpreadForm,
    editSpreadAddress: editSpreadAddress,
    setEditSpreadAddress: setEditSpreadAddress,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup,
    isAllowUnaddressOrderType: isAllowUnaddressOrderType,
    userConfirmPhone: userConfirmPhone,
    setUserConfirmPhone: setUserConfirmPhone
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: confirm.title || t('SEARCH', 'Search'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: (_confirm$handleOnCanc = confirm.handleOnCancel) !== null && _confirm$handleOnCanc !== void 0 ? _confirm$handleOnCanc : handleOnCancel,
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var AddressList = exports.AddressList = function AddressList(props) {
  var addressListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AddressList, addressListProps);
};