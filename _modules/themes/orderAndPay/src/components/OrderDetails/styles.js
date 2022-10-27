"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRightContainer = exports.WrapperLeftContainer = exports.WrapperDriver = exports.WrapperContainer = exports.StatusBar = exports.SkeletonWrapper = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ShareOrder = exports.SectionTitle = exports.ReviewsAction = exports.ReviewOrderLink = exports.PhotoBlock = exports.OrderProducts = exports.OrderInfo = exports.OrderDriver = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.MyOrderActions = exports.ModalIcon = exports.MessagesIcon = exports.Map = exports.IconsContainer = exports.HeaderInfo = exports.ExclamationWrapper = exports.Exclamation = exports.Divider = exports.Content = exports.Container = exports.BusinessWrapper = exports.BusinessInfo = exports.ActionsBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 30px 40px;\n  box-sizing: border-box;\n"])));

exports.Container = Container;

var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));

exports.WrapperContainer = WrapperContainer;

var SkeletonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var HeaderInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  h1, p {\n    margin: 0;\n    color: ", ";\n  }\n\n  h1 {\n    margin-bottom: 22px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.HeaderInfo = HeaderInfo;

var Content = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n"])));

exports.Content = Content;

var OrderBusiness = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 20px 0 35px 0;\n"])));

exports.OrderBusiness = OrderBusiness;

var BusinessWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n"])));

exports.BusinessWrapper = BusinessWrapper;

var BusinessInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  h1,\n  p {\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: ", ";\n  }\n\n  h2 {\n    font-weight: 500;\n    font-size: 20px;\n    margin-bottom: 15px;\n  }\n  p {\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.BusinessInfo = BusinessInfo;

var ActionsBlock = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n    color: #B1BCCC;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
});

exports.ActionsBlock = ActionsBlock;

var OrderInfo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  h1, p {\n    margin: 0px;\n    color: ", ";\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-weight: 600;\n    font-size: 20px;\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  .date {\n    margin-bottom: 6px;\n  }\n\n  .order-status {\n    font-weight: 600;\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.OrderInfo = OrderInfo;

var ReviewOrderLink = _styledComponents.default.a(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  text-decoration-line: underline;\n  user-select: none;\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme2;

    return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.primary;
  }) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    color: #B1BCCC;\n    pointer-events: none;\n  "])));
});

exports.ReviewOrderLink = ReviewOrderLink;

var StatusBarStyled = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  height: 12px;\n  margin: 18px 0px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, #F8F9FA ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, #F8F9FA ", "%)\n  "])), props.theme.colors.primary, props.percentage, props.percentage);
});

var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};

exports.StatusBar = StatusBar;

var SectionTitle = _styledComponents.default.h1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin: 20px 0 0 0;\n  font-size: 20px;\n  font-weight: 500;\n"])));

exports.SectionTitle = SectionTitle;
var OrderCustomer = (0, _styledComponents.default)(BusinessInfo)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin: 25px 0px 35px;\n"])));
exports.OrderCustomer = OrderCustomer;

var PhotoBlock = _styledComponents.default.img(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  object-fit: cover;\n  margin: 0 10px;\n  ", "\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n    margin-right: 0;\n  "])));
});

exports.PhotoBlock = PhotoBlock;

var Map = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: calc(100% + 40px);\n  height: 150px;\n  margin-left: -20px;\n  margin-bottom: 10px;\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  @media (min-width: 768px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));

exports.Map = Map;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n"])));
exports.OrderDriver = OrderDriver;

var WrapperDriver = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 48px;\n      height: 48px;\n      margin-right: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});

exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.OrderProducts = OrderProducts;

var OrderBill = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n  border-top: 1px solid #BFBFBF;\n  padding-top: 10px;\n  table {\n    width: 100%;\n    font-size: 12px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 5px;\n    tr {\n      font-size: 12px;\n      td:nth-child(1) {\n        font-weight: 600;\n        font-size: 14;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: 600;\n        font-size: 14px;\n        padding-top: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 14px;\n    }\n  }\n"])), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
});

exports.OrderBill = OrderBill;

var ReviewsAction = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    color: #FFF;\n    cursor: pointer;\n  }\n"])));

exports.ReviewsAction = ReviewsAction;

var SkeletonBlock = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  span:nth-child(2),span:nth-child(5){\n      span{\n        height: 100px;\n      }\n    }\n"])), function (_ref2) {
  var width = _ref2.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;

var ShareOrder = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 0 20px;\n  justify-content: space-between;\n  z-index: 1;\n\n  div.wrap {\n    & > div:first-child {\n      left: 0;\n    }\n  }\n\n  h1 {\n    font-size: 15px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 13px;\n    margin: 0px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  div.text {\n    width: 60%;\n  }\n\n  div.wrap {\n    display: flex;\n    align-items: center;\n\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ShareOrder = ShareOrder;

var MessagesIcon = _styledComponents.default.span(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));

exports.MessagesIcon = MessagesIcon;

var ExclamationWrapper = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: ", ";\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (_ref3) {
  var driver = _ref3.driver;
  return driver ? 'translate(50%,-25%)' : 'translate(300%, -25%)';
}, function (props) {
  var _props$theme7, _props$theme7$colors;

  return (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : (_props$theme7$colors = _props$theme7.colors) === null || _props$theme7$colors === void 0 ? void 0 : _props$theme7$colors.primary;
});

exports.ExclamationWrapper = ExclamationWrapper;

var WrapperLeftContainer = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n\n"])));

exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = (0, _styledComponents.default)(WrapperLeftContainer)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n"])));
exports.WrapperRightContainer = WrapperRightContainer;

var Divider = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  height: 8px;\n  background: #F8F9FA;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n"])));

exports.Divider = Divider;

var MyOrderActions = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n\n"])));

exports.MyOrderActions = MyOrderActions;

var ModalIcon = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 3px;\n  margin-bottom: 20px;\n"])));

exports.ModalIcon = ModalIcon;

var IconsContainer = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n  svg{\n    margin-left: 10px;\n    color: ", ";\n  }\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.arrowColor;
});

exports.IconsContainer = IconsContainer;

var Exclamation = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));

exports.Exclamation = Exclamation;