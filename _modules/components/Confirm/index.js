"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = exports.Confirm = void 0;

var _react = _interopRequireDefault(require("react"));

var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return /*#__PURE__*/_react.default.createElement(_styles.PopupDialog, {
    className: "popup-dialog"
  }, /*#__PURE__*/_react.default.createElement(_styles.PopupIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  })), title && /*#__PURE__*/_react.default.createElement(_styles.PopupTitle, null, title), /*#__PURE__*/_react.default.createElement(_styles.PopupContent, null, content && typeof content === 'string' && content, content && _typeof(content) === 'object' && Array.isArray(content) && /*#__PURE__*/_react.default.createElement("ul", null, content.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i
    }, item);
  })), children), (onCancel || onAccept || onClose) && /*#__PURE__*/_react.default.createElement(_styles.PopupActions, null, onCancel && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    onClick: function onClick() {
      return onCancel();
    }
  }, cancelText || t('CANCEL', 'Cancel')), onAccept && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onAccept();
    }
  }, acceptText || t('ACCEPT', 'Accept'))));
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