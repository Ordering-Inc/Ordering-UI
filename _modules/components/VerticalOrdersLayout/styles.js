"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessTitle = exports.WrappButton = exports.SingleCard = exports.ReviewWrapper = exports.Reorder = exports.PastLogo = exports.OrderPastContent = exports.OrderInfo = exports.MultiLogosContainer = exports.FavoriteWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SingleCard = exports.SingleCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  max-height: 100px;\n  height: auto;\n  border-radius: 16px;\n  padding: 10px;\n  transition: all 0.3s ease;\n  border-bottom: 1px solid #F5F6F6;\n  cursor: pointer;\n\n  ", "\n\n  @media(min-width: 480px){\n    height: 140px;\n    ", "\n  }\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;\n  }\n"])), function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-bottom: 15px;\n  "])));
}, function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-top: none !important;\n    "])));
});
var OrderPastContent = exports.OrderPastContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding: 10px 0;\n  padding-right: 5px;\n  min-width: 220px;\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0px;\n  "])));
});
var FavoriteWrapper = exports.FavoriteWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.danger500;
});
var PastLogo = exports.PastLogo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 75px;\n  height: 100%;\n  ", "\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 17px;\n    object-fit: contain;\n  }\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px;\n  display: none;\n\n  @media (min-width: 480px) {\n    display: block;\n  }\n"])), function (_ref) {
  var isMulti = _ref.isMulti;
  return isMulti && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      width: 55px;\n      min-width: 55px;\n      height: 55px;\n      min-height: 55px;\n      margin: 3px;\n    "])));
});
var WrapperBusinessTitle = exports.WrapperBusinessTitle = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  gap: 10px;\n\n  @media (min-width: 480px) {\n    width: 95%;\n  }\n"])));
var Reorder = exports.Reorder = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8em;\n\n  button {\n    border-radius: 8px;\n    font-size: 10px;\n    line-height: 15px;\n    padding: 10px;\n    overflow: inherit;\n    text-overflow: inherit;\n    border: 1px solid ", ";\n    margin: 5px 0;\n\n    &.reorder {\n      background: ", ";\n      &:hover {\n        background: ", ";\n      }\n    }\n  }\n\n  ", "\n\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; /* number of lines to show */\n    -webkit-box-orient: vertical;\n  }\n  @media (min-width: 480px){\n    font-size: 1em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n    flex-direction: row;\n    gap: 10px;\n    margin-right: 25px;\n  }\n\n  @media (min-width: 768px){\n    ", "\n    button{\n      width: 80%;\n    }\n  }\n\n  @media (min-width: 1024px){\n    button{\n      width: 50%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 25px;\n      margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "])));
});
var OrderInfo = exports.OrderInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  .dot {\n    display: none;\n  }\n\n  @media (min-width: 480px){\n    flex-direction: row;\n    align-items: center;\n    .dot {\n      display: block;\n    }\n  }\n"])));
var WrappButton = exports.WrappButton = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  button:hover{\n    color: ", ";\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"])), function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.primary);
});
var ReviewWrapper = exports.ReviewWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  .review-sent {\n    border-radius: 7.6px;\n  }\n"])));
var MultiLogosContainer = exports.MultiLogosContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: none;\n  align-items: center;\n\n  @media (min-width: 480px) {\n    display: flex;\n  }\n"])));