"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverWrapper = exports.OrderTypes = exports.HeaderOptions = exports.CenterHeader = exports.UserEdit = exports.CustomerInfo = exports.SubMenu = exports.MenuLink = exports.MenuItem = exports.Menu = exports.RightHeader = exports.LeftHeader = exports.LogoHeader = exports.InnerHeader = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;  \n  ", " \n  background-color: #fff;\n\n  @media (min-width: 850px) {\n    height: 70px;\n  }\n\n  @media (min-width: 1200px) {\n    height: 90px;\n  }\n\n"])), function (_ref) {
  var home = _ref.home;
  return home ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-bottom: 0px solid;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});

exports.Header = Header;

var InnerHeader = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #000;\n  justify-content: space-between;\n  width: 96%;\n  margin:auto;\n"])));

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  img {\n    width: 35px;\n    margin: 0;\n    vertical-align: middle;\n    @media (min-width: 768px) {\n      width: 120px;\n      height: 45px;\n      margin-top: 10px;\n    }\n    @media (min-width: 1024px) {\n      width: 150px;\n      height: auto;\n    }\n    @media (min-width: 1200px) {\n      width: 180px;\n      height: auto;\n    }\n  }\n\n  img:nth-child(1) {\n    display: none;\n  }\n\n  @media (min-width: 768px) {\n    img:nth-child(1) {\n      display: block;\n    }\n    img:nth-child(2) {\n      display: none;\n    }\n  }\n"])));

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"])));

exports.RightHeader = RightHeader;

var Menu = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  \n\n  .moment-popover,\n  .address-popover {\n    display: none;\n  }\n\n  @media (min-width: 821px) {\n    .moment-popover,\n    .address-popover {\n      display: flex;\n    }\n  }\n"])));

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

var CenterHeader = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: flex-end;\n  padding: 0 15px;\n\n  #select-input {\n    height: 40px;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: .86rem;\n    border: none;\n    @media (min-width: 768px) {\n      border: 1px solid ", ";;\n    }\n  }\n  @media (min-width: 1024px) {\n    width: 50%;\n    justify-content: space-around;\n  }\n  @media (min-width: 1200px) {\n    justify-content: space-between;\n    #select-input {\n      height: 48px;\n      width: auto;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.CenterHeader = CenterHeader;

var HeaderOptions = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-right: 15px;\n  @media (min-width: 1024px) {\n    width: 70%;\n  }\n  @media (min-width: 1200px) {\n    width: 78%;\n  }\n"])));

exports.HeaderOptions = HeaderOptions;

var OrderTypes = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  #list {\n    width: 100%;\n    top: 33px;\n      @media (min-width: 1200px) {\n      top: 40px;\n    }\n  }  \n"])));

exports.OrderTypes = OrderTypes;

var PopoverWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 96%;\n  align-items: center;\n  margin: 10px auto 0;\n  padding: 5px 0;\n  box-sizing: border-box;\n  border-top: 1px solid ", ";\n  \n  .address-popover {\n    svg {\n      color: ", ";\n    }\n  }\n  .moment-popover {\n    svg {\n      color: ", ";\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.PopoverWrapper = PopoverWrapper;