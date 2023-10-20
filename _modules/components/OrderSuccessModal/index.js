"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderSuccessModal = exports.OrderSuccessModal = function OrderSuccessModal(props) {
  var _theme$images, _theme$images2, _OrderState$options3, _OrderState$options4, _OrderState$options5, _OrderState$options6;
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
    if ((OrderState === null || OrderState === void 0 || (_OrderState$options = OrderState.options) === null || _OrderState$options === void 0 ? void 0 : _OrderState$options.type) === 1 && cart) {
      var _cart$business;
      if (cart !== null && cart !== void 0 && (_cart$business = cart.business) !== null && _cart$business !== void 0 && _cart$business.delivery_time) {
        var _cart$business2, _cart$business3;
        hour = (cart === null || cart === void 0 || (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.delivery_time).split(':')[0];
        min = (cart === null || cart === void 0 || (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.delivery_time).split(':')[1];
      }
    }
    if ((OrderState === null || OrderState === void 0 || (_OrderState$options2 = OrderState.options) === null || _OrderState$options2 === void 0 ? void 0 : _OrderState$options2.type) === 2 && cart) {
      var _cart$business4;
      if (cart !== null && cart !== void 0 && (_cart$business4 = cart.business) !== null && _cart$business4 !== void 0 && _cart$business4.pickup_time) {
        var _cart$business5, _cart$business6;
        hour = (cart === null || cart === void 0 || (_cart$business5 = cart.business) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.pickup_time).split(':')[0];
        min = (cart === null || cart === void 0 || (_cart$business6 = cart.business) === null || _cart$business6 === void 0 ? void 0 : _cart$business6.pickup_time).split(':')[1];
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
    src: isCheckOut ? theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.creatingOrder : theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.successOrder
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon"
  }, /*#__PURE__*/_react.default.createElement(_HiOutlineLocationMarker.default, {
    className: "location-icon"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, businessAddress())), isCheckOut && cart && (OrderState === null || OrderState === void 0 || (_OrderState$options3 = OrderState.options) === null || _OrderState$options3 === void 0 ? void 0 : _OrderState$options3.type) && ((OrderState === null || OrderState === void 0 || (_OrderState$options4 = OrderState.options) === null || _OrderState$options4 === void 0 ? void 0 : _OrderState$options4.type) === 1 || (OrderState === null || OrderState === void 0 || (_OrderState$options5 = OrderState.options) === null || _OrderState$options5 === void 0 ? void 0 : _OrderState$options5.type) === 2) && /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon"
  }, /*#__PURE__*/_react.default.createElement(_FiClock.default, {
    className: "clock-icon"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, /*#__PURE__*/_react.default.createElement("span", null, (OrderState === null || OrderState === void 0 || (_OrderState$options6 = OrderState.options) === null || _OrderState$options6 === void 0 ? void 0 : _OrderState$options6.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DELIVERY_TIME', 'Delivery Time')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('PICK_UP', 'Pick Time'))), /*#__PURE__*/_react.default.createElement("span", null, parseDeliveryTime()))), isCheckOut && cardData && (cardData === null || cardData === void 0 ? void 0 : cardData.card) && /*#__PURE__*/_react.default.createElement(PaymentOptions, {
    card: cardData === null || cardData === void 0 ? void 0 : cardData.card
  }), isCheckOut && /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon business-logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (businessData === null || businessData === void 0 ? void 0 : businessData.logo) || theme.images.dummies.businessLogo
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, /*#__PURE__*/_react.default.createElement("span", null, businessData === null || businessData === void 0 ? void 0 : businessData.name), /*#__PURE__*/_react.default.createElement("span", null, getProducts(), " ", t('PRODUCT', 'products'))))));
};
var PaymentOptions = exports.PaymentOptions = function PaymentOptions(props) {
  var card = props.card;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderItem, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "item-icon card-icon"
  }, (0, _utils.getIconCard)(card === null || card === void 0 ? void 0 : card.brand)), /*#__PURE__*/_react.default.createElement("span", {
    className: "item-text"
  }, "XXXX-XXXX-XXXX-", card === null || card === void 0 ? void 0 : card.last4)));
};