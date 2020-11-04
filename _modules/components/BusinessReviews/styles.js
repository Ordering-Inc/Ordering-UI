"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.ScoreDiv = exports.Scores = exports.Comment = exports.Comments = exports.ReviewContainer = exports.ReviewsNotFound = exports.Content = exports.ReviewOf = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n    padding: 30px 0;\n    > div{\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n       margin-left: 5px;\n       margin-right: 0;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #ccc;\n  width: 22%;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 16px;\n  padding: 10px 0px;\n\n  p {\n    margin: 0px;\n  }\n\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  @media(max-width: 768px){\n    font-size: 14px;\n  }\n\n  @media(max-width: 480px){\n    width: 44%;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex: 1;\n  text-align: center;\n  @media (max-width: 480px){\n    flex-wrap: wrap;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 60%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  overflow: hidden;\n\n  div p {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      margin-right: 5px;\n      ", "\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n  padding: 30px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 50px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  > h3 {\n    color: \"#D81212\";\n  }\n  min-height: 180px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > div {\n    width: 30%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewOf = _styledComponents.default.div(_templateObject());

exports.ReviewOf = ReviewOf;

var Content = _styledComponents.default.div(_templateObject2());

exports.Content = Content;

var ReviewsNotFound = _styledComponents.default.h2(_templateObject3());

exports.ReviewsNotFound = ReviewsNotFound;

var ReviewContainer = _styledComponents.default.div(_templateObject4());

exports.ReviewContainer = ReviewContainer;

var Comments = _styledComponents.default.div(_templateObject5(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6());
});

exports.Comments = Comments;

var Comment = _styledComponents.default.div(_templateObject7());

exports.Comment = Comment;

var Scores = _styledComponents.default.div(_templateObject8());

exports.Scores = Scores;

var ScoreDiv = _styledComponents.default.div(_templateObject9(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10());
});

exports.ScoreDiv = ScoreDiv;

var SkeletonContainer = _styledComponents.default.div(_templateObject11());

exports.SkeletonContainer = SkeletonContainer;