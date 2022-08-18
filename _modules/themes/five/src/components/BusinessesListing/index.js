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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useOrderingTheme } from 'ordering-components'
var BusinessesListing = function BusinessesListing(props) {
  // const [orderingTheme] = useOrderingTheme()
  var layout = 'appointments'; // const layout = orderingTheme?.theme?.business_listing_view?.components?.layout?.type || 'original'

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'original' && /*#__PURE__*/_react.default.createElement(_OriginalBusinessesListing.OriginalBusinessesListing, props), layout === 'starbucks' && /*#__PURE__*/_react.default.createElement(_StarbucksBusinessesListing.StarbucksBusinessesListing, props), layout === 'red' && /*#__PURE__*/_react.default.createElement(_RedBusinessesListing.RedBusinessesListing, props), layout === 'appointments' && /*#__PURE__*/_react.default.createElement(_AppointmentsBusinessListing.BusinessListing, props));
};

exports.BusinessesListing = BusinessesListing;