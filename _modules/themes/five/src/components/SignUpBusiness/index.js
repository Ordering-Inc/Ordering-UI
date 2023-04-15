"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignUpBusiness = void 0;
var _react = _interopRequireDefault(require("react"));
var _OldSignUpBusiness = require("./layouts/OldSignUpBusiness");
var _NewSignUpBusiness = require("./layouts/NewSignUpBusiness");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SignUpBusiness = function SignUpBusiness(props) {
  var layout = props.layout;
  var _layout = layout !== null && layout !== void 0 ? layout : 'old';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _layout === 'old' && /*#__PURE__*/_react.default.createElement(_OldSignUpBusiness.SignUpBusiness, props), _layout === 'new' && /*#__PURE__*/_react.default.createElement(_NewSignUpBusiness.SignUpBusiness, props));
};
exports.SignUpBusiness = SignUpBusiness;