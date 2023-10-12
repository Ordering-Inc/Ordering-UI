"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLayout = exports.WrapContent = exports.Title = exports.SkeletonItem = exports.ProductsNotFound = exports.ProductsContainer = exports.ProductLoading = exports.MobileCartViewWrapper = exports.EmptyCart = exports.EmptyBtnWrapper = exports.Divider = exports.BusinessContent = exports.BusinessCategoryProductWrapper = exports.BusinessCartContent = exports.BusinessCartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductsContainer = exports.ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px 15px 0px 15px;\n\n  > svg {\n    font-size: 24px;\n    cursor: pointer;\n    transition: all 0.2s ease;\n  }\n\n  @media (min-width: 769px) {\n    padding: 20px 40px 0px 40px;\n  }\n"])));
var WrapContent = exports.WrapContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n\n  @media (min-width: 381px) {\n    padding: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var ProductsNotFound = exports.ProductsNotFound = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));
var ProductLoading = exports.ProductLoading = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var SkeletonItem = exports.SkeletonItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));
var WrappLayout = exports.WrappLayout = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column-reverse;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"])));
var BusinessCategoryProductWrapper = exports.BusinessCategoryProductWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .category-lists::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .category-lists {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  @media (min-width: 1200px) {\n    width: 70%;\n  }\n"])));
var BusinessCartContainer = exports.BusinessCartContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0;\n\n  > div {\n    display: none;\n  }\n\n  @media (min-width: 500px) {\n    > div {\n      display: block;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    width: calc(31% - 25px);\n    margin-left: 25px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n      margin-left: 0;\n    "])));
});
var BusinessCartContent = exports.BusinessCartContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background: white;\n  padding: 35px 30px;\n  border: 1px solid #E9ECEF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  position: relative;\n\n  ", "\n\n  @media (max-width: 576px) {\n    .info {\n      width: 100%;\n    }\n  }\n\n  @media (min-width: 1200px) {\n    position: sticky;\n    top: 0;\n  }\n"])), function (_ref) {
  var isModal = _ref.isModal;
  return isModal && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding: 35px 25px;\n    box-shadow: none;\n    border: none;\n  "])));
});
var EmptyCart = exports.EmptyCart = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 45px;\n      color: #B1BCCC;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 14px;\n      color: #B1BCCC;\n      margin: 23px 0 0 0;\n    }\n  }\n"])));
var EmptyBtnWrapper = exports.EmptyBtnWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #F8F9FA;\n    border: 1px solid #F8F9FA;\n    border-radius: 7.6px;\n    height: 44px;\n    font-size: 14px;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: calc(100% + 30px);\n  height: 8px;\n  background-color: ", ";\n  margin-left: -15px;\n  ", "\n\n  @media (min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.grayDividerColor;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-right: -15px;\n    margin-left: 0;\n  "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: -40px;\n      margin-left: 0;\n    "])));
});
var MobileCartViewWrapper = exports.MobileCartViewWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  padding: 10px 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  z-index: 1000;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  button {\n    height: 44px;\n    border-radius: 7.6px;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 18px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});