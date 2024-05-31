"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedirectLink = exports.LogoWrapper = exports.InputContainer = exports.HeroImageStyled = exports.HeroImage = exports.HeroContainer = exports.FormWrapper = exports.FormContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HeroContainer = exports.HeroContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 20px;\n\n  @media (min-width: 821px) {\n    padding-top: 0px;\n  }\n"])));
var HeroImageStyled = exports.HeroImageStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100vw;\n  height: 100%;\n  top: -20px;\n\n  ", "\n  @media (min-width: 821px) {\n    top: 0px;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    img {\n      max-width: 100%;\n      height: auto;\n    }\n  "])));
});
var HeroImage = exports.HeroImage = function HeroImage(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(HeroImageStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var FormContainer = exports.FormContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 80px 0;\n  z-index: 1;\n  background-color: #FFFFFF;\n  box-shadow: 0px 3px 20px #00000098;\n  border-radius: 8px;\n  padding: 30px 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    padding: 30px 60px;\n    min-width: 550px;\n  }\n\n  @media (min-width: 992px) {\n    min-width: 650px;\n  }\n\n  @media (max-width: 760px) {\n    width: 91%;\n  }\n"])));
var FormWrapper = exports.FormWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 600px;\n\n  h1 {\n    font-size: 22px;\n    text-align: center;\n    color: ", ";\n  }\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 91%;\n    margin: 20px 0;\n  }\n\n  @media (min-width: 992px) {\n    h1 {\n      font-size: 27px;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.blackColor;
});
var LogoWrapper = exports.LogoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 200px;\n  height: 66px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var InputContainer = exports.InputContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: 91%;\n  box-sizing: border-box;\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n\n  span {\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.grayColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      border-right: 2px solid ", ";\n      margin-right: 20px;\n      padding-right: 20px;\n    "])), function (props) {
    var _props$theme$colors4;
    return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.grayColor;
  }) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      border-left: 2px solid ", ";\n      margin-left: 20px;\n      padding-left: 20px;\n    "])), function (props) {
    var _props$theme$colors5;
    return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.grayColor;
  });
});
var RedirectLink = exports.RedirectLink = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-align: center;\n  span {\n    color: ", ";\n    ", "\n  }\n  a {\n    color: ", ";\n    &:link,\n    &:visited {\n      color: ", " !important;\n      text-decoration: none !important;\n    }\n  }\n"])), function (props) {
  var _props$theme$colors6;
  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.grayColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});