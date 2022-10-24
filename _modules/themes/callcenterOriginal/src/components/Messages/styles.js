"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.TimeofSentByAdmin = exports.TimeofSent = exports.Status = exports.SkeletonBubbleCustomer = exports.SkeletonBubbleBusiness = exports.SendImage = exports.SendForm = exports.Send = exports.QuickMessageWrapper = exports.ProfileMessageHeader = exports.PartnerName = exports.OrderData = exports.NotSendMessage = exports.MyName = exports.ModalIcon = exports.MessagesTypes = exports.MessagesTitle = exports.MessagesRightLayout = exports.MessagesLeftLayout = exports.MessagesLayoutWrapper = exports.MessagesContainer = exports.MessagesClose = exports.MessageType = exports.MessageCustomer = exports.MessageCreatedDate = exports.MessageContentWrapper = exports.MessageConsole = exports.MessageBusiness = exports.InputWrapper = exports.ImageContainer = exports.Image = exports.HeaderProfile = exports.HeaderOnline = exports.HeaderName = exports.CustomerList = exports.ChatImage = exports.Chat = exports.BubbleCustomer = exports.BubbleConsole = exports.BubbleBusines = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  padding: 0 15px;\n\n  @media (min-width: 769px) {\n    padding: 0 40px;\n  }\n\n  ", ";\n"])), function (_ref) {
  var profileMessages = _ref.profileMessages;
  return profileMessages && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 0 !important;\n  "])));
});

exports.MessagesContainer = MessagesContainer;

var HeaderProfile = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 15px 20px;\n  border-bottom: 1px solid #EEEEEE;\n  height: 70px;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n\n  div {\n     p {\n       margin-left: 10px;\n       ", "\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n"])), function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    var _props$theme;

    return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.grayDividerColor;
  });
}, function (_ref3) {
  var isCursor = _ref3.isCursor;
  return isCursor && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "])));
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n         margin-right: 10px;\n         margin-left: 0px;\n      "])));
});

exports.HeaderProfile = HeaderProfile;

var HeaderName = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"])));

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"])));

exports.Status = Status;

var Image = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 7.6px;\n  padding: 5px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 50%;\n    object-fit: cover;\n    border: 1px solid #F5F5F5;\n  }\n\n  img[name]{\n    border: 1px solid #D81212;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 36px;\n    height: 36px;\n  }\n"])));

exports.Image = Image;

var HeaderOnline = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 36px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  margin-left: 10px;\n\n  ", "\n  h1,\n  span {\n    margin: 0px;\n  }\n\n  h1 {\n    font-weight: 600;\n    font-size: 14px;\n  }\n\n  span {\n    font-size: 10px;\n    font-weight: 300;\n  }\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n    text-align: right;\n  "])));
});

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100vh - 490px);\n  min-height: 400px;\n  flex-direction: column;\n  padding: 0 20px;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (min-width: 769px){\n    height: calc(60vh - 90px);\n    ", ";\n  }\n"])), function (_ref4) {
  var profileMessages = _ref4.profileMessages;
  return profileMessages && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      height: calc(100vh - 266px);\n    "])));
});

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  border-radius: 60px;\n"])));

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"])));

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"])));

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 5px 15px;\n  max-width: 40%;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  @media (min-width: 1024px){\n    max-width: 30%\n  }\n"])));

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  border-radius: 7.6px 7.6px 7.6px 0px;\n  padding: 10px 25px 10px 25px;\n  max-width: 60%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    border-radius: 7.6px 7.6px 7.6px 0px;\n    width: 100%;\n  }\n\n  ", "\n\n  @media (min-width: 480px) {\n    border-radius: 7.6px 7.6px 7.6px 0px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%;\n  }\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      border-radius: 7.6px 7.6px 0px 7.6px;\n  "])));
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      border-radius: 7.6px 7.6px 0px 7.6px;\n      &[name=image]{\n        border-radius: 7.6px 7.6px 0px 7.6px;\n       }\n    "])));
});

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  border-radius: 7.6px 7.6px 0px 7.6px;\n  padding: 10px 25px 10px 25px;\n  max-width: 60%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: ", ";\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    border-radius: 7.6px 7.6px 0px 7.6px;\n    width: 100%;\n  }\n\n  ", "\n  \n  @media (min-width: 480px){\n    border-radius: 7.6px 7.6px 0px 7.6px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%\n  }\n\n"])), function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.primary;
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    border-radius: 7.6px 7.6px 7.6px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n\n    &[name=image]{\n      border-radius: 7.6px 7.6px 7.6px 0px;\n     }\n  "])));
}, function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      border-radius: 7.6px 7.6px 7.6px 0px;\n    "])));
});

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 7.6px 7.6px 0px 7.6px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    border-radius: 7.6px 7.6px 7.6px 0px;\n    "])));
});

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 7.6px 7.6px 7.6px 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme10;

  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    border-radius: 7.6px 7.6px 0px 7.6px;\n    "])));
});

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  img{\n    width: 100%;\n    height: auto;\n    max-height: 300px;\n    aspect-ratio: attr(width) / attr(height);\n    vertical-align: middle;\n    object-fit: contain;\n    cursor: pointer;\n  }\n"])));

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"])));

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"])), function (props) {
  var _props$theme11;

  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      text-align: left;\n  "])));
});

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"])), function (props) {
  var _props$theme12;

  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    text-align: left;\n  "])));
});

exports.TimeofSent = TimeofSent;

var TimeofSentByAdmin = _styledComponents.default.p(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    position: relative;\n  text-align: left;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"])), function (props) {
  var _props$theme13;

  return ((_props$theme13 = props.theme) === null || _props$theme13 === void 0 ? void 0 : _props$theme13.rtl) && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
});

exports.TimeofSentByAdmin = TimeofSentByAdmin;

var SendForm = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  bottom: 0;\n  width: 100%;\n  box-sizing: border-box;\n  border-top: 1px solid #DEE2E6;\n\n  @media (min-width: 480px){\n    padding: 5px 20px;\n  }\n\n  @media (min-width: 769px) {\n    padding: 10px 20px;\n    position: sticky;\n    width: auto;\n    background-color: #F8F8F8 ;\n  }\n"])));

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n  width: 100%;\n  input {\n    padding-top: 13px;\n    padding-bottom: 13px;\n    width: 100%;\n    background: #F8F9FA;\n    border-radius: 7.6px;\n    border: none;\n    font-size: 12px;\n    box-sizing: border-box;\n    ", "\n  }\n"])), function (props) {
  var _props$theme14;

  return (_props$theme14 = props.theme) !== null && _props$theme14 !== void 0 && _props$theme14.rtl ? (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n      padding-left: 30px;\n      padding-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n      padding-left: 15px;\n      padding-right: 30px;\n    "])));
});

exports.Send = Send;

var SendImage = _styledComponents.default.label(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  width: 15px;\n  height: 15px;\n  position: ", ";\n  opacity: ", ";\n  right: 16px;\n  top: 11px;\n\n  ", "\n\n  input {\n    display: none;\n  }\n\n\n\n  svg {\n    color: #CFD0D0;\n    width: 15px;\n    height: 15px;\n    cursor: pointer\n  }\n"])), function (props) {
  return props.hidden ? 'fixed' : 'absolute';
}, function (props) {
  return props.hidden && '0';
}, function (props) {
  var _props$theme15;

  return ((_props$theme15 = props.theme) === null || _props$theme15 === void 0 ? void 0 : _props$theme15.rtl) && (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n    left: 16px;\n    right: initial;\n  "])));
});

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 9px;\n  ", "\n  > div {\n    position: relative;\n\n    img{\n      width: 25px;\n      height: 25px;\n      &:disabled {\n      cursor: not-allowed;\n      }\n      border-radius: 8px;\n    }\n\n    svg{\n      margin-bottom: 5px;\n      color: black;\n    }\n\n    button{\n      position: absolute;\n      background: white;\n      width: 18px;\n      height: 18px;\n      transform: translate(100%, -50%);\n    }\n  }\n\n"])), function (props) {
  var _props$theme16;

  return (_props$theme16 = props.theme) !== null && _props$theme16 !== void 0 && _props$theme16.rtl ? (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    left: 12px;\n  "]))) : (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n    right: 12px;\n  "])));
});

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  margin-left: 20px;\n  ", "\n\n  button{\n    padding-top: 6px;\n    padding-bottom: 6px;\n      svg {\n        display: inline;\n        width: 20px;\n        height: 20px; \n        vertical-align: middle;\n        color: white;\n        ", "\n    }\n\n    span {\n      display: none;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 480px){\n    button{\n      svg {\n        display: none;\n      }\n      span {\n        display: inline;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme17;

  return ((_props$theme17 = props.theme) === null || _props$theme17 === void 0 ? void 0 : _props$theme17.rtl) && (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n    margin-right: 20px;\n    margin-left: 0;\n  "])));
}, function (props) {
  var _props$theme18;

  return ((_props$theme18 = props.theme) === null || _props$theme18 === void 0 ? void 0 : _props$theme18.rtl) && (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n        transform: rotate(270deg);\n      "])));
});

exports.WrapperSendMessageButton = WrapperSendMessageButton;

var ImageContainer = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral([" \n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));

exports.ImageContainer = ImageContainer;

var ModalIcon = _styledComponents.default.span(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n  border-radius: 50%;\n  right: 5px;\n  top: 5px;\n  z-index: 1;\n  background: rgba(0,0,0,0.3);\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 769px){\n    right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme19;

  return ((_props$theme19 = props.theme) === null || _props$theme19 === void 0 ? void 0 : _props$theme19.rtl) && (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme20;

  return ((_props$theme20 = props.theme) === null || _props$theme20 === void 0 ? void 0 : _props$theme20.rtl) && (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme21;

  return ((_props$theme21 = props.theme) === null || _props$theme21 === void 0 ? void 0 : _props$theme21.rtl) && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;

var MessagesLayoutWrapper = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  display: flex;\n  border-left: 1px solid #DEE2E6;\n  border-right: 1px solid #DEE2E6;\n  position: relative;\n  flex-direction: column;\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])));

exports.MessagesLayoutWrapper = MessagesLayoutWrapper;

var MessagesLeftLayout = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-right: 1px solid #DEE2E6;\n  min-width: 250px;\n\n  ", "\n\n  @media (min-width: 769px) {\n    width: 30%;\n  }\n"])), function (props) {
  var _props$theme22;

  return ((_props$theme22 = props.theme) === null || _props$theme22 === void 0 ? void 0 : _props$theme22.rtl) && (0, _styledComponents.css)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n    border-left: 1px solid #DEE2E6;\n    border-right: none;\n  "])));
});

exports.MessagesLeftLayout = MessagesLeftLayout;

var MessagesRightLayout = _styledComponents.default.div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  width: 100%;\n  border-top: 1px solid #DEE2E6;\n  margin-top: 30px;\n  ", "\n\n  @media (min-width: 769px) {\n    width: 70%;\n    border: none;\n    margin-top: 0;\n    ", "\n  }\n"])), function (_ref5) {
  var profileMessages = _ref5.profileMessages;
  return profileMessages && (0, _styledComponents.css)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n    margin-top: 0px;\n  "])));
}, function (_ref6) {
  var profileMessages = _ref6.profileMessages;
  return profileMessages && (0, _styledComponents.css)(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n      width: 100%;\n    "])));
});

exports.MessagesRightLayout = MessagesRightLayout;

var MessagesTitle = _styledComponents.default.div(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #DEE2E6;\n  padding: 15px 20px;\n  height: 70px;\n  box-sizing: border-box;\n\n  h1 {\n    font-weight: 600;\n    font-size: 20px;\n    color: ", ";\n    margin: 0;\n  }\n"])), function (props) {
  var _props$theme23;

  return (_props$theme23 = props.theme) === null || _props$theme23 === void 0 ? void 0 : _props$theme23.colors.headingColor;
});

exports.MessagesTitle = MessagesTitle;

var CustomerList = _styledComponents.default.div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  > div {\n    border: none;\n  }\n"])));

exports.CustomerList = CustomerList;

var MessagesClose = _styledComponents.default.div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  ", "\n  cursor: pointer;\n\n  svg {\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme24;

  return ((_props$theme24 = props.theme) === null || _props$theme24 === void 0 ? void 0 : _props$theme24.rtl) && (0, _styledComponents.css)(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
});

exports.MessagesClose = MessagesClose;

var InputWrapper = _styledComponents.default.div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  width: 60%;\n  flex: 1;\n  position: relative;\n"])));

exports.InputWrapper = InputWrapper;

var MessageContentWrapper = _styledComponents.default.div(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral([""])));

exports.MessageContentWrapper = MessageContentWrapper;

var MessageCreatedDate = _styledComponents.default.div(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n\n  span {\n    font-size: 12px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme25;

  return (_props$theme25 = props.theme) === null || _props$theme25 === void 0 ? void 0 : _props$theme25.colors.darkGray;
});

exports.MessageCreatedDate = MessageCreatedDate;
var NotSendMessage = (0, _styledComponents.default)(SendForm)(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  color: #909BA9;\n  background: #F8F9FA;\n\n  svg {\n    font-size: 20px;\n  }\n\n  p {\n    font-size: 14px;\n    color: #909BA9;\n    margin: 6px 0;\n  }\n"])));
exports.NotSendMessage = NotSendMessage;

var QuickMessageWrapper = _styledComponents.default.div(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n\n  button {\n    margin-bottom: 5px;\n    border-radius: 50px;\n    color: #414954;\n    background: #E9ECEF;\n    border: none;\n    margin-right: 12px;\n    font-size: 12px;\n    line-height: 25px;\n    padding: 0px 12px;\n    ", "\n\n    &:active {\n      background: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 12px;\n    "])));
}, function () {
  return (0, _polished.darken)(0.05, '#E9ECEF');
});

exports.QuickMessageWrapper = QuickMessageWrapper;

var ProfileMessageHeader = _styledComponents.default.div(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  border-bottom: 1px solid #EEEEEE;\n  height: 62px;\n  box-sizing: border-box;\n"])));

exports.ProfileMessageHeader = ProfileMessageHeader;

var MessagesTypes = _styledComponents.default.div(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.MessagesTypes = MessagesTypes;

var OrderData = _styledComponents.default.div(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  h2 {\n    margin: 0;\n    font-size: 14px;\n  }\n\n  p {\n    margin: 0;\n    font-size: 12px;\n    color: #344050;\n  }\n"])));

exports.OrderData = OrderData;

var MessageType = _styledComponents.default.div(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: pointer;\n  >div {\n    margin-right: 5px;\n    box-shadow: none;\n  }\n\n  ", "\n"])), function (_ref7) {
  var active = _ref7.active;
  return active && (0, _styledComponents.css)(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n    >div {\n      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n    }\n  "])));
});

exports.MessageType = MessageType;