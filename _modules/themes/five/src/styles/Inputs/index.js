"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = exports.InputSecundary = exports.InputPrimary = exports.InputGroupRight = exports.InputGroupPrimary = exports.InputGroupLeft = exports.InputGroup = exports.Input = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _Buttons = require("../Buttons");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Input = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #DBDCDB;\n  border-radius: 7.6px;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n  &:focus {\n    border-color: ", ";\n  }\n  ", "\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #DBDCDB;\n  }\n  &:-ms-input-placeholder {\n    color: #DBDCDB;\n  }\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var w = _ref.w;
  return w && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 20%;\n  "])));
}, function (_ref2) {
  var borderBottom = _ref2.borderBottom;
  return borderBottom && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: none;\n    border-radius: 0px;\n    border-bottom: 1px solid #E9ECEF;\n  "])));
}, function (_ref3) {
  var isError = _ref3.isError;
  return isError && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border-color: ", " !important;\n  "])), function (props) {
    var _props$theme$colors;
    return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.danger500;
  });
}, function (_ref4) {
  var _theme$general, _theme$general$compon, _theme$general$compon2, _theme$general2, _theme$general2$compo, _theme$general2$compo2;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.inputs) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.borderRadius) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general2 = theme.general) === null || _theme$general2 === void 0 ? void 0 : (_theme$general2$compo = _theme$general2.components) === null || _theme$general2$compo === void 0 ? void 0 : (_theme$general2$compo2 = _theme$general2$compo.inputs) === null || _theme$general2$compo2 === void 0 ? void 0 : _theme$general2$compo2.borderRadius);
}, function (_ref5) {
  var _theme$general3, _theme$general3$compo, _theme$general3$compo2, _theme$general4, _theme$general4$compo, _theme$general4$compo2;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general3 = theme.general) === null || _theme$general3 === void 0 ? void 0 : (_theme$general3$compo = _theme$general3.components) === null || _theme$general3$compo === void 0 ? void 0 : (_theme$general3$compo2 = _theme$general3$compo.inputs) === null || _theme$general3$compo2 === void 0 ? void 0 : _theme$general3$compo2.color) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general4 = theme.general) === null || _theme$general4 === void 0 ? void 0 : (_theme$general4$compo = _theme$general4.components) === null || _theme$general4$compo === void 0 ? void 0 : (_theme$general4$compo2 = _theme$general4$compo.inputs) === null || _theme$general4$compo2 === void 0 ? void 0 : _theme$general4$compo2.color);
}, function (_ref6) {
  var _theme$general5, _theme$general5$compo, _theme$general5$compo2, _theme$general6, _theme$general6$compo, _theme$general6$compo2, _theme$general7, _theme$general7$compo, _theme$general7$compo2;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general5 = theme.general) === null || _theme$general5 === void 0 ? void 0 : (_theme$general5$compo = _theme$general5.components) === null || _theme$general5$compo === void 0 ? void 0 : (_theme$general5$compo2 = _theme$general5$compo.inputs) === null || _theme$general5$compo2 === void 0 ? void 0 : _theme$general5$compo2.borderColor) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    &::placeholder,\n    &::-webkit-input-placeholder,\n    &:-ms-input-placeholder {\n      color: ", ";\n    }\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general6 = theme.general) === null || _theme$general6 === void 0 ? void 0 : (_theme$general6$compo = _theme$general6.components) === null || _theme$general6$compo === void 0 ? void 0 : (_theme$general6$compo2 = _theme$general6$compo.inputs) === null || _theme$general6$compo2 === void 0 ? void 0 : _theme$general6$compo2.borderColor, theme === null || theme === void 0 ? void 0 : (_theme$general7 = theme.general) === null || _theme$general7 === void 0 ? void 0 : (_theme$general7$compo = _theme$general7.components) === null || _theme$general7$compo === void 0 ? void 0 : (_theme$general7$compo2 = _theme$general7$compo.inputs) === null || _theme$general7$compo2 === void 0 ? void 0 : _theme$general7$compo2.borderColor);
});
exports.Input = Input;
var InputGroup = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  & > ", ":not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    border-left: 0;\n    padding-left: 0;\n  }\n  & > ", ":not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-right: 0;\n    padding-right: 0;\n  }\n"])), Input, Input);
exports.InputGroup = InputGroup;
var InputGroupLeft = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  line-height: 34px;\n  padding-left: 7px;\n  padding-right: 7px;\n  font-size: 16px;\n  border-width: 1px;\n  height: 34px;\n  border-style: solid;\n  ", "\n  & ", " {\n    margin-left: -7px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      border-left-width: 0;\n      border-radius: 34px 34px 0 0;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      border-radius: 34px 0 0 34px;\n      border-right-width: 0;\n  "])));
}, _Buttons.Button, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        margin-right: -7px;\n        margin-left: 0;\n    "])));
});
exports.InputGroupLeft = InputGroupLeft;
var TextArea = _styledComponents.default.textarea(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: #010300;\n  border: 1px solid #DBDCDB;\n  border-radius: 7.6px;\n  font-size: 16px;\n  padding: 7px 15px;\n  outline: none;\n  resize: none;\n  &:focus {\n    border-color: ", ";\n  }\n  ", "\n  &::placeholder,\n  &::-webkit-input-placeholder {\n    color: #DBDCDB;\n  }\n  &:-ms-input-placeholder {\n    color: #DBDCDB;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref7) {
  var w = _ref7.w;
  return w && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    width: 20%;\n  "])));
}, function (_ref8) {
  var _theme$general8, _theme$general8$compo, _theme$general8$compo2, _theme$general9, _theme$general9$compo, _theme$general9$compo2;
  var theme = _ref8.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general8 = theme.general) === null || _theme$general8 === void 0 ? void 0 : (_theme$general8$compo = _theme$general8.components) === null || _theme$general8$compo === void 0 ? void 0 : (_theme$general8$compo2 = _theme$general8$compo.inputs) === null || _theme$general8$compo2 === void 0 ? void 0 : _theme$general8$compo2.borderRadius) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-radius: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general9 = theme.general) === null || _theme$general9 === void 0 ? void 0 : (_theme$general9$compo = _theme$general9.components) === null || _theme$general9$compo === void 0 ? void 0 : (_theme$general9$compo2 = _theme$general9$compo.inputs) === null || _theme$general9$compo2 === void 0 ? void 0 : _theme$general9$compo2.borderRadius);
}, function (_ref9) {
  var _theme$general10, _theme$general10$comp, _theme$general10$comp2, _theme$general11, _theme$general11$comp, _theme$general11$comp2;
  var theme = _ref9.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general10 = theme.general) === null || _theme$general10 === void 0 ? void 0 : (_theme$general10$comp = _theme$general10.components) === null || _theme$general10$comp === void 0 ? void 0 : (_theme$general10$comp2 = _theme$general10$comp.inputs) === null || _theme$general10$comp2 === void 0 ? void 0 : _theme$general10$comp2.color) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general11 = theme.general) === null || _theme$general11 === void 0 ? void 0 : (_theme$general11$comp = _theme$general11.components) === null || _theme$general11$comp === void 0 ? void 0 : (_theme$general11$comp2 = _theme$general11$comp.inputs) === null || _theme$general11$comp2 === void 0 ? void 0 : _theme$general11$comp2.color);
}, function (_ref10) {
  var _theme$general12, _theme$general12$comp, _theme$general12$comp2, _theme$general13, _theme$general13$comp, _theme$general13$comp2, _theme$general14, _theme$general14$comp, _theme$general14$comp2;
  var theme = _ref10.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general12 = theme.general) === null || _theme$general12 === void 0 ? void 0 : (_theme$general12$comp = _theme$general12.components) === null || _theme$general12$comp === void 0 ? void 0 : (_theme$general12$comp2 = _theme$general12$comp.inputs) === null || _theme$general12$comp2 === void 0 ? void 0 : _theme$general12$comp2.borderColor) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    &::placeholder,\n    &::-webkit-input-placeholder,\n    &:-ms-input-placeholder {\n      color: ", ";\n    }\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general13 = theme.general) === null || _theme$general13 === void 0 ? void 0 : (_theme$general13$comp = _theme$general13.components) === null || _theme$general13$comp === void 0 ? void 0 : (_theme$general13$comp2 = _theme$general13$comp.inputs) === null || _theme$general13$comp2 === void 0 ? void 0 : _theme$general13$comp2.borderColor, theme === null || theme === void 0 ? void 0 : (_theme$general14 = theme.general) === null || _theme$general14 === void 0 ? void 0 : (_theme$general14$comp = _theme$general14.components) === null || _theme$general14$comp === void 0 ? void 0 : (_theme$general14$comp2 = _theme$general14$comp.inputs) === null || _theme$general14$comp2 === void 0 ? void 0 : _theme$general14$comp2.borderColor);
});
exports.TextArea = TextArea;
var InputGroupRight = (0, _styledComponents.default)(InputGroupLeft)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 0 34px 34px 0;\n  line-height: 34px;\n  border-right-width: 1px;\n  border-left-width: 0;\n  ", "\n  & ", " {\n    margin-left: 0;\n    margin-right: -7px;\n    ", "\n  }\n  \n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        border-left-width: 1px;\n        border-right-width: 0;\n        border-radius: 0 0 34px 34px;\n    "])));
}, _Buttons.Button, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-left: -7px;\n        margin-right: 0;\n    "])));
});
exports.InputGroupRight = InputGroupRight;
var InputPrimary = (0, _styledComponents.default)(Input)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: ", ";\n  border-color: ", ";\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.primary);
});
exports.InputPrimary = InputPrimary;
var InputSecundary = (0, _styledComponents.default)(Input)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  background: #FFF;\n  color: ", ";\n  border-color: ", ";\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.colors.secundary);
});
exports.InputSecundary = InputSecundary;
var InputGroupPrimary = (0, _styledComponents.default)(InputGroup)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  & > ", " {\n    color: ", ";\n    border-color: ", ";\n  }\n"])), InputGroupLeft, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.InputGroupPrimary = InputGroupPrimary;