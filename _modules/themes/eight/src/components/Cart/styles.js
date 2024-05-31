"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderBill = exports.CustomCartBottom = exports.CouponContainer = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = exports.CartActionsGroupContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var CartContainer = exports.CartContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"])), function (_ref) {
  var isCustomMode = _ref.isCustomMode;
  return !isCustomMode && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #F0F0F0;\n  "])));
}, function (_ref2) {
  var isCheckout = _ref2.isCheckout;
  return isCheckout && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: -10px;\n    margin-left: -10px;\n  "])));
});
var CartSticky = exports.CartSticky = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var isCartOnProductsList = _ref3.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
});
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 20px;\n  background-color: #FFF;\n  margin-top: 30px;\n\n  table {\n    width: 100%;\n    font-size: 16px;\n    font-weight: 300;\n\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: #D81212;\n      }\n    }\n  }\n\n  @media (min-width: 411px) {\n    table {\n      font-size: 18px;\n    }\n  }\n\n  @media (min-width: 681px) {\n    padding: 10px;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
});
var CouponContainer = exports.CouponContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n"])));
var CheckoutAction = exports.CheckoutAction = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  button {\n    padding: 10px 30px;\n    width: 90%;\n    transition: unset;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n  }\n"])));
var CustomCartBottom = exports.CustomCartBottom = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 0px;\n  background: #FFF;\n  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);\n  width: 100%;\n  padding: 25px 20px;\n  z-index: 1000;\n  box-sizing: border-box;\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    right: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    left: 0px;\n  "])));
});
var CartActionsGroupContainer = exports.CartActionsGroupContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 800px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n"])));