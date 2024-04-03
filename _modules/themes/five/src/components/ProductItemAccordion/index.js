"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProductItemAccordionUI = function ProductItemAccordionUI(props) {
  var _theme$viewString, _theme$business_view, _productInfo$ingredie, _productInfo$options, _props$beforeElements, _props$beforeComponen, _product$valid, _theme$images, _theme$images2, _product$calendar_eve, _configs$format_time, _product$calendar_eve2, _configs$format_time2, _toppingsRemoved$remo, _props$afterComponent, _props$afterElements;
  var isDisabledEdit = props.isDisabledEdit,
    isCartPending = props.isCartPending,
    isCartProduct = props.isCartProduct,
    product = props.product,
    changeQuantity = props.changeQuantity,
    getProductMax = props.getProductMax,
    offsetDisabled = props.offsetDisabled,
    onDeleteProduct = props.onDeleteProduct,
    onEditProduct = props.onEditProduct,
    isCheckout = props.isCheckout,
    isStore = props.isStore,
    isConfirmationPage = props.isConfirmationPage,
    toppingsRemoved = props.toppingsRemoved,
    productInfo = props.productInfo;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('0px'),
    _useState4 = _slicedToArray(_useState3, 2),
    setHeight = _useState4[0],
    setHeightState = _useState4[1];
  var _useState5 = (0, _react.useState)('accordion__icon'),
    _useState6 = _slicedToArray(_useState5, 2),
    setRotate = _useState6[0],
    setRotateState = _useState6[1];
  var content = (0, _react.useRef)(null);
  var productSelect = (0, _react.useRef)(null);
  var productActionsEdit = (0, _react.useRef)(null);
  var productActionsDelete = (0, _react.useRef)(null);
  var viewString = isConfirmationPage ? 'confirmation' : isStore ? 'business_view' : 'header';
  var showProductImage = !(theme !== null && theme !== void 0 && (_theme$viewString = theme[viewString]) !== null && _theme$viewString !== void 0 && (_theme$viewString = _theme$viewString.components) !== null && _theme$viewString !== void 0 && (_theme$viewString = _theme$viewString.cart) !== null && _theme$viewString !== void 0 && (_theme$viewString = _theme$viewString.components) !== null && _theme$viewString !== void 0 && (_theme$viewString = _theme$viewString.products) !== null && _theme$viewString !== void 0 && (_theme$viewString = _theme$viewString.components) !== null && _theme$viewString !== void 0 && (_theme$viewString = _theme$viewString.image) !== null && _theme$viewString !== void 0 && _theme$viewString.hidden);
  var hideProductDummyLogo = theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.products) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.product) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.dummy) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.hidden;
  var showArrowIcon = props.showArrowIcon && ((productInfo === null || productInfo === void 0 || (_productInfo$ingredie = productInfo.ingredients) === null || _productInfo$ingredie === void 0 ? void 0 : _productInfo$ingredie.length) > 0 || (productInfo === null || productInfo === void 0 || (_productInfo$options = productInfo.options) === null || _productInfo$options === void 0 ? void 0 : _productInfo$options.length) > 0 || (product === null || product === void 0 ? void 0 : product.comment));
  var toggleAccordion = function toggleAccordion(e) {
    var _productSelect$curren, _productActionsEdit$c, _productActionsDelete;
    var isActionsClick = ((_productSelect$curren = productSelect.current) === null || _productSelect$curren === void 0 ? void 0 : _productSelect$curren.contains(e.target)) || ((_productActionsEdit$c = productActionsEdit.current) === null || _productActionsEdit$c === void 0 ? void 0 : _productActionsEdit$c.contains(e.target)) || ((_productActionsDelete = productActionsDelete.current) === null || _productActionsDelete === void 0 ? void 0 : _productActionsDelete.contains(e.target));
    if (!(product !== null && product !== void 0 && product.valid_menu) && isCartProduct || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : "".concat(content.current.scrollHeight, "px"));
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var handleChangeQuantity = function handleChangeQuantity(value) {
    if (parseInt(value) === 0) {
      onDeleteProduct(product);
    } else {
      changeQuantity(product, parseInt(value));
    }
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price;
    var pos = position ? "(".concat(position, ")") : '';
    return "".concat(quantity, " x ").concat(name, " ").concat(pos, " +").concat(price);
  };
  (0, _react.useEffect)(function () {
    if (setActive === 'active') {
      setHeightState("".concat(content.current.scrollHeight, "px"));
    }
  }, [product, setActive]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, {
    isCheckout: isCheckout
  }, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    className: "product accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, {
    className: "info",
    isValid: (_product$valid = product === null || product === void 0 ? void 0 : product.valid) !== null && _product$valid !== void 0 ? _product$valid : true
  }, ((product === null || product === void 0 ? void 0 : product.images) || !hideProductDummyLogo && (theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product)) && showProductImage && /*#__PURE__*/_react.default.createElement(_styles.WrapperProductImage, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    bgimage: (product === null || product === void 0 ? void 0 : product.images) || (theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.product)
  })), product !== null && product !== void 0 && product.calendar_event ? /*#__PURE__*/_react.default.createElement(_styles.ScheduleInfoWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, product.name), /*#__PURE__*/_react.default.createElement(_styles.ScheduleInfo, null, /*#__PURE__*/_react.default.createElement("span", null, parseDate(product === null || product === void 0 || (_product$calendar_eve = product.calendar_event) === null || _product$calendar_eve === void 0 ? void 0 : _product$calendar_eve.start, {
    outputFormat: (configs === null || configs === void 0 || (_configs$format_time = configs.format_time) === null || _configs$format_time === void 0 ? void 0 : _configs$format_time.value) === '12' ? 'hh:mm a' : 'HH:mm'
  }), ' ', "-", ' ', parseDate(product === null || product === void 0 || (_product$calendar_eve2 = product.calendar_event) === null || _product$calendar_eve2 === void 0 ? void 0 : _product$calendar_eve2.end, {
    outputFormat: (configs === null || configs === void 0 || (_configs$format_time2 = configs.format_time) === null || _configs$format_time2 === void 0 ? void 0 : _configs$format_time2.value) === '12' ? 'hh:mm a' : 'HH:mm'
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isDisabledEdit && isCartProduct && !isCartPending && getProductMax ? /*#__PURE__*/_react.default.createElement(_styles.ProductSelectWrapper, null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, null), /*#__PURE__*/_react.default.createElement(_styles.ProductSelect, {
    ref: productSelect,
    value: product.quantity,
    isCheckout: isCheckout,
    onChange: function onChange(e) {
      return handleChangeQuantity(Number(e.target.value));
    }
  }, _toConsumableArray(Array(getProductMax(product) + 1)).map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: i,
      disabled: offsetDisabled(product) < i && i !== 0
    }, i === 0 ? t('REMOVE', 'Remove') : i);
  }))) : /*#__PURE__*/_react.default.createElement(_styles.ProductQuantity, null, product === null || product === void 0 ? void 0 : product.quantity), /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, product.name), (product === null || product === void 0 ? void 0 : product.comment) && /*#__PURE__*/_react.default.createElement("p", null, product === null || product === void 0 ? void 0 : product.comment)), windowSize.width <= 410 && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product.total || product.price)), isCartProduct && !isCartPending && /*#__PURE__*/_react.default.createElement("div", null, onEditProduct && !isDisabledEdit && /*#__PURE__*/_react.default.createElement("span", {
    ref: productActionsEdit
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, {
    color: "#B1BCCC",
    onClick: function onClick() {
      return onEditProduct(product);
    }
  })), onDeleteProduct && /*#__PURE__*/_react.default.createElement("span", {
    ref: productActionsDelete
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
    color: "#B1BCCC",
    onClick: function onClick() {
      return onDeleteProduct(product);
    }
  }))))))), showArrowIcon && /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }), product.valid && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((product === null || product === void 0 ? void 0 : product.valid) || !isCartProduct) && windowSize.width > 410 && /*#__PURE__*/_react.default.createElement(_styles.ProductPriceSection, null, /*#__PURE__*/_react.default.createElement(_styles.ProductPrice, {
    className: "prod-price"
  }, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product.total || product.price)), (productInfo.ingredients.length > 0 || productInfo.options.length > 0 || product.comment) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))), isCartProduct && !isCartPending && /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, !isDisabledEdit && /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, {
    color: "#B1BCCC"
  })), onDeleteProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
    color: "#B1BCCC"
  }))))), isCartProduct && !isCartPending && (product === null || product === void 0 ? void 0 : product.valid_menu) && !(product !== null && product !== void 0 && product.valid_quantity) && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, !isDisabledEdit && /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, {
    color: "#B1BCCC"
  })), onDeleteProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
    color: "#B1BCCC"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('NOT_AVAILABLE', 'Not available'))), !(product !== null && product !== void 0 && product.valid_menu) && isCartProduct && !isCartPending && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, onDeleteProduct && /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, {
    color: "#D81212"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('NOT_AVAILABLE', 'Not available')))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: "".concat(setHeight)
    }
  }, productInfo.ingredients.length > 0 && productInfo.ingredients.some(function (ingredient) {
    return !ingredient.selected;
  }) && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients')), productInfo.ingredients.map(function (ingredient) {
    return !ingredient.selected && /*#__PURE__*/_react.default.createElement("li", {
      className: "ingredient",
      key: ingredient.id
    }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
  })), productInfo.options.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, productInfo.options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: option.id
    }, /*#__PURE__*/_react.default.createElement("p", null, option.name), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
      className: "suboption"
    }, option.suboptions.sort(function (a, b) {
      return a.rank - b.rank;
    }).map(function (suboption) {
      var _suboption$half_price;
      return /*#__PURE__*/_react.default.createElement("li", {
        key: suboption.id
      }, /*#__PURE__*/_react.default.createElement("span", null, getFormattedSubOptionName({
        quantity: suboption.quantity,
        name: suboption.name,
        position: (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
        price: ['left', 'right'].includes(suboption.position) ? parsePrice((_suboption$half_price = suboption.half_price) !== null && _suboption$half_price !== void 0 ? _suboption$half_price : suboption.price) : parsePrice(suboption.price)
      })));
    })));
  })), (toppingsRemoved === null || toppingsRemoved === void 0 || (_toppingsRemoved$remo = toppingsRemoved.removed) === null || _toppingsRemoved$remo === void 0 ? void 0 : _toppingsRemoved$remo.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("p", null, t('TOPPINGS_REMOVED', 'Toppings removed')), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
    className: "suboption"
  }, toppingsRemoved === null || toppingsRemoved === void 0 ? void 0 : toppingsRemoved.removed.map(function (topping) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: topping.code
    }, /*#__PURE__*/_react.default.createElement("span", null, topping.name));
  })))), product.comment && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement("p", null, t('SPECIAL_COMMENT', 'Special Comment')), /*#__PURE__*/_react.default.createElement("h3", null, product.comment)))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var ProductItemAccordion = exports.ProductItemAccordion = function ProductItemAccordion(props) {
  var productItemAccordion = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: ProductItemAccordionUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.ProductItemAccordion, productItemAccordion);
};