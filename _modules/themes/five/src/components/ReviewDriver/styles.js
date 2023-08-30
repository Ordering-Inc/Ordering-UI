"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriverPhoto = exports.ReviewsProgressWrapper = exports.ReviewsProgressContent = exports.ReviewsProgressBar = exports.ReviewsMarkPoint = exports.ReviewDriverContainer = exports.LogoAndReviewWrapper = exports.DriverPhoto = exports.DriverInfoBlock = exports.CommentsList = exports.Comments = exports.CommentButton = exports.ActionBtnWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Buttons = require("../../styles/Buttons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ReviewDriverContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"])));
exports.ReviewDriverContainer = ReviewDriverContainer;
var Comments = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  margin-top: 10px;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 15px;\n    color: ", ";\n  }\n\n  textarea {\n    min-height: 104px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.darkTextColor;
});
exports.Comments = Comments;
var ActionBtnWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  width: 100%;\n\n  button {\n    font-size: 14px;\n    padding: 6px 20px;\n    width: 100%;\n  }\n"])));
exports.ActionBtnWrapper = ActionBtnWrapper;
var DriverPhotoStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 124px;\n  height: 124px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 124px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    width: 100%;\n    height: 100%;\n    min-height: 124px;\n  }\n"])));
var DriverPhoto = function DriverPhoto(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(DriverPhotoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.DriverPhoto = DriverPhoto;
var WrapperDriverPhoto = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 124px;\n  height: 124px;\n  min-height: 124px;\n  max-width: 124px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  svg {\n    width: 124px;\n    height: 124px;\n  }\n"])));
exports.WrapperDriverPhoto = WrapperDriverPhoto;
var ReviewsProgressWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 50px;\n  margin-bottom: 35px;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 17px;\n    font-size: 15px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
});
exports.ReviewsProgressWrapper = ReviewsProgressWrapper;
var ReviewsProgressContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: #E9ECEF;\n  border-radius: 50px;\n  width: 100%;\n  height: 6px;\n  position: relative;\n  margin-bottom: 30px;\n"])));
exports.ReviewsProgressContent = ReviewsProgressContent;
var ReviewsProgressBar = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  height: 6px;\n  border-radius: 50px;\n  background: #344050;\n  transition: all 0.2s linear;\n"])));
exports.ReviewsProgressBar = ReviewsProgressBar;
var ReviewsMarkPoint = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 15px;\n  font-size: 12px;\n  color: #CED4DA;\n  cursor: pointer;\n\n  ", "\n\n  &.mark-point {\n    span {\n      position: relative;\n      margin-left: -50%;\n      ", "\n\n      > span {\n        position: absolute;\n        height: 6px;\n        top: -15px;\n        width: 2px;\n        background: #CED4DA;\n        transition: all 0.3s;\n      }\n    }\n  }\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    > span {\n      color: #344050;\n    }\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        margin-right: -50%;\n        margin-left: 0;\n      "])));
}, function (_ref2) {
  var pass = _ref2.pass;
  return pass && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    span {\n      > span {\n        background: transparent !important;\n      }\n    }\n  "])));
});
exports.ReviewsMarkPoint = ReviewsMarkPoint;
var LogoAndReviewWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
exports.LogoAndReviewWrapper = LogoAndReviewWrapper;
var CommentsList = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n    font-size: 15px;\n    color: ", ";\n  }\n\n  button {\n    border-radius: 50px;\n    margin-bottom: 18px;\n    margin-right: 40px;\n  \n    ", "\n\n    svg {\n      vertical-align: middle;\n      margin-left: 5px;\n\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.darkTextColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});
exports.CommentsList = CommentsList;
var DriverInfoBlock = _styledComponents.default.p(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 16px;\n  margin-bottom: 0;\n  font-size: 14px;\n  text-align: center;\n  color: #344050;\n"])));
exports.DriverInfoBlock = DriverInfoBlock;
var CommentButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  margin-bottom: 18px;\n  margin-right: 18px;\n  font-size: 13px;\n  color: #414954;\n  background: #E9ECEF;\n  border: 1px solid #E9ECEF;\n  transition: all 0.3s linear;\n\n  ", "\n\n  svg {\n    vertical-align: middle;\n    margin-left: 5px;\n\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    margin-left: 18px;\n    margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";\n    color: white;\n  "])), function (props) {
    var _props$theme9;
    return (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.colors.primary;
  }, function (props) {
    var _props$theme10;
    return (_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.colors.primary;
  });
});
exports.CommentButton = CommentButton;