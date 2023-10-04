"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousOrders = exports.PreviousButtonWrapper = exports.ErrorMessage = exports.BusinessesTitle = exports.BusinessList = exports.BusinessContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: 30px auto;\n  min-height: calc(100vh - 390px);\n\n  > h1 {\n    color: ", ";\n    font-size: 24px;\n    text-align: center;\n    width: 100%;\n    margin: 0 0 20px 0;\n  }\n\n  @media (min-width: 768px) {\n    > h1 {\n      font-size: 32px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    width: 80%;\n    min-height: calc(100vh - 350px);\n\n    > h1 {\n      font-size: 40px;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    min-height: calc(100vh - 430px);\n    margin: 70px auto;\n    > h1 {\n      font-size: 48px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    max-width: 700px;\n    margin: 0 auto;\n  }\n"])));
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var PreviousOrders = exports.PreviousOrders = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
var BusinessesTitle = exports.BusinessesTitle = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px 20px;\n"])));
var PreviousButtonWrapper = exports.PreviousButtonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  button{\n    width: 80%;\n  }\n\n  @media(min-width: 681px){\n      button{\n      width: 40%;\n    }\n  }\n"])));