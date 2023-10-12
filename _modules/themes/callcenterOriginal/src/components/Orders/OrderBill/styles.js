"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectWrapper = exports.RefundWalletButtonWrapper = exports.RefundReasonContainer = exports.RefundContainer = exports.RefundButtonWrapper = exports.RefundAmountWrapper = exports.RadioItemContainer = exports.OrderBillContainer = exports.Option = exports.ErrorText = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderBillContainer = exports.OrderBillContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 15px 0 20px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 100%;\n    font-size: 14px;\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid ", ";\n    margin-top: 15px;\n    tr {\n      font-size: 16px;\n      td {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n    }\n  }\n  table.payments {\n    margin-top: 15px;\n    thead {\n      th {\n        font-weight: 600;\n        font-size: 16px;\n        padding-bottom: 5px;\n      }\n    }\n  }\n  table.comments {\n    margin-top: 20px;\n    align-items: center;\n  }\n  table.spot_number,\n  table.vehicle {\n    margin-top: 20px;\n  }\n  table.delivery_option {\n    margin-top: 15px;\n    thead {\n      th {\n        font-weight: 600;\n        font-size: 16px;\n        padding-bottom: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
}, function (props) {
  return props.theme.colors.borderColor;
});
var RefundButtonWrapper = exports.RefundButtonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px 0;\n\n  > button {\n    height: 44px;\n  }\n"])));
var RefundWalletButtonWrapper = exports.RefundWalletButtonWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px 0;\n\n  > button {\n    height: 44px;\n  }\n"])));
var RefundContainer = exports.RefundContainer = _styledComponents.default.form(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    font-size: 20px;\n    font-weight: 700;\n    text-align: center;\n    margin: 0 0 30px 0;\n  }\n\n  p {\n    margin: 4px 0;\n    font-size: 14px;\n  }\n\n  button {\n    height: 44px;\n  }\n"])));
var RadioItemContainer = exports.RadioItemContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 0;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n  > span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n    pointer-events: none;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.disabled;
  });
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-right: 13px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 13px;\n    "])));
});
var RefundAmountWrapper = exports.RefundAmountWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 28px;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-left: 28px;\n  "])));
});
var RefundReasonContainer = exports.RefundReasonContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 40px 0;\n\n  label {\n    font-size: 14px;\n    margin-bottom: 7px;\n  }\n"])));
var Option = exports.Option = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n  white-space: nowrap;\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
var SelectWrapper = exports.SelectWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  \n  > span {\n    font-size: 14px;\n    margin-bottom: 7px;\n  }\n  .select {\n    width: 100%;\n    background: ", ";\n    border: none;\n\n    > div:first-child {\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var ErrorText = exports.ErrorText = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  text-align: center;\n  color: ", ";\n  font-size: 16px;\n"])), function (props) {
  return props.theme.colors.danger;
});