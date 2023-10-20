"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversOnlineOfflineFilter = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DriversOnlineOfflineFilter = exports.DriversOnlineOfflineFilter = function DriversOnlineOfflineFilter(props) {
  var driversIsOnline = props.driversIsOnline,
    handleChangeDriverIsOnline = props.handleChangeDriverIsOnline,
    numberOfonlineDrivers = props.numberOfonlineDrivers,
    numberOfofflineDrivers = props.numberOfofflineDrivers;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: driversIsOnline,
    onClick: function onClick() {
      return handleChangeDriverIsOnline(true);
    }
  }, t('ONLINE', 'Online'), /*#__PURE__*/_react.default.createElement("span", null, "(", numberOfonlineDrivers !== null && numberOfonlineDrivers !== void 0 ? numberOfonlineDrivers : 0, ")")), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: !driversIsOnline,
    onClick: function onClick() {
      return handleChangeDriverIsOnline(false);
    }
  }, t('INACTIVE_DRIVERS', 'Offline'), /*#__PURE__*/_react.default.createElement("span", null, "(", numberOfofflineDrivers !== null && numberOfofflineDrivers !== void 0 ? numberOfofflineDrivers : 0, ")")));
};