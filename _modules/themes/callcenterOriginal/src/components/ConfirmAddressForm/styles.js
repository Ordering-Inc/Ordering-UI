"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapperMap = exports.WrapAddressInput = exports.FormControl = exports.FormActions = exports.AddressWrap = exports.AddressTagSection = exports.AddressMarkContainer = exports.AddressFormContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormActions = exports.FormActions = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 44px;\n    width: 100%;\n    text-transform: lowercase;\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])));
var FormControl = exports.FormControl = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  input {\n    box-sizing: border-box;\n    margin: 10px 0px;\n    height: 50px;\n    width: 100%;\n    &.internal_number,\n    &.zipcode {\n      flex: auto;\n    }\n    &::placeholder{\n      color: #CBCBCB\n    }\n  }\n\n  textarea {\n    width: 100%;\n    margin: 10px 0;\n    border-radius: 7.6px;\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: #FFF;\n    border: 1px solid #BBB;\n    border-radius: 30px;\n    font-size: 16px;\n    padding: 7px 15px !important;\n    height: 50px;\n    outline: none;\n    ::placeholder {\n      color: #DBDCDB;\n    }\n\n    &:-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #DBDCDB;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  .google-control {\n    .gps-button {\n      border-radius: 7.6px;\n      width: auto;\n      min-width: 30px;\n    }\n\n    input {\n      border-radius: 7.6px;\n      border: 1px solid ", ";\n\n      &:focus {\n        border: 1px solid ", ";\n      }\n    }\n  }\n\n  .internal_number {\n    width: 45%;\n    ", "\n  }\n\n  .zipcode {\n    width: 45%;\n  }\n\n  @media (min-width: 481px) {\n    padding: 10px;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
});
var AddressWrap = exports.AddressWrap = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  margin-top: -11px;\n\n  button {\n    height: 41px;\n    right: 1px;\n    border: none;\n\n    ", "\n\n    svg {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      left: 1px;\n      right: initial;\n    "])));
});
var WrapAddressInput = exports.WrapAddressInput = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  i {\n    padding: 0px 10px;\n  }\n\n  svg {\n    position: absolute;\n    color: ", ";\n    top: 21px;\n    left: 10px;\n    font-size: 20px;\n    ", "\n  }\n\n  input {\n    background-position: left 10px center !important;\n    background-repeat: no-repeat !important;\n    background-size: 13px !important;\n    padding: 7px 30px 7px 15px !important;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      padding: 7px 15px 7px 30px !important;\n    "])));
});
var AddressTagSection = exports.AddressTagSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    border: none;\n    color: #B1BCCC;\n\n    img {\n      width: 25px;\n      height: 25px;\n    }\n\n    span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      svg {\n        font-size: 30px;\n      }\n    }\n  }\n\n  button.active {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 170px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));
var WrapperSkeleton = exports.WrapperSkeleton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 9px 10px;\n\n  span {\n    width: 100%;\n  }\n"])));
var AddressFormContainer = exports.AddressFormContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 90%;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 20px;\n\n  h1{\n    font-size: 24px;\n    text-align: center;\n\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 768px){\n    width: 90%;\n\n    ul{\n      width: 100%;\n    }\n\n  }\n"])));
var AddressMarkContainer = exports.AddressMarkContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  background: #FFE69C;\n  border: 1px solid #FFF3CD;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  position: absolute;\n  top: 50px;\n  width: max-content;\n  p {\n    margin: 0;\n    color: #664D03;\n    font-size: 12px;\n  }\n\n  ", "\n"])), function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      background-color: #F8D7DA;\n      border: 1px solid #F1AEB5;\n      p {\n        color: #842029;\n      }\n  "])));
});