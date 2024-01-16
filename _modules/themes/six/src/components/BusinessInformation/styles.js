"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodayEnablTime = exports.SectionTitle = exports.ScheduleTime = exports.ScheduleSection = exports.ScheduleName = exports.ScheduleDate = exports.ScheduleContainer = exports.ScheduleBlock = exports.RightPanel = exports.OffersSection = exports.OfferTextP = exports.OfferText = exports.OfferTable = exports.ModalIcon = exports.Map = exports.LeftPanel = exports.ImageContainer = exports.GoOrder = exports.FlexTabs = exports.Description = exports.DeliveryInfoSection = exports.BusinessReviewContent = exports.BusinessPhone = exports.BusinessName = exports.BusinessMediaContent = exports.BusinessInformationContainer = exports.BusinessInfoWrapper = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessBasicContent = exports.BusinessAddress = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BusinessInformationContainer = exports.BusinessInformationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow: auto;\n"])));
var BusinessBasicContent = exports.BusinessBasicContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 25px 20px 15px;\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% - 75px);\n"])));
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 5px 0px 10px;\n  ", "\n  .bold {\n    margin: 0;\n    margin-top: 20px;    \n    font-weight: 600;\n  }\n  .get-direction {\n    margin-top: 20px;\n    button {\n      font-weight: 500;\n      display: flex;\n      align-items: center;\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 16px;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    padding: 0px 10px 0px 5px;\n  "])));
});
var BusinessReviewContent = exports.BusinessReviewContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  \n"])));
var FlexTabs = exports.FlexTabs = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 7px 20px 0;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: bold;\n  background-color: #F7F7F7;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"])));
var SectionTitle = exports.SectionTitle = _styledComponents.default.h4(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  padding: 7px 30px;\n  text-transform: uppercase;\n  background-color: #DEE2E6;\n  color: #6C757D;\n"])));
var Map = exports.Map = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n"])));
var ScheduleSection = exports.ScheduleSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 25px;\n"])));
var ScheduleContainer = exports.ScheduleContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var ScheduleBlock = exports.ScheduleBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0px 30px;\n  width: 100%;\n  min-width: 150px;\n  box-sizing: border-box;\n  @media(min-width: 768px){\n    min-width: initial;\n  }\n"])));
var ScheduleName = exports.ScheduleName = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 14px;\n  width: 35%;\n  font-weight: ", ";\n"])), function (_ref) {
  var bold = _ref.bold;
  return bold ? '600' : '100';
});
var ScheduleDate = exports.ScheduleDate = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var ScheduleTime = exports.ScheduleTime = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 14px;\n"])));
var BusinessMediaContent = exports.BusinessMediaContent = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    padding: 0 20px;\n    > img,\n    > iframe {\n      object-fit: cover;\n      border-radius: 10px;\n      margin: 10px 10px;\n      width: calc(100% - 12px);\n      cursor: pointer;\n      @media (min-width: 481px) {\n        width: calc(50% - 20px);\n      }\n      @media (min-width: 681px) {\n        width: calc(33% - 20px);\n      }\n      @media (min-width: 993px) {\n        width: calc(25% - 20px);\n        height: 75px;\n      }\n      @media (min-width: 1440px) {\n        width: calc(25% - 20px);\n        height: 90px;\n      }\n    }\n  }\n"])));
var ModalIcon = exports.ModalIcon = _styledComponents.default.span(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 24px;\n  cursor: pointer;\n  color: #6C757D;\n  border-radius: 50%;\n  right: 10px;\n  top: 60px;\n  z-index: 1;\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      left: 10px;\n      right: initial;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
});
var Description = exports.Description = _styledComponents.default.p(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin: 5px 0;\n  padding: 0 30px;\n  font-size: 0.9rem;\n  color: #6C757D;\n"])));
var ImageContainer = exports.ImageContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral([" \n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));
var OffersSection = exports.OffersSection = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0 20px;\n"])));
var OfferText = exports.OfferText = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var OfferTextP = exports.OfferTextP = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n"])));
var OfferTable = exports.OfferTable = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 15px;\n  table>tbody>tr>td, table>tbody>tr>th,\n  table>thead>tr>td, table>thead>tr>th\n  {\n    border-top: 0\n  }\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border-style: hidden;\n    border: 1px solid  ", ";\n    thead {\n      background-color: ", ";\n    }\n    tr th {\n      font-size: 15px;\n    }\n    tr td {\n      font-size: 12px;\n    }\n    td span {\n      unicode-bidi: bidi-override;\n    }\n    tr td,\n    tr th {\n      text-align: left;\n      padding: 10px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        text-align: right;\n      "])));
});
var BusinessInfoWrapper = exports.BusinessInfoWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  background-color: #fff;\n"])));
var LeftPanel = exports.LeftPanel = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  @media (min-width: 850px){\n    width: 40%;\n    height: 90vh;\n    overflow-x: auto;\n  }\n"])));
var RightPanel = exports.RightPanel = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: none; \n  background-color: ", ";\n  @media (min-width: 850px){\n    width: 60%;    \n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])), function (props) {
  return props.theme.colors.emptyPagebackground;
});
var DeliveryInfoSection = exports.DeliveryInfoSection = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  color: #6C757D;\n  p {\n    margin: 5px 0;\n    padding: 0 30px;\n    font-size: .9rem;\n    font-weight: 100;\n  }\n"])));
var GoOrder = exports.GoOrder = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 20px 20px;\n  button {\n    margin-left: auto;\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n      margin-left: unset;\n      margin-right: auto;\n    "])));
});
var BusinessName = exports.BusinessName = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n h2 {\n  margin: 0;\n }\n"])));
var TodayEnablTime = exports.TodayEnablTime = _styledComponents.default.p(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  color: ", ";\n  margin: 0;\n"])), function (props) {
  return props.theme.colors.fontSecundary;
});
var BusinessAddress = exports.BusinessAddress = _styledComponents.default.p(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 20px;\n  font-size: 1.1rem;\n"])));
var BusinessPhone = exports.BusinessPhone = _styledComponents.default.p(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 20px;\n  color: ", ";\n  font-weight: 600;\n  border-radius: 100px;\n  width: fit-content;\n  line-height: 1.2;\n  text-align: center;\n  text-decoration: none;\n  padding: 7px 16px;\n  transform: translateX(-15px);\n  transition: all .2s ease;\n  &:hover {\n    background-color: rgba(0,130,72,.1);\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});