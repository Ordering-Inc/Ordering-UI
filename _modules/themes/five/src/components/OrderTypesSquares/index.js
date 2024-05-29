"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypesSquaresController = exports.OrderTypesSquares = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _Buttons = _interopRequireDefault(require("../../styles/Buttons"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var OrderTypesSquaresController = exports.OrderTypesSquaresController = function OrderTypesSquaresController(props) {
  var _orderState$options, _configs$order_types_, _orderState$options3, _theme$images, _theme$images2, _theme$images3;
  var orderTypes = props.orderTypes,
    hideTitle = props.hideTitle;
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    changeType = _useOrder2[1].changeType;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type),
    _useState2 = _slicedToArray(_useState, 2),
    orderTypeSelected = _useState2[0],
    setOrderTypeSelected = _useState2[1];
  var allOrderTypes = [1, 2, 3, 4, 5];
  var pickupTypes = [2, 4, 5];
  var eatInType = 3;
  var configTypes = (configs === null || configs === void 0 || (_configs$order_types_ = configs.order_types_allowed) === null || _configs$order_types_ === void 0 ? void 0 : _configs$order_types_.value.split('|').filter(function (value) {
    return allOrderTypes.includes(Number(value));
  }).map(function (value) {
    return Number(value);
  })) || [];
  var handleChangeType = function handleChangeType(value) {
    if (!(orderState !== null && orderState !== void 0 && orderState.loading)) {
      changeType(value);
      setOrderTypeSelected(value);
    }
  };
  var handleChangeToPickup = function handleChangeToPickup() {
    var _orderTypes$find;
    var firstEnabledPickupType = (_orderTypes$find = orderTypes.find(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && type.value !== 1;
    })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.value;
    handleChangeType(firstEnabledPickupType);
    setOrderTypeSelected(firstEnabledPickupType);
  };
  (0, _react.useEffect)(function () {
    var _orderState$options2;
    setOrderTypeSelected(orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type);
  }, [orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type]);
  var OrderTypesComponent = function OrderTypesComponent() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orderTypes && (configTypes ? orderTypes.filter(function (type) {
      return (configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value)) && pickupTypes.includes(type === null || type === void 0 ? void 0 : type.value);
    }) : orderTypes).map(function (item, i) {
      var _orderState$options4, _orderState$options5;
      return /*#__PURE__*/_react.default.createElement(_Buttons.default, {
        key: item.value,
        onClick: function onClick() {
          return handleChangeType(item.value);
        },
        color: (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) === (item === null || item === void 0 ? void 0 : item.value) ? 'primary' : 'secondary',
        disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
        className: (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) !== (item === null || item === void 0 ? void 0 : item.value) ? 'activated' : ''
      }, item.text);
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hideTitle && (configTypes.includes(1) || configTypes.some(function (type) {
    return pickupTypes.includes(type);
  })) && /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('DELIVERY_TYPE', 'Delivery Type')), /*#__PURE__*/_react.default.createElement(_styles.TypesContainer, null, configTypes.includes(1) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    onClick: function onClick() {
      return handleChangeType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: orderTypeSelected === 1
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: orderTypeSelected === 1
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.deliveryIco,
    width: 20,
    height: 20
  })), /*#__PURE__*/_react.default.createElement("p", null, t('DELIVERY', 'Delivery'))), configTypes.some(function (type) {
    return pickupTypes.includes(type);
  }) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: pickupTypes.includes(orderTypeSelected),
    onClick: function onClick() {
      return handleChangeToPickup();
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: pickupTypes.includes(orderTypeSelected)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.pickupIco,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("p", null, t('PICKUP', 'Pickup'))), configTypes.some(function (type) {
    return eatInType === type;
  }) && /*#__PURE__*/_react.default.createElement(_styles.TypeButton, {
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading,
    activated: orderTypeSelected === 3,
    onClick: function onClick() {
      return handleChangeType(3);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconTypeButton, {
    activated: orderTypeSelected === 3
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.general) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.eatinIco,
    width: 22,
    height: 22
  })), /*#__PURE__*/_react.default.createElement("p", null, t('EAT_IN', 'Eat in')))), pickupTypes.includes(orderTypeSelected) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, t('WHAT_PICKUP_YOU_NEED', 'What kind of pickup do you need?')), /*#__PURE__*/_react.default.createElement(_styles.AdditionalTypesContainer, null, /*#__PURE__*/_react.default.createElement(OrderTypesComponent, null))));
};
var OrderTypesSquares = exports.OrderTypesSquares = function OrderTypesSquares(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var OrderTypesSquaresProps = _objectSpread(_objectSpread({}, props), {}, {
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
  return /*#__PURE__*/_react.default.createElement(OrderTypesSquaresController, OrderTypesSquaresProps);
};