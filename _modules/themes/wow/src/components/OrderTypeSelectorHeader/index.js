"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _Select = require("../../../../../styles/Select");
var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));
var _FaTruckPickup = _interopRequireDefault(require("@meronex/icons/fa/FaTruckPickup"));
var _MdcTruckDeliveryOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcTruckDeliveryOutline"));
var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));
var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var OrderTypeSelectorHeaderUI = function OrderTypeSelectorHeaderUI(props) {
  var _configState$configs;
  var isTabStyle = props.isTabStyle,
    isHome = props.isHome,
    handleChangeOrderType = props.handleChangeOrderType,
    typeSelected = props.typeSelected,
    defaultValue = props.defaultValue,
    orderTypes = props.orderTypes;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var defaultType = configTypes !== null && configTypes !== void 0 && configTypes.includes(typeSelected) ? null : configTypes[0];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, configState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 40
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeSelected !== undefined && /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, {
    isTabStyle: isTabStyle
  }, !isTabStyle ? /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: orderTypes.filter(function (type) {
      return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
    }),
    defaultValue: defaultType || defaultValue || typeSelected,
    onChange: function onChange(orderType) {
      return handleChangeOrderType(orderType);
    }
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }).map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_styles.Tab, {
      isHome: isHome,
      key: type.value,
      active: type.value === defaultType || type.value === defaultType || type.value === typeSelected,
      onClick: function onClick() {
        return handleChangeOrderType(type.value);
      }
    }, type.content);
  })))));
};
var OrderTypeSelectorHeader = exports.OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorHeaderUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('DELIVERY', 'Delivery'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('DELIVERY', 'Delivery')))
    }, {
      value: 2,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('PICKUP', 'Pickup'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('PICKUP', 'Pickup')))
    }, {
      value: 3,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('EAT_IN', 'Eat in'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('EAT_IN', 'Eat in')))
    }, {
      value: 4,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('CURBSIDE', 'Curbside'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('CURBSIDE', 'Curbside')))
    }, {
      value: 5,
      content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.ContentOption, null, t('DRIVE_THRU', 'Drive thru'))),
      showOnSelected: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), /*#__PURE__*/_react.default.createElement(_styles.SelectedOption, null, t('DRIVE_THRU', 'Drive thru')))
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};