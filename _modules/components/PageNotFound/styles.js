"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFoundText = exports.PageNotFoundImage = exports.PageNotFoundContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var PageNotFoundContainer = exports.PageNotFoundContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 85%;\n  margin: auto;\n  height: ", ";\n\n  @media (min-width: 1024px) {\n    height: auto;\n    margin: 40px auto;\n  }\n"])), function (_ref) {
  var width = _ref.width;
  return width > 820 ? 'calc(100vh - 65px)' : 'calc(100vh - 97px)';
});
var PageNotFoundText = exports.PageNotFoundText = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n  border-radius: 12px;\n  border: 2px solid black;\n  padding: 10px;\n  position: relative;\n\n  h1{\n    font-size: 23px;\n    margin: 0px;\n    padding: 0px;\n    font-weight: 600;\n  }\n\n  img{\n    position: absolute;\n    top: 42px;\n  }\n"])));
var PageNotFoundImage = exports.PageNotFoundImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  @media (min-width: 1024px) {\n    img {\n      width: 450px;\n      height: 450px;\n    }\n  }\n"])));