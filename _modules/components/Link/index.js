"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(props) {
  var children = props.children,
      className = props.className;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: className
  }, children);
};

exports.Link = Link;