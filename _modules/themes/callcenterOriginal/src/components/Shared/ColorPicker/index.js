"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPicker = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactColor = require("react-color");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ColorPicker = exports.ColorPicker = function ColorPicker(props) {
  var defaultColor = props.defaultColor,
    onChangeColor = props.onChangeColor;
  var _useState = (0, _react.useState)('#F5F9FF'),
    _useState2 = _slicedToArray(_useState, 2),
    sketchPickerColor = _useState2[0],
    setSketchPickerColor = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var handleChangePickerColor = function handleChangePickerColor(picker) {
    setSketchPickerColor(picker.hex);
    onChangeColor && onChangeColor(picker.hex);
  };
  (0, _react.useEffect)(function () {
    if (defaultColor) {
      setSketchPickerColor(defaultColor);
    }
  }, [defaultColor]);
  var closePicker = function closePicker(e) {
    if (!open) return;
    var outSideClick = !e.target.closest('.ordering-color-picker');
    if (outSideClick) setOpen(false);
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('click', closePicker);
    return function () {
      return document.removeEventListener('click', closePicker);
    };
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.ColorWrapper, {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ColorBox, {
    bgColor: sketchPickerColor
  }), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CaretDownFill, null)), open && /*#__PURE__*/_react.default.createElement(_styles.ColorPickerWrapper, {
    className: "ordering-color-picker"
  }, /*#__PURE__*/_react.default.createElement(_reactColor.SketchPicker, {
    onChange: handleChangePickerColor,
    color: sketchPickerColor,
    disableAlpha: true
  })));
};