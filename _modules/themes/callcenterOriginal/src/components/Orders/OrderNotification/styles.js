"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastWrapper = exports.ModalContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ModalContainer = exports.ModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 10px;\n  background: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  animation: fadeIn 200ms;\n\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin: 0px;\n  }\n\n  p {\n    text-align: center;\n    font-size: 16px;\n    margin-top: 0px;\n    margin-bottom: 22px;\n\n    span {\n      color: ", ";\n      font-weight: 600;\n    }\n  }\n  img {\n    width: 250px;\n    height: 250px;\n    object-fit: contain;\n    margin: 40px 0;\n  }\n\n  @keyframes fadeIn {\n    from {\n      transform: scale(2);\n    }\n  \n    to {\n      transform: scale(1);\n    }\n  }\n\n  @media (min-width: 768px) {\n    img {\n      width: 290px;\n      height: 290px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.primary;
});
var ToastWrapper = exports.ToastWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  img {\n    height: 39px;\n  }\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    color: #344050;\n    ", "\n    span {\n      &:first-child {\n        font-size: 14px;\n        line-height: 21px;\n        font-weight: 500;\n        margin-bottom: 2px;\n      }\n      &:last-child {\n        font-size: 12px;\n        line-height: 18px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});