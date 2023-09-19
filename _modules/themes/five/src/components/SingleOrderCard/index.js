"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleOrderCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _ReviewOrder = require("../ReviewOrder");
var _ReviewProduct = require("../ReviewProduct");
var _ReviewDriver = require("../ReviewDriver");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));
var _Buttons = require("../../styles/Buttons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Modal = require("../Modal");
var _Confirm = require("../Confirm");
var _OrderEta = require("../OrderDetails/OrderEta");
var _styles = require("./styles");
var _styles2 = require("../OrdersOption/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var SingleOrderCardUI = function SingleOrderCardUI(props) {
  var _theme$orders, _theme$orders2, _theme$orders3, _theme$orders4, _theme$orders5, _theme$orders6, _theme$orders7, _theme$orders8, _props$beforeElements, _props$beforeComponen, _order$business, _order$business2, _order$business3, _order$business4, _order$business5, _order$business6, _theme$images2, _order$business7, _theme$images3, _order$business8, _theme$images4, _order$business9, _order$business10, _order$summary, _order$business11, _order$business12, _order$business13, _order$business14, _getOrderStatus, _order$business15, _order$summary2, _order$business16, _props$afterComponent, _props$afterElements;
  var order = props.order,
    isBusinessesPage = props.isBusinessesPage,
    handleReorder = props.handleReorder,
    customArray = props.customArray,
    onRedirectPage = props.onRedirectPage,
    pastOrders = props.pastOrders,
    isCustomerMode = props.isCustomerMode,
    handleFavoriteOrder = props.handleFavoriteOrder,
    isSkeleton = props.isSkeleton,
    isFavorite = props.isFavorite,
    handleRemoveCart = props.handleRemoveCart,
    cartState = props.cartState;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    carts = _useOrder2[0].carts;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate,
    optimizeImage = _useUtils2$.optimizeImage;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isReviewOpen = _useState2[0],
    setIsReviewOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    reviewStatus = _useState4[0],
    setReviewStatus = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isOrderReviewed = _useState8[0],
    setIsOrderReviewed = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    isProductReviewed = _useState10[0],
    setIsProductReviewed = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isDriverReviewed = _useState12[0],
    setIsDriverReviewed = _useState12[1];
  var isGiftCardOrder = !(order !== null && order !== void 0 && order.business_id);
  var handleClickCard = function handleClickCard(e, order) {
    if (e.target.closest('.favorite') || e.target.closest('.review') || e.target.closest('.reorder')) return;
    if (customArray) {
      onRedirectPage({
        page: 'checkout',
        params: {
          cartUuid: order.uuid
        }
      });
    } else {
      order !== null && order !== void 0 && order.cart_group_id ? onRedirectPage({
        page: 'multi_orders',
        params: {
          orderId: order.cart_group_id
        }
      }) : onRedirectPage({
        page: 'order_detail',
        params: {
          orderId: order.uuid
        }
      });
    }
  };
  var closeReviewOrder = function closeReviewOrder() {
    if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else handleCloseReivew();
  };
  var closeReviewProduct = function closeReviewProduct() {
    if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
    });else {
      setIsDriverReviewed(true);
      handleCloseReivew();
    }
  };
  var handleOpenReview = function handleOpenReview() {
    if (!(order !== null && order !== void 0 && order.review) && !isOrderReviewed) setReviewStatus({
      order: true,
      product: false,
      driver: false
    });else if (!isProductReviewed) setReviewStatus({
      order: false,
      product: true,
      driver: false
    });else if (order !== null && order !== void 0 && order.driver && !(order !== null && order !== void 0 && order.user_review) && !isDriverReviewed) setReviewStatus({
      order: false,
      product: false,
      driver: true
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
      driver: false
    });
    setIsReviewOpen(false);
  };
  var handleClickReview = function handleClickReview(order) {
    handleOpenReview && handleOpenReview();
  };
  var handleChangeFavorite = function handleChangeFavorite(order) {
    handleFavoriteOrder && handleFavoriteOrder(!(order !== null && order !== void 0 && order.favorite));
  };
  var handleClickReorder = function handleClickReorder(order) {
    var _carts;
    if (carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)] && ((_carts = carts["businessId:".concat(order === null || order === void 0 ? void 0 : order.business_id)]) === null || _carts === void 0 || (_carts = _carts.products) === null || _carts === void 0 ? void 0 : _carts.length) > 0) {
      setConfirm({
        open: true,
        content: t('QUESTION_DELETE_PRODUCTS_FROM_CART', 'Are you sure that you want to delete all products from cart?'),
        handleOnAccept: function () {
          var _handleOnAccept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  handleRemoveCart();
                  setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
                    open: false
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
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
  var hideBusinessLogo = theme === null || theme === void 0 || (_theme$orders = theme.orders) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.components) === null || _theme$orders === void 0 || (_theme$orders = _theme$orders.business_logo) === null || _theme$orders === void 0 ? void 0 : _theme$orders.hidden;
  var hideDate = theme === null || theme === void 0 || (_theme$orders2 = theme.orders) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.components) === null || _theme$orders2 === void 0 || (_theme$orders2 = _theme$orders2.date) === null || _theme$orders2 === void 0 ? void 0 : _theme$orders2.hidden;
  var hideBusinessName = theme === null || theme === void 0 || (_theme$orders3 = theme.orders) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.components) === null || _theme$orders3 === void 0 || (_theme$orders3 = _theme$orders3.business_name) === null || _theme$orders3 === void 0 ? void 0 : _theme$orders3.hidden;
  var hideOrderNumber = theme === null || theme === void 0 || (_theme$orders4 = theme.orders) === null || _theme$orders4 === void 0 || (_theme$orders4 = _theme$orders4.components) === null || _theme$orders4 === void 0 || (_theme$orders4 = _theme$orders4.order_number) === null || _theme$orders4 === void 0 ? void 0 : _theme$orders4.hidden;
  var hideReviewOrderButton = theme === null || theme === void 0 || (_theme$orders5 = theme.orders) === null || _theme$orders5 === void 0 || (_theme$orders5 = _theme$orders5.components) === null || _theme$orders5 === void 0 || (_theme$orders5 = _theme$orders5.review_order_button) === null || _theme$orders5 === void 0 ? void 0 : _theme$orders5.hidden;
  var hideReorderButton = theme === null || theme === void 0 || (_theme$orders6 = theme.orders) === null || _theme$orders6 === void 0 || (_theme$orders6 = _theme$orders6.components) === null || _theme$orders6 === void 0 || (_theme$orders6 = _theme$orders6.reorder_button) === null || _theme$orders6 === void 0 ? void 0 : _theme$orders6.hidden;
  var hideFavorite = theme === null || theme === void 0 || (_theme$orders7 = theme.orders) === null || _theme$orders7 === void 0 || (_theme$orders7 = _theme$orders7.components) === null || _theme$orders7 === void 0 || (_theme$orders7 = _theme$orders7.favorite) === null || _theme$orders7 === void 0 ? void 0 : _theme$orders7.hidden;
  var hideOrderStatus = theme === null || theme === void 0 || (_theme$orders8 = theme.orders) === null || _theme$orders8 === void 0 || (_theme$orders8 = _theme$orders8.components) === null || _theme$orders8 === void 0 || (_theme$orders8 = _theme$orders8.order_status) === null || _theme$orders8 === void 0 ? void 0 : _theme$orders8.hidden;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "order-card",
    w: screen.width - (screen.width < 411 ? -60 : 60),
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode,
    onClick: function onClick(e) {
      return handleClickCard(e, order);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Content, {
    isCustomerMode: isCustomerMode
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomerMode && !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (order === null || order === void 0 || (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.length) > 1 ? /*#__PURE__*/_react.default.createElement(_styles.MultiLogosContainer, null, order === null || order === void 0 || (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.map(function (business, i) {
    var _theme$images;
    return i < 2 && /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
      key: business === null || business === void 0 ? void 0 : business.id,
      bgimage: optimizeImage((business === null || business === void 0 ? void 0 : business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo), 'h_400,c_limit'),
      isMulti: true
    });
  }), (order === null || order === void 0 || (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.length) > 1 && (order === null || order === void 0 || (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.length) - 2 > 0 && /*#__PURE__*/_react.default.createElement("p", null, "+ ", (order === null || order === void 0 || (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.length) - 2)) : /*#__PURE__*/_react.default.createElement(_styles.BusinessLogoWrapper, {
    bgimage: optimizeImage((order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo), 'h_400,c_limit')
  })), isCustomerMode && !hideBusinessLogo && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (((_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.logo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.dummies) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.logo) || ((_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.dummies) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.businessLogo),
    alt: "business-logo",
    width: "75px",
    height: "75px"
  })))), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, {
    activeOrders: true,
    isMultiCart: (order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.length) > 1
  }, !hideBusinessName && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.name), /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage,
    isCustomerMode: isCustomerMode
  }, /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || (order === null || order === void 0 ? void 0 : order.total))))) : /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120
  }) : (order === null || order === void 0 || (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.length) > 1 ? "".concat(t('GROUP_ORDER', 'Group Order'), " ").concat(t('No', 'No'), ". ").concat(order === null || order === void 0 ? void 0 : order.cart_group_id) : (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.name)), isSkeleton ? /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 150
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "orders-detail"
  }, (order === null || order === void 0 ? void 0 : order.id) && !hideOrderNumber && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, (order === null || order === void 0 || (_order$business13 = order.business) === null || _order$business13 === void 0 ? void 0 : _order$business13.length) > 1 ? "".concat(order === null || order === void 0 || (_order$business14 = order.business) === null || _order$business14 === void 0 ? void 0 : _order$business14.length, " ").concat(t('ORDERS', 'orders')) : "".concat(t('ORDER_NUM', 'Order No.'), " ").concat(order.id))), !hideDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", null, pastOrders ? order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
    outputFormat: 'MM/DD/YY hh:mm A'
  }) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }) : /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: order
  })))), !hideOrderStatus && /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 80
  }) : (_getOrderStatus = (0, _utils.getOrderStatus)(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.Price, {
    isBusinessesPage: isBusinessesPage
  }, !pastOrders && /*#__PURE__*/_react.default.createElement("h2", null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : parsePrice((order === null || order === void 0 || (_order$business15 = order.business) === null || _order$business15 === void 0 ? void 0 : _order$business15.length) > 1 ? order === null || order === void 0 ? void 0 : order.total : (order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.total) || (order === null || order === void 0 ? void 0 : order.total)))), pastOrders && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, {
    isCustomerMode: isCustomerMode
  }, !isOrderReviewed && !isFavorite && (!(order !== null && order !== void 0 && order.review) || order.driver && !(order !== null && order !== void 0 && order.user_review)) && !hideReviewOrderButton && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    className: "review",
    onClick: function onClick() {
      return handleClickReview(order);
    }
  }, t('REVIEW', 'Review')), order.cart && typeof (order === null || order === void 0 ? void 0 : order.id) === 'number' && !hideReorderButton && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    className: "reorder",
    outline: true,
    onClick: function onClick() {
      return handleClickReorder(order);
    }
  }, cartState !== null && cartState !== void 0 && cartState.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))), !(order !== null && order !== void 0 && (_order$business16 = order.business) !== null && _order$business16 !== void 0 && _order$business16.length) && !hideFavorite && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.FavoriteWrapper, {
    onClick: function onClick() {
      return handleChangeFavorite(order);
    },
    className: "favorite"
  }, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 20,
    height: 20
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, order !== null && order !== void 0 && order.favorite ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HeartFill, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))))), isReviewOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isReviewOpen,
    onClose: handleCloseReivew,
    title: order ? reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? t('REVIEW_ORDER', 'Review order') : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? t('REVIEW_PRODUCT', 'Review Product') : t('REVIEW_DRIVER', 'Review Driver') : t('LOADING', 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_styles.ReviewWrapper, null, reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.order ? /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: closeReviewOrder,
    setIsReviewed: setIsOrderReviewed
  }) : reviewStatus !== null && reviewStatus !== void 0 && reviewStatus.product ? /*#__PURE__*/_react.default.createElement(_ReviewProduct.ReviewProduct, {
    order: order,
    closeReviewProduct: closeReviewProduct,
    setIsProductReviewed: setIsProductReviewed
  }) : /*#__PURE__*/_react.default.createElement(_ReviewDriver.ReviewDriver, {
    order: order,
    closeReviewDriver: handleCloseReivew,
    setIsDriverReviewed: setIsDriverReviewed
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('ORDER', 'Order'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return handleOriginalReorder();
    },
    onCancel: function onCancel() {
      return handleOriginalReorder();
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var SingleOrderCard = function SingleOrderCard(props) {
  var singleOrderCardProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SingleOrderCardUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.SingleOrderCard, singleOrderCardProps);
};
exports.SingleOrderCard = SingleOrderCard;