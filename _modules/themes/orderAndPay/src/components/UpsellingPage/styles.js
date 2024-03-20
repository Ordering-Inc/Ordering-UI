"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapAutoScroll = exports.UpsellingContainer = exports.SkeletonContainer = exports.Item = exports.Image = exports.HorizontalUpsellingContainer = exports.HorizontalItem = exports.HorizontalImage = exports.HorizontalDetails = exports.Details = exports.Container = exports.CloseUpselling = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  button {\n    width: 46%;\n    margin-top: 20px;\n  }\n  \n  @media (min-width: 768px){\n    justify-content: flex-start;\n    height: auto;\n    button {\n      width: 46%;\n      margin-top: 20px;\n    }\n  }\n"])));
var UpsellingContainer = exports.UpsellingContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  overflow: auto;\n"])));
var Item = exports.Item = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid #eee;\n  width: 70%;\n  min-width: 150px;\n  padding: 20px;\n  margin: 15px 0;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  box-sizing: border-box;\n\n  @media (min-width: 490px) {\n    width: 43%;\n  }\n\n  @media (min-width: 769px) {\n    width: 27%;\n    padding: 11px;\n  }\n\n  @media (min-width: 1024px) {\n    width: 20%;\n    margin: 10px 15px;\n  }\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  img{\n    width: 100%;\n    height: auto;\n    border-radius: 16px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));
var Details = exports.Details = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  div {\n    width: 100%;\n     h3 {\n      margin-block-start: 0.1em;\n      margin-block-end: 0.1em;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 12px;\n    }\n  }\n  p{\n    color: ", ";\n    margin: 2px auto;\n  }\n  button {\n    width: auto;\n    margin: 8px auto 0;\n    padding: 0 20px;\n    font-size: 1em;\n    line-height: 22px;\n\n  }\n\n  @media (min-width: 480px){\n    div{\n      h3{\n        font-size: 14px;\n      }\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
});
var CloseUpselling = exports.CloseUpselling = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n\n  button{\n    width: 90%;\n    font-size: 1.4em;\n    padding: 10px 0;\n  }\n\n  @media (min-width: 720px){\n    button{\n      width: 40%;\n      padding: 2px;\n      font-size: 1em;\n    }\n  }\n"])));
var SkeletonContainer = exports.SkeletonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 15%;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  overflow: hidden;\n"])));
var HorizontalUpsellingContainer = exports.HorizontalUpsellingContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var HorizontalItem = exports.HorizontalItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  border-radius: 7.6px;\n  margin-right: 15px;\n  border: 2px solid #E9ECEF;\n  box-sizing: border-box;\n  padding: 10px 10px 6px 10px;\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n    margin-right: 0px;\n  "])));
});
var HorizontalImage = exports.HorizontalImage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  img {\n    border-radius: 7.6px;\n    width: 78px;\n    height: 78px;\n    margin-left: 5px;\n\n    ", "\n\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var HorizontalDetails = exports.HorizontalDetails = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 110px;\n  h3 {\n    width: 95px;\n    font-weight: 500;\n    font-size: 12px;\n    color: ", ";\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1; /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n\n  span {\n    font-size: 12px;\n    color: ", ";\n\n    &.discount {\n      font-size: 10px;\n      color: #909BA9;\n      ", "\n    }\n  }\n\n  button {\n    line-height: 22px;\n    padding-left: 9px;\n    padding-right: 9px;\n    font-size: 12px;\n    margin-top: 3px;\n    border-radius: 50px;\n    color: ", ";\n    background: ", "\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n      "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n      "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.primary;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.primaryContrast;
});
var WrapAutoScroll = exports.WrapAutoScroll = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow-x: auto;\n  display: flex;\n  margin-left: 10px;\n"])));