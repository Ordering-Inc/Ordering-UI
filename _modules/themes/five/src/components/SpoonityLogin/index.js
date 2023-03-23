"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpoonityLogin = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SpoonityLogin = function SpoonityLogin(props) {
  var _theme$images, _theme$images$general;
  var onClick = props.onClick,
    disabled = props.disabled;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles.SpoonityContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: onClick,
    disabled: disabled
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.spoonity,
    width: 82,
    height: 28
  })));
};
exports.SpoonityLogin = SpoonityLogin;