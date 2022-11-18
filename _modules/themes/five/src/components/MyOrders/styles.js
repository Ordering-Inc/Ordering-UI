"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderGroupFilterWrapper = exports.NoOrdersWrapper = exports.MyOrdersMenuContainer = exports.Divider = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 20px;\n  overflow: hidden;\n  min-height: auto;\n  width: 100%;\n  box-sizing: border-box;\n  position: relative;\n\n  > h1 {\n    font-weight: 600;\n    font-size: 32px;\n    line-height: 48px;\n    margin-bottom: 7px;\n    margin-top: 0px;\n    text-transform: capitalize;\n  }\n\n  @media (min-width: 769px) {\n    ", "\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n"])), function (_ref) {
  var hideOrders = _ref.hideOrders;
  return !hideOrders ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      padding: 40px;\n      width: 80%;\n    \n      @media (min-width: 993px) {\n        min-height: calc(100vh - 382px);\n      }\n    "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      padding: 0;\n      width: 100%;\n\n      @media (min-width: 993px) {\n        min-height: 'auto';\n      }\n    "])));
});

exports.Container = Container;

var Divider = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  background: #F8F9FA;\n  height: 8px;\n  width: 100%;\n"])));

exports.Divider = Divider;

var OrderGroupFilterWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 15px;\n\n  button {\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    border-radius: 50px;\n    margin-right: 10px;\n    ", "\n    > svg {\n      margin-left: 5px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 0;\n      margin-left: 10px;\n    "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n      "])));
});

exports.OrderGroupFilterWrapper = OrderGroupFilterWrapper;

var NoOrdersWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 50px 0px;\n  position: absolute;\n  box-sizing: border-box;\n  height: calc(100% - 120px);\n  width: 100%;\n\n  > p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0px;\n    margin-bottom: 25px;\n  }\n\n  button {\n    height: 44px;\n  }\n"])));

exports.NoOrdersWrapper = NoOrdersWrapper;

var MyOrdersMenuContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n  padding: 5px 0px 0px 0px;\n  background: ", ";\n  z-index: 1000;\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #D9D9D9;\n  text-align: center;\n  width: 100%;\n  margin-bottom: 30px;\n  div.category {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    padding: 10px 0px;\n    margin: 0 15px;\n    &:nth-of-type(1) {\n      margin-left: 0;\n      ", "\n    }\n  }\n\n  div.special {\n    ", "\n  }\n\n  @media (min-width: 381px) {\n    padding: 15px 0px 0px 0px;\n  }\n  @media (min-width: 992px) {\n    width: auto;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n        margin-right: 15px;\n      "])));
}, function (props) {
  return !props.featured && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      display: none\n    "])));
});

exports.MyOrdersMenuContainer = MyOrdersMenuContainer;