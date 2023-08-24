"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.PreviousOrders = exports.MapWrapper = exports.ListWrapper = exports.ErrorMessage = exports.BusinessesTitle = exports.BusinessList = exports.BusinessFilter = exports.BusinessContent = exports.BusinessContainer = exports.AddressInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 0;\n"])));
exports.BusinessContainer = BusinessContainer;
var BusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
exports.BusinessList = BusinessList;
var WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 30px;\n  input {\n    border-bottom: 1px solid #ccc;\n  }\n  svg{\n    ", "\n  }\n  @media (min-width: 850px) {\n    width: 100%;\n    box-shadow: 0px -2px 1px 4px lightgrey;\n  }\n\n  ", "\n"])), function (_ref) {
  var _theme$business_listi;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.layout) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.type) === 'mapview' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 5px;\n      transform: translateY(70%);\n      cursor: pointer;\n      "])));
}, function (_ref2) {
  var isCustomLayout = _ref2.isCustomLayout;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n    svg {\n      font-size: 26px;\n      color: ", ";\n      margin-left: 10px;\n      cursor: pointer;\n    }\n    @media(min-width: 681px){\n      width: 75%;\n      padding: 0;\n    }\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.primary;
  });
});
exports.WrapperSearch = WrapperSearch;
var ErrorMessage = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
exports.ErrorMessage = ErrorMessage;
var PreviousOrders = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
exports.PreviousOrders = PreviousOrders;
var BusinessesTitle = _styledComponents.default.h1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px 20px;\n"])));
exports.BusinessesTitle = BusinessesTitle;
var BusinessContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  @media(min-width: 850px){\n    flex-direction: row;\n    height: 100vh;\n  }\n"])));
exports.BusinessContent = BusinessContent;
var ListWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;  \n  min-height: 70vh;\n  overflow: auto;\n  box-shadow: 0 -2px 4px 0 rgb(0 0 0 / 12%);\n  @media(min-width: 850px){\n    width: 40vw;\n  }\n"])));
exports.ListWrapper = ListWrapper;
var MapWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  /* height: 100vh; */\n"])));
exports.MapWrapper = MapWrapper;
var BusinessFilter = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;  \n  padding-left: 20px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    padding-right: 20px;\n  "])));
});
exports.BusinessFilter = BusinessFilter;
var AddressInput = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border: 1px solid #ccc;\n  padding: 10px 15px;\n  margin: 20px;\n  margin-bottom: 0;\n  border-radius: 7.6px;\n  cursor: pointer;\n  p{\n    margin: 0;\n    margin-left: 35px\n  }\n\n  svg {\n    position: absolute;\n    width: 24px;\n    height: 24px;\n  }\n"])));
exports.AddressInput = AddressInput;