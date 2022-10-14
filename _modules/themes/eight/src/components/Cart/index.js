"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _Buttons = require("../../styles/Buttons");

var _BusinessItemAccordion = require("../BusinessItemAccordion");

var _ProductItemAccordion = require("../ProductItemAccordion");

var _ProductForm = require("../ProductForm");

var _UpsellingPage = require("../UpsellingPage");

var _Confirm = require("../../../../../components/Confirm");

var _Modal = require("../../../../../components/Modal");

var _CouponControl = require("../../../../../components/CouponControl");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _utils = require("../../../../../utils");

var _CartStoresListing = require("../CartStoresListing");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CartUI = function CartUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _Object$values$find$b, _Object$values$find, _orderState$option, _orderState$option2, _props$beforeElements, _props$beforeComponen, _cart$products, _cart$business, _cart$business2, _orderState$options, _configs$driver_tip_t, _configs$driver_tip_u, _cart$business3, _cart$business5, _props$afterComponent, _props$afterElements;

  var currentCartUuid = props.currentCartUuid,
      cart = props.cart,
      clearCart = props.clearCart,
      isProducts = props.isProducts,
      changeQuantity = props.changeQuantity,
      getProductMax = props.getProductMax,
      offsetDisabled = props.offsetDisabled,
      removeProduct = props.removeProduct,
      onClickCheckout = props.onClickCheckout,
      isCheckout = props.isCheckout,
      isCartPending = props.isCartPending,
      isCartPopover = props.isCartPopover,
      isForceOpenCart = props.isForceOpenCart,
      isCartOnProductsList = props.isCartOnProductsList,
      handleCartOpen = props.handleCartOpen,
      isCustomMode = props.isCustomMode,
      handleGoBack = props.handleGoBack;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseNumber = _useUtils2$.parseNumber,
      parseDate = _useUtils2$.parseDate;

  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
      _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
      validationFields = _useValidationFields2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)({
    open: false,
    content: null,
    handleOnAccept: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      confirm = _useState2[0],
      setConfirm = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openProduct = _useState4[0],
      setModalIsOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openChangeStore = _useState6[0],
      setOpenChangeStore = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      curProduct = _useState8[0],
      setCurProduct = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openUpselling = _useState10[0],
      setOpenUpselling = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      canOpenUpselling = _useState12[0],
      setCanOpenUpselling = _useState12[1];

  var windowSize = (0, _useWindowSize.useWindowSize)();
  var isCouponEnabled = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.coupon) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled;
  var businessId = (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === cart.uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {};
  var momentFormatted = !(orderState !== null && orderState !== void 0 && (_orderState$option = orderState.option) !== null && _orderState$option !== void 0 && _orderState$option.moment) ? t('RIGHT_NOW', 'Right Now') : parseDate(orderState === null || orderState === void 0 ? void 0 : (_orderState$option2 = orderState.option) === null || _orderState$option2 === void 0 ? void 0 : _orderState$option2.moment, {
    outputFormat: 'YYYY-MM-DD HH:mm'
  });

  var handleDeleteClick = function handleDeleteClick(product) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: function handleOnAccept() {
        setOpenUpselling(false);
        setCanOpenUpselling(false);
        removeProduct(product, cart);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };

  var handleEditProduct = function handleEditProduct(product) {
    setCurProduct(product);
    setModalIsOpen(true);
  };

  var handleClickCheckout = function handleClickCheckout() {
    events.emit('go_to_page', {
      page: 'checkout',
      params: {
        cartUuid: cart.uuid
      }
    });
    events.emit('cart_popover_closed');
    onClickCheckout && onClickCheckout();
  };

  var handleStoreRedirect = function handleStoreRedirect(slug) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: slug
      }
    });

    if (windowSize.width <= 768) {
      onClickCheckout && onClickCheckout();
    }
  };

  var handleBusinessCartRedirect = function handleBusinessCartRedirect(slug) {
    events.emit('go_to_page', {
      page: 'business_cart',
      params: {
        store: slug
      }
    });
    onClickCheckout && onClickCheckout();
  };

  (0, _react.useEffect)(function () {
    events.emit('get_current_view');
    return function () {
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    };
  }, []);

  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      setModalIsOpen(false);
    }
  };

  var handleClearProducts = function handleClearProducts() {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCTS', 'Are you sure that you want to delete all products?'),
      handleOnAccept: function handleOnAccept() {
        clearCart(cart === null || cart === void 0 ? void 0 : cart.uuid);
        handleGoBack && handleGoBack();
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };

  var handleUpsellingPage = function handleUpsellingPage() {
    setOpenUpselling(false);
    setCanOpenUpselling(false);
    handleClickCheckout();
  };

  var handleChangeStore = function handleChangeStore() {
    setOpenChangeStore(true);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CartContainer, {
    className: "cart",
    isCustomMode: isCustomMode,
    isCheckout: isCheckout
  }, /*#__PURE__*/_react.default.createElement(_styles.CartSticky, {
    isCartOnProductsList: isCartOnProductsList
  }, /*#__PURE__*/_react.default.createElement(_BusinessItemAccordion.BusinessItemAccordion, {
    isCustomMode: isCustomMode,
    isCartPending: isCartPending,
    currentCartUuid: currentCartUuid,
    uuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
    isCheckout: isCheckout,
    orderTotal: cart === null || cart === void 0 ? void 0 : cart.total // business={cart?.business}
    ,
    isClosed: !(cart !== null && cart !== void 0 && cart.valid_schedule),
    moment: momentFormatted,
    isProducts: isProducts,
    isValidProducts: cart === null || cart === void 0 ? void 0 : cart.valid_products,
    isForceOpenAccordion: isForceOpenCart,
    isCartOnProductsList: isCartOnProductsList,
    handleClearProducts: handleClearProducts,
    handleStoreRedirect: handleStoreRedirect,
    handleCartOpen: handleCartOpen,
    handleChangeStore: handleChangeStore
  }, (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0 && (cart === null || cart === void 0 ? void 0 : cart.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.code,
      isCustomMode: isCustomMode,
      isCartPending: isCartPending,
      isCartProduct: true,
      product: product,
      changeQuantity: changeQuantity,
      getProductMax: getProductMax,
      offsetDisabled: offsetDisabled,
      onDeleteProduct: handleDeleteClick,
      onEditProduct: handleEditProduct
    });
  })), (openUpselling || isCustomMode) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    uuid: cart.uuid,
    isCustomMode: isCustomMode,
    businessId: cart.business_id,
    cartProducts: cart.products,
    business: cart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    setOpenUpselling: setOpenUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }), (cart === null || cart === void 0 ? void 0 : cart.valid_products) && /*#__PURE__*/_react.default.createElement(_styles.OrderBill, {
    className: "order-bill"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, cart.business.tax_type === 1 ? parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) + (cart === null || cart === void 0 ? void 0 : cart.tax) || 0) : parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) || 0))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, (cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.discount_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0))), (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) + (cart === null || cart === void 0 ? void 0 : cart.tax) || 0))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) || 0)))), cart.business.tax_type !== 1 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.tax) || 0))), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.delivery_price))), (cart === null || cart === void 0 ? void 0 : cart.driver_tip) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ' ', (cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate) > 0 && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))), (cart === null || cart === void 0 ? void 0 : cart.service_fee) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service Fee'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.service_fee))))), isCouponEnabled && !isCartPending && isCartPopover && !(isCheckout && isCartPopover) && /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    businessId: businessId,
    price: cart.total
  })), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, (cart === null || cart === void 0 ? void 0 : cart.total) >= 1 && parsePrice(cart === null || cart === void 0 ? void 0 : cart.total)))))), (onClickCheckout || isForceOpenCart) && !isCheckout && (cart === null || cart === void 0 ? void 0 : cart.valid_products) && !isCustomMode && /*#__PURE__*/_react.default.createElement(_styles.CheckoutAction, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address) ? 'secundary' : 'primary',
    onClick: function onClick() {
      var _cart$business4;

      return handleBusinessCartRedirect(cart === null || cart === void 0 ? void 0 : (_cart$business4 = cart.business) === null || _cart$business4 === void 0 ? void 0 : _cart$business4.slug);
    },
    disabled: openUpselling && !canOpenUpselling || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address)
  }, !(cart !== null && cart !== void 0 && cart.valid_address) ? t('OUT_OF_COVERAGE', 'Out of Coverage') : !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : !openUpselling ^ canOpenUpselling ? t('VIEW_ORDER', 'View Order') : t('LOADING', 'Loading')))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('PRODUCT', 'Product'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openProduct,
    padding: "0",
    closeOnBackdrop: true,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    isCartProduct: true,
    productCart: curProduct,
    businessSlug: cart === null || cart === void 0 ? void 0 : (_cart$business5 = cart.business) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.slug,
    businessId: businessId,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id,
    onSave: handlerProductAction
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    title: t('CHANGE_STORE', 'Change store'),
    open: openChangeStore,
    padding: "20px",
    closeOnBackdrop: true,
    modalTitleStyle: {
      display: 'flex',
      justifyContent: 'center'
    },
    onClose: function onClose() {
      return setOpenChangeStore(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_CartStoresListing.CartStoresListing, {
    pageChangeStore: "business_cart",
    cartuuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
    onClose: function onClose() {
      return setOpenChangeStore(false);
    }
  })))), isCustomMode && /*#__PURE__*/_react.default.createElement(_styles.CustomCartBottom, null, /*#__PURE__*/_react.default.createElement(_styles.CartActionsGroupContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primaryContrast",
    onClick: function onClick() {
      return handleClearProducts();
    }
  }, orderState !== null && orderState !== void 0 && orderState.loading ? t('LOADING', 'Loading') : t('CANCEL_ORDER', 'Cancel order')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primaryGradient",
    onClick: function onClick() {
      return handleClickCheckout();
    },
    disabled: openUpselling && !canOpenUpselling || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address)
  }, !(cart !== null && cart !== void 0 && cart.valid_address) ? t('OUT_OF_COVERAGE', 'Out of Coverage') : !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : !openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var Cart = function Cart(props) {
  var cartProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CartUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.Cart, cartProps);
};

exports.Cart = Cart;