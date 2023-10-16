"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectCategory = exports.CategoryTab = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CategoryTab = exports.CategoryTab = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 10px 15px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: ", "px;\n  border-radius: 8px;\n  text-align: left;\n\n  .accordion__icon{\n    transform: rotate(90deg);\n  }\n  \n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  span {\n    width: 9\n    0%;\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n  }\n\n  ", "\n  \n"])), function (props) {
  var _props$categorySpace;
  return (_props$categorySpace = props.categorySpace) !== null && _props$categorySpace !== void 0 ? _props$categorySpace : 0;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primaryContrast;
  });
});
var SelectCategory = exports.SelectCategory = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 30px;\n  border: 1px solid ", ";\n  margin-right: 10px;\n  height: 20px;\n  svg {\n    color: ", "\n  }\n  &:hover{\n    opacity: 0.8;\n  }\n"])), function (_ref2) {
  var _theme$colors;
  var theme = _ref2.theme;
  return theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary;
}, function (_ref3) {
  var _theme$colors2;
  var theme = _ref3.theme;
  return theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary;
});