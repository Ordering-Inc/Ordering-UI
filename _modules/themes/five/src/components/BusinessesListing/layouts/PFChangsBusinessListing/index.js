"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PFChangsBusinesListing = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _RiArrowDropDownLine = _interopRequireDefault(require("@meronex/icons/ri/RiArrowDropDownLine"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _pfchangs = require("../../../../styles/Buttons/theme/pfchangs");
var _NotFoundSource = require("../../../NotFoundSource");
var _Modal = require("../../../Modal");
var _pfchangs2 = require("../../../Confirm/layouts/pfchangs");
var _AddressForm = require("../../../AddressForm");
var _AddressList = require("../../../AddressList");
var _BusinessPreorder = require("../../../BusinessPreorder");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BusinessesListingUI = function BusinessesListingUI(props) {
  var _businessesSearchList, _businessesSearchList2, _businessesSearchList4, _orderState$options3, _orderState$options3$, _citiesState$cities, _citiesState$cities$f, _orderState$options4, _orderState$options4$, _businessesSearchList11, _businessesSearchList12, _businessesSearchList13, _businessesSearchList14, _businessesSearchList15, _businessesSearchList16, _orderState$options5;
  var businessesSearchList = props.businessesSearchList,
    paginationProps = props.paginationProps,
    isCustomerMode = props.isCustomerMode,
    handleBusinessClick = props.handleBusinessClick,
    onBusinessClick = props.onBusinessClick,
    filterByCity = props.filterByCity,
    filterByAddress = props.filterByAddress,
    citiesState = props.citiesState,
    handleChangeFilters = props.handleChangeFilters,
    handleSearchbusinessAndProducts = props.handleSearchbusinessAndProducts,
    setBusinessesLocations = props.setBusinessesLocations,
    businessesLocations = props.businessesLocations,
    setBusinessClikedId = props.setBusinessClikedId,
    currentLocation = props.currentLocation,
    canBeRedirected = props.canBeRedirected,
    businessClikedId = props.businessClikedId,
    mapActivated = props.mapActivated,
    isResponsive = props.isResponsive,
    businessesInsideZone = props.businessesInsideZone;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)({
      listOpen: false,
      formOpen: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    modals = _useState2[0],
    setModals = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    mapErrors = _useState6[0],
    setMapErrors = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isPreorder = _useState8[0],
    setIsPreorder = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    preorderBusiness = _useState10[0],
    setPreorderBusiness = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    citySelected = _useState12[0],
    setCitySelected = _useState12[1];
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    favoriteIds = _useState14[0],
    setFavoriteIds = _useState14[1];
  var distanceOptions = [1000, 5000, 10000, 15000, 20000, 25000, 'default'];
  var _useState15 = (0, _react.useState)('default'),
    _useState16 = _slicedToArray(_useState15, 2),
    distanceSelected = _useState16[0],
    setDistanceSelected = _useState16[1];
  var businessNearestLength = (_businessesSearchList = businessesSearchList.businesses) === null || _businessesSearchList === void 0 ? void 0 : (_businessesSearchList2 = _businessesSearchList.filter(function (business) {
    return !citySelected || (business === null || business === void 0 ? void 0 : business.city_id) === (citySelected === null || citySelected === void 0 ? void 0 : citySelected.id);
  })) === null || _businessesSearchList2 === void 0 ? void 0 : _businessesSearchList2.length;
  var handleFindBusinesses = function handleFindBusinesses() {
    var _orderState$options, _orderState$options$a;
    if (!(orderState !== null && orderState !== void 0 && (_orderState$options = orderState.options) !== null && _orderState$options !== void 0 && (_orderState$options$a = _orderState$options.address) !== null && _orderState$options$a !== void 0 && _orderState$options$a.location)) {
      setAlertState({
        open: true,
        content: [t('SELECT_AN_ADDRESS_TO_SEARCH', 'Select or add an address to search')]
      });
      return;
    }
    setModals({
      listOpen: false,
      formOpen: false
    });
  };
  var handleCloseAlerts = function handleCloseAlerts() {
    setAlertState({
      open: false,
      content: []
    });
    setMapErrors('');
  };
  var handleMapErrors = function handleMapErrors(errKey) {
    setAlertState({
      open: true,
      content: [t(errKey, mapErrors[errKey])]
    });
  };
  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(newFetch, options, force) {
      var optionsDeliveryZone;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              optionsDeliveryZone = _objectSpread(_objectSpread({}, options), {}, {
                force_max_distance: force || false
              });
              _context.next = 3;
              return handleSearchbusinessAndProducts(newFetch, options);
            case 3:
              _context.next = 5;
              return handleSearchbusinessAndProducts(newFetch, optionsDeliveryZone);
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function getBusinesses(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (mapErrors) {
      handleMapErrors(mapErrors);
    }
  }, [mapErrors]);
  var handleClosePreorder = function handleClosePreorder() {
    setIsPreorder(false);
    setPreorderBusiness(null);
  };
  (0, _react.useEffect)(function () {
    if (preorderBusiness) setIsPreorder(true);
  }, [preorderBusiness]);
  (0, _react.useEffect)(function () {
    var _businessesSearchList3;
    if (!(businessesSearchList !== null && businessesSearchList !== void 0 && (_businessesSearchList3 = businessesSearchList.businesses) !== null && _businessesSearchList3 !== void 0 && _businessesSearchList3.length)) return;
    var ids = _toConsumableArray(favoriteIds);
    businessesSearchList.businesses.forEach(function (business) {
      if (business !== null && business !== void 0 && business.favorite) {
        ids.push(business.id);
      }
    });
    setFavoriteIds(_toConsumableArray(new Set(ids)));
  }, [businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList4 = businessesSearchList.businesses) === null || _businessesSearchList4 === void 0 ? void 0 : _businessesSearchList4.length]);
  (0, _react.useEffect)(function () {
    var _businessesSearchList5;
    setBusinessesLocations(businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList5 = businessesSearchList.businesses) === null || _businessesSearchList5 === void 0 ? void 0 : _businessesSearchList5.map(function (business) {
      var _theme$images, _theme$images$dummies, _businessesInsideZone;
      return _objectSpread(_objectSpread({}, business === null || business === void 0 ? void 0 : business.location), {}, {
        icon: (business === null || business === void 0 ? void 0 : business.logo) || (theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
        slug: business === null || business === void 0 ? void 0 : business.slug,
        markerPopup: markerPopup(business, t('GO_TO_THE_STORE', 'Go to the store'), (business === null || business === void 0 ? void 0 : business.cellphone) || (business === null || business === void 0 ? void 0 : business.phone) || '', business !== null && business !== void 0 && business.open && businessesInsideZone !== null && businessesInsideZone !== void 0 && (_businessesInsideZone = businessesInsideZone.businesses) !== null && _businessesInsideZone !== void 0 && _businessesInsideZone.find(function (_business) {
          return (_business === null || _business === void 0 ? void 0 : _business.id) === (business === null || business === void 0 ? void 0 : business.id);
        }) ? 'block' : 'none'),
        id: business === null || business === void 0 ? void 0 : business.id,
        address: business === null || business === void 0 ? void 0 : business.address
      });
    }));
  }, [businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses]);
  (0, _react.useEffect)(function () {
    window.handleClickBusinessButton = function (slug) {
      onBusinessClick({
        slug: slug
      });
    };
    return function () {
      window.handleClickBusinessButton = null;
    };
  }, [businessesLocations === null || businessesLocations === void 0 ? void 0 : businessesLocations.length, businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.businesses]);
  var scheduleFormatted = function scheduleFormatted(_ref2) {
    var hour = _ref2.hour,
      minute = _ref2.minute;
    var checkTime = function checkTime(val) {
      return val < 10 ? "0".concat(val) : val;
    };
    return "".concat(checkTime(hour), ":").concat(checkTime(minute));
  };
  var getScheduleOpen = function getScheduleOpen(business) {
    var _business$today;
    var currentDate = (0, _dayjs.default)().tz(business === null || business === void 0 ? void 0 : business.timezone);
    var lapse = null;
    if (business !== null && business !== void 0 && (_business$today = business.today) !== null && _business$today !== void 0 && _business$today.enabled) {
      var _business$today2, _business$today2$laps;
      lapse = business === null || business === void 0 ? void 0 : (_business$today2 = business.today) === null || _business$today2 === void 0 ? void 0 : (_business$today2$laps = _business$today2.lapses) === null || _business$today2$laps === void 0 ? void 0 : _business$today2$laps.find(function (lapse) {
        var from = currentDate.hour(lapse.open.hour).minute(lapse.open.minute);
        var to = currentDate.hour(lapse.close.hour).minute(lapse.close.minute);
        return currentDate.unix() >= from.unix() && currentDate.unix() <= to.unix();
      });
    }
    return lapse ? scheduleFormatted(lapse.open) : '';
  };
  var handleChangeDistance = function handleChangeDistance(distance) {
    handleChangeFilters('max_distance', distance === 'default' ? null : distance);
    setDistanceSelected(distance);
  };
  var markerPopup = function markerPopup(business, type, cellphone, showButton) {
    return '<div id="content" style="width: 300px">' + '<h1 id="firstHeading" class="firstHeading" style="font-size: 12px">' + business.name + '</h1>' + '<div id="bodyContent" style="display: flex; justify-content: space-between; width: 100%">' + '<div style="max-width: 170px; display: flex; flex-direction: column">' + '<a class="btn-address-map" id="address-map" style="font-size: 10px; margin: 0">' + business.address + '</a>' + '<p style="font-size: 10px; margin: 0">' + cellphone + '</p>' + '</div>' + '<button style="display: ' + showButton + '" onclick="handleClickBusinessButton(\'' + business.slug + '\')"' + business.id + '" class="btn-choose-store" style="">' + type + '</button></div></div>';
  };
  var handleGotoMaps = function handleGotoMaps(business) {
    window.open("https://www.google.com/maps/search/?api=1&query=".concat(business.address), '_blank');
  };
  (0, _react.useEffect)(function () {
    var _orderState$options2, _orderState$options2$, _businessesSearchList6;
    if (canBeRedirected && filterByAddress && orderState !== null && orderState !== void 0 && (_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && (_orderState$options2$ = _orderState$options2.address) !== null && _orderState$options2$ !== void 0 && _orderState$options2$.location && ((_businessesSearchList6 = businessesSearchList.businesses) === null || _businessesSearchList6 === void 0 ? void 0 : _businessesSearchList6.length) === 1 && !businessesSearchList.loading && !(orderState !== null && orderState !== void 0 && orderState.loading)) {
      onBusinessClick({
        slug: businessesSearchList.businesses[0].slug
      });
    }
  }, [businessesSearchList.businesses[0]]);
  var container = document.getElementById('search-container');
  var handleScroll = (0, _react.useCallback)(function () {
    var _businessesSearchList7;
    var hasMore = (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) < (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList7 = businessesSearchList.businesses) === null || _businessesSearchList7 === void 0 ? void 0 : _businessesSearchList7.length) > 0;
    if (container.scrollHeight - container.scrollTop < container.clientHeight && hasMore && !businessesSearchList.loading) {
      getBusinesses(false, {}, true);
    }
  }, [businessesSearchList.loading, paginationProps]);
  (0, _react.useEffect)(function () {
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return function () {
        return container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);
  var SingleBusinessController = function SingleBusinessController(_ref3) {
    var _business$city;
    var business = _ref3.business,
      showGoToStore = _ref3.showGoToStore;
    return /*#__PURE__*/_react.default.createElement(_styles.SingleBusinessContainer, {
      isSelected: businessClikedId === (business === null || business === void 0 ? void 0 : business.id),
      onClick: function onClick() {
        return mapActivated && setBusinessClikedId(business === null || business === void 0 ? void 0 : business.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.LeftContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_styles.BusinessAddress, {
      onClick: function onClick() {
        return handleGotoMaps(business);
      }
    }, business === null || business === void 0 ? void 0 : business.address), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 ? void 0 : business.cellphone), getScheduleOpen(business) && /*#__PURE__*/_react.default.createElement("p", null, t('OPEN_UNTIL', 'Open until'), " ", getScheduleOpen(business))), /*#__PURE__*/_react.default.createElement(_styles.RightContainer, null, showGoToStore && /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
      color: "primary",
      onClick: function onClick() {
        return onBusinessClick(business);
      }
    }, t('ORDER_NOW', 'Order now'))));
  };
  var sortBusinessFunction = function sortBusinessFunction(businessA, businessB) {
    var businesses = businessesInsideZone === null || businessesInsideZone === void 0 ? void 0 : businessesInsideZone.businesses;
    if (businesses !== null && businesses !== void 0 && businesses.find(function (_business) {
      return (_business === null || _business === void 0 ? void 0 : _business.id) === (businessA === null || businessA === void 0 ? void 0 : businessA.id);
    }) && !(businesses !== null && businesses !== void 0 && businesses.find(function (_business) {
      return (_business === null || _business === void 0 ? void 0 : _business.id) === (businessB === null || businessB === void 0 ? void 0 : businessB.id);
    }))) {
      return -1;
    } else if (!(businesses !== null && businesses !== void 0 && businesses.find(function (_business) {
      return (_business === null || _business === void 0 ? void 0 : _business.id) === (businessA === null || businessA === void 0 ? void 0 : businessA.id);
    })) && businesses !== null && businesses !== void 0 && businesses.find(function (_business) {
      return (_business === null || _business === void 0 ? void 0 : _business.id) === (businessB === null || businessB === void 0 ? void 0 : businessB.id);
    })) {
      return 1;
    } else {
      return 0;
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isResponsive && /*#__PURE__*/_react.default.createElement(_styles.DeliveryTextWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('ENTER_FULL_ADDRESS_TO_ORDER', 'Enter your full street address to start your delivery order.'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    alignCenter: !businessesSearchList.loading && businessesSearchList.businesses.length === 0
  }, currentLocation && /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    className: "search-area",
    color: "primary",
    onClick: function onClick() {
      return getBusinesses(true, {
        location: currentLocation
      });
    }
  }, t('SEARCH_THIS_AREA', 'Search This Area')), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filterByAddress && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : _orderState$options3$.location) && /*#__PURE__*/_react.default.createElement("p", null, t('SHOWING', 'Showing'), " ", businessNearestLength, " ", t('LOCATIONS_WITHIN', 'locations within'), " ", ' ', /*#__PURE__*/_react.default.createElement(_styles.LocationSelect, {
    value: distanceSelected,
    onChange: function onChange(e) {
      return handleChangeDistance(e.target.value);
    }
  }, distanceOptions === null || distanceOptions === void 0 ? void 0 : distanceOptions.map(function (distance, i, hash) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: distance,
      value: distance
    }, distance === 'default' ? "+ ".concat(distanceOptions[i - 1] / 1000) : distance / 1000, " ", t('KM', 'Km'));
  })), ' ', t('OF_YOUR_LOCATION', 'of your location'), ':'), filterByCity && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, citiesState === null || citiesState === void 0 ? void 0 : (_citiesState$cities = citiesState.cities) === null || _citiesState$cities === void 0 ? void 0 : (_citiesState$cities$f = _citiesState$cities.filter(function (city) {
    var _businessesSearchList8;
    return (_businessesSearchList8 = businessesSearchList.businesses) === null || _businessesSearchList8 === void 0 ? void 0 : _businessesSearchList8.some(function (business) {
      return (business === null || business === void 0 ? void 0 : business.city_id) === (city === null || city === void 0 ? void 0 : city.id);
    });
  })) === null || _citiesState$cities$f === void 0 ? void 0 : _citiesState$cities$f.map(function (city) {
    var _businessesSearchList9, _businessesSearchList10;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: city === null || city === void 0 ? void 0 : city.id
    }, /*#__PURE__*/_react.default.createElement(_styles.CityContainer, {
      isSelected: (citySelected === null || citySelected === void 0 ? void 0 : citySelected.id) === (city === null || city === void 0 ? void 0 : city.id),
      onClick: function onClick() {
        return setCitySelected((citySelected === null || citySelected === void 0 ? void 0 : citySelected.id) === (city === null || city === void 0 ? void 0 : city.id) ? null : city);
      }
    }, /*#__PURE__*/_react.default.createElement("h3", null, city === null || city === void 0 ? void 0 : city.name), /*#__PURE__*/_react.default.createElement(_RiArrowDropDownLine.default, {
      size: 18
    })), (citySelected === null || citySelected === void 0 ? void 0 : citySelected.id) === (city === null || city === void 0 ? void 0 : city.id) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_businessesSearchList9 = businessesSearchList.businesses) === null || _businessesSearchList9 === void 0 ? void 0 : (_businessesSearchList10 = _businessesSearchList9.filter(function (business) {
      return (business === null || business === void 0 ? void 0 : business.city_id) === (city === null || city === void 0 ? void 0 : city.id);
    })) === null || _businessesSearchList10 === void 0 ? void 0 : _businessesSearchList10.map(function (business) {
      var _businessesInsideZone2;
      return /*#__PURE__*/_react.default.createElement(SingleBusinessController, {
        key: business === null || business === void 0 ? void 0 : business.id,
        business: business,
        showGoToStore: businessesInsideZone === null || businessesInsideZone === void 0 ? void 0 : (_businessesInsideZone2 = businessesInsideZone.businesses) === null || _businessesInsideZone2 === void 0 ? void 0 : _businessesInsideZone2.find(function (_business) {
          return (_business === null || _business === void 0 ? void 0 : _business.id) === (business === null || business === void 0 ? void 0 : business.id);
        })
      });
    }), (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) < (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.LoadMoreButtonCityWrap, null, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
      onClick: function onClick() {
        return getBusinesses();
      },
      color: "primary"
    }, t('LOAD_MORE_BUSINESSES', 'Load more businesses')))));
  })), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, filterByAddress && !filterByCity && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : (_orderState$options4$ = _orderState$options4.address) === null || _orderState$options4$ === void 0 ? void 0 : _orderState$options4$.location) && ((_businessesSearchList11 = businessesSearchList.businesses) === null || _businessesSearchList11 === void 0 ? void 0 : (_businessesSearchList12 = _businessesSearchList11.sort(function (a, b) {
    return sortBusinessFunction(a, b);
  })) === null || _businessesSearchList12 === void 0 ? void 0 : _businessesSearchList12.map(function (business) {
    var _businessesInsideZone3;
    return /*#__PURE__*/_react.default.createElement(SingleBusinessController, {
      key: business === null || business === void 0 ? void 0 : business.id,
      business: business,
      showGoToStore: (business === null || business === void 0 ? void 0 : business.open) && (businessesInsideZone === null || businessesInsideZone === void 0 ? void 0 : (_businessesInsideZone3 = businessesInsideZone.businesses) === null || _businessesInsideZone3 === void 0 ? void 0 : _businessesInsideZone3.find(function (_business) {
        return (_business === null || _business === void 0 ? void 0 : _business.id) === (business === null || business === void 0 ? void 0 : business.id);
      }))
    });
  }))), filterByAddress && businessesSearchList.loading && _toConsumableArray(Array((paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.nextPageItems) > 4 ? 30 : 8).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SingleBusinessContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.LeftContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 230,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 180,
      height: 10
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 130,
      height: 10
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 10
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      height: 10
    })), /*#__PURE__*/_react.default.createElement(_styles.RightContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    })));
  }), !businessesSearchList.loading && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList13 = businessesSearchList.businesses) === null || _businessesSearchList13 === void 0 ? void 0 : _businessesSearchList13.length) === 0 && /*#__PURE__*/_react.default.createElement(_styles.NotFoundSourceWrapper, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_BUSINESSES', 'No businesses to delivery / pick up at this address, please change filters or change address.')
  })), !businessesSearchList.loading && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.error) && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList14 = businessesSearchList.error) === null || _businessesSearchList14 === void 0 ? void 0 : _businessesSearchList14.length) > 0 && (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList15 = businessesSearchList.businesses) === null || _businessesSearchList15 === void 0 ? void 0 : _businessesSearchList15.length) === 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeof (businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.error) === 'string' ? /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, t('ERROR', 'ERROR'), ": ", businessesSearchList === null || businessesSearchList === void 0 ? void 0 : businessesSearchList.error) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessesSearchList === null || businessesSearchList === void 0 ? void 0 : (_businessesSearchList16 = businessesSearchList.error) === null || _businessesSearchList16 === void 0 ? void 0 : _businessesSearchList16.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, {
      key: i
    }, t('ERROR', 'ERROR'), ": [", (e === null || e === void 0 ? void 0 : e.message) || e, "]");
  })))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isPreorder,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESS_FORM', 'Address Form'),
    open: modals.formOpen,
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.address) || {},
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    },
    onSaveAddress: function onSaveAddress() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        formOpen: false
      }));
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADDRESSES', 'Address List'),
    open: modals.listOpen,
    width: "70%",
    onClose: function onClose() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModals(_objectSpread(_objectSpread({}, modals), {}, {
        listOpen: false
      }));
    },
    onAccept: function onAccept() {
      return handleFindBusinesses();
    },
    isCustomerMode: isCustomerMode
  })), /*#__PURE__*/_react.default.createElement(_pfchangs2.Alert, {
    title: !mapErrors ? t('SEARCH', 'Search') : t('BUSINESSES_MAP', 'Businesses Map'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return handleCloseAlerts();
    },
    onAccept: function onAccept() {
      return handleCloseAlerts();
    },
    closeOnBackdrop: false
  })));
};
var PFChangsBusinesListing = function PFChangsBusinesListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessesListingUI,
    paginationSettings: {
      initialPage: 1,
      pageSize: 30,
      controlType: 'infinity'
    },
    isPfChangs: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessSearchList, businessListingProps);
};
exports.PFChangsBusinesListing = PFChangsBusinesListing;