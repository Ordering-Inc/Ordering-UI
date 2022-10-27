"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperRightContainer = exports.WrapperPlaceOrderButton = exports.WrapperLeftContent = exports.WrapperLeftContainer = exports.WrapperActionsInput = exports.WarningText = exports.WarningMessage = exports.WalletPaymentOptionContainer = exports.UserDetailsContainer = exports.TipsSkeleton = exports.SelectSpotContainer = exports.PaymentMethodContainer = exports.NotFoundImage = exports.ItemHeader = exports.HandoffContent = exports.HandoffContainer = exports.GoBackContainer = exports.DriverTipDivider = exports.DriverTipContainer = exports.DeliveryOptionsContainer = exports.Container = exports.CheckOutDivider = exports.CartsList = exports.CartHeader = exports.CartContainer = exports.BusinessDetailsContainer = exports.BusinessDetails = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  min-height: auto;\n\n  h1{\n    color: #fff\n  }\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n    justify-content: center;\n  }\n  margin-top: 20px;\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box; \n    ", "\n  }\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-top: 76px;\n    "])));
});
exports.Container = Container;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 20px;\n\n  @media (min-width: 769px) {\n    width: 55%;\n    max-width: 700px;\n    padding: 0px 60px 55px 40px;\n  }\n"])));
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #000;\n  box-sizing: border-box;\n  padding-bottom: 20px;\n  border: 1px solid #fff;\n  margin-top: 76px;\n  height: max-content;\n  @media (min-width: 769px) {\n    width: 50%;\n    max-width: 500px;\n    padding-bottom: 40px;\n  }\n"])));
exports.WrapperRightContainer = WrapperRightContainer;
var WrapperUserDetails = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapperUserDetails = WrapperUserDetails;
var UserDetailsContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n"])));
exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  border: none;\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-weight: 600;\n      font-size: 16px;\n    }\n    p {\n      font-size: 14px;\n      margin: 5px 0;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.BusinessDetailsContainer = BusinessDetailsContainer;
var PaymentMethodContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n  }\n\n  > div {\n    border: 1px solid #fff;\n    padding: 20px;\n    box-sizing: border-box;\n    margin-top: 0px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 16px\n  }\n  > div {\n    border: 1px solid #fff;\n    padding: 20px;\n    box-sizing: border-box;\n    margin-top: 0px;\n  }\n"])));
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  padding: 0 20px;\n"])));
exports.CartContainer = CartContainer;
var WalletPaymentOptionContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  padding-top: 20px;\n"])));
exports.WalletPaymentOptionContainer = WalletPaymentOptionContainer;
var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  box-sizing: border-box;\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;
var WarningMessage = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 16px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
exports.WarningMessage = WarningMessage;
var NotFoundImage = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
exports.NotFoundImage = NotFoundImage;
var CartsList = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
exports.CartsList = CartsList;
var WarningText = _styledComponents.default.p(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WarningText = WarningText;
var WrapperLeftContent = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 40px;\n  .checkout-title {\n    margin: 0;\n    font-weight: 600;\n    font-size: 32px;\n    color: ", ";\n  }\n\n  \n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
});
exports.WrapperLeftContent = WrapperLeftContent;
var CheckOutDivider = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #F8F9FA;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 100px);\n    margin-left: -40px;\n  }\n"])));
exports.CheckOutDivider = CheckOutDivider;
var DriverTipDivider = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #E9ECEF;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));
exports.DriverTipDivider = DriverTipDivider;
var DeliveryOptionsContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  #select-input {\n    margin-bottom: 10px;\n  }\n  #list {\n    width: 100%;\n  }\n\n  > div {\n    width: 100%;\n    background-color: #F8F9FA!important;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    height: 44px;\n    border: none;\n    border-radius: 7.6px;\n    color: #909BA9 !important;\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      justify-content: space-between;\n    }\n    > div#list {\n      width: 100%;\n      background-color: #F8F9FA!important;\n      border: 1px solid #F8F9FA;\n      border-radius: 7.6px;\n      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n"])));
exports.DeliveryOptionsContainer = DeliveryOptionsContainer;
var CartHeader = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n\n  h1 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n  }\n\n  span {\n    font-size: 13px;\n    color: ", ";\n    text-decoration: underline;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  h1, span {\n    margin: 5px 0px;\n  }\n\n  @media (min-width: 300px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.CartHeader = CartHeader;
var SelectSpotContainer = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral([""])));
exports.SelectSpotContainer = SelectSpotContainer;
var WrapperActionsInput = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  input {\n    width: 100%;\n  }\n  h1 {\n    font-size: 20px;\n  }\n"])));
exports.WrapperActionsInput = WrapperActionsInput;
var HandoffContainer = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  h1 {\n    font-weight: 500;\n    font-size: 16px;\n    color: #fff;\n    margin: 0px 10px 0px 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      margin: 0px 0px 0px 10px;\n  "])));
});
exports.HandoffContainer = HandoffContainer;
var ItemHeader = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  border: 1px solid #fff;\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n"])));
exports.ItemHeader = ItemHeader;
var HandoffContent = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  border: 1px solid #fff;\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n"])));
exports.HandoffContent = HandoffContent;
var BusinessDetails = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  color: #fff;\n  img{\n    width: 100%;\n    height: 200px;\n  }\n  > div {\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    h2  {\n      font-size: 18px;\n      font-weight: 500;\n      margin: 0;\n    }\n    span {\n      text-decoration: underline;\n      font-size: 16px;\n    }\n  }\n"])));
exports.BusinessDetails = BusinessDetails;
var GoBackContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  top: 25px;\n  .back-arrow {\n    font-size: 24px;\n    cursor: pointer;\n    margin-bottom: 5px;\n    color: #fff;\n  }\n"])));
exports.GoBackContainer = GoBackContainer;
var TipsSkeleton = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"])));
exports.TipsSkeleton = TipsSkeleton;