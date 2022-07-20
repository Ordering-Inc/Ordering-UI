"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styledComponents = require("styled-components");

var _orderingComponents = require("ordering-components");

var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));

var _AiFillCheckCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillCheckCircle"));

var _Buttons = require("../../../../styles/Buttons");

var _Inputs = require("../../../../../../../styles/Inputs");

var _ProductItemAccordion = require("../../../ProductItemAccordion");

var _NotFoundSource = require("../../../NotFoundSource");

var _OrderBillSection = require("../../OrderBillSection");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _EMAIL = 'email';
var _SMS = 'sms';

var OrderDetailsUI = function OrderDetailsUI(props) {
  var _theme$layouts, _theme$layouts$confir, _theme$layouts$confir2, _theme$layouts$confir3, _theme$layouts2, _theme$layouts2$confi, _theme$layouts2$confi2, _theme$layouts2$confi3, _theme$layouts3, _theme$layouts3$confi, _theme$layouts3$confi2, _theme$layouts3$confi3, _theme$layouts4, _theme$layouts4$confi, _theme$layouts4$confi2, _theme$layouts4$confi3, _theme$layouts4$confi4, _theme$layouts4$confi5, _theme$layouts5, _theme$layouts5$confi, _theme$layouts5$confi2, _theme$layouts5$confi3, _theme$layouts5$confi4, _theme$layouts5$confi5, _theme$layouts6, _theme$layouts6$confi, _theme$layouts6$confi2, _theme$layouts6$confi3, _theme$layouts6$confi4, _theme$layouts6$confi5, _theme$layouts7, _theme$layouts7$confi, _theme$layouts7$confi2, _theme$layouts7$confi3, _theme$layouts7$confi4, _theme$layouts7$confi5, _theme$layouts8, _theme$layouts8$confi, _theme$layouts8$confi2, _theme$layouts8$confi3, _theme$layouts8$confi4, _theme$layouts8$confi5, _theme$layouts9, _theme$layouts9$confi, _theme$layouts9$confi2, _theme$layouts9$confi3, _theme$layouts9$confi4, _theme$layouts9$confi5, _theme$layouts10, _theme$layouts10$conf, _theme$layouts10$conf2, _theme$layouts10$conf3, _theme$layouts10$conf4, _theme$layouts10$conf5, _theme$layouts11, _theme$layouts11$conf, _theme$layouts11$conf2, _theme$layouts11$conf3, _theme$layouts11$conf4, _theme$layouts11$conf5, _theme$layouts12, _theme$layouts12$conf, _theme$layouts12$conf2, _theme$layouts12$conf3, _theme$layouts12$conf4, _theme$layouts12$conf5, _theme$layouts13, _theme$layouts13$conf, _theme$layouts13$conf2, _theme$layouts13$conf3, _theme$layouts13$conf4, _theme$layouts13$conf5, _order$driver, _order$driver2, _theme$images, _theme$images$dummies, _order$business, _order$business2, _theme$images2, _theme$images2$dummie, _order$customer, _order$customer2, _theme$images3, _theme$images3$dummie, _theme$defaultLanguag26, _orderTypes$find, _getOrderStatus, _getOrderStatus2, _order$business3, _order$business4, _order$business5, _order$business6, _order$business7, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _theme$defaultLanguag27, _order$driver3, _order$driver4, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _order$driver9, _order$products, _formMethods$errors, _formMethods$errors2, _formMethods$errors2$, _theme$defaultLanguag28, _theme$defaultLanguag29, _theme$defaultLanguag30, _theme$defaultLanguag31;

  var handleOrderRedirect = props.handleOrderRedirect,
      driverLocation = props.driverLocation,
      orderTypes = props.orderTypes;
  var formMethods = (0, _reactHookForm.useForm)();

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  var _useToast = (0, _orderingComponents.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var optToSendReceipt = [{
    key: _EMAIL,
    label: t('EMAIL', 'Email'),
    value: _EMAIL,
    isDefault: true
  }, {
    key: _SMS,
    label: t('SMS', 'SMS'),
    value: _SMS
  }];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      emailReceipt = _useState4[0],
      setEmailReceipt = _useState4[1];

  var _useState5 = (0, _react.useState)(5),
      _useState6 = _slicedToArray(_useState5, 2),
      countReceipts = _useState6[0],
      setCountReceipts = _useState6[1];

  var optionToSendReceipt = optToSendReceipt.find(function (o) {
    return o === null || o === void 0 ? void 0 : o.isDefault;
  });
  var _props$order = props.order,
      order = _props$order.order,
      loading = _props$order.loading,
      error = _props$order.error;
  var showDeliveryType = !(theme !== null && theme !== void 0 && (_theme$layouts = theme.layouts) !== null && _theme$layouts !== void 0 && (_theme$layouts$confir = _theme$layouts.confirmation) !== null && _theme$layouts$confir !== void 0 && (_theme$layouts$confir2 = _theme$layouts$confir.components) !== null && _theme$layouts$confir2 !== void 0 && (_theme$layouts$confir3 = _theme$layouts$confir2.delivery_type) !== null && _theme$layouts$confir3 !== void 0 && _theme$layouts$confir3.hidden);
  var showDeliveryDate = !(theme !== null && theme !== void 0 && (_theme$layouts2 = theme.layouts) !== null && _theme$layouts2 !== void 0 && (_theme$layouts2$confi = _theme$layouts2.confirmation) !== null && _theme$layouts2$confi !== void 0 && (_theme$layouts2$confi2 = _theme$layouts2$confi.components) !== null && _theme$layouts2$confi2 !== void 0 && (_theme$layouts2$confi3 = _theme$layouts2$confi2.delivery_date) !== null && _theme$layouts2$confi3 !== void 0 && _theme$layouts2$confi3.hidden);
  var showDeliveryProgress = !(theme !== null && theme !== void 0 && (_theme$layouts3 = theme.layouts) !== null && _theme$layouts3 !== void 0 && (_theme$layouts3$confi = _theme$layouts3.confirmation) !== null && _theme$layouts3$confi !== void 0 && (_theme$layouts3$confi2 = _theme$layouts3$confi.components) !== null && _theme$layouts3$confi2 !== void 0 && (_theme$layouts3$confi3 = _theme$layouts3$confi2.delivery_progress) !== null && _theme$layouts3$confi3 !== void 0 && _theme$layouts3$confi3.hidden);
  var showBusinessPhone = !(theme !== null && theme !== void 0 && (_theme$layouts4 = theme.layouts) !== null && _theme$layouts4 !== void 0 && (_theme$layouts4$confi = _theme$layouts4.confirmation) !== null && _theme$layouts4$confi !== void 0 && (_theme$layouts4$confi2 = _theme$layouts4$confi.components) !== null && _theme$layouts4$confi2 !== void 0 && (_theme$layouts4$confi3 = _theme$layouts4$confi2.business_information) !== null && _theme$layouts4$confi3 !== void 0 && (_theme$layouts4$confi4 = _theme$layouts4$confi3.components) !== null && _theme$layouts4$confi4 !== void 0 && (_theme$layouts4$confi5 = _theme$layouts4$confi4.phone) !== null && _theme$layouts4$confi5 !== void 0 && _theme$layouts4$confi5.hidden);
  var showBusinessEmail = !(theme !== null && theme !== void 0 && (_theme$layouts5 = theme.layouts) !== null && _theme$layouts5 !== void 0 && (_theme$layouts5$confi = _theme$layouts5.confirmation) !== null && _theme$layouts5$confi !== void 0 && (_theme$layouts5$confi2 = _theme$layouts5$confi.components) !== null && _theme$layouts5$confi2 !== void 0 && (_theme$layouts5$confi3 = _theme$layouts5$confi2.business_information) !== null && _theme$layouts5$confi3 !== void 0 && (_theme$layouts5$confi4 = _theme$layouts5$confi3.components) !== null && _theme$layouts5$confi4 !== void 0 && (_theme$layouts5$confi5 = _theme$layouts5$confi4.email) !== null && _theme$layouts5$confi5 !== void 0 && _theme$layouts5$confi5.hidden);
  var showBusinessAddress = !(theme !== null && theme !== void 0 && (_theme$layouts6 = theme.layouts) !== null && _theme$layouts6 !== void 0 && (_theme$layouts6$confi = _theme$layouts6.confirmation) !== null && _theme$layouts6$confi !== void 0 && (_theme$layouts6$confi2 = _theme$layouts6$confi.components) !== null && _theme$layouts6$confi2 !== void 0 && (_theme$layouts6$confi3 = _theme$layouts6$confi2.business_information) !== null && _theme$layouts6$confi3 !== void 0 && (_theme$layouts6$confi4 = _theme$layouts6$confi3.components) !== null && _theme$layouts6$confi4 !== void 0 && (_theme$layouts6$confi5 = _theme$layouts6$confi4.address) !== null && _theme$layouts6$confi5 !== void 0 && _theme$layouts6$confi5.hidden);
  var showDriverName = !(theme !== null && theme !== void 0 && (_theme$layouts7 = theme.layouts) !== null && _theme$layouts7 !== void 0 && (_theme$layouts7$confi = _theme$layouts7.confirmation) !== null && _theme$layouts7$confi !== void 0 && (_theme$layouts7$confi2 = _theme$layouts7$confi.components) !== null && _theme$layouts7$confi2 !== void 0 && (_theme$layouts7$confi3 = _theme$layouts7$confi2.driver_information) !== null && _theme$layouts7$confi3 !== void 0 && (_theme$layouts7$confi4 = _theme$layouts7$confi3.components) !== null && _theme$layouts7$confi4 !== void 0 && (_theme$layouts7$confi5 = _theme$layouts7$confi4.name) !== null && _theme$layouts7$confi5 !== void 0 && _theme$layouts7$confi5.hidden);
  var showDriverPhone = !(theme !== null && theme !== void 0 && (_theme$layouts8 = theme.layouts) !== null && _theme$layouts8 !== void 0 && (_theme$layouts8$confi = _theme$layouts8.confirmation) !== null && _theme$layouts8$confi !== void 0 && (_theme$layouts8$confi2 = _theme$layouts8$confi.components) !== null && _theme$layouts8$confi2 !== void 0 && (_theme$layouts8$confi3 = _theme$layouts8$confi2.driver_information) !== null && _theme$layouts8$confi3 !== void 0 && (_theme$layouts8$confi4 = _theme$layouts8$confi3.components) !== null && _theme$layouts8$confi4 !== void 0 && (_theme$layouts8$confi5 = _theme$layouts8$confi4.phone) !== null && _theme$layouts8$confi5 !== void 0 && _theme$layouts8$confi5.hidden);
  var showDriverEmail = !(theme !== null && theme !== void 0 && (_theme$layouts9 = theme.layouts) !== null && _theme$layouts9 !== void 0 && (_theme$layouts9$confi = _theme$layouts9.confirmation) !== null && _theme$layouts9$confi !== void 0 && (_theme$layouts9$confi2 = _theme$layouts9$confi.components) !== null && _theme$layouts9$confi2 !== void 0 && (_theme$layouts9$confi3 = _theme$layouts9$confi2.driver_information) !== null && _theme$layouts9$confi3 !== void 0 && (_theme$layouts9$confi4 = _theme$layouts9$confi3.components) !== null && _theme$layouts9$confi4 !== void 0 && (_theme$layouts9$confi5 = _theme$layouts9$confi4.email) !== null && _theme$layouts9$confi5 !== void 0 && _theme$layouts9$confi5.hidden);
  var showDriverPhoto = !(theme !== null && theme !== void 0 && (_theme$layouts10 = theme.layouts) !== null && _theme$layouts10 !== void 0 && (_theme$layouts10$conf = _theme$layouts10.confirmation) !== null && _theme$layouts10$conf !== void 0 && (_theme$layouts10$conf2 = _theme$layouts10$conf.components) !== null && _theme$layouts10$conf2 !== void 0 && (_theme$layouts10$conf3 = _theme$layouts10$conf2.driver_information) !== null && _theme$layouts10$conf3 !== void 0 && (_theme$layouts10$conf4 = _theme$layouts10$conf3.components) !== null && _theme$layouts10$conf4 !== void 0 && (_theme$layouts10$conf5 = _theme$layouts10$conf4.photo) !== null && _theme$layouts10$conf5 !== void 0 && _theme$layouts10$conf5.hidden);
  var showCustomerPhone = !(theme !== null && theme !== void 0 && (_theme$layouts11 = theme.layouts) !== null && _theme$layouts11 !== void 0 && (_theme$layouts11$conf = _theme$layouts11.confirmation) !== null && _theme$layouts11$conf !== void 0 && (_theme$layouts11$conf2 = _theme$layouts11$conf.components) !== null && _theme$layouts11$conf2 !== void 0 && (_theme$layouts11$conf3 = _theme$layouts11$conf2.customer_information) !== null && _theme$layouts11$conf3 !== void 0 && (_theme$layouts11$conf4 = _theme$layouts11$conf3.components) !== null && _theme$layouts11$conf4 !== void 0 && (_theme$layouts11$conf5 = _theme$layouts11$conf4.phone) !== null && _theme$layouts11$conf5 !== void 0 && _theme$layouts11$conf5.hidden);
  var showCustomerAddress = !(theme !== null && theme !== void 0 && (_theme$layouts12 = theme.layouts) !== null && _theme$layouts12 !== void 0 && (_theme$layouts12$conf = _theme$layouts12.confirmation) !== null && _theme$layouts12$conf !== void 0 && (_theme$layouts12$conf2 = _theme$layouts12$conf.components) !== null && _theme$layouts12$conf2 !== void 0 && (_theme$layouts12$conf3 = _theme$layouts12$conf2.customer_information) !== null && _theme$layouts12$conf3 !== void 0 && (_theme$layouts12$conf4 = _theme$layouts12$conf3.components) !== null && _theme$layouts12$conf4 !== void 0 && (_theme$layouts12$conf5 = _theme$layouts12$conf4.address) !== null && _theme$layouts12$conf5 !== void 0 && _theme$layouts12$conf5.hidden);
  var showCustomerEmail = !(theme !== null && theme !== void 0 && (_theme$layouts13 = theme.layouts) !== null && _theme$layouts13 !== void 0 && (_theme$layouts13$conf = _theme$layouts13.confirmation) !== null && _theme$layouts13$conf !== void 0 && (_theme$layouts13$conf2 = _theme$layouts13$conf.components) !== null && _theme$layouts13$conf2 !== void 0 && (_theme$layouts13$conf3 = _theme$layouts13$conf2.customer_information) !== null && _theme$layouts13$conf3 !== void 0 && (_theme$layouts13$conf4 = _theme$layouts13$conf3.components) !== null && _theme$layouts13$conf4 !== void 0 && (_theme$layouts13$conf5 = _theme$layouts13$conf4.email) !== null && _theme$layouts13$conf5 !== void 0 && _theme$layouts13$conf5.hidden);
  var locations = [_objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$driver = order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.driverPhoto)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo)
  }), _objectSpread(_objectSpread({}, order === null || order === void 0 ? void 0 : (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.location), {}, {
    icon: (order === null || order === void 0 ? void 0 : (_order$customer2 = order.customer) === null || _order$customer2 === void 0 ? void 0 : _order$customer2.photo) || ((_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$dummie = _theme$images3.dummies) === null || _theme$images3$dummie === void 0 ? void 0 : _theme$images3$dummie.customerPhoto)
  })];

  var getOrderStatus = function getOrderStatus(s) {
    var _theme$defaultLanguag, _theme$defaultLanguag2, _theme$defaultLanguag3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _theme$defaultLanguag10, _theme$defaultLanguag11, _theme$defaultLanguag12, _theme$defaultLanguag13, _theme$defaultLanguag14, _theme$defaultLanguag15, _theme$defaultLanguag16, _theme$defaultLanguag17, _theme$defaultLanguag18, _theme$defaultLanguag19, _theme$defaultLanguag20, _theme$defaultLanguag21, _theme$defaultLanguag22, _theme$defaultLanguag23, _theme$defaultLanguag24;

    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.PENDING) || 'Pending'),
      slug: 'PENDING',
      percentage: 25
    }, {
      key: 1,
      value: t('COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.COMPLETED) || 'Completed'),
      slug: 'COMPLETED',
      percentage: 100
    }, {
      key: 2,
      value: t('REJECTED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.REJECTED) || 'Rejected'),
      slug: 'REJECTED',
      percentage: 0
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DRIVER_IN_BUSINESS) || 'Driver in business'),
      slug: 'DRIVER_IN_BUSINESS',
      percentage: 60
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.PREPARATION_COMPLETED) || 'Preparation Completed'),
      slug: 'PREPARATION_COMPLETED',
      percentage: 70
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.REJECTED_BY_BUSINESS) || 'Rejected by business'),
      slug: 'REJECTED_BY_BUSINESS',
      percentage: 0
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.REJECTED_BY_DRIVER) || 'Rejected by Driver'),
      slug: 'REJECTED_BY_DRIVER',
      percentage: 0
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.ACCEPTED_BY_BUSINESS) || 'Accepted by business'),
      slug: 'ACCEPTED_BY_BUSINESS',
      percentage: 35
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPTED_BY_DRIVER) || 'Accepted by driver'),
      slug: 'ACCEPTED_BY_DRIVER',
      percentage: 45
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag10 = theme.defaultLanguages) === null || _theme$defaultLanguag10 === void 0 ? void 0 : _theme$defaultLanguag10.PICK_UP_COMPLETED_BY_DRIVER) || 'Pick up completed by driver'),
      slug: 'PICK_UP_COMPLETED_BY_DRIVER',
      percentage: 80
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag11 = theme.defaultLanguages) === null || _theme$defaultLanguag11 === void 0 ? void 0 : _theme$defaultLanguag11.PICK_UP_FAILED_BY_DRIVER) || 'Pick up Failed by driver'),
      slug: 'PICK_UP_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag12 = theme.defaultLanguages) === null || _theme$defaultLanguag12 === void 0 ? void 0 : _theme$defaultLanguag12.DELIVERY_COMPLETED_BY_DRIVER) || 'Delivery completed by driver'),
      slug: 'DELIVERY_COMPLETED_BY_DRIVER',
      percentage: 100
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag13 = theme.defaultLanguages) === null || _theme$defaultLanguag13 === void 0 ? void 0 : _theme$defaultLanguag13.DELIVERY_FAILED_BY_DRIVER) || 'Delivery Failed by driver'),
      slug: 'DELIVERY_FAILED_BY_DRIVER',
      percentage: 0
    }, {
      key: 13,
      value: t('PREORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag14 = theme.defaultLanguages) === null || _theme$defaultLanguag14 === void 0 ? void 0 : _theme$defaultLanguag14.PREORDER) || 'PreOrder'),
      slug: 'PREORDER',
      percentage: 0
    }, {
      key: 14,
      value: t('ORDER_NOT_READY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag15 = theme.defaultLanguages) === null || _theme$defaultLanguag15 === void 0 ? void 0 : _theme$defaultLanguag15.ORDER_NOT_READY) || 'Order not ready'),
      slug: 'ORDER_NOT_READY',
      percentage: 65
    }, {
      key: 15,
      value: t('ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag16 = theme.defaultLanguages) === null || _theme$defaultLanguag16 === void 0 ? void 0 : _theme$defaultLanguag16.ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER) || 'Order picked up completed by customer'),
      slug: 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER',
      percentage: 100
    }, {
      key: 16,
      value: t('ORDER_STATUS_CANCELLED_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag17 = theme.defaultLanguages) === null || _theme$defaultLanguag17 === void 0 ? void 0 : _theme$defaultLanguag17.ORDER_STATUS_CANCELLED_BY_CUSTOMER) || 'Order cancelled by customer'),
      slug: 'ORDER_STATUS_CANCELLED_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 17,
      value: t('ORDER_NOT_PICKEDUP_BY_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag18 = theme.defaultLanguages) === null || _theme$defaultLanguag18 === void 0 ? void 0 : _theme$defaultLanguag18.ORDER_NOT_PICKEDUP_BY_CUSTOMER) || 'Order not picked up by customer'),
      slug: 'ORDER_NOT_PICKEDUP_BY_CUSTOMER',
      percentage: 0
    }, {
      key: 18,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag19 = theme.defaultLanguages) === null || _theme$defaultLanguag19 === void 0 ? void 0 : _theme$defaultLanguag19.ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS) || 'Driver almost arrived to business'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS',
      percentage: 55
    }, {
      key: 19,
      value: t('ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag20 = theme.defaultLanguages) === null || _theme$defaultLanguag20 === void 0 ? void 0 : _theme$defaultLanguag20.ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER) || 'Driver almost arrived to customer'),
      slug: 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER',
      percentage: 90
    }, {
      key: 20,
      value: t('ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag21 = theme.defaultLanguages) === null || _theme$defaultLanguag21 === void 0 ? void 0 : _theme$defaultLanguag21.ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS) || 'Customer almost arrived to business'),
      slug: 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS',
      percentage: 90
    }, {
      key: 21,
      value: t('ORDER_CUSTOMER_ARRIVED_BUSINESS', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag22 = theme.defaultLanguages) === null || _theme$defaultLanguag22 === void 0 ? void 0 : _theme$defaultLanguag22.ORDER_CUSTOMER_ARRIVED_BUSINESS) || 'Customer arrived to business'),
      slug: 'ORDER_CUSTOMER_ARRIVED_BUSINESS',
      percentage: 95
    }, {
      key: 22,
      value: t('ORDER_LOOKING_FOR_DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag23 = theme.defaultLanguages) === null || _theme$defaultLanguag23 === void 0 ? void 0 : _theme$defaultLanguag23.ORDER_LOOKING_FOR_DRIVER) || 'Looking for driver'),
      slug: 'ORDER_LOOKING_FOR_DRIVER',
      percentage: 35
    }, {
      key: 23,
      value: t('ORDER_DRIVER_ON_WAY', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag24 = theme.defaultLanguages) === null || _theme$defaultLanguag24 === void 0 ? void 0 : _theme$defaultLanguag24.ORDER_DRIVER_ON_WAY) || 'Driver on way'),
      slug: 'ORDER_DRIVER_ON_WAY',
      percentage: 45
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };

  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    formMethods.clearErrors(['email']);
    setEmailReceipt(e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var body, response, _yield$response$json, _error, result;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(countReceipts <= 0)) {
                _context.next = 3;
                break;
              }

              showToast(_orderingComponents.ToastType.Error, t('MAXIMUM_RECEIPTS_SEND_EXCEEDED', 'The maximum receipts sent has been exceeded'));
              return _context.abrupt("return");

            case 3:
              setIsLoading(true);
              body = {
                channel: (optionToSendReceipt === null || optionToSendReceipt === void 0 ? void 0 : optionToSendReceipt.value) === _EMAIL ? 1 : 2
              };

              if (order !== null && order !== void 0 && order.on_behalf_of) {
                body.name = order === null || order === void 0 ? void 0 : order.on_behalf_of;
              }

              if ((optionToSendReceipt === null || optionToSendReceipt === void 0 ? void 0 : optionToSendReceipt.value) === _EMAIL) {
                body.email = values.email;
              }

              _context.prev = 7;
              _context.next = 10;
              return fetch("".concat(ordering.root, "/orders/").concat(order.id, "/receipt"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(body)
              });

            case 10:
              response = _context.sent;
              _context.next = 13;
              return response.json();

            case 13:
              _yield$response$json = _context.sent;
              _error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (_error) {
                showToast(_orderingComponents.ToastType.Error, result);
              } else {
                showToast(_orderingComponents.ToastType.Success, t('RECEIPT_SEND_SUCCESSFULLY', 'Receipt send successfully'));
                setCountReceipts(countReceipts - 1);
              }

              setIsLoading(false);
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](7);
              showToast(_orderingComponents.ToastType.Error, _context.t0.message);
              setIsLoading(false);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 20]]);
    }));

    return function onSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var OrderHeaderInfoSection = function OrderHeaderInfoSection() {
    var _theme$defaultLanguag25;

    return /*#__PURE__*/_react.default.createElement(_styles.HeaderInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, t('ORDER_MESSAGE_RECEIVED', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag25 = theme.defaultLanguages) === null || _theme$defaultLanguag25 === void 0 ? void 0 : _theme$defaultLanguag25.ORDER_MESSAGE_RECEIVED) || 'Thank you for your order')), (order === null || order === void 0 ? void 0 : order.on_behalf_of) && /*#__PURE__*/_react.default.createElement("p", {
      className: "behalf",
      style: {
        marginTop: 0
      }
    }, /*#__PURE__*/_react.default.createElement("strong", null, t('ON_BEHALF', 'On behalf'), ":"), " ".concat(order === null || order === void 0 ? void 0 : order.on_behalf_of)));
  };

  (0, _react.useEffect)(function () {
    if (driverLocation) {
      locations[0] = driverLocation;
    }
  }, [driverLocation]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !loading && order && Object.keys(order).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, /*#__PURE__*/_react.default.createElement(OrderHeaderInfoSection, null)), /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag26 = theme.defaultLanguages) === null || _theme$defaultLanguag26 === void 0 ? void 0 : _theme$defaultLanguag26.ORDER) || 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), (order === null || order === void 0 ? void 0 : order.status) !== 0 && (order === null || order === void 0 ? void 0 : order.integration_id) && /*#__PURE__*/_react.default.createElement("h1", null, t('TICKET', 'Ticket'), ": ", order === null || order === void 0 ? void 0 : order.integration_id), showDeliveryType && /*#__PURE__*/_react.default.createElement("p", {
    className: "types"
  }, orderTypes === null || orderTypes === void 0 ? void 0 : (_orderTypes$find = orderTypes.find(function (type) {
    return (order === null || order === void 0 ? void 0 : order.delivery_type) === (type === null || type === void 0 ? void 0 : type.value);
  })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.text), showDeliveryDate && /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), showDeliveryProgress && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
    percentage: (_getOrderStatus = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.percentage
  }), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "order-status"
  }, (_getOrderStatus2 = getOrderStatus(order === null || order === void 0 ? void 0 : order.status)) === null || _getOrderStatus2 === void 0 ? void 0 : _getOrderStatus2.value)))), /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, {
    w: "calc(100% - 20px)"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 ? void 0 : (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.logo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 ? void 0 : (_order$business4 = order.business) === null || _order$business4 === void 0 ? void 0 : _order$business4.name), showBusinessEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business5 = order.business) === null || _order$business5 === void 0 ? void 0 : _order$business5.email), showBusinessPhone && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.cellphone), showBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.address))))), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, null, (order === null || order === void 0 ? void 0 : (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 ? void 0 : (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.name, " ", order === null || order === void 0 ? void 0 : (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lastname), showCustomerEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.email), showCustomerPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.cellphone) || (order === null || order === void 0 ? void 0 : (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.phone)), showCustomerAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.address)))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DRIVER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag27 = theme.defaultLanguages) === null || _theme$defaultLanguag27 === void 0 ? void 0 : _theme$defaultLanguag27.DRIVER) || 'Driver'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, showDriverPhoto && /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$driver3 = order.driver) !== null && _order$driver3 !== void 0 && _order$driver3.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 ? void 0 : (_order$driver4 = order.driver) === null || _order$driver4 === void 0 ? void 0 : _order$driver4.photo
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement("div", null, showDriverName && /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 ? void 0 : (_order$driver5 = order.driver) === null || _order$driver5 === void 0 ? void 0 : _order$driver5.name, " ", order === null || order === void 0 ? void 0 : (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.lastname), showDriverEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 ? void 0 : (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.email), showDriverPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 ? void 0 : (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.cellphone) || (order === null || order === void 0 ? void 0 : (_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.phone)))))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, (order === null || order === void 0 ? void 0 : (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product
    });
  })), /*#__PURE__*/_react.default.createElement(_OrderBillSection.OrderBillSection, {
    order: order
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperActions, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperActionsInputText, null, /*#__PURE__*/_react.default.createElement(_styles.SentReceipt, null, /*#__PURE__*/_react.default.createElement(_AiFillCheckCircle.default, {
    color: theme.colors.primary,
    size: 28
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "txt"
  }, t('SEND_RECEIPT', 'Send receipt'))), /*#__PURE__*/_react.default.createElement("p", null, countReceipts, "/5 ", t('RECIPTS_REMAINING', 'Recipts remaining'))), /*#__PURE__*/_react.default.createElement(_styles.WrapperActionsInput, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "email",
    name: "email",
    "aria-label": "email",
    placeholder: "yourname@mailhost.com",
    ref: formMethods.register({
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    }),
    onChange: handleChangeInputEmail,
    autoComplete: "off",
    isError: (_formMethods$errors = formMethods.errors) === null || _formMethods$errors === void 0 ? void 0 : _formMethods$errors.email
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    disabled: !emailReceipt || isLoading,
    onClick: formMethods.handleSubmit(onSubmit)
  }, t('SEND', 'Send'))), ((_formMethods$errors2 = formMethods.errors) === null || _formMethods$errors2 === void 0 ? void 0 : (_formMethods$errors2$ = _formMethods$errors2.email) === null || _formMethods$errors2$ === void 0 ? void 0 : _formMethods$errors2$.type) === 'pattern' && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'home'
      });
    },
    className: "close",
    style: {
      marginTop: 30
    }
  }, "".concat(t('YOU_ARE_DONE', (_theme$defaultLanguag28 = theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag29 = theme.defaultLanguages) === null || _theme$defaultLanguag29 === void 0 ? void 0 : _theme$defaultLanguag29.ORDER_YOU_ARE_DONE) !== null && _theme$defaultLanguag28 !== void 0 ? _theme$defaultLanguag28 : 'You are done! Click to close'), "!")))), loading && !error && /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlockWrapp, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonBlock, {
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
    content: t('NOT_FOUND_ORDER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag30 = theme.defaultLanguages) === null || _theme$defaultLanguag30 === void 0 ? void 0 : _theme$defaultLanguag30.NOT_FOUND_ORDER) || 'Sorry, we couldn\'t find the requested order.'),
    btnTitle: t('ORDERS_REDIRECT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag31 = theme.defaultLanguages) === null || _theme$defaultLanguag31 === void 0 ? void 0 : _theme$defaultLanguag31.ORDERS_REDIRECT) || 'Go to Orders'),
    onClickButton: handleOrderRedirect
  })));
};

var OrderDetails = function OrderDetails(props) {
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

exports.OrderDetails = OrderDetails;