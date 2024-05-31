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
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderHelp = exports.OrderHelp = function OrderHelp(props) {
  var _order$business, _theme$images, _order$business2, _theme$images2, _order$business3;
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
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrderInfo, null, (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
    src: ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo),
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