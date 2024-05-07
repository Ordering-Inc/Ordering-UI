"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
var _reactHookForm = require("react-hook-form");
var _orderingComponents = require("ordering-components");
var _Confirm = require("../Confirm");
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
var _Inputs = require("../../styles/Inputs");
var _styles2 = require("../AddressList/styles");
var _Tabs = require("../../styles/Tabs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AddressFormUI = function AddressFormUI(props) {
  var _addressState$address, _ref, _formState$changes$ad, _formState$changes, _addressState$address2, _addressState$address3, _configState$configs, _addressState$address4, _formState$changes$lo, _formState$changes2, _businessesList$busin, _configState$configs2, _configState$configs3, _configState$configs4, _configState$configs5, _addressState$address12, _formState$changes28, _formState$changes29, _address$location5, _address$location6, _orderState$options6;
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
    userCustomerSetup = props.userCustomerSetup,
    businessesList = props.businessesList,
    getBusinessDeliveryZones = props.getBusinessDeliveryZones,
    address = props.address,
    notUseCustomerInfo = props.notUseCustomerInfo,
    addFormRestrictions = props.addFormRestrictions,
    isAllowUnaddressOrderType = props.isAllowUnaddressOrderType,
    addressSpreadForm = props.addressSpreadForm,
    setAddressSpreadForm = props.setAddressSpreadForm,
    editSpreadAddress = props.editSpreadAddress,
    setEditSpreadAddress = props.setEditSpreadAddress,
    setUserConfirmPhone = props.setUserConfirmPhone,
    userConfirmPhone = props.userConfirmPhone,
    tabSelected = props.tabSelected,
    setTabSelected = props.setTabSelected;
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
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFromAutocomplete = _useState2[0],
    setSelectedFromAutocomplete = _useState2[1];
  var _useState3 = (0, _react.useState)(addressState === null || addressState === void 0 || (_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.tag),
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
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    showMap = _useState12[0],
    setShowMap = _useState12[1];
  var isEditing = !!((_addressState$address3 = addressState.address) !== null && _addressState$address3 !== void 0 && _addressState$address3.id);
  var googleInputRef = (0, _react.useRef)();
  var showTabs = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.addresses_form_type) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value) === 'general';
  var showSpreadForm = tabSelected === 'country';
  var _useState13 = (0, _react.useState)(isEditing ? addressState === null || addressState === void 0 || (_addressState$address4 = addressState.address) === null || _addressState$address4 === void 0 ? void 0 : _addressState$address4.location : (_formState$changes$lo = (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.location) !== null && _formState$changes$lo !== void 0 ? _formState$changes$lo : null),
    _useState14 = _slicedToArray(_useState13, 2),
    locationChange = _useState14[0],
    setLocationChange = _useState14[1];
  var businessZones = businessesList === null || businessesList === void 0 || (_businessesList$busin = businessesList.businesses) === null || _businessesList$busin === void 0 ? void 0 : _businessesList$busin.map(function (business) {
    return business === null || business === void 0 ? void 0 : business.zones;
  });
  var maxLimitLocation = configState === null || configState === void 0 || (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 || (_configState$configs2 = _configState$configs2.meters_to_change_address) === null || _configState$configs2 === void 0 ? void 0 : _configState$configs2.value;
  var googleMapsApiKey = configState === null || configState === void 0 || (_configState$configs3 = configState.configs) === null || _configState$configs3 === void 0 || (_configState$configs3 = _configState$configs3.google_maps_api_key) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value;
  var isLocationRequired = ((_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 || (_configState$configs4 = _configState$configs4.google_autocomplete_selection_required) === null || _configState$configs4 === void 0 ? void 0 : _configState$configs4.value) === '1' || ((_configState$configs5 = configState.configs) === null || _configState$configs5 === void 0 || (_configState$configs5 = _configState$configs5.google_autocomplete_selection_required) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value) === 'true';
  var mapErrors = {
    ERROR_NOT_FOUND_ADDRESS: 'Sorry, we couldn\'t find an address',
    ERROR_MAX_LIMIT_LOCATION: "Sorry, You can only set the position to ".concat(maxLimitLocation, "m")
  };
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
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!auth && (formState === null || formState === void 0 || (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.address) === '' && addressState !== null && addressState !== void 0 && (_addressState$address6 = addressState.address) !== null && _addressState$address6 !== void 0 && _addressState$address6.address)) {
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
            getAddressFormatted(formState === null || formState === void 0 || (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.address);
            return _context.abrupt("return");
          case 10:
            arrayList = isEditing ? (addressesList === null || addressesList === void 0 ? void 0 : addressesList.filter(function (address) {
              var _addressState$address7;
              return (address === null || address === void 0 ? void 0 : address.id) !== (addressState === null || addressState === void 0 || (_addressState$address7 = addressState.address) === null || _addressState$address7 === void 0 ? void 0 : _addressState$address7.id);
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
  var handleChangeAddress = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(address) {
      var _googleInputRef$curre;
      var updateFstValue,
        result,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            updateFstValue = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
            if (!(address !== null && address !== void 0 && address.location)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return getBusinessDeliveryZones(address === null || address === void 0 ? void 0 : address.location);
          case 4:
            result = _context2.sent;
            setLocationChange(address === null || address === void 0 ? void 0 : address.location);
            if ((result === null || result === void 0 ? void 0 : result.length) === 0) {
              showToast(_orderingComponents.ToastType.Error, t('NO_NEAR_DELIVERY_ZONES', 'No near delivery zones'), 3000);
            }
          case 7:
            setSelectedFromAutocomplete(true);
            updateChanges(updateFstValue ? address : _objectSpread(_objectSpread({}, address), {}, {
              address: googleInputRef === null || googleInputRef === void 0 || (_googleInputRef$curre = googleInputRef.current) === null || _googleInputRef$curre === void 0 ? void 0 : _googleInputRef$curre.value
            }));
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleChangeAddress(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var setMapErrors = function setMapErrors(errKey) {
    setAlertState({
      open: true,
      content: !(errKey === 'ERROR_MAX_LIMIT_LOCATION') ? [t(errKey, mapErrors[errKey])] : "".concat([t(errKey, mapErrors[errKey])], " ").concat(maxLimitLocation, " ").concat([t('METTERS', 'meters')])
    });
  };
  var openStreetView = function openStreetView() {
    var _formState$changes$lo2, _formState$changes7, _address$location, _formState$changes$lo3, _formState$changes8, _address$location2;
    var lat = (_formState$changes$lo2 = formState === null || formState === void 0 || (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 || (_formState$changes7 = _formState$changes7.location) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.lat) !== null && _formState$changes$lo2 !== void 0 ? _formState$changes$lo2 : address === null || address === void 0 || (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat;
    var lng = (_formState$changes$lo3 = formState === null || formState === void 0 || (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 || (_formState$changes8 = _formState$changes8.location) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.lng) !== null && _formState$changes$lo3 !== void 0 ? _formState$changes$lo3 : address === null || address === void 0 || (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng;
    var url = "http://maps.google.com/maps?q=&layer=c&cbll=".concat(lat, ",").concat(lng);
    window.open(url, '_blank');
  };
  var handleSendSmsToCustomer = function handleSendSmsToCustomer() {
    setUserConfirmPhone(_objectSpread(_objectSpread({}, userConfirmPhone), {}, {
      open: true
    }));
    onCancel();
  };
  (0, _react.useEffect)(function () {
    var _formState$result, _ref6, _formState$changes$ad3, _formState$changes11, _addressState$address8, _ref7, _formState$changes$ad4, _formState$changes12, _addressState$address9;
    if (!auth) {
      var _ref4, _formState$changes$lo4, _formState$changes9, _orderState$options, _ref5, _formState$changes$ad2, _formState$changes10, _orderState$options2;
      setLocationChange((_ref4 = (_formState$changes$lo4 = formState === null || formState === void 0 || (_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.location) !== null && _formState$changes$lo4 !== void 0 ? _formState$changes$lo4 : orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 ? void 0 : _orderState$options.location) !== null && _ref4 !== void 0 ? _ref4 : '');
      setAddressValue((_ref5 = (_formState$changes$ad2 = formState === null || formState === void 0 || (_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.address) !== null && _formState$changes$ad2 !== void 0 ? _formState$changes$ad2 : orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.address) !== null && _ref5 !== void 0 ? _ref5 : '');
      inputNames.forEach(function (field) {
        var _orderState$options3, _orderState$options4;
        return formMethods.setValue(field.name, (formState === null || formState === void 0 ? void 0 : formState.changes[field.name]) || (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.address) && (orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.address[field.name]) || '');
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
    setAddressValue((_ref6 = (_formState$changes$ad3 = formState === null || formState === void 0 || (_formState$changes11 = formState.changes) === null || _formState$changes11 === void 0 ? void 0 : _formState$changes11.address) !== null && _formState$changes$ad3 !== void 0 ? _formState$changes$ad3 : (_addressState$address8 = addressState.address) === null || _addressState$address8 === void 0 ? void 0 : _addressState$address8.address) !== null && _ref6 !== void 0 ? _ref6 : '');
    formMethods.setValue('address', (_ref7 = (_formState$changes$ad4 = formState === null || formState === void 0 || (_formState$changes12 = formState.changes) === null || _formState$changes12 === void 0 ? void 0 : _formState$changes12.address) !== null && _formState$changes$ad4 !== void 0 ? _formState$changes$ad4 : (_addressState$address9 = addressState.address) === null || _addressState$address9 === void 0 ? void 0 : _addressState$address9.address) !== null && _ref7 !== void 0 ? _ref7 : '');
    if (!isEditing) {
      var _formState$changes13, _formState$changes14, _formState$changes15, _formState$changes16, _formState$changes17, _formState$changes18, _firstLocationNoEdit$, _formState$changes19, _firstLocationNoEdit$2;
      inputNames.forEach(function (field) {
        return formMethods.setValue(field.name, (formState === null || formState === void 0 ? void 0 : formState.changes[field.name]) || '');
      });
      (formState === null || formState === void 0 || (_formState$changes13 = formState.changes) === null || _formState$changes13 === void 0 ? void 0 : _formState$changes13.address) && setLocationChange(formState === null || formState === void 0 || (_formState$changes14 = formState.changes) === null || _formState$changes14 === void 0 ? void 0 : _formState$changes14.location);
      if (formState !== null && formState !== void 0 && (_formState$changes15 = formState.changes) !== null && _formState$changes15 !== void 0 && _formState$changes15.address && (formState === null || formState === void 0 || (_formState$changes16 = formState.changes) === null || _formState$changes16 === void 0 ? void 0 : _formState$changes16.address) !== (firstLocationNoEdit === null || firstLocationNoEdit === void 0 ? void 0 : firstLocationNoEdit.address) && formState !== null && formState !== void 0 && (_formState$changes17 = formState.changes) !== null && _formState$changes17 !== void 0 && _formState$changes17.location && (formState === null || formState === void 0 || (_formState$changes18 = formState.changes) === null || _formState$changes18 === void 0 || (_formState$changes18 = _formState$changes18.location) === null || _formState$changes18 === void 0 ? void 0 : _formState$changes18.lat) !== ((_firstLocationNoEdit$ = firstLocationNoEdit.value) === null || _firstLocationNoEdit$ === void 0 ? void 0 : _firstLocationNoEdit$.lat) && (formState === null || formState === void 0 || (_formState$changes19 = formState.changes) === null || _formState$changes19 === void 0 || (_formState$changes19 = _formState$changes19.location) === null || _formState$changes19 === void 0 ? void 0 : _formState$changes19.lng) !== ((_firstLocationNoEdit$2 = firstLocationNoEdit.value) === null || _firstLocationNoEdit$2 === void 0 ? void 0 : _firstLocationNoEdit$2.lng)) {
        var _formState$changes20, _formState$changes21;
        setFirstLocationNoEdit({
          value: formState === null || formState === void 0 || (_formState$changes20 = formState.changes) === null || _formState$changes20 === void 0 ? void 0 : _formState$changes20.location,
          address: formState === null || formState === void 0 || (_formState$changes21 = formState.changes) === null || _formState$changes21 === void 0 ? void 0 : _formState$changes21.address
        });
      }
    }
    if (isEditing) {
      var _formState$changes22;
      if (formState !== null && formState !== void 0 && (_formState$changes22 = formState.changes) !== null && _formState$changes22 !== void 0 && _formState$changes22.location) {
        var _formState$changes23, _formState$changes24;
        var prevLocation = {
          lat: Math.trunc(locationChange === null || locationChange === void 0 ? void 0 : locationChange.lat),
          lng: Math.trunc(locationChange === null || locationChange === void 0 ? void 0 : locationChange.lng)
        };
        var newLocation = {
          lat: Math.trunc(formState === null || formState === void 0 || (_formState$changes23 = formState.changes) === null || _formState$changes23 === void 0 || (_formState$changes23 = _formState$changes23.location) === null || _formState$changes23 === void 0 ? void 0 : _formState$changes23.lat),
          lng: Math.trunc(formState === null || formState === void 0 || (_formState$changes24 = formState.changes) === null || _formState$changes24 === void 0 || (_formState$changes24 = _formState$changes24.location) === null || _formState$changes24 === void 0 ? void 0 : _formState$changes24.lng)
        };
        if (prevLocation.lat !== newLocation.lat && prevLocation.lng !== newLocation.lng) {
          var _formState$changes25;
          setLocationChange(formState === null || formState === void 0 || (_formState$changes25 = formState.changes) === null || _formState$changes25 === void 0 ? void 0 : _formState$changes25.location);
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
      var _ref8, _formState$changes$lo5, _formState$changes26, _orderState$options5;
      setLocationChange((_ref8 = (_formState$changes$lo5 = formState === null || formState === void 0 || (_formState$changes26 = formState.changes) === null || _formState$changes26 === void 0 ? void 0 : _formState$changes26.location) !== null && _formState$changes$lo5 !== void 0 ? _formState$changes$lo5 : orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.location) !== null && _ref8 !== void 0 ? _ref8 : '');
    }
    return function () {
      setFirstLocationNoEdit({
        value: null
      });
      setAddressSpreadForm(null);
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
      var _ref9, _formState$changes$fi, _formState$changes27, _addressState$address11;
      formMethods.register(field.name, {
        required: isRequiredField(field.name) ? t("VALIDATION_ERROR_".concat(field.name, "_REQUIRED"), "The field ".concat(field.code, " is required")) : null
      });
      formMethods.setValue(field.name, (_ref9 = (_formState$changes$fi = (_formState$changes27 = formState.changes) === null || _formState$changes27 === void 0 ? void 0 : _formState$changes27[field.name]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : (_addressState$address11 = addressState.address) === null || _addressState$address11 === void 0 ? void 0 : _addressState$address11[field.name]) !== null && _ref9 !== void 0 ? _ref9 : '');
    });
  }, [formMethods]);
  (0, _react.useEffect)(function () {
    if (address !== null && address !== void 0 && address.location) {
      getBusinessDeliveryZones(address === null || address === void 0 ? void 0 : address.location);
    }
  }, [address]);
  (0, _react.useEffect)(function () {
    if (addressSpreadForm) {
      if (!isEditing) {
        handleChangeAddress(addressSpreadForm, true);
      } else {
        setLocationChange(addressSpreadForm === null || addressSpreadForm === void 0 ? void 0 : addressSpreadForm.location);
        if (addressSpreadForm !== null && addressSpreadForm !== void 0 && addressSpreadForm.verified) {
          var values = addressSpreadForm;
          delete values.verified;
          setSelectedFromAutocomplete(true);
          updateChanges(values);
        }
      }
    }
  }, [addressSpreadForm]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "address-form"
  }, (configState.loading || addressState.loading) && /*#__PURE__*/_react.default.createElement(_styles.WrapperSkeleton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50,
    count: 5,
    style: {
      marginBottom: '10px'
    }
  })), showTabs && !(addressState !== null && addressState !== void 0 && (_addressState$address12 = addressState.address) !== null && _addressState$address12 !== void 0 && _addressState$address12.location || formState !== null && formState !== void 0 && (_formState$changes28 = formState.changes) !== null && _formState$changes28 !== void 0 && _formState$changes28.location || formState !== null && formState !== void 0 && (_formState$changes29 = formState.changes) !== null && _formState$changes29 !== void 0 && _formState$changes29.verified) && /*#__PURE__*/_react.default.createElement(_styles.TabsContainer, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabSelected('general');
    },
    active: tabSelected === 'general',
    borderBottom: true
  }, t('STANDARD', 'Standard')), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    onClick: function onClick() {
      return setTabSelected('country');
    },
    active: tabSelected === 'country',
    borderBottom: true
  }, t('ADVANCED', 'Advanced')))), (!showSpreadForm || showSpreadForm && (addressSpreadForm === null || addressSpreadForm === void 0 ? void 0 : addressSpreadForm.address)) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !configState.loading && !addressState.loading && /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    onKeyDown: function onKeyDown(e) {
      return checkKeyDown(e);
    },
    autoComplete: "off"
  }, inputNames.map(function (field) {
    var _address$location3, _address$location4, _formState$result3, _formState$result4, _formState$changes$ad5, _formState$changes30, _configState$configs6, _addressState$address13, _formState$changes31, _theme$colors, _addressState$address14, _formState$changes32, _addressState$address15, _formState$changes33, _addressState$address16, _formState$changes34, _addressState$address17, _formState$changes35, _addressState$address18, _formState$changes36, _addressState$address19, _formState$changes37, _addressState$address20, _formState$changes38, _addressState$address21, _formState$changes39, _addressState$address22, _formState$changes40, _addressState$address23, _formState$changes41, _addressState$address24, _formState$changes42, _addressState$address25, _formState$changes43, _theme$images, _ref10, _formState$changes$fi2, _formState$changes44, _addressState$address26, _ref11, _formState$changes$ad6, _formState$changes45;
    return showField && showField(field.name) && (field.name === 'address' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.AddressWrap, {
      className: "google-control",
      showTabs: showTabs
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapAddressInput, null, !selectedFromAutocomplete && (address === null || address === void 0 ? void 0 : address.address) && (!(address !== null && address !== void 0 && (_address$location3 = address.location) !== null && _address$location3 !== void 0 && _address$location3.lat) || !(address !== null && address !== void 0 && (_address$location4 = address.location) !== null && _address$location4 !== void 0 && _address$location4.lng)) && /*#__PURE__*/_react.default.createElement(_styles.AddressMarkContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('PLEASE_SELECT_GOOGLE_MAPS_ADDRESS', 'Please select an address given by google maps.'))), /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleAutocompleteInput, {
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
      childRef: function childRef(ref) {
        googleInputRef.current = ref;
      },
      defaultValue: formState !== null && formState !== void 0 && (_formState$result3 = formState.result) !== null && _formState$result3 !== void 0 && _formState$result3.result ? formState === null || formState === void 0 || (_formState$result4 = formState.result) === null || _formState$result4 === void 0 || (_formState$result4 = _formState$result4.result) === null || _formState$result4 === void 0 ? void 0 : _formState$result4.address : (_formState$changes$ad5 = formState === null || formState === void 0 || (_formState$changes30 = formState.changes) === null || _formState$changes30 === void 0 ? void 0 : _formState$changes30.address) !== null && _formState$changes$ad5 !== void 0 ? _formState$changes$ad5 : addressValue,
      autoComplete: "new-field",
      countryCode: (configState === null || configState === void 0 || (_configState$configs6 = configState.configs) === null || _configState$configs6 === void 0 || (_configState$configs6 = _configState$configs6.country_autocomplete) === null || _configState$configs6 === void 0 ? void 0 : _configState$configs6.value) || '*'
    }))), !(addressState !== null && addressState !== void 0 && (_addressState$address13 = addressState.address) !== null && _addressState$address13 !== void 0 && _addressState$address13.location || formState !== null && formState !== void 0 && (_formState$changes31 = formState.changes) !== null && _formState$changes31 !== void 0 && _formState$changes31.location) && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
      showTabs: showTabs
    }, /*#__PURE__*/_react.default.createElement(_styles.SmsClient, null, /*#__PURE__*/_react.default.createElement("p", null, t('CAN_NOT_FIND_ADDRESS', 'Can\'t find address?'), ' '), /*#__PURE__*/_react.default.createElement("a", {
      style: {
        textDecoration: 'underline',
        color: theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary,
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return handleSendSmsToCustomer();
      }
    }, t('SEND_SMS_TO_CUSTOMER', 'Send SMS to customer')))), ((addressState === null || addressState === void 0 || (_addressState$address14 = addressState.address) === null || _addressState$address14 === void 0 ? void 0 : _addressState$address14.location) || (formState === null || formState === void 0 || (_formState$changes32 = formState.changes) === null || _formState$changes32 === void 0 ? void 0 : _formState$changes32.location)) && /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
      showMap: showMap || !showSpreadForm,
      notUseCustomerInfo: notUseCustomerInfo,
      addFormRestrictions: addFormRestrictions,
      showTabs: showTabs,
      hasAddress: showTabs && ((addressState === null || addressState === void 0 || (_addressState$address15 = addressState.address) === null || _addressState$address15 === void 0 ? void 0 : _addressState$address15.location) || (formState === null || formState === void 0 || (_formState$changes33 = formState.changes) === null || _formState$changes33 === void 0 ? void 0 : _formState$changes33.location))
    }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.GeoAlt, {
      style: {
        fontSize: 25,
        marginRight: 5
      }
    }), ((addressState === null || addressState === void 0 || (_addressState$address16 = addressState.address) === null || _addressState$address16 === void 0 ? void 0 : _addressState$address16.address) || (formState === null || formState === void 0 || (_formState$changes34 = formState.changes) === null || _formState$changes34 === void 0 ? void 0 : _formState$changes34.address)) && /*#__PURE__*/_react.default.createElement("span", null, (addressState === null || addressState === void 0 || (_addressState$address17 = addressState.address) === null || _addressState$address17 === void 0 ? void 0 : _addressState$address17.address) || (formState === null || formState === void 0 || (_formState$changes35 = formState.changes) === null || _formState$changes35 === void 0 ? void 0 : _formState$changes35.address), ', '), ((addressState === null || addressState === void 0 || (_addressState$address18 = addressState.address) === null || _addressState$address18 === void 0 ? void 0 : _addressState$address18.country) || (formState === null || formState === void 0 || (_formState$changes36 = formState.changes) === null || _formState$changes36 === void 0 ? void 0 : _formState$changes36.country)) && /*#__PURE__*/_react.default.createElement("span", null, (addressState === null || addressState === void 0 || (_addressState$address19 = addressState.address) === null || _addressState$address19 === void 0 ? void 0 : _addressState$address19.country) || (formState === null || formState === void 0 || (_formState$changes37 = formState.changes) === null || _formState$changes37 === void 0 ? void 0 : _formState$changes37.country), ', '), ((addressState === null || addressState === void 0 || (_addressState$address20 = addressState.address) === null || _addressState$address20 === void 0 ? void 0 : _addressState$address20.address_notes) || (formState === null || formState === void 0 || (_formState$changes38 = formState.changes) === null || _formState$changes38 === void 0 ? void 0 : _formState$changes38.address_notes)) && /*#__PURE__*/_react.default.createElement("span", null, (addressState === null || addressState === void 0 || (_addressState$address21 = addressState.address) === null || _addressState$address21 === void 0 ? void 0 : _addressState$address21.address_notes) || (formState === null || formState === void 0 || (_formState$changes39 = formState.changes) === null || _formState$changes39 === void 0 ? void 0 : _formState$changes39.address_notes), ', '), ((addressState === null || addressState === void 0 || (_addressState$address22 = addressState.address) === null || _addressState$address22 === void 0 ? void 0 : _addressState$address22.internal_number) || (formState === null || formState === void 0 || (_formState$changes40 = formState.changes) === null || _formState$changes40 === void 0 ? void 0 : _formState$changes40.internal_number)) && /*#__PURE__*/_react.default.createElement("span", null, (addressState === null || addressState === void 0 || (_addressState$address23 = addressState.address) === null || _addressState$address23 === void 0 ? void 0 : _addressState$address23.internal_number) || (formState === null || formState === void 0 || (_formState$changes41 = formState.changes) === null || _formState$changes41 === void 0 ? void 0 : _formState$changes41.internal_number), ', '), ((addressState === null || addressState === void 0 || (_addressState$address24 = addressState.address) === null || _addressState$address24 === void 0 ? void 0 : _addressState$address24.zipcode) || (formState === null || formState === void 0 || (_formState$changes42 = formState.changes) === null || _formState$changes42 === void 0 ? void 0 : _formState$changes42.zipcode)) && /*#__PURE__*/_react.default.createElement("span", null, (addressState === null || addressState === void 0 || (_addressState$address25 = addressState.address) === null || _addressState$address25 === void 0 ? void 0 : _addressState$address25.zipcode) || (formState === null || formState === void 0 || (_formState$changes43 = formState.changes) === null || _formState$changes43 === void 0 ? void 0 : _formState$changes43.zipcode), ', '), /*#__PURE__*/_react.default.createElement("br", null), !showMap && /*#__PURE__*/_react.default.createElement("a", {
      style: {
        textDecoration: 'underline',
        color: 'blue',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return setShowMap(!showMap);
      }
    }, t('SHOW_MAP', 'Show Map')), showSpreadForm && /*#__PURE__*/_react.default.createElement("a", {
      style: {
        textDecoration: 'underline',
        color: 'blue',
        cursor: 'pointer',
        marginLeft: !showMap ? 20 : 0
      },
      onClick: function onClick() {
        return setEditSpreadAddress(!editSpreadAddress);
      }
    }, t('EDIT_ADDRESS', 'Edit Address')), showMap && !editSpreadAddress && /*#__PURE__*/_react.default.createElement("a", {
      style: {
        textDecoration: 'underline',
        color: 'blue',
        cursor: 'pointer',
        marginLeft: showSpreadForm ? 20 : 0
      },
      onClick: function onClick() {
        return openStreetView();
      }
    }, t('OPEN_STREET_VIEW', 'Open Street view'))), locationChange && showMap && /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleMapsMap, {
      useMapWithBusinessZones: true,
      deactiveAlerts: true,
      avoidFitBounds: true,
      apiKey: googleMapsApiKey,
      location: locationChange,
      locations: businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses,
      mapControls: googleMapsControls,
      handleChangeAddressMap: handleChangeAddress,
      setErrors: setMapErrors,
      maxLimitLocation: parseInt(maxLimitLocation, 10),
      businessZones: businessZones,
      fallbackIcon: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo
    })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, field.name !== 'address_notes' ? /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      className: field.name,
      placeholder: t(field.name.toUpperCase(), field.code),
      value: (_ref10 = (_formState$changes$fi2 = (_formState$changes44 = formState.changes) === null || _formState$changes44 === void 0 ? void 0 : _formState$changes44[field.name]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : (_addressState$address26 = addressState.address) === null || _addressState$address26 === void 0 ? void 0 : _addressState$address26[field.name]) !== null && _ref10 !== void 0 ? _ref10 : '',
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
      value: (_ref11 = (_formState$changes$ad6 = (_formState$changes45 = formState.changes) === null || _formState$changes45 === void 0 ? void 0 : _formState$changes45.address_notes) !== null && _formState$changes$ad6 !== void 0 ? _formState$changes$ad6 : addressState.address.address_notes) !== null && _ref11 !== void 0 ? _ref11 : '',
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
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusLg, null)))), /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, !addFormRestrictions && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length === 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    type: "button",
    disabled: formState.loading,
    onClick: function onClick() {
      return onCancel();
    },
    hoverColor: "#CCC"
  }, t('CANCEL', 'Cancel')), !(!selectedFromAutocomplete && address !== null && address !== void 0 && address.address && (!(address !== null && address !== void 0 && (_address$location5 = address.location) !== null && _address$location5 !== void 0 && _address$location5.lat) || !(address !== null && address !== void 0 && (_address$location6 = address.location) !== null && _address$location6 !== void 0 && _address$location6.lng))) && Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "submit-btn",
    type: "submit",
    disabled: formState.loading,
    color: "primary"
  }, !formState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEditing || !auth && (_orderState$options6 = orderState.options) !== null && _orderState$options6 !== void 0 && (_orderState$options6 = _orderState$options6.address) !== null && _orderState$options6 !== void 0 && _orderState$options6.address ? t('SAVE_AND_CONTINUE', 'Save and continue') : t('ADD_ADDRESS', 'Add address')) : t('LOADING', 'Loading'))), isAllowUnaddressOrderType && /*#__PURE__*/_react.default.createElement(_styles.WithoutAddressContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.WithoutAddressText, {
    onClick: function onClick() {
      return events.emit('go_to_page', {
        page: 'search'
      });
    }
  }, t('CONTINUE_WITHOUT_ADDRESS', 'Continue without address'))))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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
  }));
};
var AddressForm = exports.AddressForm = function AddressForm(props) {
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