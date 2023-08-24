"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimerInputWrapper = exports.TabsContainer = exports.Tab = exports.StatusItems = exports.SettingHeader = exports.SettingControlPanel = exports.SettingContainer = exports.OverLine = exports.ItemStatus = exports.ItemHeader = exports.ItemContent = exports.IconWrapper = exports.DeliveryStatusWrapper = exports.Actions = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SettingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  /* margin: 0 10px;\n  width: 90px; */\n  height: 41px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  button {\n    border-radius: 7.6px;\n\n\n    &:hover {\n      background: #f7f7f7;\n    }\n  }\n\n"])));
exports.SettingContainer = SettingContainer;
var SettingControlPanel = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n"])));
exports.SettingControlPanel = SettingControlPanel;
var SettingHeader = _styledComponents.default.h2(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 30px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.SettingHeader = SettingHeader;
var TabsContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-bottom: 1px solid ", ";\n  margin-bottom: 25px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.TabsContainer = TabsContainer;
var Tab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  cursor: pointer;\n  color: ", ";\n  white-space: nowrap;\n  font-size: 12px;\n  text-transform: capitalize;\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.lightGray;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 30px;\n  "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    color: ", ";\n    border-bottom: 2px solid ", ";\n    font-weight: 500;\n    font-size: 14px;\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.headingColor;
  });
});
exports.Tab = Tab;
var DeliveryStatusWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  &:before {\n    content: \"\";\n    background: #E9ECEF;\n    position: absolute;\n    width: 2px;\n    height: calc(100% - 60px);\n    top: 7px;\n    left: 7px;\n  }\n"])));
exports.DeliveryStatusWrapper = DeliveryStatusWrapper;
var StatusItems = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n"])));
exports.StatusItems = StatusItems;
var ItemStatus = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 22px;\n  margin: 0 15px;\n  border-radius: 4px;\n  background: ", ";\n"])), function (props) {
  return props.backColor;
});
exports.ItemStatus = ItemStatus;
var ItemHeader = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 5px;\n"])));
exports.ItemHeader = ItemHeader;
var ItemContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0 30px;\n\n  p {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
exports.ItemContent = ItemContent;
var IconWrapper = _styledComponents.default.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: fit-content;\n  height: fit-content;\n  background-color: #fff;\n  z-index: 2;\n"])));
exports.IconWrapper = IconWrapper;
var Actions = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding-top: 22px;\n  button {\n    border-radius: 7.6px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    padding: 7px 15px;\n  }\n"])));
exports.Actions = Actions;
var TimerInputWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border: 1px solid ", ";\n  border-radius: 7.6px;\n  padding: 7px;\n  width: fit-content;\n  margin: 0 30px 15px;\n  color: ", ";\n\n  input {\n    flex: 1;\n    border: none !important;\n    outline: none !important;\n    padding: 5px;\n    font-size: 14px;\n    min-width: 38px;\n    width: fit-content;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.TimerInputWrapper = TimerInputWrapper;
var OverLine = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  height: 100%;\n  width: 15px;\n  top: 0;\n  background-color: #fff;\n"])));
exports.OverLine = OverLine;