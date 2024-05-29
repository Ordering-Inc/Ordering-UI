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
var _styledComponents = require("styled-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PreviousBusinessOrdered = exports.PreviousBusinessOrdered = function PreviousBusinessOrdered(props) {
  var _theme$header, _businesses$result;
  var isCustomLayout = props.isCustomLayout,
    isCustomerMode = props.isCustomerMode,
    onRedirectPage = props.onRedirectPage,
    handleUpdateBusinesses = props.handleUpdateBusinesses,
    businesses = props.businesses;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
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
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessList, {
    marginCard: isChew && '0 20px 0 0'
  }, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "searchlistorder"
  }, businesses === null || businesses === void 0 || (_businesses$result = businesses.result) === null || _businesses$result === void 0 ? void 0 : _businesses$result.map(function (business, i) {
    var _orderState$options, _business$reviews;
    return /*#__PURE__*/_react.default.createElement(_BusinessController.BusinessController, {
      key: business.id,
      className: "card",
      business: business,
      isBusinessOpen: business.open,
      handleCustomClick: onBusinessClick,
      orderType: orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type,
      isCustomLayout: isCustomLayout,
      isCustomerMode: isCustomerMode,
      businessHeader: business === null || business === void 0 ? void 0 : business.header,
      businessFeatured: business === null || business === void 0 ? void 0 : business.featured,
      businessOffers: business === null || business === void 0 ? void 0 : business.offers,
      businessLogo: business === null || business === void 0 ? void 0 : business.logo,
      businessReviews: business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total,
      businessDeliveryPrice: business === null || business === void 0 ? void 0 : business.delivery_price,
      businessDeliveryTime: business === null || business === void 0 ? void 0 : business.delivery_time,
      businessPickupTime: business === null || business === void 0 ? void 0 : business.pickup_time,
      businessDistance: business === null || business === void 0 ? void 0 : business.distance,
      firstCard: i === 0 && width > 681,
      handleUpdateBusinessList: handleUpdateBusinesses
    });
  }))));
};