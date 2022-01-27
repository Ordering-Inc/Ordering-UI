"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappLayout = exports.WrapContent = exports.Title = exports.MobileCartViewWrapper = exports.EmptyCart = exports.EmptyBtnWrapper = exports.BusinessContent = exports.BusinessCategoryProductWrapper = exports.BusinessCategoriesContainer = exports.BusinessCartContent = exports.BusinessCartContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Title = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 18px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.Title = Title;

var WrappLayout = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));

exports.WrappLayout = WrappLayout;

var WrapContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n\n  @media (min-width: 1200px) {\n    padding: 0;\n  }\n  &#businessProductList {\n    > div {\n      margin-top: 30px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.WrapContent = WrapContent;

var BusinessContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1200px) {\n    flex-direction: row;\n  }\n"])));

exports.BusinessContent = BusinessContent;

var BusinessCategoryProductWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  /* Hide scrollbar for Chrome, Safari and Opera */\n  .category-lists::-webkit-scrollbar {\n    display: none;\n  }\n\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .category-lists {\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n\n  @media (min-width: 1200px) {\n    width: 70%;\n  }\n"])));

exports.BusinessCategoryProductWrapper = BusinessCategoryProductWrapper;

var BusinessCategoriesContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin: 0;\n  @media (min-width: 1200px) {\n    width: calc(31% - 25px);\n    margin-left: 25px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 25px;\n      margin-left: 0;\n    "])));
});

exports.BusinessCategoriesContainer = BusinessCategoriesContainer;
var BusinessCartContainer = (0, _styledComponents.default)(BusinessCategoriesContainer)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (min-width: 500px) {\n    display: block;\n  }\n"])));
exports.BusinessCartContainer = BusinessCartContainer;

var BusinessCartContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: white;\n  padding: 30px;\n  position: relative;\n  margin-bottom: 30px;\n\n  .product.accordion {\n    margin: 0;\n  }\n\n  /* .accordion.active {\n    padding-bottom: 10px;\n  } */\n\n  ", "\n\n  @media (min-width: 1200px) {\n    position: sticky;\n    top: 0;\n  }\n\n  @media (min-width: 768px) {\n    padding: 35px 30px;\n  }\n"])), function (_ref) {
  var isModal = _ref.isModal;
  return !isModal && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    border: 1px solid #E9ECEF;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    border-radius: 7.6px;\n  "])));
});

exports.BusinessCartContent = BusinessCartContent;

var EmptyCart = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 45px;\n      color: #B1BCCC;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 14px;\n      color: #B1BCCC;\n      margin: 23px 0 0 0;\n    }\n  }\n"])));

exports.EmptyCart = EmptyCart;

var EmptyBtnWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #F8F9FA;\n    border: 1px solid #F8F9FA;\n    border-radius: 7.6px;\n    height: 44px;\n    font-size: 14px;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.EmptyBtnWrapper = EmptyBtnWrapper;

var MobileCartViewWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  padding: 10px 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  z-index: 1000;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  button {\n    height: 44px;\n    border-radius: 7.6px;\n  }\n"])));

exports.MobileCartViewWrapper = MobileCartViewWrapper;