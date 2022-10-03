"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

/**
 * Component to manage login behavior without UI component
 */
var LoginForm = function LoginForm(props) {
  var _configs$phone_passwo, _configs$opt_email_en, _configs$otp_cellphon, _configs$email_passwo;

  var UIComponent = props.UIComponent,
      handleButtonLoginClick = props.handleButtonLoginClick,
      handleSuccessLogin = props.handleSuccessLogin,
      useDefualtSessionManager = props.useDefualtSessionManager,
      urlToRedirect = props.urlToRedirect,
      allowedLevels = props.allowedLevels,
      handleCustomLogin = props.handleCustomLogin,
      notificationState = props.notificationState,
      setOtpDataUser = props.setOtpDataUser,
      handleOpenSignup = props.handleOpenSignup;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var defaultLoginTab = props.defaultLoginTab;

  var _useState = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    email: '',
    cellphone: '',
    password: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      credentials = _useState4[0],
      setCredentials = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      verifyPhoneState = _useState6[0],
      setVerifyPhoneState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      checkPhoneCodeState = _useState8[0],
      setCheckPhoneCodeState = _useState8[1];

  var _useEvent = (0, _orderingComponents.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      reCaptchaValue = _useState10[0],
      setReCaptchaValue = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isReCaptchaEnable = _useState12[0],
      setIsReCaptchaEnable = _useState12[1];

  var useLoginByCellphone = (configs === null || configs === void 0 ? void 0 : (_configs$phone_passwo = configs.phone_password_login_enabled) === null || _configs$phone_passwo === void 0 ? void 0 : _configs$phone_passwo.value) === '1';
  var useLoginOtpEmail = (configs === null || configs === void 0 ? void 0 : (_configs$opt_email_en = configs.opt_email_enabled) === null || _configs$opt_email_en === void 0 ? void 0 : _configs$opt_email_en.value) === '1';
  var useLoginOtpCellphone = (configs === null || configs === void 0 ? void 0 : (_configs$otp_cellphon = configs.otp_cellphone_enabled) === null || _configs$otp_cellphon === void 0 ? void 0 : _configs$otp_cellphon.value) === '1';
  var useLoginByEmail = useLoginByCellphone || useLoginOtpEmail || useLoginOtpCellphone ? (configs === null || configs === void 0 ? void 0 : (_configs$email_passwo = configs.email_password_login_enabled) === null || _configs$email_passwo === void 0 ? void 0 : _configs$email_passwo.value) === '1' : true;
  var useLoginOtp = useLoginOtpEmail || useLoginOtpCellphone;
  defaultLoginTab = defaultLoginTab || (useLoginByEmail ? 'email' : useLoginByCellphone ? 'cellphone' : 'otp');

  var _useState13 = (0, _react.useState)(defaultLoginTab),
      _useState14 = _slicedToArray(_useState13, 2),
      loginTab = _useState14[0],
      setLoginTab = _useState14[1];

  var _useState15 = (0, _react.useState)(!useLoginOtpEmail && useLoginOtpCellphone ? 'cellphone' : 'email'),
      _useState16 = _slicedToArray(_useState15, 2),
      otpType = _useState16[0],
      setOtpType = _useState16[1];

  var _useState17 = (0, _react.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      otpState = _useState18[0],
      setOtpState = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      createOtpUser = _useState20[0],
      setCreateOtpUser = _useState20[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      _useSession2$ = _useSession2[1],
      login = _useSession2$.login,
      logout = _useSession2$.logout;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];
  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */


  var handleLoginClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(values) {
      var _credentials4, _credentials4$cellpho, _window, _credentials, _credentials2, _credentials3, parsedNumber, cellphone, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, level, session, access_token, _yield$ordering$setAc, logoutResp;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleCustomLogin) {
                _context.next = 3;
                break;
              }

              handleCustomLogin(values || credentials, loginTab);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;

              if (loginTab === 'otp') {
                _credentials = (_credentials2 = {}, _defineProperty(_credentials2, otpType, values && values[otpType] || credentials[otpType]), _defineProperty(_credentials2, "one_time_password", values && (values === null || values === void 0 ? void 0 : values.code) || otpState), _defineProperty(_credentials2, "country_code", values && (values === null || values === void 0 ? void 0 : values.country_phone_code) || (credentials === null || credentials === void 0 ? void 0 : credentials.country_phone_code)), _credentials2);

                if (otpType === 'cellphone') {
                  _credentials = _objectSpread(_objectSpread({}, _credentials), {}, {
                    country_phone_code: values && (values === null || values === void 0 ? void 0 : values.country_phone_code) || (credentials === null || credentials === void 0 ? void 0 : credentials.country_phone_code)
                  });
                }
              } else {
                _credentials = (_credentials3 = {}, _defineProperty(_credentials3, loginTab, values && values[loginTab] || credentials[loginTab]), _defineProperty(_credentials3, "password", values && (values === null || values === void 0 ? void 0 : values.password) || credentials.password), _credentials3);
              }

              if (!isReCaptchaEnable) {
                _context.next = 12;
                break;
              }

              if (!(reCaptchaValue === null)) {
                _context.next = 11;
                break;
              }

              setFormState({
                result: {
                  error: true,
                  result: t('RECAPTCHA_VALIDATION_IS_REQUIRED', 'The captcha validation is required')
                },
                loading: false
              });
              return _context.abrupt("return");

            case 11:
              _credentials.verification_code = reCaptchaValue;

            case 12:
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));

              if ((_credentials4 = _credentials) !== null && _credentials4 !== void 0 && (_credentials4$cellpho = _credentials4.cellphone) !== null && _credentials4$cellpho !== void 0 && _credentials4$cellpho.includes('+')) {
                parsedNumber = (0, _libphonenumberJs.default)(_credentials.cellphone);
                cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
                _credentials.cellphone = cellphone;
              }

              if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
                _credentials.notification_app = notificationState.notification_app;
                _credentials.notification_token = notificationState.notification_token;
              }

              _context.next = 17;
              return ordering.users().auth(_credentials);

            case 17:
              _yield$ordering$users = _context.sent;
              _yield$ordering$users2 = _yield$ordering$users.content;
              error = _yield$ordering$users2.error;
              result = _yield$ordering$users2.result;

              if (isReCaptchaEnable && (_window = window) !== null && _window !== void 0 && _window.grecaptcha) {
                window.grecaptcha.reset();
                setReCaptchaValue(null);
              }

              if (error) {
                _context.next = 45;
                break;
              }

              if (!useDefualtSessionManager) {
                _context.next = 42;
                break;
              }

              if (!(allowedLevels && (allowedLevels === null || allowedLevels === void 0 ? void 0 : allowedLevels.length) > 0)) {
                _context.next = 41;
                break;
              }

              level = result.level, session = result.session;
              access_token = session === null || session === void 0 ? void 0 : session.access_token;

              if (allowedLevels.includes(level)) {
                _context.next = 41;
                break;
              }

              _context.prev = 28;
              _context.next = 31;
              return ordering.setAccessToken(access_token).users().logout();

            case 31:
              _yield$ordering$setAc = _context.sent;
              logoutResp = _yield$ordering$setAc.content;

              if (!logoutResp.error) {
                logout();
              }

              setFormState({
                result: {
                  error: true,
                  result: ['YOU_DO_NOT_HAVE_PERMISSION']
                },
                loading: false
              });
              _context.next = 40;
              break;

            case 37:
              _context.prev = 37;
              _context.t0 = _context["catch"](28);
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });

            case 40:
              return _context.abrupt("return");

            case 41:
              login({
                user: result,
                token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
              });

            case 42:
              events.emit('userLogin', result);

              if (handleSuccessLogin) {
                handleSuccessLogin(result);
              }

              if (urlToRedirect) {
                window.location.href = "".concat(window.location.origin).concat(urlToRedirect);
              }

            case 45:
              setFormState({
                result: {
                  error: error,
                  result: result
                },
                loading: false
              });
              _context.next = 51;
              break;

            case 48:
              _context.prev = 48;
              _context.t1 = _context["catch"](3);
              setFormState({
                result: {
                  error: true,
                  result: _context.t1.message
                },
                loading: false
              });

            case 51:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 48], [28, 37]]);
    }));

    return function handleLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var _configs$security_rec;

    setIsReCaptchaEnable(props.isRecaptchaEnable && configs && Object.keys(configs).length > 0 && (configs === null || configs === void 0 ? void 0 : (_configs$security_rec = configs.security_recaptcha_auth) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === '1');

    if (useLoginOtpCellphone && !useLoginOtpEmail) {
      setOtpType('cellphone');
    }
  }, [configs]);
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */

  var handleChangeInput = function handleChangeInput(e) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */


  var handleChangeTab = function handleChangeTab(tab) {
    setLoginTab(tab);
  };
  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */


  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(values) {
      var response, res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: false
                }
              }));
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: true
              }));
              _context2.next = 5;
              return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  cellphone: values.cellphone,
                  country_phone_code: "+".concat(values.country_phone_code)
                })
              });

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              res = _context2.sent;
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: false,
                result: res
              }));
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: false,
                result: {
                  error: _context2.t0.message
                }
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function sendVerifyPhoneCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSetCheckPhoneCodeState = function handleSetCheckPhoneCodeState(data) {
    var values = data || {
      loading: false,
      result: {
        error: false
      }
    };
    setCheckPhoneCodeState(values);
  };
  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */


  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(values) {
      var body, _res$result, response, res, _res$result2, _res$result2$session;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              body = _objectSpread({}, values);
              _context3.prev = 1;
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: true
              }));

              if (notificationState !== null && notificationState !== void 0 && notificationState.notification_token) {
                body.notification_token = notificationState.notification_token;
                body.notification_app = notificationState.notification_app;
              }

              _context3.next = 6;
              return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              res = _context3.sent;

              if (!(res !== null && res !== void 0 && res.error) && res !== null && res !== void 0 && (_res$result = res.result) !== null && _res$result !== void 0 && _res$result.id) {
                login({
                  user: res === null || res === void 0 ? void 0 : res.result,
                  token: res === null || res === void 0 ? void 0 : (_res$result2 = res.result) === null || _res$result2 === void 0 ? void 0 : (_res$result2$session = _res$result2.session) === null || _res$result2$session === void 0 ? void 0 : _res$result2$session.access_token
                });

                if (handleSuccessLogin) {
                  handleSuccessLogin(res === null || res === void 0 ? void 0 : res.result);
                }
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: res
              }));
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](1);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  error: _context3.t0.message
                }
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 14]]);
    }));

    return function checkVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  var generateOtpCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(values) {
      var body, email, cellphone, countryPhoneCode, response, _yield$response$json, result, error;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = {
                type: 4,
                channel: otpType === 'email' ? 1 : 2,
                size: 6
              };
              email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
              cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
              countryPhoneCode = (values === null || values === void 0 ? void 0 : values.countryPhoneCode) || (values === null || values === void 0 ? void 0 : values.country_phone_code) || credentials.country_phone_code;
              _context4.prev = 4;

              if (otpType === 'cellphone') {
                body.country_phone_code = countryPhoneCode;
                body.cellphone = cellphone;
                setCredentials({
                  cellphone: cellphone,
                  country_phone_code: countryPhoneCode
                });
              } else {
                body.email = email;
                setCredentials({
                  email: email
                });
              }

              _context4.next = 8;
              return fetch("".concat(ordering.root, "/codes/generate"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 8:
              response = _context4.sent;
              _context4.next = 11;
              return response.json();

            case 11:
              _yield$response$json = _context4.sent;
              result = _yield$response$json.result;
              error = _yield$response$json.error;

              if (error) {
                _context4.next = 17;
                break;
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  result: result,
                  error: null
                }
              }));
              return _context4.abrupt("return");

            case 17:
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: result
                }
              }));
              _context4.next = 23;
              break;

            case 20:
              _context4.prev = 20;
              _context4.t0 = _context4["catch"](4);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: _context4.t0.message
                }
              }));

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[4, 20]]);
    }));

    return function generateOtpCode(_x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  var alseaOtpInitialize = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(values, type, social) {
      var body, requestParams, params, result, responseOtp, resultOtp, _responseOtp, _resultOtp;

      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: true
              }));
              setCreateOtpUser(false);
              body = {
                type: type
              };

              if (social !== null && social !== void 0 && social.cellphone || otpType === 'cellphone') {
                body.user = (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
                body.cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
                body.country_code = values === null || values === void 0 ? void 0 : values.countryPhoneCode;
              }

              if (social !== null && social !== void 0 && social.email && !(social !== null && social !== void 0 && social.cellphone) || otpType === 'email') {
                body.email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
                body.user = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
              }

              requestParams = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              };
              params = "pass=q7i1rcljnv3roqv72sleodqt9mi0udrrotqau4rhi81274q2ejt".concat(body.cellphone ? "&cellphone=".concat(body.cellphone) : '').concat(body.country_code ? "&country_phone_code=".concat(body.country_code) : '').concat(body.email ? "&mail=".concat(body.email) : '');
              _context5.next = 10;
              return alseaOtpConsult(params, social);

            case 10:
              result = _context5.sent;

              if (!social) {
                _context5.next = 14;
                break;
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false
              }));
              return _context5.abrupt("return");

            case 14:
              if (!(result === 'new_user')) {
                _context5.next = 34;
                break;
              }

              if (!(otpType === 'cellphone')) {
                _context5.next = 29;
                break;
              }

              _context5.next = 18;
              return fetch("https://alsea-plugins-staging.ordering.co/alseaplatform/cellphone_new_user_code.php", requestParams);

            case 18:
              responseOtp = _context5.sent;
              _context5.next = 21;
              return responseOtp.json();

            case 21:
              resultOtp = _context5.sent;

              if (!resultOtp.error) {
                _context5.next = 25;
                break;
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: resultOtp.result
                },
                loading: false
              }));
              return _context5.abrupt("return", false);

            case 25:
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  result: resultOtp.result
                },
                loading: false
              }));
              setCreateOtpUser(true);
              _context5.next = 31;
              break;

            case 29:
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: t('EMAIL_DOES_NOT_EXIST', 'The email doesn\'t exist')
                },
                loading: false
              }));
              setOtpType('cellphone');

            case 31:
              return _context5.abrupt("return", true);

            case 34:
              if (!(result === 'existing_user')) {
                _context5.next = 49;
                break;
              }

              _context5.next = 37;
              return fetch("https://alsea-plugins-staging.ordering.co/alseaplatform/otp_create.php", requestParams);

            case 37:
              _responseOtp = _context5.sent;
              _context5.next = 40;
              return _responseOtp.json();

            case 40:
              _resultOtp = _context5.sent;

              if (!_resultOtp.error) {
                _context5.next = 44;
                break;
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: _resultOtp.result
                },
                loading: false
              }));
              return _context5.abrupt("return", false);

            case 44:
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  result: _resultOtp.result
                },
                loading: false
              }));
              setCredentials(_objectSpread(_objectSpread({}, credentials), {}, {
                country_phone_code: body.country_code
              }));
              return _context5.abrupt("return", true);

            case 49:
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: result.result
                },
                loading: false
              }));
              return _context5.abrupt("return", false);

            case 51:
              _context5.next = 56;
              break;

            case 53:
              _context5.prev = 53;
              _context5.t0 = _context5["catch"](0);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: _context5.t0.message
                },
                loading: false
              }));

            case 56:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 53]]);
    }));

    return function alseaOtpInitialize(_x5, _x6, _x7) {
      return _ref5.apply(this, arguments);
    };
  }();

  var alseaOtpConsult = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(params) {
      var response, text;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return fetch("https://alsea-plugins-staging.ordering.co/alseaplatform//wow_search_recover.php?".concat(params), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                }
              });

            case 3:
              response = _context6.sent;
              _context6.next = 6;
              return response.text();

            case 6:
              text = _context6.sent;
              return _context6.abrupt("return", text);

            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](0);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: _context6.t0.message
                }
              }));

            case 13:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 10]]);
    }));

    return function alseaOtpConsult(_x8) {
      return _ref6.apply(this, arguments);
    };
  }();

  var alseaOtpCreateUser = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(values) {
      var _result$result, _result$result2, _result$result2$sessi, body, response, result;

      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              body = {
                code: values.code
              };

              if (otpType === 'cellphone') {
                body.cellphone = (values === null || values === void 0 ? void 0 : values.cellphone) || (credentials === null || credentials === void 0 ? void 0 : credentials.cellphone);
                body.country_code = values === null || values === void 0 ? void 0 : values.country_code;
              } else {
                body.email = (values === null || values === void 0 ? void 0 : values.email) || (credentials === null || credentials === void 0 ? void 0 : credentials.email);
              }

              _context7.next = 6;
              return fetch("https://alsea-plugins-staging.ordering.co/alseaplatform/cellphone_new_user_signup.php", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 6:
              response = _context7.sent;
              _context7.next = 9;
              return response.json();

            case 9:
              result = _context7.sent;

              if (!result.error) {
                _context7.next = 13;
                break;
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: result.result
                }
              }));
              return _context7.abrupt("return");

            case 13:
              setOtpDataUser({
                email: body.email,
                cellphone: body.cellphone,
                country_code: body.country_code,
                id: result === null || result === void 0 ? void 0 : (_result$result = result.result) === null || _result$result === void 0 ? void 0 : _result$result.id,
                token: result === null || result === void 0 ? void 0 : (_result$result2 = result.result) === null || _result$result2 === void 0 ? void 0 : (_result$result2$sessi = _result$result2.session) === null || _result$result2$sessi === void 0 ? void 0 : _result$result2$sessi.access_token
              });
              handleOpenSignup();
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false
              }));
              _context7.next = 22;
              break;

            case 18:
              _context7.prev = 18;
              _context7.t0 = _context7["catch"](0);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                result: {
                  error: _context7.t0.message
                }
              }));
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false
              }));

            case 22:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[0, 18]]);
    }));

    return function alseaOtpCreateUser(_x9) {
      return _ref7.apply(this, arguments);
    };
  }();

  var handleLoginFacebookAlsea = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(fbdata) {
      var _fbdata$authResponse, fbBody, responsefb, _yield$responsefb$jso, result, error, redirect, _result$session2;

      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              fbBody = JSON.stringify({
                access_token: fbdata === null || fbdata === void 0 ? void 0 : (_fbdata$authResponse = fbdata.authResponse) === null || _fbdata$authResponse === void 0 ? void 0 : _fbdata$authResponse.accessToken,
                social_id: fbdata === null || fbdata === void 0 ? void 0 : fbdata.social_id
              });
              _context8.next = 4;
              return fetch("https://alsea-plugins-staging.ordering.co/alseaplatform/api/facebook.php", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: fbBody
              });

            case 4:
              responsefb = _context8.sent;
              _context8.next = 7;
              return responsefb.json();

            case 7:
              _yield$responsefb$jso = _context8.sent;
              result = _yield$responsefb$jso.result;
              error = _yield$responsefb$jso.error;
              redirect = _yield$responsefb$jso.redirect;

              if (!error) {
                _context8.next = 14;
                break;
              }

              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                result: {
                  error: true,
                  result: result
                }
              }));
              return _context8.abrupt("return");

            case 14:
              if (redirect) {
                setOtpDataUser(_objectSpread(_objectSpread({}, result), {}, {
                  social: true
                }));
                handleOpenSignup();
              } else {
                login({
                  user: result,
                  token: result === null || result === void 0 ? void 0 : (_result$session2 = result.session) === null || _result$session2 === void 0 ? void 0 : _result$session2.access_token
                });
              }

              _context8.next = 20;
              break;

            case 17:
              _context8.prev = 17;
              _context8.t0 = _context8["catch"](0);
              setFormState({
                result: {
                  error: true,
                  result: _context8.t0.message
                },
                loading: false
              });

            case 20:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 17]]);
    }));

    return function handleLoginFacebookAlsea(_x10) {
      return _ref8.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    loginTab: loginTab,
    credentials: credentials,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState,
    handleChangeInput: handleChangeInput,
    handleButtonLoginClick: handleButtonLoginClick || handleLoginClick,
    handleChangeTab: handleChangeTab,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode,
    enableReCaptcha: isReCaptchaEnable,
    handleReCaptcha: setReCaptchaValue,
    useLoginOtp: useLoginOtp,
    setOtpType: setOtpType,
    otpType: otpType,
    generateOtpCode: generateOtpCode,
    setOtpState: setOtpState,
    otpState: otpState,
    useLoginByEmail: useLoginByEmail,
    useLoginByCellphone: useLoginByCellphone,
    useLoginOtpEmail: useLoginOtpEmail,
    useLoginOtpCellphone: useLoginOtpCellphone,
    alseaOtpInitialize: alseaOtpInitialize,
    createOtpUser: createOtpUser,
    alseaOtpCreateUser: alseaOtpCreateUser // handleCheckFacebookInfo={handleCheckFacebookInfo}
    ,
    handleLoginFacebookAlsea: handleLoginFacebookAlsea
  })));
};

exports.LoginForm = LoginForm;
LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: _propTypes.default.func,

  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: _propTypes.default.func,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: _propTypes.default.bool,

  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: _propTypes.default.bool,

  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: _propTypes.default.string,

  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: _propTypes.default.string,

  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: _propTypes.default.string,

  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: _propTypes.default.element,

  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: _propTypes.default.element
};
LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};