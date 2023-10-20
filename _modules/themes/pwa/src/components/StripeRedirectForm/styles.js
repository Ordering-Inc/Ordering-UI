"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormRedirect = exports.FormGroup = exports.ErrorMessage = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormRedirect = exports.FormRedirect = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 5px;\n  ", "\n  button {\n    width: 100%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    margin-top: 10px;\n\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .StripeElement,\n  .StripeElementIdeal {\n    display: block;\n    margin: 0 10px;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n  }\n\n  .StripeElement--focus,\n  .StripeElementIdeal--focus {\n    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,\n      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;\n    -webkit-transition: all 150ms ease;\n    transition: all 150ms ease;\n  }\n\n  .StripeElement.loading {\n    height: 41.6px;\n    opacity: 0.6;\n  }\n\n  .StripeElementIdeal {\n    padding: 0;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding-right: 5px;\n    padding-left: 0px;\n  "])));
});
var FormGroup = exports.FormGroup = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  label {\n    margin-bottom: 5px;\n  }\n\n  select {\n    padding: 7px 5px;\n    margin-top: 8px;\n    font-size: 16px;\n    border-radius: 7.6px;\n    border: 1px solid #DBDCDB;\n  }\n"])));
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  color: #D81212;\n  margin: 10px 0 0 0;\n  font-weight: bold;\n"])));