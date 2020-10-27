"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _VscWarning = _interopRequireDefault(require("@meronex/icons/vsc/VscWarning"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _UpsellingPage = require("../UpsellingPage");

var _styles = require("./styles");

var _Buttons = require("../../styles/Buttons");

var _NotFoundSource = require("../NotFoundSource");

var _AddressDetails = require("../AddressDetails");

var _UserDetails = require("../UserDetails");

var _PaymentOptions = require("../PaymentOptions");

var _DriverTips = require("../DriverTips");

var _Cart = require("../Cart");

var _utils = require("../../utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CheckoutUI = function CheckoutUI(props) {
  var _businessDetails$busi, _businessDetails$busi2, _businessDetails$busi3, _businessDetails$busi4, _businessDetails$erro, _businessDetails$busi5, _cart$products;

  var cartState = props.cartState,
      cart = props.cart,
      placing = props.placing,
      businessDetails = props.businessDetails,
      paymethodSelected = props.paymethodSelected,
      handlePaymethodChange = props.handlePaymethodChange,
      handlerClickPlaceOrder = props.handlerClickPlaceOrder;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      options = _useOrder2[0].options;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      errorCash = _useState2[0],
      setErrorCash = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.WrappContainer, null, (cart === null || cart === void 0 ? void 0 : cart.status) === 2 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_PENDING_MESSAGE', 'Your order is being processed, please wait a little more. if you\'ve been waiting too long, please reload the page'))), (cart === null || cart === void 0 ? void 0 : cart.status) === 4 && /*#__PURE__*/_react.default.createElement(_styles.WarningMessage, null, /*#__PURE__*/_react.default.createElement(_VscWarning.default, null), /*#__PURE__*/_react.default.createElement("h1", null, t('CART_STATUS_CANCEL_MESSAGE', 'The payment has not been successful, please try again'))), cartState.loading ? /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 150
  })) : /*#__PURE__*/_react.default.createElement(_AddressDetails.AddressDetails, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    apiKey: "AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk",
    mapZoom: 15
  }), /*#__PURE__*/_react.default.createElement(_styles.UserDetailsContainer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "user"
  }, cartState.loading ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  })) : /*#__PURE__*/_react.default.createElement(_UserDetails.UserDetails, {
    cartStatus: cart === null || cart === void 0 ? void 0 : cart.status,
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    useValidationFields: true,
    useDefualtSessionManager: true,
    useSessionUser: true
  })), ((businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.loading) || cartState.loading) && /*#__PURE__*/_react.default.createElement("div", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 35,
    style: {
      marginBottom: '10px'
    }
  }))), !cartState.loading && (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business) && Object.values(businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.business).length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi = businessDetails.business) === null || _businessDetails$busi === void 0 ? void 0 : _businessDetails$busi.name), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi2 = businessDetails.business) === null || _businessDetails$busi2 === void 0 ? void 0 : _businessDetails$busi2.email), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi3 = businessDetails.business) === null || _businessDetails$busi3 === void 0 ? void 0 : _businessDetails$busi3.cellphone), /*#__PURE__*/_react.default.createElement("p", null, businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi4 = businessDetails.business) === null || _businessDetails$busi4 === void 0 ? void 0 : _businessDetails$busi4.address))), (businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error) && (businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$erro = businessDetails.error) === null || _businessDetails$erro === void 0 ? void 0 : _businessDetails$erro.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "business"
  }, /*#__PURE__*/_react.default.createElement("h1", null, t('BUSINESS_DETAILS', 'Business Details')), businessDetails === null || businessDetails === void 0 ? void 0 : businessDetails.error.map(function (e, i) {
    return /*#__PURE__*/_react.default.createElement("p", {
      key: i
    }, t('ERROR', 'ERROR'), ": [", e, "]");
  }))), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMENT_METHOD', 'Payment Method')), businessDetails.business && /*#__PURE__*/_react.default.createElement(_PaymentOptions.PaymentOptions, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    paymethods: businessDetails === null || businessDetails === void 0 ? void 0 : (_businessDetails$busi5 = businessDetails.business) === null || _businessDetails$busi5 === void 0 ? void 0 : _businessDetails$busi5.paymethods,
    onPaymentChange: handlePaymethodChange,
    setErrorCash: setErrorCash
  })), !cartState.loading && cart && options.type === 1 && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.DriverTipContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DRIVER_TIP', 'Driver Tip')), /*#__PURE__*/_react.default.createElement(_DriverTips.DriverTips, {
    businessId: cart === null || cart === void 0 ? void 0 : cart.business_id,
    driverTipsOptions: _utils.DriverTipsOptions,
    useOrderContext: true
  })), !cartState.loading && cart && /*#__PURE__*/_react.default.createElement(_styles.CartContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_ORDER', 'Your Order')), /*#__PURE__*/_react.default.createElement(_Cart.Cart, {
    cart: cart,
    isProducts: (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.length) || 0
  })), !cartState.loading && cart && (cart === null || cart === void 0 ? void 0 : cart.status) !== 2 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPlaceOrderButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    disabled: !(cart === null || cart === void 0 ? void 0 : cart.valid) || !paymethodSelected || placing || errorCash,
    onClick: function onClick() {
      return handlerClickPlaceOrder();
    }
  }, placing ? t('PLACING', 'Placing...') : t('PLACE_ORDER', 'Place Order')))));
};

var Checkout = function Checkout(props) {
  var _cartState$cart, _cartState$error, _cartState$cart2;

  var query = props.query,
      cartUuid = props.cartUuid,
      handleOrderRedirect = props.handleOrderRedirect,
      handleCheckoutRedirect = props.handleCheckoutRedirect,
      handleSearchRedirect = props.handleSearchRedirect,
      handleCheckoutListRedirect = props.handleCheckoutListRedirect;

  var _useOrder3 = (0, _orderingComponents.useOrder)(),
      _useOrder4 = _slicedToArray(_useOrder3, 2),
      carts = _useOrder4[0].carts,
      confirmCart = _useOrder4[1].confirmCart;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useLanguage3 = (0, _orderingComponents.useLanguage)(),
      _useLanguage4 = _slicedToArray(_useLanguage3, 2),
      t = _useLanguage4[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 2),
      parsePrice = _useConfig2[1].parsePrice;

  var _useState3 = (0, _react.useState)({
    loading: false,
    error: null,
    cart: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      cartState = _useState4[0],
      setCartState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openUpselling = _useState6[0],
      setOpenUpselling = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      canOpenUpselling = _useState8[0],
      setCanOpenUpselling = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      currentCart = _useState10[0],
      setCurrentCart = _useState10[1];

  var cartsWithProducts = Object.values(carts).filter(function (cart) {
    return cart.products.length;
  });

  var handleOpenUpsellingPage = function handleOpenUpsellingPage(cart) {
    setCurrentCart(cart);
  };

  var handleUpsellingPage = function handleUpsellingPage() {
    setOpenUpselling(false);
    setCurrentCart('');
    setCanOpenUpselling(false);
    setOpenUpselling(false);
    handleCheckoutRedirect(currentCart.uuid);
  };

  (0, _react.useEffect)(function () {
    if (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) {
      setOpenUpselling(true);
    }
  }, [currentCart]);

  var getOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(cartId) {
      var _result$order, response, _yield$response$json, result, cart;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: true
              }));
              _context.next = 4;
              return fetch("".concat(ordering.root, "/carts/").concat(cartId), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              _yield$response$json = _context.sent;
              result = _yield$response$json.result;

              if (!(result.status === 1 && ((_result$order = result.order) === null || _result$order === void 0 ? void 0 : _result$order.uuid))) {
                _context.next = 14;
                break;
              }

              handleOrderRedirect(result.order.uuid);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false
              }));
              _context.next = 28;
              break;

            case 14:
              if (!(result.status === 2 && result.paymethod_data.gateway === 'stripe_redirect' && query.get('payment_intent'))) {
                _context.next = 26;
                break;
              }

              _context.prev = 15;
              _context.next = 18;
              return confirmCart(cartUuid);

            case 18:
              handleOrderRedirect(result.order.uuid);
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](15);
              console.log(_context.t0);

            case 24:
              _context.next = 28;
              break;

            case 26:
              cart = Array.isArray(result) ? null : result;
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                cart: cart,
                error: cart ? null : result
              }));

            case 28:
              _context.next = 33;
              break;

            case 30:
              _context.prev = 30;
              _context.t1 = _context["catch"](0);
              setCartState(_objectSpread(_objectSpread({}, cartState), {}, {
                loading: false,
                error: [_context.t1.toString()]
              }));

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 30], [15, 21]]);
    }));

    return function getOrder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (token && cartUuid) {
      getOrder(cartUuid);
    }
  }, [token, cartUuid]);

  var checkoutProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CheckoutUI,
    cartState: cartState,
    businessId: (_cartState$cart = cartState.cart) === null || _cartState$cart === void 0 ? void 0 : _cartState$cart.business_id
  });

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !cartUuid && carts && cartsWithProducts.length === 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CARTS', 'Sorry, You don\'t seem to have any carts.'),
    btnTitle: t('SEARCH_REDIRECT', 'Go to Businesses'),
    onClickButton: handleSearchRedirect
  }), !cartUuid && carts && cartsWithProducts.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.CartsList, null, cartsWithProducts.map(function (cart) {
    var _cart$business, _cart$business2;

    return /*#__PURE__*/_react.default.createElement(_styles.CartItem, {
      key: cart.uuid
    }, /*#__PURE__*/_react.default.createElement(_styles.CartItemWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.CartItemLogo, {
      bgimage: cart === null || cart === void 0 ? void 0 : (_cart$business = cart.business) === null || _cart$business === void 0 ? void 0 : _cart$business.logo
    })), /*#__PURE__*/_react.default.createElement(_styles.CartItemInfo, null, /*#__PURE__*/_react.default.createElement("h1", null, cart === null || cart === void 0 ? void 0 : (_cart$business2 = cart.business) === null || _cart$business2 === void 0 ? void 0 : _cart$business2.name), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(cart === null || cart === void 0 ? void 0 : cart.total)))), /*#__PURE__*/_react.default.createElement(_styles.CartItemActions, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleOpenUpsellingPage(cart);
      },
      disabled: (currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid) === (cart === null || cart === void 0 ? void 0 : cart.uuid) || openUpselling
    }, ((currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid) === (cart === null || cart === void 0 ? void 0 : cart.uuid) && canOpenUpselling) ^ (currentCart === null || currentCart === void 0 ? void 0 : currentCart.uuid) === (cart === null || cart === void 0 ? void 0 : cart.uuid) ? t('LOADING', 'Loading...') : t('PAY_CART', 'Pay order'))));
  })), cartUuid && cartState.error && ((_cartState$error = cartState.error) === null || _cartState$error === void 0 ? void 0 : _cartState$error.length) > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('ERROR_CART', 'Sorry, the selected cart was not found.'),
    btnTitle: t('CHECKOUT_REDIRECT', 'Go to Checkout list'),
    onClickButton: handleCheckoutListRedirect
  }), cartUuid && cartState.cart && ((_cartState$cart2 = cartState.cart) === null || _cartState$cart2 === void 0 ? void 0 : _cartState$cart2.status) !== 1 && /*#__PURE__*/_react.default.createElement(_orderingComponents.Checkout, checkoutProps), (currentCart === null || currentCart === void 0 ? void 0 : currentCart.products) ? /*#__PURE__*/_react.default.createElement(_UpsellingPage.UpsellingPage, {
    businessId: currentCart === null || currentCart === void 0 ? void 0 : currentCart.business_id,
    cartProducts: currentCart === null || currentCart === void 0 ? void 0 : currentCart.products,
    handleUpsellingPage: handleUpsellingPage,
    openUpselling: openUpselling,
    canOpenUpselling: canOpenUpselling,
    setCanOpenUpselling: setCanOpenUpselling
  }) : '');
};

exports.Checkout = Checkout;