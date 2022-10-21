"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkableText = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLinkify = _interopRequireDefault(require("react-linkify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkableText = function LinkableText(props) {
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

exports.LinkableText = LinkableText;