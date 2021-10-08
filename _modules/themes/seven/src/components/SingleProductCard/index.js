"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SingleProductCard = function SingleProductCard(props) {
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
  var productCart = cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.find(function (prod) {
    return prod.id === (product === null || product === void 0 ? void 0 : product.id);
  });
  var totalBalance = ((productCart === null || productCart === void 0 ? void 0 : productCart.quantity) || 0) - removeToBalance;
  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  var productBalance = ((cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (sum, _product) {
    return sum + (product && _product.id === (product === null || product === void 0 ? void 0 : product.id) ? _product.quantity : 0);
  }, 0)) || 0) - removeToBalance;
  var maxCartProductInventory = (product !== null && product !== void 0 && product.inventoried ? product === null || product === void 0 ? void 0 : product.quantity : undefined) - productBalance;
  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);

  var checkProdcutImage = function checkProdcutImage() {
    var bgImage;

    if (product !== null && product !== void 0 && product.images) {
      if ((product === null || product === void 0 ? void 0 : product.images.indexOf('http')) > -1) {
        bgImage = optimizeImage(product.images, 'h_200,c_limit');
      } else {
        var _theme$images, _theme$images$dummies;

        bgImage = optimizeImage((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.product, 'h_200,c_limit');
      }

      return bgImage;
    }
  };

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
      return !(isSkeleton || isSoldOut) && onProductClick(product);
    },
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
  }, parsePrice(product === null || product === void 0 ? void 0 : product.price)), !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.CardInfo, {
    soldOut: isSoldOut || maxProductQuantity <= 0
  }, /*#__PURE__*/_react.default.createElement("h1", null, product === null || product === void 0 ? void 0 : product.name), /*#__PURE__*/_react.default.createElement("p", null, product !== null && product !== void 0 && product.description ? product === null || product === void 0 ? void 0 : product.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus et, purus lorem quis eleifend id diam.')) : /*#__PURE__*/_react.default.createElement(_styles.CardInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })))), /*#__PURE__*/_react.default.createElement(_styles.CartAction, null, windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_styles.ProductCost, {
    textLeft: isSoldOut || maxProductQuantity <= 0
  }, parsePrice(product === null || product === void 0 ? void 0 : product.price)), /*#__PURE__*/_react.default.createElement(_styles.Quantity, {
    isSoldOut: isSoldOut
  }, /*#__PURE__*/_react.default.createElement("span", null, t('QUANTITY', 'Quantity')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    ref: el,
    name: "product-quantity",
    "aria-label": "product-quantity",
    autoComplete: "off",
    defaultValue: 1,
    maxLength: "500"
  })), !(isSoldOut || maxProductQuantity <= 0) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true
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

exports.SingleProductCard = SingleProductCard;