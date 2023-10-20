"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Personalization = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Personalization = exports.Personalization = function Personalization(props) {
  var _theme$images$general;
  var isShowTitle = props.isShowTitle;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, isShowTitle && /*#__PURE__*/_react.default.createElement("h1", null, t('PERSONALIZATION', 'Personalization')), /*#__PURE__*/_react.default.createElement("p", null, t('PERSONALIZATION_TITLE', 'If you are looking for something  special for your Ordering Solution'), ",", /*#__PURE__*/_react.default.createElement("a", {
    href: "https://orderingco.typeform.com/to/qHPQtU",
    target: "_blank",
    rel: "noopener noreferrer"
  }, t('SEND_US_SPECIAL_WISH', 'send us your special wish.'))), /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 || (_theme$images$general = theme.images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.personalization,
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.WrapperButton, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return window.open('https://orderingco.typeform.com/to/qHPQtU', '_blank');
    }
  }, t('CONTACT_US', 'Contact us'))));
};