"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialNetWork = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SocialNetWork = exports.SocialNetWork = function SocialNetWork(_ref) {
  var url = _ref.url,
    icon = _ref.icon;
  return /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, icon);
};