"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperNotFound = exports.WrappLayout = exports.WrapContent = exports.SkeletonItem = exports.ProductsNotFound = exports.ProductsContainer = exports.ProductLoading = exports.ProductDetailsHeader = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ProductsContainer = exports.ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0px auto;\n  min-height: calc(100vh - 300px);\n\n  @media (min-width: 768px) {\n    margin: 30px auto 0px;\n    width: 80%;\n    margin: 50px auto 0px;\n  }\n"])));
var WrapContent = exports.WrapContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n\n  @media (min-width: 681px) {\n    padding: 5px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var ProductsNotFound = exports.ProductsNotFound = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));
var ProductLoading = exports.ProductLoading = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var SkeletonItem = exports.SkeletonItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));
var WrappLayout = exports.WrappLayout = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    .bp-list,\n    .cart {\n      width: 100%;\n    }\n\n    @media (min-width: 870px) {\n      flex-direction: row;\n      .bp-list {\n        width: 55%;\n      }\n      .cart {\n        width: calc(45% - 20px);\n        margin-left: 20px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .bp-list {\n        width: 60%;\n      }\n      .cart {\n        width: calc(40% - 20px);\n      }\n    }  \n\n    @media (min-width: 1200px) {\n      .bp-list {\n        width: 70%;\n      }\n      .cart {\n        width: calc(30% - 20px);\n      }\n    }  \n  "])));
});
var ProductDetailsHeader = exports.ProductDetailsHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  border: 1px solid #E9ECEF;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  position: relative;\n  padding: 0 5%;\n  min-height: 62px;\n  p {\n    margin: 0px 30px;\n    text-align: center;\n    font-size: 16px;\n    padding: 18px;\n    color: ", ";\n  }\n\n  svg {\n    color: ", ";\n    font-size: 20px;\n    cursor: pointer;\n    position: absolute;\n    top: 20px;\n\n    ", "\n  }\n\n  @media (min-width: 992px) {\n    padding: 0 10%;\n    svg {\n      ", "\n    }\n  }\n\n  @media (min-width: 1200px) {\n    padding: 0 20%;\n    svg {\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      left: 5%;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      right: 5%;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        left: 10%;\n      "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        right: 10%;\n      "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        left: 20%;\n      "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        right: 20%;\n      "])));
});
var WrapperNotFound = exports.WrapperNotFound = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  height: 500px;\n  > div{\n    height: 100%;\n  }\n"])));