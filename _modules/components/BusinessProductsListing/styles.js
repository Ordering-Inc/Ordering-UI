"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonItem = exports.ProductLoading = exports.ProductsNotFound = exports.WrapperSearch = exports.WrapContent = exports.ProductsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 0px auto 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (max-width: 410px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    h1 {\n      font-size: 20px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 15px;\n  background: #F8F8F8;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 20px auto 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents.default.div(_templateObject());

exports.ProductsContainer = ProductsContainer;

var WrapContent = _styledComponents.default.div(_templateObject2());

exports.WrapContent = WrapContent;

var WrapperSearch = _styledComponents.default.div(_templateObject3());

exports.WrapperSearch = WrapperSearch;

var ProductsNotFound = _styledComponents.default.div(_templateObject4());

exports.ProductsNotFound = ProductsNotFound;

var ProductLoading = _styledComponents.default.div(_templateObject5());

exports.ProductLoading = ProductLoading;

var SkeletonItem = _styledComponents.default.div(_templateObject6());

exports.SkeletonItem = SkeletonItem;