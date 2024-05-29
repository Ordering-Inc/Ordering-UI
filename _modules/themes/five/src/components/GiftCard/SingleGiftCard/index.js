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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SingleGiftCard = exports.SingleGiftCard = function SingleGiftCard(props) {
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