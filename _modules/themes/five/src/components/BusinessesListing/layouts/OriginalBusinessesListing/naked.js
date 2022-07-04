"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

_dayjs.default.extend(_utc.default);

var BusinessList = function BusinessList(props) {
  var _paginationSettings$p, _configs$advanced_bus;

  var UIComponent = props.UIComponent,
      initialBuisnessType = props.initialBuisnessType,
      initialOrderType = props.initialOrderType,
      initialOrderByValue = props.initialOrderByValue,
      initialFilterKey = props.initialFilterKey,
      initialFilterValue = props.initialFilterValue,
      isOfferBusinesses = props.isOfferBusinesses,
      isSortByReview = props.isSortByReview,
      isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription,
      isFeatured = props.isFeatured,
      isDoordash = props.isDoordash,
      asDashboard = props.asDashboard,
      paginationSettings = props.paginationSettings,
      customLocation = props.customLocation,
      propsToFetch = props.propsToFetch,
      onBusinessClick = props.onBusinessClick,
      windowPathname = props.windowPathname,
      currentPageParam = props.currentPageParam,
      franchiseId = props.franchiseId,
      businessId = props.businessId;

  var _useState = (0, _react.useState)({
    businesses: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      businessesList = _useState2[0],
      setBusinessesList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    totalItems: null,
    totalPages: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      paginationProps = _useState4[0],
      setPaginationProps = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      businessTypeSelected = _useState6[0],
      setBusinessTypeSelected = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      searchValue = _useState8[0],
      setSearchValue = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      timeLimitValue = _useState10[0],
      setTimeLimitValue = _useState10[1];

  var _useState11 = (0, _react.useState)(initialOrderByValue !== null && initialOrderByValue !== void 0 ? initialOrderByValue : null),
      _useState12 = _slicedToArray(_useState11, 2),
      orderByValue = _useState12[0],
      setOrderByValue = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      maxDeliveryFee = _useState14[0],
      setMaxDeliveryFee = _useState14[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState15 = (0, _react.useState)({}),
      _useState16 = _slicedToArray(_useState15, 2),
      requestsState = _useState16[0],
      setRequestsState = _useState16[1];

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 2),
      configs = _useConfig2[0].configs,
      refreshConfigs = _useConfig2[1].refreshConfigs;

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      franchiseEnabled = _useState18[0],
      setFranchiseEnabled = _useState18[1];

  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };

  var rex = new RegExp(/^[A-Za-z0-9\s]+$/g);
  var advancedSearchEnabled = (configs === null || configs === void 0 ? void 0 : (_configs$advanced_bus = configs.advanced_business_search_enabled) === null || _configs$advanced_bus === void 0 ? void 0 : _configs$advanced_bus.value) === '1';

  var sortBusinesses = function sortBusinesses(array, option) {
    if (option === 'review') {
      return array.sort(function (a, b) {
        return b.reviews.total - a.reviews.total;
      });
    }

    return array;
  };
  /**
   * Get businesses by params, order options and filters
   * @param {boolean} newFetch Make a new request or next page
   */


  var getBusinesses = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newFetch, specificPagination, prev) {
      var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2, _orderState$options3, _orderState$options7, _orderState$options8, parameters, _orderState$options4, _orderState$options5, _orderState$options5$, _orderState$options5$2, _orderState$options6, _orderState$options6$, _orderState$options6$2, paginationParams, _orderState$options9, moment, where, conditions, _orderState$options10, _orderState$options11, searchConditions, isSpecialCharacter, _paginationParams, source, fetchEndpoint, _yield$fetchEndpoint$, _yield$fetchEndpoint$2, result, pagination, _result, offerBuesinesses, nextPageItems, remainingItems;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: true
              }));
              refreshConfigs();
              parameters = {
                location: !customLocation ? "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng) : "".concat(customLocation.lat, ",").concat(customLocation.lng),
                type: !initialOrderType ? ((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) || 1 : initialOrderType
              };

              if (orderByValue) {
                parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                  orderBy: orderByValue
                });
              }

              if ((searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 && advancedSearchEnabled) {
                parameters = _objectSpread(_objectSpread({}, parameters), {}, {
                  term: searchValue,
                  order_type_id: orderState === null || orderState === void 0 ? void 0 : (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.type,
                  location: JSON.stringify({
                    lat: (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : (_orderState$options5$ = _orderState$options5.address) === null || _orderState$options5$ === void 0 ? void 0 : (_orderState$options5$2 = _orderState$options5$.location) === null || _orderState$options5$2 === void 0 ? void 0 : _orderState$options5$2.lat,
                    lng: (_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : (_orderState$options6$ = _orderState$options6.address) === null || _orderState$options6$ === void 0 ? void 0 : (_orderState$options6$2 = _orderState$options6$.location) === null || _orderState$options6$2 === void 0 ? void 0 : _orderState$options6$2.lng
                  })
                });
              }

              if (!isSortByReview && !isOfferBusinesses) {
                paginationParams = {
                  page: newFetch ? 1 : paginationProps.currentPage + 1,
                  page_size: paginationProps.pageSize
                };
                parameters = _objectSpread(_objectSpread({}, parameters), paginationParams);
              }

              if ((_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.moment && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              where = null;
              conditions = [];

              if (initialBuisnessType || businessTypeSelected) {
                conditions.push({
                  attribute: 'types',
                  conditions: [{
                    attribute: 'id',
                    value: !initialBuisnessType ? businessTypeSelected : initialBuisnessType
                  }]
                });
              }

              if (isFeatured) {
                conditions.push({
                  attribute: 'featured',
                  value: true
                });
              }

              if (franchiseId) {
                conditions.push({
                  attribute: 'franchise_id',
                  value: franchiseId
                });
              }

              if (businessId) {
                conditions.push({
                  attribute: typeof businessId === 'string' ? 'slug' : 'id',
                  value: businessId
                });
              }

              if (timeLimitValue) {
                if (((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type) === 1) {
                  conditions.push({
                    attribute: 'delivery_time',
                    value: {
                      condition: '<=',
                      value: timeLimitValue
                    }
                  });
                }

                if (((_orderState$options11 = orderState.options) === null || _orderState$options11 === void 0 ? void 0 : _orderState$options11.type) === 2) {
                  conditions.push({
                    attribute: 'pickup_time',
                    value: {
                      condition: '<=',
                      value: timeLimitValue
                    }
                  });
                }
              }

              if (maxDeliveryFee) {
                conditions.push({
                  attribute: 'delivery_price',
                  value: {
                    condition: '<=',
                    value: maxDeliveryFee
                  }
                });
              }

              if (searchValue) {
                searchConditions = [];
                isSpecialCharacter = rex.test(searchValue);

                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByDescription) {
                  searchConditions.push({
                    attribute: 'description',
                    value: {
                      condition: 'ilike',
                      value: !isSpecialCharacter || props !== null && props !== void 0 && props.isForceSearch ? "%".concat(searchValue, "%") : encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              if (specificPagination || currentPageParam) {
                _paginationParams = {
                  page: specificPagination || currentPageParam,
                  page_size: paginationProps.pageSize
                };
                parameters = _objectSpread(_objectSpread({}, parameters), _paginationParams);
              }

              source = {};
              requestsState.businesses = source;
              setRequestsState(_objectSpread({}, requestsState));
              fetchEndpoint = advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3 || !where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters) : where && asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where).asDashboard() : where && !asDashboard ? ordering.businesses().select(propsToFetch).parameters(parameters).where(where) : ordering.businesses().select(propsToFetch).parameters(parameters).asDashboard();
              _context.next = 25;
              return fetchEndpoint.get({
                cancelToken: source,
                advancedSearch: advancedSearchEnabled && (searchValue === null || searchValue === void 0 ? void 0 : searchValue.length) >= 3
              });

            case 25:
              _yield$fetchEndpoint$ = _context.sent;
              _yield$fetchEndpoint$2 = _yield$fetchEndpoint$.content;
              result = _yield$fetchEndpoint$2.result;
              pagination = _yield$fetchEndpoint$2.pagination;

              if (isSortByReview) {
                _result = sortBusinesses(result, 'review');
                businessesList.businesses = _result;
              } else if (isOfferBusinesses) {
                offerBuesinesses = result.filter(function (_business) {
                  return (_business === null || _business === void 0 ? void 0 : _business.offers.length) > 0;
                });
                businessesList.businesses = offerBuesinesses;
              } else {
                businessesList.businesses = newFetch ? result : prev ? [].concat(_toConsumableArray(result), _toConsumableArray(businessesList.businesses)) : [].concat(_toConsumableArray(businessesList.businesses), _toConsumableArray(result));
              }

              nextPageItems = 0;

              if (pagination.current_page !== pagination.total_pages) {
                remainingItems = pagination.total - businessesList.businesses.length;
                nextPageItems = remainingItems < pagination.page_size ? remainingItems : pagination.page_size;
              }

              setPaginationProps(_objectSpread(_objectSpread({}, paginationProps), {}, {
                currentPage: pagination.current_page,
                totalPages: pagination.total_pages,
                totalItems: pagination.total,
                nextPageItems: nextPageItems
              }));
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false
              }));
              _context.next = 39;
              break;

            case 36:
              _context.prev = 36;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                  loading: false,
                  error: [_context.t0.message]
                }));
              }

            case 39:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 36]]);
    }));

    return function getBusinesses(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Get franchise info from API
   */


  var getFranchise = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var requestOptions, functionFetch, response, _yield$response$json, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setFranchiseEnabled(false);
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              functionFetch = "".concat(ordering.root, "/franchises/").concat(franchiseId);
              _context2.next = 6;
              return fetch(functionFetch, requestOptions);

            case 6:
              response = _context2.sent;
              _context2.next = 9;
              return response.json();

            case 9:
              _yield$response$json = _context2.sent;
              result = _yield$response$json.result;
              if (result !== null && result !== void 0 && result.enabled) setFranchiseEnabled(result === null || result === void 0 ? void 0 : result.enabled);else setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false
              }));
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
                loading: false
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function getFranchise() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Cancel businesses request
   */


  (0, _react.useEffect)(function () {
    var request = requestsState.businesses;
    return function () {
      request && request.cancel();
    };
  }, [requestsState.businesses]);
  /**
   * Listening order option and filter changes
   */

  (0, _react.useEffect)(function () {
    var _orderState$options12, _orderState$options13;

    if (orderState.loading || !((_orderState$options12 = orderState.options) !== null && _orderState$options12 !== void 0 && (_orderState$options13 = _orderState$options12.address) !== null && _orderState$options13 !== void 0 && _orderState$options13.location) && !customLocation && !asDashboard) return;

    if (!isDoordash && !franchiseId) {
      getBusinesses(true, currentPageParam);
    }
  }, [JSON.stringify(orderState.options), businessTypeSelected, searchValue, timeLimitValue, orderByValue, maxDeliveryFee]);
  (0, _react.useEffect)(function () {
    var _orderState$options14, _orderState$options15;

    if (orderState.loading || !((_orderState$options14 = orderState.options) !== null && _orderState$options14 !== void 0 && (_orderState$options15 = _orderState$options14.address) !== null && _orderState$options15 !== void 0 && _orderState$options15.location) && !customLocation) return;

    if (isDoordash || franchiseEnabled) {
      getBusinesses(true);
    }
  }, [JSON.stringify(orderState.options), franchiseEnabled, businessTypeSelected, searchValue, timeLimitValue, orderByValue, maxDeliveryFee]);
  (0, _react.useLayoutEffect)(function () {
    if (isDoordash) {
      getBusinesses(true);
    }
  }, [windowPathname]);
  (0, _react.useEffect)(function () {
    if (franchiseId) {
      getFranchise();
    }
  }, [franchiseId]);
  /**
   * Listening initial filter
   */

  (0, _react.useEffect)(function () {
    if (!initialFilterKey && !initialFilterValue) return;

    switch (initialFilterKey) {
      case 'category':
        handleChangeBusinessType(initialFilterValue);
        break;

      case 'timeLimit':
        handleChangeTimeLimit(initialFilterValue);
        break;

      case 'search':
        handleChangeSearch(initialFilterValue);
        break;

      case 'orderBy':
        handleChangeOrderBy(initialFilterValue);
        break;

      case 'maxDeliveryFee':
        handleChangeMaxDeliveryFee(initialFilterValue);
        break;
    }
  }, [initialFilterKey, initialFilterValue]);
  /**
   * Default behavior business click
   * @param {object} business Business clicked
   */

  var handleBusinessClick = function handleBusinessClick(business) {
    onBusinessClick && onBusinessClick(business);
  };
  /**
   * Change business type
   * @param {object} businessType Business type
   */


  var handleChangeBusinessType = function handleChangeBusinessType(businessType) {
    if (businessType !== businessTypeSelected) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
      setBusinessTypeSelected(businessType);
    }
  };
  /**
   * Change text to search
   * @param {string} search Search value
   */


  var handleChangeSearch = function handleChangeSearch(search) {
    if (!!search !== !!searchValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }

    setSearchValue(search);
  };
  /**
   * Change time limt value
   * @param {string} time time limt value (for example: 0:30)
   */


  var handleChangeTimeLimit = function handleChangeTimeLimit(time) {
    if (!!time !== !!timeLimitValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }

    setTimeLimitValue(time);
  };
  /**
   * Change orderBy value
   * @param {string} orderBy orderBy value
   */


  var handleChangeOrderBy = function handleChangeOrderBy(orderBy) {
    if (orderBy !== orderByValue) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }

    setOrderByValue(orderBy);
  };
  /**
   * Change max delivery fee
   * @param {number} deliveryFee max delivery fee
   */


  var handleChangeMaxDeliveryFee = function handleChangeMaxDeliveryFee(deliveryFee) {
    if (maxDeliveryFee !== deliveryFee) {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        businesses: [],
        loading: true
      }));
    } else {
      setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
        loading: false
      }));
    }

    setMaxDeliveryFee(deliveryFee);
  };
  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */


  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    var updatedBusinesses = businessesList === null || businessesList === void 0 ? void 0 : businessesList.businesses.map(function (business) {
      if ((business === null || business === void 0 ? void 0 : business.id) === businessId) {
        return _objectSpread(_objectSpread({}, business), changes);
      }

      return business;
    });
    setBusinessesList(_objectSpread(_objectSpread({}, businessesList), {}, {
      businesses: updatedBusinesses
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    businessesList: businessesList,
    paginationProps: paginationProps,
    searchValue: searchValue,
    timeLimitValue: timeLimitValue,
    businessTypeSelected: businessTypeSelected,
    orderByValue: orderByValue,
    maxDeliveryFee: maxDeliveryFee,
    getBusinesses: getBusinesses,
    handleChangeSearch: handleChangeSearch,
    handleChangeTimeLimit: handleChangeTimeLimit,
    handleChangeOrderBy: handleChangeOrderBy,
    handleBusinessClick: handleBusinessClick,
    handleChangeBusinessType: handleChangeBusinessType,
    handleChangeMaxDeliveryFee: handleChangeMaxDeliveryFee,
    franchiseEnabled: franchiseEnabled,
    handleUpdateBusinessList: handleUpdateBusinessList
  })));
};

exports.BusinessList = BusinessList;
BusinessList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of business props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Function to get business clicked
   */
  onBusinessClick: _propTypes.default.func
};
BusinessList.defaultProps = {
  propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'schedule', 'open', 'ribbon', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug'],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  }
};