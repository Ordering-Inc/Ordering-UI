"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WowPointsWrapper = exports.TitleContainer = exports.ReviewWrapper = exports.Price = exports.Map = exports.Logo = exports.FavoriteWrapper = exports.Content = exports.Container = exports.ButtonWrapper = exports.BusinessLogoWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin: 10px;\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  display: inline-block;\n  text-align: left;\n  transition: all 0.3s ease;\n\n  > span {\n    display: flex;\n  }\n\n  ", "\n\n  &:hover {\n    box-shadow: rgb(0 0 0 / 20%) 0px 8px 24px;\n  }\n\n  button.load-orders {\n    padding: 10px 30px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  \n  ", "\n\n  @media (min-width: 480px) {\n    min-width: 430px;\n    max-height: ", ";\n    width: 430px;\n  }\n\n  @media(min-width: 993px){\n    ", "\n  }\n"])), function (_ref) {
  var isCustomerMode = _ref.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    min-width: 300px;\n    width: 300px;\n    display: inline-block;\n  "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    min-width: 380px;\n    width: 380px;\n    height: ", ";\n    max-height: ", ";\n  "])), function (_ref2) {
    var isBusinessesPage = _ref2.isBusinessesPage;
    return isBusinessesPage && '300px';
  }, function (_ref3) {
    var isBusinessesPage = _ref3.isBusinessesPage;
    return isBusinessesPage ? '300px' : '220px';
  });
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
}, function (props) {
  return (props.nobg || props.isBusinessesPage) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background: transparent;\n  "])));
}, function (props) {
  return props.flex && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "])));
}, function (_ref4) {
  var _theme$layouts, _theme$layouts$orders, _theme$layouts$orders2, _theme$layouts$orders3;

  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$orders = _theme$layouts.orders) === null || _theme$layouts$orders === void 0 ? void 0 : (_theme$layouts$orders2 = _theme$layouts$orders.components) === null || _theme$layouts$orders2 === void 0 ? void 0 : (_theme$layouts$orders3 = _theme$layouts$orders2.layout) === null || _theme$layouts$orders3 === void 0 ? void 0 : _theme$layouts$orders3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      border-radius: 0px;\n  "])));
}, function (_ref5) {
  var isBusinessesPage = _ref5.isBusinessesPage;
  return isBusinessesPage ? '300px' : '250px';
}, function (_ref6) {
  var isBusinessesPage = _ref6.isBusinessesPage;
  return isBusinessesPage && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin: 30px 20px;\n      width: calc(33% - 40px);\n    "])));
});

exports.Container = Container;

var Content = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  border-radius: 16px;\n  padding: 10px;\n\n  ", "\n\n  ", "\n"])), function (_ref7) {
  var _theme$layouts2, _theme$layouts2$order, _theme$layouts2$order2, _theme$layouts2$order3, _theme$colors;

  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$order = _theme$layouts2.orders) === null || _theme$layouts2$order === void 0 ? void 0 : (_theme$layouts2$order2 = _theme$layouts2$order.components) === null || _theme$layouts2$order2 === void 0 ? void 0 : (_theme$layouts2$order3 = _theme$layouts2$order2.layout) === null || _theme$layouts2$order3 === void 0 ? void 0 : _theme$layouts2$order3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      background: #000;\n      color: #fff;\n      border-radius: 0;\n      border: 1px solid #fff;\n      .order-status {\n        color: ", ";\n      }\n      .orders-detail {\n        margin-top: 5px;\n      }\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.gold);
}, function (_ref8) {
  var isCustomerMode = _ref8.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    align-items: center;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    align-items: flex-start;\n    flex: 1;\n  "])));
});

exports.Content = Content;

var Price = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 35%;\n  \n  ", "\n\n  h2 {\n    font-size: 16px;\n    margin-block-end: ", ";\n    margin-block-start: 0.1em;\n    font-weight: normal;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: ", ";\n    color: #ff9300;\n    font-size: 0.8em;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    margin-left: 5px;\n  }\n\n  p[name='view-cart']{\n    color: ", ";\n    cursor: pointer;\n  }\n\n  @media (min-width: 480px) {\n    ", "\n  }\n"])), function (_ref9) {
  var isCustomerMode = _ref9.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  text-align: end;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  "]))) : (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: flex-end;\n    flex-direction: column;\n    align-items: flex-end;\n  "])));
}, function (_ref10) {
  var isBusinessesPage = _ref10.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (_ref11) {
  var isBusinessesPage = _ref11.isBusinessesPage;
  return isBusinessesPage ? '0.1em' : '1em';
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref12) {
  var isCustomerMode = _ref12.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      flex-direction: row;\n      align-items: center;\n    "])));
});

exports.Price = Price;

var BusinessLogoWrapperStyled = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 55px;\n  min-width: 55px;\n  height: 55px;\n  min-height: 55px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  justify-content: center;\n  align-items: center;\n  border-radius: 7.6px;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n\n  margin-left: 8px;\n\n  ", "\n\n  @media (min-width: 576px) {\n    width: 86px;\n    min-width: 86px;\n    height: 86px;\n    min-height: 86px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 8px;\n  "])));
});

var BusinessLogoWrapper = function BusinessLogoWrapper(props) {
  var style = {};

  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoWrapperStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogoWrapper = BusinessLogoWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  display: flex;\n  align-items: center;\n\n  button {\n    border-radius: 50px;\n    font-size: 10px;\n    line-height: 15px;\n    padding: 4px 8px;\n    border: 1px solid ", ";\n    margin: 5px;\n\n    &.reorder {\n      background: ", ";\n      &:hover {\n        background: ", ";\n      }\n    }\n  }\n  ", "\n"])), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref13) {
  var _theme$layouts3, _theme$layouts3$order, _theme$layouts3$order2, _theme$layouts3$order3, _theme$colors2, _theme$colors3;

  var theme = _ref13.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$order = _theme$layouts3.orders) === null || _theme$layouts3$order === void 0 ? void 0 : (_theme$layouts3$order2 = _theme$layouts3$order.components) === null || _theme$layouts3$order2 === void 0 ? void 0 : (_theme$layouts3$order3 = _theme$layouts3$order2.layout) === null || _theme$layouts3$order3 === void 0 ? void 0 : _theme$layouts3$order3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      button {\n        border: 0;\n        border-radius: 0;\n        color: #fff;\n        background: ", ";\n        \n        &.reorder {\n          background: ", ";\n          &:hover {\n            background: #b92d1b;\n          }\n        }\n      }\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary, theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.primary);
});

exports.ButtonWrapper = ButtonWrapper;

var Logo = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n  border-radius: 7.6px;\n\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 7.6px;\n  }\n\n  @media (min-width: 480px){\n    width: 86px;\n    height: 86px;\n  }\n"])));

exports.Logo = Logo;

var TitleContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.TitleContainer = TitleContainer;

var Map = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  min-height: ", ";\n  img{\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-radius: ", ";\n    image-rendering: -webkit-optimize-contrast;\n    object-fit: cover;\n  }\n  @media(min-width: 480px){\n    height: ", ";\n    min-height: ", "\n  }\n"])), function (_ref14) {
  var isBusinessesPage = _ref14.isBusinessesPage;
  return isBusinessesPage ? '200px' : '88px';
}, function (_ref15) {
  var isBusinessesPage = _ref15.isBusinessesPage;
  return isBusinessesPage && '175px';
}, function (_ref16) {
  var isBusinessesPage = _ref16.isBusinessesPage;
  return isBusinessesPage && '16px';
}, function (_ref17) {
  var isBusinessesPage = _ref17.isBusinessesPage;
  return isBusinessesPage ? '200px' : '100px';
}, function (_ref18) {
  var isBusinessesPage = _ref18.isBusinessesPage;
  return isBusinessesPage && '200px';
});

exports.Map = Map;

var FavoriteWrapper = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  display: flex;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n  top: 41px;\n  right: 10px;\n  ", "\n  svg {\n    color: ", ";\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  return props.theme.colors.danger500;
});

exports.FavoriteWrapper = FavoriteWrapper;

var ReviewWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  .review-sent {\n    border-radius: 7.6px;\n  }\n"])));

exports.ReviewWrapper = ReviewWrapper;

var WowPointsWrapper = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 10px;\n  top: 58px;\n  p{\n    color: ", ";\n    margin: 0;\n    font-size: 14px;\n  }\n"])), function (_ref19) {
  var _theme$colors4;

  var theme = _ref19.theme;
  return theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.gold;
});

exports.WowPointsWrapper = WowPointsWrapper;