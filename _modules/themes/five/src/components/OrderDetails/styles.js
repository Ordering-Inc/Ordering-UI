"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRightContainer = exports.WrapperLeftContainer = exports.WrapperDriver = exports.WrapperContainer = exports.TitleContainer = exports.StatusBar = exports.SkeletonWrapper = exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.ShareOrder = exports.SectionTitleContainer = exports.SectionTitle = exports.ReviewWrapper = exports.ReviewOrderLink = exports.ReOrder = exports.PlaceSpotSection = exports.PhotoBlock = exports.OrderStatusAndLinkContainer = exports.OrderProducts = exports.OrderPreferences = exports.OrderInfo = exports.OrderIdSec = exports.OrderHistoryContainer = exports.OrderDriver = exports.OrderCustomer = exports.OrderBusiness = exports.OrderBill = exports.OrderActions = exports.NewOrder = exports.MyOrderActions = exports.MessagesIcon = exports.MapWrapper = exports.Map = exports.LinkWrapper = exports.IframeContainer = exports.HistoryItemWrapper = exports.HeaderTitle = exports.HeaderInfo = exports.ExclamationWrapper = exports.Exclamation = exports.Divider = exports.DetailWrapper = exports.Content = exports.Container = exports.CommentContainer = exports.ButtonWrapper = exports.BusinessWrapper = exports.BusinessTitle = exports.BusinessInfo = exports.BusinessExternalWrapper = exports.BtsOrderStatus = exports.ActionsBlock = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 45px 0 20px;\n  ", "\n\n  @media (min-width: 740px) {\n    margin: 20px 0;\n  }\n"])), function (_ref) {
  var _theme$confirmation, _theme$confirmation$c, _theme$confirmation$c2;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$confirmation = theme.confirmation) === null || _theme$confirmation === void 0 ? void 0 : (_theme$confirmation$c = _theme$confirmation.components) === null || _theme$confirmation$c === void 0 ? void 0 : (_theme$confirmation$c2 = _theme$confirmation$c.layout) === null || _theme$confirmation$c2 === void 0 ? void 0 : _theme$confirmation$c2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    margin: 20px 0;\n  "])), function (_ref2) {
    var _theme$colors;
    var theme = _ref2.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#fff';
  });
});
exports.Container = Container;
var WrapperContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  min-height: auto;\n  position: relative;\n\n  @media (min-width: 993px) {\n    min-height: calc(100vh - 337px);\n    box-sizing: border-box;\n  }\n"])));
exports.WrapperContainer = WrapperContainer;
var SkeletonWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var HeaderInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin-bottom: 20px;\n\n  h1, p {\n    margin: 0;\n    color: ", ";\n    ", "\n  }\n\n  h1 {\n    margin-bottom: 22px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref3) {
  var _theme$confirmation2, _theme$confirmation2$, _theme$confirmation2$2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$confirmation2 = theme.confirmation) === null || _theme$confirmation2 === void 0 ? void 0 : (_theme$confirmation2$ = _theme$confirmation2.components) === null || _theme$confirmation2$ === void 0 ? void 0 : (_theme$confirmation2$2 = _theme$confirmation2$.layout) === null || _theme$confirmation2$2 === void 0 ? void 0 : _theme$confirmation2$2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (_ref4) {
    var _theme$colors2;
    var theme = _ref4.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) || '#fff';
  });
});
exports.HeaderInfo = HeaderInfo;
var Content = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 0;\n"])));
exports.Content = Content;
var OrderBusiness = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  flex-direction: column;\n  align-items: flex-start;\n  border-radius: 7.6px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0px 4px 10px 0px #0000001F;\n\n  ", "\n\n  @media (min-width: 769px) {\n    flex-direction: row;\n  }\n"])), function (_ref5) {
  var _theme$layouts, _theme$layouts$confir, _theme$layouts$confir2, _theme$layouts$confir3;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$confir = _theme$layouts.confirmation) === null || _theme$layouts$confir === void 0 ? void 0 : (_theme$layouts$confir2 = _theme$layouts$confir.components) === null || _theme$layouts$confir2 === void 0 ? void 0 : (_theme$layouts$confir3 = _theme$layouts$confir2.layout) === null || _theme$layouts$confir3 === void 0 ? void 0 : _theme$layouts$confir3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    padding: 30px;\n    background: ", ";\n  "])), function (_ref6) {
    var _theme$colors3;
    var theme = _ref6.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#fff';
  }, function (props) {
    var _props$theme, _props$theme$colors;
    return (props === null || props === void 0 ? void 0 : (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.tertiaryContrast) || props.theme.colors.secundaryContrast;
  });
});
exports.OrderBusiness = OrderBusiness;
var BusinessWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  ", "\n  ", "\n  img {\n    width: 100px;\n    height: 100px;\n    border-radius: 7.6px;\n    margin-right: 0;\n\n    @media (min-width: 400px) {\n      margin-right: 40px;\n    }\n  }\n\n  @media (min-width: 400px) {\n    flex-direction: row;\n    width: ", ";\n  }\n"])), function (props) {
  return props.borderBottom && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding-bottom: 15px;\n    border-bottom: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
}, function (props) {
  return props.borderTop && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-top: 15px;\n    border-top: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.lightGray;
  });
}, function (props) {
  var _props$w;
  return (_props$w = props.w) !== null && _props$w !== void 0 ? _props$w : '100%';
});
exports.BusinessWrapper = BusinessWrapper;
var BtsOrderStatus = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n\n  div + div {\n    margin-left: 0;\n    margin-top: 10px;\n  }\n  @media (min-width: 400px) {\n    flex-direction: row;\n    div + div {\n      margin-left: 30px;\n      margin-top: 0px;\n    }\n  }\n"])));
exports.BtsOrderStatus = BtsOrderStatus;
var BusinessInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  margin-right: 0;\n  margin-top: 10px;\n\n  h1,\n  p {\n    margin: 0;\n    color: ", ";\n    overflow-wrap: anywhere;\n    ", "\n  }\n\n  h2 {\n    font-weight: 500;\n    font-size: 18px;\n    margin: 0px 0px 5px 0px;\n  }\n  p {\n    font-size: 14px;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 400px) {\n    margin-right: 15px;\n    margin-top: 0;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref7) {
  var _theme$confirmation3, _theme$confirmation3$, _theme$confirmation3$2;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$confirmation3 = theme.confirmation) === null || _theme$confirmation3 === void 0 ? void 0 : (_theme$confirmation3$ = _theme$confirmation3.components) === null || _theme$confirmation3$ === void 0 ? void 0 : (_theme$confirmation3$2 = _theme$confirmation3$.layout) === null || _theme$confirmation3$2 === void 0 ? void 0 : _theme$confirmation3$2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (_ref8) {
    var _theme$colors4;
    var theme = _ref8.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.tertiary) || '#fff';
  });
});
exports.BusinessInfo = BusinessInfo;
var ActionsBlock = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  > * {\n    margin-right: 5px;\n    ", "\n  }\n  svg {\n    font-size: 20px;\n    cursor: pointer;\n    color: #B1BCCC;\n  }\n\n  @media (min-width: 380px) {\n    svg {\n      font-size: 20px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n  "])));
});
exports.ActionsBlock = ActionsBlock;
var OrderInfo = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0px 0px 35px;\n  position: relative;\n  background: ", ";\n  h1, p {\n    margin: 0px;\n    color: ", ";\n    ", "\n  }\n  h1 {\n    margin-bottom: 5px;\n    font-weight: 600;\n    font-size: 32px;\n  }\n  p {\n    font-size: 14px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n  }\n\n  .date {\n    margin-bottom: 6px;\n  }\n\n  .types {\n    margin-bottom: 6px;\n    font-size: 16px;\n  }\n\n  .order-status {\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n    \n  ", "\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref9) {
  var _theme$confirmation4, _theme$confirmation4$, _theme$confirmation4$2;
  var theme = _ref9.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$confirmation4 = theme.confirmation) === null || _theme$confirmation4 === void 0 ? void 0 : (_theme$confirmation4$ = _theme$confirmation4.components) === null || _theme$confirmation4$ === void 0 ? void 0 : (_theme$confirmation4$2 = _theme$confirmation4$.layout) === null || _theme$confirmation4$2 === void 0 ? void 0 : _theme$confirmation4$2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (_ref10) {
    var _theme$colors5;
    var theme = _ref10.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.tertiary) || '#fff';
  });
}, function (_ref11) {
  var _theme$layouts2, _theme$layouts2$confi, _theme$layouts2$confi2, _theme$layouts2$confi3;
  var theme = _ref11.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$confi = _theme$layouts2.confirmation) === null || _theme$layouts2$confi === void 0 ? void 0 : (_theme$layouts2$confi2 = _theme$layouts2$confi.components) === null || _theme$layouts2$confi2 === void 0 ? void 0 : (_theme$layouts2$confi3 = _theme$layouts2$confi2.layout) === null || _theme$layouts2$confi3 === void 0 ? void 0 : _theme$layouts2$confi3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";;\n    padding: 30px;\n    box-sizing: border-box;\n    background: ", ";\n  "])), function (_ref12) {
    var _theme$colors6;
    var theme = _ref12.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors6 = theme.colors) === null || _theme$colors6 === void 0 ? void 0 : _theme$colors6.tertiary) || '#fff';
  }, function (_ref13) {
    var _theme$colors7, _theme$colors8;
    var theme = _ref13.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors7 = theme.colors) === null || _theme$colors7 === void 0 ? void 0 : _theme$colors7.tertiaryContrast) || (theme === null || theme === void 0 ? void 0 : (_theme$colors8 = theme.colors) === null || _theme$colors8 === void 0 ? void 0 : _theme$colors8.secundaryContrast);
  });
});
exports.OrderInfo = OrderInfo;
var OrderIdSec = _styledComponents.default.h1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-size: 25px !important;\n  @media (min-width: 350px) {\n    font-size: 32px !important;\n  }\n"])));
exports.OrderIdSec = OrderIdSec;
var ReviewOrderLink = _styledComponents.default.span(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin: 0;\n  cursor: pointer;\n  text-decoration-line: underline;\n  user-select: none;\n  ", "\n  ", "\n"])), function (_ref14) {
  var active = _ref14.active;
  return active ? (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    var _props$theme3;
    return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.colors.primary;
  }) : (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    color: #B1BCCC;\n    cursor: not-allowed;\n    span {\n      pointer-events: none;\n    }\n  "])));
}, function (_ref15) {
  var isMargin = _ref15.isMargin;
  return isMargin && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    margin: 0 10px 0 0;\n  "])));
});
exports.ReviewOrderLink = ReviewOrderLink;
var StatusBarStyled = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  height: 12px;\n  margin: 18px 0px 8px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});
var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};
exports.StatusBar = StatusBar;
var SectionTitle = _styledComponents.default.h1(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  margin: 20px 0 0 0;\n  font-size: 20px;\n  font-weight: 500;\n"])));
exports.SectionTitle = SectionTitle;
var SectionTitleContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  h2 {\n    font-size: 20px;\n    font-weight: 500;\n    margin: 0px 0px 5px 0px;\n  }\n"])));
exports.SectionTitleContainer = SectionTitleContainer;
var OrderCustomer = (0, _styledComponents.default)(BusinessInfo)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 7.6px;\n  padding: 20px;\n  box-shadow: 0px 4px 10px 0px #0000001F;\n  margin-bottom: 30px;\n\n  ", "\n"])), function (_ref16) {
  var _theme$layouts3, _theme$layouts3$confi, _theme$layouts3$confi2, _theme$layouts3$confi3;
  var theme = _ref16.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$confi = _theme$layouts3.confirmation) === null || _theme$layouts3$confi === void 0 ? void 0 : (_theme$layouts3$confi2 = _theme$layouts3$confi.components) === null || _theme$layouts3$confi2 === void 0 ? void 0 : (_theme$layouts3$confi3 = _theme$layouts3$confi2.layout) === null || _theme$layouts3$confi3 === void 0 ? void 0 : _theme$layouts3$confi3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    background: ", ";\n    border: 1px solid ", ";;\n    padding: 30px;\n  "])), function (props) {
    var _theme$colors9;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors9 = theme.colors) === null || _theme$colors9 === void 0 ? void 0 : _theme$colors9.tertiaryContrast) || props.theme.colors.secundaryContrast;
  }, function (_ref17) {
    var _theme$colors10;
    var theme = _ref17.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors10 = theme.colors) === null || _theme$colors10 === void 0 ? void 0 : _theme$colors10.tertiary) || '#fff';
  });
});
exports.OrderCustomer = OrderCustomer;
var PhotoBlock = _styledComponents.default.img(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  width: 100px;\n  height: 100px;\n  margin-right: 40px;\n"])));
exports.PhotoBlock = PhotoBlock;
var Map = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  width: 100%;\n  height: 350px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  img {\n    object-fit: cover;\n  }\n"])));
exports.Map = Map;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral([""])));
exports.OrderDriver = OrderDriver;
var WrapperDriver = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 48px;\n      height: 48px;\n      margin-right: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  flex-direction: column;\n"])));
exports.OrderProducts = OrderProducts;
var OrderBill = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n  margin-top: 10px;\n  table {\n    width: 100%;\n    font-size: 14px;\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 14px;\n      td:nth-child(1) {\n        font-weight: 600;\n        font-size: 20px;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: 600;\n        font-size: 20px;\n        padding-top: 10px;\n      }\n    }\n  }\n\n  table.comments {\n    margin-top: 20px;\n    align-items: center;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n  }\n\n  @media (min-width: 678px) {\n    table {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n        text-align: left;\n      "])));
});
exports.OrderBill = OrderBill;
var SkeletonBlock = _styledComponents.default.div(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])), function (_ref18) {
  var width = _ref18.width;
  return width && "".concat(width, "%");
});
exports.SkeletonBlock = SkeletonBlock;
var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"])));
exports.SkeletonBlockWrapp = SkeletonBlockWrapp;
var ShareOrder = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 0 20px;\n  justify-content: space-between;\n  z-index: 1;\n\n  div.wrap {\n    & > div:first-child {\n      left: 0;\n    }\n    button {\n      border-radius: 7.6px;\n    }\n  }\n  \n  h1 {\n    font-size: 15px;\n    margin: 0px;\n  }\n\n  p {\n    font-size: 13px;\n    margin: 0px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n    font-size: 14px;\n    align-items: center;\n    background: ", ";\n\n    svg {\n      left: 0;\n      margin-right: 6px;\n      color: ", ";\n    }\n\n    &:hover {\n      svg {\n        color: #FFFFFF;\n      }\n    }\n  }\n\n  div.text {\n    width: 60%;\n  }\n\n  div.wrap {\n    display: flex;\n    align-items: center;\n\n    & > div:first-child {\n      width: 100%;\n      position: relative;\n      div {\n        right: 0px;\n        left: initial;\n        top: 35px;\n      }\n    }\n  }\n\n  @media (min-width: 1201px) {\n    div.wrap {\n      & > div:first-child {\n        left: 0;\n      }\n    }\n  }\n\n  @media (min-width: 768px) {\n    div.wrap {\n      width: 30%;\n      & > div:first-child {\n        left: 0;\n      }\n    }\n\n    h1 {\n      font-size: 20px;\n    }\n\n    p {\n      font-size: 18px;\n    }\n\n    button {\n      font-size: 18px;\n      width: 100%;\n      svg {\n        position: absolute;\n        margin-left: 10px;\n      }\n    }\n  }\n\n  @media (min-width: 425px) {\n    div.text {\n      width: 70%;\n    }\n\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 15px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.primary;
});
exports.ShareOrder = ShareOrder;
var MessagesIcon = _styledComponents.default.span(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n"])));
exports.MessagesIcon = MessagesIcon;
var ExclamationWrapper = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: absolute;\n  transform: translate(75%, -25%);\n  svg{\n    font-size: 16px;\n    color: ", "\n  }\n"])), function (props) {
  var _props$theme7, _props$theme7$colors;
  return (_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : (_props$theme7$colors = _props$theme7.colors) === null || _props$theme7$colors === void 0 ? void 0 : _props$theme7$colors.primary;
});
exports.ExclamationWrapper = ExclamationWrapper;
var WrapperLeftContainer = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n"])));
exports.WrapperLeftContainer = WrapperLeftContainer;
var WrapperRightContainer = (0, _styledComponents.default)(WrapperLeftContainer)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral([""])));
exports.WrapperRightContainer = WrapperRightContainer;
var Divider = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  height: 8px;\n  background: #F8F9FA;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n\n  @media(min-width: 769px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));
exports.Divider = Divider;
var MyOrderActions = _styledComponents.default.div(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral([""])));
exports.MyOrderActions = MyOrderActions;
var ReviewWrapper = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  .review-sent {\n    border-radius: 7.6px;\n  }\n"])));
exports.ReviewWrapper = ReviewWrapper;
var Exclamation = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));
exports.Exclamation = Exclamation;
var CommentContainer = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  margin: 0;\n  h3 {\n    margin: 0;\n  }\n"])));
exports.CommentContainer = CommentContainer;
var NewOrder = _styledComponents.default.div(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  button {\n    width: 160px;\n  }\n"])));
exports.NewOrder = NewOrder;
var OrderActions = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"])));
exports.OrderActions = OrderActions;
var TitleContainer = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%;\n  margin: auto;\n  button {\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    justify-content: space-around;\n    min-width: 200px;\n    max-height: 53px;\n  }\n  > h1 {\n    text-align: center;\n  }\n  @media (min-width: 650px) {\n    width: 50%;\n  }\n"])));
exports.TitleContainer = TitleContainer;
var ReOrder = _styledComponents.default.div(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  flex-direction: column;\n\n  button {\n    padding: 5px 16px;\n    min-width: unset;\n    margin: 5px 5px;\n\n    @media (min-width: 650px) {\n      margin: 0px 5px;\n    }\n  }\n\n  @media (min-width: 650px) {\n    flex-direction: row;\n  }\n"])));
exports.ReOrder = ReOrder;
var BusinessTitle = _styledComponents.default.div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));
exports.BusinessTitle = BusinessTitle;
var OrderPreferences = (0, _styledComponents.default)(OrderCustomer)(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral([""])));
exports.OrderPreferences = OrderPreferences;
var HeaderTitle = _styledComponents.default.div(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  h1{\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 5px;\n  }\n"])));
exports.HeaderTitle = HeaderTitle;
var PlaceSpotSection = _styledComponents.default.div(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n\n"])));
exports.PlaceSpotSection = PlaceSpotSection;
var OrderStatusAndLinkContainer = _styledComponents.default.div(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  @media (min-width: 450px) {\n    flex-direction: row;\n  }\n"])));
exports.OrderStatusAndLinkContainer = OrderStatusAndLinkContainer;
var LinkWrapper = _styledComponents.default.div(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])));
exports.LinkWrapper = LinkWrapper;
var OrderHistoryContainer = _styledComponents.default.div(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral([""])));
exports.OrderHistoryContainer = OrderHistoryContainer;
var HistoryItemWrapper = _styledComponents.default.div(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 28px 23px;\n  border-bottom: 1px solid ", ";\n\n  > svg {\n    width: 24px;\n    height: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.primary;
});
exports.HistoryItemWrapper = HistoryItemWrapper;
var DetailWrapper = _styledComponents.default.div(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  margin-left: 50px;\n  ", "\n\n  h3 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 50px;\n  "])));
});
exports.DetailWrapper = DetailWrapper;
var ButtonWrapper = _styledComponents.default.div(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  margin-top: 40px;\n  button {\n    width: 100%;\n    height: 44px;\n    position: relative;\n\n    svg {\n      position: absolute;\n      top: 10px;\n      font-size: 22px;\n      right: 16px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n        left: 16px;\n        right: initial;\n        transform: rotate(180deg);\n      "])));
});
exports.ButtonWrapper = ButtonWrapper;
var MapWrapper = _styledComponents.default.div(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n\n  @media (min-width: 769px) {\n    width: 50%;\n    margin-top: 0px;\n  }\n"])));
exports.MapWrapper = MapWrapper;
var BusinessExternalWrapper = _styledComponents.default.div(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  @media (min-width: 769px) {\n    width: 50%;\n  }\n"])));
exports.BusinessExternalWrapper = BusinessExternalWrapper;
var IframeContainer = _styledComponents.default.div(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 600px;\n  padding-bottom: 20px;\n"])));
exports.IframeContainer = IframeContainer;