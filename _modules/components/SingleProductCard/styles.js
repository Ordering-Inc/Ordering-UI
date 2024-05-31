"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapLogo = exports.SoldOut = exports.QuantityContainer = exports.PriceWrapper = exports.CardLogo = exports.CardInfo = exports.CardContainer = void 0;
var _polished = require("polished");
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CardContainer = exports.CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(100% - 40px);\n  padding: 10px;\n  margin: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  position: relative;\n\n  background: ", ";\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var soldOut = _ref.soldOut;
  return soldOut ? '#B8B8B8' : '#FFF';
}, function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  "])));
}, function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList,
    isLayoutOne = _ref2.isLayoutOne;
  return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(50% - 40px);\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(50% - 40px);\n    }\n\n    ", "\n  "])), isLayoutOne ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      @media (min-width: 1025px) {\n        width: calc(33% - 40px);\n      }\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      @media (min-width: 993px) {\n        width: calc(33% - 40px);\n      }\n    "]))));
});
var SoldOut = exports.SoldOut = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #D6D6D6 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  padding: 5px 10px;\n  top: 8px;\n  right: 6px;\n  text-transform: uppercase;\n  font-size: 14px;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    left: 6px;\n    right: initial;\n  "])));
});
var CardInfo = exports.CardInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100% - 90px);\n  > * {\n    margin: 5px;\n  }\n\n  h1 {\n    font-size: 16px;\n    font-weight: ", ";\n    text-align: left;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    ", "\n  }\n\n  p {\n    font-weight: ", ";\n    text-align: left;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  span {\n    color: ", ";\n    font-weight: bold;\n  }\n\n  p, span {\n    font-size: 13px;\n  }\n\n  @media (min-width: 1024px) {\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 16px;\n    }\n\n    span {\n      font-size: 15px;\n    }\n  }\n"])), function (_ref3) {
  var soldOut = _ref3.soldOut;
  return soldOut ? 'bold' : '500';
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (_ref4) {
  var soldOut = _ref4.soldOut;
  return soldOut ? 'bold' : '200';
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (_ref5) {
  var soldOut = _ref5.soldOut,
    theme = _ref5.theme;
  return soldOut ? (0, _polished.lighten)(0.05, theme.colors.primary) : theme.colors.primary;
});
var WrapLogo = exports.WrapLogo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n  margin-right: 5px;\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-left: 5px;\n    margin-right: 0px;\n  "])));
});
var CardLogoStyled = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 75px;\n  border-radius: 10px;\n"])));
var CardLogo = exports.CardLogo = function CardLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }
  return /*#__PURE__*/_react.default.createElement(CardLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var QuantityContainer = exports.QuantityContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  position: absolute;\n  left: 100%;\n  bottom: 100%;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  border-radius: 50%;\n  transform: translate(-50%, 50%);\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.primary;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primaryContrast;
});
var PriceWrapper = exports.PriceWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .off-price {\n    font-size: 10px;\n    color: #909BA9;\n    margin-left: 5px;\n    text-decoration: line-through;\n\n    ", "\n\n    @media (min-width: 1024px) {\n      font-size: 13px;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
});