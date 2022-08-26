"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpotSelect = exports.Spinner = exports.SavedContainer = exports.OrderBill = exports.NoValidProductMessage = exports.IconContainer = exports.Exclamation = exports.Divider = exports.CouponContainer = exports.CommentContainer = exports.CheckoutAction = exports.CartSticky = exports.CartContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CartContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n"])));

exports.CartContainer = CartContainer;

var CartSticky = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  width: 100%;\n"])), function (_ref) {
  var isCartOnProductsList = _ref.isCartOnProductsList;
  return isCartOnProductsList && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    overflow-y: auto;\n    max-height: 70vh;\n    position: sticky;\n    top: 20px;\n  "])));
});

exports.CartSticky = CartSticky;

var OrderBill = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px 0px;\n  background-color: ", ";\n  table {\n    width: 100%;\n    font-size: 14px;\n\n    td span {\n      unicode-bidi: bidi-override;\n    }\n\n    tr td:nth-child(2) {\n      text-align: right;\n      ", "\n    }\n\n    .icon {\n      display: flex;\n      align-items: center;\n      max-height: 25px;\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td {\n        font-weight: bold;\n        color: ", ";\n        font-size: 16px;\n      }\n    }\n  }\n  table.comments {\n    margin-top: 20px;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n    }\n    textarea {\n      width: 100%;\n      box-sizing: border-box;\n      border-radius: 7.6px;\n      height: 77px;\n      padding-right: 60px;\n    }\n  }\n  table.spot {\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        text-decoration: underline;\n        cursor: pointer;\n      }\n    }\n  }\n"])), function (isCheckout) {
  return isCheckout ? 'transparent' : '#FFF';
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});

exports.OrderBill = OrderBill;

var CouponContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n\n  input, button {\n    border-radius: 7.6px;\n  }\n"])));

exports.CouponContainer = CouponContainer;

var CheckoutAction = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  box-sizing: border-box;\n  p {\n    margin: 0;\n    font-weight: 600;\n    font-size: 18px;\n    color: ", ";\n  }\n\n  button {\n    padding: 10px 30px;\n    min-width: 150px;\n    width: 50%;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.CheckoutAction = CheckoutAction;

var Divider = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n  margin-left: 0;\n\n  @media (min-width: 768px) {\n    width: calc(100% + 60px);\n    margin-left: -30px;\n  }\n"])));

exports.Divider = Divider;

var Exclamation = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  top: 3px;\n"])));

exports.Exclamation = Exclamation;

var Spinner = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(-20%, 15%);\n"])));

exports.Spinner = Spinner;

var CommentContainer = _styledComponents.default.td(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  .spinner-content > div{\n    width: 50px;\n    height: 50px;\n  }\n"])));

exports.CommentContainer = CommentContainer;

var IconContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n  margin-left: 5px;\n  height: 20px;\n  svg:nth-child(1){\n    position: relative;\n    top: -1px;\n  }\n  svg:nth-child(2){\n    position: relative;\n    top: -3px;\n  }\n"])));

exports.IconContainer = IconContainer;

var SavedContainer = _styledComponents.default.span(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  color: ", ";\n  background: ", ";\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"])), function (props) {
  var _props$theme2, _props$theme2$colors;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.primaryContrast;
}, function (props) {
  var _props$theme3, _props$theme3$colors;

  return (0, _polished.lighten)('0.2', (_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : (_props$theme3$colors = _props$theme3.colors) === null || _props$theme3$colors === void 0 ? void 0 : _props$theme3$colors.primary);
});

exports.SavedContainer = SavedContainer;

var SpotSelect = _styledComponents.default.select(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n  border-radius: 7.6px;\n  height: 25px;\n  border: none;\n  font-size: 12px;\n  outline: none;\n  margin: 0 5px 0 15px;\n  padding: 0 3px;\n  cursor: pointer;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -ms-progress-appearance: none;\n\n  ", "\n"])), function (_ref3) {
  var isCheckout = _ref3.isCheckout;
  return isCheckout ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    var _props$theme4;

    return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.backgroundPage;
  }) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    var _props$theme5;

    return (_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.colors.grayDividerColor;
  });
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    margin: 0 15px 0 5px;\n  "])));
});

exports.SpotSelect = SpotSelect;

var NoValidProductMessage = _styledComponents.default.p(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"])));

exports.NoValidProductMessage = NoValidProductMessage;