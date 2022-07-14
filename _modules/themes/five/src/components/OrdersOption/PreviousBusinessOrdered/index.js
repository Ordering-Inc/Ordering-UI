"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousBusinessOrderedUI = exports.PreviousBusinessOrdered = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _BusinessController = require("../../BusinessController");

var _AutoScroll = require("../../AutoScroll");

var _styles = require("./styles");

var _useWindowSize2 = require("../../../../../../hooks/useWindowSize");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PreviousBusinessOrderedUI = function PreviousBusinessOrderedUI(props) {
  var _businessesList$busin2, _businessesList$busin3, _businessesList$busin4;

  var businessesList = props.businessesList,
      isCustomLayout = props.isCustomLayout,
      isCustomerMode = props.isCustomerMode,
      setBusinessLoading = props.setBusinessLoading,
      onRedirectPage = props.onRedirectPage,
      businessId = props.businessId,
      isLoadingOrders = props.isLoadingOrders;

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

  (0, _react.useEffect)(function () {
    var _businessesList$busin;

    if (businessesList !== null && businessesList !== void 0 && businessesList.loading && (businessesList === null || businessesList === void 0 ? void 0 : (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.length) === 0) {
      setBusinessLoading(true);
    } else {
      setBusinessLoading(false);
    }
  }, [businessesList === null || businessesList === void 0 ? void 0 : businessesList.loading]);
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessListWrapper, {
    isLoading: (businessesList === null || businessesList === void 0 ? void 0 : businessesList.loading) || ((_businessesList$busin2 = businessesList.businesses) === null || _businessesList$busin2 === void 0 ? void 0 : _businessesList$busin2.length) === 0 || isLoadingOrders
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "searchlistorder"
  }, (_businessesList$busin3 = businessesList.businesses) === null || _businessesList$busin3 === void 0 ? void 0 : (_businessesList$busin4 = _businessesList$busin3.filter(function (business) {
    return businessId === null || businessId === void 0 ? void 0 : businessId.includes(business === null || business === void 0 ? void 0 : business.id);
  })) === null || _businessesList$busin4 === void 0 ? void 0 : _businessesList$busin4.map(function (business, i) {
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
      firstCard: i === 0 && width > 681
    });
  }))));
};

exports.PreviousBusinessOrderedUI = PreviousBusinessOrderedUI;

var PreviousBusinessOrdered = function PreviousBusinessOrdered(props) {
  var previousBusinessOrderedController = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PreviousBusinessOrderedUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 50,
      controlType: 'infinity'
    }
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessList, previousBusinessOrderedController);
};

exports.PreviousBusinessOrdered = PreviousBusinessOrdered;