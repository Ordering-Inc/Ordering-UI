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
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesListing = function BusinessesListing(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3;
  var logosLayout = props.logosLayout;
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var layout = (orderingTheme === null || orderingTheme === void 0 ? void 0 : (_orderingTheme$theme = orderingTheme.theme) === null || _orderingTheme$theme === void 0 ? void 0 : (_orderingTheme$theme$ = _orderingTheme$theme.business_listing_view) === null || _orderingTheme$theme$ === void 0 ? void 0 : (_orderingTheme$theme$2 = _orderingTheme$theme$.components) === null || _orderingTheme$theme$2 === void 0 ? void 0 : (_orderingTheme$theme$3 = _orderingTheme$theme$2.layout) === null || _orderingTheme$theme$3 === void 0 ? void 0 : _orderingTheme$theme$3.type) || 'original';
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (layout === 'original' || logosLayout) && /*#__PURE__*/_react.default.createElement(_OriginalBusinessesListing.OriginalBusinessesListing, props), layout === 'starbucks' && !logosLayout && /*#__PURE__*/_react.default.createElement(_StarbucksBusinessesListing.StarbucksBusinessesListing, props), layout === 'red' && !logosLayout && /*#__PURE__*/_react.default.createElement(_RedBusinessesListing.RedBusinessesListing, props), layout === 'appointments' && !logosLayout && /*#__PURE__*/_react.default.createElement(_AppointmentsBusinessListing.BusinessListing, props));
};
exports.BusinessesListing = BusinessesListing;