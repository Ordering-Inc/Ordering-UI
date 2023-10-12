"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeWrapper = exports.StatusWrapper = exports.ProgressTextWrapper = exports.ProgressLogoStyled = exports.ProgressLogo = exports.ProgressDescriptionWrapper = exports.ProgressContentWrapper = exports.ProgressBarWrapper = exports.ProgressBar = exports.OrderProgressContainer = exports.OrderInfoWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderProgressContainer = exports.OrderProgressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  background: #FFFFFF;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  margin: 45px 20px;\n  padding: 15px;\n\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 576px) {\n    padding: 25px;\n  }\n\n  @media (min-width: 768px) {\n    > div {\n      width: 50%;\n    }\n  }\n"])));
var OrderInfoWrapper = exports.OrderInfoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    margin-bottom: 0px;\n  }\n"])));
var ProgressLogoStyled = exports.ProgressLogoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 70px;\n  min-width: 70px;\n  height: 70px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  ", "\n\n  @media (min-width: 576px) {\n    width: 91px;\n    min-width: 91px;\n    height: 91px;\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var ProgressLogo = exports.ProgressLogo = function ProgressLogo(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(ProgressLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var ProgressDescriptionWrapper = exports.ProgressDescriptionWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-left: 20px;\n  ", "\n\n  h2 {\n    font-weight: 600;\n    font-size: 14px;\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n\n  p {\n    font-size: 12px;\n    margin: 0;\n  }\n\n  button {\n    display: flex;\n    align-items: center;\n    padding: 0px;\n    margin-top: 0px;\n    font-size: 12px;\n    line-height: 25px;\n    svg {\n      margin-left: 5px;\n      ", "\n    }\n    &:hover {\n      text-decoration: underline;\n    }\n  }\n\n  @media (min-width: 576px) {\n    h2 {\n      font-size: 20px;\n      margin-bottom: 6px;\n    }\n    p {\n      font-size: 16px;\n    }\n    button {\n      font-size: 16px;\n      margin-top: 2px;\n      line-height: 30px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    margin-left: 35px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 20px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n        margin-right: 5px;\n      "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 0px;\n      margin-right: 35px;\n    "])));
});
var ProgressBarWrapper = exports.ProgressBarWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 0px;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    padding-left: 15px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      padding-right: 15px;\n    "])));
});
var ProgressContentWrapper = exports.ProgressContentWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 12px;\n  background: #F8F9FA;\n"])));
var ProgressBar = exports.ProgressBar = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 12px;\n  background: ", ";\n  width: 0px;\n"])), function (props) {
  return props.theme.colors.primary;
});
var ProgressTextWrapper = exports.ProgressTextWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n"])));
var StatusWrapper = exports.StatusWrapper = _styledComponents.default.p(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 14px;\n  margin-right: 10px;\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 10px;\n  "])));
});
var TimeWrapper = exports.TimeWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #909BA9;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  flex-direction: column;\n\n  @media (min-width: 576px) {\n    flex-direction: row;\n    font-size: 14px;\n  }\n"])));