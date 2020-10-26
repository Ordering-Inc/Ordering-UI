"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonBlock = exports.ProductActions = exports.ProductComment = exports.SectionTitle = exports.ProductEdition = exports.ProductInfo = exports.ProductImage = exports.WrapperImage = exports.ProductContainer = void 0;

var _polished = require("polished");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0px;\n  width: 100%;\n\n  div {\n    width: 30%;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    button.incdec {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border: 1px solid #000;\n      color: #000;\n      line-height: 0px;\n    }\n  }\n\n  button:disabled,\n  button.disabled {\n    opacity: 0.5;\n  }\n\n  button.add {\n    width: 65%;\n    padding: 5px 10px;\n    span:last-child {\n      float: right;\n      margin-right: 10px;\n    }\n    &.soldout {\n      width: 100%;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (max-width: 720px) {\n    flex-direction: column;\n    > * {\n      margin: 10px 0;\n    }\n    div {\n      width: 60%;\n      margin: 10px 0;\n      button.incdec {\n        width: 50px;\n        height: 50px;\n        font-size: 2em;\n        padding-bottom: 2px\n      }\n      span{\n        font-size: 2em;\n      }\n    }\n  }\n\n  @media (max-width: 576px) {\n    div {\n      button.incdec {\n        width: 35px;\n        height: 35px;\n      }\n      span{\n        font-size: 1.5em;\n      }\n    }\n    button.add {\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 480) {\n    div {\n      width: 80%;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n  textarea {\n    font-size: 16px;\n    font-weight: 300;\n    padding: 10px;\n    /* margin: 1px; */\n    border: 1px solid #CCC;\n    outline: none;\n    color: #555;\n    resize: none;\n\n    &:focus {\n      border-color: #555;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  padding: 15px;\n  margin: 0px;\n  font-weight: 600;\n  color: #333333;\n  background-color: #F7F7F7;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  overflow: auto;\n  .error {\n    background-color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: calc(50% - 20px);\n  padding: 10px;\n\n  h1 {\n    font-size: 24px;\n    font-weight: 500;\n    text-align: left;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-top: 0px;\n  }\n\n  p {\n    font-size: 16px;\n    font-weight: 200;\n    text-align: left;\n    margin-top: 0px;\n\n    line-height: 1.5em;\n    height: 3em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n}\n\n  @media (max-width: 1200px) {\n    width: 100%;\n    padding: 0px;\n    position: relative;\n    top: -38px;\n    margin-top: 10px;\n    h1 {\n      text-align: center;\n    }\n  }\n\n  @media (max-width: 410px) {\n    padding: 10px 0px;\n  }\n\n  @media (max-width: 380px) {\n    h1 {\n      font-size: 20px;\n    }\n    p {\n      font-size: 14px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    border-radius: 16px;\n    object-fit: cover;\n    height: 100%;\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 1201px) {\n    img {\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    height: 300px;\n\n    img {\n      object-fit: contain;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(50% - 10px);\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 1200px) {\n    width: 100%;\n    position: relative;\n    top: -38px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  max-height: 80vh;\n  position: relative;\n\n  @media (max-width: 1200px) {\n    flex-wrap: wrap;\n    overflow: auto;\n  }\n\n  @media (max-width: 480px) {\n    height: 90vh;\n    max-height: 100vh;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject());

exports.ProductContainer = ProductContainer;

var WrapperImage = _styledComponents.default.div(_templateObject2());

exports.WrapperImage = WrapperImage;

var ProductImage = _styledComponents.default.div(_templateObject3());

exports.ProductImage = ProductImage;

var ProductInfo = _styledComponents.default.div(_templateObject4());

exports.ProductInfo = ProductInfo;

var ProductEdition = _styledComponents.default.div(_templateObject5(), (0, _polished.lighten)(0.58, '#A52121'));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject6());

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject7());

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject8());

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject9(), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;