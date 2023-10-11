"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappNotAddresses = exports.TitleFormContainer = exports.List = exports.FormActions = exports.ContinueButton = exports.CloseIcon = exports.AddressTitle = exports.AddressListUl = exports.AddressListContainer = exports.AddressItemActions = exports.AddressItem = exports.AddressHoverInfo = exports.AddressHalfContainer = exports.AddressFormContainer = exports.AddressBookMarkContainer = exports.AddressBookMark = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressListContainer = exports.AddressListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n  width: 100%;\n  ", "\n\n  button.add {\n    height: 50px;\n  }\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var AddressListUl = exports.AddressListUl = _styledComponents.default.ul(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  margin-top: 40px;\n"])));
var AddressItem = exports.AddressItem = _styledComponents.default.li(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0px;\n  border-top: 1px solid #E9ECEF;\n\n  label {\n    font-size: 15px;\n    margin-left: 5px;\n    font-weight: bold;\n    ", "\n  }\n\n  .wrapAddress {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 14px;\n      display: flex;\n      cursor: pointer;\n      margin-right: 10px;\n      ", "\n      &.radio {\n        color: ", ";\n        font-size: 20px;\n\n        > svg.address-checked {\n          color: ", ";\n        }\n      }\n\n      &.selected-tag {\n        > svg {\n          color: ", ";\n        }\n      }\n\n      &.tag {\n        font-size: 24px;\n        color: ", ";\n      }\n\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n\n  .address {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n\n    span:last-child {\n      opacity: 0.5;\n      font-size: 12px;\n    }\n    img{\n      position: relative;\n      transform: translateY(60%);\n    }\n  }\n\n  &:last-child {\n    border-bottom: 1px solid #E9ECEF;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n  "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.lightGray;
});
var AddressItemActions = exports.AddressItemActions = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  a {\n    display: flex;\n    cursor: pointer;\n    margin: 0px 5px;\n    font-size: 20px;\n    \n    svg {\n      color: #B1BCCC;\n    }\n  }\n  a.disabled {\n    svg {\n      color: #CCC;\n    }\n    pointer-events: none;\n  }\n"])));
var WrappNotAddresses = exports.WrappNotAddresses = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 20px auto 10px;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));
var FormActions = exports.FormActions = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 45px;\n    flex: 1;\n\n    &:last-child#second-btn {\n      margin-left: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 769px) {\n    button {\n      &:last-child#second-btn {\n        margin-left: 25px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 10px;\n      "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: 25px;\n      "])));
});
var ContinueButton = exports.ContinueButton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: sticky;\n  bottom: 1px;\n  \n  button {\n    width: 100%;\n    white-space: nowrap;\n    height: 50px;\n  }\n"])));
var AddressTitle = exports.AddressTitle = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin-bottom: 25px;\n  text-align: left;\n  ", "\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
});
var AddressHalfContainer = exports.AddressHalfContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
var List = exports.List = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: ", ";\n  padding-right: 10px;\n  ", " \n  ", "\n  button {\n    width: 100%;\n  }\n"])), function (_ref2) {
  var halfWidth = _ref2.halfWidth;
  return halfWidth ? '50%' : '100%';
}, function (_ref3) {
  var isEnableContinueButton = _ref3.isEnableContinueButton,
    isOpenUserData = _ref3.isOpenUserData,
    notUseCustomerInfo = _ref3.notUseCustomerInfo;
  return isEnableContinueButton || isOpenUserData || notUseCustomerInfo ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-top: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-top: 222px;\n  "])));
}, function (_ref4) {
  var addFormRestrictions = _ref4.addFormRestrictions;
  return addFormRestrictions && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    height: 405px;\n  "])));
});
var AddressFormContainer = exports.AddressFormContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  z-index: 10;\n  height: 100%;\n  padding-left: 10px;\n  ", "\n  ", "\n"])), function (_ref5) {
  var width = _ref5.width;
  return (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    width: ", ";\n  "])), width);
}, function (_ref6) {
  var isEnableContinueButton = _ref6.isEnableContinueButton;
  return isEnableContinueButton && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    position: relative;\n    bottom: 190px;\n  "])));
});
var CloseIcon = exports.CloseIcon = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  svg{\n    width: 30px;\n    height: 30px;\n  }\n"])));
var TitleFormContainer = exports.TitleFormContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex; \n  align-items: center;\n  margin-top: 7px;\n  h1 {\n    margin: auto;\n    font-size: 24px;\n  }\n"])));
var AddressHoverInfo = exports.AddressHoverInfo = _styledComponents.default.span(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  background: #FFE69C;\n  border: 1px solid #FFF3CD;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  position: absolute;\n  top: 0px;\n  left: 25px;\n  opacity: 0;\n  width: max-content;\n  p {\n    margin: 0;\n    color: #664D03;\n    font-size: 12px;\n  }\n\n"])));
var AddressBookMark = exports.AddressBookMark = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  span {\n    opacity: 0;\n    transition: opacity 0.3s, visibility 0.3s;\n\n  }\n  &:hover + span {\n    opacity: 1;\n    transition: opacity 0.3s, visibility 0.3s;\n  }\n"])));
var AddressBookMarkContainer = exports.AddressBookMarkContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  position: relative;\n"])));