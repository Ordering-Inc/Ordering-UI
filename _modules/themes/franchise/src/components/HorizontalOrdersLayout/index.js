"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalOrdersLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _styles2 = require("../OrdersOption/styles");

var _AutoScroll = require("../AutoScroll");

var _Tabs = require("../../styles/Tabs");

var _Buttons = require("../../styles/Buttons");

var _BsDot = _interopRequireDefault(require("@meronex/icons/bs/BsDot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HorizontalOrdersLayout = function HorizontalOrdersLayout(props) {
  var pagination = props.pagination,
      loadMoreOrders = props.loadMoreOrders,
      getOrderStatus = props.getOrderStatus,
      isBusinessesPage = props.isBusinessesPage,
      handleReorder = props.handleReorder,
      customArray = props.customArray,
      onRedirectPage = props.onRedirectPage,
      businessesIds = props.businessesIds,
      activeOrders = props.activeOrders,
      pastOrders = props.pastOrders;
  var orders = customArray || props.orders;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      _useUtils2$ = _useUtils2[0],
      parsePrice = _useUtils2$.parsePrice,
      parseDate = _useUtils2$.parseDate;

  var ordersToShow = businessesIds ? orders.filter(function (order) {
    return businessesIds === null || businessesIds === void 0 ? void 0 : businessesIds.includes(order === null || order === void 0 ? void 0 : order.business_id);
  }) : orders;

  var handleClickCard = function handleClickCard(uuid) {
    if (customArray) {
      onRedirectPage({
        page: 'checkout',
        params: {
          cartUuid: uuid
        }
      });
    } else {
      onRedirectPage({
        page: 'order_detail',
        params: {
          orderId: uuid
        }
      });
    }
  };

  var Orders = function Orders() {
    var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, BeforeElement);
    }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
      return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
        key: i
      }, props));
    }), orders.length > 0 && ordersToShow.map(function (order) {
      var _order$business, _getOrderStatus, _order$summary;

      return /*#__PURE__*/_react.default.createElement(_styles.Card, {
        key: order.id || order.uuid,
        id: "order-card",
        isBusinessesPage: isBusinessesPage,
        onClick: function onClick() {
          return handleClickCard(order === null || order === void 0 ? void 0 : order.uuid);
        }
      }, /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, {
        activeOrders: true
      }, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name), /*#__PURE__*/_react.default.createElement("div", {
        className: "orders-detail"
      }, /*#__PURE__*/_react.default.createElement("p", {
        name: "order_number"
      }, t('ORDER_NUM', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement(_BsDot.default, null), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc, {
        outputFormat: 'MM/DD/YY hh:mm A'
      }) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
        utc: false
      }))), /*#__PURE__*/_react.default.createElement("p", {
        className: "order-status"
      }, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value)), /*#__PURE__*/_react.default.createElement(_styles.Price, {
        isBusinessesPage: isBusinessesPage
      }, !pastOrders && /*#__PURE__*/_react.default.createElement("h2", null, parsePrice((order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || (order === null || order === void 0 ? void 0 : order.total))), pastOrders && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        outline: true,
        color: "primary",
        onClick: function onClick() {
          return handleClickCard(order.uuid);
        }
      }, t('REVIEW', 'Review')), pastOrders && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        color: "primary",
        className: "reorder",
        outline: true,
        onClick: function onClick() {
          return handleReorder(order.id);
        }
      }, t('REORDER', 'Reorder')))));
    }), (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.Card, {
      flex: true,
      nobg: true,
      isBusinessesPage: isBusinessesPage
    }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      className: "load-orders",
      bgtransparent: true,
      color: "primary",
      outline: true,
      onClick: loadMoreOrders
    }, t('LOAD_MORE_ORDERS', 'Load more orders'))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
      return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
        key: i
      }, props));
    }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, AfterElement);
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    id: "orders-container",
    activeOrders: true,
    ordersLength: (orders === null || orders === void 0 ? void 0 : orders.length) <= 1,
    isBusinessesPage: isBusinessesPage
  }, !isBusinessesPage ? /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: activeOrders ? 'activeOrders' : pastOrders ? 'pastOrders' : 'prevOrders'
  }, /*#__PURE__*/_react.default.createElement(Orders, null))) : /*#__PURE__*/_react.default.createElement(Orders, null));
};

exports.HorizontalOrdersLayout = HorizontalOrdersLayout;