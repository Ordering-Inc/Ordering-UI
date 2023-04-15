"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrappLayout = exports.WrapProductsCategroy = exports.WrapContent = exports.WrapBusinessList = exports.ProductsNotFound = exports.ProductsContainer = exports.ProductDetail = exports.BackMenu = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 1.5px;\n"])));
exports.ProductsContainer = ProductsContainer;
var WrapContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 5px;\n  display:  flex;\n\n  ", "\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 1200px;\n    padding: 15px 35px;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 1405px) {\n    max-width: 1420px;\n  }\n\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display:  block;\n  "])));
});
exports.WrapContent = WrapContent;
var WrapperSearch = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  display: none;\n  .search-bar {\n    margin-right: 10px;\n    ", "\n  }\n\n  #select-input {\n    border: none;\n    background-color: #fff !important;\n    border-radius: 0;\n    text-transform: uppercase;\n\n    #list {\n      border-radius: 0;\n    }\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
});
exports.WrapperSearch = WrapperSearch;
var ProductsNotFound = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));
exports.ProductsNotFound = ProductsNotFound;
var WrappLayout = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n\n    .bp-list,\n    .cart {\n      width: 100%;\n    }\n\n    @media (min-width: 870px) {\n      flex-direction: row;\n      .bp-list {\n        width: 55%;\n      }\n      .cart {\n        width: calc(45% - 20px);\n        margin-left: 20px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .bp-list {\n        width: 60%;\n      }\n      .cart {\n        width: calc(40% - 20px);\n      }\n    }  \n\n    @media (min-width: 1200px) {\n      .bp-list {\n        width: 70%;\n      }\n      .cart {\n        width: calc(30% - 20px);\n      }\n    }  \n  "])));
});
exports.WrappLayout = WrappLayout;
var WrapProductsCategroy = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  \n"])));
exports.WrapProductsCategroy = WrapProductsCategroy;
var WrapBusinessList = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 1024px) {\n    &.right-list-panel {\n      padding-left: 25px;\n    }\n  } \n\n  @media (min-width: 1405px) {\n    &.right-list-panel {\n      padding-left: 45px;\n    }\n  } \n  \n"])));
exports.WrapBusinessList = WrapBusinessList;
var ProductDetail = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;  \n"])));
exports.ProductDetail = ProductDetail;
var BackMenu = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: 15px;\n  right: 10px;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  cursor: pointer;  \n  svg {    \n    font-size: 1.5rem;\n  }\n\n  @media (min-width: 768px) {\n    right: 25px;\n    ", "\n\n  }\n\n  @media (min-width: 1024px) {\n    right: unset;\n    left: calc(40% - 45px);\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    right: unset;\n    left: calc(40% - 50px);\n    ", "\n  }\n\n  @media (min-width: 1440px) {\n    right: unset;\n    left: calc(40% - 60px);\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      left: 25px;\n      right: unset;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      left: unset;\n      right: calc(40% - 45px);\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      left: unset;\n      right: calc(40% - 50px);\n    "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      left: unset;\n      right: calc(40% - 60px);\n    "])));
});
exports.BackMenu = BackMenu;