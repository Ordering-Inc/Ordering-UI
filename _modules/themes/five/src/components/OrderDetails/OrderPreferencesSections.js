"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPreferencesSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderPreferencesSection = function OrderPreferencesSection(props) {
  var _order$delivery_optio, _order$delivery_optio2, _order$delivery_optio3;
  var order = props.order;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('DELIVERY_PREFERENCE', 'Delivery preference')), /*#__PURE__*/_react.default.createElement("span", null, order !== null && order !== void 0 && (_order$delivery_optio = order.delivery_option) !== null && _order$delivery_optio !== void 0 && _order$delivery_optio.name ? t(order === null || order === void 0 ? void 0 : (_order$delivery_optio2 = order.delivery_option) === null || _order$delivery_optio2 === void 0 ? void 0 : _order$delivery_optio2.name.toUpperCase().replace(/\s/g, '_'), order === null || order === void 0 ? void 0 : (_order$delivery_optio3 = order.delivery_option) === null || _order$delivery_optio3 === void 0 ? void 0 : _order$delivery_optio3.name) : t('EITHER_WAY', 'Either way'))), (order === null || order === void 0 ? void 0 : order.comment) && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.comment)));
};
exports.OrderPreferencesSection = OrderPreferencesSection;