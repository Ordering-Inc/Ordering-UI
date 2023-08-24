"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.OrderBill = exports.Exclamation = exports.Divider = exports.CouponContainer = exports.CommentContainer = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CartContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.CartContainer = CartContainer;
var CartSticky = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
});
exports.CartSticky = CartSticky;
var OrderBill = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 0;\n  background-color: ", ";\n  table {\n    width: 100%;\n    font-size: 14px;\n\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td {\n        font-weight: bold;\n        color: ", ";\n        font-size: 16px;\n      }\n    }\n  }\n  table.comments {\n    margin-top: 20px;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n    textarea {\n      width: 100%;\n      box-sizing: border-box;\n      border-radius: 7.6px;\n      height: 77px;\n      padding-right: 60px;\n    }\n  }\n"])), function (isCheckout) {
  return isCheckout ? 'transparent' : '#FFF';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
exports.OrderBill = OrderBill;
var CouponContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n"])));
exports.CouponContainer = CouponContainer;
var CheckoutAction = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0px;\n  box-sizing: border-box;\n\n  button {\n    padding: 10px 30px;\n    min-width: 150px;\n    width: 100%;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n  }\n"])));
exports.CheckoutAction = CheckoutAction;
var Divider = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 768px) {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n  }\n"])));
exports.Divider = Divider;
var Exclamation = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));
exports.Exclamation = Exclamation;
var Spinner = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-20%, 15%);\n"])));
exports.Spinner = Spinner;
var CommentContainer = _styledComponents.default.td(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  .spinner-content > div{\n    width: 50px;\n    height: 50px;\n  }\n"])));
exports.CommentContainer = CommentContainer;