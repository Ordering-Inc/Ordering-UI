"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActiveOrders = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _styles2 = require("../OrdersOption/styles");

var _AutoScroll = require("../AutoScroll");

var _Tabs = require("../../styles/Tabs");

var _Buttons = require("../../styles/Buttons");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ActiveOrders = function ActiveOrders(props) {
  var orders = props.orders,
      pagination = props.pagination,
      onOrderClick = props.onOrderClick,
      loadMoreOrders = props.loadMoreOrders;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;

  return /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    activeOrders: true,
    ordersLength: (orders === null || orders === void 0 ? void 0 : orders.length) <= 1
  }, /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    special: true
  }, orders.map(function (order) {
    var _order$business, _order$business2;

    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: order.id
    }, /*#__PURE__*/_react.default.createElement(_styles.Map, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (0, _utils.getGoogleMapImage)(order === null || order === void 0 ? void 0 : (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.location),
      alt: "google-maps-img",
      width: "400px",
      height: "100px"
    })), /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo,
      alt: "business-logo",
      width: "75px",
      height: "75px"
    })), /*#__PURE__*/_react.default.createElement(_styles2.BusinessInformation, {
      activeOrders: true
    }, /*#__PURE__*/_react.default.createElement("h2", null, order.business.name), /*#__PURE__*/_react.default.createElement("p", null, t('ORDER_NUMBER', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement("p", null, order.created_at)), /*#__PURE__*/_react.default.createElement(_styles.Price, null, /*#__PURE__*/_react.default.createElement("h2", null, parsePrice(order.products.reduce(function (acc, cur) {
      return acc + cur.price;
    }, 0))), order.status === 0 && /*#__PURE__*/_react.default.createElement("p", null, t('PENDING_ORDER', 'Pending order')))), /*#__PURE__*/_react.default.createElement(_styles.OpenOrder, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      color: "primary",
      onClick: function onClick() {
        return onOrderClick({
          page: 'order_detail',
          params: {
            orderId: order.id
          }
        });
      }
    }, t('OPEN_ORDER', 'Open order'))));
  }), pagination.totalPages && pagination.currentPage < pagination.totalPages && /*#__PURE__*/_react.default.createElement(_styles.Card, {
    flex: true,
    nobg: true
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "load-orders",
    bgtransparent: true,
    color: "primary",
    outline: true,
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))))));
};

exports.ActiveOrders = ActiveOrders;