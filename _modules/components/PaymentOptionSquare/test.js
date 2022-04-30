"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionSquare = void 0;

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PaymentOptionSquare = function PaymentOptionSquare(props) {
  var UIComponent = props.UIComponent,
      cartTotal = props.cartTotal,
      onPlaceOrderClick = props.onPlaceOrderClick,
      body = props.body,
      data = props.data,
      setCreateOrder = props.setCreateOrder;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      user = _useSession2[0].user;

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      _useOrder2$ = _useOrder2[1],
      confirmCart = _useOrder2$.confirmCart,
      placeCart = _useOrder2$.placeCart;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSquareReady = _useState2[0],
      setIsSquareReady = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      methodSelected = _useState4[0],
      setMethodSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isLoadingMethod = _useState8[0],
      setIsLoadingMethod = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isLoadingPlace = _useState10[0],
      setIsLoadingPlace = _useState10[1];

  var _useState11 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      alertState = _useState12[0],
      setAlertState = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      payments = _useState14[0],
      setPayments = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = _slicedToArray(_useState15, 2),
      paymentRequest = _useState16[0],
      setPaymentRequest = _useState16[1];

  var _useState17 = (0, _react.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      digitalWalletPaymethod = _useState18[0],
      setDigitalWalletPaymethod = _useState18[1];

  var paymentMethods = [{
    name: t('CARD_PAYMENTS', 'Card payments'),
    value: 'card_payments'
  }, {
    name: t('ACH_BANK_TRANSFER', 'ACH Back transfer'),
    value: 'ach_bank_transfer'
  }, // { name: t('DIGITAL_WALLETS', 'Digital Wallets'), value: 'digital_wallets' },
  {
    name: t('GIFT_CARDS', 'Gift Cards'),
    value: 'gift_cards'
  }];
  var params = {
    paymethod_id: body.paymethod_id,
    amount: body.amount,
    delivery_zone_id: body.delivery_zone_id
  };
  (0, _react.useEffect)(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://sandbox.web.squarecdn.com/v1/square.js';
    script.async = true;

    script.onload = function () {
      setIsLoading(false);
      setIsSquareReady(true);
      initPaymentObject();
    };

    script.onerror = function () {
      setIsLoading(false);
      throw new Error('Square could not be loaded.');
    };

    document.body.appendChild(script);
    return function () {
      script.onload = null;
      var cardButton = document.getElementById('card-button');
      cardButton && cardButton.removeEventListener('click');
      var achButton = document.getElementById('ach-button');
      achButton && achButton.removeEventListener('click');
      var giftCardButton = document.getElementById('gift-card-button');
      giftCardButton && giftCardButton.removeEventListener('click');
    };
  }, []);

  var initPaymentObject = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var payments;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payments = window.Square.payments(data === null || data === void 0 ? void 0 : data.application_id, data === null || data === void 0 ? void 0 : data.location_id);
              setPayments(payments);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function initPaymentObject() {
      return _ref.apply(this, arguments);
    };
  }();

  var initCardPayments = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var card, eventHandler, cardButton;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsLoadingMethod(true);
              _context3.next = 3;
              return payments.card();

            case 3:
              card = _context3.sent;
              _context3.next = 6;
              return card.attach('#card-container');

            case 6:
              setIsLoadingMethod(false);

              eventHandler = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {
                  var result, response;
                  return _regenerator.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          e.preventDefault();
                          setIsLoadingPlace(true);
                          setCreateOrder && setCreateOrder(true);
                          _context2.prev = 3;
                          _context2.next = 6;
                          return card.tokenize();

                        case 6:
                          result = _context2.sent;

                          if (!(result.status === 'OK')) {
                            _context2.next = 16;
                            break;
                          }

                          params.paymethod_data = {
                            token: result.token
                          };
                          _context2.next = 11;
                          return placeCart(body.cartUuid, params);

                        case 11:
                          response = _context2.sent;

                          if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                            _context2.next = 15;
                            break;
                          }

                          onPlaceOrderClick(null, null, response === null || response === void 0 ? void 0 : response.result);
                          return _context2.abrupt("return");

                        case 15:
                          if (response !== null && response !== void 0 && response.result) {
                            setAlertState({
                              open: true,
                              content: response === null || response === void 0 ? void 0 : response.result
                            });
                          }

                        case 16:
                          if (result.status === 'INVALID') {
                            setAlertState({
                              open: true,
                              content: result.errors.map(function () {
                                return "ValidationError: ".concat(result.errors[0].field, ": ").concat(result.errors[0].message);
                              })
                            });
                          }

                          _context2.next = 22;
                          break;

                        case 19:
                          _context2.prev = 19;
                          _context2.t0 = _context2["catch"](3);
                          setAlertState({
                            open: true,
                            content: _context2.t0.message
                          });

                        case 22:
                          setCreateOrder && setCreateOrder(false);
                          setIsLoadingPlace(false);

                        case 24:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, null, [[3, 19]]);
                }));

                return function eventHandler(_x) {
                  return _ref3.apply(this, arguments);
                };
              }();

              cardButton = document.getElementById('card-button');
              cardButton.addEventListener('click', eventHandler);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function initCardPayments() {
      return _ref2.apply(this, arguments);
    };
  }();

  var initACHBankTransfer = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var ach, eventHandler, achButton;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setIsLoadingMethod(true);
              _context5.next = 3;
              return payments.ach();

            case 3:
              ach = _context5.sent;
              setIsLoadingMethod(false);

              eventHandler = /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
                  var result, response, resultConfirm;
                  return _regenerator.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          e.preventDefault();
                          _context4.prev = 1;
                          _context4.next = 4;
                          return ach.tokenize({
                            accountHolderName: user === null || user === void 0 ? void 0 : user.name
                          });

                        case 4:
                          result = _context4.sent;

                          if (!(result.status === 'OK')) {
                            _context4.next = 22;
                            break;
                          }

                          setIsLoadingPlace(true);
                          setCreateOrder && setCreateOrder(true);
                          params.paymethod_data = {
                            token: result.token
                          };
                          _context4.next = 11;
                          return placeCart(body.cartUuid, params);

                        case 11:
                          response = _context4.sent;

                          if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                            _context4.next = 21;
                            break;
                          }

                          _context4.next = 15;
                          return confirmCart(body.cartUuid);

                        case 15:
                          resultConfirm = _context4.sent;

                          if (!(!(resultConfirm !== null && resultConfirm !== void 0 && resultConfirm.error) && resultConfirm !== null && resultConfirm !== void 0 && resultConfirm.result)) {
                            _context4.next = 19;
                            break;
                          }

                          onPlaceOrderClick(null, null, resultConfirm === null || resultConfirm === void 0 ? void 0 : resultConfirm.result);
                          return _context4.abrupt("return");

                        case 19:
                          setAlertState({
                            open: true,
                            content: resultConfirm
                          });
                          return _context4.abrupt("return");

                        case 21:
                          if (response !== null && response !== void 0 && response.result) {
                            setAlertState({
                              open: true,
                              content: response === null || response === void 0 ? void 0 : response.result
                            });
                          }

                        case 22:
                          _context4.next = 27;
                          break;

                        case 24:
                          _context4.prev = 24;
                          _context4.t0 = _context4["catch"](1);
                          setAlertState({
                            open: true,
                            content: _context4.t0.message
                          });

                        case 27:
                          setIsLoadingPlace(false);
                          setCreateOrder && setCreateOrder(false);

                        case 29:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4, null, [[1, 24]]);
                }));

                return function eventHandler(_x2) {
                  return _ref5.apply(this, arguments);
                };
              }();

              achButton = document.getElementById('ach-button');
              achButton.addEventListener('click', eventHandler);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function initACHBankTransfer() {
      return _ref4.apply(this, arguments);
    };
  }();

  var initGiftCard = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
      var giftCard, eventHandler, giftCardButton;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              setIsLoadingMethod(true);
              _context7.next = 3;
              return payments.giftCard();

            case 3:
              giftCard = _context7.sent;
              _context7.next = 6;
              return giftCard.attach('#gift-card-container');

            case 6:
              setIsLoadingMethod(false);

              eventHandler = /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
                  var result, response;
                  return _regenerator.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          e.preventDefault();
                          setIsLoadingPlace(true);
                          setCreateOrder && setCreateOrder(true);
                          _context6.prev = 3;
                          _context6.next = 6;
                          return giftCard.tokenize();

                        case 6:
                          result = _context6.sent;

                          if (!(result.status === 'OK')) {
                            _context6.next = 16;
                            break;
                          }

                          params.paymethod_data = {
                            token: result.token
                          };
                          _context6.next = 11;
                          return placeCart(body.cartUuid, params);

                        case 11:
                          response = _context6.sent;

                          if (!(!(response !== null && response !== void 0 && response.error) && response !== null && response !== void 0 && response.result)) {
                            _context6.next = 15;
                            break;
                          }

                          onPlaceOrderClick(null, null, response === null || response === void 0 ? void 0 : response.result);
                          return _context6.abrupt("return");

                        case 15:
                          if (response !== null && response !== void 0 && response.result) {
                            setAlertState({
                              open: true,
                              content: response === null || response === void 0 ? void 0 : response.result
                            });
                          }

                        case 16:
                          _context6.next = 21;
                          break;

                        case 18:
                          _context6.prev = 18;
                          _context6.t0 = _context6["catch"](3);
                          setAlertState({
                            open: true,
                            content: _context6.t0.message
                          });

                        case 21:
                          setIsLoadingPlace(false);
                          setCreateOrder && setCreateOrder(false);

                        case 23:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, null, [[3, 18]]);
                }));

                return function eventHandler(_x3) {
                  return _ref7.apply(this, arguments);
                };
              }();

              giftCardButton = document.getElementById('gift-card-button');
              giftCardButton.addEventListener('click', eventHandler);

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function initGiftCard() {
      return _ref6.apply(this, arguments);
    };
  }();

  var initDigitalWallets = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
      var paymentRequest;
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              // setIsLoadingMethod(true)
              paymentRequest = payments.paymentRequest({
                countryCode: 'US',
                currencyCode: 'USD',
                total: {
                  amount: cartTotal.toString(),
                  label: t('TOTAL', 'Total')
                }
              });
              console.log(paymentRequest);
              setPaymentRequest(paymentRequest);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    return function initDigitalWallets() {
      return _ref8.apply(this, arguments);
    };
  }();

  var applePay = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
      var applePay, eventHandler, applePayButtonTarget;
      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return payments.applePay(paymentRequest);

            case 2:
              applePay = _context10.sent;
              console.log(applePay);
              setIsLoadingMethod(false);

              eventHandler = /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9(e) {
                  var result, _yield$placeCart, error, resultApi;

                  return _regenerator.default.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          e.preventDefault();
                          _context9.prev = 1;
                          _context9.next = 4;
                          return applePay.tokenize();

                        case 4:
                          result = _context9.sent;

                          if (!(result.status === 'OK')) {
                            _context9.next = 14;
                            break;
                          }

                          params.paymethod_data = {
                            token: result.token
                          };
                          _context9.next = 9;
                          return placeCart(body.cartUuid, params);

                        case 9:
                          _yield$placeCart = _context9.sent;
                          error = _yield$placeCart.error;
                          resultApi = _yield$placeCart.result;
                          console.log(resultApi);

                          if (!error) {
                            onPlaceOrderClick(null, null, resultApi);
                          }

                        case 14:
                          _context9.next = 19;
                          break;

                        case 16:
                          _context9.prev = 16;
                          _context9.t0 = _context9["catch"](1);
                          setAlertState({
                            open: true,
                            content: _context9.t0.message
                          });

                        case 19:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9, null, [[1, 16]]);
                }));

                return function eventHandler(_x4) {
                  return _ref10.apply(this, arguments);
                };
              }();

              applePayButtonTarget = document.getElementById('apple-pay-button');
              applePayButtonTarget.addEventListener('click', eventHandler);

            case 8:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    return function applePay() {
      return _ref9.apply(this, arguments);
    };
  }();

  var googlePay = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
      var googlePay, eventHandler, googlePayButtonTarget;
      return _regenerator.default.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return payments.googlePay(paymentRequest);

            case 2:
              googlePay = _context12.sent;
              console.log(googlePay);
              _context12.next = 6;
              return googlePay.attach('#google-pay-button');

            case 6:
              setIsLoadingMethod(false);

              eventHandler = /*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
                  var result, _yield$placeCart2, error, resultApi;

                  return _regenerator.default.wrap(function _callee11$(_context11) {
                    while (1) {
                      switch (_context11.prev = _context11.next) {
                        case 0:
                          e.preventDefault();
                          _context11.prev = 1;
                          _context11.next = 4;
                          return googlePay.tokenize();

                        case 4:
                          result = _context11.sent;

                          if (!(result.status === 'OK')) {
                            _context11.next = 14;
                            break;
                          }

                          params.paymethod_data = {
                            token: result.token
                          };
                          _context11.next = 9;
                          return placeCart(body.cartUuid, params);

                        case 9:
                          _yield$placeCart2 = _context11.sent;
                          error = _yield$placeCart2.error;
                          resultApi = _yield$placeCart2.result;
                          console.log(resultApi);

                          if (!error) {
                            onPlaceOrderClick(null, null, resultApi);
                          }

                        case 14:
                          _context11.next = 19;
                          break;

                        case 16:
                          _context11.prev = 16;
                          _context11.t0 = _context11["catch"](1);
                          setAlertState({
                            open: true,
                            content: _context11.t0.message
                          });

                        case 19:
                        case "end":
                          return _context11.stop();
                      }
                    }
                  }, _callee11, null, [[1, 16]]);
                }));

                return function eventHandler(_x5) {
                  return _ref12.apply(this, arguments);
                };
              }();

              googlePayButtonTarget = document.getElementById('google-pay-button');
              googlePayButtonTarget.addEventListener('click', eventHandler);

            case 10:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    return function googlePay() {
      return _ref11.apply(this, arguments);
    };
  }();

  var handleChangeMethodSelected = function handleChangeMethodSelected(method) {
    setDigitalWalletPaymethod(null);
    setMethodSelected(method);
    method === 'card_payments' ? initCardPayments() : method === 'ach_bank_transfer' ? initACHBankTransfer() : method === 'digital_wallets' ? initDigitalWallets() : initGiftCard();
  };

  (0, _react.useEffect)(function () {
    if (methodSelected !== 'digital_wallets') return;
    if (digitalWalletPaymethod === 'apple_pay') applePay();
    if (digitalWalletPaymethod === 'google_pay') googlePay();
  }, [digitalWalletPaymethod]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isSquareReady: isSquareReady,
    isLoading: isLoading,
    isLoadingMethod: isLoadingMethod,
    paymentMethods: paymentMethods,
    methodSelected: methodSelected,
    alertState: alertState,
    digitalWalletPaymethod: digitalWalletPaymethod,
    initCardPayments: initCardPayments,
    setDigitalWalletPaymethod: setDigitalWalletPaymethod,
    handleChangeMethodSelected: handleChangeMethodSelected,
    setAlertState: setAlertState,
    applePay: applePay,
    isLoadingPlace: isLoadingPlace
  })));
};

exports.PaymentOptionSquare = PaymentOptionSquare;
PaymentOptionSquare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
PaymentOptionSquare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};