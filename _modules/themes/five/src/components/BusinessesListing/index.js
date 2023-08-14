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
var _OloBusinessesListing = require("./franchises/OloBusinessesListing");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BusinessesListing = function BusinessesListing(props) {
  var _theme$my_products, _theme$my_products2, _theme$business_listi;
  var logosLayout = props.logosLayout;
  var theme = (0, _styledComponents.useTheme)();
  var websiteTheme = theme === null || theme === void 0 || (_theme$my_products = theme.my_products) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.website_theme) === null || _theme$my_products === void 0 || (_theme$my_products = _theme$my_products.components) === null || _theme$my_products === void 0 ? void 0 : _theme$my_products.type;
  var franchiseLayout = theme === null || theme === void 0 || (_theme$my_products2 = theme.my_products) === null || _theme$my_products2 === void 0 || (_theme$my_products2 = _theme$my_products2.components) === null || _theme$my_products2 === void 0 || (_theme$my_products2 = _theme$my_products2.website_theme) === null || _theme$my_products2 === void 0 || (_theme$my_products2 = _theme$my_products2.components) === null || _theme$my_products2 === void 0 ? void 0 : _theme$my_products2.franchise_slug;
  var layout = (theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.layout) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.type) || 'original';
  var isStarbucksLayout = ['starbucks', 'mapview'].includes(layout);
  var oloLayout = ['franchise_1', 'franchise_2'];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, websiteTheme === 'franchise' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, oloLayout.includes(franchiseLayout) && /*#__PURE__*/_react.default.createElement(_OloBusinessesListing.OloBusinessesListing, props), !franchiseLayout && /*#__PURE__*/_react.default.createElement(_OriginalBusinessesListing.OriginalBusinessesListing, props)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (layout === 'original' || logosLayout) && /*#__PURE__*/_react.default.createElement(_OriginalBusinessesListing.OriginalBusinessesListing, props), isStarbucksLayout && !logosLayout && /*#__PURE__*/_react.default.createElement(_StarbucksBusinessesListing.StarbucksBusinessesListing, props), layout === 'red' && !logosLayout && /*#__PURE__*/_react.default.createElement(_RedBusinessesListing.RedBusinessesListing, props), layout === 'appointments' && !logosLayout && /*#__PURE__*/_react.default.createElement(_AppointmentsBusinessListing.BusinessListing, props)));
};
exports.BusinessesListing = BusinessesListing;