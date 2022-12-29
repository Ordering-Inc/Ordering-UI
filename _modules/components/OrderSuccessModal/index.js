"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptions = exports.OrderSuccessModal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _FiClock = _interopRequireDefault(require("@meronex/icons/fi/FiClock"));
var _HiOutlineLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineLocationMarker"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../utils");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderSuccessModal = function OrderSuccessModal(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera, _OrderState$options3, _OrderState$options4, _OrderState$options5, _OrderState$options6;
  var cart = props.cart,
    cardData = props.cardData,
    businessData = props.businessData,
    isCheckOut = props.isCheckOut,
    isOrderDetail = props.isOrderDetail;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    OrderState = _useOrder2[0];
  var businessAddress = function businessAddress() {
    if (isCheckOut && businessData) {
      return businessData === null || businessData === void 0 ? void 0 : businessData.address;
    }
    if (isOrderDetail) {
      return JSON.parse(window.localStorage.getItem('business-address'));
    }
    return JSON.parse(window.localStorage.getItem('user-customer'));
  };
  var parseDeliveryTime = function parseDeliveryTime() {
    var _OrderState$options, _OrderState$options2;
    var hour = 0;
    var min = 0;
    if ((OrderState === null || OrderState === void 0 ? void 0 : (_OrderState$options = OrderState.options) === null || _OrderState$options === void 0 ? void 0 : _OrderState$options.type) === 1 && cart) {
      var _cart$business;
      if (cart !== null && cart !== void 0 && (_cart$business = cart.business) !== null && _cart$business !== void 0 && _cart$business.delivery_time) {
        var _cart$business2, _cart$business3;
        hour = (cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.delivery_time).split(':')[0];
        min = (cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.delivery_time).split(':')[1];
      }
    }
    if ((OrderState === null || OrderState === void 0 ? void 0 : (_OrderState$options2 = OrderState.options) === null || _OrderState$options2 === void 0 ? void 0 : _OrderState$options2.type) === 2 && cart) {
      var _cart$business4;
      if (cart !== null && cart !== void 0 && (_cart$business4 = cart.business) !== null && _cart$business4 !== void 0 && _cart$business4.pickup_time) {
        var _cart$business5, _cart$business6;
        hour = (cart === null || cart === void 0 ? void 0 : (_cart$business5 = cart.business) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.pickup_time).split(':')[0];
        min = (cart === null || cart === void 0 ? void 0 : (_cart$business6 = cart.business) === null || _cart$business6 === void 0 ? void 0 : _cart$business6.pickup_time).split(':')[1];
      }
    }
    return (0, _utils.getHourMin)(hour, min);
  };
  var getProducts = function getProducts() {
    if (cart && (cart === null || cart === void 0 ? void 0 : cart.products.length) > 0) {
      return cart === null || cart === void 0 ? void 0 : cart.products.length;
    }
    return 1;
  };
  (0, _react.useEffect)(function () {
    if (businessData !== null && businessData !== void 0 && businessData.address) {
      localStorage.setItem('business-address', JSON.stringify(businessData === null || businessData === void 0 ? void 0 : businessData.address));
    }
  }, [businessData === null || businessData === void 0 ? void 0 : businessData.address]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, isCheckOut ? /*#__PURE__*/_react.default.createElement("h2", null, t('WE_ARE_CREATING_YOUR_ORDER', 'We are creating your order!')) : /*#__PURE__*/_react.default.createElement("h2", null, t('WE_SUCCESSFULLY_CREATED', 'Order successfully created!'))), /*#__PURE__*/_react.default.createElement(_styles.StatusImage, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "",
    src: isCheckOut ? theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.creatingOrder : theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.successOrder
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon"
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, {
    className: "location-icon"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, businessAddress())), isCheckOut && cart && (OrderState === null || OrderState === void 0 ? void 0 : (_OrderState$options3 = OrderState.options) === null || _OrderState$options3 === void 0 ? void 0 : _OrderState$options3.type) && ((OrderState === null || OrderState === void 0 ? void 0 : (_OrderState$options4 = OrderState.options) === null || _OrderState$options4 === void 0 ? void 0 : _OrderState$options4.type) === 1 || (OrderState === null || OrderState === void 0 ? void 0 : (_OrderState$options5 = OrderState.options) === null || _OrderState$options5 === void 0 ? void 0 : _OrderState$options5.type) === 2) && /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon"
  }, /*#__PURE__*/_react.default.createElement(_FiClock.default, {
    className: "clock-icon"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, /*#__PURE__*/_react.default.createElement("span", null, (OrderState === null || OrderState === void 0 ? void 0 : (_OrderState$options6 = OrderState.options) === null || _OrderState$options6 === void 0 ? void 0 : _OrderState$options6.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DELIVERY_TIME', 'Delivery Time')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('PICK_UP', 'Pick Time'))), /*#__PURE__*/_react.default.createElement("span", null, parseDeliveryTime()))), isCheckOut && cardData && (cardData === null || cardData === void 0 ? void 0 : cardData.card) && /*#__PURE__*/_react.default.createElement(PaymentOptions, {
    card: cardData === null || cardData === void 0 ? void 0 : cardData.card
  }), isCheckOut && /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon business-logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (businessData === null || businessData === void 0 ? void 0 : businessData.logo) || theme.images.dummies.businessLogo
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, /*#__PURE__*/_react.default.createElement("span", null, businessData === null || businessData === void 0 ? void 0 : businessData.name), /*#__PURE__*/_react.default.createElement("span", null, getProducts(), " ", t('PRODUCT', 'products'))))));
};
exports.OrderSuccessModal = OrderSuccessModal;
var PaymentOptions = function PaymentOptions(props) {
  var card = props.card;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon card-icon"
  }, (0, _utils.getIconCard)(card === null || card === void 0 ? void 0 : card.brand)), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, "XXXX-XXXX-XXXX-", card === null || card === void 0 ? void 0 : card.last4)));
};
exports.PaymentOptions = PaymentOptions;