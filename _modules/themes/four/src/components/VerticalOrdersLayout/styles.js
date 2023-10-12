"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessTitle = exports.WrappButton = exports.SingleCard = exports.Reorder = exports.PastLogo = exports.OrdersContainer = exports.OrderPastContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrdersContainer = exports.OrdersContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));
var SingleCard = exports.SingleCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  max-height: 100px;\n  height: auto;\n  border: none;\n\n  border-radius: 16px;\n  margin-bottom: 15px;\n  background: #FFF;\n\n  @media(min-width: 480px){\n    height: 140px;\n    ", "\n    border-top: 1px solid #ccc;\n  }\n"])), function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-top: none !important;\n    "])));
});
var OrderPastContent = exports.OrderPastContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding: 10px 0;\n  padding-right: 5px;\n  min-width: 220px;\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0px;\n  "])));
});
var PastLogo = exports.PastLogo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 80%;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 17px;\n    object-fit: contain;\n  }\n  @media (min-width: 480px){\n    width: 75px;\n  }\n"])));
var WrapperBusinessTitle = exports.WrapperBusinessTitle = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 95%\n"])));
var Reorder = exports.Reorder = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 25%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8em;\n  margin-right: 25px;\n\n  ", "\n\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  button {\n    margin: 5px 0;\n    width: 100%;\n    font-size: 0.9em;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 480px){\n    font-size: 1em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n  }\n\n  @media (min-width: 768px){\n    ", "\n    button{\n      width: 80%;\n    }\n  }\n\n  @media (min-width: 1024px){\n    button{\n      width: 50%;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 25px;\n      margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "])));
});
var WrappButton = exports.WrappButton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  margin: 20px auto;\n\n  button {\n    padding: 10px 0px;\n    width: 100%;\n  }\n\n  @media (min-width: 768px) {\n    button {\n      width: 60%;\n    }\n  }\n"])));