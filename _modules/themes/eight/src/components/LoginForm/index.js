"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _reactHookForm = require("react-hook-form");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));

var _AiOutlineEye = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineEye"));

var _AiOutlineEyeInvisible = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineEyeInvisible"));

var _styledComponents = require("styled-components");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _styles = require("../../styles");

var _GoogleLogin = require("../GoogleLogin");

var _FacebookLogin = require("../FacebookLogin");

var _AppleLogin = require("../AppleLogin");

var _InputPhoneNumber = require("../InputPhoneNumber");

var _Confirm = require("../../../../../components/Confirm");

var _SpinnerLoader = require("../../../../../components/SpinnerLoader");

var _SmsLogin = require("../../../../../components/SmsLogin");

var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");

var _utils = require("../../../../../utils");

var _styles2 = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LoginFormUI = function LoginFormUI(props) {
  var _configs$google_login, _props$beforeElements, _props$beforeComponen, _configs$google_login2, _configs$facebook_log, _configs$facebook_log2, _configs$facebook_id, _configs$facebook_id2, _configs$apple_login_, _configs$twilio_servi, _configs$twilio_servi2, _theme$defaultLanguag, _props$beforeMidEleme, _props$beforeMidCompo, _props$afterMidElemen, _props$afterMidCompon, _theme$defaultLanguag2, _props$afterComponent, _props$afterElements;

  var useLoginByEmail = props.useLoginByEmail,
      useLoginByCellphone = props.useLoginByCellphone,
      handleChangeInput = props.handleChangeInput,
      handleReCaptcha = props.handleReCaptcha,
      handleChangeTab = props.handleChangeTab,
      handleButtonLoginClick = props.handleButtonLoginClick,
      handleSendVerifyCode = props.handleSendVerifyCode,
      handleCheckPhoneCode = props.handleCheckPhoneCode,
      elementLinkToSignup = props.elementLinkToSignup,
      elementLinkToForgotPassword = props.elementLinkToForgotPassword,
      formState = props.formState,
      verifyPhoneState = props.verifyPhoneState,
      checkPhoneCodeState = props.checkPhoneCodeState,
      loginTab = props.loginTab,
      isPopup = props.isPopup,
      credentials = props.credentials,
      enableReCaptcha = props.enableReCaptcha;
  var numOtpInputs = 4;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var formMethods = (0, _reactHookForm.useForm)();

  var _useState = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      alertState = _useState2[0],
      setAlertState = _useState2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      login = _useSession2[1].login;

  var theme = (0, _styledComponents.useTheme)();

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      passwordSee = _useState4[0],
      setPasswordSee = _useState4[1];

  var emailInput = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loginWithOtpState = _useState6[0],
      setLoginWithOtpState = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      willVerifyOtpState = _useState8[0],
      setWillVerifyOtpState = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      validPhoneFieldState = _useState10[0],
      setValidPhoneField = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      otpState = _useState12[0],
      setOtpState = _useState12[1];

  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
      _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
      otpLeftTime = _useCountdownTimer2[0],
      resetOtpLeftTime = _useCountdownTimer2[2];

  var initParams = {
    client_id: configs === null || configs === void 0 ? void 0 : (_configs$google_login = configs.google_login_client_id) === null || _configs$google_login === void 0 ? void 0 : _configs$google_login.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  };

  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!loginWithOtpState) {
                _context.next = 7;
                break;
              }

              if (validPhoneFieldState) {
                _context.next = 4;
                break;
              }

              setAlertState({
                open: true,
                content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
              });
              return _context.abrupt("return");

            case 4:
              setWillVerifyOtpState(true);
              _context.next = 8;
              break;

            case 7:
              handleButtonLoginClick();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSuccessFacebook = function handleSuccessFacebook(user) {
    var _user$session;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };

  var handleSuccessApple = function handleSuccessApple(user) {
    var _user$session2;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session2 = user.session) === null || _user$session2 === void 0 ? void 0 : _user$session2.access_token
    });
  };

  var handleSuccessGoogle = function handleSuccessGoogle(user) {
    var _user$session3;

    login({
      user: user,
      token: user === null || user === void 0 ? void 0 : (_user$session3 = user.session) === null || _user$session3 === void 0 ? void 0 : _user$session3.access_token
    });
  };

  var togglePasswordView = function togglePasswordView() {
    setPasswordSee(!passwordSee);
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

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

  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    handleChangeInput({
      target: {
        name: 'email',
        value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
  };

  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setValidPhoneField(isValid);
    handleChangeInput({
      target: {
        name: 'cellphone',
        value: number
      }
    });
    formMethods.setValue('cellphone', number, '');
  };

  var handleSendOtp = function handleSendOtp() {
    if (willVerifyOtpState) {
      var _parseNumber = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone),
          cellphone = _parseNumber.cellphone,
          countryPhoneCode = _parseNumber.countryPhoneCode;

      resetOtpLeftTime();
      handleSendVerifyCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode
      });
    }
  };

  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState]);
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
    formMethods.register('email', {
      required: loginTab === 'email' ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
    formMethods.register('cellphone', {
      required: loginTab === 'cellphone' ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone')) : null
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    handleSendOtp();
  }, [willVerifyOtpState]);
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      var _parseNumber2 = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone),
          cellphone = _parseNumber2.cellphone,
          countryPhoneCode = _parseNumber2.countryPhoneCode;

      handleCheckPhoneCode({
        cellphone: cellphone,
        country_phone_code: countryPhoneCode,
        code: otpState
      });
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$;

    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error) {
      var _checkPhoneCodeState$2;

      setAlertState({
        open: true,
        content: (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : (_checkPhoneCodeState$2 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$2 === void 0 ? void 0 : _checkPhoneCodeState$2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [checkPhoneCodeState]);
  (0, _react.useEffect)(function () {
    var _verifyPhoneState$res;

    if (verifyPhoneState !== null && verifyPhoneState !== void 0 && (_verifyPhoneState$res = verifyPhoneState.result) !== null && _verifyPhoneState$res !== void 0 && _verifyPhoneState$res.error) {
      var _verifyPhoneState$res2;

      setAlertState({
        open: true,
        content: (verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : (_verifyPhoneState$res2 = verifyPhoneState.result) === null || _verifyPhoneState$res2 === void 0 ? void 0 : _verifyPhoneState$res2.result) || [t('ERROR', 'Error')]
      });
    } else {
      resetOtpLeftTime();
    }
  }, [verifyPhoneState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles2.LoginContainer, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles2.FormSide, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles2.Title, null, t('SIGN_IN_WITH_ORDERING', 'Sign in with Ordering')), /*#__PURE__*/_react.default.createElement(_styles2.Description, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum pharetra placerat massa risus aliquet purus arcu. Quis enim, interdum ac massa feugiat arcu nulla aliquet."), !props.isDisableButtons && !loginWithOtpState && (Object.keys(configs).length > 0 ? /*#__PURE__*/_react.default.createElement(_styles2.SocialButtons, {
    isPopup: isPopup
  }, (configs === null || configs === void 0 ? void 0 : (_configs$google_login2 = configs.google_login_client_id) === null || _configs$google_login2 === void 0 ? void 0 : _configs$google_login2.value) && /*#__PURE__*/_react.default.createElement(_GoogleLogin.GoogleLoginButton, {
    initParams: initParams,
    handleSuccessGoogleLogin: handleSuccessGoogle,
    onFailure: function onFailure(data) {
      return console.log('onFailure', data);
    }
  }), ((configs === null || configs === void 0 ? void 0 : (_configs$facebook_log = configs.facebook_login) === null || _configs$facebook_log === void 0 ? void 0 : _configs$facebook_log.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$facebook_log2 = configs.facebook_login) === null || _configs$facebook_log2 === void 0 ? void 0 : _configs$facebook_log2.value) === '1') && (configs === null || configs === void 0 ? void 0 : (_configs$facebook_id = configs.facebook_id) === null || _configs$facebook_id === void 0 ? void 0 : _configs$facebook_id.value) && /*#__PURE__*/_react.default.createElement(_FacebookLogin.FacebookLoginButton, {
    appId: configs === null || configs === void 0 ? void 0 : (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value,
    handleSuccessFacebookLogin: handleSuccessFacebook
  }), (configs === null || configs === void 0 ? void 0 : (_configs$apple_login_ = configs.apple_login_client_id) === null || _configs$apple_login_ === void 0 ? void 0 : _configs$apple_login_.value) && /*#__PURE__*/_react.default.createElement(_AppleLogin.AppleLogin, {
    onSuccess: handleSuccessApple,
    onFailure: function onFailure(data) {
      return console.log('onFailure', data);
    }
  }), useLoginByCellphone && loginTab === 'cellphone' && configs && Object.keys(configs).length > 0 && ((configs === null || configs === void 0 ? void 0 : (_configs$twilio_servi = configs.twilio_service_enabled) === null || _configs$twilio_servi === void 0 ? void 0 : _configs$twilio_servi.value) === 'true' || (configs === null || configs === void 0 ? void 0 : (_configs$twilio_servi2 = configs.twilio_service_enabled) === null || _configs$twilio_servi2 === void 0 ? void 0 : _configs$twilio_servi2.value) === '1') && /*#__PURE__*/_react.default.createElement(_SmsLogin.SmsLoginButton, {
    handleSmsLogin: function handleSmsLogin() {
      setLoginWithOtpState(true);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles2.SkeletonSocialWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  }), useLoginByCellphone && loginTab === 'cellphone' && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  }))), /*#__PURE__*/_react.default.createElement(_styles2.DottedBorderBound, null), useLoginByEmail && useLoginByCellphone && !loginWithOtpState && /*#__PURE__*/_react.default.createElement(_styles2.LoginWith, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.Tabs, {
    variant: "primary"
  }, useLoginByEmail && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    onClick: function onClick() {
      return handleChangeTab('email');
    },
    active: loginTab === 'email'
  }, t('LOGIN_WITH_EMAIL', 'Login with Email')), useLoginByCellphone && /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    onClick: function onClick() {
      return handleChangeTab('cellphone');
    },
    active: loginTab === 'cellphone'
  }, t('LOGIN_WITH_CELLPHONE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.LOGIN_WITH_CELLPHONE) || 'Login with Cellphone')))), (useLoginByCellphone || useLoginByEmail) && /*#__PURE__*/_react.default.createElement(_styles2.FormInput, {
    noValidate: true,
    isPopup: isPopup
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), useLoginByEmail && loginTab === 'email' && /*#__PURE__*/_react.default.createElement(_styles.CustomInputContainer, {
    placeholder: t('EMAIL', 'Email')
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "email",
    "aria-label": "email",
    ref: emailInput,
    placeholder: t('EMAIL', 'Email'),
    onChange: handleChangeInputEmail,
    autoComplete: "off"
  })), useLoginByCellphone && loginTab === 'cellphone' && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: credentials === null || credentials === void 0 ? void 0 : credentials.cellphone,
    setValue: handleChangePhoneNumber,
    handleIsValid: function handleIsValid() {}
  }), !(verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.loading) && willVerifyOtpState && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime)), /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleSendOtp
  }, t('RESEND_AGAIN', 'Resend again'), "?")), /*#__PURE__*/_react.default.createElement(_styles2.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    placeholder: "0000",
    isInputNum: true,
    shouldAutoFocus: true
  }))), ((verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loading) || (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading)) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      height: 160
    }
  }), !loginWithOtpState && /*#__PURE__*/_react.default.createElement(_styles2.WrapperPassword, null, /*#__PURE__*/_react.default.createElement(_styles.CustomInputContainer, {
    placeholder: t('PASSWORD', 'Password')
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    "aria-label": "password",
    placeholder: t('PASSWORD', 'Password'),
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles2.TogglePassword, {
    onClick: togglePasswordView
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_AiOutlineEye.default, null) : /*#__PURE__*/_react.default.createElement(_AiOutlineEyeInvisible.default, null))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), !loginWithOtpState && /*#__PURE__*/_react.default.createElement(_styles2.RedirectLink, {
    isPopup: isPopup
  }, elementLinkToForgotPassword), props.isRecaptchaEnable && enableReCaptcha && /*#__PURE__*/_react.default.createElement(_styles2.ReCaptchaWrapper, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.ReCaptcha, {
    handleReCaptcha: handleReCaptcha
  })), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    color: "primaryGradient",
    onClick: formMethods.handleSubmit(onSubmit),
    disabled: formState.loading
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : loginWithOtpState ? t('GET_VERIFY_CODE', 'Get verify code') : t('SIGN_IN_WITH_ORDERING', 'Sign in with Ordering')), loginWithOtpState && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.Button, {
    type: "button",
    color: "secundary",
    disabled: formState.loading,
    onClick: function onClick() {
      setLoginWithOtpState(false);
    }
  }, t('CANCEL', 'Cancel'))), /*#__PURE__*/_react.default.createElement(_styles2.DottedBorderBound, {
    bottom: true
  }), elementLinkToSignup && !loginWithOtpState && /*#__PURE__*/_react.default.createElement(_styles2.RedirectLink, {
    register: true,
    isPopup: isPopup,
    isCreateAccount: true
  }, /*#__PURE__*/_react.default.createElement("span", null, t('NEW_ON_PLATFORM', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.NEW_ON_PLATFORM) || 'New on Ordering?')), elementLinkToSignup)), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('LOGIN', 'Login'),
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
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

var LoginForm = function LoginForm(props) {
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LoginFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LoginForm, loginControllerProps);
};

exports.LoginForm = LoginForm;