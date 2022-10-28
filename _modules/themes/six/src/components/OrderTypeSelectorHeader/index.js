"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorHeader = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Select = require("../../styles/Select");
var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));
var _FaTruckPickup = _interopRequireDefault(require("@meronex/icons/fa/FaTruckPickup"));
var _MdcTruckDeliveryOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcTruckDeliveryOutline"));
var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));
var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));
var _Modal = require("../Modal");
var _AddressList = require("../AddressList");
var _AddressForm = require("../AddressForm");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderTypeSelectorHeaderUI = function OrderTypeSelectorHeaderUI(props) {
  var _orderState$options;
  var handleChangeOrderType = props.handleChangeOrderType,
    typeSelected = props.typeSelected,
    defaultValue = props.defaultValue,
    configTypes = props.configTypes,
    orderTypes = props.orderTypes,
    orderTypeStyle = props.orderTypeStyle;
  var defaultType = configTypes !== null && configTypes !== void 0 && configTypes.includes(typeSelected) ? null : configTypes === null || configTypes === void 0 ? void 0 : configTypes[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalIsOpen = _useState2[0],
    setModalIsOpen = _useState2[1];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var openModal = function openModal() {
    setModalIsOpen(true);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, null, orderTypeStyle ? /*#__PURE__*/_react.default.createElement(_styles.OrderTypeBoxGroup, null, orderTypes && orderTypes.map(function (orderType) {
    return /*#__PURE__*/_react.default.createElement(_styles.OrderItem, {
      key: orderType.value,
      onClick: openModal
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderItemWraper, null, orderType.itemcontent, orderType.itemdescription));
  })) : /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: configTypes ? orderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }) : orderTypes,
    defaultValue: defaultType || defaultValue || typeSelected,
    onChange: function onChange(orderType) {
      return handleChangeOrderType(orderType);
    }
  }), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS', 'Address'),
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "60%"
  }, auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onAccept: function onAccept() {
      return setModalIsOpen(false);
    }
  }) : /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    }
  })));
};
var OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('DELIVERY', 'Delivery'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('DELIVERY', 'Delivery'))),
      itemcontent: /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.ItemContent, null, t('DELIVERY', 'Delivery'))),
      itemdescription: /*#__PURE__*/_react.default.createElement(_styles.OrderDescription, null, t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.'))
    }, {
      value: 2,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('PICKUP', 'Pickup'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('PICKUP', 'Pickup'))),
      itemcontent: /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.ItemContent, null, t('PICKUP', 'Pickup'))),
      itemdescription: /*#__PURE__*/_react.default.createElement(_styles.OrderDescription, null, t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.'))
    }, {
      value: 3,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('EAT_IN', 'Eat in'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('EAT_IN', 'Eat in'))),
      itemcontent: /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.ItemContent, null, t('EAT_IN', 'Eat in'))),
      itemdescription: /*#__PURE__*/_react.default.createElement(_styles.OrderDescription, null, t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.'))
    }, {
      value: 4,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('CURBSIDE', 'Curbside'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('CURBSIDE', 'Curbside'))),
      itemcontent: /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.ItemContent, null, t('DRIVE_THRU', 'Drive thru'))),
      itemdescription: /*#__PURE__*/_react.default.createElement(_styles.OrderDescription, null, t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.'))
    }, {
      value: 5,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('DRIVE_THRU', 'Drive thru'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('DRIVE_THRU', 'Drive thru'))),
      itemcontent: /*#__PURE__*/_react.default.createElement(_styles.OrderType, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.ItemContent, null, t('CURBSIDE', 'Curbside'))),
      itemdescription: /*#__PURE__*/_react.default.createElement(_styles.OrderDescription, null, t('TYPE_DESCRIPTION', 'Amet minim mollit non deserunt ullamco est sit aliqua.'))
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};
exports.OrderTypeSelectorHeader = OrderTypeSelectorHeader;