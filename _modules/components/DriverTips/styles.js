"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipCard = exports.DriverTipContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n  padding: 5px 30px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  text-transform: capitalize;\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  @media (max-width: 650px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 30px;\n    width: 30px;\n    border-radius: 100%;\n    padding: 10px;\n  }\n\n  @media (max-width: 360px) {\n    height: 25px;\n    width: 25px;\n    font-size: 14px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DriverTipContainer = _styledComponents.default.div(_templateObject());

exports.DriverTipContainer = DriverTipContainer;

var TipCard = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primaryContrast;
});

exports.TipCard = TipCard;