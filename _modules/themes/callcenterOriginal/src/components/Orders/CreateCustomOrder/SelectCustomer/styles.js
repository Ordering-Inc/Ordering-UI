"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.SelectedUserWrapper = exports.SelectOption = exports.SectionContainer = exports.SearchBarWrapper = exports.SearchBarContainer = exports.SavedPlaces = exports.OptionsToSelectContainer = exports.CustomerAddressWrapper = exports.AddressListWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SectionContainer = exports.SectionContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n\n  > p {\n    font-size: 14px;\n    line-height: 24px;\n    margin-top: 0;\n    margin-bottom: 24px;\n  }\n"])));
var SearchBarContainer = exports.SearchBarContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > button {\n    height: 44px;\n    white-space: nowrap;\n  }\n"])));
var SearchBarWrapper = exports.SearchBarWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  flex: 1;\n\n  ", "\n\n  > input {\n    width: 100%;\n    height: 44px;\n    ", "\n  }\n\n  span.loading {\n    position: absolute;\n    top: 10px;\n    ", "\n\n    @keyframes spinner-content {\n      0% { transform: rotate(0) }\n      100% { transform: rotate(360deg) }\n    }\n\n    svg {\n      animation: spinner-content 1.85s linear infinite;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    margin-left: 13px;\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 13px;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding-right: 40px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      right: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
});
var OptionsToSelectContainer = exports.OptionsToSelectContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  max-height: 300px;\n  overflow-x: hidden;\n  border-radius: 8px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  padding: 9px 0;\n\n  > p {\n    font-size: 12px;\n    margin: 0 16px;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
});
var SelectOption = exports.SelectOption = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 100%;\n  padding: 9px 16px;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: ", ";\n  }\n  span {\n    font-size: 14px;\n    &.name {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 24px;\n  max-height: 24px;\n  height: 24px;\n  width: 24px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  margin: 0 6px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    object-fit: cover;\n  }\n"])));
var SelectedUserWrapper = exports.SelectedUserWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  border: 1px solid ", ";\n  height: 44px;\n  display: flex;\n  align-items: center;\n  flex: 1;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-left: 13px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 13px;\n  "])));
});
var CustomerAddressWrapper = exports.CustomerAddressWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-top: 21px;\n  > div {\n    display: flex;\n    align-items: center;\n    svg {\n      color: ", ";\n      font-size: 14px;\n    }\n  \n    span {\n      flex: 1;\n      font-size: 14px;\n      line-height: 24px;\n      ", "\n    }\n  }\n\n  a {\n    ", "\n    font-size: 12px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "])));
}, function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 30px;\n    "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-left: 30px;\n    "])));
});
var SavedPlaces = exports.SavedPlaces = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 25px 20px;\n  overflow: auto;\n\n  > h2 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-top: 0;\n    margin-bottom: 25px;\n\n    ", "\n  }\n\n  > p {\n    font-size: 16px;\n    line-height: 24px;\n    font-weight: 600;\n    margin-top: 0;\n    margin-bottom: 25px;\n  }  \n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-left: 40px;\n    "]))) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-right: 40px;\n    "])));
});
var AddressListWrapper = exports.AddressListWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  height: calc(100% - 120px);\n  > div:first-child {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    flex: 1;\n\n    > button{\n      width: auto;\n      align-self: center;\n      position: absolute;\n      bottom: 0px;\n\n      ", "\n    }\n\n    > ul {\n      margin-top: 0px;\n      max-height: calc(100% - 70px);\n      overflow: auto;\n    }\n  }\n\n\n  @media (min-width: 768px){\n    ul{\n      width: 100%;\n    }\n    >div {\n      > button {\n        width: 65%;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n        right: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n        left: 0px;\n      "])));
});