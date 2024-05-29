"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _original = require("./layouts/original");
var _starbucks = require("./layouts/starbucks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var SingleProductCard = exports.SingleProductCard = function SingleProductCard(props) {
  var _theme$business_view;
  var theme = (0, _styledComponents.useTheme)();
  var layout = (theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.products) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.layout) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.type) || 'original';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_original.SingleProductCard, props), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_starbucks.SingleProductCard, props));
};