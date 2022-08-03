"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessesListing = void 0;

var _react = _interopRequireDefault(require("react"));

var _OriginalBusinessesListing = require("./layouts/OriginalBusinessesListing");

var _RedBusinessesListing = require("./layouts/RedBusinessesListing");

var _StarbucksBusinessesListing = require("./layouts/StarbucksBusinessesListing");

var _AppointmentsBusinessListing = require("./layouts/AppointmentsBusinessListing");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BusinessesListing = function BusinessesListing(props) {
  var _theme$layouts, _theme$layouts$busine, _theme$layouts$busine2, _theme$layouts$busine3;

  var theme = (0, _styledComponents.useTheme)();
  var layout = (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$busine = _theme$layouts.business_view) === null || _theme$layouts$busine === void 0 ? void 0 : (_theme$layouts$busine2 = _theme$layouts$busine.components) === null || _theme$layouts$busine2 === void 0 ? void 0 : (_theme$layouts$busine3 = _theme$layouts$busine2.layout) === null || _theme$layouts$busine3 === void 0 ? void 0 : _theme$layouts$busine3.type) || 'original';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalBusinessesListing.OriginalBusinessesListing, props), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_StarbucksBusinessesListing.StarbucksBusinessesListing, props), layout === 'red' && /*#__PURE__*/_react.default.createElement(_RedBusinessesListing.RedBusinessesListing, props), layout === 'appointments' && /*#__PURE__*/_react.default.createElement(_AppointmentsBusinessListing.BusinessListing, props));
};

exports.BusinessesListing = BusinessesListing;