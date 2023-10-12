"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapOrderStatusTypeSelector = exports.OrderDashboardControlsContainer = exports.InnerContnet = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderDashboardControlsContainer = exports.OrderDashboardControlsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 10px;\n\n  > div {\n    > button {\n      height: 42px;\n      ", "\n  \n      svg {\n        ", "\n      }\n    }\n  }\n\n  @media (min-width: 992px) {\n    margin: 0px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-left: 14px;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-right: 14px;\n      "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n          margin-right: 5px;\n        "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n          margin-left: 5px;\n        "])));
});
var InnerContnet = exports.InnerContnet = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));
var WrapOrderStatusTypeSelector = exports.WrapOrderStatusTypeSelector = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0 7px;\n  > div {\n    > div:first-child {\n      border-color: ", ";\n      border-radius: 8px;\n      background-color: ", ";\n      > div:first-child {\n        padding-top: 4px;\n        padding-bottom: 4px;\n        > div:first-child {\n          > div {\n            border: none !important;\n            p {\n              color: ", " !important;\n              padding: 0 !important;\n            }\n          }\n        }\n      }\n    }\n\n    .list-wrapper {\n      > div {\n        padding: 0 10px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.secundary;
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.secundary;
}, function (props) {
  return props.theme.colors.secundaryContrast;
});