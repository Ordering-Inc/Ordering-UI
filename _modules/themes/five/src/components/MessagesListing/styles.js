"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperImage = exports.ViewDetails = exports.UnreadMessageCounter = exports.Title = exports.OrdersOrderByOptionContainer = exports.OrdersListContainer = exports.OrderListItems = exports.OrderListContainer = exports.OrderHeader = exports.OrderCard = exports.OptionContent = exports.NotFoundSourceWrapper = exports.MessagesListingContainer = exports.MessageContainer = exports.LoadMoreButtonWrap = exports.ListHeader = exports.InnerTabsContainer = exports.Image = exports.DriverText = exports.DriverSelectorWrapper = exports.DriverNameContainer = exports.DriverName = exports.DriverInfo = exports.CardContent = exports.BusinessInfo = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesListingContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  margin: 0px auto;\n  max-width: 96%;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    height: calc(100vh - 105px);\n  }\n\n  ", "\n  \n"])), function (_ref) {
  var _theme$layouts, _theme$layouts$genera, _theme$layouts$genera2, _theme$layouts$genera3;

  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$genera = _theme$layouts.general) === null || _theme$layouts$genera === void 0 ? void 0 : (_theme$layouts$genera2 = _theme$layouts$genera.components) === null || _theme$layouts$genera2 === void 0 ? void 0 : (_theme$layouts$genera3 = _theme$layouts$genera2.layout) === null || _theme$layouts$genera3 === void 0 ? void 0 : _theme$layouts$genera3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    p, h1, h2, h3 {\n      color: #fff;\n    }\n  "])));
});

exports.MessagesListingContainer = MessagesListingContainer;

var OrderListItems = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 1px solid rgb(233, 236, 239);\n  height: 100%;\n  margin-top: 20px;\n  overflow: hidden;\n\n  @media (min-width: 1024px) {\n    width: 330px;\n    max-width: 330px;\n    margin-top: 0px;\n    border-top: none;\n    border-bottom: none;\n  }\n\n  @media (min-width: 1300px){\n    max-width: 500px;\n    width: 500px;\n  }\n"])));

exports.OrderListItems = OrderListItems;

var MessageContainer = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  border: 1px solid rgb(233, 236, 239);\n  overflow: hidden;\n  margin-top: 20px;\n\n  @media (min-width: 1024px) {\n    margin-top: 0px;\n    height: 100%;\n    flex: 1 1 0%;\n    border-top: none;\n    border-bottom: none;\n    border-left: none;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      border-right: none;\n    "])));
});

exports.MessageContainer = MessageContainer;

var ListHeader = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 62px;\n  padding: 10px;\n  box-sizing: border-box;\n  border-bottom: 1px solid rgb(233, 236, 239);\n"])));

exports.ListHeader = ListHeader;

var OrdersOrderByOptionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n"])));

exports.OrdersOrderByOptionContainer = OrdersOrderByOptionContainer;

var InnerTabsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n\n  button {\n    font-size: 13px;\n    white-space: nowrap;\n    padding: 4px 10px;\n    line-height: 14px;\n    border-radius: 4px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 5px;\n    "])));
});

exports.InnerTabsContainer = InnerTabsContainer;

var Title = _styledComponents.default.h2(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 0 5px;\n"])));

exports.Title = Title;

var OrderListContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: calc(100% - 63px);\n  /* border: 1px solid; */\n"])));

exports.OrderListContainer = OrderListContainer;

var OrdersListContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  height: 100%;\n  padding: 15px 15px 0px 15px;\n  box-sizing: border-box;\n  overflow-x: hidden;\n"])));

exports.OrdersListContainer = OrdersListContainer;

var OrderCard = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 1px solid ", ";\n  margin-bottom: 20px;\n  padding: 15px 20px;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  p,\n  h2 {\n    color: ", ";\n    margin: 0px;\n  }\n  \n  h2 {\n    font-size: 16px;\n    font-weight: 600;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.secundary;
}, function (props) {
  return props.theme.colors.lightPrimary;
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background-color: ", "15;\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (props) {
  return props.theme.colors.headingColor;
});

exports.OrderCard = OrderCard;

var OrderHeader = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    margin: 5px 0 10px;\n    > p {\n      font-size: 12px;\n    }\n  }\n\n  > p {\n    font-size: 14px;\n    margin-top: 5px;\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.colorPage;
}, function (_ref3) {
  var _theme$layouts2, _theme$layouts2$gener, _theme$layouts2$gener2, _theme$layouts2$gener3;

  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$gener = _theme$layouts2.general) === null || _theme$layouts2$gener === void 0 ? void 0 : (_theme$layouts2$gener2 = _theme$layouts2$gener.components) === null || _theme$layouts2$gener2 === void 0 ? void 0 : (_theme$layouts2$gener3 = _theme$layouts2$gener2.layout) === null || _theme$layouts2$gener3 === void 0 ? void 0 : _theme$layouts2$gener3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      color: #ccc;\n  "])));
});

exports.OrderHeader = OrderHeader;

var ViewDetails = _styledComponents.default.a(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  color: ", ";\n  font-size: 12px;\n  text-decoration: underline;\n  margin: 0 10px;\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.ViewDetails = ViewDetails;

var CardContent = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1300px) {\n    flex-direction: row;\n  }\n"])));

exports.CardContent = CardContent;

var BusinessInfo = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  p {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 125px;\n\n  }\n  display: flex;\n  align-items: center;\n\n  div.info {\n    ", "\n    p {\n      margin: 0px;\n      color: ", ";\n      font-size: 12px;\n    }\n    p.bold {\n      font-size: 14px;\n      font-weight: 500;\n    }\n  }\n  @media (min-width: 1300px) {\n    width: 45%;\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "])));
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});

exports.BusinessInfo = BusinessInfo;

var WrapperImage = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  ", "\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"])), function (_ref4) {
  var isSkeleton = _ref4.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n    border-radius: 10px;\n  "])));
});

exports.WrapperImage = WrapperImage;

var UnreadMessageCounter = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 12px;\n  ", "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ", "20;\n  border-radius: 6px;\n  font-size: 12px;\n  height: 24px;\n  color: ", ";\n  padding: 0 10px;\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    left: 20px;\n  "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    right: 20px;\n  "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.UnreadMessageCounter = UnreadMessageCounter;

var ImageStyled = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));

var Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.Image = Image;

var DriverSelectorWrapper = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  margin-top: 10px;\n  > div {\n    > div:first-child {\n      border: none;\n      padding: 0px;\n      > div:first-child {\n        padding: 0px\n      }\n    }\n  }\n\n  @media (min-width: 1300px) {\n    width: 55%;\n    margin-top: 0px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme5;

  return (_props$theme5 = props.theme) !== null && _props$theme5 !== void 0 && _props$theme5.rtl ? (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      border-right: 1px solid ", ";\n      padding-right: 15px;\n    "])), function (props) {
    var _props$theme$colors3;

    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.secundary;
  }) : (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      border-left: 1px solid ", ";\n      padding-left: 15px;\n    "])), function (props) {
    var _props$theme$colors4;

    return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.secundary;
  });
});

exports.DriverSelectorWrapper = DriverSelectorWrapper;

var LoadMoreButtonWrap = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 20px;\n   \n   button {\n     width: 100%;\n     padding: 5px;\n     background: ", " !important;\n     color: #fff\n   }\n"])), function (props) {
  var _props$theme$colors5;

  return (_props$theme$colors5 = props.theme.colors) === null || _props$theme$colors5 === void 0 ? void 0 : _props$theme$colors5.primary;
});

exports.LoadMoreButtonWrap = LoadMoreButtonWrap;

var DriverInfo = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n\n  @media (min-width: 1300px) {\n    margin-top: 0px;\n  }\n"])));

exports.DriverInfo = DriverInfo;

var OptionContent = _styledComponents.default.div(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  align-items: center;\n   margin-left: 10px;\n\n"])));

exports.OptionContent = OptionContent;

var DriverNameContainer = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  line-height: 1.3;\n  color: #263238;\n\n  ", "\n"])), function (_ref5) {
  var small = _ref5.small;
  return small && (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n    font-size: 8px;\n  "])));
});

exports.DriverNameContainer = DriverNameContainer;

var DriverName = _styledComponents.default.p(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.3;\n  color: ", ";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n  margin: 0px;\n\n  ", "\n\n  @media (max-width: 576px) {\n    max-width: 90px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (_ref6) {
  var small = _ref6.small;
  return small && (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n    font-size: 11px;\n  "])));
});

exports.DriverName = DriverName;

var DriverText = _styledComponents.default.span(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  ", "\n"])), function (_ref7) {
  var small = _ref7.small;
  return small && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n    font-size: 8px;\n  "])));
});

exports.DriverText = DriverText;

var NotFoundSourceWrapper = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n"])));

exports.NotFoundSourceWrapper = NotFoundSourceWrapper;