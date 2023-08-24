"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLayout = exports.WrapContent = exports.Title = exports.SkeletonItem = exports.ProductsNotFound = exports.ProductsContainer = exports.ProductLoading = exports.OrderTypeWrapperButton = exports.ModalIcon = exports.LogoutButtonContainer = exports.GoBackContainer = exports.EmptyCart = exports.EmptyBtnWrapper = exports.BusinessContent = exports.BusinessCategoryProductWrapper = exports.BusinessCartContent = exports.BusinessCartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Buttons = require("../../styles/Buttons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  box-sizing: border-box;\n"])));
exports.ProductsContainer = ProductsContainer;
var WrapContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n  margin-bottom: 50px;\n\n  @media (min-width: 1200px) {\n    padding: 0;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
exports.WrapContent = WrapContent;
var ProductsNotFound = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));
exports.ProductsNotFound = ProductsNotFound;
var ProductLoading = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
exports.ProductLoading = ProductLoading;
var SkeletonItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));
exports.SkeletonItem = SkeletonItem;
var WrappLayout = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
exports.WrappLayout = WrappLayout;
var BusinessContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"])));
exports.BusinessContent = BusinessContent;
var BusinessCategoryProductWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 1200px) {\n    width: 70%;\n  }\n"])));
exports.BusinessCategoryProductWrapper = BusinessCategoryProductWrapper;
var BusinessCartContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0;\n  @media (min-width: 1200px) {\n    width: calc(31% - 25px);\n    margin-left: 25px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n      margin-left: 0;\n    "])));
});
exports.BusinessCartContainer = BusinessCartContainer;
var BusinessCartContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background: white;\n  padding: 35px 30px;\n  border: 1px solid #E9ECEF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n"])));
exports.BusinessCartContent = BusinessCartContent;
var EmptyCart = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 45px;\n      color: #B1BCCC;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 14px;\n      color: #B1BCCC;\n      margin: 23px 0 0 0;\n    }\n  }\n"])));
exports.EmptyCart = EmptyCart;
var EmptyBtnWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #F8F9FA;\n    border-radius: 7.6px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.EmptyBtnWrapper = EmptyBtnWrapper;
var Title = _styledComponents.default.h1(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 18px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.Title = Title;
var ModalIcon = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 40px;\n"])));
exports.ModalIcon = ModalIcon;
var GoBackContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 90%;\n  img{\n    margin: 0 5px;\n    width: 46px;\n    height: 46px;\n    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n    box-shadow: 0px 1px 4px 0px #0000001A;\n    border-radius: 7.6px;\n  }\n  h1{\n    font-size: 14px;\n    font-weight: 600;\n    color: ", ";\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-right: 5px;\n    width: 70%;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.GoBackContainer = GoBackContainer;
var OrderTypeWrapperButton = (0, _styledComponents.default)(_Buttons.Button)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background: ", ";\n  height: 35px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  max-width: 100px;\n  h2{\n    font-size: 12px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
exports.OrderTypeWrapperButton = OrderTypeWrapperButton;
var LogoutButtonContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n  top: 2px;\n"])));
exports.LogoutButtonContainer = LogoutButtonContainer;