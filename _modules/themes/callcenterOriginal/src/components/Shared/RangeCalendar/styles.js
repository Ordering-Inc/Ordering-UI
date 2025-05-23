"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = exports.CalendarWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  > button {\n    height: 44px;\n    svg {\n      font-size: 16px;\n      margin-right: 12px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-left: 12px;\n        margin-right: 0;\n      "])));
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  z-index: 100;\n  position: absolute;\n  margin-top: 18px;\n  overflow: hidden;\n  width: fit-content;\n\n  ", "\n  ", "\n  .rdrDateRangeWrapper {\n    .rdrDateDisplayWrapper {\n      background-color: transparent;\n    }\n    .rdrDateDisplayItem {\n      border: 1px solid ", ";\n      box-shadow: none;\n    }\n    button {\n      .rdrStartEdge,\n      .rdrEndEdge,\n      .rdrInRange {\n        color: ", " !important;\n      }\n    }\n    .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span, .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {\n      color: ", ";\n    }\n  }  \n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    left: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    right: 0px;\n  "])));
}, function (_ref) {
  var isLeft = _ref.isLeft;
  return isLeft && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (props) {
    var _props$theme2;
    return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      right: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      left: 0px;\n    "])));
  });
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.headingColor;
});