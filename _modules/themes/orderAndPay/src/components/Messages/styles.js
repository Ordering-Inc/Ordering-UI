"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.TimeofSent = exports.Status = exports.SkeletonBubbleCustomer = exports.SkeletonBubbleBusiness = exports.SendImage = exports.SendForm = exports.Send = exports.PartnerName = exports.MyName = exports.ModalIconHeader = exports.ModalIcon = exports.MessagesContainer = exports.MessageCustomer = exports.MessageConsole = exports.MessageBusiness = exports.ImageContainer = exports.HeaderOnline = exports.HeaderName = exports.ChatImage = exports.Chat = exports.BubbleCustomer = exports.BubbleConsole = exports.BubbleBusines = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 0px 40px;\n"])));

exports.MessagesContainer = MessagesContainer;

var HeaderName = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"])));

exports.Status = Status;

var HeaderOnline = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  line-height: 1.5;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  margin-left: 15px;\n\n  ", "\n  h1,\n  span {\n    margin: 0px;\n  }\n\n  h1 {\n    font-size: 14px;\n    font-weight: 600;\n  }\n\n  span {\n    font-size: 12px;\n    font-weight: 400;\n    color: #909BA9;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n    margin-left: 0px;\n    text-align: right;\n  "])));
});

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-direction: column;\n  height: 68vh;\n  padding: 0 20px;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (min-height: 580px){\n    height: 73vh;\n  }\n  @media (min-width: 768px){\n    height: calc(60vh - 60px);\n  }\n"])));

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 12px;\n  border-radius: 7.6px;\n  font-weight: 400;\n  strong{\n    font-weight: 600;\n  }\n"])));

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 12px;\n  font-weight: 400;\n"])));

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 12px;\n  font-weight: 400;\n"])));

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  padding: 5px 15px;\n  max-width: 90%;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  font-size: 12px;\n  @media (min-width: 1024px){\n    max-width: 30%\n  }\n"])));

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  border-radius: 7.6px 7.6px 7.6px 0px;\n  padding: 10px 25px 10px 25px;\n  max-width: 80%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  font-size: 12px;\n  &[name=image]{\n    border-radius: 7.6px 7.6px 7.6px 0px;\n    width: 100%;\n  }\n\n  ", "\n\n  @media (min-width: 480px) {\n    border-radius: 7.6px 7.6px 7.6px 0px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%;\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      border-radius: 7.6px 7.6px 0px 7.6px;\n  "])));
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      border-radius: 7.6px 7.6px 0px 7.6px;\n      &[name=image]{\n        border-radius: 7.6px 7.6px 0px 7.6px;\n       }\n    "])));
});

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border-radius: 7.6px 7.6px 0px 7.6px;\n  padding: 10px 25px 10px 25px;\n  max-width: 80%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: #D81212;\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n  font-size: 12px;\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    border-radius: 7.6px 7.6px 0px 7.6px;\n    width: 100%;\n  }\n\n  ", "\n  \n  @media (min-width: 480px){\n    border-radius: 7.6px 7.6px 0px 7.6px;\n\n    ", "\n  }\n\n  @media (min-width: 1024px){\n    max-width: 40%\n  }\n\n"])), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-radius: 7.6px 7.6px 7.6px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n\n    &[name=image]{\n      border-radius: 7.6px 7.6px 7.6px 0px;\n     }\n  "])));
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      border-radius: 7.6px 7.6px 7.6px 0px;\n    "])));
});

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 7.6px 7.6px 0px 7.6px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    border-radius: 7.6px 7.6px 7.6px 0px;\n    "])));
});

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  span{\n    border-radius: 7.6px 7.6px 7.6px 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    border-radius: 7.6px 7.6px 0px 7.6px;\n    "])));
});

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  margin-bottom: 10px;\n  img{\n    width: 100%;\n    height: auto;\n    max-height: 300;\n    aspect-ratio: attr(width) / attr(height);\n    vertical-align: middle;\n    object-fit: contain;\n    cursor: pointer;\n  }\n"])));

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"])));

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"])), function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      text-align: left;\n  "])));
});

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 10px;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n  color: ", ";\n  ", "\n"])), function (_ref) {
  var white = _ref.white,
      theme = _ref.theme;
  return white ? '#FFFFFF' : theme.colors.darkTextColor;
}, function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    text-align: left;\n  "])));
});

exports.TimeofSent = TimeofSent;

var SendForm = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  height: 84px;\n  align-items: center;\n  width: calc(100% - 80px);\n  @media (min-width: 768px) {\n    padding: 10px 20px;\n    position: static;\n    width: auto;\n  }\n"])));

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n  width: 100%;\n  input {\n    width: 80%;\n    flex: 1;\n    padding-right: 30px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    margin-right: 15px\n  }\n"])));

exports.Send = Send;

var SendImage = _styledComponents.default.label(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 16px;\n  margin: 0px 20px;\n  position: ", ";\n  opacity: ", ";\n  position: absolute;\n  right: 0;\n  transform: translateX(-300%);\n  input {\n    display: none;\n  }\n\n  svg {\n    color: #CFD0D0;\n    width: 16px;\n    height: 16px;\n    cursor: pointer\n  }\n"])), function (props) {
  return props.hidden && 'fixed';
}, function (props) {
  return props.hidden && '0';
});

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  margin: 0px 17px;\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  right: 0;\n  transform: translateX(-300%);\n  img{\n    width: 16px;\n    height: 16px;\n    &:disabled {\n    cursor: not-allowed;\n    }\n    border-radius: 7.6px;\n  }\n\n  svg{\n    position: relative;\n    color: black;\n    font-size: 12px;\n    top: -10px;\n    right: 0px\n  }\n\n  button{\n    position: absolute;\n    background: white;\n    width: 14px;\n    height: 14px;\n    transform: translate(50%, -30%);\n  }\n"])));

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  white-space: nowrap;\n\n  button{\n    padding: 0;\n    width: 44px;\n    height: 44px;\n    img {\n       position: relative;\n       top: 3px;\n       color: white;\n       ", "\n    }\n\n    span {\n      display: none;\n    }\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 480px){\n    button{\n      svg {\n        margin-right: 10px;\n      }\n      span {\n        display: inline;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme10;

  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n        transform: rotate(270deg)\n      "])));
});

exports.WrapperSendMessageButton = WrapperSendMessageButton;

var ImageContainer = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));

exports.ImageContainer = ImageContainer;

var ModalIcon = _styledComponents.default.span(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n  border-radius: 50%;\n  right: 5px;\n  top: 5px;\n  z-index: 1;\n  background: rgba(0,0,0,0.3);\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme11;

  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme12;

  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme13;

  return ((_props$theme13 = props.theme) === null || _props$theme13 === void 0 ? void 0 : _props$theme13.rtl) && (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});

exports.ModalIcon = ModalIcon;

var ModalIconHeader = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  align-items: center;\n  box-shadow: 0px 1px 4px 0px #0000001A;\n  padding: 13px 40px 0 40px;\n  img, [class='fallback'] {\n    margin-left: 15px;\n    box-shadow: 0px 1px 4px 0px #0000001A;\n    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n    width: 32px;\n    height: 32px;\n    border-radius: 7.6px;\n    object-fit: cover;\n  }\n"])));

exports.ModalIconHeader = ModalIconHeader;