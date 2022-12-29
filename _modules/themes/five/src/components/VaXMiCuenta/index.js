"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VaXMiCuenta = void 0;
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
var VaXMiCuenta = function VaXMiCuenta(props) {
  var defaultOptionsVaXMiCuenta = props.defaultOptionsVaXMiCuenta,
    vaXMiCuenta = props.vaXMiCuenta,
    handleChangeVaXMiCuenta = props.handleChangeVaXMiCuenta;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles.VaXMiCuentaContainer, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "\xBFDeseas donar a ", /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://d2gjwc6pypyhyf.cloudfront.net/va-por-mi-cuenta.svg"
  })), " ?"), /*#__PURE__*/_react.default.createElement("p", null, t('VA_POR_MI_CUENTA', 'VA_POR_MI_CUENTA'), " ", /*#__PURE__*/_react.default.createElement("a", {
    href: t('VA_POR_MI_CUENTA_URL', 'VA_POR_MI_CUENTA'),
    target: "_blank"
  }, " ", t('VA_POR_MI_CUENTA_URL_NAME', 'VA_POR_MI_CUENTA_URL_NAME'))), /*#__PURE__*/_react.default.createElement("div", null, Object.values(defaultOptionsVaXMiCuenta === null || defaultOptionsVaXMiCuenta === void 0 ? void 0 : defaultOptionsVaXMiCuenta.donation_values[0]).map(function (value, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, /*#__PURE__*/_react.default.createElement(_styles.Button, {
      value: value,
      isSelected: value === vaXMiCuenta.selectedOption.amount,
      onClick: function onClick() {
        return handleChangeVaXMiCuenta(value, index);
      }
    }, value === 0 ? 'No Donar' : value));
  }))));
};
exports.VaXMiCuenta = VaXMiCuenta;