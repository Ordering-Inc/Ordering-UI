"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentMethodsList = exports.PaymentMethodsContainer = exports.PayCardSelected = exports.PayCard = exports.CardItemContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PaymentMethodsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"])));
exports.PaymentMethodsContainer = PaymentMethodsContainer;
var PaymentMethodsList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 15px);\n  margin-left: -15px;\n"])));
exports.PaymentMethodsList = PaymentMethodsList;
var PayCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(50% - 30px);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px;\n  text-align: center;\n\n  ", "\n\n  > div {\n    max-width: 88px;\n    width: 100%;\n    border: ", ";\n    border-radius: 7.6px;\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 12px;\n    box-sizing: border-box;\n\n    > svg {\n      font-size: 25px;\n      path {\n        fill: ", ";\n      }\n    }\n  }\n\n  p {\n    margin: 0px;\n    font-size: 13px;\n    text-align: center;\n    color: ", ";\n    white-space: nowrap;\n  }\n\n  @media (min-width: 351px) {\n    width: calc(33% - 30px);\n  }\n\n  @media (min-width: 513px) {\n    width: calc(25% - 30px);\n  }\n\n  @media (min-width: 768px) {\n    width: calc(25% - 30px);\n  }\n\n  @media (min-width: 1200px) {\n    width: calc(20% - 30px);\n  }\n\n  ", "\n  \n  &.active {\n    > div {\n      border: 1px solid ", ";\n      svg path {\n        fill: ", ";\n      }\n    }\n    p {\n      color: ", ";\n    }\n  }\n\n  /* &:not(.active) {\n    border: ", ";\n  } */\n"])), function (props) {
  return props.isDisabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    opacity: 0.3;\n  "])));
}, function (_ref) {
  var _theme$colors;
  var theme = _ref.theme;
  return '1px solid' + (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#fff';
}, function (_ref2) {
  var _theme$colors2;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) || '#fff';
}, function (_ref3) {
  var _theme$colors3;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#fff';
}, function (_ref4) {
  var _theme$layouts, _theme$layouts$checko, _theme$layouts$checko2, _theme$layouts$checko3;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$checko = _theme$layouts.checkout) === null || _theme$layouts$checko === void 0 ? void 0 : (_theme$layouts$checko2 = _theme$layouts$checko.components) === null || _theme$layouts$checko2 === void 0 ? void 0 : (_theme$layouts$checko3 = _theme$layouts$checko2.layout) === null || _theme$layouts$checko3 === void 0 ? void 0 : _theme$layouts$checko3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    align-self: flex-start;\n    p {\n      white-space: pre-wrap;\n    }\n    @media (min-width: 768px) {\n      width: calc(25% - 10px);\n    }\n    @media (min-width: 1024px) {\n      width: calc(20% - 20px);\n    }\n    @media (min-width: 1200px) {\n      width: calc(20% - 30px);\n    }\n  "])));
}, function (_ref5) {
  var theme = _ref5.theme,
    brandInformation = _ref5.brandInformation;
  return (brandInformation === null || brandInformation === void 0 ? void 0 : brandInformation.brand_id) === '5' ? theme.colors.gold : theme.colors.primary;
}, function (_ref6) {
  var theme = _ref6.theme,
    brandInformation = _ref6.brandInformation;
  return (brandInformation === null || brandInformation === void 0 ? void 0 : brandInformation.brand_id) === '5' ? theme.colors.gold : theme.colors.primary;
}, function (_ref7) {
  var theme = _ref7.theme,
    brandInformation = _ref7.brandInformation;
  return (brandInformation === null || brandInformation === void 0 ? void 0 : brandInformation.brand_id) === '5' ? theme.colors.gold : theme.colors.primary;
}, function (_ref8) {
  var isSkeleton = _ref8.isSkeleton;
  return isSkeleton ? '0' : '1px solid #EAEAEA';
});
exports.PayCard = PayCard;
var PayCardSelected = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"])));
exports.PayCardSelected = PayCardSelected;
var CardItemContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bold;\n\n  span {\n    display: flex;\n  }\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  img {\n    max-width: 26px;\n    max-height: 26px;\n  }\n\n  > * {\n    margin-right: 10px\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});
exports.CardItemContent = CardItemContent;