"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Map = exports.Header = exports.AddressContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: bold;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  svg {\n    color: #F2BB40;\n    margin-left: 5px;\n    font-size: 24px;\n  }\n  span {\n    font-size: 18px;\n    color: ", ";\n    margin-left: 5px;\n  }\n\n  @media (max-width: 580px) {\n    font-size: 18px;\n  }\n\n  @media (max-width: 410px) {\n    font-size: 16px;\n    span {\n      font-size: 16px;\n    }\n  }\n  @media (max-width: 370px) {\n    font-size: 14px;\n    span {\n      font-size: 14px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  img {\n    width: 100%;\n    height: 220px;\n    object-fit: cover;\n    border-radius: 15px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddressContainer = _styledComponents.default.div(_templateObject());

exports.AddressContainer = AddressContainer;

var Header = _styledComponents.default.div(_templateObject2());

exports.Header = Header;

var Map = _styledComponents.default.div(_templateObject3());

exports.Map = Map;

var Text = _styledComponents.default.h1(_templateObject4(), function (props) {
  return props.theme.colors.primary;
});

exports.Text = Text;