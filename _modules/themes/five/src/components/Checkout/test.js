"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Component to manage Checkout page behavior without UI component
 */
var Checkout = function Checkout(props) {
  var _Object$values$find$b, _Object$values$find, _orderState$carts, _orderState$options2;
  var cartState = props.cartState,
    propsToFetch = props.propsToFetch,
    actionsBeforePlace = props.actionsBeforePlace,
    handleCustomClick = props.handleCustomClick,
    onPlaceOrderClick = props.onPlaceOrderClick,
    UIComponent = props.UIComponent;
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
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
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    placeCart = _useOrder2[1].placeCart;
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
  var businessId = props.uuid ? (_Object$values$find$b = (_Object$values$find = Object.values(orderState.carts).find(function (_cart) {
    return (_cart === null || _cart === void 0 ? void 0 : _cart.uuid) === props.uuid;
  })) === null || _Object$values$find === void 0 ? void 0 : _Object$values$find.business_id) !== null && _Object$values$find$b !== void 0 ? _Object$values$find$b : {} : props.businessId;
  /**
   * Current cart
   */
  var cart = (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(businessId)];
  /**
   * Timeout for update cart comment
   */
  var timeout = null;
  /**
   * Cart comment stagged
   */
  var previousComment;

  /**
   * Method to get business from API
   */
  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _orderState$options, _cartState$cart, parameters, _yield$ordering$busin, _yield$ordering$busin2, result, error, _result$paymethods, _paymethodSelected$pa, _paymethodSelected, _paymethodSelected$pa2, _paymethodSelected$pa3, _paymethodSelected$pa4;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
              if (!error && (_cartState$cart = cartState.cart) !== null && _cartState$cart !== void 0 && _cartState$cart.paymethod_id) {
                _paymethodSelected = result === null || result === void 0 ? void 0 : (_result$paymethods = result.paymethods) === null || _result$paymethods === void 0 ? void 0 : _result$paymethods.find(function (paymethod) {
                  var _cartState$cart2;
                  return (paymethod === null || paymethod === void 0 ? void 0 : paymethod.paymethod_id) === ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.paymethod_id);
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
      var _paymethodSelected$pa5, _cart$balance, _cartResult$paymethod, _result$result, _result$result$paymet;
      var paymethodData, _paymethodSelected$da, payload, result, cartResult, _result$result2, _result$result2$payme, _result$result2$payme2, _yield$confirmPayment, confirmApplePayError;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
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
              if (orderState.options.type === 1) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  delivery_zone_id: cart.delivery_zone_id
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
              setPlacing(true);
              _context2.next = 12;
              return placeCart(cart === null || cart === void 0 ? void 0 : cart.uuid, payload);
            case 12:
              result = _context2.sent;
              console.log(result, 'resultfront');
              if (!(result !== null && result !== void 0 && result.error)) {
                _context2.next = 17;
                break;
              }
              setErrors(result === null || result === void 0 ? void 0 : result.result);
              return _context2.abrupt("return");
            case 17:
              cartResult = result === null || result === void 0 ? void 0 : result.result;
              if (!((cartResult === null || cartResult === void 0 ? void 0 : (_cartResult$paymethod = cartResult.paymethod_data) === null || _cartResult$paymethod === void 0 ? void 0 : _cartResult$paymethod.status) === 2 && actionsBeforePlace)) {
                _context2.next = 21;
                break;
              }
              _context2.next = 21;
              return actionsBeforePlace(paymethodSelected, result === null || result === void 0 ? void 0 : result.result);
            case 21:
              if (!(confirmPayment && (result === null || result === void 0 ? void 0 : (_result$result = result.result) === null || _result$result === void 0 ? void 0 : (_result$result$paymet = _result$result.paymethod_data) === null || _result$result$paymet === void 0 ? void 0 : _result$result$paymet.gateway) === 'apple_pay')) {
                _context2.next = 27;
                break;
              }
              _context2.next = 24;
              return confirmPayment(result === null || result === void 0 ? void 0 : (_result$result2 = result.result) === null || _result$result2 === void 0 ? void 0 : (_result$result2$payme = _result$result2.paymethod_data) === null || _result$result2$payme === void 0 ? void 0 : (_result$result2$payme2 = _result$result2$payme.result) === null || _result$result2$payme2 === void 0 ? void 0 : _result$result2$payme2.client_secret);
            case 24:
              _yield$confirmPayment = _context2.sent;
              confirmApplePayError = _yield$confirmPayment.error;
              if (confirmApplePayError) {
                setErrors(confirmApplePayError);
              }
            case 27:
              setPlacing(false);
              onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult);
            case 29:
            case "end":
              return _context2.stop();
          }
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

  /**
   * change comment for cart
   */
  var handleChangeComment = function handleChangeComment(value) {
    try {
      if (previousComment !== value) {
        clearTimeout(timeout);
        timeout = setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          var uuid, response, _yield$response$json, result, error;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                    loading: true
                  }));
                  uuid = cart === null || cart === void 0 ? void 0 : cart.uuid;
                  _context3.next = 4;
                  return fetch("".concat(ordering.root, "/carts/").concat(uuid), {
                    'Content-Type': 'application/json',
                    method: 'PUT',
                    body: JSON.stringify({
                      comment: value
                    }),
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: "Bearer ".concat(token),
                      'X-App-X': ordering.appId
                    }
                  });
                case 4:
                  response = _context3.sent;
                  _context3.next = 7;
                  return response.json();
                case 7:
                  _yield$response$json = _context3.sent;
                  result = _yield$response$json.result;
                  error = _yield$response$json.error;
                  if (!error) {
                    _context3.next = 14;
                    break;
                  }
                  setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                    loading: false,
                    error: true,
                    result: result
                  }));
                  showToast(_orderingComponents.ToastType.Error, result);
                  return _context3.abrupt("return");
                case 14:
                  setCommentState(_objectSpread(_objectSpread({}, commentState), {}, {
                    loading: false,
                    error: null,
                    result: result
                  }));
                case 15:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var response, _yield$response$json2, result, error;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return fetch("".concat(ordering.root, "/delivery_options"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "bearer ".concat(token),
                  'X-App-X': ordering.appId
                }
              });
            case 3:
              response = _context4.sent;
              _context4.next = 6;
              return response.json();
            case 6:
              _yield$response$json2 = _context4.sent;
              result = _yield$response$json2.result;
              error = _yield$response$json2.error;
              if (error) {
                _context4.next = 12;
                break;
              }
              setInstructionsOptions({
                loading: false,
                result: [].concat(_toConsumableArray(instructionsOptions.result), _toConsumableArray(result))
              });
              return _context4.abrupt("return");
            case 12:
              setInstructionsOptions({
                loading: false,
                error: true,
                result: result
              });
              showToast(_orderingComponents.ToastType.Error, result);
              _context4.next = 20;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t0 = _context4["catch"](0);
              setInstructionsOptions({
                loading: false,
                error: true,
                result: _context4.t0.message
              });
              showToast(_orderingComponents.ToastType.Error, _context4.t0.message);
            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 16]]);
    }));
    return function getDeliveryOptions() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangeDeliveryOption = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(value) {
      var response, _yield$response$json3, result, error;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return fetch("".concat(ordering.root, "/carts/").concat(cart === null || cart === void 0 ? void 0 : cart.uuid), {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "bearer ".concat(token),
                  'X-App-X': ordering.appId
                },
                body: JSON.stringify({
                  delivery_option_id: value
                })
              });
            case 3:
              response = _context5.sent;
              _context5.next = 6;
              return response.json();
            case 6:
              _yield$response$json3 = _context5.sent;
              result = _yield$response$json3.result;
              error = _yield$response$json3.error;
              setDeliveryOptionSelected(result === null || result === void 0 ? void 0 : result.delivery_option_id);
              if (error) {
                showToast(_orderingComponents.ToastType.Error, result);
              }
              _context5.next = 16;
              break;
            case 13:
              _context5.prev = 13;
              _context5.t0 = _context5["catch"](0);
              showToast(_orderingComponents.ToastType.Error, _context5.t0.message);
            case 16:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 13]]);
    }));
    return function handleChangeDeliveryOption(_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (businessId && typeof businessId === 'number') {
      getBusiness();
    }
  }, [businessId, (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type]);

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
    getDeliveryOptions();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cart: cart,
    placing: placing,
    errors: errors,
    orderOptions: orderState.options,
    paymethodSelected: paymethodSelected,
    businessDetails: businessDetails,
    commentState: commentState,
    instructionsOptions: instructionsOptions,
    deliveryOptionSelected: deliveryOptionSelected,
    handlePaymethodChange: handlePaymethodChange,
    handlerClickPlaceOrder: handlerClickPlaceOrder,
    handleChangeComment: handleChangeComment,
    handleChangeDeliveryOption: handleChangeDeliveryOption
  })));
};
exports.Checkout = Checkout;
Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location', 'configs']
};