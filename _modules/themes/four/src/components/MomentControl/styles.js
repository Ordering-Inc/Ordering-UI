"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Hours = exports.Hour = exports.Days = exports.DayNumber = exports.DayName = exports.Day = exports.ContentDay = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Title = exports.Title = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 10px;\n"])));
var Days = exports.Days = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow: hidden;\n  cursor: pointer;\n  margin-bottom: 20px;\n  width: 100%;\n  flex-wrap: wrap;\n  position: relative;\n"])));
var ContentDay = exports.ContentDay = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 1;\n  margin: 10px 0;\n  padding: 3px 0;\n  flex-direction: column;\n  align-items: center;\n"])));
var Day = exports.Day = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 1;\n  padding: 5px 0;\n  align-items: center;\n  font-weight: 300;\n  background-color: #F7F7F7;\n  color: ", ";\n  margin: 5px;\n  border-radius: 5px;\n  width: calc(100% / 3 - 10px);\n  /**\n    ** Modify this validation in case the dates to display change\n   */\n  &:nth-child(1) div,\n  &:nth-child(2) div,\n  &:nth-child(3) div {\n    margin-bottom: 5px;\n  }\n\n  &:nth-child(3) div,\n  &:nth-child(6) div {\n    ", "\n  }\n\n  &:nth-child(4) div,\n  &:nth-child(5) div,\n  &:nth-child(6) div {\n    margin-top: 5px;\n  }\n\n  @media (min-width: 426px) {\n    width: calc(100% / 6 - 10px);\n  }\n\n  ", "\n\n\n  :last-child {\n    ", " {\n      ", "\n    }\n  }\n\n  :hover {\n    background-color: ", ";\n    color: #FFF;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        border-left: 0      \n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n       border-right: 0;\n    "])));
}, function (_ref) {
  var selected = _ref.selected;
  return selected && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    font-weight: 400;\n    background-color: ", ";\n    color: #FFF;\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, ContentDay, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        border-left: 0;\n      "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        border-right: 0;\n      "])));
}, function (props) {
  return props.theme.colors.primary;
});
var DayName = exports.DayName = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 20px;\n  line-height: 24px;\n"])));
var DayNumber = exports.DayNumber = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 24px;\n  line-height: 24px;\n"])));
var Hours = exports.Hours = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"])));
var Hour = exports.Hour = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(50% - 5px);\n  justify-content: center;\n  cursor: pointer;\n  font-weight: 300;\n  border: 1px solid #d9d9d9;\n  border-radius: 1000px;\n  padding: 5px 10px;\n  margin-bottom: 7px;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n"])), function (_ref2) {
  var selected = _ref2.selected;
  return selected && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    border-color: ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref3) {
  var isLoading = _ref3.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});