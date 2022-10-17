"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reorder = exports.Price = exports.OpenOrder = exports.Content = exports.Card = exports.BusinessInformation = exports.ActiveHeaderImage = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OpenOrder = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 15%;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 10px;\n  button {\n    width: 100%;\n    font-size: 0.8em;\n    height: 36px;\n  }\n\n  @media (min-width: 480px){\n    button{\n      font-size: 1em\n    }\n  }\n"])));
exports.OpenOrder = OpenOrder;
var Content = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-radius: 16px;\n  padding: 10px;\n"])));
exports.Content = Content;
var ActiveHeaderImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  height: 125px;\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"])));
exports.ActiveHeaderImage = ActiveHeaderImage;
var Price = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-align: end;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 35%;\n  h2 {\n    font-size: 14px;\n    margin-block-end: ", ";\n    margin-block-start: 0.1em;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: ", ";\n    color: #ff9300;\n    font-size: 0.8em;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    margin-left: 5px;\n  }\n  p[name='view-cart']{\n    color: ", ";\n    cursor: pointer;\n  }\n"])), function (_ref) {
  var isBusinessesPage = _ref.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (_ref2) {
  var isBusinessesPage = _ref2.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (props) {
  return props.theme.colors.primary;
});
exports.Price = Price;
var Card = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  min-width: 300px;\n  width: 300px;\n  margin: 10px;\n  display: inline-block;\n  background: white;\n  text-align: left;\n  cursor: ", ";\n\n  button.load-orders {\n    padding: 10px 30px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  @media (min-width: 480px){\n    width: 400px;\n  }\n\n  @media(min-width: 993px){\n    ", "\n  }\n"])), function (_ref3) {
  var isBusinessesPage = _ref3.isBusinessesPage;
  return isBusinessesPage && 'pointer';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (props) {
  return (props.nobg || props.isBusinessesPage) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: transparent;\n  "])));
}, function (props) {
  return props.flex && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "])));
}, function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  "])));
}, function (_ref4) {
  var isBusinessesPage = _ref4.isBusinessesPage;
  return isBusinessesPage && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin: 30px 20px;\n      width: calc(33% - 40px);\n    "])));
});
exports.Card = Card;
var Reorder = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  button{\n    line-height: 0;\n    height: 30px;\n    font-size: 14px;\n  }\n"])));
exports.Reorder = Reorder;
var BusinessInformation = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  padding-left: 10px;\n  font-size: 0.9em;\n  width: 30%;\n  ", "\n  h2 {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 16px;\n    margin-block-end: 0;\n    margin-block-start: 0;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    color : #9A9A9A;\n    white-space: nowrap;\n    font-size: 0.9em;\n    font-size: 0.8em;\n  }\n\n  p[name='order_number']{\n    width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p[name='view_order'] {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n    width: fit-content;\n  }\n  p[name='order_status']{\n    color: #53ad26;\n    height: 17px;\n  }\n\n  @media (min-width: 480px){\n    h2 {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    }\n    p {\n      font-size: 0.9em;\n    }\n    p[name='order_number']{\n      width: 230px;\n    }\n  }\n\n  @media (min-width: 768px){\n    font-size: 0.9em;\n    p {\n      font-size: 1em;\n    }\n    h2 {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.BusinessInformation = BusinessInformation;