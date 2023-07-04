"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriver = exports.WrapperContainer = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ShareOrder = exports.SectionContainer = exports.ReviewsAction = exports.ReviewWrapper = exports.OrderProducts = exports.OrderPayMethodIcon = exports.OrderPayInfoWrapper = exports.OrderPayInfoContent = exports.OrderDriver = exports.OrderCustomer = exports.OrderBusinessHeaderImage = exports.OrderBusiness = exports.OrderBillDivider = exports.OrderBill = exports.MessagesIcon = exports.Map = exports.InfoBlock = exports.HeaderText = exports.HeaderInfo = exports.HeaderImg = exports.Header = exports.FootActions = exports.ExclamationWrapper = exports.Exclamation = exports.Content = exports.Container = exports.BusinessWrapper = exports.BusinessInfo = exports.ActionsBlock = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 20px;\n"])));
exports.Container = Container;
var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: auto;\n  width: 91%;\n  @media (min-width: 768px) {\n    width: ", ";\n  }\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? '100%' : '80%';
});
exports.WrapperContainer = WrapperContainer;
var Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  margin-bottom: 50px;\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: absolute;\n    z-index: 10;\n    top: 10px;\n    left: 10px;\n    color: #000;\n\n    svg {\n      width: 20px;\n      height: 20px;\n      margin-right: 10px;\n    }\n  }\n"])));
exports.Header = Header;
var HeaderImg = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0 20px;\n  img {\n    width: 150px;\n    display: block;\n    object-fit: cover;\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));
exports.HeaderImg = HeaderImg;
var HeaderInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: #DCFFDB;\n  display: flex;\n  padding: 20px;\n  \n  @media (min-width: 678px) {\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));
exports.HeaderInfo = HeaderInfo;
var HeaderText = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  color: #000;\n\n  ", ";\n  ", ";\n\n  h1 {\n    margin: 0;\n    font-weight: 500;\n    font-size: 22px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  @media (min-width: 480px) {\n    margin: 0px 20px;\n  }\n\n  @media (min-width: 769px) {\n    h1 {\n      font-size: 26px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n  }\n"])), function (_ref2) {
  var column = _ref2.column;
  return column && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "])));
}, function (_ref3) {
  var column = _ref3.column;
  return !column && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n    align-items: center;\n  "])));
});
exports.HeaderText = HeaderText;
var Content = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n"])));
exports.Content = Content;
var OrderBusiness = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
exports.OrderBusiness = OrderBusiness;
var BusinessWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n"])));
exports.BusinessWrapper = BusinessWrapper;
var BusinessInfo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 65%;\n  h1,\n  p {\n    margin: 3px 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 15px;\n    opacity: 0.8;\n  }\n\n  @media (min-width: 380px) {\n    width: 75%;\n  }\n"])));
exports.BusinessInfo = BusinessInfo;
var ActionsBlock = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n    color: ", ";\n  }\n\n  @media (min-width: 380px) {\n    flex-direction: row;\n\n    svg {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
});
exports.ActionsBlock = ActionsBlock;
var OrderCustomer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
exports.OrderCustomer = OrderCustomer;
var InfoBlock = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  h1,\n  span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n    margin-top: 0px;\n    margin-bottom: 10px;\n  }\n\n  span {\n    color: #344050;\n    margin: 0px;\n  }\n"])));
exports.InfoBlock = InfoBlock;
var Map = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 200px;\n  height: 30vh;\n  margin-bottom: 40px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n"])));
exports.Map = Map;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  align-items: center;\n"])));
exports.OrderDriver = OrderDriver;
var WrapperDriver = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin: 0px 10px;\n      ", "\n    }\n  }\n\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.OrderProducts = OrderProducts;
var OrderBill = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  table {\n    margin: 10px 0;\n    flex: 1;\n    font-size: 12px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.comments {\n    margin-top: 20px;\n    align-items: center;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n  }\n\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
});
exports.OrderBill = OrderBill;
var ReviewsAction = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    color: #FFF;\n    cursor: pointer;\n  }\n\n  @media (min-width: 480px) {\n    button {\n      width: 70%;\n    }\n  }\n"])));
exports.ReviewsAction = ReviewsAction;
var FootActions = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  button {\n    border-radius: 30px;\n    padding: 3px 30px;\n  }\n"])));
exports.FootActions = FootActions;
var SkeletonBlock = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n  @media (min-width: 768px){\n    span:nth-child(2), span:nth-child(5){\n      span{\n        height: 200px;\n      }\n    }\n  }\n"])), function (_ref4) {
  var width = _ref4.width;
  return width && "".concat(width, "%");
});
exports.SkeletonBlock = SkeletonBlock;
var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));
exports.SkeletonBlockWrapp = SkeletonBlockWrapp;
var ShareOrder = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1;\n\n  h1 {\n    font-size: 15px;\n    margin-top: 0px;\n    margin-bottom: 15px;\n  }\n\n  p {\n    font-size: 13px;\n    margin: 0px;\n    color: #344050;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  div.text {\n    flex: 1;\n  }\n\n  div.wrap {\n    display: flex;\n    align-items: center;\n\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      > svg {\n        color: ", ";\n      }\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n\n  @media (min-width: 1201px) {\n    div.wrap {\n      & > div:first-child {\n        left: 0;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 20px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n\n    button {\n      font-size: 18px;\n      width: 100%;\n      svg {\n        position: absolute;\n        margin-left: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 425px) {\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.ShareOrder = ShareOrder;
var MessagesIcon = _styledComponents.default.span(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));
exports.MessagesIcon = MessagesIcon;
var ExclamationWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 || (_props$theme4 = _props$theme4.colors) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.primary;
});
exports.ExclamationWrapper = ExclamationWrapper;
var OrderPayInfoWrapper = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  margin: 10px 0;\n  ", "\n  h3 {\n    font-size: 18px;\n    margin: 0px;\n  }\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    padding-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    padding-right: 20px;\n  "])));
});
exports.OrderPayInfoWrapper = OrderPayInfoWrapper;
var OrderPayInfoContent = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n  display: flex;\n  align-items: flex-start;\n  > div {\n    display: flex;\n    flex-direction: column;\n    span {\n      color: #344050;\n    }\n    span.total {\n      margin-top: 8px;\n      font-weight: 600;\n    }\n  }\n"])));
exports.OrderPayInfoContent = OrderPayInfoContent;
var OrderPayMethodIcon = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  border: 1px solid #B1BCCC;\n  padding: 3px 10px;\n  border-radius: 2px;\n  ", "\n  svg {\n    font-size: 20px;\n  }\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    margin-left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
});
exports.OrderPayMethodIcon = OrderPayMethodIcon;
var OrderBillDivider = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 768px) {\n    display: block;\n    width: 1px;\n    background: #DEE2E6;\n    margin: 0 40px;\n  }\n"])));
exports.OrderBillDivider = OrderBillDivider;
var SectionContainer = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  background: #FFF;\n  margin-bottom: ", ";\n  padding: 15px 0px;\n\n  div.accordion {\n    margin: 0px;\n  }\n"])), function (_ref5) {
  var marginBottom = _ref5.marginBottom;
  return marginBottom || '25px';
});
exports.SectionContainer = SectionContainer;
var OrderBusinessHeaderImage = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n\n  img {\n    width: 100%;\n    height: 300px;\n    display: block;\n    object-fit: cover;\n  }\n"])));
exports.OrderBusinessHeaderImage = OrderBusinessHeaderImage;
var ReviewWrapper = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  .review-sent {\n    border-radius: 7.6px;\n  }\n"])));
exports.ReviewWrapper = ReviewWrapper;
var Exclamation = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));
exports.Exclamation = Exclamation;