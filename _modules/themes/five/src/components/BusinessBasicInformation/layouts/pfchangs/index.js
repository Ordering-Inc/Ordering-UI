"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessBasicInformationPFChangs = void 0;
var _orderingComponents = require("ordering-components");
var _react = _interopRequireWildcard(require("react"));
var _pfchangs = require("../../../../styles/Buttons/theme/pfchangs");
var _styles = require("./styles");
var _RiArrowDropDownLine = _interopRequireDefault(require("@meronex/icons/ri/RiArrowDropDownLine"));
var _Modal = require("../../../Modal");
var _pfchangs2 = require("../../../BusinessInformation/layouts/pfchangs");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _isBetween = _interopRequireDefault(require("dayjs/plugin/isBetween"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
_dayjs.default.extend(_timezone.default);
_dayjs.default.extend(_isBetween.default);
var BusinessBasicInformationPFChangs = function BusinessBasicInformationPFChangs(props) {
  var _orderState$options, _theme$colors, _theme$colors2;
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
  var _useState = (0, _react.useState)(orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type),
    _useState2 = _slicedToArray(_useState, 2),
    orderTypeSelected = _useState2[0],
    setOrderTypeSelected = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var getBusinessType = function getBusinessType() {
    if (Object.keys(business).length <= 0) return t('GENERAL', 'General');
    var _types = [];
    types.forEach(function (type) {
      var _type$replace;
      return business[type] && _types.push(t("BUSINESS_TYPE_".concat(type === null || type === void 0 ? void 0 : (_type$replace = type.replace(/\s/g, '_')) === null || _type$replace === void 0 ? void 0 : _type$replace.toUpperCase()), type));
    });
    return _types.join(', ');
  };
  var handleChangeOrderType = function handleChangeOrderType(orderType) {
    setOrderTypeSelected(orderType);
  };
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      changeType(orderTypeSelected);
    }, 250);
  }, [orderTypeSelected]);
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header
  }, /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 75
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold"
  }, business === null || business === void 0 ? void 0 : business.name), /*#__PURE__*/_react.default.createElement(_RiArrowDropDownLine.default, {
    onClick: function onClick() {
      return setOpenBusinessInformation(true);
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.DeliveryPickupContainer, {
    orderTypeSelected: orderTypeSelected
  }, /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: orderTypeSelected === 2 ? '#000' : (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#FFF',
    onClick: function onClick() {
      return handleChangeOrderType(2);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('PICKUP', 'Pickup')), /*#__PURE__*/_react.default.createElement(_pfchangs.Button, {
    color: orderTypeSelected === 1 ? '#000' : (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiary) || '#FFF',
    onClick: function onClick() {
      return handleChangeOrderType(1);
    },
    disabled: orderState === null || orderState === void 0 ? void 0 : orderState.loading
  }, t('DELIVERY_UPPER', 'Delivery'))), /*#__PURE__*/_react.default.createElement(_styles.BusinessContainer, {
    bgimage: business === null || business === void 0 ? void 0 : business.header,
    isSkeleton: isSkeleton,
    id: "container",
    isClosed: !(business !== null && business !== void 0 && business.open)
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: window.innerWidth > 1200 ? '50%' : '70%',
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