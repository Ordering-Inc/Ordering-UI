"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpreadForm = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("./styles");
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _Inputs = require("../../../styles/Inputs");
var _Buttons = require("../../../styles/Buttons");
var _utils = require("../../../../../../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var inputNames = [{
  id: 1,
  name: 'route',
  required: true
}, {
  id: 2,
  name: 'street_number',
  required: true
}, {
  id: 3,
  name: 'neighborhood',
  required: true
}, {
  id: 4,
  name: 'zipcode',
  required: false
}, {
  id: 5,
  name: 'city',
  required: true
}, {
  id: 6,
  name: 'state',
  required: true
}, {
  id: 7,
  name: 'country_code',
  enabled: false,
  required: false
}];
var emptyFields = {
  route: '',
  street_number: '',
  neighborhood: '',
  city: '',
  state: '',
  country_code: '',
  country: '',
  address: '',
  locality: '',
  location: '',
  zipcode: ''
};
var SpreadForm = exports.SpreadForm = function SpreadForm(props) {
  var _configs$google_maps_, _formState$changes6, _formState$changes7;
  var address = props.address,
    countryAutocomplete = props.countryAutocomplete,
    editSpreadAddress = props.editSpreadAddress,
    setEditSpreadAddress = props.setEditSpreadAddress,
    onChangeAddress = props.onChangeAddress;
  var theme = (0, _styledComponents.useTheme)();
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useToast = (0, _orderingComponents.useToast)(),
    _useToast2 = _slicedToArray(_useToast, 2),
    showToast = _useToast2[1].showToast;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionToken = _useSession2[0].token;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)({
      changes: {},
      loading: false,
      error: null,
      added: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var handleAddAddress = function handleAddAddress() {
    onChangeAddress(formState.changes);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      added: true
    }));
    editSpreadAddress && setEditSpreadAddress(!editSpreadAddress);
  };
  var handleChangeInput = function handleChangeInput(_ref) {
    var name = _ref.name,
      value = _ref.value;
    var changes = formState.changes;
    if (changes !== null && changes !== void 0 && changes.location) {
      delete changes.location;
    }
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, changes), {}, _defineProperty({}, name, value))
    }));
  };
  var changeAttrName = function changeAttrName(attr) {
    var _list$attr;
    var list = {
      sublocality_level_1: 'neighborhood',
      administrative_area_level_1: 'state',
      postal_code: 'zipcode'
    };
    return (_list$attr = list[attr]) !== null && _list$attr !== void 0 ? _list$attr : attr;
  };
  var handlePostAddress = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(addressLines) {
      var _body, req, _yield$req$json, error, result, _formState, _result$result, _result$result2, _addressComponents$fi, _addressComponents$fi2, _addressComponents$fi3, _result$result3, _result$result4, _result$result5, _result$result6, addressComponents;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: true
            }));
            _body = {
              google_api_key: googleMapsApiKey,
              body: {
                address: {
                  regionCode: countryAutocomplete,
                  addressLines: addressLines !== null && addressLines !== void 0 ? addressLines : inputNames.filter(function (i) {
                    return (i === null || i === void 0 ? void 0 : i.enabled) !== false;
                  }).sort(function (a, b) {
                    return a.id - b.id;
                  }).map(function (input) {
                    return formState.changes[input.name];
                  }).filter(function (_i) {
                    return _i;
                  })
                }
              }
            };
            (formState === null || formState === void 0 ? void 0 : formState.previousResponseId) && (_body.previousResponseId = formState === null || formState === void 0 ? void 0 : formState.previousResponseId);
            _context.next = 6;
            return fetch("".concat(ordering.root, "/helpers/addresses/validate"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer ".concat(sessionToken)
              },
              body: JSON.stringify(_body)
            });
          case 6:
            req = _context.sent;
            _context.next = 9;
            return req.json();
          case 9:
            _yield$req$json = _context.sent;
            error = _yield$req$json.error;
            result = _yield$req$json.result;
            _formState = formState;
            if (!error && !(result !== null && result !== void 0 && result.error)) {
              _formState.previousResponseId = result === null || result === void 0 ? void 0 : result.responseId;
              _formState.formattedAddress = result === null || result === void 0 || (_result$result = result.result) === null || _result$result === void 0 || (_result$result = _result$result.address) === null || _result$result === void 0 ? void 0 : _result$result.formattedAddress;
              addressComponents = result === null || result === void 0 || (_result$result2 = result.result) === null || _result$result2 === void 0 || (_result$result2 = _result$result2.address) === null || _result$result2 === void 0 ? void 0 : _result$result2.addressComponents.filter(function (_f) {
                var _f$confirmationLevel;
                return (_f === null || _f === void 0 ? void 0 : _f.confirmationLevel) !== 'UNEXPECTED' && !(_f !== null && _f !== void 0 && (_f$confirmationLevel = _f.confirmationLevel) !== null && _f$confirmationLevel !== void 0 && _f$confirmationLevel.includes('UNCONFIRMED'));
              }).reduce(function (acc, field) {
                var existingField = acc.find(function (obj) {
                  return obj.name === changeAttrName(field.componentType);
                });
                if (existingField) {
                  var _field$componentName;
                  existingField.value = (_field$componentName = field.componentName) === null || _field$componentName === void 0 ? void 0 : _field$componentName.text;
                } else {
                  var _field$componentName2;
                  acc.push({
                    name: changeAttrName(field.componentType),
                    value: (_field$componentName2 = field.componentName) === null || _field$componentName2 === void 0 ? void 0 : _field$componentName2.text
                  });
                }
                return acc;
              }, []);
              addressComponents.push({
                name: 'city',
                value: ((_addressComponents$fi = addressComponents.find(function (item) {
                  return item.name === 'administrative_area_level_2';
                })) === null || _addressComponents$fi === void 0 ? void 0 : _addressComponents$fi.value) || ((_addressComponents$fi2 = addressComponents.find(function (item) {
                  return item.name === 'administrative_area_level_3';
                })) === null || _addressComponents$fi2 === void 0 ? void 0 : _addressComponents$fi2.value) || ((_addressComponents$fi3 = addressComponents.find(function (item) {
                  return item.name === 'locality';
                })) === null || _addressComponents$fi3 === void 0 ? void 0 : _addressComponents$fi3.value) || null
              });
              inputNames.concat({
                id: 8,
                name: 'country'
              }).map(function (_i) {
                return _i.name;
              }).forEach(function (field) {
                var _addressComponents$fi4, _addressComponents$fi5, _formState$changes;
                _formState.changes[field] = (_addressComponents$fi4 = (_addressComponents$fi5 = addressComponents.find(function (c) {
                  return (c === null || c === void 0 ? void 0 : c.name) === field;
                })) === null || _addressComponents$fi5 === void 0 ? void 0 : _addressComponents$fi5.value) !== null && _addressComponents$fi4 !== void 0 ? _addressComponents$fi4 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes[field];
              });
              _formState.changes.locality = _formState.changes.city;
              _formState.changes.country_code = countryAutocomplete;
              _formState.changes.address = result === null || result === void 0 || (_result$result3 = result.result) === null || _result$result3 === void 0 || (_result$result3 = _result$result3.address) === null || _result$result3 === void 0 ? void 0 : _result$result3.formattedAddress;
              (result === null || result === void 0 || (_result$result4 = result.result) === null || _result$result4 === void 0 || (_result$result4 = _result$result4.geocode) === null || _result$result4 === void 0 ? void 0 : _result$result4.location) && (_formState.changes.location = {
                lat: result === null || result === void 0 || (_result$result5 = result.result) === null || _result$result5 === void 0 || (_result$result5 = _result$result5.geocode) === null || _result$result5 === void 0 || (_result$result5 = _result$result5.location) === null || _result$result5 === void 0 ? void 0 : _result$result5.latitude,
                lng: result === null || result === void 0 || (_result$result6 = result.result) === null || _result$result6 === void 0 || (_result$result6 = _result$result6.geocode) === null || _result$result6 === void 0 || (_result$result6 = _result$result6.location) === null || _result$result6 === void 0 ? void 0 : _result$result6.longitude
              });
            }
            setFormState(_objectSpread(_objectSpread(_objectSpread({}, formState), _formState), {}, {
              loading: false,
              error: error ? result[0] : null
            }));
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            setFormState(_objectSpread(_objectSpread({}, formState), {}, {
              loading: false
            }));
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 17]]);
    }));
    return function handlePostAddress(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (formState.loading) return;
    if (address) {
      var _formState$changes2;
      if (!(address !== null && address !== void 0 && address.location) && !((_formState$changes2 = formState.changes) !== null && _formState$changes2 !== void 0 && _formState$changes2.location)) {
        var _address$address;
        handlePostAddress(address === null || address === void 0 || (_address$address = address.address) === null || _address$address === void 0 ? void 0 : _address$address.split(','));
      } else {
        setFormState(_objectSpread(_objectSpread({}, formState), {}, {
          changes: _objectSpread(_objectSpread({}, formState.changes), address)
        }));
      }
    }
  }, [address]);
  (0, _react.useEffect)(function () {
    if (formState.error) {
      showToast(_orderingComponents.ToastType.Error, formState.error, 3000);
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        error: null
      }));
    }
  }, [JSON.stringify(formState.error)]);
  (0, _react.useEffect)(function () {
    if (editSpreadAddress) {
      onChangeAddress(emptyFields);
    }
  }, [editSpreadAddress]);
  return /*#__PURE__*/_react.default.createElement(_styles.FormControl, {
    autoComplete: "off",
    onKeyDown: function onKeyDown(e) {
      e.key === 'Enter' && e.preventDefault();
    }
  }, (!formState.added || editSpreadAddress) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, inputNames.map(function (field) {
    var _ref3, _formState$changes$fi, _formState$changes3;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.name
    }, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
      className: field.name,
      placeholder: t("ADDRESS_".concat(field.name.toUpperCase()), (0, _utils.capitalize)(field.name.replace('_', ' '))),
      value: (_ref3 = (_formState$changes$fi = (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3[field.name]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : address === null || address === void 0 ? void 0 : address[field.name]) !== null && _ref3 !== void 0 ? _ref3 : field.name === 'country_code' ? countryAutocomplete : '',
      disabled: (field === null || field === void 0 ? void 0 : field.enabled) === false,
      style: _objectSpread({}, (field === null || field === void 0 ? void 0 : field.enabled) === false ? {
        background: theme.colors.disabled
      } : {}),
      onChange: function onChange(e) {
        handleChangeInput({
          name: field.name,
          value: e.target.value
        });
      },
      autoComplete: "new-field",
      maxLength: 70
    }));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    id: "submit-btn",
    type: "button",
    disabled: formState.loading || !inputNames.filter(function (i) {
      return i.required;
    }).every(function (input) {
      var _formState$changes4;
      return (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4[input.name];
    }),
    color: "primary",
    onClick: function onClick() {
      var _formState$changes5;
      return (_formState$changes5 = formState.changes) !== null && _formState$changes5 !== void 0 && _formState$changes5.location ? handleAddAddress() : handlePostAddress();
    }
  }, !formState.loading ? address !== null && address !== void 0 && address.address ? (_formState$changes6 = formState.changes) !== null && _formState$changes6 !== void 0 && _formState$changes6.location ? t('CONTINUE', 'Continue') : t('VERIFY_ADDRESS', 'Verify address') : (_formState$changes7 = formState.changes) !== null && _formState$changes7 !== void 0 && _formState$changes7.location ? t('CONFIRM_ADDRESS', 'Confirm address') : t('VERIFY_ADDRESS', 'Verify address') : t('LOADING', 'Loading')))));
};