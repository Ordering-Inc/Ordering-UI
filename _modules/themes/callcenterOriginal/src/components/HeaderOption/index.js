"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderOption = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _FaMapMarkerAlt = _interopRequireDefault(require("@meronex/icons/fa/FaMapMarkerAlt"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HeaderOption = exports.HeaderOption = function HeaderOption(props) {
  var _configs$dates_moment;
  var variant = props.variant,
    addressState = props.addressState,
    momentState = props.momentState,
    totalCarts = props.totalCarts,
    orderTypeList = props.orderTypeList;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderStatus = _useOrder2[0];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    variant: variant,
    onClick: function onClick() {
      return props.onClick(variant);
    }
  }, variant === 'cart' && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), totalCarts > 0 && /*#__PURE__*/_react.default.createElement("span", null, totalCarts)), variant === 'address' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FaMapMarkerAlt.default, {
    id: "icon"
  }), addressState || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), variant === 'moment' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, momentState ? parseDate(momentState, {
    outputFormat: configs === null || configs === void 0 || (_configs$dates_moment = configs.dates_moment_format) === null || _configs$dates_moment === void 0 ? void 0 : _configs$dates_moment.value
  }) : t('ASAP_ABBREVIATION', 'ASAP')), variant === 'delivery' && /*#__PURE__*/_react.default.createElement(_styles.DeliveryType, null, orderTypeList && orderTypeList[(orderStatus === null || orderStatus === void 0 ? void 0 : orderStatus.options.type) - 1] || t('DELIVERY', 'Delivery')));
};