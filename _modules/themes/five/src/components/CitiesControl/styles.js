"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBarContainer = exports.Container = exports.CityItem = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var CityItem = exports.CityItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 15px 0px;\n  cursor: pointer;\n  span {\n    margin-right: 15px;\n  }\n  .city-checked{\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: sticky;\n  bottom: 0;\n  svg {\n    position: absolute;\n    right: 10px;\n    top: 8px;\n    font-size: 25px;\n    color: #ffffff;\n  }\n  button {\n    width: 100%;\n    padding: 5px;\n  }\n"])));
var SearchBarContainer = exports.SearchBarContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"])));