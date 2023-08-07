"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _RiUser2Fill = _interopRequireDefault(require("@meronex/icons/ri/RiUser2Fill"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
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
var _styles = require("./styles");
var _styledComponents = require("styled-components");
var _TaxInformation = require("../TaxInformation");
var _utils = require("../../../../../utils");
var _OrderHistory = require("./OrderHistory");
var _ReviewProfessional = require("../ReviewProfessional");
var _OrderActionsSection = require("./OrderActionsSection");
var _OrderHeaderInfoSection = require("./OrderHeaderInfoSection");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderDetailsUI = function OrderDetailsUI(props) {
  var _configs$google_maps_, _configs$powered_by_o, _theme$confirmation, _theme$confirmation2, _theme$confirmation3, _theme$confirmation4, _theme$confirmation5, _theme$confirmation6, _theme$confirmation7, _theme$confirmation8, _theme$confirmation9, _theme$confirmation10, _theme$confirmation11, _theme$confirmation12, _theme$confirmation13, _theme$confirmation14, _theme$confirmation15, _theme$confirmation16, _theme$confirmation17, _theme$confirmation18, _order$driver, _order$driver2, _theme$images, _order$business2, _order$business3, _theme$images2, _order$customer, _order$customer2, _theme$images3, _order$driver3, _order$driver4, _theme$defaultLanguag, _configs$guest_uuid_a, _order$business4, _order$business5, _orderTypes$find, _configs$general_hour, _order$reporting_data, _configs$general_hour2, _progressBarObjt, _progressBarObjt2, _theme$defaultLanguag2, _order$business6, _order$business7, _order$business8, _order$business9, _order$business10, _order$place, _order$place2, _progressBarObjt3, _progressBarObjt4, _order$business12, _order$customer3, _order$customer4, _order$customer5, _order$customer6, _order$customer7, _order$customer8, _order$customer9, _order$customer10, _theme$defaultLanguag3, _order$driver5, _order$driver6, _order$driver7, _order$driver8, _order$driver9, _order$driver10, _order$driver11, _order$driver12, _order$driver13, _order$driver14, _configs$google_maps_2, _order$products$, _order$products$2, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _openTaxModal$data, _openTaxModal$data2, _openTaxModal$data3, _openTaxModal$data4, _openTaxModal$data$fi, _openTaxModal$data5, _openTaxModal$data6;
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
    handleRemoveCart = props.handleRemoveCart;
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
    _useState10 = _slicedToArray(_useState9, 2),
    isProReviewed = _useState10[0],
    setIsProReviewed = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isGiftCardSent = _useState12[0],
    setIsGiftCardSent = _useState12[1];
  var _useState13 = (0, _react.useState)({
      business: false,
      driver: false
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    unreadAlert = _useState14[0],
    setUnreadAlert = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isReviewOpen = _useState16[0],
    setIsReviewOpen = _useState16[1];
  var _useState17 = (0, _react.useState)({
      order: false,
      product: false,
      driver: false,
      professional: false
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    reviewStatus = _useState18[0],
    setReviewStatus = _useState18[1];
  var _useState19 = (0, _react.useState)({
      open: false,
      tax: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    openTaxModal = _useState20[0],
    setOpenTaxModal = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isService = _useState22[0],
    setIsService = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isOrderHistory = _useState24[0],
    setIsOrderHistory = _useState24[1];
  var _useState25 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    confirm = _useState26[0],
    setConfirm = _useState26[1];
  var _useState27 = (0, _react.useState)(true),
    _useState28 = _slicedToArray(_useState27, 2),
    isShowBusinessLogo = _useState28[0],
    setIsShowBusinessLogo = _useState28[1];
  var _props$order = props.order,
    order = _props$order.order,
    loading = _props$order.loading,
    businessData = _props$order.businessData,
    error = _props$order.error;
  var yourSpotString = (order === null || order === void 0 ? void 0 : order.delivery_type) === 3 ? t('TABLE_NUMBER', 'Table number') : t('SPOT_NUMBER', 'Spot number');
  var acceptedStatus = [1, 2, 5, 6, 10, 11, 12];
  var completedStatus = [1, 2, 5, 6, 10, 11, 12, 15, 16, 17];
  var placeSpotTypes = [3, 4, 5];
  var activeStatus = [0, 3, 4, 7, 8, 9, 13, 14, 18, 19, 20, 21, 22, 23];
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var enabledPoweredByOrdering = configs === null || configs === void 0 || (_configs$powered_by_o = configs.powered_by_ordering_module) === null || _configs$powered_by_o === void 0 ? void 0 : _configs$powered_by_o.value;
  var hideOrderActions = (order === null || order === void 0 ? void 0 : order.delivery_type) === 1;
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
  var hideDriverName = theme === null || theme === void 0 || (_theme$confirmation10 = theme.confirmation) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.components) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.driver) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.components) === null || _theme$confirmation10 === void 0 || (_theme$confirmation10 = _theme$confirmation10.name) === null || _theme$confirmation10 === void 0 ? void 0 : _theme$confirmation10.hidden;
  var hideDriverPhone = theme === null || theme === void 0 || (_theme$confirmation11 = theme.confirmation) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.components) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.driver) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.components) === null || _theme$confirmation11 === void 0 || (_theme$confirmation11 = _theme$confirmation11.phone) === null || _theme$confirmation11 === void 0 ? void 0 : _theme$confirmation11.hidden;
  var hideDriverMessages = theme === null || theme === void 0 || (_theme$confirmation12 = theme.confirmation) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.components) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.driver) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.components) === null || _theme$confirmation12 === void 0 || (_theme$confirmation12 = _theme$confirmation12.messages) === null || _theme$confirmation12 === void 0 ? void 0 : _theme$confirmation12.hidden;
  var hideDriverEmail = theme === null || theme === void 0 || (_theme$confirmation13 = theme.confirmation) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.components) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.driver) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.components) === null || _theme$confirmation13 === void 0 || (_theme$confirmation13 = _theme$confirmation13.email) === null || _theme$confirmation13 === void 0 ? void 0 : _theme$confirmation13.hidden;
  var hideDriverPhoto = theme === null || theme === void 0 || (_theme$confirmation14 = theme.confirmation) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.components) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.driver) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.components) === null || _theme$confirmation14 === void 0 || (_theme$confirmation14 = _theme$confirmation14.photo) === null || _theme$confirmation14 === void 0 ? void 0 : _theme$confirmation14.hidden;
  var hideCustomerPhone = theme === null || theme === void 0 || (_theme$confirmation15 = theme.confirmation) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.components) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.customer) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.components) === null || _theme$confirmation15 === void 0 || (_theme$confirmation15 = _theme$confirmation15.phone) === null || _theme$confirmation15 === void 0 ? void 0 : _theme$confirmation15.hidden;
  var hideCustomerAddress = theme === null || theme === void 0 || (_theme$confirmation16 = theme.confirmation) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.components) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.customer) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.components) === null || _theme$confirmation16 === void 0 || (_theme$confirmation16 = _theme$confirmation16.address) === null || _theme$confirmation16 === void 0 ? void 0 : _theme$confirmation16.hidden;
  var hideCustomerEmail = theme === null || theme === void 0 || (_theme$confirmation17 = theme.confirmation) === null || _theme$confirmation17 === void 0 || (_theme$confirmation17 = _theme$confirmation17.components) === null || _theme$confirmation17 === void 0 || (_theme$confirmation17 = _theme$confirmation17.customer) === null || _theme$confirmation17 === void 0 || (_theme$confirmation17 = _theme$confirmation17.components) === null || _theme$confirmation17 === void 0 || (_theme$confirmation17 = _theme$confirmation17.email) === null || _theme$confirmation17 === void 0 ? void 0 : _theme$confirmation17.hidden;
  var hideCustomerPhoto = theme === null || theme === void 0 || (_theme$confirmation18 = theme.confirmation) === null || _theme$confirmation18 === void 0 || (_theme$confirmation18 = _theme$confirmation18.components) === null || _theme$confirmation18 === void 0 || (_theme$confirmation18 = _theme$confirmation18.customer) === null || _theme$confirmation18 === void 0 || (_theme$confirmation18 = _theme$confirmation18.components) === null || _theme$confirmation18 === void 0 || (_theme$confirmation18 = _theme$confirmation18.photo) === null || _theme$confirmation18 === void 0 ? void 0 : _theme$confirmation18.hidden;
  var validTrackingStatus = [9, 19, 23];
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
        image.src = src;
        image.complete ? resolve(true) : resolve(false);
      } catch (err) {
        resolve(false);
      }
    });
  };
  var businessLogoUrlValidation = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
    icon: (order === null || order === void 0 || (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.photo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.driverPhoto)
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
    });else if (!isProductReviewed) setReviewStatus({
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
    if (!isProductReviewed) setReviewStatus({
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
          var _handleOnAccept = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
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
        return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
          key: product.id,
          product: product,
          showArrowIcon: true
        });
      }));
    }), order === null || order === void 0 ? void 0 : order.products.filter(function (product) {
      return !(product !== null && product !== void 0 && product.calendar_event);
    }).map(function (product) {
      return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
        key: product.id,
        product: product,
        showArrowIcon: true
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
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !loading && order && Object.keys(order).length > 0 && !(openMessages.driver || openMessages.business) && /*#__PURE__*/_react.default.createElement(_styles.WrapperContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderIdSec, null, isService ? t('APPOINTMENT', 'Appointment') : t('ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ORDER) || 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), enabledPoweredByOrdering && /*#__PURE__*/_react.default.createElement(_styles.PoweredByOrdering, null, t('POWERED_BY', 'Powered by'), /*#__PURE__*/_react.default.createElement("a", {
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
  })))), (order === null || order === void 0 ? void 0 : order.status) !== 0 && (order === null || order === void 0 ? void 0 : order.integration_id) && /*#__PURE__*/_react.default.createElement("h1", null, t('TICKET', 'Ticket'), ": ", order === null || order === void 0 ? void 0 : order.integration_id), !hideDeliveryType && /*#__PURE__*/_react.default.createElement("p", {
    className: "types"
  }, isService ? t('SERVICE_AT_HOME', 'Service at home') : orderTypes === null || orderTypes === void 0 || (_orderTypes$find = orderTypes.find(function (type) {
    return (order === null || order === void 0 ? void 0 : order.delivery_type) === (type === null || type === void 0 ? void 0 : type.value);
  })) === null || _orderTypes$find === void 0 ? void 0 : _orderTypes$find.text), !hideDeliveryDate && /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, activeStatus.includes(order === null || order === void 0 ? void 0 : order.status) ? /*#__PURE__*/_react.default.createElement(_OrderEta.OrderEta, {
    order: order,
    outputFormat: "YYYY-MM-DD ".concat(configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value)
  }) : parseDate(order === null || order === void 0 || (_order$reporting_data = order.reporting_data) === null || _order$reporting_data === void 0 ? void 0 : _order$reporting_data.at["status:".concat(order.status)], {
    outputFormat: "YYYY-MM-DD ".concat(configs === null || configs === void 0 || (_configs$general_hour2 = configs.general_hour_format) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.value)
  })), (acceptedStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status, 10)) || !isOriginalLayout) && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles.ReOrder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
  }, reorderState !== null && reorderState !== void 0 && reorderState.loading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder')))), !hideDeliveryProgress && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.StatusBar, {
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
  }, t('REVIEW_ORDER', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.REVIEW_ORDER) || 'Review your Order'))))))), !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles.OrderBusiness, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessExternalWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, {
    w: "calc(100% - 20px)",
    borderTop: !hideDeliveryType && placeSpotTypes.includes(order === null || order === void 0 ? void 0 : order.delivery_type)
  }, isShowBusinessLogo && /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 || (_order$business6 = order.business) === null || _order$business6 === void 0 ? void 0 : _order$business6.logo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 || (_order$business7 = order.business) === null || _order$business7 === void 0 ? void 0 : _order$business7.name), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "business",
    showPhone: !hideBusinessPhone,
    showMessages: !hideBusinessMessages
  })), !hideBusinessEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business8 = order.business) === null || _order$business8 === void 0 ? void 0 : _order$business8.email), !hideBusinessPhone && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business9 = order.business) === null || _order$business9 === void 0 ? void 0 : _order$business9.cellphone), !hideBusinessAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$business10 = order.business) === null || _order$business10 === void 0 ? void 0 : _order$business10.address), (order === null || order === void 0 || (_order$place = order.place) === null || _order$place === void 0 ? void 0 : _order$place.name) && /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotSection, null, /*#__PURE__*/_react.default.createElement("p", null, yourSpotString, ": ", order === null || order === void 0 || (_order$place2 = order.place) === null || _order$place2 === void 0 ? void 0 : _order$place2.name)), !hideOrderActions && /*#__PURE__*/_react.default.createElement(_styles.DirectionButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      var _order$business11;
      return window.open("http://maps.google.com/?q=".concat(order === null || order === void 0 || (_order$business11 = order.business) === null || _order$business11 === void 0 ? void 0 : _order$business11.address));
    }
  }, t('GET_DIRECTIONS', 'Get Directions')))), !hideOrderActions && /*#__PURE__*/_react.default.createElement(_styles.BtsOrderStatus, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
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
    src: (0, _utils.getGoogleMapImage)(order === null || order === void 0 || (_order$business12 = order.business) === null || _order$business12 === void 0 ? void 0 : _order$business12.location, googleMapsApiKey, mapConfigs),
    id: "google-maps-image",
    alt: "google-maps-location",
    width: "100%",
    height: "100%",
    loading: "lazy"
  })))), /*#__PURE__*/_react.default.createElement(_styles.OrderCustomer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessWrapper, null, !hideCustomerPhoto && (order === null || order === void 0 || (_order$customer3 = order.customer) === null || _order$customer3 === void 0 ? void 0 : _order$customer3.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: order === null || order === void 0 || (_order$customer4 = order.customer) === null || _order$customer4 === void 0 ? void 0 : _order$customer4.photo
  }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, null, /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer5 = order.customer) === null || _order$customer5 === void 0 ? void 0 : _order$customer5.name, " ", order === null || order === void 0 || (_order$customer6 = order.customer) === null || _order$customer6 === void 0 ? void 0 : _order$customer6.lastname), !hideCustomerEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer7 = order.customer) === null || _order$customer7 === void 0 ? void 0 : _order$customer7.email), !hideCustomerPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 || (_order$customer8 = order.customer) === null || _order$customer8 === void 0 ? void 0 : _order$customer8.cellphone) || (order === null || order === void 0 || (_order$customer9 = order.customer) === null || _order$customer9 === void 0 ? void 0 : _order$customer9.phone)), !hideCustomerAddress && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer10 = order.customer) === null || _order$customer10 === void 0 ? void 0 : _order$customer10.address)))), (order === null || order === void 0 ? void 0 : order.driver) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDriver, null, /*#__PURE__*/_react.default.createElement(_styles.SectionTitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DRIVER', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.DRIVER) || 'Driver')), /*#__PURE__*/_react.default.createElement(_ActionsSection.ActionsSection, _extends({}, ActionsSectionProps, {
    actionType: "driver",
    showPhone: !hideDriverPhone,
    showMessages: !hideDriverMessages
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDriver, null, !hideDriverPhoto && /*#__PURE__*/_react.default.createElement("div", {
    className: "photo"
  }, order !== null && order !== void 0 && (_order$driver5 = order.driver) !== null && _order$driver5 !== void 0 && _order$driver5.photo ? /*#__PURE__*/_react.default.createElement(_styles.PhotoBlock, {
    src: order === null || order === void 0 || (_order$driver6 = order.driver) === null || _order$driver6 === void 0 ? void 0 : _order$driver6.photo
  }) : /*#__PURE__*/_react.default.createElement(_RiUser2Fill.default, null)), /*#__PURE__*/_react.default.createElement("div", null, !hideDriverName && /*#__PURE__*/_react.default.createElement("h2", null, order === null || order === void 0 || (_order$driver7 = order.driver) === null || _order$driver7 === void 0 ? void 0 : _order$driver7.name, " ", order === null || order === void 0 || (_order$driver8 = order.driver) === null || _order$driver8 === void 0 ? void 0 : _order$driver8.lastname), !hideDriverEmail && /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$driver9 = order.driver) === null || _order$driver9 === void 0 ? void 0 : _order$driver9.email), !hideDriverPhone && /*#__PURE__*/_react.default.createElement("p", null, (order === null || order === void 0 || (_order$driver10 = order.driver) === null || _order$driver10 === void 0 ? void 0 : _order$driver10.cellphone) || (order === null || order === void 0 || (_order$driver11 = order.driver) === null || _order$driver11 === void 0 ? void 0 : _order$driver11.phone))))), (order === null || order === void 0 || (_order$driver12 = order.driver) === null || _order$driver12 === void 0 ? void 0 : _order$driver12.location) && validTrackingStatus.includes(parseInt(order === null || order === void 0 ? void 0 : order.status)) && /*#__PURE__*/_react.default.createElement(_styles.Map, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
    location: typeof (order === null || order === void 0 || (_order$driver13 = order.driver) === null || _order$driver13 === void 0 || (_order$driver13 = _order$driver13.location) === null || _order$driver13 === void 0 ? void 0 : _order$driver13.location) === 'string' ? {
      lat: parseFloat(driverLocationString[0]),
      lng: parseFloat(driverLocationString[1])
    } : driverLocation !== null && driverLocation !== void 0 ? driverLocation : order === null || order === void 0 || (_order$driver14 = order.driver) === null || _order$driver14 === void 0 ? void 0 : _order$driver14.location,
    locations: parsedLocations,
    mapControls: googleMapsControls,
    apiKey: configs === null || configs === void 0 || (_configs$google_maps_2 = configs.google_maps_api_key) === null || _configs$google_maps_2 === void 0 ? void 0 : _configs$google_maps_2.value
  }))), ((order === null || order === void 0 ? void 0 : order.delivery_type) === 1 || (order === null || order === void 0 ? void 0 : order.comment)) && !isGiftCardOrder && /*#__PURE__*/_react.default.createElement(_styles.OrderPreferences, null, /*#__PURE__*/_react.default.createElement(_OrderPreferencesSections.OrderPreferencesSection, {
    order: order,
    placeSpotTypes: placeSpotTypes
  }))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderProducts, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, /*#__PURE__*/_react.default.createElement(_OrderHeaderInfoSection.OrderHeaderInfoSection, {
    isService: isService
  }), /*#__PURE__*/_react.default.createElement(_OrderActionsSection.OrderActionsSection, {
    userCustomerId: userCustomerId,
    isService: isService,
    handleGoToPage: handleGoToPage
  })), sortedProductList, /*#__PURE__*/_react.default.createElement(_OrderBillSection.OrderBillSection, {
    order: order,
    setOpenTaxModal: setOpenTaxModal
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
    title: t('DETAILS_OF_ORDER', 'Details of Order_NUMBER_').replace('_NUMBER_', " # ".concat(order === null || order === void 0 ? void 0 : order.id))
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