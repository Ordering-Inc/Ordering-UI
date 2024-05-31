"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPreferencesSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderPreferencesSection = exports.OrderPreferencesSection = function OrderPreferencesSection(props) {
  var _order$delivery_optio, _order$delivery_optio2, _order$delivery_optio3;
  var order = props.order;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var deliveryTypes = [1, 7];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (deliveryTypes === null || deliveryTypes === void 0 ? void 0 : deliveryTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type)) && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('DELIVERY_PREFERENCE', 'Delivery preference')), /*#__PURE__*/_react.default.createElement("span", null, order !== null && order !== void 0 && (_order$delivery_optio = order.delivery_option) !== null && _order$delivery_optio !== void 0 && _order$delivery_optio.name ? t(order === null || order === void 0 || (_order$delivery_optio2 = order.delivery_option) === null || _order$delivery_optio2 === void 0 ? void 0 : _order$delivery_optio2.name.toUpperCase().replace(/\s/g, '_'), order === null || order === void 0 || (_order$delivery_optio3 = order.delivery_option) === null || _order$delivery_optio3 === void 0 ? void 0 : _order$delivery_optio3.name) : t('EITHER_WAY', 'Either way'))), (order === null || order === void 0 ? void 0 : order.comment) && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.comment)));
};