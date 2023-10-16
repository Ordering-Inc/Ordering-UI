"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollBoxWrapper = exports.ScrollBoxContainer = exports.ScrollBox = exports.ArrowButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ScrollBox = exports.ScrollBox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n"])));
var ScrollBoxWrapper = exports.ScrollBoxWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden;\n  overflow-x: scroll;\n  -ms-overflow-style: none; /* IE */\n  overflow: -moz-scrollbars-none; /* Firefox */\n\n  &::-webkit-scrollbar {\n   display: none; /* Chrome and Safari */\n }\n"])));
var ScrollBoxContainer = exports.ScrollBoxContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  display: inline-flex;\n"])));
var ArrowButton = exports.ArrowButton = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1025px) {\n    position: absolute;\n    cursor: pointer;\n    z-index: 10;\n    width: 25px;\n    min-width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: #D9D9D9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #D9D9D9;\n    opacity: 0.8;\n\n    ", "\n\n    svg {\n      color: #000000;\n      font-size: 24px;\n    }\n  }\n"])), function (_ref) {
  var isRight = _ref.isRight;
  return isRight && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: 0px;\n    "])));
});