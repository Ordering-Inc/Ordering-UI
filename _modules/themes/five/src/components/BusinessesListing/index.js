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
  var _theme$business_listi, _theme$business_listi2, _theme$business_listi3;
  var logosLayout = props.logosLayout;
  var theme = (0, _styledComponents.useTheme)();
  var layout = (theme === null || theme === void 0 ? void 0 : (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 ? void 0 : (_theme$business_listi2 = _theme$business_listi.components) === null || _theme$business_listi2 === void 0 ? void 0 : (_theme$business_listi3 = _theme$business_listi2.layout) === null || _theme$business_listi3 === void 0 ? void 0 : _theme$business_listi3.type) || 'original';
  var isStarbucksLayout = ['starbucks', 'mapview'].includes(layout);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (layout === 'original' || logosLayout) && /*#__PURE__*/_react.default.createElement(_OriginalBusinessesListing.OriginalBusinessesListing, props), isStarbucksLayout && !logosLayout && /*#__PURE__*/_react.default.createElement(_StarbucksBusinessesListing.StarbucksBusinessesListing, props), layout === 'red' && !logosLayout && /*#__PURE__*/_react.default.createElement(_RedBusinessesListing.RedBusinessesListing, props), layout === 'appointments' && !logosLayout && /*#__PURE__*/_react.default.createElement(_AppointmentsBusinessListing.BusinessListing, props));
};
exports.BusinessesListing = BusinessesListing;