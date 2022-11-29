"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _CgSearchLoading = _interopRequireDefault(require("@meronex/icons/cg/CgSearchLoading"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _reactHookForm = require("react-hook-form");
var _orderingComponents = require("ordering-components");
var _Confirm = require("../Confirm");
var _GoogleGpsButton = require("../../../../../components/GoogleGpsButton");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var inputNames = [{
  name: 'address',
  code: 'Address'
}, {
  name: 'internal_number',
  code: 'Internal number'
}, {
  name: 'zipcode',
  code: 'Zipcode'
}, {
  name: 'address_notes',
  code: 'Address notes'
}];
var AddressFormUI = function AddressFormUI(props) {
  var _addressState$address, _ref, _formState$changes$ad, _formState$changes, _addressState$address2, _addressState$address3, _addressState$address4, _formState$changes$lo, _formState$changes2, _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _configState$configs4, _configState$configs5, _configState$configs6, _configState$configs7, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _props$afterMidElemen, _props$afterMidCompon, _orderState$options6, _orderState$options6$, _props$afterComponent, _props$afterElements;
  var addressesList = props.addressesList,
    googleMapsControls = props.googleMapsControls,
    formState = props.formState,
    addressState = props.addressState,
    isRequiredField = props.isRequiredField,
    showField = props.showField,
    updateChanges = props.updateChanges,
    onCancel = props.onCancel,
    handleChangeInput = props.handleChangeInput,
    saveAddress = props.saveAddress,
    setIsEdit = props.setIsEdit,
    userCustomerSetup = props.userCustomerSetup;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var formMethods = (0, _reactHookForm.useForm)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useState = (0, _react.useState)({
      selectedFromAutocomplete: true
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useState3 = (0, _react.useState)(addressState === null || addressState === void 0 ? void 0 : (_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.tag),
    _useState4 = _slicedToArray(_useState3, 2),
    addressTag = _useState4[0],
    setAddressTag = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useState7 = (0, _react.useState)((_ref = (_formState$changes$ad = (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.address) !== null && _formState$changes$ad !== void 0 ? _formState$changes$ad : (_addressState$address2 = addressState.address) === null || _addressState$address2 === void 0 ? void 0 : _addressState$address2.address) !== null && _ref !== void 0 ? _ref : ''),
    _useState8 = _slicedToArray(_useState7, 2),
    addressValue = _useState8[0],
    setAddressValue = _useState8[1];
  var _useState9 = (0, _react.useState)({
      value: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    firstLocationNoEdit = _useState10[0],
    setFirstLocationNoEdit = _useState10[1];
  var isEditing = !!((_addressState$address3 = addressState.address) !== null && _addressState$address3 !== void 0 && _addressState$address3.id);
  var _useState11 = (0, _react.useState)(isEditing ? addressState === null || addressState === void 0 ? void 0 : (_addressState$address4 = addressState.address) === null || _addressState$address4 === void 0 ? void 0 : _addressState$address4.location : (_formState$changes$lo = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.location) !== null && _formState$changes$lo !== void 0 ? _formState$changes$lo : null),
    _useState12 = _slicedToArray(_useState11, 2),
    locationChange = _useState12[0],
    setLocationChange = _useState12[1];
  var maxLimitLocation = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.meters_to_change_address) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
  var googleMapsApiKey = configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.google_maps_api_key) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value;
  var isLocationRequired = ((_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.google_autocomplete_selection_required) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === '1' || ((_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 ? void 0 : (_configState$configs7 = _configState$configs6.google_autocomplete_selection_required) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.value) === 'true';
  var mapErrors = {
    ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
    ERROR_MAX_LIMIT_LOCATION: "Sorry, You can only set the position to ".concat(maxLimitLocation, "m")
  };
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  /**
   * Returns true when the user made no changes
   * @param {object} address
   */
  var checkAddress = function checkAddress(address, addressToCompare) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    props.forEach(function (prop) {
      if (addressToCompare[prop]) {
        if (prop === 'location') {
          var _address$prop, _addressToCompare$pro, _address$prop2, _addressToCompare$pro2;
          values.push(((_address$prop = address[prop]) === null || _address$prop === void 0 ? void 0 : _address$prop.lat) === ((_addressToCompare$pro = addressToCompare[prop]) === null || _addressToCompare$pro === void 0 ? void 0 : _addressToCompare$pro.lat) && ((_address$prop2 = address[prop]) === null || _address$prop2 === void 0 ? void 0 : _address$prop2.lng) === ((_addressToCompare$pro2 = addressToCompare[prop]) === null || _addressToCompare$pro2 === void 0 ? void 0 : _addressToCompare$pro2.lng));
        } else {
          values.push(address[prop] === addressToCompare[prop]);
        }
      } else {
        values.push(!address[prop]);
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var getAddressFormatted = function getAddressFormatted(addressChange) {
    var data = {
      address: null,
      error: null
    };
    var geocoder = window.google && new window.google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        address: addressChange
      }, function (results, status) {
        var postalCode = null;
        if (status === 'OK' && results && results.length > 0) {
          var _results$0$utc_offset, _arrayList$map$some;
          var _iterator = _createForOfIteratorHelper(results === null || results === void 0 ? void 0 : results[0].address_components),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _component$types;
              var component = _step.value;
              var addressType = (_component$types = component.types) === null || _component$types === void 0 ? void 0 : _component$types[0];
              if (addressType === 'postal_code') {
                postalCode = component.short_name;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          data.address = {
            address: addressChange,
            location: {
              lat: results === null || results === void 0 ? void 0 : results[0].geometry.location.lat(),
              lng: results === null || results === void 0 ? void 0 : results[0].geometry.location.lng()
            },
            utc_offset: (_results$0$utc_offset = results === null || results === void 0 ? void 0 : results[0].utc_offset_minutes) !== null && _results$0$utc_offset !== void 0 ? _results$0$utc_offset : 0,
            map_data: {
              library: 'google',
              place_id: results === null || results === void 0 ? void 0 : results[0].place_id
            }
          };
          if (postalCode) {
            data.address.zipcode = postalCode;
          }
          var arrayList = isEditing ? addressesList.filter(function (address) {
            var _addressState$address5;
            return address.id !== ((_addressState$address5 = addressState.address) === null || _addressState$address5 === void 0 ? void 0 : _addressState$address5.id);
          }) || [] : addressesList || [];
          var addressToCompare = isEditing ? _objectSpread(_objectSpread(_objectSpread({}, addressState.address), data.address), formState === null || formState === void 0 ? void 0 : formState.changes) : _objectSpread(_objectSpread({}, data.address), formState === null || formState === void 0 ? void 0 : formState.changes);
          var isAddressAlreadyExist = (_arrayList$map$some = arrayList.map(function (address) {
            return checkAddress(address, addressToCompare);
          }).some(function (value) {
            return value;
          })) !== null && _arrayList$map$some !== void 0 ? _arrayList$map$some : false;
          if (!isAddressAlreadyExist) {
            saveAddress(data.address, userCustomerSetup);
            return;
          }
          setAlertState({
            open: true,
            content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
          });
        } else {
          setAlertState({
            open: true,
            content: [t('ERROR_NOT_FOUND_ADDRESS', 'Error, address not found')]
          });
        }
      });
    } else {
      setAlertState({
        open: true,
        content: [t('ERROR_FAILED_LOAD_GEOCODER', 'Failed to load geocoder, please try again.')]
      });
    }
  };
  var checkKeyDown = function checkKeyDown(e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;
    if (keyCode === 13) {
      e.preventDefault();
    }
  };
  var onSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _formState$changes3, _addressState$address6, _formState$changes4, _formState$changes5, _arrayList$map$some2;
      var _formState$changes6, arrayList, addressToCompare, isAddressAlreadyExist;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!auth && (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.address) === '' && addressState !== null && addressState !== void 0 && (_addressState$address6 = addressState.address) !== null && _addressState$address6 !== void 0 && _addressState$address6.address)) {
                _context.next = 4;
                break;
              }
              setAlertState({
                open: true,
                content: [t('VALIDATION_ERROR_ADDRESS_REQUIRED', 'The field Address is required')]
              });
              setLocationChange(null);
              return _context.abrupt("return");
            case 4:
              if (!(formState !== null && formState !== void 0 && (_formState$changes4 = formState.changes) !== null && _formState$changes4 !== void 0 && _formState$changes4.address && !(formState !== null && formState !== void 0 && (_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.location))) {
                _context.next = 10;
                break;
              }
              if (!isLocationRequired) {
                _context.next = 8;
                break;
              }
              setAlertState({
                open: true,
                content: [t('ADDRESS_REQUIRE_LOCATION', 'The address needs a location, please select one of the suggested')]
              });
              return _context.abrupt("return");
            case 8:
              getAddressFormatted(formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.address);
              return _context.abrupt("return");
            case 10:
              arrayList = isEditing ? (addressesList === null || addressesList === void 0 ? void 0 : addressesList.filter(function (address) {
                var _addressState$address7;
                return (address === null || address === void 0 ? void 0 : address.id) !== (addressState === null || addressState === void 0 ? void 0 : (_addressState$address7 = addressState.address) === null || _addressState$address7 === void 0 ? void 0 : _addressState$address7.id);
              })) || [] : addressesList || [];
              addressToCompare = isEditing ? _objectSpread(_objectSpread({}, addressState.address), formState.changes) : formState === null || formState === void 0 ? void 0 : formState.changes;
              isAddressAlreadyExist = (_arrayList$map$some2 = arrayList.map(function (address) {
                return checkAddress(address, addressToCompare);
              }).some(function (value) {
                return value;
              })) !== null && _arrayList$map$some2 !== void 0 ? _arrayList$map$some2 : false;
              if (isAddressAlreadyExist) {
                _context.next = 16;
                break;
              }
              saveAddress({}, userCustomerSetup);
              return _context.abrupt("return");
            case 16:
              setAlertState({
                open: true,
                content: [t('ADDRESS_ALREADY_EXIST', 'The address already exists')]
              });
            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function onSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleAddressTag = function handleAddressTag(tag) {
    setAddressTag(tag);
    handleChangeInput({
      target: {
        name: 'tag',
        value: tag
      }
    });
  };
  var handleChangeAddress = function handleChangeAddress(address) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      selectedFromAutocomplete: true
    }));
    updateChanges(address);
  };
  var setMapErrors = function setMapErrors(errKey) {
    setAlertState({
      open: true,
      content: !(errKey === 'ERROR_MAX_LIMIT_LOCATION') ? [t(errKey, mapErrors[errKey])] : "".concat([t(errKey, mapErrors[errKey])], " ").concat(maxLimitLocation, " ").concat([t('METTERS', 'meters')])
    });
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _ref5, _formState$changes$ad3, _formState$changes9, _addressState$address8, _ref6, _formState$changes$ad4, _formState$changes10, _addressState$address9;
    if (!auth) {
      var _ref3, _formState$changes$lo2, _formState$changes7, _orderState$options, _orderState$options$a, _ref4, _formState$changes$ad2, _formState$changes8, _orderState$options2, _orderState$options2$;
      setLocationChange((_ref3 = (_formState$changes$lo2 = formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.location) !== null && _formState$changes$lo2 !== void 0 ? _formState$changes$lo2 : orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location) !== null && _ref3 !== void 0 ? _ref3 : '');
      setAddressValue((_ref4 = (_formState$changes$ad2 = formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.address) !== null && _formState$changes$ad2 !== void 0 ? _formState$changes$ad2 : orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : _orderState$options2$.address) !== null && _ref4 !== void 0 ? _ref4 : '');
      inputNames.forEach(function (field) {
        var _orderState$options3, _orderState$options4;
        return formMethods.setValue(field.name, (formState === null || formState === void 0 ? void 0 : formState.changes[field.name]) || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.address) && (orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address[field.name]) || '');
      });
      return;
    }
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
    setAddressValue((_ref5 = (_formState$changes$ad3 = formState === null || formState === void 0 ? void 0 : (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.address) !== null && _formState$changes$ad3 !== void 0 ? _formState$changes$ad3 : (_addressState$address8 = addressState.address) === null || _addressState$address8 === void 0 ? void 0 : _addressState$address8.address) !== null && _ref5 !== void 0 ? _ref5 : '');
    formMethods.setValue('address', (_ref6 = (_formState$changes$ad4 = formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.address) !== null && _formState$changes$ad4 !== void 0 ? _formState$changes$ad4 : (_addressState$address9 = addressState.address) === null || _addressState$address9 === void 0 ? void 0 : _addressState$address9.address) !== null && _ref6 !== void 0 ? _ref6 : '');
    if (!isEditing) {
      var _formState$changes11, _formState$changes12, _formState$changes13, _formState$changes14, _formState$changes15, _formState$changes16, _formState$changes16$, _firstLocationNoEdit$, _formState$changes17, _formState$changes17$, _firstLocationNoEdit$2;
      inputNames.forEach(function (field) {
        return formMethods.setValue(field.name, (formState === null || formState === void 0 ? void 0 : formState.changes[field.name]) || '');
      });
      (formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.address) && setLocationChange(formState === null || formState === void 0 ? void 0 : (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.location);
      if (formState !== null && formState !== void 0 && (_formState$changes13 = formState.changes) !== null && _formState$changes13 !== void 0 && _formState$changes13.address && (formState === null || formState === void 0 ? void 0 : (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.address) !== (firstLocationNoEdit === null || firstLocationNoEdit === void 0 ? void 0 : firstLocationNoEdit.address) && formState !== null && formState !== void 0 && (_formState$changes15 = formState.changes) !== null && _formState$changes15 !== void 0 && _formState$changes15.location && (formState === null || formState === void 0 ? void 0 : (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : (_formState$changes16$ = _formState$changes16.location) === null || _formState$changes16$ === void 0 ? void 0 : _formState$changes16$.lat) !== ((_firstLocationNoEdit$ = firstLocationNoEdit.value) === null || _firstLocationNoEdit$ === void 0 ? void 0 : _firstLocationNoEdit$.lat) && (formState === null || formState === void 0 ? void 0 : (_formState$changes17 = formState.changes) === null || _formState$changes17 === void 0 ? void 0 : (_formState$changes17$ = _formState$changes17.location) === null || _formState$changes17$ === void 0 ? void 0 : _formState$changes17$.lng) !== ((_firstLocationNoEdit$2 = firstLocationNoEdit.value) === null || _firstLocationNoEdit$2 === void 0 ? void 0 : _firstLocationNoEdit$2.lng)) {
        var _formState$changes18, _formState$changes19;
        setFirstLocationNoEdit({
          value: formState === null || formState === void 0 ? void 0 : (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.location,
          address: formState === null || formState === void 0 ? void 0 : (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.address
        });
      }
    }
    if (isEditing) {
      var _formState$changes20;
      if (formState !== null && formState !== void 0 && (_formState$changes20 = formState.changes) !== null && _formState$changes20 !== void 0 && _formState$changes20.location) {
        var _formState$changes21, _formState$changes21$, _formState$changes22, _formState$changes22$;
        var prevLocation = {
          lat: Math.trunc(locationChange === null || locationChange === void 0 ? void 0 : locationChange.lat),
          lng: Math.trunc(locationChange === null || locationChange === void 0 ? void 0 : locationChange.lng)
        };
        var newLocation = {
          lat: Math.trunc(formState === null || formState === void 0 ? void 0 : (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : (_formState$changes21$ = _formState$changes21.location) === null || _formState$changes21$ === void 0 ? void 0 : _formState$changes21$.lat),
          lng: Math.trunc(formState === null || formState === void 0 ? void 0 : (_formState$changes22 = formState.changes) === null || _formState$changes22 === void 0 ? void 0 : (_formState$changes22$ = _formState$changes22.location) === null || _formState$changes22$ === void 0 ? void 0 : _formState$changes22$.lng)
        };
        if (prevLocation.lat !== newLocation.lat && prevLocation.lng !== newLocation.lng) {
          var _formState$changes23;
          setLocationChange(formState === null || formState === void 0 ? void 0 : (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.location);
        }
      }
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    if (isEditing) {
      var _addressState$address10;
      setIsEdit && setIsEdit(true);
      setAddressValue((_addressState$address10 = addressState.address) === null || _addressState$address10 === void 0 ? void 0 : _addressState$address10.address);
    } else {
      setIsEdit && setIsEdit(false);
    }
  }, [addressState]);
  (0, _react.useEffect)(function () {
    if (!auth) {
      var _ref7, _formState$changes$lo3, _formState$changes24, _orderState$options5, _orderState$options5$;
      setLocationChange((_ref7 = (_formState$changes$lo3 = formState === null || formState === void 0 ? void 0 : (_formState$changes24 = formState.changes) === null || _formState$changes24 === void 0 ? void 0 : _formState$changes24.location) !== null && _formState$changes$lo3 !== void 0 ? _formState$changes$lo3 : orderState === null || orderState === void 0 ? void 0 : (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : _orderState$options5$.location) !== null && _ref7 !== void 0 ? _ref7 : '');
    }
    return function () {
      setFirstLocationNoEdit({
        value: null
      });
    };
  }, []);

  /** Form events control */

  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      setAlertState({
        open: true,
        content: Object.values(formMethods.errors).map(function (error) {
          return error.message;
        })
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    inputNames.forEach(function (field) {
      var _ref8, _formState$changes$fi, _formState$changes25, _addressState$address11;
      formMethods.register(field.name, {
        required: isRequiredField(field.name) ? t("VALIDATION_ERROR_".concat(field.name, "_REQUIRED"), "The field ".concat(field.code, " is required")) : null
      });
      formMethods.setValue(field.name, (_ref8 = (_formState$changes$fi = (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 ? void 0 : _formState$changes25[field.name]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : (_addressState$address11 = addressState.address) === null || _addressState$address11 === void 0 ? void 0 : _addressState$address11[field.name]) !== null && _ref8 !== void 0 ? _ref8 : '');
    });
  }, [formMethods]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "address-form"
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), (configState.loading || addressState.loading) && /*#__PURE__*/_react.default.createElement(_styles.WrapperSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 5,
    style: {
      marginBottom: '10px'
    }
  })), !configState.loading && !addressState.loading && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    onKeyDown: function onKeyDown(e) {
      return checkKeyDown(e);
    },
    autoComplete: "off"
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), inputNames.map(function (field) {
    var _configState$configs8, _configState$configs9, _addressState$address12, _formState$changes26, _ref9, _formState$changes$fi2, _formState$changes27, _addressState$address13, _ref10, _formState$changes$ad5, _formState$changes28;
    return showField && showField(field.name) && (field.name === 'address' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, /*#__PURE__*/_react.default.createElement(_styles.AddressWrap, {
      className: "google-control"
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapAddressInput, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleAutocompleteInput, {
      className: "input-autocomplete",
      apiKey: googleMapsApiKey,
      placeholder: t('ADDRESS', 'Address'),
      onChangeAddress: function onChangeAddress(e) {
        formMethods.setValue('address', e.address);
        handleChangeAddress(e);
      },
      onChange: function onChange(e) {
        handleChangeInput({
          target: {
            name: 'address',
            value: e.target.value
          }
        });
        setAddressValue(e.target.value);
      },
      value: addressValue,
      autoComplete: "new-field",
      countryCode: (configState === null || configState === void 0 ? void 0 : (_configState$configs8 = configState.configs) === null || _configState$configs8 === void 0 ? void 0 : (_configState$configs9 = _configState$configs8.country_autocomplete) === null || _configState$configs9 === void 0 ? void 0 : _configState$configs9.value) || '*'
    })), /*#__PURE__*/_react.default.createElement(_GoogleGpsButton.GoogleGpsButton, {
      className: "gps-button",
      apiKey: googleMapsApiKey,
      onAddress: function onAddress(e) {
        formMethods.setValue('address', e.address);
        handleChangeAddress(e);
      },
      onError: setMapErrors,
      IconButton: _reactBootstrapIcons.GeoAlt,
      IconLoadingButton: _CgSearchLoading.default
    })), locationChange && ((addressState === null || addressState === void 0 ? void 0 : (_addressState$address12 = addressState.address) === null || _addressState$address12 === void 0 ? void 0 : _addressState$address12.location) || (formState === null || formState === void 0 ? void 0 : (_formState$changes26 = formState.changes) === null || _formState$changes26 === void 0 ? void 0 : _formState$changes26.location)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
      apiKey: googleMapsApiKey,
      location: locationChange,
      fixedLocation: !isEditing ? firstLocationNoEdit.value : null,
      mapControls: googleMapsControls,
      handleChangeAddressMap: handleChangeAddress,
      setErrors: setMapErrors,
      maxLimitLocation: maxLimitLocation
    }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, field.name !== 'address_notes' ? /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      className: field.name,
      placeholder: t(field.name.toUpperCase(), field.code),
      value: (_ref9 = (_formState$changes$fi2 = (_formState$changes27 = formState.changes) === null || _formState$changes27 === void 0 ? void 0 : _formState$changes27[field.name]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : (_addressState$address13 = addressState.address) === null || _addressState$address13 === void 0 ? void 0 : _addressState$address13[field.name]) !== null && _ref9 !== void 0 ? _ref9 : '',
      onChange: function onChange(e) {
        formMethods.setValue(field.name, e.target.value);
        handleChangeInput({
          target: {
            name: field.name,
            value: e.target.value
          }
        });
      },
      autoComplete: "new-field",
      maxLength: 30
    }) : /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
      rows: 4,
      placeholder: t('ADDRESS_NOTES', 'Address Notes'),
      value: (_ref10 = (_formState$changes$ad5 = (_formState$changes28 = formState.changes) === null || _formState$changes28 === void 0 ? void 0 : _formState$changes28.address_notes) !== null && _formState$changes$ad5 !== void 0 ? _formState$changes$ad5 : addressState.address.address_notes) !== null && _ref10 !== void 0 ? _ref10 : '',
      onChange: function onChange(e) {
        formMethods.setValue('address_notes', e.target.value);
        handleChangeInput({
          target: {
            name: 'address_notes',
            value: e.target.value
          }
        });
      },
      autoComplete: "new-field",
      maxLength: 250
    })));
  }), !formState.loading && formState.error && /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: '#c10000'
    }
  }, formState.error), /*#__PURE__*/_react.default.createElement(_styles.AddressTagSection, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'home' ? 'active' : '',
    bgtransparent: true,
    type: "button",
    onClick: function onClick() {
      return handleAddressTag('home');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.House, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'office' ? 'active' : '',
    bgtransparent: true,
    type: "button",
    onClick: function onClick() {
      return handleAddressTag('office');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Building, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'favorite' ? 'active' : '',
    bgtransparent: true,
    type: "button",
    onClick: function onClick() {
      return handleAddressTag('favorite');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: addressTag === 'other' ? 'active' : '',
    bgtransparent: true,
    type: "button",
    onClick: function onClick() {
      return handleAddressTag('other');
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusLg, null)))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    disabled: formState.loading,
    onClick: function onClick() {
      return onCancel();
    }
  }, t('CANCEL', 'Cancel')), Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "submit-btn",
    type: "submit",
    disabled: formState.loading,
    color: "primary"
  }, !formState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEditing || !auth && (_orderState$options6 = orderState.options) !== null && _orderState$options6 !== void 0 && (_orderState$options6$ = _orderState$options6.address) !== null && _orderState$options6$ !== void 0 && _orderState$options6$.address ? t('UPDATE', 'Update') : t('ADD_ADDRESS', 'Add address')) : t('LOADING', 'Loading')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ADDRESS', 'Address'),
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
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var AddressForm = function AddressForm(props) {
  var googleMapsControls = {
    defaultZoom: 17,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'roadmap',
    // 'roadmap', 'satellite', 'hybrid', 'terrain'
    mapTypeControl: true,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite']
    },
    isMarkerDraggable: true
  };
  var addressFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressFormUI,
    googleMapsControls: googleMapsControls,
    isSelectedAfterAdd: true
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.AddressForm, addressFormProps);
};
exports.AddressForm = AddressForm;