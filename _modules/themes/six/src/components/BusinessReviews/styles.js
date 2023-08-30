"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperStars = exports.TotalStar = exports.SkeletonContainer = exports.ScoresContainer = exports.Scores = exports.ScoreDiv = exports.ReviewsNotFound = exports.ReviewOf = exports.ReviewContainer = exports.Content = exports.Comments = exports.Comment = exports.BusinessReviewsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessReviewsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow-x: hidden;\n"])));
exports.BusinessReviewsContainer = BusinessReviewsContainer;
var ReviewOf = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column ;\n  padding: 25px 25px 12px;\n"])));
exports.ReviewOf = ReviewOf;
var WrapperStars = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n  h3 {\n    margin: 0;\n    display: flex;\n    align-items: center;\n    svg {\n      font-size: 1.2rem\n    }\n  }\n \n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WrapperStars = WrapperStars;
var Content = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.Content = Content;
var ReviewsNotFound = _styledComponents.default.h2(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 75px 0;\n"])));
exports.ReviewsNotFound = ReviewsNotFound;
var ReviewContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"])));
exports.ReviewContainer = ReviewContainer;
var Comments = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  overflow: hidden;\n"])));
exports.Comments = Comments;
var TotalStar = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 1rem;\n  background: #DEE2E6;\n  padding: 7px 25px;\n  color: #6C757D;\n  font-weight: bold;\n  svg {\n    margin: 0 3px;\n  }\n"])));
exports.TotalStar = TotalStar;
var Comment = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0px 25px;\n"])));
exports.Comment = Comment;
var ScoresContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  overflow-x: auto;\n  padding: 0px 25px;\n"])));
exports.ScoresContainer = ScoresContainer;
var Scores = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  width: 736px;\n  margin: 10px auto;\n\n  @media (min-width: 1024px){\n    width: 100%;\n    flex-wrap: wrap;\n  }\n"])));
exports.Scores = Scores;
var ScoreDiv = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #ccc;\n  width: 21%;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 16px;\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 16px;\n\n  p {\n    margin: 0px;    \n  }\n\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n      margin-right: 5px;\n      font-size: 18px;\n      ", "\n    }\n  }\n\n  @media (min-width: 1024px){\n    width: 42%;\n  }\n\n  @media (min-width: 1200px){\n    width: 44%;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n       margin-left: 5px;\n       margin-right: 0;\n    "])));
});
exports.ScoreDiv = ScoreDiv;
var SkeletonContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n\n    > div{\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n    }\n"])));
exports.SkeletonContainer = SkeletonContainer;