"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningText = exports.ViewButtonsWrapper = exports.SpinnerLoaderWrapper = exports.HeaderTitleContainer = exports.Header = exports.EventProfessionalPhoto = exports.EventContainer = exports.Container = exports.CalendarWrapper = exports.CalendarLabelContainer = exports.CalendarHeaderContainer = exports.BusinessSelectorWrapper = exports.BusinessName = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  max-height: 100vh;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"])));
var SpinnerLoaderWrapper = exports.SpinnerLoaderWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 100;\n\n  > div {\n    height: 100%;\n  }\n"])));
var Header = exports.Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var HeaderTitleContainer = exports.HeaderTitleContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  h1 {\n    font-size: 20px;\n    margin: 0px;\n    line-height: 30px;\n    font-weight: 700;\n  }\n  > button {\n    ", "\n\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
var BusinessName = exports.BusinessName = _styledComponents.default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  cursor: pointer;\n"])));
var BusinessSelectorWrapper = exports.BusinessSelectorWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  width: fit-content;\n  margin: 3px 0;\n\n  > span {\n    font-size: 14px;\n    color: ", ";\n    &.calendar {\n      color: ", ";\n    }\n  }\n\n  > svg {\n    margin: 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  return props.theme.colors.primary;
});
var CalendarWrapper = exports.CalendarWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding-top: 20px;\n  overflow: auto;\n\n  .rbc-calendar {\n    min-width: 728px;\n    color: ", ";\n\n    .rbc-header {\n      padding: 7px 3px;\n      span {\n        font-size: 16px;\n        font-weight: 600;\n        color: ", ";\n      }\n    }\n\n    .rbc-time-view {\n      border-left: none;\n      border-right: none;\n      .rbc-allday-cell {\n        display: none;\n      }\n      .rbc-time-content {\n        border-width: 1px;\n      }\n    }\n    .rbc-event {\n      background-color: ", ";\n      border: none;\n      padding: 0;\n      color: ", ";\n    }\n    .rbc-event-label {\n      display: none;\n    }\n    .rbc-timeslot-group {\n      min-height: 60px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.headingColor;
});
var CalendarHeaderContainer = exports.CalendarHeaderContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n"])));
var CalendarLabelContainer = exports.CalendarLabelContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  span.label {\n    font-weight: 600;\n    font-size: 16px;\n    margin: 0 3px;\n    color: ", ";\n  }\n  > button {\n    > svg {\n      width: 16px;\n      height: 16px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var ViewButtonsWrapper = exports.ViewButtonsWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  button {\n    margin: 0 3px;\n  }\n"])));
var EventContainer = exports.EventContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid ", ";\n  padding: 2px 5px;\n  border-radius: 8px;\n  height: 100%;\n\n  > div.info {\n    width: calc(100% - 42px);\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    p.name {\n      font-size: 12px;\n      font-weight: 500;\n      line-height: 18px;\n      margin: 0;\n    }\n    p.date {\n      font-size: 10px;\n      line-height: 15px;\n      color: ", ";\n      margin: 0;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.lightGray;
});
var EventProfessionalPhoto = exports.EventProfessionalPhoto = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    object-fit: cover;\n  }\n  svg {\n    width: 85%;\n    height: 85%;\n  }\n"])));
var WarningText = exports.WarningText = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.danger;
});