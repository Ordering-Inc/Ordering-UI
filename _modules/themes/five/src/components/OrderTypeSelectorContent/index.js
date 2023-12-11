"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorContentUI = exports.OrderTypeSelectorContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderTypeSelectorContentUI = exports.OrderTypeSelectorContentUI = function OrderTypeSelectorContentUI(props) {
  var _theme$order_types, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var handleChangeOrderType = props.handleChangeOrderType,
    orderTypes = props.orderTypes,
    onClose = props.onClose,
    configTypes = props.configTypes;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderStatus = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var handleClickOrderType = function handleClickOrderType(orderType) {
    onClose && onClose();
    handleChangeOrderType && handleChangeOrderType(orderType);
  };
  var titleOrdertype = theme === null || theme === void 0 || (_theme$order_types = theme.order_types) === null || _theme$order_types === void 0 || (_theme$order_types = _theme$order_types.components) === null || _theme$order_types === void 0 ? void 0 : _theme$order_types.title_menu;
  var orderTypeImage = function orderTypeImage(type) {
    var _theme$order_types2;
    return theme === null || theme === void 0 || (_theme$order_types2 = theme.order_types) === null || _theme$order_types2 === void 0 || (_theme$order_types2 = _theme$order_types2.components) === null || _theme$order_types2 === void 0 || (_theme$order_types2 = _theme$order_types2[type]) === null || _theme$order_types2 === void 0 || (_theme$order_types2 = _theme$order_types2.components) === null || _theme$order_types2 === void 0 ? void 0 : _theme$order_types2.image;
  };
  var orderTypeTitle = function orderTypeTitle(type) {
    var _theme$order_types3;
    return theme === null || theme === void 0 || (_theme$order_types3 = theme.order_types) === null || _theme$order_types3 === void 0 || (_theme$order_types3 = _theme$order_types3.components) === null || _theme$order_types3 === void 0 || (_theme$order_types3 = _theme$order_types3[type]) === null || _theme$order_types3 === void 0 || (_theme$order_types3 = _theme$order_types3.components) === null || _theme$order_types3 === void 0 ? void 0 : _theme$order_types3.title;
  };
  var orderTypeDescription = function orderTypeDescription(type) {
    var _theme$order_types4;
    return theme === null || theme === void 0 || (_theme$order_types4 = theme.order_types) === null || _theme$order_types4 === void 0 || (_theme$order_types4 = _theme$order_types4.components) === null || _theme$order_types4 === void 0 || (_theme$order_types4 = _theme$order_types4[type]) === null || _theme$order_types4 === void 0 || (_theme$order_types4 = _theme$order_types4.components) === null || _theme$order_types4 === void 0 ? void 0 : _theme$order_types4.description;
  };
  var orderTypeCallAction = function orderTypeCallAction(type) {
    var _theme$order_types5;
    return theme === null || theme === void 0 || (_theme$order_types5 = theme.order_types) === null || _theme$order_types5 === void 0 || (_theme$order_types5 = _theme$order_types5.components) === null || _theme$order_types5 === void 0 || (_theme$order_types5 = _theme$order_types5[type]) === null || _theme$order_types5 === void 0 || (_theme$order_types5 = _theme$order_types5.components) === null || _theme$order_types5 === void 0 ? void 0 : _theme$order_types5.call_to_action;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "order-type",
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListTitle, null, titleOrdertype || t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')), orderTypes && (configTypes ? orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }) : orderTypes).map(function (item, i) {
    var _item$text, _orderStatus$options, _item$text2, _item$text3, _item$text4;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      bgimage: orderTypeImage(item === null || item === void 0 || (_item$text = item.text) === null || _item$text === void 0 || (_item$text = _item$text.replace(' ', '_')) === null || _item$text === void 0 ? void 0 : _item$text.toLowerCase()) || (item === null || item === void 0 ? void 0 : item.image),
      onClick: function onClick() {
        return handleClickOrderType(item.value);
      },
      active: (orderStatus === null || orderStatus === void 0 || (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === (item === null || item === void 0 ? void 0 : item.value)
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, orderTypeTitle(item === null || item === void 0 || (_item$text2 = item.text) === null || _item$text2 === void 0 || (_item$text2 = _item$text2.replace(' ', '_')) === null || _item$text2 === void 0 ? void 0 : _item$text2.toLowerCase()) || item.text), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeDescription, null, orderTypeDescription(item === null || item === void 0 || (_item$text3 = item.text) === null || _item$text3 === void 0 || (_item$text3 = _item$text3.replace(' ', '_')) === null || _item$text3 === void 0 ? void 0 : _item$text3.toLowerCase()) || item.description), /*#__PURE__*/_react.default.createElement(_styles.OrderStartWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, orderTypeCallAction(item === null || item === void 0 || (_item$text4 = item.text) === null || _item$text4 === void 0 || (_item$text4 = _item$text4.replace(' ', '_')) === null || _item$text4 === void 0 ? void 0 : _item$text4.toLowerCase()) || t('START_MY_ORDER', 'start my order')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeOverlay, null));
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
var OrderTypeSelectorContent = exports.OrderTypeSelectorContent = function OrderTypeSelectorContent(props) {
  var _theme$images, _theme$images2, _theme$images3, _theme$images4, _theme$images5, _theme$images6, _theme$images7;
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var theme = (0, _styledComponents.useTheme)();
  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorContentUI,
    orderTypes: props.orderTypes || [{
      value: 1,
      text: t('DELIVERY', 'Delivery'),
      description: t('ORDERTYPE_DESCRIPTION_DELIVERY', 'Delivery description'),
      image: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.deliveryTypes) === null || _theme$images === void 0 ? void 0 : _theme$images.delivery
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description'),
      image: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.deliveryTypes) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.pickUp
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description'),
      image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.deliveryTypes) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.eatIn
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description'),
      image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.deliveryTypes) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.curbside
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description'),
      image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 || (_theme$images5 = _theme$images5.deliveryTypes) === null || _theme$images5 === void 0 ? void 0 : _theme$images5.driveThru
    }, {
      value: 7,
      text: t('CATERING_DELIVERY', 'Catering Delivery'),
      description: t('ORDERTYPE_DESCRIPTION_CATERING_DELIVERY', 'Catering Delivery description'),
      image: (_theme$images6 = theme.images) === null || _theme$images6 === void 0 || (_theme$images6 = _theme$images6.deliveryTypes) === null || _theme$images6 === void 0 ? void 0 : _theme$images6.cateringDelivery
    }, {
      value: 8,
      text: t('CATERING_PICKUP', 'Catering Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_CATERING_PICKUP', 'Catering Pickup description'),
      image: (_theme$images7 = theme.images) === null || _theme$images7 === void 0 || (_theme$images7 = _theme$images7.deliveryTypes) === null || _theme$images7 === void 0 ? void 0 : _theme$images7.cateringPickup
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};