"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductItemAccordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _BsFillPersonFill = _interopRequireDefault(require("@meronex/icons/bs/BsFillPersonFill"));
var _TiPencil = _interopRequireDefault(require("@meronex/icons/ti/TiPencil"));
var _TiTrash = _interopRequireDefault(require("@meronex/icons/ti/TiTrash"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductItemAccordion = function ProductItemAccordion(props) {
  var isCartPending = props.isCartPending,
    isCartProduct = props.isCartProduct,
    product = props.product,
    onDeleteProduct = props.onDeleteProduct,
    onEditProduct = props.onEditProduct,
    isCheckout = props.isCheckout,
    isOrderDetails = props.isOrderDetails;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var readOnlyMode = isOrderDetails || isCheckout;
  var productInfo = function productInfo() {
    if (isCartProduct) {
      var _product$ingredients, _product$options;
      var ingredients = JSON.parse(JSON.stringify(Object.values((_product$ingredients = product.ingredients) !== null && _product$ingredients !== void 0 ? _product$ingredients : {})));
      var options = JSON.parse(JSON.stringify(Object.values((_product$options = product.options) !== null && _product$options !== void 0 ? _product$options : {})));
      options = options.map(function (option) {
        var _option$suboptions;
        option.suboptions = Object.values((_option$suboptions = option.suboptions) !== null && _option$suboptions !== void 0 ? _option$suboptions : {});
        return option;
      });
      return _objectSpread(_objectSpread({}, productInfo), {}, {
        ingredients: ingredients,
        options: options
      });
    }
    return product;
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price,
      isLast = _ref.isLast;
    var pos = position ? "(".concat(position, ")") : '';
    return "".concat(quantity, " x ").concat(name, " ").concat(pos, " +").concat(price).concat(isLast ? '' : ',');
  };
  return /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, {
    readOnlyMode: readOnlyMode,
    isCheckout: isCheckout
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, null, /*#__PURE__*/_react.default.createElement(_styles.ProductTitle, {
    readOnlyMode: readOnlyMode
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
    onClick: function onClick() {
      return onEditProduct(product);
    }
  }, product.name), /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    onClick: function onClick() {
      return onEditProduct(product);
    }
  }), isCheckout && /*#__PURE__*/_react.default.createElement(_TiTrash.default, {
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  })), /*#__PURE__*/_react.default.createElement(_styles.PriceContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProductPrice, null, parsePrice(product.total || product.price)), !readOnlyMode && /*#__PURE__*/_react.default.createElement(_MdClose.default, {
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }))), /*#__PURE__*/_react.default.createElement(_styles.Quantity, null, t('QUANTITY', 'Quantity'), ": ", product === null || product === void 0 ? void 0 : product.quantity), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsContainer, null, productInfo().ingredients.length > 0 && productInfo().ingredients.some(function (ingredient) {
    return !ingredient.selected;
  }) && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients'), ":", ' ', productInfo().ingredients.map(function (ingredient) {
    return !ingredient.selected && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: ingredient.id
    }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
  }))), productInfo().options.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, productInfo().options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("p", {
      key: option.id
    }, option.suboptions.map(function (suboption) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: suboption.id
      }, getFormattedSubOptionName({
        quantity: suboption.quantity,
        name: suboption.name,
        position: suboption.position !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
        price: parsePrice(suboption.price)
      }));
    }));
  }))))), product.comment && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement(_BsFillPersonFill.default, null), /*#__PURE__*/_react.default.createElement("p", null, product.comment)), isCartProduct && !isCartPending && (product === null || product === void 0 ? void 0 : product.valid_menu) && !(product !== null && product !== void 0 && product.valid_quantity) && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('NOT_AVAILABLE', 'Not available'))), !(product !== null && product !== void 0 && product.valid_menu) && isCartProduct && !isCartPending && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('NOT_AVAILABLE', 'Not available'))));
};
exports.ProductItemAccordion = ProductItemAccordion;