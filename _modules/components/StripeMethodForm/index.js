"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeMethodFormUI = exports.StripeMethodForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactStripeJs = require("@stripe/react-stripe-js");

var _orderingComponents = require("ordering-components");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var StripeMethodFormUI = function StripeMethodFormUI(props) {
  var cart = props.cart,
      handleSource = props.handleSource,
      handleCancel = props.handleCancel,
      paymethod = props.paymethod;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var stripe = (0, _reactStripeJs.useStripe)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      paymentRequest = _useState2[0],
      setPaymentRequest = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      methodUnavailable = _useState4[0],
      setMethodUnavailable = _useState4[1];

  (0, _react.useEffect)(function () {
    if (stripe) {
      var _cart$business;

      var pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.name,
          amount: Math.floor(((cart === null || cart === void 0 ? void 0 : cart.balance) || (cart === null || cart === void 0 ? void 0 : cart.total)) * 100)
        },
        requestPayerName: true,
        requestPayerEmail: true
      });
      console.log(pr);

      pr._backingLibraries.GOOGLE_PAY.canMakePayment().then(function (result) {
        return console.log(result);
      });

      pr.canMakePayment().then(function (result) {
        console.log(result);

        if (result) {
          setPaymentRequest(pr);
        } else {
          setMethodUnavailable(true);
        }
      });
      pr.on('paymentmethod', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {
          var _e$paymentMethod, _e$paymentMethod2;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.complete('success');
                  handleCancel();
                  handleSource(_objectSpread(_objectSpread({}, e === null || e === void 0 ? void 0 : (_e$paymentMethod = e.paymentMethod) === null || _e$paymentMethod === void 0 ? void 0 : _e$paymentMethod.card), {}, {
                    id: e.paymentMethod.id,
                    type: e.paymentMethod.type,
                    source_id: e === null || e === void 0 ? void 0 : (_e$paymentMethod2 = e.paymentMethod) === null || _e$paymentMethod2 === void 0 ? void 0 : _e$paymentMethod2.id,
                    card: {
                      brand: e.paymentMethod.card.brand,
                      last4: e.paymentMethod.card.last4
                    }
                  }));

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, [stripe]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, methodUnavailable ? /*#__PURE__*/_react.default.createElement("h2", null, paymethod === 'google_pay' ? t('GOOGLE_PAY_UNAVAILABLE', 'Google pay unavailable') : t('APPLE_PAY_UNAVAILABLE', 'Apple pay unavailable')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, paymentRequest ? /*#__PURE__*/_react.default.createElement(_reactStripeJs.PaymentRequestButtonElement, {
    options: {
      paymentRequest: paymentRequest
    }
  }) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)));
};

exports.StripeMethodFormUI = StripeMethodFormUI;

var StripeMethodForm = function StripeMethodForm(props) {
  var propsController = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: StripeMethodFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.CardForm, propsController);
};

exports.StripeMethodForm = StripeMethodForm;