"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
_dayjs.default.extend(_utc.default);
var BusinessList = function BusinessList(props) {
  var _paginationSettings$p, _configs$advanced_bus, _ref, _orderingTheme$busine, _orderingTheme$busine2, _orderingTheme$busine3, _orderState$options, _configs$unaddressed_, _orderState$options2;
  var UIComponent = props.UIComponent,
    initialBuisnessType = props.initialBuisnessType,
    initialOrderType = props.initialOrderType,
    initialOrderByValue = props.initialOrderByValue,
    initialFilterKey = props.initialFilterKey,
    initialFilterValue = props.initialFilterValue,
    initialPricelevel = props.initialPricelevel,
    isOfferBusinesses = props.isOfferBusinesses,
    isSortByReview = props.isSortByReview,
    isSearchByName = props.isSearchByName,
    isSearchByDescription = props.isSearchByDescription,
    isFeatured = props.isFeatured,
    isDoordash = props.isDoordash,
    asDashboard = props.asDashboard,
    paginationSettings = props.paginationSettings,
    customLocation = props.customLocation,
    propsToFetch = props.propsToFetch,
    onBusinessClick = props.onBusinessClick,
    windowPathname = props.windowPathname,
    currentPageParam = props.currentPageParam,
    franchiseId = props.franchiseId,
    businessId = props.businessId,
    cityId = props.cityId,
    actualSlug = props.actualSlug,
    searchValueCustom = props.searchValueCustom;
  var _useState = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessesList = _useState2[0],
    setBusinessesList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    paginationProps = _useState4[0],
    setPaginationProps = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    businessTypeSelected = _useState6[0],
    setBusinessTypeSelected = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    priceLevelSelected = _useState8[0],
    setPriceLevelSelected = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    searchValue = _useState10[0],
    setSearchValue = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    timeLimitValue = _useState12[0],
    setTimeLimitValue = _useState12[1];
  var _useState13 = (0, _react.useState)(initialOrderByValue !== null && initialOrderByValue !== void 0 ? initialOrderByValue : null),
    _useState14 = _slicedToArray(_useState13, 2),
    orderByValue = _useState14[0],
    setOrderByValue = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    maxDeliveryFee = _useState16[0],
    setMaxDeliveryFee = _useState16[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _orderingComponents.useWebsocket)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    auth = _useSession2$.auth,
    token = _useSession2$.token;
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    requestsState = _useState18[0],
    setRequestsState = _useState18[1];
  var _useState19 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    citiesState = _useState20[0],
    setCitiesState = _useState20[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    franchiseEnabled = _useState22[0],
    setFranchiseEnabled = _useState22[1];
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);
  var advancedSearchEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1';
  var showCities = (_ref = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$busine = orderingTheme.business_listing_view) !== null && _orderingTheme$busine !== void 0 && (_orderingTheme$busine2 = _orderingTheme$busine.components) !== null && _orderingTheme$busine2 !== void 0 && (_orderingTheme$busine3 = _orderingTheme$busine2.cities) !== null && _orderingTheme$busine3 !== void 0 && _orderingTheme$busine3.hidden) && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 2 && !props.disabledCities) !== null && _ref !== void 0 ? _ref : false;
  var unaddressedTypes = (configs === null || configs === void 0 ? void 0 : (_configs$unaddressed_ = configs.unaddressed_order_types_allowed) === null || _configs$unaddressed_ === void 0 ? void 0 : _configs$unaddressed_.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isAllowUnaddressOrderType = unaddressedTypes.includes(orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type);
  var sortBusinesses = function sortBusinesses(array, option) {
    if (option === 'review') {
      return array.sort(function (a, b) {
        return b.reviews.total - a.reviews.total;
      });
    }
    return array;
  };
  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */
  var getBusinesses = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, specificPagination, prev) {
      var _configs$location_def, _configs$location_def2, _orderState$options3, _orderState$options3$, _orderState$options4, _orderState$options4$, _orderState$options4$2, _orderState$options5, _orderState$options5$, _orderState$options5$2, _orderState$options6, _orderState$options13, _orderState$options14, _orderState$options18, defaultLatitude, defaultLongitude, isInvalidDefaultLocation, defaultLocation, parameters, _orderState$options7, _orderState$options8, _orderState$options8$, _orderState$options9, _orderState$options9$, _orderState$options9$2, _orderState$options10, _orderState$options11, _orderState$options12, paginationParams, _orderState$options15, moment, where, conditions, _orderState$options16, _orderState$options17, searchConditions, isSpecialCharacter, _orderState$options19, _paginationParams, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result, pagination, _result, offerBuesinesses, nextPageItems, remainingItems, businesses, fromIndex, toIndex, element;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log(searchValue);
            _context.prev = 1;
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: true,
              businesses: newFetch ? [] : businessesList.businesses
            }));
            defaultLatitude = Number(configs === null || configs === void 0 ? void 0 : (_configs$location_def = configs.location_default_latitude) === null || _configs$location_def === void 0 ? void 0 : _configs$location_def.value);
            defaultLongitude = Number(configs === null || configs === void 0 ? void 0 : (_configs$location_def2 = configs.location_default_longitude) === null || _configs$location_def2 === void 0 ? void 0 : _configs$location_def2.value);
            isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
            defaultLocation = {
              lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
              lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
            };
            parameters = asDashboard ? {} : {
              location: !customLocation ? isAllowUnaddressOrderType && !((_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && (_orderState$options3$ = _orderState$options3.address) !== null && _orderState$options3$ !== void 0 && _orderState$options3$.location) ? defaultLocation : "".concat((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : (_orderState$options4$2 = _orderState$options4$.location) === null || _orderState$options4$2 === void 0 ? void 0 : _orderState$options4$2.lat, ",").concat((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : (_orderState$options5$2 = _orderState$options5$.location) === null || _orderState$options5$2 === void 0 ? void 0 : _orderState$options5$2.lng) : "".concat(customLocation.lat, ",").concat(customLocation.lng),
              type: !initialOrderType ? ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.type) || 1 : initialOrderType
            };
            if (orderByValue) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                orderBy: orderByValue
              });
            }
            if ((searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 && advancedSearchEnabled) {
              parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                term: searchValue,
                order_type_id: orderState === null || orderState === void 0 ? void 0 : (_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.type,
                location: JSON.stringify(isAllowUnaddressOrderType && !((_orderState$options8 = orderState.options) !== null && _orderState$options8 !== void 0 && (_orderState$options8$ = _orderState$options8.address) !== null && _orderState$options8$ !== void 0 && _orderState$options8$.location) ? defaultLocation : {
                  lat: (_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : (_orderState$options9$ = _orderState$options9.address) === null || _orderState$options9$ === void 0 ? void 0 : (_orderState$options9$2 = _orderState$options9$.location) === null || _orderState$options9$2 === void 0 ? void 0 : _orderState$options9$2.lat,
                  lng: (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : (_orderState$options11 = _orderState$options10.address) === null || _orderState$options11 === void 0 ? void 0 : (_orderState$options12 = _orderState$options11.location) === null || _orderState$options12 === void 0 ? void 0 : _orderState$options12.lng
                })
              });
            }
            if (!isSortByReview && !isOfferBusinesses) {
              paginationParams = {
                page: newFetch ? 1 : paginationProps.currentPage + 1,
                page_size: paginationProps.pageSize
              };
              parameters = _objectSpread(_objectSpread({}, parameters), paginationParams);
            }
            if ((_orderState$options13 = orderState.options) !== null && _orderState$options13 !== void 0 && _orderState$options13.moment && isValidMoment((_orderState$options14 = orderState.options) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            where = null;
            conditions = [];
            if (initialBuisnessType || businessTypeSelected) {
              conditions.push({
                attribute: 'types',
                conditions: [{
                  attribute: 'id',
                  value: !initialBuisnessType ? businessTypeSelected : initialBuisnessType
                }]
              });
            }
            if (isFeatured) {
              conditions.push({
                attribute: 'featured',
                value: true
              });
            }
            if (franchiseId) {
              conditions.push({
                attribute: 'franchise_id',
                value: franchiseId
              });
            }
            if (priceLevelSelected || initialPricelevel) {
              conditions.push({
                attribute: 'price_level',
                value: initialPricelevel !== null && initialPricelevel !== void 0 ? initialPricelevel : priceLevelSelected
              });
            }
            if (businessId) {
              conditions.push({
                attribute: typeof businessId === 'string' ? 'slug' : 'id',
                value: businessId
              });
            }
            if (timeLimitValue) {
              if (((_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.type) === 1) {
                conditions.push({
                  attribute: 'delivery_time',
                  value: {
                    condition: '<=',
                    value: timeLimitValue
                  }
                });
              }
              if (((_orderState$options17 = orderState.options) === null || _orderState$options17 === void 0 ? void 0 : _orderState$options17.type) === 2) {
                conditions.push({
                  attribute: 'pickup_time',
                  value: {
                    condition: '<=',
                    value: timeLimitValue
                  }
                });
              }
            }
            if (maxDeliveryFee) {
              conditions.push({
                attribute: 'delivery_price',
                value: {
                  condition: '<=',
                  value: maxDeliveryFee
                }
              });
            }
            if (searchValue) {
              searchConditions = [];
              isSpecialCharacter = rex.test(searchValue);
              if (isSearchByName) {
                searchConditions.push({
                  attribute: 'name',
                  value: {
                    condition: 'ilike',
                    value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              if (isSearchByDescription) {
                searchConditions.push({
                  attribute: 'description',
                  value: {
                    condition: 'ilike',
                    value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                  }
                });
              }
              conditions.push({
                conector: 'OR',
                conditions: searchConditions
              });
            }
            if (orderState !== null && orderState !== void 0 && (_orderState$options18 = orderState.options) !== null && _orderState$options18 !== void 0 && _orderState$options18.city_id || cityId) {
              conditions.push({
                attribute: 'city_id',
                value: cityId || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options19 = orderState.options) === null || _orderState$options19 === void 0 ? void 0 : _orderState$options19.city_id)
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            if (specificPagination || currentPageParam) {
              _paginationParams = {
                page: specificPagination || currentPageParam,
                page_size: paginationProps.pageSize
              };
              parameters = _objectSpread(_objectSpread({}, parameters), _paginationParams);
            }
            source = {};
            requestsState.businesses = source;
            setRequestsState(_objectSpread({}, requestsState));
            fetchEndpoint = advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 || !where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters) : where && asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where).asDashboard() : where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where) : ordering.businesses().select(propsToFetch).parameters(parameters).asDashboard();
            _context.next = 31;
            return fetchEndpoint.get({
              cancelToken: source,
              advancedSearch: advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3
            });
          case 31:
            _yield$fetchEndpoint$ = _context.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            pagination = _yield$fetchEndpoint$2.pagination;
            if (!error) {
              if (isSortByReview) {
                _result = sortBusinesses(result, 'review');
                businessesList.businesses = _result;
              } else if (isOfferBusinesses) {
                offerBuesinesses = result.filter(function (_business) {
                  return (_business === null || _business === void 0 ? void 0 : _business.offers.length) > 0;
                });
                businessesList.businesses = offerBuesinesses;
              } else {
                businessesList.businesses = newFetch ? result : prev ? [].concat(_toConsumableArray(result), _toConsumableArray(businessesList.businesses)) : [].concat(_toConsumableArray(businessesList.businesses), _toConsumableArray(result));
              }
              nextPageItems = 0;
              if ((pagination === null || pagination === void 0 ? void 0 : pagination.current_page) !== (pagination === null || pagination === void 0 ? void 0 : pagination.total_pages)) {
                remainingItems = pagination.total - businessesList.businesses.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
                totalPages: pagination === null || pagination === void 0 ? void 0 : pagination.total_pages,
                totalItems: pagination === null || pagination === void 0 ? void 0 : pagination.total,
                nextPageItems: nextPageItems
              }));
            }
            businesses = businessesList.businesses;
            if (actualSlug) {
              fromIndex = businesses.findIndex(function (business) {
                return business.slug === actualSlug;
              });
              toIndex = 0;
              if (fromIndex !== toIndex) {
                element = businesses.splice(fromIndex, 1)[0];
                businesses.splice(toIndex, 0, element);
              }
            }
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false,
              error: error,
              businesses: businesses,
              result: result,
              fetched: true
            }));
            _context.next = 45;
            break;
          case 42:
            _context.prev = 42;
            _context.t0 = _context["catch"](1);
            if (_context.t0.constructor.name !== 'Cancel') {
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false,
                error: true,
                fetched: true,
                result: [_context.t0.message]
              }));
            }
          case 45:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 42]]);
    }));
    return function getBusinesses(_x2, _x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Get franchise info from API
   */
  var getFranchise = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            setFranchiseEnabled(false);
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            functionFetch = "".concat(ordering.root, "/franchises/").concat(franchiseId);
            _context2.next = 6;
            return fetch(functionFetch, requestOptions);
          case 6:
            response = _context2.sent;
            _context2.next = 9;
            return response.json();
          case 9:
            _yield$response$json = _context2.sent;
            result = _yield$response$json.result;
            if (result !== null && result !== void 0 && result.enabled) setFranchiseEnabled(result === null || result === void 0 ? void 0 : result.enabled);else setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
            _context2.next = 17;
            break;
          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
              loading: false
            }));
          case 17:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 14]]);
    }));
    return function getFranchise() {
      return _ref3.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, _yield$response$json2, result, error, pagination;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            requestOptions = {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(token),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            };
            setCitiesState(_objectSpread(_objectSpread({}, citiesState), {}, {
              loading: true
            }));
            _context3.next = 4;
            return fetch("".concat(ordering.root, "/countries"), requestOptions);
          case 4:
            response = _context3.sent;
            _context3.next = 7;
            return response.json();
          case 7:
            _yield$response$json2 = _context3.sent;
            result = _yield$response$json2.result;
            error = _yield$response$json2.error;
            pagination = _yield$response$json2.pagination;
            if (!error) {
              setCitiesState(_objectSpread(_objectSpread({}, citiesState), {}, {
                loading: false,
                cities: result === null || result === void 0 ? void 0 : result.map(function (country) {
                  return country === null || country === void 0 ? void 0 : country.cities;
                }).flat(),
                pagination: pagination
              }));
            }
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function getCities() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Cancel businesses request
   */
  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);

  /**
   * Listening order option and filter changes
   */
  (0, _react.useEffect)(function () {
    var _orderState$options20, _orderState$options21, _orderState$options22;
    if (orderState.loading || !((_orderState$options20 = orderState.options) !== null && _orderState$options20 !== void 0 && (_orderState$options21 = _orderState$options20.address) !== null && _orderState$options21 !== void 0 && _orderState$options21.location) && !isAllowUnaddressOrderType && !asDashboard && !customLocation || auth && !(orderState !== null && orderState !== void 0 && (_orderState$options22 = orderState.options) !== null && _orderState$options22 !== void 0 && _orderState$options22.user_id)) return;
    if (!isDoordash && !franchiseId) {
      getBusinesses(true, currentPageParam);
    }
  }, [JSON.stringify(orderState.options), ordering === null || ordering === void 0 ? void 0 : ordering.countryCode, orderState.loading, businessTypeSelected, priceLevelSelected, searchValue, initialPricelevel, initialBuisnessType, timeLimitValue, orderByValue, maxDeliveryFee, businessId]);
  (0, _react.useEffect)(function () {
    var _orderState$options23, _orderState$options24;
    if (orderState.loading || !((_orderState$options23 = orderState.options) !== null && _orderState$options23 !== void 0 && (_orderState$options24 = _orderState$options23.address) !== null && _orderState$options24 !== void 0 && _orderState$options24.location) && !isAllowUnaddressOrderType && !asDashboard && !customLocation) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
      return;
    }
    if (isDoordash || franchiseEnabled) {
      getBusinesses(true);
    }
  }, [JSON.stringify(orderState.options), franchiseEnabled, businessTypeSelected, searchValue, priceLevelSelected, timeLimitValue, orderByValue, maxDeliveryFee, businessId]);
  (0, _react.useLayoutEffect)(function () {
    if (isDoordash) {
      getBusinesses(true);
    }
  }, [windowPathname]);
  (0, _react.useEffect)(function () {
    if (franchiseId) {
      getFranchise();
    }
  }, [franchiseId]);

  /**
   * Listening initial filter
   */
  (0, _react.useEffect)(function () {
    if (!initialFilterKey && !initialFilterValue) return;
    switch (initialFilterKey) {
      case 'category':
        handleChangeBusinessType(initialFilterValue);
        break;
      case 'timeLimit':
        handleChangeTimeLimit(initialFilterValue);
        break;
      case 'search':
        handleChangeSearch(initialFilterValue);
        break;
      case 'orderBy':
        handleChangeOrderBy(initialFilterValue);
        break;
      case 'maxDeliveryFee':
        handleChangeMaxDeliveryFee(initialFilterValue);
        break;
    }
  }, [initialFilterKey, initialFilterValue]);
  (0, _react.useEffect)(function () {
    if (citiesState.loading) return;
    if (showCities) {
      getCities();
    }
  }, [showCities]);
  (0, _react.useEffect)(function () {
    handleChangeSearch(searchValueCustom);
  }, [searchValueCustom]);

  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */
  var handleBusinessClick = function handleBusinessClick(business) {
    onBusinessClick && onBusinessClick(business);
  };

  /**
   * Change business type
   * @param {object} businessType Business type
   */
  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };

  /**
   * Change price level
   * @param {string} priceLevel price level
   */
  var handleChangePriceLevel = function handleChangePriceLevel(priceLevel) {
    if (priceLevel === priceLevelSelected) {
      setPriceLevelSelected(null);
      return;
    }
    setPriceLevelSelected(priceLevel);
  };

  /**
   * Change text to search
   * @param {string} search Search value
   */
  var handleChangeSearch = function handleChangeSearch(search) {
    if (!!search !== !!searchValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    if (search !== undefined) {
      setSearchValue(search);
    }
  };

  /**
   * Change time limt value
   * @param {string} time time limt value (for example: 0:30)
   */
  var handleChangeTimeLimit = function handleChangeTimeLimit(time) {
    if (!!time !== !!timeLimitValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setTimeLimitValue(time);
  };

  /**
   * Change orderBy value
   * @param {string} orderBy orderBy value
   */
  var handleChangeOrderBy = function handleChangeOrderBy(orderBy) {
    if (orderBy !== orderByValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setOrderByValue(orderBy);
  };

  /**
   * Change max delivery fee
   * @param {number} deliveryFee max delivery fee
   */
  var handleChangeMaxDeliveryFee = function handleChangeMaxDeliveryFee(deliveryFee) {
    if (maxDeliveryFee !== deliveryFee) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }
    setMaxDeliveryFee(deliveryFee);
  };

  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */
  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    var updatedBusinesses = businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
      businesses: updatedBusinesses
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessesList: businessesList,
    paginationProps: paginationProps,
    searchValue: searchValue,
    timeLimitValue: timeLimitValue,
    businessTypeSelected: businessTypeSelected,
    orderByValue: orderByValue,
    maxDeliveryFee: maxDeliveryFee,
    priceLevelSelected: priceLevelSelected,
    handleChangePriceLevel: handleChangePriceLevel,
    getBusinesses: getBusinesses,
    handleChangeSearch: handleChangeSearch,
    handleChangeTimeLimit: handleChangeTimeLimit,
    handleChangeOrderBy: handleChangeOrderBy,
    handleBusinessClick: handleBusinessClick,
    handleChangeBusinessType: handleChangeBusinessType,
    handleChangeMaxDeliveryFee: handleChangeMaxDeliveryFee,
    franchiseEnabled: franchiseEnabled,
    handleUpdateBusinessList: handleUpdateBusinessList,
    getCities: getCities,
    citiesState: citiesState
  })));
};
exports.BusinessList = BusinessList;
BusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),
  /**
   * Function to get business clicked
   */
  onBusinessClick: _propTypes.default.func
};
BusinessList.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};