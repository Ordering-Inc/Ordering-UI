"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedOption = exports.OrderTypeWrapper = exports.OrderTypeBoxGroup = exports.OrderType = exports.OrderItemWraper = exports.OrderItem = exports.OrderDescription = exports.Option = exports.ItemContent = exports.ContentOption = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Option = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  svg {\n    min-width: 14px;\n    margin-right: 5px;\n    ", "\n  }  \n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
exports.Option = Option;
var OrderTypeWrapper = _styledComponents.default.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"])));
exports.OrderTypeWrapper = OrderTypeWrapper;
var SelectedOption = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["  \n  margin: 0;\n  max-width: 60px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  @media (min-width: 380px) {\n      max-width: initial;\n  }\n"])));
exports.SelectedOption = SelectedOption;
var ContentOption = (0, _styledComponents.default)(SelectedOption)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  max-width: 80px;\n"])));
exports.ContentOption = ContentOption;
var OrderTypeBoxGroup = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  @media (min-width: 1200px) {\n    max-width: 1230px;\n  }\n  @media (min-width: 1405px) {\n    max-width: 1420px;\n  }\n"])));
exports.OrderTypeBoxGroup = OrderTypeBoxGroup;
var OrderItem = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display:flex;\n  justify-content: center;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 15px;\n  cursor: pointer;\n\n  @media (min-width: 576px) {\n    width: 50%;\n  }\n  @media (min-width: 850px) {\n    width: 20%;\n    padding: 10px;\n  }\n"])));
exports.OrderItem = OrderItem;
var OrderItemWraper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #FFFFFF;\n  box-shadow: 1px 4px 10px rgb(0 0 0 / 12%);\n  border-radius: 20px;\n  padding: 35px 25px;\n  @media (min-width: 850px) {\n    padding: 25px 15px;\n  }\n  @media (min-width: 1420px) {\n    padding: 35px 20px;\n  }\n"])));
exports.OrderItemWraper = OrderItemWraper;
var OrderType = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n  svg {\n    min-width: 14px;\n    font-size: 25px;\n  }\n  svg path{    \n    fill: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.OrderType = OrderType;
var ItemContent = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  margin: 0 15px;\n  @media (min-width: 1024px) {\n    font-size: 18px;   \n    margin: 0 7px;\n  }\n  @media (min-width: 1450px) {\n    font-size: 25px;    \n  }\n"])));
exports.ItemContent = ItemContent;
var OrderDescription = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  @media (min-width: 1405px) {\n    font-size: 14px;\n  }\n"])));
exports.OrderDescription = OrderDescription;