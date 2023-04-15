"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeTitle = exports.OrderTypeSelectorContainer = exports.OrderTypeOverlay = exports.OrderTypeListTitle = exports.OrderTypeListItemContainerStyled = exports.OrderTypeListItemContainer = exports.OrderTypeDescription = exports.OrderStartWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OrderTypeSelectorContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 0px 10px;\n"])));
exports.OrderTypeSelectorContainer = OrderTypeSelectorContainer;
var OrderTypeListItemContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  margin-bottom: 25px;\n  padding: 30px;\n  cursor: pointer;\n  position: relative;\n  opacity: 0.3;\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    opacity: 1;\n  "])));
});
exports.OrderTypeListItemContainerStyled = OrderTypeListItemContainerStyled;
var OrderTypeListItemContainer = function OrderTypeListItemContainer(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(OrderTypeListItemContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.OrderTypeListItemContainer = OrderTypeListItemContainer;
var OrderTypeOverlay = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  border-radius: 7.6px;\n  background: #000000;\n  opacity: 0.3;\n  z-index: initial;\n"])));
exports.OrderTypeOverlay = OrderTypeOverlay;
var OrderTypeTitle = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 16px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 5px;\n  z-index: 2;\n  position: relative;\n"])));
exports.OrderTypeTitle = OrderTypeTitle;
var OrderTypeDescription = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 17px;\n  z-index: 2;\n  position: relative;\n"])));
exports.OrderTypeDescription = OrderTypeDescription;
var OrderStartWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  z-index: 2;\n  position: relative;\n\n  span {\n    font-size: 14px;\n    color: #FFFFFF;\n    color: #FFFFFF;\n    ", "\n  }\n\n  svg {\n    font-size: 16px;\n    color: #FFFFFF;\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});
exports.OrderStartWrapper = OrderStartWrapper;
var OrderTypeListTitle = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  margin: 0 0 30px;\n\n  @media (max-width: 450px) {\n    padding-left: 30px;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-right: 30px;\n      padding-left: 0;\n    "])));
});
exports.OrderTypeListTitle = OrderTypeListTitle;