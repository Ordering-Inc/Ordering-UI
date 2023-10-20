"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessTitle = exports.WrappButton = exports.SingleCard = exports.Reorder = exports.PastHeaderImage = exports.OrderPastContent = exports.BusinessInformation = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SingleCard = exports.SingleCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: none;\n  padding: 0 10px 10px 10px;\n  box-sizing: border-box;\n  border-top: 1px solid #ccc;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    padding: 0px;\n  }\n"])));
var OrderPastContent = exports.OrderPastContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  padding-right: 5px;\n  min-width: 220px;\n  padding: 15px 0px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding-left: 5px;\n      padding-right: 0px;\n    "])));
});
var PastHeaderImage = exports.PastHeaderImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  height: 125px;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px) {\n    width: 250px;\n  }\n"])));
var WrapperBusinessTitle = exports.WrapperBusinessTitle = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 95%;\n  margin-top: 0px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 20px;\n"])));
var Reorder = exports.Reorder = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8em;\n\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  button {\n    margin: 5px 0;\n    width: 100%;\n    font-size: 0.9em;\n    white-space: nowrap;\n  }\n  \n  button.review {\n    color: ", ";\n  }\n\n  @media (min-width: 480px){\n    font-size: 1em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n  }\n\n  @media (min-width: 768px){\n    width: 25%;\n  }\n\n  @media (min-width: 992px) {\n    button {\n      width: 80%;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var WrappButton = exports.WrappButton = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"])));
var BusinessInformation = exports.BusinessInformation = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: 100%;\n  flex-direction: column;\n  h2 {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 14px;\n    margin-block-end: 0;\n    margin-block-start: 0;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    color : #9A9A9A;\n    white-space: nowrap;\n    font-size: 0.9em;\n    ", "\n  }\n\n  p[name='order_number']{\n    width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p[name='view_order'] {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n    width: fit-content;\n  }\n\n  @media (min-width: 480px){\n    h2 {\n    font-size: 14px;\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    }\n    p{\n      ", "\n    }\n    p[name='order_number']{\n      width: 230px;\n    }\n  }\n\n  @media (min-width: 768px){\n    font-size: 0.9em;\n    flex: 1;\n    width: inherit;\n\n    padding-left: 10px;\n    font-size: 0.9em;\n    ", "\n    ", "\n\n    p {\n      font-size: 1em;\n    }\n  }\n"])), function (_ref) {
  var activeOrders = _ref.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      font-size: 0.8em;\n    "])));
}, function (props) {
  return props.theme.colors.secundary;
}, function (_ref2) {
  var activeOrders = _ref2.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        font-size: 0.9em;\n      "])));
}, function (_ref3) {
  var activeOrders = _ref3.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        width: 30%;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n      padding-left: 0;\n    "])));
});