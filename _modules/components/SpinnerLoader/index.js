"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerLoader = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SpinnerLoader = exports.SpinnerLoader = function SpinnerLoader(props) {
  var logotype = props.logotype,
    content = props.content,
    style = props.style,
    iconStyle = props.iconStyle;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    style: style
  }, logotype && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: logotype,
    alt: "logo",
    width: "266px",
    height: "150px",
    loading: "lazy"
  })), content && /*#__PURE__*/_react.default.createElement(_styles.Content, null, content), /*#__PURE__*/_react.default.createElement(_styles.Spinner, _extends({
    className: "spinner",
    style: iconStyle
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner-content"
  }, /*#__PURE__*/_react.default.createElement("div", null))));
};