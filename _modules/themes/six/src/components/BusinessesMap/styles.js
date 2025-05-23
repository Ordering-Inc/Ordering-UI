"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;  \n  justify-content: center;\n  box-sizing: border-box;\n  min-height: 70vh;\n  height:100%;\n  \n  > div {\n    width: 100% !important;\n    height: 100% !important; \n  }\n\n  #map {\n    top: 1px;\n  }\n\n  ", "\n\n  @media(min-width: 850px){\n    width:60vw;    \n  }\n\n  @media(min-width: 1201px){\n    \n  }\n\n"])), function (_ref) {
  var disabled = _ref.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pointer-events: none\n  "])));
});