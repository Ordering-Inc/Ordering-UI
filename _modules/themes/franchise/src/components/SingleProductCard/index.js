"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleProductCard = exports.SingleProductCard = function SingleProductCard(props) {
  var _orderState$carts, _cart$products, _cart$products2, _props$beforeElements, _props$beforeComponen, _product$ribbon, _product$ribbon2, _product$ribbon3, _product$ribbon4, _product$ribbon5, _theme$images, _product$ribbon6, _props$afterComponent, _props$afterElements;
  var businessId = props.businessId,
    product = props.product,
    isSoldOut = props.isSoldOut,
    isSkeleton = props.isSkeleton,
    onProductClick = props.onProductClick,
    isCartOnProductsList = props.isCartOnProductsList,
    useCustomFunctionality = props.useCustomFunctionality,
    onCustomClick = props.onCustomClick,
    customText = props.customText,
    customStyle = props.customStyle;
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
    onClick: function onClick() {
      return !isSkeleton && !useCustomFunctionality && onProductClick && onProductClick(product) || useCustomFunctionality && onCustomClick && onCustomClick();
    },
    isCartOnProductsList: isCartOnProductsList,
    style: useCustomFunctionality && customStyle
  }, !useCustomFunctionality && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity <= 0
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.PriceWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product === null || product === void 0 ? void 0 : product.price)), (product === null || product === void 0 ? void 0 : product.offer_price) && /*#__PURE__*/_react.default.createElement("span", {
    className: "off-price"
  }, parsePrice(product === null || product === void 0 ? void 0 : product.offer_price))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  }), !isSkeleton ? /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, null, (product === null || product === void 0 || (_product$ribbon = product.ribbon) === null || _product$ribbon === void 0 ? void 0 : _product$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: product === null || product === void 0 || (_product$ribbon2 = product.ribbon) === null || _product$ribbon2 === void 0 ? void 0 : _product$ribbon2.color,
    isRoundRect: (product === null || product === void 0 || (_product$ribbon3 = product.ribbon) === null || _product$ribbon3 === void 0 ? void 0 : _product$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (product === null || product === void 0 || (_product$ribbon4 = product.ribbon) === null || _product$ribbon4 === void 0 ? void 0 : _product$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, product === null || product === void 0 || (_product$ribbon5 = product.ribbon) === null || _product$ribbon5 === void 0 ? void 0 : _product$ribbon5.text), /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    className: "image",
    soldOut: isSoldOut || maxProductQuantity <= 0,
    bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product), 'h_200,c_limit')
  })) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 75,
    width: 75
  }), (isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_styles.SoldOut, {
    isBottom: product === null || product === void 0 || (_product$ribbon6 = product.ribbon) === null || _product$ribbon6 === void 0 ? void 0 : _product$ribbon6.enabled
  }, t('SOLD_OUT', 'SOLD OUT'))), useCustomFunctionality && customText && /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 500
    }
  }, customText)), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};