"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserEdit = exports.SubMenu = exports.RightHeader = exports.OrderTypes = exports.OptionsHeader = exports.Navlinks = exports.MenuLink = exports.MenuItem = exports.Menu = exports.LogoHeader = exports.LeftHeader = exports.InnerHeader = exports.IconLinks = exports.IconLink = exports.Header = exports.CustomerInfo = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;  \n  ", " \n  background-color: #fff;\n\n  @media (min-width: 850px) {\n    height: 70px;\n  }\n\n  @media (min-width: 1200px) {\n    height: 75px;\n  }\n\n"])), function (_ref) {
  var home = _ref.home;
  return home ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-bottom: 0px solid;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.Header = Header;

var InnerHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #000;\n  justify-content: space-between;\n  width: 96%;\n  margin:auto;\n"])));

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  img {\n    width: 35px;\n    margin: 0;\n    vertical-align: middle;\n\n    @media (min-width: 1200px) {\n      width: 180px;\n      height: auto;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 1200px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])));

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.RightHeader = RightHeader;

var Menu = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])));

exports.Menu = Menu;

var MenuItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.MenuItem = MenuItem;

var MenuLink = _styledComponents.default.a(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: .86rem;\n  line-height: 26px;\n  color: #333;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 6px 11px;\n  max-width: 115px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n\n  ", "\n\n  @media (min-width: 1200px) {\n    padding: 11px 15px;\n    font-size: 1rem;\n  }\n\n"])), function (_ref2) {
  var highlight = _ref2.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  });
});

exports.MenuLink = MenuLink;
var SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  box-sizing: border-box;\n  margin: 0px;\n\n  @media (min-width: 821px) {\n    display: none;\n  }\n \n"])));
exports.SubMenu = SubMenu;

var CustomerInfo = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: none;\n  cursor: pointer;\n\n  @media (min-width: 450px) {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    span {\n      display: flex;\n      align-items: center;\n      height: 30px;\n      p {\n        color: ", ";\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        max-width: 50px;\n\n        @media (min-width: 768px) {\n          max-width: 70px;\n        }\n      }\n      svg {\n        color: ", ";\n        font-size: 30px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])), function (props) {
  return props.isHome ? '#FFF' : '#333';
}, function (props) {
  return props.theme.colors.primary;
});

exports.CustomerInfo = CustomerInfo;

var UserEdit = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));

exports.UserEdit = UserEdit;

var OrderTypes = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 40%;\n  #select-input {\n    height: 40px;\n    padding: 10px 16px;\n    box-sizing: border-box;\n    border: 1px solid #DDDDDD;\n    background-color: #FAFAFA;\n    border-left: none;\n    font-weight: normal;\n    text-transform: capitalize;\n    ", "\n\n    @media (min-width: 1024px) {\n      padding: 6px 10px;\n      display: flex;\n      align-items: center;\n      font-size: 14px;\n      >div {\n        font-size: 14px;\n      }\n    }\n\n    @media (min-width: 1200px) {\n      font-size: 1rem;\n      height: 48px;\n      >div {\n        font-size: 1rem;\n      }\n    }\n  }\n\n  #list {\n    width: 100%;\n    top: 33px;\n      @media (min-width: 1200px) {\n      top: 40px;\n    }\n  } \n\n  @media (min-width: 1200px) {\n    width: unset;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      border-left: 1px solid #DDDDDD;\n      border-right: : none;\n    "])));
});

exports.OrderTypes = OrderTypes;

var OptionsHeader = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  ", "\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n "])));
});

exports.OptionsHeader = OptionsHeader;

var Navlinks = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 0 20px;\n  a {\n    text-decoration: none;\n    margin: 0 5px;\n    color: #444444;\n    font-size: 1em;\n    &:hover {\n      color: ", ";\n    }\n\n    span.active {\n      color: ", ";\n    }\n\n    @media (min-width: 1200px) {\n      margin: 0 7px;\n      font-weight: bold;\n      font-size: 1.1em;\n    }\n\n    @media (min-width: 1440px) {\n      margin: 0 10px;\n    }\n  }\n\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.Navlinks = Navlinks;

var IconLinks = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  span {\n    cursor: pointer;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    fill: #444444;\n  }\n"])));

exports.IconLinks = IconLinks;

var IconLink = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 30px;\n  height: 30px;\n"])));

exports.IconLink = IconLink;