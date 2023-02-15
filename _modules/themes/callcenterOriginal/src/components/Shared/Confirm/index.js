"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = exports.Alert = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../styles");
var _styledComponents = require("styled-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ConfirmUI = function ConfirmUI(props) {
  var title = props.title,
    children = props.children,
    content = props.content,
    onAccept = props.onAccept,
    onCancel = props.onCancel,
    onClose = props.onClose,
    acceptText = props.acceptText,
    cancelText = props.cancelText;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var errors = {
    ERROR_REPORT_MAX_A_DAY_AS_PERIOD: 'Error report, max a day as period',
    ERROR_REPORT_VERY_LONG_PERIOD: 'Error report, very long period'
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.PopupDialog, {
    className: "popup-dialog",
    width: props.width
  }, /*#__PURE__*/_react.default.createElement(_styles2.PopupIcon, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onClose();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), title && /*#__PURE__*/_react.default.createElement(_styles2.PopupTitle, null, title), /*#__PURE__*/_react.default.createElement(_styles2.PopupContent, null, content && typeof content === 'string' && content, content && _typeof(content) === 'object' && Array.isArray(content) && /*#__PURE__*/_react.default.createElement("ul", null, content.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, t(item.toUpperCase(), errors[item]));
  })), children), (onCancel || onAccept || onClose) && /*#__PURE__*/_react.default.createElement(_styles2.PopupActions, null, onCancel && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    outline: true,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText || t('CANCEL')), onAccept && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primary",
    onClick: function onClick() {
      return onAccept();
    }
  }, acceptText || t('ACCEPT'))));
};
var Confirm = function Confirm(props) {
  var popupProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ConfirmUI
  });
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, theme && /*#__PURE__*/_react.default.createElement(_orderingComponents.Popup, popupProps));
};
exports.Confirm = Confirm;
var Alert = Confirm;
exports.Alert = Alert;