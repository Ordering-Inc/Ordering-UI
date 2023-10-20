"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Option = exports.MomentControlContainer = exports.HourListWrapper = exports.DatePickerWrapper = exports.DatePickerInput = exports.CheckBoxWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MomentControlContainer = exports.MomentControlContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n\n  ", "\n\n  @media (min-width: 768px) {\n    ", "\n  }\n"])), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 90%;\n    margin: 20px auto;\n  "])));
}, function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      width: 100%;\n    "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      width: 60%;\n      margin: 50px auto;\n    "])));
});
var Title = exports.Title = _styledComponents.default.h1(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 24px;\n  text-align: center;\n  width: 100%;\n  margin: 0 0 20px 0;\n\n  @media (min-width: 768px) {\n    font-size: 32px;\n  }\n\n  @media (min-width: 992px) {\n    font-size: 40px;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 48px;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var DatePickerWrapper = exports.DatePickerWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 7.6px;\n  padding: 15px 0;\n  border: 2px solid ", ";\n\n  input {\n    padding: 10px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    outline: none;\n  }\n\n  .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header {\n    color: ", ";\n  }\n\n  .react-datepicker {\n    border-color: transparent;\n  }\n\n  .react-datepicker__triangle {\n    display: none;\n  }\n\n  .react-datepicker-popper {\n    position: relative !important;\n    transform: translate(0, 0) !important;\n  }\n\n  .react-datepicker__day--selected {\n    background-color: ", ";\n    color: ", ";\n    border-radius: 50%;\n  }\n\n  .react-datepicker__input-container {\n    text-align: center;\n  }\n\n  .react-datepicker__header {\n    border: none;\n    background-color: white;\n  }\n\n  .react-datepicker__day:hover, .react-datepicker__month-text:hover, .react-datepicker__quarter-text:hover, .react-datepicker__year-text:hover {\n    border-radius: 50%;\n  }\n\n  .react-datepicker__day--selected {\n    background-color: #f8ccd6;\n    border-radius: 50%;\n    color: ", ";\n  }\n\n  @media (max-width: 576px) {\n    .react-datepicker {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.secundary;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.grayDark;
});
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  span {\n    font-size: 14px;\n    color: ", ";\n  }\n\n  svg {\n    color: #B1BCCC;\n    font-size: 24px;\n    margin-right: 10px;\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.grayMedium;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
}, function (_ref3) {
  var highlight = _ref3.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    span {\n      color: ", ";\n    }\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.colorPage;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref4) {
  var isLoading = _ref4.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var Option = exports.Option = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    min-width: 16px;\n    font-size: 16px;\n    margin-right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var HourListWrapper = exports.HourListWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 35px;\n  margin-bottom: 100px;\n\n  ", "\n\n  > div {\n    width: 100%;\n    background-color: #FFFFFF !important;\n    border: 2px solid ", ";\n    border-radius: 7.6px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n\n    > div {\n      justify-content: space-between;\n    }\n\n    #list {\n      width: 100%;\n      max-height: 200px;\n      overflow: auto;\n      background-color: #FFFFFF;\n    }\n  }\n\n  #select-input {\n    > div:first-child {\n      color: ", ";\n    }\n  }\n"])), function (_ref5) {
  var isLoading = _ref5.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.colorPage;
});
var DatePickerInput = exports.DatePickerInput = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  width: 200px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  text-align: center;\n\n  @media (min-width: 375px) {\n    width: 250px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});