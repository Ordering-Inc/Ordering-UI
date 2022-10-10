"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderBill = exports.NotCarts = exports.DashLine = exports.CouponContainer = exports.Container = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CartContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  >div {\n    box-sizing: border-box;\n  }\n  @media (min-width: 1024px) {\n   max-width: ", ";\n   margin: 0 auto;\n  }\n  /* border-bottom: 1px solid #F0F0F0; */\n"])), function (_ref) {
  var isCheckout = _ref.isCheckout;
  return isCheckout ? 'unset' : '45vw';
});
exports.CartContainer = CartContainer;
var CartSticky = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  ", "\n"])), function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
});
exports.CartSticky = CartSticky;
var OrderBill = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 25px 15px 20px;\n  background-color: #FFF;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  box-sizing: border-box;\n\n  ", "\n  \n  table {\n    width: 100%;\n    font-size: 16px;\n    line-height: 19px;\n    tr{\n      display: flex;\n      margin-bottom: 10px;\n    }\n    tr td:nth-child(1),\n    tr td:nth-child(3) {\n      width: fit-content;\n      white-space: nowrap;\n    }\n\n    tr td:nth-child(2) {\n      flex-grow: 1;\n      padding: 0 15px;\n    }\n\n    tr td:nth-child(3) {\n      font-weight: bold;\n    }\n\n    \n  }\n  table.total {\n    padding-top: 10px;\n    font-size: 24px;\n    line-height: 29px;\n    tr {\n      td {\n        font-weight: bold;\n      }\n    }\n  }\n"])), function (_ref3) {
  var isCheckout = _ref3.isCheckout;
  return isCheckout ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding: 0;\n        box-shadow: none;\n        margin-top: 10px;\n      "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-top: 35px;\n      padding: 25px 15px 20px;\n      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n\n    "])));
});
exports.OrderBill = OrderBill;
var CouponContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n"])));
exports.CouponContainer = CouponContainer;
var CheckoutAction = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin: 12px 0;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n\n  button {\n    padding: 10px 30px;\n    width: 50%;\n    margin-left: auto;\n    ", "\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n  }\n\n\n  &.floting {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    box-sizing: border-box;\n    padding: 20px;\n    margin: 0;\n    button {\n      width: 45%;\n      @media (min-width: 1024px) {\n        width: 25%;\n      }\n    }\n  }\n\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: unset;\n    "])));
});
exports.CheckoutAction = CheckoutAction;
var Container = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 0px 20px;\n\n  @media (min-width: 769px) {\n    margin-bottom: 10px;\n    padding: 0;\n  }\n"])));
exports.Container = Container;
var NotCarts = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 70%;\n  margin: auto;\n\n  img {\n    width: 150px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 10px 0;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n    color: #000;\n  }\n\n  div {\n    display: flex;\n    width: 100%;\n    button {\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n  }\n\n  \n"])));
exports.NotCarts = NotCarts;
var DashLine = _styledComponents.default.span(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  padding: 0 15px;\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  height: 70%;\n  border-bottom: 1px dashed ", ";;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.DashLine = DashLine;