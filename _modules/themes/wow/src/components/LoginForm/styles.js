"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPassword = exports.TogglePassword = exports.TitleContainer = exports.SocialButtons = exports.SkeletonSocialWrapper = exports.RedirectLink = exports.LoginWith = exports.LoginContainer = exports.HeroSideStyled = exports.HeroSide = exports.FormSideContainer = exports.FormSide = exports.FormInput = exports.BackButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    min-height: ", ";\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '500px' : 'calc(100vh - 56px)';
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '500px' : 'calc(100vh - 65px)';
});

exports.LoginContainer = LoginContainer;

var Side = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

var HeroSideStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  dispaly: none;\n  @media (min-width: 992px) {\n    width: 50%;\n    height: calc(100vh - 69px);\n   \n    ", "\n  }\n"])), function (_ref3) {
  var bgimage = _ref3.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      background-repeat: no-repeat, repeat;\n      background-size: cover;\n      object-fit: cover;\n      background-position: center;\n    "])));
});

exports.HeroSideStyled = HeroSideStyled;

var HeroSide = function HeroSide(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(HeroSideStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.HeroSide = HeroSide;

var FormSideContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  min-height: inherit;\n  display: flex;\n  @media (min-width: 992px) {\n    width: 50%;\n  }\n"])));

exports.FormSideContainer = FormSideContainer;
var FormSide = (0, _styledComponents.default)(Side)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px){\n    font-size: ", ";\n  }\n"])), function (_ref4) {
  var isPopup = _ref4.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin: 20px 0px;\n    "])));
}, function (_ref5) {
  var isPopup = _ref5.isPopup;
  return isPopup ? '12px' : '1em';
}, function (_ref6) {
  var isPopup = _ref6.isPopup;
  return isPopup ? '0.9em' : '1em';
});
exports.FormSide = FormSide;

var LoginWith = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 14px;\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (_ref7) {
  var isPopup = _ref7.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref8) {
  var isPopup = _ref8.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      font-size: 17px;\n    "])));
});

exports.LoginWith = LoginWith;

var FormInput = _styledComponents.default.form(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  > div {\n    margin: 10px 0px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n    font-weight: 600;\n  }\n\n  input {\n    width: 100%;\n    box-sizing: border-box;\n  }\n"])), function (_ref9) {
  var isPopup = _ref9.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.FormInput = FormInput;

var RedirectLink = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin: 0px;\n  font-size: 17px;\n\n  span {\n    margin-right: 5px;\n\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (min-width: 425px) {\n    flex-direction: row;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: ", ";\n    flex-direction: row;\n  }\n\n  @media (min-width: 1200px) {\n    ", ";\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref10) {
  var register = _ref10.register;
  return register && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    width: calc(90% - 20px);\n\n    @media (min-width: 481px) {\n      width: ", ";\n    }\n  "])), function (_ref11) {
    var isPopup = _ref11.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(80% - 20px)';
  });
}, function (_ref12) {
  var isPopup = _ref12.isPopup;
  return isPopup ? '13px' : '18px';
}, function (_ref13) {
  var isPopup = _ref13.isPopup;
  return isPopup && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      font-size: 16px;\n    "])));
});

exports.RedirectLink = RedirectLink;

var SocialButtons = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n   width: ", ";\n   margin-top: 10px;\n\n  button {\n    display: flex;\n    justify-content: start;\n    width: 100%;\n    padding: 5px 30px;\n    color: #000000;\n\n    img {\n      width: 30px;\n    }\n\n    div {\n      font-size: 0.8em;\n    }\n  }\n"])), function (_ref14) {
  var isPopup = _ref14.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SocialButtons = SocialButtons;

var SkeletonSocialWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: ", ";\n  span{\n    border-radius: 30px;\n  }\n"])), function (_ref15) {
  var isPopup = _ref15.isPopup;
  return isPopup ? '90%' : '80%';
});

exports.SkeletonSocialWrapper = SkeletonSocialWrapper;

var TogglePassword = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  font-weight: 300;\n  color: #333;\n  font-size: 26px;\n  max-height: 100%;\n  cursor: pointer;\n  top: 4px;\n  ", "\n  svg {\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      left: 10px;\n    "]))) : "\n      right: 10px;\n    ";
}, function (props) {
  return props.theme.colors.primary;
});

exports.TogglePassword = TogglePassword;

var WrapperPassword = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n\n  input{\n    box-sizing: border-box;\n    width: 100%;\n    padding-right: 40px;\n  }\n"])));

exports.WrapperPassword = WrapperPassword;

var TitleContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 80%;\n  h1 {\n    font-weight: 600;\n    font-size: 32px;\n    margin: 10px 0;\n    color: ", ";\n  }\n\n  p {\n    color: ", ";\n    margin: 0 0 30px 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.grayColor;
});

exports.TitleContainer = TitleContainer;

var BackButton = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  position: absolute;\n  color: ", ";\n  font-weight: 600;\n  font-size: 18px;\n  top: 25px;\n  ", "\n  display: flex;\n  align-items: center;\n\n  span {\n    padding: 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    right: 25px;\n  "]))) : "\n    left: 25px;\n  ";
});

exports.BackButton = BackButton;