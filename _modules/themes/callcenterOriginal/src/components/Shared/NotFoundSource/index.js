"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundSource = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NotFoundSource = function NotFoundSource(props) {
  var _theme$images, _theme$images$general;
  var content = props.content,
    btnTitle = props.btnTitle,
    onClickButton = props.onClickButton;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_styles2.NotFound, {
    id: "not-found-source"
  }, /*#__PURE__*/_react.default.createElement(_styles2.NotFoundImage, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.notFound,
    alt: "Not Found"
  })), /*#__PURE__*/_react.default.createElement("h1", null, content), !onClickButton && props.children && props.children, onClickButton && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "darkBlue",
    onClick: function onClick() {
      return onClickButton();
    }
  }, btnTitle)));
};
exports.NotFoundSource = NotFoundSource;