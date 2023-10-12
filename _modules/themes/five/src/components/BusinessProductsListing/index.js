"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _reactRouterDom = require("react-router-dom");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _NotFoundSource = require("../NotFoundSource");
var _PageNotFound = require("../../../../../components/PageNotFound");
var _ProductForm = require("../ProductForm");
var _Modal = require("../Modal");
var _Buttons = require("../../styles/Buttons");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _useIsMounted = require("../../../../../hooks/useIsMounted");
var _RenderProductsLayout = require("../RenderProductsLayout");
var _Cart = require("../Cart");
var _Confirm = require("../../../../../components/Confirm");
var _FloatingButton = require("../../../../../components/FloatingButton");
var _UpsellingPage = require("../../../../../components/UpsellingPage");
var _ServiceForm = require("../ServiceForm");
var _OrderContextUI = require("../OrderContextUI");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PIXELS_TO_SCROLL = 300;
var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _configs$add_product_, _configs$checkout_mul, _Object$values$find, _businessState$busine, _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$header, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _currentCart$taxes, _currentCart$products2, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _error$, _theme$defaultLanguag11, _currentCart$products3, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _currentCart$products4, _currentCart$products5, _currentCart$products6, _productModal$error$, _theme$defaultLanguag16, _productModal$product2, _business$professiona3, _currentCart$products7, _currentCart$products8;
  var errors = props.errors,
    openCategories = props.openCategories,
    isInitialRender = props.isInitialRender,
    businessState = props.businessState,
    categorySelected = props.categorySelected,
    searchValue = props.searchValue,
    sortByValue = props.sortByValue,
    categoryState = props.categoryState,
    categoryId = props.categoryId,
    productId = props.productId,
    productModal = props.productModal,
    getNextProducts = props.getNextProducts,
    handleChangeCategory = props.handleChangeCategory,
    handleUpdateInitialRender = props.handleUpdateInitialRender,
    updateProductModal = props.updateProductModal,
    onProductRedirect = props.onProductRedirect,
    handleChangeSearch = props.handleChangeSearch,
    handleSearchRedirect = props.handleSearchRedirect,
    featuredProducts = props.featuredProducts,
    handleChangeSortBy = props.handleChangeSortBy,
    isCartOnProductsList = props.isCartOnProductsList,
    errorQuantityProducts = props.errorQuantityProducts,
    multiRemoveProducts = props.multiRemoveProducts,
    setAlertState = props.setAlertState,
    alertState = props.alertState,
    onCheckoutRedirect = props.onCheckoutRedirect,
    handleUpdateProducts = props.handleUpdateProducts,
    professionalSelected = props.professionalSelected,
    handleChangeProfessionalSelected = props.handleChangeProfessionalSelected,
    onChangeMetaTag = props.onChangeMetaTag,
    onBusinessClick = props.onBusinessClick,
    handleChangePriceFilterValues = props.handleChangePriceFilterValues,
    priceFilterValues = props.priceFilterValues,
    handleUpdateProfessionals = props.handleUpdateProfessionals,
    isCustomerMode = props.isCustomerMode,
    isCustomLayout = props.isCustomLayout,
    notFound = props.notFound,
    setNotFound = props.setNotFound,
    loadedFirstTime = props.loadedFirstTime;
  var business = businessState.business,
    loading = businessState.loading,
    error = businessState.error;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    _useOrder2$ = _useOrder2[0],
    carts = _useOrder2$.carts,
    options = _useOrder2$.options,
    _useOrder2$2 = _useOrder2[1],
    addProduct = _useOrder2$2.addProduct,
    updateProduct = _useOrder2$2.updateProduct;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var location = (0, _reactRouterDom.useLocation)();
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useSite = (0, _orderingComponents.useSite)(),
    _useSite2 = _slicedToArray(_useSite, 1),
    site = _useSite2[0].site;
  var _useBusiness = (0, _orderingComponents.useBusiness)(),
    _useBusiness2 = _slicedToArray(_useBusiness, 2),
    setBusiness = _useBusiness2[1].setBusiness;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openProduct = _useState2[0],
    setModalIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(props.product),
    _useState4 = _slicedToArray(_useState3, 2),
    curProduct = _useState4[0],
    setCurProduct = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openUpselling = _useState6[0],
    setOpenUpselling = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    canOpenUpselling = _useState8[0],
    setCanOpenUpselling = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    openBusinessInformation = _useState10[0],
    setOpenBusinessInformation = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCartOpen = _useState12[0],
    setIsCartOpen = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isCartModal = _useState14[0],
    setisCartModal = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    subcategoriesSelected = _useState16[0],
    setSubcategoriesSelected = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    productToIdLoading = _useState18[0],
    setProductIdToLoading = _useState18[1];
  var isMounted = (0, _useIsMounted.useIsMounted)();
  var isQuickAddProduct = (configs === null || configs === void 0 || (_configs$add_product_ = configs.add_product_with_one_click) === null || _configs$add_product_ === void 0 ? void 0 : _configs$add_product_.value) === '1';
  var checkoutMultiBusinessEnabled = (configs === null || configs === void 0 || (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var isLazy = businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended;
  var showViewOrderButton = !(theme !== null && theme !== void 0 && (_theme$business_view = theme.business_view) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.order_view_button) !== null && _theme$business_view !== void 0 && _theme$business_view.hidden);
  var headerThemeType = theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.header) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.layout) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.type;
  var searchThemeType = theme === null || theme === void 0 || (_theme$business_view3 = theme.business_view) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.product_search) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.layout) === null || _theme$business_view3 === void 0 ? void 0 : _theme$business_view3.type;
  var fullWidthArrowThemes = ['starbucks', 'old', 'red'];
  var isChew = (theme === null || theme === void 0 || (_theme$header = theme.header) === null || _theme$header === void 0 || (_theme$header = _theme$header.components) === null || _theme$header === void 0 || (_theme$header = _theme$header.layout) === null || _theme$header === void 0 || (_theme$header = _theme$header.type) === null || _theme$header === void 0 ? void 0 : _theme$header.toLowerCase()) === 'chew';
  var cateringTypes = [7, 8];
  var cateringPreorder = cateringTypes.includes(options === null || options === void 0 ? void 0 : options.type);
  var sortByOptions = [{
    value: null,
    content: t('SORT_BY', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SORT_BY) || 'Sort By'),
    showOnSelected: t('SORT_BY', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.SORT_BY) || 'Sort By')
  }, {
    value: 'rank',
    content: t('RANK', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.RANK) || 'Rank'),
    showOnSelected: t('RANK', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.RANK) || 'Rank')
  }, {
    value: 'a-z',
    content: t('A_to_Z', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.A_to_Z) || 'A-Z'),
    showOnSelected: t('A_to_Z', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.A_to_Z) || 'A-Z')
  }];
  var subtotalWithTaxes = currentCart === null || currentCart === void 0 || (_currentCart$taxes = currentCart.taxes) === null || _currentCart$taxes === void 0 ? void 0 : _currentCart$taxes.reduce(function (acc, item) {
    if ((item === null || item === void 0 ? void 0 : item.type) === 1) {
      var _item$summary;
      return acc = acc + (item === null || item === void 0 || (_item$summary = item.summary) === null || _item$summary === void 0 ? void 0 : _item$summary.tax);
    }
    return acc = acc;
  }, currentCart === null || currentCart === void 0 ? void 0 : currentCart.subtotal);
  var handler = function handler() {
    setOpenBusinessInformation(true);
  };
  var onProductClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(product) {
      var _currentCart$products, isProductAddedToCart, productQuantity, minimumPerOrder, addCurrentProduct, updateCurrentProduct, cartData, _business$professiona, _product$category;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(product.extras.length === 0 && !product.inventoried && auth && isQuickAddProduct)) {
              _context.next = 18;
              break;
            }
            setProductIdToLoading(product.id);
            isProductAddedToCart = currentCart === null || currentCart === void 0 || (_currentCart$products = currentCart.products) === null || _currentCart$products === void 0 ? void 0 : _currentCart$products.find(function (Cproduct) {
              return Cproduct.id === product.id;
            });
            productQuantity = isProductAddedToCart === null || isProductAddedToCart === void 0 ? void 0 : isProductAddedToCart.quantity;
            minimumPerOrder = (product === null || product === void 0 ? void 0 : product.minimum_per_order) || 1;
            addCurrentProduct = _objectSpread(_objectSpread({}, product), {}, {
              quantity: minimumPerOrder
            });
            updateCurrentProduct = {
              id: product.id,
              code: isProductAddedToCart === null || isProductAddedToCart === void 0 ? void 0 : isProductAddedToCart.code,
              quantity: productQuantity + 1
            };
            cartData = currentCart !== null && currentCart !== void 0 && currentCart.business_id ? currentCart : {
              business_id: business.id
            };
            if (!isProductAddedToCart) {
              _context.next = 13;
              break;
            }
            _context.next = 11;
            return updateProduct(updateCurrentProduct, cartData, isQuickAddProduct);
          case 11:
            _context.next = 15;
            break;
          case 13:
            _context.next = 15;
            return addProduct(addCurrentProduct, cartData, isQuickAddProduct);
          case 15:
            setProductIdToLoading(null);
            _context.next = 22;
            break;
          case 18:
            if (!((product === null || product === void 0 ? void 0 : product.type) === 'service' && (business === null || business === void 0 || (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0)) {
              if (site !== null && site !== void 0 && site.product_url_template) {
                onProductRedirect({
                  slug: business === null || business === void 0 ? void 0 : business.slug,
                  product: site.product_url_template.includes('product_slug') ? product === null || product === void 0 ? void 0 : product.slug : product.id,
                  category: site.product_url_template.includes('category_slug') ? product === null || product === void 0 || (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.slug : product.category_id
                });
              } else {
                onProductRedirect({
                  slug: business === null || business === void 0 ? void 0 : business.slug,
                  product: product.id,
                  category: product.category_id
                });
              }
            }
            setCurProduct(product);
            setModalIsOpen(true);
            events.emit('product_clicked', product);
          case 22:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function onProductClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleCustomProductBannerClick = function handleCustomProductBannerClick(product) {
    var _business$professiona2;
    if (!((product === null || product === void 0 ? void 0 : product.type) === 'service' && (business === null || business === void 0 || (_business$professiona2 = business.professionals) === null || _business$professiona2 === void 0 ? void 0 : _business$professiona2.length) > 0)) {
      if (site !== null && site !== void 0 && site.product_url_template) {
        var _product$category2;
        onProductRedirect({
          slug: business === null || business === void 0 ? void 0 : business.slug,
          product: site.product_url_template.includes('product_slug') ? product === null || product === void 0 ? void 0 : product.slug : product.id,
          category: site.product_url_template.includes('category_slug') ? product === null || product === void 0 || (_product$category2 = product.category) === null || _product$category2 === void 0 ? void 0 : _product$category2.slug : product.category_id
        });
      } else {
        onProductRedirect({
          slug: business === null || business === void 0 ? void 0 : business.slug,
          product: product.id,
          category: product.category_id
        });
      }
    }
    setCurProduct(product);
    setModalIsOpen(true);
  };
  var handlerProductAction = function handlerProductAction(product) {
    if (Object.keys(product).length) {
      setModalIsOpen(false);
      onProductRedirect({
        slug: business === null || business === void 0 ? void 0 : business.slug
      });
    }
  };
  var closeModalProductForm = function closeModalProductForm() {
    setModalIsOpen(false);
    handleUpdateInitialRender(false);
    updateProductModal(null);
    setCurProduct(null);
    setNotFound(false);
    onProductRedirect({
      slug: business === null || business === void 0 ? void 0 : business.slug
    });
  };
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;
    var backArrowElement = document.getElementById('back-arrow');
    var searchElement = document.getElementById('search-component');
    if (backArrowElement) {
      var limit = window.pageYOffset >= (backArrowElement === null || backArrowElement === void 0 ? void 0 : backArrowElement.offsetTop) && window.pageYOffset > 0;
      var limitWidth = window.pageYOffset >= (searchElement === null || searchElement === void 0 ? void 0 : searchElement.offsetTop) + 40 && window.pageYOffset > 0;
      if (isChew) {
        if (limit && !limitWidth) {
          var classWidthAdded = backArrowElement.classList.contains('fixed-arrow-width');
          !classWidthAdded && backArrowElement.classList.add('fixed-arrow-width');
        } else {
          backArrowElement && backArrowElement.classList.remove('fixed-arrow-width');
        }
      }
      if (limit) {
        var classAdded = backArrowElement.classList.contains('fixed-arrow');
        !classAdded && backArrowElement.classList.add('fixed-arrow');
      } else {
        backArrowElement && backArrowElement.classList.remove('fixed-arrow');
      }
    }
    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + PIXELS_TO_SCROLL;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(categoryState.pagination.totalPages === categoryState.pagination.currentPage);
    if (badScrollPosition || categoryState.loading || !hasMore) return;
    getNextProducts({
      isNextPage: true
    });
  }, [categoryState, windowSize.width]);
  var handleChangePage = function handleChangePage(data) {
    if (Object.entries(data.query).length === 0 && openProduct) {
      setModalIsOpen(false);
    }
  };
  var handleUpsellingPage = function handleUpsellingPage() {
    onCheckoutRedirect(currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid);
    setOpenUpselling(false);
    setCanOpenUpselling(false);
  };
  var handleGoToBusinessList = function handleGoToBusinessList() {
    events.emit('go_to_page', {
      page: 'search'
    });
  };
  var adjustBusiness = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(adjustBusinessId) {
      var _carts$adjustBusiness;
      var _carts, products, unavailableProducts, alreadyRemoved;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _carts = carts === null || carts === void 0 ? void 0 : carts[adjustBusinessId];
            products = (carts === null || carts === void 0 || (_carts$adjustBusiness = carts[adjustBusinessId]) === null || _carts$adjustBusiness === void 0 ? void 0 : _carts$adjustBusiness.products) || [];
            unavailableProducts = products.filter(function (product) {
              return product.valid !== true;
            });
            alreadyRemoved = sessionStorage.getItem('already-removed');
            sessionStorage.removeItem('already-removed');
            if (!(unavailableProducts.length > 0)) {
              _context2.next = 11;
              break;
            }
            _context2.t0 = multiRemoveProducts;
            if (!_context2.t0) {
              _context2.next = 10;
              break;
            }
            _context2.next = 10;
            return multiRemoveProducts(unavailableProducts, _carts);
          case 10:
            return _context2.abrupt("return");
          case 11:
            if (alreadyRemoved === 'removed') {
              setAlertState({
                open: true,
                content: [t('NOT_AVAILABLE_PRODUCT', 'This product is not available.')]
              });
            }
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function adjustBusiness(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (categoryId && productId && isInitialRender) {
      var _productModal$product;
      if (productModal !== null && productModal !== void 0 && (_productModal$product = productModal.product) !== null && _productModal$product !== void 0 && _productModal$product.id) {
        setCurProduct(productModal.product);
      }
      setModalIsOpen(true);
    }
  }, [productModal, categoryId, productId, isInitialRender]);
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
    if (categoryId && productId) {
      handleUpdateInitialRender(true);
    }
    events.emit('get_current_view');
  }, []);
  (0, _react.useEffect)(function () {
    var handleClickedBannerProduct = function handleClickedBannerProduct() {
      handleUpdateInitialRender(true);
    };
    events.on('product_banner_clicked', handleClickedBannerProduct);
    return function () {
      events.off('product_banner_clicked', handleClickedBannerProduct);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (!categoryId && !productId) {
      setModalIsOpen(false);
    }
  }, [categoryId, productId]);
  (0, _react.useEffect)(function () {
    if (loading) return;
    if (openProduct) {
      onChangeMetaTag && onChangeMetaTag(curProduct === null || curProduct === void 0 ? void 0 : curProduct.seo_title, curProduct === null || curProduct === void 0 ? void 0 : curProduct.seo_description, curProduct === null || curProduct === void 0 ? void 0 : curProduct.seo_keywords);
    } else {
      onChangeMetaTag && onChangeMetaTag(business === null || business === void 0 ? void 0 : business.slug, business === null || business === void 0 ? void 0 : business.description, business === null || business === void 0 ? void 0 : business.name);
      updateProductModal(null);
      setCurProduct(null);
    }
  }, [openProduct, loading, business, curProduct]);
  (0, _react.useEffect)(function () {
    events.on('change_view', handleChangePage);
    return function () {
      events.off('change_view', handleChangePage);
    };
  }, []);
  (0, _react.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  (0, _react.useEffect)(function () {
    var _business$schedule;
    if (business !== null && business !== void 0 && (_business$schedule = business.schedule) !== null && _business$schedule !== void 0 && _business$schedule.length) {
      window.localStorage.setItem('business_schedule', JSON.stringify(business === null || business === void 0 ? void 0 : business.schedule));
    }
    return function () {
      var _business$schedule2;
      if (business !== null && business !== void 0 && (_business$schedule2 = business.schedule) !== null && _business$schedule2 !== void 0 && _business$schedule2.length) {
        window.localStorage.removeItem('business_schedule');
      }
    };
  }, [business === null || business === void 0 ? void 0 : business.schedule]);
  (0, _react.useEffect)(function () {
    var adjustBusinessId = sessionStorage.getItem('adjust-cart-products');
    if (currentCart && adjustBusinessId) {
      sessionStorage.removeItem('adjust-cart-products');
      adjustBusiness(adjustBusinessId);
    }
  }, [currentCart]);
  (0, _react.useEffect)(function () {
    if (cateringPreorder) {
      setBusiness(business);
    }
    return function () {
      setBusiness({});
    };
  }, [cateringPreorder, business]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductsContainer, null, !props.useKioskApp && /*#__PURE__*/_react.default.createElement(_styles.HeaderContent, {
    useFullWidth: fullWidthArrowThemes.includes(searchThemeType) || fullWidthArrowThemes.includes(headerThemeType)
  }, !isCustomLayout && !location.pathname.includes('/marketplace') && /*#__PURE__*/_react.default.createElement("div", {
    id: "back-arrow"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, {
    className: "back-arrow",
    onClick: function onClick() {
      return handleGoToBusinessList();
    }
  })), (windowSize === null || windowSize === void 0 ? void 0 : windowSize.width) < 576 && /*#__PURE__*/_react.default.createElement(_styles.OrderContextUIWrapper, null, /*#__PURE__*/_react.default.createElement(_OrderContextUI.OrderContextUI, {
    isCheckOut: true
  }))), /*#__PURE__*/_react.default.createElement(_RenderProductsLayout.RenderProductsLayout, {
    errors: errors,
    isError: error,
    isLoading: loading,
    isLazy: isLazy,
    business: business,
    categoryId: categoryId,
    searchValue: searchValue,
    sortByValue: sortByValue,
    currentCart: currentCart,
    businessState: businessState,
    sortByOptions: sortByOptions,
    categoryState: categoryState,
    isCustomLayout: isCustomLayout,
    categoriesState: props.categoriesState,
    useKioskApp: props.useKioskApp,
    categorySelected: categorySelected,
    openCategories: openCategories,
    openBusinessInformation: openBusinessInformation,
    forceShowNearBusiness: props.forceShowNearBusiness,
    isCartOnProductsList: isCartOnProductsList && (currentCart === null || currentCart === void 0 || (_currentCart$products2 = currentCart.products) === null || _currentCart$products2 === void 0 ? void 0 : _currentCart$products2.length) > 0,
    handleChangeSortBy: handleChangeSortBy,
    errorQuantityProducts: errorQuantityProducts,
    onClickCategory: handleChangeCategory,
    featuredProducts: featuredProducts,
    subcategoriesSelected: subcategoriesSelected,
    handler: handler,
    onProductClick: onProductClick,
    handleSearchRedirect: handleSearchRedirect,
    handleChangeSearch: handleChangeSearch,
    setOpenBusinessInformation: setOpenBusinessInformation,
    handleCartOpen: function handleCartOpen(val) {
      return setIsCartOpen(val);
    },
    setSubcategoriesSelected: setSubcategoriesSelected,
    handleUpdateProducts: handleUpdateProducts,
    professionalSelected: professionalSelected,
    handleChangeProfessionalSelected: handleChangeProfessionalSelected,
    onBusinessClick: onBusinessClick,
    priceFilterValues: priceFilterValues,
    handleChangePriceFilterValues: handleChangePriceFilterValues,
    productToIdLoading: productToIdLoading,
    handleUpdateProfessionals: handleUpdateProfessionals,
    isCustomerMode: isCustomerMode,
    handleCustomProductBannerClick: handleCustomProductBannerClick
  }), isMounted && !loading && loadedFirstTime && business && !Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESS_PRODUCTS', (theme === null || theme === void 0 || (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.NOT_FOUND_BUSINESS_PRODUCTS) || 'No products to show at this business, please try with other business.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: function onClickButton() {
      return handleSearchRedirect();
    }
  }), !loading && !business && location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_NOT_FOUND_STORE', (theme === null || theme === void 0 || (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ERROR_NOT_FOUND_STORE) || 'Sorry, an error has occurred with business selected.'),
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), (currentCart === null || currentCart === void 0 || (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0 && auth && !isCartOpen && showViewOrderButton && !checkoutMultiBusinessEnabled && /*#__PURE__*/_react.default.createElement(_FloatingButton.FloatingButton, {
    btnText: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.MAXIMUM_SUBTOTAL_ORDER) || 'Maximum subtotal order'), ": ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.maximum)) : subtotalWithTaxes < (currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.MINIMUN_SUBTOTAL_ORDER) || 'Minimum subtotal order:'), " ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum)) : !openUpselling !== canOpenUpselling ? t('VIEW_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.VIEW_ORDER) || 'View Order') : t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.LOADING) || 'Loading'),
    isSecondaryBtn: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || subtotalWithTaxes < (currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum),
    btnValue: currentCart === null || currentCart === void 0 || (_currentCart$products4 = currentCart.products) === null || _currentCart$products4 === void 0 ? void 0 : _currentCart$products4.length,
    handleClick: function handleClick() {
      return setOpenUpselling(true);
    },
    disabled: openUpselling || !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) || subtotalWithTaxes < (currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum)
  }), (windowSize.width < 1000 || windowSize.height < 600) && (currentCart === null || currentCart === void 0 || (_currentCart$products5 = currentCart.products) === null || _currentCart$products5 === void 0 ? void 0 : _currentCart$products5.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.MobileCartViewWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.total)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return setisCartModal(true);
    }
  }, t('VIEW_CART', 'View cart'))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "45%",
    open: isCartModal,
    onClose: function onClose() {
      return setisCartModal(false);
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCartContent, {
    isModal: true
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, {
    style: {
      textAlign: 'center',
      marginTop: '5px'
    }
  }, t('YOUR_CART', 'Your cart')), (currentCart === null || currentCart === void 0 || (_currentCart$products6 = currentCart.products) === null || _currentCart$products6 === void 0 ? void 0 : _currentCart$products6.length) > 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isStore: true,
    isCustomMode: true,
    isForceOpenCart: true,
    cart: currentCart,
    isCartPending: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.status) === 2,
    isProducts: currentCart.products.length,
    isCartOnProductsList: isCartOnProductsList,
    handleCartOpen: function handleCartOpen(val) {
      return setIsCartOpen(val);
    },
    businessConfigs: business === null || business === void 0 ? void 0 : business.configs
  })) : /*#__PURE__*/_react.default.createElement(_styles.EmptyCart, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-content"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Cart3, null), /*#__PURE__*/_react.default.createElement("p", null, t('ADD_PRODUCTS_IN_YOUR_CART', 'Add products in your cart'))), /*#__PURE__*/_react.default.createElement(_styles.EmptyBtnWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(0)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, null, t('EMPTY_CART', 'Empty cart')))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: props.useKioskApp ? '80%' : '760px',
    open: openProduct,
    closeOnBackdrop: true,
    onClose: function onClose() {
      return closeModalProductForm();
    },
    padding: "0",
    isProductForm: true,
    disableOverflowX: true
  }, productModal.loading && !productModal.error && !productModal.product && /*#__PURE__*/_react.default.createElement(_styles.ProductLoading, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonItem, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 45,
    count: props.useKioskApp ? 12 : 8
  }))), productModal.error && productModal.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_productModal$error$ = productModal.error[0]) === null || _productModal$error$ === void 0 ? void 0 : _productModal$error$.message) || productModal.error[0]
  }), isInitialRender && !productModal.loading && !productModal.error && !productModal.product && notFound && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_GET_PRODUCT', (theme === null || theme === void 0 || (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ERROR_GET_PRODUCT) || 'Sorry, we couldn\'t find the requested product.')
  }), (productModal.product || curProduct) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((productModal === null || productModal === void 0 || (_productModal$product2 = productModal.product) === null || _productModal$product2 === void 0 ? void 0 : _productModal$product2.type) === 'service' || (curProduct === null || curProduct === void 0 ? void 0 : curProduct.type) === 'service') && (business === null || business === void 0 || (_business$professiona3 = business.professionals) === null || _business$professiona3 === void 0 ? void 0 : _business$professiona3.length) > 0 ? /*#__PURE__*/_react.default.createElement(_ServiceForm.ServiceForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    useKioskApp: props.useKioskApp,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    onSave: handlerProductAction,
    professionalList: business === null || business === void 0 ? void 0 : business.professionals,
    professionalSelected: professionalSelected,
    handleChangeProfessional: handleChangeProfessionalSelected,
    handleUpdateProfessionals: handleUpdateProfessionals,
    productAddedToCartLength: (currentCart === null || currentCart === void 0 || (_currentCart$products7 = currentCart.products) === null || _currentCart$products7 === void 0 ? void 0 : _currentCart$products7.reduce(function (productsLength, Cproduct) {
      var _ref3;
      return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === ((_ref3 = productModal.product || curProduct) === null || _ref3 === void 0 ? void 0 : _ref3.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
    }, 0)) || 0
  }) : /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    businessSlug: business === null || business === void 0 ? void 0 : business.slug,
    useKioskApp: props.useKioskApp,
    product: productModal.product || curProduct,
    businessId: business === null || business === void 0 ? void 0 : business.id,
    categoryId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.category_id,
    productId: curProduct === null || curProduct === void 0 ? void 0 : curProduct.id,
    handleUpdateProducts: handleUpdateProducts,
    onSave: handlerProductAction,
    isCustomerMode: isCustomerMode,
    productAddedToCartLength: (currentCart === null || currentCart === void 0 || (_currentCart$products8 = currentCart.products) === null || _currentCart$products8 === void 0 ? void 0 : _currentCart$products8.reduce(function (productsLength, Cproduct) {
      var _ref4;
      return productsLength + ((Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.id) === ((_ref4 = productModal.product || curProduct) === null || _ref4 === void 0 ? void 0 : _ref4.id) ? Cproduct === null || Cproduct === void 0 ? void 0 : Cproduct.quantity : 0);
    }, 0)) || 0
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    open: alertState === null || alertState === void 0 ? void 0 : alertState.open,
    content: t('NOT_AVAILABLE_PRODUCTS', 'These products are not available.'),
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    }
  }), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && openUpselling && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }));
};
var BusinessProductsListing = exports.BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isInitialRender = _useState20[0],
    setIsInitialRender = _useState20[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListingUI,
    isInitialRender: isInitialRender,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    },
    isFetchAllProducts: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessAndProductList, businessProductslistingProps);
};