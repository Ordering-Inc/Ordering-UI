"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriver = exports.WrapperContainer = exports.StatusBar = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.SectionTitle = exports.RightPanel = exports.ReviewsAction = exports.PhotoBlock = exports.PanelRow = exports.PageTitle = exports.OrderStatus = exports.OrderProducts = exports.OrderInfo = exports.OrderDriver = exports.OrderData = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.MessagesIcon = exports.Map = exports.LeftPanel = exports.Layout = exports.Hr = exports.HeaderInfo = exports.Header = exports.ExclamationWrapper = exports.CustomerInfo = exports.Container = exports.BusinessInfo = exports.ActionsBlock = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var Layout = exports.Layout = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));
var LeftPanel = exports.LeftPanel = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 1024px) {\n    width: 50%;\n  }\n"])));
var RightPanel = exports.RightPanel = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  background-color: ", ";\n  @media (min-width: 1024px) {\n    width: 50%;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryBackground;
});
var PanelRow = exports.PanelRow = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 4% 6%;\n  box-sizing: border-box;\n"])));
var WrapperContainer = exports.WrapperContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: ", ";\n  margin: auto;\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? '100%' : '80%';
});
var Header = exports.Header = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: transparent;\n    box-sizing: border-box;\n    padding: 7px 16px;\n    font-size: .86rem;\n  }\n"])));
var HeaderInfo = exports.HeaderInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  h1 {\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 34px;\n    color: #000000;\n    margin: 0;\n    margin-bottom: 12px;\n    text-transform: uppercase;\n  }\n\n  p {\n    font-size: 16px;\n    line-height: 26px;\n    color: #212629;\n    margin: 0px;\n  }\n"])));
var OrderBusiness = exports.OrderBusiness = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  opacity: 1;\n  padding-bottom: 20px;\n  margin: 10px 0px 20px;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n   width: 100%;\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    width: 100%;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #212629;\n    margin: 0;\n  }\n  @media (min-width: 380px) {\n    width: 75%;\n  }\n"])));
var ActionsBlock = exports.ActionsBlock = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-direction: column;\n\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n    color: ", ";\n  }\n\n  @media (min-width: 380px) {\n    flex-direction: row;\n    svg {\n      font-size: 20px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var OrderInfo = exports.OrderInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var OrderData = exports.OrderData = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h4, p {\n    margin: 0px;\n  }\n  h4 {\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  p {\n    font-size: 16px;\n    line-height: 26px;\n    color: #212629;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n"])));
var StatusBarStyled = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  height: 14px;\n  margin: 10px 0px 0px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});
var StatusBar = exports.StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
var OrderStatus = exports.OrderStatus = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  span {\n    display: inline-block;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 30px;\n    margin-top: 16px;\n    color: #000000;\n    text-transform: uppercase;\n  }\n"])));
var SectionTitle = exports.SectionTitle = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 30px;\n  color: #000000;\n  text-transform: uppercase;\n  font-weight: 700;\n"])));
var OrderCustomer = exports.OrderCustomer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 10px 0px 20px;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin: 0 10px;\n      ", "\n    }\n  }\n\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
var PhotoBlock = exports.PhotoBlock = _styledComponents.default.img(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 0 10px;\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});
var CustomerInfo = exports.CustomerInfo = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    color: #212629;\n    margin: 0;\n\n  }\n"])));
var Map = exports.Map = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 20vh;\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n"])));
var OrderDriver = exports.OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n"])));
var WrapperDriver = exports.WrapperDriver = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    width: 48px;\n    height: 47px;\n    border-radius: 7px;\n    overflow: hidden;\n\n    svg {\n      width: 48px;\n      height: 47px;\n    }\n  }\n\n  div.name {\n    margin: 0 10px;\n    p {\n      font-size: 16px;\n      line-height: 26px;\n      color: #212629;\n    }\n  }\n\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var OrderProducts = exports.OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
var OrderBill = exports.OrderBill = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 100%;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      font-weight: 500;\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.bill-sub-option {\n    tr td{\n      font-size: 12px;\n      line-height: 22px;\n      color: #212629;\n    }\n    padding-top: 20px;\n  }\n  \n  table.total {\n    padding-top: 10px;\n    tr td {\n      font-weight: bold;\n      font-size: 14px;\n      line-height: 24px;\n      color: #212629;\n    }\n  }\n\n  @media (min-width: 411px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
});
var ReviewsAction = exports.ReviewsAction = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 20px 0px;\n  font-size: 16px;\n  line-height: 26px;\n  color: ", ";\n  padding-bottom: 5px;\n"])), function (props) {
  return props.theme.colors.primary;
});
var SkeletonBlock = exports.SkeletonBlock = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n  @media (min-width: 768px){\n    span:nth-child(2), span:nth-child(5){\n      span{\n        height: 200px;\n      }\n    }\n  }\n"])), function (_ref2) {
  var width = _ref2.width;
  return width && "".concat(width, "%");
});
var SkeletonBlockWrapp = exports.SkeletonBlockWrapp = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));
var MessagesIcon = exports.MessagesIcon = _styledComponents.default.span(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));
var ExclamationWrapper = exports.ExclamationWrapper = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 || (_props$theme5 = _props$theme5.colors) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.primary;
});
var Hr = exports.Hr = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  background: ", ";\n"])), function (_ref3) {
  var height = _ref3.height;
  return height ? "".concat(height, "px") : '10px';
}, function (_ref4) {
  var color = _ref4.color;
  return color ? "".concat(color) : '#DDDDDD';
});
var PageTitle = exports.PageTitle = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  width: 100%;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 34px;\n  color: #000000;\n  text-transform: uppercase;\n"])));