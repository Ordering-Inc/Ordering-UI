"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _orderingComponents = require("ordering-components");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var OrderList = function OrderList(props) {
  var _paginationSettings$p;
  var UIComponent = props.UIComponent,
    orders = props.orders,
    orderIds = props.orderIds,
    orderStatus = props.orderStatus,
    orderBy = props.orderBy,
    orderDirection = props.orderDirection,
    useDefualtSessionManager = props.useDefualtSessionManager,
    paginationSettings = props.paginationSettings,
    asDashboard = props.asDashboard,
    customArray = props.customArray,
    userCustomerId = props.userCustomerId,
    activeOrders = props.activeOrders,
    isDynamicSort = props.isDynamicSort,
    businessId = props.businessId,
    franchiseId = props.franchiseId,
    businessesSearchList = props.businessesSearchList,
    setIsEmptyBusinesses = props.setIsEmptyBusinesses,
    businessOrderIds = props.businessOrderIds,
    setBusinessOrderIds = props.setBusinessOrderIds,
    propsToFetchBusiness = props.propsToFetchBusiness,
    isBusiness = props.isBusiness,
    noGiftCardOrders = props.noGiftCardOrders,
    propsToFetch = props.propsToFetch;
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var socket = (0, _orderingComponents.useWebsocket)();
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    reorder = _useOrder2[1].reorder;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    session = _useSession2[0];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      loading: !orders,
      error: null,
      orders: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    orderList = _useState2[0],
    setOrderList = _useState2[1];
  var _useState3 = (0, _react.useState)({
      currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      total: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    pagination = _useState4[0],
    setPagination = _useState4[1];
  var _useState5 = (0, _react.useState)({
      loading: false,
      error: null,
      messages: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    messages = _useState6[0],
    setMessages = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    updateOtherStatus = _useState8[0],
    setUpdateOtherStatus = _useState8[1];
  var _useState9 = (0, _react.useState)({
      param: orderBy,
      direction: orderDirection
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    sortBy = _useState10[0],
    setSortBy = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    reorderState = _useState12[0],
    setReorderState = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    products = _useState14[0],
    setProducts = _useState14[1];
  var _useState15 = (0, _react.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    professionals = _useState16[0],
    setProfessionals = _useState16[1];
  var _useState17 = (0, _react.useState)({
      loading: false,
      result: [],
      error: null
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    businesses = _useState18[0],
    setBusinesses = _useState18[1];
  var profileMessage = props.profileMessages;
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};
  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };
  var handleReorder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(value) {
      var orderId, _reordersArray$, _reordersArray$$resul, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, _businessData$content2, fetchOrders, reordersArray, error, result, choosedOrder, _businessId, _businessData, _businessSlug, orderResult;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            orderId = Array.isArray(value) ? value : [value];
            if (orderId !== null && orderId !== void 0 && orderId.length) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            _context3.prev = 3;
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: true
            }));
            fetchOrders = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ids) {
                var promises, data;
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      promises = ids.map( /*#__PURE__*/function () {
                        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id) {
                          var res;
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return reorder(id, (ids === null || ids === void 0 ? void 0 : ids.length) > 1);
                              case 2:
                                res = _context.sent;
                                return _context.abrupt("return", res);
                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }, _callee);
                        }));
                        return function (_x4) {
                          return _ref3.apply(this, arguments);
                        };
                      }());
                      _context2.next = 3;
                      return Promise.all(promises);
                    case 3:
                      data = _context2.sent;
                      return _context2.abrupt("return", data);
                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
              return function fetchOrders(_x3) {
                return _ref2.apply(this, arguments);
              };
            }();
            _context3.next = 8;
            return fetchOrders(orderId);
          case 8:
            reordersArray = _context3.sent;
            error = reordersArray.length && reordersArray.every(function (obj) {
              return obj.error;
            }) && ((_reordersArray$ = reordersArray[0]) === null || _reordersArray$ === void 0 ? void 0 : (_reordersArray$$resul = _reordersArray$.result) === null || _reordersArray$$resul === void 0 ? void 0 : _reordersArray$$resul[0]);
            result = reordersArray.length && reordersArray.map(function (obj) {
              var _obj$result$, _obj$result;
              return (_obj$result$ = (_obj$result = obj.result) === null || _obj$result === void 0 ? void 0 : _obj$result[0]) !== null && _obj$result$ !== void 0 ? _obj$result$ : obj.result;
            }).filter(function (o) {
              return typeof o !== 'string';
            });
            choosedOrder = orderList.orders.find(function (_order) {
              return (_order === null || _order === void 0 ? void 0 : _order.id) === orderId[0];
            });
            _businessId = (_choosedOrder$busines = choosedOrder === null || choosedOrder === void 0 ? void 0 : choosedOrder.business_id) !== null && _choosedOrder$busines !== void 0 ? _choosedOrder$busines : choosedOrder === null || choosedOrder === void 0 ? void 0 : (_choosedOrder$origina = choosedOrder.original) === null || _choosedOrder$origina === void 0 ? void 0 : _choosedOrder$origina.business_id;
            _context3.next = 15;
            return ordering.businesses(_businessId).select(['slug']).get();
          case 15:
            _businessData = _context3.sent;
            _context3.next = 18;
            return _businessData === null || _businessData === void 0 ? void 0 : (_businessData$content = _businessData.content) === null || _businessData$content === void 0 ? void 0 : (_businessData$content2 = _businessData$content.result) === null || _businessData$content2 === void 0 ? void 0 : _businessData$content2.slug;
          case 18:
            _businessSlug = _context3.sent;
            orderResult = {
              orderId: orderId[0],
              business_id: _businessId,
              business: {
                slug: _businessSlug
              }
            };
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: error,
              result: error ? orderResult : _objectSpread(_objectSpread({}, result[0]), {}, {
                orderId: orderId[0]
              })
            }));
            _context3.next = 26;
            break;
          case 23:
            _context3.prev = 23;
            _context3.t0 = _context3["catch"](3);
            setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
              loading: false,
              error: true,
              result: [_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.message]
            }));
          case 26:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 23]]);
    }));
    return function handleReorder(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var getOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(page) {
      var otherStatus,
        pageSize,
        options,
        searchByStatus,
        source,
        functionFetch,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            otherStatus = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
            pageSize = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : paginationSettings.pageSize;
            options = {
              query: {
                orderBy: "".concat(sortBy.direction === 'desc' ? '-' : '').concat(sortBy.param),
                page: page,
                page_size: pageSize
              }
            };
            if (orderIds || orderStatus) {
              options.query.where = [];
              if (orderIds) {
                options.query.where.push({
                  attribute: 'id',
                  value: orderIds
                });
              }
              if (orderStatus) {
                searchByStatus = (otherStatus === null || otherStatus === void 0 ? void 0 : otherStatus.length) > 0 ? otherStatus : orderStatus;
                options.query.where.push({
                  attribute: 'status',
                  value: searchByStatus
                });
              }
            }
            if (userCustomerId) {
              options.query.where.push({
                attribute: 'customer_id',
                value: parseInt(userCustomerId, 10)
              });
            }
            if (businessId) {
              options.query.where.push({
                attribute: 'business_id',
                value: parseInt(businessId, 10)
              });
            }
            if (franchiseId) {
              options.query.where.push({
                attribute: 'ref_business',
                conditions: [{
                  attribute: 'franchise_id',
                  value: parseInt(franchiseId, 10)
                }]
              });
            }
            if (noGiftCardOrders) {
              options.query.where.push({
                attribute: 'products',
                conditions: [{
                  attribute: 'type',
                  value: {
                    condition: '=',
                    value: 'item'
                  }
                }]
              });
            }
            source = {};
            requestsState.orders = source;
            options.cancelToken = source;
            functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch) : ordering.setAccessToken(accessToken).orders().select(propsToFetch);
            _context4.next = 14;
            return functionFetch.get(options);
          case 14:
            return _context4.abrupt("return", _context4.sent);
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function getOrders(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();
  var loadOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(isNextPage, searchByOtherStatus) {
      var keepOrders,
        getFirstOrder,
        pageSize,
        nextPage,
        response,
        businessIds,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            keepOrders = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : false;
            getFirstOrder = _args5.length > 3 ? _args5[3] : undefined;
            if (!((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== null && !getFirstOrder)) {
              _context5.next = 4;
              break;
            }
            return _context5.abrupt("return");
          case 4:
            pageSize = keepOrders ? paginationSettings.pageSize * pagination.currentPage : paginationSettings.pageSize;
            if (session.token) {
              _context5.next = 8;
              break;
            }
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: false
            }));
            return _context5.abrupt("return");
          case 8:
            _context5.prev = 8;
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            if (isBusiness) {
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: true
              }));
            }
            nextPage = !isNextPage ? pagination.currentPage + 1 : 1;
            _context5.next = 14;
            return getOrders(getFirstOrder ? 0 : nextPage, searchByOtherStatus, pageSize);
          case 14:
            response = _context5.sent;
            if (searchByOtherStatus) {
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)),
                error: response.content.error ? response.content.result : null
              });
            } else {
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });
            }
            setProfessionals([].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)).reduce(function (previousValue, currentValue) {
              var _currentValue$product, _currentValue$product2;
              return previousValue.concat(currentValue === null || currentValue === void 0 ? void 0 : (_currentValue$product = currentValue.products[0]) === null || _currentValue$product === void 0 ? void 0 : (_currentValue$product2 = _currentValue$product.calendar_event) === null || _currentValue$product2 === void 0 ? void 0 : _currentValue$product2.professional);
            }, []).filter(function (professional, i, hash) {
              return professional && hash.map(function (_professional) {
                return _professional === null || _professional === void 0 ? void 0 : _professional.id;
              }).indexOf(professional === null || professional === void 0 ? void 0 : professional.id) === i;
            }));
            businessIds = [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)).map(function (order) {
              return order.business_id;
            });
            setBusinessOrderIds && setBusinessOrderIds(businessIds);
            setProducts([].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)).filter(function (order) {
              var _businessesSearchList;
              return !businessesSearchList || (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList = businessesSearchList.businesses) === null || _businessesSearchList === void 0 ? void 0 : _businessesSearchList.some(function (business) {
                return (order === null || order === void 0 ? void 0 : order.business_id) === (business === null || business === void 0 ? void 0 : business.id);
              }));
            }).map(function (order) {
              return order.products.map(function (product) {
                return _objectSpread(_objectSpread({}, product), {}, {
                  business: order === null || order === void 0 ? void 0 : order.business,
                  businessId: order === null || order === void 0 ? void 0 : order.business_id
                });
              });
            }).flat().filter(function (product, i, hash) {
              return hash.map(function (_product) {
                return _product === null || _product === void 0 ? void 0 : _product.product_id;
              }).indexOf(product === null || product === void 0 ? void 0 : product.product_id) === i;
            }));
            if (isBusiness) {
              getBusinesses(businessIds);
            }
            if (!response.content.error) {
              setPagination({
                currentPage: keepOrders ? pagination.currentPage : response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: keepOrders ? pagination.totalPages : response.content.pagination.total_pages,
                total: keepOrders ? pagination.total : response.content.pagination.total,
                from: keepOrders ? 1 : response.content.pagination.from,
                to: keepOrders ? pagination.to : response.content.pagination.to
              });
            }
            _context5.next = 27;
            break;
          case 24:
            _context5.prev = 24;
            _context5.t0 = _context5["catch"](8);
            if (_context5.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context5.t0.message]
              }));
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                loading: false
              }));
            }
          case 27:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[8, 24]]);
    }));
    return function loadOrders(_x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();
  var handleUpdateOrderList = function handleUpdateOrderList(orderId, changes) {
    var updatedOrders = orderList === null || orderList === void 0 ? void 0 : orderList.orders.map(function (order) {
      if ((order === null || order === void 0 ? void 0 : order.id) === orderId) {
        return _objectSpread(_objectSpread({}, order), changes);
      }
      return order;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: updatedOrders
    }));
  };
  var loadMessages = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(orderId) {
      var url, response, _yield$response$json, error, result;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: true
            }));
            url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
            _context6.next = 5;
            return fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(accessToken),
                'X-App-X': ordering.appId,
                'X-Socket-Id-X': socket === null || socket === void 0 ? void 0 : socket.getId()
              }
            });
          case 5:
            response = _context6.sent;
            _context6.next = 8;
            return response.json();
          case 8:
            _yield$response$json = _context6.sent;
            error = _yield$response$json.error;
            result = _yield$response$json.result;
            if (!error) {
              setMessages({
                messages: result,
                loading: false,
                error: null
              });
            } else {
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: result
              }));
            }
            _context6.next = 17;
            break;
          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            setMessages(_objectSpread(_objectSpread({}, messages), {}, {
              loading: false,
              error: [_context6.t0.message]
            }));
          case 17:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 14]]);
    }));
    return function loadMessages(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  var getBusinesses = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(businessIds) {
      var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2, _orderState$options3, _orderState$options4, parameters, _orderState$options5, moment, where, conditions, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, error, result;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            parameters = {
              location: "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng)
            };
            if ((_orderState$options3 = orderState.options) !== null && _orderState$options3 !== void 0 && _orderState$options3.moment && isValidMoment((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.moment, 'YYYY-MM-DD HH:mm:ss')) {
              moment = _dayjs.default.utc((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
              parameters.timestamp = moment;
            }
            where = null;
            conditions = [];
            if (businessIds) {
              conditions.push({
                attribute: typeof businessIds === 'string' ? 'slug' : 'id',
                value: businessIds
              });
            }
            if (conditions.length) {
              where = {
                conditions: conditions,
                conector: 'AND'
              };
            }
            source = {};
            requestsState.businesses = source;
            fetchEndpoint = ordering.businesses().select(propsToFetchBusiness).parameters(parameters).where(where);
            _context7.next = 12;
            return fetchEndpoint.get({
              cancelToken: source
            });
          case 12:
            _yield$fetchEndpoint$ = _context7.sent;
            _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
            error = _yield$fetchEndpoint$2.error;
            result = _yield$fetchEndpoint$2.result;
            if (!error) {
              setBusinesses({
                result: result,
                error: null,
                loading: false
              });
            }
            _context7.next = 22;
            break;
          case 19:
            _context7.prev = 19;
            _context7.t0 = _context7["catch"](0);
            if (_context7.t0.constructor.name !== 'Cancel') {
              setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
                err: _context7.t0.message,
                loading: false
              }));
            }
          case 22:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 19]]);
    }));
    return function getBusinesses(_x9) {
      return _ref7.apply(this, arguments);
    };
  }();

  // Function to update professional list
  var handleUpdateProfessionals = function handleUpdateProfessionals(id, changes) {
    var updateProfessionals = professionals.map(function (professional) {
      if ((professional === null || professional === void 0 ? void 0 : professional.id) === id) {
        return _objectSpread(_objectSpread({}, professional), changes);
      }
      return professional;
    });
    setProfessionals(updateProfessionals);
  };
  (0, _react.useEffect)(function () {
    if (orders || customArray) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: (orders === null || orders === void 0 ? void 0 : orders.lenght) > 0 ? orders : customArray || [],
        loading: false
      }));
    } else if (!businessesSearchList) {
      loadOrders(false, false, false, true);
    }
    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [isBusiness]);
  (0, _react.useEffect)(function () {
    var _session$user2, _session$user3;
    if (orderList.loading) return;
    var handleUpdateOrder = function handleUpdateOrder(order) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        loading: true
      }));
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      var orders = [];
      showToast(_orderingComponents.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id));
      if (found) {
        orders = orderList.orders.filter(function (_order) {
          var _order$driver, _order$driver2, _session$user;
          if (_order.id === order.id && (_order === null || _order === void 0 ? void 0 : (_order$driver = _order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) !== (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.id) && (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 4) {
            return false;
          }
          if (_order.id === order.id) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
          }
          var valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status)) || updateOtherStatus.length === 0 || updateOtherStatus.includes(parseInt(_order.status));
          if (!valid) {
            pagination.total--;
            setPagination(_objectSpread({}, pagination));
          }
          return valid;
        });
      } else {
        orders = [order].concat(_toConsumableArray(orderList.orders));
        pagination.total++;
        setPagination(_objectSpread({}, pagination));
      }
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders,
        loading: false
      }));
    };
    var handleAddNewOrder = function handleAddNewOrder(order) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        loading: true
      }));
      showToast(_orderingComponents.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id));
      var newOrder = [order].concat(_toConsumableArray(orderList.orders));
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: newOrder,
        loading: false
      }));
    };
    socket.on('orders_register', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
    socket.join(ordersRoom);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleAddNewOrder);
    };
  }, [orderList.orders, pagination, socket, session]);
  (0, _react.useEffect)(function () {
    var _session$user6, _session$user7;
    if (!session.user) return;
    socket.on('disconnect', function (reason) {
      var _session$user4, _session$user5;
      var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 ? void 0 : (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id);
      socket.join(ordersRoom);
    });
    var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 ? void 0 : (_session$user6 = session.user) === null || _session$user6 === void 0 ? void 0 : _session$user6.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user7 = session.user) === null || _session$user7 === void 0 ? void 0 : _session$user7.id);
    socket.join(ordersRoom);
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, session, userCustomerId]);
  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(searchByOtherStatus) {
      var response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context8.prev = 1;
            _context8.next = 4;
            return getOrders(pagination.currentPage + 1, searchByOtherStatus);
          case 4:
            response = _context8.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context8.next = 12;
            break;
          case 9:
            _context8.prev = 9;
            _context8.t0 = _context8["catch"](1);
            if (_context8.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context8.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 9]]);
    }));
    return function loadMoreOrders(_x10) {
      return _ref8.apply(this, arguments);
    };
  }();
  var goToPage = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(page) {
      var response;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context9.prev = 1;
            _context9.next = 4;
            return getOrders(page);
          case 4:
            response = _context9.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? [] : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context9.next = 12;
            break;
          case 9:
            _context9.prev = 9;
            _context9.t0 = _context9["catch"](1);
            if (_context9.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context9.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[1, 9]]);
    }));
    return function goToPage(_x11) {
      return _ref9.apply(this, arguments);
    };
  }();
  var sortOrders = function sortOrders(orders) {
    var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    var ordersSorted = orders.sort(function (a, b) {
      if (sortBy === 'desc') {
        return b.id - a.id;
      }
      return a.id - b.id;
    });
    return ordersSorted;
  };
  var handleUpdateProducts = function handleUpdateProducts(productId, changes) {
    var updatedProducts = products === null || products === void 0 ? void 0 : products.map(function (product) {
      if ((product === null || product === void 0 ? void 0 : product.product_id) === productId) {
        return _objectSpread(_objectSpread({}, product), changes);
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  var handleUpdateBusinesses = function handleUpdateBusinesses(businessId, changes) {
    var _businesses$result;
    var updatedBusiness = businesses === null || businesses === void 0 ? void 0 : (_businesses$result = businesses.result) === null || _businesses$result === void 0 ? void 0 : _businesses$result.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinesses(_objectSpread(_objectSpread({}, businesses), {}, {
      result: updatedBusiness
    }));
  };
  var getPage = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(page, pageSize) {
      var response;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              loading: true
            }));
            _context10.prev = 1;
            _context10.next = 4;
            return getOrders(page, pageSize);
          case 4:
            response = _context10.sent;
            setOrderList({
              loading: false,
              orders: response.content.error ? orderList.orders : response.content.result,
              error: response.content.error ? response.content.result : null
            });
            if (!response.content.error) {
              setPagination({
                currentPage: response.content.pagination.current_page,
                pageSize: response.content.pagination.page_size,
                totalPages: response.content.pagination.total_pages,
                total: response.content.pagination.total,
                from: response.content.pagination.from,
                to: response.content.pagination.to
              });
            }
            _context10.next = 12;
            break;
          case 9:
            _context10.prev = 9;
            _context10.t0 = _context10["catch"](1);
            if (_context10.t0.constructor.name !== 'Cancel') {
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false,
                error: [_context10.t0.message]
              }));
            }
          case 12:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[1, 9]]);
    }));
    return function getPage(_x12, _x13) {
      return _ref10.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (profileMessage) return;
    if (!orderList.loading && orderBy !== 'last_direct_message_at') {
      var ordersSorted = orderList.orders.sort(function (a, b) {
        if (activeOrders) {
          return (0, _dayjs.default)(b.created_at).unix() - (0, _dayjs.default)(a.created_at).unix();
        }
        return (0, _dayjs.default)(a.created_at).unix() - (0, _dayjs.default)(b.created_at).unix();
      });
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: ordersSorted
      }));
    }
  }, [orderList.loading, orderBy]);

  /**
   * This effect is used to reload orders with dynamic params, using `isDynamicSort` as validation
   */
  (0, _react.useEffect)(function () {
    if (isDynamicSort) {
      loadOrders(true, []);
    }
  }, [sortBy]);
  (0, _react.useEffect)(function () {
    if (businessesSearchList && !(businessesSearchList !== null && businessesSearchList !== void 0 && businessesSearchList.loading)) {
      loadOrders(false, false, false, true);
    }
  }, [businessesSearchList, businessId]);
  (0, _react.useEffect)(function () {
    setIsEmptyBusinesses && setIsEmptyBusinesses((businessOrderIds === null || businessOrderIds === void 0 ? void 0 : businessOrderIds.length) === 0);
  }, [businessOrderIds]);
  (0, _react.useEffect)(function () {
    var handleOrderMessageRead = function handleOrderMessageRead(orderId) {
      var updatedOrders = orderList.orders.map(function (order) {
        if (order.id === orderId) {
          return _objectSpread(_objectSpread({}, order), {}, {
            unread_count: 0
          });
        }
        return order;
      });
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: updatedOrders
      }));
    };
    events.on('order_message_read', handleOrderMessageRead);
    return function () {
      events.off('order_message_read', handleOrderMessageRead);
    };
  }, [orderList.orders]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    sortOrders: sortOrders,
    setSortBy: setSortBy,
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    goToPage: goToPage,
    loadOrders: loadOrders,
    loadMessages: loadMessages,
    messages: messages,
    setMessages: setMessages,
    setUpdateOtherStatus: setUpdateOtherStatus,
    handleReorder: handleReorder,
    reorderState: reorderState,
    businessOrderIds: businessOrderIds,
    products: products,
    handleUpdateOrderList: handleUpdateOrderList,
    handleUpdateProducts: handleUpdateProducts,
    handleUpdateBusinesses: handleUpdateBusinesses,
    businesses: businesses,
    professionals: professionals,
    handleUpdateProfessionals: handleUpdateProfessionals,
    getPage: getPage
  })));
};
exports.OrderList = OrderList;
OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,
  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,
  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }
    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },
  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),
  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),
  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),
  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,
  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),
  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  isAsCustomer: false,
  propsToFetchBusiness: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'ribbon', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug', 'city', 'city_id']
};