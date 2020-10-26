"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n\n  h1 {\n    margin: 0px 10px 0px 0px;\n  }\n\n  h1,\n  svg {\n    font-size: 24px;\n  }\n\n  svg.edit {\n    color: #F2BB40;\n    cursor: pointer;\n  }\n  svg.cancel {\n    color: #D81212;\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  form {\n    input {\n      width: 70%;\n      &:disabled {\n        background-color: rgba(239, 239, 239, 0.3);\n        cursor: not-allowed;\n      }\n    }\n    button {\n      width: 70%;\n      &:disabled {\n        opacity: 0.5;\n        cursor: not-allowed;\n      }\n    }\n  }\n  @media (max-width: 760px) {\n    margin-bottom: 25px;\n    form {\n      input,\n      button {\n        width: 100%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var Header = _styledComponents.default.div(_templateObject2());

exports.Header = Header;