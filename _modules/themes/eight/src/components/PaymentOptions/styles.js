"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapPaymethodSelect = exports.PaymentMethodsList = exports.PaymentMethodsContainer = exports.PayCardSelected = exports.PayCardOption = exports.CardItemContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PaymentMethodsContainer = exports.PaymentMethodsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n"])));
var PaymentMethodsList = exports.PaymentMethodsList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n\n  @media (min-width: 841px) {\n    justify-content: space-around;\n  }\n"])));
var PayCardOption = exports.PayCardOption = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  color: ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    span {\n      width: 100%;\n      border-radius: 30px;\n    }\n  "])));
});
var PayCardSelected = exports.PayCardSelected = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"])));
var CardItemContent = exports.CardItemContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bold;\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});
var WrapPaymethodSelect = exports.WrapPaymethodSelect = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  > div {\n    width: 100%;\n    background-color: #FFF;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    height: 44px;\n    border: none;\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      justify-content: space-between;\n    }\n    > div#list {\n      width: 100%;\n    }\n  }\n"])));