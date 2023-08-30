"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.TimeListWrapper = exports.TimeItem = exports.SelectContainer = exports.OrderTimeWrapper = exports.MonthYearLayer = exports.DaysSwiper = exports.DayNumber = exports.DayName = exports.Day = exports.DateWrapper = exports.ClosedBusinessMsg = exports.CheckedIcon = exports.CheckIcon = exports.CheckBoxWrapper = exports.ButtonWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Title = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 600;\n  text-align: center;\n  margin-bottom: 40px;\n  color: ", ";\n\n  @media (max-width: 450px) {\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.darkTextColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding-right: 30px;\n      padding-left: 0;\n    "])));
});
exports.Title = Title;
var CheckBoxWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  span {\n    font-size: 14px;\n    color: #909BA9;\n  }\n\n  svg {\n    color: #B1BCCC;\n    font-size: 24px;\n    margin-right: 10px;\n    min-width: 24px;\n\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "])));
}, function (_ref) {
  var highlight = _ref.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    span {\n      font-weight: 600;\n      color: ", ";\n    }\n    svg {\n      color: ", ";\n    }\n  "])), function (props) {
    var _props$theme$colors2;
    return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.darkTextColor;
  }, function (props) {
    var _props$theme$colors3;
    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.primary;
  });
}, function (_ref2) {
  var isLoading = _ref2.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
exports.CheckBoxWrapper = CheckBoxWrapper;
var DateWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([""])));
exports.DateWrapper = DateWrapper;
var TimeListWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -12px;\n  width: calc(100% + 24px);\n  margin-top: 30px;\n  max-height: 250px;\n  overflow: auto;\n  ", "\n"])), function (_ref3) {
  var cateringPreorder = _ref3.cateringPreorder;
  return cateringPreorder && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    margin-left: 0;\n  "])));
});
exports.TimeListWrapper = TimeListWrapper;
var CheckedIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 20px;\n  min-width: 20px;\n  height: 20px;\n  box-sizing: border-box;\n  border: 6px solid ", ";\n  margin: 2px 12px 2px 2px;\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin: 2px 2px 2px 12px;\n  "])));
}, function (_ref4) {
  var cateringPreorder = _ref4.cateringPreorder;
  return cateringPreorder && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: 21px;\n    min-width: 21px;\n    height: 21px;\n    margin: 0;\n    margin-left: 1px;\n  "])));
});
exports.CheckedIcon = CheckedIcon;
var ButtonWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  button {\n    width: 100%;\n    height: 44px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      position: absolute;\n      font-size: 21px;\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        left: 17px;\n      "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        right: 17px;\n      "])));
});
exports.ButtonWrapper = ButtonWrapper;
var OrderTimeWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  > p {\n    font-weight: 600;\n    font-size: 20px;\n  }\n"])));
exports.OrderTimeWrapper = OrderTimeWrapper;
var MonthYearLayer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  margin-bottom: 13px;\n\n  span {\n    font-size: 16px;\n    line-height: 24px;\n  }\n"])));
exports.MonthYearLayer = MonthYearLayer;
var DaysSwiper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  border-top: 1px solid #E9ECEF;\n  border-bottom: 1px solid #E9ECEF;\n\n  .swiper-datelist {\n    padding: 0 20px;\n    .swiper-button-prev {\n      background-image: url(\"data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 00-1.659-.753l-5.48 4.796a1 1 0 000 1.506z'%3E%3C/path%3E%3C/svg%3E\");\n      background-repeat: no-repeat;\n      background-size: 100% auto;\n      background-position: center;\n      width: 20px;\n    }\n\n    .swiper-button-prev::after {\n      display: none;\n    }\n    .swiper-button-next {\n      background-image: url(\"data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z'%3E%3C/path%3E%3C/svg%3E\");\n      background-repeat: no-repeat;\n      background-size: 100% auto;\n      background-position: center;\n      width: 18px;\n    }\n\n    .swiper-button-next::after {\n      display: none;\n    }\n\n    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {\n      right: 0px;\n      left: auto;\n    }\n    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {\n      left: 0px;\n      right: auto;\n    }\n    .swiper-wrapper {\n      display: flex;\n      justify-content: space-between;\n    }\n  }\n"])));
exports.DaysSwiper = DaysSwiper;
var Day = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-grow: 1;\n  color: #B1BCCC;\n  cursor: pointer;\n  padding: 14px 0 13px 0;\n  flex-direction: column;\n  align-items: center;\n  transition: background-color .16s ease -0.01s;\n\n  ", "\n\n  :hover {\n    background-color: #e9ecef;\n  }\n"])), function (_ref5) {
  var selected = _ref5.selected;
  return selected && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    color: #344050;\n  "])));
});
exports.Day = Day;
var DayName = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 14px;\n  line-height: 24px;\n  margin-bottom: 10px;\n  &:first-letter {\n    text-transform: uppercase;\n  }\n\n  ", "\n"])), function (_ref6) {
  var isAppoint = _ref6.isAppoint;
  return isAppoint && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    font-size: 12px;\n    line-height: 22px;\n  "])));
});
exports.DayName = DayName;
var DayNumber = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 30px;\n\n  ", "\n"])), function (_ref7) {
  var isAppoint = _ref7.isAppoint;
  return isAppoint && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 26px;\n  "])));
});
exports.DayNumber = DayNumber;
var TimeItem = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  span {\n    font-size: 14px;\n    white-space: nowrap;\n  }\n  ", "\n", "\n"])), function (_ref8) {
  var active = _ref8.active;
  return active && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    background: #F5F9FF;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref9) {
  var cateringPreorder = _ref9.cateringPreorder;
  return cateringPreorder ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    background: #fff;\n    width: 100%;\n    min-width: 100%;\n    height: 50px;\n    \n    span {\n      font-size: 18px;\n      display: flex;\n      align-items: center;\n      margin: 10px 0;\n      margin-left: 15px;\n      p{\n        position: relative;\n        bottom: 2px;\n      }\n    }\n    ", "\n  "])), function (_ref10) {
    var active = _ref10.active;
    return active && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      background: #F5F9FF;\n      color: ", ";\n      span {\n        p{\n          bottom: 0;\n          margin-left: 2px;\n        }\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    });
  }) : (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    justify-content: center;\n    align-items: center;\n    background: #E9ECEF;\n    border-radius: 7.6px;\n    padding: 5px 15px;\n    margin: 12px;\n    width: calc(50% - 24px);\n    min-width: calc(50% - 24px);\n    box-sizing: border-box;\n    user-select: none;\n      \n      @media (min-width: 400px) {\n        width: calc(33.33% - 24px);\n        min-width: calc(33.33% - 24px);\n      }\n      \n      @media (min-width: 576px) {\n      width: calc(25% - 24px);\n      min-width: calc(25% - 24px);\n      }\n      \n      @media (min-width: 769px) {\n        width: calc(33.33% - 24px);\n        min-width: calc(33.33% - 24px);\n        ", "\n      }\n    "])), function (_ref11) {
    var isAppoint = _ref11.isAppoint;
    return isAppoint && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n          width: calc(33.33% - 24px);\n          min-width: calc(33.33% - 24px);\n          span {\n            font-size: 12px;\n          }\n        "])));
  });
});
exports.TimeItem = TimeItem;
var ClosedBusinessMsg = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-size: 16px;\n  width: 100%;\n"])));
exports.ClosedBusinessMsg = ClosedBusinessMsg;
var SelectContainer = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  #list {\n    width: 100%;\n  }\n\n  > div {\n    width: 100%;\n    background-color: #F8F9FA!important;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    min-height: 44px;\n    border: none;\n    border-radius: 7.6px;\n    color: #909BA9 !important;\n\n    > div:first-child {\n      padding-top: 5px;\n      padding-bottom: 5px;\n      justify-content: space-between;\n    }\n    > div#list {\n      width: 100%;\n      background-color: #F8F9FA!important;\n      border: 1px solid #F8F9FA;\n      border-radius: 7.6px;\n      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n    }\n  }\n\n  ", "\n"])), function (_ref12) {
  var _theme$layouts;
  var theme = _ref12.theme;
  return (theme === null || theme === void 0 || (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 || (_theme$layouts = _theme$layouts.checkout) === null || _theme$layouts === void 0 || (_theme$layouts = _theme$layouts.components) === null || _theme$layouts === void 0 || (_theme$layouts = _theme$layouts.layout) === null || _theme$layouts === void 0 ? void 0 : _theme$layouts.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    background: #000;\n    #select-input {\n      margin-bottom: 0px;\n    }\n    div {\n      white-space: pre-wrap;\n    }\n    > div {\n      background-color: #000!important;\n      border: 1px solid #fff;\n      border-radius: 0px;\n      color: #fff !important;\n      padding: 0px 10px;\n      box-sizing: border-box;\n      height: auto;\n      > div#list {\n        background-color: #000 !important;\n        border: 1px solid #fff;\n        border-radius: 0px;\n      }\n    }\n  "])));
});
exports.SelectContainer = SelectContainer;
var CheckIcon = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  margin-right: 20px;\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n"])));
exports.CheckIcon = CheckIcon;