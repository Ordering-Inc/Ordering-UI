"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var SingleProductCard = exports.SingleProductCard = function SingleProductCard(props) {
  var _orderState$carts, _cart$products, _cart$products2, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var businessId = props.businessId,
    product = props.product,
    isSoldOut = props.isSoldOut,
    isSkeleton = props.isSkeleton,
    onProductClick = props.onProductClick,
    isCartOnProductsList = props.isCartOnProductsList;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    stateConfig = _useConfig2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var el = (0, _react.useRef)();
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var editMode = typeof (product === null || product === void 0 ? void 0 : product.code) !== 'undefined';
  var removeToBalance = editMode ? product === null || product === void 0 ? void 0 : product.quantity : 0;
  var cart = (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(businessId)];
  var productCart = cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.find(function (prod) {
    return prod.id === (product === null || product === void 0 ? void 0 : product.id);
  });
  var totalBalance = ((productCart === null || productCart === void 0 ? void 0 : productCart.quantity) || 0) - removeToBalance;
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  var productBalance = ((cart === null || cart === void 0 || (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (sum, _product) {
    return sum + (product && _product.id === (product === null || product === void 0 ? void 0 : product.id) ? _product.quantity : 0);
  }, 0)) || 0) - removeToBalance;
  var maxCartProductInventory = (product !== null && product !== void 0 && product.inventoried ? product === null || product === void 0 ? void 0 : product.quantity : undefined) - productBalance;
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    qty = _useState2[0],
    setQty = _useState2[1];
  var _useState3 = (0, _react.useState)(props.product),
    _useState4 = _slicedToArray(_useState3, 2),
    productObj = _useState4[0],
    setProductObj = _useState4[1];
  var checkProdcutImage = function checkProdcutImage() {
    var bgImage;
    if (productObj !== null && productObj !== void 0 && productObj.images) {
      if ((productObj === null || productObj === void 0 ? void 0 : productObj.images.indexOf('http')) > -1) {
        bgImage = optimizeImage(productObj.images, 'h_200,c_limit');
      } else {
        var _theme$images;
        bgImage = optimizeImage((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product, 'h_200,c_limit');
      }
      return bgImage;
    }
  };
  (0, _react.useEffect)(function () {
    setProductObj(product);
  }, [product]);
  var handleQuantity = function handleQuantity(e) {
    setQty(e.target.value);
  };
  (0, _react.useEffect)(function () {
    var _product = _objectSpread({}, productObj);
    _product.quantity = parseInt(qty);
    setProductObj(_product);
  }, [qty, productObj === null || productObj === void 0 ? void 0 : productObj.quantity]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CardContainer, {
    soldOut: isSoldOut || maxProductQuantity <= 0,
    isCartOnProductsList: isCartOnProductsList
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, null, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, null, /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    className: "image",
    soldOut: isSoldOut || maxProductQuantity <= 0,
    bgimage: checkProdcutImage()
  })) : /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 195,
    width: 195
  })), windowSize.width < 768 && /*#__PURE__*/_react.default.createElement(_styles.ProductCost, {
    textLeft: isSoldOut || maxProductQuantity <= 0
  }, parsePrice(productObj === null || productObj === void 0 ? void 0 : productObj.price)), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity <= 0
  }, /*#__PURE__*/_react.default.createElement("h1", null, productObj === null || productObj === void 0 ? void 0 : productObj.name), /*#__PURE__*/_react.default.createElement("p", null, productObj !== null && productObj !== void 0 && productObj.description ? productObj === null || productObj === void 0 ? void 0 : productObj.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus et, purus lorem quis eleifend id diam.')) : /*#__PURE__*/_react.default.createElement(_styles.CardInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })))), /*#__PURE__*/_react.default.createElement(_styles.CartAction, null, windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_styles.ProductCost, {
    textLeft: isSoldOut || maxProductQuantity <= 0
  }, parsePrice(productObj === null || productObj === void 0 ? void 0 : productObj.price)), /*#__PURE__*/_react.default.createElement(_styles.Quantity, {
    isSoldOut: isSoldOut
  }, /*#__PURE__*/_react.default.createElement("span", null, t('QUANTITY', 'Quantity')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    ref: el,
    name: "product-quantity",
    "aria-label": "product-quantity",
    autoComplete: "off",
    defaultValue: qty,
    maxLength: "500",
    onChange: function onChange(e) {
      return handleQuantity(e);
    }
  })), !(isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return !(isSkeleton || isSoldOut) && onProductClick(productObj);
    }
  }, t('ADD_TO_CART', 'ADD TO CART'))), (isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_styles.SoldOut, null, t('SOLD_OUT', 'SOLD OUT'))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};