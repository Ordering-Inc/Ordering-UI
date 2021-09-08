"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStripeJs = require("@stripe/react-stripe-js");

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage card form for stripe elements form behavior without UI component
 */
var CardForm = function CardForm(props) {
  var UIComponent = props.UIComponent,
      requirements = props.requirements,
      toSave = props.toSave,
      handleSource = props.handleSource,
      onNewCard = props.onNewCard,
      handleCustomSubmit = props.handleCustomSubmit,
      isSplitForm = props.isSplitForm;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var stripe = (0, _reactStripeJs.useStripe)();
  var elements = (0, _reactStripeJs.useElements)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];
  /**
   * POST the token ID to backend.
   * @param {*string} param0 payment method id
   * @param {*object} user object with user info from session provider
   * @param {*string} businessId string to know your business
   */


  var stripeTokenHandler = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(tokenId, user, businessId) {
      var _user$session;

      var result, response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(ordering.root, "/payments/stripe/cards"), {
                method: 'POST',
                headers: {
                  Authorization: "Bearer ".concat(user === null || user === void 0 ? void 0 : (_user$session = user.session) === null || _user$session === void 0 ? void 0 : _user$session.access_token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  business_id: businessId,
                  gateway: 'stripe',
                  token_id: tokenId,
                  user_id: user === null || user === void 0 ? void 0 : user.id
                })
              });

            case 2:
              result = _context.sent;
              _context.next = 5;
              return result.json();

            case 5:
              response = _context.sent;
              onNewCard && onNewCard(response.result);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function stripeTokenHandler(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Handle real-time validation errors from the card Element
   * @param {*event} event
   */


  var handleChange = function handleChange(event) {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };
  /**
   * Handle form submission
   * @param {event} event
   */


  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(event) {
      var _card, card, result, _result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!handleCustomSubmit) {
                _context2.next = 3;
                break;
              }

              _card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardElement);
              return _context2.abrupt("return", handleCustomSubmit(_card));

            case 3:
              setLoading(true);
              event.preventDefault();
              card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardElement);

              if (isSplitForm) {
                card = elements === null || elements === void 0 ? void 0 : elements.getElement(_reactStripeJs.CardNumberElement);
              }

              if (requirements) {
                _context2.next = 17;
                break;
              }

              if (stripe) {
                _context2.next = 11;
                break;
              }

              setError(t('STRIPE_LOAD_ERROR', 'Failed to load Stripe properly'));
              return _context2.abrupt("return");

            case 11:
              _context2.next = 13;
              return stripe.createPaymentMethod({
                type: 'card',
                card: card,
                billing_details: {
                  name: "".concat(user.name, " ").concat(user.lastname),
                  email: user.email,
                  address: user.address
                }
              });

            case 13:
              result = _context2.sent;

              if (result.error) {
                setLoading(false);
                setError(result.error.message);
              } else {
                setLoading(false);
                setError(null);
                handleSource && handleSource({
                  id: result === null || result === void 0 ? void 0 : result.paymentMethod.id,
                  type: 'card',
                  card: {
                    brand: result === null || result === void 0 ? void 0 : result.paymentMethod.card.brand,
                    last4: result === null || result === void 0 ? void 0 : result.paymentMethod.card.last4
                  }
                }); // props.handlerToken(result?.paymentMethod)
              }

              _context2.next = 24;
              break;

            case 17:
              if (stripe) {
                _context2.next = 20;
                break;
              }

              setError(t('STRIPE_LOAD_ERROR', 'Faile to load Stripe properly'));
              return _context2.abrupt("return");

            case 20:
              _context2.next = 22;
              return stripe.confirmCardSetup(requirements, {
                payment_method: {
                  card: card,
                  billing_details: {
                    name: "".concat(user.name, " ").concat(user.lastname),
                    email: user.email,
                    address: user.address
                  }
                }
              });

            case 22:
              _result = _context2.sent;

              if (_result.error) {
                setLoading(false);
                setError(_result.error.message);
              } else {
                setLoading(false);
                setError(null);
                toSave && stripeTokenHandler(_result.setupIntent.payment_method, user, props.businessId);
              }

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmit(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleSubmit: handleSubmit,
    error: error,
    loading: loading,
    handleChange: handleChange
  }));
};

exports.CardForm = CardForm;
CardForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business id to get cards from API
   */
  businessId: _propTypes.default.number,

  /**
   * Save client secret id used in stripe for create a payment method
   */
  clientSecret: _propTypes.default.string,

  /**
   * Autosave cart
   */
  autosave: _propTypes.default.bool,

  /**
   * method used for handle card token created
   */
  handlerToken: _propTypes.default.func,

  /**
   * handleCustomClick, function to get click event and return card selected without default behavior
   */
  handleCustomSubmit: _propTypes.default.func
};
CardForm.defaultProps = {
  autosave: true
};