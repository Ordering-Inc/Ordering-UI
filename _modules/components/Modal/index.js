"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireWildcard(require("react"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ModalUI = function ModalUI(props) {
  var title = props.title,
    children = props.children,
    onAccept = props.onAccept,
    onCancel = props.onCancel,
    onClose = props.onClose,
    acceptText = props.acceptText,
    cancelText = props.cancelText,
    isTransparent = props.isTransparent,
    hideCloseDefault = props.hideCloseDefault,
    isProductForm = props.isProductForm,
    modalTitleStyle = props.modalTitleStyle;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      onClose && onClose();
    }
  };
  (0, _react.useEffect)(function () {
    if (window.innerWidth > document.body.clientWidth) {
      var scrollbarWidth = window.innerWidth - document.body.clientWidth;
      var bodyPaddingRight = window.document.body.style.paddingRight;
      document.body.style.paddingRight = props.open ? "".concat(bodyPaddingRight + scrollbarWidth, "px") : "".concat(bodyPaddingRight, "px");
    }
    document.body.style.overflow = props.open ? 'hidden' : 'auto';
    if (props.open) {
      window.addEventListener('keydown', handleKeyDown);
      return function () {
        return window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [props.open]);
  return /*#__PURE__*/_react.default.createElement(_styles.ModalDialog, {
    className: "popup-dialog",
    width: props.width,
    height: props.height,
    padding: props.padding,
    isTransparent: isTransparent
  }, isProductForm && /*#__PURE__*/_react.default.createElement(_styles.ModalBackHeader, null), !hideCloseDefault && /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.ModalHeader, null, title && /*#__PURE__*/_react.default.createElement(_styles.ModalTitle, {
    style: modalTitleStyle
  }, title)), children, (onCancel || onAccept) && /*#__PURE__*/_react.default.createElement(_styles.ModalActions, null, onCancel && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
var Modal = exports.Modal = function Modal(props) {
  var ModalProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ModalUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Popup, ModalProps);
};