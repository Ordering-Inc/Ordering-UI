"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapAllCategories = exports.ProductsListing = exports.ErrorMessage = exports.ProductsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  h3 {\n    margin-left: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: '#F8F8F8'\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsContainer = _styledComponents.default.div(_templateObject());

exports.ProductsContainer = ProductsContainer;

var ErrorMessage = _styledComponents.default.div(_templateObject2());

exports.ErrorMessage = ErrorMessage;

var ProductsListing = _styledComponents.default.div(_templateObject3());

exports.ProductsListing = ProductsListing;

var WrapAllCategories = _styledComponents.default.div(_templateObject4());

exports.WrapAllCategories = WrapAllCategories;