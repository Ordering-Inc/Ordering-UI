"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoOrdersWrapper = exports.Divider = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 40px 0 20px 0;\n  }\n"])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n"])));
var NoOrdersWrapper = exports.NoOrdersWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0px;\n  box-sizing: border-box;\n  min-height: calc(100% - 120px);\n  width: 100%;\n\n  > p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 25px;\n  }\n"])));