"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapperMap = exports.WrapAddressInput = exports.FormControl = exports.FormActions = exports.AddressWrap = exports.AddressTagSection = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FormActions = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 35px;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 44px;\n    width: 100%;\n    text-transform: lowercase;\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])));
exports.FormActions = FormActions;
var FormControl = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  input {\n    box-sizing: border-box;\n    margin: 10px 0px;\n    height: 43px;\n    width: 100%;\n    &.internal_number,\n    &.zipcode {\n      flex: auto;\n    }\n    &::placeholder{\n      color: #CBCBCB\n    }\n  }\n\n  textarea {\n    width: 100%;\n    margin: 10px 0;\n    border-radius: 7.6px;\n    border: 1px solid ", ";\n    &::placeholder{\n      color: #CBCBCB\n    }\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: #FFF;\n    border: 1px solid #BBB;\n    border-radius: 30px;\n    font-size: 16px;\n    padding: 7px 15px;\n    outline: none;\n    ::placeholder {\n      color: #DBDCDB;\n    }\n\n    &:-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #DBDCDB;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  .google-control {\n    .gps-button {\n      border-radius: 7.6px;\n    }\n\n    input {\n      border-radius: ", ";\n      border: 1px solid ", ";\n\n      &:focus {\n        border: 1px solid ", ";\n      }\n    }\n  }\n\n  .internal_number {\n    width: 45%;\n    ", "\n  }\n\n  .zipcode {\n    width: 45%;\n  }\n\n  ", "\n\n  @media (min-width: 481px) {\n    padding: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.gold;
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' ? '0px' : '7.6px';
}, function (props) {
  return props.theme.colors.gold;
}, function (props) {
  return props.theme.colors.gold;
}, function (_ref2) {
  var removeInternalNumberMargin = _ref2.removeInternalNumberMargin;
  return !removeInternalNumberMargin && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", "\n    "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n      "])));
  });
}, function (_ref3) {
  var _theme$general2, _theme$general2$compo, _theme$general2$compo2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general2 = theme.general) === null || _theme$general2 === void 0 ? void 0 : (_theme$general2$compo = _theme$general2.components) === null || _theme$general2$compo === void 0 ? void 0 : (_theme$general2$compo2 = _theme$general2$compo.layout) === null || _theme$general2$compo2 === void 0 ? void 0 : _theme$general2$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    input, textarea, .input-autocomplete {\n      border: 1px solid ", ";\n      border-radius: 0;\n      &::placeholder{\n        color: #959895\n      }\n      &:focus{\n        border-color: ", ";\n      }\n      &:-ms-input-placeholder {\n        color: #959895;\n      }\n      &::-ms-input-placeholder { /* Microsoft Edge */\n        color: #959895;\n      }\n    }\n    "])), function (props) {
    return props.theme.colors.gold;
  }, function (props) {
    return props.theme.colors.gold;
  });
});
exports.FormControl = FormControl;
var AddressWrap = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n\n  button {\n    height: 41px;\n    right: 1px;\n    border: none;\n\n    ", "\n\n    svg {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      left: 1px;\n      right: initial;\n    "])));
});
exports.AddressWrap = AddressWrap;
var WrapAddressInput = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  i {\n    padding: 0px 10px;\n  }\n\n  svg {\n    position: absolute;\n    color: ", ";\n    top: 21px;\n    left: 10px;\n    font-size: 20px;\n    ", "\n  }\n\n  input {\n    background-position: left 10px center !important;\n    background-repeat: no-repeat !important;\n    background-size: 13px !important;\n    padding: 7px 30px 7px 15px !important;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      padding: 7px 15px 7px 30px !important;\n    "])));
});
exports.WrapAddressInput = WrapAddressInput;
var AddressTagSection = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  ", "\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    border: none;\n    color: #B1BCCC;\n\n    img {\n      width: 25px;\n      height: 25px;\n    }\n\n    span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      svg {\n        font-size: 30px;\n      }\n    }\n  }\n\n  button.active {\n    color: ", ";\n  }\n\n  @media (min-width: 768px){\n    ", "\n  }\n  @media (min-width: 1000px){\n    ", "\n  }\n  @media (min-width: 1200px){\n    ", "\n  }\n"])), function (_ref4) {
  var _theme$general3, _theme$general3$compo, _theme$general3$compo2;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general3 = theme.general) === null || _theme$general3 === void 0 ? void 0 : (_theme$general3$compo = _theme$general3.components) === null || _theme$general3$compo === void 0 ? void 0 : (_theme$general3$compo2 = _theme$general3$compo.layout) === null || _theme$general3$compo2 === void 0 ? void 0 : _theme$general3$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    justify-content: center;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref5) {
  var _theme$general4, _theme$general4$compo, _theme$general4$compo2;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general4 = theme.general) === null || _theme$general4 === void 0 ? void 0 : (_theme$general4$compo = _theme$general4.components) === null || _theme$general4$compo === void 0 ? void 0 : (_theme$general4$compo2 = _theme$general4$compo.layout) === null || _theme$general4$compo2 === void 0 ? void 0 : _theme$general4$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      justify-content: space-between;\n      button{\n        min-width: 100px;\n        padding: 0 10px;\n        width: 36px;\n      }\n    "])));
}, function (_ref6) {
  var _theme$general5, _theme$general5$compo, _theme$general5$compo2;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general5 = theme.general) === null || _theme$general5 === void 0 ? void 0 : (_theme$general5$compo = _theme$general5.components) === null || _theme$general5$compo === void 0 ? void 0 : (_theme$general5$compo2 = _theme$general5$compo.layout) === null || _theme$general5$compo2 === void 0 ? void 0 : _theme$general5$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      justify-content: space-around;\n      button{\n        padding: 0 20px;\n        min-width: 80px;\n      }\n    "])));
}, function (_ref7) {
  var _theme$general6, _theme$general6$compo, _theme$general6$compo2;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general6 = theme.general) === null || _theme$general6 === void 0 ? void 0 : (_theme$general6$compo = _theme$general6.components) === null || _theme$general6$compo === void 0 ? void 0 : (_theme$general6$compo2 = _theme$general6$compo.layout) === null || _theme$general6$compo2 === void 0 ? void 0 : _theme$general6$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      flex-wrap: nowrap;\n      justify-content: space-between;\n      button{\n        min-width: 100px;\n      }\n    "])));
});
exports.AddressTagSection = AddressTagSection;
var WrapperMap = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 170px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));
exports.WrapperMap = WrapperMap;
var WrapperSkeleton = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n\n  span {\n    width: 100%;\n  }\n"])));
exports.WrapperSkeleton = WrapperSkeleton;