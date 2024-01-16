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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AddressListUI = function AddressListUI(props) {
  var _addressList$addresse, _props$beforeElements, _props$beforeComponen, _addressList$addresse3, _addressList$addresse4, _orderState$options6, _addressList$error$, _orderState$options7, _orderState$options8, _props$afterComponent, _props$afterElements;
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
    isFromPhoneAutocomplete = props.isFromPhoneAutocomplete;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
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
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var addFormRestrictions = (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.imported_address_text) && ((_addressList$addresse = addressList.addresses) === null || _addressList$addresse === void 0 ? void 0 : _addressList$addresse.length) === 0 && !(addressList !== null && addressList !== void 0 && addressList.loading) && !(addressList !== null && addressList !== void 0 && addressList.error);
  var uniqueAddressesList = addressList.addresses && addressList.addresses.filter(function (address, i, self) {
    return i === self.findIndex(function (obj) {
      return address.address === obj.address && address.address_notes === obj.address_notes && address.zipcode === obj.zipcode && address.internal_number === obj.internal_number;
    });
  }) || [];
  var openAddress = function openAddress(address) {
    setCurAddress(address);
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
  var handleSetAddress = function handleSetAddress(address) {
    if (checkAddress(address) && isCustomerMode && (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id) === (user === null || user === void 0 ? void 0 : user.id) && !isFromCheckout) {
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
    setIsSavedAddress && setIsSavedAddress(true);
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
          var _orderState$options, _orderState$options2;
          values.push((address === null || address === void 0 ? void 0 : address[prop].lat) === (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options[prop]) === null || _orderState$options === void 0 ? void 0 : _orderState$options.lat) && (address === null || address === void 0 ? void 0 : address[prop].lng) === (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2[prop]) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.lng));
        } else {
          var _orderState$options3;
          values.push((address === null || address === void 0 ? void 0 : address[prop]) === (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3[prop]));
        }
      } else {
        var _orderState$options4, _orderState$options5;
        values.push((orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4[prop]) === null || (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5[prop]) === '');
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var handleCloseAddressForm = function handleCloseAddressForm() {
    setAddressOpen(false);
    setIsAddressFormOpen && setIsAddressFormOpen(false);
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
    if (userCustomerSetup !== null && userCustomerSetup !== void 0 && userCustomerSetup.imported_address_text && addressValidation) {
      openAddress({
        address: userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.imported_address_text
      });
    }
    if (!(userCustomerSetup !== null && userCustomerSetup !== void 0 && userCustomerSetup.imported_address_text) && addressValidation) {
      openAddress({});
    }
  }, [userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.imported_address_text, addressList.addresses, addressList === null || addressList === void 0 ? void 0 : addressList.loading, addressList === null || addressList === void 0 ? void 0 : addressList.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.AddressListContainer, {
    id: "address_control",
    isLoading: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || (orderState === null || orderState === void 0 ? void 0 : orderState.loading)
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressHalfContainer, null, /*#__PURE__*/_react.default.createElement(_styles.List, {
    halfWidth: addressOpen,
    isOpenUserData: isOpenUserData,
    isHeader: isHeader,
    isEnableContinueButton: isEnableContinueButton,
    notUseCustomerInfo: notUseCustomerInfo,
    addFormRestrictions: addFormRestrictions
  }, !addFormRestrictions && !addressOpen && !isOpenUserData && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "add",
    outline: true,
    color: isEnableContinueButton && (addressList === null || addressList === void 0 || (_addressList$addresse3 = addressList.addresses) === null || _addressList$addresse3 === void 0 ? void 0 : _addressList$addresse3.length) > 0 ? 'secondary' : 'primary',
    onClick: function onClick() {
      return openAddress({});
    },
    disabled: (orderState === null || orderState === void 0 ? void 0 : orderState.loading) || actionStatus.loading,
    hoverColor: "#CCC"
  }, orderState !== null && orderState !== void 0 && orderState.loading || actionStatus.loading ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add New Address')), isPopover && addressOpen && /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup
  }), !addressList.loading && !actionStatus.loading && !orderState.loading && !addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse4 = addressList.addresses) === null || _addressList$addresse4 === void 0 ? void 0 : _addressList$addresse4.length) > 0 && _typeof((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address) === 'object' && !addressOpen && (!addressOpen && isPopover || isModal) && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, {
    id: "list"
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressTitle, null, t('SELECT_ONE_OF_SAVED_PLACES', 'Select one of your saved places')), uniqueAddressesList.map(function (address) {
    var _address$location, _address$location2, _theme$images;
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
    }, /*#__PURE__*/_react.default.createElement("span", null, address.address), /*#__PURE__*/_react.default.createElement("span", null, address.internal_number, " ", address.zipcode)), (!(address !== null && address !== void 0 && (_address$location = address.location) !== null && _address$location !== void 0 && _address$location.lat) || !(address !== null && address !== void 0 && (_address$location2 = address.location) !== null && _address$location2 !== void 0 && _address$location2.lng)) && /*#__PURE__*/_react.default.createElement(_styles.AddressBookMarkContainer, null, /*#__PURE__*/_react.default.createElement(_styles.AddressBookMark, null, /*#__PURE__*/_react.default.createElement("img", {
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
  }), !(addressList.loading || actionStatus.loading || orderState.loading) && _typeof((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.address) !== 'object' && !addressList.error && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NETWORK_ERROR', 'Network error, please reload the page')
  }), !isPopover && addressOpen && /*#__PURE__*/_react.default.createElement(_styles.AddressFormContainer, null, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup,
    isEnableContinueButton: isEnableContinueButton,
    notUseCustomerInfo: notUseCustomerInfo,
    franchiseId: franchiseId,
    addFormRestrictions: addFormRestrictions
  }))), addressOpen && !notUseCustomerInfo && /*#__PURE__*/_react.default.createElement(_styles.AddressFormContainer, {
    width: "50%",
    isEnableContinueButton: isEnableContinueButton,
    addFormRestrictions: addFormRestrictions
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleFormContainer, null, !addFormRestrictions && /*#__PURE__*/_react.default.createElement(_styles.CloseIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return handleCloseAddressForm();
    }
  })), /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_NEW_ADDRESS', 'Add new address'))))), (addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && !addressOpen && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  })), onCancel && onAccept && _typeof((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.address) === 'object' && !notUseCustomerInfo && /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('SEARCH', 'Search'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
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
var AddressList = exports.AddressList = function AddressList(props) {
  var addressListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AddressList, addressListProps);
};