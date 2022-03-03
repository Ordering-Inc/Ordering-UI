"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransactionsWrapper = exports.SectionWrapper = exports.Container = exports.BalanceElement = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n"])));

exports.Container = Container;

var SectionWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n"])));

exports.SectionWrapper = SectionWrapper;

var TransactionsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-left: 2px solid ", ";\n"])), function (props) {
  return props.theme.colors.gray200;
});

exports.TransactionsWrapper = TransactionsWrapper;

var BalanceElement = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 250px;\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 8px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n  }\n\n  span {\n    font-size: 10px;\n    margin-left: 5px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});

exports.BalanceElement = BalanceElement;