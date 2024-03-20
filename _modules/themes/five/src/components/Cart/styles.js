"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningText = exports.SpotSelect = exports.SpinnerCart = exports.Spinner = exports.SavedContainer = exports.OrderBill = exports.NoValidProductMessage = exports.IconContainer = exports.Exclamation = exports.DriverTipContainer = exports.Divider = exports.CouponContainer = exports.CommentContainer = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var CartContainer = exports.CartContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var CartSticky = exports.CartSticky = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
});
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 0px;\n  background-color: ", ";\n  table {\n    width: 100%;\n    font-size: 14px;\n\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n\n    .icon {\n      display: flex;\n      align-items: center;\n      max-height: 25px;\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td {\n        font-weight: bold;\n        color: ", ";\n        font-size: 16px;\n\n        &#loyalty {\n          font-weight: normal;\n          font-size: 14px;\n        }\n      }\n    }\n  }\n  table.comments {\n    margin-top: 20px;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n    textarea {\n      width: 100%;\n      box-sizing: border-box;\n      border-radius: 7.6px;\n      height: 77px;\n      padding-right: 60px;\n    }\n  }\n  table.spot {\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        cursor: pointer;\n        &:hover {\n        text-decoration: underline;\n      }\n      }\n    }\n  }\n"])), function (isCheckout) {
  return isCheckout ? 'transparent' : '#FFF';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});
var CouponContainer = exports.CouponContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n\n  input, button {\n    border-radius: 7.6px;\n  }\n"])));
var CheckoutAction = exports.CheckoutAction = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  p {\n    margin: 0;\n    font-weight: 600;\n    font-size: 18px;\n    color: ", ";\n  }\n\n  button {\n    padding: 10px 30px;\n    min-width: 150px;\n    width: 50%;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n  margin-left: 0;\n\n  @media (min-width: 768px) {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n  }\n"])));
var Exclamation = exports.Exclamation = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));
var Spinner = exports.Spinner = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-20%, 15%);\n"])));
var CommentContainer = exports.CommentContainer = _styledComponents.default.td(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  .spinner-content > div{\n    width: 50px;\n    height: 50px;\n  }\n"])));
var IconContainer = exports.IconContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  height: 20px;\n  svg:nth-child(1){\n    position: relative;\n    top: -1px;\n  }\n  svg:nth-child(2){\n    position: relative;\n    top: -3px;\n  }\n"])));
var SavedContainer = exports.SavedContainer = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  color: ", ";\n  background: ", ";\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 || (_props$theme2 = _props$theme2.colors) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.primaryContrast;
}, function (props) {
  var _props$theme3;
  return (0, _polished.lighten)('0.2', (_props$theme3 = props.theme) === null || _props$theme3 === void 0 || (_props$theme3 = _props$theme3.colors) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.primary);
});
var SpotSelect = exports.SpotSelect = _styledComponents.default.select(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n  border-radius: 7.6px;\n  height: 25px;\n  border: none;\n  font-size: 12px;\n  outline: none;\n  margin: 0 5px 0 15px;\n  padding: 0 3px;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-progress-appearance: none;\n\n  ", "\n"])), function (_ref3) {
  var isCheckout = _ref3.isCheckout;
  return isCheckout ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    var _props$theme4;
    return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.backgroundPage;
  }) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    var _props$theme5;
    return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.grayDividerColor;
  });
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin: 0 15px 0 5px;\n  "])));
});
var NoValidProductMessage = exports.NoValidProductMessage = _styledComponents.default.p(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"])));
var DriverTipContainer = exports.DriverTipContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n  }\n  > p {\n    margin: 0;\n    font-size: 16px;\n    color: #909BA9;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var SpinnerCart = exports.SpinnerCart = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ", "\n"])), function (_ref4) {
  var emptyCart = _ref4.emptyCart;
  return emptyCart && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    top: 0;\n  "])));
});
var WarningText = exports.WarningText = _styledComponents.default.p(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});