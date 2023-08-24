"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSendMessageButton = exports.WrapperSendInput = exports.WrapperLogistics = exports.WrapperLogisticInformation = exports.WrapperHitoryHeader = exports.WrapperHeader = exports.WrapperDeleteImage = exports.WrapperContainer = exports.TimeofSent = exports.TabItem = exports.Status = exports.SkeletonHitory = exports.SkeletonBubbleCustomer = exports.SkeletonBubbleBusiness = exports.SendToContainer = exports.SendImage = exports.SendForm = exports.Send = exports.SearchAndDetailControlContainer = exports.QuickMessageWrapper = exports.PartnerName = exports.OrderNumber = exports.OrderDetailIconButton = exports.NotSendMessage = exports.MyName = exports.MessagesSearch = exports.MessagesContainer = exports.MessageSender = exports.MessageCustomer = exports.MessageConsole = exports.MessageBusiness = exports.InfoBlock = exports.ImageContainer = exports.HeaderProfile = exports.HeaderName = exports.HeaderInfo = exports.ChatImage = exports.ChatHeader = exports.ChatContactInfoContainer = exports.Chat = exports.BubbleCustomer = exports.BubbleConsole = exports.BubbleBusines = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"])));
exports.MessagesContainer = MessagesContainer;
var WrapperContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  box-sizing: border-box;\n"])));
exports.WrapperContainer = WrapperContainer;
var NotSendMessage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  color: #909BA9;\n  background: #F8F9FA;\n\n  svg {\n    font-size: 20px;\n  }\n\n  p {\n    font-size: 14px;\n    color: #909BA9;\n    margin: 6px 0;\n  }\n"])));
exports.NotSendMessage = NotSendMessage;
var HeaderProfile = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 20px 0px;\n\n  div {\n     p {\n       margin-left: 10px;\n       ", "\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n\n  @media (max-width: 576px) {\n    padding: 10px 0;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n         margin-right: 10px;\n         margin-left: 0px;\n      "])));
});
exports.HeaderProfile = HeaderProfile;
var WrapperHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 91%;\n  max-width: 1200px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 576px) {\n    justify-content: center;\n    width: 90%;\n  }\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var messageDashboardView = _ref.messageDashboardView;
  return messageDashboardView && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: 92%;\n    border-bottom: 1px solid #D8D8D8;\n    padding-bottom: 5px;\n    flex-wrap: wrap;\n    row-gap: 10px;\n  "])));
}, function (_ref2) {
  var historyView = _ref2.historyView;
  return historyView && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    width: 92%;\n  "])));
});
exports.WrapperHeader = WrapperHeader;
var HeaderName = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"])));
exports.HeaderName = HeaderName;
var Status = _styledComponents.default.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"])));
exports.Status = Status;
var ImageContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  overflow: auto;\n  display: flex;\n  align-items: center;\n  padding-bottom: 20px;\n  flex-wrap: wrap;\n\n  > * {\n    ", "\n\n    &:last-child {\n      ", "\n    }\n  }\n\n  img {\n    width: 40px;\n    height: 40px;\n    border-radius: 8px;\n    object-fit: cover;\n    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);\n  }\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 8px;\n    padding: 6px;\n    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);\n  }\n  ", "\n\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n      "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n      "])));
}, function (_ref3) {
  var isCircle = _ref3.isCircle;
  return isCircle && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    img, svg {\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n    }\n    svg {\n      padding: 3px;\n    }\n\n    ", "\n  "])), function (_ref4) {
    var isReceived = _ref4.isReceived;
    return !isReceived && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      justify-content: flex-end;\n    "])));
  });
});
exports.ImageContainer = ImageContainer;
var OrderNumber = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n  font-weight: 600;\n"])), function (props) {
  return props.theme.colors.headingColor;
});
exports.OrderNumber = OrderNumber;
var Chat = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-direction: column;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (min-width: 768px){\n  }\n"])));
exports.Chat = Chat;
var MessageConsole = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  margin-bottom: 20px;\n"])));
exports.MessageConsole = MessageConsole;
var MessageBusiness = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  font-size: 0.8em;\n  width: 91%;\n  margin: 0 auto;\n  margin-bottom: 20px;\n"])));
exports.MessageBusiness = MessageBusiness;
var MessageCustomer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  font-size: 0.8em;\n  width: 91%;\n  margin: 0 auto;\n  margin-bottom: 20px;\n"])));
exports.MessageCustomer = MessageCustomer;
var BubbleConsole = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 10px 25px 10px 25px;\n  margin-bottom: 8px;\n  background: ", ";\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  max-width: 80%;\n\n  @media (min-width: 1024px){\n    max-width: 80%;\n  }\n"])), function (props) {
  return props.theme.colors.secundary;
});
exports.BubbleConsole = BubbleConsole;
var BubbleBusines = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  ", "\n  padding: 10px 25px 10px 25px;\n  max-width: 80%;\n  min-width: 80px;\n  margin-bottom: 8px;\n  background: ", ";\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    width: 100%;\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    border-bottom-right-radius: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    border-bottom-left-radius: 0;\n  "])));
}, function (props) {
  return props.theme.colors.secundary;
});
exports.BubbleBusines = BubbleBusines;
var BubbleCustomer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  border-radius: 8px;\n  ", "\n  padding: 10px 25px 10px 25px;\n  max-width: 80%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: ", ";\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    width: 100%;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n    border-bottom-left-radius: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    border-bottom-right-radius: 0;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    border-radius: 40px 40px 40px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n  "])));
});
exports.BubbleCustomer = BubbleCustomer;
var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 5px;\n  }\n"])));
exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;
var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 5px;\n  }\n"])));
exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;
var ChatImage = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  img{\n    width: 100%;\n    height: auto;\n    vertical-align: middle;\n    object-fit: contain;\n  }\n"])));
exports.ChatImage = ChatImage;
var PartnerName = _styledComponents.default.p(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"])));
exports.PartnerName = PartnerName;
var MyName = _styledComponents.default.p(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n      text-align: left;\n  "])));
});
exports.MyName = MyName;
var TimeofSent = _styledComponents.default.p(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  position: relative;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n  width: fit-content;\n  cursor: pointer;\n  font-weight: 600;\n\n  ", "\n"])), function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    margin-right: auto;\n  "]))) : (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    margin-left: auto;\n  "])));
});
exports.TimeofSent = TimeofSent;
var SendForm = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid ", ";\n  padding: 13px;\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.SendForm = SendForm;
var Send = _styledComponents.default.form(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 8px;\n  height: auto;\n  max-width: 1200px;\n  justify-content: space-between;\n  width: 100%;\n  input {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100%;\n    flex: 1;\n  }\n"])));
exports.Send = Send;
var WrapperSendInput = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  flex: 1;\n  position: relative;\n  box-sizing: border-box;\n  ", "\n\n  > input {\n    border: 1px solid ", ";\n    padding-right: 45px;\n    -webkit-appearance: none;\n    ", "\n  }\n"])), function (props) {
  var _props$theme9;
  return (_props$theme9 = props.theme) !== null && _props$theme9 !== void 0 && _props$theme9.rtl ? (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n      padding-left: 45px;\n      padding-right: 15px;\n    "])));
});
exports.WrapperSendInput = WrapperSendInput;
var SendImage = _styledComponents.default.label(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  \n  position: absolute;\n  top: 10px;\n  right: 10px;\n\n  input {\n    display: none;\n  }\n\n  svg {\n    color: #B1BCCC;\n    font-size: 20px;\n    cursor: pointer;\n  }\n"])));
exports.SendImage = SendImage;
var WrapperDeleteImage = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n\n  img {\n    width: 30px;\n    height: 30px;\n    &:disabled {\n    cursor: not-allowed;\n    }\n    border-radius: 8px;\n  }\n\n  svg {\n    color: black;\n  }\n\n  button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    background: ", ";\n    width: 20px;\n    height: 20px;\n    transform: translate(100%, -50%);\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.WrapperDeleteImage = WrapperDeleteImage;
var WrapperSendMessageButton = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  width: 80px;\n\n  button {\n    height: 43px;\n    width: 100%;\n    svg {\n       width: 1.5em;\n       height: 1.5em; \n       vertical-align: middle;\n       color: white;\n       ", "\n    }\n\n    span {\n      display: none;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 480px) {\n    width: fit-content;\n    button {\n      svg {\n        margin-right: 10px;\n      }\n      span {\n        display: inline;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme10;
  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n        transform: rotate(270deg);\n      "])));
});
exports.WrapperSendMessageButton = WrapperSendMessageButton;
var WrapperHitoryHeader = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n"])));
exports.WrapperHitoryHeader = WrapperHitoryHeader;
var TabItem = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  padding: 5px 10px;\n  cursor: pointer;\n  text-align: center;\n  color: #909BA9;\n  \n  ", "\n\n  @media (max-width: 576px) {\n    padding: 5px 10px;\n    font-size: 14px;\n  }\n"])), function (_ref5) {
  var active = _ref5.active;
  return active && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n    border-bottom: 1px solid ", ";\n    color: ", ";\n    font-weight: 600;\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
  }, function (props) {
    var _props$theme$colors3;
    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
  });
});
exports.TabItem = TabItem;
var SkeletonHitory = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  column-gap: 20px;\n\n  @media (max-width: 576px) {\n    span {\n      width: 250px !important;\n    }\n  }\n"])));
exports.SkeletonHitory = SkeletonHitory;
var WrapperLogistics = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral([""])));
exports.WrapperLogistics = WrapperLogistics;
var WrapperLogisticInformation = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral([""])));
exports.WrapperLogisticInformation = WrapperLogisticInformation;
var HeaderInfo = _styledComponents.default.div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: space-between;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
exports.HeaderInfo = HeaderInfo;
var ChatHeader = _styledComponents.default.div(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding-bottom: 15px;\n"])));
exports.ChatHeader = ChatHeader;
var SearchAndDetailControlContainer = _styledComponents.default.div(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n"])));
exports.SearchAndDetailControlContainer = SearchAndDetailControlContainer;
var MessagesSearch = _styledComponents.default.div(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    position: absolute;\n    top: 13px;\n    left: 14px;\n  }\n\n  input {\n    width: 200px;\n    border: 1px solid #1C202E;\n    border-radius: 22px;\n    outline: none;\n    padding: 8px;\n    padding-left: 40px;\n    font-size: 15px;\n    background: transparent;\n\n    &::placeholder {\n      color: #182964;\n    }\n  }\n"])));
exports.MessagesSearch = MessagesSearch;
var OrderDetailIconButton = _styledComponents.default.button(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  background: #b9bcc7;\n  &:active {\n    background: '#b9bcc7';\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px;\n\n  svg {\n    font-size: 30px;\n  }\n"])));
exports.OrderDetailIconButton = OrderDetailIconButton;
var ChatContactInfoContainer = _styledComponents.default.div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-bottom: 10px;\n\n  ", "\n"])), function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n    opacity: 0.2;\n  "])));
});
exports.ChatContactInfoContainer = ChatContactInfoContainer;
var InfoBlock = _styledComponents.default.div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  ", "\n  > p {\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 190px;\n\n    &:first-child {\n      color: ", ";\n      font-size: 14px;\n      font-weight: 500;\n      white-space: nowrap;\n    }\n    &:last-child {\n      color: ", ";\n      font-size: 12px;\n    }\n  }\n"])), function (props) {
  var _props$theme11;
  return (_props$theme11 = props.theme) !== null && _props$theme11 !== void 0 && _props$theme11.rtl ? (0, _styledComponents.css)(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.lightGray;
});
exports.InfoBlock = InfoBlock;
var SendToContainer = _styledComponents.default.div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  p {\n    color: ", ";\n    margin-bottom: 2px;\n    text-align: end;\n    font-size: 12px;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (_ref7) {
  var isReceived = _ref7.isReceived;
  return isReceived && (0, _styledComponents.css)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n    text-align: initial;\n  "])));
});
exports.SendToContainer = SendToContainer;
var MessageSender = _styledComponents.default.p(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  margin-bottom: 5px;\n  text-align: center;\n"])));
exports.MessageSender = MessageSender;
var QuickMessageWrapper = _styledComponents.default.div(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  button {\n    margin-bottom: 6px;\n    margin-right: 12px;\n    line-height: 22px;\n    font-size: 12px;\n    padding: 0 10px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 12px;\n    "])));
});
exports.QuickMessageWrapper = QuickMessageWrapper;