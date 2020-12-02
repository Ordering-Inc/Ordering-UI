"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyOrders = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _ProfileOptions = require("../UserProfileForm/ProfileOptions");

var _OrdersOption = require("../OrdersOption");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyOrders = function MyOrders() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: "My Orders"
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, {
    activeOrders: true
  }), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, null)));
};

exports.MyOrders = MyOrders;