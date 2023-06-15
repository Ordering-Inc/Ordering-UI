"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
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
var CustomOrderDetails = function CustomOrderDetails(props) {
  var customOrderProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CustomOrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CustomOrderDetails, customOrderProps);
};
exports.CustomOrderDetails = CustomOrderDetails;