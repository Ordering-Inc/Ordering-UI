"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessContainer = exports.RightContainer = exports.PreviousOrders = exports.NotFoundSourceWrapper = exports.LocationSelect = exports.LoadMoreButtonWrap = exports.LoadMoreButtonCityWrap = exports.LeftContainer = exports.ErrorMessage = exports.DeliveryTextWrapper = exports.CityContainer = exports.BusinessContainer = exports.BusinessAddress = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: ", ";\n  \n  .search-area{\n    display: none;\n  }\n  @media (min-width: 768px){\n    .search-area{\n      display: block;\n      position: absolute;\n      right: 0;\n      z-index: 100;\n      margin-right: 10px;\n      top: 0;\n      margin-top: 10px;\n    }\n  }\n"])), function (_ref) {
  var alignCenter = _ref.alignCenter;
  return alignCenter ? 'center' : 'stretch';
});
exports.BusinessContainer = BusinessContainer;
var ErrorMessage = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
exports.ErrorMessage = ErrorMessage;
var PreviousOrders = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
exports.PreviousOrders = PreviousOrders;
var SingleBusinessContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgb(230, 230, 230);\n  background: ", ";\n  margin: 0 0 20px;\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n  align-items: center;\n  height: 220px;\n  justify-content: space-between;\n  ", "\n  @media(min-width: 768px){\n    align-items: flex-start;\n    flex-direction: row;\n    justify-content: stretch;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.secundaryContrast;
}, function (_ref3) {
  var _theme$colors;
  var isSelected = _ref3.isSelected,
    theme = _ref3.theme;
  return isSelected && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.gold);
});
exports.SingleBusinessContainer = SingleBusinessContainer;
var LeftContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  width: 100%;\n  color: ", ";\n  padding-right: 10px;\n  overflow: hidden;\n  text-align: center;\n  align-items: center;\n  a{\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 5;\n  }\n  p {\n    margin: 0;\n    overflow: hidden;\n  }\n  h2{\n    margin: 0 0 10px 0;\n    overflow: hidden;\n    font-size: 18px;\n    font-family: ", ";\n  }\n  @media (min-width: 768px){\n    width: 70%;\n    text-align: start;\n    align-items: flex-start;\n  }\n"])), function (_ref4) {
  var _theme$colors2;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) || '#FFF';
}, function (_ref5) {
  var _theme$fonts, _theme$fonts$special;
  var theme = _ref5.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name;
});
exports.LeftContainer = LeftContainer;
var RightContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  button {\n    height: 40px;\n    margin-bottom: 5px;\n    width: 100%;\n    font-size: 14px;\n    padding: 0;\n    height: 44px;\n  }\n  width: 100%;\n  @media (min-width: 768px){\n    width: initial;\n    button{\n      width: 70px;\n      height: 50px;\n    }\n  }\n  @media (min-width: 920px){\n    width: 30%;\n  }\n"])));
exports.RightContainer = RightContainer;
var CityContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid ", ";;\n  height: 70px;\n  margin: 0;\n  box-sizing: border-box;\n  h3, svg {\n    color: ", ";\n  }\n  h3{\n    font-size: 16px;\n  }\n  ", "\n"])), function (_ref6) {
  var _theme$colors3;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#fff';
}, function (_ref7) {
  var _theme$colors4;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.tertiary) || '#fff';
}, function (_ref8) {
  var isSelected = _ref8.isSelected;
  return isSelected && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      \n  "])));
});
exports.CityContainer = CityContainer;
var LocationSelect = _styledComponents.default.select(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  background-color: #fff;\n  border: 1px solid rgb(230,230,230);\n  color: #000;\n"])));
exports.LocationSelect = LocationSelect;
var LoadMoreButtonWrap = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: sticky;\n  bottom: 0;\n  button {\n    width: 100%;\n  }\n"])));
exports.LoadMoreButtonWrap = LoadMoreButtonWrap;
var NotFoundSourceWrapper = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  > div{\n    margin: 0 auto !important;\n  }\n  h1{\n    color: #fff;\n  }\n"])));
exports.NotFoundSourceWrapper = NotFoundSourceWrapper;
var DeliveryTextWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  width: 100%;\n  p {\n    color: #fff;\n  }\n"])));
exports.DeliveryTextWrapper = DeliveryTextWrapper;
var LoadMoreButtonCityWrap = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  button {\n    width: 100%;\n  }\n"])));
exports.LoadMoreButtonCityWrap = LoadMoreButtonCityWrap;
var BusinessAddress = _styledComponents.default.a(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  &:hover{\n    text-decoration: underline;\n  }\n"])));
exports.BusinessAddress = BusinessAddress;