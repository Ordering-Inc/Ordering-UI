"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperPagination = exports.WrapperImage = exports.WrapOrderStatusSelector = exports.Timestatus = exports.Timer = exports.Table = exports.StatusInfo = exports.PriorityDot = exports.OrdersCountWrapper = exports.OrdersContainer = exports.OrderType = exports.OrderTbody = exports.OrderNumberContainer = exports.LogisticStatusDot = exports.DriversInfo = exports.DragTh = exports.CustomerInfo = exports.CheckBox = exports.BusinessInfo = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrdersContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n\n  ", "\n\n  @media (min-width: 768px) {\n    max-height: calc(var(--vh, 1vh) * 100 - 385px);\n  }\n\n  @media (min-width: 992px) {\n    max-height: calc(var(--vh, 1vh) * 100 - 305px);\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    max-height: calc(var(--vh, 1vh) * 100 - 275px);\n    ", "\n  }\n"])), function (_ref) {
  var noScroll = _ref.noScroll;
  return noScroll && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    overflow: hidden;\n  "])));
}, function (_ref2) {
  var isSelectedOrders = _ref2.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      max-height: calc(var(--vh, 1vh) * 100 - 345px);\n    "])));
}, function (_ref3) {
  var isSelectedOrders = _ref3.isSelectedOrders;
  return isSelectedOrders && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      max-height: calc(var(--vh, 1vh) * 100 - 345px);\n    "])));
});
exports.OrdersContainer = OrdersContainer;
var Table = _styledComponents.default.table(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n\n  th,\n  td {\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n\n    &:first-child {\n      padding-left: 0px;\n      padding-right: 0px;\n    }\n  }\n\n  th {\n    padding-top: 0px;\n  }\n\n  thead {\n    tr {\n      width: 100%;\n      border-bottom: solid 1px ", ";\n      th {\n        color: ", ";\n        white-space: nowrap;\n        ", "\n        background: ", ";\n      }\n    }\n  }\n\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .orderPrice {\n    div.info {\n      p {\n        ", "\n      }\n    }\n  }\n\n  div.info {\n    p {\n      margin: 0px;\n      color: ", ";\n      font-size: 12px;\n    }\n    p.date {\n      color: ", ";\n    }\n    p.bold {\n      font-size: 14px;\n      font-weight: 600;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.disabled;
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
}, function (_ref4) {
  var noFixedHeader = _ref4.noFixedHeader;
  return !noFixedHeader && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n          position: sticky;\n          top: 0px;\n          z-index: 100;\n        "])));
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          text-align: left;\n        "]))) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          text-align: right;\n        "])));
}, function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.lightGray;
}, function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.headingColor;
}, function (props) {
  var _props$theme$colors4;
  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.headingColor;
});
exports.Table = Table;
var OrderTbody = _styledComponents.default.tbody(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n  &.active {\n    background-color: ", ";\n    td {\n      border-top: 1px solid ", " !important;\n      border-bottom: 1px solid ", " !important;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.borderColor;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.OrderTbody = OrderTbody;
var OrderNumberContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  p {\n    max-width: 130px;\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    border-left: 1px solid #E9ECEF;\n    padding-left: 15px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    border-right: 1px solid #E9ECEF;\n    padding-right: 15px;\n  "])));
});
exports.OrderNumberContainer = OrderNumberContainer;
var CheckBox = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n  svg {\n    font-size: 24px;\n    color: #B1BCCC;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
}, function (_ref5) {
  var isChecked = _ref5.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    var _props$theme$colors5;
    return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.primary;
  });
});
exports.CheckBox = CheckBox;
var BusinessInfo = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  p {\n    max-width: 125px;\n  }\n  div.info {\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
});
exports.BusinessInfo = BusinessInfo;
var CustomerInfo = (0, _styledComponents.default)(BusinessInfo)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  p {\n    max-width: 125px;\n  }\n"])));
exports.CustomerInfo = CustomerInfo;
var StatusInfo = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  .bold {\n    max-width: 150px;\n    font-weight: 600;\n    margin: 0;\n  }\n"])));
exports.StatusInfo = StatusInfo;
var DriversInfo = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  .select {\n    > div:first-child {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n  > div {\n    > div {\n      border: none;\n      &:first-child {\n        .driver-photo {\n          width: 45px;\n          height: 45px;\n        }\n        .driver-info {\n          p {\n            color: ", ";\n            font-size: 14px;\n            font-weight: 600;\n          }\n          span {\n            display: initial;\n          }\n        }\n      }\n    }\n  }\n  ", "\n"])), function (props) {
  var _props$theme$colors6;
  return (_props$theme$colors6 = props.theme.colors) === null || _props$theme$colors6 === void 0 ? void 0 : _props$theme$colors6.headingColor;
}, function (_ref6) {
  var noClick = _ref6.noClick;
  return noClick && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
exports.DriversInfo = DriversInfo;
var WrapperImage = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  position: relative;\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    border-radius: 7.6px;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])));
exports.WrapperImage = WrapperImage;
var OrderType = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  img, svg {\n    width: 25px;\n    height: 30px;\n  }\n\n  img {\n    border-radius: unset;\n    border: none;\n  }\n\n  span {\n    color: ", ";\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme5;
  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "])));
});
exports.OrderType = OrderType;
var WrapOrderStatusSelector = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  > div {\n    p {\n      font-size: 14px;\n    }\n    > div:first-child {\n      p {\n        color: ", ";\n        max-width: 140px;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme$colors7;
  return (_props$theme$colors7 = props.theme.colors) === null || _props$theme$colors7 === void 0 ? void 0 : _props$theme$colors7.headingColor;
});
exports.WrapOrderStatusSelector = WrapOrderStatusSelector;
var WrapperPagination = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  padding-top: 5px;\n"])));
exports.WrapperPagination = WrapperPagination;
var LogisticStatusDot = _styledComponents.default.span(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  display: inline-block;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme6;
  return (_props$theme6 = props.theme) !== null && _props$theme6 !== void 0 && _props$theme6.rtl ? (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    margin-right: 6px;\n  "]))) : (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    margin-left: 6px;\n  "])));
}, function (_ref7) {
  var status = _ref7.status;
  return status === 0 && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.orange;
  });
}, function (_ref8) {
  var status = _ref8.status;
  return status === 1 && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.warning;
  });
}, function (_ref9) {
  var status = _ref9.status;
  return status === 2 && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.info;
  });
}, function (_ref10) {
  var status = _ref10.status;
  return status === 3 && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.danger;
  });
}, function (_ref11) {
  var status = _ref11.status;
  return status === 4 && (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.success;
  });
});
exports.LogisticStatusDot = LogisticStatusDot;
var PriorityDot = _styledComponents.default.span(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  display: inline-block;\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (props) {
  var _props$theme7;
  return (_props$theme7 = props.theme) !== null && _props$theme7 !== void 0 && _props$theme7.rtl ? (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n    margin-right: 6px;\n  "]))) : (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    margin-left: 6px;\n  "])));
}, function (_ref12) {
  var priority = _ref12.priority;
  return priority === -1 && (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.secundaryLight;
  });
}, function (_ref13) {
  var priority = _ref13.priority;
  return priority === 0 && (0, _styledComponents.css)(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref14) {
  var priority = _ref14.priority;
  return priority === 1 && (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.warning;
  });
}, function (_ref15) {
  var priority = _ref15.priority;
  return priority === 2 && (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.danger;
  });
});
exports.PriorityDot = PriorityDot;
var Timestatus = _styledComponents.default.div(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  width: 4px;\n  height: 37px;\n  border-radius: 20px 20px 20px 20px;\n  ", "\n  ", "\n  ", "\n"])), function (_ref16) {
  var timeState = _ref16.timeState;
  return timeState === 'in_time' && (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n    background-color: #00D27A;\n  "])));
}, function (_ref17) {
  var timeState = _ref17.timeState;
  return timeState === 'at_risk' && (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n    background-color: #FFC700;\n  "])));
}, function (_ref18) {
  var timeState = _ref18.timeState;
  return timeState === 'delayed' && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n    background-color: #E63757;\n  "])));
});
exports.Timestatus = Timestatus;
var Timer = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  min-width: 65px;\n  p {\n    margin: 0px;\n    color: ", ";\n    font-size: 12px;\n  }\n\n  .bold {\n    font-size: 14px;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  .in_time{\n    color: #00D27A;\n  }\n\n  .at_risk {\n    color: #FFC700;\n  }\n  \n  .delayed {\n    color: #E63757;\n  }\n"])), function (props) {
  var _props$theme$colors8;
  return (_props$theme$colors8 = props.theme.colors) === null || _props$theme$colors8 === void 0 ? void 0 : _props$theme$colors8.lightGray;
}, function (props) {
  var _props$theme$colors9;
  return (_props$theme$colors9 = props.theme.colors) === null || _props$theme$colors9 === void 0 ? void 0 : _props$theme$colors9.headingColor;
});
exports.Timer = Timer;
var OrdersCountWrapper = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50px;\n  background-color: ", ";\n  color: ", ";\n  font-weight: 400;\n  font-size: 9px;\n  line-height: 12px;\n  padding: 2px 5px;\n  position: absolute;\n  top: -9px;\n  right: -5px;\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.backgroundInfo;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n    left: -5px;\n    right: initial;\n  "])));
}, function (_ref19) {
  var isNew = _ref19.isNew;
  return isNew && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.lightGreen;
  }, function (props) {
    return props.theme.colors.success;
  });
});
exports.OrdersCountWrapper = OrdersCountWrapper;
var DragTh = _styledComponents.default.th(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n"])), function (_ref20) {
  var selectedDragOver = _ref20.selectedDragOver;
  return selectedDragOver && (0, _styledComponents.css)(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
exports.DragTh = DragTh;