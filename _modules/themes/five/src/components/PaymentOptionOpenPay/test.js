"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionOpenPay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
 * Component to manage payment option paypal behavior without UI component
 */
var PaymentOptionOpenPay = function PaymentOptionOpenPay(props) {
  var UIComponent = props.UIComponent,
      publicKey = props.publicKey,
      merchantId = props.merchantId,
      isSandbox = props.isSandbox;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var _useState = (0, _react.useState)({
    cards: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      cardsList = _useState2[0],
      setCardsList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSdkReady = _useState4[0],
      setIsSdkReady = _useState4[1];

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      cardSelected = _useState6[0],
      setCardSelected = _useState6[1];

  var isAlsea = ordering.project === 'alsea';
  (0, _react.useEffect)(function () {
    var _window, _window$OpenPay, _window$OpenPay$devic;

    if (!merchantId || !publicKey) return;

    if ((_window = window) !== null && _window !== void 0 && (_window$OpenPay = _window.OpenPay) !== null && _window$OpenPay !== void 0 && (_window$OpenPay$devic = _window$OpenPay.deviceData) !== null && _window$OpenPay$devic !== void 0 && _window$OpenPay$devic.setup) {
      setIsSdkReady(true);
      return;
    }

    var scripts = ['https://js.openpay.mx/openpay.v1.min.js', 'https://js.openpay.mx/openpay-data.v1.min.js'];
    scripts.forEach(function (s) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = s;
      script.defer = true;
      script.async = true;

      script.onload = function () {
        window.OpenPay.setId(merchantId);
        window.OpenPay.setApiKey(publicKey);
        window.OpenPay.setSandboxMode(isSandbox);
        setIsSdkReady(true);
      };

      script.onerror = function () {
        throw new Error('Open pay SDK could not be loaded.');
      };

      document.body.appendChild(script);
    });
  }, [merchantId, publicKey]);

  var getCards = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, result;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true,
                error: null
              }));
              _context.next = 4;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging', ".ordering.co/alseaplatform/api/openpay/cards/cards.php?language=").concat(ordering.language, "&user_id=").concat(user === null || user === void 0 ? void 0 : user.id), {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              result = _context.sent;

              if (result.error) {
                setCardsList({
                  loading: false,
                  cards: [],
                  error: result === null || result === void 0 ? void 0 : result.result
                });
              } else {
                setCardsList({
                  loading: false,
                  cards: result === null || result === void 0 ? void 0 : result.result.map(function (card) {
                    return _objectSpread(_objectSpread({}, card), {}, {
                      data: {
                        card_id: card === null || card === void 0 ? void 0 : card.id,
                        device_session_id: window.OpenPay.deviceData.setup()
                      }
                    });
                  }),
                  error: null
                });
              }

              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getCards() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleCardClick = function handleCardClick(card) {
    setCardSelected({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brandCardName,
        last4: card.last4
      },
      data: {
        card_id: card.id,
        device_session_id: window.OpenPay.deviceData.setup()
      }
    });
  };

  var handleNewCard = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
      var _resultCard$result, response, result, deviceSessionId, responseCard, resultCard;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true,
                error: null
              }));
              _context2.next = 4;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging', ".ordering.co/alseaplatform/api/openpay/cards/token.php"), {
                method: 'POST',
                body: JSON.stringify({
                  card_number: data.cardNumber,
                  cvv2: data.cardSecurityCode,
                  // expiry: data.expiry,
                  expiration_month: data.cardMonth,
                  expiration_year: data.cardYear,
                  holder_name: data.cardName
                }),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId
                }
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              result = _context2.sent;

              if (!(_typeof(result) !== 'object' || result !== null && result !== void 0 && result.error)) {
                _context2.next = 11;
                break;
              }

              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: result === null || result === void 0 ? void 0 : result.result
              }));
              return _context2.abrupt("return");

            case 11:
              deviceSessionId = window.OpenPay.deviceData.setup();
              _context2.next = 14;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging', ".ordering.co/alseaplatform/api/openpay/cards/add.php"), {
                method: 'POST',
                body: JSON.stringify({
                  language: ordering.language,
                  user_id: user === null || user === void 0 ? void 0 : user.id,
                  token_id: result === null || result === void 0 ? void 0 : result.id,
                  device_session_id: deviceSessionId
                }),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId,
                  'Content-Type': 'application/json'
                }
              });

            case 14:
              responseCard = _context2.sent;
              _context2.next = 17;
              return responseCard.json();

            case 17:
              resultCard = _context2.sent;

              if (!resultCard.error) {
                _context2.next = 21;
                break;
              }

              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: resultCard === null || resultCard === void 0 ? void 0 : resultCard.result
              }));
              return _context2.abrupt("return");

            case 21:
              setCardsList({
                cards: [].concat(_toConsumableArray(cardsList.cards), [_objectSpread(_objectSpread({}, resultCard === null || resultCard === void 0 ? void 0 : resultCard.result), {}, {
                  brand: resultCard === null || resultCard === void 0 ? void 0 : resultCard.brandCardName
                })]),
                loading: false,
                error: null
              });
              handleCardClick(_objectSpread(_objectSpread({}, resultCard === null || resultCard === void 0 ? void 0 : resultCard.result), {}, {
                brand: resultCard === null || resultCard === void 0 ? void 0 : resultCard.brandCardName,
                type: 'card',
                card: {
                  brand: resultCard.brandCardName,
                  last4: resultCard === null || resultCard === void 0 ? void 0 : resultCard.last4
                },
                data: {
                  card_id: resultCard === null || resultCard === void 0 ? void 0 : (_resultCard$result = resultCard.result) === null || _resultCard$result === void 0 ? void 0 : _resultCard$result.id,
                  device_session_id: deviceSessionId
                }
              }));
              _context2.next = 28;
              break;

            case 25:
              _context2.prev = 25;
              _context2.t0 = _context2["catch"](0);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 25]]);
    }));

    return function handleNewCard(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteCard = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(card) {
      var response, result, _cardsList$cards;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true,
                error: null
              }));
              _context3.next = 4;
              return fetch("https://alsea-plugins".concat(isAlsea ? '' : '-staging', ".ordering.co/alseaplatform/api/openpay/cards/delete.php"), {
                method: 'POST',
                body: JSON.stringify({
                  language: ordering.language,
                  user_id: user === null || user === void 0 ? void 0 : user.id,
                  card_id: card === null || card === void 0 ? void 0 : card.id
                }),
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'X-APP-X': ordering.appId
                }
              });

            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.json();

            case 7:
              result = _context3.sent;

              if ((result === null || result === void 0 ? void 0 : result.result) === 'OK') {
                setCardsList({
                  cards: cardsList === null || cardsList === void 0 ? void 0 : (_cardsList$cards = cardsList.cards) === null || _cardsList$cards === void 0 ? void 0 : _cardsList$cards.filter(function (_card) {
                    return (_card === null || _card === void 0 ? void 0 : _card.id) !== (card === null || card === void 0 ? void 0 : card.id);
                  }),
                  loading: false,
                  error: null
                });
              } else {
                setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                  loading: false,
                  error: [result === null || result === void 0 ? void 0 : result.result]
                }));
              }

              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function deleteCard(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (isSdkReady) {
      getCards();
    }
  }, [isSdkReady]);
  return UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cardSelected: cardSelected,
    getCards: getCards,
    cardsList: cardsList,
    handleNewCard: handleNewCard,
    handleCardClick: handleCardClick,
    deleteCard: deleteCard
  }));
};

exports.PaymentOptionOpenPay = PaymentOptionOpenPay;
PaymentOptionOpenPay.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
PaymentOptionOpenPay.defaultProps = {
  body: {},
  currency: 'USD',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};