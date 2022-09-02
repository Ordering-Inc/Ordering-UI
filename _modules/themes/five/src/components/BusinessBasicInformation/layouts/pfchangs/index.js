"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformationPFChangs = void 0;

var _orderingComponents = require("ordering-components");

var _react = _interopRequireDefault(require("react"));

var _pfchangs = require("../../../../styles/Buttons/theme/pfchangs");

var _styles = require("./styles");

var _RiArrowDropDownLine = _interopRequireDefault(require("@meronex/icons/ri/RiArrowDropDownLine"));

var _Modal = require("../../../Modal");

var _pfchangs2 = require("../../../BusinessInformation/layouts/pfchangs");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));

var _isBetween = _interopRequireDefault(require("dayjs/plugin/isBetween"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_timezone.default);

_dayjs.default.extend(_isBetween.default);

var BusinessBasicInformationPFChangs = function BusinessBasicInformationPFChangs(props) {
  var _orderState$options, _orderState$options2, _orderState$options3;

  var businessState = props.businessState,
      isSkeleton = props.isSkeleton,
      setOpenBusinessInformation = props.setOpenBusinessInformation,
      openBusinessInformation = props.openBusinessInformation;
  var business = businessState.business;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      changeType = _useOrder2[1].changeType;

  var types = ['food', 'laundry', 'alcohol', 'groceries'];

  var _useUtils = (0, _orderingComponents.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;

      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };

  return /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_RiArrowDropDownLine.default, {
    onClick: function onClick() {
      return setOpenBusinessInformation(true);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.DeliveryPickupContainer, {
    orderTypeSelected: orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type
  }, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.type) === 2 ? '#000' : '#FFF',
    onClick: function onClick() {
      return changeType(2);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: (orderState === null || orderState === void 0 ? void 0 : (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.type) === 1 ? '#000' : '#FFF',
    onClick: function onClick() {
      return changeType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('DELIVERY', 'Delivery'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open)
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    open: openBusinessInformation,
    onClose: setOpenBusinessInformation,
    padding: "0",
    hideCloseDefault: true,
    isTransparent: true
  }, /*#__PURE__*/_react.default.createElement(_pfchangs2.BusinessInformation, {
    business: business,
    getBusinessType: getBusinessType,
    optimizeImage: optimizeImage,
    onClose: setOpenBusinessInformation
  })));
};

exports.BusinessBasicInformationPFChangs = BusinessBasicInformationPFChangs;