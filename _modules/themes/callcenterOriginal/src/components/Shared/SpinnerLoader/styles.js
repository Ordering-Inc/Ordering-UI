"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.Logo = exports.Content = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  ", "\n"])), function (_ref) {
  var primary = _ref.primary;
  return primary && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    top: 0px;\n    position: fixed;\n    width: 100vw;\n    left: 0px;\n    z-index: 100;\n  "])));
});
var Logo = exports.Logo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  img {\n    max-height: 150px;\n  }\n"])));
var Content = exports.Content = _styledComponents.default.h1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: normal;\n  text-transform: capitalize;\n  margin-top: 0px;\n  padding-bottom: 50px;\n  font-size: 24px;\n  text-align: center;\n  color: ", ";\n\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var Spinner = exports.Spinner = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  @keyframes spinner-content {\n    0% { transform: rotate(0) }\n    100% { transform: rotate(360deg) }\n  }\n\n  .spinner-content div {\n    box-sizing: border-box!important\n  }\n\n  .spinner-content > div {\n    width: 108px;\n    height: 108px;\n    border-radius: 50%;\n    border: 8px solid #000;\n    border-color: ", ";\n    animation: spinner-content 1.8518518518518516s linear infinite;\n  }\n\n  .spinner-content > div:nth-child(2) { border-color: transparent }\n  .spinner-content > div:nth-child(2) div {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    transform: rotate(45deg);\n  }\n\n  .spinner-content > div:nth-child(2) div:before,\n  .spinner-content > div:nth-child(2) div:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    top: -8px;\n    left: 42px;\n    background: ", ";\n    border-radius: 50%;\n    box-shadow: 0 100px 0 0 ", ";\n  }\n\n  .spinner-content > div:nth-child(2) div:after {\n    left: -8px;\n    top: 42px;\n    box-shadow: 100px 0 0 0 ", ";\n  }\n\n  .spinner {\n    width: 200px;\n    height: 200px;\n    display: inline-block;\n    overflow: hidden;\n    background: ", ";\n  }\n\n  .spinner-content {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    transform: translateZ(0) scale(1);\n    backface-visibility: hidden;\n    transform-origin: 0 0;\n  }\n\n  .spinner-content div {\n    box-sizing: content-box;\n  }\n"])), function (props) {
  return "".concat(props.theme.colors.primary, " transparent ").concat(props.theme.colors.primary, " transparent");
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});