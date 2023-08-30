"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperRightContainer = exports.WrapperPlaceOrderButton = exports.WrapperLeftContent = exports.WrapperLeftContainer = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.TypeContainer = exports.TotalCart = exports.Table = exports.PlaceNumber = exports.PlaceName = exports.PaymentMethodContainer = exports.NotFoundImage = exports.ModalIcon = exports.InputWrapper = exports.DriverTipDivider = exports.DriverTipContainer = exports.Container = exports.CheckOutDivider = exports.CartsList = exports.CartContainer = exports.BusinessDetailsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  padding: 30px 40px;\n  margin-bottom: 60px;\n  box-sizing: border-box;\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])));
exports.Container = Container;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n\n  @media (min-width: 769px) {\n    width: 55%;\n    padding: 55px 60px 55px 40px;\n  }\n"])));
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #fff;\n  box-sizing: border-box;\n\n  @media (min-width: 769px) {\n    width: 45%;\n    padding: 55px 40px;\n  }\n"])));
exports.WrapperRightContainer = WrapperRightContainer;
var WrapperUserDetails = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapperUserDetails = WrapperUserDetails;
var UserDetailsContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 25px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n"])));
exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border: none;\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-weight: 500;\n      font-size: 16px;\n    }\n    p {\n      font-size: 14px;\n      margin: 5px 0;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.BusinessDetailsContainer = BusinessDetailsContainer;
var PaymentMethodContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  > p {\n    margin: 0;\n    font-size: 16px;\n    color: #909BA9;\n  }\n"])));
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n"])));
exports.CartContainer = CartContainer;
var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin: 50px 0px 10px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;
var WarningMessage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
exports.WarningMessage = WarningMessage;
var NotFoundImage = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
exports.NotFoundImage = NotFoundImage;
var CartsList = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
exports.CartsList = CartsList;
var WarningText = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WarningText = WarningText;
var WrapperLeftContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .checkout-title {\n    margin: 0;\n    margin-bottom: 50px;\n    font-weight: 600;\n    font-size: 20px;\n    color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
});
exports.WrapperLeftContent = WrapperLeftContent;
var CheckOutDivider = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #fff;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 100px);\n    margin-left: -40px;\n  }\n"])));
exports.CheckOutDivider = CheckOutDivider;
var DriverTipDivider = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #E9ECEF;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));
exports.DriverTipDivider = DriverTipDivider;
var ModalIcon = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-top: 3px;\n  margin-bottom: 20px;\n"])));
exports.ModalIcon = ModalIcon;
var TotalCart = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 40px;\n  width: 100%;\n  box-sizing: border-box;\n  border-top: 1px solid #E9ECEF;\n  position: fixed;\n  bottom: -5px;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n  button{\n    margin-bottom: ", ";\n    height: 52px;\n    font-weight: 600;\n    font-size: 12px;\n    width: 45%;\n  }\n  p{\n    font-size: 16px;\n  }\n  @media (min-width: 340px){\n    button{\n      font-size: 14px;\n    }\n  }\n"])), function (_ref) {
  var isIOS = _ref.isIOS;
  return isIOS ? '10px' : '0';
});
exports.TotalCart = TotalCart;
var InputWrapper = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  input{\n    width: 100%;\n    border-radius: 7.6px;\n    border: 1px solid #DEE2E6;\n  }\n"])));
exports.InputWrapper = InputWrapper;
var Table = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n display: flex;\n flex-direction: column;\n h2{\n   font-weight: 500;\n   font-size: 16px;\n   display: flex;\n   align-items: center;\n   color: ", ";\n   margin-bottom: 20px;\n }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.Table = Table;
var PlaceName = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ", ";\n  font-weight: 400;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 10px;\n  p{\n    font-size: 10px;\n    color: ", ";\n  }\n  span{\n    font-size: 12px;\n    color: #909BA9;\n  }\n"])), function (_ref2) {
  var isDisabled = _ref2.isDisabled;
  return isDisabled ? 0.5 : 1;
}, function (props) {
  return props.theme.colors.darkTextColor;
});
exports.PlaceName = PlaceName;
var PlaceNumber = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n\n"])));
exports.PlaceNumber = PlaceNumber;
var TypeContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  button: {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 44px;\n  }\n  h1{\n    font-weight: 600;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: ", ";\n    margin-bottom: 25px;\n  }\n  label{\n    font-size: 12px;\n    margin-bottom: 10px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.TypeContainer = TypeContainer;