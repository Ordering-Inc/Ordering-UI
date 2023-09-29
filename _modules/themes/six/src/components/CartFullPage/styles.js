"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RightPanel = exports.LeftPanel = exports.Layout = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100vw;\n  height: calc(100vh - 75px);\n  position: fixed;\n  top: 76px;\n  z-index: 999;\n  background-color: ", ";\n  box-sizing: border-box;  \n  overflow: hidden;\n"])), function (props) {
  return props.theme.colors.secundaryBackground;
});
var Layout = exports.Layout = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width:100%;\n  height: 100%;\n  overflow-y: scroll;\n  >div {\n    box-sizing: border-box;\n  }\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    overflow-y: hidden;\n  }\n"])));
var LeftPanel = exports.LeftPanel = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;  \n  padding: 20px;\n  background-color: ", ";\n  @media (min-width: 768px) {\n    padding: 40px;\n  }\n  @media (min-width: 1024px) {\n    width: 40vw;\n    padding: 2vw;\n  }\n"])), function (props) {
  return props.theme.colors.primaryDarkBackground;
});
var RightPanel = exports.RightPanel = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  padding: 20px;  \n  @media (min-width: 768px) {\n    padding: 40px;\n  }\n  @media (min-width: 1024px) {\n    width: 60vw;\n    height: 100%;\n    overflow-y: auto;\n    padding-top: 8vh;\n  }\n"])));