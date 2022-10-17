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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderPreferencesSection = function OrderPreferencesSection(props) {
  var _order$delivery_optio, _order$delivery_optio2, _order$delivery_optio3;
  var layouts = ['pfchangs']; // add layouts here to hide comments
  var order = props.order,
    layout = props.layout;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var isShowComment = !(order !== null && order !== void 0 && order.comment && !(order !== null && order !== void 0 && order.comment.includes('Enpoint:')) && layouts.includes(layout));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 ? void 0 : order.delivery_type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('DELIVERY_PREFERENCE', 'Delivery preference')), /*#__PURE__*/_react.default.createElement("span", null, order !== null && order !== void 0 && (_order$delivery_optio = order.delivery_option) !== null && _order$delivery_optio !== void 0 && _order$delivery_optio.name ? t(order === null || order === void 0 ? void 0 : (_order$delivery_optio2 = order.delivery_option) === null || _order$delivery_optio2 === void 0 ? void 0 : _order$delivery_optio2.name.toUpperCase().replace(/\s/g, '_'), order === null || order === void 0 ? void 0 : (_order$delivery_optio3 = order.delivery_option) === null || _order$delivery_optio3 === void 0 ? void 0 : _order$delivery_optio3.name) : t('EITHER_WAY', 'Either way'))), (order === null || order === void 0 ? void 0 : order.comment) && isShowComment && /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('COMMENT', 'Comment')), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 ? void 0 : order.comment)));
};
exports.OrderPreferencesSection = OrderPreferencesSection;