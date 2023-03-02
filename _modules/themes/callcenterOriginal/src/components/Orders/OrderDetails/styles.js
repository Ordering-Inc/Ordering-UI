"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusBarContainer = exports.StatusBar = exports.SkeletonWrapper = exports.RejectReasonsList = exports.RejectReasonsContainer = exports.RejectReasonWrapper = exports.PlaceSpotContainer = exports.OrderStatusSelectorWrapper = exports.OrderStatus = exports.OrderProducts = exports.OrderDetailsExtraContent = exports.OrderDetailsContent = exports.Container = exports.CloseButtonWrapper = exports.ChatContainer = exports.ButtonLink = exports.AdvancedLogistic = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 0;\n  position: fixed;\n  box-shadow: 0px 8px 35px rgba(0, 0, 0, 0.16);\n\n  ", "\n  background: ", ";\n  height: calc(var(--vh, 1vh) * 100);\n  top: 0px;\n  z-index: 1001;\n  overflow-x: hidden;\n  ", "\n\n  ", "\n  @media print {\n    box-shadow: none;\n  }\n"])), function (_ref) {
  var isSelectedOrders = _ref.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-shadow: none;\n\n    ", "\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    }) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.borderColor;
    });
  });
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (_ref2) {
  var noAnimation = _ref2.noAnimation;
  return !noAnimation && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    transition: 0.3s;\n  "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    right: 0px;\n  "])));
});
exports.Container = Container;
var SkeletonWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  flex-direction: column;\n  > span {\n    width: 100%;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var OrderDetailsContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 30px 20px;\n  box-sizing: border-box;\n  width: 100%;\n  overflow-x: hidden;\n\n  ", "\n"])), function (_ref3) {
  var noScroll = _ref3.noScroll;
  return noScroll && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    overflow: hidden;\n  "])));
});
exports.OrderDetailsContent = OrderDetailsContent;
var OrderDetailsExtraContent = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 500px;\n  position: relative;\n  padding: 30px 20px;\n  box-sizing: border-box;\n  width: 100%;\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n  "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n  "])));
});
exports.OrderDetailsExtraContent = OrderDetailsExtraContent;
var ChatContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  border-radius: 8px;\n  margin-top: 40px;\n  height: calc(100% - 40px);\n  overflow: hidden;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.ChatContainer = ChatContainer;
var ButtonLink = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px;\n  margin: 0 5px;\n\n  &:hover {\n    background-color: ", ";\n    border-radius: 5px;\n  }\n\n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.secundary;
}, function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.secundaryContrast;
});
exports.ButtonLink = ButtonLink;
var OrderStatus = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 20px 0;\n\n  h2 {\n    color: ", ";\n    margin: 0px;\n    font-size: 16px;\n  }\n\n  p {\n    color: ", ";\n    font-size: 14px;\n    margin: 0px;\n  }\n\n\n  ", "\n"])), function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.headingColor;
}, function (props) {
  var _props$theme$colors5;
  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.headingColor;
}, function (_ref4) {
  var isDisabled = _ref4.isDisabled;
  return isDisabled && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
exports.OrderStatus = OrderStatus;
var OrderStatusSelectorWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  min-width: 50%;\n  > div {\n    > div:first-child {\n      border-color: ", ";\n      border-radius: 8px;\n      background-color: ", ";\n      > div:first-child {\n        padding-top: 5px;\n        padding-bottom: 5px;\n        > div:first-child {\n          > div {\n            border: none !important;\n            p {\n              color: ", " !important;\n              padding: 0 !important;\n            }\n          }\n        }\n      }\n    }\n\n    .list-wrapper {\n      > div {\n        padding: 0 10px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors6;
  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.secundary;
}, function (props) {
  var _props$theme$colors7;
  return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.secundary;
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.OrderStatusSelectorWrapper = OrderStatusSelectorWrapper;
var StatusBarContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n"])));
exports.StatusBarContainer = StatusBarContainer;
var StatusBarStyled = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  height: 10px;\n  border-radius: 10px;\n  background: ", ";\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.borderColor, " ").concat(props.percentage, "%)");
});
var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
exports.StatusBar = StatusBar;
var AdvancedLogistic = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n\n  > div {\n    p {\n      color: ", ";\n      margin: 0px;\n\n      &:first-child {\n        font-weight: 500;\n        font-size: 14px;\n      }\n      &:not(:first-child) {\n        font-size: 12px;\n        color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors8;
  return (_props$theme$colors8 = props.theme.colors) === null || _props$theme$colors8 === void 0 ? void 0 : _props$theme$colors8.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
});
exports.AdvancedLogistic = AdvancedLogistic;
var OrderProducts = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  padding: 10px 0 10px 0;\n  border-bottom: 1px solid #E9ECEF;\n  h2 {\n    color: ", ";\n    font-size: 18px;\n  }\n"])), function (props) {
  var _props$theme$colors9;
  return (_props$theme$colors9 = props.theme.colors) === null || _props$theme$colors9 === void 0 ? void 0 : _props$theme$colors9.headingColor;
});
exports.OrderProducts = OrderProducts;
var CloseButtonWrapper = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: fit-content;\n  cursor: pointer;\n  z-index: 100;\n  position: absolute;\n  top: 30px;\n  ", "\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    right: 20px;\n  "])));
});
exports.CloseButtonWrapper = CloseButtonWrapper;
var PlaceSpotContainer = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0;\n\n  p {\n    color: ", ";\n    font-size: 14px;\n    margin: 0px;\n  }\n"])), function (props) {
  var _props$theme$colors10;
  return (_props$theme$colors10 = props.theme.colors) === null || _props$theme$colors10 === void 0 ? void 0 : _props$theme$colors10.headingColor;
});
exports.PlaceSpotContainer = PlaceSpotContainer;
var RejectReasonsContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  > p {\n    font-size: 14px;\n    line-height: 21px;\n    font-weight: 500;\n    margin: 0;\n  }\n"])));
exports.RejectReasonsContainer = RejectReasonsContainer;
var RejectReasonsList = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100% + 10px);\n  margin-left: -5px;\n  margin-top: 10px;\n"])));
exports.RejectReasonsList = RejectReasonsList;
var RejectReasonWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  padding: 4px 10px;\n  border-radius: 50px;\n  font-size: 12px;\n  line-height: 18px;\n  margin: 5px;\n  width: fit-content;\n  background-color: ", ";\n  color: ", ";\n"])), function (props) {
  return (0, _polished.lighten)(0.4, props.theme.colors.danger);
}, function (props) {
  return props.theme.colors.danger;
});
exports.RejectReasonWrapper = RejectReasonWrapper;