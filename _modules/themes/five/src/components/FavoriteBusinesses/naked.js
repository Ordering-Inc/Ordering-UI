"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteBusinesses = void 0;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FavoriteBusinesses = function FavoriteBusinesses(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      propsToFetch = props.propsToFetch,
      asDashboard = props.asDashboard,
      customLocation = props.customLocation,
      paginationSettings = props.paginationSettings;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      requestsState = _useState2[0],
      setRequestsState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    businesses: [],
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      favoriteBusinessList = _useState4[0],
      setFavoriteBusinessList = _useState4[1];

  var _useState5 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10,
    total: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      pagination = _useState6[0],
      setPagination = _useState6[1];
  /**
   * Method to update business list
   * @param {number} businessId business id
   * @param {object} changes business info
   */


  var handleUpdateBusinessList = function handleUpdateBusinessList(businessId, changes) {
    if (changes !== null && changes !== void 0 && changes.favorite) return;

    var updatedBusinesses = _toConsumableArray(favoriteBusinessList === null || favoriteBusinessList === void 0 ? void 0 : favoriteBusinessList.businesses);

    var index = favoriteBusinessList === null || favoriteBusinessList === void 0 ? void 0 : favoriteBusinessList.businesses.findIndex(function (business) {
      return business.id === businessId;
    });
    updatedBusinesses.splice(index, 1);
    setFavoriteBusinessList(_objectSpread(_objectSpread({}, favoriteBusinessList), {}, {
      businesses: updatedBusinesses
    }));
  };
  /**
   * Function to get favorite business list from API
   */


  var getFavoriteBusinessList = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(page) {
      var pageSize,
          requestOptions,
          fetchEndpoint,
          response,
          content,
          _content$result,
          _response$content,
          businessIds,
          _response,
          _response$content2,
          _response$content3,
          _args = arguments;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : paginationSettings.pageSize;

              if (user) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              setFavoriteBusinessList(_objectSpread(_objectSpread({}, favoriteBusinessList), {}, {
                loading: true,
                error: null
              }));
              requestOptions = {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                }
              };
              fetchEndpoint = "".concat(ordering.root, "/users/").concat(user === null || user === void 0 ? void 0 : user.id, "/favorite_businesses?page=").concat(page, "&page_size=").concat(pageSize);
              _context.next = 9;
              return fetch(fetchEndpoint, requestOptions);

            case 9:
              response = _context.sent;
              _context.next = 12;
              return response.json();

            case 12:
              content = _context.sent;

              if (content.error) {
                _context.next = 22;
                break;
              }

              setPagination({
                currentPage: content.pagination.current_page,
                pageSize: content.pagination.page_size,
                totalPages: content.pagination.total_pages,
                total: content.pagination.total,
                from: content.pagination.from,
                to: content.pagination.to
              });
              businessIds = content === null || content === void 0 ? void 0 : (_content$result = content.result) === null || _content$result === void 0 ? void 0 : _content$result.reduce(function (ids, business) {
                return [].concat(_toConsumableArray(ids), [business === null || business === void 0 ? void 0 : business.object_id]);
              }, []);
              _context.next = 18;
              return getBusinessList(businessIds);

            case 18:
              _response = _context.sent;

              if (!(_response !== null && _response !== void 0 && (_response$content = _response.content) !== null && _response$content !== void 0 && _response$content.error)) {
                setFavoriteBusinessList({
                  loading: false,
                  businesses: [].concat(_toConsumableArray(favoriteBusinessList === null || favoriteBusinessList === void 0 ? void 0 : favoriteBusinessList.businesses), _toConsumableArray(_response === null || _response === void 0 ? void 0 : (_response$content2 = _response.content) === null || _response$content2 === void 0 ? void 0 : _response$content2.result)),
                  error: null
                });
              } else {
                setFavoriteBusinessList(_objectSpread(_objectSpread({}, favoriteBusinessList), {}, {
                  loading: false,
                  error: _response === null || _response === void 0 ? void 0 : (_response$content3 = _response.content) === null || _response$content3 === void 0 ? void 0 : _response$content3.result
                }));
              }

              _context.next = 23;
              break;

            case 22:
              setFavoriteBusinessList(_objectSpread(_objectSpread({}, favoriteBusinessList), {}, {
                loading: false,
                error: content.result
              }));

            case 23:
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](3);
              setFavoriteBusinessList(_objectSpread(_objectSpread({}, favoriteBusinessList), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 25]]);
    }));

    return function getFavoriteBusinessList(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getBusinessList = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(ids) {
      var _orderState$options, _orderState$options$a, _orderState$options$a2, _orderState$options2, _orderState$options2$, _orderState$options2$2;

      var parameters, where, conditions, source, fetchEndpoint;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              parameters = {
                location: !customLocation ? "".concat((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : (_orderState$options$a2 = _orderState$options$a.location) === null || _orderState$options$a2 === void 0 ? void 0 : _orderState$options$a2.lat, ",").concat((_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : (_orderState$options2$ = _orderState$options2.address) === null || _orderState$options2$ === void 0 ? void 0 : (_orderState$options2$2 = _orderState$options2$.location) === null || _orderState$options2$2 === void 0 ? void 0 : _orderState$options2$2.lng) : "".concat(customLocation.lat, ",").concat(customLocation.lng)
              };
              where = null;
              conditions = [];
              conditions.push({
                attribute: 'id',
                value: ids
              });

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              source = {};
              requestsState.businesses = source;
              setRequestsState(_objectSpread({}, requestsState));
              fetchEndpoint = asDashboard ? ordering.setAccessToken(token).businesses().select(propsToFetch).parameters(parameters).where(where).asDashboard() : ordering.setAccessToken(token).businesses().select(propsToFetch).parameters(parameters).where(where);
              _context2.next = 11;
              return fetchEndpoint.get({
                cancelToken: source
              });

            case 11:
              return _context2.abrupt("return", _context2.sent);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getBusinessList(_x2) {
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
  (0, _react.useEffect)(function () {
    getFavoriteBusinessList(1);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    favoriteBusinessList: favoriteBusinessList,
    handleUpdateBusinessList: handleUpdateBusinessList,
    pagination: pagination,
    getFavoriteBusinessList: getFavoriteBusinessList
  })));
};

exports.FavoriteBusinesses = FavoriteBusinesses;
FavoriteBusinesses.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Businessid, this must be contains an business id for get data from API
   */
  businessId: _propTypes.default.number,

  /**
   * Components types before products listing
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after products listing
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after products listing
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
FavoriteBusinesses.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  propsToFetch: ['id', 'name', 'header', 'logo', 'location', 'address', 'ribbon', 'timezone', 'schedule', 'open', 'delivery_price', 'distance', 'delivery_time', 'pickup_time', 'reviews', 'featured', 'offers', 'food', 'laundry', 'alcohol', 'groceries', 'slug']
};