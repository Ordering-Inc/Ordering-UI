"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.PreTime = exports.PickStore = exports.OrderReview = exports.Logo = exports.Item = exports.InfoWrapper = exports.HeaderText = exports.DeliveryItems = exports.Container = exports.BackHeader = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n"])));
var BackHeader = exports.BackHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (min-width: 1024px) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      left: unset;\n      right: 0;\n    "])));
});
var Logo = exports.Logo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0px 5px;\n"])));
var HeaderText = exports.HeaderText = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    margin: 0 5px;\n  }\n"])));
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;  \n"])));
var OrderReview = exports.OrderReview = _styledComponents.default.h2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 29px;\n  margin: 11px 0 0;\n"])));
var PreTime = exports.PreTime = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  line-height: 19px;\n  margin: 11px 0;\n"])));
var SubTitle = exports.SubTitle = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 24px;\n  color: #ADB5BD;\n"])));
var PickStore = exports.PickStore = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 7px;\n  border-bottom: 1px solid #fff;\n  margin-bottom:2.5vw;\n  cursor: pointer;\n"])));
var DeliveryItems = exports.DeliveryItems = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 10px;\n  flex-wrap: wrap;\n  \n"])));
var Item = exports.Item = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  min-width: 57px;  \n  height: 20px;\n  padding: 4px 10px;\n  background: #ADB5BD;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  line-height: 14px;\n  color: #fff;\n  cursor: pointer;\n\n  ", "\n\n  &:hover {\n    background: ", ";\n  }\n\n  &.active {\n    background-color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-right: 0;\n    margin-left: 10px;\n  "])));
}, function (props) {
  return (0, _polished.darken)(0.02, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.primary;
});