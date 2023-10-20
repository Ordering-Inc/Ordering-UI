"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentMethodsList = exports.PaymentMethodsContainer = exports.PayCardSelected = exports.PayCard = exports.CardItemContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PaymentMethodsContainer = exports.PaymentMethodsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"])));
var PaymentMethodsList = exports.PaymentMethodsList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 15px);\n  margin-left: -15px;\n"])));
var PayCard = exports.PayCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(50% - 30px);\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 15px;\n  text-align: center;\n\n  ", "\n\n  > div {\n    max-width: 88px;\n    width: 100%;\n    border: 1px solid #DEE2E6;\n    border-radius: 7.6px;\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 12px;\n    box-sizing: border-box;\n\n    > svg {\n      font-size: 25px;\n      path {\n        fill: #DEE2E6;\n      }\n    }\n  }\n\n  p {\n    margin: 0px;\n    font-size: 13px;\n    text-align: center;\n    color: #DEE2E6;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 351px) {\n    width: calc(33% - 30px);\n  }\n\n  @media (min-width: 513px) {\n    width: calc(25% - 30px);\n  }\n\n  @media (min-width: 768px) {\n    width: calc(25% - 30px);\n  }\n\n  @media (min-width: 1200px) {\n    width: calc(20% - 30px);\n  }\n\n  &.active {\n    > div {\n      border: 1px solid ", ";\n      svg path {\n        fill: ", ";\n      }\n    }\n    p {\n      color: ", ";\n    }\n  }\n\n  /* &:not(.active) {\n    border: ", ";\n  } */\n"])), function (props) {
  return props.isDisabled && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? '0' : '1px solid #EAEAEA';
});
var PayCardSelected = exports.PayCardSelected = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"])));
var CardItemContent = exports.CardItemContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bold;\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});