"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetail = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _OrderBillSection = require("../OrderDetails/OrderBillSection");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderDetail = exports.OrderDetail = function OrderDetail(props) {
  var item = props.item,
    placingOrder = props.placingOrder,
    customerAddress = props.customerAddress,
    _onClick = props.onClick;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.OrderDetailContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, customerAddress), /*#__PURE__*/_react.default.createElement("div", null, item === null || item === void 0 ? void 0 : item.products.filter(function (product) {
    return !(product !== null && product !== void 0 && product.calendar_event);
  }).map(function (product) {
    var _item$toppings_remove;
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      isCartProduct: true,
      showArrowIcon: true,
      isDisabledEdit: true,
      toppingsRemoved: item === null || item === void 0 || (_item$toppings_remove = item.toppings_removed) === null || _item$toppings_remove === void 0 ? void 0 : _item$toppings_remove[product === null || product === void 0 ? void 0 : product.code]
    });
  })), /*#__PURE__*/_react.default.createElement(_OrderBillSection.OrderBillSection, {
    order: item
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: placingOrder,
    onClick: function onClick() {
      return _onClick();
    }
  }, placingOrder ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))));
};