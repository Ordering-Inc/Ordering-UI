"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.PopoverArrow = exports.HeaderItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: #333;\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  ", "\n\n  ", "\n\n  svg {\n    margin: 5px;\n    font-size: 16px;\n  }\n\n\n\n"])), function (props) {
  return props.isHome && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: #FFF;\n  "])));
}, function (_ref) {
  var isBanner = _ref.isBanner;
  return isBanner && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    padding: 4px 8px;\n  "])));
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  padding-top: 30px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 10002;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  #moment_control h1{\n    margin-bottom: 30px;\n  }\n  @media (min-width: 576px) {\n    z-index: 1001;\n  }\n"])));
var PopoverArrow = exports.PopoverArrow = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 0; \n  height: 0; \n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));