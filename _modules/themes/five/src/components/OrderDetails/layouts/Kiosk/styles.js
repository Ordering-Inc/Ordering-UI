"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRightContainer = exports.WrapperLeftContainer = exports.WrapperDriver = exports.WrapperContainer = exports.WrapperActionsInputText = exports.WrapperActionsInput = exports.WrapperActions = exports.ValidationText = exports.TitleContainer = exports.StatusBar = exports.SkeletonWrapper = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.SentReceipt = exports.SectionTitleContainer = exports.PhotoBlock = exports.OrderProducts = exports.OrderInfo = exports.OrderDriver = exports.OrderCustomer = exports.OrderBusiness = exports.HeaderTitle = exports.HeaderInfo = exports.Container = exports.BusinessWrapper = exports.BusinessInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 20px 0;\n"])));
exports.Container = Container;
var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  min-height: auto;\n  position: relative;\n\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box;\n  }\n"])));
exports.WrapperContainer = WrapperContainer;
var HeaderInfo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n\n  h1, p {\n    margin: 0;\n    color: ", ";\n  }\n\n  h1 {\n    margin-bottom: 22px;\n    font-size: 32px;\n  }\n\n  p.behalf {\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.HeaderInfo = HeaderInfo;
var OrderBusiness = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  flex-direction: row;\n  align-items: flex-start;\n  border-radius: 7.6px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0px 4px 10px 0px #0000001F;\n"])));
exports.OrderBusiness = OrderBusiness;
var BusinessWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: ", ";\n  display: flex;\n  align-items: center;\n  ", "\n  ", "\n  img {\n    width: 100px;\n    height: 100px;\n    border-radius: 7.6px;\n    margin-right: 40px;\n  }\n"])), function (props) {
  var _props$w;
  return (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : '100%';
}, function (props) {
  return props.borderBottom && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    padding-bottom: 15px;\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
}, function (props) {
  return props.borderTop && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-top: 15px;\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
});
exports.BusinessWrapper = BusinessWrapper;
var BusinessInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  margin-right: 15px;\n  h1,\n  p {\n    margin: 0;\n    color: ", ";\n    overflow-wrap: break-word;\n  }\n\n  h2 {\n    font-weight: 500;\n    font-size: 18px;\n    margin: 0px 0px 5px 0px;\n  }\n  p {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.BusinessInfo = BusinessInfo;
var OrderInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0px 0px 35px;\n  position: relative;\n  h1, p {\n    margin: 0px;\n    color: ", ";\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-weight: 600;\n    /* font-size: 32px; */\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  .date {\n    margin-bottom: 6px;\n  }\n\n  .types {\n    margin-bottom: 6px;\n    font-size: 16px;\n  }\n\n  .order-status {\n    font-weight: 600;\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.OrderInfo = OrderInfo;
var StatusBarStyled = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  height: 12px;\n  margin: 18px 0px 8px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});
var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
exports.StatusBar = StatusBar;
var OrderCustomer = (0, _styledComponents.default)(BusinessInfo)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 7.6px;\n  padding: 20px;\n  box-shadow: 0px 4px 10px 0px #0000001F;\n  margin-bottom: 30px;\n"])));
exports.OrderCustomer = OrderCustomer;
var PhotoBlock = _styledComponents.default.img(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  width: 100px;\n  height: 100px;\n  margin-right: 40px;\n"])));
exports.PhotoBlock = PhotoBlock;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral([""])));
exports.OrderDriver = OrderDriver;
var WrapperDriver = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 48px;\n      height: 48px;\n      margin-right: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.OrderProducts = OrderProducts;
var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));
exports.SkeletonBlockWrapp = SkeletonBlockWrapp;
var SkeletonBlock = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});
exports.SkeletonBlock = SkeletonBlock;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n"])));
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = (0, _styledComponents.default)(WrapperLeftContainer)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([""])));
exports.WrapperRightContainer = WrapperRightContainer;
var SkeletonWrapper = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var TitleContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  margin: auto;\n  button {\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    justify-content: space-around;\n    min-width: 200px;\n    max-height: 53px;\n  }\n"])));
exports.TitleContainer = TitleContainer;
var SectionTitleContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  h2 {\n    font-size: 20px;\n    font-weight: 500;\n    margin: 0px 0px 5px 0px;\n  }\n"])));
exports.SectionTitleContainer = SectionTitleContainer;
var HeaderTitle = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  h1{\n    font-size: 32px;\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n"])));
exports.HeaderTitle = HeaderTitle;
var WrapperActions = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  button.close {\n    width: 100%;\n    padding: 5px;\n  }\n"])));
exports.WrapperActions = WrapperActions;
var WrapperActionsInput = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #FFF;\n  /* margin-bottom: 30px; */\n  justify-content: flex-start;\n\n  button {\n    margin-left: 5px;\n    width: 75px;\n    ", "\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n\n  input {\n    width: calc(100% - 80px);\n    border-radius: 7.6px;\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0px;\n    "])));
});
exports.WrapperActionsInput = WrapperActionsInput;
var WrapperActionsInputText = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex: 1;\n  margin-bottom: 10px;\n\n  p {\n    font-size: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n\n    &.txt {\n      margin-left: 10px;\n    }\n  }\n"])));
exports.WrapperActionsInputText = WrapperActionsInputText;
var SentReceipt = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
exports.SentReceipt = SentReceipt;
var ValidationText = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  margin-top: 5px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.danger500;
});
exports.ValidationText = ValidationText;