"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperImage = exports.ViewDetails = exports.UnreadMessageCounter = exports.Timestatus = exports.Timer = exports.OrdersListContainer = exports.OrderNunberContainer = exports.OrderHeader = exports.OrderCard = exports.InfoItemContainer = exports.CardHeading = exports.CardContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrdersListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: calc(100% - 200px);\n  padding: 0 12px 15px 12px;\n  box-sizing: border-box;\n  overflow-x: hidden;\n\n  @media (min-width: 1024px) and (max-width: 1300px) {\n    height: calc(100% - 230px);\n  }\n"])));
exports.OrdersListContainer = OrdersListContainer;
var OrderNunberContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));
exports.OrderNunberContainer = OrderNunberContainer;
var OrderCard = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 1px solid ", ";\n  margin-bottom: 20px;\n  padding: 15px 20px;\n  padding-left: 25px;\n\n  ", "\n \n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  p,\n  h2 {\n    color: ", ";\n    margin: 0px;\n  }\n  \n  h2 {\n    font-size: 16px;\n    font-weight: 600;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.secundary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    padding-left: 0px;\n    padding-right: 25px;\n "])));
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightPrimary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.OrderCard = OrderCard;
var CardHeading = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 94%;\n"])));
exports.CardHeading = CardHeading;
var OrderHeader = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    margin: 5px 0 10px;\n    > p {\n      font-size: 12px;\n    }\n  }\n\n  > p {\n    font-size: 14px;\n    margin-top: 5px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.colorPage;
});
exports.OrderHeader = OrderHeader;
var Timer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-items: right;\n  p {\n    font-size: 10px;\n    line-height: 15px;\n  }\n\n  .bold {\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 18px;\n  }\n\n  .in_time{\n    color: #00D27A;\n  }\n\n  .at_risk {\n    color: #FFC700;\n  }\n  \n  .delayed {\n    color: #E63757;\n  }\n"])));
exports.Timer = Timer;
var ViewDetails = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 12px;\n  margin: 0 10px;\n  &:hover {\n    text-decoration: underline;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.ViewDetails = ViewDetails;
var InfoItemContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  margin: 5px 0;\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 125px;\n\n  }\n  display: flex;\n  align-items: center;\n\n  div.info {\n    ", "\n    p {\n      margin: 0px;\n      color: ", ";\n      font-size: 12px;\n    }\n    p.bold {\n      font-size: 14px;\n      font-weight: 500;\n    }\n  }\n  @media (min-width: 1300px) {\n    width: 50%;\n    margin: 0;\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});
exports.InfoItemContainer = InfoItemContainer;
var WrapperImage = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  ", "\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 7.6px;\n    object-fit: cover;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])), function (_ref2) {
  var isSkeleton = _ref2.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n    border-radius: 10px;\n  "])));
});
exports.WrapperImage = WrapperImage;
var CardContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1300px) {\n    flex-direction: row;\n  }\n"])));
exports.CardContent = CardContent;
var WrapperPagination = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  margin: 10px 15px 0 15px;\n"])));
exports.WrapperPagination = WrapperPagination;
var UnreadMessageCounter = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 12px;\n  ", "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 8px;\n  font-size: 12px;\n  height: 24px;\n  color: ", ";\n  padding: 0 10px;\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    right: 20px;\n  "])));
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.UnreadMessageCounter = UnreadMessageCounter;
var Timestatus = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 4px;\n  height: 130px;\n  border-radius: 20px;\n  left: 10px;\n  top: 17px;\n  ", "\n ", "\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    left: unset;\n    right: 10px;\n "])));
}, function (_ref3) {
  var timeState = _ref3.timeState;
  return timeState === 'in_time' && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    background-color: #00D27A;\n  "])));
}, function (_ref4) {
  var timeState = _ref4.timeState;
  return timeState === 'at_risk' && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    background-color: #FFC700;\n  "])));
}, function (_ref5) {
  var timeState = _ref5.timeState;
  return timeState === 'delayed' && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    background-color: #E63757;\n  "])));
});
exports.Timestatus = Timestatus;