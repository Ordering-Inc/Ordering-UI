"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoOrdersWrapper = exports.Divider = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 40px 0 20px 0;\n  }\n"])));
exports.Container = Container;
var Divider = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n"])));
exports.Divider = Divider;
var NoOrdersWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0px;\n  box-sizing: border-box;\n  min-height: calc(100% - 120px);\n  width: 100%;\n\n  > p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 25px;\n  }\n"])));
exports.NoOrdersWrapper = NoOrdersWrapper;