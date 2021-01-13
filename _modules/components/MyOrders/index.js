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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MyOrders = function MyOrders(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ProfileOptions.ProfileOptions, {
    value: "orders"
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    activeOrders: true
  })), /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, props)));
};

exports.MyOrders = MyOrders;