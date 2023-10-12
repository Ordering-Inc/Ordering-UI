"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Slogan = exports.OrderTypes = exports.InputSpan = exports.HeroContainerStyled = exports.HeroContainer = exports.ContentWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeroContainerStyled = exports.HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  ", "\n"])), function (_ref) {
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
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 30px;\n  @media (min-width: 425px) {\n  }\n  @media (min-width: 768px) {\n  }\n  @media (min-width: 1200px) {\n    padding: 65px;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 39px;\n  ", "\n  margin-bottom:16px;\n  text-align: center;\n  @media (min-width: 1024px) {\n    font-size: 28px;\n  }\n  @media (min-width: 1200px) {\n    font-size: 30px;\n  }\n  @media (min-width: 1405px) {\n    font-size: 2.3rem;\n  }\n"])), function (props) {
  var _props$theme, _props$theme2;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.backgroundPage) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), (_props$theme2 = props.theme) === null || _props$theme2 === void 0 || (_props$theme2 = _props$theme2.colors) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.backgroundPage);
});
var Slogan = exports.Slogan = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 16px;\n  \n  ", "\n  @media (min-width: 576px) {\n    font-size: 18px;\n    text-align: center;\n  }\n  @media (min-width: 1200px) {\n    font-size: 22px;\n  }\n"])), function (props) {
  var _props$theme3, _props$theme4;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 || (_props$theme3 = _props$theme3.colors) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.backgroundPage) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), (_props$theme4 = props.theme) === null || _props$theme4 === void 0 || (_props$theme4 = _props$theme4.colors) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.backgroundPage);
});
var InputSpan = exports.InputSpan = _styledComponents.default.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #DBDCDB;\n  border-radius: 30px;\n  font-size: 16px;\n  padding: 7px 50%;\n  outline: none;\n  color: #FFF;\n  border-color: #FFF;\n  cursor: pointer;\n  background: rgba(0,0,0,0.1);\n"])));
var OrderTypes = exports.OrderTypes = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #fff;\n  padding: 30px 0;\n  @media (min-width: 768px) {\n    padding: 45px;\n  }\n  @media (min-width: 1200px) {\n    padding: 75px;\n  }\n  @media (min-width: 1405px) {\n    padding: 90px;\n  }\n"])));