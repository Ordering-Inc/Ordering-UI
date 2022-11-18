"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _TiPencil = _interopRequireDefault(require("@meronex/icons/ti/TiPencil"));

var _VscTrash = _interopRequireDefault(require("@meronex/icons/vsc/VscTrash"));

var _FaHome = _interopRequireDefault(require("@meronex/icons/fa/FaHome"));

var _FaPlus = _interopRequireDefault(require("@meronex/icons/fa/FaPlus"));

var _FaRegBuilding = _interopRequireDefault(require("@meronex/icons/fa/FaRegBuilding"));

var _FaRegHeart = _interopRequireDefault(require("@meronex/icons/fa/FaRegHeart"));

var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));

var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _styles2 = require("../../styles");

var _Modal = require("../../../../../components/Modal");

var _AddressForm = require("../AddressForm");

var _Confirm = require("../../../../../components/Confirm");

var _styledComponents = require("styled-components");

var _utils = require("../../../../../utils");

var _NavBar = require("../NavBar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var AddressListUI = function AddressListUI(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$defaultLanguag, _theme$defaultLanguag2, _addressList$addresse, _addressList$addresse2, _orderState$options6, _addressList$addresse3, _theme$images, _theme$images$general, _addressList$error$, _orderState$options7, _orderState$options8, _props$afterComponent, _props$afterElements;

  var isModal = props.isModal,
      actionStatus = props.actionStatus,
      addressList = props.addressList,
      handleDelete = props.handleDelete,
      setAddressList = props.setAddressList,
      handleSetDefault = props.handleSetDefault,
      isPopover = props.isPopover,
      isProductForm = props.isProductForm,
      onCancel = props.onCancel,
      onAccept = props.onAccept,
      userId = props.userId,
      userCustomerSetup = props.userCustomerSetup,
      isEnableContinueButton = props.isEnableContinueButton,
      setCustomerModalOpen = props.setCustomerModalOpen,
      isCustomerMode = props.isCustomerMode,
      isFromCheckout = props.isFromCheckout;

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

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isSelectedNewAddress = _useState8[0],
      setIsSelectedNewAddress = _useState8[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 1),
      user = _useCustomer2[0].user;

  var uniqueAddressesList = addressList.addresses && addressList.addresses.filter(function (address, i, self) {
    return i === self.findIndex(function (obj) {
      return address.address === obj.address && address.address_notes === obj.address_notes && address.zipcode === obj.zipcode && address.internal_number === obj.internal_number;
    });
  }) || [];

  var openAddress = function openAddress(address) {
    setCurAddress(address);
    setAddressOpen(true);
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

    setAddressOpen(false);
  };

  var handleSetAddress = function handleSetAddress(address) {
    if (checkAddress(address) && isCustomerMode && (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id) === (user === null || user === void 0 ? void 0 : user.id) && !isFromCheckout) {
      events.emit('go_to_page', {
        page: 'search'
      });
      handleSetDefault(address, userCustomerSetup, true);
      setCustomerModalOpen && setCustomerModalOpen(false);
      return;
    }

    if (!checkAddress(address)) {
      setIsSelectedNewAddress(true);
    }

    setAddressOpen(false);
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
          var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2;

          values.push((address === null || address === void 0 ? void 0 : address[prop].lat) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a[prop]) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat) && (address === null || address === void 0 ? void 0 : address[prop].lng) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$[prop]) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng));
        } else {
          var _orderState$options3, _orderState$options3$;

          values.push((address === null || address === void 0 ? void 0 : address[prop]) === (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : _orderState$options3$[prop]));
        }
      } else {
        var _orderState$options4, _orderState$options4$, _orderState$options5, _orderState$options5$;

        values.push((orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$[prop]) === null || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : _orderState$options5$[prop]) === '');
      }
    });
    return values.every(function (value) {
      return value;
    });
  };

  (0, _react.useEffect)(function () {
    if (actionStatus !== null && actionStatus !== void 0 && actionStatus.loading || !isSelectedNewAddress) return;
    events.emit('go_to_page', {
      page: 'search'
    });
  }, [actionStatus, isSelectedNewAddress]);
  /**
   * Close modals and alerts
   */

  (0, _react.useEffect)(function () {
    return function () {
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
      setAddressOpen(false);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !isModal && /*#__PURE__*/_react.default.createElement(_NavBar.NavBar, {
    title: t('ADDRESS_LIST', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ADDRESS_LIST) || 'Address List')
  }), /*#__PURE__*/_react.default.createElement(_styles.AddressListContainer, {
    id: "address_control",
    isLoading: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || (orderState === null || orderState === void 0 ? void 0 : orderState.loading),
    isModal: isModal
  }, !isModal && /*#__PURE__*/_react.default.createElement("h1", null, t('ADDRESS_LIST', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ADDRESS_LIST) || 'Address List')), (!isPopover || !addressOpen) && /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    className: "add",
    color: isEnableContinueButton && (addressList === null || addressList === void 0 ? void 0 : (_addressList$addresse = addressList.addresses) === null || _addressList$addresse === void 0 ? void 0 : _addressList$addresse.length) > 0 ? 'secondary' : 'primary',
    onClick: function onClick() {
      return openAddress({});
    },
    disabled: (orderState === null || orderState === void 0 ? void 0 : orderState.loading) || actionStatus.loading
  }, orderState !== null && orderState !== void 0 && orderState.loading || actionStatus.loading ? t('LOADING', 'Loading') : t('ADD_ADDRESS', 'Add Address')), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "60%",
    title: t('ADDRESS', 'Address'),
    open: !isPopover && addressOpen,
    onClose: function onClose() {
      return setAddressOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    isPopup: true,
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    useValidationFileds: true,
    address: curAddress,
    onCancel: function onCancel() {
      return setAddressOpen(false);
    },
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup
  })), !addressList.loading && !actionStatus.loading && !orderState.loading && !addressList.error && (addressList === null || addressList === void 0 ? void 0 : (_addressList$addresse2 = addressList.addresses) === null || _addressList$addresse2 === void 0 ? void 0 : _addressList$addresse2.length) > 0 && _typeof((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address) === 'object' &&
  /*#__PURE__*/
  // ((!addressOpen && isPopover) || isModal) && (
  _react.default.createElement(_styles.AddressListUl, {
    id: "list"
  }, uniqueAddressesList.map(function (address) {
    return /*#__PURE__*/_react.default.createElement(_styles.AddressItem, {
      key: address === null || address === void 0 ? void 0 : address.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "wrapAddress",
      onClick: function onClick() {
        return handleSetAddress(address);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "radio"
    }, checkAddress(address) ? /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "tag"
    }, (address === null || address === void 0 ? void 0 : address.tag) === 'home' && /*#__PURE__*/_react.default.createElement(_FaHome.default, null), (address === null || address === void 0 ? void 0 : address.tag) === 'office' && /*#__PURE__*/_react.default.createElement(_FaRegBuilding.default, null), (address === null || address === void 0 ? void 0 : address.tag) === 'favorite' && /*#__PURE__*/_react.default.createElement(_FaRegHeart.default, null), (address === null || address === void 0 ? void 0 : address.tag) === 'other' && /*#__PURE__*/_react.default.createElement(_FaPlus.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "address"
    }, /*#__PURE__*/_react.default.createElement("span", null, address.address), /*#__PURE__*/_react.default.createElement("span", null, address.internal_number, " ", address.zipcode))), /*#__PURE__*/_react.default.createElement(_styles.AddressItemActions, {
      className: "form"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: actionStatus.loading ? 'disabled' : '',
      onClick: function onClick() {
        return openAddress(address);
      }
    }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, null)), /*#__PURE__*/_react.default.createElement("a", {
      className: actionStatus.loading || address.default ? 'disabled' : '',
      onClick: function onClick() {
        return handleDeleteClick(address);
      }
    }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, null))));
  }), isEnableContinueButton && uniqueAddressesList.map(function (address) {
    return address.default && /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, {
      key: address.id
    }, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleSetAddress(address);
      }
    }, t('CONTINUE_WITH', 'Continue with'), ": ", address.address));
  })), !(addressList.loading || actionStatus.loading || orderState.loading) && !addressList.error && (addressList === null || addressList === void 0 ? void 0 : (_addressList$addresse3 = addressList.addresses) === null || _addressList$addresse3 === void 0 ? void 0 : _addressList$addresse3.length) === 0 && !isProductForm && /*#__PURE__*/_react.default.createElement(_styles.WrappNotAddresses, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFound,
    alt: "Not Found",
    width: "200px",
    height: "112px",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement("h1", null, t('NOT_FOUND_ADDRESS', 'Sorry, You don\'t seem to have any addresses.'))), !(addressList.loading || actionStatus.loading || orderState.loading) && addressList.error && addressList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_addressList$error$ = addressList.error[0]) === null || _addressList$error$ === void 0 ? void 0 : _addressList$error$.message) || addressList.error[0]
  }), !(addressList.loading || actionStatus.loading || orderState.loading) && _typeof((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.address) !== 'object' && !addressList.error && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NETWORK_ERROR', 'Network error, please reload the page')
  }), (addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 3,
    style: {
      marginBottom: '10px'
    }
  })), onCancel && onAccept && _typeof((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.address) === 'object' && /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    outline: true,
    type: "button",
    disabled: addressList.loading || actionStatus.loading || orderState.loading,
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), /*#__PURE__*/_react.default.createElement(_styles2.Button, {
    disabled: addressList.loading || actionStatus.loading || orderState.loading,
    id: "second-btn",
    color: "primary",
    onClick: function onClick() {
      return onAccept();
    }
  }, t('ACCEPT', 'Accept'))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
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

var AddressList = function AddressList(props) {
  var addressListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressListUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AddressList, addressListProps);
};

exports.AddressList = AddressList;