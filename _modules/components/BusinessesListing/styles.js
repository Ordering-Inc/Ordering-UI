"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundBusinesses = exports.ErrorMessage = exports.WrapperSearch = exports.BusinessList = exports.BusinessContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100vh;\n  margin: 10px auto;\n\n  div.image {\n    max-width: 300px;\n    max-width: 300px;\n\n    img {\n      width: 300px;\n    }\n  }\n\n  h1 {\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  div {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      padding: 2px 60px;\n    }\n  }\n\n  @media (max-width: 576px) {\n    width: 80%;\n    h1 {\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    h1 {\n      font-size: 20px;\n    }\n    div button {\n      padding-left: 40px;\n      padding-right: 40px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px 20px 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessContainer = _styledComponents.default.div(_templateObject());

exports.BusinessContainer = BusinessContainer;

var BusinessList = _styledComponents.default.div(_templateObject2());

exports.BusinessList = BusinessList;

var WrapperSearch = _styledComponents.default.div(_templateObject3());

exports.WrapperSearch = WrapperSearch;

var ErrorMessage = _styledComponents.default.span(_templateObject4());

exports.ErrorMessage = ErrorMessage;

var NotFoundBusinesses = _styledComponents.default.div(_templateObject5());

exports.NotFoundBusinesses = NotFoundBusinesses;