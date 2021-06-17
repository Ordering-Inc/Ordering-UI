"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var paymethodsExisting = ['stripe', 'stripe_direct', 'stripe_connect', 'paypal'];
var paymethodsNotAllowed = ['paypal_express', 'authorize'];
var paymethodsCallcenterMode = ['cash', 'card_delivery'];
/**
 * Component to manage payment options behavior without UI component
 */

var PaymentOptions = function PaymentOptions(props) {
  var _orderState$carts, _orderState$carts$;

  var isLoading = props.isLoading,
      paymethods = props.paymethods,
      businessId = props.businessId,
      isCustomerMode = props.isCustomerMode,
      onPaymentChange = props.onPaymentChange,
      paymethodsCallCenterCustom = props.paymethodsCallCenterCustom,
      UIComponent = props.UIComponent;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      changePaymethod = _useOrder2[1].changePaymethod;

  var orderTotal = ((_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : (_orderState$carts$ = _orderState$carts["businessId:".concat(businessId)]) === null || _orderState$carts$ === void 0 ? void 0 : _orderState$carts$.total) || 0;

  var _useState = (0, _react.useState)({
    paymethods: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      paymethodsList = _useState2[0],
      setPaymethodsList = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      paymethodSelected = _useState4[0],
      setPaymethodsSelected = _useState4[1];

  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      paymethodData = _useState6[0],
      setPaymethodData = _useState6[1];

  var parsePaymethods = function parsePaymethods(paymethods) {
    var _paymethods = paymethods && paymethods.filter(function (credentials) {
      var _credentials$paymetho, _credentials$paymetho2, _credentials$paymetho3, _credentials$paymetho4;

      return isCustomerMode ? !paymethodsNotAllowed.includes(credentials === null || credentials === void 0 ? void 0 : (_credentials$paymetho = credentials.paymethod) === null || _credentials$paymetho === void 0 ? void 0 : _credentials$paymetho.gateway) && paymethodsCallCenterCustom ? paymethodsCallCenterCustom.includes(credentials === null || credentials === void 0 ? void 0 : (_credentials$paymetho2 = credentials.paymethod) === null || _credentials$paymetho2 === void 0 ? void 0 : _credentials$paymetho2.gateway) : paymethodsCallcenterMode.includes(credentials === null || credentials === void 0 ? void 0 : (_credentials$paymetho3 = credentials.paymethod) === null || _credentials$paymetho3 === void 0 ? void 0 : _credentials$paymetho3.gateway) : !paymethodsNotAllowed.includes(credentials === null || credentials === void 0 ? void 0 : (_credentials$paymetho4 = credentials.paymethod) === null || _credentials$paymetho4 === void 0 ? void 0 : _credentials$paymetho4.gateway);
    }).map(function (credentials) {
      return _objectSpread(_objectSpread({}, credentials === null || credentials === void 0 ? void 0 : credentials.paymethod), {}, {
        sandbox: credentials === null || credentials === void 0 ? void 0 : credentials.sandbox,
        credentials: credentials === null || credentials === void 0 ? void 0 : credentials.data
      });
    });

    return _paymethods;
  };
  /**
   * Method to get payment options from API
   */


  var getPaymentOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, _yield$ordering$busin2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ordering.businesses(businessId).get();

            case 3:
              _yield$ordering$busin = _context.sent;
              _yield$ordering$busin2 = _yield$ordering$busin.content;
              error = _yield$ordering$busin2.error;
              result = _yield$ordering$busin2.result;

              if (!error) {
                paymethodsList.paymethods = parsePaymethods(result.paymethods);
              }

              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
                error: error ? result : null,
                loading: false,
                paymethods: error ? [] : parsePaymethods(result.paymethods)
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
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

    return function getPaymentOptions() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to set payment option selected by user
   * @param {Object} val object with information of payment method selected
   */


  var handlePaymethodClick = function handlePaymethodClick(paymethod) {
    setPaymethodsSelected(paymethod);
    handlePaymethodDataChange({});
  };

  var handlePaymethodDataChange = function handlePaymethodDataChange(data) {
    if (paymethodSelected && data) {
      changePaymethod(businessId, paymethodSelected.id, JSON.stringify(data));
    }

    setPaymethodData(data);

    if (paymethodSelected) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data: data
      });
    } else {
      onPaymentChange && onPaymentChange(null);
    }
  };

  (0, _react.useEffect)(function () {
    if (paymethodSelected && (['card_delivery', 'cash', 'stripe_redirect'].includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) || !paymethodsExisting.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway))) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data: {}
      });
    } else if (paymethodSelected === null && onPaymentChange) {
      onPaymentChange(null);
    }
  }, [paymethodSelected]);
  (0, _react.useEffect)(function () {
    if (isLoading) return;

    if (paymethods) {
      setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
        loading: false,
        paymethods: parsePaymethods(paymethods)
      }));
    } else {
      if (businessId) {
        getPaymentOptions();
      } else {
        setPaymethodsList(_objectSpread(_objectSpread({}, paymethodsList), {}, {
          loading: false
        }));
      }
    }
  }, [isLoading, businessId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderTotal: orderTotal,
    paymethodsList: paymethodsList,
    paymethodSelected: paymethodSelected,
    paymethodData: paymethodData,
    handlePaymethodClick: handlePaymethodClick,
    handlePaymethodDataChange: handlePaymethodDataChange
  })));
};

exports.PaymentOptions = PaymentOptions;
PaymentOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Options, this must be containt an array of payment options
   */
  paymethods: _propTypes.default.array,

  /**
   * businessId, this must be contains business id to fetch business from API
   */
  businessId: _propTypes.default.number,

  /**
   * Get option selected
   */
  onPaymentChange: _propTypes.default.func,

  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Payment Options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};