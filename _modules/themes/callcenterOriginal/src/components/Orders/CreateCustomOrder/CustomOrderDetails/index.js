"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomOrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _SelectCustomer = require("../SelectCustomer");
var _SelectBusinesses = require("../SelectBusinesses");
var _Map = require("../Map");
var _SelectProducts = require("../SelectProducts");
var _Checkout = require("../Checkout");
var _Shared = require("../../../Shared");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CustomOrderDetailsUI = function CustomOrderDetailsUI(props) {
  var phone = props.phone,
    onChangeNumber = props.onChangeNumber,
    customersPhones = props.customersPhones,
    setCustomersPhones = props.setCustomersPhones,
    handleParentSidebarMove = props.handleParentSidebarMove,
    businessList = props.businessList,
    getBusinessList = props.getBusinessList,
    selectedUser = props.selectedUser,
    selectedBusiness = props.selectedBusiness,
    setSelectedUser = props.setSelectedUser,
    setSelectedBusiness = props.setSelectedBusiness,
    productList = props.productList,
    getProducts = props.getProducts,
    handeUpdateProductCart = props.handeUpdateProductCart,
    cart = props.cart,
    onClose = props.onClose,
    handleOpenCustomOrderDetail = props.handleOpenCustomOrderDetail;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    changeAddress = _useOrder2[1].changeAddress;
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var handleCloseAlert = function handleCloseAlert() {
    setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
      error: null
    }));
    setAlertState({
      open: false,
      content: []
    });
  };
  var customerAddress = (0, _react.useMemo)(function () {
    var address = null;
    if (selectedUser !== null && selectedUser !== void 0 && selectedUser.addresses) {
      address = selectedUser.addresses.find(function (address) {
        return address === null || address === void 0 ? void 0 : address.default;
      });
    }
    return address;
  }, [selectedUser]);
  (0, _react.useEffect)(function () {
    if (!(customerAddress !== null && customerAddress !== void 0 && customerAddress.id)) return;
    changeAddress(customerAddress.id);
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.id]);
  (0, _react.useEffect)(function () {
    if (!(customerAddress !== null && customerAddress !== void 0 && customerAddress.location)) return;
    getBusinessList(customerAddress.location);
  }, [customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location]);
  (0, _react.useEffect)(function () {
    if (customersPhones !== null && customersPhones !== void 0 && customersPhones.error) {
      setAlertState({
        open: true,
        content: [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]
      });
    }
  }, [customersPhones === null || customersPhones === void 0 ? void 0 : customersPhones.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsContainer, {
    className: "custom-order-content"
  }, /*#__PURE__*/_react.default.createElement("h2", null, t('CREATE_CUSTOM_ORDER', 'Create custom order')), /*#__PURE__*/_react.default.createElement(_SelectCustomer.SelectCustomer, {
    phone: phone,
    customersPhones: customersPhones,
    selectedUser: selectedUser,
    setSelectedUser: setSelectedUser,
    onChangeNumber: onChangeNumber,
    handleParentSidebarMove: handleParentSidebarMove,
    customerAddress: customerAddress
  }), (customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SelectBusinesses.SelectBusinesses, {
    businessList: businessList,
    selectedBusiness: selectedBusiness,
    setSelectedBusiness: setSelectedBusiness
  }), /*#__PURE__*/_react.default.createElement(_Map.Map, {
    customer: selectedUser,
    customerLocation: customerAddress === null || customerAddress === void 0 ? void 0 : customerAddress.location,
    business: selectedBusiness
  }), selectedBusiness && /*#__PURE__*/_react.default.createElement(_SelectProducts.SelectProducts, {
    productList: productList,
    getProducts: getProducts,
    handeUpdateProductCart: handeUpdateProductCart,
    cart: cart,
    business: selectedBusiness
  }), cart && (cart === null || cart === void 0 ? void 0 : cart.products.length) > 0 && /*#__PURE__*/_react.default.createElement(_Checkout.Checkout, {
    cartUuid: cart.uuid,
    onPlaceOrderClick: function onPlaceOrderClick(data, paymethod, cart) {
      (cart === null || cart === void 0 ? void 0 : cart.uuid) && handleOpenCustomOrderDetail(cart.uuid);
      onClose();
    }
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState.open,
    content: alertState.content,
    onClose: handleCloseAlert,
    onAccept: handleCloseAlert
  })));
};
var CustomOrderDetails = exports.CustomOrderDetails = function CustomOrderDetails(props) {
  var customOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomOrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CustomOrderDetails, customOrderProps);
};