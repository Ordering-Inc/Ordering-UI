"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponents = require("ordering-components");

var _ActiveOrders = require("../ActiveOrders");

var _PreviousOrders = require("../PreviousOrders");

var _styledComponents = require("styled-components");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersOptionUI = function OrdersOptionUI(props) {
  var _theme$images, _theme$images$general, _theme$images2, _theme$images2$genera;

  var orderList = props.orderList,
      pagination = props.pagination,
      activeOrders = props.activeOrders,
      onOrderClick = props.onOrderClick,
      loadMoreOrders = props.loadMoreOrders;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();
  var loading = orderList.loading,
      error = orderList.error,
      orders = orderList.orders;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      ordersSorted = _useState2[0],
      setOrdersSorted = _useState2[1];

  var getOrderStatus = function getOrderStatus(s) {
    var status = parseInt(s);
    var orderStatus = [{
      key: 0,
      value: t('PENDING', 'Pending')
    }, {
      key: 1,
      value: t('COMPLETED', 'Completed')
    }, {
      key: 2,
      value: t('REJECTED', 'Rejected')
    }, {
      key: 3,
      value: t('DRIVER_IN_BUSINESS', 'Driver in business')
    }, {
      key: 4,
      value: t('PREPARATION_COMPLETED', 'Preparation Completed')
    }, {
      key: 5,
      value: t('REJECTED_BY_BUSINESS', 'Rejected by business')
    }, {
      key: 6,
      value: t('REJECTED_BY_DRIVER', 'Rejected by Driver')
    }, {
      key: 7,
      value: t('ACCEPTED_BY_BUSINESS', 'Accepted by business')
    }, {
      key: 8,
      value: t('ACCEPTED_BY_DRIVER', 'Accepted by driver')
    }, {
      key: 9,
      value: t('PICK_UP_COMPLETED_BY_DRIVER', 'Pick up completed by driver')
    }, {
      key: 10,
      value: t('PICK_UP_FAILED_BY_DRIVER', 'Pick up Failed by driver')
    }, {
      key: 11,
      value: t('DELIVERY_COMPLETED_BY_DRIVER', 'Delivery completed by driver')
    }, {
      key: 12,
      value: t('DELIVERY_FAILED_BY_DRIVER', 'Delivery Failed by driver')
    }];
    var objectStatus = orderStatus.find(function (o) {
      return o.key === status;
    });
    return objectStatus && objectStatus;
  };

  (0, _react.useEffect)(function () {
    var ordersSorted = orders.sort(function (a, b) {
      if (activeOrders) {
        return new Date(b.created_at) - new Date(a.created_at);
      }

      return new Date(a.created_at) - new Date(b.created_at);
    });
    setOrdersSorted(ordersSorted);
  }, [orders]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OptionTitle, null, /*#__PURE__*/_react.default.createElement("h1", null, activeOrders ? t('ACTIVE_ORDERS', 'Active Orders') : t('PREVIOUS_ORDERS', 'Previous Orders'))), !loading && ordersSorted.length === 0 && /*#__PURE__*/_react.default.createElement(_styles.ImageNotFound, null, /*#__PURE__*/_react.default.createElement("img", {
    src: activeOrders ? (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.emptyActiveOrders : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$genera = _theme$images2.general) === null || _theme$images2$genera === void 0 ? void 0 : _theme$images2$genera.emptyPastOrders,
    alt: "empty-".concat(activeOrders ? 'active' : 'past', "-orders"),
    width: "300px",
    height: "300px"
  })), loading && /*#__PURE__*/_react.default.createElement(_styles.OrdersContainer, {
    activeOrders: activeOrders,
    isSkeleton: true
  }, activeOrders ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, {
    activeOrders: activeOrders
  }, _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonCard, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonMap, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SkeletonContent, {
      activeOrders: activeOrders
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 70
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }))), /*#__PURE__*/_react.default.createElement(_styles.SkeletonButton, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)));
  })) : _toConsumableArray(Array(3)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SkeletonOrder, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.SkeletonContent, null, /*#__PURE__*/_react.default.createElement(_styles.SkeletonInformation, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 70,
      height: 70
    })), /*#__PURE__*/_react.default.createElement(_styles.SkeletonText, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80
    }))), /*#__PURE__*/_react.default.createElement(_styles.SkeletonReorder, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null))));
  })), !loading && !error && orders.length > 0 && (activeOrders ? /*#__PURE__*/_react.default.createElement(_ActiveOrders.ActiveOrders, {
    orders: ordersSorted,
    pagination: pagination,
    onOrderClick: onOrderClick,
    loadMoreOrders: loadMoreOrders,
    getOrderStatus: getOrderStatus
  }) : /*#__PURE__*/_react.default.createElement(_PreviousOrders.PreviousOrders, {
    orders: ordersSorted,
    pagination: pagination,
    onOrderClick: onOrderClick,
    loadMoreOrders: loadMoreOrders,
    getOrderStatus: getOrderStatus
  })));
};

var OrdersOption = function OrdersOption(props) {
  var orderListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: OrdersOptionUI,
    orderStatus: props.activeOrders ? [0, 3, 4, 7, 8, 9] : [1, 2, 5, 6, 10, 11, 12],
    useDefualtSessionManager: true,
    paginationSettings: {
      initialPage: 1,
      pageSize: 10,
      controlType: 'infinity'
    }
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderList, orderListProps);
};

exports.OrdersOption = OrdersOption;