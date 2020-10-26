"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.ScoreDiv = exports.Scores = exports.Comment = exports.Comments = exports.ReviewContainer = exports.Content = exports.ReviewOf = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n    padding: 30px 0;\n    > div{\n      display: flex;\n      width: 100%;\n      justify-content: space-between;\n      align-items: center;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #ccc;\n  width: 22%;\n  height: auto;\n  border: 1px solid #ccc;\n  border-radius: 16px;\n  padding: 10px 0px;\n\n  p {\n    margin: 0px;\n  }\n\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    svg {\n      margin-right: 5px;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  flex: 1;\n  text-align: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 60%;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 100%;\n  overflow: hidden;\n\n  div p {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      margin-right: 5px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  flex: 1;\n  padding: 30px 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  > h3 {\n    color: \"#D81212\";\n  }\n"]);

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

var ReviewContainer = _styledComponents.default.div(_templateObject3());

exports.ReviewContainer = ReviewContainer;

var Comments = _styledComponents.default.div(_templateObject4());

exports.Comments = Comments;

var Comment = _styledComponents.default.div(_templateObject5());

exports.Comment = Comment;

var Scores = _styledComponents.default.div(_templateObject6());

exports.Scores = Scores;

var ScoreDiv = _styledComponents.default.div(_templateObject7());

exports.ScoreDiv = ScoreDiv;

var SkeletonContainer = _styledComponents.default.div(_templateObject8());

exports.SkeletonContainer = SkeletonContainer;