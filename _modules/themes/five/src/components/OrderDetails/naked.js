"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderDetails = function OrderDetails(props) {
  var _props$order, _props$order$driver, _orderState$order, _orderState$order$dri, _orderState$order7, _orderState$order11;

  var orderId = props.orderId,
      hashKey = props.hashKey,
      UIComponent = props.UIComponent,
      userCustomerId = props.userCustomerId,
      driverAndBusinessId = props.driverAndBusinessId,
      sendCustomMessage = props.sendCustomMessage,
      isDisabledOrdersRoom = props.isDisabledOrdersRoom;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var accessToken = props.accessToken || token;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useToast = (0, _orderingComponents.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    order: null,
    businessData: {},
    driversGroupsData: [],
    loading: !props.order,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderState = _useState2[0],
      setOrderState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    status: null,
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      messageErrors = _useState4[0],
      setMessageErrors = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: true,
    error: null,
    messages: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      messages = _useState6[0],
      setMessages = _useState6[1];

  var socket = (0, _orderingComponents.useWebsocket)();

  var _useState7 = (0, _react.useState)(((_props$order = props.order) === null || _props$order === void 0 ? void 0 : (_props$order$driver = _props$order.driver) === null || _props$order$driver === void 0 ? void 0 : _props$order$driver.location) || ((_orderState$order = orderState.order) === null || _orderState$order === void 0 ? void 0 : (_orderState$order$dri = _orderState$order.driver) === null || _orderState$order$dri === void 0 ? void 0 : _orderState$order$dri.location) || null),
      _useState8 = _slicedToArray(_useState7, 2),
      driverLocation = _useState8[0],
      setDriverLocation = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      messagesReadList = _useState10[0],
      setMessagesReadList = _useState10[1];

  var propsToFetch = ['header', 'slug'];
  var requestsState = {};
  /**
   * Method to format a price number
   * @param {Number} price
   */

  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };
  /**
   * Method to Load message for first time
   */


  var loadMessages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _orderState$order2, _orderState$order3, url, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              url = userCustomerId || driverAndBusinessId ? "".concat(ordering.root, "/orders/").concat((_orderState$order2 = orderState.order) === null || _orderState$order2 === void 0 ? void 0 : _orderState$order2.id, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat((_orderState$order3 = orderState.order) === null || _orderState$order3 === void 0 ? void 0 : _orderState$order3.id, "/messages");
              _context.next = 5;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setMessages({
                  messages: result,
                  loading: false,
                  error: null
                });
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context.t0.Messages]
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function loadMessages() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to send a message
   * @param {string} spot
   */


  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(spot) {
      var _orderState$order4, _orderState$order5, _yield$fetch, status;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!sendCustomMessage) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", sendCustomMessage(spot));

            case 2:
              _context2.prev = 2;
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: true
              }));
              _context2.next = 6;
              return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order4 = orderState.order) === null || _orderState$order4 === void 0 ? void 0 : _orderState$order4.id, "/messages"), {
                method: 'post',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  can_see: '0,2,3',
                  comment: "I am on the parking number: ".concat(spot),
                  order_id: (_orderState$order5 = orderState.order) === null || _orderState$order5 === void 0 ? void 0 : _orderState$order5.id,
                  type: 2
                })
              });

            case 6:
              _yield$fetch = _context2.sent;
              status = _yield$fetch.status;
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: false,
                status: status
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](2);
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 11]]);
    }));

    return function sendMessage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to update differents orders status
  */


  var handleChangeOrderStatus = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(status) {
      var isAcceptOrReject,
          bodyToSend,
          _yield$ordering$setAc,
          _yield$ordering$setAc2,
          result,
          error,
          _args3 = arguments;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              isAcceptOrReject = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
              _context3.prev = 1;

              if (Object.keys(isAcceptOrReject).length > 0) {
                bodyToSend = isAcceptOrReject;
              } else {
                bodyToSend = {
                  status: status
                };
              }

              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: true
              }));
              _context3.next = 6;
              return ordering.setAccessToken(token).orders(orderId).save(bodyToSend);

            case 6:
              _yield$ordering$setAc = _context3.sent;
              _yield$ordering$setAc2 = _yield$ordering$setAc.content;
              result = _yield$ordering$setAc2.result;
              error = _yield$ordering$setAc2.error;

              if (!error) {
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  order: result,
                  loading: false
                }));
              }

              if (error) {
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  error: result[0],
                  loading: false
                }));
                showToast(_orderingComponents.ToastType.Error, t(result[0], result[0]));
              }

              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](1);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: _context3.t0.message
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 14]]);
    }));

    return function handleChangeOrderStatus(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
     * Method to assign a driver for order
  */


  var handleAssignDriver = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
      var bodyToSend, _yield$ordering$setAc3, _yield$ordering$setAc4, error, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              bodyToSend = {
                driver_id: e
              };
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: true
              }));
              _context4.next = 5;
              return ordering.setAccessToken(token).orders(orderId).save(bodyToSend);

            case 5:
              _yield$ordering$setAc3 = _context4.sent;
              _yield$ordering$setAc4 = _yield$ordering$setAc3.content;
              error = _yield$ordering$setAc4.error;
              result = _yield$ordering$setAc4.result;

              if (!error) {
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  order: result,
                  loading: false
                }));
              }

              if (error) {
                setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                  error: result[0],
                  loading: false
                }));
                showToast(_orderingComponents.ToastType.Error, t(result[0], result[0]));
              }

              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: _context4.t0.message
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 13]]);
    }));

    return function handleAssignDriver(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * handler send message with spot info
   * @param {number} param0
   */


  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref5) {
    var spot = _ref5.spot;
    sendMessage(spot);
  };
  /**
   * Method to get order from API
   */


  var getOrder = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var source, options, _yield$ordering$setAc5, _yield$ordering$setAc6, error, result, order, err, businessData, driversGroupsData, _yield$ordering$setAc7, content, _yield$ordering$setAc8, data, _orderState$error;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              source = {};
              requestsState.order = source;
              requestsState.business = source;
              options = {};

              if (hashKey) {
                options.headers = {
                  'X-uuid-access-X': hashKey
                };
              }

              if (userCustomerId || driverAndBusinessId) {
                options.query = {
                  mode: 'dashboard'
                };
              }

              _context5.prev = 6;
              _context5.next = 9;
              return ordering.setAccessToken(token).orders(orderId).get(_objectSpread(_objectSpread({}, options), {}, {
                cancelToken: source
              }));

            case 9:
              _yield$ordering$setAc5 = _context5.sent;
              _yield$ordering$setAc6 = _yield$ordering$setAc5.content;
              error = _yield$ordering$setAc6.error;
              result = _yield$ordering$setAc6.result;
              order = error ? null : result;
              err = error ? result : null;
              businessData = null;
              driversGroupsData = {};
              _context5.prev = 17;
              _context5.next = 20;
              return ordering.setAccessToken(token).businesses(order.business_id).select(propsToFetch).get({
                cancelToken: source
              });

            case 20:
              _yield$ordering$setAc7 = _context5.sent;
              content = _yield$ordering$setAc7.content;
              businessData = content.result;
              content.error && err.push(content.result[0]);
              _context5.next = 29;
              break;

            case 26:
              _context5.prev = 26;
              _context5.t0 = _context5["catch"](17);
              err.push(_context5.t0.message);

            case 29:
              if (!(user.level === 2 && order.delivery_type === 1)) {
                _context5.next = 46;
                break;
              }

              console.log(user);
              console.log(order);
              _context5.prev = 32;
              _context5.next = 35;
              return ordering.setAccessToken(token).controls(orderId).get();

            case 35:
              _yield$ordering$setAc8 = _context5.sent;
              data = _yield$ordering$setAc8.response.data;

              if (!data.error) {
                _context5.next = 40;
                break;
              }

              showToast(_orderingComponents.ToastType.Error, t("".concat(data.result[0]), "".concat(data.result[0])));
              return _context5.abrupt("return");

            case 40:
              driversGroupsData = data.result.drivers;
              _context5.next = 46;
              break;

            case 43:
              _context5.prev = 43;
              _context5.t1 = _context5["catch"](32);
              err.push(_context5.t1.message);

            case 46:
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                order: order,
                businessData: businessData,
                driversGroupsData: driversGroupsData,
                error: err
              }));
              _context5.next = 52;
              break;

            case 49:
              _context5.prev = 49;
              _context5.t2 = _context5["catch"](6);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: _context5.t2.message ? (_orderState$error = orderState.error) === null || _orderState$error === void 0 ? void 0 : _orderState$error.push(_context5.t2 === null || _context5.t2 === void 0 ? void 0 : _context5.t2.message) : ['ERROR']
              }));

            case 52:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[6, 49], [17, 26], [32, 43]]);
    }));

    return function getOrder() {
      return _ref6.apply(this, arguments);
    };
  }();

  var readMessages = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var _messages$messages, _messages$messages2;

      var messageId, _orderState$order6, response, _yield$response$json2, result;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              messageId = messages === null || messages === void 0 ? void 0 : (_messages$messages = messages.messages[(messages === null || messages === void 0 ? void 0 : (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
              _context6.prev = 1;
              _context6.next = 4;
              return fetch("".concat(ordering.root, "/orders/").concat((_orderState$order6 = orderState.order) === null || _orderState$order6 === void 0 ? void 0 : _orderState$order6.id, "/messages/").concat(messageId, "/read"), {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              });

            case 4:
              response = _context6.sent;
              _context6.next = 7;
              return response.json();

            case 7:
              _yield$response$json2 = _context6.sent;
              result = _yield$response$json2.result;
              setMessagesReadList(result);
              _context6.next = 15;
              break;

            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](1);
              console.log(_context6.t0.message);

            case 15:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 12]]);
    }));

    return function readMessages() {
      return _ref7.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    !orderState.loading && loadMessages();
  }, [orderId, orderState === null || orderState === void 0 ? void 0 : (_orderState$order7 = orderState.order) === null || _orderState$order7 === void 0 ? void 0 : _orderState$order7.status, orderState.loading]);
  (0, _react.useEffect)(function () {
    if (props.order) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: props.order
      }));
    } else {
      getOrder();
    }

    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }

      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _orderState$order9;

    if (orderState.loading || loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      var _orderState$order8;

      if ((order === null || order === void 0 ? void 0 : order.id) !== ((_orderState$order8 = orderState.order) === null || _orderState$order8 === void 0 ? void 0 : _orderState$order8.id)) return;
      showToast(_orderingComponents.ToastType.Info, t('UPDATING_ORDER', 'Updating order...'));
      delete order.total;
      delete order.subtotal;
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
      loadMessages();
    };

    var handleTrackingDriver = function handleTrackingDriver(_ref8) {
      var location = _ref8.location;
      var newLocation = location !== null && location !== void 0 ? location : {
        lat: -37.9722342,
        lng: 144.7729561
      };
      setDriverLocation(newLocation);
    };

    if (!isDisabledOrdersRoom) socket.join("orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id)));
    socket.join("drivers_".concat((_orderState$order9 = orderState.order) === null || _orderState$order9 === void 0 ? void 0 : _orderState$order9.driver_id));
    socket.on('tracking_driver', handleTrackingDriver);
    socket.on('update_order', handleUpdateOrder);
    return function () {
      var _orderState$order10;

      if (!isDisabledOrdersRoom) socket.leave("orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id)));
      socket.leave("drivers_".concat((_orderState$order10 = orderState.order) === null || _orderState$order10 === void 0 ? void 0 : _orderState$order10.driver_id));
      socket.off('update_order', handleUpdateOrder);
      socket.off('tracking_driver', handleTrackingDriver);
    };
  }, [orderState.order, socket, loading, userCustomerId]);
  (0, _react.useEffect)(function () {
    if (messages.loading) return;

    var handleNewMessage = function handleNewMessage(message) {
      var found = messages.messages.find(function (_message) {
        return _message.id === message.id;
      });

      if (!found) {
        setMessages(_objectSpread(_objectSpread({}, messages), {}, {
          messages: [].concat(_toConsumableArray(messages.messages), [message])
        }));
      }
    };

    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, (_orderState$order11 = orderState.order) === null || _orderState$order11 === void 0 ? void 0 : _orderState$order11.status, userCustomerId]);
  (0, _react.useEffect)(function () {
    socket.join("messages_orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id)));
    return function () {
      socket.leave("messages_orders_".concat(userCustomerId || (user === null || user === void 0 ? void 0 : user.id)));
    };
  }, [socket, userCustomerId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    driverLocation: driverLocation,
    messageErrors: messageErrors,
    formatPrice: formatPrice,
    handleAssignDriver: handleAssignDriver,
    handlerSubmit: handlerSubmitSpotNumber,
    handleChangeOrderStatus: handleChangeOrderStatus,
    messages: messages,
    setMessages: setMessages,
    readMessages: readMessages,
    messagesReadList: messagesReadList
  })));
};

exports.OrderDetails = OrderDetails;
OrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,

  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};