"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.PlaceNumber = exports.PlaceName = exports.Table = exports.InputWrapper = exports.ModalIcon = exports.TypeContainer = exports.Logo = exports.OrderTypeListTitle = exports.OrderStartWrapper = exports.OrderTypeDescription = exports.OrderTypeTitle = exports.OrderTypeWrapper = exports.OrderTypeListItemContainer = exports.OrderTypeListItemContainerStyled = exports.OrderTypeSelectorContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderTypeSelectorContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  text-align: left;\n  padding-top: 10px;\n  padding: 10px;\n  box-sizing: border-box;\n"])));

exports.OrderTypeSelectorContainer = OrderTypeSelectorContainer;

var OrderTypeListItemContainerStyled = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  border-radius: 7.6px;\n  margin-bottom: 25px;\n  background: rgba(0,0,0,0.2);\n  cursor: pointer;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    opacity: 0.6;\n  "])));
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

var OrderTypeWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: rgba(0,0,0,0.5);\n"])));

exports.OrderTypeWrapper = OrderTypeWrapper;

var OrderTypeTitle = _styledComponents.default.h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 16px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 5px;\n  padding: 0px 15%;\n  padding-top: 20px;\n"])));

exports.OrderTypeTitle = OrderTypeTitle;

var OrderTypeDescription = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: #FFFFFF;\n  margin-top: 0;\n  margin-bottom: 20px;\n  padding: 0px 15%;\n"])));

exports.OrderTypeDescription = OrderTypeDescription;

var OrderStartWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  user-select: none;\n  cursor: pointer;\n  padding-bottom: 20px;\n  padding-left: 15%;\n\n  span {\n    color: #FFFFFF;\n    ", "\n  }\n\n  svg {\n    font-size: 16px;\n    color: #FFFFFF;\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n    "])));
});

exports.OrderStartWrapper = OrderStartWrapper;

var OrderTypeListTitle = _styledComponents.default.h1(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});

exports.OrderTypeListTitle = OrderTypeListTitle;

var Logo = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 65px;\n  height: 65px;\n  margin-bottom: 20px;\n  img {\n    width: 100%;\n    box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.2);\n  }\n"])));

exports.Logo = Logo;

var TypeContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 85%;\n  button: {\n    width: 100%;\n  }\n"])));

exports.TypeContainer = TypeContainer;

var ModalIcon = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n\n"])));

exports.ModalIcon = ModalIcon;

var InputWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  input{\n    width: 100%;\n  }\n"])));

exports.InputWrapper = InputWrapper;

var Table = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n display: flex;\n flex-direction: column;\n"])));

exports.Table = Table;

var PlaceName = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  opacity: ", ";\n"])), function (_ref3) {
  var isDisabled = _ref3.isDisabled;
  return isDisabled ? 0.5 : 1;
});

exports.PlaceName = PlaceName;

var PlaceNumber = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n\n"])));

exports.PlaceNumber = PlaceNumber;

var TitleContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: ", ";\n  align-items: center;\n"])), function (_ref4) {
  var auth = _ref4.auth;
  return auth ? 'space-between' : 'center';
});

exports.TitleContainer = TitleContainer;