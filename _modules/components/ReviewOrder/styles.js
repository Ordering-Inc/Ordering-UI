"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvisibleInput = exports.Send = exports.Comments = exports.Stars = exports.Category = exports.Categories = exports.Reviews = exports.ReviewOrderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: fixed;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 20px 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 80%;\n  flex-direction: column;\n  > input {\n  width: 100%;\n  }\n\n  h2 {\n    text-transform: capitalize;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    > label {\n      > input {\n      display: none;\n      }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 80%;\n  align-items: baseline;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReviewOrderContainer = _styledComponents.default.form(_templateObject());

exports.ReviewOrderContainer = ReviewOrderContainer;

var Reviews = _styledComponents.default.div(_templateObject2());

exports.Reviews = Reviews;

var Categories = _styledComponents.default.div(_templateObject3());

exports.Categories = Categories;

var Category = _styledComponents.default.div(_templateObject4());

exports.Category = Category;

var Stars = _styledComponents.default.div(_templateObject5());

exports.Stars = Stars;

var Comments = _styledComponents.default.div(_templateObject6());

exports.Comments = Comments;

var Send = _styledComponents.default.div(_templateObject7());

exports.Send = Send;

var InvisibleInput = _styledComponents.default.input(_templateObject8());

exports.InvisibleInput = InvisibleInput;