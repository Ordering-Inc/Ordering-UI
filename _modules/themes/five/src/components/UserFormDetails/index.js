"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _reactHookForm = require("react-hook-form");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _styledComponents = require("styled-components");
var _styles = require("./styles");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _InputPhoneNumber = require("../../../../../components/InputPhoneNumber");
var _LanguageSelector = require("../../../../../components/LanguageSelector");
var _Confirm = require("../Confirm");
var _utils = require("../../../../../utils");
var _Checkbox = require("../../../../../styles/Checkbox");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
var UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _orderingTheme$theme, _orderingTheme$theme$, _orderingTheme$theme$2, _orderingTheme$theme$3, _theme$profile, _theme$profile$compon, _theme$profile$compon2, _orderingTheme$theme2, _orderingTheme$theme3, _orderingTheme$theme4, _orderingTheme$theme5, _orderingTheme$theme6, _orderingTheme$theme7, _orderingTheme$theme8, _orderingTheme$theme9, _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _configs$verification3, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie11, _formState$result7, _formState$result8, _formState$result8$re, _formState$result8$re2, _formState$result8$re3, _formState$changes$se2, _formState$changes11, _formState$changes11$, _formState$changes11$2, _user$settings2, _user$settings2$notif, _props$afterMidElemen, _props$afterMidCompon, _props$afterComponent, _props$afterElements;
  var isEdit = props.isEdit,
    formState = props.formState,
    onCancel = props.onCancel,
    showField = props.showField,
    cleanFormState = props.cleanFormState,
    onCloseProfile = props.onCloseProfile,
    isRequiredField = props.isRequiredField,
    validationFields = props.validationFields,
    handleChangeInput = props.handleChangeInput,
    handleButtonUpdateClick = props.handleButtonUpdateClick,
    isCheckout = props.isCheckout,
    userData = props.userData,
    isCustomerMode = props.isCustomerMode,
    setWillVerifyOtpState = props.setWillVerifyOtpState,
    handleChangePromotions = props.handleChangePromotions,
    isOldLayout = props.isOldLayout,
    requiredFields = props.requiredFields,
    isMissedData = props.isMissedData,
    handleSetAlert = props.handleSetAlert;
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var formMethods = (0, _reactHookForm.useForm)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var theme = (0, _styledComponents.useTheme)();
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    _useSession2$ = _useSession2[0],
    userSession = _useSession2$.user,
    token = _useSession2$.token,
    changeUser = _useSession2[1].changeUser;
  var _useOrderingTheme = (0, _orderingComponents.useOrderingTheme)(),
    _useOrderingTheme2 = _slicedToArray(_useOrderingTheme, 1),
    orderingTheme = _useOrderingTheme2[0];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    isValidPhoneNumber = _useState2[0],
    setIsValidPhoneNumber = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userPhoneNumber = _useState4[0],
    setUserPhoneNumber = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    alertState = _useState6[0],
    setAlertState = _useState6[1];
  var _useCustomer = (0, _orderingComponents.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    setUserCustomer = _useCustomer2[1].setUserCustomer;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isChanged = _useState8[0],
    setIsChanged = _useState8[1];
  var emailInput = (0, _react.useRef)(null);
  var user = userData || userSession;
  var showCustomerCellphone = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme = orderingTheme.theme) !== null && _orderingTheme$theme !== void 0 && (_orderingTheme$theme$ = _orderingTheme$theme.profile) !== null && _orderingTheme$theme$ !== void 0 && (_orderingTheme$theme$2 = _orderingTheme$theme$.components) !== null && _orderingTheme$theme$2 !== void 0 && (_orderingTheme$theme$3 = _orderingTheme$theme$2.cellphone) !== null && _orderingTheme$theme$3 !== void 0 && _orderingTheme$theme$3.hidden);
  var showCustomerPassword = !(theme !== null && theme !== void 0 && (_theme$profile = theme.profile) !== null && _theme$profile !== void 0 && (_theme$profile$compon = _theme$profile.components) !== null && _theme$profile$compon !== void 0 && (_theme$profile$compon2 = _theme$profile$compon.password) !== null && _theme$profile$compon2 !== void 0 && _theme$profile$compon2.hidden);
  var showCustomerPromotions = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme2 = orderingTheme.theme) !== null && _orderingTheme$theme2 !== void 0 && (_orderingTheme$theme3 = _orderingTheme$theme2.profile) !== null && _orderingTheme$theme3 !== void 0 && (_orderingTheme$theme4 = _orderingTheme$theme3.components) !== null && _orderingTheme$theme4 !== void 0 && (_orderingTheme$theme5 = _orderingTheme$theme4.promotions) !== null && _orderingTheme$theme5 !== void 0 && _orderingTheme$theme5.hidden);
  var showLangauges = !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme6 = orderingTheme.theme) !== null && _orderingTheme$theme6 !== void 0 && (_orderingTheme$theme7 = _orderingTheme$theme6.profile) !== null && _orderingTheme$theme7 !== void 0 && (_orderingTheme$theme8 = _orderingTheme$theme7.components) !== null && _orderingTheme$theme8 !== void 0 && (_orderingTheme$theme9 = _orderingTheme$theme8.languages) !== null && _orderingTheme$theme9 !== void 0 && _orderingTheme$theme9.hidden);
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };
  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;
  var setUserCellPhone = function setUserCellPhone() {
    var isEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }
    if (user !== null && user !== void 0 && user.cellphone) {
      var _formState$changes, _formState$changes2;
      var phone = null;
      if (formState.result.error && (_formState$changes = formState.changes) !== null && _formState$changes !== void 0 && _formState$changes.cellphone && (_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.country_phone_code) {
        var _formState$changes3, _formState$changes4;
        phone = "+".concat((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.country_phone_code, " ").concat((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.cellphone);
        setUserPhoneNumber(phone);
        return;
      }
      if (user !== null && user !== void 0 && user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }
      setUserPhoneNumber(phone);
      return;
    }
    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };
  var isAlsea = ordering.project === 'alsea';
  var parseNumber = function parseNumber(unparsedNumber) {
    if (!unparsedNumber) return {};
    var parsedNumber = (0, _libphonenumberJs.default)(unparsedNumber);
    var cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
    var countryPhoneCode = +(parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.countryCallingCode);
    return {
      cellphone: cellphone,
      countryPhoneCode: countryPhoneCode
    };
  };
  var checkNewPhone = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(changes) {
      var available, _props$userData, consult, _yield$consult$json, result, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              available = false;
              _context.next = 3;
              return alseaOtpInitialize(parseNumber(userPhoneNumber));
            case 3:
              available = _context.sent;
              if (!available) {
                _context.next = 17;
                break;
              }
              _context.next = 7;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging', ".ordering.co/alseaplatform/api_update_user.php?user=").concat((props === null || props === void 0 ? void 0 : (_props$userData = props.userData) === null || _props$userData === void 0 ? void 0 : _props$userData.id) || (user === null || user === void 0 ? void 0 : user.id)), {
                method: 'POST',
                body: JSON.stringify(formState.changes),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId,
                  'Content-Type': 'application/json;charset=UTF-8',
                  accept: 'application/json, text/plain'
                }
              });
            case 7:
              consult = _context.sent;
              _context.next = 10;
              return consult.json();
            case 10:
              _yield$consult$json = _context.sent;
              result = _yield$consult$json.result;
              error = _yield$consult$json.error;
              if (!error) {
                changeUser(_objectSpread(_objectSpread({}, userSession), result));
                setWillVerifyOtpState(true);
              }
              if (error) {
                // changeUser({
                //   ...userSession,
                //   ...formState.changes
                // })
                // setWillVerifyOtpState(true)
                handleSetAlert(result, t('ATENTION', 'Atencion'));
              }
              _context.next = 18;
              break;
            case 17:
              setAlertState({
                open: true,
                content: [t('NUMBER_ALREADY_EXISTS', 'El numero ya existe en otra cuenta.')]
              });
            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function checkNewPhone(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var alseaOtpConsult = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(params) {
      var response, text;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging-development', ".ordering.co/alseaplatform/wow_search_recover.php?").concat(params), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.text();
            case 6:
              text = _context2.sent;
              if (!(text.toString() === 'Lo sentimos, estamos en mantenimiento.')) {
                _context2.next = 9;
                break;
              }
              return _context2.abrupt("return", text);
            case 9:
              return _context2.abrupt("return", text);
            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));
    return function alseaOtpConsult(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var alseaOtpInitialize = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values, type, social) {
      var _formState$changes5, _formState$changes6, body, params, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              body = {};
              body.user = (values === null || values === void 0 ? void 0 : values.cellphone) || (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.cellphone);
              body.cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.cellphone);
              body.country_code = values === null || values === void 0 ? void 0 : values.countryPhoneCode;
              params = "pass=q7i1rcljnv3roqv72sleodqt9mi0udrrotqau4rhi81274q2ejt".concat(body.cellphone ? "&cellphone=".concat(body.cellphone) : '').concat(body.country_code ? "&country_phone_code=".concat(body.country_code) : '').concat(body.email ? "&mail=".concat(body.email) : '');
              _context3.next = 8;
              return alseaOtpConsult(params, social);
            case 8:
              result = _context3.sent;
              if (!(result === 'new_user')) {
                _context3.next = 13;
                break;
              }
              return _context3.abrupt("return", true);
            case 13:
              if (!(result === 'existing_user')) {
                _context3.next = 17;
                break;
              }
              return _context3.abrupt("return", false);
            case 17:
              return _context3.abrupt("return", false);
            case 18:
              _context3.next = 23;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", false);
            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 20]]);
    }));
    return function alseaOtpInitialize(_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  var onSubmit = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _configs$verification;
      var isPhoneNumberValid, changes;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;
              if (!(!userPhoneNumber && (validationFields !== null && validationFields !== void 0 && (_validationFields$fie5 = validationFields.fields) !== null && _validationFields$fie5 !== void 0 && (_validationFields$fie6 = _validationFields$fie5.checkout) !== null && _validationFields$fie6 !== void 0 && (_validationFields$fie7 = _validationFields$fie6.cellphone) !== null && _validationFields$fie7 !== void 0 && _validationFields$fie7.enabled && validationFields !== null && validationFields !== void 0 && (_validationFields$fie8 = validationFields.fields) !== null && _validationFields$fie8 !== void 0 && (_validationFields$fie9 = _validationFields$fie8.checkout) !== null && _validationFields$fie9 !== void 0 && (_validationFields$fie10 = _validationFields$fie9.cellphone) !== null && _validationFields$fie10 !== void 0 && _validationFields$fie10.required || (configs === null || configs === void 0 ? void 0 : (_configs$verification = configs.verification_phone_required) === null || _configs$verification === void 0 ? void 0 : _configs$verification.value) === '1'))) {
                _context4.next = 4;
                break;
              }
              setAlertState({
                open: true,
                content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
              });
              return _context4.abrupt("return");
            case 4:
              if (!(!isPhoneNumberValid && userPhoneNumber)) {
                _context4.next = 10;
                break;
              }
              if (!(user !== null && user !== void 0 && user.country_phone_code)) {
                _context4.next = 8;
                break;
              }
              setAlertState({
                open: true,
                content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
              });
              return _context4.abrupt("return");
            case 8:
              setAlertState({
                open: true,
                content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
              });
              return _context4.abrupt("return");
            case 10:
              if (!(Object.keys(formState.changes).length > 0 && isPhoneNumberValid)) {
                _context4.next = 19;
                break;
              }
              changes = null;
              if (user !== null && user !== void 0 && user.cellphone && !userPhoneNumber) {
                changes = {
                  country_phone_code: '',
                  cellphone: ''
                };
              }
              if (isCustomerMode) {
                setUserCustomer(formState.result.result, true);
              }
              if (!isChanged) {
                _context4.next = 18;
                break;
              }
              _context4.next = 17;
              return checkNewPhone(changes);
            case 17:
              return _context4.abrupt("return");
            case 18:
              handleButtonUpdateClick(changes);
            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return function onSubmit() {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
    setIsChanged(true);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };
    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }
    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      };
    }
    handleChangeInput(phoneNumber, true);
  };
  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    handleChangeInput({
      target: {
        name: 'email',
        value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    if (emailInput.current) {
      emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
    }
  };
  var showFieldWithTheme = function showFieldWithTheme(name) {
    var _orderingTheme$theme10, _orderingTheme$theme11, _orderingTheme$theme12, _orderingTheme$theme13;
    return !(orderingTheme !== null && orderingTheme !== void 0 && (_orderingTheme$theme10 = orderingTheme.theme) !== null && _orderingTheme$theme10 !== void 0 && (_orderingTheme$theme11 = _orderingTheme$theme10.profile) !== null && _orderingTheme$theme11 !== void 0 && (_orderingTheme$theme12 = _orderingTheme$theme11.components) !== null && _orderingTheme$theme12 !== void 0 && (_orderingTheme$theme13 = _orderingTheme$theme12[name]) !== null && _orderingTheme$theme13 !== void 0 && _orderingTheme$theme13.hidden);
  };
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (!(formState !== null && formState !== void 0 && formState.loading) && formState !== null && formState !== void 0 && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;
      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ATENTION', 'Atención')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if (!isEdit && onCloseProfile) {
      onCloseProfile();
    }
    if ((user || !isEdit) && !(formState !== null && formState !== void 0 && formState.loading)) {
      setUserCellPhone();
      if (!isEdit) {
        cleanFormState && cleanFormState({
          changes: {}
        });
      }
    }
    if (!isEdit) onCancel && onCancel();
  }, [user, isEdit]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result3, _formState$result4, _formState$result4$re, _ref5, _formState$changes$em, _formState$changes7;
      formMethods.setValue('email', formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.email : (_ref5 = (_formState$changes$em = formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : user && (user === null || user === void 0 ? void 0 : user.email)) !== null && _ref5 !== void 0 ? _ref5 : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    if (requiredFields) return;
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    var _formState$changes8, _formState$changes9, _configs$verification2;
    if (isChanged && userPhoneNumber && isValidPhoneNumber && formState !== null && formState !== void 0 && (_formState$changes8 = formState.changes) !== null && _formState$changes8 !== void 0 && _formState$changes8.country_phone_code && formState !== null && formState !== void 0 && (_formState$changes9 = formState.changes) !== null && _formState$changes9 !== void 0 && _formState$changes9.cellphone && (configs === null || configs === void 0 ? void 0 : (_configs$verification2 = configs.verification_phone_required) === null || _configs$verification2 === void 0 ? void 0 : _configs$verification2.value) === '1') {
      setWillVerifyOtpState(true);
    }
  }, [isValidPhoneNumber, userPhoneNumber, configs === null || configs === void 0 ? void 0 : (_configs$verification3 = configs.verification_phone_required) === null || _configs$verification3 === void 0 ? void 0 : _configs$verification3.value, isChanged]);
  (0, _react.useEffect)(function () {
    if (requiredFields && !requiredFields.includes('cellphone')) setIsValidPhoneNumber(true);
  }, [requiredFields]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout
  }, !(validationFields !== null && validationFields !== void 0 && validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), !requiredFields && /*#__PURE__*/_react.default.createElement(_styles.Divider, null), (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.checkout
  }).map(function (field) {
    var _ref6, _formState$changes$fi, _ref7, _formState$changes$fi2;
    return showField && showField(field.code) && showFieldWithTheme(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? (requiredFields && requiredFields.includes(field.code) || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      borderBottom: true,
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (_ref6 = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref6 !== void 0 ? _ref6 : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    })) : (isMissedData && ['name', 'lastname'].includes(field.code) || !isMissedData && (requiredFields && requiredFields.includes(field.code) || !requiredFields)) && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name)), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      key: field.id,
      type: field.type,
      borderBottom: true,
      name: field.code,
      className: "form",
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (_ref7 = (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : user && user[field.code]) !== null && _ref7 !== void 0 ? _ref7 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    })));
  }), !!showInputPhoneNumber && showCustomerCellphone && (requiredFields && requiredFields.includes('cellphone') || !requiredFields) && /*#__PURE__*/_react.default.createElement(_styles.InputPhoneNumberWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber,
    disabled: !isEdit
  })), !isCheckout && showCustomerPassword && !requiredFields && !isMissedData && /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement("p", null, t('PASSWORD', 'Password')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "password",
    name: "password",
    className: "form",
    disabled: !isEdit,
    borderBottom: true,
    placeholder: t('FRONT_VISUALS_PASSWORD', 'Password'),
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  })), !isCheckout && showCustomerPromotions && !isMissedData && /*#__PURE__*/_react.default.createElement(_styles.PromotionsWrapper, null, /*#__PURE__*/_react.default.createElement(_Checkbox.Checkbox, {
    name: "promotions",
    id: "promotions",
    onChange: function onChange() {
      var _formState$result5, _formState$result6, _formState$result6$re, _formState$result6$re2, _formState$result6$re3, _formState$changes$se, _formState$changes10, _formState$changes10$, _formState$changes10$2, _user$settings, _user$settings$notifi;
      return handleChangePromotions(!(formState !== null && formState !== void 0 && (_formState$result5 = formState.result) !== null && _formState$result5 !== void 0 && _formState$result5.result ? !!(formState !== null && formState !== void 0 && (_formState$result6 = formState.result) !== null && _formState$result6 !== void 0 && (_formState$result6$re = _formState$result6.result) !== null && _formState$result6$re !== void 0 && (_formState$result6$re2 = _formState$result6$re.settings) !== null && _formState$result6$re2 !== void 0 && (_formState$result6$re3 = _formState$result6$re2.notification) !== null && _formState$result6$re3 !== void 0 && _formState$result6$re3.newsletter) : (_formState$changes$se = formState === null || formState === void 0 ? void 0 : (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : (_formState$changes10$ = _formState$changes10.settings) === null || _formState$changes10$ === void 0 ? void 0 : (_formState$changes10$2 = _formState$changes10$.notification) === null || _formState$changes10$2 === void 0 ? void 0 : _formState$changes10$2.newsletter) !== null && _formState$changes$se !== void 0 ? _formState$changes$se : user && (user === null || user === void 0 ? void 0 : (_user$settings = user.settings) === null || _user$settings === void 0 ? void 0 : (_user$settings$notifi = _user$settings.notification) === null || _user$settings$notifi === void 0 ? void 0 : _user$settings$notifi.newsletter)));
    },
    defaultChecked: formState !== null && formState !== void 0 && (_formState$result7 = formState.result) !== null && _formState$result7 !== void 0 && _formState$result7.result ? !!(formState !== null && formState !== void 0 && (_formState$result8 = formState.result) !== null && _formState$result8 !== void 0 && (_formState$result8$re = _formState$result8.result) !== null && _formState$result8$re !== void 0 && (_formState$result8$re2 = _formState$result8$re.settings) !== null && _formState$result8$re2 !== void 0 && (_formState$result8$re3 = _formState$result8$re2.notification) !== null && _formState$result8$re3 !== void 0 && _formState$result8$re3.newsletter) : !!((_formState$changes$se2 = formState === null || formState === void 0 ? void 0 : (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : (_formState$changes11$ = _formState$changes11.settings) === null || _formState$changes11$ === void 0 ? void 0 : (_formState$changes11$2 = _formState$changes11$.notification) === null || _formState$changes11$2 === void 0 ? void 0 : _formState$changes11$2.newsletter) !== null && _formState$changes$se2 !== void 0 ? _formState$changes$se2 : user && (user === null || user === void 0 ? void 0 : (_user$settings2 = user.settings) === null || _user$settings2 === void 0 ? void 0 : (_user$settings2$notif = _user$settings2.notification) === null || _user$settings2$notif === void 0 ? void 0 : _user$settings2$notif.newsletter))
  }), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "promotions"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('RECEIVE_NEWS_EXCLUSIVE_PROMOTIONS', 'Receive newsletters and exclusive promotions')))), showLangauges && !requiredFields && !isMissedData && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.LanguageSelectorWrapper, null, /*#__PURE__*/_react.default.createElement("p", null, t('LANGUAGE', 'Language')), /*#__PURE__*/_react.default.createElement(_LanguageSelector.LanguageSelector, null))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, onCancel && isOldLayout && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    onClick: function onClick() {
      return onCancel(false);
    },
    disabled: formState.loading
  }, t('CANCEL', 'Cancel')), !requiredFields && (formState && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && isEdit || (formState === null || formState === void 0 ? void 0 : formState.loading)) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('UPDATE', 'Update')), requiredFields && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "form-btn",
    color: "primary",
    type: "submit",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('CONTINUE', 'Continue')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
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
exports.UserFormDetailsUI = UserFormDetailsUI;