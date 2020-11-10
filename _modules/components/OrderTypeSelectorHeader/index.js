"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderTypeSelectorHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Select = require("../../styles/Select");

var _FaCarSide = _interopRequireDefault(require("@meronex/icons/fa/FaCarSide"));

var _FaTruckPickup = _interopRequireDefault(require("@meronex/icons/fa/FaTruckPickup"));

var _MdcTruckDeliveryOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcTruckDeliveryOutline"));

var _AiFillShop = _interopRequireDefault(require("@meronex/icons/ai/AiFillShop"));

var _GiFoodTruck = _interopRequireDefault(require("@meronex/icons/gi/GiFoodTruck"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderTypeSelectorHeaderUI = function OrderTypeSelectorHeaderUI(props) {
  var handleChangeOrderType = props.handleChangeOrderType,
      typeSelected = props.typeSelected;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var orderTypes = [{
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_MdcTruckDeliveryOutline.default, null), t('DELIVERY', 'Delivery'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaTruckPickup.default, null), t('PICKUP', 'Pickup'))
  }, {
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_AiFillShop.default, null), t('EAT_IN', 'Eat in'))
  }, {
    value: 4,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_GiFoodTruck.default, null), t('CURBSIDE', 'Curbside'))
  }, {
    value: 5,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, /*#__PURE__*/_react.default.createElement(_FaCarSide.default, null), t('DRIVE_THRU', 'Drive thru'))
  }];
  return /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: orderTypes,
    defaultValue: typeSelected,
    onChange: function onChange(orderType) {
      return handleChangeOrderType(orderType);
    }
  });
};

var OrderTypeSelectorHeader = function OrderTypeSelectorHeader(props) {
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.OrderTypeControl, _extends({}, props, {
    UIComponent: OrderTypeSelectorHeaderUI
  }));
};

exports.OrderTypeSelectorHeader = OrderTypeSelectorHeader;