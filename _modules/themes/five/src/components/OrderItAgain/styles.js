"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductListWrapper = exports.ProductList = exports.ContentHeader = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding-top: 25px;\n  margin: 0px;\n  ", "\n  ", "\n\n  @media (min-width: 993px) {\n    margin-right: 30px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n    margin-right: 0px;\n  "])));
}, function (_ref) {
  var isGroceries = _ref.isGroceries;
  return isGroceries && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-top: 0px;\n    margin-right: 0px;\n    margin-left: 0px;\n  "])));
});
var ContentHeader = exports.ContentHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    margin: 0px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n    color: ", ";\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.darkGray;
}, function (_ref2) {
  var isGroceries = _ref2.isGroceries;
  return isGroceries && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (props) {
    return props.theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
  });
});
var ProductListWrapper = exports.ProductListWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n  }\n"])));
var ProductList = exports.ProductList = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n\n  button {\n    padding: 0px;\n  }\n\n  #orderItAgain > div {\n    width: 350px;\n    ", "\n  }\n"])), function (_ref3) {
  var _theme$business_view;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.products) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.layout) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["\n      width: 230px;\n    "])));
});