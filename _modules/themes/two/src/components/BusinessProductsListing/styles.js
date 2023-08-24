"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrappLayout = exports.WrapContent = exports.SkeletonItem = exports.ProductsNotFound = exports.ProductsHeader = exports.ProductsContainer = exports.ProductLoading = exports.DeliveryTime = exports.DeliveryPrice = exports.DeliveryInfo = exports.Container = exports.BusinessCartInnerContainer = exports.BusinessCartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1024px) {\n    width: 100%;\n    flex-direction: row;\n  }\n"])));
exports.Container = Container;
var ProductsContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 30px 0px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n\n  @media (min-width: 1024px) {\n    width: calc(100% - 450px);\n    padding: 30px 20px;\n  }\n"])));
exports.ProductsContainer = ProductsContainer;
var BusinessCartContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 0px 10px 30px 20px;\n  box-sizing: border-box;\n  border-top: 1px solid #CCC;\n  \n  ", "\n\n  @media (min-width: 1024px) {\n    width: 450px;\n    border-top: none;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding: 0px 20px 30px 10px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-right: 1px solid #CCC;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-left: 1px solid #CCC;\n    "])));
});
exports.BusinessCartContainer = BusinessCartContainer;
var BusinessCartInnerContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  box-sizing: border-box;\n\n  > div.cart {\n    border-bottom: none;\n    width: 100%;\n    box-sizing: border-box;\n\n    > div {\n      box-shadow: none;\n    }\n  }\n\n  img {\n    width: 200px;\n  }\n\n  > span {\n    width: 100%;\n  }\n\n  p {\n    color: ", ";\n    margin: 5px 0;\n  }\n\n  @media (min-width: 1024px) {\n    max-height: calc(100vh - 60px);\n    overflow: auto;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkGray;
});
exports.BusinessCartInnerContainer = BusinessCartInnerContainer;
var WrapContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 5px;\n  background: ", ";\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
exports.WrapContent = WrapContent;
var WrapperSearch = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  ", "\n  width: 100%;\n\n  > div:first-child {\n    ", "\n  }\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n\n  @media (min-width: 768px) {\n    width: inherit;\n  }\n"])), function (_ref) {
  var isDelivery = _ref.isDelivery;
  return isDelivery && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding-top: 20px;\n  "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
});
exports.WrapperSearch = WrapperSearch;
var ProductsNotFound = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: calc(100vh - 45px);\n  margin: auto;\n\n  h1 {\n    font-size: 20px;\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (min-width: 411px) {\n    h1 {\n      font-size: 24px;\n    }\n  }\n"])));
exports.ProductsNotFound = ProductsNotFound;
var ProductLoading = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
exports.ProductLoading = ProductLoading;
var SkeletonItem = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));
exports.SkeletonItem = SkeletonItem;
var WrappLayout = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  max-width: 1200px;\n  width: 100%;\n  ", "\n"])), function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n\n    .bp-list,\n    .cart {\n      width: 100%;\n    }\n\n    @media (min-width: 870px) {\n      flex-direction: row;\n      .bp-list {\n        width: 55%;\n      }\n      .cart {\n        width: calc(45% - 20px);\n        margin-left: 20px;\n      }\n    }\n\n    @media (min-width: 1024px) {\n      .bp-list {\n        width: 60%;\n      }\n      .cart {\n        width: calc(40% - 20px);\n      }\n    }  \n\n    @media (min-width: 1200px) {\n      .bp-list {\n        width: 70%;\n      }\n      .cart {\n        width: calc(30% - 20px);\n      }\n    }  \n  "])));
});
exports.WrappLayout = WrappLayout;
var ProductsHeader = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  margin: 25px 0px 10px 0;\n"])));
exports.ProductsHeader = ProductsHeader;
var DeliveryInfo = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  border: 1px solid #E7E7E7;\n  box-sizing: border-box;\n  border-radius: 8px;\n  padding: 10px 0;\n  display: flex;\n  width: 45%;\n  max-width: 450px;\n  min-width: 300px;\n  ", "\n  box-sizing: border-box;\n  ", "\n"])), function (_ref3) {
  var isDelivery = _ref3.isDelivery;
  return !isDelivery && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    max-width: 200px;\n    min-width: 150px;\n  "])));
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});
exports.DeliveryInfo = DeliveryInfo;
var DeliveryTime = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 30px;\n  width: ", ";\n\n  h2,\n  p {\n    margin: 0px;\n  }\n\n  h2 {\n    font-size: 20px;\n  }\n\n  p {\n    margin-top: 5px;\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (_ref4) {
  var isDelivery = _ref4.isDelivery;
  return isDelivery ? '50%' : '100%';
}, function (props) {
  return props.theme.colors.darkGray;
});
exports.DeliveryTime = DeliveryTime;
var DeliveryPrice = (0, _styledComponents.default)(DeliveryTime)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 50%;\n  ", "\n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E7E7E7;\n  "]))) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E7E7E7;\n  "])));
});
exports.DeliveryPrice = DeliveryPrice;