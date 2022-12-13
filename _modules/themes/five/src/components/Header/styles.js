"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.MomentMenu = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LoginButton = exports.LeftHeader = exports.InnerHeader = exports.Header = exports.FarAwayMessage = exports.Divider = exports.CustomerInfo = exports.AddressMenu = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 95px;\n  border-bottom: ", ";\n  background-color: ", ";\n\n  ", "\n"])), function (_ref) {
  var headerBorderBottom = _ref.headerBorderBottom;
  return headerBorderBottom || '1px solid #E9ECEF';
}, function (_ref2) {
  var headerBackgroundColor = _ref2.headerBackgroundColor;
  return headerBackgroundColor || '';
}, function (_ref3) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: sticky;\n    top: 0;\n    z-index: 1001;\n  "])));
});
exports.Header = Header;
var InnerHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #FFF;\n  justify-content: space-between;\n  width: 98%;\n  margin: auto;\n  align-items: center;\n  @media (min-width: 786px){\n    margin: 15px auto;\n  }\n"])));
exports.InnerHeader = InnerHeader;
var LogoHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  img {\n    object-fit: contain;\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n    \n    ", "\n      \n      ", "\n\n  }\n\n  ", "\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (_ref4) {
  var _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.layout) === null || _theme$layouts$header3 === void 0 ? void 0 : _theme$layouts$header3.type) === 'pfchangs' ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        max-height: 40px;\n        max-width: 150px;\n      "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      width: ", ";\n      height: ", ";\n      @media (min-width: 768px) {\n        width: ", ";\n      }\n    "])), function (props) {
    var _props$imgW;
    return (_props$imgW = props.imgW) !== null && _props$imgW !== void 0 ? _props$imgW : '35px';
  }, function (props) {
    var _props$imgH;
    return (_props$imgH = props.imgH) !== null && _props$imgH !== void 0 ? _props$imgH : '45px';
  }, function (props) {
    var _props$imgW2;
    return (_props$imgW2 = props.imgW) !== null && _props$imgW2 !== void 0 ? _props$imgW2 : '150px';
  });
}, function (props) {
  return !props.disabledResponsive && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    img:nth-child(1) {\n      display: none;\n    }\n  "])));
});
exports.LogoHeader = LogoHeader;
var LeftHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));
exports.LeftHeader = LeftHeader;
var RightHeader = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n\n  #select-input {\n    div {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.RightHeader = RightHeader;
var Menu = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  #select-input {\n    border-radius: 7.6px;\n    \n    #list {\n      border-radius: 7.6px;\n    }\n\n    ", "\n  }\n\n  &.left-header {\n    background: #F8F9FA;\n    border: none;\n    box-sizing: border-box;\n    border-radius: 50px;\n    margin: 0 15px;\n    flex-grow: 1;\n    padding: 0 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    height: 44px;\n\n    @media (min-width: 821px) {\n      border: 1px solid #DEE2E6;\n      justify-content: space-between;\n    }\n\n    @media (min-width: 1024px) {\n      padding: 0 20px;\n      margin: 0 70px;\n    }\n    \n    @media (min-width: 1200px) {\n      padding: 0 30px;\n      margin: 0 100px;\n    }\n\n    @media (min-width: 1500px) {\n      padding: 0 30px;\n      margin: 0 130px;\n    }\n  }\n\n  > *:not(:last-child) {\n    margin: 0 5px;\n  }\n\n  > span {\n    #select-input {\n      background: transparent !important;\n    }\n  }\n\n  .moment-popover {\n    border-left: 1px solid #DEE2E6;\n    border-right: 1px solid #DEE2E6;\n    height: 100%;\n    justify-content: center;\n    width: 200px;\n    display: none;\n\n    @media (min-width: 1175px) {\n      width: 250px;\n    }\n    \n    @media (min-width: 1400px) {\n      width: 400px;\n    }\n\n    > div:first-child {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .address-popover {\n    flex-grow: 1;\n    display: none;\n    > div:first-child {\n      width: 100%;\n    }\n  }\n\n  .order-type {\n    padding: 0 10px;\n\n    @media (min-width: 1200px) {\n      padding: 0 20px;\n    }\n  }\n\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])), function (_ref5) {
  var _theme$layouts2, _theme$layouts2$heade, _theme$layouts2$heade2, _theme$layouts2$heade3;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$heade = _theme$layouts2.header) === null || _theme$layouts2$heade === void 0 ? void 0 : (_theme$layouts2$heade2 = _theme$layouts2$heade.components) === null || _theme$layouts2$heade2 === void 0 ? void 0 : (_theme$layouts2$heade3 = _theme$layouts2$heade2.layout) === null || _theme$layouts2$heade3 === void 0 ? void 0 : _theme$layouts2$heade3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    flex-direction: row-reverse;\n  "])));
}, function (_ref6) {
  var isCustomerMode = _ref6.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin: 0px 10px;\n      height: 40px;\n      border-color: #CCC;\n      background-color: #CCC !important;\n      \n      svg {\n        font-size: 16px;\n      }\n\n      > div:first-child {\n        height: 100%;\n        padding-left: 10px;\n        padding-right: 10px;\n\n        @media (min-width: 993px) {\n          padding-left: 13px;\n          padding-right: 13px;\n        }\n      }\n    "])));
});
exports.Menu = Menu;
var MenuItem = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.MenuItem = MenuItem;
var MenuLink = _styledComponents.default.a(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 14px;\n  padding: 10px;\n  color: ", ";\n  cursor: pointer;\n\n  ", "\n"])), function (props) {
  return props.theme.colors.tertiary || '#ccc';
}, function (_ref7) {
  var highlight = _ref7.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 7.6px;\n    padding: 11px 15px;\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.tertiary || props.theme.colors.primaryContrast;
  });
});
exports.MenuLink = MenuLink;
var SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n  position: relative;\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n"])));
exports.SubMenu = SubMenu;
var CustomerInfo = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n  flex: 1;\n  position: relative;\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      margin: 0;\n      p {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #909BA9;\n      }\n      svg {       \n        color: #748194; \n        margin: 0;\n        font-size: 20px;\n        position: absolute;\n        right: 0;\n      }\n    }\n  }\n"])));
exports.CustomerInfo = CustomerInfo;
var UserEdit = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));
exports.UserEdit = UserEdit;
var AddressMenu = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  ", "\n\n  svg {\n    color: ", ";\n    font-size: 16px;\n    margin-right: 10px;\n    ", "\n  }\n  @media (min-width: 765px) {\n    ", "\n  }\n  @media (min-width: 820px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref8) {
  var isCustomerMode = _ref8.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  flex: 0.8;\n  "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (_ref9) {
  var isCustomerMode = _ref9.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      width: 80%;\n    "])));
}, function (_ref10) {
  var isCustomerMode = _ref10.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n      width: 100%;\n    "])));
});
exports.AddressMenu = AddressMenu;
var MomentMenu = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  border-left: 1px solid #DEE2E6;\n  border-right: 1px solid #DEE2E6;\n  height: 100%;\n  justify-content: center;\n  width: 200px;\n  display: none;\n  \n  @media (min-width: 821px) {\n    display: flex;\n  }\n\n  @media (min-width: 1175px) {\n    width: 250px;\n  }\n\n  @media (min-width: 1400px) {\n    width: 400px;\n  }\n\n  > div {\n    cursor: pointer;\n    font-size: 14px;\n    color: #909BA9;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    white-space: nowrap;\n    padding: 0 10px;\n  }\n"])));
exports.MomentMenu = MomentMenu;
var FarAwayMessage = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  pointer-events: none;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  margin: 10px 0px 0px 0px !important;\n\n  left: 5px;\n  ", "\n\n  svg {\n    font-size: 20px;\n    color: ", ";\n    margin-right: 10px;\n    ", "\n  }\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n  }\n\n  @media (min-width: 400px) {\n    padding: 8px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    left: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    right: 5px;\n    left: initial;\n  "])));
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
});
exports.FarAwayMessage = FarAwayMessage;
var Divider = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  border: 1px solid #DEE2E6;\n  height: 100%;\n"])));
exports.Divider = Divider;
var LoginButton = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  p {\n    color: ", ";\n  }\n\n  svg{\n    color: ", ";\n    margin-right: 10px;\n  }\n"])), function (_ref11) {
  var _theme$colors;
  var theme = _ref11.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || 'initial';
}, function (_ref12) {
  var _theme$colors2;
  var theme = _ref12.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.gold;
});
exports.LoginButton = LoginButton;