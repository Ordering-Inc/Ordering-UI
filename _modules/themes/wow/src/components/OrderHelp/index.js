"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderHelp = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _styledComponents = require("styled-components");
var _BsChevronDown = _interopRequireDefault(require("@meronex/icons/bs/BsChevronDown"));
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var OrderHelp = function OrderHelp(props) {
  var _order$business, _theme$images, _theme$images$dummies, _order$business2, _theme$images2, _theme$images2$dummie, _order$business3;
  var order = props.order,
    handleCancel = props.handleCancel;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var deliveryHelpItems = [{
    value: 1,
    header: t('DID_NOT_ARRIVE', 'Did not arrive')
  }, {
    value: 2,
    header: t('PROBLEMS_WITH_DELIVERY_MAN', 'I had problems with the delivery man')
  }];
  var paymentHelpItems = [{
    value: 1,
    header: t('DOUBTS_IN_THE_COLLECTION', 'Doubts in the collection')
  }, {
    value: 2,
    header: t('DISCOUNTS_AND_PROMOTIONS', 'Discounts and promotions')
  }, {
    value: 3,
    header: t('HOW_PAYMENTS_WORKS_WITH_WOW', 'How payment works with Balance Wow')
  }, {
    value: 4,
    header: t('HOW_DOES_THE_RETURN_PROCESS_WORK', 'How does the return process work?')
  }, {
    value: 5,
    header: t('THEY_RECORDED_TWO_CHARGES_ON_THIS_ORDER', 'They recorded two charges on this order')
  }, {
    value: 6,
    header: t('TIP_HOW_DOES_IT_WORK', 'Tip: How does it work?')
  }];
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$dummie = _theme$images2.dummies) === null || _theme$images2$dummie === void 0 ? void 0 : _theme$images2$dummie.businessLogo),
    alt: "business-logo",
    width: "75px",
    height: "75px"
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", {
    name: "order_number"
  }, t('ORDER_NUMBER', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  })))), /*#__PURE__*/_react.default.createElement(_styles.HelpContent, null, /*#__PURE__*/_react.default.createElement(_styles.HelpSection, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MY_ORDERS', 'My orders')), /*#__PURE__*/_react.default.createElement(_styles.HelpItem, null, /*#__PURE__*/_react.default.createElement(_styles.HelpItemHeader, null, /*#__PURE__*/_react.default.createElement("span", null, t('ARRIVED_INCOMPLETE', 'Arrived incomplete')), /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null))), /*#__PURE__*/_react.default.createElement(_styles.HelpItem, null, /*#__PURE__*/_react.default.createElement(_styles.HelpItemHeader, null, /*#__PURE__*/_react.default.createElement("span", null, t('IT_DID_NOT_ARRIVE_IN_GOOD_CONDITION', 'It did not arrive in good condition')), /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null))), /*#__PURE__*/_react.default.createElement(_styles.HelpItem, null, /*#__PURE__*/_react.default.createElement(_styles.HelpItemHeader, null, /*#__PURE__*/_react.default.createElement("span", null, t('IT_CAME_DIFFERENCE_THAN_I_EXPECTED', 'It came different than I expected')), /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null)))), /*#__PURE__*/_react.default.createElement(_styles.HelpSection, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MY_DELIVERY', 'My delivery')), deliveryHelpItems.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.HelpItem, {
      key: item.value
    }, /*#__PURE__*/_react.default.createElement(_styles.HelpItemHeader, null, /*#__PURE__*/_react.default.createElement("span", null, item.header), /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null)));
  })), /*#__PURE__*/_react.default.createElement(_styles.HelpSection, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MY_PAYMENT', 'My payment')), paymentHelpItems.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.HelpItem, {
      key: item.value
    }, /*#__PURE__*/_react.default.createElement(_styles.HelpItemHeader, null, /*#__PURE__*/_react.default.createElement("span", null, item.header), /*#__PURE__*/_react.default.createElement(_BsChevronDown.default, null)));
  }))), /*#__PURE__*/_react.default.createElement(_styles.CancelButtonContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return handleCancel();
    }
  }, t('CANCEL', 'Cancel')))));
};
exports.OrderHelp = OrderHelp;