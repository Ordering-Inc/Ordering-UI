"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.SearchContainer = exports.ReviewsProgressWrapper = exports.ReviewsProgressContent = exports.ReviewsProgressBar = exports.ReviewsNotFound = exports.ReviewsMarkPoint = exports.ReviewsHeaderWrapper = exports.ReviewTime = exports.ReviewOf = exports.ReviewItemHeader = exports.ReviewItemContent = exports.Review = exports.Content = exports.BusinessReviewsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessReviewsContainer = exports.BusinessReviewsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow-x: hidden;\n  padding: 0;\n  box-sizing: border-box;\n\n  @media (min-width: 576px) {\n    padding: 0 6px;\n  }\n"])));
var ReviewOf = exports.ReviewOf = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
var Content = exports.Content = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-direction: column;\n  \n  h3{\n    display: none;\n  }\n\n  @media (min-width: 480px){\n    h3 {\n      display: block;\n      color: ", ";\n      margin: 0px;\n      svg{\n        font-size: 26px;\n        vertical-align: text-top;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Review = exports.Review = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 10px 0;\n  @media (min-width: 480px){\n    margin: 20px 0;\n  }\n"])));
var ReviewsNotFound = exports.ReviewsNotFound = _styledComponents.default.h2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 65px 0;\n  font-size: 14px;\n  color: #B1BCCC;\n  text-align: center;\n"])));
var SkeletonContainer = exports.SkeletonContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n\n    > div{\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n    }\n"])));
var ReviewsHeaderWrapper = exports.ReviewsHeaderWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 30px;\n  ", "\n\n  svg {\n    font-size: 30px;\n    color: ", ";\n    margin-right: 13px;\n    ", "\n  }\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    margin: 10px 0;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n       margin-left: 13px;\n       margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.darkTextColor;
}, function (_ref) {
  var noReviews = _ref.noReviews;
  return noReviews && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    svg {\n      color: #B1BCCC;\n    }\n  "])));
});
var ReviewsProgressWrapper = exports.ReviewsProgressWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  p {\n    margin-top: 0;\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.darkTextColor;
});
var ReviewsProgressContent = exports.ReviewsProgressContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  background: #E9ECEF;\n  border-radius: 50px;\n  width: 100%;\n  height: 4px;\n  position: relative;\n  margin-bottom: 30px;\n"])));
var ReviewsProgressBar = exports.ReviewsProgressBar = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  height: 4px;\n  border-radius: 50px;\n  background: #344050;\n"])));
var ReviewsMarkPoint = exports.ReviewsMarkPoint = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 15px;\n  font-size: 12px;\n  color: #CED4DA;\n"])));
var ReviewTime = exports.ReviewTime = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: #909BA9;\n  margin: 0;\n"])));
var ReviewItemHeader = exports.ReviewItemHeader = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-bottom: 17px;\n"])));
var ReviewItemContent = exports.ReviewItemContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: ", ";\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.darkTextColor;
});
var SearchContainer = exports.SearchContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin: 35px 0;\n  \n  input {\n    outline: none;\n    border: none;\n    border-bottom: 1px solid #E9ECEF;\n    border-radius: 0px;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-size: 20px 18px;\n    background-position: left center;\n    box-sizing: border-box;\n    padding: 7px 0 7px 30px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      padding: 7px 30px 7px 0;\n      background-position: right center;\n    "])));
});