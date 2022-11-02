"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappNotAddresses = exports.TitleFormContainer = exports.TitleAddress = exports.List = exports.FormActions = exports.ContinueButton = exports.CloseIcon = exports.AddressTitle = exports.AddressListUl = exports.AddressListContainer = exports.AddressItemActions = exports.AddressItem = exports.AddressHalfContainer = exports.AddressFormContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n  ", "\n\n  ", "\n\n  button.add {\n    height: 50px;\n    ", "\n  }\n"])), function (_ref) {
  var isProfile = _ref.isProfile;
  return !isProfile && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
}, function (_ref3) {
  var isProfile = _ref3.isProfile;
  return !isProfile && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      min-width: 100px;\n    "])));
});
exports.AddressListContainer = AddressListContainer;
var AddressListUl = _styledComponents.default.ul(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  margin-top: 40px;\n\n  ", "\n"])), function (props) {
  var _props$theme, _props$theme$profile, _props$theme$profile$, _props$theme$profile$2;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$profile = _props$theme.profile) === null || _props$theme$profile === void 0 ? void 0 : (_props$theme$profile$ = _props$theme$profile.components) === null || _props$theme$profile$ === void 0 ? void 0 : (_props$theme$profile$2 = _props$theme$profile$.layout) === null || _props$theme$profile$2 === void 0 ? void 0 : _props$theme$profile$2.type) === 'pfchangs' && props.isProfile && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.secundaryContrast;
  });
});
exports.AddressListUl = AddressListUl;
var AddressItem = _styledComponents.default.li(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0px;\n  border-top: 1px solid #E9ECEF;\n\n  label {\n    font-size: 15px;\n    margin-left: 5px;\n    font-weight: bold;\n    ", "\n  }\n\n  .wrapAddress {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 14px;\n      display: flex;\n      cursor: pointer;\n      margin-right: 10px;\n      ", "\n      &.radio {\n        color: ", ";\n        font-size: 20px;\n\n        > svg.address-checked {\n          color: ", ";\n        }\n      }\n\n      &.selected-tag {\n        > svg {\n          color: ", ";\n        }\n      }\n\n      &.tag {\n        font-size: 24px;\n        color: ", ";\n      }\n\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n\n  .address {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n\n    span:last-child {\n      opacity: 0.5;\n      font-size: 12px;\n    }\n  }\n\n  &:last-child {\n    border-bottom: 1px solid #E9ECEF;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.lightGray;
}, function (_ref4) {
  var _theme$profile, _theme$profile$compon, _theme$profile$compon2;
  var theme = _ref4.theme,
    isProfile = _ref4.isProfile;
  return isProfile && (theme === null || theme === void 0 ? void 0 : (_theme$profile = theme.profile) === null || _theme$profile === void 0 ? void 0 : (_theme$profile$compon = _theme$profile.components) === null || _theme$profile$compon === void 0 ? void 0 : (_theme$profile$compon2 = _theme$profile$compon.layout) === null || _theme$profile$compon2 === void 0 ? void 0 : _theme$profile$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding: 15px;\n  "])));
});
exports.AddressItem = AddressItem;
var AddressItemActions = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  a {\n    display: flex;\n    cursor: pointer;\n    margin: 0px 5px;\n    font-size: 20px;\n    \n    svg {\n      color: #959895;\n    }\n  }\n  a.disabled {\n    svg {\n      color: #CCC;\n    }\n    pointer-events: none;\n  }\n"])));
exports.AddressItemActions = AddressItemActions;
var WrappNotAddresses = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 20px auto 10px;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"])));
exports.WrappNotAddresses = WrappNotAddresses;
var FormActions = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 45px;\n    flex: 1;\n\n    &:last-child#second-btn {\n      margin-left: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 769px) {\n    button {\n      &:last-child#second-btn {\n        margin-left: 25px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 10px;\n      "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: 25px;\n      "])));
});
exports.FormActions = FormActions;
var ContinueButton = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: sticky;\n  bottom: 1px;\n  \n  button {\n    width: 100%;\n    white-space: nowrap;\n    height: 50px;\n  }\n"])));
exports.ContinueButton = ContinueButton;
var AddressTitle = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin-bottom: 25px;\n  text-align: left;\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (_ref5) {
  var _theme$profile2, _theme$profile2$compo, _theme$profile2$compo2;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$profile2 = theme.profile) === null || _theme$profile2 === void 0 ? void 0 : (_theme$profile2$compo = _theme$profile2.components) === null || _theme$profile2$compo === void 0 ? void 0 : (_theme$profile2$compo2 = _theme$profile2$compo.layout) === null || _theme$profile2$compo2 === void 0 ? void 0 : _theme$profile2$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    padding: 30px 15px;\n    box-sizing: border-box;\n    margin-bottom: 0;\n    border-bottom: 1px solid #fff;\n    font-weight: 600;\n  "])));
});
exports.AddressTitle = AddressTitle;
var AddressHalfContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
exports.AddressHalfContainer = AddressHalfContainer;
var List = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: ", ";\n  padding-right: 10px;\n  button { \n    width: 100%;\n  }\n"])), function (_ref6) {
  var halfWidth = _ref6.halfWidth;
  return halfWidth ? '50%' : '100%';
});
exports.List = List;
var AddressFormContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 50%;\n  position: sticky;\n  right: 0;\n  top: 0;\n  margin-top: ", ";\n  height: 100%;\n  padding-left: 10px;\n"])), function (_ref7) {
  var isCustomerMode = _ref7.isCustomerMode;
  return isCustomerMode ? '-190px' : '0';
});
exports.AddressFormContainer = AddressFormContainer;
var CloseIcon = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 2;\n  ", "\n  ", "\n  svg{\n    /* background: rgba(255,255,255,0.5); */\n    transition: all .2s ease-in;\n\n    &:hover {\n      background-color: #1507260a;\n\n      > svg {\n        color:  #151b26;\n      }\n    }\n\n    &:active {\n      background-color: ", ";\n    }\n  \n    border-radius: 50%;\n  }\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    right: 25px;\n    left: initial;\n  "])));
}, function (_ref8) {
  var isProductForm = _ref8.isProductForm;
  return isProductForm && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    top: 18px;\n  "])));
}, function () {
  return (0, _polished.darken)(0.07, '#CCC');
});
exports.CloseIcon = CloseIcon;
var TitleFormContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex; \n  align-items: center;\n  ", "\n  h1 {\n    margin: auto;\n    font-size: 24px;\n    ", "\n  }\n"])), function (_ref9) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref9.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      justify-content: center;\n    "])));
}, function (_ref10) {
  var _theme$general2, _theme$general2$compo, _theme$general2$compo2, _theme$fonts, _theme$fonts$special;
  var theme = _ref10.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general2 = theme.general) === null || _theme$general2 === void 0 ? void 0 : (_theme$general2$compo = _theme$general2.components) === null || _theme$general2$compo === void 0 ? void 0 : (_theme$general2$compo2 = _theme$general2$compo.layout) === null || _theme$general2$compo2 === void 0 ? void 0 : _theme$general2$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      font-family: ", ";\n      text-align: center;\n      margin: 0 30px;\n    "])), theme === null || theme === void 0 ? void 0 : (_theme$fonts = theme.fonts) === null || _theme$fonts === void 0 ? void 0 : (_theme$fonts$special = _theme$fonts.special) === null || _theme$fonts$special === void 0 ? void 0 : _theme$fonts$special.name);
});
exports.TitleFormContainer = TitleFormContainer;
var TitleAddress = _styledComponents.default.h1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: auto;\n  font-size: 24px;\n  margin-bottom: 20px;\n  ", "\n"])), function (_ref11) {
  var _theme$general3, _theme$general3$compo, _theme$general3$compo2, _theme$fonts2, _theme$fonts2$special;
  var theme = _ref11.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general3 = theme.general) === null || _theme$general3 === void 0 ? void 0 : (_theme$general3$compo = _theme$general3.components) === null || _theme$general3$compo === void 0 ? void 0 : (_theme$general3$compo2 = _theme$general3$compo.layout) === null || _theme$general3$compo2 === void 0 ? void 0 : _theme$general3$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    font-family: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$fonts2 = theme.fonts) === null || _theme$fonts2 === void 0 ? void 0 : (_theme$fonts2$special = _theme$fonts2.special) === null || _theme$fonts2$special === void 0 ? void 0 : _theme$fonts2$special.name);
});
exports.TitleAddress = TitleAddress;