"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timestatus = exports.OrdersDashboardSLAControlsContainer = exports.OrderTimeStatusSelectWrapper = exports.Option = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrdersDashboardSLAControlsContainer = exports.OrdersDashboardSLAControlsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n\n  button {\n    height: 42px;\n    ", "\n\n    svg {\n      ", "\n    }\n  }\n\n  @media (min-width: 992px) {\n    margin: 0px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 14px;\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-right: 14px;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "])));
});
var OrderTimeStatusSelectWrapper = exports.OrderTimeStatusSelectWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  .timeStatusSelect {\n    width: 168px;\n    height: 43px;\n    line-height: 43px;\n    border: none;\n    background: #F8F9FA;\n    margin: 0 10px;\n    >div:first-child {\n      height: 100%;\n    }\n  }\n\n  .list-wrapper {\n    min-width: 168px;\n  }\n\n  .search-bar-container {\n    padding: 7px 11px;\n    width: 100%;\n    input {\n      border-radius: 7.6px;\n      width: 100%;\n    }\n  }\n\n  .search-bar-container {\n    svg {\n      top: 13px;\n    }\n    input {\n      height: 40px;\n    }\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 5px 10px;\n  column-gap: 5px;\n\n  p {\n    margin: 0px;\n    white-space: nowrap;\n    font-size: 14px;\n    line-height: 26px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (_ref) {
  var noPadding = _ref.noPadding;
  return noPadding && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding: 0px;\n  "])));
});
var Timestatus = exports.Timestatus = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 22px;\n  border-radius: 20px 20px 20px 20px;\n  margin-right: 5px;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0;\n "])));
}, function (_ref2) {
  var timeState = _ref2.timeState;
  return timeState === 'in_time' && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background-color: #00D27A;\n  "])));
}, function (_ref3) {
  var timeState = _ref3.timeState;
  return timeState === 'at_risk' && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    background-color: #FFC700;\n  "])));
}, function (_ref4) {
  var timeState = _ref4.timeState;
  return timeState === 'delayed' && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    background-color: #E63757;\n  "])));
});