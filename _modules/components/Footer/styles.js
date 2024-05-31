"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcon = exports.FooterContainer = exports.Copy = exports.Content = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FooterContainer = exports.FooterContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  border-top: 1px solid #d9d9d9;\n  padding: 30px 0;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
var Content = exports.Content = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 70%;\n  text-align: center;\n  margin-bottom: 10px;\n\n  > * {\n    display: block;\n    text-decoration: none;\n    color: initial;\n    font-size: 14px;\n    margin: 10px 0;\n  }\n\n  h1 {\n    font-weight: 600;\n    font-size: 18px;\n  }\n\n  @media (min-width: 768px) {\n    width: 33%;\n    margin: 0;\n  }\n"])));
var SocialIcon = exports.SocialIcon = _styledComponents.default.a(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 0 5px;\n  color: initial;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var Copy = exports.Copy = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 90%;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(0,0,0,0.6);\n\n  @media (min-width: 768px) {\n    margin-top: 15px;\n  }\n"])));