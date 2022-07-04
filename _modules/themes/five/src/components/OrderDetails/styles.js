"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRightContainer = exports.WrapperLeftContainer = exports.WrapperDriver = exports.WrapperContainer = exports.TitleContainer = exports.StatusBar = exports.SkeletonWrapper = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ShareOrder = exports.SectionTitleContainer = exports.SectionTitle = exports.ReviewWrapper = exports.ReviewOrderLink = exports.ReOrder = exports.PlaceSpotSection = exports.PhotoBlock = exports.OrderProducts = exports.OrderPreferences = exports.OrderInfo = exports.OrderDriver = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.OrderActions = exports.NewOrder = exports.MyOrderActions = exports.MessagesIcon = exports.Map = exports.HeaderTitle = exports.HeaderInfo = exports.ExclamationWrapper = exports.Exclamation = exports.Divider = exports.Content = exports.Container = exports.CommentContainer = exports.BusinessWrapper = exports.BusinessTitle = exports.BusinessInfo = exports.ActionsBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  ", "\n"])), function (_ref) {
  var isCustomerMode = _ref.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    align-items: center;\n  "])));
});

exports.Container = Container;

var WrapperContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-height: auto;\n  position: relative;\n\n  ", "\n\n  @media (min-width: 769px) {\n    ", "\n  }\n\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box;\n  }\n"])), function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    width: 50%;\n  "])));
}, function (_ref3) {
  var isCustomerMode = _ref3.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      flex-direction: row;\n    "])));
});

exports.WrapperContainer = WrapperContainer;

var SkeletonWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  ", "\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])), function (_ref4) {
  var isCustomerMode = _ref4.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 100%;\n\n  "])));
});

exports.SkeletonWrapper = SkeletonWrapper;

var HeaderInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n\n  h1, p {\n    margin: 0;\n    color: ", ";\n  }\n\n  h1 {\n    margin-bottom: 22px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.HeaderInfo = HeaderInfo;

var Content = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", "\n"])), function (_ref5) {
  var isCustomerMode = _ref5.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin: 10px 0px;\n  "])));
});

exports.Content = Content;

var OrderBusiness = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n"])), function (_ref6) {
  var isCustomerMode = _ref6.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 7.6px;\n    padding: 20px;\n    margin-bottom: 20px;\n    box-shadow: 0px 4px 10px 0px #0000001F;\n  "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin: 20px 0 35px 0;\n  "])));
});

exports.OrderBusiness = OrderBusiness;

var BusinessWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n"])), function (_ref7) {
  var isCustomerMode = _ref7.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    margin-bottom: 30px;\n    img {\n      width: 100px;\n      height: 100px;\n      border-radius: 7.6px;\n      margin-right: 40px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    width: 90%;\n  "])));
});

exports.BusinessWrapper = BusinessWrapper;

var BusinessInfo = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  h1,\n  p {\n    margin: 0;\n    color: ", ";\n    overflow-wrap: break-word;\n  }\n\n  h2 {\n    font-weight: 500;\n  }\n  p {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref8) {
  var isCustomerMode = _ref8.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    h2{\n      font-size: 18px;\n      margin: 0px 0px 5px 0px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    h2 {\n      font-size: 20px;\n      margin-bottom: 15px;\n    }\n  "])));
});

exports.BusinessInfo = BusinessInfo;

var ActionsBlock = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n    color: #B1BCCC;\n  }\n\n  @media (min-width: 380px) {\n    flex-direction: row;\n\n    svg {\n      font-size: 24px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
});

exports.ActionsBlock = ActionsBlock;

var OrderInfo = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0px 0px 35px;\n  position: relative;\n  h1, p {\n    margin: 0px;\n    color: ", ";\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-weight: 600;\n    font-size: 32px;\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  .date {\n    margin-bottom: 6px;\n  }\n\n  .types {\n    margin-bottom: 6px;\n    font-size: 16px;\n  }\n\n  .order-status {\n    font-weight: 600;\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.OrderInfo = OrderInfo;

var ReviewOrderLink = _styledComponents.default.span(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  margin: 0;\n  cursor: pointer;\n  text-decoration-line: underline;\n  user-select: none;\n  ", "\n"])), function (_ref9) {
  var active = _ref9.active;
  return active ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme2;

    return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.primary;
  }) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    color: #B1BCCC;\n    cursor: not-allowed;\n    span {\n      pointer-events: none;\n    }\n  "])));
});

exports.ReviewOrderLink = ReviewOrderLink;

var StatusBarStyled = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  height: 12px;\n  margin: 18px 0px 8px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});

var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};

exports.StatusBar = StatusBar;

var SectionTitle = _styledComponents.default.h1(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  margin: 20px 0 0 0;\n  font-size: 20px;\n  font-weight: 500;\n"])));

exports.SectionTitle = SectionTitle;

var SectionTitleContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  h2 {\n    font-size: 20px;\n    font-weight: 500;\n    margin: 0px 0px 5px 0px;\n  }\n"])));

exports.SectionTitleContainer = SectionTitleContainer;
var OrderCustomer = (0, _styledComponents.default)(BusinessInfo)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref10) {
  var isCustomerMode = _ref10.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    border-radius: 7.6px;\n    padding: 20px;\n    box-shadow: 0px 4px 10px 0px #0000001F;\n    margin-bottom: 30px;\n  "]))) : (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    margin: 25px 0px 35px;\n  "])));
});
exports.OrderCustomer = OrderCustomer;

var PhotoBlock = _styledComponents.default.img(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref11) {
  var isCustomerMode = _ref11.isCustomerMode,
      theme = _ref11.theme;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n    width: 100px;\n    height: 100px;\n    margin-right: 40px;\n  "]))) : (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    border-radius: 50%;\n    object-fit: cover;\n    margin: 0 10px;\n    ", "\n  "])), (theme === null || theme === void 0 ? void 0 : theme.rtl) && (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "]))));
});

exports.PhotoBlock = PhotoBlock;

var Map = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  ", "\n"])), function (_ref12) {
  var isCustomerMode = _ref12.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 350px;\n  "]))) : (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    width: calc(100% + 40px);\n    height: 300px;\n    margin-left: -20px;\n    @media (min-width: 768px) {\n      width: calc(100% + 80px);\n      margin-left: -40px;\n    }\n  "])));
});

exports.Map = Map;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref13) {
  var isCustomerMode = _ref13.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 20px;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #E9ECEF;\n  "])));
});
exports.OrderDriver = OrderDriver;

var WrapperDriver = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 48px;\n      height: 48px;\n      margin-right: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});

exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.OrderProducts = OrderProducts;

var OrderBill = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n  ", "\n  table {\n    width: 100%;\n    font-size: 14px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 14px;\n      td:nth-child(1) {\n        font-weight: 600;\n        font-size: 20px;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: 600;\n        font-size: 20px;\n        padding-top: 10px;\n      }\n    }\n  }\n\n  table.comments {\n    margin-top: 20px;\n    align-items: center;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 16px;\n    }\n  }\n"])), function (_ref14) {
  var isCustomerMode = _ref14.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n    margin-top: 10px;\n  "])));
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
});

exports.OrderBill = OrderBill;

var SkeletonBlock = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  ", "\n"])), function (_ref15) {
  var width = _ref15.width;
  return width && "".concat(width, "%");
}, function (_ref16) {
  var isCustomerMode = _ref16.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n    align-items: center;\n  "])));
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;

var ShareOrder = _styledComponents.default.div(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 0 20px;\n  justify-content: space-between;\n  z-index: 1;\n\n  div.wrap {\n    & > div:first-child {\n      left: 0;\n    }\n    button {\n      border-radius: 7.6px;\n    }\n  }\n  \n  h1 {\n    font-size: 15px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 13px;\n    margin: 0px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  div.text {\n    width: 60%;\n  }\n\n  div.wrap {\n    display: flex;\n    align-items: center;\n\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n\n  @media (min-width: 1201px) {\n    div.wrap {\n      & > div:first-child {\n        left: 0;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    div.wrap {\n      width: 30%;\n      & > div:first-child {\n        left: 0;\n      }\n    }\n\n    h1 {\n      font-size: 20px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n\n    button {\n      font-size: 18px;\n      width: 100%;\n      svg {\n        position: absolute;\n        margin-left: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 425px) {\n    div.text {\n      width: 70%;\n    }\n\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ShareOrder = ShareOrder;

var MessagesIcon = _styledComponents.default.span(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));

exports.MessagesIcon = MessagesIcon;

var ExclamationWrapper = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme6, _props$theme6$colors;

  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : (_props$theme6$colors = _props$theme6.colors) === null || _props$theme6$colors === void 0 ? void 0 : _props$theme6$colors.primary;
});

exports.ExclamationWrapper = ExclamationWrapper;

var WrapperLeftContainer = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  \n  ", "\n\n  @media (min-width: 769px) {\n    ", "\n  }\n"])), function (_ref17) {
  var isCustomerMode = _ref17.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n    padding: 20px;\n  "])));
}, function (_ref18) {
  var isCustomerMode = _ref18.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n      width: 50%;\n      padding: 40px;\n    "])));
});

exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = (0, _styledComponents.default)(WrapperLeftContainer)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["  \n  ", "\n"])), function (_ref19) {
  var isCustomerMode = _ref19.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n    background: #F8F9FA;  \n  "])));
});
exports.WrapperRightContainer = WrapperRightContainer;

var Divider = _styledComponents.default.div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  height: 8px;\n  background: #F8F9FA;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));

exports.Divider = Divider;

var MyOrderActions = _styledComponents.default.div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral([""])));

exports.MyOrderActions = MyOrderActions;

var ReviewWrapper = _styledComponents.default.div(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  .review-sent {\n    border-radius: 7.6px;\n  }\n"])));

exports.ReviewWrapper = ReviewWrapper;

var Exclamation = _styledComponents.default.div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));

exports.Exclamation = Exclamation;

var CommentContainer = _styledComponents.default.div(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  margin: 0;\n  h3 {\n    margin: 0;\n  }\n"])));

exports.CommentContainer = CommentContainer;

var NewOrder = _styledComponents.default.div(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  button {\n    width: 160px;\n  }\n"])));

exports.NewOrder = NewOrder;

var OrderActions = _styledComponents.default.div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"])));

exports.OrderActions = OrderActions;

var TitleContainer = _styledComponents.default.div(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  margin: auto;\n  button {\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    justify-content: space-around;\n    min-width: 200px;\n    max-height: 53px;\n  }\n"])));

exports.TitleContainer = TitleContainer;

var ReOrder = _styledComponents.default.div(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n\n  button {\n    padding: 5px 16px;\n    min-width: unset;\n  }\n"])));

exports.ReOrder = ReOrder;

var BusinessTitle = _styledComponents.default.div(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.BusinessTitle = BusinessTitle;
var OrderPreferences = (0, _styledComponents.default)(OrderCustomer)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral([""])));
exports.OrderPreferences = OrderPreferences;

var HeaderTitle = _styledComponents.default.div(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  h1{\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n"])));

exports.HeaderTitle = HeaderTitle;

var PlaceSpotSection = _styledComponents.default.div(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n\n"])));

exports.PlaceSpotSection = PlaceSpotSection;