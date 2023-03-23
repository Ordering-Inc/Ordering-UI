"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _orderingComponents = require("ordering-components");
var _libphonenumberJs = require("libphonenumber-js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage Checkout page behavior without UI component
 */
var Checkout = function Checkout(props) {
  var _Object$values$find$b, _Object$values$find, _orderState$carts, _orderState$carts2, _cartState$cart$spot_, _cartState$cart, _orderState$options3;
  var cartState = props.cartState,
    propsToFetch = props.propsToFetch,
    actionsBeforePlace = props.actionsBeforePlace,
    handleCustomClick = props.handleCustomClick,
    onPlaceOrderClick = props.onPlaceOrderClick,
    UIComponent = props.UIComponent,
    isApp = props.isApp;
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _orderingComponents.useWebsocket)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    options = _useOrder2[0].options;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 2),
    refreshConfigs = _useConfig2[1].refreshConfigs;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    placing = _useState2[0],
    setPlacing = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];

  /**
   * Language context
   */
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  /**
   * Order context
   */
  var _useOrder3 = (0, _orderingComponents.useOrder)(),
    _useOrder4 = _slicedToArray(_useOrder3, 2),
    orderState = _useOrder4[0],
    placeCart = _useOrder4[1].placeCart;
  /**
   * Session content
   */
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  /**
   * Toast state
   */
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  /**
   * Configs state
   */
  var _useConfig3 = (0, _orderingComponents.useConfig)(),
    _useConfig4 = _slicedToArray(_useConfig3, 1),
    configs = _useConfig4[0].configs;
  /**
   * Delivery Instructions options
   */
  var _useState5 = (0, _react.useState)({
      loading: false,
      result: [{
        id: null,
        enabled: true,
        name: t('EITHER_WAY', 'Either way')
      }],
      error: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    instructionsOptions = _useState6[0],
    setInstructionsOptions = _useState6[1];
  /**
   * Delivery instructions selected
   */
  var _useState7 = (0, _react.useState)(undefined),
    _useState8 = _slicedToArray(_useState7, 2),
    deliveryOptionSelected = _useState8[0],
    setDeliveryOptionSelected = _useState8[1];
  /**
  * Comment state
  */
  var _useState9 = (0, _react.useState)({
      loading: false,
      result: null,
      error: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    commentState = _useState10[0],
    setCommentState = _useState10[1];
  /**
   * Object to save an object with business information
   */
  var _useState11 = (0, _react.useState)({
      business: null,
      loading: true,
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    businessDetails = _useState12[0],
    setBusinessDetails = _useState12[1];
  /**
   * This must be contains an object with info about paymente selected
   */
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    paymethodSelected = _useState14[0],
    setPaymethodSelected = _useState14[1];
  /**
   * Loyalty plans state
   */
  var _useState15 = (0, _react.useState)({
      loading: true,
      error: null,
      result: []
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    loyaltyPlansState = _useState16[0],
    setLoyaltyPlansState = _useState16[1];
  var businessId = props.uuid ? (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === props.uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {} : props.businessId;
  /**
   * Current cart
   */
  var cart = businessId && typeof businessId === 'number' ? (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(businessId)] : (_orderState$carts2 = orderState.carts) === null || _orderState$carts2 === void 0 ? void 0 : _orderState$carts2['businessId:null'];
  /**
   * Place spot state from chackout
   */
  var _useState17 = (0, _react.useState)((_cartState$cart$spot_ = cartState === null || cartState === void 0 ? void 0 : (_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.spot_number) !== null && _cartState$cart$spot_ !== void 0 ? _cartState$cart$spot_ : cart === null || cart === void 0 ? void 0 : cart.spot_number),
    _useState18 = _slicedToArray(_useState17, 2),
    placeSpotNumber = _useState18[0],
    setPlaceSpotNumber = _useState18[1];
  /**
   * Timeout for update cart comment
   */
  var timeout = null;
  /**
   * Cart comment stagged
   */
  var previousComment;
  /**
   * order types delivery
   */
  var orderTypesDelivery = [1, 7];
  /**
   * Method to get business from API
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _orderState$options, _cartState$cart2, parameters, _yield$ordering$busin, _yield$ordering$busin2, result, error, _result$paymethods, _paymethodSelected$pa, _paymethodSelected, _paymethodSelected$pa2, _paymethodSelected$pa3, _paymethodSelected$pa4;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            refreshConfigs();
            _context.prev = 1;
            parameters = {
              type: (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type
            };
            _context.next = 5;
            return ordering.businesses(businessId).select(propsToFetch).parameters(parameters).get();
          case 5:
            _yield$ordering$busin = _context.sent;
            _yield$ordering$busin2 = _yield$ordering$busin.content;
            result = _yield$ordering$busin2.result;
            error = _yield$ordering$busin2.error;
            if (!error && (_cartState$cart2 = cartState.cart) !== null && _cartState$cart2 !== void 0 && _cartState$cart2.paymethod_id) {
              _paymethodSelected = result === null || result === void 0 ? void 0 : (_result$paymethods = result.paymethods) === null || _result$paymethods === void 0 ? void 0 : _result$paymethods.find(function (paymethod) {
                var _cartState$cart3;
                return (paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_id) === ((_cartState$cart3 = cartState.cart) === null || _cartState$cart3 === void 0 ? void 0 : _cartState$cart3.paymethod_id);
              });
              if (_paymethodSelected !== null && _paymethodSelected !== void 0 && (_paymethodSelected$pa = _paymethodSelected.paymethod) !== null && _paymethodSelected$pa !== void 0 && _paymethodSelected$pa.id) {
                handlePaymethodChange({
                  paymethodId: _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa2 = _paymethodSelected.paymethod) === null || _paymethodSelected$pa2 === void 0 ? void 0 : _paymethodSelected$pa2.id,
                  gateway: _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa3 = _paymethodSelected.paymethod) === null || _paymethodSelected$pa3 === void 0 ? void 0 : _paymethodSelected$pa3.gateway,
                  paymethod: _objectSpread(_objectSpread({}, _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : _paymethodSelected.paymethod), {}, {
                    credentials: _objectSpread({}, _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : _paymethodSelected.data)
                  }),
                  data: cart === null || cart === void 0 ? void 0 : cart.paymethod_data,
                  id: _paymethodSelected === null || _paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa4 = _paymethodSelected.paymethod) === null || _paymethodSelected$pa4 === void 0 ? void 0 : _paymethodSelected$pa4.id
                });
              }
            }
            setBusinessDetails(_objectSpread(_objectSpread({}, businessDetails), {}, {
              loading: false,
              business: result,
              error: error
            }));
            _context.next = 16;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            setBusinessDetails(_objectSpread(_objectSpread({}, businessDetails), {}, {
              loading: false,
              error: _context.t0
            }));
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }));
    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Method to handle click on Place order
   */
  var handlerClickPlaceOrder = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(paymentOptions, payloadProps, confirmPayment) {
      var _paymethodSelected$pa5, _cart$balance, _orderState$options2, _paymethodSelected$pa6, _cartResult$paymethod, _result$result, _result$result$paymet, _cartResult$paymethod2, _cartResult$paymethod3, _cartResult$paymethod4, _cartResult$paymethod5;
      var paymethodData, _paymethodSelected$da, payload, paymethod_data, result, cartResult, _result$result2, _result$result2$payme, _result$result2$payme2, _yield$confirmPayment, confirmApplePayError;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data;
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod && ['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa5 = paymethodSelected.paymethod) === null || _paymethodSelected$pa5 === void 0 ? void 0 : _paymethodSelected$pa5.gateway)) {
              paymethodData = {
                source_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.id
              };
            }
            payload = {
              offer_id: cart.offer_id,
              amount: (_cart$balance = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance !== void 0 ? _cart$balance : cart === null || cart === void 0 ? void 0 : cart.total
            };
            if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.paymethod) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.paymethodId,
                paymethod_data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data
              });
            }
            if (orderTypesDelivery.includes(orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type)) {
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                delivery_zone_id: cart !== null && cart !== void 0 && cart.business_id ? cart.delivery_zone_id : 0
              });
            }
            if (!handleCustomClick) {
              _context2.next = 8;
              break;
            }
            handleCustomClick(payload, paymethodSelected, cart);
            return _context2.abrupt("return");
          case 8:
            payload = _objectSpread(_objectSpread(_objectSpread({}, payload), payloadProps), {}, {
              paymethod_data: _objectSpread(_objectSpread({}, paymethodData), paymentOptions)
            });
            paymethod_data = payload.paymethod_data;
            setPlacing(true);
            _context2.next = 13;
            return onChangeSpot();
          case 13:
            if ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$pa6 = paymethodSelected.paymethod) === null || _paymethodSelected$pa6 === void 0 ? void 0 : _paymethodSelected$pa6.gateway) === 'credomatic') {
              delete payload.paymethod_data;
            }
            _context2.next = 16;
            return placeCart(cart.uuid, payload);
          case 16:
            result = _context2.sent;
            if (!(result !== null && result !== void 0 && result.error)) {
              _context2.next = 20;
              break;
            }
            setErrors(result === null || result === void 0 ? void 0 : result.result);
            return _context2.abrupt("return");
          case 20:
            cartResult = result === null || result === void 0 ? void 0 : result.result;
            if (!((cartResult === null || cartResult === void 0 ? void 0 : (_cartResult$paymethod = cartResult.paymethod_data) === null || _cartResult$paymethod === void 0 ? void 0 : _cartResult$paymethod.status) === 2 && actionsBeforePlace)) {
              _context2.next = 24;
              break;
            }
            _context2.next = 24;
            return actionsBeforePlace(paymethodSelected, result.result);
          case 24:
            if (!(confirmPayment && (result === null || result === void 0 ? void 0 : (_result$result = result.result) === null || _result$result === void 0 ? void 0 : (_result$result$paymet = _result$result.paymethod_data) === null || _result$result$paymet === void 0 ? void 0 : _result$result$paymet.gateway) === 'apple_pay')) {
              _context2.next = 30;
              break;
            }
            _context2.next = 27;
            return confirmPayment(result === null || result === void 0 ? void 0 : (_result$result2 = result.result) === null || _result$result2 === void 0 ? void 0 : (_result$result2$payme = _result$result2.paymethod_data) === null || _result$result2$payme === void 0 ? void 0 : (_result$result2$payme2 = _result$result2$payme.result) === null || _result$result2$payme2 === void 0 ? void 0 : _result$result2$payme2.client_secret);
          case 27:
            _yield$confirmPayment = _context2.sent;
            confirmApplePayError = _yield$confirmPayment.error;
            if (confirmApplePayError) {
              setErrors(confirmApplePayError);
            }
          case 30:
            if ((cartResult === null || cartResult === void 0 ? void 0 : (_cartResult$paymethod2 = cartResult.paymethod_data) === null || _cartResult$paymethod2 === void 0 ? void 0 : _cartResult$paymethod2.gateway) === 'credomatic' && cartResult !== null && cartResult !== void 0 && (_cartResult$paymethod3 = cartResult.paymethod_data) !== null && _cartResult$paymethod3 !== void 0 && (_cartResult$paymethod4 = _cartResult$paymethod3.result) !== null && _cartResult$paymethod4 !== void 0 && _cartResult$paymethod4.hash && (cartResult === null || cartResult === void 0 ? void 0 : (_cartResult$paymethod5 = cartResult.paymethod_data) === null || _cartResult$paymethod5 === void 0 ? void 0 : _cartResult$paymethod5.status) === 2) {
              handleConfirmCredomaticPage(cartResult, paymethodSelected);
            }
            setPlacing(false);
            onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult);
          case 33:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handlerClickPlaceOrder(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  var handlePaymethodChange = function handlePaymethodChange(paymethod) {
    setPaymethodSelected(paymethod);
  };
  var onRemoveSpotNumber = function onRemoveSpotNumber(businessSlug) {
    var _JSON$parse;
    var spotNumberFromStorage = window.localStorage.getItem('table_number');
    if (!spotNumberFromStorage) return;
    var slug = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.slug;
    if (businessSlug === slug) {
      window.localStorage.removeItem('table_number');
    }
  };

  /**
   * change place spot from checkout
   */
  var handleChangeSpot = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_ref3) {
      var _ref3$isCheckout, isCheckout, bodyToSend, id, endpointToFetch, _yield$endpointToFetc, _yield$endpointToFetc2, error, result, _cart$business;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref3$isCheckout = _ref3.isCheckout, isCheckout = _ref3$isCheckout === void 0 ? true : _ref3$isCheckout, bodyToSend = _ref3.bodyToSend;
            _context3.prev = 1;
            id = isCheckout ? cart === null || cart === void 0 ? void 0 : cart.uuid : cart === null || cart === void 0 ? void 0 : cart.id;
            endpointToFetch = isCheckout ? ordering.setAccessToken(token).carts(id).set(bodyToSend) : ordering.setAccessToken(token).orders(id).save(bodyToSend);
            _context3.next = 6;
            return endpointToFetch;
          case 6:
            _yield$endpointToFetc = _context3.sent;
            _yield$endpointToFetc2 = _yield$endpointToFetc.content;
            error = _yield$endpointToFetc2.error;
            result = _yield$endpointToFetc2.result;
            if (!error && !isApp) {
              onRemoveSpotNumber && onRemoveSpotNumber(cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug);
            }
            showToast(error ? _orderingComponents.ToastType.Error : _orderingComponents.ToastType.Success, error ? t('ERROR', result[0]) : t('SPOT_CHANGE_SUCCESS_CONTENT', 'Changes applied correctly'));
            _context3.next = 17;
            break;
          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
          case 17:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 14]]);
    }));
    return function handleChangeSpot(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var onChangeSpot = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _cartState$cart4;
      var bodyToSend;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (options.type === 3 && !(cartState !== null && cartState !== void 0 && (_cartState$cart4 = cartState.cart) !== null && _cartState$cart4 !== void 0 && _cartState$cart4.spot_number) && !(cart !== null && cart !== void 0 && cart.spot_number)) {
              bodyToSend = {};
              placeSpotNumber && (bodyToSend.spot_number = placeSpotNumber);
              if (Object.keys(bodyToSend).length) {
                handleChangeSpot({
                  bodyToSend: bodyToSend
                });
              }
            }
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onChangeSpot() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * change comment for cart
   */
  var handleChangeComment = function handleChangeComment(value) {
    try {
      if (previousComment !== value) {
        clearTimeout(timeout);
        timeout = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
          var uuid, response, _yield$response$json, result, error;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                  loading: true
                }));
                uuid = cart === null || cart === void 0 ? void 0 : cart.uuid;
                _context5.next = 4;
                return fetch("".concat(ordering.root, "/carts/").concat(uuid), {
                  'Content-Type': 'application/json',
                  method: 'PUT',
                  body: JSON.stringify({
                    comment: value
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer ".concat(token),
                    'X-App-X': ordering.appId,
                    'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
                  }
                });
              case 4:
                response = _context5.sent;
                _context5.next = 7;
                return response.json();
              case 7:
                _yield$response$json = _context5.sent;
                result = _yield$response$json.result;
                error = _yield$response$json.error;
                if (!error) {
                  _context5.next = 14;
                  break;
                }
                setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                  loading: false,
                  error: true,
                  result: result
                }));
                showToast(_orderingComponents.ToastType.Error, result);
                return _context5.abrupt("return");
              case 14:
                setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                  loading: false,
                  error: null,
                  result: result
                }));
              case 15:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        })), 750);
      }
      previousComment = value;
    } catch (err) {
      setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
        loading: false,
        error: true,
        result: err.message
      }));
      showToast(_orderingComponents.ToastType.Error, err.message);
    }
  };
  var getDeliveryOptions = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return fetch("".concat(ordering.root, "/delivery_options"), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 3:
            response = _context6.sent;
            _context6.next = 6;
            return response.json();
          case 6:
            _yield$response$json2 = _context6.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            if (error) {
              _context6.next = 12;
              break;
            }
            setInstructionsOptions({
              loading: false,
              result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
            });
            return _context6.abrupt("return");
          case 12:
            setInstructionsOptions({
              loading: false,
              error: true,
              result: result
            });
            showToast(_orderingComponents.ToastType.Error, result);
            _context6.next = 20;
            break;
          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](0);
            setInstructionsOptions({
              loading: false,
              error: true,
              result: _context6.t0.message
            });
            showToast(_orderingComponents.ToastType.Error, _context6.t0.message);
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 16]]);
    }));
    return function getDeliveryOptions() {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(value) {
      var response, _yield$response$json3, result, error;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return fetch("".concat(ordering.root, "/carts/").concat(cart === null || cart === void 0 ? void 0 : cart.uuid), {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              },
              body: JSON.stringify({
                delivery_option_id: value
              })
            });
          case 3:
            response = _context7.sent;
            _context7.next = 6;
            return response.json();
          case 6:
            _yield$response$json3 = _context7.sent;
            result = _yield$response$json3.result;
            error = _yield$response$json3.error;
            setDeliveryOptionSelected(result === null || result === void 0 ? void 0 : result.delivery_option_id);
            if (error) {
              showToast(_orderingComponents.ToastType.Error, result);
            }
            _context7.next = 16;
            break;
          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            showToast(_orderingComponents.ToastType.Error, _context7.t0.message);
          case 16:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 13]]);
    }));
    return function handleChangeDeliveryOption(_x6) {
      return _ref8.apply(this, arguments);
    };
  }();
  var handleConfirmCredomaticPage = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(cart, paymethodSelected) {
      var _configs$credomatic_i, _configs$credomatic_i2, _configs$credomatic_i3;
      var isSandbox, keyId, _cart$paymethod_data, _cart$paymethod_data$, _cart$paymethod_data2, _cart$paymethod_data3, _paymethodSelected$da2, _paymethodSelected$da3, _paymethodSelected$da4, _Object$keys, cartUuid, data, form;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            isSandbox = (configs === null || configs === void 0 ? void 0 : (_configs$credomatic_i = configs.credomatic_integration_sandbox) === null || _configs$credomatic_i === void 0 ? void 0 : _configs$credomatic_i.value) === '1';
            keyId = isSandbox ? configs === null || configs === void 0 ? void 0 : (_configs$credomatic_i2 = configs.credomatic_integration_public_sandbox_key) === null || _configs$credomatic_i2 === void 0 ? void 0 : _configs$credomatic_i2.value : configs === null || configs === void 0 ? void 0 : (_configs$credomatic_i3 = configs.credomatic_integration_public_production_key) === null || _configs$credomatic_i3 === void 0 ? void 0 : _configs$credomatic_i3.value;
            try {
              cartUuid = cart === null || cart === void 0 ? void 0 : cart.uuid;
              data = {
                type: 'auth',
                key_id: keyId,
                hash: cart === null || cart === void 0 ? void 0 : (_cart$paymethod_data = cart.paymethod_data) === null || _cart$paymethod_data === void 0 ? void 0 : (_cart$paymethod_data$ = _cart$paymethod_data.result) === null || _cart$paymethod_data$ === void 0 ? void 0 : _cart$paymethod_data$.hash,
                time: cart === null || cart === void 0 ? void 0 : (_cart$paymethod_data2 = cart.paymethod_data) === null || _cart$paymethod_data2 === void 0 ? void 0 : (_cart$paymethod_data3 = _cart$paymethod_data2.result) === null || _cart$paymethod_data3 === void 0 ? void 0 : _cart$paymethod_data3.time,
                amount: cart === null || cart === void 0 ? void 0 : cart.total,
                orderid: cartUuid,
                ccnumber: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da2 = paymethodSelected.data) === null || _paymethodSelected$da2 === void 0 ? void 0 : _paymethodSelected$da2.ccnumber,
                cvv: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da3 = paymethodSelected.data) === null || _paymethodSelected$da3 === void 0 ? void 0 : _paymethodSelected$da3.cvv,
                ccexp: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da4 = paymethodSelected.data) === null || _paymethodSelected$da4 === void 0 ? void 0 : _paymethodSelected$da4.ccexp,
                redirect: window.location.href.replace(window.location.search, '')
              };
              form = document.createElement('form');
              form.method = 'POST';
              form.action = 'https://credomatic.compassmerchantsolutions.com/api/transact.php';
              form.style.display = 'none';
              // eslint-disable-next-line no-unused-expressions
              (_Object$keys = Object.keys(data)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (key) {
                var formInputName = document.createElement('input');
                formInputName.name = key;
                formInputName.value = data[key];
                form.appendChild(formInputName);
              });
              document.body.appendChild(form);
              form.submit();
            } catch (err) {
              showToast(_orderingComponents.ToastType.Error, err.message);
            }
          case 3:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return function handleConfirmCredomaticPage(_x7, _x8) {
      return _ref9.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (businessId && typeof businessId === 'number') {
      getBusiness();
    }
  }, [businessId, (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type]);

  /**
   * Update carts from sockets
   */
  (0, _react.useEffect)(function () {
    if (cart && cart.status === 1) {
      var _cart$balance2;
      var data = {
        paymethod_id: paymethodSelected.paymethodId,
        paymethod_data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data,
        delivery_zone_id: cart.delivery_zone_id,
        offer_id: cart.offer_id,
        amount: (_cart$balance2 = cart === null || cart === void 0 ? void 0 : cart.balance) !== null && _cart$balance2 !== void 0 ? _cart$balance2 : cart === null || cart === void 0 ? void 0 : cart.total
      };
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart);
    }
  }, [cart]);
  (0, _react.useEffect)(function () {
    if (deliveryOptionSelected === undefined) {
      setDeliveryOptionSelected(cart === null || cart === void 0 ? void 0 : cart.delivery_option_id);
    }
  }, [cart === null || cart === void 0 ? void 0 : cart.delivery_option_id]);
  (0, _react.useEffect)(function () {
    // Promise.any([getDeliveryOptions(), getLoyaltyPlans()])
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cart: cart,
    placing: placing,
    errors: errors,
    loyaltyPlansState: loyaltyPlansState,
    orderOptions: orderState.options,
    paymethodSelected: paymethodSelected,
    businessDetails: businessDetails,
    commentState: commentState,
    placeSpotNumber: placeSpotNumber,
    setPlaceSpotNumber: setPlaceSpotNumber,
    instructionsOptions: instructionsOptions,
    deliveryOptionSelected: deliveryOptionSelected,
    handlePaymethodChange: handlePaymethodChange,
    handlerClickPlaceOrder: handlerClickPlaceOrder,
    handleChangeComment: handleChangeComment,
    handleChangeSpot: handleChangeSpot,
    onChangeSpot: onChangeSpot,
    handleChangeDeliveryOption: handleChangeDeliveryOption,
    handleConfirmCredomaticPage: handleConfirmCredomaticPage
  })));
};
exports.Checkout = Checkout;
Checkout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Custom method to receive props from checkout page
   */
  handleCustomClick: _propTypes.default.func,
  /**
   * onPlaceOrderClick, function to get click event and return business object after default behavior
   */
  onPlaceOrderClick: _propTypes.default.func,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location', 'configs']
};