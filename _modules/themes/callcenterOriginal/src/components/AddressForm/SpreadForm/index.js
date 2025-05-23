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
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var unexpectedFieldValid = ['postal_code'];
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
      added: !!(address !== null && address !== void 0 && address.location)
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var googleMapsApiKey = configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  var handleAddAddress = function handleAddAddress() {
    onChangeAddress(_objectSpread(_objectSpread({}, formState.changes), {}, {
      verified: !!(formState !== null && formState !== void 0 && formState.previousResponseId)
    }));
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
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(addressLines) {
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
                return (_f === null || _f === void 0 ? void 0 : _f.confirmationLevel) !== 'UNEXPECTED' && (!(_f !== null && _f !== void 0 && (_f$confirmationLevel = _f.confirmationLevel) !== null && _f$confirmationLevel !== void 0 && _f$confirmationLevel.includes('UNCONFIRMED')) || unexpectedFieldValid.includes(_f.componentType));
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
  }, [JSON.stringify(address)]);
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