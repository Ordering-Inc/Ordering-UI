"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));
var _PaymentOptions = require("../PaymentOptions");
var _PaymentOptionWallet = require("../PaymentOptionWallet");
var _DriverTips = require("../DriverTips");
var _CartBill = require("../CartBill");
var _Shared = require("../../../Shared");
var _styles = require("../../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CheckoutUI = function CheckoutUI(props) {
  var _businessDetails$busi, _businessDetails$busi2, _configs$table_numer_, _businessConfigs$find, _businessConfigs$find2, _configs$cash_wallet, _configs$wallet_enabl, _validationFields$fie, _validationFields$fie2, _cart$comment, _validationFields$fie3, _validationFields$fie4, _paymethodSelected$da, _paymethodSelected$da2, _cardList$cards, _cartState$cart, _validationFields$fie5, _validationFields$fie6, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _validationFields$fie7, _businessDetails$busi3, _businessDetails$busi4, _businessDetails$busi5, _configs$driver_tip_t, _configs$driver_tip_u, _configs$driver_tip_t2, _validationFields$fie12, _validationFields$fie13;
  var cart = props.cart,
    errors = props.errors,
    placing = props.placing,
    cartState = props.cartState,
    loyaltyPlansState = props.loyaltyPlansState,
    businessDetails = props.businessDetails,
    paymethodSelected = props.paymethodSelected,
    handlePaymethodChange = props.handlePaymethodChange,
    handlerClickPlaceOrder = props.handlerClickPlaceOrder,
    handleOrderRedirect = props.handleOrderRedirect,
    isCustomerMode = props.isCustomerMode,
    isResetPaymethod = props.isResetPaymethod,
    setIsResetPaymethod = props.setIsResetPaymethod,
    onPlaceOrderClick = props.onPlaceOrderClick,
    placeSpotNumber = props.placeSpotNumber;
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
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
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    customerState = _useCustomer2[0];
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
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    requiredFields = _useState8[0],
    setRequiredFields = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    cardList = _useState10[0],
    setCardList = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    paymethodClicked = _useState12[0],
    setPaymethodClicked = _useState12[1];
  var cardsMethods = ['stripe', 'credomatic'];
  var businessConfigs = (_businessDetails$busi = businessDetails === null || businessDetails === void 0 || (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.configs) !== null && _businessDetails$busi !== void 0 ? _businessDetails$busi : [];
  var isTableNumberEnabled = configs === null || configs === void 0 || (_configs$table_numer_ = configs.table_numer_enabled) === null || _configs$table_numer_ === void 0 ? void 0 : _configs$table_numer_.value;
  var isWalletCashEnabled = ((_businessConfigs$find = businessConfigs.find(function (config) {
    return config.key === 'wallet_cash_enabled';
  })) === null || _businessConfigs$find === void 0 ? void 0 : _businessConfigs$find.value) === '1';
  var isWalletCreditPointsEnabled = ((_businessConfigs$find2 = businessConfigs.find(function (config) {
    return config.key === 'wallet_credit_point_enabled';
  })) === null || _businessConfigs$find2 === void 0 ? void 0 : _businessConfigs$find2.value) === '1';
  var isWalletEnabled = (configs === null || configs === void 0 || (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 || (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !isCustomerMode;
  var isGiftCardCart = !(cart !== null && cart !== void 0 && cart.business_id);
  var validateCommentsCartField = (validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.checkout) === null || _validationFields$fie === void 0 || (_validationFields$fie = _validationFields$fie.comments) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.checkout) === null || _validationFields$fie2 === void 0 || (_validationFields$fie2 = _validationFields$fie2.comments) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.required) && ((cart === null || cart === void 0 ? void 0 : cart.comment) === null || (cart === null || cart === void 0 || (_cart$comment = cart.comment) === null || _cart$comment === void 0 ? void 0 : _cart$comment.trim().length) === 0);
  var validateZipcodeCard = (validationFields === null || validationFields === void 0 || (_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.card) === null || _validationFields$fie3 === void 0 || (_validationFields$fie3 = _validationFields$fie3.zipcode) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.card) === null || _validationFields$fie4 === void 0 || (_validationFields$fie4 = _validationFields$fie4.zipcode) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.required) && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'stripe' && (paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.card) && !(paymethodSelected !== null && paymethodSelected !== void 0 && (_paymethodSelected$da2 = paymethodSelected.data) !== null && _paymethodSelected$da2 !== void 0 && (_paymethodSelected$da2 = _paymethodSelected$da2.card) !== null && _paymethodSelected$da2 !== void 0 && _paymethodSelected$da2.zipcode);
  var isDisablePlaceOrderButton = !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 || cardsMethods.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (cardList === null || cardList === void 0 || (_cardList$cards = cardList.cards) === null || _cardList$cards === void 0 ? void 0 : _cardList$cards.length) === 0 || placing || errorCash || loading || isTableNumberEnabled === '1' && (options === null || options === void 0 ? void 0 : options.type) === 3 && !(cartState !== null && cartState !== void 0 && (_cartState$cart = cartState.cart) !== null && _cartState$cart !== void 0 && _cartState$cart.spot_number || cart !== null && cart !== void 0 && cart.spot_number || placeSpotNumber) || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || options.type === 1 && (validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.checkout) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.driver_tip) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.checkout) === null || _validationFields$fie6 === void 0 || (_validationFields$fie6 = _validationFields$fie6.driver_tip) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 || validateCommentsCartField || validateZipcodeCard;
  var driverTipsOptions = typeof (configs === null || configs === void 0 || (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 || (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 || (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var driverTipsField = !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 || (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 || (_validationFields$fie7 = _validationFields$fie7.checkout) === null || _validationFields$fie7 === void 0 || (_validationFields$fie7 = _validationFields$fie7.driver_tip) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.enabled) && driverTipsOptions.length > 0;
  var handlePlaceOrder = function handlePlaceOrder() {
    if (!userErrors.length && (!(requiredFields !== null && requiredFields !== void 0 && requiredFields.length) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'card_delivery')) {
      var body = {};
      handlerClickPlaceOrder && handlerClickPlaceOrder(null, body);
      return;
    }
    setAlertState({
      open: true,
      content: Object.values(userErrors).map(function (error) {
        return error;
      })
    });
  };
  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _configs$verification;
    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes', 'comments'];
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = [];
    Object.values(validationFields === null || validationFields === void 0 || (_validationFields$fie8 = validationFields.fields) === null || _validationFields$fie8 === void 0 ? void 0 : _validationFields$fie8.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          _requiredFields.push(field === null || field === void 0 ? void 0 : field.code);
        }
      }
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie9 = validationFields.fields) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie9 = _validationFields$fie9.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie9 = _validationFields$fie9.cellphone) !== null && _validationFields$fie9 !== void 0 && _validationFields$fie9.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie10 = validationFields.fields) !== null && _validationFields$fie10 !== void 0 && (_validationFields$fie10 = _validationFields$fie10.checkout) !== null && _validationFields$fie10 !== void 0 && (_validationFields$fie10 = _validationFields$fie10.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.required || (configs === null || configs === void 0 || (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      _requiredFields.push('cellphone');
    }
    setRequiredFields(_requiredFields);
    if (userSelected && userSelected !== null && userSelected !== void 0 && userSelected.cellphone) {
      if (userSelected !== null && userSelected !== void 0 && userSelected.country_phone_code) {
        var phone = null;
        phone = "+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code).concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone.replace("+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code), ''));
        var phoneNumber = (0, _libphonenumberJs.default)(phone);
        if (!(phoneNumber !== null && phoneNumber !== void 0 && phoneNumber.isValid())) {
          errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_INVALID', 'The field Phone number is invalid.'));
        }
      } else {
        errors.push(t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid'));
      }
    }
    setUserErrors(errors);
  };
  (0, _react.useEffect)(function () {
    var _validationFields$fie11;
    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie11 = validationFields.fields) !== null && _validationFields$fie11 !== void 0 && _validationFields$fie11.checkout) {
      checkValidationFields();
    }
  }, [validationFields, user, customerState]);
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
    }
  }, [isResetPaymethod]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Conatiner, null, !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles2.PaymentMethodContainer, {
    className: "paymentsContainer"
  }, /*#__PURE__*/_react.default.createElement(_styles2.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h3", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement(_styles2.Flag, null, t('REQUIRED', 'Required'))), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles2.WarningMessage, {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: !isGiftCardCart ? businessDetails === null || businessDetails === void 0 || (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.id : -1,
    isLoading: !isGiftCardCart ? businessDetails.loading : false,
    paymethods: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.paymethods,
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
    paymethodClicked: paymethodClicked,
    setPaymethodClicked: setPaymethodClicked
  })), isWalletEnabled && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.loading) && /*#__PURE__*/_react.default.createElement(_PaymentOptionWallet.PaymentOptionWallet, {
    cart: cart,
    loyaltyPlansState: loyaltyPlansState,
    businessConfigs: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.configs
  }), driverTipsField && /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true
  }), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_CartBill.CartBill, {
    cart: cart
  }), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: isDisablePlaceOrderButton,
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')), isTableNumberEnabled === '1' && (options === null || options === void 0 ? void 0 : options.type) === 3 && !(cart !== null && cart !== void 0 && cart.spot_number || placeSpotNumber) && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_PLACE_SPOT', 'Please, select your spot to place order.')), options.type === 1 && (validationFields === null || validationFields === void 0 || (_validationFields$fie12 = validationFields.fields) === null || _validationFields$fie12 === void 0 || (_validationFields$fie12 = _validationFields$fie12.checkout) === null || _validationFields$fie12 === void 0 || (_validationFields$fie12 = _validationFields$fie12.driver_tip) === null || _validationFields$fie12 === void 0 ? void 0 : _validationFields$fie12.enabled) && (validationFields === null || validationFields === void 0 || (_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 || (_validationFields$fie13 = _validationFields$fie13.checkout) === null || _validationFields$fie13 === void 0 || (_validationFields$fie13 = _validationFields$fie13.driver_tip) === null || _validationFields$fie13 === void 0 ? void 0 : _validationFields$fie13.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.')), validateCommentsCartField && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_INVALID_CART_COMMENTS', 'Cart comments is required.')), validateZipcodeCard && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('WARNING_CARD_ZIPCODE_REQUIRED', 'Your card selected has not zipcode')), (cart === null || cart === void 0 ? void 0 : cart.valid_preorder) !== undefined && !(cart !== null && cart !== void 0 && cart.valid_preorder) && /*#__PURE__*/_react.default.createElement(_styles2.WarningText, null, t('INVALID_CART_MOMENT', 'Selected schedule time is invalid, please select a schedule into the business schedule interval.')), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('CUSTOMER_DETAILS', 'Customer Details'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
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
    },
    closeOnBackdrop: false
  }));
};
var Checkout = function Checkout(props) {
  var _Object$values, _cartState$error, _cartState$cart2;
  var errors = props.errors,
    clearErrors = props.clearErrors,
    cartUuid = props.cartUuid,
    handleOrderRedirect = props.handleOrderRedirect,
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
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useState13 = (0, _react.useState)({
      loading: true,
      error: null,
      cart: null
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    cartState = _useState14[0],
    setCartState = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    currentCart = _useState16[0],
    setCurrentCart = _useState16[1];
  var _useState17 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    alertState = _useState18[0],
    setAlertState = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isResetPaymethod = _useState20[0],
    setIsResetPaymethod = _useState20[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && (((_Object$values = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values === void 0 ? void 0 : _Object$values.filter(function (cart) {
    var _cart$products;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length);
  })) || null);
  var carts = businessSlug ? cartsWithProducts.filter(function (cart) {
    var _cart$business;
    return (cart === null || cart === void 0 || (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug) === businessSlug || businessSlug === (cart === null || cart === void 0 ? void 0 : cart.business_id);
  }) : cartsWithProducts;
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    clearErrors && clearErrors();
  };
  (0, _react.useEffect)(function () {
    if (!orderState.loading && currentCart !== null && currentCart !== void 0 && currentCart.business_id) {
      var _Object$values2;
      setCurrentCart.apply(void 0, _toConsumableArray((_Object$values2 = Object.values(orderState.carts)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.filter(function (cart) {
        return (cart === null || cart === void 0 ? void 0 : cart.business_id) === (currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id);
      })));
    }
  }, [orderState.loading]);
  (0, _react.useEffect)(function () {
    if (errors !== null && errors !== void 0 && errors.length) {
      setAlertState({
        open: true,
        content: errors
      });
    }
  }, [errors]);
  var getOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cartId) {
      var _result$order, result, cart, userCustomer, url, response, content, _result, credomaticData, urlParams, paramsObj, _confirmCartRes$resul, confirmCartRes, _cart, spotNumberFromStorage, _JSON$parse, _JSON$parse2, _cart2, spotNumber, slug;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            result = {};
            cart = carts.find(function (cart) {
              return cart.uuid === cartId;
            });
            userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
            if (!(cart && !userCustomer)) {
              _context.next = 8;
              break;
            }
            result = JSON.parse(JSON.stringify(cart));
            _context.next = 17;
            break;
          case 8:
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
            _context.next = 12;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId
              }
            });
          case 12:
            response = _context.sent;
            _context.next = 15;
            return response.json();
          case 15:
            content = _context.sent;
            result = content.result;
          case 17:
            if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
              _context.next = 22;
              break;
            }
            handleOrderRedirect(result.order.uuid);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false
            }));
            _context.next = 43;
            break;
          case 22:
            if (!(result.status === 2)) {
              _context.next = 39;
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
            _context.prev = 25;
            _context.next = 28;
            return confirmCart(cartUuid, credomaticData);
          case 28:
            confirmCartRes = _context.sent;
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
            _context.next = 37;
            break;
          case 34:
            _context.prev = 34;
            _context.t0 = _context["catch"](25);
            setAlertState({
              open: true,
              content: [_context.t0.message]
            });
          case 37:
            _context.next = 43;
            break;
          case 39:
            _cart = Array.isArray(result) ? null : JSON.parse(JSON.stringify(result));
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
            setCartState({
              loading: false,
              cart: _cart,
              error: _cart ? null : result
            });
          case 43:
            _context.next = 48;
            break;
          case 45:
            _context.prev = 45;
            _context.t1 = _context["catch"](0);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              error: [_context.t1.toString()]
            }));
          case 48:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 45], [25, 34]]);
    }));
    return function getOrder(_x) {
      return _ref.apply(this, arguments);
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && orderState.carts && carts && (carts === null || carts === void 0 ? void 0 : carts.length) === 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_Shared.NotFoundSource, {
    content: t('ERROR_CART_SELECTED', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartUuid && cartState.cart && ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
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
exports.Checkout = Checkout;