"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationLink = exports.NavigationBarContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var NavigationBarContainer = exports.NavigationBarContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #FFFFFF;\n  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 10vw;\n  position: sticky;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  box-sizing: border-box;\n  z-index: 100;\n"])));
var NavigationLink = exports.NavigationLink = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  svg {\n    font-size: 18px;\n    color: #B1BCCC;\n  }\n\n  p {\n    margin-top: 2px;\n    margin-bottom: 0px;\n    color: #B1BCCC;\n    font-size: 12px;\n  }\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n\n    p {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});