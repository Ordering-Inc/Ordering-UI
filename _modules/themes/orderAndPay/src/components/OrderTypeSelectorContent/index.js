"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorContentUI = exports.OrderTypeSelectorContent = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));
var _BsArrowLeft = _interopRequireDefault(require("@meronex/icons/bs/BsArrowLeft"));
var _Modal = require("../Modal");
var _styles = require("./styles");
var _Inputs = require("../../../../../styles/Inputs");
var _Buttons = require("../../styles/Buttons");
var _Confirm = require("../Confirm");
var _LogoutButton = require("../LogoutButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderTypeSelectorContentUI = function OrderTypeSelectorContentUI(props) {
  var _configState$configs, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var handleChangeOrderType = props.handleChangeOrderType,
    orderTypes = props.orderTypes,
    onClose = props.onClose,
    logo = props.logo,
    handleBusinessPage = props.handleBusinessPage,
    businessId = props.businessId,
    isDisabledTables = props.isDisabledTables;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useOrder = (0, _orderingComponents.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderStatus = _useOrder2[0];
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    auth = _useSession2[0].auth;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    orderTypeSelected = _useState2[0],
    setOrderTypeSelected = _useState2[1];
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  // const [pagination, setPagination] = useState({})
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    places = _useState6[0],
    setPlaces = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    placeId = _useState8[0],
    setPlaceId = _useState8[1];
  var inputRef = (0, _react.useRef)();
  var configTypes = (configState === null || configState === void 0 || (_configState$configs = configState.configs) === null || _configState$configs === void 0 || (_configState$configs = _configState$configs.order_types_allowed) === null || _configState$configs === void 0 ? void 0 : _configState$configs.value.split('|').map(function (value) {
    return Number(value);
  })) || [];
  var handleClickOrderType = function handleClickOrderType(_ref) {
    var value = _ref.value,
      text = _ref.text,
      label = _ref.label;
    handleChangeOrderType && handleChangeOrderType(value);
    if (!label) {
      handleBusinessPage();
      return;
    }
    onClose && onClose();
    setOrderTypeSelected({
      open: true,
      type: text,
      label: label
    });
  };
  var getPlaces = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, _yield$response$json, result, error;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch("".concat(ordering.root, "/business/").concat(businessId, "/places"));
          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();
          case 6:
            _yield$response$json = _context.sent;
            result = _yield$response$json.result;
            error = _yield$response$json.error;
            if (error) {
              setAlertState({
                open: true,
                content: result
              });
            } else {
              setPlaces(result.map(function (place) {
                return {
                  name: place.name,
                  id: place.id,
                  enabled: place.enabled
                };
              }));
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            setAlertState({
              open: true,
              content: _context.t0.message
            });
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 12]]);
    }));
    return function getPlaces() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleChangePlace = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (placeId) {
              _context2.next = 3;
              break;
            }
            setAlertState({
              open: true,
              content: [t('PLACE_ID_REQURED', 'Place id is required')]
            });
            return _context2.abrupt("return");
          case 3:
            if (!(places.some(function (place) {
              return place.id === parseInt(placeId);
            }) || isDisabledTables)) {
              _context2.next = 9;
              break;
            }
            _context2.next = 6;
            return window.localStorage.setItem('place_id', placeId);
          case 6:
            handleBusinessPage();
            _context2.next = 10;
            break;
          case 9:
            setAlertState({
              open: true,
              content: [t('THE_PLACES_NOT_EXISTS', 'The place does not exists')]
            });
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleChangePlace() {
      return _ref3.apply(this, arguments);
    };
  }();
  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };
  var onChangePlaceId = function onChangePlaceId(e) {
    inputRef.current.value = inputRef.current.value.replace(/[^0-9.]+/g, '');
    setPlaceId(e.target.value.replace(/[^0-9.]+/g, ''));
  };
  var ordersRedirect = function ordersRedirect() {
    events.emit('go_to_page', {
      page: 'orders'
    });
  };
  (0, _react.useEffect)(function () {
    getPlaces();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "order-type",
    style: {
      overflow: 'hidden'
    }
  }, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeSelectorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListTitle, null, t('SELECT_YOUR_ORDER_TYPE', 'Select your order type')), auth && /*#__PURE__*/_react.default.createElement(_styles.IconsContainer, null, /*#__PURE__*/_react.default.createElement("svg", {
    onClick: ordersRedirect,
    width: "20px",
    height: "20px",
    viewBox: "0 0 16 16",
    fill: theme.colors.darkTextColor,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M14.5 3C14.6326 3 14.7598 3.05268 14.8536 3.14645C14.9473 3.24021 15 3.36739 15 3.5V12.5C15 12.6326 14.9473 12.7598 14.8536 12.8536C14.7598 12.9473 14.6326 13 14.5 13H1.5C1.36739 13 1.24021 12.9473 1.14645 12.8536C1.05268 12.7598 1 12.6326 1 12.5V3.5C1 3.36739 1.05268 3.24021 1.14645 3.14645C1.24021 3.05268 1.36739 3 1.5 3H14.5ZM1.5 2C1.10218 2 0.720644 2.15804 0.43934 2.43934C0.158035 2.72064 0 3.10218 0 3.5L0 12.5C0 12.8978 0.158035 13.2794 0.43934 13.5607C0.720644 13.842 1.10218 14 1.5 14H14.5C14.8978 14 15.2794 13.842 15.5607 13.5607C15.842 13.2794 16 12.8978 16 12.5V3.5C16 3.10218 15.842 2.72064 15.5607 2.43934C15.2794 2.15804 14.8978 2 14.5 2H1.5Z",
    fill: theme.colors.darkTextColor
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M7.00005 5.50004C7.00005 5.36743 7.05272 5.24025 7.14649 5.14649C7.24026 5.05272 7.36744 5.00004 7.50005 5.00004H12.5C12.6327 5.00004 12.7598 5.05272 12.8536 5.14649C12.9474 5.24025 13 5.36743 13 5.50004C13 5.63265 12.9474 5.75982 12.8536 5.85359C12.7598 5.94736 12.6327 6.00004 12.5 6.00004H7.50005C7.36744 6.00004 7.24026 5.94736 7.14649 5.85359C7.05272 5.75982 7.00005 5.63265 7.00005 5.50004ZM5.50405 4.64604C5.55061 4.69248 5.58755 4.74766 5.61276 4.80841C5.63796 4.86915 5.65094 4.93427 5.65094 5.00004C5.65094 5.06581 5.63796 5.13093 5.61276 5.19167C5.58755 5.25242 5.55061 5.30759 5.50405 5.35404L4.00405 6.85404C3.9576 6.9006 3.90242 6.93755 3.84168 6.96275C3.78093 6.98796 3.71581 7.00093 3.65005 7.00093C3.58428 7.00093 3.51916 6.98796 3.45841 6.96275C3.39767 6.93755 3.34249 6.9006 3.29605 6.85404L2.79605 6.35404C2.74956 6.30755 2.71268 6.25236 2.68752 6.19162C2.66236 6.13088 2.64941 6.06578 2.64941 6.00004C2.64941 5.86726 2.70216 5.73993 2.79605 5.64604C2.88993 5.55215 3.01727 5.49941 3.15005 5.49941C3.28282 5.49941 3.41016 5.55215 3.50405 5.64604L3.65005 5.79304L4.79605 4.64604C4.84249 4.59948 4.89767 4.56253 4.95841 4.53733C5.01916 4.51212 5.08428 4.49915 5.15005 4.49915C5.21581 4.49915 5.28093 4.51212 5.34168 4.53733C5.40242 4.56253 5.4576 4.59948 5.50405 4.64604ZM7.00005 9.50004C7.00005 9.36743 7.05272 9.24025 7.14649 9.14649C7.24026 9.05272 7.36744 9.00004 7.50005 9.00004H12.5C12.6327 9.00004 12.7598 9.05272 12.8536 9.14649C12.9474 9.24025 13 9.36743 13 9.50004C13 9.63265 12.9474 9.75983 12.8536 9.85359C12.7598 9.94736 12.6327 10 12.5 10H7.50005C7.36744 10 7.24026 9.94736 7.14649 9.85359C7.05272 9.75983 7.00005 9.63265 7.00005 9.50004ZM5.50405 8.64604C5.55061 8.69249 5.58755 8.74766 5.61276 8.80841C5.63796 8.86915 5.65094 8.93427 5.65094 9.00004C5.65094 9.06581 5.63796 9.13093 5.61276 9.19167C5.58755 9.25242 5.55061 9.30759 5.50405 9.35404L4.00405 10.854C3.9576 10.9006 3.90242 10.9375 3.84168 10.9628C3.78093 10.988 3.71581 11.0009 3.65005 11.0009C3.58428 11.0009 3.51916 10.988 3.45841 10.9628C3.39767 10.9375 3.34249 10.9006 3.29605 10.854L2.79605 10.354C2.74956 10.3076 2.71268 10.2524 2.68752 10.1916C2.66236 10.1309 2.64941 10.0658 2.64941 10C2.64941 9.9343 2.66236 9.8692 2.68752 9.80846C2.71268 9.74772 2.74956 9.69253 2.79605 9.64604C2.84253 9.59955 2.89772 9.56268 2.95846 9.53752C3.0192 9.51236 3.0843 9.49941 3.15005 9.49941C3.21579 9.49941 3.28089 9.51236 3.34163 9.53752C3.40237 9.56268 3.45756 9.59955 3.50405 9.64604L3.65005 9.79304L4.79605 8.64604C4.84249 8.59948 4.89767 8.56253 4.95841 8.53733C5.01916 8.51212 5.08428 8.49915 5.15005 8.49915C5.21581 8.49915 5.28093 8.51212 5.34168 8.53733C5.40242 8.56253 5.4576 8.59948 5.50405 8.64604Z",
    fill: theme.colors.darkTextColor
  })), /*#__PURE__*/_react.default.createElement(_styles.LogoutButtonContainer, null, /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, null)))), /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: optimizeImage(logo, 'h_200,c_limit')
  })), orderTypes && orderTypes.filter(function (ordertype) {
    return configTypes.includes(ordertype.value);
  }).map(function (item, i) {
    var _orderStatus$options;
    return /*#__PURE__*/_react.default.createElement(_styles.OrderTypeListItemContainer, {
      key: i,
      bgimage: item === null || item === void 0 ? void 0 : item.image,
      onClick: function onClick() {
        return handleClickOrderType({
          value: item.value,
          text: item.text,
          label: item.label
        });
      },
      active: (orderStatus === null || orderStatus === void 0 || (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.type) === (item === null || item === void 0 ? void 0 : item.value)
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.OrderTypeTitle, null, item.text), /*#__PURE__*/_react.default.createElement(_styles.OrderTypeDescription, null, item.description), /*#__PURE__*/_react.default.createElement(_styles.OrderStartWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, t('START_MY_ORDER', 'Start my order')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null))));
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.open,
    onClose: function onClose() {
      return setOrderTypeSelected(_objectSpread(_objectSpread({}, orderTypeSelected), {}, {
        open: false
      }));
    },
    hideCloseDefault: true,
    height: "calc(100vh + 100px)",
    padding: "30px 40px 10px 40px"
  }, /*#__PURE__*/_react.default.createElement(_styles.ModalIcon, null, /*#__PURE__*/_react.default.createElement(_BsArrowLeft.default, {
    size: 20,
    onClick: function onClick() {
      return setOrderTypeSelected(_objectSpread(_objectSpread({}, orderTypeSelected), {}, {
        open: false
      }));
    },
    color: theme.colors.arrowColor
  })), /*#__PURE__*/_react.default.createElement(_styles.TypeContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.type), /*#__PURE__*/_react.default.createElement("label", null, orderTypeSelected === null || orderTypeSelected === void 0 ? void 0 : orderTypeSelected.label), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    placeholder: "#",
    onChange: function onChange(e) {
      return onChangePlaceId(e);
    },
    type: "text",
    ref: inputRef,
    min: 0
  })), !isDisabledTables && /*#__PURE__*/_react.default.createElement(_styles.Table, null, places.length > 0 && /*#__PURE__*/_react.default.createElement("h2", null, t('AVAILABLE_PLACES', 'Available places')), places.map(function (place) {
    return /*#__PURE__*/_react.default.createElement(_styles.PlaceName, {
      key: place.id,
      isDisabled: !place.enabled
    }, /*#__PURE__*/_react.default.createElement("p", null, place.name), " ", /*#__PURE__*/_react.default.createElement("span", null, t('TABLE', 'Table'), " ", place.id));
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    style: {
      width: '100%'
    },
    height: "44px",
    onClick: handleChangePlace
  }, t('CONTINUE', 'Continue')))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ERROR', 'Error'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    }
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
exports.OrderTypeSelectorContentUI = OrderTypeSelectorContentUI;
var OrderTypeSelectorContent = function OrderTypeSelectorContent(props) {
  var _theme$images, _theme$images2, _theme$defaultLanguag, _theme$images3, _theme$defaultLanguag2, _theme$images4, _theme$defaultLanguag3, _theme$images5, _theme$defaultLanguag4, _theme$images6;
  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var theme = (0, _styledComponents.useTheme)();
  var orderTypeProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrderTypeSelectorContentUI,
    logo: ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo) || props.logo || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo),
    orderTypes: props.orderTypes || [{
      value: 2,
      text: t('PICKUP', 'Pickup'),
      description: t('ORDERTYPE_DESCRIPTION_PICKUP', theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.ORDERTYPE_DESCRIPTION_PICKUP),
      image: (_theme$images3 = theme.images) === null || _theme$images3 === void 0 || (_theme$images3 = _theme$images3.deliveryTypes) === null || _theme$images3 === void 0 ? void 0 : _theme$images3.pickUp
    }, {
      value: 3,
      text: t('EAT_IN', 'Eat in'),
      description: t('ORDERTYPE_DESCRIPTION_EATIN', theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.ORDERTYPE_DESCRIPTION_EATIN),
      image: (_theme$images4 = theme.images) === null || _theme$images4 === void 0 || (_theme$images4 = _theme$images4.deliveryTypes) === null || _theme$images4 === void 0 ? void 0 : _theme$images4.eatIn,
      label: t('TABLE_NUMBER', 'Table number')
    }, {
      value: 4,
      text: t('CURBSIDE', 'Curbside'),
      description: t('ORDERTYPE_DESCRIPTION_CURBSIDE', theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.ORDERTYPE_DESCRIPTION_CURBSIDE),
      image: (_theme$images5 = theme.images) === null || _theme$images5 === void 0 || (_theme$images5 = _theme$images5.deliveryTypes) === null || _theme$images5 === void 0 ? void 0 : _theme$images5.curbside
    }, {
      value: 5,
      text: t('DRIVE_THRU', 'Drive thru'),
      description: t('ORDERTYPE_DESCRIPTION_DRIVETHRU', theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.ORDERTYPE_DESCRIPTION_DRIVETHRU),
      image: (_theme$images6 = theme.images) === null || _theme$images6 === void 0 || (_theme$images6 = _theme$images6.deliveryTypes) === null || _theme$images6 === void 0 ? void 0 : _theme$images6.driveThru
    }]
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, orderTypeProps);
};
exports.OrderTypeSelectorContent = OrderTypeSelectorContent;