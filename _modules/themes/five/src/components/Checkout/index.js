"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _Modal = require("../Modal");
var _orderingComponents = require("ordering-components");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _UpsellingPage = require("../UpsellingPage");
var _PaymentOptionStripeLink = require("../PaymentOptionStripeLink");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
var _NotFoundSource = require("../NotFoundSource");
var _AddressDetails = require("../AddressDetails");
var _UserDetails = require("../UserDetails");
var _PaymentOptions = require("../PaymentOptions");
var _PaymentOptionWallet = require("../PaymentOptionWallet");
var _DriverTips = require("../DriverTips");
var _Cart = require("../Cart");
var _Confirm = require("../Confirm");
var _CartContent = require("../CartContent");
var _Select = require("../../styles/Select");
var _PlaceSpot = require("../PlaceSpot");
var _OrderContextUI = require("../OrderContextUI");
var _SignUpForm = require("../SignUpForm");
var _LoginForm = require("../LoginForm");
var _OrderDetail = require("./OrderDetail");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _OrderTypesSquares = require("../OrderTypesSquares");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};
var driverTipsTypes = [1, 2];
var CheckoutUI = function CheckoutUI(props) {
  var _businessDetails$busi, _businessDetails$busi2, _configs$table_numer_, _businessConfigs$find, _businessConfigs$find2, _configs$cash_wallet, _configs$wallet_enabl, _theme$header, _theme$colors, _theme$colors$split, _configs$driver_tip_a, _cart$comment, _cart$offers, _paymethodSelected$da, _paymethodSelected$da2, _cardList$cards, _cartState$cart, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _instructionsOptions$, _theme$checkout, _theme$checkout2, _theme$checkout3, _theme$checkout4, _loyaltyPlansState$re, _creditPointPlan$busi, _cart$business2, _businessDetails$busi3, _theme$images, _configs$google_maps_, _customerState$user, _customerState$user2, _Object$values2, _businessDetails$busi4, _businessDetails$busi5, _businessDetails$busi6, _businessDetails$busi7, _businessDetails$busi8, _businessDetails$busi9, _businessDetails$erro, _businessDetails$erro2, _businessDetails$busi10, _businessDetails$busi11, _businessDetails$busi12, _configs$driver_tip_t, _configs$driver_tip_u, _configs$driver_tip_t2, _cartState$cart$spot_, _cartState$cart2, _cart$business3, _cart$products2, _ref2, _creditPointPlanOnBus, _configs$driver_tip_t3, _configs$driver_tip_u2, _configs$driver_tip_t4, _customerState$user3, _theme$colors2, _options$address, _businessDetails$busi13, _businessDetails$busi14, _cart$paymethod_data;
  var cart = props.cart,
    errors = props.errors,
    placing = props.placing,
    cartState = props.cartState,
    useKioskApp = props.useKioskApp,
    loyaltyPlansState = props.loyaltyPlansState,
    businessDetails = props.businessDetails,
    paymethodSelected = props.paymethodSelected,
    handlePaymethodChange = props.handlePaymethodChange,
    handlerClickPlaceOrder = props.handlerClickPlaceOrder,
    handleOrderRedirect = props.handleOrderRedirect,
    isCustomerMode = props.isCustomerMode,
    isResetPaymethod = props.isResetPaymethod,
    setIsResetPaymethod = props.setIsResetPaymethod,
    handleChangeDeliveryOption = props.handleChangeDeliveryOption,
    instructionsOptions = props.instructionsOptions,
    deliveryOptionSelected = props.deliveryOptionSelected,
    handleStoreRedirect = props.handleStoreRedirect,
    onPlaceOrderClick = props.onPlaceOrderClick,
    setPlaceSpotNumber = props.setPlaceSpotNumber,
    placeSpotNumber = props.placeSpotNumber,
    checkoutFieldsState = props.checkoutFieldsState,
    alseaCheckPriceError = props.alseaCheckPriceError,
    isLoadingCheckprice = props.isLoadingCheckprice;
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    _useOrder2$ = _useOrder2[0],
    options = _useOrder2$.options,
    loading = _useOrder2$.loading;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    userLoading = _useSession2$.loading,
    login = _useSession2[1].login;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    customerState = _useCustomer2[0];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    errorCash = _useState2[0],
    setErrorCash = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    userErrors = _useState4[0],
    setUserErrors = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    isUserDetailsEdit = _useState8[0],
    setIsUserDetailsEdit = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    behalfName = _useState10[0],
    setBehalfName = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isOpen = _useState12[0],
    setIsOpen = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    requiredFields = _useState14[0],
    setRequiredFields = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isSuccess = _useState16[0],
    setIsSuccess = _useState16[1];
  var _useState17 = (0, _react.useState)({
      login: false,
      signup: false,
      isGuest: false,
      stripeLink: false
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    openModal = _useState18[0],
    setOpenModal = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    allowedGuest = _useState20[0],
    setAllowedGuest = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    cardList = _useState22[0],
    setCardList = _useState22[1];
  var _useState23 = (0, _react.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    paymethodClicked = _useState24[0],
    setPaymethodClicked = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    productLoading = _useState26[0],
    setProductLoading = _useState26[1];
  var shouldActivateOrderDetailModal = isCustomerMode && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'stripe_link';
  var orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')];
  var cardsMethods = ['stripe', 'credomatic'];
  var stripePaymethods = ['stripe', 'stripe_connect', 'stripe_redirect'];
  var businessConfigs = (_businessDetails$busi = businessDetails === null || businessDetails === void 0 || (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.configs) !== null && _businessDetails$busi !== void 0 ? _businessDetails$busi : [];
  var isTableNumberEnabled = configs === null || configs === void 0 || (_configs$table_numer_ = configs.table_numer_enabled) === null || _configs$table_numer_ === void 0 ? void 0 : _configs$table_numer_.value;
  var isWalletCashEnabled = ((_businessConfigs$find = businessConfigs.find(function (config) {
    return config.key === 'wallet_cash_enabled';
  })) === null || _businessConfigs$find === void 0 ? void 0 : _businessConfigs$find.value) === '1';
  var isWalletCreditPointsEnabled = ((_businessConfigs$find2 = businessConfigs.find(function (config) {
    return config.key === 'wallet_credit_point_enabled';
  })) === null || _businessConfigs$find2 === void 0 ? void 0 : _businessConfigs$find2.value) === '1';
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !useKioskApp && !isCustomerMode;
  var isMultiDriverTips = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes', 'comments'];
  var hexTest = /[0-9A-Fa-f]{6}/g;
  var primaryColor = theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 || (_theme$colors = _theme$colors.primary) === null || _theme$colors === void 0 || (_theme$colors$split = _theme$colors.split) === null || _theme$colors$split === void 0 || (_theme$colors$split = _theme$colors$split.call(_theme$colors, '#')) === null || _theme$colors$split === void 0 ? void 0 : _theme$colors$split[1];
  var placeSpotTypes = [3, 4, 5];
  var placeSpotsEnabled = placeSpotTypes.includes(options === null || options === void 0 ? void 0 : options.type) && !useKioskApp;
  var isGiftCardCart = !(cart !== null && cart !== void 0 && cart.business_id);
  var checkoutFields = (0, _react.useMemo)(function () {
    var _checkoutFieldsState$;
    return checkoutFieldsState === null || checkoutFieldsState === void 0 || (_checkoutFieldsState$ = checkoutFieldsState.fields) === null || _checkoutFieldsState$ === void 0 ? void 0 : _checkoutFieldsState$.filter(function (field) {
      return field.order_type_id === (options === null || options === void 0 ? void 0 : options.type);
    });
  }, [checkoutFieldsState, options]);
  var guestCheckoutDriveTip = (0, _react.useMemo)(function () {
    return checkoutFields === null || checkoutFields === void 0 ? void 0 : checkoutFields.find(function (field) {
      var _field$validation_fie;
      return driverTipsTypes.includes(field.order_type_id) && (field === null || field === void 0 || (_field$validation_fie = field.validation_field) === null || _field$validation_fie === void 0 ? void 0 : _field$validation_fie.code) === 'driver_tip';
    });
  }, [JSON.stringify(checkoutFields), options]);
  var guestCheckoutComment = (0, _react.useMemo)(function () {
    return checkoutFields === null || checkoutFields === void 0 ? void 0 : checkoutFields.find(function (field) {
      var _field$validation_fie2;
      return field.order_type_id === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 || (_field$validation_fie2 = field.validation_field) === null || _field$validation_fie2 === void 0 ? void 0 : _field$validation_fie2.code) === 'comments';
    });
  }, [JSON.stringify(checkoutFields), options]);
  var guestCheckoutCoupon = (0, _react.useMemo)(function () {
    return checkoutFields === null || checkoutFields === void 0 ? void 0 : checkoutFields.find(function (field) {
      var _field$validation_fie3;
      return field.order_type_id === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 || (_field$validation_fie3 = field.validation_field) === null || _field$validation_fie3 === void 0 ? void 0 : _field$validation_fie3.code) === 'coupon';
    });
  }, [JSON.stringify(checkoutFields), options]);
  var guestCheckoutZipcode = (0, _react.useMemo)(function () {
    return checkoutFields === null || checkoutFields === void 0 ? void 0 : checkoutFields.find(function (field) {
      var _field$validation_fie4;
      return field.order_type_id === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 || (_field$validation_fie4 = field.validation_field) === null || _field$validation_fie4 === void 0 ? void 0 : _field$validation_fie4.code) === 'zipcode';
    });
  }, [JSON.stringify(checkoutFields), options]);

  // const [hasBusinessPlaces, setHasBusinessPlaces] = useState(null)
  var allowDriverTipPickup = (configs === null || configs === void 0 || (_configs$driver_tip_a = configs.driver_tip_allowed_at_pickup) === null || _configs$driver_tip_a === void 0 ? void 0 : _configs$driver_tip_a.value) === '1' && (options === null || options === void 0 ? void 0 : options.type) === 2;
  var validateCommentsCartField = (guestCheckoutComment === null || guestCheckoutComment === void 0 ? void 0 : guestCheckoutComment.enabled) && (user !== null && user !== void 0 && user.guest_id ? guestCheckoutComment === null || guestCheckoutComment === void 0 ? void 0 : guestCheckoutComment.required_with_guest : guestCheckoutComment === null || guestCheckoutComment === void 0 ? void 0 : guestCheckoutComment.required) && ((cart === null || cart === void 0 ? void 0 : cart.comment) === null || (cart === null || cart === void 0 || (_cart$comment = cart.comment) === null || _cart$comment === void 0 ? void 0 : _cart$comment.trim().length) === 0);
  var validateDriverTipField = (options.type === 1 || allowDriverTipPickup) && (guestCheckoutDriveTip === null || guestCheckoutDriveTip === void 0 ? void 0 : guestCheckoutDriveTip.enabled) && (user !== null && user !== void 0 && user.guest_id ? guestCheckoutDriveTip === null || guestCheckoutDriveTip === void 0 ? void 0 : guestCheckoutDriveTip.required_with_guest : guestCheckoutDriveTip === null || guestCheckoutDriveTip === void 0 ? void 0 : guestCheckoutDriveTip.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0;
  var validateCouponField = (guestCheckoutCoupon === null || guestCheckoutCoupon === void 0 ? void 0 : guestCheckoutCoupon.enabled) && (user !== null && user !== void 0 && user.guest_id ? guestCheckoutCoupon === null || guestCheckoutCoupon === void 0 ? void 0 : guestCheckoutCoupon.required_with_guest : guestCheckoutCoupon === null || guestCheckoutCoupon === void 0 ? void 0 : guestCheckoutCoupon.required) && !(cart !== null && cart !== void 0 && (_cart$offers = cart.offers) !== null && _cart$offers !== void 0 && _cart$offers.some(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.type) === 2;
  }));
  var validateZipcodeCard = (guestCheckoutZipcode === null || guestCheckoutZipcode === void 0 ? void 0 : guestCheckoutZipcode.enabled) && (user !== null && user !== void 0 && user.guest_id ? guestCheckoutZipcode === null || guestCheckoutZipcode === void 0 ? void 0 : guestCheckoutZipcode.required_with_guest : guestCheckoutZipcode === null || guestCheckoutZipcode === void 0 ? void 0 : guestCheckoutZipcode.required) && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe' && (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.card) && !(paymethodSelected !== null && paymethodSelected !== void 0 && (_paymethodSelected$da2 = paymethodSelected.data) !== null && _paymethodSelected$da2 !== void 0 && (_paymethodSelected$da2 = _paymethodSelected$da2.card) !== null && _paymethodSelected$da2 !== void 0 && _paymethodSelected$da2.zipcode);
  var isDisablePlaceOrderButton = !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 || cardsMethods.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (cardList === null || cardList === void 0 || (_cardList$cards = cardList.cards) === null || _cardList$cards === void 0 ? void 0 : _cardList$cards.length) === 0 || placing || errorCash || loading || isTableNumberEnabled === '1' && (options === null || options === void 0 ? void 0 : options.type) === 3 && !(cartState !== null && cartState !== void 0 && (_cartState$cart = cartState.cart) !== null && _cartState$cart !== void 0 && _cartState$cart.spot_number || cart !== null && cart !== void 0 && cart.spot_number || placeSpotNumber) || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ||
  // (((placeSpotTypes.includes(options?.type) && !cart?.place) && hasBusinessPlaces)) ||
  validateCommentsCartField || validateDriverTipField || validateCouponField || validateZipcodeCard || !!alseaCheckPriceError || isLoadingCheckprice;
  var driverTipsOptions = typeof (configs === null || configs === void 0 || (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 || (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 || (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var deliveryOptions = (instructionsOptions === null || instructionsOptions === void 0 ? void 0 : instructionsOptions.result) && Array.isArray(instructionsOptions === null || instructionsOptions === void 0 ? void 0 : instructionsOptions.result) && (instructionsOptions === null || instructionsOptions === void 0 || (_instructionsOptions$ = instructionsOptions.result) === null || _instructionsOptions$ === void 0 || (_instructionsOptions$ = _instructionsOptions$.filter(function (option) {
    return option === null || option === void 0 ? void 0 : option.enabled;
  })) === null || _instructionsOptions$ === void 0 ? void 0 : _instructionsOptions$.map(function (option) {
    return {
      value: option === null || option === void 0 ? void 0 : option.id,
      content: t(option === null || option === void 0 ? void 0 : option.name.toUpperCase().replace(/\s/g, '_'), option === null || option === void 0 ? void 0 : option.name),
      showOnSelected: t(option === null || option === void 0 ? void 0 : option.name.toUpperCase().replace(/\s/g, '_'), option === null || option === void 0 ? void 0 : option.name)
    };
  }));
  var hideBusinessAddress = theme === null || theme === void 0 || (_theme$checkout = theme.checkout) === null || _theme$checkout === void 0 || (_theme$checkout = _theme$checkout.components) === null || _theme$checkout === void 0 || (_theme$checkout = _theme$checkout.business) === null || _theme$checkout === void 0 || (_theme$checkout = _theme$checkout.components) === null || _theme$checkout === void 0 || (_theme$checkout = _theme$checkout.address) === null || _theme$checkout === void 0 ? void 0 : _theme$checkout.hidden;
  var hideBusinessDetails = theme === null || theme === void 0 || (_theme$checkout2 = theme.checkout) === null || _theme$checkout2 === void 0 || (_theme$checkout2 = _theme$checkout2.components) === null || _theme$checkout2 === void 0 || (_theme$checkout2 = _theme$checkout2.business) === null || _theme$checkout2 === void 0 ? void 0 : _theme$checkout2.hidden;
  var hideBusinessMap = theme === null || theme === void 0 || (_theme$checkout3 = theme.checkout) === null || _theme$checkout3 === void 0 || (_theme$checkout3 = _theme$checkout3.components) === null || _theme$checkout3 === void 0 || (_theme$checkout3 = _theme$checkout3.map) === null || _theme$checkout3 === void 0 ? void 0 : _theme$checkout3.hidden;
  var hideCustomerDetails = theme === null || theme === void 0 || (_theme$checkout4 = theme.checkout) === null || _theme$checkout4 === void 0 || (_theme$checkout4 = _theme$checkout4.components) === null || _theme$checkout4 === void 0 || (_theme$checkout4 = _theme$checkout4.customer) === null || _theme$checkout4 === void 0 ? void 0 : _theme$checkout4.hidden;
  var driverTipsField = !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && (options.type === 1 || allowDriverTipPickup) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (guestCheckoutDriveTip === null || guestCheckoutDriveTip === void 0 ? void 0 : guestCheckoutDriveTip.enabled) && driverTipsOptions.length > 0 && !useKioskApp;
  var creditPointPlan = loyaltyPlansState === null || loyaltyPlansState === void 0 || (_loyaltyPlansState$re = loyaltyPlansState.result) === null || _loyaltyPlansState$re === void 0 ? void 0 : _loyaltyPlansState$re.find(function (loyal) {
    return loyal.type === 'credit_point';
  });
  var creditPointPlanOnBusiness = creditPointPlan === null || creditPointPlan === void 0 || (_creditPointPlan$busi = creditPointPlan.businesses) === null || _creditPointPlan$busi === void 0 ? void 0 : _creditPointPlan$busi.find(function (b) {
    return b.business_id === (cart === null || cart === void 0 ? void 0 : cart.business_id) && b.accumulates;
  });
  var handlePlaceOrder = function handlePlaceOrder() {
    if (placing) return;
    if (stripePaymethods.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && user !== null && user !== void 0 && user.guest_id) {
      setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: true,
        isGuest: true
      }));
      return;
    }
    if (!userErrors.length && !(requiredFields !== null && requiredFields !== void 0 && requiredFields.length) || (requiredFields === null || requiredFields === void 0 ? void 0 : requiredFields.length) === 1 && isCustomerMode && requiredFields !== null && requiredFields !== void 0 && requiredFields.includes('email')) {
      var body = {};
      if (behalfName) {
        body.on_behalf_of = behalfName;
      }
      if ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe_link') {
        setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
          stripeLink: true
        }));
      }
      handlerClickPlaceOrder && handlerClickPlaceOrder(null, body);
      return;
    }
    if (requiredFields !== null && requiredFields !== void 0 && requiredFields.length) {
      setIsOpen(true);
      return;
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(function (error) {
        return error;
      })
    });
    setIsUserDetailsEdit(true);
  };
  var handlePlaceOrderAsGuest = function handlePlaceOrderAsGuest() {
    setIsOpen(false);
    var body = {};
    if (behalfName) {
      body.on_behalf_of = behalfName;
    }
    handlerClickPlaceOrder && handlerClickPlaceOrder(null, body);
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setIsUserDetailsEdit(false);
  };
  var checkGuestValidationFields = function checkGuestValidationFields() {
    var _checkoutFieldsState$2, _checkoutFieldsState$3, _configs$verification;
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = checkoutFieldsState === null || checkoutFieldsState === void 0 ? void 0 : checkoutFieldsState.fields.filter(function (field) {
      var _field$validation_fie5, _field$validation_fie6, _field$validation_fie7;
      return (field === null || field === void 0 ? void 0 : field.order_type_id) === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 ? void 0 : field.enabled) && (field === null || field === void 0 ? void 0 : field.required_with_guest) && !notFields.includes(field === null || field === void 0 || (_field$validation_fie5 = field.validation_field) === null || _field$validation_fie5 === void 0 ? void 0 : _field$validation_fie5.code) && (field === null || field === void 0 || (_field$validation_fie6 = field.validation_field) === null || _field$validation_fie6 === void 0 ? void 0 : _field$validation_fie6.code) !== 'email' && userSelected && !userSelected[field === null || field === void 0 || (_field$validation_fie7 = field.validation_field) === null || _field$validation_fie7 === void 0 ? void 0 : _field$validation_fie7.code];
    });
    var requiredFieldsCode = _requiredFields.map(function (item) {
      var _item$validation_fiel;
      return item === null || item === void 0 || (_item$validation_fiel = item.validation_field) === null || _item$validation_fiel === void 0 ? void 0 : _item$validation_fiel.code;
    });
    var guestCheckoutCellPhone = checkoutFieldsState === null || checkoutFieldsState === void 0 || (_checkoutFieldsState$2 = checkoutFieldsState.fields) === null || _checkoutFieldsState$2 === void 0 ? void 0 : _checkoutFieldsState$2.find(function (field) {
      var _field$validation_fie8;
      return field.order_type_id === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 || (_field$validation_fie8 = field.validation_field) === null || _field$validation_fie8 === void 0 ? void 0 : _field$validation_fie8.code) === 'mobile_phone';
    });
    var guestCheckoutEmail = checkoutFieldsState === null || checkoutFieldsState === void 0 || (_checkoutFieldsState$3 = checkoutFieldsState.fields) === null || _checkoutFieldsState$3 === void 0 ? void 0 : _checkoutFieldsState$3.find(function (field) {
      var _field$validation_fie9;
      return field.order_type_id === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 || (_field$validation_fie9 = field.validation_field) === null || _field$validation_fie9 === void 0 ? void 0 : _field$validation_fie9.code) === 'email';
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.guest_cellphone) && (guestCheckoutCellPhone !== null && guestCheckoutCellPhone !== void 0 && guestCheckoutCellPhone.enabled && guestCheckoutCellPhone !== null && guestCheckoutCellPhone !== void 0 && guestCheckoutCellPhone.required_with_guest || (configs === null || configs === void 0 || (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      requiredFieldsCode.push('cellphone');
    }
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.guest_email) && guestCheckoutEmail !== null && guestCheckoutEmail !== void 0 && guestCheckoutEmail.enabled && guestCheckoutEmail !== null && guestCheckoutEmail !== void 0 && guestCheckoutEmail.required_with_guest) {
      requiredFieldsCode.push('email');
    }
    setRequiredFields(requiredFieldsCode);
  };
  var checkValidationFields = function checkValidationFields() {
    var _Object$values, _configs$verification2;
    setUserErrors([]);
    var errors = [];
    var UKCodes = ['44'];
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = [];
    Object.values(checkoutFieldsState === null || checkoutFieldsState === void 0 ? void 0 : checkoutFieldsState.fields).map(function (field) {
      var _field$validation_fie10;
      if ((options === null || options === void 0 ? void 0 : options.type) === (field === null || field === void 0 ? void 0 : field.order_type_id) && field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field === null || field === void 0 || (_field$validation_fie10 = field.validation_field) === null || _field$validation_fie10 === void 0 ? void 0 : _field$validation_fie10.code)) {
        var _field$validation_fie11;
        if (userSelected && !userSelected[field === null || field === void 0 || (_field$validation_fie11 = field.validation_field) === null || _field$validation_fie11 === void 0 ? void 0 : _field$validation_fie11.code]) {
          var _field$validation_fie12;
          _requiredFields.push(field === null || field === void 0 || (_field$validation_fie12 = field.validation_field) === null || _field$validation_fie12 === void 0 ? void 0 : _field$validation_fie12.code);
        }
      }
    });
    var mobilePhoneField = (_Object$values = Object.values(checkoutFieldsState === null || checkoutFieldsState === void 0 ? void 0 : checkoutFieldsState.fields)) === null || _Object$values === void 0 ? void 0 : _Object$values.find(function (field) {
      var _field$validation_fie13;
      return (field === null || field === void 0 ? void 0 : field.order_type_id) === (options === null || options === void 0 ? void 0 : options.type) && (field === null || field === void 0 || (_field$validation_fie13 = field.validation_field) === null || _field$validation_fie13 === void 0 ? void 0 : _field$validation_fie13.code) === 'mobile_phone';
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (mobilePhoneField !== null && mobilePhoneField !== void 0 && mobilePhoneField.enabled && mobilePhoneField !== null && mobilePhoneField !== void 0 && mobilePhoneField.required || (configs === null || configs === void 0 || (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1')) {
      _requiredFields.push('cellphone');
    }
    setRequiredFields(_requiredFields);
    if (userSelected && userSelected !== null && userSelected !== void 0 && userSelected.cellphone) {
      if (userSelected !== null && userSelected !== void 0 && userSelected.country_phone_code) {
        var _phoneNumber$isPossib, _phoneNumber$isValid, _configs$validation_p, _configs$validation_p2;
        var phone = null;
        phone = "+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code).concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone.replace("+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code), ''));
        var phoneNumber = (0, _libphonenumberJs.default)(phone);
        var enableIspossibly = false;
        if (UKCodes.includes(phoneNumber === null || phoneNumber === void 0 ? void 0 : phoneNumber.countryCallingCode)) {
          var inputNumber = userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone;
          var validationsForUK = ['01', '02', '07', '0800', '0808', '0845', '0870', '0871', '16'];
          var result = validationsForUK.some(function (areaCode) {
            return inputNumber === null || inputNumber === void 0 ? void 0 : inputNumber.startsWith(areaCode);
          });
          enableIspossibly = result;
        }
        var validation = enableIspossibly ? phoneNumber === null || phoneNumber === void 0 || (_phoneNumber$isPossib = phoneNumber.isPossible) === null || _phoneNumber$isPossib === void 0 ? void 0 : _phoneNumber$isPossib.call(phoneNumber) : phoneNumber === null || phoneNumber === void 0 || (_phoneNumber$isValid = phoneNumber.isValid) === null || _phoneNumber$isValid === void 0 ? void 0 : _phoneNumber$isValid.call(phoneNumber);
        if (parseInt((_configs$validation_p = configs === null || configs === void 0 || (_configs$validation_p2 = configs.validation_phone_number_lib) === null || _configs$validation_p2 === void 0 ? void 0 : _configs$validation_p2.value) !== null && _configs$validation_p !== void 0 ? _configs$validation_p : 1, 10) && !validation) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'));
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      }
    }
    setUserErrors(errors);
  };
  var handleSuccessSignup = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(user) {
      var _user$session;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return login({
              user: user,
              token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
            });
          case 2:
            if (openModal !== null && openModal !== void 0 && openModal.isGuest && (requiredFields === null || requiredFields === void 0 ? void 0 : requiredFields.length) === 0) {
              handlePlaceOrderAsGuest();
            }
            setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
              signup: false,
              isGuest: false
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSuccessSignup(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (user) setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
      login: false
    }));
  };
  var handleScrollTo = function handleScrollTo() {
    if (!(!paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2)) return;
    var scrollElement = document.querySelector('.paymentsContainer');
    window.scrollTo(0, scrollElement.offsetTop - 20);
  };
  (0, _react.useEffect)(function () {
    if (checkoutFieldsState !== null && checkoutFieldsState !== void 0 && checkoutFieldsState.loading || customerState.loading || userLoading) return;
    if (user !== null && user !== void 0 && user.guest_id) {
      checkGuestValidationFields();
    } else {
      checkValidationFields();
    }
  }, [checkoutFieldsState, user, customerState, options === null || options === void 0 ? void 0 : options.type]);
  (0, _react.useEffect)(function () {
    if (errors) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  (0, _react.useEffect)(function () {
    if (isResetPaymethod) {
      handlePaymethodChange(null);
      setIsResetPaymethod(true);
      // changePaymethod(cart?.business_id, null, null)
    }
  }, [isResetPaymethod]);
  (0, _react.useEffect)(function () {
    var _cart$products;
    if (cart !== null && cart !== void 0 && (_cart$products = cart.products) !== null && _cart$products !== void 0 && _cart$products.length || !userLoading) return;
    if ((cart === null || cart === void 0 ? void 0 : cart.business_id) !== null) {
      var _cart$business;
      handleStoreRedirect(cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug);
    } else {
      events.emit('go_to_page', {
        page: 'wallets'
      });
    }
  }, [JSON.stringify(cart === null || cart === void 0 ? void 0 : cart.products)]);
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContent, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContent, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, {
    className: "back-arrow",
    onClick: function onClick() {
      return history.goBack();
    }
  }), (windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) < 576 && /*#__PURE__*/_react.default.createElement(_styles.OrderContextUIWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderContextUI.OrderContextUI, {
    isCheckOut: true
  }))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), /*#__PURE__*/_react.default.createElement("h2", {
    className: "checkout-title"
  }, t('CHECKOUT', 'Checkout')), !useKioskApp ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (cart === null || cart === void 0 ? void 0 : cart.business_id) && !hideBusinessMap && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessDetails !== null && businessDetails !== void 0 && businessDetails.loading || cartState.loading ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })) : /*#__PURE__*/_react.default.createElement(_AddressDetails.AddressDetails, {
    location: cart === null || cart === void 0 || (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.location,
    businessLogo: (businessDetails === null || businessDetails === void 0 || (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo),
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs,
    isCustomerMode: isCustomerMode,
    cart: cart,
    primaryColor: hexTest.test(primaryColor || '') ? "0x".concat(primaryColor) : 'red'
  })), !hideCustomerDetails && /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, cartState.loading || isCustomerMode && !(customerState !== null && customerState !== void 0 && (_customerState$user = customerState.user) !== null && _customerState$user !== void 0 && _customerState$user.id) ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  })) : user !== null && user !== void 0 && user.guest_id && !allowedGuest ? /*#__PURE__*/_react.default.createElement(_styles.AuthButtonList, null, /*#__PURE__*/_react.default.createElement("h2", null, t('CUSTOMER_DETAILS', 'Customer details')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: true
      }));
    }
  }, t('SIGN_UP', 'Sign up')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        login: true
      }));
    }
  }, t('LOGIN', 'Login')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "black",
    outline: true,
    onClick: function onClick() {
      return setAllowedGuest(true);
    }
  }, t('CONTINUE_AS_GUEST', 'Continue as guest'))) : /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id),
    isOrderTypeValidationField: true,
    requiredFields: requiredFields,
    checkoutFields: checkoutFields,
    isSuccess: isSuccess,
    isCheckout: true
  }))), (cart === null || cart === void 0 ? void 0 : cart.business_id) && !hideBusinessDetails && /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.loading) || cartState.loading) && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.error) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }))), !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && ((_Object$values2 = Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement("div", null, !hideBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.address), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.name), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi6 = businessDetails.business) === null || _businessDetails$busi6 === void 0 ? void 0 : _businessDetails$busi6.email), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi7 = businessDetails.business) === null || _businessDetails$busi7 === void 0 ? void 0 : _businessDetails$busi7.cellphone), (businessDetails === null || businessDetails === void 0 || (_businessDetails$busi8 = businessDetails.business) === null || _businessDetails$busi8 === void 0 ? void 0 : _businessDetails$busi8.address_notes) && /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi9 = businessDetails.business) === null || _businessDetails$busi9 === void 0 ? void 0 : _businessDetails$busi9.address_notes))), (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error) && (businessDetails === null || businessDetails === void 0 || (_businessDetails$erro = businessDetails.error) === null || _businessDetails$erro === void 0 ? void 0 : _businessDetails$erro.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (businessDetails === null || businessDetails === void 0 || (_businessDetails$erro2 = businessDetails.error[0]) === null || _businessDetails$erro2 === void 0 ? void 0 : _businessDetails$erro2.message) || (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error[0])
  }))), /*#__PURE__*/_react.default.createElement(_styles.CheckOutDivider, null)) : /*#__PURE__*/_react.default.createElement(_styles.WrapperActionsInput, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WHATS_YOUR_NAME', "What's your name?")), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('WRITE_YOUR_NAME', 'Write your name'),
    autoComplete: "off",
    onChange: function onChange(e) {
      var _e$target;
      return setBehalfName(e === null || e === void 0 || (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
    }
  })), cartState.loading && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    style: {
      marginBottom: '10px'
    }
  }))), !useKioskApp && (cart === null || cart === void 0 ? void 0 : cart.business_id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartState.loading && deliveryOptionSelected !== undefined && (options === null || options === void 0 ? void 0 : options.type) === 1 && /*#__PURE__*/_react.default.createElement(_styles.DeliveryOptionsContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_DETAILS', 'Delivery Details')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: deliveryOptionSelected,
    options: deliveryOptions,
    onChange: function onChange(val) {
      return handleChangeDeliveryOption(val);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.CheckOutDivider, null)), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, {
    className: "paymentsContainer"
  }, /*#__PURE__*/_react.default.createElement(_styles.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement(_styles.Flag, null, t('REQUIRED', 'Required'))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    useKioskApp: useKioskApp,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: !isGiftCardCart ? businessDetails === null || businessDetails === void 0 || (_businessDetails$busi10 = businessDetails.business) === null || _businessDetails$busi10 === void 0 ? void 0 : _businessDetails$busi10.id : -1,
    isLoading: !isGiftCardCart ? businessDetails.loading : false,
    paymethods: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi11 = businessDetails.business) === null || _businessDetails$busi11 === void 0 ? void 0 : _businessDetails$busi11.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isCustomerMode: isCustomerMode,
    paySelected: paymethodSelected,
    handlePlaceOrder: handlePlaceOrder,
    onPlaceOrderClick: onPlaceOrderClick,
    setCardList: setCardList,
    requiredFields: requiredFields,
    openUserModal: setIsOpen,
    paymethodClicked: paymethodClicked,
    setPaymethodClicked: setPaymethodClicked,
    validateDriverTipField: validateDriverTipField
  })), isWalletEnabled && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.loading) && /*#__PURE__*/_react.default.createElement(_styles.WalletPaymentOptionContainer, null, /*#__PURE__*/_react.default.createElement(_PaymentOptionWallet.PaymentOptionWallet, {
    cart: cart,
    loyaltyPlansState: loyaltyPlansState,
    businessConfigs: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi12 = businessDetails.business) === null || _businessDetails$busi12 === void 0 ? void 0 : _businessDetails$busi12.configs
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, isCustomerMode && /*#__PURE__*/_react.default.createElement(_OrderTypesSquares.OrderTypesSquares, null), !!(!isMultiDriverTips && driverTipsField) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true
  })), /*#__PURE__*/_react.default.createElement(_styles.DriverTipDivider, null)), !cartState.loading && placeSpotsEnabled && (cart === null || cart === void 0 ? void 0 : cart.business_id) && /*#__PURE__*/_react.default.createElement(_styles.SelectSpotContainer, null, /*#__PURE__*/_react.default.createElement(_PlaceSpot.PlaceSpot, {
    isCustomerMode: isCustomerMode,
    isCheckout: true,
    isInputMode: true,
    isHomeStyle: true,
    cart: cart,
    spotNumberDefault: (_cartState$cart$spot_ = cartState === null || cartState === void 0 || (_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.spot_number) !== null && _cartState$cart$spot_ !== void 0 ? _cartState$cart$spot_ : cart === null || cart === void 0 ? void 0 : cart.spot_number,
    vehicleDefault: cart === null || cart === void 0 ? void 0 : cart.vehicle,
    setPlaceSpotNumber: setPlaceSpotNumber
  })), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CartHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MOBILE_FRONT_YOUR_ORDER', 'Your order')), (cart === null || cart === void 0 || (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.slug) && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      var _cart$business4, _cart$business5;
      return (cart === null || cart === void 0 || (_cart$business4 = cart.business) === null || _cart$business4 === void 0 ? void 0 : _cart$business4.slug) && handleStoreRedirect && handleStoreRedirect(cart === null || cart === void 0 || (_cart$business5 = cart.business) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.slug);
    }
  }, t('ADD_PRODUCTS', 'Add products'))), /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    cart: cart,
    useKioskApp: useKioskApp,
    isCheckout: true,
    isProducts: (cart === null || cart === void 0 || (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length) || 0,
    viewString: "checkout",
    businessConfigs: businessConfigs,
    loyaltyRewardRate: (_ref2 = (_creditPointPlanOnBus = creditPointPlanOnBusiness === null || creditPointPlanOnBusiness === void 0 ? void 0 : creditPointPlanOnBusiness.accumulation_rate) !== null && _creditPointPlanOnBus !== void 0 ? _creditPointPlanOnBus : !!creditPointPlanOnBusiness && (creditPointPlan === null || creditPointPlan === void 0 ? void 0 : creditPointPlan.accumulation_rate)) !== null && _ref2 !== void 0 ? _ref2 : 0,
    hideCommentsByValidationCheckout: !(guestCheckoutComment !== null && guestCheckoutComment !== void 0 && guestCheckoutComment.enabled),
    hideCouponByValidationCheckout: !(guestCheckoutCoupon !== null && guestCheckoutCoupon !== void 0 && guestCheckoutCoupon.enabled),
    productLoading: productLoading,
    setProductLoading: setProductLoading
  }), isLoadingCheckprice && /*#__PURE__*/_react.default.createElement(_styles.SpinnerContainer, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, null))), !!(isMultiDriverTips && driverTipsField) && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t3 = configs.driver_tip_type) === null || _configs$driver_tip_t3 === void 0 ? void 0 : _configs$driver_tip_t3.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u2 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u2 === void 0 ? void 0 : _configs$driver_tip_u2.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t4 = configs.driver_tip_type) === null || _configs$driver_tip_t4 === void 0 ? void 0 : _configs$driver_tip_t4.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true
  })), windowSize.width >= 576 && !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: isDisablePlaceOrderButton,
    onClick: function onClick() {
      return shouldActivateOrderDetailModal ? setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        orderDetail: true
      })) : handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING_ORDER', 'Placing order') : t('PLACE_ORDER', 'Place Order'))), isCustomerMode && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe_link' && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    onClick: function onClick() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        stripeLink: true
      }));
    }
  }, t('RESEND_STRIPE_LIKE', 'Resend stripe link'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')), isTableNumberEnabled === '1' && (options === null || options === void 0 ? void 0 : options.type) === 3 && !(cart !== null && cart !== void 0 && cart.spot_number || placeSpotNumber) && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')), validateDriverTipField && !isGiftCardCart && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')), validateCouponField && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_COUPON_FIELD', 'Coupon is required.')), validateCommentsCartField && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_CART_COMMENTS', 'Cart comments is required.')), validateZipcodeCard && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_CARD_ZIPCODE_REQUIRED', 'Your card selected has not zipcode')), !!alseaCheckPriceError && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, alseaCheckPriceError), isLoadingCheckprice && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('RECALCULATING_TOTAL_PRICE', 'Recalculating total price')), (cart === null || cart === void 0 ? void 0 : cart.valid_preorder) !== undefined && !(cart !== null && cart !== void 0 && cart.valid_preorder) && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_MOMENT', 'Selected schedule time is invalid, please select a schedule into the business schedule interval.'))), windowSize.width < 576 && !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.MobileWrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.total)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: isDisablePlaceOrderButton,
    onClick: function onClick() {
      return isDisablePlaceOrderButton ? handleScrollTo('.paymentsContainer') : shouldActivateOrderDetailModal ? setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        orderDetail: true
      })) : handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CUSTOMER_DETAILS', 'Customer Details'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isOpen,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 || (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id),
    requiredFields: requiredFields,
    setIsSuccess: setIsSuccess,
    isCheckout: true,
    isCheckoutPlace: true,
    isEdit: true,
    isModal: true,
    handlePlaceOrderAsGuest: handlePlaceOrderAsGuest,
    isOrderTypeValidationField: true,
    checkoutFields: checkoutFields,
    isAllowGuest: (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'card_delivery',
    onClose: function onClose() {
      setIsOpen(false);
      if (paymethodClicked) {
        setPaymethodClicked(_objectSpread(_objectSpread({}, paymethodClicked), {}, {
          confirmed: true
        }));
      } else {
        handlePlaceOrder();
      }
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.signup,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        signup: false,
        isGuest: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_SignUpForm.SignUpForm, {
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true,
    isGuest: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.login,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        login: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_LoginForm.LoginForm, {
    handleSuccessLogin: handleSuccessLogin,
    isPopup: true,
    isGuest: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.orderDetail,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        orderDetail: false
      }));
    },
    title: orderTypeList[(options === null || options === void 0 ? void 0 : options.type) - 1] || t('DELIVERY', 'Delivery'),
    titleStyle: {
      color: theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.primary,
      fontSize: 30
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderDetail.OrderDetail, {
    item: cart,
    placingOrder: placing,
    orderType: options === null || options === void 0 ? void 0 : options.type,
    customerAddress: options === null || options === void 0 || (_options$address = options.address) === null || _options$address === void 0 ? void 0 : _options$address.address,
    onClick: handlePlaceOrder
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal.stripeLink,
    width: "650px",
    padding: "30px 10px",
    onClose: function onClose() {
      return setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
        stripeLink: false
      }));
    },
    title: t('SEND_SMS_WHATSAPP', 'Send SMS/WhatsApp'),
    modalIconStyle: {
      top: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeLink.PaymentOptionStripeLink, {
    businessConfigs: (_businessDetails$busi13 = businessDetails === null || businessDetails === void 0 || (_businessDetails$busi14 = businessDetails.business) === null || _businessDetails$busi14 === void 0 ? void 0 : _businessDetails$busi14.configs) !== null && _businessDetails$busi13 !== void 0 ? _businessDetails$busi13 : [],
    paymentURL: cart === null || cart === void 0 || (_cart$paymethod_data = cart.paymethod_data) === null || _cart$paymethod_data === void 0 || (_cart$paymethod_data = _cart$paymethod_data.result) === null || _cart$paymethod_data === void 0 ? void 0 : _cart$paymethod_data.payment_url
  })));
};
var Checkout = exports.Checkout = function Checkout(props) {
  var _Object$values3, _cartState$error, _cartState$cart3;
  var errors = props.errors,
    clearErrors = props.clearErrors,
    cartUuid = props.cartUuid,
    handleOrderRedirect = props.handleOrderRedirect,
    handleCheckoutRedirect = props.handleCheckoutRedirect,
    handleSearchRedirect = props.handleSearchRedirect,
    handleCheckoutListRedirect = props.handleCheckoutListRedirect,
    businessSlug = props.businessSlug;
  var _useOrder3 = (0, _orderingComponents.useOrder)(),
    _useOrder4 = _slicedToArray(_useOrder3, 2),
    orderState = _useOrder4[0],
    confirmCart = _useOrder4[1].confirmCart;
  var _useSession3 = (0, _orderingComponents.useSession)(),
    _useSession4 = _slicedToArray(_useSession3, 1),
    token = _useSession4[0].token;
  var _useApi3 = (0, _orderingComponents.useApi)(),
    _useApi4 = _slicedToArray(_useApi3, 1),
    ordering = _useApi4[0];
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useState27 = (0, _react.useState)({
      loading: true,
      error: null,
      cart: null
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    cartState = _useState28[0],
    setCartState = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    openUpselling = _useState30[0],
    setOpenUpselling = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    canOpenUpselling = _useState32[0],
    setCanOpenUpselling = _useState32[1];
  var _useState33 = (0, _react.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    currentCart = _useState34[0],
    setCurrentCart = _useState34[1];
  var _useState35 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    alertState = _useState36[0],
    setAlertState = _useState36[1];
  var _useState37 = (0, _react.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    isResetPaymethod = _useState38[0],
    setIsResetPaymethod = _useState38[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && (((_Object$values3 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values3 === void 0 ? void 0 : _Object$values3.filter(function (cart) {
    var _cart$products3;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 || (_cart$products3 = cart.products) === null || _cart$products3 === void 0 ? void 0 : _cart$products3.length);
  })) || null);
  var carts = businessSlug ? cartsWithProducts.filter(function (cart) {
    var _cart$business6;
    return (cart === null || cart === void 0 || (_cart$business6 = cart.business) === null || _cart$business6 === void 0 ? void 0 : _cart$business6.slug) === businessSlug || businessSlug === (cart === null || cart === void 0 ? void 0 : cart.business_id);
  }) : cartsWithProducts;
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    clearErrors && clearErrors();
  };
  var handleUpsellingPage = function handleUpsellingPage() {
    setOpenUpselling(false);
    setCurrentCart(null);
    setCanOpenUpselling(false);
    handleCheckoutRedirect(currentCart.uuid);
  };
  (0, _react.useEffect)(function () {
    if (!orderState.loading && currentCart !== null && currentCart !== void 0 && currentCart.business_id) {
      var _Object$values4;
      setCurrentCart.apply(void 0, _toConsumableArray((_Object$values4 = Object.values(orderState.carts)) === null || _Object$values4 === void 0 ? void 0 : _Object$values4.filter(function (cart) {
        return (cart === null || cart === void 0 ? void 0 : cart.business_id) === (currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id);
      })));
    }
  }, [orderState.loading]);
  (0, _react.useEffect)(function () {
    if (currentCart !== null && currentCart !== void 0 && currentCart.products) {
      setOpenUpselling(true);
    }
  }, [currentCart]);
  (0, _react.useEffect)(function () {
    if (errors !== null && errors !== void 0 && errors.length) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  var getOrder = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cartId) {
      var _result$order, result, cart, userCustomer, url, response, content, _result, credomaticData, urlParams, paramsObj, _confirmCartRes$resul, confirmCartRes, _cart, spotNumberFromStorage, _JSON$parse, _JSON$parse2, _cart2, spotNumber, slug;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            result = {};
            cart = carts.find(function (cart) {
              return cart.uuid === cartId;
            });
            userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
            if (!(cart && !userCustomer)) {
              _context2.next = 8;
              break;
            }
            result = _objectSpread({}, cart);
            _context2.next = 17;
            break;
          case 8:
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
            _context2.next = 12;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId
              }
            });
          case 12:
            response = _context2.sent;
            _context2.next = 15;
            return response.json();
          case 15:
            content = _context2.sent;
            result = content.result;
          case 17:
            if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
              _context2.next = 22;
              break;
            }
            handleOrderRedirect(result.order.uuid);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false
            }));
            _context2.next = 43;
            break;
          case 22:
            if (!(result.status === 2)) {
              _context2.next = 39;
              break;
            }
            credomaticData = null;
            if (((_result = result) === null || _result === void 0 || (_result = _result.paymethod_data) === null || _result === void 0 ? void 0 : _result.gateway) === 'credomatic') {
              urlParams = new URLSearchParams(window.location.search);
              paramsObj = Object.fromEntries(urlParams.entries());
              credomaticData = {
                credomatic: _objectSpread({}, paramsObj)
              };
            }
            _context2.prev = 25;
            _context2.next = 28;
            return confirmCart(cartUuid, credomaticData);
          case 28:
            confirmCartRes = _context2.sent;
            if (confirmCartRes.error) {
              setAlertState({
                open: true,
                content: typeof confirmCartRes.result === 'string' ? [confirmCartRes.result] : confirmCartRes.result
              });
              setIsResetPaymethod(true);
            }
            if ((_confirmCartRes$resul = confirmCartRes.result.order) !== null && _confirmCartRes$resul !== void 0 && _confirmCartRes$resul.uuid) {
              handleOrderRedirect(confirmCartRes.result.order.uuid);
            }
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              cart: result
            }));
            _context2.next = 37;
            break;
          case 34:
            _context2.prev = 34;
            _context2.t0 = _context2["catch"](25);
            setAlertState({
              open: true,
              content: [_context2.t0.message]
            });
          case 37:
            _context2.next = 43;
            break;
          case 39:
            _cart = Array.isArray(result) ? null : result;
            spotNumberFromStorage = window.localStorage.getItem('table_number');
            if (spotNumberFromStorage) {
              spotNumber = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.tableNumber;
              slug = (_JSON$parse2 = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.slug;
              if (((_cart2 = _cart) === null || _cart2 === void 0 || (_cart2 = _cart2.business) === null || _cart2 === void 0 ? void 0 : _cart2.slug) === slug) {
                _cart = _objectSpread(_objectSpread({}, _cart), {}, {
                  spot_number: parseInt(spotNumber, 10)
                });
              }
            }
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              cart: _cart,
              error: _cart ? null : result
            }));
          case 43:
            _context2.next = 48;
            break;
          case 45:
            _context2.prev = 45;
            _context2.t1 = _context2["catch"](0);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              error: [_context2.t1.toString()]
            }));
          case 48:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 45], [25, 34]]);
    }));
    return function getOrder(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (token && cartUuid) {
      getOrder(cartUuid);
    } else {
      setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
        loading: false
      }));
    }
  }, [token, cartUuid]);
  var checkoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutUI,
    cartState: cartState,
    uuid: cartUuid,
    isResetPaymethod: isResetPaymethod,
    setIsResetPaymethod: setIsResetPaymethod
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && orderState.carts && carts && (carts === null || carts === void 0 ? void 0 : carts.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !cartUuid && orderState.carts && carts && (carts === null || carts === void 0 ? void 0 : carts.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CartsList, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: carts,
    isOrderStateCarts: !!orderState.carts,
    isForceOpenCart: true
  })), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartState.loading && !(window.location.pathname === '/checkout') && /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 100,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '15px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  })), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 60
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 80,
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 25
  }))), cartUuid && cartState.cart && ((_cartState$cart3 = cartState.cart) === null || _cartState$cart3 === void 0 ? void 0 : _cartState$cart3.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('CHECKOUT ', 'Checkout'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};