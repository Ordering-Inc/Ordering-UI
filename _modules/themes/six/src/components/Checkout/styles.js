"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperPlaceOrderButton = exports.WrappSumarry = exports.WrappContainer = exports.WrapBusinessLogo = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.SectionTitle = exports.PaymentMethodContainer = exports.NotFoundImage = exports.MomentWrapper = exports.InfoWrapper = exports.DriverTipContainer = exports.Container = exports.ConfirmInfoItem = exports.CartsList = exports.CartContainer = exports.BusinessName = exports.BusinessLogo = exports.BusinessDetailsContainer = exports.BusinessDetailInfo = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));

exports.Container = Container;

var WrappSumarry = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  @media (min-width: 1024px) {\n    width: 40vw;\n    padding: 2vw;\n    height: calc(100vh - 75px);\n    ", " \n    ", "    \n  }\n"])), function (_ref) {
  var skeleton = _ref.skeleton;
  return skeleton ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n         background-color: transparent; \n        "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n         background-color: ", ";\n      "])), function (props) {
    return props.theme.colors.primaryDarkBackground;
  });
}, function (_ref2) {
  var skeleton = _ref2.skeleton;
  return skeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      padding: 20px 5%;\n      align-items: flex-start;\n    "])));
});

exports.WrappSumarry = WrappSumarry;

var WrappContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px 5%;\n  box-sizing: border-box;\n \n  @media (min-width: 1024px) {\n    width: 60vw;\n    height: calc(100vh - 75px);\n    overflow-y: scroll;\n  }\n\n  .selected-option {\n    z-index: 0;\n  }\n"])));

exports.WrappContainer = WrappContainer;

var WrapperUserDetails = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.WrapperUserDetails = WrapperUserDetails;

var UserDetailsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0px 0px 20px;\n  flex-wrap: wrap;\n"])));

exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-size: 24px;\n    }\n  }\n"])));
exports.BusinessDetailsContainer = BusinessDetailsContainer;

var BusinessDetailInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  h2 {\n    color: ", ";\n    font-weight: 200;\n    margin: 0px 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.fontSecundary;
});

exports.BusinessDetailInfo = BusinessDetailInfo;

var PaymentMethodContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  h2 {\n    color: ", ";\n    font-weight: 200;\n    margin: 0px 0 10px;\n  }\n  .selected-option {\n    font-weight: 300;\n  }\n"])), function (props) {
  return props.theme.colors.fontSecundary;
});

exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral([""])));
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h2 {\n    color: ", ";\n    font-weight: 200;\n    margin: 0px 0 10px;\n  }\n"])), function (props) {
  return props.theme.colors.fontSecundary;
});
exports.CartContainer = CartContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  padding: 20px;\n  box-sizing: border-box;\n\n  @media (min-width: 513px) {\n    position: relative;\n    padding: 0px;\n    margin-bottom: 15px;\n  }\n\n  button {\n    width: 45%;\n    padding: 5px 20px;\n    cursor: pointer;\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n  \n"])));

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});

exports.WarningMessage = WarningMessage;

var NotFoundImage = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  max-width: 300px;\n  img {\n    width: 300px;\n  }\n"])));

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));

exports.CartsList = CartsList;

var WarningText = _styledComponents.default.p(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.WarningText = WarningText;

var WrapBusinessLogo = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n"])));

exports.WrapBusinessLogo = WrapBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 5px;\n  border: 1px solid #909090;\n"])));

var BusinessLogo = function BusinessLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessName = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", "\n  span:first-child {\n    color: ", ";\n    font-size: 14px;\n    font-weight: 500;\n    color: ", ";\n  }\n  span:last-child {\n    font-weight: 500;\n    font-size: 20px;\n    color: #fff;\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "])));
}, function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.grayColor;
}, function (props) {
  return props.theme.colors.fontSecundary;
});

exports.BusinessName = BusinessName;

var ConfirmInfoItem = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 80%;\n  color: #fff;\n  margin-bottom: 10px;\n  .confirmInfo-title{    \n    border-bottom: 1px solid ", ";\n    width: 100%;\n  }\n  h4 {\n    margin: 10px 0;\n  } \n"])), function (props) {
  return props.theme.colors.borderColor;
});

exports.ConfirmInfoItem = ConfirmInfoItem;

var InfoWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  svg {\n    font-size: 24px;\n    ", "\n  }\n  svg path {\n    fill: ", ";\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
}, function (props) {
  return props.theme.colors.fontSecundary;
});

exports.InfoWrapper = InfoWrapper;

var MomentWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n"])));

exports.MomentWrapper = MomentWrapper;

var SectionTitle = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  h2 {\n    font-size: 18px;\n    line-height: 21px;\n    color: #495057;\n    font-weight: 300;\n  }\n"])));

exports.SectionTitle = SectionTitle;