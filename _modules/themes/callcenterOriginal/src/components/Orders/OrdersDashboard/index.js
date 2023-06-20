"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersDashboard = void 0;
var _react = _interopRequireDefault(require("react"));
var _OrdersDashboardList = require("../OrdersDashboardList");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var OrdersDashboard = function OrdersDashboard(props) {
  return /*#__PURE__*/_react.default.createElement(_styles.OrdersManageContainer, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardList.OrdersDashboardList, _extends({}, props, {
    orderListView: "table"
  })));
};
exports.OrdersDashboard = OrdersDashboard;