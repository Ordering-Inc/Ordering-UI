"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _orderingComponents = require("ordering-components");

var _dayjs = _interopRequireDefault(require("dayjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var OrderList = function OrderList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      orders = props.orders,
      orderIds = props.orderIds,
      orderStatus = props.orderStatus,
      orderBy = props.orderBy,
      orderDirection = props.orderDirection,
      useDefualtSessionManager = props.useDefualtSessionManager,
      paginationSettings = props.paginationSettings,
      asDashboard = props.asDashboard,
      customArray = props.customArray,
      userCustomerId = props.userCustomerId,
      activeOrders = props.activeOrders,
      isDynamicSort = props.isDynamicSort,
      businessId = props.businessId,
      franchiseId = props.franchiseId;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      reorder = _useOrder2[1].reorder;

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var _useToast = (0, _orderingComponents.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var socket = (0, _orderingComponents.useWebsocket)();

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    loading: !orders,
    error: null,
    orders: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderList = _useState2[0],
      setOrderList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    total: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null,
    messages: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      messages = _useState6[0],
      setMessages = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      updateOtherStatus = _useState8[0],
      setUpdateOtherStatus = _useState8[1];

  var _useState9 = (0, _react.useState)({
    param: orderBy,
    direction: orderDirection
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      sortBy = _useState10[0],
      setSortBy = _useState10[1];

  var _useState11 = (0, _react.useState)({
    loading: false,
    result: [],
    error: null
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      reorderState = _useState12[0],
      setReorderState = _useState12[1];

  var profileMessage = props.profileMessages;
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};

  var handleReorder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(orderId) {
      var _yield$reorder, error, result, _choosedOrder$busines, _choosedOrder$origina, _businessData$content, _businessData$content2, choosedOrder, _businessId, _businessData, _businessSlug;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (orderId) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.prev = 2;
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: true
              }));
              _context.next = 6;
              return reorder(orderId);

            case 6:
              _yield$reorder = _context.sent;
              error = _yield$reorder.error;
              result = _yield$reorder.result;

              if (error) {
                _context.next = 13;
                break;
              }

              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                result: _objectSpread(_objectSpread({}, result), {}, {
                  orderId: orderId
                })
              }));
              _context.next = 22;
              break;

            case 13:
              choosedOrder = orderList.orders.find(function (_order) {
                return (_order === null || _order === void 0 ? void 0 : _order.id) === orderId;
              });
              _businessId = (_choosedOrder$busines = choosedOrder === null || choosedOrder === void 0 ? void 0 : choosedOrder.business_id) !== null && _choosedOrder$busines !== void 0 ? _choosedOrder$busines : choosedOrder === null || choosedOrder === void 0 ? void 0 : (_choosedOrder$origina = choosedOrder.original) === null || _choosedOrder$origina === void 0 ? void 0 : _choosedOrder$origina.business_id;
              _context.next = 17;
              return ordering.businesses(_businessId).select(['slug']).get();

            case 17:
              _businessData = _context.sent;
              _context.next = 20;
              return _businessData === null || _businessData === void 0 ? void 0 : (_businessData$content = _businessData.content) === null || _businessData$content === void 0 ? void 0 : (_businessData$content2 = _businessData$content.result) === null || _businessData$content2 === void 0 ? void 0 : _businessData$content2.slug;

            case 20:
              _businessSlug = _context.sent;
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: _objectSpread(_objectSpread({}, result), {}, {
                  orderId: orderId,
                  business_id: _businessId,
                  business: {
                    slug: _businessSlug
                  }
                })
              }));

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t0 = _context["catch"](2);
              setReorderState(_objectSpread(_objectSpread({}, reorderState), {}, {
                loading: false,
                error: true,
                result: [_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message]
              }));

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 24]]);
    }));

    return function handleReorder(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(page) {
      var otherStatus,
          pageSize,
          options,
          searchByStatus,
          source,
          functionFetch,
          _args2 = arguments;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              otherStatus = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
              pageSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : paginationSettings.pageSize;
              options = {
                query: {
                  orderBy: "".concat(sortBy.direction === 'desc' ? '-' : '').concat(sortBy.param),
                  page: page,
                  page_size: pageSize
                }
              };

              if (orderIds || orderStatus) {
                options.query.where = [];

                if (orderIds) {
                  options.query.where.push({
                    attribute: 'id',
                    value: orderIds
                  });
                }

                if (orderStatus) {
                  searchByStatus = (otherStatus === null || otherStatus === void 0 ? void 0 : otherStatus.length) > 0 ? otherStatus : orderStatus;
                  options.query.where.push({
                    attribute: 'status',
                    value: searchByStatus
                  });
                }
              }

              if (userCustomerId) {
                options.query.where.push({
                  attribute: 'customer_id',
                  value: parseInt(userCustomerId, 10)
                });
              }

              if (businessId) {
                options.query.where.push({
                  attribute: 'business_id',
                  value: parseInt(businessId, 10)
                });
              }

              if (franchiseId) {
                options.query.where.push({
                  attribute: 'ref_business',
                  conditions: [{
                    attribute: 'franchise_id',
                    value: parseInt(franchiseId, 10)
                  }]
                });
              }

              source = {};
              requestsState.orders = source;
              options.cancelToken = source;
              functionFetch = asDashboard ? ordering.setAccessToken(accessToken).orders().asDashboard() : ordering.setAccessToken(accessToken).orders();
              _context2.next = 13;
              return functionFetch.get(options);

            case 13:
              return _context2.abrupt("return", _context2.sent);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getOrders(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(isNextPage, searchByOtherStatus) {
      var keepOrders,
          getFirstOrder,
          pageSize,
          nextPage,
          response,
          _args3 = arguments;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              keepOrders = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : false;
              getFirstOrder = _args3.length > 3 ? _args3[3] : undefined;

              if (!((pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) === (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== null && !getFirstOrder)) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return");

            case 4:
              pageSize = keepOrders ? paginationSettings.pageSize * pagination.currentPage : paginationSettings.pageSize;

              if (session.token) {
                _context3.next = 8;
                break;
              }

              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: false
              }));
              return _context3.abrupt("return");

            case 8:
              _context3.prev = 8;
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              nextPage = !isNextPage ? pagination.currentPage + 1 : 1;
              _context3.next = 13;
              return getOrders(getFirstOrder ? 0 : nextPage, searchByOtherStatus, pageSize);

            case 13:
              response = _context3.sent;

              if (searchByOtherStatus) {
                setOrderList({
                  loading: false,
                  orders: response.content.error ? [] : [].concat(_toConsumableArray(response.content.result), _toConsumableArray(orderList.orders)),
                  error: response.content.error ? response.content.result : null
                });
              } else {
                setOrderList({
                  loading: false,
                  orders: response.content.error ? [] : response.content.result,
                  error: response.content.error ? response.content.result : null
                });
              }

              if (!response.content.error) {
                setPagination({
                  currentPage: keepOrders ? pagination.currentPage : response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: keepOrders ? pagination.totalPages : response.content.pagination.total_pages,
                  total: keepOrders ? pagination.total : response.content.pagination.total,
                  from: keepOrders ? 1 : response.content.pagination.from,
                  to: keepOrders ? pagination.to : response.content.pagination.to
                });
              }

              _context3.next = 21;
              break;

            case 18:
              _context3.prev = 18;
              _context3.t0 = _context3["catch"](8);

              if (_context3.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context3.t0.message]
                }));
              }

            case 21:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[8, 18]]);
    }));

    return function loadOrders(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleUpdateOrderList = function handleUpdateOrderList(orderId, changes) {
    var updatedOrders = orderList === null || orderList === void 0 ? void 0 : orderList.orders.map(function (order) {
      if ((order === null || order === void 0 ? void 0 : order.id) === orderId) {
        return _objectSpread(_objectSpread({}, order), changes);
      }

      return order;
    });
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: updatedOrders
    }));
  };

  var loadMessages = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(orderId) {
      var url, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
              _context4.next = 5;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context4.sent;
              _context4.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context4.sent;
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

              _context4.next = 17;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context4.t0.Messages]
              }));

            case 17:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 14]]);
    }));

    return function loadMessages(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (orders || customArray) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: (orders === null || orders === void 0 ? void 0 : orders.lenght) > 0 ? orders : customArray || [],
        loading: false
      }));
    } else {
      loadOrders();
    }

    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _session$user2, _session$user3;

    if (orderList.loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        loading: true
      }));
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      var orders = [];
      showToast(_orderingComponents.ToastType.Info, t('SPECIFIC_ORDER_UPDATED', 'Your order number _NUMBER_ has updated').replace('_NUMBER_', order.id));

      if (found) {
        orders = orderList.orders.filter(function (_order) {
          var _order$driver, _order$driver2, _session$user;

          if (_order.id === order.id && (_order === null || _order === void 0 ? void 0 : (_order$driver = _order.driver) === null || _order$driver === void 0 ? void 0 : _order$driver.id) !== (order === null || order === void 0 ? void 0 : (_order$driver2 = order.driver) === null || _order$driver2 === void 0 ? void 0 : _order$driver2.id) && (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.level) === 4) {
            return false;
          }

          if (_order.id === order.id) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
          }

          var valid = orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status)) || updateOtherStatus.length === 0 || updateOtherStatus.includes(parseInt(_order.status));

          if (!valid) {
            pagination.total--;
            setPagination(_objectSpread({}, pagination));
          }

          return valid;
        });
      } else {
        orders = [order].concat(_toConsumableArray(orderList.orders));
        pagination.total++;
        setPagination(_objectSpread({}, pagination));
      }

      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders,
        loading: false
      }));
    };

    var handleAddNewOrder = function handleAddNewOrder(order) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        loading: true
      }));
      showToast(_orderingComponents.ToastType.Info, t('SPECIFIC_ORDER_ORDERED', 'Order _NUMBER_ has been ordered').replace('_NUMBER_', order.id));
      var newOrder = [order].concat(_toConsumableArray(orderList.orders));
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: newOrder,
        loading: false
      }));
    };

    socket.on('orders_register', handleAddNewOrder);
    socket.on('update_order', handleUpdateOrder);
    var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 ? void 0 : (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user3 = session.user) === null || _session$user3 === void 0 ? void 0 : _session$user3.id);
    socket.join(ordersRoom);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleAddNewOrder);
    };
  }, [orderList.orders, pagination, socket, session]);
  (0, _react.useEffect)(function () {
    var _session$user6, _session$user7;

    if (!session.user) return;
    socket.on('disconnect', function (reason) {
      var _session$user4, _session$user5;

      var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 ? void 0 : (_session$user4 = session.user) === null || _session$user4 === void 0 ? void 0 : _session$user4.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user5 = session.user) === null || _session$user5 === void 0 ? void 0 : _session$user5.id);
      socket.join(ordersRoom);
    });
    var ordersRoom = !props.isAsCustomer && (session === null || session === void 0 ? void 0 : (_session$user6 = session.user) === null || _session$user6 === void 0 ? void 0 : _session$user6.level) === 0 ? 'orders' : "orders_".concat(session === null || session === void 0 ? void 0 : (_session$user7 = session.user) === null || _session$user7 === void 0 ? void 0 : _session$user7.id);
    socket.join(ordersRoom);
    return function () {
      socket.leave(ordersRoom);
    };
  }, [socket, session, userCustomerId]);

  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(searchByOtherStatus) {
      var response;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context5.prev = 1;
              _context5.next = 4;
              return getOrders(pagination.currentPage + 1, searchByOtherStatus);

            case 4:
              response = _context5.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);

              if (_context5.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context5.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 9]]);
    }));

    return function loadMoreOrders(_x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  var goToPage = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6(page) {
      var response;
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context6.prev = 1;
              _context6.next = 4;
              return getOrders(page);

            case 4:
              response = _context6.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](1);

              if (_context6.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context6.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[1, 9]]);
    }));

    return function goToPage(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var sortOrders = function sortOrders(orders) {
    var sortBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'desc';
    var ordersSorted = orders.sort(function (a, b) {
      if (sortBy === 'desc') {
        return b.id - a.id;
      }

      return a.id - b.id;
    });
    return ordersSorted;
  };

  (0, _react.useEffect)(function () {
    if (profileMessage) return;

    if (!orderList.loading && orderBy !== 'last_direct_message_at') {
      var ordersSorted = orderList.orders.sort(function (a, b) {
        if (activeOrders) {
          return (0, _dayjs.default)(b.created_at).unix() - (0, _dayjs.default)(a.created_at).unix();
        }

        return (0, _dayjs.default)(a.created_at).unix() - (0, _dayjs.default)(b.created_at).unix();
      });
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: ordersSorted
      }));
    }
  }, [orderList.loading, orderBy]);
  /**
   * This effect is used to reload orders with dynamic params, using `isDynamicSort` as validation
   */

  (0, _react.useEffect)(function () {
    if (isDynamicSort) {
      loadOrders(true, []);
    }
  }, [sortBy]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    sortOrders: sortOrders,
    setSortBy: setSortBy,
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    goToPage: goToPage,
    loadOrders: loadOrders,
    loadMessages: loadMessages,
    messages: messages,
    setMessages: setMessages,
    setUpdateOtherStatus: setUpdateOtherStatus,
    handleReorder: handleReorder,
    reorderState: reorderState,
    handleUpdateOrderList: handleUpdateOrderList
  })));
};

exports.OrderList = OrderList;
OrderList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }

    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },

  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,

  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrderList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  isAsCustomer: false
};