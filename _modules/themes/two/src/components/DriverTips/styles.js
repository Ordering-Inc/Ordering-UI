"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipCard = exports.DriverTipContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DriverTipContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n  background: ", ";\n  border-radius: 25px;\n  height: 40px;\n"])), function (props) {
  return props.theme.colors.secondary;
});

exports.DriverTipContainer = DriverTipContainer;

var TipCard = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 25px;\n  cursor: pointer;\n  text-transform: capitalize;\n  height: 100%;\n  font-size: 14px;\n  width: 25%;\n\n  &.active {\n    background: ", ";\n    color: #fff;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.TipCard = TipCard;