"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousBusinessOrdered = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _BusinessController = require("../../BusinessController");
var _AutoScroll = require("../../AutoScroll");
var _styles = require("./styles");
var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PreviousBusinessOrdered = function PreviousBusinessOrdered(props) {
  var _businesses$result;
  var isCustomLayout = props.isCustomLayout,
    isCustomerMode = props.isCustomerMode,
    onRedirectPage = props.onRedirectPage,
    handleUpdateBusinessList = props.handleUpdateBusinessList,
    businesses = props.businesses;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var onBusinessClick = function onBusinessClick(business) {
    onRedirectPage({
      page: 'business',
      params: {
        store: business.slug
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, {
    isLoading: businesses === null || businesses === void 0 ? void 0 : businesses.loading
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "searchlistorder"
  }, businesses === null || businesses === void 0 ? void 0 : (_businesses$result = businesses.result) === null || _businesses$result === void 0 ? void 0 : _businesses$result.map(function (business, i) {
    var _orderState$options, _business$reviews;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: onBusinessClick,
      orderType: orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 ? void 0 : (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      firstCard: i === 0 && width > 681,
      handleUpdateBusinessList: handleUpdateBusinessList
    });
  }))));
};
exports.PreviousBusinessOrdered = PreviousBusinessOrdered;