"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalListing = exports.ProfessionalItem = exports.ContentWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    margin-top: 0px;\n    margin-bottom: 16px;\n  }\n"])));
var ProfessionalItem = exports.ProfessionalItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 11px;\n  border: 1px solid ", ";\n  border-radius: 7.6px;\n  cursor: pointer;\n  margin: 10px 6px;\n  transition: all 0.3s linear;\n  width: 205px;\n  min-width: 205px;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  > svg {\n    height: 42px;\n    width: 42px;\n    min-width: 42px;\n    margin-right: 12px;\n    ", "\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0px;\n    "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n"])));
var ProfessionalListing = exports.ProfessionalListing = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n"])));