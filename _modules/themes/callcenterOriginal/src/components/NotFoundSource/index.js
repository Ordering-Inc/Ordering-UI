"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundSource = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var NotFoundSource = exports.NotFoundSource = function NotFoundSource(props) {
  var _theme$images, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var image = props.image,
    content = props.content,
    btnTitle = props.btnTitle,
    conditioned = props.conditioned,
    onClickButton = props.onClickButton;
  var theme = (0, _styledComponents.useTheme)();
  var errorImage = image || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.notFound);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.NotFound, {
    id: "not-found-source"
  }, errorImage && /*#__PURE__*/_react.default.createElement(_styles.NotFoundImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: errorImage,
    alt: "Not Found",
    width: "300",
    height: "260",
    loading: "lazy"
  })), content && conditioned && !errorImage && /*#__PURE__*/_react.default.createElement("h1", null, content), content && !conditioned && /*#__PURE__*/_react.default.createElement("h1", null, content), !onClickButton && props.children && props.children, onClickButton && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    onClick: function onClick() {
      return onClickButton();
    }
  }, btnTitle))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};