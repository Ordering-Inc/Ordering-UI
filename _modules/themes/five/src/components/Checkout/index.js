"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _moment = _interopRequireDefault(require("moment"));
var _Modal = require("../Modal");
var _orderingComponents = require("ordering-components");
var _UpsellingPage = require("../UpsellingPage");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactRouterDom = require("react-router-dom");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _EnChevronWithCircleLeft = _interopRequireDefault(require("@meronex/icons/en/EnChevronWithCircleLeft"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
var _NotFoundSource = require("../NotFoundSource");
var _AddressDetails = require("../AddressDetails");
var _UserDetails = require("../UserDetails");
var _pfchangs = require("../UserDetails/layouts/pfchangs");
var _PaymentOptions = require("../PaymentOptions");
var _PaymentOptionWallet = require("../PaymentOptionWallet");
var _DriverTips = require("../DriverTips");
var _Cart = require("../Cart");
var _pfchangs2 = require("../Cart/layouts/pfchangs");
var _Confirm = require("../Confirm");
var _pfchangs3 = require("../Confirm/layouts/pfchangs");
var _CartContent = require("../CartContent");
var _Select = require("../../styles/Select");
var _PlaceSpot = require("../PlaceSpot");
var _VaXMiCuenta = require("../VaXMiCuenta");
var _pfchangs4 = require("../MomentContent/layouts/pfchangs");
var _utils = require("../../../../../utils");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
var mapConfigs = {
  mapZoom: 16,
  mapSize: {
    width: 640,
    height: 190
  }
};
var CheckoutUI = function CheckoutUI(props) {
  var _businessDetails$busi, _businessDetails$busi2, _businessConfigs$find, _businessConfigs$find2, _configs$cash_wallet, _configs$wallet_enabl, _theme$layouts, _theme$layouts$checko, _theme$layouts$checko2, _theme$layouts$checko3, _theme$layouts2, _theme$layouts2$gener, _theme$layouts2$gener2, _theme$layouts2$gener3, _businessDetails$busi3, _businessDetails$busi4, _configs$webview_chec, _configs$webview_chec2, _configs$brands_wow_l, _configs$brands_wow_l2, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _configs$driver_tip_o, _configs$driver_tip_o2, _configs$driver_tip_o3, _instructionsOptions$, _instructionsOptions$2, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _Object$values, _cart$business3, _cart$business5, _businessDetails$busi5, _businessDetails$busi6, _theme$images, _theme$images$dummies, _configs$google_maps_, _customerState$user, _customerState$user2, _businessDetails$busi7, _businessDetails$busi8, _businessDetails$busi9, _businessDetails$busi10, _businessDetails$erro, _businessDetails$erro2, _configs$driver_tip_t, _configs$driver_tip_t2, _businessDetails$busi11, _businessDetails$busi12, _businessDetails$busi13, _businessDetails$busi14, _businessDetails$busi15, _cartState$cart$spot_, _cartState$cart, _configs$driver_tip_t3, _configs$driver_tip_u, _configs$driver_tip_t4, _cart$products2, _theme$images2, _theme$images2$genera, _wowAcumulationPoints, _validationFields$fie18, _validationFields$fie19, _validationFields$fie20, _validationFields$fie21, _validationFields$fie22, _validationFields$fie23, _customerState$user3, _paymethodSelected$da3, _paymethodSelected$da4, _paymethodSelected$da5, _paymethodSelected$da6, _paymethodSelected$da7, _paymethodSelected$da8, _paymethodSelected$da9, _paymethodSelected$da10, _paymethodSelected$da11;
  var cart = props.cart,
    errors = props.errors,
    placing = props.placing,
    cartState = props.cartState,
    useKioskApp = props.useKioskApp,
    businessDetails = props.businessDetails,
    paymethodSelected = props.paymethodSelected,
    handlePaymethodChange = props.handlePaymethodChange,
    handlerClickPlaceOrder = props.handlerClickPlaceOrder,
    handleOrderRedirect = props.handleOrderRedirect,
    isCustomerMode = props.isCustomerMode,
    isResetPaymethod = props.isResetPaymethod,
    setIsResetPaymethod = props.setIsResetPaymethod,
    handleChangeDeliveryOption = props.handleChangeDeliveryOption,
    instructionsOptions = props.instructionsOptions,
    deliveryOptionSelected = props.deliveryOptionSelected,
    handleStoreRedirect = props.handleStoreRedirect,
    onPlaceOrderClick = props.onPlaceOrderClick,
    defaultOptionsVaXMiCuenta = props.defaultOptionsVaXMiCuenta,
    vaXMiCuenta = props.vaXMiCuenta,
    handleChangeVaXMiCuenta = props.handleChangeVaXMiCuenta,
    uberDirect = props.uberDirect,
    applyCoupon = props.applyCoupon,
    hasCateringProducts = props.hasCateringProducts,
    cateringHours = props.cateringHours,
    wowAcumulationPoints = props.wowAcumulationPoints,
    configSlug = props.configSlug,
    isCSVPopup = props.isCSVPopup;
  var theme = (0, _styledComponents.useTheme)();
  var _useValidationFields = (0, _orderingComponents.useValidationFields)(),
    _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
    validationFields = _useValidationFields2[0];
  // const [{ options, loading }, { changePaymethod }] = useOrder()
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    _useOrder2$ = _useOrder2[0],
    options = _useOrder2$.options,
    loading = _useOrder2$.loading,
    _useOrder2$2 = _useOrder2[1],
    refreshOrderOptions = _useOrder2$2.refreshOrderOptions,
    applyOffer = _useOrder2$2.applyOffer;
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var isValidMinimum = (cart === null || cart === void 0 ? void 0 : cart.minimum) < (cart === null || cart === void 0 ? void 0 : cart.subtotal_with_discount) + (cart === null || cart === void 0 ? void 0 : cart.tax_after_discount);
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    _useSession2$ = _useSession2[0],
    user = _useSession2$.user,
    token = _useSession2$.token;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    customerState = _useCustomer2[0];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var history = (0, _reactRouterDom.useHistory)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openCardCSV = _useState2[0],
    setOpenCardCSV = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    openAddressNotes = _useState4[0],
    setOpenAddressNotes = _useState4[1];
  var _useState5 = (0, _react.useState)({
      cardSecurityCode: '',
      addressNotes: ''
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    values = _useState6[0],
    setValues = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    errorsCheckout = _useState8[0],
    setErrorsCheckout = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    errorCash = _useState10[0],
    setErrorCash = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    userErrors = _useState12[0],
    setUserErrors = _useState12[1];
  var _useState13 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    alertState = _useState14[0],
    setAlertState = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    isUserDetailsEdit = _useState16[0],
    setIsUserDetailsEdit = _useState16[1];
  var _useState17 = (0, _react.useState)(null),
    _useState18 = _slicedToArray(_useState17, 2),
    behalfName = _useState18[0],
    setBehalfName = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isOpen = _useState20[0],
    setIsOpen = _useState20[1];
  var _useState21 = (0, _react.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    requiredFields = _useState22[0],
    setRequiredFields = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isSuccess = _useState24[0],
    setIsSuccess = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isHideCash = _useState26[0],
    setHideCash = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    cateringDayError = _useState28[0],
    setCateringDayError = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    openAlertCatering = _useState30[0],
    setOpenAlertCatering = _useState30[1];
  var businessConfigs = (_businessDetails$busi = businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.configs) !== null && _businessDetails$busi !== void 0 ? _businessDetails$busi : [];
  var isWalletCashEnabled = ((_businessConfigs$find = businessConfigs.find(function (config) {
    return config.key === 'wallet_cash_enabled';
  })) === null || _businessConfigs$find === void 0 ? void 0 : _businessConfigs$find.value) === '1';
  var isWalletCreditPointsEnabled = ((_businessConfigs$find2 = businessConfigs.find(function (config) {
    return config.key === 'wallet_credit_point_enabled';
  })) === null || _businessConfigs$find2 === void 0 ? void 0 : _businessConfigs$find2.value) === '1';
  var isWalletEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$cash_wallet = configs.cash_wallet) === null || _configs$cash_wallet === void 0 ? void 0 : _configs$cash_wallet.value) && (configs === null || configs === void 0 ? void 0 : (_configs$wallet_enabl = configs.wallet_enabled) === null || _configs$wallet_enabl === void 0 ? void 0 : _configs$wallet_enabl.value) === '1' && (isWalletCashEnabled || isWalletCreditPointsEnabled) && !useKioskApp;
  var layout = theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$checko = _theme$layouts.checkout) === null || _theme$layouts$checko === void 0 ? void 0 : (_theme$layouts$checko2 = _theme$layouts$checko.components) === null || _theme$layouts$checko2 === void 0 ? void 0 : (_theme$layouts$checko3 = _theme$layouts$checko2.layout) === null || _theme$layouts$checko3 === void 0 ? void 0 : _theme$layouts$checko3.type;
  var AlertComponent = (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$gener = _theme$layouts2.general) === null || _theme$layouts2$gener === void 0 ? void 0 : (_theme$layouts2$gener2 = _theme$layouts2$gener.components) === null || _theme$layouts2$gener2 === void 0 ? void 0 : (_theme$layouts2$gener3 = _theme$layouts2$gener2.layout) === null || _theme$layouts2$gener3 === void 0 ? void 0 : _theme$layouts2$gener3.type) === 'pfchangs' ? _pfchangs3.Alert : _Confirm.Alert;
  var placeSpotTypes = [3, 4, 5];
  var placeSpotsEnabled = placeSpotTypes.includes(options === null || options === void 0 ? void 0 : options.type) && !useKioskApp;
  var brandInformation = {
    brand_id: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.brand_id,
    branch_id: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.integration_id
  };
  // const [hasBusinessPlaces, setHasBusinessPlaces] = useState(null)

  var daysForApplyCoupon = [0, 2, 4]; // Domingo 0
  var isApplyMasterCoupon = !(hasCateringProducts !== null && hasCateringProducts !== void 0 && hasCateringProducts.result) && daysForApplyCoupon.includes((0, _moment.default)().days());
  var isShowDeUnaCheckout = (configs === null || configs === void 0 ? void 0 : (_configs$webview_chec = configs.webview_checkout_deuna) === null || _configs$webview_chec === void 0 ? void 0 : _configs$webview_chec.value) === '1' || (configs === null || configs === void 0 ? void 0 : (_configs$webview_chec2 = configs.webview_checkout_deuna) === null || _configs$webview_chec2 === void 0 ? void 0 : _configs$webview_chec2.value) === true;
  var loyaltyBrands = (configs === null || configs === void 0 ? void 0 : (_configs$brands_wow_l = configs.brands_wow_loyalty_program) === null || _configs$brands_wow_l === void 0 ? void 0 : _configs$brands_wow_l.value) && JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$brands_wow_l2 = configs.brands_wow_loyalty_program) === null || _configs$brands_wow_l2 === void 0 ? void 0 : _configs$brands_wow_l2.value)[0];
  var isDisablePlaceOrderButton = !(cart !== null && cart !== void 0 && cart.valid) || !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 || placing || errorCash || loading || !(cart !== null && cart !== void 0 && cart.valid_maximum) || !isValidMinimum && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ||
  // (((placeSpotTypes.includes(options?.type) && !cart?.place) && hasBusinessPlaces)) ||
  options.type === 1 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie = validationFields.fields) === null || _validationFields$fie === void 0 ? void 0 : (_validationFields$fie2 = _validationFields$fie.checkout) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.driver_tip) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.enabled) && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : (_validationFields$fie5 = _validationFields$fie4.checkout) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.driver_tip) === null || _validationFields$fie6 === void 0 ? void 0 : _validationFields$fie6.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 || cateringDayError || (hasCateringProducts === null || hasCateringProducts === void 0 ? void 0 : hasCateringProducts.loading);
  var driverTipsOptions = typeof (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o = configs.driver_tip_options) === null || _configs$driver_tip_o === void 0 ? void 0 : _configs$driver_tip_o.value) === 'string' ? JSON.parse(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o2 = configs.driver_tip_options) === null || _configs$driver_tip_o2 === void 0 ? void 0 : _configs$driver_tip_o2.value) || [] : (configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_o3 = configs.driver_tip_options) === null || _configs$driver_tip_o3 === void 0 ? void 0 : _configs$driver_tip_o3.value) || [];
  var deliveryOptions = (instructionsOptions === null || instructionsOptions === void 0 ? void 0 : instructionsOptions.result) && (instructionsOptions === null || instructionsOptions === void 0 ? void 0 : (_instructionsOptions$ = instructionsOptions.result) === null || _instructionsOptions$ === void 0 ? void 0 : (_instructionsOptions$2 = _instructionsOptions$.filter(function (option) {
    return option === null || option === void 0 ? void 0 : option.enabled;
  })) === null || _instructionsOptions$2 === void 0 ? void 0 : _instructionsOptions$2.map(function (option) {
    return {
      value: option === null || option === void 0 ? void 0 : option.id,
      content: t(option === null || option === void 0 ? void 0 : option.name.toUpperCase().replace(/\s/g, '_'), option === null || option === void 0 ? void 0 : option.name),
      showOnSelected: t(option === null || option === void 0 ? void 0 : option.name.toUpperCase().replace(/\s/g, '_'), option === null || option === void 0 ? void 0 : option.name)
    };
  }));
  var deliveryTipsAvailable = !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.business_id) && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie7 = validationFields.fields) === null || _validationFields$fie7 === void 0 ? void 0 : (_validationFields$fie8 = _validationFields$fie7.checkout) === null || _validationFields$fie8 === void 0 ? void 0 : (_validationFields$fie9 = _validationFields$fie8.driver_tip) === null || _validationFields$fie9 === void 0 ? void 0 : _validationFields$fie9.enabled) && driverTipsOptions.length > 0 && !useKioskApp;
  var businessInformationLoading = ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.loading) || cartState.loading) && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.error);
  var businessInformationAvailable = !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && ((_Object$values = Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business)) === null || _Object$values === void 0 ? void 0 : _Object$values.length) > 0;
  var handlePlaceOrder = function handlePlaceOrder(csvID) {
    if (!userErrors.length && !(requiredFields !== null && requiredFields !== void 0 && requiredFields.length)) {
      var body = {};
      var paymentOptions = {};
      if (behalfName) {
        body.on_behalf_of = behalfName;
      }
      if (paymethodSelected.gateway === 'wow_rewards') {
        paymentOptions = _objectSpread({
          email: user === null || user === void 0 ? void 0 : user.email
        }, brandInformation);
      }
      if (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.id) {
        body.paymethod_id = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id;
      }
      if (csvID) {
        paymentOptions = _objectSpread(_objectSpread({}, paymentOptions), {}, {
          data: {
            externalcardid: csvID
          }
        });
      }
      handlerClickPlaceOrder && handlerClickPlaceOrder(paymentOptions, body);
      return;
    }
    if (requiredFields !== null && requiredFields !== void 0 && requiredFields.length) {
      setIsOpen(true);
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
  var closeCateringAlert = function closeCateringAlert() {
    setOpenAlertCatering(false);
  };
  var checkValidationFields = function checkValidationFields() {
    var _validationFields$fie10, _validationFields$fie11, _validationFields$fie12, _validationFields$fie13, _validationFields$fie14, _validationFields$fie15, _validationFields$fie16, _configs$verification;
    setUserErrors([]);
    var errors = [];
    var notFields = ['coupon', 'driver_tip', 'mobile_phone', 'address', 'zipcode', 'address_notes'];
    var userSelected = isCustomerMode ? customerState.user : user;
    var _requiredFields = [];
    Object.values(validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie10 = validationFields.fields) === null || _validationFields$fie10 === void 0 ? void 0 : _validationFields$fie10.checkout).map(function (field) {
      if (field !== null && field !== void 0 && field.enabled && field !== null && field !== void 0 && field.required && !notFields.includes(field.code)) {
        if (userSelected && !userSelected[field === null || field === void 0 ? void 0 : field.code]) {
          _requiredFields.push(field === null || field === void 0 ? void 0 : field.code);
        }
      }
    });
    if (userSelected && !(userSelected !== null && userSelected !== void 0 && userSelected.cellphone) && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie11 = validationFields.fields) !== null && _validationFields$fie11 !== void 0 && (_validationFields$fie12 = _validationFields$fie11.checkout) !== null && _validationFields$fie12 !== void 0 && (_validationFields$fie13 = _validationFields$fie12.cellphone) !== null && _validationFields$fie13 !== void 0 && _validationFields$fie13.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie14 = validationFields.fields) !== null && _validationFields$fie14 !== void 0 && (_validationFields$fie15 = _validationFields$fie14.checkout) !== null && _validationFields$fie15 !== void 0 && (_validationFields$fie16 = _validationFields$fie15.cellphone) !== null && _validationFields$fie16 !== void 0 && _validationFields$fie16.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1')) {
      _requiredFields.push('cellphone');
    }
    setRequiredFields(_requiredFields);
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
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, value)));
  };
  var checkAddressNote = function checkAddressNote(isCSV) {
    var _options$address;
    if (!(options !== null && options !== void 0 && (_options$address = options.address) !== null && _options$address !== void 0 && _options$address.address_notes)) {
      setOpenAddressNotes(true);
      return;
    }
    isCSV ? setOpenCardCSV(true) : handlePlaceOrder();
  };
  var handleSubmitAddressNotes = function handleSubmitAddressNotes(e) {
    var _values$addressNotes;
    e.preventDefault();
    var numeroPalabras = values === null || values === void 0 ? void 0 : (_values$addressNotes = values.addressNotes) === null || _values$addressNotes === void 0 ? void 0 : _values$addressNotes.split(' ').length;
    if (values.addressNotes === '' || numeroPalabras < 3) {
      setErrorsCheckout({
        addressNotes: false,
        addressBorder: true
      });
      return;
    }
    saveAddress({
      address_notes: values.addressNotes
    });
    refreshOrderOptions();
    setOpenAddressNotes(false);
    ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'openpay' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'openpay_mastercard') && isCSVPopup ? setOpenCardCSV(true) : handlePlaceOrder();
  };
  var saveAddress = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _options$address2, _yield$ordering$users, content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ordering.users(user.id).addresses(options === null || options === void 0 ? void 0 : (_options$address2 = options.address) === null || _options$address2 === void 0 ? void 0 : _options$address2.id).save(_objectSpread({}, values), {
                token: token
              });
            case 3:
              _yield$ordering$users = _context.sent;
              content = _yield$ordering$users.content;
              if (!content.error) {}
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    return function saveAddress(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleSubmit = function handleSubmit(e) {
    var _paymethodSelected$da, _paymethodSelected$da2;
    e.preventDefault();
    if ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.brandCardName) === 'american_express' && values.cardSecurityCode.length !== 4 || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da2 = paymethodSelected.data) === null || _paymethodSelected$da2 === void 0 ? void 0 : _paymethodSelected$da2.brandCardName) !== 'american_express' && values.cardSecurityCode.length !== 3) {
      setErrorsCheckout({
        csv: false,
        border: true
      });
    } else {
      setErrorsCheckout({});
      setOpenCardCSV(false);
      setOpenAddressNotes(false);
      handlePlaceOrder(values === null || values === void 0 ? void 0 : values.cardSecurityCode);
      setValues({
        cardSecurityCode: ''
      });
    }
  };
  var handleCartPlaced = function handleCartPlaced(cart) {
    handleOrderRedirect(cart.order.uuid);
  };
  (0, _react.useEffect)(function () {
    var _validationFields$fie17;
    if (validationFields && validationFields !== null && validationFields !== void 0 && (_validationFields$fie17 = validationFields.fields) !== null && _validationFields$fie17 !== void 0 && _validationFields$fie17.checkout) {
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
  (0, _react.useEffect)(function () {
    if (uberDirect !== null && uberDirect !== void 0 && uberDirect.amountToHide && !((cart === null || cart === void 0 ? void 0 : cart.total) <= uberDirect.amountToHide) && (options === null || options === void 0 ? void 0 : options.type) === 1) {
      setHideCash(true);
      if (paymethodSelected === null || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'cash') return;
      handlePaymethodChange(null);
    } else {
      setHideCash(false);
    }
  }, [uberDirect, cart, options, paymethodSelected]);
  (0, _react.useEffect)(function () {
    var _configs$advanced_off;
    if (!(configs !== null && configs !== void 0 && (_configs$advanced_off = configs.advanced_offers_module) !== null && _configs$advanced_off !== void 0 && _configs$advanced_off.value) && ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'openpay' || hasCateringProducts !== null && hasCateringProducts !== void 0 && hasCateringProducts.result) && !cartState.loading && cart !== null && cart !== void 0 && cart.coupon && (cart === null || cart === void 0 ? void 0 : cart.coupon) === 'DLVMASTER30') {
      applyCoupon({
        business_id: cart === null || cart === void 0 ? void 0 : cart.business_id,
        coupon: null
      });
    }
    if (!cartState.loading && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'openpay' && (paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.data && Object.keys(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data).length === 0 || !(paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.data))) {
      handlePaymethodChange(null);
    }
  }, [paymethodSelected, cartState.loading]);
  (0, _react.useEffect)(function () {
    var _cart$products, _cart$business;
    if (cart !== null && cart !== void 0 && (_cart$products = cart.products) !== null && _cart$products !== void 0 && _cart$products.length) return;
    if (cart !== null && cart !== void 0 && (_cart$business = cart.business) !== null && _cart$business !== void 0 && _cart$business.slug) {
      var _cart$business2;
      handleStoreRedirect(cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.slug);
    }
  }, [cart === null || cart === void 0 ? void 0 : cart.products]);
  (0, _react.useEffect)(function () {
    if (hasCateringProducts !== null && hasCateringProducts !== void 0 && hasCateringProducts.result) {
      setOpenAlertCatering(true);
    }
  }, [hasCateringProducts]);
  (0, _react.useEffect)(function () {
    events.emit('in-checkout', cart);
  }, []);
  (0, _react.useEffect)(function () {
    events.on('cart_placed', handleCartPlaced);
    return function () {
      events.off('cart_placed', handleCartPlaced);
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _configs$advanced_off2;
    if (!isApplyMasterCoupon || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'openpay_mastercard' || cartState.loading) return;
    if (configs !== null && configs !== void 0 && (_configs$advanced_off2 = configs.advanced_offers_module) !== null && _configs$advanced_off2 !== void 0 && _configs$advanced_off2.value && (cart === null || cart === void 0 ? void 0 : cart.offers.length) === 0 && (cart === null || cart === void 0 ? void 0 : cart.paymethod_id) === (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id)) {
      var dataOffer = {
        business_id: cart === null || cart === void 0 ? void 0 : cart.business_id,
        user_id: cart === null || cart === void 0 ? void 0 : cart.user_id,
        offer_id: parseInt(t('MARKETPLACE_OFFER_ID_MASTERCARD', '4432')),
        force: true
      };
      applyOffer(dataOffer);
    }
  }, [isApplyMasterCoupon, paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway, cart === null || cart === void 0 ? void 0 : cart.paymethod_id]);
  var CartComponent = layout === 'pfchangs' ? _pfchangs2.Cart : _Cart.Cart;
  var UserDetailsComponent = layout === 'pfchangs' ? _pfchangs.UserDetails : _UserDetails.UserDetails;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isShowDeUnaCheckout ? /*#__PURE__*/_react.default.createElement(_styles.IframeMainContainer, null, layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (cart === null || cart === void 0 ? void 0 : (_cart$business3 = cart.business) === null || _cart$business3 === void 0 ? void 0 : _cart$business3.slug) && /*#__PURE__*/_react.default.createElement(_styles.GoToMenu, {
    onClick: function onClick() {
      var _cart$business4;
      return handleStoreRedirect(cart === null || cart === void 0 ? void 0 : (_cart$business4 = cart.business) === null || _cart$business4 === void 0 ? void 0 : _cart$business4.slug);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ColumnDivider, null), /*#__PURE__*/_react.default.createElement(_styles.BackIcon, null, /*#__PURE__*/_react.default.createElement(_EnChevronWithCircleLeft.default, {
    color: theme.colors.primary
  })), /*#__PURE__*/_react.default.createElement("p", null, t('MENU', 'Menu')))), /*#__PURE__*/_react.default.createElement(_styles.IframeContainer, null, /*#__PURE__*/_react.default.createElement("iframe", {
    src: t("IFRAME_DEUNA_MARKETPLACE_".concat(configSlug.toUpperCase()), 'https://vips-staging.tryordering.com/checkout/791c99ba-f103-47e7-a76d-18a2032be505'),
    width: "100%",
    height: "100%",
    loading: "true",
    sandbox: "allow-scripts allow-modals allow-same-origin allow-popups allow-forms allow-popups-to-escape-sandbox",
    referrerPolicy: "same-origin origin-when-cross-origin"
  }))) : /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperLeftContent, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowLeft, {
    className: "back-arrow",
    onClick: function onClick() {
      return history.goBack();
    }
  }), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), /*#__PURE__*/_react.default.createElement("h2", {
    className: "checkout-title"
  }, t('CHECK_OUT', 'Checkout'))), layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (cart === null || cart === void 0 ? void 0 : (_cart$business5 = cart.business) === null || _cart$business5 === void 0 ? void 0 : _cart$business5.slug) && /*#__PURE__*/_react.default.createElement(_styles.GoToMenu, {
    onClick: function onClick() {
      var _cart$business6;
      return handleStoreRedirect(cart === null || cart === void 0 ? void 0 : (_cart$business6 = cart.business) === null || _cart$business6 === void 0 ? void 0 : _cart$business6.slug);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ColumnDivider, null), /*#__PURE__*/_react.default.createElement(_styles.BackIcon, null, /*#__PURE__*/_react.default.createElement(_EnChevronWithCircleLeft.default, {
    color: theme.colors.primary
  })), /*#__PURE__*/_react.default.createElement("p", null, t('MENU', 'Menu'))), /*#__PURE__*/_react.default.createElement(_styles.SubtitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('YOUR_INFORMATION', 'Your Information')))), !useKioskApp ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessDetails !== null && businessDetails !== void 0 && businessDetails.loading || cartState.loading ? /*#__PURE__*/_react.default.createElement("div", {
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
    location: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.location,
    businessLogo: (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi6 = businessDetails.business) === null || _businessDetails$busi6 === void 0 ? void 0 : _businessDetails$busi6.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo),
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    apiKey: configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value,
    mapConfigs: mapConfigs,
    isCustomerMode: isCustomerMode
  }), /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserDetails, null, cartState.loading || isCustomerMode && !(customerState !== null && customerState !== void 0 && (_customerState$user = customerState.user) !== null && _customerState$user !== void 0 && _customerState$user.id) ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  })) : /*#__PURE__*/_react.default.createElement(UserDetailsComponent, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 ? void 0 : (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id),
    isSuccess: isSuccess,
    isCheckout: true,
    isEdit: layout === 'pfchangs'
  }))), layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, businessInformationLoading && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
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
  }))), businessInformationAvailable && layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi7 = businessDetails.business) === null || _businessDetails$busi7 === void 0 ? void 0 : _businessDetails$busi7.address), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi8 = businessDetails.business) === null || _businessDetails$busi8 === void 0 ? void 0 : _businessDetails$busi8.name), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi9 = businessDetails.business) === null || _businessDetails$busi9 === void 0 ? void 0 : _businessDetails$busi9.email), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi10 = businessDetails.business) === null || _businessDetails$busi10 === void 0 ? void 0 : _businessDetails$busi10.cellphone))), (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error) && (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$erro = businessDetails.error) === null || _businessDetails$erro === void 0 ? void 0 : _businessDetails$erro.length) > 0 && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$erro2 = businessDetails.error[0]) === null || _businessDetails$erro2 === void 0 ? void 0 : _businessDetails$erro2.message) || (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error[0])
  }))), layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.CheckOutDivider, null)) : /*#__PURE__*/_react.default.createElement(_styles.WrapperActionsInput, null, /*#__PURE__*/_react.default.createElement("h1", null, t('WHATS_YOUR_NAME', "What's your name?")), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: t('WRITE_YOUR_NAME', 'Write your name'),
    autoComplete: "off",
    onChange: function onChange(e) {
      var _e$target2;
      return setBehalfName(e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
    }
  })), cartState.loading && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 55,
    style: {
      marginBottom: '10px'
    }
  }))), !useKioskApp && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'pfchangs' && !(hasCateringProducts !== null && hasCateringProducts !== void 0 && hasCateringProducts.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_pfchangs4.MomentContent, {
    hasCateringProducts: hasCateringProducts === null || hasCateringProducts === void 0 ? void 0 : hasCateringProducts.result,
    cateringHours: cateringHours,
    cateringDayError: cateringDayError,
    setCateringDayError: setCateringDayError
  })), !cartState.loading && deliveryOptionSelected !== undefined && (options === null || options === void 0 ? void 0 : options.type) === 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.SubtitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_DETAILS', 'Delivery Details'))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryOptionsContainer, null, layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_DETAILS', 'Delivery Details')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: deliveryOptionSelected,
    options: deliveryOptions,
    onChange: function onChange(val) {
      return handleChangeDeliveryOption(val);
    }
  }))), layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.CheckOutDivider, null)), deliveryTipsAvailable && layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.SubtitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('ADD_TIP', 'Add Tip'))), /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 1,
    driverTip: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t2 = configs.driver_tip_type) === null || _configs$driver_tip_t2 === void 0 ? void 0 : _configs$driver_tip_t2.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true,
    pfchangs: true
  }))), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.SubtitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_METHODS', 'Payment Methods'))), /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHODS', 'Payment Methods')), !cartState.loading && (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), isApplyMasterCoupon && !(hasCateringProducts !== null && hasCateringProducts !== void 0 && hasCateringProducts.loading) && /*#__PURE__*/_react.default.createElement(_styles.MasterCardCoupon, null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://d347gjkxx0g7x1.cloudfront.net/wow-plus/banners/dev/Banner_APP_Wow_MasterCard.jpg"
  })), /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    cart: cart,
    useKioskApp: useKioskApp,
    isDisabled: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    businessId: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi11 = businessDetails.business) === null || _businessDetails$busi11 === void 0 ? void 0 : _businessDetails$busi11.id,
    isLoading: businessDetails.loading,
    paymethods: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi12 = businessDetails.business) === null || _businessDetails$busi12 === void 0 ? void 0 : _businessDetails$busi12.paymethods,
    onPaymentChange: handlePaymethodChange,
    errorCash: errorCash,
    setErrorCash: setErrorCash,
    handleOrderRedirect: handleOrderRedirect,
    isCustomerMode: isCustomerMode,
    paySelected: paymethodSelected,
    handlePlaceOrder: handlePlaceOrder,
    onPlaceOrderClick: onPlaceOrderClick,
    brandInformation: brandInformation,
    isHideCash: isHideCash,
    isApplyMasterCoupon: isApplyMasterCoupon,
    hasCateringProducts: hasCateringProducts
  }))), isWalletEnabled && !(businessDetails !== null && businessDetails !== void 0 && businessDetails.loading) && /*#__PURE__*/_react.default.createElement(_styles.WalletPaymentOptionContainer, null, /*#__PURE__*/_react.default.createElement(_PaymentOptionWallet.PaymentOptionWallet, {
    cart: cart,
    businessConfigs: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi13 = businessDetails.business) === null || _businessDetails$busi13 === void 0 ? void 0 : _businessDetails$busi13.configs
  })))), /*#__PURE__*/_react.default.createElement(_styles.WrapperRightContainer, null, layout === 'pfchangs' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, businessInformationLoading && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }))), !vaXMiCuenta.loading && defaultOptionsVaXMiCuenta.enable && /*#__PURE__*/_react.default.createElement(_VaXMiCuenta.VaXMiCuenta, {
    defaultOptionsVaXMiCuenta: defaultOptionsVaXMiCuenta,
    vaXMiCuenta: vaXMiCuenta,
    handleChangeVaXMiCuenta: handleChangeVaXMiCuenta
  }), businessInformationAvailable && /*#__PURE__*/_react.default.createElement(_styles.BusinessDetails, null, /*#__PURE__*/_react.default.createElement("img", {
    src: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi14 = businessDetails.business) === null || _businessDetails$busi14 === void 0 ? void 0 : _businessDetails$busi14.header
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi15 = businessDetails.business) === null || _businessDetails$busi15 === void 0 ? void 0 : _businessDetails$busi15.name), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      var _cart$business7, _cart$business8;
      return (cart === null || cart === void 0 ? void 0 : (_cart$business7 = cart.business) === null || _cart$business7 === void 0 ? void 0 : _cart$business7.slug) && handleStoreRedirect(cart === null || cart === void 0 ? void 0 : (_cart$business8 = cart.business) === null || _cart$business8 === void 0 ? void 0 : _cart$business8.slug);
    }
  }, t('GO_TO_BUSINESS', 'Go to business'))))), !cartState.loading && placeSpotsEnabled && /*#__PURE__*/_react.default.createElement(_styles.SelectSpotContainer, null, /*#__PURE__*/_react.default.createElement(_PlaceSpot.PlaceSpot, {
    isCheckout: true,
    isInputMode: true,
    isHomeStyle: true,
    cart: cart,
    spotNumberDefault: (_cartState$cart$spot_ = cartState === null || cartState === void 0 ? void 0 : (_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.spot_number) !== null && _cartState$cart$spot_ !== void 0 ? _cartState$cart$spot_ : cart === null || cart === void 0 ? void 0 : cart.spot_number,
    vehicleDefault: cart === null || cart === void 0 ? void 0 : cart.vehicle
  })), deliveryTipsAvailable && layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIPS', 'Driver Tips')), /*#__PURE__*/_react.default.createElement("p", null, t('100%_OF_THE_TIP_YOUR_DRIVER', '100% of the tip goes to your driver')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: driverTipsOptions,
    isFixedPrice: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t3 = configs.driver_tip_type) === null || _configs$driver_tip_t3 === void 0 ? void 0 : _configs$driver_tip_t3.value, 10) === 1,
    isDriverTipUseCustom: !!parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10),
    driverTip: parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t4 = configs.driver_tip_type) === null || _configs$driver_tip_t4 === void 0 ? void 0 : _configs$driver_tip_t4.value, 10) === 1 ? cart === null || cart === void 0 ? void 0 : cart.driver_tip : cart === null || cart === void 0 ? void 0 : cart.driver_tip_rate,
    cart: cart,
    useOrderContext: true
  })), /*#__PURE__*/_react.default.createElement(_styles.DriverTipDivider, null)), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, layout !== 'pfchangs' && /*#__PURE__*/_react.default.createElement(_styles.CartHeader, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MOBILE_FRONT_YOUR_ORDER', 'Your order')), /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      var _cart$business9;
      return (cart === null || cart === void 0 ? void 0 : (_cart$business9 = cart.business) === null || _cart$business9 === void 0 ? void 0 : _cart$business9.slug) && handleStoreRedirect(cart === null || cart === void 0 ? void 0 : cart.business);
    }
  }, ('ADD_PRODUCTS', 'Add products'))), /*#__PURE__*/_react.default.createElement(CartComponent, {
    isCartPending: (cart === null || cart === void 0 ? void 0 : cart.status) === 2,
    cart: cart,
    useKioskApp: useKioskApp,
    isCheckout: true,
    isProducts: (cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.length) || 0,
    hasCateringProducts: hasCateringProducts
  })), !(wowAcumulationPoints !== null && wowAcumulationPoints !== void 0 && wowAcumulationPoints.loading) && !(wowAcumulationPoints !== null && wowAcumulationPoints !== void 0 && wowAcumulationPoints.error) && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'wow_rewards' && !!loyaltyBrands[brandInformation === null || brandInformation === void 0 ? void 0 : brandInformation.brand_id] && /*#__PURE__*/_react.default.createElement(_styles.RewardContainer, null, /*#__PURE__*/_react.default.createElement(_styles.RewardBox, null, /*#__PURE__*/_react.default.createElement(_styles.RewardBoxContainer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-reward"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingRight: 10
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.rewardsIcon
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: 'auto'
    },
    className: "name"
  }, t('WOW_CART_NEW_POINTS', 'Saldo que acumulas'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "value"
  }, parsePrice(wowAcumulationPoints === null || wowAcumulationPoints === void 0 ? void 0 : (_wowAcumulationPoints = wowAcumulationPoints.result) === null || _wowAcumulationPoints === void 0 ? void 0 : _wowAcumulationPoints.pesos)))), /*#__PURE__*/_react.default.createElement(_styles.RewardDisclaimerContainer, null, t('REWARDS_DISCLAIMER', '*Cálculo aproximado, el saldo real se verá reflejado máx en 24 hrs.'))), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: !(cart !== null && cart !== void 0 && cart.valid_maximum) || !isValidMinimum && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? 'secundary' : 'primary',
    disabled: isDisablePlaceOrderButton,
    onClick: function onClick() {
      return ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'openpay' || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'openpay_mastercard') && isCSVPopup ? checkAddressNote(true) : checkAddressNote();
    }
  }, !(cart !== null && cart !== void 0 && cart.valid_maximum) ? "".concat(t('MAXIMUM_SUBTOTAL_ORDER', 'Maximum subtotal order'), ": ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.maximum)) : !isValidMinimum && !((cart === null || cart === void 0 ? void 0 : cart.discount_type) === 1 && (cart === null || cart === void 0 ? void 0 : cart.discount_rate) === 100) ? "".concat(t('MINIMUN_SUBTOTAL_ORDER', 'Minimum subtotal order:'), " ").concat(parsePrice(cart === null || cart === void 0 ? void 0 : cart.minimum)) : placing ? t('PLACING', 'Placing') : t('PLACE_ORDER', 'Place Order'))), !(cart !== null && cart !== void 0 && cart.valid_address) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('INVALID_CART_ADDRESS', 'Selected address is invalid, please select a closer address.')), !paymethodSelected && (cart === null || cart === void 0 ? void 0 : cart.balance) > 0 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_NOT_PAYMENT_SELECTED', 'Please, select a payment method to place order.')), !(cart !== null && cart !== void 0 && cart.valid_products) && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_PRODUCTS', 'Some products are invalid, please check them.')), cateringDayError && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_CATERING_BUSINESS_CLOSED', 'The Business will be closed before preparing catering')), options.type === 1 && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie18 = validationFields.fields) === null || _validationFields$fie18 === void 0 ? void 0 : (_validationFields$fie19 = _validationFields$fie18.checkout) === null || _validationFields$fie19 === void 0 ? void 0 : (_validationFields$fie20 = _validationFields$fie19.driver_tip) === null || _validationFields$fie20 === void 0 ? void 0 : _validationFields$fie20.enabled) && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie21 = validationFields.fields) === null || _validationFields$fie21 === void 0 ? void 0 : (_validationFields$fie22 = _validationFields$fie21.checkout) === null || _validationFields$fie22 === void 0 ? void 0 : (_validationFields$fie23 = _validationFields$fie22.driver_tip) === null || _validationFields$fie23 === void 0 ? void 0 : _validationFields$fie23.required) && Number(cart === null || cart === void 0 ? void 0 : cart.driver_tip) <= 0 && /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, t('WARNING_INVALID_DRIVER_TIP', 'Driver Tip is required.'))), /*#__PURE__*/_react.default.createElement(AlertComponent, {
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
  }), /*#__PURE__*/_react.default.createElement(AlertComponent, {
    title: t('DISCLAIMER_CATERING_TITLE', 'Disclaimer catering title'),
    content: t('DISCLAIMER_CATERING', 'Disclaimer Catering'),
    acceptText: t('ACCEPT', 'Accept'),
    open: openAlertCatering,
    onClose: function onClose() {
      return closeCateringAlert();
    },
    onAccept: function onAccept() {
      return closeCateringAlert();
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: isOpen,
    width: "760px",
    padding: "30px",
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isUserDetailsEdit: isUserDetailsEdit,
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: !isCustomerMode,
    isCustomerMode: isCustomerMode,
    userData: isCustomerMode && customerState.user,
    userId: isCustomerMode && (customerState === null || customerState === void 0 ? void 0 : (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id),
    requiredFields: requiredFields,
    setIsSuccess: setIsSuccess,
    isCheckout: true,
    isEdit: true,
    isModal: true,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: openCardCSV ? t('CSV_DESCRIPTION', 'CSV_DESCRIPTION') : t('ADD_NOTES_TO_ADDRESS', 'ADD_NOTES_TO_ADDRESS'),
    className: "modal-info",
    open: openAddressNotes || openCardCSV,
    onClose: function onClose() {
      setOpenAddressNotes(false);
      setOpenCardCSV(false);
    },
    width: windowSize.width > 1500 ? '25%' : '35%'
  }, openCardCSV && /*#__PURE__*/_react.default.createElement(_styles.CardForm, null, /*#__PURE__*/_react.default.createElement(_styles.PayCardSelected, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "brand"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: (0, _utils.getIconCard)((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da3 = paymethodSelected.data) === null || _paymethodSelected$da3 === void 0 ? void 0 : (_paymethodSelected$da4 = _paymethodSelected$da3.card) === null || _paymethodSelected$da4 === void 0 ? void 0 : _paymethodSelected$da4.brand) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da5 = paymethodSelected.data) === null || _paymethodSelected$da5 === void 0 ? void 0 : _paymethodSelected$da5.brandCardName)),
    alt: (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da6 = paymethodSelected.data) === null || _paymethodSelected$da6 === void 0 ? void 0 : (_paymethodSelected$da7 = _paymethodSelected$da6.card) === null || _paymethodSelected$da7 === void 0 ? void 0 : _paymethodSelected$da7.brand) || (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da8 = paymethodSelected.data) === null || _paymethodSelected$da8 === void 0 ? void 0 : _paymethodSelected$da8.brandCardName)
  })), /*#__PURE__*/_react.default.createElement("span", null, "XXXX-XXXX-XXXX-", paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da9 = paymethodSelected.data) === null || _paymethodSelected$da9 === void 0 ? void 0 : (_paymethodSelected$da10 = _paymethodSelected$da9.card) === null || _paymethodSelected$da10 === void 0 ? void 0 : _paymethodSelected$da10.last4))), /*#__PURE__*/_react.default.createElement(_styles.Row, null, /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errorsCheckout.csv,
    showBorder: errorsCheckout.border
  }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "cardSecurityCode",
    id: "csv",
    type: 'password',
    minLength: 3,
    maxLength: paymethodSelected !== null && paymethodSelected !== void 0 && paymethodSelected.data && (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da11 = paymethodSelected.data) === null || _paymethodSelected$da11 === void 0 ? void 0 : _paymethodSelected$da11.brandCardName) !== 'american_express' ? 3 : 4,
    onChange: handleChange,
    placeholder: "CVV",
    onKeyPress: function onKeyPress(e) {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleSubmit,
    color: "primary"
  }, t('CONTINUE', 'CONTINUE'))), openAddressNotes && /*#__PURE__*/_react.default.createElement(_styles.CardForm, null, /*#__PURE__*/_react.default.createElement(_styles.Column, null, /*#__PURE__*/_react.default.createElement("p", null, t('ENTER_REFERENCE', 'ENTER_REFERENCE')), /*#__PURE__*/_react.default.createElement(_styles.InputContainer, {
    isValid: errorsCheckout.addressNotes,
    showBorder: errorsCheckout.addressBorder
  }, /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    name: "addressNotes",
    id: "addressNotes",
    type: "text",
    maxLength: 100,
    onChange: handleChange,
    placeholder: t('ADDRESS_NOTES', 'Address Notes')
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleSubmitAddressNotes,
    color: "primary"
  }, t('CONTINUE', 'CONTINUE'))))));
};
var Checkout = function Checkout(props) {
  var _Object$values2, _theme$layouts3, _theme$layouts3$check, _theme$layouts3$check2, _theme$layouts3$check3, _theme$layouts4, _theme$layouts4$gener, _theme$layouts4$gener2, _theme$layouts4$gener3, _cartState$error, _cartState$cart2;
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
    _useOrder4$ = _useOrder4[1],
    confirmCart = _useOrder4$.confirmCart,
    applyCoupon = _useOrder4$.applyCoupon;
  var _useSession3 = (0, _orderingComponents.useSession)(),
    _useSession4 = _slicedToArray(_useSession3, 1),
    token = _useSession4[0].token;
  var _useApi3 = (0, _orderingComponents.useApi)(),
    _useApi4 = _slicedToArray(_useApi3, 1),
    ordering = _useApi4[0];
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState31 = (0, _react.useState)({
      loading: true,
      error: null,
      cart: null
    }),
    _useState32 = _slicedToArray(_useState31, 2),
    cartState = _useState32[0],
    setCartState = _useState32[1];
  var _useState33 = (0, _react.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    openUpselling = _useState34[0],
    setOpenUpselling = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    canOpenUpselling = _useState36[0],
    setCanOpenUpselling = _useState36[1];
  var _useState37 = (0, _react.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    currentCart = _useState38[0],
    setCurrentCart = _useState38[1];
  var _useState39 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    alertState = _useState40[0],
    setAlertState = _useState40[1];
  var _useState41 = (0, _react.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    isResetPaymethod = _useState42[0],
    setIsResetPaymethod = _useState42[1];
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && (((_Object$values2 = Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts)) === null || _Object$values2 === void 0 ? void 0 : _Object$values2.filter(function (cart) {
    var _cart$products3;
    return (cart === null || cart === void 0 ? void 0 : cart.products) && (cart === null || cart === void 0 ? void 0 : (_cart$products3 = cart.products) === null || _cart$products3 === void 0 ? void 0 : _cart$products3.length);
  })) || null);
  var isPfchangs = (theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$check = _theme$layouts3.checkout) === null || _theme$layouts3$check === void 0 ? void 0 : (_theme$layouts3$check2 = _theme$layouts3$check.components) === null || _theme$layouts3$check2 === void 0 ? void 0 : (_theme$layouts3$check3 = _theme$layouts3$check2.layout) === null || _theme$layouts3$check3 === void 0 ? void 0 : _theme$layouts3$check3.type) === 'pfchangs';
  var AlertComponent = (theme === null || theme === void 0 ? void 0 : (_theme$layouts4 = theme.layouts) === null || _theme$layouts4 === void 0 ? void 0 : (_theme$layouts4$gener = _theme$layouts4.general) === null || _theme$layouts4$gener === void 0 ? void 0 : (_theme$layouts4$gener2 = _theme$layouts4$gener.components) === null || _theme$layouts4$gener2 === void 0 ? void 0 : (_theme$layouts4$gener3 = _theme$layouts4$gener2.layout) === null || _theme$layouts4$gener3 === void 0 ? void 0 : _theme$layouts4$gener3.type) === 'pfchangs' ? _pfchangs3.Alert : _Confirm.Alert;
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cartId) {
      var _result$order, userCustomer, url, response, _yield$response$json, result, _confirmCartRes$resul, confirmCartRes, cart, spotNumberFromStorage, _JSON$parse, _JSON$parse2, _cart, _cart$business10, spotNumber, slug;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: true
              }));
              userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
              url = userCustomer ? "".concat(ordering.root, "/carts/").concat(cartId, "?user_id=").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) : "".concat(ordering.root, "/carts/").concat(cartId);
              _context2.next = 6;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token),
                  'X-App-X': ordering.appId
                }
              });
            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();
            case 9:
              _yield$response$json = _context2.sent;
              result = _yield$response$json.result;
              if (!(result.status === 1 && (_result$order = result.order) !== null && _result$order !== void 0 && _result$order.uuid)) {
                _context2.next = 16;
                break;
              }
              handleOrderRedirect(result.order.uuid);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false
              }));
              _context2.next = 35;
              break;
            case 16:
              if (!(result.status === 2)) {
                _context2.next = 31;
                break;
              }
              _context2.prev = 17;
              _context2.next = 20;
              return confirmCart(cartUuid);
            case 20:
              confirmCartRes = _context2.sent;
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
              _context2.next = 29;
              break;
            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2["catch"](17);
              setAlertState({
                open: true,
                content: [_context2.t0.message]
              });
            case 29:
              _context2.next = 35;
              break;
            case 31:
              cart = Array.isArray(result) ? null : result;
              spotNumberFromStorage = window.localStorage.getItem('table_number');
              if (spotNumberFromStorage) {
                spotNumber = (_JSON$parse = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.tableNumber;
                slug = (_JSON$parse2 = JSON.parse(spotNumberFromStorage)) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.slug;
                if (((_cart = cart) === null || _cart === void 0 ? void 0 : (_cart$business10 = _cart.business) === null || _cart$business10 === void 0 ? void 0 : _cart$business10.slug) === slug) {
                  cart = _objectSpread(_objectSpread({}, cart), {}, {
                    spot_number: parseInt(spotNumber, 10)
                  });
                }
              }
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: cart,
                error: cart ? null : result
              }));
            case 35:
              _context2.next = 40;
              break;
            case 37:
              _context2.prev = 37;
              _context2.t1 = _context2["catch"](0);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                error: [_context2.t1.toString()]
              }));
            case 40:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 37], [17, 26]]);
    }));
    return function getOrder(_x2) {
      return _ref2.apply(this, arguments);
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
    setIsResetPaymethod: setIsResetPaymethod,
    applyCoupon: applyCoupon,
    isPfchangs: isPfchangs
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
  }))), cartUuid && cartState.cart && ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) && /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    business: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }), /*#__PURE__*/_react.default.createElement(AlertComponent, {
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