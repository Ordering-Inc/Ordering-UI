"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperIndicator = exports.WrapperDriversLocation = exports.WrapItemView = exports.TopContent = exports.OrdersListContainer = exports.OrdersInnerContent = exports.OrdersContent = exports.OrdersContainer = exports.OrderSubFilterControls = exports.OrderStatusSubFilterWrapper = exports.MainContentContainer = exports.HeaderTitleContainer = exports.DriversContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrdersListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: auto;\n  height: calc(var(--vh,1vh) * 100);\n  ", "\n  @media print {\n    display: none;\n  }\n"])), function (_ref) {
  var isSelectedOrders = _ref.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-top: 0px;\n    padding: 20px 0 0 0;\n  "])));
});
exports.OrdersListContainer = OrdersListContainer;
var OrdersContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n"])));
exports.OrdersContent = OrdersContent;
var OrdersInnerContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n"])));
exports.OrdersInnerContent = OrdersInnerContent;
var WrapperIndicator = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 100px;\n  height: 50px;\n  border-radius: 5px;\n  background: #151824;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 500;\n  font-size: 24px;\n"])));
exports.WrapperIndicator = WrapperIndicator;
var WrapItemView = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapItemView = WrapItemView;
var OrderSubFilterControls = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  ", "\n"])), function (_ref2) {
  var isColumn = _ref2.isColumn;
  return isColumn ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    flex-direction: column;\n    > div:last-child {\n      margin-top: 0;\n      margin-bottom: 10px;\n      > div {\n        justify-content: space-between;\n        width: 100%;\n      }\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    flex-direction: row;\n    justify-content: space-between;\n  "])));
});
exports.OrderSubFilterControls = OrderSubFilterControls;
var OrderStatusSubFilterWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: inline-block;\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n  "])));
}, function (_ref3) {
  var isColumn = _ref3.isColumn;
  return isColumn ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    width: 100%;\n  "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    width: 50%;\n  "])));
});
exports.OrderStatusSubFilterWrapper = OrderStatusSubFilterWrapper;
var HeaderTitleContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  h1 {\n    color: ", ";\n    font-size: 20px;\n    font-weight: 700;\n    line-height: 30px;\n    margin: 0px;\n    text-transform: capitalize;\n  }\n  > button {\n    ", "\n    svg {\n      width: 25px;\n      height: 25px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      margin-left: 8px;\n      margin-right: -8px;\n    "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-right: 8px;\n      margin-left: -8px;\n    "])));
});
exports.HeaderTitleContainer = HeaderTitleContainer;
var MainContentContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-top: 15px;\n"])));
exports.MainContentContainer = MainContentContainer;
var TopContent = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  margin-bottom: 20px;\n  border-bottom: 5px solid ", ";\n  @media (min-width: 992px) {\n    flex-direction: row;\n    #orderTable {\n      max-height: calc(var(--vh, 1vh) * 100 - 475px);\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.TopContent = TopContent;
var WrapperDriversLocation = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  overflow: hidden;\n  height: 700px;\n"])));
exports.WrapperDriversLocation = WrapperDriversLocation;
var DriversContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  @media (min-width: 992px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      border-left: 5px solid ", ";\n      padding-left: 8px;\n    "])), function (props) {
    return props.theme.colors.borderColor;
  }) : (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      border-right: 5px solid ", ";\n      padding-right: 8px;\n    "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
exports.DriversContainer = DriversContainer;
var OrdersContainer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  ", "\n  @media (min-width: 992px) {\n    width: calc(100% - 355px);\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    padding-right: 8px;\n  "]))) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    padding-left: 8px;\n  "])));
});
exports.OrdersContainer = OrdersContainer;