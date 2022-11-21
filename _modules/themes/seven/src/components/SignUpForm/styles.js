"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.WrapperBirthday = exports.TogglePassword = exports.Terms = exports.SocialButtons = exports.SkeletonWrapper = exports.SkeletonSocialWrapper = exports.SignUpContainer = exports.RedirectLink = exports.ReCaptchaWrapper = exports.FormTitle = exports.FormSide = exports.FormInput = exports.FormInline = exports.FormBottom = exports.ConditionCheck = exports.AccountLogin = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SignUpContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  box-sizing: border-box;\n  padding: 20px;\n  min-height: ", ";\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 850px) {\n    min-height: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    min-height: ", ";\n  }\n\n  >* {\n    box-sizing: border-box;\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : 'auto';
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '500px' : 'calc(94vh - 70px)';
}, function (_ref3) {
  var isPopup = _ref3.isPopup;
  return isPopup ? '500px' : 'calc(80vh - 90px)';
});
exports.SignUpContainer = SignUpContainer;
var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var FormSide = (0, _styledComponents.default)(Side)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    width: ", ";\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin: 0px;\n    "])));
}, function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '100%' : '45%';
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;
var FormInput = _styledComponents.default.form(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n\n  input {\n    height: 38px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    position: relative;\n  }\n  \n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n"])));
exports.FormInput = FormInput;
var RedirectLink = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  width: 100%;\n"])));
exports.RedirectLink = RedirectLink;
var SocialButtons = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n   width: 100%;\n  button {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n    border-radius: 0px;\n    background-color: transparent;\n    border: 1px solid;\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n      margin: 0 10px;\n    }\n  }\n\n  button:first-child{\n    border-color: #365988;\n    color: #365988;\n    font-weight: 700;\n  }\n\n  button:nth-child(2){\n    border-color: #000000;\n    color: #000000;\n    font-weight: 700;\n  }\n\n  button:nth-child(2){\n    border-color: #666666;\n    color: #666666;\n    font-weight: 700;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n"])));
exports.SocialButtons = SocialButtons;
var SkeletonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  span{\n    margin: 10px 0;\n    border-radius: 0px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var SkeletonSocialWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  span{\n    border-radius: 0px;\n    margin-bottom: 10px\n  }\n\n  @media (min-width: 768px) {\n    margin-top: 40px;\n  }\n"])));
exports.SkeletonSocialWrapper = SkeletonSocialWrapper;
var WrapperPassword = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  input{\n    box-sizing: border-box;\n    padding-right: 40px;\n  }\n"])));
exports.WrapperPassword = WrapperPassword;
var TogglePassword = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 4px;\n  right: 10px;\n  font-weight: 300;\n  color: #333;\n  font-size: 26px;\n  max-height: 100%;\n  \n  span{\n    cursor: pointer;\n  }\n\n  @media (min-width: 768px) {\n    top: 4px;\n  } \n"])));
exports.TogglePassword = TogglePassword;
var ReCaptchaWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 12px auto;\n"])));
exports.ReCaptchaWrapper = ReCaptchaWrapper;
var FormTitle = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 28px;\n  text-transform: uppercase;\n  color: ", ";\n  margin-top: 10px;\n  margin-bottom: 20px;\n  @media (min-width: 768px) {\n    font-size: 24px;\n    line-height: 34px;\n    margin-top: 30px;\n    margin-bottom: 25px;\n    width: 100%;\n  }\n\n  @media (min-width: 1440px) {\n    width: 75%;\n    margin-right: auto;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-right: unset;\n        margin-left: auto;\n    "])));
});
exports.FormTitle = FormTitle;
var FormInline = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  width: 100%;\n  margin-bottom: 15px;\n\n  button {\n    width: 100%;\n    padding: 5px;\n  }\n\n  .forgot {\n    span {\n      color: ", ";\n      width: 100%;\n    }\n\n    a {\n      position: absolute;\n      z-index: 10;\n      opacity: 0;\n      text-decoration: none;\n      width: 100%;\n    }\n  }\n\n  .phone_number {\n    width: 100%;\n    .PhoneInputInput {\n      font-size: 14px;\n      padding: 10px 11px;\n    }\n  }\n\n\n\n\n\n  @media (min-width: 768px) {\n    width: 48.6795%;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.FormInline = FormInline;
var FormBottom = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 10px 0;\n  border: 1px solid ", ";\n  border-left: none;\n  border-right: none;\n  align-items: center;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.FormBottom = FormBottom;
var AccountLogin = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  a {\n    position: absolute;\n    z-index: 10;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n  }\n  button {\n    font-size: 16px;\n    line-height: 26px;\n    color: #666666;\n    padding: 11px 14px;\n    border-radius: 0;\n    background-color: transparent;\n  }\n"])));
exports.AccountLogin = AccountLogin;
var WrapperBirthday = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  .react-datepicker-popper {\n    display: block;\n  }\n\n  .birthdate-input::placeholder {\n      color: #dbdcdb;\n  }\n"])));
exports.WrapperBirthday = WrapperBirthday;
var ConditionCheck = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 10px;\n  cursor: pointer;\n  span {\n    display: flex;\n    font-size: 14px;\n    align-items: center;\n  }\n  .condition-checkbox {\n    color: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 20px;\n  }\n  .condition-link-text {\n    margin: 0 6px;\n  }\n  .condition-link {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.ConditionCheck = ConditionCheck;
var Terms = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n  height: 150px;\n  overflow-y: scroll;\n"])));
exports.Terms = Terms;