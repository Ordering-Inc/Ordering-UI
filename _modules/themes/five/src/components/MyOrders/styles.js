"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderGroupFilterWrapper = exports.NoOrdersWrapper = exports.MyOrdersMenuContainer = exports.Divider = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: hidden;\n  min-height: auto;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n  ", "\n\n  > h1 {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 48px;\n    margin-bottom: 7px;\n    margin-top: 0px;\n    text-transform: capitalize;\n  }\n\n  @media (min-width: 769px) {\n    ", "\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n"])), function (_ref) {
  var initialHeight = _ref.initialHeight;
  return !initialHeight && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    min-height: calc(100vh - 320px);\n  "])));
}, function (_ref2) {
  var hideOrders = _ref2.hideOrders;
  return !hideOrders ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding: 40px;\n      width: 100%;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding: 0;\n      width: 100%;\n\n      @media (min-width: 993px) {\n        min-height: 'auto';\n      }\n    "])));
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n"])));
var OrderGroupFilterWrapper = exports.OrderGroupFilterWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    border-radius: 50px;\n    margin-right: 10px;\n    ", "\n    > svg {\n      margin-left: 5px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 0;\n      margin-left: 10px;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});
var NoOrdersWrapper = exports.NoOrdersWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0px;\n  position: absolute;\n  box-sizing: border-box;\n  min-height: calc(100% - 120px);\n  width: 100%;\n\n  > p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 25px;\n  }\n\n  button {\n    height: 44px;\n  }\n"])));
var MyOrdersMenuContainer = exports.MyOrdersMenuContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n  padding: 5px 0px 0px 0px;\n  background: ", ";\n  z-index: 1000;\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #D9D9D9;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n  div.category {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 10px 0px;\n    margin: 0 15px;\n    &:nth-of-type(1) {\n      margin-left: 0;\n      ", "\n    }\n  }\n\n  div.special {\n    ", "\n  }\n\n  @media (min-width: 381px) {\n    padding: 15px 0px 0px 0px;\n  }\n  @media (min-width: 992px) {\n    width: auto;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n        margin-right: 15px;\n      "])));
}, function (props) {
  return !props.featured && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      display: none\n    "])));
});