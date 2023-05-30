"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.MomentMenu = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LeftSide = exports.LeftHeader = exports.LanguageSelectorWrapper = exports.InputGroup = exports.InnerHeader = exports.HeaderSearchMode = exports.Header = exports.FarAwayMessage = exports.Divider = exports.CustomerInfo = exports.AddressMenu = exports.AddressFormWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background-color: ", ";\n  border-bottom: ", ";\n"])), function (props) {
  var _props$theme, _props$theme$header, _props$theme$header$c, _props$theme$header$c2;
  return props.isChew && props.theme.colors.primary || ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$header = _props$theme.header) === null || _props$theme$header === void 0 ? void 0 : (_props$theme$header$c = _props$theme$header.components) === null || _props$theme$header$c === void 0 ? void 0 : (_props$theme$header$c2 = _props$theme$header$c.style) === null || _props$theme$header$c2 === void 0 ? void 0 : _props$theme$header$c2.backgroundColor);
}, function (props) {
  return !props.isChew && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["1px solid #E9ECEF"])));
});
exports.Header = Header;
var InnerHeader = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #FFF;\n  justify-content: space-between;\n  margin: 15px 0;\n  align-items: center;\n  #left-side {\n    width: ", ";\n    justify-content: flex-start;\n  }\n  #right-side {\n    width: ", ";\n    justify-content: flex-end;\n  }\n  #center-side {\n    width: ", ";\n  }\n  @media (min-width: 768px) {\n    #left-side {\n      width: ", ";\n    }\n    #center-side {\n      width: calc(100% - 60px);\n    }\n  }\n  @media (min-width: 1024px) {\n    #center-side {\n      width: calc(100% - 140px);\n    }\n  }\n  @media (min-width: 1200px) {\n    #center-side {\n      width: calc(70% - 200px);\n    }\n  }\n  @media (min-width: 1500px) {\n    #center-side {\n      width: calc(60% - 260px);\n    }\n  }\n"])), function (_ref) {
  var _theme$header, _theme$header$compone, _theme$header$compone2;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$header = theme.header) === null || _theme$header === void 0 ? void 0 : (_theme$header$compone = _theme$header.components) === null || _theme$header$compone === void 0 ? void 0 : (_theme$header$compone2 = _theme$header$compone.layout) === null || _theme$header$compone2 === void 0 ? void 0 : _theme$header$compone2.type) === 'starbucks' ? '30%' : '25%';
}, function (_ref2) {
  var _theme$header2, _theme$header2$compon, _theme$header2$compon2;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$header2 = theme.header) === null || _theme$header2 === void 0 ? void 0 : (_theme$header2$compon = _theme$header2.components) === null || _theme$header2$compon === void 0 ? void 0 : (_theme$header2$compon2 = _theme$header2$compon.layout) === null || _theme$header2$compon2 === void 0 ? void 0 : _theme$header2$compon2.type) === 'starbucks' ? '30%' : '40%';
}, function (_ref3) {
  var _theme$header3, _theme$header3$compon, _theme$header3$compon2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$header3 = theme.header) === null || _theme$header3 === void 0 ? void 0 : (_theme$header3$compon = _theme$header3.components) === null || _theme$header3$compon === void 0 ? void 0 : (_theme$header3$compon2 = _theme$header3$compon.layout) === null || _theme$header3$compon2 === void 0 ? void 0 : _theme$header3$compon2.type) === 'starbucks' ? 'calc(60% - 140px)' : 'calc(60% - 30px)';
}, function (_ref4) {
  var _theme$header4, _theme$header4$compon, _theme$header4$compon2;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$header4 = theme.header) === null || _theme$header4 === void 0 ? void 0 : (_theme$header4$compon = _theme$header4.components) === null || _theme$header4$compon === void 0 ? void 0 : (_theme$header4$compon2 = _theme$header4$compon.layout) === null || _theme$header4$compon2 === void 0 ? void 0 : _theme$header4$compon2.type) === 'starbucks' ? '30%' : 'initial';
});
exports.InnerHeader = InnerHeader;
var LogoHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  img {\n    width: ", ";\n    height: ", ";\n    margin: 0;\n    vertical-align: middle;\n    margin-left: 10px;\n    ", "\n    @media (min-width: 769px) {\n      ", ";\n      width: ", ";\n      height: ", ";\n    }\n  }\n  ", "\n  @media (min-width: 769px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])), function (props) {
  var _props$imgW;
  return props.isChew ? '70px' : (_props$imgW = props.imgW) !== null && _props$imgW !== void 0 ? _props$imgW : '35px';
}, function (props) {
  var _props$imgH;
  return props.isChew ? '20px' : (_props$imgH = props.imgH) !== null && _props$imgH !== void 0 ? _props$imgH : '45px';
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
}, function (_ref5) {
  var _ref6, _theme$header5, _theme$header5$compon, _theme$header5$compon2, _theme$header5$compon3, _theme$header5$compon4;
  var theme = _ref5.theme;
  return ((_ref6 = ['center', 'right']) === null || _ref6 === void 0 ? void 0 : _ref6.includes(theme === null || theme === void 0 ? void 0 : (_theme$header5 = theme.header) === null || _theme$header5 === void 0 ? void 0 : (_theme$header5$compon = _theme$header5.components) === null || _theme$header5$compon === void 0 ? void 0 : (_theme$header5$compon2 = _theme$header5$compon.logo) === null || _theme$header5$compon2 === void 0 ? void 0 : (_theme$header5$compon3 = _theme$header5$compon2.components) === null || _theme$header5$compon3 === void 0 ? void 0 : (_theme$header5$compon4 = _theme$header5$compon3.layout) === null || _theme$header5$compon4 === void 0 ? void 0 : _theme$header5$compon4.position)) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-right: 30px;\n      "])));
}, function (props) {
  var _props$imgW2;
  return (_props$imgW2 = props.imgW) !== null && _props$imgW2 !== void 0 ? _props$imgW2 : '150px';
}, function (props) {
  return props.isChew && '35px';
}, function (props) {
  return !props.disabledResponsive && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    img:nth-child(1) {\n      display: none;\n    }\n  "])));
});
exports.LogoHeader = LogoHeader;
var LeftHeader = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n  align-items: center;\n"])));
exports.LeftHeader = LeftHeader;
var RightHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n  #select-input {\n    div {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.RightHeader = RightHeader;
var Menu = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n  #select-input {\n    border-radius: 7.6px;\n    #list {\n      border-radius: 7.6px;\n    }\n    ", "\n  }\n  &.left-header {\n    background: #F8F9FA;\n    border: none;\n    box-sizing: border-box;\n    border-radius: ", ";\n    margin: 0 15px;\n    flex-grow: 1;\n    padding: 0 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    height: 44px;\n    @media (min-width: 850px) {\n      border: 1px solid #DEE2E6;\n      justify-content: space-between;\n    }\n    @media (min-width: 1024px) {\n      margin: 0 20px;\n      padding: 0 20px;\n      margin-left: 45px;\n    }\n    @media (min-width: 1200px) {\n      padding: 0 30px;\n      margin-left: 50px;\n    }\n    @media (min-width: 1500px) {\n      padding: 0 30px;\n      margin: 0 75px;\n    }\n  }\n  > span {\n    #select-input {\n      background: transparent !important;\n    }\n  }\n  .moment-popover {\n    border-left: 1px solid #DEE2E6;\n    border-right: 1px solid #DEE2E6;\n    height: 100%;\n    justify-content: center;\n    width: 200px;\n    display: none;\n    @media (min-width: 1175px) {\n      width: 250px;\n    }\n    \n    @media (min-width: 1400px) {\n      width: 400px;\n    }\n    > div:first-child {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n  }\n  .address-popover {\n    flex-grow: 1;\n    display: none;\n    > div:first-child {\n      width: 100%;\n    }\n  }\n  .order-type {\n    padding: 0 5px;\n\n    @media (min-width: 1300px) {\n      padding: 0 20px;\n    }\n  }\n  @media (min-width: 850px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])), function (_ref7) {
  var isCustomerMode = _ref7.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin: 0px 5px;\n      height: 40px;\n      svg {\n        font-size: 16px;\n      }\n      > div:first-child {\n        height: 100%;\n        padding-left: 10px;\n        padding-right: 10px;\n        @media (min-width: 993px) {\n          padding-left: 13px;\n          padding-right: 13px;\n        }\n      }\n    "])));
}, function (props) {
  return props.isChew ? '8px' : '50px';
});
exports.Menu = Menu;
var MenuItem = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.MenuItem = MenuItem;
var MenuLink = _styledComponents.default.a(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 14px;\n  padding: 10px;\n  color: #333;\n  cursor: pointer;\n  ", "\n"])), function (_ref8) {
  var highlight = _ref8.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 7.6px;\n    padding: 11px 15px;\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  });
});
exports.MenuLink = MenuLink;
var SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 7px;\n  box-sizing: border-box;\n  margin: 0px;\n  position: relative;\n  @media (min-width: 850px) {\n    display: none;\n  }\n"])));
exports.SubMenu = SubMenu;
var CustomerInfo = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n  flex: 1;\n  position: relative;\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    span {\n      display: flex;\n      align-items: center;\n      margin: 0;\n      p {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        color: #909BA9;\n      }\n      svg {\n        color: #748194;\n        margin: 0;\n        font-size: 20px;\n        position: absolute;\n        right: 0;\n      }\n    }\n  }\n"])));
exports.CustomerInfo = CustomerInfo;
var UserEdit = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;\n  }\n"])));
exports.UserEdit = UserEdit;
var AddressMenu = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  position: relative;\n  span {\n    width: 85%;\n    p {\n      margin: 0;\n      padding: 0;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n    }\n  }\n  ", "\n  svg {\n    color: ", ";\n    font-size: 16px;\n    margin-right: 10px;\n    ", "\n  }\n  @media (min-width: 765px) {\n    ", "\n  }\n  @media (min-width: 820px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors, _props$theme$colors2;
  return props.isChew ? (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage : (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
}, function (_ref9) {
  var isCustomerMode = _ref9.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    flex: 0.8;\n  "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    width: 50%;\n  "])));
}, function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.lightGray;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (_ref10) {
  var isCustomerMode = _ref10.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      width: 80%;\n    "])));
}, function (_ref11) {
  var isCustomerMode = _ref11.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      width: 50%;\n    "])));
});
exports.AddressMenu = AddressMenu;
var MomentMenu = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  border-left: 1px solid #DEE2E6;\n  border-right: 1px solid #DEE2E6;\n  height: 100%;\n  justify-content: center;\n  width: 175px;\n  display: none;\n  \n  @media (min-width: 850px) {\n    display: flex;\n  }\n  @media (min-width: 1175px) {\n    width: 250px;\n  }\n  @media (min-width: 1400px) {\n    width: 400px;\n  }\n  > div {\n    cursor: pointer;\n    font-size: 14px;\n    color: #909BA9;\n    display: flex;\n    align-items: center;\n    text-align: center;\n    white-space: nowrap;\n    padding: 0 10px;\n  }\n"])));
exports.MomentMenu = MomentMenu;
var FarAwayMessage = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  pointer-events: none;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  z-index: 2000;\n  top: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  padding: 6px 15px;\n  box-sizing: border-box;\n  margin: 10px 0px 0px 0px !important;\n  left: 5px;\n  ", "\n  svg {\n    font-size: 20px;\n    color: ", ";\n    margin-right: 10px;\n    ", "\n  }\n  span {\n    font-size: 12px;\n    line-height: 18px;\n    color: ", ";\n  }\n  @media (min-width: 400px) {\n    padding: 8px 20px;\n    font-size: 14px;\n    line-height: 24px;\n    left: 10px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.warning100;
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    right: 5px;\n    left: initial;\n  "])));
}, function (props) {
  return props.theme.colors.warning500;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: 10px;\n    "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
});
exports.FarAwayMessage = FarAwayMessage;
var Divider = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  border: 1px solid #DEE2E6;\n  height: 100%;\n"])));
exports.Divider = Divider;
var AddressFormWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  @media (min-width: 450px) {\n    margin-top: 20px;\n  }\n"])));
exports.AddressFormWrapper = AddressFormWrapper;
var InputGroup = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  p {\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n    width: 100%;\n    text-align: left;\n    margin: 0 0 7px 0;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.InputGroup = InputGroup;
var LanguageSelectorWrapper = (0, _styledComponents.default)(InputGroup)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  > div {\n    border-radius: 7.6px;\n    text-align: left;\n    background: #F8F9FA !important;\n    border-color: #F8F9FA;\n    background-color: #F8F9FA !important;\n    height: 44px;\n    > div:first-child {\n      height: 44px;\n    }\n    #list {\n      border-radius: 7.6px;\n      background: #F8F9FA !important;\n      border-color: #F8F9FA;\n    }\n  }\n  #select-input {\n    margin-left: 5px;\n  }\n"])));
exports.LanguageSelectorWrapper = LanguageSelectorWrapper;
var HeaderSearchMode = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 300px;\n  input {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  @media (min-width: 1400px){\n    width: 350px;\n  }\n  @media (min-width: 1200px){\n    width: 300px;\n    div {\n      > span {\n        padding: 7px 0;\n      }\n    }\n  }\n"])));
exports.HeaderSearchMode = HeaderSearchMode;
var LeftSide = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  @media (min-width: 769px){\n    flex-direction: ", ";\n    width: 62%;\n  }\n"])), function (_ref12) {
  var _ref13, _theme$header6, _theme$header6$compon, _theme$header6$compon2, _theme$header6$compon3, _theme$header6$compon4;
  var theme = _ref12.theme;
  return (_ref13 = ['center', 'right']) !== null && _ref13 !== void 0 && _ref13.includes(theme === null || theme === void 0 ? void 0 : (_theme$header6 = theme.header) === null || _theme$header6 === void 0 ? void 0 : (_theme$header6$compon = _theme$header6.components) === null || _theme$header6$compon === void 0 ? void 0 : (_theme$header6$compon2 = _theme$header6$compon.logo) === null || _theme$header6$compon2 === void 0 ? void 0 : (_theme$header6$compon3 = _theme$header6$compon2.components) === null || _theme$header6$compon3 === void 0 ? void 0 : (_theme$header6$compon4 = _theme$header6$compon3.layout) === null || _theme$header6$compon4 === void 0 ? void 0 : _theme$header6$compon4.position) ? 'row-reverse' : 'row';
});
exports.LeftSide = LeftSide;