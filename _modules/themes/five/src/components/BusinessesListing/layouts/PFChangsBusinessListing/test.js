"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSearchList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var BusinessSearchList = function BusinessSearchList(props) {
  var _paginationSettings$p, _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3;
  var UIComponent = props.UIComponent,
    paginationSettings = props.paginationSettings,
    lazySearch = props.lazySearch,
    defaultTerm = props.defaultTerm,
    defaultLocation = props.defaultLocation,
    brandId = props.brandId,
    isPfChangs = props.isPfChangs;
  var _useState = (0, _react.useState)({
      businesses: [],
      loading: true,
      error: null,
      lengthError: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    businessesSearchList = _useState2[0],
    setBusinessesSearchList = _useState2[1];
  /**
   * brandList, this must be contain a brands, loading and error to send UIComponent
   */
  var _useState3 = (0, _react.useState)({
      loading: true,
      brands: [],
      error: null
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    brandList = _useState4[0],
    setBrandList = _useState4[1];
  var _useState5 = (0, _react.useState)({
      currentPage: 1,
      pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
      totalItems: null,
      totalPages: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    paginationProps = _useState6[0],
    setPaginationProps = _useState6[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useState7 = (0, _react.useState)({
      business_types: [],
      orderBy: 'distance',
      franchise_ids: [],
      price_level: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    filters = _useState8[0],
    setFilters = _useState8[1];
  var _useState9 = (0, _react.useState)(defaultTerm || ''),
    _useState10 = _slicedToArray(_useState9, 2),
    termValue = _useState10[0],
    setTermValue = _useState10[1];
  var _useState11 = (0, _react.useState)({
      loading: false,
      cities: [],
      error: null
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    citiesState = _useState12[0],
    setCitiesState = _useState12[1];
  var showCities = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.business_listing_view) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.cities) !== null && _orderingTheme$theme$3 !== void 0 && _orderingTheme$theme$3.hidden);
  (0, _react.useEffect)(function () {
    var _Object$keys, _orderState$options, _orderState$options$a;
    !lazySearch && (((_Object$keys = Object.keys((orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location) || {})) === null || _Object$keys === void 0 ? void 0 : _Object$keys.length) > 0 || defaultLocation) && handleSearchbusinessAndProducts(true);
  }, [filters, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : orderState.options)]);
  var handleChangeTermValue = function handleChangeTermValue(val) {
    setTermValue(val);
    if ((termValue === null || termValue === void 0 ? void 0 : termValue.length) === 0 || (termValue === null || termValue === void 0 ? void 0 : termValue.length) >= 3) {
      handleSearchbusinessAndProducts(true, {}, val);
    }
  };
  var handleChangeFilters = function handleChangeFilters(filterName, filterValue) {
    if (filterName === 'orderBy') {
      var ascdesc = filterValue === (filters === null || filters === void 0 ? void 0 : filters.orderBy) ? filterValue.includes('-') ? filterValue : "-".concat(filterValue) : filterValue;
      setFilters(_objectSpread(_objectSpread({}, filters), {}, {
        orderBy: ascdesc
      }));
    } else {
      setFilters(_objectSpread(_objectSpread({}, filters), {}, _defineProperty({}, filterName, filterValue)));
    }
  };

  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */
  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    var updatedBusinesses = businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }
      return business;
    });
    setBusinessesSearchList(_objectSpread(_objectSpread({}, businessesSearchList), {}, {
      businesses: updatedBusinesses
    }));
  };

  /**
   * Method to update business list
   * @param {number} productId product id
   * @param {number} categoryId category id
   * @param {number} businessId business id
   * @param {object} changes product info
   */
  var handleUpdateProducts = function handleUpdateProducts(productId, categoryId, businessId, changes) {
    var updatedBusinesses = businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        var updatedCategories = business === null || business === void 0 ? void 0 : business.categories.map(function (category) {
          if ((category === null || category === void 0 ? void 0 : category.id) === categoryId) {
            var updateProducts = category === null || category === void 0 ? void 0 : category.products.map(function (product) {
              if ((product === null || product === void 0 ? void 0 : product.id) === productId) {
                return _objectSpread(_objectSpread({}, product), changes);
              }
              return product;
            });
            return _objectSpread(_objectSpread({}, category), {}, {
              products: updateProducts
            });
          }
          return category;
        });
        return _objectSpread(_objectSpread({}, business), {}, {
          categories: updatedCategories
        });
      }
      return business;
    });
    setBusinessesSearchList(_objectSpread(_objectSpread({}, businessesSearchList), {}, {
      businesses: updatedBusinesses
    }));
  };
  var handleSearchbusinessAndProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, options, val) {
      var _orderState$options2, _orderState$options3, _orderState$options3$, _orderState$options3$2, _orderState$options4, _orderState$options4$, _orderState$options4$2, _orderState$options5, filtParams, requestOptions, location, response, _yield$response$json, result, error, pagination, nextPageItems, remainingItems;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              filtParams = (val === null || val === void 0 ? void 0 : val.length) >= 3 ? "&term=".concat(val) : '';
              Object.keys(filters).map(function (key) {
                var _filters$key;
                if (!filters[key] && filters[key] !== 0 || filters[key] === 'default' || ((_filters$key = filters[key]) === null || _filters$key === void 0 ? void 0 : _filters$key.length) === 0) return;
                Array.isArray(filters[key]) ? filtParams = filtParams + "&".concat(key, "=[").concat(filters[key], "]") : filtParams = filtParams + "&".concat(key, "=").concat(filters[key]);
              });
              filtParams = filtParams + isPfChangs ? '&forceOrderBy=enabled' : '&forceOrderBy=disabled';
              filtParams = filtParams + ((orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 1 && defaultLocation ? '&max_distance=20000' : '');
              filtParams = filtParams + "&page=".concat(newFetch ? 1 : paginationProps.currentPage + 1, "&page_size=").concat(paginationProps.pageSize);
              brandId && (filtParams = filtParams + "&franchise_ids=[".concat(brandId, "]"));
              setBusinessesSearchList(_objectSpread(_objectSpread({}, businessesSearchList), {}, {
                loading: true,
                lengthError: false
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              location = {
                lat: ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : (_orderState$options3$2 = _orderState$options3$.location) === null || _orderState$options3$2 === void 0 ? void 0 : _orderState$options3$2.lat) || (defaultLocation === null || defaultLocation === void 0 ? void 0 : defaultLocation.lat),
                lng: ((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : (_orderState$options4$2 = _orderState$options4$.location) === null || _orderState$options4$2 === void 0 ? void 0 : _orderState$options4$2.lng) || (defaultLocation === null || defaultLocation === void 0 ? void 0 : defaultLocation.lng)
              };
              _context.next = 12;
              return fetch("".concat(ordering.root, "/search?order_type_id=").concat(orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type, "&location=").concat(JSON.stringify((options === null || options === void 0 ? void 0 : options.location) || location)).concat(filtParams), requestOptions);
            case 12:
              response = _context.sent;
              _context.next = 15;
              return response.json();
            case 15:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;
              pagination = _yield$response$json.pagination;
              if (!error) {
                _context.next = 22;
                break;
              }
              setBusinessesSearchList({
                businesses: [],
                loading: false,
                error: result,
                lengthError: false
              });
              return _context.abrupt("return");
            case 22:
              nextPageItems = 0;
              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - result.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }
              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                nextPageItems: nextPageItems
              }));
              setBusinessesSearchList(_objectSpread(_objectSpread({}, businessesSearchList), {}, {
                businesses: newFetch ? result : [].concat(_toConsumableArray(businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses), _toConsumableArray(result)),
                loading: false,
                lengthError: false
              }));
              _context.next = 31;
              break;
            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](0);
              setBusinessesSearchList({
                businesses: [],
                loading: false,
                error: _context.t0.message,
                lengthError: false
              });
            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 28]]);
    }));
    return function handleSearchbusinessAndProducts(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
  * Function to get brand list from API
  */
  var getBrandList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/franchises"), requestOptions);
            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();
            case 8:
              content = _context2.sent;
              if (!content.error) {
                setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
                  loading: false,
                  brands: content === null || content === void 0 ? void 0 : content.result,
                  error: null
                }));
              } else {
                setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
                  loading: false,
                  error: content === null || content === void 0 ? void 0 : content.result
                }));
              }
              _context2.next = 15;
              break;
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setBrandList(_objectSpread(_objectSpread({}, brandList), {}, {
                loading: false,
                error: _context2.t0.message
              }));
            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function getBrandList() {
      return _ref2.apply(this, arguments);
    };
  }();
  var getCities = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var requestOptions, response, _yield$response$json2, result, error, pagination;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
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
        }
      }, _callee3);
    }));
    return function getCities() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
  * Function to get tag list from API
  */
  var getTagList = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var requestOptions, response, content;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setTags(_objectSpread(_objectSpread({}, tags), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                }
              };
              _context4.next = 5;
              return fetch("".concat(ordering.root, "/tags"), requestOptions);
            case 5:
              response = _context4.sent;
              _context4.next = 8;
              return response.json();
            case 8:
              content = _context4.sent;
              if (!content.error) {
                setTags(_objectSpread(_objectSpread({}, tags), {}, {
                  loading: false,
                  result: content === null || content === void 0 ? void 0 : content.result,
                  error: null
                }));
              } else {
                setTags(_objectSpread(_objectSpread({}, tags), {}, {
                  loading: false,
                  error: content === null || content === void 0 ? void 0 : content.result
                }));
              }
              _context4.next = 15;
              break;
            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              setTags(_objectSpread(_objectSpread({}, tags), {}, {
                loading: false,
                error: _context4.t0.message
              }));
            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));
    return function getTagList() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getBrandList();
  }, []);
  (0, _react.useEffect)(function () {
    if (showCities) {
      getCities();
    }
  }, [showCities]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    paginationProps: paginationProps,
    businessesSearchList: businessesSearchList,
    handleChangeFilters: handleChangeFilters,
    filters: filters,
    termValue: termValue,
    handleSearchbusinessAndProducts: handleSearchbusinessAndProducts,
    handleChangeTermValue: handleChangeTermValue,
    setFilters: setFilters,
    brandList: brandList,
    handleUpdateBusinessList: handleUpdateBusinessList,
    handleUpdateProducts: handleUpdateProducts,
    citiesState: citiesState
  })));
};
exports.BusinessSearchList = BusinessSearchList;
BusinessSearchList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessSearchList.defaultProps = {
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};