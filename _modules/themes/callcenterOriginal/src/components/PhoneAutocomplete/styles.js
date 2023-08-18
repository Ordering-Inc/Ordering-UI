"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappBtn = exports.WrapInput = exports.UserEdit = exports.TypesContainer = exports.TypeButton = exports.Title = exports.Slogan = exports.SelectContainer = exports.SearchContainer = exports.PhoneContainer = exports.PhoneAutocompleteContainer = exports.NotFoundUser = exports.Info = exports.ImageWrapper = exports.IconTypeButton = exports.ContinueButton = exports.ContentWrapper = exports.AutoComplete = exports.AdditionalTypesContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PhoneContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: calc(100vh - 97px);\n  display: flex;\n  ", "\n\n  .spinner-content{\n    > div{\n      width: 40px;\n      height: 40px;\n      border-width: 5px;\n    }\n  }\n\n .autocomplete {\n  /*the container must be positioned relative:*/\n  position: relative;\n  }\n  input {\n    border: 1px solid transparent;\n    background-color: #f1f1f1;\n    padding: 10px;\n    font-size: 16px;\n  }\n  input[type=text] {\n    background-color: #f1f1f1;\n    width: 100%;\n  }\n  input[type=submit] {\n    background-color: #f1f1f1;\n    width: 100%;\n  }\n  .autocomplete-items {\n    position: absolute;\n    border: 1px solid #d4d4d4;\n    border-bottom: none;\n    border-top: none;\n    z-index: 99;\n    /*position the autocomplete items to be the same width as the container:*/\n    top: 100%;\n    left: 0;\n    right: 0;\n    overflow: auto;\n    max-height: 200px\n  }\n  .autocomplete-items div {\n    padding: 10px;\n    cursor: pointer;\n    background-color: #fff;\n    border-bottom: 1px solid #d4d4d4;\n  }\n  .autocomplete-items div:hover {\n    /*when hovering an item:*/\n    background-color: #e9e9e9;\n  }\n  .autocomplete-active {\n    /*when navigating through the items using the arrow keys:*/\n    background-color: DodgerBlue !important;\n    color: #ffffff;\n  }\n\n  @media (min-width: 821px) {\n    height: calc(100vh - 65px);\n  }\n"])), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: bottom;\n    background-image: url(", ");\n  "])), bgimage);
});
exports.PhoneContainer = PhoneContainer;
var ContentWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  padding: 0px 20px 0px;\n  width: 70%;\n  position: relative;\n  .select__control {\n    border-radius: 30px;\n  }\n\n  .select__control.select__control--is-focused {\n    border-color: ", " !important;\n    box-shadow: 0 0 0 1px ", " !important;\n  }\n\n  .select__value-container {\n    padding: 10px 8px 0;\n  }\n  .select__indicator.select__loading-indicator {\n    color: ", " !important;\n  }\n\n  .select__indicator.select__dropdown-indicator,\n  .select__indicator-separator {\n    display: none;\n  }\n\n  ", "\n\n    input {\n      width: 90%;\n      margin-bottom: 15px;\n    }\n\n    @media (min-width: 425px) {\n      input {\n        width: 45%;\n      }\n    }\n\n    @media (min-width: 768px) {\n      padding: 0px 40px 0px;\n\n      ", "\n    }\n    @media (min-width: 1400px){\n      width: 60%;\n    }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.primary;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 || (_props$theme2 = _props$theme2.colors) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.primary;
}, function (props) {
  var _props$theme3;
  return (_props$theme3 = props.theme) === null || _props$theme3 === void 0 || (_props$theme3 = _props$theme3.colors) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.primary;
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      padding: 0px 20px 0px;\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding: 0px 40px 0px;\n      "])));
});
exports.ContentWrapper = ContentWrapper;
var WrappBtn = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 50%;\n  position: relative;\n  button {\n    position: absolute;\n    top: 55px;\n    min-width: 130px;\n    max-width: 400px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    z-index: 100;\n  }\n"])));
exports.WrappBtn = WrappBtn;
var Title = _styledComponents.default.h1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font: normal normal normal 80px ", ";\n  letter-spacing: 0px;\n  text-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  font-size: 35px;\n\n  ", "\n"])), function (props) {
  var _props$theme$fonts$sp;
  return ((_props$theme$fonts$sp = props.theme.fonts.special) === null || _props$theme$fonts$sp === void 0 ? void 0 : _props$theme$fonts$sp.name) || 'Georgia';
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
exports.Title = Title;
var Slogan = _styledComponents.default.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  font-size: 18px;\n  letter-spacing: 0px;\n  opacity: 1;\n  margin-bottom: 15px;\n\n  ", "\n\n  @media (min-width: 480px) {\n    font-size: 24px;\n  }\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
exports.Slogan = Slogan;
var WrapInput = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n\n  ", "\n  \n  div{\n    color: #FFF;\n    position: relative;\n    bottom: 25px;\n    left: 15px;\n    ", "\n  }\n\n  svg {\n    color: #FFF;\n    position: absolute;\n    font-size: 22px;\n\n    margin-right: 10px;\n      ", "\n\n    ", "\n\n  }\n"])), function (_ref2) {
  var withIcon = _ref2.withIcon;
  return withIcon && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: calc(100% - 20px);\n    box-sizing: border-box;\n\n    &::before {\n      content: \"\";\n      position: absolute;\n      right: 5px;\n      top: 0;\n      bottom: 18px;\n      width: 15px;\n\n      ", "\n    }\n\n    @media (min-width: 1024px) {\n      width: calc(50% - 20px);\n    }\n  "])), function (props) {
    var _props$theme8;
    return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        left: 5px;\n        right: initial;\n     "])));
  });
}, function (props) {
  var _props$theme9;
  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      left: initial;\n      right: 15px;\n    "])));
}, function (props) {
  var _props$theme10;
  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
}, function (props) {
  var _props$theme11;
  return (_props$theme11 = props.theme) !== null && _props$theme11 !== void 0 && _props$theme11.rtl ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      right: 0px;\n    "])));
});
exports.WrapInput = WrapInput;
var AutoComplete = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 45%; \n  button {\n    position: absolute;\n    left: 100%;\n    transform: translate(-90%, -165%)\n  }\n"])));
exports.AutoComplete = AutoComplete;
var UserEdit = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  > :first-child{\n     margin-bottom: 20px;  \n  }\n"])));
exports.UserEdit = UserEdit;
var Info = _styledComponents.default.p(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral([""])));
exports.Info = Info;
var SelectContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 60%;\n  position: relative;\n  align-items: center;\n  svg{\n    position: absolute;\n    top: 0;\n    left: 20px;\n    transform: translate(50%, 70%);\n    z-index: 10;\n  }\n  > div {\n    width: 100%;\n    .select__placeholder, .select__single-value, input {\n      margin-left: 40px;\n      z-index: 100;\n      bottom: -10px;\n    }\n    .select__menu {\n      position: relative;\n      padding: 20px;\n    }\n    .select__clear-indicator {\n      position: relative;\n      left: 0;\n      transform: translate(-300%, -165%);\n      svg{\n        width: 30px;\n        height: 30px;\n      }\n    }\n    .select__control {\n      height: 45px;\n      padding-left: 10px;\n    }\n    .select__indicator {\n      bottom: 8px;\n      position: relative;\n    }\n    .select__menu{\n      top: 45px;\n    }\n    input {\n      position: relative;\n      top: -5px;\n    }\n  }\n"])));
exports.SelectContainer = SelectContainer;
var SearchContainer = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  width: 90%;\n"])));
exports.SearchContainer = SearchContainer;
var ImageWrapperStyled = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 30%;\n  ", "\n  @media (min-width: 1400px){\n    width: 40%;\n  }\n"])), function (_ref3) {
  var bgimage = _ref3.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var ImageWrapper = function ImageWrapper(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(ImageWrapperStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.ImageWrapper = ImageWrapper;
var TypeButton = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 215px;\n  height: 75px;\n  border-radius: 7.6px;\n  padding: 16px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.10);\n  margin-right: 32px;\n  margin-bottom: 32px;\n  cursor: pointer;\n  background: ", ";\n  p{\n    margin: 0;\n    margin-left: 33px;\n    ", "\n  }\n"])), function (_ref4) {
  var _theme$colors, _theme$colors2;
  var activated = _ref4.activated,
    theme = _ref4.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary : theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.white;
}, function (_ref5) {
  var _theme$colors3;
  var activated = _ref5.activated,
    theme = _ref5.theme;
  return activated && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.white);
});
exports.TypeButton = TypeButton;
var IconTypeButton = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 44px;\n  background: ", ";\n  border-radius: 44px;\n"])), function (_ref6) {
  var _theme$colors4;
  var activated = _ref6.activated,
    theme = _ref6.theme;
  return activated ? theme === null || theme === void 0 || (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.white : '#F3F9FF';
});
exports.IconTypeButton = IconTypeButton;
var TypesContainer = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.TypesContainer = TypesContainer;
var AdditionalTypesContainer = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n  margin-bottom: 20px;\n  button {\n    padding: 4px 10px;\n    border-radius: 50px;\n    font-size: 10px;\n    line-height: 0;\n    height: 25px;\n    margin-right: 20px;\n  }\n  .activated {\n    color: ", "\n  }\n"])), function (_ref7) {
  var _theme$colors5;
  var theme = _ref7.theme;
  return theme === null || theme === void 0 || (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.darkTextColor;
});
exports.AdditionalTypesContainer = AdditionalTypesContainer;
var PhoneAutocompleteContainer = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  position: relative;\n  h2 {\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n"])));
exports.PhoneAutocompleteContainer = PhoneAutocompleteContainer;
var ContinueButton = _styledComponents.default.span(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 35px;\n  bottom: 5px;\n  width: \n  button {\n    cursor: pointer;\n  }\n"])));
exports.ContinueButton = ContinueButton;
var NotFoundUser = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  margin: 70px 0px;\n  text-align: center;\n"])));
exports.NotFoundUser = NotFoundUser;