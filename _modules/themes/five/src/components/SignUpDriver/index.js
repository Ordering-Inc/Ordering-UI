"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpDriver = void 0;
var _react = _interopRequireDefault(require("react"));
var _OldSignUpDriver = require("./layouts/OldSignUpDriver");
var _NewSignUpDriver = require("./layouts/NewSignUpDriver");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var SignUpDriver = exports.SignUpDriver = function SignUpDriver(props) {
  var layout = props.layout;
  var _layout = layout !== null && layout !== void 0 ? layout : 'old';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _layout === 'old' && /*#__PURE__*/_react.default.createElement(_OldSignUpDriver.SignUpDriver, props), _layout === 'new' && /*#__PURE__*/_react.default.createElement(_NewSignUpDriver.SignUpDriver, props));
};