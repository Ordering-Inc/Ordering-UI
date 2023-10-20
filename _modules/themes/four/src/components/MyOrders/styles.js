"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersContainer = exports.InnerContainer = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #F7F7F7;\n  padding: 20px 0;\n\n  @media (min-width: 992px) {\n    padding: 30px 0;\n  }\n"])));
var InnerContainer = exports.InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 992px) {\n    width: 85%;\n    flex-direction: row;\n  }\n"])));
var OrdersContainer = exports.OrdersContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  padding: 0 10px;\n  flex: 1;\n"])));