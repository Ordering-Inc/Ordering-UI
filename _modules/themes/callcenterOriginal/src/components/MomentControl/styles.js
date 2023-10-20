"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TimeListWrapper = exports.TimeListHeader = exports.TimeListContent = exports.DateWrapper = exports.DateTimeWrapper = exports.CheckedIcon = exports.CheckBoxWrapper = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Title = exports.Title = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 40px;\n  color: ", ";\n\n  @media (max-width: 450px) {\n    padding-left: 30px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkTextColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-right: 30px;\n      padding-left: 0;\n    "])));
});
var CheckBoxWrapper = exports.CheckBoxWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  span {\n    font-size: 14px;\n    color: #909BA9;\n  }\n\n  svg {\n    color: #B1BCCC;\n    font-size: 24px;\n    margin-right: 10px;\n    min-width: 24px;\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
}, function (_ref) {
  var highlight = _ref.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    span {\n      font-weight: 600;\n      color: ", ";\n    }\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.darkTextColor;
  }, function (props) {
    var _props$theme$colors3;
    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.primary;
  });
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var DateTimeWrapper = exports.DateTimeWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n\n  > div {\n    border: 1px solid #E9ECEF;\n    box-sizing: border-box;\n    border-radius: 7.6px;\n  }\n"])));
var DateWrapper = exports.DateWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 14px 0px;\n  padding: 10px 2px;\n  display: flex;\n  justify-content: center;\n\n  .react-calendar {\n    border: none;\n    border-radius: 7.6px;\n    font-family: 'Poppins',sans-serif;\n\n    .react-calendar__tile--active,\n    .react-calendar__tile:enabled:focus {\n      background: transparent;\n      abbr {\n        background: #F5F9FF;\n        color: #344050;\n      }\n    }\n\n    .react-calendar__tile:enabled:hover {\n      background: transparent;\n\n      abbr {\n        background: #EFEFEF;\n        color: #344050;\n      }\n    }\n\n    .react-calendar__tile--now {\n      background: transparent;\n    }\n\n    .react-calendar__month-view__weekdays {\n      font-size: 12px;\n      color: #909BA9;\n      font-weight: normal;\n      text-transform: capitalize;\n      abbr {\n        text-decoration: none;\n      }\n    }\n\n    .react-calendar__month-view__days__day {\n      font-size: 12px;\n      color: #344050;\n      abbr {\n        width: 20px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n\n        @media (min-width: 350px) {\n          width: 34px;\n          height: 32px;\n        }\n      }\n    }\n\n    .react-calendar__tile:disabled {\n      background-color: transparent;\n      color: ", ";\n      cursor: not-allowed;\n    }\n\n    .react-calendar__navigation {\n      margin-bottom: 5px;\n      button {\n        background: transparent!important;\n        color: #748194;\n\n        svg {\n          font-size: 24px;\n\n          ", "\n        }\n\n        &:disabled {\n          cursor: not-allowed;\n        }\n\n        span {\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          width: 100%;\n          display: inline-block;\n\n          @media (min-width: 768px) {\n            width: auto;\n            display: initial;\n          }\n        }\n      }\n\n      .react-calendar__navigation__prev2-button,\n      .react-calendar__navigation__next2-button {\n        display: none;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    width: calc(50% - 12px);\n    margin-right: 12px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.disabled;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n            transform: rotateZ(180deg);\n          "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n    "])));
});
var TimeListWrapper = exports.TimeListWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 14px 0px;\n  padding: 20px 10px;\n  display: flex;\n  justify-content: center;\n\n  > div {\n    width: 350px;\n    max-width: 100%;\n  }\n\n  @media (min-width: 375px) {\n    padding: 20px 15px;\n  }\n\n  @media (min-width: 768px) {\n    width: calc(50% - 12px);\n    margin-left: 12px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-right: 12px;\n    "])));
});
var TimeListHeader = exports.TimeListHeader = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #748194;\n  svg {\n    font-size: 24px;\n    cursor: pointer;\n  }\n  span {\n    font-size: 14px;\n  }\n"])));
var TimeListContent = exports.TimeListContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  max-height: 295px;\n  overflow: auto;\n  margin-top: 14px;\n\n  > button {\n    font-size: 14px;\n    line-height: 24px;\n    padding: 4px 8px;\n    margin: 0px 10px 16px 0px;\n    ", "\n    width: calc(50% - 15px);\n\n    @media (min-width: 340px) {\n      margin: 0px 7px 16px 0px;\n      ", "\n    width: calc(33.33% - 7px);\n    }\n\n    @media (min-width: 414px) {\n      margin: 0px 9px 16px 0px;\n      width: calc(25% - 9px);\n      ", "\n    }\n\n    @media (min-width: 768px) {\n      margin: 0px 15px 16px 0px;\n      ", "\n      width: calc(33.33% - 15px);\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin: 0px 0px 16px 10px;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin: 0px 0px 16px 7px;\n      "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin: 0px 0px 16px 9px;\n      "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin: 0px 0px 16px 15px;\n      "])));
});
var CheckedIcon = exports.CheckedIcon = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  border: 6px solid ", ";\n  margin: 2px 12px 2px 2px;\n  ", "\n"])), function (props) {
  var _props$theme$colors5;
  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin: 2px 2px 2px 12px;\n  "])));
});
var ButtonWrapper = exports.ButtonWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  button {\n    width: 100%;\n    height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      position: absolute;\n      font-size: 21px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        left: 17px;\n      "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n        right: 17px;\n      "])));
});