"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.Logo = exports.Content = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2001;\n  flex-direction: column;\n"])));
var Logo = exports.Logo = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  img {\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    max-height: 150px;\n  }\n"])));
var Content = exports.Content = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: normal;\n  text-transform: capitalize;\n  margin-top: 0px;\n  padding-bottom: 50px;\n  font-size: 25px;\n\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n"])));
var Spinner = exports.Spinner = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  @keyframes spinner-content {\n    0% { transform: rotate(0) }\n    100% { transform: rotate(360deg) }\n  }\n\n  .spinner-content div {\n    box-sizing: border-box!important\n  }\n\n  .spinner-content > div {\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    border: 8px solid #000;\n    border-color: ", ";\n    animation: spinner-content 1.8518518518518516s linear infinite;\n  }\n\n  .spinner-content > div:nth-child(2) { border-color: transparent }\n  .spinner-content > div:nth-child(2) div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    transform: rotate(45deg);\n  }\n\n  .spinner-content > div:nth-child(2) div:before,\n  .spinner-content > div:nth-child(2) div:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    top: -8px;\n    left: 42px;\n    background: ", ";\n    border-radius: 50%;\n    box-shadow: 0 100px 0 0 ", ";\n  }\n\n  .spinner-content > div:nth-child(2) div:after {\n    left: -8px;\n    top: 42px;\n    box-shadow: 100px 0 0 0 ", ";\n  }\n\n  .spinner {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: #ffffff;\n  }\n\n  .spinner-content {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0;\n  }\n\n  .spinner-content div {\n    box-sizing: content-box;\n  }\n"])), function (props) {
  return props.iconStyleWidth || '108';
}, function (props) {
  return props.iconStyleHeight || '108';
}, function (props) {
  return "".concat(props.theme.colors.primary, " transparent ").concat(props.theme.colors.primary, " transparent");
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});