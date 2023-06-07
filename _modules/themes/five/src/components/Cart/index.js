"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cart = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _Buttons = require("../../styles/Buttons");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _BusinessItemAccordion = require("../BusinessItemAccordion");
var _styledComponents = require("styled-components");
var _Confirm = require("../Confirm");
var _Modal = require("../Modal");
var _CouponControl = require("../../../../../components/CouponControl");
var _ProductForm = require("../ProductForm");
var _UpsellingPage = require("../UpsellingPage");
var _CartStoresListing = require("../../../../franchise/src/components/CartStoresListing");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _TaxInformation = require("../TaxInformation");
var _Inputs = require("../../styles/Inputs");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _DriverTips = require("../DriverTips");
var _ServiceForm = require("../ServiceForm");
var _styles = require("./styles");
var _utils = require("../../../../../utils");
var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));
var _MdCloseCircle = _interopRequireDefault(require("@meronex/icons/ios/MdCloseCircle"));
var _MomentContent = require("../MomentContent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var CartUI = function CartUI(props) {
  var _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _configs$checkout_mul, _orderState$carts, _props$cart, _theme$viewString, _theme$viewString$com, _theme$viewString$com2, _theme$viewString$com3, _theme$viewString$com4, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _theme$viewString2, _theme$viewString2$co, _theme$viewString2$co2, _theme$viewString2$co3, _theme$viewString2$co4, _orderState$options, _orderState$options2, _orderState$option, _orderState$option2, _props$beforeElements, _props$beforeComponen, _cart$products, _cart$offers, _cart$offers2, _cart$offers3, _cart$offers3$filter, _cart$offers4, _cart$offers4$filter, _cart$business, _ref, _cart$subtotal_with_d, _cart$taxes2, _cart$taxes3, _cart$fees, _cart$fees2, _cart$offers5, _cart$offers6, _cart$offers6$filter, _orderState$options3, _cart$offers7, _cart$offers8, _cart$offers8$filter, _configs$driver_tip_t, _configs$driver_tip_u, _orderState$options4, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _configs$driver_tip_t2, _configs$driver_tip_u2, _configs$driver_tip_t3, _cart$payment_events, _cart$payment_events2, _orderState$options5, _cart$business2, _cart$business3, _curProduct$calendar_, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data4, _openTaxModal$data$fi, _openTaxModal$data5, _openTaxModal$data6, _props$afterComponent, _props$afterElements;
  var currentCartUuid = props.currentCartUuid,
    clearCart = props.clearCart,
    isProducts = props.isProducts,
    changeQuantity = props.changeQuantity,
    getProductMax = props.getProductMax,
    offsetDisabled = props.offsetDisabled,
    removeProduct = props.removeProduct,
    onClickCheckout = props.onClickCheckout,
    isCheckout = props.isCheckout,
    useKioskApp = props.useKioskApp,
    isCartPending = props.isCartPending,
    isCartPopover = props.isCartPopover,
    isForceOpenCart = props.isForceOpenCart,
    isCartOnProductsList = props.isCartOnProductsList,
    handleCartOpen = props.handleCartOpen,
    isCustomMode = props.isCustomMode,
    isStore = props.isStore,
    handleChangeComment = props.handleChangeComment,
    commentState = props.commentState,
    handleRemoveOfferClick = props.handleRemoveOfferClick,
    setPreorderBusiness = props.setPreorderBusiness,
    cartMulticart = props.cart,
    hideDeliveryFee = props.hideDeliveryFee,
    hideDriverTip = props.hideDriverTip,
    hideCouponInput = props.hideCouponInput,
    businessConfigs = props.businessConfigs,
    loyaltyRewardRate = props.loyaltyRewardRate,
    isCustomerMode = props.isCustomerMode;
  var theme = (0, _styledComponents.useTheme)();
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
  var _useSite = (0, _orderingComponents.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var driverTipsOptions = typeof (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
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
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    curProduct = _useState6[0],
    setCurProduct = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    openUpselling = _useState8[0],
    setOpenUpselling = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    canOpenUpselling = _useState10[0],
    setCanOpenUpselling = _useState10[1];
  var _useState11 = (0, _react.useState)({
      open: false,
      tax: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    openTaxModal = _useState12[0],
    setOpenTaxModal = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isUpselling = _useState14[0],
    setIsUpselling = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openChangeStore = _useState16[0],
    setOpenChangeStore = _useState16[1];
  var businessUrlTemplate = (site === null || site === void 0 ? void 0 : site.business_url_template) || '/store/:business_slug';
  var isCouponEnabled = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.coupon) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled;
  var cateringTypes = [7, 8];
  var isMultiCheckout = (configs === null || configs === void 0 ? void 0 : (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var cart = cartMulticart || (orderState === null || orderState === void 0 ? void 0 : (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat((_props$cart = props.cart) === null || _props$cart === void 0 ? void 0 : _props$cart.business_id)]);
  var viewString = isStore ? 'business_view' : 'header';
  var hideCartComments = (theme === null || theme === void 0 ? void 0 : (_theme$viewString = theme[viewString]) === null || _theme$viewString === void 0 ? void 0 : (_theme$viewString$com = _theme$viewString.components) === null || _theme$viewString$com === void 0 ? void 0 : (_theme$viewString$com2 = _theme$viewString$com.cart) === null || _theme$viewString$com2 === void 0 ? void 0 : (_theme$viewString$com3 = _theme$viewString$com2.components) === null || _theme$viewString$com3 === void 0 ? void 0 : (_theme$viewString$com4 = _theme$viewString$com3.comments) === null || _theme$viewString$com4 === void 0 ? void 0 : _theme$viewString$com4.hidden) || !(validationFields !== null && validationFields !== void 0 && (_validationFields$fie4 = validationFields.fields) !== null && _validationFields$fie4 !== void 0 && (_validationFields$fie5 = _validationFields$fie4.checkout) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.comments) !== null && _validationFields$fie6 !== void 0 && _validationFields$fie6.enabled);
  var hideCartDiscount = theme === null || theme === void 0 ? void 0 : (_theme$viewString2 = theme[viewString]) === null || _theme$viewString2 === void 0 ? void 0 : (_theme$viewString2$co = _theme$viewString2.components) === null || _theme$viewString2$co === void 0 ? void 0 : (_theme$viewString2$co2 = _theme$viewString2$co.cart) === null || _theme$viewString2$co2 === void 0 ? void 0 : (_theme$viewString2$co3 = _theme$viewString2$co2.components) === null || _theme$viewString2$co3 === void 0 ? void 0 : (_theme$viewString2$co4 = _theme$viewString2$co3.discount_coupon) === null || _theme$viewString2$co4 === void 0 ? void 0 : _theme$viewString2$co4.hidden;
  var cateringTypeString = (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 7 ? 'catering_delivery' : (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 8 ? 'catering_pickup' : null;
  var cateringValues = businessConfigs && (0, _utils.getCateringValues)(cateringTypeString, businessConfigs);
  var walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  };
  var getIncludedTaxes = function getIncludedTaxes() {
    if ((cart === null || cart === void 0 ? void 0 : cart.taxes) === null) {
      return (cart === null || cart === void 0 ? void 0 : cart.business.tax_type) === 1 ? cart === null || cart === void 0 ? void 0 : cart.tax : 0;
    } else {
      return cart === null || cart === void 0 ? void 0 : cart.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (tax.type === 1 ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var clearAmount = function clearAmount(value) {
    var _configs$format_numbe, _configs$format_numbe2;
    return parseFloat((Math.trunc(value * 100) / 100).toFixed((_configs$format_numbe = (_configs$format_numbe2 = configs.format_number_decimal_length) === null || _configs$format_numbe2 === void 0 ? void 0 : _configs$format_numbe2.value) !== null && _configs$format_numbe !== void 0 ? _configs$format_numbe : 2));
  };
  var loyaltyRewardValue = clearAmount(((cart === null || cart === void 0 ? void 0 : cart.subtotal) + getIncludedTaxes()) * loyaltyRewardRate);
  var momentFormatted = !(orderState !== null && orderState !== void 0 && (_orderState$option = orderState.option) !== null && _orderState$option !== void 0 && _orderState$option.moment) ? t('RIGHT_NOW', 'Right Now') : parseDate(orderState === null || orderState === void 0 ? void 0 : (_orderState$option2 = orderState.option) === null || _orderState$option2 === void 0 ? void 0 : _orderState$option2.moment, {
    outputFormat: 'YYYY-MM-DD HH:mm'
  });
  var handleDeleteClick = function handleDeleteClick(product) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_PRODUCT', 'Are you sure that you want to delete the product?'),
      handleOnAccept: function handleOnAccept() {
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
  var handleClickCheckout = function handleClickCheckout(uuid) {
    var _Object$values;
    var cartsAvailable = (_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
      return (cart === null || cart === void 0 ? void 0 : cart.valid) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2;
    });
    if (cartsAvailable.length === 1 || !isMultiCheckout) {
      events.emit('go_to_page', {
        page: 'checkout',
        params: {
          cartUuid: uuid
        }
      });
    } else {
      var groupKeys = {};
      cartsAvailable.forEach(function (_cart) {
        var _cart$group, _cart$group2, _cart$group$uuid, _cart$group3;
        groupKeys[_cart === null || _cart === void 0 ? void 0 : (_cart$group = _cart.group) === null || _cart$group === void 0 ? void 0 : _cart$group.uuid] ? groupKeys[_cart === null || _cart === void 0 ? void 0 : (_cart$group2 = _cart.group) === null || _cart$group2 === void 0 ? void 0 : _cart$group2.uuid] += 1 : groupKeys[(_cart$group$uuid = _cart === null || _cart === void 0 ? void 0 : (_cart$group3 = _cart.group) === null || _cart$group3 === void 0 ? void 0 : _cart$group3.uuid) !== null && _cart$group$uuid !== void 0 ? _cart$group$uuid : 'null'] = 1;
      });
      if (Object.keys(groupKeys).length === 1 && Object.keys(groupKeys)[0] === 'null' || Object.keys(groupKeys).length > 1) {
        events.emit('go_to_page', {
          page: 'multi_cart'
        });
      } else {
        var _cartsAvailable$, _cartsAvailable$$grou;
        events.emit('go_to_page', {
          page: 'multi_checkout',
          params: {
            cartUuid: (_cartsAvailable$ = cartsAvailable[0]) === null || _cartsAvailable$ === void 0 ? void 0 : (_cartsAvailable$$grou = _cartsAvailable$.group) === null || _cartsAvailable$$grou === void 0 ? void 0 : _cartsAvailable$$grou.uuid
          }
        });
      }
    }
    events.emit('cart_popover_closed');
    onClickCheckout && onClickCheckout();
  };
  var handleStoreRedirect = function handleStoreRedirect(slug) {
    if (isCustomerMode) {
      events.emit('go_to_page', {
        page: 'business',
        params: {
          store: slug
        }
      });
    } else {
      if (businessUrlTemplate === '/store/:business_slug' || businessUrlTemplate === '/:business_slug') {
        events.emit('go_to_page', {
          page: 'business',
          params: {
            business_slug: slug
          }
        });
      } else {
        events.emit('go_to_page', {
          page: 'business',
          search: "?".concat(businessUrlTemplate.split('?')[1].replace(':business_slug', '')).concat(slug)
        });
      }
    }
    if (windowSize.width <= 768) {
      onClickCheckout && onClickCheckout();
    }
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
  var checkOutBtnClick = function checkOutBtnClick(uuid) {
    handleClickCheckout(uuid);
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _cart$taxes, _cart$taxes$filter;
    return cart === null || cart === void 0 ? void 0 : (_cart$taxes = cart.taxes) === null || _cart$taxes === void 0 ? void 0 : (_cart$taxes$filter = _cart$taxes.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1;
    })) === null || _cart$taxes$filter === void 0 ? void 0 : _cart$taxes$filter.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 ? void 0 : (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 ? void 0 : (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };
  var onRemoveOffer = function onRemoveOffer(id) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_OFFER', 'Are you sure that you want to delete the offer?'),
      title: t('OFFER', 'Offer'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleRemoveOfferClick(id, user === null || user === void 0 ? void 0 : user.id);
      }
    });
  };
  var handleChangeStore = function handleChangeStore() {
    setOpenChangeStore(true);
  };
  (0, _react.useEffect)(function () {
    if (isCustomMode) setIsUpselling(true);
  }, [isCustomMode]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CartContainer, {
    className: "cart"
  }, /*#__PURE__*/_react.default.createElement(_styles.CartSticky, {
    isCartOnProductsList: isCartOnProductsList
  }, /*#__PURE__*/_react.default.createElement(_BusinessItemAccordion.BusinessItemAccordion, {
    isCartPending: isCartPending,
    currentCartUuid: currentCartUuid,
    uuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
    isCheckout: isCheckout,
    orderTotal: cart === null || cart === void 0 ? void 0 : cart.total,
    business: cart === null || cart === void 0 ? void 0 : cart.business,
    isClosed: !(cart !== null && cart !== void 0 && cart.valid_schedule),
    moment: momentFormatted,
    isProducts: isProducts,
    isValidProducts: cart === null || cart === void 0 ? void 0 : cart.valid_products,
    isForceOpenAccordion: isForceOpenCart,
    isCartOnProductsList: isCartOnProductsList,
    handleClearProducts: handleClearProducts,
    handleStoreRedirect: handleStoreRedirect,
    handleCartOpen: handleCartOpen,
    isStore: isStore,
    total: cart === null || cart === void 0 ? void 0 : cart.total,
    handleClickCheckout: handleClickCheckout,
    checkoutButtonDisabled: openUpselling && !canOpenUpselling || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address),
    setPreorderBusiness: setPreorderBusiness,
    handleChangeStore: !useKioskApp && handleChangeStore,
    isMultiCheckout: isMultiCheckout
  }, (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0 && (cart === null || cart === void 0 ? void 0 : cart.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.code,
      isCartPending: isCartPending,
      isCartProduct: true,
      isDisabledEdit: !(cart !== null && cart !== void 0 && cart.business_id),
      product: product,
      isCheckout: isCheckout,
      changeQuantity: changeQuantity,
      getProductMax: getProductMax,
      offsetDisabled: offsetDisabled,
      onDeleteProduct: handleDeleteClick,
      onEditProduct: handleEditProduct,
      isStore: isStore,
      viewString: viewString
    });
  })), !(cart !== null && cart !== void 0 && cart.valid_products) && /*#__PURE__*/_react.default.createElement(_styles.NoValidProductMessage, null, t('REMOVE_NOT_AVAILABLE_CART_PRODUCTS', 'To continue with your checkout, please remove from your cart the products that are not available.')), (cart === null || cart === void 0 ? void 0 : cart.valid_products) && /*#__PURE__*/_react.default.createElement(_styles.OrderBill, {
    isCheckout: isCheckout
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "order-info"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.subtotal) + getIncludedTaxes()))), (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers = cart.offers) === null || _cart$offers === void 0 ? void 0 : _cart$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.discount_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((cart === null || cart === void 0 ? void 0 : cart.discount) || 0))), (cart === null || cart === void 0 ? void 0 : (_cart$offers2 = cart.offers) === null || _cart$offers2 === void 0 ? void 0 : _cart$offers2.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers3 = cart.offers) === null || _cart$offers3 === void 0 ? void 0 : (_cart$offers3$filter = _cart$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _cart$offers3$filter === void 0 ? void 0 : _cart$offers3$filter.map(function (offer) {
    var _offer$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary,
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_1'
        });
      }
    }), !!(offer !== null && offer !== void 0 && offer.id) && /*#__PURE__*/_react.default.createElement(_MdCloseCircle.default, {
      size: "24",
      color: theme.colors.primary,
      onClick: function onClick() {
        return onRemoveOffer(offer === null || offer === void 0 ? void 0 : offer.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount)));
  })), (cart === null || cart === void 0 ? void 0 : (_cart$offers4 = cart.offers) === null || _cart$offers4 === void 0 ? void 0 : (_cart$offers4$filter = _cart$offers4.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _cart$offers4$filter === void 0 ? void 0 : _cart$offers4$filter.length) > 0 && (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.discount) > 0 && (cart === null || cart === void 0 ? void 0 : cart.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref = (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref !== void 0 ? _ref : 0)) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_cart$subtotal_with_d = cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) !== null && _cart$subtotal_with_d !== void 0 ? _cart$subtotal_with_d : 0))), (cart === null || cart === void 0 ? void 0 : (_cart$taxes2 = cart.taxes) === null || _cart$taxes2 === void 0 ? void 0 : _cart$taxes2.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$taxes3 = cart.taxes) === null || _cart$taxes3 === void 0 ? void 0 : _cart$taxes3.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0;
  }).map(function (tax) {
    var _ref2, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, tax.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 ? void 0 : (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 ? void 0 : (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref2 !== void 0 ? _ref2 : 0)));
  })), (cart === null || cart === void 0 ? void 0 : (_cart$fees = cart.fees) === null || _cart$fees === void 0 ? void 0 : _cart$fees.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$fees2 = cart.fees) === null || _cart$fees2 === void 0 ? void 0 : _cart$fees2.filter(function (fee) {
    return !(fee.fixed === 0 && fee.percentage === 0);
  }).map(function (fee, i) {
    var _fee$id, _ref3, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: (_fee$id = fee.id) !== null && _fee$id !== void 0 ? _fee$id : i
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, fee.name || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed)).concat(fee.percentage > 0 ? ' + ' : ''), fee.percentage > 0 && "".concat(fee.percentage, "%"), ")", /*#__PURE__*/_react.default.createElement(_styles.IconContainer, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: fee,
          type: 'fee'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (fee === null || fee === void 0 ? void 0 : (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 ? void 0 : (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 ? void 0 : (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref3 !== void 0 ? _ref3 : 0)));
  })), (cart === null || cart === void 0 ? void 0 : (_cart$offers5 = cart.offers) === null || _cart$offers5 === void 0 ? void 0 : _cart$offers5.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers6 = cart.offers) === null || _cart$offers6 === void 0 ? void 0 : (_cart$offers6$filter = _cart$offers6.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _cart$offers6$filter === void 0 ? void 0 : _cart$offers6$filter.map(function (offer) {
    var _offer$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, (offer === null || offer === void 0 ? void 0 : offer.rate_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary,
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_3'
        });
      }
    }), !!(offer !== null && offer !== void 0 && offer.id) && /*#__PURE__*/_react.default.createElement(_MdCloseCircle.default, {
      size: "24",
      color: theme.colors.primary,
      onClick: function onClick() {
        return onRemoveOffer(offer === null || offer === void 0 ? void 0 : offer.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount)));
  })), (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 1 && !hideDeliveryFee && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.delivery_price_with_discount))), !hideCartDiscount && (cart === null || cart === void 0 ? void 0 : (_cart$offers7 = cart.offers) === null || _cart$offers7 === void 0 ? void 0 : _cart$offers7.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$offers8 = cart.offers) === null || _cart$offers8 === void 0 ? void 0 : (_cart$offers8$filter = _cart$offers8.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _cart$offers8$filter === void 0 ? void 0 : _cart$offers8$filter.map(function (offer) {
    var _offer$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "icon"
    }, offer.name, (offer === null || offer === void 0 ? void 0 : offer.rate_type) === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), /*#__PURE__*/_react.default.createElement(_styles.IconContainer, null, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary,
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_2'
        });
      }
    }), !!(offer !== null && offer !== void 0 && offer.id) && /*#__PURE__*/_react.default.createElement(_MdCloseCircle.default, {
      size: "24",
      color: theme.colors.primary,
      onClick: function onClick() {
        return onRemoveOffer(offer === null || offer === void 0 ? void 0 : offer.id);
      }
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount)));
  })), (cart === null || cart === void 0 ? void 0 : cart.driver_tip) > 0 && !hideDriverTip && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', 'Driver tip'), ' ', (cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate) > 0 && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.driver_tip))))), isCouponEnabled && !isCartPending && (isCheckout || isCartPopover || isMultiCheckout) && !(isCheckout && isCartPopover) && !hideCartDiscount && !hideCouponInput && /*#__PURE__*/_react.default.createElement(_styles.CouponContainer, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    price: cart === null || cart === void 0 ? void 0 : cart.total
  })), !isStore && !isMultiCheckout && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 ? void 0 : (_validationFields$fie8 = _validationFields$fie7.checkout) === null || _validationFields$fie8 === void 0 ? void 0 : (_validationFields$fie9 = _validationFields$fie8.driver_tip) === null || _validationFields$fie9 === void 0 ? void 0 : _validationFields$fie9.enabled) && driverTipsOptions.length > 0 && !useKioskApp && !isCheckout && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u2 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u2 === void 0 ? void 0 : _configs$driver_tip_u2.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t3 = configs.driver_tip_type) === null || _configs$driver_tip_t3 === void 0 ? void 0 : _configs$driver_tip_t3.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true
  }))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((cart === null || cart === void 0 ? void 0 : cart.total) >= 0 ? cart === null || cart === void 0 ? void 0 : cart.total : 0))), !!loyaltyRewardValue && isFinite(loyaltyRewardValue) && isCheckout && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, "\xA0"), /*#__PURE__*/_react.default.createElement("td", {
    id: "loyalty"
  }, t('REWARD_LOYALTY_POINT', 'Reward :amount: on loyalty points').replace(':amount:', loyaltyRewardValue))))), (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && !hideCartComments && /*#__PURE__*/_react.default.createElement("table", {
    className: "comments"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('COMMENTS', 'Comments'))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement(_styles.CommentContainer, null, /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    defaultValue: cart === null || cart === void 0 ? void 0 : cart.comment,
    placeholder: t('SPECIAL_COMMENTS', 'Special Comments'),
    onChange: function onChange(e) {
      return handleChangeComment(e.target.value, user === null || user === void 0 ? void 0 : user.id);
    }
  }), (commentState === null || commentState === void 0 ? void 0 : commentState.loading) && /*#__PURE__*/_react.default.createElement(_styles.Spinner, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      height: 100
    }
  })))))), (cart === null || cart === void 0 ? void 0 : (_cart$payment_events = cart.payment_events) === null || _cart$payment_events === void 0 ? void 0 : _cart$payment_events.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      marginTop: 10
    }
  }, cart === null || cart === void 0 ? void 0 : (_cart$payment_events2 = cart.payment_events) === null || _cart$payment_events2 === void 0 ? void 0 : _cart$payment_events2.map(function (event) {
    var _walletName$cart$wall, _cart$wallets, _cart$wallets$find;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: event.id,
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, (_walletName$cart$wall = walletName[cart === null || cart === void 0 ? void 0 : (_cart$wallets = cart.wallets) === null || _cart$wallets === void 0 ? void 0 : (_cart$wallets$find = _cart$wallets.find(function (wallet) {
      return wallet.id === event.wallet_id;
    })) === null || _cart$wallets$find === void 0 ? void 0 : _cart$wallets$find.type]) === null || _walletName$cart$wall === void 0 ? void 0 : _walletName$cart$wall.name), /*#__PURE__*/_react.default.createElement("span", null, "-", parsePrice(event.amount, {
      isTruncable: true
    })));
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, t('TOTAL_TO_PAY', 'Total to pay')), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, parsePrice(cart === null || cart === void 0 ? void 0 : cart.balance))))), cateringTypes.includes(orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, _extends({
    cateringPreorder: true,
    isCart: true,
    business: cart === null || cart === void 0 ? void 0 : cart.business
  }, cateringValues))), (onClickCheckout || isForceOpenCart) && !isCheckout && (cart === null || cart === void 0 ? void 0 : cart.valid) && (!isMultiCheckout || isStore) && /*#__PURE__*/_react.default.createElement(_styles.CheckoutAction, null, /*#__PURE__*/_react.default.createElement("p", null, (cart === null || cart === void 0 ? void 0 : cart.total) >= 1 && parsePrice(cart === null || cart === void 0 ? void 0 : cart.total)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address) ? 'secundary' : 'primary',
    onClick: function onClick() {
      return checkOutBtnClick(cart === null || cart === void 0 ? void 0 : cart.uuid);
    },
    disabled: openUpselling && !canOpenUpselling || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || !(cart !== null && cart !== void 0 && cart.valid_address)
  }, !(cart !== null && cart !== void 0 && cart.valid_address) ? t('OUT_OF_COVERAGE', 'Out of Coverage') : !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : !openUpselling ^ canOpenUpselling ? t('CHECKOUT', 'Checkout') : t('LOADING', 'Loading')))), !isStore && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
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
    width: "700px",
    open: openProduct,
    padding: "0",
    closeOnBackdrop: true,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    disableOverflowX: true
  }, !(curProduct !== null && curProduct !== void 0 && curProduct.calendar_event) ? /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    isCartProduct: true,
    productCart: curProduct,
    businessSlug: cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.slug,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id,
    onSave: handlerProductAction,
    viewString: viewString
  }) : /*#__PURE__*/_react.default.createElement(_ServiceForm.ServiceForm, {
    isCartProduct: true,
    isService: true,
    productCart: curProduct,
    businessSlug: cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.slug,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id,
    onSave: handlerProductAction,
    professionalSelected: curProduct === null || curProduct === void 0 ? void 0 : (_curProduct$calendar_ = curProduct.calendar_event) === null || _curProduct$calendar_ === void 0 ? void 0 : _curProduct$calendar_.professional
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openTaxModal.open,
    padding: "20px",
    closeOnBackdrop: true,
    title: "".concat(((_openTaxModal$data = openTaxModal.data) === null || _openTaxModal$data === void 0 ? void 0 : _openTaxModal$data.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " ").concat(((_openTaxModal$data2 = openTaxModal.data) === null || _openTaxModal$data2 === void 0 ? void 0 : _openTaxModal$data2.rate_type) !== 2 ? "(".concat(typeof ((_openTaxModal$data3 = openTaxModal.data) === null || _openTaxModal$data3 === void 0 ? void 0 : _openTaxModal$data3.rate) === 'number' ? "".concat((_openTaxModal$data4 = openTaxModal.data) === null || _openTaxModal$data4 === void 0 ? void 0 : _openTaxModal$data4.rate, "%") : "".concat(parsePrice((_openTaxModal$data$fi = (_openTaxModal$data5 = openTaxModal.data) === null || _openTaxModal$data5 === void 0 ? void 0 : _openTaxModal$data5.fixed) !== null && _openTaxModal$data$fi !== void 0 ? _openTaxModal$data$fi : 0), " + ").concat((_openTaxModal$data6 = openTaxModal.data) === null || _openTaxModal$data6 === void 0 ? void 0 : _openTaxModal$data6.percentage, "%"), ")") : '', "  "),
    onClose: function onClose() {
      return setOpenTaxModal({
        open: false,
        data: null,
        type: ''
      });
    },
    modalTitleStyle: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_TaxInformation.TaxInformation, {
    type: openTaxModal.type,
    data: openTaxModal.data,
    products: cart === null || cart === void 0 ? void 0 : cart.products,
    useKioskApp: useKioskApp
  })), (openUpselling || isUpselling) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    useKioskApp: useKioskApp,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    isCustomMode: isCustomMode,
    cartProducts: cart === null || cart === void 0 ? void 0 : cart.products,
    business: cart === null || cart === void 0 ? void 0 : cart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
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
    isStore: isStore,
    pageChangeStore: "business",
    cartuuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
    onClose: function onClose() {
      return setOpenChangeStore(false);
    },
    handleCustomStoreRedirect: handleStoreRedirect
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
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