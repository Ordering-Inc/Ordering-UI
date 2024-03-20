"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapInput = exports.Title = exports.Slogan = exports.Overlay = exports.HeroContainerStyled = exports.HeroContainer = exports.ContentWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeroContainerStyled = exports.HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100vh - 97px);\n  position: relative;\n\n  button{\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  ", "\n\n  @media (min-width: 821px) {\n    height: calc(100vh - 65px);\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var HeroContainer = exports.HeroContainer = function HeroContainer(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    position: relative;\n    padding: 0px 20px 0px;\n\n    ", "\n\n    button {\n      width: 180px;\n      font-size: 18px;\n    }\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 425px) {\n      input {\n        width: 97%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      padding: 0px 40px 0px;\n\n      ", "\n    }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding: 0px 20px 0px;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding: 0px 40px 0px;\n      "])));
});
var Title = exports.Title = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 50px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  opacity: 1;\n\n  ", "\n\n  @media (min-width: 400px) {\n    font-size: 65px;\n  }\n\n  @media (min-width: 576px) {\n    font-size: 72px;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var Slogan = exports.Slogan = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 24px;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n  opacity: 1;\n  margin-bottom: 37px;\n\n  ", "\n\n  @media (min-width: 480px) {\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var WrapInput = exports.WrapInput = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  padding: 10px 25px;\n  background: #FFFFFF;\n  border: 1px solid #DEE2E6;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 50px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 27px;\n\n  ", "\n  \n  p {\n    color: ", ";\n    position: relative;\n    margin: 0;\n  }\n\n  svg {\n    color: ", ";\n    width: 22px;\n    height: 22px;\n    min-width: 22px;\n\n    ", "\n\n  }\n"])), function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    width: calc(100% - 20px);\n    box-sizing: border-box;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      right: 5px;\n      top: 0;\n      bottom: 18px;\n      width: 15px;\n\n      ", "\n    }\n\n    @media (min-width: 1024px) {\n      width: calc(50% - 20px);\n    }\n  "])), function (props) {
    var _props$theme5;
    return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        left: 5px;\n        right: initial;\n     "])));
  });
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-right: 20px;\n    "])));
});
var Overlay = exports.Overlay = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0000004D;\n"])));