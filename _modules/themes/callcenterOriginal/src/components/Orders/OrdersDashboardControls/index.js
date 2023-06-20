"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboardControls = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _OrderStatusTypeSelector = require("../OrderStatusTypeSelector");
var _OrdersExportCSV = require("../OrdersExportCSV");
var _OrderDelete = require("../OrderDelete");
var _CreateCustomOrder = require("../CreateCustomOrder");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrdersDashboardControls = function OrdersDashboardControls(props) {
  var selectedOrderNumber = props.selectedOrderNumber,
    filterValues = props.filterValues,
    handleDeleteMultiOrders = props.handleDeleteMultiOrders,
    handleChangeMultiOrdersStatus = props.handleChangeMultiOrdersStatus,
    handleOpenCustomOrderDetail = props.handleOpenCustomOrderDetail;
  var _useSession = (0, _orderingComponents.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    user = _useSession2[0].user;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderDashboardControlsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContnet, null, /*#__PURE__*/_react.default.createElement(_CreateCustomOrder.CreateCustomOrder, {
    handleOpenCustomOrderDetail: handleOpenCustomOrderDetail
  }), /*#__PURE__*/_react.default.createElement(_OrdersExportCSV.OrdersExportCSV, {
    filterValues: filterValues
  }), selectedOrderNumber > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (user === null || user === void 0 ? void 0 : user.level) !== 5 && /*#__PURE__*/_react.default.createElement(_OrderDelete.OrderDelete, {
    handleDeleteMultiOrders: handleDeleteMultiOrders
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapOrderStatusTypeSelector, null, /*#__PURE__*/_react.default.createElement(_OrderStatusTypeSelector.OrderStatusTypeSelector, {
    orderControl: true,
    isFirstSelect: true,
    noPadding: true,
    mutiOrdersChange: true,
    noSelected: true,
    defaultValue: "default",
    type: "primary",
    handleChangeMultiOrdersStatus: handleChangeMultiOrdersStatus
  }))))));
};
exports.OrdersDashboardControls = OrdersDashboardControls;