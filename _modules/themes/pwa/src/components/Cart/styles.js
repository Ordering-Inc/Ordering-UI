"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderBill = exports.Exclamation = exports.Divider = exports.CouponQuestion = exports.CouponContainer = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CartContainer = exports.CartContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var CartSticky = exports.CartSticky = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
});
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 0;\n  background-color: ", ";\n  table {\n    width: 100%;\n    font-size: 14px;\n    font-weight: 300;\n\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      font-weight: 500;\n      text-align: right;\n      ", "\n    }\n\n    @media (min-width: 576px) {\n      font-size: 16px;\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td {\n        font-weight: bold;\n        color: ", ";\n      }\n    }\n  }\n"])), function (isCheckout) {
  return isCheckout ? 'transparent' : '#FFF';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
});
var CouponContainer = exports.CouponContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n\n"])));
var CheckoutAction = exports.CheckoutAction = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding: 0;\n  box-sizing: border-box;\n\n  p {\n    margin: 0;\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    padding: 10px 30px;\n    width: 100%;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n    @media (min-width: 576px) {\n      width: 50%;\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref2) {
  var isFixed = _ref2.isFixed;
  return isFixed && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    box-sizing: border-box;\n    padding: 10px 15px;\n    background: white;\n    z-index: 10;\n    margin: 0;\n  "])));
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: none;\n  background: #F8F9FA;  \n  height: 8px;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 768px) {\n    display: block;\n    width: calc(100% + 60px);\n    margin-left: -30px;\n  }\n"])));
var CouponQuestion = exports.CouponQuestion = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin-bottom: 0px;\n  }\n\n  span {\n    margin: 0 10px;\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Exclamation = exports.Exclamation = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));