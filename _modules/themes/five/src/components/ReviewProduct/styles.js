"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductReviewContainer = exports.ReviewProductContainer = exports.HandReviewWrapper = exports.HandReviewContent = exports.HandIconWrapper = exports.CommentsList = exports.Comments = exports.ButtonCustomized = exports.AdditionCommentsWrapper = exports.AddCommentHideShow = exports.ActionBlock = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Buttons = require("../../styles/Buttons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewProductContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.ReviewProductContainer = ReviewProductContainer;

var ActionBlock = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n\n  span {\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 16px;\n    user-select: none;\n  }\n\n  button {\n    font-size: 14px;\n    padding: 6px 20px;\n\n    svg {\n      color: white;\n      font-size: 21px;\n      vertical-align: middle;\n      margin-left: 8px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 8px;\n        transform: rotateZ(180deg);\n      "])));
});

exports.ActionBlock = ActionBlock;

var SingleProductReviewContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n"])));

exports.SingleProductReviewContainer = SingleProductReviewContainer;

var HandReviewWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    font-size: 15px;\n    color: ", ";\n    margin: 0;\n    color: #344050;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.headingColor;
});

exports.HandReviewWrapper = HandReviewWrapper;

var HandReviewContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.HandReviewContent = HandReviewContent;

var HandIconWrapper = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-left: 15px;\n\n  ", "\n\n  svg {\n    font-size: 24px;\n    color: #B1BCCC;\n    cursor: pointer;\n    transition: all 0.3s linear;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n    margin-left: 0;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme4;

    return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.primary;
  });
});

exports.HandIconWrapper = HandIconWrapper;

var AdditionCommentsWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral([""])));

exports.AdditionCommentsWrapper = AdditionCommentsWrapper;

var AddCommentHideShow = _styledComponents.default.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-decoration: underline;\n  text-align: center;\n  user-select: none;\n  cursor: pointer;\n  margin: 0;\n  transition: all 0.3s linear;\n  color: #909BA9;\n  font-size: 13px;\n\n  &:hover {\n    color: ", ";\n  }\n  \n  ", "\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.primary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme6;

    return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.primary;
  });
});

exports.AddCommentHideShow = AddCommentHideShow;

var Comments = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n\n  p {\n    margin-top: 0;\n    margin-bottom: 8px;\n    font-size: 14px;\n    color: #344050;\n  }\n\n  textarea {\n    width: 100%;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    min-height: 100px;\n  }\n"])));

exports.Comments = Comments;

var CommentsList = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));

exports.CommentsList = CommentsList;
var ButtonCustomized = (0, _styledComponents.default)(_Buttons.Button)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  border-radius: 50px;\n  margin-bottom: 18px;\n  margin-right: 18px;\n  font-size: 13px;\n  color: #414954;\n  background: #E9ECEF;\n  border: 1px solid #E9ECEF;\n  transition: all 0.3s linear;\n\n  ", "\n\n  svg {\n    vertical-align: middle;\n    margin-left: 5px;\n\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-left: 18px;\n    margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n    "])));
}, function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";\n    color: white;\n  "])), function (props) {
    var _props$theme9;

    return (_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.colors.primary;
  }, function (props) {
    var _props$theme10;

    return (_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.colors.primary;
  });
});
exports.ButtonCustomized = ButtonCustomized;