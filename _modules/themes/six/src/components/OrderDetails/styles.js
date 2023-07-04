"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriver = exports.WrapperContainer = exports.StatusImage = exports.StatusBar = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ShareOrderWrapper = exports.ShareOrder = exports.SectionTitle = exports.RightPanel = exports.RightContentWrapper = exports.ReviewsAction = exports.PhotoBlock = exports.OrderStatus = exports.OrderProducts = exports.OrderInfo = exports.OrderDriver = exports.OrderData = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.MessagesIcon = exports.Map = exports.LogoWrapper = exports.Logo = exports.LinkText = exports.LeftPanel = exports.LeftContentWrapper = exports.InfoBlock = exports.HeaderText = exports.HeaderInfo = exports.Header = exports.FootActions = exports.ExclamationWrapper = exports.DashLine = exports.CustomerInfo = exports.Content = exports.Container = exports.BusinessWrapper = exports.BusinessLogo = exports.BusinessInfo = exports.BackHeader = exports.ActionsBlock = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 100vh;\n  overflow-y: scroll;\n"])));
exports.Container = Container;
var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));
exports.WrapperContainer = WrapperContainer;
var LeftPanel = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 5%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 25px;\n  position: relative;\n  background-color: #fff;\n    @media (min-width: 1024px) {\n    width: 40vw;\n    height: 100vh;\n    padding: 0 50px;\n    border-right: 1px solid ", ";\n    overflow-y: auto;\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.LeftPanel = LeftPanel;
var RightPanel = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 5%;\n  box-sizing: border-box;\n  background-color: ", ";\n  @media (min-width: 1024px) {\n    width: 60vw;\n    height: 100vh;\n    padding: 0 100px;\n    overflow-y: auto;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryBackground;
});
exports.RightPanel = RightPanel;
var LeftContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  height: fit-content;\n"])));
exports.LeftContentWrapper = LeftContentWrapper;
var RightContentWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  height: fit-content;\n  padding-top: 20px;\n"])));
exports.RightContentWrapper = RightContentWrapper;
var Header = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: absolute;\n    z-index: 10;\n    top: 10px;\n    left: 10px;\n    color: #000;\n    svg {\n      width: 20px;\n      height: 20px;\n      margin-right: 10px\n    }\n  }\n"])));
exports.Header = Header;
var HeaderInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
exports.HeaderInfo = HeaderInfo;
var HeaderText = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #000;\n  ", ";\n  ", ";\n  h1 {\n    margin-bottom: 0;\n    font-size: 22px;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n  }\n  @media (min-width: 769px) {\n    h1 {\n      font-size: 26px;\n    }\n    p {\n      font-size: 18px;\n    }\n  }\n"])), function (_ref) {
  var column = _ref.column;
  return column && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "])));
}, function (_ref2) {
  var column = _ref2.column;
  return !column && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "])));
});
exports.HeaderText = HeaderText;
var Content = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.Content = Content;
var OrderBusiness = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  opacity: 1;\n  margin: 20px 0px;\n"])));
exports.OrderBusiness = OrderBusiness;
var BusinessWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n"])));
exports.BusinessWrapper = BusinessWrapper;
var LogoWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  max-width: 65px;\n  max-height: 65px;\n  height: 65px;\n  width: 65px;\n"])));
exports.LogoWrapper = LogoWrapper;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"])));
var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;
var BusinessInfo = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  h1,\n  p {\n    margin: 5px 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  h1 {\n    font-size: 18px;\n  }\n"])));
exports.BusinessInfo = BusinessInfo;
var ActionsBlock = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 20%;\n  padding-top: 10px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  /* justify-content: center;\n  flex-direction: column; */\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n  }\n  @media (min-width: 380px) {\n    flex-direction: row;\n    align-items: flex-start;\n    svg {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
});
exports.ActionsBlock = ActionsBlock;
var OrderInfo = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 20px 0px;\n"])));
exports.OrderInfo = OrderInfo;
var OrderData = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-size: 24px;\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n  p.date {\n    font-weight: 100;\n    margin-bottom: 20px\n  }\n  @media (min-width: 1024px) {\n    p.date {\n      margin-bottom: 30px\n    }\n  }\n  @media (min-width: 425px) {\n    p {\n      font-size: 18px;\n    }\n  }\n"])));
exports.OrderData = OrderData;
var StatusBarStyled = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  height: 10px;\n  margin: 10px 0px 0px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, #fff ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});
var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
exports.StatusBar = StatusBar;
var OrderStatus = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: fit-content;\n  padding: 5px 0;\n  color: lightgray;\n  text-transform: capitalize;\n  font-weight: 600;\n"])));
exports.OrderStatus = OrderStatus;
var StatusImage = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  img {\n    display: flex;\n    width: 70px;\n    height: 70px;\n    box-sizing: border-box;\n    position: relative;\n    background-repeat: no-repeat, repeat;\n    background-size: contain;\n    object-fit: contain;\n    border-radius: 10px;\n    margin-top: 15px;\n  }\n  @media (min-width: 410px) {\n    img {\n      width: 80px;\n      height: 80px;\n    }\n  }\n"])));
exports.StatusImage = StatusImage;
var SectionTitle = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 20px;\n  padding-bottom: 5px;\n  width: 100%;\n  color: ", ";\n  border-bottom: 1px solid ", ";;\n  text-transform: uppercase;\n  margin-top:35px;\n  @media (min-width: 1024px) {\n    margin-top: 50px;\n  }\n  @media (max-width: 410px) {\n    font-size: 14px;\n    line-height: 16px;    \n  }\n"])), function (props) {
  return props.theme.colors.fontSecundary;
}, function (props) {
  return props.theme.colors.borderColor;
});
exports.SectionTitle = SectionTitle;
var OrderCustomer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 20px 0px;\n  width: 100%;\n  position: relative;\n"])));
exports.OrderCustomer = OrderCustomer;
var CustomerInfo = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width:80%;\n  display: flex;\n  \n"])));
exports.CustomerInfo = CustomerInfo;
var ShareOrderWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  padding-top: 15px;\n  width: 20%;\n  justify-content: flex-end;\n\n"])));
exports.ShareOrderWrapper = ShareOrderWrapper;
var PhotoBlock = _styledComponents.default.img(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 0 10px;\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});
exports.PhotoBlock = PhotoBlock;
var InfoBlock = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  h1,\n  p {\n    margin: 5px 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  h1 {\n    font-size: 18px;\n  }\n"])));
exports.InfoBlock = InfoBlock;
var Map = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  margin-bottom: 10px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])));
exports.Map = Map;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  align-items: center;\n"])));
exports.OrderDriver = OrderDriver;
var WrapperDriver = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 70px;\n      height: 70px;\n      margin: 0px 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  margin-top: 30px;\n  box-sizing: border-box;\n  padding: 2px;\n  @media (min-width: 1024px) {\n    margin-top: 45px;\n  }\n  div:last-child {\n    border-bottom: none;\n  }\n"])));
exports.OrderProducts = OrderProducts;
var OrderBill = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 7.6px;\n  overflow: hidden;\n  padding: 20px;\n  margin-top: 25px;\n  margin-bottom:20px;\n  background-color: #fff;\n  margin: 2px;\n  @media (min-width: 1024px) {\n    margin-top: 45px;\n    margin-bottom: 30px;\n  }\n  table {\n    width: 100%;\n    font-size: 16px;\n    line-height: 19px;\n    tr{\n      display: flex;\n      margin-bottom: 10px;\n    }\n    tr td:nth-child(1),\n    tr td:nth-child(3) {\n      width: fit-content;\n      white-space: nowrap;\n    }\n\n    tr td:nth-child(2) {\n      flex-grow: 1;\n      padding: 0 15px;\n    }\n\n    tr td:nth-child(3) {\n      font-weight: bold;\n    }\n\n    \n  }\n  table.total {\n    padding-top: 10px;\n    font-size: 24px;\n    line-height: 29px;\n    tr {\n      td {\n        font-weight: bold;\n      }\n    }\n  }\n"])));
exports.OrderBill = OrderBill;
var ReviewsAction = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  margin: 20px 0px;\n  button {\n    width: 50%;\n    padding: 5px 20px;\n    color: #FFF;\n    cursor: pointer;\n  }\n  @media (min-width: 480px) {\n    button {\n      width: 20%;\n    }\n  }\n"])));
exports.ReviewsAction = ReviewsAction;
var FootActions = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  width: 100%;\n  display: flex;\n  button {\n    background: transparent;\n  }\n"])));
exports.FootActions = FootActions;
var SkeletonBlock = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n  @media (min-width: 768px){\n    span:nth-child(2), span:nth-child(5){\n      span{\n        height: 200px;\n      }\n    }\n  }\n"])), function (_ref3) {
  var width = _ref3.width;
  return width && "".concat(width, "%");
});
exports.SkeletonBlock = SkeletonBlock;
var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n  width: 100%;\n"])));
exports.SkeletonBlockWrapp = SkeletonBlockWrapp;
var ShareOrder = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 0 20px;\n  justify-content: space-between;\n  z-index: 1;\n\n  .a2a_floating_style {\n    top: 47px;\n    right: 0;\n  }\n  h1 {\n    font-size: 15px;\n    margin: 0px;\n  }\n  p {\n    font-size: 13px;\n    margin: 0px;\n  }\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n  div.text {\n    width: 60%;\n  }\n  div.wrap {\n    display: flex;\n    align-items: center;\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n  @media (min-width: 1201px) {\n    div.wrap {\n      & > div:first-child {\n        left: 0;\n      }\n    }\n  }\n  @media (min-width: 768px) {\n    div.wrap {\n      width: 30%;\n    }\n    h1 {\n      font-size: 20px;\n    }\n    p {\n      font-size: 18px;\n    }\n    button {\n      font-size: 18px;\n      width: 100%;\n      svg {\n        position: absolute;\n        margin-left: 10px;\n      }\n    }\n  }\n  @media (min-width: 425px) {\n    div.text {\n      width: 70%;\n    }\n    h1 {\n      font-size: 18px;\n    }\n    p {\n      font-size: 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
});
exports.ShareOrder = ShareOrder;
var MessagesIcon = _styledComponents.default.span(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));
exports.MessagesIcon = MessagesIcon;
var ExclamationWrapper = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 || (_props$theme5 = _props$theme5.colors) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.primary;
});
exports.ExclamationWrapper = ExclamationWrapper;
var DashLine = _styledComponents.default.span(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  padding: 0 15px;\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  height: 70%;\n  border-bottom: 1px dashed ", ";;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.DashLine = DashLine;
var BackHeader = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  @media (min-width: 1024px) {\n    margin-top: 25px;\n    margin-left: -20px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n      left: unset;\n      right: 0;\n    "])));
});
exports.BackHeader = BackHeader;
var Logo = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  margin: 0px 5px;\n"])));
exports.Logo = Logo;
var LinkText = _styledComponents.default.p(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    margin: 0 5px;\n  }\n"])));
exports.LinkText = LinkText;