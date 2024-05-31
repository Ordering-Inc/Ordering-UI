"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapLogo = exports.SoldOut = exports.RibbonBox = exports.PriceWrapper = exports.CardLogo = exports.CardInfo = exports.CardContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CardContainer = exports.CardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 10px;\n  margin: 10px 0px;\n  border-radius: 7.6px;\n  cursor: pointer;\n  position: relative;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n\n  background: ", ";\n\n  @media (min-width: 576px) {\n    margin: 10px;\n    width: calc(100% - 40px);\n  }\n\n  ", "\n"])), function (_ref) {
  var soldOut = _ref.soldOut;
  return soldOut ? '#6c757d33' : '#FFF';
}, function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList;
  return isCartOnProductsList ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    @media (min-width: 993px) {\n      width: calc(50% - 40px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
  }) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    @media (min-width: 681px) {\n      width: calc(49% - 40px);\n    }\n\n    @media (min-width: 993px) {\n      width: calc(33% - 40px);\n      margin: 10px 20px 10px 0px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        margin: 10px 0px 10px 20px;\n      "])));
  });
});
var SoldOut = exports.SoldOut = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #495057 0% 0% no-repeat padding-box;\n  padding: 5px 10px;\n  top: 7px;\n  border-radius: 2px 0px 0px 2px;\n  right: 0px;\n  color: white;\n  font-size: 12px;\n  ", "\n  &:first-letter {\n    text-transform: uppercase;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    left: 0px;\n    right: initial;\n  "])));
}, function (_ref3) {
  var isBottom = _ref3.isBottom;
  return isBottom && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    bottom: 7px;\n    top: initial;\n  "])));
});
var CardInfo = exports.CardInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: calc(100% - 90px);\n  > * {\n    margin: 3px;\n  }\n\n  h1 {\n    font-size: 14px;\n    font-weight: 500;\n    text-align: left;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    color: #909BA9;\n    text-align: left;\n    font-size: 10px;\n    ", "\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n  }\n\n  @media (min-width: 1024px) {\n    p {\n      font-size: 12px;\n    }\n\n    span {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
var WrapLogo = exports.WrapLogo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 86px;\n  max-height: 86px;\n  height: 86px;\n  width: 86px;\n  margin-left: 5px;\n  ", "\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 5px;\n    margin-left: 0px;\n  "])));
});
var CardLogoStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 86px;\n  border-radius: 10px;\n"])));
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
var PriceWrapper = exports.PriceWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .off-price {\n    font-size: 10px;\n    color: #909BA9;\n    margin-left: 5px;\n    text-decoration: line-through;\n\n    ", "\n\n    @media (min-width: 1024px) {\n      font-size: 13px;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
});
var RibbonBox = exports.RibbonBox = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 2px 8px;\n  box-sizing: border-box;\n  z-index: 10;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  top: -4px;\n  right: -3px;\n  background-color: ", ";\n  max-width: 50px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    left: -3px;\n    right: initial;\n  "])));
}, function (_ref4) {
  var bgColor = _ref4.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref5) {
  var isRoundRect = _ref5.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref6) {
  var isCapsule = _ref6.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
});