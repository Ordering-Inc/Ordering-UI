"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapContent = exports.TransactionsWrapper = exports.Transactions = exports.Title = exports.TabsContainer = exports.Tab = exports.SectionWrapper = exports.NotFoundText = exports.LoyaltyWrapp = exports.LoyaltyContent = exports.Container = exports.BalanceElement = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  padding: 30px 15px 15px 15px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 280px);\n\n  @media (min-width: 768px) {\n    width: 70%;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 32px;\n  margin-bottom: 30px;\n  margin-top: 0;\n"])));
var TabsContainer = exports.TabsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.gray200;
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  margin-right: 30px;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 0px;\n    margin-left: 30px;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    ", "\n  "])), function (_ref2) {
    var borderBottom = _ref2.borderBottom;
    return borderBottom && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid;\n    "])));
  });
}, function (_ref3) {
  var active = _ref3.active;
  return !active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkGray;
  });
});
var SectionWrapper = exports.SectionWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding-top: 30px;\n  display: flex;\n  flex-direction: column;\n\n  ", ";\n\n  @media (min-width: 768px) {\n    ", ";\n  }\n"])), function (props) {
  return !props.isLoading && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    align-items: center;\n  "])));
}, function (props) {
  return !props.isLoading && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      align-items: flex-start;\n    "])));
});
var TransactionsWrapper = exports.TransactionsWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-left: 2px solid ", ";\n"])), function (props) {
  return props.theme.colors.gray200;
});
var BalanceElement = exports.BalanceElement = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 250px;\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 8px;\n\n  h1 {\n    font-size: 20px;\n    font-weight: bold;\n    margin: 0;\n    padding: 0;\n  }\n\n  span {\n    font-size: 10px;\n    margin-left: 5px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});
var WrapContent = exports.WrapContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column-reverse;\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n  }\n"])));
var Transactions = exports.Transactions = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  .transactions_list {\n    margin-top: 20px;\n\n    h2 {\n      text-align: center;\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: 60%;\n    margin: 0;\n\n    .transactions_list h2 {\n      text-align: left;\n    }\n  }\n"])));
var LoyaltyContent = exports.LoyaltyContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n\n  @media (min-width: 768px) {\n    width: 38%;\n  }\n"])));
var LoyaltyWrapp = exports.LoyaltyWrapp = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    width: 100%;\n  }\n\n  span.loyalty_title {\n    font-size: 20px;\n  }\n\n  span.loyalty_name {\n    font-size: 25px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var NotFoundText = exports.NotFoundText = _styledComponents.default.h1(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  opacity: 0.5;\n  text-align: center;\n  color: #344050;\n"])));