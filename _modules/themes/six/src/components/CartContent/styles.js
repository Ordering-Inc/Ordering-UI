"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotCarts = exports.Divider = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  @media (min-width: 769px) {\n    margin-bottom: 10px;\n    padding: 0;\n  }\n"])));
exports.Container = Container;
var NotCarts = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  margin: auto;\n\n  img {\n    width: 150px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 10px 0;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n    color: #000;\n  }\n\n  button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n"])));
exports.NotCarts = NotCarts;
var Divider = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: #F7F7F7;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n  height: 10px;\n"])));
exports.Divider = Divider;