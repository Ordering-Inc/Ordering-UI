"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactHookForm = require("react-hook-form");
var _styledComponents = require("styled-components");
var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));
var _reactOtpInput = _interopRequireDefault(require("react-otp-input"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _Confirm = require("../Confirm");
var _SpinnerLoader = require("../../../../../components/SpinnerLoader");
var _InputPhoneNumber = require("../InputPhoneNumber");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
var _Inputs = require("../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _FacebookLogin = require("../FacebookLogin");
var _AppleLogin = require("../AppleLogin");
var _SmsLogin = require("../../../../../components/SmsLogin");
var _useCountdownTimer3 = require("../../../../../hooks/useCountdownTimer");
var _useRecaptcha3 = require("../../../../../hooks/useRecaptcha");
var _utils = require("../../../../../utils");
var _GoogleLogin = require("../GoogleLogin");
var _reactBootstrapIcons = require("react-bootstrap-icons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var LoginFormUI = function LoginFormUI(props) {
  var _configs$google_login, _optimizationLoad$res, _optimizationLoad$res2, _optimizationLoad$res3, _configs$spoonity_tit, _configs$facebook_log, _configs$facebook_log2, _configs$facebook_id, _configs$google_login2, _configs$google_login3, _configs$google_login4, _configs$apple_login_, _configs$twilio_servi, _configs$twilio_servi2, _props$beforeElements, _props$beforeComponen, _theme$images, _theme$images2, _props$beforeMidEleme, _props$beforeMidCompo, _formMethods$errors, _formMethods$errors2, _formMethods$errors3, _formMethods$errors4, _formMethods$errors5, _formMethods$errors6, _formMethods$errors7, _formMethods$errors8, _formMethods$errors9, _formMethods$errors0, _formMethods$errors1, _formMethods$errors10, _props$afterMidElemen, _props$afterMidCompon, _theme$defaultLanguag, _configs$facebook_log3, _configs$facebook_log4, _configs$facebook_id2, _configs$facebook_id3, _configs$google_login5, _configs$google_login6, _configs$google_login7, _configs$apple_login_2, _configs$twilio_servi3, _configs$twilio_servi4, _props$afterComponent, _props$afterElements;
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
    enableReCaptcha = props.enableReCaptcha,
    useRootPoint = props.useRootPoint,
    isCustomerMode = props.isCustomerMode,
    otpType = props.otpType,
    setOtpType = props.setOtpType,
    generateOtpCode = props.generateOtpCode,
    otpState = props.otpState,
    setOtpState = props.setOtpState,
    useLoginOtpEmail = props.useLoginOtpEmail,
    useLoginOtpCellphone = props.useLoginOtpCellphone,
    handleLoginSpoonity = props.handleLoginSpoonity,
    useLoginSpoonity = props.useLoginSpoonity,
    setCellphoneStartZero = props.setCellphoneStartZero;
  var numOtpInputs = loginTab === 'otp' ? 6 : 4;
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 2),
    ordering = _useApi2[0],
    setOrdering = _useApi2[1].setOrdering;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useOptimizationLoad = (0, _orderingComponents.useOptimizationLoad)(),
    _useOptimizationLoad2 = _slicedToArray(_useOptimizationLoad, 1),
    optimizationLoad = _useOptimizationLoad2[0];
  var formMethods = (0, _reactHookForm.useForm)();
  var _useRecaptcha = (0, _useRecaptcha3.useRecaptcha)(enableReCaptcha),
    _useRecaptcha2 = _slicedToArray(_useRecaptcha, 1),
    recaptchaConfig = _useRecaptcha2[0];
  var _useState = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState2 = _slicedToArray(_useState, 2),
    alertState = _useState2[0],
    setAlertState = _useState2[1];
  var _useState3 = (0, _react.useState)({
      version: '',
      siteKey: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    reCaptchaVersion = _useState4[0],
    setRecaptchaVersion = _useState4[1];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 2),
    login = _useSession2[1].login;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    passwordSee = _useState6[0],
    setPasswordSee = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loginWithOtpState = _useState8[0],
    setLoginWithOtpState = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    willVerifyOtpState = _useState0[0],
    setWillVerifyOtpState = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    validPhoneFieldState = _useState10[0],
    setValidPhoneField = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    projectName = _useState12[0],
    setProjectName = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    submitted = _useState14[0],
    setSubmitted = _useState14[1];
  var _useCountdownTimer = (0, _useCountdownTimer3.useCountdownTimer)(600, !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && willVerifyOtpState),
    _useCountdownTimer2 = _slicedToArray(_useCountdownTimer, 3),
    otpLeftTime = _useCountdownTimer2[0],
    resetOtpLeftTime = _useCountdownTimer2[2];
  var isOtpEmail = loginTab === 'otp' && otpType === 'email';
  var isOtpCellphone = loginTab === 'otp' && otpType === 'cellphone';
  var initParams = {
    client_id: configs === null || configs === void 0 || (_configs$google_login = configs.google_login_client_id) === null || _configs$google_login === void 0 ? void 0 : _configs$google_login.value,
    cookiepolicy: 'single_host_origin',
    scope: 'profile'
  };
  var googleLoginEnabled = (optimizationLoad === null || optimizationLoad === void 0 || (_optimizationLoad$res = optimizationLoad.result) === null || _optimizationLoad$res === void 0 || (_optimizationLoad$res = _optimizationLoad$res.configs) === null || _optimizationLoad$res === void 0 || (_optimizationLoad$res = _optimizationLoad$res.google_login_enabled) === null || _optimizationLoad$res === void 0 ? void 0 : _optimizationLoad$res.value) === '1';
  var facebookLoginEnabled = (optimizationLoad === null || optimizationLoad === void 0 || (_optimizationLoad$res2 = optimizationLoad.result) === null || _optimizationLoad$res2 === void 0 || (_optimizationLoad$res2 = _optimizationLoad$res2.configs) === null || _optimizationLoad$res2 === void 0 || (_optimizationLoad$res2 = _optimizationLoad$res2.facebook_login_enabled) === null || _optimizationLoad$res2 === void 0 ? void 0 : _optimizationLoad$res2.value) === '1';
  var appleLoginEnabled = (optimizationLoad === null || optimizationLoad === void 0 || (_optimizationLoad$res3 = optimizationLoad.result) === null || _optimizationLoad$res3 === void 0 || (_optimizationLoad$res3 = _optimizationLoad$res3.configs) === null || _optimizationLoad$res3 === void 0 || (_optimizationLoad$res3 = _optimizationLoad$res3.apple_login_enabled) === null || _optimizationLoad$res3 === void 0 ? void 0 : _optimizationLoad$res3.value) === '1';
  var spoonityTitle = configs === null || configs === void 0 || (_configs$spoonity_tit = configs.spoonity_title) === null || _configs$spoonity_tit === void 0 ? void 0 : _configs$spoonity_tit.value;
  var hasSocialLogin = ((configs === null || configs === void 0 || (_configs$facebook_log = configs.facebook_login) === null || _configs$facebook_log === void 0 ? void 0 : _configs$facebook_log.value) === 'true' || (configs === null || configs === void 0 || (_configs$facebook_log2 = configs.facebook_login) === null || _configs$facebook_log2 === void 0 ? void 0 : _configs$facebook_log2.value) === '1') && (configs === null || configs === void 0 || (_configs$facebook_id = configs.facebook_id) === null || _configs$facebook_id === void 0 ? void 0 : _configs$facebook_id.value) || (configs === null || configs === void 0 || (_configs$google_login2 = configs.google_login_client_id) === null || _configs$google_login2 === void 0 ? void 0 : _configs$google_login2.value) && (configs === null || configs === void 0 || (_configs$google_login3 = configs.google_login_auth_domain) === null || _configs$google_login3 === void 0 ? void 0 : _configs$google_login3.value) && (configs === null || configs === void 0 || (_configs$google_login4 = configs.google_login_api_key) === null || _configs$google_login4 === void 0 ? void 0 : _configs$google_login4.value) && googleLoginEnabled || (configs === null || configs === void 0 || (_configs$apple_login_ = configs.apple_login_client_id) === null || _configs$apple_login_ === void 0 ? void 0 : _configs$apple_login_.value) && appleLoginEnabled || loginTab === 'cellphone' && ((configs === null || configs === void 0 || (_configs$twilio_servi = configs.twilio_service_enabled) === null || _configs$twilio_servi === void 0 ? void 0 : _configs$twilio_servi.value) === 'true' || (configs === null || configs === void 0 || (_configs$twilio_servi2 = configs.twilio_service_enabled) === null || _configs$twilio_servi2 === void 0 ? void 0 : _configs$twilio_servi2.value) === '1');
  var hasSocialEnabled = googleLoginEnabled || facebookLoginEnabled || appleLoginEnabled;
  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _parseNumber, cellphone, countryPhoneCode;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(loginWithOtpState || loginTab === 'otp')) {
              _context.next = 8;
              break;
            }
            if (!(!validPhoneFieldState && (loginTab !== 'otp' || otpType === 'cellphone' && loginTab === 'otp'))) {
              _context.next = 4;
              break;
            }
            setAlertState({
              open: true,
              content: [t('INVALID_PHONE_NUMBER', 'Invalid phone number')]
            });
            return _context.abrupt("return");
          case 4:
            if (loginTab === 'otp') {
              if (otpType === 'cellphone') {
                _parseNumber = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone), cellphone = _parseNumber.cellphone, countryPhoneCode = _parseNumber.countryPhoneCode;
                generateOtpCode({
                  cellphone: cellphone,
                  countryPhoneCode: countryPhoneCode
                });
              } else {
                generateOtpCode();
              }
            }
            setWillVerifyOtpState(true);
            _context.next = 17;
            break;
          case 8:
            if (!projectName) {
              _context.next = 13;
              break;
            }
            setOrdering(_objectSpread(_objectSpread({}, ordering), {}, {
              project: projectName
            }));
            localStorage.setItem('project_name', projectName);
            setSubmitted(true);
            return _context.abrupt("return");
          case 13:
            if (!(loginTab === 'spoonity')) {
              _context.next = 16;
              break;
            }
            handleLoginSpoonity();
            return _context.abrupt("return");
          case 16:
            handleButtonLoginClick();
          case 17:
          case "end":
            return _context.stop();
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
      token: user === null || user === void 0 || (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token
    });
  };
  var handleSuccessApple = function handleSuccessApple(user) {
    var _user$session2;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session2 = user.session) === null || _user$session2 === void 0 ? void 0 : _user$session2.access_token
    });
  };
  var handleSuccessGoogle = function handleSuccessGoogle(user) {
    var _user$session3;
    login({
      user: user,
      token: user === null || user === void 0 || (_user$session3 = user.session) === null || _user$session3 === void 0 ? void 0 : _user$session3.access_token
    });
  };
  var togglePasswordView = function togglePasswordView() {
    setPasswordSee(!passwordSee);
  };
  var closeAlert = function closeAlert() {
    var _checkPhoneCodeState$, _verifyPhoneState$res;
    setAlertState({
      open: false,
      content: []
    });
    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$ = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$ !== void 0 && _checkPhoneCodeState$.error || verifyPhoneState !== null && verifyPhoneState !== void 0 && (_verifyPhoneState$res = verifyPhoneState.result) !== null && _verifyPhoneState$res !== void 0 && _verifyPhoneState$res.error) {
      setOtpState('');
    }
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
  };
  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid, rawNumber) {
    setValidPhoneField(isValid);
    handleChangeInput({
      target: {
        name: 'cellphone',
        value: number
      }
    });
    setCellphoneStartZero && setCellphoneStartZero(rawNumber !== null && rawNumber !== void 0 && rawNumber.number && rawNumber !== null && rawNumber !== void 0 && rawNumber.countryCallingCode ? rawNumber === null || rawNumber === void 0 ? void 0 : rawNumber.number : null);
    formMethods.setValue('cellphone', number, '');
  };
  var handleChangeProject = function handleChangeProject(e) {
    setSubmitted(false);
    setProjectName(e.target.value);
  };
  var handleSendOtp = function handleSendOtp() {
    if (willVerifyOtpState) {
      var _parseNumber2 = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone),
        cellphone = _parseNumber2.cellphone,
        countryPhoneCode = _parseNumber2.countryPhoneCode;
      resetOtpLeftTime();
      if (loginTab !== 'otp') {
        handleSendVerifyCode({
          cellphone: cellphone,
          country_phone_code: countryPhoneCode
        });
      } else {
        onSubmit();
      }
    }
  };
  var handleChangeOtpType = function handleChangeOtpType(type) {
    handleChangeTab('otp');
    setOtpType(type);
  };
  var preventWhiteSpaceOnKeyDown = function preventWhiteSpaceOnKeyDown(e) {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  (0, _react.useEffect)(function () {
    var _formState$result;
    if (!formState.loading && (_formState$result = formState.result) !== null && _formState$result !== void 0 && _formState$result.error) {
      var _formState$result2, _formState$result3;
      if (((_formState$result2 = formState.result) === null || _formState$result2 === void 0 || (_formState$result2 = _formState$result2.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2[0]) === 'ERROR_AUTH_VERIFICATION_CODE') {
        var _configs$security_rec;
        if (configs !== null && configs !== void 0 && (_configs$security_rec = configs.security_recaptcha_site_key) !== null && _configs$security_rec !== void 0 && _configs$security_rec.value) {
          var _configs$security_rec2;
          setRecaptchaVersion({
            version: 'v2',
            siteKey: configs === null || configs === void 0 || (_configs$security_rec2 = configs.security_recaptcha_site_key) === null || _configs$security_rec2 === void 0 ? void 0 : _configs$security_rec2.value
          });
          setAlertState({
            open: true,
            content: [t('TRY_AGAIN', 'Please try again')]
          });
          setSubmitted(false);
          return;
        }
        setAlertState({
          open: true,
          content: [t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key')]
        });
        setSubmitted(false);
        return;
      }
      setAlertState({
        open: true,
        content: ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) || [t('ERROR', 'Error')]
      });
      setSubmitted(false);
    }
  }, [formState]);
  (0, _react.useEffect)(function () {
    formMethods.register('cellphone', {
      required: loginTab === 'cellphone' ? t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Mobile phone is required').replace('_attribute_', t('CELLPHONE', 'Cellphone')) : null
    });
    if (useRootPoint) {
      formMethods.register('project', {
        required: t('VALIDATION_ERROR_PROJECT_REQUIRED', 'The field project is required').replace('_attribute_', t('PROJECT', 'Project'))
      });
    }
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    if (loginTab !== 'otp') {
      handleSendOtp();
    }
  }, [willVerifyOtpState]);
  (0, _react.useEffect)(function () {
    if ((otpState === null || otpState === void 0 ? void 0 : otpState.length) === numOtpInputs) {
      if (loginTab === 'otp') {
        handleButtonLoginClick();
      } else {
        var _parseNumber3 = parseNumber(credentials === null || credentials === void 0 ? void 0 : credentials.cellphone),
          cellphone = _parseNumber3.cellphone,
          countryPhoneCode = _parseNumber3.countryPhoneCode;
        handleCheckPhoneCode({
          cellphone: cellphone,
          country_phone_code: countryPhoneCode,
          code: otpState
        });
      }
    }
  }, [otpState]);
  (0, _react.useEffect)(function () {
    var _checkPhoneCodeState$2, _checkPhoneCodeState$4;
    if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$2 = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$2 !== void 0 && _checkPhoneCodeState$2.error) {
      var _checkPhoneCodeState$3;
      showToast(_orderingComponents.ToastType.Error, (checkPhoneCodeState === null || checkPhoneCodeState === void 0 || (_checkPhoneCodeState$3 = checkPhoneCodeState.result) === null || _checkPhoneCodeState$3 === void 0 ? void 0 : _checkPhoneCodeState$3.result) || [t('ERROR', 'Error')]);
    } else if (checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && (_checkPhoneCodeState$4 = checkPhoneCodeState.result) !== null && _checkPhoneCodeState$4 !== void 0 && _checkPhoneCodeState$4.result) {
      showToast(_orderingComponents.ToastType.Success, t('CODE_SENT', 'The code has been sent'));
      resetOtpLeftTime();
    }
  }, [checkPhoneCodeState]);
  (0, _react.useEffect)(function () {
    if (otpLeftTime === 0) {
      setAlertState({
        open: true,
        content: t('TIME_IS_UP_PLEASE_RESEND_CODE', 'Time is up. Please resend code again')
      });
    }
  }, [otpLeftTime]);
  (0, _react.useEffect)(function () {
    var _verifyPhoneState$res2;
    if (verifyPhoneState !== null && verifyPhoneState !== void 0 && (_verifyPhoneState$res2 = verifyPhoneState.result) !== null && _verifyPhoneState$res2 !== void 0 && _verifyPhoneState$res2.error) {
      var _verifyPhoneState$res3;
      setAlertState({
        open: true,
        content: (verifyPhoneState === null || verifyPhoneState === void 0 || (_verifyPhoneState$res3 = verifyPhoneState.result) === null || _verifyPhoneState$res3 === void 0 ? void 0 : _verifyPhoneState$res3.result) || [t('ERROR', 'Error')]
      });
    } else resetOtpLeftTime();
  }, [verifyPhoneState]);
  (0, _react.useEffect)(function () {
    formMethods.reset();
  }, [loginTab]);
  (0, _react.useEffect)(function () {
    if (ordering.project === null || !submitted || !useRootPoint) return;
    handleButtonLoginClick();
  }, [ordering, submitted]);
  (0, _react.useEffect)(function () {
    if (recaptchaConfig !== null && recaptchaConfig !== void 0 && recaptchaConfig.siteKey) {
      setRecaptchaVersion({
        version: recaptchaConfig === null || recaptchaConfig === void 0 ? void 0 : recaptchaConfig.version,
        siteKey: recaptchaConfig === null || recaptchaConfig === void 0 ? void 0 : recaptchaConfig.siteKey
      });
    }
  }, [recaptchaConfig]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.LoginContainer, {
    isPopup: isPopup
  }, isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.HeroSide, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype",
    width: "530px",
    height: "620px",
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.callcenterHero,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.FormSide, {
    isPopup: isPopup,
    isCustomerMode: isCustomerMode
  }, isCustomerMode ? /*#__PURE__*/_react.default.createElement(_styles.LogotypeContainer, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype-callcenter",
    width: "250px",
    height: "105px",
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.logos) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.logoCallcenter,
    loading: "lazy"
  })) : /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('LOGIN', 'Login')), Number(useLoginByEmail) + Number(useLoginByCellphone) + Number(useLoginOtpEmail) + Number(useLoginOtpCellphone) + Number(useLoginSpoonity) > 1 && !loginWithOtpState && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_styles.LoginWith, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary"
  }, useLoginByEmail && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleChangeTab('email');
    },
    active: loginTab === 'email',
    borderBottom: loginTab === 'email'
  }, t('BY_EMAIL', 'by Email')), useLoginByCellphone && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleChangeTab('cellphone');
    },
    active: loginTab === 'cellphone',
    borderBottom: loginTab === 'cellphone'
  }, t('BY_PHONE', 'by Phone')), useLoginOtpEmail && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleChangeOtpType('email');
    },
    active: isOtpEmail,
    borderBottom: isOtpEmail
  }, t('BY_OTP_EMAIL', 'by Otp Email')), useLoginOtpCellphone && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleChangeOtpType('cellphone');
    },
    active: isOtpCellphone,
    borderBottom: isOtpCellphone
  }, t('BY_OTP_CELLPHONE', 'by Otp Cellphone')), useLoginSpoonity && /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return handleChangeTab('spoonity');
    },
    active: loginTab === 'spoonity',
    borderBottom: loginTab === 'spoonity'
  }, spoonityTitle || t('BY_SPOONITY', 'by Spoonity')))), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    noValidate: true,
    isPopup: isPopup,
    autoComplete: "on"
  }, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), useRootPoint && /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "text",
    name: "project",
    "aria-label": "project",
    placeholder: t('PROJECT', 'Project'),
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_REQUIRED', 'Project is required').replace('_attribute_', t('PROJECT', 'Project'))
    }),
    onChange: function onChange(e) {
      return handleChangeProject(e);
    },
    autoComplete: "off",
    autoCapitalize: "off"
  }), /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BoxArrowInRight, null))), (useLoginByEmail && loginTab === 'email' || loginTab === 'otp' && otpType === 'email' || useLoginSpoonity && loginTab === 'spoonity') && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (formMethods === null || formMethods === void 0 || (_formMethods$errors = formMethods.errors) === null || _formMethods$errors === void 0 || (_formMethods$errors = _formMethods$errors.email) === null || _formMethods$errors === void 0 ? void 0 : _formMethods$errors.type) === 'required' && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors2 = formMethods.errors) === null || _formMethods$errors2 === void 0 || (_formMethods$errors2 = _formMethods$errors2.email) === null || _formMethods$errors2 === void 0 ? void 0 : _formMethods$errors2.message, " *"), ((_formMethods$errors3 = formMethods.errors) === null || _formMethods$errors3 === void 0 || (_formMethods$errors3 = _formMethods$errors3.email) === null || _formMethods$errors3 === void 0 ? void 0 : _formMethods$errors3.type) === 'pattern' && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "email",
    name: "email",
    "aria-label": "email",
    placeholder: t('EMAIL', 'Email'),
    ref: formMethods.register({
      required: loginTab === 'email' || loginTab === 'spoonity' ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    }),
    onKeyDown: preventWhiteSpaceOnKeyDown,
    onChange: handleChangeInputEmail,
    autoComplete: "on",
    isError: (_formMethods$errors4 = formMethods.errors) === null || _formMethods$errors4 === void 0 ? void 0 : _formMethods$errors4.email
  }), /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Envelope, null)))), (useLoginByCellphone && loginTab === 'cellphone' || loginTab === 'otp' && otpType === 'cellphone') && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors5 = formMethods.errors) === null || _formMethods$errors5 === void 0 ? void 0 : _formMethods$errors5.cellphone) && !(credentials !== null && credentials !== void 0 && credentials.cellphone) && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors6 = formMethods.errors) === null || _formMethods$errors6 === void 0 || (_formMethods$errors6 = _formMethods$errors6.cellphone) === null || _formMethods$errors6 === void 0 ? void 0 : _formMethods$errors6.message, " ", (formMethods === null || formMethods === void 0 || (_formMethods$errors7 = formMethods.errors) === null || _formMethods$errors7 === void 0 || (_formMethods$errors7 = _formMethods$errors7.cellphone) === null || _formMethods$errors7 === void 0 ? void 0 : _formMethods$errors7.type) === 'required' && '*'), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    value: credentials === null || credentials === void 0 ? void 0 : credentials.cellphone,
    setValue: handleChangePhoneNumber,
    handleIsValid: function handleIsValid() {},
    isError: ((_formMethods$errors8 = formMethods.errors) === null || _formMethods$errors8 === void 0 ? void 0 : _formMethods$errors8.cellphone) && !(credentials !== null && credentials !== void 0 && credentials.cellphone)
  })), !(verifyPhoneState !== null && verifyPhoneState !== void 0 && verifyPhoneState.loading) && willVerifyOtpState && !(checkPhoneCodeState !== null && checkPhoneCodeState !== void 0 && checkPhoneCodeState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CountdownTimer, null, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.formatSeconds)(otpLeftTime))), /*#__PURE__*/_react.default.createElement(_styles.OtpWrapper, null, /*#__PURE__*/_react.default.createElement(_reactOtpInput.default, {
    value: otpState,
    onChange: function onChange(otp) {
      return setOtpState(otp);
    },
    numInputs: numOtpInputs,
    containerStyle: "otp-container",
    inputStyle: "otp-input",
    isInputNum: true,
    shouldAutoFocus: true
  })), /*#__PURE__*/_react.default.createElement(_styles.ResendCode, {
    disabled: otpLeftTime > 520,
    onClick: handleSendOtp
  }, t('LANG_SEND_AGAIN', 'Send again'), "?"), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: formState.loading,
    onClick: function onClick() {
      setLoginWithOtpState(false);
      setWillVerifyOtpState(false);
    }
  }, t('CANCEL', 'Cancel'))), ((verifyPhoneState === null || verifyPhoneState === void 0 ? void 0 : verifyPhoneState.loading) || (checkPhoneCodeState === null || checkPhoneCodeState === void 0 ? void 0 : checkPhoneCodeState.loading)) && /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, {
    style: {
      height: 160
    }
  }), !loginWithOtpState && loginTab !== 'otp' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_formMethods$errors9 = formMethods.errors) === null || _formMethods$errors9 === void 0 ? void 0 : _formMethods$errors9.password) && /*#__PURE__*/_react.default.createElement(_styles.ValidationText, null, (_formMethods$errors0 = formMethods.errors) === null || _formMethods$errors0 === void 0 || (_formMethods$errors0 = _formMethods$errors0.password) === null || _formMethods$errors0 === void 0 ? void 0 : _formMethods$errors0.message, " ", (formMethods === null || formMethods === void 0 || (_formMethods$errors1 = formMethods.errors) === null || _formMethods$errors1 === void 0 || (_formMethods$errors1 = _formMethods$errors1.password) === null || _formMethods$errors1 === void 0 ? void 0 : _formMethods$errors1.type) === 'required' && '*'), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: !passwordSee ? 'password' : 'text',
    name: "password",
    "aria-label": "password",
    placeholder: t('PASSWORD', 'Password'),
    ref: formMethods.register({
      required: t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password'))
    }),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    },
    isError: (_formMethods$errors10 = formMethods.errors) === null || _formMethods$errors10 === void 0 ? void 0 : _formMethods$errors10.password
  }), /*#__PURE__*/_react.default.createElement(_styles.TogglePassword, {
    onClick: togglePasswordView
  }, !passwordSee ? /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Eye, null) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.EyeSlash, null)), /*#__PURE__*/_react.default.createElement(_styles.InputBeforeIcon, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Lock, null)))), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), !loginWithOtpState && loginTab !== 'otp' && elementLinkToForgotPassword && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement("span", null, t('FORGOT_YOUR_PASSWORD', 'Forgot your password?')), elementLinkToForgotPassword), props.isRecaptchaEnable && enableReCaptcha && /*#__PURE__*/_react.default.createElement(_styles.ReCaptchaWrapper, null, /*#__PURE__*/_react.default.createElement(_orderingComponents.ReCaptcha, {
    handleReCaptcha: handleReCaptcha,
    reCaptchaVersion: reCaptchaVersion
  })), !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: formMethods.handleSubmit(onSubmit),
    disabled: formState.loading
  }, formState.loading ? "".concat(t('LOADING', 'Loading'), "...") : loginWithOtpState || loginTab === 'otp' ? t('GET_VERIFY_CODE', 'Get verify code') : t('LOGIN', 'Login')), loginWithOtpState && !willVerifyOtpState && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    type: "button",
    color: "secundary",
    disabled: formState.loading,
    onClick: function onClick() {
      setLoginWithOtpState(false);
    }
  }, t('CANCEL', 'Cancel'))), elementLinkToSignup && !loginWithOtpState && loginTab !== 'otp' && /*#__PURE__*/_react.default.createElement(_styles.RedirectLink, {
    register: true,
    isPopup: isPopup,
    className: "new-account"
  }, /*#__PURE__*/_react.default.createElement("span", null, t('NEW_ON_PLATFORM', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.NEW_ON_PLATFORM) || 'New on Ordering?')), elementLinkToSignup), !props.isDisableButtons && hasSocialLogin && hasSocialEnabled && /*#__PURE__*/_react.default.createElement(_styles.LoginDivider, {
    isPopup: isPopup
  }, /*#__PURE__*/_react.default.createElement(_styles.DividerLine, null), /*#__PURE__*/_react.default.createElement("p", null, t('OR', 'or')), /*#__PURE__*/_react.default.createElement(_styles.DividerLine, null)), !props.isDisableButtons && !loginWithOtpState && (Object.keys(configs).length > 0 ? /*#__PURE__*/_react.default.createElement(_styles.SocialButtons, {
    isPopup: isPopup
  }, ((configs === null || configs === void 0 || (_configs$facebook_log3 = configs.facebook_login) === null || _configs$facebook_log3 === void 0 ? void 0 : _configs$facebook_log3.value) === 'true' || (configs === null || configs === void 0 || (_configs$facebook_log4 = configs.facebook_login) === null || _configs$facebook_log4 === void 0 ? void 0 : _configs$facebook_log4.value) === '1') && (configs === null || configs === void 0 || (_configs$facebook_id2 = configs.facebook_id) === null || _configs$facebook_id2 === void 0 ? void 0 : _configs$facebook_id2.value) && facebookLoginEnabled && /*#__PURE__*/_react.default.createElement(_FacebookLogin.FacebookLoginButton, {
    appId: configs === null || configs === void 0 || (_configs$facebook_id3 = configs.facebook_id) === null || _configs$facebook_id3 === void 0 ? void 0 : _configs$facebook_id3.value,
    handleSuccessFacebookLogin: handleSuccessFacebook
  }), (configs === null || configs === void 0 || (_configs$google_login5 = configs.google_login_client_id) === null || _configs$google_login5 === void 0 ? void 0 : _configs$google_login5.value) && (configs === null || configs === void 0 || (_configs$google_login6 = configs.google_login_auth_domain) === null || _configs$google_login6 === void 0 ? void 0 : _configs$google_login6.value) && (configs === null || configs === void 0 || (_configs$google_login7 = configs.google_login_api_key) === null || _configs$google_login7 === void 0 ? void 0 : _configs$google_login7.value) && googleLoginEnabled && /*#__PURE__*/_react.default.createElement(_GoogleLogin.GoogleLoginButton, {
    initParams: initParams,
    handleSuccessGoogleLogin: handleSuccessGoogle
  }), (configs === null || configs === void 0 || (_configs$apple_login_2 = configs.apple_login_client_id) === null || _configs$apple_login_2 === void 0 ? void 0 : _configs$apple_login_2.value) && appleLoginEnabled && /*#__PURE__*/_react.default.createElement(_AppleLogin.AppleLogin, {
    onSuccess: handleSuccessApple,
    onFailure: function onFailure(data) {
      return setAlertState({
        open: true,
        content: data
      });
    }
  }), useLoginByCellphone && loginTab === 'cellphone' && configs && Object.keys(configs).length > 0 && ((configs === null || configs === void 0 || (_configs$twilio_servi3 = configs.twilio_service_enabled) === null || _configs$twilio_servi3 === void 0 ? void 0 : _configs$twilio_servi3.value) === 'true' || (configs === null || configs === void 0 || (_configs$twilio_servi4 = configs.twilio_service_enabled) === null || _configs$twilio_servi4 === void 0 ? void 0 : _configs$twilio_servi4.value) === '1') && /*#__PURE__*/_react.default.createElement(_SmsLogin.SmsLoginButton, {
    style: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#000000',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      marginBottom: 10,
      justifyContent: 'space-around'
    },
    iconStyle: {
      fontSize: 16
    },
    textStyle: {
      margin: 0,
      width: '50%',
      textAlign: 'left'
    },
    handleSmsLogin: function handleSmsLogin() {
      setLoginWithOtpState(true);
    }
  })) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonSocialWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  }), useLoginByCellphone && loginTab === 'cellphone' && /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 43
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
var LoginForm = exports.LoginForm = function LoginForm(props) {
  var isKioskApp = props.useKioskApp;
  var loginControllerProps = _objectSpread(_objectSpread({}, props), {}, {
    isRecaptchaEnable: !isKioskApp,
    elementLinkToForgotPassword: isKioskApp ? null : props.elementLinkToForgotPassword,
    useLoginByCellphone: isKioskApp ? null : props.useLoginByCellphone,
    elementLinkToSignup: isKioskApp ? null : props.elementLinkToSignup,
    isDisableButtons: isKioskApp ? true : props.isDisableButtons,
    UIComponent: LoginFormUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LoginForm, loginControllerProps);
};