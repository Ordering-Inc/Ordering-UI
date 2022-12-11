"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFoundText = exports.PageNotFoundContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PageNotFoundContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 55px;\n  margin-top: 60px;\n  div{\n    width: 50%;\n  }\n  img {\n    width: 100%;\n  }\n  @media (max-width: 980px){\n    div{\n      width: 80%;\n    }\n  }\n  @media (max-width: 550px){\n    div{\n      width: 100%;\n    }\n  }\n"])));
exports.PageNotFoundContainer = PageNotFoundContainer;
var PageNotFoundText = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 14px;\n  span{\n    padding: 12px 20px;\n    background-color: white;\n    font-size: 2.5rem;\n    border-radius: 12px;\n    border: 2px solid black;\n  }\n  img{\n    position: relative;\n    width: 8%;\n    bottom: 17px;\n  }\n  @media (max-width: 1024px){\n    span{\n      padding: 10px 20px;\n      font-size: 1.7rem;\n      border: 1.8px solid black;\n    }\n    img{\n      bottom: 14px;\n    }\n  }\n  @media (max-width: 980px){\n    span{\n      border: 2px solid black;\n    }\n    img{\n      width: 7%;\n    }\n  }\n  @media (max-width: 425px){\n    span{\n      font-size: 1.2rem;\n      border-width: 1px;\n      padding: 10px 15px\n    }\n  }\n  @media (max-width: 320px){\n    img{\n      width: 10%;\n    }\n  }\n"])));
exports.PageNotFoundText = PageNotFoundText;