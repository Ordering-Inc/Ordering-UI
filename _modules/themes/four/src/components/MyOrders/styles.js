"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersContainer = exports.InnerContainer = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #F7F7F7;\n  padding: 20px 0;\n\n  @media (min-width: 992px) {\n    padding: 30px 0;\n  }\n"])));
var InnerContainer = exports.InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 992px) {\n    width: 85%;\n    flex-direction: row;\n  }\n"])));
var OrdersContainer = exports.OrdersContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  padding: 0 10px;\n  flex: 1;\n"])));