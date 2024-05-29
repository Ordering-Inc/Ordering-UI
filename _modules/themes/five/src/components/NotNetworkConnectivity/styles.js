"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = exports.Container = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  flex-direction: column;\n  justify-content: center;\n  width: 90%;\n  margin: 60px auto;\n  box-sizing: border-box;\n\n  > h1 {\n    font-size: 24px;\n    line-height: 36px;\n    font-weight: 600;\n    margin: 0;\n  }\n\n  > p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 13px 0;\n  }\n\n  @media (min-width: 768px) {\n    width: 80%;\n  }\n\n  @media (min-width: 1024px) {\n    width: 60%;\n  }\n"])), function (_ref) {
  var isOnline = _ref.isOnline;
  return isOnline ? 'none' : 'flex';
});
var Image = exports.Image = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 70px;\n  display: flex;\n  justify-content: center;\n  img {\n    max-width: 300px;\n    width: 100%;\n    height: auto;\n  }\n"])));
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin: 34px 0;\n  > button {\n    height: 44px;\n  }\n"])));