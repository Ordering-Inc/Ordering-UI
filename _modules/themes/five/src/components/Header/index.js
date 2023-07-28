"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _AiOutlineClose = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineClose"));
var _LanguageSelector = require("../LanguageSelector");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _TiWarningOutline = _interopRequireDefault(require("@meronex/icons/ti/TiWarningOutline"));
var _OrderTypeSelectorContent = require("../OrderTypeSelectorContent");
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _useOnlineStatus = require("../../../../../hooks/useOnlineStatus");
var _UserPopover = require("../UserPopover");
var _CartPopover = require("../CartPopover");
var _OrderTypeSelectorHeader = require("../OrderTypeSelectorHeader");
var _CartContent = require("../CartContent");
var _Modal = require("../Modal");
var _MomentContent = require("../MomentContent");
var _AddressList = require("../AddressList");
var _AddressForm = require("../AddressForm");
var _HeaderOption = require("../HeaderOption");
var _SidebarMenu = require("../SidebarMenu");
var _UserDetails = require("../UserDetails");
var _Confirm = require("../Confirm");
var _pfchangs = require("../Confirm/layouts/pfchangs");
var _LoginForm = require("../LoginForm");
var _pfchangs2 = require("../LoginForm/layouts/pfchangs");
var _SignUpForm = require("../SignUpForm");
var _pfchangs3 = require("../SignUpForm/layouts/pfchangs");
var _ForgotPasswordForm = require("../ForgotPasswordForm");
var _utils = require("../../../../../utils");
var _BusinessPreorder = require("../BusinessPreorder");
var _BsFillPersonFill = _interopRequireDefault(require("@meronex/icons/bs/BsFillPersonFill"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var Header = function Header(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _theme$layouts, _theme$layouts$header, _theme$layouts$header2, _theme$layouts$header3, _theme$colors, _theme$layouts2, _theme$layouts2$heade, _theme$layouts2$heade2, _theme$layouts2$heade3, _theme$layouts3, _theme$layouts3$heade, _theme$layouts3$heade2, _theme$layouts3$heade3, _theme$layouts4, _theme$layouts4$heade, _theme$layouts4$heade2, _theme$layouts4$heade3, _theme$layouts4$heade4, _theme$layouts5, _theme$layouts5$heade, _theme$layouts5$heade2, _theme$layouts5$heade3, _theme$layouts5$heade4, _theme$layouts5$heade5, _theme$layouts6, _theme$layouts6$heade, _theme$layouts6$heade2, _theme$layouts6$heade3, _theme$layouts6$heade4, _theme$layouts6$heade5, _theme$layouts6$heade6, _theme$layouts7, _theme$layouts7$heade, _theme$layouts7$heade2, _theme$layouts7$heade3, _theme$layouts7$heade4, _theme$layouts7$heade5, _theme$layouts8, _theme$layouts8$heade, _theme$layouts8$heade2, _theme$layouts8$heade3, _theme$layouts9, _theme$layouts9$heade, _theme$layouts9$heade2, _theme$layouts9$heade3, _theme$layouts10, _theme$layouts10$head, _theme$layouts10$head2, _theme$layouts10$head3, _theme$layouts11, _theme$layouts11$gene, _theme$layouts11$gene2, _theme$layouts11$gene3, _customerState$user, _orderState$options3, _orderState$options3$, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images$logos, _theme$images2, _theme$images2$logos, _theme$images3, _theme$images3$logos, _orderState$options5, _orderState$options5$, _orderState$options5$2, _orderState$options5$3, _orderState$options6, _orderState$options6$, _orderState$options6$2, _orderState$options6$3, _configState$configs4, _configState$configs5, _configState$configs6, _configState$configs7, _configState$configs8, _configState$configs9, _orderState$options7, _orderState$options8, _configState$configs10, _configState$configs11, _theme$defaultLanguag2, _theme$defaultLanguag3, _orderState$options9, _orderState$options9$, _orderState$options9$2, _orderState$options9$3, _configState$configs12, _configState$configs13, _orderState$options10, _configState$configs14, _configState$configs15, _configState$configs16, _configState$configs17, _orderState$options11, _orderState$options12, _orderState$options13, _orderState$options14, _configState$configs18, _configState$configs19, _orderState$options15, _configState$configs20, _configState$configs21, _configState$configs22, _configState$configs23, _orderState$options16, _customerState$user2, _customerState$user3, _theme$defaultLanguag4, _theme$defaultLanguag5, _theme$defaultLanguag6, _theme$defaultLanguag7, _theme$defaultLanguag8, _theme$defaultLanguag9, _props$afterComponent, _props$afterElements;
  var isHome = props.isHome,
    location = props.location,
    isShowOrderOptions = props.isShowOrderOptions,
    isHideSignup = props.isHideSignup,
    isCustomerMode = props.isCustomerMode,
    franchiseId = props.franchiseId,
    slug = props.slug;
  var _useLocation = (0, _reactRouterDom.useLocation)(),
    pathname = _useLocation.pathname;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    auth = _useSession2[0].auth,
    login = _useSession2[1].login;
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 2),
    orderState = _useOrder2[0],
    refreshOrderOptions = _useOrder2[1].refreshOrderOptions;
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    openPopover = _useState2[0],
    setOpenPopover = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    customerState = _useCustomer2[0],
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var clearCustomer = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    customerModalOpen = _useState6[0],
    setCustomerModalOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    authModalOpen = _useState8[0],
    setAuthModalOpen = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    modalSelected = _useState10[0],
    setModalSelected = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    modalPageToShow = _useState12[0],
    setModalPageToShow = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    preorderBusiness = _useState14[0],
    setPreorderBusiness = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isAddressFormOpen = _useState16[0],
    setIsAddressFormOpen = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    isOpenUserData = _useState18[0],
    setIsOpenUserData = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    otpDataUser = _useState20[0],
    setOtpDataUser = _useState20[1];
  var _useState21 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    confirm = _useState22[0],
    setConfirm = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isFarAway = _useState24[0],
    setIsFarAway = _useState24[1];
  var isAlsea = ordering.project === 'alsea';
  var cartsWithProducts = (orderState === null || orderState === void 0 ? void 0 : orderState.carts) && Object.values(orderState === null || orderState === void 0 ? void 0 : orderState.carts).filter(function (cart) {
    var _cart$products, _cart$business;
    return cart.products && ((_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) > 0 && (cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.slug.includes(slug || 'pf_changs'));
  }) || null; // change filter includes pf_changs for cart?.business?.franchise_id === franchiseId || !franchiseId || !cart?.business?.franchiseId) DON'T MERGE THIS TO MASTER
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var onlineStatus = (0, _useOnlineStatus.useOnlineStatus)();
  var userCustomer = JSON.parse(window.localStorage.getItem('user-customer'));
  var orderTypeList = [t('DELIVERY', 'Delivery'), t('PICKUP', 'Pickup'), t('EAT_IN', 'Eat in'), t('CURBSIDE', 'Curbside'), t('DRIVE_THRU', 'Drive thru')];
  var configTypes = (configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.order_types_allowed) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var isPreOrderSetting = (configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.preorder_status_enabled) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value) === '1';
  var headerLayout = theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$header = _theme$layouts.header) === null || _theme$layouts$header === void 0 ? void 0 : (_theme$layouts$header2 = _theme$layouts$header.components) === null || _theme$layouts$header2 === void 0 ? void 0 : (_theme$layouts$header3 = _theme$layouts$header2.layout) === null || _theme$layouts$header3 === void 0 ? void 0 : _theme$layouts$header3.type;
  var headerBackgroundColor = (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiaryContrast) || (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$heade = _theme$layouts2.header) === null || _theme$layouts2$heade === void 0 ? void 0 : (_theme$layouts2$heade2 = _theme$layouts2$heade.components) === null || _theme$layouts2$heade2 === void 0 ? void 0 : (_theme$layouts2$heade3 = _theme$layouts2$heade2.style) === null || _theme$layouts2$heade3 === void 0 ? void 0 : _theme$layouts2$heade3.backgroundColor);
  var headerBorderBottom = theme === null || theme === void 0 ? void 0 : (_theme$layouts3 = theme.layouts) === null || _theme$layouts3 === void 0 ? void 0 : (_theme$layouts3$heade = _theme$layouts3.header) === null || _theme$layouts3$heade === void 0 ? void 0 : (_theme$layouts3$heade2 = _theme$layouts3$heade.components) === null || _theme$layouts3$heade2 === void 0 ? void 0 : (_theme$layouts3$heade3 = _theme$layouts3$heade2.style) === null || _theme$layouts3$heade3 === void 0 ? void 0 : _theme$layouts3$heade3.borderBottom;
  var headerLogo = theme === null || theme === void 0 ? void 0 : (_theme$layouts4 = theme.layouts) === null || _theme$layouts4 === void 0 ? void 0 : (_theme$layouts4$heade = _theme$layouts4.header) === null || _theme$layouts4$heade === void 0 ? void 0 : (_theme$layouts4$heade2 = _theme$layouts4$heade.components) === null || _theme$layouts4$heade2 === void 0 ? void 0 : (_theme$layouts4$heade3 = _theme$layouts4$heade2.logo) === null || _theme$layouts4$heade3 === void 0 ? void 0 : (_theme$layouts4$heade4 = _theme$layouts4$heade3.components) === null || _theme$layouts4$heade4 === void 0 ? void 0 : _theme$layouts4$heade4.image;
  var isloginSignupLayoutPF = (theme === null || theme === void 0 ? void 0 : (_theme$layouts5 = theme.layouts) === null || _theme$layouts5 === void 0 ? void 0 : (_theme$layouts5$heade = _theme$layouts5.header) === null || _theme$layouts5$heade === void 0 ? void 0 : (_theme$layouts5$heade2 = _theme$layouts5$heade.components) === null || _theme$layouts5$heade2 === void 0 ? void 0 : (_theme$layouts5$heade3 = _theme$layouts5$heade2.login_signup) === null || _theme$layouts5$heade3 === void 0 ? void 0 : (_theme$layouts5$heade4 = _theme$layouts5$heade3.components) === null || _theme$layouts5$heade4 === void 0 ? void 0 : (_theme$layouts5$heade5 = _theme$layouts5$heade4.layout) === null || _theme$layouts5$heade5 === void 0 ? void 0 : _theme$layouts5$heade5.type) === 'pfchangs';
  var loginSignupIcon = theme === null || theme === void 0 ? void 0 : (_theme$layouts6 = theme.layouts) === null || _theme$layouts6 === void 0 ? void 0 : (_theme$layouts6$heade = _theme$layouts6.header) === null || _theme$layouts6$heade === void 0 ? void 0 : (_theme$layouts6$heade2 = _theme$layouts6$heade.components) === null || _theme$layouts6$heade2 === void 0 ? void 0 : (_theme$layouts6$heade3 = _theme$layouts6$heade2.login_signup) === null || _theme$layouts6$heade3 === void 0 ? void 0 : (_theme$layouts6$heade4 = _theme$layouts6$heade3.components) === null || _theme$layouts6$heade4 === void 0 ? void 0 : (_theme$layouts6$heade5 = _theme$layouts6$heade4.icon) === null || _theme$layouts6$heade5 === void 0 ? void 0 : (_theme$layouts6$heade6 = _theme$layouts6$heade5.components) === null || _theme$layouts6$heade6 === void 0 ? void 0 : _theme$layouts6$heade6.image;
  var cartAlwaysShowed = theme === null || theme === void 0 ? void 0 : (_theme$layouts7 = theme.layouts) === null || _theme$layouts7 === void 0 ? void 0 : (_theme$layouts7$heade = _theme$layouts7.header) === null || _theme$layouts7$heade === void 0 ? void 0 : (_theme$layouts7$heade2 = _theme$layouts7$heade.components) === null || _theme$layouts7$heade2 === void 0 ? void 0 : (_theme$layouts7$heade3 = _theme$layouts7$heade2.cart) === null || _theme$layouts7$heade3 === void 0 ? void 0 : (_theme$layouts7$heade4 = _theme$layouts7$heade3.components) === null || _theme$layouts7$heade4 === void 0 ? void 0 : (_theme$layouts7$heade5 = _theme$layouts7$heade4.open_strategy) === null || _theme$layouts7$heade5 === void 0 ? void 0 : _theme$layouts7$heade5.alwaysShowed;
  var showAddressForm = !(theme !== null && theme !== void 0 && (_theme$layouts8 = theme.layouts) !== null && _theme$layouts8 !== void 0 && (_theme$layouts8$heade = _theme$layouts8.header) !== null && _theme$layouts8$heade !== void 0 && (_theme$layouts8$heade2 = _theme$layouts8$heade.components) !== null && _theme$layouts8$heade2 !== void 0 && (_theme$layouts8$heade3 = _theme$layouts8$heade2.address_form) !== null && _theme$layouts8$heade3 !== void 0 && _theme$layouts8$heade3.hidden);
  var showOrderTypes = !(theme !== null && theme !== void 0 && (_theme$layouts9 = theme.layouts) !== null && _theme$layouts9 !== void 0 && (_theme$layouts9$heade = _theme$layouts9.header) !== null && _theme$layouts9$heade !== void 0 && (_theme$layouts9$heade2 = _theme$layouts9$heade.components) !== null && _theme$layouts9$heade2 !== void 0 && (_theme$layouts9$heade3 = _theme$layouts9$heade2.order_types) !== null && _theme$layouts9$heade3 !== void 0 && _theme$layouts9$heade3.hidden);
  var showMoment = !(theme !== null && theme !== void 0 && (_theme$layouts10 = theme.layouts) !== null && _theme$layouts10 !== void 0 && (_theme$layouts10$head = _theme$layouts10.header) !== null && _theme$layouts10$head !== void 0 && (_theme$layouts10$head2 = _theme$layouts10$head.components) !== null && _theme$layouts10$head2 !== void 0 && (_theme$layouts10$head3 = _theme$layouts10$head2.moment) !== null && _theme$layouts10$head3 !== void 0 && _theme$layouts10$head3.hidden);
  var showOrderOptionsByTheme = showMoment || showOrderTypes || showAddressForm;
  var LoginFormComponent = isloginSignupLayoutPF ? _pfchangs2.LoginForm : _LoginForm.LoginForm;
  var SignFormComponent = isloginSignupLayoutPF ? _pfchangs3.SignUpForm : _SignUpForm.SignUpForm;
  var ConfirmComponent = (theme === null || theme === void 0 ? void 0 : (_theme$layouts11 = theme.layouts) === null || _theme$layouts11 === void 0 ? void 0 : (_theme$layouts11$gene = _theme$layouts11.general) === null || _theme$layouts11$gene === void 0 ? void 0 : (_theme$layouts11$gene2 = _theme$layouts11$gene.components) === null || _theme$layouts11$gene2 === void 0 ? void 0 : (_theme$layouts11$gene3 = _theme$layouts11$gene2.layout) === null || _theme$layouts11$gene3 === void 0 ? void 0 : _theme$layouts11$gene3.type) === 'pfchangs' ? _pfchangs.Confirm : _Confirm.Confirm;
  var handleSuccessSignup = function handleSuccessSignup(user) {
    var _user$session;
    login({
      user: user,
      token: (user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token) || (otpDataUser === null || otpDataUser === void 0 ? void 0 : otpDataUser.token)
    });
  };
  var handleClickUserCustomer = function handleClickUserCustomer(e) {
    var _clearCustomer$curren;
    var isActionsClick = (_clearCustomer$curren = clearCustomer.current) === null || _clearCustomer$curren === void 0 ? void 0 : _clearCustomer$curren.contains(e === null || e === void 0 ? void 0 : e.target);
    if (isActionsClick) {
      var _theme$defaultLanguag;
      setConfirm({
        open: true,
        content: t('QUESTION_CLEAR_CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.QUESTION_CLEAR_CUSTOMER) || 'Are you sure that you want to clear the customer?'),
        handleOnAccept: function handleOnAccept() {
          deleteUserCustomer(true);
          refreshOrderOptions();
          handleGoToPage({
            page: 'home'
          });
          setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
            open: false
          }));
        }
      });
      return;
    }
    setCustomerModalOpen(true);
  };
  var openModal = function openModal(opt) {
    setModalSelected(opt);
    setModalIsOpen(true);
  };
  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, !openPopover[type])));
  };
  var handleClosePopover = function handleClosePopover(type) {
    setOpenPopover(_objectSpread(_objectSpread({}, openPopover), {}, _defineProperty({}, type, false)));
  };
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    if (isCustomerMode && pathname.includes('/orders')) {
      deleteUserCustomer(true);
      refreshOrderOptions();
    }
  };
  var handleCustomModalClick = function handleCustomModalClick(e, _ref) {
    var page = _ref.page;
    e.preventDefault();
    setModalPageToShow(page);
  };
  var closeAuthModal = function closeAuthModal(deleteUser) {
    setAuthModalOpen(false);
    setModalPageToShow(null);
    setOtpDataUser(null);
    if (otpDataUser && deleteUser) {
      deleteOtpUser();
    }
  };
  var handleSuccessLogin = function handleSuccessLogin(user) {
    if (!(user !== null && user !== void 0 && user.name) || !(user !== null && user !== void 0 && user.lastname) || !(user !== null && user !== void 0 && user.cellphone) || !(user !== null && user !== void 0 && user.email)) {
      setModalPageToShow('user_update');
      setAuthModalOpen(true);
      setOtpDataUser(null);
      return;
    }
    if (user) {
      closeAuthModal();
    }
  };
  var handleOpenLoginSignUp = function handleOpenLoginSignUp(index) {
    if (isCustomerMode) {
      events.emit('go_to_page', {
        page: 'home'
      });
    } else {
      setModalPageToShow(index);
      setAuthModalOpen(true);
    }
  };
  var handleClosePreorder = function handleClosePreorder() {
    setPreorderBusiness(null);
  };
  var handleBusinessClick = function handleBusinessClick(business) {
    events.emit('go_to_page', {
      page: 'business',
      params: {
        store: business.slug
      }
    });
  };
  var deleteOtpUser = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging-development', ".ordering.co/alseaplatform/delete_new_user.php"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  id: otpDataUser.id,
                  token: otpDataUser.token
                })
              });
            case 3:
              _context.next = 8;
              break;
            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
                content: _context.t0.message,
                open: true
              }));
            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 5]]);
    }));
    return function deleteOtpUser() {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (isCustomerMode) {
      setCustomerModalOpen(false);
    }
  }, [customerState === null || customerState === void 0 ? void 0 : (_customerState$user = customerState.user) === null || _customerState$user === void 0 ? void 0 : _customerState$user.address]);
  (0, _react.useEffect)(function () {
    if (!(pathname.includes('/search') || pathname.includes('/checkout'))) {
      setIsFarAway(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(function (pos) {
      var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2;
      var crd = pos.coords;
      var distance = (0, _utils.getDistance)(crd.latitude, crd.longitude, orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng);
      if (distance > 20) setIsFarAway(true);else setIsFarAway(false);
    }, function (err) {
      console.warn("ERROR(".concat(err.code, "): ").concat(err.message));
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : (_orderState$options3$ = _orderState$options3.address) === null || _orderState$options3$ === void 0 ? void 0 : _orderState$options3$.location, pathname]);
  (0, _react.useEffect)(function () {
    if (!otpDataUser && isloginSignupLayoutPF && modalPageToShow === 'signup') {
      setAuthModalOpen(false);
      setModalPageToShow(null);
    }
  }, [otpDataUser, modalPageToShow, authModalOpen]);
  (0, _react.useEffect)(function () {
    if (auth && isloginSignupLayoutPF) {
      setOtpDataUser(null);
    }
  }, [auth]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Header, {
    headerBackgroundColor: headerBackgroundColor,
    headerBorderBottom: headerBorderBottom
  }, /*#__PURE__*/_react.default.createElement(_styles.InnerHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, /*#__PURE__*/_react.default.createElement(_SidebarMenu.SidebarMenu, {
    auth: auth,
    isHideSignup: isHideSignup,
    userCustomer: userCustomer,
    isCustomerMode: isCustomerMode,
    handleOpenLoginSignUpCustom: handleOpenLoginSignUp
  }), /*#__PURE__*/_react.default.createElement(_styles.LogoHeader, {
    onClick: function onClick() {
      var _orderState$options4, _orderState$options4$;
      return handleGoToPage({
        page: orderState !== null && orderState !== void 0 && (_orderState$options4 = orderState.options) !== null && _orderState$options4 !== void 0 && (_orderState$options4$ = _orderState$options4.address) !== null && _orderState$options4$ !== void 0 && _orderState$options4$.location && !isCustomerMode && headerLayout !== 'pfchangs' ? 'search' : 'home'
      });
    },
    disabledResponsive: !!headerLogo,
    imgW: windowSize.width <= 768 && headerLogo ? '95px' : null,
    imgH: windowSize.width <= 768 && headerLogo ? '21px' : null
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: headerLayout === 'pfchangs' ? '' : '170px',
    height: headerLayout === 'pfchangs' ? '' : '45px',
    src: headerLogo || (theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.logotype),
    loading: "lazy"
  }), !headerLogo && /*#__PURE__*/_react.default.createElement("img", {
    alt: "Isotype",
    width: "35px",
    height: "45px",
    src: isHome ? theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.isotypeInvert : theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.isotype,
    loading: "lazy"
  }))), showOrderOptionsByTheme && isShowOrderOptions && !props.isCustomLayout && /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    className: "left-header",
    isCustomerMode: isCustomerMode
  }, windowSize.width > 820 && isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))), isCustomerMode && showAddressForm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    isCustomerMode: isCustomerMode,
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : (_orderState$options5$2 = _orderState$options5$.address) === null || _orderState$options5$2 === void 0 ? void 0 : (_orderState$options5$3 = _orderState$options5$2.split(',')) === null || _orderState$options5$3 === void 0 ? void 0 : _orderState$options5$3[0]) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), isCustomerMode && windowSize.width > 450 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, {
    onClick: function onClick(e) {
      return handleClickUserCustomer(e);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("p", null, userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ", userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname)), /*#__PURE__*/_react.default.createElement("span", {
    ref: clearCustomer
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineClose.default, null))), /*#__PURE__*/_react.default.createElement(_styles.Divider, null)), onlineStatus && windowSize.width > 820 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCustomerMode && showAddressForm && /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick() {
      return openModal('address');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : (_orderState$options6$2 = _orderState$options6$.address) === null || _orderState$options6$2 === void 0 ? void 0 : (_orderState$options6$3 = _orderState$options6$2.split(',')) === null || _orderState$options6$3 === void 0 ? void 0 : _orderState$options6$3[0]) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), showMoment && !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.preorder_status_enabled) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === undefined) && /*#__PURE__*/_react.default.createElement(_styles.MomentMenu, {
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 ? void 0 : (_configState$configs7 = _configState$configs6.max_days_preorder) === null || _configState$configs7 === void 0 ? void 0 : _configState$configs7.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs8 = configState.configs) === null || _configState$configs8 === void 0 ? void 0 : (_configState$configs9 = _configState$configs8.max_days_preorder) === null || _configState$configs9 === void 0 ? void 0 : _configState$configs9.value) === 0 ? null : function () {
      return openModal('moment');
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, (_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.moment ? parseDate((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, {
    outputFormat: configState === null || configState === void 0 ? void 0 : (_configState$configs10 = configState.configs) === null || _configState$configs10 === void 0 ? void 0 : (_configState$configs11 = _configState$configs10.dates_moment_format) === null || _configState$configs11 === void 0 ? void 0 : _configState$configs11.value
  }) : t('ASAP_ABBREVIATION', 'ASAP')))), showOrderTypes && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorHeader.OrderTypeSelectorHeader, {
    orderTypeList: orderTypeList,
    onClick: function onClick() {
      return openModal('delivery');
    }
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "delivery",
    onClick: function onClick(variant) {
      return openModal(variant);
    },
    orderTypeList: orderTypeList
  }))), onlineStatus && /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.Menu, {
    isCustomerMode: isCustomerMode
  }, !auth && windowSize.width > 920 && !isloginSignupLayoutPF && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleOpenLoginSignUp('login');
    },
    style: {
      whiteSpace: 'nowrap'
    },
    name: "signin"
  }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.LOGIN) || 'Login')), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    onClick: function onClick() {
      return handleOpenLoginSignUp('signup');
    },
    highlight: 1,
    style: {
      whiteSpace: 'nowrap'
    },
    name: "signup"
  }, t('SIGN_UP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.SIGN_UP) || 'Sign up'))), cartAlwaysShowed && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_CartPopover.CartPopover, {
    open: openPopover.cart,
    carts: cartsWithProducts,
    onClick: function onClick() {
      return handleTogglePopover('cart');
    },
    onClose: function onClose() {
      return handleClosePopover('cart');
    },
    auth: auth,
    location: location,
    isCustomerMode: isCustomerMode,
    setPreorderBusiness: setPreorderBusiness
  }) : !pathname.includes('/checkout') && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "cart",
    totalCarts: cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length,
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  })), !auth && isloginSignupLayoutPF && windowSize.width > 920 && /*#__PURE__*/_react.default.createElement(_styles.LoginButton, {
    onClick: function onClick() {
      return handleOpenLoginSignUp('login');
    }
  }, loginSignupIcon && /*#__PURE__*/_react.default.createElement(_BsFillPersonFill.default, null), /*#__PURE__*/_react.default.createElement("p", null, t('SIGN_IN_JOIN', 'Sign In/Join'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartAlwaysShowed && isShowOrderOptions && (windowSize.width > 768 ? /*#__PURE__*/_react.default.createElement(_CartPopover.CartPopover, {
    open: openPopover.cart,
    carts: cartsWithProducts,
    onClick: function onClick() {
      return handleTogglePopover('cart');
    },
    onClose: function onClose() {
      return handleClosePopover('cart');
    },
    auth: auth,
    location: location,
    isCustomerMode: isCustomerMode,
    franchiseId: franchiseId,
    setPreorderBusiness: setPreorderBusiness
  }) : /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "cart",
    totalCarts: cartsWithProducts === null || cartsWithProducts === void 0 ? void 0 : cartsWithProducts.length,
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  })), isCustomerMode && /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null), windowSize.width > 768 && /*#__PURE__*/_react.default.createElement(_UserPopover.UserPopover, {
    withLogout: true,
    isCustomerMode: isCustomerMode,
    open: openPopover.user,
    onClick: function onClick() {
      return handleTogglePopover('user');
    },
    onClose: function onClose() {
      return handleClosePopover('user');
    }
  }))))), onlineStatus && showOrderOptionsByTheme && isShowOrderOptions && !props.isCustomLayout && !isCustomerMode && (windowSize.width > 768 && windowSize.width <= 820 ? /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))), /*#__PURE__*/_react.default.createElement(_styles.AddressMenu, {
    onClick: function onClick() {
      return openModal('address');
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, null), " ", ((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : (_orderState$options9$ = _orderState$options9.address) === null || _orderState$options9$ === void 0 ? void 0 : (_orderState$options9$2 = _orderState$options9$.address) === null || _orderState$options9$2 === void 0 ? void 0 : (_orderState$options9$3 = _orderState$options9$2.split(',')) === null || _orderState$options9$3 === void 0 ? void 0 : _orderState$options9$3[0]) || t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), showMoment && !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs12 = configState.configs) === null || _configState$configs12 === void 0 ? void 0 : (_configState$configs13 = _configState$configs12.preorder_status_enabled) === null || _configState$configs13 === void 0 ? void 0 : _configState$configs13.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.moment,
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs14 = configState.configs) === null || _configState$configs14 === void 0 ? void 0 : (_configState$configs15 = _configState$configs14.max_days_preorder) === null || _configState$configs15 === void 0 ? void 0 : _configState$configs15.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs16 = configState.configs) === null || _configState$configs16 === void 0 ? void 0 : (_configState$configs17 = _configState$configs16.max_days_preorder) === null || _configState$configs17 === void 0 ? void 0 : _configState$configs17.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.SubMenu, null, showAddressForm && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isFarAway && /*#__PURE__*/_react.default.createElement(_styles.FarAwayMessage, null, /*#__PURE__*/_react.default.createElement(_TiWarningOutline.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('YOU_ARE_FAR_FROM_ADDRESS', 'You are far from this address'))), /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "address",
    addressState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : (_orderState$options12 = _orderState$options11.address) === null || _orderState$options12 === void 0 ? void 0 : (_orderState$options13 = _orderState$options12.address) === null || _orderState$options13 === void 0 ? void 0 : (_orderState$options14 = _orderState$options13.split(',')) === null || _orderState$options14 === void 0 ? void 0 : _orderState$options14[0],
    onClick: function onClick(variant) {
      return openModal(variant);
    }
  })), showMoment && !isCustomerMode && (isPreOrderSetting || (configState === null || configState === void 0 ? void 0 : (_configState$configs18 = configState.configs) === null || _configState$configs18 === void 0 ? void 0 : (_configState$configs19 = _configState$configs18.preorder_status_enabled) === null || _configState$configs19 === void 0 ? void 0 : _configState$configs19.value) === undefined) && /*#__PURE__*/_react.default.createElement(_HeaderOption.HeaderOption, {
    variant: "moment",
    momentState: orderState === null || orderState === void 0 ? void 0 : (_orderState$options15 = orderState.options) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.moment,
    onClick: (configState === null || configState === void 0 ? void 0 : (_configState$configs20 = configState.configs) === null || _configState$configs20 === void 0 ? void 0 : (_configState$configs21 = _configState$configs20.max_days_preorder) === null || _configState$configs21 === void 0 ? void 0 : _configState$configs21.value) === -1 || (configState === null || configState === void 0 ? void 0 : (_configState$configs22 = configState.configs) === null || _configState$configs22 === void 0 ? void 0 : (_configState$configs23 = _configState$configs22.max_days_preorder) === null || _configState$configs23 === void 0 ? void 0 : _configState$configs23.value) === 0 ? null : function (variant) {
      return openModal(variant);
    }
  }))), modalIsOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: modalSelected === 'address' ? '70%' : '700px'
  }, modalSelected === 'cart' && /*#__PURE__*/_react.default.createElement(_CartContent.CartContent, {
    carts: cartsWithProducts,
    isOrderStateCarts: !!orderState.carts,
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }), modalSelected === 'address' && (auth ? /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    changeOrderAddressWithDefault: true,
    userId: isNaN(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id) ? null : userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.id,
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    isCustomerMode: isCustomerMode
  }) : /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    useValidationFileds: true,
    address: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : _orderState$options16.address) || {},
    onCancel: function onCancel() {
      return setModalIsOpen(false);
    },
    onSaveAddress: function onSaveAddress() {
      return setModalIsOpen(false);
    },
    isCustomerMode: isCustomerMode
  })), modalSelected === 'moment' && /*#__PURE__*/_react.default.createElement(_MomentContent.MomentContent, {
    onClose: function onClose() {
      return setModalIsOpen(false);
    }
  }), modalSelected === 'delivery' && /*#__PURE__*/_react.default.createElement(_OrderTypeSelectorContent.OrderTypeSelectorContent, {
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    configTypes: !(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0 ? configTypes : null,
    defaultValue: !(!(configState !== null && configState !== void 0 && configState.loading) && (configTypes === null || configTypes === void 0 ? void 0 : configTypes.length) > 0) && 1
  })), isCustomerMode && customerModalOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: customerModalOpen,
    width: "80%",
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    },
    padding: "20px",
    hideCloseDefault: true
  }, /*#__PURE__*/_react.default.createElement(_styles.UserEdit, null, !(customerState !== null && customerState !== void 0 && customerState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    isAddressFormOpen: isAddressFormOpen,
    userData: customerState === null || customerState === void 0 ? void 0 : customerState.user,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$user2 = customerState.user) === null || _customerState$user2 === void 0 ? void 0 : _customerState$user2.id,
    isOpenUserData: isOpenUserData,
    isCustomerMode: true,
    isModal: true,
    setIsOpenUserData: setIsOpenUserData,
    onClose: function onClose() {
      return setCustomerModalOpen(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
    isModal: true,
    userId: customerState === null || customerState === void 0 ? void 0 : (_customerState$user3 = customerState.user) === null || _customerState$user3 === void 0 ? void 0 : _customerState$user3.id,
    changeOrderAddressWithDefault: true,
    userCustomerSetup: customerState.user,
    isOpenUserData: isOpenUserData,
    setCustomerModalOpen: setCustomerModalOpen,
    setIsOpenUserData: setIsOpenUserData,
    setIsAddressFormOpen: setIsAddressFormOpen,
    isHeader: true,
    isCustomerMode: isCustomerMode
  })))), authModalOpen && !auth && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: authModalOpen,
    onRemove: function onRemove() {
      return closeAuthModal(true);
    },
    onClose: function onClose() {
      return closeAuthModal(true);
    },
    width: "50%",
    authModal: true
  }, modalPageToShow === 'login' && /*#__PURE__*/_react.default.createElement(LoginFormComponent, {
    handleSuccessLogin: handleSuccessLogin,
    elementLinkToSignup: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'signup'
        });
      },
      href: "#"
    }, t('CREATE_ACCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.CREATE_ACCOUNT) || 'Create account')),
    elementLinkToForgotPassword: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'forgotpassword'
        });
      },
      href: "#"
    }, t('RESET_PASSWORD', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.RESET_PASSWORD) || 'Reset password')),
    useLoginByCellphone: true,
    isPopup: true,
    defaultLoginTab: isloginSignupLayoutPF && 'otp',
    setOtpDataUser: setOtpDataUser,
    handleOpenSignup: function handleOpenSignup() {
      return setModalPageToShow('signup');
    }
  }), modalPageToShow === 'signup' && /*#__PURE__*/_react.default.createElement(SignFormComponent, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.LOGIN) || 'Login')),
    useLoginByCellphone: true,
    useChekoutFileds: true,
    handleSuccessSignup: handleSuccessSignup,
    isPopup: true,
    closeModal: function closeModal() {
      return closeAuthModal();
    },
    otpDataUser: otpDataUser
  }), modalPageToShow === 'forgotpassword' && /*#__PURE__*/_react.default.createElement(_ForgotPasswordForm.ForgotPasswordForm, {
    elementLinkToLogin: /*#__PURE__*/_react.default.createElement("a", {
      onClick: function onClick(e) {
        return handleCustomModalClick(e, {
          page: 'login'
        });
      },
      href: "#"
    }, t('LOGIN', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag7 = theme.defaultLanguages) === null || _theme$defaultLanguag7 === void 0 ? void 0 : _theme$defaultLanguag7.LOGIN) || 'Login')),
    isPopup: true
  })), auth && authModalOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: authModalOpen,
    width: "50%",
    hideCloseDefault: true
  }, modalPageToShow === 'user_update' && /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    useSessionUser: true
    // userData={customerState?.user}
    // userId={customerState?.user?.id}
    ,
    isUserDetailsEdit: true,
    isOpenUserData: isOpenUserData,
    setIsOpenUserData: setIsOpenUserData,
    isMissedData: true,
    onClose: function onClose() {
      return closeAuthModal();
    }
  })), /*#__PURE__*/_react.default.createElement(ConfirmComponent, {
    title: t('CUSTOMER', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag8 = theme.defaultLanguages) === null || _theme$defaultLanguag8 === void 0 ? void 0 : _theme$defaultLanguag8.CUSTOMER) || 'Customer'),
    content: confirm.content,
    acceptText: t('ACCEPT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag9 = theme.defaultLanguages) === null || _theme$defaultLanguag9 === void 0 ? void 0 : _theme$defaultLanguag9.ACCEPT) || 'Accept'),
    open: isCustomerMode && confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: !!preorderBusiness,
    width: "760px",
    onClose: function onClose() {
      return handleClosePreorder();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: preorderBusiness,
    handleClick: handleBusinessClick,
    showButton: true
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
exports.Header = Header;
Header.defaultProps = {
  isShowOrderOptions: true
};