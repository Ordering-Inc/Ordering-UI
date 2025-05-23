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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var PIXELS_TO_SCROLL = 300;
var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _configs$add_product_, _configs$checkout_mul, _Object$values$find, _businessState$busine, _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$header, _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _currentCart$taxes, _currentCart$products2, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag0, _error$, _theme$defaultLanguag1, _currentCart$products3, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _currentCart$products4, _currentCart$products5, _currentCart$products6, _productModal$error$, _theme$defaultLanguag14, _productModal$product2, _business$professiona3, _currentCart$products7, _currentCart$products8;
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
    _useState0 = _slicedToArray(_useState9, 2),
    openBusinessInformation = _useState0[0],
    setOpenBusinessInformation = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isCartOpen = _useState10[0],
    setIsCartOpen = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isCartModal = _useState12[0],
    setisCartModal = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    subcategoriesSelected = _useState14[0],
    setSubcategoriesSelected = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    productLoading = _useState16[0],
    setProductLoading = _useState16[1];
  var isMounted = (0, _useIsMounted.useIsMounted)();
  var isQuickAddProduct = (configs === null || configs === void 0 || (_configs$add_product_ = configs.add_product_with_one_click) === null || _configs$add_product_ === void 0 ? void 0 : _configs$add_product_.value) === '1';
  var checkoutMultiBusinessEnabled = (configs === null || configs === void 0 || (_configs$checkout_mul = configs.checkout_multi_business_enabled) === null || _configs$checkout_mul === void 0 ? void 0 : _configs$checkout_mul.value) === '1';
  var currentCart = (_Object$values$find = Object.values(carts).find(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === (business === null || business === void 0 ? void 0 : business.slug);
  })) !== null && _Object$values$find !== void 0 ? _Object$values$find : {};
  var isLazy = businessState === null || businessState === void 0 || (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.lazy_load_products_recommended;
  var showViewOrderButton = !(theme !== null && theme !== void 0 && (_theme$business_view = theme.business_view) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.components) !== null && _theme$business_view !== void 0 && (_theme$business_view = _theme$business_view.order_view_button) !== null && _theme$business_view !== void 0 && _theme$business_view.hidden);
  var singleBusinessRedirect = window.localStorage.getItem('single_business');
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
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(product) {
      var _product$extras;
      var _currentCart$products, isProductAddedToCart, productQuantity, minimumPerOrder, addCurrentProduct, updateCurrentProduct, cartData, _product$category, _business$professiona, productSlug, categorySlug;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(((_product$extras = product.extras) === null || _product$extras === void 0 ? void 0 : _product$extras.length) === 0 && !product.inventoried && auth && isQuickAddProduct)) {
              _context.next = 18;
              break;
            }
            setProductLoading(true);
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
            setProductLoading(false);
            _context.next = 24;
            break;
          case 18:
            productSlug = (product === null || product === void 0 ? void 0 : product.slug) || (product === null || product === void 0 ? void 0 : product.id);
            categorySlug = (product === null || product === void 0 || (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.slug) || (product === null || product === void 0 ? void 0 : product.category_id);
            if (!((product === null || product === void 0 ? void 0 : product.type) === 'service' && (business === null || business === void 0 || (_business$professiona = business.professionals) === null || _business$professiona === void 0 ? void 0 : _business$professiona.length) > 0)) {
              if (site !== null && site !== void 0 && site.product_url_template) {
                onProductRedirect({
                  slug: business === null || business === void 0 ? void 0 : business.slug,
                  product: site.product_url_template.includes('product_slug') ? productSlug : product.id,
                  category: site.product_url_template.includes('category_slug') ? categorySlug : product.category_id
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
          case 24:
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
    var _product$category2, _business$professiona2;
    var productSlug = (product === null || product === void 0 ? void 0 : product.slug) || (product === null || product === void 0 ? void 0 : product.id);
    var categorySlug = (product === null || product === void 0 || (_product$category2 = product.category) === null || _product$category2 === void 0 ? void 0 : _product$category2.slug) || (product === null || product === void 0 ? void 0 : product.category_id);
    if (!((product === null || product === void 0 ? void 0 : product.type) === 'service' && (business === null || business === void 0 || (_business$professiona2 = business.professionals) === null || _business$professiona2 === void 0 ? void 0 : _business$professiona2.length) > 0)) {
      if (site !== null && site !== void 0 && site.product_url_template) {
        onProductRedirect({
          slug: business === null || business === void 0 ? void 0 : business.slug,
          product: site.product_url_template.includes('product_slug') ? productSlug : product.id,
          category: site.product_url_template.includes('category_slug') ? categorySlug : product.category_id
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
      var limit = window.scrollY >= (backArrowElement === null || backArrowElement === void 0 ? void 0 : backArrowElement.offsetTop) - 10 && window.scrollY > 0;
      var limitWidth = window.scrollY >= (searchElement === null || searchElement === void 0 ? void 0 : searchElement.offsetTop) + 45 && window.scrollY > 0;
      if (isChew) {
        if (limit && !limitWidth) {
          var classWidthAdded = backArrowElement.classList.contains('fixed-arrow-width');
          !classWidthAdded && backArrowElement.classList.add('fixed-arrow-width');
        } else {
          backArrowElement && backArrowElement.classList.remove('fixed-arrow-width');
        }
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(adjustBusinessId) {
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
      onChangeMetaTag && onChangeMetaTag(business === null || business === void 0 ? void 0 : business.name, business === null || business === void 0 ? void 0 : business.description, business === null || business === void 0 ? void 0 : business.name);
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
  }, !isCustomLayout && !location.pathname.includes('/marketplace') && !singleBusinessRedirect && /*#__PURE__*/_react.default.createElement("div", {
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
    productLoading: productLoading,
    setProductLoading: setProductLoading,
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
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag0 = theme.defaultLanguages) === null || _theme$defaultLanguag0 === void 0 ? void 0 : _theme$defaultLanguag0.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !loading && !business && !location.pathname.includes('/store/') && /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null), error && error.length > 0 && Object.keys(business).length && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: ((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.message) || error[0],
    btnTitle: t('SEARCH_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag1 = theme.defaultLanguages) === null || _theme$defaultLanguag1 === void 0 ? void 0 : _theme$defaultLanguag1.SEARCH_REDIRECT) || 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  })), (currentCart === null || currentCart === void 0 || (_currentCart$products3 = currentCart.products) === null || _currentCart$products3 === void 0 ? void 0 : _currentCart$products3.length) > 0 && auth && !isCartOpen && showViewOrderButton && !checkoutMultiBusinessEnabled && /*#__PURE__*/_react.default.createElement(_FloatingButton.FloatingButton, {
    btnText: !(currentCart !== null && currentCart !== void 0 && currentCart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.MAXIMUM_SUBTOTAL_ORDER) || 'Maximum subtotal order'), ": ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.maximum)) : subtotalWithTaxes < (currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.MINIMUN_SUBTOTAL_ORDER) || 'Minimum subtotal order:'), " ").concat(parsePrice(currentCart === null || currentCart === void 0 ? void 0 : currentCart.minimum)) : !openUpselling !== canOpenUpselling ? t('VIEW_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.VIEW_ORDER) || 'View Order') : t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.LOADING) || 'Loading'),
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
    businessConfigs: business === null || business === void 0 ? void 0 : business.configs,
    productLoading: productLoading
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
    content: t('ERROR_GET_PRODUCT', (theme === null || theme === void 0 || (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.ERROR_GET_PRODUCT) || 'Sorry, we couldn\'t find the requested product.')
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
    }, 0)) || 0,
    setProductLoading: setProductLoading
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
    }, 0)) || 0,
    setProductLoading: setProductLoading
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
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isInitialRender = _useState18[0],
    setIsInitialRender = _useState18[1];
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