"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundImage = exports.NotFound = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var NotFound = exports.NotFound = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: auto;\n  margin: 20px auto;\n\n  h1 {\n    font-size: 14px;\n    line-height: 24px;\n    text-align: center;\n    color: ", ";\n  }\n\n  @media (min-width: 840px) {\n    h1 {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});
var NotFoundImage = exports.NotFoundImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: 300px;\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  button {\n    height: 44px;\n  }\n"])));