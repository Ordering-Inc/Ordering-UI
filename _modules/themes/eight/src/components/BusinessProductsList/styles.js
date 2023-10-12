"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.WrapAllCategories = exports.ProductsListing = exports.ProductsContainer = exports.ErrorMessage = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductsContainer = exports.ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  min-height: calc(100vh - 330px);\n  max-width: 700px;\n  margin: 0 auto;\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var ProductsListing = exports.ProductsListing = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var WrapAllCategories = exports.WrapAllCategories = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  h3 {\n    margin-left: 10px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
});
var WrapperNotFound = exports.WrapperNotFound = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  height: 500px;\n  > div{\n    height: 100%;\n  }\n"])));