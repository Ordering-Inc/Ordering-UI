"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GiftCardInfoContainer = exports.FormController = exports.FormContainer = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h2 {\n    font-size: 24px;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 48px;\n  }\n\n  p {\n    font-size: 14px;\n    line-height: 18px;\n    margin: 6px 0;\n    color: ", ";\n  }\n\n  button {\n    height: 44px;\n    margin-top: 50px;\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});
exports.Container = Container;
var FormContainer = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.FormContainer = FormContainer;
var FormController = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 28px;\n\n  label {\n    margin-bottom: 10px;\n    font-size: 14px;\n  }\n"])));
exports.FormController = FormController;
var GiftCardInfoContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.GiftCardInfoContainer = GiftCardInfoContainer;