"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.Title = exports.PopoverBody = exports.PopoverArrow = exports.HeaderItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  > span {\n    background: ", ";\n    color: ", ";\n    padding: 10px;\n    display: flex;\n    align-items: center;\n    border-radius: 7.6px;\n\n    span {\n      margin: 0;\n      font-size: 14px;\n      ", "\n    }\n    svg {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  return !props.isChew ? props.theme.colors.primary : props.theme.colors.backgroundPage;
}, function (props) {
  return !props.isChew ? props.theme.colors.backgroundPage : props.theme.colors.colorPage;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-right: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n      "])));
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 10002;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 || (_props$theme2 = _props$theme2.colors) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.backgroundPage;
});
var PopoverArrow = exports.PopoverArrow = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 8px;\n  line-height: 30px;\n  margin-top: 0;\n  text-align: center;\n\n  @media (min-width: 576px) {\n    text-align: left;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var TitleContainer = exports.TitleContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  button {\n    display: flex;\n    align-items: center;\n    border-radius: 16px;\n    svg{\n      margin-right: 5px;\n    }\n  }\n"])));