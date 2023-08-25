"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagesListContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PagesListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0 30px 10px 30px;\n  color: ", " !important;\n\n  > span * {\n    font-family: ", " !important;\n    color: ", " !important;\n  }\n  a {\n    display: inline;\n    text-decoration: none;\n    color: #000\n  }\n"])), function (_ref) {
  var _theme$colors$tertiar, _theme$colors;
  var theme = _ref.theme;
  return (_theme$colors$tertiar = theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) !== null && _theme$colors$tertiar !== void 0 ? _theme$colors$tertiar : '#FFF';
}, function (_ref2) {
  var _theme$fonts, _theme$fonts$special;
  var theme = _ref2.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name;
}, function (_ref3) {
  var _theme$colors$tertiar2, _theme$colors2;
  var theme = _ref3.theme;
  return (_theme$colors$tertiar2 = theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) !== null && _theme$colors$tertiar2 !== void 0 ? _theme$colors$tertiar2 : '#FFF';
});
exports.PagesListContainer = PagesListContainer;