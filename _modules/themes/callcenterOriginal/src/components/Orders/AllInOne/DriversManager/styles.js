"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriversList = exports.FilterContainer = exports.DriversHeader = exports.DriversContent = exports.DriversContainer = exports.DriverListContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DriversContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n"])));
exports.DriversContainer = DriversContainer;
var DriversHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  > div:last-child {\n    margin-top: 20px;\n  }\n  input {\n    background: ", ";\n    border: none;\n  }\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    > div:last-child {\n      margin-top: 0px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.DriversHeader = DriversHeader;
var DriversContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));
exports.DriversContent = DriversContent;
var DriverListContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow: hidden;\n  margin-top: 20px;\n  @media (min-width: 992px) {\n    width: 350px;\n    max-width: 350px;\n    margin-top: 0px;\n  }\n"])));
exports.DriverListContainer = DriverListContainer;
var FilterContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0px;\n  background: ", ";\n  z-index: 100;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.FilterContainer = FilterContainer;
var WrapperDriversList = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow-x: hidden;\n  @media (min-width: 992px) {\n    max-height: calc(var(--vh, 1vh) * 100 - 410px);\n  }\n"])));
exports.WrapperDriversList = WrapperDriversList;