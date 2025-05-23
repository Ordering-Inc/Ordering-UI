"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedOption = exports.OrderTypeWrapper = exports.Option = exports.ContentOption = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  \n  svg {\n    min-width: 14px;\n    margin-right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var OrderTypeWrapper = exports.OrderTypeWrapper = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\n  @media (min-width: 380px) {\n    div{\n      max-width: initial;\n    }\n  }\n"])));
var SelectedOption = exports.SelectedOption = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0;\n  max-width: 72px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media (min-width: 768px) {\n    max-width: 120px;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: unset;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: initial;\n  }\n"])));
var ContentOption = exports.ContentOption = (0, _styledComponents.default)(SelectedOption)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  max-width: initial;\n"])));