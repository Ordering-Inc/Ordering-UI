"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningMessage = exports.OptionStripeContainer = exports.CardItemContent = exports.CardItemActionsWrapper = exports.CardItemActions = exports.CardItem = exports.BlockLoading = exports.AddNewCard = exports.ActionsContent = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionStripeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 5px;\n"])));

exports.OptionStripeContainer = OptionStripeContainer;

var WarningMessage = _styledComponents.default.p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  color: #D81212;\n  font-size: 24px;\n  padding-left: 10px;\n  font-weight: bold;\n  opacity: 0.8;\n  ", "\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "])));
});

exports.WarningMessage = WarningMessage;

var CardItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 7px 0px;\n  border-bottom: 1px solid #EAEAEA;\n  box-sizing: border-box;\n"])));

exports.CardItem = CardItem;

var CardItemContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > div {\n    display: flex;\n    align-items: center;\n    margin-right: 13px;\n    ", "\n\n    img {\n      width: 24px;\n      height: 20px;\n    }\n  }\n\n  span {\n    font-size: 14px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 13px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.headingColor;
});

exports.CardItemContent = CardItemContent;

var CardItemActions = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > span {\n    font-weight: 600;\n    font-size: 12px;\n    color: ", ";\n    margin-right: 20px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.headingColor;
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0;\n    "])));
});

exports.CardItemActions = CardItemActions;

var BlockLoading = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n"])));

exports.BlockLoading = BlockLoading;

var AddNewCard = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  span {\n    font-size: 14px;\n    color: ", ";\n    cursor: pointer;\n    user-select: none;\n  }\n"])), function (props) {
  var _props$theme6;

  return (_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.colors.primary;
});

exports.AddNewCard = AddNewCard;

var CardItemActionsWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 7.6px;\n    cursor: pointer;\n    width: 26px;\n    height: 24px;\n    transition: all 0.3s;\n  \n    svg {\n      font-size: 20px;\n      color: #212121;\n    }\n\n    &:hover {\n      background: #F8F9FA;\n    }\n  }\n"])));

exports.CardItemActionsWrapper = CardItemActionsWrapper;

var ActionsContent = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  top: 100%;\n  background: #FFFFFF;\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n  border-radius: 7.6px;\n  overflow: hidden;\n  ", "\n\n  div {\n    padding: 10px 13px;\n    font-size: 14px;\n    cursor: pointer;\n    white-space: nowrap;\n    transition: all 0.3s;\n    color: ", ";\n\n    &:hover {\n      background: #f8f9fa;\n    }\n\n    &.delete {\n      color: #E63757;\n    }\n  }\n"])), function (props) {
  var _props$theme7;

  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    left: 0;\n  "]))) : (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    right: 0;\n  "])));
}, function (props) {
  var _props$theme8;

  return (_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.colors.headingColor;
});

exports.ActionsContent = ActionsContent;