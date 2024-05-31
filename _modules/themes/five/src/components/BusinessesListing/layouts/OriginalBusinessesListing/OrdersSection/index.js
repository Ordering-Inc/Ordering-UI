"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _OrdersOption = require("../../../../OrdersOption");
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrdersSection = exports.OrdersSection = function OrdersSection(props) {
  var _getCustomArray;
  var titleContent = props.titleContent,
    onRedirectPage = props.onRedirectPage,
    businessesIds = props.businessesIds,
    getCustomArray = props.getCustomArray,
    businessesList = props.businessesList,
    isCustomerMode = props.isCustomerMode,
    userCustomer = props.userCustomer,
    disableSkeletons = props.disableSkeletons;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var propsToFetchBusiness = ['name', 'logo', 'slug', 'id'];
  var propsToFetch = ['cart', 'business', 'status', 'id', 'uuid', 'cart_group_id', 'business_id', 'delivery_datetime', 'delivery_datetime_utc', 'total', 'summary'];
  var handleRedirectToCheckout = function handleRedirectToCheckout(uuid) {
    onRedirectPage && onRedirectPage({
      page: 'checkout',
      params: {
        cartUuid: uuid
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, onRedirectPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    propsToFetch: propsToFetch,
    propsToFetchBusiness: propsToFetchBusiness,
    horizontal: true,
    isBusinessesPage: true,
    onRedirectPage: onRedirectPage,
    titleContent: t('OPEN_CARTS', 'Open carts'),
    businessesIds: businessesIds,
    customArray: (_getCustomArray = getCustomArray(orderState.carts)) === null || _getCustomArray === void 0 ? void 0 : _getCustomArray.filter(function (cart) {
      return cart.products.length > 0;
    }),
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading,
    isCustomerMode: isCustomerMode,
    franchiseId: props.franchiseId,
    handleRedirectToCheckout: handleRedirectToCheckout,
    disableSkeletons: disableSkeletons
  }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    propsToFetch: propsToFetch,
    propsToFetchBusiness: propsToFetchBusiness,
    activeOrders: true,
    horizontal: true,
    asDashboard: true,
    isBusinessesPage: true,
    titleContent: t('ACTIVE_ORDERS', 'Active orders'),
    businessesIds: businessesIds,
    onRedirectPage: onRedirectPage,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    isCustomLayout: true,
    isBusinessesLoading: businessesList.loading,
    isCustomerMode: isCustomerMode,
    franchiseId: props.franchiseId,
    handleRedirectToCheckout: handleRedirectToCheckout,
    disableSkeletons: disableSkeletons
  }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    propsToFetch: propsToFetch,
    propsToFetchBusiness: propsToFetchBusiness,
    pastOrders: true,
    horizontal: true,
    asDashboard: true,
    isBusinessesPage: true,
    businessesIds: businessesIds,
    onRedirectPage: onRedirectPage,
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    isCustomLayout: true,
    titleContent: titleContent,
    isBusinessesLoading: businessesList.loading,
    isCustomerMode: isCustomerMode,
    franchiseId: props.franchiseId,
    handleRedirectToCheckout: handleRedirectToCheckout,
    disableSkeletons: disableSkeletons
  })));
};