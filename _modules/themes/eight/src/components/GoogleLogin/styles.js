"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = exports.GoogleButton = exports.Content = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var GoogleButton = exports.GoogleButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border-radius: 30px;\n  line-height: 30px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all .3s ease-in-out;\n  font-size: 16px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  &:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);\n  }\n\n  ", "\n"])), function (_ref) {
  var isSignup = _ref.isSignup;
  return isSignup ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #FFF;\n    border-color: transparent;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    &:active {\n      background: ", ";\n    }\n    "])), (0, _polished.darken)(0.07, '#FFF')) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: #4286F5;\n    border: 1px solid #4286F5;\n    &:active {\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#4286F5'));
});
var Content = exports.Content = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 20px;\n    color: #1977F2;\n  }\n\n  div {\n    color: #FFF;\n    font-weight: 500;\n    font-size: 14px;\n    margin: 0 28px;\n  }\n\n  ", "\n"])), function (_ref2) {
  var isSignup = _ref2.isSignup;
  return isSignup ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    div {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.grayDark;
  }) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    div {\n      color: #FFF;\n    }\n  "])));
});
var IconWrapper = exports.IconWrapper = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));