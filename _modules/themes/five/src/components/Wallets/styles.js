"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapContent = exports.TransactionsWrapper = exports.Transactions = exports.SectionWrapper = exports.LoyaltyWrapp = exports.LoyaltyContent = exports.Container = exports.BalanceElement = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n\n  .tabs{\n    justify-content: space-between;\n  }\n  .tab_title {\n    padding: 10px 2px;\n  }\n\n  @media (min-width: 576px) {\n    .tabs{\n      justify-content: flex-start;\n    }\n    .tab_title {\n      padding: 10px 15px;\n    }\n  }\n\n  @media (min-width: 768px) {\n    padding: 20px 60px;\n  }\n"])));
exports.Container = Container;
var SectionWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  ", ";\n\n  @media (min-width: 768px) {\n    ", ";\n  }\n"])), function (props) {
  return !props.isLoading && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    align-items: center;\n  "])));
}, function (props) {
  return !props.isLoading && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      align-items: flex-start;\n    "])));
});
exports.SectionWrapper = SectionWrapper;
var TransactionsWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-left: 2px solid ", ";\n"])), function (props) {
  return props.theme.colors.gray200;
});
exports.TransactionsWrapper = TransactionsWrapper;
var BalanceElement = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 250px;\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 8px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n  }\n\n  span {\n    font-size: 10px;\n    margin-left: 5px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});
exports.BalanceElement = BalanceElement;
var WrapContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n  }\n"])));
exports.WrapContent = WrapContent;
var Transactions = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  .transactions_list {\n    margin-top: 20px;\n\n    h2 {\n      text-align: center;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 60%;\n    margin: ", ";\n\n    .transactions_list h2 {\n      text-align: left;\n    }\n  }\n"])), function (props) {
  return props.isLoyaltyLevel ? 0 : '0 auto';
});
exports.Transactions = Transactions;
var LoyaltyContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n\n  @media (min-width: 768px) {\n    width: 38%;\n  }\n"])));
exports.LoyaltyContent = LoyaltyContent;
var LoyaltyWrapp = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 100%;\n  }\n\n  span.loyalty_title {\n    font-size: 20px;\n  }\n\n  span.loyalty_name {\n    font-size: 25px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.LoyaltyWrapp = LoyaltyWrapp;