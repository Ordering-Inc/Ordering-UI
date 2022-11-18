"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinnerLoader = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SpinnerLoader = function SpinnerLoader(props) {
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

exports.SpinnerLoader = SpinnerLoader;