"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Checkbox = exports.Checkbox = _styledComponents.default.input.attrs({
  type: 'checkbox'
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  border: none;\n\n  &:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    top: 0;\n    left: 0;\n    border: 1px solid #B1BCCC;\n    border-radius: 2px;\n    background: ", ";\n  }\n\n  &:checked:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    top: 0;\n    ", "\n    background-color: ", ";\n    border: none;\n  }\n  &:checked:after {\n    content: \"\";\n    display: block;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg);\n    position: absolute;\n    top: 3px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      right: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      left: 0;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: 7px;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      left: 7px;\n    "])));
});