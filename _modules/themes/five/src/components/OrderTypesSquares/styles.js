"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypesContainer = exports.TypeButton = exports.Title = exports.IconTypeButton = exports.AdditionalTypesContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var IconTypeButton = exports.IconTypeButton = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background: ", ";\n  border-radius: 44px;\n"])), function (_ref) {
  var _theme$colors;
  var activated = _ref.activated,
    theme = _ref.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.white : '#F3F9FF';
});
var TypesContainer = exports.TypesContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 42px 20px 0px 20px;\n"])));
var AdditionalTypesContainer = exports.AdditionalTypesContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  button {\n    padding: 4px 10px;\n    border-radius: 50px;\n    font-size: 10px;\n    line-height: 0;\n    height: 25px;\n    margin-right: 20px;\n  }\n  .activated {\n    color: ", "\n  }\n"])), function (_ref2) {
  var _theme$colors2;
  var theme = _ref2.theme;
  return theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.darkTextColor;
});
var TypeButton = exports.TypeButton = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 215px;\n  height: 75px;\n  border-radius: 7.6px;\n  padding: 16px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);\n  margin-right: 32px;\n  margin-bottom: 32px;\n  cursor: pointer;\n  background: ", ";\n  p{\n    margin: 0;\n    margin-left: 33px;\n    ", "\n  }\n"])), function (_ref3) {
  var _theme$colors3, _theme$colors4;
  var activated = _ref3.activated,
    theme = _ref3.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.primary : theme === null || theme === void 0 || (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.white;
}, function (_ref4) {
  var _theme$colors5;
  var activated = _ref4.activated,
    theme = _ref4.theme;
  return activated && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), theme === null || theme === void 0 || (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.white);
});
var Title = exports.Title = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  margin: 20px 20px 5px 20px;\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.headingColor;
});