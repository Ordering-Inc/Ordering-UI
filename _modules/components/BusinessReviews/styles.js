"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.ScoreDiv = exports.Scores = exports.ScoresContainer = exports.Comment = exports.Comments = exports.ReviewContainer = exports.ReviewsNotFound = exports.Review = exports.Content = exports.WrapperSelect = exports.WrapperStars = exports.ReviewOf = exports.BusinessReviewsContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n\n    > div{\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n    }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n       margin-left: 5px;\n       margin-right: 0;\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #ccc;\n  width: 20%;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 16px;\n  padding: 10px;\n  margin-bottom: 10px;\n  font-size: 16px;\n\n  p {\n    margin: 0px;\n  }\n\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n      margin-right: 5px;\n      font-size: 18px;\n      ", "\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n  width: 800px;\n  margin: 10px auto;\n\n  @media (min-width: 768px){\n    width: 100%;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  overflow-x: auto;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 480px){\n    width: 60%;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  overflow: hidden;\n\n  h4 {\n    margin: 10px 0 5px 0;\n  }\n\n  div p {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px 0;\n    svg {\n      margin-right: 5px;\n      font-size: 24px;\n      ", "\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 75px 0;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px 0;\n  @media (min-width: 480px){\n    margin: 40px 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-direction: column;\n  \n  h3{\n    display: none;\n  }\n\n  @media (min-width: 480px){\n    h3 {\n      display: block;\n      color: ", ";\n      margin: 0px;\n      svg{\n        font-size: 26px;\n        vertical-align: text-top;\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 10px 0px;\n  > div {\n    width: 100%;\n  }\n  @media (min-width: 480px){\n    width: 45%;\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 40%;\n  text-align: right;\n  color: ", ";\n  svg{\n    font-size: 28px;\n    vertical-align: bottom;\n  }\n  @media (min-width: 480px){\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0px; \n  h3 {\n    margin: 0px;\n    font-size: 16px;\n  }\n\n  > div {\n    width: 30%;\n  }\n\n  span {\n    display: none;\n    width: 30%;\n    margin-right: 5px;\n    ", "\n    > div {\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 480px){\n    span{\n      display: block;\n    } \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow-x: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessReviewsContainer = _styledComponents.default.div(_templateObject());

exports.BusinessReviewsContainer = BusinessReviewsContainer;

var ReviewOf = _styledComponents.default.div(_templateObject2(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3());
});

exports.ReviewOf = ReviewOf;

var WrapperStars = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.primary;
});

exports.WrapperStars = WrapperStars;

var WrapperSelect = _styledComponents.default.div(_templateObject5());

exports.WrapperSelect = WrapperSelect;

var Content = _styledComponents.default.div(_templateObject6(), function (props) {
  return props.theme.colors.primary;
});

exports.Content = Content;

var Review = _styledComponents.default.div(_templateObject7());

exports.Review = Review;

var ReviewsNotFound = _styledComponents.default.h2(_templateObject8());

exports.ReviewsNotFound = ReviewsNotFound;

var ReviewContainer = _styledComponents.default.div(_templateObject9());

exports.ReviewContainer = ReviewContainer;

var Comments = _styledComponents.default.div(_templateObject10(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11());
});

exports.Comments = Comments;

var Comment = _styledComponents.default.div(_templateObject12());

exports.Comment = Comment;

var ScoresContainer = _styledComponents.default.div(_templateObject13());

exports.ScoresContainer = ScoresContainer;

var Scores = _styledComponents.default.div(_templateObject14());

exports.Scores = Scores;

var ScoreDiv = _styledComponents.default.div(_templateObject15(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject16());
});

exports.ScoreDiv = ScoreDiv;

var SkeletonContainer = _styledComponents.default.div(_templateObject17());

exports.SkeletonContainer = SkeletonContainer;