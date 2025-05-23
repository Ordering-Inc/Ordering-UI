"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeContainer = exports.ImageContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var TypeContainer = exports.TypeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n  justify-content: flex-start;\n  text-align: center;\n\n  ::-webkit-scrollbar {\n      opacity: 0\n  }\n  \n  > div{\n    margin: 0 auto;\n    > div {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    width: 100%;\n  }\n  }\n\n  .category{\n    padding: 10px 7px;\n\n    > span {\n      margin: 0 10px;\n    }\n  }\n\n  @media (min-width: 480px){\n    .category{\n      padding: 10px 15px;\n    }\n  }\n"])));
var ImageContainer = exports.ImageContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: 1px solid transparent;\n  overflow: hidden;\n  ", "\n\n  img{\n    width: 100%;\n    padding: 10px;\n    box-sizing: border-box;\n  }\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var load = _ref2.load;
  return !load && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    opacity: 0;\n  "])));
});