"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Slogan = exports.OrderTypeTitle = exports.OrderTypeListItemContainer = exports.IconTypeButton = exports.HomeImage = exports.HeroContent = exports.HeroContainerStyled = exports.HeroContainer = exports.ContentWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeroContainerStyled = exports.HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  position: relative;\n  ", "\n  padding: 40px;\n  box-sizing: border-box;\n  @media (min-width: 375px) {\n    height: 374px;\n  }\n\n  @media (min-width: 567px) {\n    height: 660px;\n    margin-bottom: 0;\n  }\n"])), function (_ref) {
  var mb = _ref.mb;
  return mb && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-bottom: ", ";\n  "])), mb);
});
var HeroContainer = exports.HeroContainer = function HeroContainer(props) {
  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, props, props.children);
};
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: flex;\n\n    height: 100%;\n    padding: 0px 10vw 0px;\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 576px) {\n      justify-content: center;\n      padding: 0px 40px 0px;\n      input {\n        width: 97%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      ", "\n    }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        padding: 0px 40px 0px;\n      "])));
});
var Title = exports.Title = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 40px;\n  line-height: 36px;\n  letter-spacing: 0px;\n  color: #000;\n  opacity: 1;\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var Slogan = exports.Slogan = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 18px;\n  font-size: 400;\n  color: #000;\n  opacity: 1;\n  margin-bottom: 30px;\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var HeroContent = exports.HeroContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 35%;\n  padding: 25px;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.12);\n"])));
var HomeImage = exports.HomeImage = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 65%;\n  height: 100%;\n  background-image: ", ";\n"])), function (_ref2) {
  var bgimage = _ref2.bgimage;
  return "url(".concat(bgimage, ")");
});
var OrderTypeListItemContainer = exports.OrderTypeListItemContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 75px;\n  border-radius: 7.6px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);\n  padding: 16px;\n  display: flex;\n  box-sizing: border-box;\n  margin-bottom: 15px;\n  cursor: pointer;\n"])));
var OrderTypeTitle = exports.OrderTypeTitle = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  box-sizing: border-box;\n"])));
var IconTypeButton = exports.IconTypeButton = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background: ", ";\n  border-radius: 44px;\n  margin-right: 30px;\n"])), function (_ref3) {
  var _theme$colors;
  var activated = _ref3.activated,
    theme = _ref3.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.white : '#F3F9FF';
});