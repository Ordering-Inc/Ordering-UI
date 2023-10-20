"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.PopoverArrow = exports.HeaderItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  span {\n    display: flex;\n    align-items: flex-end;\n    position: relative;\n    p {\n      position: absolute;\n      right: 0;\n      height: 15px;\n      width: 15px;\n      margin: 0;\n      background: ", ";\n      border-radius: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 10px;\n      ", " \n    }\n    svg {\n      color: ", ";\n      font-size: 30px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        left: 0;\n        right: initial;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));
var PopoverArrow = exports.PopoverArrow = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));