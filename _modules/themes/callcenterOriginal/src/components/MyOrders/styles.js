"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: hidden;\n  min-height: auto;\n  box-sizing: border-box;\n\n  @media (min-width: 769px) {\n    padding: 40px;\n  }\n\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 382px);\n  }\n"])));

exports.Container = Container;

var Divider = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n\n  @media (min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));

exports.Divider = Divider;