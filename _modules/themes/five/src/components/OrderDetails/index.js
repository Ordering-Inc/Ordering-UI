"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _BsExclamationTriangle = _interopRequireDefault(require("@meronex/icons/bs/BsExclamationTriangle"));
var _Buttons = require("../../styles/Buttons");
var _NotFoundSource = require("../NotFoundSource");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _Modal = require("../Modal");
var _Messages = require("../Messages");
var _ReviewOrder = require("../ReviewOrder");
var _ReviewProduct = require("../ReviewProduct");
var _ReviewDriver = require("../ReviewDriver");
var _ProductShare = require("../ProductShare");
var _OrderBillSection = require("./OrderBillSection");
var _ActionsSection = require("./ActionsSection");
var _OrderPreferencesSections = require("./OrderPreferencesSections");
var _PlaceSpot = require("../PlaceSpot");
var _SendGiftCard = require("../GiftCard/SendGiftCard");
var _Confirm = require("../Confirm");
var _OrderEta = require("./OrderEta");
var _Starbucks = require("./layouts/Starbucks");
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _TaxInformation = require("../TaxInformation");
var _utils = require("../../../../../utils");
var _OrderHistory = require("./OrderHistory");
var _ReviewProfessional = require("../ReviewProfessional");
var _OrderActionsSection = require("./OrderActionsSection");
var _OrderHeaderInfoSection = require("./OrderHeaderInfoSection");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderDetailsUI = function OrderDetailsUI(props) {
  var _configs$google_maps_, _configs$powered_by_o, _configs$alternative_, _configs$change_order, _theme$confirmation, _theme$confirmation2, _theme$confirmation3, _theme$confirmation4, _theme$confirmation5, _theme$confirmation6, _theme$confirmation7, _theme$confirmation8, _theme$confirmation9, _theme$confirmation0, _theme$confirmation1, _theme$confirmation10, _theme$confirmation11, _theme$confirmation12, _theme$confirmation13, _theme$confirmation14, _theme$confirmation15, _theme$confirmation16, _order$driver, _order$driver2, _theme$images, _order$business2, _order$business3, _theme$images2, _order$customer, _order$customer2, _theme$images3, _order$driver3, _order$driver4, _theme$defaultLanguag, _configs$guest_uuid_a, _order$business4, _order$business5, _orderTypes$find, _configs$general_hour, _order$reporting_data, _configs$general_hour2, _order$debug_payment_, _order$debug_payment_2, _progressBarObjt, _progressBarObjt2, _theme$defaultLanguag2, _order$business6, _order$business7, _order$business8, _order$business9, _order$business0, _order$place, _order$place2, _progressBarObjt3, _progressBarObjt4, _order$business10, _order$business11, _progressBarObjt5, _progressBarObjt6, _order$business12, _order$business13, _order$business14, _order$business15, _order$business16, _order$business17, _order$place3, _order$place4, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer0, _order$customer1, _order$customer10, _order$customer11, _order$customer12, _theme$defaultLanguag3, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _order$driver9, _order$driver0, _order$driver1, _order$driver10, _order$driver11, _order$driver12, _configs$google_maps_2, _order$products$, _order$products$2, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data4, _openTaxModal$data$fi, _openTaxModal$data5, _openTaxModal$data6;
  var userCustomerId = props.userCustomerId,
    handleChangeOrderStatus = props.handleChangeOrderStatus,
    handleBusinessRedirect = props.handleBusinessRedirect,
    handleOrderRedirect = props.handleOrderRedirect,
    googleMapsControls = props.googleMapsControls,
    driverLocation = props.driverLocation,
    urlToShare = props.urlToShare,
    messages = props.messages,
    setMessages = props.setMessages,
    readMessages = props.readMessages,
    messagesReadList = props.messagesReadList,
    reorderState = props.reorderState,
    handleReorder = props.handleReorder,
    orderTypes = props.orderTypes,
    handleRemoveCart = props.handleRemoveCart,
    hideStaticMap = props.hideStaticMap;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate;
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    carts = _useOrder2[0].carts,
    refreshOrderOptions = _useOrder2[1].refreshOrderOptions;
  var _useState = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    openMessages = _useState2[0],
    setOpenMessages = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOrderReviewed = _useState4[0],
    setIsOrderReviewed = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isProductReviewed = _useState6[0],
    setIsProductReviewed = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isDriverReviewed = _useState8[0],
    setIsDriverReviewed = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    isProReviewed = _useState0[0],
    setIsProReviewed = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isGiftCardSent = _useState10[0],
    setIsGiftCardSent = _useState10[1];
  var _useState11 = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    unreadAlert = _useState12[0],
    setUnreadAlert = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isReviewOpen = _useState14[0],
    setIsReviewOpen = _useState14[1];
  var _useState15 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false,
      professional: false
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    reviewStatus = _useState16[0],
    setReviewStatus = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      tax: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    openTaxModal = _useState18[0],
    setOpenTaxModal = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isService = _useState20[0],
    setIsService = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isOrderHistory = _useState22[0],
    setIsOrderHistory = _useState22[1];
  var _useState23 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    confirm = _useState24[0],
    setConfirm = _useState24[1];
  var _useState25 = (0, _react.useState)(true),
    _useState26 = _slicedToArray(_useState25, 2),
    isShowBusinessLogo = _useState26[0],
    setIsShowBusinessLogo = _useState26[1];
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading,
    businessData = _props$order.businessData,
    error = _props$order.error;
  var yourSpotString = (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number');
  var acceptedStatus = [1, 2, 5, 6, 10, 11, 12, 15];
  var completedStatus = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
  var placeSpotTypes = [3, 4, 5];
  var activeStatus = [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26];
  var preorderStatus = [0, 13];
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var enabledPoweredByOrdering = configs === null || configs === void 0 || (_configs$powered_by_o = configs.powered_by_ordering_module) === null || _configs$powered_by_o === void 0 ? void 0 : _configs$powered_by_o.value;
  var showStarbucksHeader = (configs === null || configs === void 0 || (_configs$alternative_ = configs.alternative_confirmation_page) === null || _configs$alternative_ === void 0 ? void 0 : _configs$alternative_.value) === '1';
  var changeIdToExternalId = (configs === null || configs === void 0 || (_configs$change_order = configs.change_order_id) === null || _configs$change_order === void 0 ? void 0 : _configs$change_order.value) === '1';
  var cateringTypes = [7, 8];
  var deliveryTypes = [1, 7];
  var hideOrderActions = deliveryTypes === null || deliveryTypes === void 0 ? void 0 : deliveryTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type);
  var isGiftCardOrder = !(order !== null && order !== void 0 && order.business_id);
  var isOriginalLayout = (theme === null || theme === void 0 || (_theme$confirmation = theme.confirmation) === null || _theme$confirmation === void 0 || (_theme$confirmation = _theme$confirmation.components) === null || _theme$confirmation === void 0 || (_theme$confirmation = _theme$confirmation.layout) === null || _theme$confirmation === void 0 ? void 0 : _theme$confirmation.type) === 'original';
  var hideDeliveryType = theme === null || theme === void 0 || (_theme$confirmation2 = theme.confirmation) === null || _theme$confirmation2 === void 0 || (_theme$confirmation2 = _theme$confirmation2.components) === null || _theme$confirmation2 === void 0 || (_theme$confirmation2 = _theme$confirmation2.order) === null || _theme$confirmation2 === void 0 || (_theme$confirmation2 = _theme$confirmation2.components) === null || _theme$confirmation2 === void 0 || (_theme$confirmation2 = _theme$confirmation2.delivery_type) === null || _theme$confirmation2 === void 0 ? void 0 : _theme$confirmation2.hidden;
  var hideDeliveryDate = theme === null || theme === void 0 || (_theme$confirmation3 = theme.confirmation) === null || _theme$confirmation3 === void 0 || (_theme$confirmation3 = _theme$confirmation3.components) === null || _theme$confirmation3 === void 0 || (_theme$confirmation3 = _theme$confirmation3.order) === null || _theme$confirmation3 === void 0 || (_theme$confirmation3 = _theme$confirmation3.components) === null || _theme$confirmation3 === void 0 || (_theme$confirmation3 = _theme$confirmation3.date) === null || _theme$confirmation3 === void 0 ? void 0 : _theme$confirmation3.hidden;
  var hideDeliveryProgress = theme === null || theme === void 0 || (_theme$confirmation4 = theme.confirmation) === null || _theme$confirmation4 === void 0 || (_theme$confirmation4 = _theme$confirmation4.components) === null || _theme$confirmation4 === void 0 || (_theme$confirmation4 = _theme$confirmation4.order) === null || _theme$confirmation4 === void 0 || (_theme$confirmation4 = _theme$confirmation4.components) === null || _theme$confirmation4 === void 0 || (_theme$confirmation4 = _theme$confirmation4.progress) === null || _theme$confirmation4 === void 0 ? void 0 : _theme$confirmation4.hidden;
  var hideBusinessPhone = theme === null || theme === void 0 || (_theme$confirmation5 = theme.confirmation) === null || _theme$confirmation5 === void 0 || (_theme$confirmation5 = _theme$confirmation5.components) === null || _theme$confirmation5 === void 0 || (_theme$confirmation5 = _theme$confirmation5.business) === null || _theme$confirmation5 === void 0 || (_theme$confirmation5 = _theme$confirmation5.components) === null || _theme$confirmation5 === void 0 || (_theme$confirmation5 = _theme$confirmation5.phone) === null || _theme$confirmation5 === void 0 ? void 0 : _theme$confirmation5.hidden;
  var hideBusinessMessages = theme === null || theme === void 0 || (_theme$confirmation6 = theme.confirmation) === null || _theme$confirmation6 === void 0 || (_theme$confirmation6 = _theme$confirmation6.components) === null || _theme$confirmation6 === void 0 || (_theme$confirmation6 = _theme$confirmation6.business) === null || _theme$confirmation6 === void 0 || (_theme$confirmation6 = _theme$confirmation6.components) === null || _theme$confirmation6 === void 0 || (_theme$confirmation6 = _theme$confirmation6.messages) === null || _theme$confirmation6 === void 0 ? void 0 : _theme$confirmation6.hidden;
  var hideBusinessEmail = theme === null || theme === void 0 || (_theme$confirmation7 = theme.confirmation) === null || _theme$confirmation7 === void 0 || (_theme$confirmation7 = _theme$confirmation7.components) === null || _theme$confirmation7 === void 0 || (_theme$confirmation7 = _theme$confirmation7.business) === null || _theme$confirmation7 === void 0 || (_theme$confirmation7 = _theme$confirmation7.components) === null || _theme$confirmation7 === void 0 || (_theme$confirmation7 = _theme$confirmation7.email) === null || _theme$confirmation7 === void 0 ? void 0 : _theme$confirmation7.hidden;
  var hideBusinessAddress = theme === null || theme === void 0 || (_theme$confirmation8 = theme.confirmation) === null || _theme$confirmation8 === void 0 || (_theme$confirmation8 = _theme$confirmation8.components) === null || _theme$confirmation8 === void 0 || (_theme$confirmation8 = _theme$confirmation8.business) === null || _theme$confirmation8 === void 0 || (_theme$confirmation8 = _theme$confirmation8.components) === null || _theme$confirmation8 === void 0 || (_theme$confirmation8 = _theme$confirmation8.address) === null || _theme$confirmation8 === void 0 ? void 0 : _theme$confirmation8.hidden;
  var hideBusinessMap = theme === null || theme === void 0 || (_theme$confirmation9 = theme.confirmation) === null || _theme$confirmation9 === void 0 || (_theme$confirmation9 = _theme$confirmation9.components) === null || _theme$confirmation9 === void 0 || (_theme$confirmation9 = _theme$confirmation9.business) === null || _theme$confirmation9 === void 0 || (_theme$confirmation9 = _theme$confirmation9.components) === null || _theme$confirmation9 === void 0 || (_theme$confirmation9 = _theme$confirmation9.map) === null || _theme$confirmation9 === void 0 ? void 0 : _theme$confirmation9.hidden;
  var hideDriverName = theme === null || theme === void 0 || (_theme$confirmation0 = theme.confirmation) === null || _theme$confirmation0 === void 0 || (_theme$confirmation0 = _theme$confirmation0.components) === null || _theme$confirmation0 === void 0 || (_theme$confirmation0 = _theme$confirmation0.driver) === null || _theme$confirmation0 === void 0 || (_theme$confirmation0 = _theme$confirmation0.components) === null || _theme$confirmation0 === void 0 || (_theme$confirmation0 = _theme$confirmation0.name) === null || _theme$confirmation0 === void 0 ? void 0 : _theme$confirmation0.hidden;
  var hideDriverPhone = theme === null || theme === void 0 || (_theme$confirmation1 = theme.confirmation) === null || _theme$confirmation1 === void 0 || (_theme$confirmation1 = _theme$confirmation1.components) === null || _theme$confirmation1 === void 0 || (_theme$confirmation1 = _theme$confirmation1.driver) === null || _theme$confirmation1 === void 0 || (_theme$confirmation1 = _theme$confirmation1.components) === null || _theme$confirmation1 === void 0 || (_theme$confirmation1 = _theme$confirmation1.phone) === null || _theme$confirmation1 === void 0 ? void 0 : _theme$confirmation1.hidden;
  var hideDriverMessages = theme === null || theme === void 0 || (_theme$confirmation10 = theme.confirmation) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.components) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.driver) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.components) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.messages) === null || _theme$confirmation10 === void 0 ? void 0 : _theme$confirmation10.hidden;
  var hideDriverEmail = theme === null || theme === void 0 || (_theme$confirmation11 = theme.confirmation) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.components) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.driver) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.components) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.email) === null || _theme$confirmation11 === void 0 ? void 0 : _theme$confirmation11.hidden;
  var hideDriverPhoto = theme === null || theme === void 0 || (_theme$confirmation12 = theme.confirmation) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.components) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.driver) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.components) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.photo) === null || _theme$confirmation12 === void 0 ? void 0 : _theme$confirmation12.hidden;
  var hideCustomerPhone = theme === null || theme === void 0 || (_theme$confirmation13 = theme.confirmation) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.components) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.customer) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.components) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.phone) === null || _theme$confirmation13 === void 0 ? void 0 : _theme$confirmation13.hidden;
  var hideCustomerAddress = theme === null || theme === void 0 || (_theme$confirmation14 = theme.confirmation) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.components) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.customer) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.components) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.address) === null || _theme$confirmation14 === void 0 ? void 0 : _theme$confirmation14.hidden;
  var hideCustomerEmail = theme === null || theme === void 0 || (_theme$confirmation15 = theme.confirmation) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.components) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.customer) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.components) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.email) === null || _theme$confirmation15 === void 0 ? void 0 : _theme$confirmation15.hidden;
  var hideCustomerPhoto = theme === null || theme === void 0 || (_theme$confirmation16 = theme.confirmation) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.components) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.customer) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.components) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.photo) === null || _theme$confirmation16 === void 0 ? void 0 : _theme$confirmation16.hidden;
  var validTrackingStatus = [9, 18, 19, 23, 26];
  var mapConfigs = {
    zoom: 15
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  var unreadMessages = function unreadMessages() {
    var length = messages === null || messages === void 0 ? void 0 : messages.messages.length;
    var unreadLength = order === null || order === void 0 ? void 0 : order.unread_count;
    var unreadedMessages = messages.messages.slice(length - unreadLength, length);
    var business = unreadedMessages.some(function (message) {
      var _message$can_see;
      return message === null || message === void 0 || (_message$can_see = message.can_see) === null || _message$can_see === void 0 ? void 0 : _message$can_see.includes(2);
    });
    var driver = unreadedMessages.some(function (message) {
      var _message$can_see2;
      return message === null || message === void 0 || (_message$can_see2 = message.can_see) === null || _message$can_see2 === void 0 ? void 0 : _message$can_see2.includes(4);
    });
    setUnreadAlert({
      business: business,
      driver: driver
    });
  };
  var validateImage = function validateImage(src) {
    return new Promise(function (resolve, reject) {
      if (!src || typeof src !== 'string') {
        resolve(false);
      }
      try {
        var image = new Image();
        image.onload = resolve;
        image.src = src;
      } catch (err) {
        resolve(false);
      }
    });
  };
  var businessLogoUrlValidation = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _order$business;
      var isValidImage;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return validateImage(order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo);
          case 2:
            isValidImage = _context.sent;
            setIsShowBusinessLogo(isValidImage);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function businessLogoUrlValidation() {
      return _ref.apply(this, arguments);
    };
  }();
  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 || (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.driverPng)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.location), {}, {
    icon: (order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 || (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.customerPhoto)
  })];
  var handleOpenReview = function handleOpenReview() {
    if (!(order !== null && order !== void 0 && order.review) && !isOrderReviewed) setReviewStatus({
      order: true,
      product: false,
      driver: false,
      professional: false
    });else if (!isProductReviewed && order !== null && order !== void 0 && order.customer_id && order !== null && order !== void 0 && order.paymethod_id) setReviewStatus({
      order: false,
      product: true,
      driver: false,
      professional: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true,
      professional: false
    });else if (isService && !isProReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: false,
      professional: true
    });else {
      setIsReviewOpen(false);
      return;
    }
    setIsReviewOpen(true);
  };
  var handleCloseReivew = function handleCloseReivew() {
    setReviewStatus({
      order: false,
      product: false,
      driver: false,
      professional: false
    });
    setIsReviewOpen(false);
  };
  var closeReviewOrder = function closeReviewOrder() {
    if (!isProductReviewed && order !== null && order !== void 0 && order.customer_id && order !== null && order !== void 0 && order.paymethod_id) setReviewStatus({
      order: false,
      product: true,
      driver: false,
      professional: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true,
      professional: false
    });else handleCloseReivew();
  };
  var closeReviewProduct = function closeReviewProduct() {
    if (isService && !isProReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: false,
      professional: true
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true,
      professional: false
    });else {
      setIsDriverReviewed(true);
      handleCloseReivew();
    }
  };
  var closeOrderModal = function closeOrderModal(e) {
    var outsideModal = !window.document.getElementById('app-modals') || !window.document.getElementById('app-modals').contains(e.target);
    if (outsideModal) {
      var _businessId = 'businessId:' + (businessData === null || businessData === void 0 ? void 0 : businessData.id);
      sessionStorage.setItem('adjust-cart-products', _businessId);
      handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
    }
  };
  var handleStartNewOrder = function handleStartNewOrder(orderId) {
    if (isOriginalLayout) {
      handleReorder(orderId);
      return;
    }
    deleteUserCustomer(true);
    refreshOrderOptions();
    handleGoToPage({
      page: 'home'
    });
  };
  var handleClickReorder = function handleClickReorder(order) {
    var _carts;
    if (carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)] && ((_carts = carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)]) === null || _carts === void 0 || (_carts = _carts.products) === null || _carts === void 0 ? void 0 : _carts.length) > 0) {
      setConfirm({
        open: true,
        content: t('QUESTION_DELETE_PRODUCTS_FROM_CART', 'Are you sure that you want to delete all products from cart?'),
        handleOnAccept: function () {
          var _handleOnAccept = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  handleRemoveCart();
                  setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
                    open: false
                  }));
                case 2:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          function handleOnAccept() {
            return _handleOnAccept.apply(this, arguments);
          }
          return handleOnAccept;
        }()
      });
    } else {
      handleReorder(order.id);
    }
  };
  var handleOriginalReorder = function handleOriginalReorder() {
    setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
      open: false
    }));
    handleReorder(order.id);
  };
  var getProductList = function getProductList() {
    var professionalList = order === null || order === void 0 ? void 0 : order.products.reduce(function (prev, current) {
      var _current$calendar_eve2;
      var found = prev.find(function (item) {
        var _current$calendar_eve;
        return item.id === (current === null || current === void 0 || (_current$calendar_eve = current.calendar_event) === null || _current$calendar_eve === void 0 || (_current$calendar_eve = _current$calendar_eve.professional) === null || _current$calendar_eve === void 0 ? void 0 : _current$calendar_eve.id);
      });
      if (found || !(current !== null && current !== void 0 && current.calendar_event)) {
        return prev;
      }
      return [].concat(_toConsumableArray(prev), [current === null || current === void 0 || (_current$calendar_eve2 = current.calendar_event) === null || _current$calendar_eve2 === void 0 ? void 0 : _current$calendar_eve2.professional]);
    }, []);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (professionalList === null || professionalList === void 0 ? void 0 : professionalList.length) > 0 && professionalList.map(function (professional, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.ProfessionalBlock, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_styles.ProfessionalWrapper, null, professional !== null && professional !== void 0 && professional.photo ? /*#__PURE__*/_react.default.createElement("img", {
        src: professional === null || professional === void 0 ? void 0 : professional.photo,
        alt: ""
      }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null), /*#__PURE__*/_react.default.createElement("p", null, professional === null || professional === void 0 ? void 0 : professional.name, " ", professional === null || professional === void 0 ? void 0 : professional.lastname)), order === null || order === void 0 ? void 0 : order.products.filter(function (product) {
        var _product$calendar_eve;
        return (product === null || product === void 0 || (_product$calendar_eve = product.calendar_event) === null || _product$calendar_eve === void 0 || (_product$calendar_eve = _product$calendar_eve.professional) === null || _product$calendar_eve === void 0 ? void 0 : _product$calendar_eve.id) === (professional === null || professional === void 0 ? void 0 : professional.id);
      }).map(function (product) {
        var _order$toppings_remov;
        return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
          key: product.id,
          product: product,
          showArrowIcon: true,
          toppingsRemoved: order === null || order === void 0 || (_order$toppings_remov = order.toppings_removed) === null || _order$toppings_remov === void 0 ? void 0 : _order$toppings_remov[product === null || product === void 0 ? void 0 : product.code]
        });
      }));
    }), order === null || order === void 0 ? void 0 : order.products.filter(function (product) {
      return !(product !== null && product !== void 0 && product.calendar_event);
    }).map(function (product) {
      var _order$toppings_remov2;
      return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
        key: product.id,
        product: product,
        showArrowIcon: true,
        toppingsRemoved: order === null || order === void 0 || (_order$toppings_remov2 = order.toppings_removed) === null || _order$toppings_remov2 === void 0 ? void 0 : _order$toppings_remov2[product === null || product === void 0 ? void 0 : product.code]
      });
    }));
  };
  var sortedProductList = (0, _react.useMemo)(function () {
    return getProductList();
  }, [order === null || order === void 0 ? void 0 : order.products]);
  var ActionsSectionProps = {
    order: order,
    handleBusinessRedirect: handleBusinessRedirect,
    businessData: businessData,
    unreadAlert: unreadAlert,
    setOpenMessages: setOpenMessages,
    readMessages: readMessages,
    setUnreadAlert: setUnreadAlert
  };
  var driverLocationString = typeof (order === null || order === void 0 || (_order$driver3 = order.driver) === null || _order$driver3 === void 0 || (_order$driver3 = _order$driver3.location) === null || _order$driver3 === void 0 ? void 0 : _order$driver3.location) === 'string' && (order === null || order === void 0 || (_order$driver4 = order.driver) === null || _order$driver4 === void 0 || (_order$driver4 = _order$driver4.location) === null || _order$driver4 === void 0 || (_order$driver4 = _order$driver4.location) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.split(',').map(function (l) {
    return l.replace(/[^-.0-9]/g, '');
  }));
  var parsedLocations = locations.map(function (location) {
    var _location$location, _location$location2;
    return typeof (location === null || location === void 0 ? void 0 : location.location) === 'string' ? _objectSpread(_objectSpread({}, location), {}, {
      lat: parseFloat(location === null || location === void 0 || (_location$location = location.location) === null || _location$location === void 0 ? void 0 : _location$location.split(',')[0].replace(/[^-.0-9]/g, '')),
      lng: parseFloat(location === null || location === void 0 || (_location$location2 = location.location) === null || _location$location2 === void 0 ? void 0 : _location$location2.split(',')[1].replace(/[^-.0-9]/g, ''))
    }) : location;
  });
  (0, _react.useEffect)(function () {
    if (driverLocation) {
      parsedLocations[0] = _objectSpread(_objectSpread({}, locations[0]), driverLocation);
    }
  }, [driverLocation]);
  (0, _react.useEffect)(function () {
    unreadMessages();
  }, [messages === null || messages === void 0 ? void 0 : messages.messages]);
  (0, _react.useEffect)(function () {
    if (messagesReadList !== null && messagesReadList !== void 0 && messagesReadList.length) {
      openMessages.business ? setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        business: false
      })) : setUnreadAlert(_objectSpread(_objectSpread({}, unreadAlert), {}, {
        driver: false
      }));
    }
  }, [messagesReadList]);
  (0, _react.useEffect)(function () {
    if (reorderState !== null && reorderState !== void 0 && reorderState.error) {
      window.addEventListener('click', closeOrderModal);
      return function () {
        window.removeEventListener('click', closeOrderModal);
      };
    }
    if (!(reorderState !== null && reorderState !== void 0 && reorderState.error) && reorderState.loading === false && businessData !== null && businessData !== void 0 && businessData.id) {
      var _carts$_businessId, _reorderState$result;
      var _businessId = 'businessId:' + (businessData === null || businessData === void 0 ? void 0 : businessData.id);
      var products = carts === null || carts === void 0 || (_carts$_businessId = carts[_businessId]) === null || _carts$_businessId === void 0 ? void 0 : _carts$_businessId.products;
      var available = products.every(function (product) {
        return product.valid === true;
      });
      if (available && reorderState !== null && reorderState !== void 0 && (_reorderState$result = reorderState.result) !== null && _reorderState$result !== void 0 && _reorderState$result.uuid && (products === null || products === void 0 ? void 0 : products.length) === (order === null || order === void 0 ? void 0 : order.products.length)) {
        handleGoToPage({
          page: 'checkout',
          params: {
            cartUuid: reorderState === null || reorderState === void 0 ? void 0 : reorderState.result.uuid
          }
        });
      } else {
        sessionStorage.setItem('adjust-cart-products', _businessId);
        (products === null || products === void 0 ? void 0 : products.length) !== (order === null || order === void 0 ? void 0 : order.products.length) && sessionStorage.setItem('already-removed', 'removed');
        handleBusinessRedirect(businessData === null || businessData === void 0 ? void 0 : businessData.slug);
      }
    }
  }, [reorderState]);
  (0, _react.useEffect)(function () {
    if (!order) return;
    var _isService = order.products.some(function (product) {
      return product.type === 'service';
    });
    setIsService(_isService);
    businessLogoUrlValidation();
    props.openBChatByParam && setOpenMessages(_objectSpread(_objectSpread({}, openMessages), {}, {
      business: !!props.openBChatByParam
    }));
  }, [order]);
  (0, _react.useEffect)(function () {
    window.scrollTo(0, 0);
  }, []);
  var disableLeftButton = [1, 2, 5, 15, 16, 17, 20, 21];
  var disableRightButton = [1, 2, 5, 15, 16, 17, 21];
  var progressBarObjt = order !== null && order !== void 0 && order.delivery_type && (order === null || order === void 0 ? void 0 : order.delivery_type) === 2 ? _utils.getOrderStatuPickUp : _utils.getOrderStatus;
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !loading && order && Object.keys(order).length > 0 && !(openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, !showStarbucksHeader && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderIdSec, null, isService ? t('APPOINTMENT', 'Appointment') : t('ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ORDER) || 'Order'), " ", changeIdToExternalId && (order === null || order === void 0 ? void 0 : order.external_id) || "#".concat(order === null || order === void 0 ? void 0 : order.id)), enabledPoweredByOrdering && /*#__PURE__*/_react.default.createElement(_styles.PoweredByOrdering, null, t('POWERED_BY', 'Powered by'), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.ordering.co"
  }, t('ORDERING_CO', 'Ordering.co'))), parseInt(configs === null || configs === void 0 || (_configs$guest_uuid_a = configs.guest_uuid_access) === null || _configs$guest_uuid_a === void 0 ? void 0 : _configs$guest_uuid_a.value, 10) && (order === null || order === void 0 ? void 0 : order.hash_key) && /*#__PURE__*/_react.default.createElement(_styles.Content, {
    className: "order-content"
  }, /*#__PURE__*/_react.default.createElement(_styles.ShareOrder, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/_react.default.createElement(_ProductShare.ProductShare, {
    defaultUrl: urlToShare(order === null || order === void 0 ? void 0 : order.hash_key),
    product: {
      images: (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.logo,
      name: (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.name
    }
  })))), !!(order !== null && order !== void 0 && order.integration_id) && /*#__PURE__*/_react.default.createElement("h1", null, t('TICKET', 'Ticket'), ": ", order === null || order === void 0 ? void 0 : order.integration_id), !!(order !== null && order !== void 0 && order.integration_id_date) && /*#__PURE__*/_react.default.createElement("h1", null, t('N_ORDER', 'N. Orden'), ": ", order === null || order === void 0 ? void 0 : order.integration_id_date), !hideDeliveryType && /*#__PURE__*/_react.default.createElement("p", {
    className: "types"
  }, isService ? t('SERVICE_AT_HOME', 'Service at home') : orderTypes === null || orderTypes === void 0 || (_orderTypes$find = orderTypes.find(function (type) {
    return (order === null || order === void 0 ? void 0 : order.delivery_type) === (type === null || type === void 0 ? void 0 : type.value);
  })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.text), !hideDeliveryDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, t('CREATED_AT', 'Created at'), ": ", parseDate(order === null || order === void 0 ? void 0 : order.created_at)), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, activeStatus.includes(order === null || order === void 0 ? void 0 : order.status) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cateringTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) ? "".concat(t('PLACED_TO', 'Placed to'), ":") : '', " ", /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: order,
    outputFormat: "YYYY-MM-DD ".concat(configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value)
  })) : parseDate(order === null || order === void 0 || (_order$reporting_data = order.reporting_data) === null || _order$reporting_data === void 0 ? void 0 : _order$reporting_data.at["status:".concat(order.status)], {
    outputFormat: "YYYY-MM-DD ".concat(configs === null || configs === void 0 || (_configs$general_hour2 = configs.general_hour_format) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.value)
  }))), (acceptedStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) || !isOriginalLayout) && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles.ReOrder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return handleStartNewOrder(order.id);
    },
    disabled: reorderState === null || reorderState === void 0 ? void 0 : reorderState.loading
  }, t('START_NEW_ORDER', 'Start new order')), completedStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true,
    onClick: function onClick() {
      return handleClickReorder(order);
    },
    disabled: reorderState === null || reorderState === void 0 ? void 0 : reorderState.loading
  }, reorderState !== null && reorderState !== void 0 && reorderState.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')))), props.isCustomerMode && !!(order !== null && order !== void 0 && (_order$debug_payment_ = order.debug_payment_response) !== null && _order$debug_payment_ !== void 0 && _order$debug_payment_.message) && /*#__PURE__*/_react.default.createElement("div", {
    id: "error-subs"
  }, /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, /*#__PURE__*/_react.default.createElement(_BsExclamationTriangle.default, null), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 || (_order$debug_payment_2 = order.debug_payment_response) === null || _order$debug_payment_2 === void 0 ? void 0 : _order$debug_payment_2.message))), !hideDeliveryProgress && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_progressBarObjt = progressBarObjt(order === null || order === void 0 ? void 0 : order.status)) === null || _progressBarObjt === void 0 ? void 0 : _progressBarObjt.percentage
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderStatusAndLinkContainer, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, (_progressBarObjt2 = progressBarObjt(order === null || order === void 0 ? void 0 : order.status)) === null || _progressBarObjt2 === void 0 ? void 0 : _progressBarObjt2.value), /*#__PURE__*/_react.default.createElement(_styles.LinkWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderLink, {
    active: true,
    isMargin: true
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsOrderHistory(true);
    }
  }, t('VIEW_DETAILS', 'View details'))), (!props.isCustomerMode || props.isCustomerMode && !!props.hashKey && !token) && /*#__PURE__*/_react.default.createElement(_styles.ReviewOrderLink, {
    className: "Review-order",
    active: [].concat(acceptedStatus, [16]).includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && (!isOrderReviewed || !isProductReviewed || isService && !isProReviewed || !isDriverReviewed)
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleOpenReview
  }, t('REVIEW_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.REVIEW_ORDER) || 'Review your Order'))))))), !isGiftCardOrder && !hideStaticMap && /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessExternalWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, {
    w: "calc(100% - 20px)",
    borderTop: !hideDeliveryType && placeSpotTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type)
  }, isShowBusinessLogo && /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 || (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.name), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "business",
    showPhone: !hideBusinessPhone,
    showMessages: !hideBusinessMessages
  })), !hideBusinessEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.email), !hideBusinessPhone && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.cellphone), !hideBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business0 = order.business) === null || _order$business0 === void 0 ? void 0 : _order$business0.address), (order === null || order === void 0 || (_order$place = order.place) === null || _order$place === void 0 ? void 0 : _order$place.name) && /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotSection, null, /*#__PURE__*/_react.default.createElement("p", null, yourSpotString, ": ", order === null || order === void 0 || (_order$place2 = order.place) === null || _order$place2 === void 0 ? void 0 : _order$place2.name)), !hideOrderActions && /*#__PURE__*/_react.default.createElement(_styles.DirectionButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      var _order$business1;
      return window.open("http://maps.google.com/?q=".concat(order === null || order === void 0 || (_order$business1 = order.business) === null || _order$business1 === void 0 ? void 0 : _order$business1.address));
    }
  }, t('GET_DIRECTIONS', 'Get Directions')))), !hideOrderActions && !preorderStatus.includes(order === null || order === void 0 ? void 0 : order.status) && /*#__PURE__*/_react.default.createElement(_styles.BtsOrderStatus, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    style: {
      fontSize: 14
    },
    color: (order === null || order === void 0 ? void 0 : order.status) === 20 ? 'secundary' : 'primary',
    onClick: function onClick() {
      return handleChangeOrderStatus(20);
    },
    disabled: disableLeftButton.includes(order === null || order === void 0 ? void 0 : order.status)
  }, (_progressBarObjt3 = progressBarObjt(20)) === null || _progressBarObjt3 === void 0 ? void 0 : _progressBarObjt3.value)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    style: {
      fontSize: 14
    },
    color: (order === null || order === void 0 ? void 0 : order.status) === 20 ? 'primary' : 'secundary',
    disabled: disableRightButton.includes(order === null || order === void 0 ? void 0 : order.status),
    onClick: function onClick() {
      return handleChangeOrderStatus(21);
    }
  }, (_progressBarObjt4 = progressBarObjt(21)) === null || _progressBarObjt4 === void 0 ? void 0 : _progressBarObjt4.value)))), !hideDeliveryType && placeSpotTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type) && /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotWrapper, null, /*#__PURE__*/_react.default.createElement(_PlaceSpot.PlaceSpot, {
    isInputMode: true,
    cart: order,
    spotNumberDefault: order === null || order === void 0 ? void 0 : order.spot_number,
    vehicleDefault: order === null || order === void 0 ? void 0 : order.vehicle
  }))), googleMapsApiKey && !hideBusinessMap && /*#__PURE__*/_react.default.createElement(_styles.MapWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Map, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _utils.getGoogleMapImage)(order === null || order === void 0 || (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.location, googleMapsApiKey, mapConfigs),
    id: "google-maps-image",
    alt: "google-maps-location",
    width: "100%",
    height: "100%",
    loading: "lazy"
  }))))), showStarbucksHeader && /*#__PURE__*/_react.default.createElement(_Starbucks.HeaderContent, {
    order: order,
    hashKey: props.hashKey,
    googleMapsUrl: googleMapsApiKey && !validTrackingStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status)) && (0, _utils.getGoogleMapImage)(order === null || order === void 0 || (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.location, googleMapsApiKey, mapConfigs),
    changeIdToExternalId: changeIdToExternalId,
    enabledPoweredByOrdering: enabledPoweredByOrdering,
    orderStatus: (_progressBarObjt5 = progressBarObjt(order === null || order === void 0 ? void 0 : order.status)) === null || _progressBarObjt5 === void 0 ? void 0 : _progressBarObjt5.value,
    percentage: (_progressBarObjt6 = progressBarObjt(order === null || order === void 0 ? void 0 : order.status)) === null || _progressBarObjt6 === void 0 ? void 0 : _progressBarObjt6.percentage,
    orderId: {
      id: order === null || order === void 0 ? void 0 : order.id,
      external: order === null || order === void 0 ? void 0 : order.external_id
    },
    showReview: [].concat(acceptedStatus, [16]).includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && (!isOrderReviewed || !isDriverReviewed)
  }), hideStaticMap && /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, isShowBusinessLogo && (order === null || order === void 0 || (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.logo) && /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 || (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.logo
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business14 = order.business) === null || _order$business14 === void 0 ? void 0 : _order$business14.name), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "business",
    showPhone: !hideBusinessPhone,
    showMessages: !hideBusinessMessages
  })), !hideBusinessEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business15 = order.business) === null || _order$business15 === void 0 ? void 0 : _order$business15.email), !hideBusinessPhone && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business16 = order.business) === null || _order$business16 === void 0 ? void 0 : _order$business16.cellphone), !hideBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business17 = order.business) === null || _order$business17 === void 0 ? void 0 : _order$business17.address), (order === null || order === void 0 || (_order$place3 = order.place) === null || _order$place3 === void 0 ? void 0 : _order$place3.name) && /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotSection, null, /*#__PURE__*/_react.default.createElement("p", null, yourSpotString, ": ", order === null || order === void 0 || (_order$place4 = order.place) === null || _order$place4 === void 0 ? void 0 : _order$place4.name))))), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, !hideCustomerPhoto && (order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo) && /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.name, " ", order === null || order === void 0 || (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lastname), !hideCustomerEmail && /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && (_order$customer7 = order.customer) !== null && _order$customer7 !== void 0 && _order$customer7.guest_id ? order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.guest_email : order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.email), !hideCustomerPhone && /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && (_order$customer0 = order.customer) !== null && _order$customer0 !== void 0 && _order$customer0.guest_id ? order === null || order === void 0 || (_order$customer1 = order.customer) === null || _order$customer1 === void 0 ? void 0 : _order$customer1.guest_cellphone : (order === null || order === void 0 || (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.cellphone) || (order === null || order === void 0 || (_order$customer11 = order.customer) === null || _order$customer11 === void 0 ? void 0 : _order$customer11.phone)), !hideCustomerAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer12 = order.customer) === null || _order$customer12 === void 0 ? void 0 : _order$customer12.address)))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.DRIVER) || 'Driver')), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "driver",
    showPhone: !hideDriverPhone,
    showMessages: !hideDriverMessages
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, !hideDriverPhoto && /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$driver5 = order.driver) !== null && _order$driver5 !== void 0 && _order$driver5.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 || (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement("div", null, !hideDriverName && /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 || (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", order === null || order === void 0 || (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), !hideDriverEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.email), !hideDriverPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 || (_order$driver0 = order.driver) === null || _order$driver0 === void 0 ? void 0 : _order$driver0.cellphone) || (order === null || order === void 0 || (_order$driver1 = order.driver) === null || _order$driver1 === void 0 ? void 0 : _order$driver1.phone))))), (order === null || order === void 0 || (_order$driver10 = order.driver) === null || _order$driver10 === void 0 ? void 0 : _order$driver10.location) && validTrackingStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status)) && /*#__PURE__*/_react.default.createElement(_styles.Map, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    location: typeof (order === null || order === void 0 || (_order$driver11 = order.driver) === null || _order$driver11 === void 0 || (_order$driver11 = _order$driver11.location) === null || _order$driver11 === void 0 ? void 0 : _order$driver11.location) === 'string' ? {
      lat: parseFloat(driverLocationString[0]),
      lng: parseFloat(driverLocationString[1])
    } : driverLocation !== null && driverLocation !== void 0 ? driverLocation : order === null || order === void 0 || (_order$driver12 = order.driver) === null || _order$driver12 === void 0 ? void 0 : _order$driver12.location,
    locations: parsedLocations,
    mapControls: googleMapsControls,
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value,
    manualZoom: true
  }))), ((deliveryTypes === null || deliveryTypes === void 0 ? void 0 : deliveryTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type)) || (order === null || order === void 0 ? void 0 : order.comment)) && !isGiftCardOrder && !showStarbucksHeader && /*#__PURE__*/_react.default.createElement(_styles.OrderPreferences, null, /*#__PURE__*/_react.default.createElement(_OrderPreferencesSections.OrderPreferencesSection, {
    order: order,
    placeSpotTypes: placeSpotTypes
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, !showStarbucksHeader ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_OrderHeaderInfoSection.OrderHeaderInfoSection, {
    isService: isService
  }), /*#__PURE__*/_react.default.createElement(_OrderActionsSection.OrderActionsSection, {
    userCustomerId: userCustomerId,
    isService: isService,
    handleGoToPage: handleGoToPage
  })) : /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/_react.default.createElement(_OrderPreferencesSections.OrderPreferencesSection, {
    order: order,
    placeSpotTypes: placeSpotTypes
  }))), !showStarbucksHeader && sortedProductList, /*#__PURE__*/_react.default.createElement(_OrderBillSection.OrderBillSection, {
    order: order,
    setOpenTaxModal: setOpenTaxModal,
    showOnlyTotals: showStarbucksHeader
  }))), isGiftCardOrder && (order === null || order === void 0 || (_order$products$ = order.products[0]) === null || _order$products$ === void 0 || (_order$products$ = _order$products$.gift_card) === null || _order$products$ === void 0 ? void 0 : _order$products$.status) === 'pending' && !isGiftCardSent && /*#__PURE__*/_react.default.createElement(_SendGiftCard.SendGiftCard, {
    giftCardId: order === null || order === void 0 || (_order$products$2 = order.products[0]) === null || _order$products$2 === void 0 || (_order$products$2 = _order$products$2.gift_card) === null || _order$products$2 === void 0 ? void 0 : _order$products$2.id,
    setIsGiftCardSent: setIsGiftCardSent
  })), (openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_Messages.Messages, {
    orderId: order === null || order === void 0 ? void 0 : order.id,
    order: order,
    business: openMessages.business,
    driver: openMessages.driver,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages,
    onMessages: setOpenMessages,
    onClose: function onClose() {
      return setOpenMessages({
        driver: false,
        business: false
      });
    }
  }), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
    width: 90
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    width: 300
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15,
    width: 120
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 15
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900,
    style: {
      marginBottom: '50px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 60,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900,
    style: {
      marginBottom: '50px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 900,
    style: {
      marginBottom: '50px'
    }
  }))))), !loading && error && (error.includes('ERROR_ACCESS_EXPIRED') ? /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t(error[0], 'Sorry, the order has expired.')
  }) : /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.NOT_FOUND_ORDER) || 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.ORDERS_REDIRECT) || 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.professional ? t('PROFESSIONAL_REVIEW', 'Professional review') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.LOADING) || 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    hashKey: props.hashKey,
    closeReviewOrder: closeReviewOrder,
    setIsReviewed: setIsOrderReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? /*#__PURE__*/_react.default.createElement(_ReviewProduct.ReviewProduct, {
    order: order,
    hashKey: props.hashKey,
    closeReviewProduct: closeReviewProduct,
    setIsProductReviewed: setIsProductReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.professional ? /*#__PURE__*/_react.default.createElement(_ReviewProfessional.ReviewProfessional, {
    order: order,
    hashKey: props.hashKey,
    closeReviewProfessional: handleCloseReivew,
    setIsProfessionalReviewed: setIsProReviewed,
    isProfessional: true
  }) : /*#__PURE__*/_react.default.createElement(_ReviewDriver.ReviewDriver, {
    order: order,
    hashKey: props.hashKey,
    closeReviewDriver: handleCloseReivew,
    setIsDriverReviewed: setIsDriverReviewed
  }))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openTaxModal.open,
    padding: "20px",
    closeOnBackdrop: true,
    title: "".concat(((_openTaxModal$data = openTaxModal.data) === null || _openTaxModal$data === void 0 ? void 0 : _openTaxModal$data.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), " ").concat(((_openTaxModal$data2 = openTaxModal.data) === null || _openTaxModal$data2 === void 0 ? void 0 : _openTaxModal$data2.rate_type) !== 2 ? "(".concat(typeof ((_openTaxModal$data3 = openTaxModal.data) === null || _openTaxModal$data3 === void 0 ? void 0 : _openTaxModal$data3.rate) === 'number' ? "".concat((_openTaxModal$data4 = openTaxModal.data) === null || _openTaxModal$data4 === void 0 ? void 0 : _openTaxModal$data4.rate, "%") : "".concat(parsePrice((_openTaxModal$data$fi = (_openTaxModal$data5 = openTaxModal.data) === null || _openTaxModal$data5 === void 0 ? void 0 : _openTaxModal$data5.fixed) !== null && _openTaxModal$data$fi !== void 0 ? _openTaxModal$data$fi : 0), " + ").concat((_openTaxModal$data6 = openTaxModal.data) === null || _openTaxModal$data6 === void 0 ? void 0 : _openTaxModal$data6.percentage, "%"), ")") : '', "\n          "),
    onClose: function onClose() {
      return setOpenTaxModal({
        open: false,
        tax: null,
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
    products: order === null || order === void 0 ? void 0 : order.products
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isOrderHistory,
    width: "760px",
    onClose: function onClose() {
      return setIsOrderHistory(false);
    },
    title: t('DETAILS_OF_ORDER', 'Details of Order_NUMBER_').replace('_NUMBER_', changeIdToExternalId && (order === null || order === void 0 ? void 0 : order.external_id) || "# ".concat(order === null || order === void 0 ? void 0 : order.id))
  }, /*#__PURE__*/_react.default.createElement(_OrderHistory.OrderHistory, {
    messages: messages,
    order: order,
    handleOpenReview: handleOpenReview,
    onClose: function onClose() {
      return setIsOrderHistory(false);
    },
    enableReview: acceptedStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && (!isOrderReviewed || !isProductReviewed || !isDriverReviewed)
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('ORDER', 'Order'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    hideViaText: props.hideViaText,
    onClose: function onClose() {
      return handleOriginalReorder();
    },
    onCancel: function onCancel() {
      return handleOriginalReorder();
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
var OrderDetails = exports.OrderDetails = function OrderDetails(props) {
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var orderDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    userCustomerId: userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    googleMapsControls: {
      defaultZoom: 15,
      zoomControl: true,
      streetViewControl: false,
      fullscreenControl: false,
      mapTypeId: 'roadmap',
      // 'roadmap', 'satellite', 'hybrid', 'terrain'
      mapTypeControl: true,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite']
      }
    },
    orderTypes: props.orderTypes || [{
      value: 1,
      text: t('DELIVERY', 'Delivery')
    }, {
      value: 2,
      text: t('PICKUP', 'Pickup')
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside')
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru')
    }],
    UIComponent: OrderDetailsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderDetails, orderDetailsProps);
};