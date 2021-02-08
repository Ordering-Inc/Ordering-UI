"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalOrdersLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Buttons = require("../../styles/Buttons");

var _styles = require("./styles");

var _styles2 = require("../OrdersOption/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var VerticalOrdersLayout = function VerticalOrdersLayout(props) {
  var orders = props.orders,
      pagination = props.pagination,
      onOrderClick = props.onOrderClick,
      loadMoreOrders = props.loadMoreOrders,
      getOrderStatus = props.getOrderStatus,
      handleReorder = props.handleReorder,
      reorderLoading = props.reorderLoading,
      orderID = props.orderID;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseDate = _useUtils2[0].parseDate;

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    id: "orders-container"
  }, orders.map(function (order) {
    var _order$business, _order$business2, _order$business3, _getOrderStatus;

    return /*#__PURE__*/_react.default.createElement(_styles.SingleCard, {
      key: order.id,
      id: "order-card"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderPastContent, null, ((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) && /*#__PURE__*/_react.default.createElement(_styles.PastLogo, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo,
      alt: "business-logo",
      width: "55px",
      height: "64px",
      loading: "lazy"
    })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessTitle, null, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name)), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement("p", {
      name: "view_order",
      onClick: function onClick() {
        return onOrderClick({
          page: 'order_detail',
          params: {
            orderId: order.uuid
          }
        });
      }
    }, t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')))), /*#__PURE__*/_react.default.createElement(_styles.Reorder, null, /*#__PURE__*/_react.default.createElement("p", null, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return handleReorder(order.id);
      },
      disabled: reorderLoading
    }, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))));
  })), pagination.totalPages && pagination.currentPage < pagination.totalPages && /*#__PURE__*/_react.default.createElement(_styles.WrappButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    outline: true,
    color: "primary",
    bgtransparent: true,
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))));
};

exports.VerticalOrdersLayout = VerticalOrdersLayout;