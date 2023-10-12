"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedOption = exports.OrderTypeWrapper = exports.Option = exports.ContentOption = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Option = exports.Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  \n  svg {\n    min-width: 14px;\n    margin-right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var OrderTypeWrapper = exports.OrderTypeWrapper = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\n  @media (min-width: 380px) {\n    div{\n      max-width: initial;\n    }\n  }\n"])));
var SelectedOption = exports.SelectedOption = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0;\n  max-width: 72px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media (min-width: 768px) {\n    max-width: 120px;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: unset;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: initial;\n  }\n"])));
var ContentOption = exports.ContentOption = (0, _styledComponents.default)(SelectedOption)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  max-width: initial;\n"])));