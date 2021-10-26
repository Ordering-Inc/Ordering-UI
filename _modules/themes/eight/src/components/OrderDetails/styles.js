"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriver = exports.WrapperContainer = exports.WrapRightInnerContainer = exports.WrapRightContainer = exports.WrapLeftInnerContainer = exports.WrapLeftContainer = exports.WrapDriverInfo = exports.StatusBar = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ShareOrder = exports.SectionTitle = exports.ReviewsAction = exports.OrderStatus = exports.OrderProducts = exports.OrderInfo = exports.OrderDriver = exports.OrderData = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.MessagesIcon = exports.Map = exports.InfoBlock = exports.HeaderText = exports.Header = exports.ExclamationWrapper = exports.Container = exports.BusinessWrapper = exports.BusinessInfo = exports.ActionsBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid #F8F9FA;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));

exports.Container = Container;

var WrapLeftContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 30px 20px;\n  display: flex;\n  justify-content: flex-end;\n"])));

exports.WrapLeftContainer = WrapLeftContainer;

var WrapLeftInnerContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n  @media (min-width: 1024px) {\n    max-width: 500px;\n    width: 100%;\n    margin: initial;\n  }\n  @media (min-width: 1400px) {\n    max-width: 600px;\n  }\n"])));

exports.WrapLeftInnerContainer = WrapLeftInnerContainer;

var WrapRightInnerContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    width: 90%;\n    margin: 0 auto;\n    padding: 0 20px;\n  }\n  \n  @media (min-width: 1024px) {\n    max-width: 500px;\n    margin: initial;\n  }\n  @media (min-width: 1024px) {\n    ", "\n  }\n\n  @media (min-width: 1400px) {\n    max-width: 600px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding: 0 30px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      padding: 0 20px 0 30px;\n    "])));
}, function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      padding: 0 50px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      padding: 0 20px 0 50px;\n    "])));
});

exports.WrapRightInnerContainer = WrapRightInnerContainer;

var WrapRightContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  flex: 1;\n  background-color: ", ";\n  padding: 30px 20px;\n\n  @media (min-width: 1024px) {\n    padding: 30px 0px;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryLight;
});

exports.WrapRightContainer = WrapRightContainer;

var WrapperContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: ", ";\n  margin: auto;\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? '100%' : '80%';
});

exports.WrapperContainer = WrapperContainer;

var Header = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  margin-bottom: 40px;\n  margin-top: 10px;\n\n  > button {\n    background: transparent;\n  }\n"])));

exports.Header = Header;

var HeaderText = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n\n  ", ";\n  ", ";\n\n  h1 {\n    margin: 0;\n    font-size: 24px;\n  }\n\n  p {\n    font-size: 14px;\n  }\n\n  @media (min-width: 768px) {\n    p {\n      font-size: 18px;\n    }\n\n    h1 {\n      font-size: 32px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (_ref2) {
  var column = _ref2.column;
  return column && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "])));
}, function (_ref3) {
  var column = _ref3.column;
  return !column && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n    align-items: center;\n  "])));
});

exports.HeaderText = HeaderText;

var OrderBusiness = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  opacity: 1;\n  margin-bottom: 20px;\n  padding-bottom: 35px;\n  border-bottom: 8px solid #F8F9FA;\n"])));

exports.OrderBusiness = OrderBusiness;

var BusinessWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n"])));

exports.BusinessWrapper = BusinessWrapper;

var BusinessInfo = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 65%;\n  p {\n    margin: 3px 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 15px;\n  }\n\n  @media (min-width: 380px) {\n    width: 75%;\n  }\n"])));

exports.BusinessInfo = BusinessInfo;

var ActionsBlock = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 10%;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  @media (min-width: 380px) {\n    flex-direction: row;\n\n    svg {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
});

exports.ActionsBlock = ActionsBlock;

var OrderInfo = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0px 20px;\n"])));

exports.OrderInfo = OrderInfo;

var OrderData = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-bottom: 8px solid #F8F9FA;\n  padding-bottom: 35px;\n\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-size: 24px;\n    font-weight: 700;\n    color: ", ";\n  }\n  p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    color: ", ";\n  }\n\n  p.uuid {\n    display: none;\n  }\n\n  @media (min-width: 768px){\n    h1 {\n      font-size: 32px;\n    }\n  }\n\n  @media (min-width: 512px) {\n    p.uuid {\n      display: block;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.grayDark;
});

exports.OrderData = OrderData;

var StatusBarStyled = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  height: 8px;\n  margin: 10px 0px 0px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});

var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};

exports.StatusBar = StatusBar;

var OrderStatus = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 18px;\n  color: ", ";\n  padding-top: 10px;\n"])), function (props) {
  return props.theme.colors.grayDark;
});

exports.OrderStatus = OrderStatus;

var SectionTitle = _styledComponents.default.h1(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 20px;\n  font-weight: 500;\n  color: ", ";\n  text-transform: capitalize;\n"])), function (props) {
  return props.theme.colors.grayDark;
});

exports.SectionTitle = SectionTitle;

var OrderCustomer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0px 0px 20px;\n  width: 100%;\n  padding-bottom: 35px;\n  border-bottom: 8px solid #F8F9FA;\n"])));

exports.OrderCustomer = OrderCustomer;

var InfoBlock = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  p {\n    margin: 3px 0;\n    color: ", ";\n    font-size: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
});

exports.InfoBlock = InfoBlock;

var Map = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 50vh;\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 7.6px;\n  }\n"])));

exports.Map = Map;

var WrapDriverInfo = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  border-top: 8px solid ", ";\n  padding-top: 20px;\n"])), function (props) {
  return props.theme.colors.gray;
});

exports.WrapDriverInfo = WrapDriverInfo;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: none;\n  padding-bottom: 0px;\n"])));
exports.OrderDriver = OrderDriver;

var WrapperDriver = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  flex-direction: column;\n  border-bottom: none;\n  padding-bottom: 0px;\n  > div {\n    background: transparent;\n    border-bottom: none;\n  }\n"])));
exports.OrderProducts = OrderProducts;

var OrderBill = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  border-top: 1px solid ", ";\n  padding-top: 5px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 100%;\n    font-size: 12px;\n    color: ", ";\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid ", ";\n    margin-top: 15px;\n    tr {\n      font-size: 20px;\n      td:nth-child(1) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.gray;
}, function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
}, function (props) {
  return props.theme.colors.gray;
});

exports.OrderBill = OrderBill;

var ReviewsAction = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  width: fit-content;\n  margin: 5px 0px;\n  cursor: pointer;\n  color: ", ";\n  opacity: 0.6;\n  text-decoration: underline;\n\n  &:hover {\n    opacity: 1;\n  }\n"])), function (props) {
  return props.theme.colors.dark;
});

exports.ReviewsAction = ReviewsAction;

var SkeletonBlock = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n  @media (min-width: 768px){\n    span:nth-child(2), span:nth-child(5){\n      span{\n        height: 200px;\n      }\n    }\n  }\n"])), function (_ref4) {
  var width = _ref4.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;

var ShareOrder = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0px;\n  justify-content: space-between;\n  z-index: 1;\n  padding-bottom: 35px;\n\n  h1 {\n    font-size: 20px;\n    margin: 0px;\n    color: ", ";\n    font-weight: 500;\n  }\n\n  p {\n    font-size: 13px;\n    margin: 0px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  div.text {\n    width: 60%;\n  }\n\n  div.wrap {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n\n  @media (min-width: 1201px) {\n    div.wrap {\n      & > div:first-child {\n        left: 0;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    div.wrap {\n      width: 30%;\n    }\n\n    h1 {\n      font-size: 20px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n\n    button {\n      font-size: 18px;\n      width: 100%;\n      svg {\n        position: absolute;\n        margin-left: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 425px) {\n    div.text {\n      width: 70%;\n    }\n\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDark;
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ShareOrder = ShareOrder;

var MessagesIcon = _styledComponents.default.span(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));

exports.MessagesIcon = MessagesIcon;

var ExclamationWrapper = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme6, _props$theme6$colors;

  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : (_props$theme6$colors = _props$theme6.colors) === null || _props$theme6$colors === void 0 ? void 0 : _props$theme6$colors.primary;
});

exports.ExclamationWrapper = ExclamationWrapper;