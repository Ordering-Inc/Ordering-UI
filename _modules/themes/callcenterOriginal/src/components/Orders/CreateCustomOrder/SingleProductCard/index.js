"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleProductCard = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../../../utils");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SingleProductCardUI = function SingleProductCardUI(props) {
  var _theme$images, _theme$images2, _product$ribbon, _product$ribbon2, _product$ribbon3, _product$ribbon4, _product$ribbon5, _theme$images3, _product$ribbon6;
  var product = props.product;
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
  var cartProducts = Object.values(orderState.carts).reduce(function (products, _cart) {
    return [].concat(_toConsumableArray(products), _toConsumableArray(_cart === null || _cart === void 0 ? void 0 : _cart.products));
  }, []);
  var productBalance = cartProducts.reduce(function (sum, _product) {
    return sum + (_product.id === (product === null || product === void 0 ? void 0 : product.id) ? _product.quantity : 0);
  }, 0);
  var totalBalance = (productBalance || 0) - removeToBalance;
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  var maxCartProductInventory = (product !== null && product !== void 0 && product.inventoried ? product === null || product === void 0 ? void 0 : product.quantity : undefined) - totalBalance;
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CardContainer, {
    soldOut: maxProductQuantity <= 0,
    className: "product-card"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: maxProductQuantity <= 0,
    isBgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product), 'h_86,c_limit')
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleWrapper, null, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name)), /*#__PURE__*/_react.default.createElement(_styles.PriceWrapper, {
    isOffPrice: (product === null || product === void 0 ? void 0 : product.offer_price) && (product === null || product === void 0 ? void 0 : product.in_offer)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "current-price"
  }, product !== null && product !== void 0 && product.price ? parsePrice(product === null || product === void 0 ? void 0 : product.price) : ''), !(maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement("span", {
    className: "off-price"
  }, product !== null && product !== void 0 && product.offer_price && product !== null && product !== void 0 && product.in_offer ? parsePrice(product === null || product === void 0 ? void 0 : product.offer_price) : ''), (product === null || product === void 0 ? void 0 : product.tags) && (product === null || product === void 0 ? void 0 : product.tags.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapTags, null, product === null || product === void 0 ? void 0 : product.tags.map(function (tag, i) {
    var _tag$image;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: (_tag$image = tag.image) !== null && _tag$image !== void 0 ? _tag$image : ''
    }));
  }))), /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.description)), /*#__PURE__*/_react.default.createElement(_styles.WrapLogo, {
    isBgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.product), 'h_86,c_limit')
  }, (product === null || product === void 0 || (_product$ribbon = product.ribbon) === null || _product$ribbon === void 0 ? void 0 : _product$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: product === null || product === void 0 || (_product$ribbon2 = product.ribbon) === null || _product$ribbon2 === void 0 ? void 0 : _product$ribbon2.color,
    isRoundRect: (product === null || product === void 0 || (_product$ribbon3 = product.ribbon) === null || _product$ribbon3 === void 0 ? void 0 : _product$ribbon3.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (product === null || product === void 0 || (_product$ribbon4 = product.ribbon) === null || _product$ribbon4 === void 0 ? void 0 : _product$ribbon4.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, product === null || product === void 0 || (_product$ribbon5 = product.ribbon) === null || _product$ribbon5 === void 0 ? void 0 : _product$ribbon5.text), /*#__PURE__*/_react.default.createElement(_styles.CardLogo, {
    className: "image",
    soldOut: maxProductQuantity <= 0,
    bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 || (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.product), 'h_86,c_limit')
  })), maxProductQuantity <= 0 && /*#__PURE__*/_react.default.createElement(_styles.SoldOut, {
    isBottom: product === null || product === void 0 || (_product$ribbon6 = product.ribbon) === null || _product$ribbon6 === void 0 ? void 0 : _product$ribbon6.enabled
  }, t('SOLD_OUT', 'SOLD OUT')))));
};
var SingleProductCard = function SingleProductCard(props) {
  var singleProductCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleProductCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleProductCard, singleProductCardProps);
};
exports.SingleProductCard = SingleProductCard;