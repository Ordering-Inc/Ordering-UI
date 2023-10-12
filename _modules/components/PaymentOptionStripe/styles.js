"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperItems = exports.WarningMessage = exports.OptionStripeContainer = exports.CardItemContent = exports.CardItemActions = exports.CardItem = exports.BlockLoading = exports.ActionsModal = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OptionStripeContainer = exports.OptionStripeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var WarningMessage = exports.WarningMessage = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #D81212;\n  font-size: 24px;\n  padding-left: 10px;\n  font-weight: bold;\n  opacity: 0.8;\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "])));
});
var WrapperItems = exports.WrapperItems = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  button.addcard {\n    width: 100%;\n    margin-top: 20px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n\n    @media (min-width: 381px) {\n      width: 60%;\n    }\n  }\n"])));
var CardItem = exports.CardItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #EAEAEA;\n"])));
var CardItemContent = exports.CardItemContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  width: 90%;\n\n  .checks svg {\n    color: #D81212;\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
});
var CardItemActions = exports.CardItemActions = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 10%;\n  svg {\n    color: #D81212;\n    font-size: 24px;\n    cursor: pointer;\n  }\n"])));
var ActionsModal = exports.ActionsModal = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n\n  button {\n    width: 48%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"])));
var BlockLoading = exports.BlockLoading = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n"])));