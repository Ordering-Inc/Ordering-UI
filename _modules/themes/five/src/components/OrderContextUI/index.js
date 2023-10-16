"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContextUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _MomentPopover = require("../../../../pwa/src/components/MomentPopover");
var _OrderTypeSelectorHeader = require("../../../../../components/OrderTypeSelectorHeader");
var _FaMapMarkerAlt = _interopRequireDefault(require("@meronex/icons/fa/FaMapMarkerAlt"));
var _Modal = require("../Modal");
var _AddressForm = require("../AddressForm");
var _AddressList = require("../AddressList");
var _Confirm = require("../Confirm");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _MomentContent = require("../MomentContent");
var _OrderTypeSelectorContent = require("../OrderTypeSelectorContent");
var _utils = require("../../../../../utils");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var OrderContextUI = exports.OrderContextUI = function OrderContextUI(props) {
  var _configState$configs, _configState$configs2, _orderState$options, _orderState$options2, _Object$keys, _orderState$options4, _orderState$options5, _orderState$options6;
  var isCheckOut = props.isCheckOut,
    setMapErrors = props.setMapErrors,
    isCustomerMode = props.isCustomerMode,
    isBusinessList = props.isBusinessList;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useBusiness = (0, _orderingComponents.useBusiness)(),
    _useBusiness2 = _slicedToArray(_useBusiness, 1),
    business = _useBusiness2[0].business;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    openPopover = _useState2[0],
    setOpenPopover = _useState2[1];
  var _useState3 = (0, _react.useState)({
      listOpen: false,
      formOpen: false,
      citiesOpen: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    modals = _useState4[0],
    setModals = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    modalSelected = _useState8[0],
    setModalSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    modalIsOpen = _useState10[0],
    setModalIsOpen = _useState10[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isPreOrderSetting = (configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.preorder_status_enabled) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value) === '1';
  var cateringTypeString = (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 7 ? 'catering_delivery' : (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 8 ? 'catering_pickup' : null;
  var cateringValues = (0, _utils.getCateringValues)(cateringTypeString, pathname.includes('store') && (Object === null || Object === void 0 || (_Object$keys = Object.keys(business || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 ? business === null || business === void 0 ? void 0 : business.configs : configState === null || configState === void 0 ? void 0 : configState.configs);
  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };
  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };
  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options3;
    if (!(orderState !== null && orderState !== void 0 && (_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && (_orderState$options3 = _orderState$options3.address) !== null && _orderState$options3 !== void 0 && _orderState$options3.location)) {
      setAlertState({
        open: true,
        content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')]
      });
      return;
    }
    setModals({
      listOpen: false,
      formOpen: false
    });
  };
  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
    setMapErrors && setMapErrors('');
  };
  var handleClickAddress = function handleClickAddress(e) {
    if (auth) {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: true
      }));
    } else {
      setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: true
      }));
    }
  };
  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };
  (0, _react.useEffect)(function () {
    var handleCloseallPopovers = function handleCloseallPopovers() {
      return handleClosePopover('moment');
    };
    window.addEventListener('scroll', handleCloseallPopovers);
    return function () {
      return window.removeEventListener('scroll', handleCloseallPopovers);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isBusinessList: isBusinessList,
    hero: props.hideHero,
    isCheckOut: isCheckOut
  }, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick() {
      return handleClickAddress();
    },
    isCheckOut: isCheckOut || !props.hideHero
  }, /*#__PURE__*/_react.default.createElement(_FaMapMarkerAlt.default, null), /*#__PURE__*/_react.default.createElement("span", null, ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address) || t('WHERE_DO_WE_DELIVERY', 'Where do we delivery?'))), /*#__PURE__*/_react.default.createElement(_styles.FeatureItems, null, /*#__PURE__*/_react.default.createElement(_styles.ItemInline, {
    onClick: function onClick() {
      return openModal('delivery');
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    configTypes: configTypes,
    autoCloseWhenScroll: windowSize.width < 576
  })), isPreOrderSetting && /*#__PURE__*/_react.default.createElement(_styles.ItemInline, {
    onClick: function onClick() {
      return openModal('moment');
    }
  }, /*#__PURE__*/_react.default.createElement(_MomentPopover.MomentPopover, {
    open: openPopover.moment,
    onCustomClick: function onCustomClick() {
      return openModal('moment');
    },
    onClick: function onClick() {
      return handleTogglePopover('moment');
    },
    onClose: function onClose() {
      return handleClosePopover('moment');
    },
    isBanner: true
  })))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: orderState !== null && orderState !== void 0 && (_orderState$options5 = orderState.options) !== null && _orderState$options5 !== void 0 && _orderState$options5.user_id ? '70%' : '50%'
  }, modalSelected === 'moment' && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, _extends({
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    cateringPreorder: !!cateringTypeString,
    isHeader: true,
    business: pathname.includes('store') && business
  }, cateringValues)), modalSelected === 'delivery' && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorContent.OrderTypeSelectorContent, {
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 || (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', 'Address List'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    },
    isCustomerMode: isCustomerMode,
    isMobile: true
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return handleCloseAlerts();
    },
    onAccept: function onAccept() {
      return handleCloseAlerts();
    },
    closeOnBackdrop: false
  }));
};