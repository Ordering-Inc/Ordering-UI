"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.StatusImage = exports.PayCardSelected = exports.OrderItem = exports.OrderContent = exports.Container = exports.CardItemContent = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: block;\n  width: 100%;\n"])));

exports.Container = Container;

var Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"])));

exports.Title = Title;

var StatusImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  image {\n    object-fit: contain;\n  }\n"])));

exports.StatusImage = StatusImage;

var OrderContent = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n  margin: 0 auto;\n\n  &:last-child {\n    margin-bottom: 0.9em;\n  }\n"])));

exports.OrderContent = OrderContent;

var OrderItem = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 20px;\n\n  .item-icon {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-right: 20px;\n    width: 24px;\n    height: 24px;\n    min-width: 24px;\n    min-height: 24px;\n    ", "\n\n    .location-icon {\n      font-size: 20px;\n    }\n\n    .clock-icon {\n      font-size: 18px;\n    }\n\n    &.card-icon {\n      svg {\n        font-size: 22px;\n      }\n    }\n\n  }\n\n  .item-text {\n    display: flex;\n    justify-content: space-between;\n    width:100%;\n  }\n\n  .business-logo {\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n    border-radius: 3px;\n    img {\n      width: 20px;\n      height: 18px;\n      border-radius: 2px;\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n        margin-right: 0;\n    "])));
});

exports.OrderItem = OrderItem;

var CardItemContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 90%;\n"])));

exports.CardItemContent = CardItemContent;

var PayCardSelected = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"])));

exports.PayCardSelected = PayCardSelected;