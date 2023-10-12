"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappMap = exports.Text = exports.Map = exports.AddressContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressContainer = exports.AddressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #CCC;\n  padding: 20px 0;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
var WrappMap = exports.WrappMap = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  ", "\n\n  h4 {\n    margin-bottom: 0px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n  "])));
});
var Map = exports.Map = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 100%;\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    -webkit-user-drag: none;\n    aspect-ratio: attr(width) / attr(height);\n  }\n"])));
var Text = exports.Text = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  h1 {\n    font-size: 20px;\n    margin: 0px;\n    text-transform: uppercase;\n  }\n\n  a {\n    cursor: pointer;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 600;\n\n    ", "\n  }\n\n  @media (min-width: 768px) {\n    margin-bottom: 0px;\n    width: 230px;\n    flex-direction: column;\n    align-items: initial;\n\n    a {\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n      "])));
});