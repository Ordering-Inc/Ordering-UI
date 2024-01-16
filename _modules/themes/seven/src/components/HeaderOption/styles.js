"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliverytimeInput = exports.Container = exports.AddressInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'cart' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    span {\n      display: flex;\n      align-items: center;\n      position: relative;\n      background-color: ", ";      padding: 6px 5px;\n      p {\n        position: relative;\n        margin: 0 3px;\n        font-size: 18px;\n        color: #fff;\n      }\n      svg {\n        color: #fff;\n        font-size: 22px;\n      }\n    }\n  "], ["\n    span {\n      display: flex;\n      align-items: center;\n      position: relative;\n      background-color: ", ";\\\n      padding: 6px 5px;\n      p {\n        position: relative;\n        margin: 0 3px;\n        font-size: 18px;\n        color: #fff;\n      }\n      svg {\n        color: #fff;\n        font-size: 22px;\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var variant = _ref2.variant;
  return variant === 'address' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 60%;\n    @media (min-width: 1024px) { \n      width: auto;\n    }\n    @media (min-width: 1200px) { \n      min-width: 125px\n    }\n  "])));
}, function (_ref3) {
  var variant = _ref3.variant;
  return variant === 'moment' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 40%;\n  "])));
});
var AddressInput = exports.AddressInput = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid ", ";\n  background-color: ", ";\n  color: ", ";\n\n  span {\n    width: 75%;\n    white-space: nowrap;\n    display: block;\n    overflow: hidden;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n  }\n  svg {\n    margin: 0 5px;\n    font-size: .9rem;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 14px;\n    justify-content: flex-start;\n  }\n\n  @media (min-width: 1200px) {\n    height: 48px;\n    font-size: 1rem;\n    padding-right: 10px;\n    span {\n      width: 100%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryBackground;
}, function (props) {
  return props.theme.colors.primary;
});
var DeliverytimeInput = exports.DeliverytimeInput = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  border: 1px solid ", ";\n  background-color: ", ";\n  span {\n    width: 75%;\n    white-space: nowrap;\n    display: block;\n    overflow: hidden;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n  }\n  svg {\n    margin: 0 5px;\n    font-size: .86rem;\n    color: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    height: 48px;\n    font-size: 1rem;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.secundaryBackground;
}, function (props) {
  return props.theme.colors.primary;
});