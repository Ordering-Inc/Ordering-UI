"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleGiftCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleGiftCard = function SingleGiftCard(props) {
  var _card$order_product2, _theme$images, _card$order_product3, _card$order_product4, _card$order_product5;
  var card = props.card,
    isSkeleton = props.isSkeleton;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage,
    parseDate = _useUtils2$.parseDate;
  var getGiftCardStatus = function getGiftCardStatus(status) {
    switch (status) {
      case 'pending':
        return t('PENDING', 'Pending');
      case 'activated':
        return t('REDEEMED');
      default:
        return status;
    }
  };
  var handleClickGiftCardOrder = function handleClickGiftCardOrder(card) {
    var _card$order_product;
    events.emit('go_to_page', {
      page: 'order_detail',
      params: {
        orderId: (_card$order_product = card.order_product) === null || _card$order_product === void 0 ? void 0 : _card$order_product.order_id
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.CardContainer, {
    className: "product-card",
    onClick: function onClick() {
      return handleClickGiftCardOrder(card);
    }
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 86,
    width: 86
  }) : /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    bgimage: optimizeImage((card === null || card === void 0 || (_card$order_product2 = card.order_product) === null || _card$order_product2 === void 0 ? void 0 : _card$order_product2.images) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product), 'h_86,c_limit')
  }), /*#__PURE__*/_react.default.createElement(_styles.CardInfo, null, /*#__PURE__*/_react.default.createElement("div", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 16,
    width: 100
  }) : /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, card === null || card === void 0 || (_card$order_product3 = card.order_product) === null || _card$order_product3 === void 0 ? void 0 : _card$order_product3.name), isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 16,
    width: 80
  }) : /*#__PURE__*/_react.default.createElement("span", null, parsePrice(card === null || card === void 0 || (_card$order_product4 = card.order_product) === null || _card$order_product4 === void 0 ? void 0 : _card$order_product4.price))), isSkeleton ? /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150,
    height: 14
  })) : /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, t('ORDER_NUM', 'Order No.'), " ", card === null || card === void 0 || (_card$order_product5 = card.order_product) === null || _card$order_product5 === void 0 ? void 0 : _card$order_product5.order_id, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), parseDate(card === null || card === void 0 ? void 0 : card.created_at)), isSkeleton ? /*#__PURE__*/_react.default.createElement("p", {
    className: "status"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80,
    height: 14
  })) : /*#__PURE__*/_react.default.createElement("p", {
    className: "status"
  }, getGiftCardStatus(card === null || card === void 0 ? void 0 : card.status))));
};
exports.SingleGiftCard = SingleGiftCard;