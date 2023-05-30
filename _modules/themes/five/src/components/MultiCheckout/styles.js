"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperRightContainer = exports.WrapperPlaceOrderButton = exports.WrapperLeftContent = exports.WrapperLeftContainer = exports.WarningText = exports.UserDetailsContainer = exports.PaymentMethodContainer = exports.MultiCartPriceContainer = exports.DriverTipDivider = exports.DriverTipContainer = exports.CouponContainer = exports.Container = exports.CartHeader = exports.CartContainer = exports.AuthButtonList = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  min-height: auto;\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box;\n  }\n"])));
exports.Container = Container;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 30px 20px;\n  @media (min-width: 769px) {\n    width: 55%;\n    padding: 30px 60px 55px 40px;\n  }\n"])));
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperLeftContent = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  .checkout-title {\n    margin: 0;\n    font-weight: 600;\n    font-size: 32px;\n    color: ", ";\n  }\n  .back-arrow {\n    font-size: 24px;\n    cursor: pointer;\n    margin-bottom: 5px;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.darkTextColor;
});
exports.WrapperLeftContent = WrapperLeftContent;
var CouponContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  input, button {\n    border-radius: 7.6px;\n  }\n"])));
exports.CouponContainer = CouponContainer;
var WrapperRightContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #F8F9FA;\n  box-sizing: border-box;\n  padding: 40px 20px;\n  @media (min-width: 769px) {\n    width: 45%;\n    padding: 55px 40px;\n  }\n"])));
exports.WrapperRightContainer = WrapperRightContainer;
var PaymentMethodContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n  }\n  > p {\n    margin: 0;\n    font-size: 16px;\n    color: #909BA9;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n"])));
exports.CartContainer = CartContainer;
var CartHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n  h1 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n  }\n  h1 {\n    margin: 5px 0px;\n  }\n  @media (min-width: 300px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"])));
exports.CartHeader = CartHeader;
var DriverTipDivider = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #E9ECEF;\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));
exports.DriverTipDivider = DriverTipDivider;
var MultiCartPriceContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin-top: 38px;\n  > div {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-top: ", ";\n    margin-bottom: 5px;\n    > h4 {\n      font-size: 18px;\n      margin: 0;\n    }\n  }\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 5px;\n  }\n  p {\n    font-size: 14px;\n    color: ", ";\n    margin: 0;\n  }\n"])), function (_ref) {
  var totalFeeEnabled = _ref.totalFeeEnabled;
  return totalFeeEnabled ? '5px' : '38px';
}, function (props) {
  return props.theme.colors.darkGray;
});
exports.MultiCartPriceContainer = MultiCartPriceContainer;
var WrapperUserDetails = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapperUserDetails = WrapperUserDetails;
var UserDetailsContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 25px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n"])));
exports.UserDetailsContainer = UserDetailsContainer;
var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;
var WarningText = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n  font-size: 14px;\n"])), function (props) {
  return props.theme.colors.danger500;
});
exports.WarningText = WarningText;
var AuthButtonList = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    font-weight: 600;\n    font-size: 20px;\n    margin-bottom: 3px;\n  }\n  button {\n    width: 100%;\n    height: 44px;\n    margin-top: 22px;\n  }\n"])));
exports.AuthButtonList = AuthButtonList;