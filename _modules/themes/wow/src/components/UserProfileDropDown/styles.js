"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutContainer = exports.Item = exports.IconWrap = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: #F9F9F9;\n  padding: 20px 0px;\n  border-radius: 20px;\n  margin-top: -20px;\n  h1 {\n    font-size: 18px;\n    color: ", ";\n    border-top: 1px solid #CCC;\n    padding: 15px 0;\n    margin: 0px 25px;\n  }\n\n  @media (min-width: 992px) {\n    background-color: transparent;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Item = exports.Item = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 25px;\n  cursor: pointer;\n  color: ", ";\n  &:hover {\n    background-color: #CCC;\n  }\n\n  ", "\n\n  span {\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    color: ", ";\n    ", "\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.primary;
  }, function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-right: 4px solid ", ";\n    "])), props.theme.colors.primary) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-left: 4px solid ", ";\n    "])), props.theme.colors.primary);
  });
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "])));
});
var IconWrap = exports.IconWrap = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  background-color: #F9F9F9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 18px;\n  }\n"])));
var LogoutContainer = exports.LogoutContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n  margin: 0 25px;\n  border-top: 1px solid #CCC;\n  cursor: pointer;\n\n  > span:first-child {\n    background: #F9F9F9;\n    backdrop-filter: blur(15px);\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    svg {\n      color: #F7705D;\n      width: 30px;\n      height: 30px;\n    }\n  }\n\n  > span:last-child {\n    color: ", ";\n    font-size: 16px;\n    margin: 0 15px;\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.grayColor;
});