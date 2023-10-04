"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Option = exports.HourListWrapper = exports.DatePickerWrapper = exports.CheckBoxWrapper = exports.CalendarWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Title = exports.Title = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 40px;\n  color: ", ";\n\n  @media (max-width: 450px) {\n    padding-left: 30px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-right: 30px;\n      padding-left: 0;\n    "])));
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding: 17px 15px 3px 15px;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n\n  input {\n    padding: 10px;\n    border: 1px solid #DEE2E6;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n    outline: none;\n  }\n\n  .react-calendar {\n    border: none;\n\n    .react-calendar__tile--active,\n    .react-calendar__tile:enabled:focus {\n      /* background: ", "; */\n      background: transparent;\n\n      abbr {\n        background: #E9F2FE;\n        color: #344050;\n      }\n    }\n\n    .react-calendar__tile:enabled:hover {\n      background: transparent;\n\n      abbr {\n        background: #EFEFEF;\n        color: #344050;\n      }\n    }\n\n    .react-calendar__tile--now {\n      background: transparent;\n    }\n\n    .react-calendar__month-view__weekdays {\n      font-size: 12px;\n      color: #909BA9;\n      font-weight: normal;\n      text-transform: capitalize;\n      abbr {\n        text-decoration: none;\n      }\n    }\n\n    .react-calendar__month-view__days__day {\n      font-size: 12px;\n      color: #344050;\n      abbr {\n        width: 20px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n\n        @media (min-width: 350px) {\n          width: 34px;\n          height: 32px;\n        }\n      }\n    }\n\n    .react-calendar__tile:disabled {\n      background-color: transparent;\n      // color: ", ";\n      cursor: not-allowed;\n    }\n\n    .react-calendar__navigation {\n      button {\n        background: transparent!important;\n        color: #748194;\n\n        svg {\n          font-size: 24px;\n\n          ", "\n        }\n\n        &:disabled {\n          cursor: not-allowed;\n        }\n\n        span {\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          width: 100%;\n          display: inline-block;\n\n          @media (min-width: 768px) {\n            width: auto;\n            display: initial;\n          }\n        }\n      }\n\n      .react-calendar__navigation__prev2-button,\n      .react-calendar__navigation__next2-button {\n        display: none;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.primaryContrast;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.disabled;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n            transform: rotateZ(180deg);\n          "])));
});
var DatePickerWrapper = exports.DatePickerWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  margin-bottom: 10px;\n\n  @media (min-width: 430px) {\n    width: 325px;\n  }\n\n  .react-datepicker-popper {\n    display: none;\n  }\n\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n\n  > svg {\n    cursor: pointer;\n    font-size: 20px;\n    right: 5px;\n    top: 9px;\n    color: #B1BCCC;\n    position: absolute;\n\n    ", "\n  }\n\n  input {\n    width: 100%;\n    color: #B1BCCC;\n    font-size: 12px;\n    border: 1px solid #DEE2E6;\n    border-radius: 7.6px;\n    padding: 9px 14px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      left: 5px;\n      right: initial;\n    "])));
});
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  span {\n    font-size: 14px;\n    color: #909BA9;\n  }\n\n  svg {\n    color: #B1BCCC;\n    font-size: 24px;\n    margin-right: 10px;\n    min-width: 24px;\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
}, function (_ref) {
  var highlight = _ref.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    span {\n      font-weight: 600;\n      color: ", ";\n    }\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.darkTextColor;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var Option = exports.Option = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    min-width: 16px;\n    font-size: 16px;\n    margin-right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var HourListWrapper = exports.HourListWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 35px;\n  margin-bottom: 100px;\n\n  ", "\n\n  > div {\n    width: 100%;\n    background-color: #FFFFFF !important;\n    border: 1px solid #DEE2E6;\n    border-radius: 7.6px;\n\n    > div {\n      justify-content: space-between;\n    }\n\n    #list {\n      width: 100%;\n      border-radius: 7.6px;\n    }\n  }\n\n  #select-input {\n    height: 44px;\n    > div:first-child {\n      height: 44px;\n      font-size: 14px;\n      color: #B1BCCC;\n\n      span {\n        font-size: 14px;\n        color: #B1BCCC;\n      }\n\n      svg {\n        font-size: 16px;\n        color: #748194;\n      }\n    }\n  }\n"])), function (_ref3) {
  var isLoading = _ref3.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});