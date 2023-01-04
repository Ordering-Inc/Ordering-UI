"use strict";

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderTypeSelectorContentUI = function OrderTypeSelectorContentUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
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
  var handleClickOrderType = function handleClickOrderType(orderType) {
    onClose && onClose();
    handleChangeOrderType && handleChangeOrderType(orderType);
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
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListTitle, null, t('HOW_WILL_YOU_DELIVERY_TYPE', 'How will you delivery type?')), orderTypes && (configTypes ? orderTypes.filter(function (type) {
    return configTypes === null || configTypes === void 0 ? void 0 : configTypes.includes(type.value);
  }) : orderTypes).map(function (item, i) {
    var _orderStatus$options;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      bgimage: item === null || item === void 0 ? void 0 : item.image,
      onClick: function onClick() {
        return handleClickOrderType(item.value);
      },
      active: (orderStatus === null || orderStatus === void 0 ? void 0 : (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === (item === null || item === void 0 ? void 0 : item.value)
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, item.text), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeDescription, null, item.description), /*#__PURE__*/_react.default.createElement(_styles.OrderStartWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('START_MY_ORDER', 'start my order')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeOverlay, null));
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
exports.OrderTypeSelectorContentUI = OrderTypeSelectorContentUI;
var OrderTypeSelectorContent = function OrderTypeSelectorContent(props) {
  var _theme$images, _theme$images$deliver, _theme$images2, _theme$images2$delive, _theme$images3, _theme$images3$delive, _theme$images4, _theme$images4$delive, _theme$images5, _theme$images5$delive;
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
      image: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$deliver = _theme$images.deliveryTypes) === null || _theme$images$deliver === void 0 ? void 0 : _theme$images$deliver.delivery
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', 'Pickup description'),
      image: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$delive = _theme$images2.deliveryTypes) === null || _theme$images2$delive === void 0 ? void 0 : _theme$images2$delive.pickUp
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', 'Eat in description'),
      image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$delive = _theme$images3.deliveryTypes) === null || _theme$images3$delive === void 0 ? void 0 : _theme$images3$delive.eatIn
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', 'Curbside description'),
      image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$delive = _theme$images4.deliveryTypes) === null || _theme$images4$delive === void 0 ? void 0 : _theme$images4$delive.curbside
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', 'Drive Thru description'),
      image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 ? void 0 : (_theme$images5$delive = _theme$images5.deliveryTypes) === null || _theme$images5$delive === void 0 ? void 0 : _theme$images5$delive.driveThru
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};
exports.OrderTypeSelectorContent = OrderTypeSelectorContent;