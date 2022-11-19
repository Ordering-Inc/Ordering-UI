"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperRightContainer = exports.WrapperPlaceOrderButton = exports.WrapperLeftContent = exports.WrapperLeftContainer = exports.WrapperActionsInput = exports.WarningText = exports.WarningMessage = exports.WalletPaymentOptionContainer = exports.UserDetailsContainer = exports.TitleContainer = exports.SubtitleContainer = exports.SelectSpotContainer = exports.PaymentMethodContainer = exports.NotFoundImage = exports.MasterCardCoupon = exports.ItemHeader = exports.GoToMenu = exports.DriverTipDivider = exports.DriverTipContainer = exports.DeliveryOptionsContainer = exports.Container = exports.ColumnDivider = exports.CheckOutDivider = exports.CartsList = exports.CartHeader = exports.CartContainer = exports.BusinessDetailsContainer = exports.BusinessDetails = exports.BackIcon = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  min-height: auto;\n\n  ", "\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n    ", "\n  }\n\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box;\n  }\n"])), function (_ref) {
  var _theme$layouts, _theme$layouts$checko, _theme$layouts$checko2, _theme$layouts$checko3;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$checko = _theme$layouts.checkout) === null || _theme$layouts$checko === void 0 ? void 0 : (_theme$layouts$checko2 = _theme$layouts$checko.components) === null || _theme$layouts$checko2 === void 0 ? void 0 : (_theme$layouts$checko3 = _theme$layouts$checko2.layout) === null || _theme$layouts$checko3 === void 0 ? void 0 : _theme$layouts$checko3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n    * {\n      color: ", ";\n    }\n  "])), function (_ref2) {
    var _theme$colors;
    var theme = _ref2.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#fff';
  });
}, function (_ref3) {
  var _theme$layouts2, _theme$layouts2$check, _theme$layouts2$check2, _theme$layouts2$check3;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$check = _theme$layouts2.checkout) === null || _theme$layouts2$check === void 0 ? void 0 : (_theme$layouts2$check2 = _theme$layouts2$check.components) === null || _theme$layouts2$check2 === void 0 ? void 0 : (_theme$layouts2$check3 = _theme$layouts2$check2.layout) === null || _theme$layouts2$check3 === void 0 ? void 0 : _theme$layouts2$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      justify-content: center;\n    "])));
});
exports.Container = Container;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  padding: 55px 20px 30px;\n\n  @media (min-width: 769px) {\n    width: 55%;\n    padding: 55px 60px 55px 40px;\n  }\n\n  @media (min-width: 820px) {\n    padding: 30px 60px 55px 40px;\n    ", "\n  }\n"])), function (_ref4) {
  var _theme$layouts3, _theme$layouts3$check, _theme$layouts3$check2, _theme$layouts3$check3;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$check = _theme$layouts3.checkout) === null || _theme$layouts3$check === void 0 ? void 0 : (_theme$layouts3$check2 = _theme$layouts3$check.components) === null || _theme$layouts3$check2 === void 0 ? void 0 : (_theme$layouts3$check3 = _theme$layouts3$check2.layout) === null || _theme$layouts3$check3 === void 0 ? void 0 : _theme$layouts3$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      max-width: 700px;\n      padding: 30px 20px 20px 30px;\n    "])));
});
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #F8F9FA;\n  box-sizing: border-box;\n  padding: 40px 20px;\n  ", "\n  @media (min-width: 769px) {\n    width: 45%;\n    padding: 55px 40px;\n    ", "\n  }\n"])), function (_ref5) {
  var _theme$layouts4, _theme$layouts4$check, _theme$layouts4$check2, _theme$layouts4$check3;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts4 = theme.layouts) === null || _theme$layouts4 === void 0 ? void 0 : (_theme$layouts4$check = _theme$layouts4.checkout) === null || _theme$layouts4$check === void 0 ? void 0 : (_theme$layouts4$check2 = _theme$layouts4$check.components) === null || _theme$layouts4$check2 === void 0 ? void 0 : (_theme$layouts4$check3 = _theme$layouts4$check2.layout) === null || _theme$layouts4$check3 === void 0 ? void 0 : _theme$layouts4$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: transparent;\n  "])));
}, function (_ref6) {
  var _theme$layouts5, _theme$layouts5$check, _theme$layouts5$check2, _theme$layouts5$check3;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts5 = theme.layouts) === null || _theme$layouts5 === void 0 ? void 0 : (_theme$layouts5$check = _theme$layouts5.checkout) === null || _theme$layouts5$check === void 0 ? void 0 : (_theme$layouts5$check2 = _theme$layouts5$check.components) === null || _theme$layouts5$check2 === void 0 ? void 0 : (_theme$layouts5$check3 = _theme$layouts5$check2.layout) === null || _theme$layouts5$check3 === void 0 ? void 0 : _theme$layouts5$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      padding: 30px 20px 20px 30px;\n      width: 50%;\n      max-width: 500px;\n      margin-top: 50px;\n    "])));
});
exports.WrapperRightContainer = WrapperRightContainer;
var WrapperUserDetails = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapperUserDetails = WrapperUserDetails;
var UserDetailsContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 25px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #E9ECEF;\n\n  ", "\n"])), function (_ref7) {
  var _theme$layouts6, _theme$layouts6$check, _theme$layouts6$check2, _theme$layouts6$check3;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts6 = theme.layouts) === null || _theme$layouts6 === void 0 ? void 0 : (_theme$layouts6$check = _theme$layouts6.checkout) === null || _theme$layouts6$check === void 0 ? void 0 : (_theme$layouts6$check2 = _theme$layouts6$check.components) === null || _theme$layouts6$check2 === void 0 ? void 0 : (_theme$layouts6$check3 = _theme$layouts6$check2.layout) === null || _theme$layouts6$check3 === void 0 ? void 0 : _theme$layouts6$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding: 0px 30px 30px 30px;\n    margin-top: 0;\n    border-left: 1px solid #fff;\n    border-bottom: 1px solid #fff;\n    border-right: 1px solid #fff;\n    margin-bottom: 20px;\n    background: ", ";\n  "])), function (_ref8) {
    var _theme$colors2;
    var theme = _ref8.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiaryContrast) || '#000';
  });
});
exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border: none;\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-weight: 600;\n      font-size: 16px;\n    }\n    p {\n      font-size: 14px;\n      margin: 5px 0;\n      color: ", ";\n    }\n  }\n\n    \n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref9) {
  var _theme$layouts7, _theme$layouts7$check, _theme$layouts7$check2, _theme$layouts7$check3;
  var theme = _ref9.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts7 = theme.layouts) === null || _theme$layouts7 === void 0 ? void 0 : (_theme$layouts7$check = _theme$layouts7.checkout) === null || _theme$layouts7$check === void 0 ? void 0 : (_theme$layouts7$check2 = _theme$layouts7$check.components) === null || _theme$layouts7$check2 === void 0 ? void 0 : (_theme$layouts7$check3 = _theme$layouts7$check2.layout) === null || _theme$layouts7$check3 === void 0 ? void 0 : _theme$layouts7$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    border: 1px solid #fff;\n    background: ", ";\n    padding: 30px;\n  "])), function (_ref10) {
    var _theme$colors3;
    var theme = _ref10.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiaryContrast) || '#000';
  });
});
exports.BusinessDetailsContainer = BusinessDetailsContainer;
var PaymentMethodContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-weight: 500;\n    font-size: 20px;\n    color: ", ";\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref11) {
  var _theme$layouts8, _theme$layouts8$check, _theme$layouts8$check2, _theme$layouts8$check3;
  var theme = _ref11.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts8 = theme.layouts) === null || _theme$layouts8 === void 0 ? void 0 : (_theme$layouts8$check = _theme$layouts8.checkout) === null || _theme$layouts8$check === void 0 ? void 0 : (_theme$layouts8$check2 = _theme$layouts8$check.components) === null || _theme$layouts8$check2 === void 0 ? void 0 : (_theme$layouts8$check3 = _theme$layouts8$check2.layout) === null || _theme$layouts8$check3 === void 0 ? void 0 : _theme$layouts8$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border: 1px solid #fff;\n    background: ", ";\n    padding: 30px;\n    margin: 0;\n  "])), function (_ref12) {
    var _theme$colors4;
    var theme = _ref12.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.tertiaryContrast) || '#000';
  });
});
exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  > p {\n    margin: 0;\n    font-size: 16px;\n    color: #909BA9;\n  }\n  ", "\n"])), function (_ref13) {
  var _theme$layouts9, _theme$layouts9$check, _theme$layouts9$check2, _theme$layouts9$check3;
  var theme = _ref13.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts9 = theme.layouts) === null || _theme$layouts9 === void 0 ? void 0 : (_theme$layouts9$check = _theme$layouts9.checkout) === null || _theme$layouts9$check === void 0 ? void 0 : (_theme$layouts9$check2 = _theme$layouts9$check.components) === null || _theme$layouts9$check2 === void 0 ? void 0 : (_theme$layouts9$check3 = _theme$layouts9$check2.layout) === null || _theme$layouts9$check3 === void 0 ? void 0 : _theme$layouts9$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin-bottom: 20px;\n  "])));
});
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  ", "\n"])), function (_ref14) {
  var _theme$layouts10, _theme$layouts10$chec, _theme$layouts10$chec2, _theme$layouts10$chec3;
  var theme = _ref14.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts10 = theme.layouts) === null || _theme$layouts10 === void 0 ? void 0 : (_theme$layouts10$chec = _theme$layouts10.checkout) === null || _theme$layouts10$chec === void 0 ? void 0 : (_theme$layouts10$chec2 = _theme$layouts10$chec.components) === null || _theme$layouts10$chec2 === void 0 ? void 0 : (_theme$layouts10$chec3 = _theme$layouts10$chec2.layout) === null || _theme$layouts10$chec3 === void 0 ? void 0 : _theme$layouts10$chec3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    padding: 0;\n  "])));
});
exports.CartContainer = CartContainer;
var WalletPaymentOptionContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  padding-top: 20px;\n  ", "\n"])), function (_ref15) {
  var _theme$layouts11, _theme$layouts11$chec, _theme$layouts11$chec2, _theme$layouts11$chec3;
  var theme = _ref15.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts11 = theme.layouts) === null || _theme$layouts11 === void 0 ? void 0 : (_theme$layouts11$chec = _theme$layouts11.checkout) === null || _theme$layouts11$chec === void 0 ? void 0 : (_theme$layouts11$chec2 = _theme$layouts11$chec.components) === null || _theme$layouts11$chec2 === void 0 ? void 0 : (_theme$layouts11$chec3 = _theme$layouts11$chec2.layout) === null || _theme$layouts11$chec3 === void 0 ? void 0 : _theme$layouts11$chec3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    border-top: none;\n  "])));
});
exports.WalletPaymentOptionContainer = WalletPaymentOptionContainer;
var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;
var WarningMessage = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
exports.WarningMessage = WarningMessage;
var NotFoundImage = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
exports.NotFoundImage = NotFoundImage;
var CartsList = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
exports.CartsList = CartsList;
var WarningText = _styledComponents.default.p(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
exports.WarningText = WarningText;
var WrapperLeftContent = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  .checkout-title {\n    margin: 0;\n    font-weight: 600;\n    font-size: 32px;\n    color: ", ";\n  }\n\n  .back-arrow {\n    font-size: 24px;\n    cursor: pointer;\n    margin-bottom: 5px;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
}, function (_ref16) {
  var _theme$layouts12, _theme$layouts12$chec, _theme$layouts12$chec2, _theme$layouts12$chec3;
  var theme = _ref16.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts12 = theme.layouts) === null || _theme$layouts12 === void 0 ? void 0 : (_theme$layouts12$chec = _theme$layouts12.checkout) === null || _theme$layouts12$chec === void 0 ? void 0 : (_theme$layouts12$chec2 = _theme$layouts12$chec.components) === null || _theme$layouts12$chec2 === void 0 ? void 0 : (_theme$layouts12$chec3 = _theme$layouts12$chec2.layout) === null || _theme$layouts12$chec3 === void 0 ? void 0 : _theme$layouts12$chec3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      box-sizing: border-box;\n      margin-top: 50px;\n    "])));
});
exports.WrapperLeftContent = WrapperLeftContent;
var CheckOutDivider = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #F8F9FA;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 100px);\n    margin-left: -40px;\n  }\n"])));
exports.CheckOutDivider = CheckOutDivider;
var DriverTipDivider = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #E9ECEF;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));
exports.DriverTipDivider = DriverTipDivider;
var DeliveryOptionsContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  #select-input {\n    margin-bottom: 10px;\n  }\n  #list {\n    width: 100%;\n  }\n\n  > div {\n    width: 100%;\n    background-color: #F8F9FA!important;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    height: 44px;\n    border: none;\n    border-radius: 7.6px;\n    color: #909BA9 !important;\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      justify-content: space-between;\n    }\n    > div#list {\n      width: 100%;\n      background-color: #F8F9FA!important;\n      border: 1px solid #F8F9FA;\n      border-radius: 7.6px;\n      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  ", "\n"])), function (_ref17) {
  var _theme$layouts13, _theme$layouts13$chec, _theme$layouts13$chec2, _theme$layouts13$chec3;
  var theme = _ref17.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts13 = theme.layouts) === null || _theme$layouts13 === void 0 ? void 0 : (_theme$layouts13$chec = _theme$layouts13.checkout) === null || _theme$layouts13$chec === void 0 ? void 0 : (_theme$layouts13$chec2 = _theme$layouts13$chec.components) === null || _theme$layouts13$chec2 === void 0 ? void 0 : (_theme$layouts13$chec3 = _theme$layouts13$chec2.layout) === null || _theme$layouts13$chec3 === void 0 ? void 0 : _theme$layouts13$chec3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    padding: 20px 20px;\n    border: 1px solid #fff;\n    margin-bottom: 20px;\n    background: ", ";\n    #select-input {\n      margin-bottom: 0px;\n    }\n    > div {\n      background-color: ", " !important;\n      border: 1px solid #fff;\n      border-radius: 0px;\n      color: #fff !important;\n      padding: 0px 10px;\n      box-sizing: border-box;\n\n      > div#list {\n        background-color: ", " !important;\n        border: 1px solid #fff;\n        border-radius: 0px;\n      }\n    }\n  "])), function (_ref18) {
    var _theme$colors5;
    var theme = _ref18.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.tertiaryContrast) || '#000';
  }, function (_ref19) {
    var _theme$colors6;
    var theme = _ref19.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.tertiaryContrast) || '#000';
  }, function (_ref20) {
    var _theme$colors7;
    var theme = _ref20.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7.tertiaryContrast) || '#000';
  });
});
exports.DeliveryOptionsContainer = DeliveryOptionsContainer;
var CartHeader = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-direction: column;\n\n  h1 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n  }\n\n  span {\n    font-size: 13px;\n    color: ", ";\n    text-decoration: underline;\n    cursor: pointer;\n    user-select: none;\n  }\n\n  h1, span {\n    margin: 5px 0px;\n  }\n\n  ", "\n\n  @media (min-width: 300px) {\n    flex-direction: row;\n    align-items: center;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref21) {
  var _theme$layouts14, _theme$layouts14$chec, _theme$layouts14$chec2, _theme$layouts14$chec3;
  var theme = _ref21.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts14 = theme.layouts) === null || _theme$layouts14 === void 0 ? void 0 : (_theme$layouts14$chec = _theme$layouts14.checkout) === null || _theme$layouts14$chec === void 0 ? void 0 : (_theme$layouts14$chec2 = _theme$layouts14$chec.components) === null || _theme$layouts14$chec2 === void 0 ? void 0 : (_theme$layouts14$chec3 = _theme$layouts14$chec2.layout) === null || _theme$layouts14$chec3 === void 0 ? void 0 : _theme$layouts14$chec3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    span {\n      color: #fff;\n    }\n  "])));
});
exports.CartHeader = CartHeader;
var SelectSpotContainer = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral([""])));
exports.SelectSpotContainer = SelectSpotContainer;
var WrapperActionsInput = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  input {\n    width: 100%;\n  }\n  h1 {\n    font-size: 20px;\n  }\n"])));
exports.WrapperActionsInput = WrapperActionsInput;
var TitleContainer = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  ", "\n"])), function (_ref22) {
  var _theme$layouts15, _theme$layouts15$chec, _theme$layouts15$chec2, _theme$layouts15$chec3;
  var theme = _ref22.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts15 = theme.layouts) === null || _theme$layouts15 === void 0 ? void 0 : (_theme$layouts15$chec = _theme$layouts15.checkout) === null || _theme$layouts15$chec === void 0 ? void 0 : (_theme$layouts15$chec2 = _theme$layouts15$chec.components) === null || _theme$layouts15$chec2 === void 0 ? void 0 : (_theme$layouts15$chec3 = _theme$layouts15$chec2.layout) === null || _theme$layouts15$chec3 === void 0 ? void 0 : _theme$layouts15$chec3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    flex-direction: row;\n    align-items: center;\n    position: absolute;\n    top: 22px;\n    svg{\n      margin-right: 10px;\n    }\n  "])));
});
exports.TitleContainer = TitleContainer;
var SubtitleContainer = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  padding: 20px 20px 20px 30px;\n  border-left: 1px solid #fff;\n  border-top: 1px solid #fff;\n  border-right: 1px solid #fff;\n  background: ", ";\n  h2 {\n    font-size: 16px;\n    margin: 0;\n  }\n"])), function (_ref23) {
  var _theme$colors8;
  var theme = _ref23.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors8 = theme.colors) === null || _theme$colors8 === void 0 ? void 0 : _theme$colors8.tertiaryContrast) || '#000';
});
exports.SubtitleContainer = SubtitleContainer;
var ItemHeader = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  border: 1px solid #fff;\n  padding: 20px;\n  width: 100%;\n  box-sizing: border-box;\n  background: ", ";\n"])), function (_ref24) {
  var _theme$colors9;
  var theme = _ref24.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors9 = theme.colors) === null || _theme$colors9 === void 0 ? void 0 : _theme$colors9.tertiaryContrast) || '#000';
});
exports.ItemHeader = ItemHeader;
var BusinessDetails = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  color: #fff;\n  border-top: 1px solid #fff;\n  border-left: 1px solid #fff;\n  border-right: 1px solid #fff;\n  background: ", ";\n  img{\n    width: 100%;\n    height: 200px;\n  }\n  > div {\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    h2  {\n      font-size: 18px;\n      font-weight: 500;\n      margin: 0;\n    }\n    span {\n      text-decoration: underline;\n      font-size: 16px;\n      cursor: pointer;\n    }\n  }\n"])), function (_ref25) {
  var _theme$colors10;
  var theme = _ref25.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors10 = theme.colors) === null || _theme$colors10 === void 0 ? void 0 : _theme$colors10.tertiaryContrast) || '#000';
});
exports.BusinessDetails = BusinessDetails;
var MasterCardCoupon = _styledComponents.default.div(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  border: 1px solid #fff;\n  padding: 0px !important;\n  width: 100%;\n  box-sizing: border-box;\n  background: ", ";\n  img {\n    width: 100%\n  }\n"])), function (_ref26) {
  var _theme$colors11;
  var theme = _ref26.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors11 = theme.colors) === null || _theme$colors11 === void 0 ? void 0 : _theme$colors11.tertiaryContrast) || '#000';
});
exports.MasterCardCoupon = MasterCardCoupon;
var GoToMenu = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  left: 200px;\n  transform: translateY(75%);\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  p {\n    font-size: 14px;\n    margin: 0;\n  }\n  svg {\n    margin-right: 10px;\n    width: 20px;\n    height: 20px;\n    top: 4px;\n    position: relative;\n  }\n  @media (min-width: 768px) {\n    left: 230px;\n    transform: translateY(100%);\n    p {\n      font-size: 16px;\n    }\n    svg {\n      width: 22px;\n      height: 22px;\n    }\n  }\n"])));
exports.GoToMenu = GoToMenu;
var BackIcon = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  * {\n    color: ", ";\n  }\n"])), function (_ref27) {
  var _theme$colors12;
  var theme = _ref27.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors12 = theme.colors) === null || _theme$colors12 === void 0 ? void 0 : _theme$colors12.primary;
});
exports.BackIcon = BackIcon;
var ColumnDivider = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  height: 30px;\n  width: 1px;\n  background: #fff;\n  position: relative;\n  right: 20px;\n"])));
exports.ColumnDivider = ColumnDivider;