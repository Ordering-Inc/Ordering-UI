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
var _orderingComponents = require("ordering-components");
var _UpsellingPage = require("../UpsellingPage");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _AddressDetails = require("../AddressDetails");
var _UserDetails = require("../UserDetails");
var _PaymentOptions = require("../PaymentOptions");
var _DriverTips = require("../DriverTips");
var _Cart = require("../Cart");
var _Confirm = require("../Confirm");
var _CartContent = require("../CartContent");
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
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};
var CheckoutUI = function CheckoutUI(props) {
  var _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _props$beforeElements, _props$beforeComponen, _props$beforeElements2, _props$beforeComponen2, _businessDetails$busi, _businessDetails$busi2, _theme$images, _configs$google_maps_, _props$beforeElements3, _props$beforeComponen3, _customerState$user, _customerState$user2, _props$beforeElements4, _props$beforeComponen4, _Object$values, _businessDetails$busi3, _businessDetails$busi4, _businessDetails$busi5, _businessDetails$busi6, _businessDetails$erro, _businessDetails$erro2, _props$beforeElements5, _props$beforeComponen5, _businessDetails$busi7, _businessDetails$busi8, _props$beforeElements6, _props$beforeComponen6, _validationFields$fie5, _configs$driver_tip_t, _configs$driver_tip_u, _configs$driver_tip_u2, _configs$driver_tip_t2, _configs$driver_tip_u3, _props$beforeElements7, _props$beforeComponen7, _cart$products, _props$beforeElements8, _props$beforeComponen8, _props$afterComponent, _props$afterElements;
  var uuid = props.uuid,
    cart = props.cart,
    errors = props.errors,
    placing = props.placing,
    cartState = props.cartState,
    businessDetails = props.businessDetails,
    paymethodSelected = props.paymethodSelected,
    handlePaymethodChange = props.handlePaymethodChange,
    handlerClickPlaceOrder = props.handlerClickPlaceOrder,
    handleOrderRedirect = props.handleOrderRedirect,
    isCustomerMode = props.isCustomerMode,
    isResetPaymethod = props.isResetPaymethod,
    setIsResetPaymethod = props.setIsResetPaymethod;
  var theme = (0, _styledComponents.useTheme)();
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  // const [{ options, loading }, { changePaymethod }] = useOrder()
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
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isUserDetailsEdit = _useState8[0],
    setIsUserDetailsEdit = _useState8[1];
  var driverTipsOptions = typeof (configs === null || configs === void 0 || (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 || (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 || (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var handlePlaceOrder = function handlePlaceOrder() {
    if (!userErrors.length) {
      handlerClickPlaceOrder && handlerClickPlaceOrder();
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
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    setIsUserDetailsEdit(false);
  };
  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;
    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    var userSelected = isCustomerMode ? customerState.user : user;
    Object.values(validationFields === null || validationFields === void 0 || (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : _validationFields$fie.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          errors.push(t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "The field ".concat(field === null || field === void 0 ? void 0 : field.name, " is required")));
        }
      }
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && validationFields !== null && validationFields !== void 0 && (_validationFields$fie2 = validationFields.fields) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.checkout) !== null && _validationFields$fie2 !== void 0 && (_validationFields$fie2 = _validationFields$fie2.cellphone) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie3 = validationFields.fields) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.checkout) !== null && _validationFields$fie3 !== void 0 && (_validationFields$fie3 = _validationFields$fie3.cellphone) !== null && _validationFields$fie3 !== void 0 && _validationFields$fie3.required) {
      errors.push(t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone number is required'));
    }
    if (userSelected && userSelected !== null && userSelected !== void 0 && userSelected.cellphone) {
      if (userSelected !== null && userSelected !== void 0 && userSelected.country_phone_code) {
        var phone = null;
        phone = "+".concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.country_phone_code).concat(userSelected === null || userSelected === void 0 ? void 0 : userSelected.cellphone);
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
    var _validationFields$fie4;
    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie4 = validationFields.fields) !== null && _validationFields$fie4 !== void 0 && _validationFields$fie4.checkout) {
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
      // changePaymethod(cart?.business_id, null, null)
    }
  }, [isResetPaymethod]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContent, null, !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), /*#__PURE__*/_react.default.createElement("h2", {
    className: "checkout-title"
  }, t('CHECK_OUT', 'Checkout')), (_props$beforeElements2 = props.beforeElementsSectionOne) === null || _props$beforeElements2 === void 0 ? void 0 : _props$beforeElements2.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen2 = props.beforeComponentsSectionOne) === null || _props$beforeComponen2 === void 0 ? void 0 : _props$beforeComponen2.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionOne && (businessDetails !== null && businessDetails !== void 0 && businessDetails.loading || cartState.loading ? /*#__PURE__*/_react.default.createElement("div", {
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
    location: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi = businessDetails.business) === null || _businessDetails$busi === void 0 ? void 0 : _businessDetails$busi.location,
    businessLogo: (businessDetails === null || businessDetails === void 0 || (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo),
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    uuid: uuid,
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs,
    isCustomerMode: isCustomerMode
  })), (_props$beforeElements3 = props.beforeElementsSectionTwo) === null || _props$beforeElements3 === void 0 ? void 0 : _props$beforeElements3.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen3 = props.beforeComponentsSectionTwo) === null || _props$beforeComponen3 === void 0 ? void 0 : _props$beforeComponen3.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionTwo && /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, cartState.loading || isCustomerMode && !(customerState !== null && customerState !== void 0 && (_customerState$user = customerState.user) !== null && _customerState$user !== void 0 && _customerState$user.id) ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  })) : /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 || (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id),
    isCheckout: true
  }))), (_props$beforeElements4 = props.beforeElementsSectionThree) === null || _props$beforeElements4 === void 0 ? void 0 : _props$beforeElements4.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen4 = props.beforeComponentsSectionThree) === null || _props$beforeComponen4 === void 0 ? void 0 : _props$beforeComponen4.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionThree && /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.loading) || cartState.loading) && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.error) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  }))), !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && ((_Object$values = Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.address), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.name), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.email), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 || (_businessDetails$busi6 = businessDetails.business) === null || _businessDetails$busi6 === void 0 ? void 0 : _businessDetails$busi6.cellphone))), (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error) && (businessDetails === null || businessDetails === void 0 || (_businessDetails$erro = businessDetails.error) === null || _businessDetails$erro === void 0 ? void 0 : _businessDetails$erro.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (businessDetails === null || businessDetails === void 0 || (_businessDetails$erro2 = businessDetails.error[0]) === null || _businessDetails$erro2 === void 0 ? void 0 : _businessDetails$erro2.message) || (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error[0])
  }))), /*#__PURE__*/_react.default.createElement(_styles.CheckOutDivider, null), (_props$beforeElements5 = props.beforeElementsSectionFive) === null || _props$beforeElements5 === void 0 ? void 0 : _props$beforeElements5.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen5 = props.beforeComponentsSectionFive) === null || _props$beforeComponen5 === void 0 ? void 0 : _props$beforeComponen5.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionFive && !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods')), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi7 = businessDetails.business) === null || _businessDetails$busi7 === void 0 ? void 0 : _businessDetails$busi7.id,
    isLoading: businessDetails.loading,
    paymethods: businessDetails === null || businessDetails === void 0 || (_businessDetails$busi8 = businessDetails.business) === null || _businessDetails$busi8 === void 0 ? void 0 : _businessDetails$busi8.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isCustomerMode: isCustomerMode,
    paySelected: paymethodSelected
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, (_props$beforeElements6 = props.beforeElementsSectionFour) === null || _props$beforeElements6 === void 0 ? void 0 : _props$beforeElements6.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen6 = props.beforeComponentsSectionFour) === null || _props$beforeComponen6 === void 0 ? void 0 : _props$beforeComponen6.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionFour && !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 || (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.checkout) === null || _validationFields$fie5 === void 0 || (_validationFields$fie5 = _validationFields$fie5.driver_tip) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5.enabled) && driverTipsOptions.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    uuid: cart === null || cart === void 0 ? void 0 : cart.uuid,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1 || !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u2 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u2 === void 0 ? void 0 : _configs$driver_tip_u2.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 || !!parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u3 = configs.driver_tip_use_custom) === null || _configs$driver_tip_u3 === void 0 ? void 0 : _configs$driver_tip_u3.value, 10) ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    useOrderContext: true
  })), /*#__PURE__*/_react.default.createElement(_styles.DriverTipDivider, null)), (_props$beforeElements7 = props.beforeElementsSectionSix) === null || _props$beforeElements7 === void 0 ? void 0 : _props$beforeElements7.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen7 = props.beforeComponentsSectionSix) === null || _props$beforeComponen7 === void 0 ? void 0 : _props$beforeComponen7.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionSix && !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    cart: cart,
    isCheckout: true,
    isProducts: (cart === null || cart === void 0 || (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) || 0
  })), (_props$beforeElements8 = props.beforeElementsSectionSeven) === null || _props$beforeElements8 === void 0 ? void 0 : _props$beforeElements8.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen8 = props.beforeComponentsSectionSeven) === null || _props$beforeComponen8 === void 0 ? void 0 : _props$beforeComponen8.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), !props.isHideSectionSeven && !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected || placing || errorCash || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) || loading,
    onClick: function onClick() {
      return handlePlaceOrder();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !(cart !== null && cart !== void 0 && cart.valid_minimum) && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var Checkout = function Checkout(props) {
  var _Object$values2, _cartState$error, _cartState$cart;
  var errors = props.errors,
    clearErrors = props.clearErrors,
    cartUuid = props.cartUuid,
    handleOrderRedirect = props.handleOrderRedirect,
    handleCheckoutRedirect = props.handleCheckoutRedirect,
    handleSearchRedirect = props.handleSearchRedirect,
    handleCheckoutListRedirect = props.handleCheckoutListRedirect;
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
  var _useState9 = (0, _react.useState)({
      loading: true,
      error: null,
      cart: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    cartState = _useState10[0],
    setCartState = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openUpselling = _useState12[0],
    setOpenUpselling = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    canOpenUpselling = _useState14[0],
    setCanOpenUpselling = _useState14[1];
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
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && (((_Object$values2 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.filter(function (cart) {
    var _cart$products2;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 || (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length);
  })) || null);
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
      var _Object$values3;
      setCurrentCart.apply(void 0, _toConsumableArray((_Object$values3 = Object.values(orderState.carts)) === null || _Object$values3 === void 0 ? void 0 : _Object$values3.filter(function (cart) {
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
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(cartId) {
      var _result$order, userCustomer, url, response, _yield$response$json, result, _confirmCartRes$resul, confirmCartRes, cart;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: true
            }));
            userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
            url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
            _context.next = 6;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token)
              }
            });
          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();
          case 9:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
              _context.next = 16;
              break;
            }
            handleOrderRedirect(result.order.uuid);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false
            }));
            _context.next = 33;
            break;
          case 16:
            if (!(result.status === 2)) {
              _context.next = 31;
              break;
            }
            _context.prev = 17;
            _context.next = 20;
            return confirmCart(cartUuid);
          case 20:
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
            _context.next = 29;
            break;
          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](17);
            setAlertState({
              open: true,
              content: [_context.t0.message]
            });
          case 29:
            _context.next = 33;
            break;
          case 31:
            cart = Array.isArray(result) ? null : result;
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              cart: cart,
              error: cart ? null : result
            }));
          case 33:
            _context.next = 38;
            break;
          case 35:
            _context.prev = 35;
            _context.t1 = _context["catch"](0);
            setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
              loading: false,
              error: [_context.t1.toString()]
            }));
          case 38:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 35], [17, 26]]);
    }));
    return function getOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (token && cartUuid) {
      getOrder(cartUuid);
    }
  }, [token, cartUuid]);
  var checkoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutUI,
    cartState: cartState,
    uuid: cartUuid,
    isResetPaymethod: isResetPaymethod,
    setIsResetPaymethod: setIsResetPaymethod
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && orderState.carts && cartsWithProducts && (cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length) === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !cartUuid && orderState.carts && cartsWithProducts && (cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.CartsList, null, /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
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
  }))), cartUuid && cartState.cart && ((_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
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
exports.Checkout = Checkout;