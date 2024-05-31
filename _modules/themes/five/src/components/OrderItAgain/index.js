"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderItAgain = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _SingleProductCard = require("../SingleProductCard");
var _styles = require("./styles");
var _AutoScroll = require("../AutoScroll");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderItAgain = exports.OrderItAgain = function OrderItAgain(props) {
  var onProductClick = props.onProductClick,
    isGroceries = props.isGroceries,
    productList = props.productList,
    businessId = props.businessId;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isGroceries: isGroceries
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentHeader, {
    isGroceries: isGroceries
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER_IT_AGAIN', 'Order it again')), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_IT_AGAIN_DESC', 'Quickly add items from your past orders.'))), /*#__PURE__*/_react.default.createElement(_styles.ProductListWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ProductList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "orderItAgain"
  }, productList.map(function (product, i) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: i,
      isSoldOut: product.inventoried && !product.quantity,
      businessId: businessId,
      product: product,
      onProductClick: onProductClick,
      isPreviously: true
    });
  })))));
};