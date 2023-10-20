"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.TermsConditionWrapper = exports.SkeletonWrapper = exports.SignupBusinessContainer = exports.SignUpHeroWrapper = exports.SignUpHeroStyled = exports.SignUpHero = exports.ReCaptchaWrapper = exports.PhoneNumberWrapper = exports.FormSide = exports.FormInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SignupBusinessContainer = exports.SignupBusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  padding: 10px 15px;\n\n  > div {\n    width: 100%;\n  }\n\n  @media (min-width: 993px) {\n    flex-direction: row;\n    padding: 120px 70px;\n    > div {\n      width: 50%;\n    }\n  }\n"])));
var SignUpHeroWrapper = exports.SignUpHeroWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  padding: 70px 0 0 0;\n  box-sizing: border-box;\n\n  @media (min-width: 993px) {\n    padding-right: 70px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding-right: 0px;\n      padding-left: 70px;\n    "])));
});
var SignUpHeroStyled = exports.SignUpHeroStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 380px;\n  border-radius: 7.6px;\n\n  ", "\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var SignUpHero = exports.SignUpHero = function SignUpHero(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(SignUpHeroStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var FormInput = exports.FormInput = _styledComponents.default.form(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  div.phone_number {\n    margin: 10px 0px;\n    width: 100%;\n  }\n\n  input.form:not(:last-child) {\n    margin: 10px 0px;\n    padding: 8px 20px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n"])));
var PhoneNumberWrapper = exports.PhoneNumberWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  .PhoneInput {\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    background: white;\n\n    .PhoneInputCountry {\n      padding-left: 20px;\n      ", "\n    }\n\n    input {\n      border: none;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        padding-left: 0;\n        padding-right: 20px;\n      "])));
});
var ReCaptchaWrapper = exports.ReCaptchaWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));
var WrapperPassword = exports.WrapperPassword = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px;\n  }\n"])));
var TogglePassword = exports.TogglePassword = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  padding: 10px 0;\n  color: #333;\n  font-size: 26px;\n  transform: translate(-150%, 10%);\n  max-height: 100%;\n  ", "\n  span{\n    cursor: pointer;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    transform: translate(150%, 10%);\n  "])));
});
var TermsConditionWrapper = exports.TermsConditionWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n\n  > label {\n    font-size: 14px;\n    ", "\n\n    > span:first-child {\n      font-weight: 500;\n      ", "\n    }\n\n    > a {\n      color: ", " !important;\n    }\n  }\n\n  @media (min-width: 768px) {\n    > label {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-right: 7px;\n    "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 7px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-left: 7px;\n      "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-right: 7px;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  span{\n    margin: 10px 0;\n    border-radius: 7.6px;\n  }\n"])));
var FormSide = exports.FormSide = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  > h1 {\n    width: 100%;\n    margin-bottom: 25px;\n    margin-top: 15;\n    font-weight: 500;\n    font-size: 24px;\n  }\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    width: 45%;\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin: 20px 0px;\n    "])));
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup ? '0.9em' : '1em';
});