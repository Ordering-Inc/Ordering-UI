"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFoundImage = exports.PageNotFoundText = exports.PageNotFoundContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  @media (min-width: 1024px) {\n    img {\n      width: 450px;\n      height: 450px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 12px;\n  border: 2px solid black;\n  padding: 10px;\n  position: relative;\n\n  h1{\n    font-size: 23px;\n    margin: 0px;\n    padding: 0px;\n    font-weight: 600;\n  }\n\n  img{\n    position: absolute;\n    top: 42px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 85%;\n  margin: auto;\n  height: ", ";\n\n  @media (min-width: 1024px) {\n    height: auto;\n    margin: 40px auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageNotFoundContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var width = _ref.width;
  return width > 820 ? 'calc(100vh - 65px)' : 'calc(100vh - 97px)';
});

exports.PageNotFoundContainer = PageNotFoundContainer;

var PageNotFoundText = _styledComponents.default.div(_templateObject2());

exports.PageNotFoundText = PageNotFoundText;

var PageNotFoundImage = _styledComponents.default.div(_templateObject3());

exports.PageNotFoundImage = PageNotFoundImage;