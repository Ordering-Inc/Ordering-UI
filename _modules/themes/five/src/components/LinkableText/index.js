"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkableText = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLinkify = _interopRequireDefault(require("react-linkify"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var LinkableText = exports.LinkableText = function LinkableText(props) {
  var text = props.text;
  return /*#__PURE__*/_react.default.createElement(_reactLinkify.default, {
    componentDecorator: function componentDecorator(decoratedHref, decoratedText, key) {
      return /*#__PURE__*/_react.default.createElement("a", {
        target: "blank",
        href: decoratedHref,
        key: key
      }, decoratedText);
    }
  }, text);
};