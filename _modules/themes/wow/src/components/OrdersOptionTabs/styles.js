"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 0;\n  box-shadow: 0px 6px 10px rgba(128, 128, 128, 0.05), 0px 1px 18px rgba(128, 128, 128, 0.05), 0px 3px 5px rgba(128, 128, 128, 0.05);\n  border-radius: 16px;\n  \n  h1 {\n    color: ", ";\n    font-size: 24px;\n    font-weight: 600;\n    padding: 5px 20px;\n    margin: 0px;\n  }\n\n  @media (min-width: 768px) {\n    position: sticky;\n    top: 80px;\n  }\n\n  @media (min-width: 1200px) {\n    top: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Option = exports.Option = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px 20px;\n  color: ", ";\n  font-size: 18px;\n\n  p {\n    margin: 0px;\n  }\n\n  span {\n    color: #5DAF0A;\n    font-size: 12px;\n  }\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ", "\n\n    p {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-right: 4px solid ", ";\n    "])), props.theme.colors.primary) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-left: 4px solid ", ";\n    "])), props.theme.colors.primary);
  }, function (props) {
    return props.theme.colors.primary;
  });
});