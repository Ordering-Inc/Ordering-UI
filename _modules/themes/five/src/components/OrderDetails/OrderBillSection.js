"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderBillSection = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _orderingComponents = require("ordering-components");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
var _BsInfoCircle = _interopRequireDefault(require("@meronex/icons/bs/BsInfoCircle"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderBillSection = exports.OrderBillSection = function OrderBillSection(props) {
  var _order$metafields, _order$metafields$fin, _order$metafields2, _order$metafields2$fi, _theme$defaultLanguag, _order$summary$subtot, _order$summary2, _ref, _order$summary3, _order$offers, _theme$defaultLanguag2, _theme$defaultLanguag3, _order$summary$discou, _order$summary4, _order$offers2, _order$offers3, _order$summary5, _order$summary6, _order$summary7, _ref2, _order$summary8, _order$summary$subtot2, _order$summary9, _order$taxes3, _order$summary$tax2, _order$summary0, _order$fees, _order$summary$servic, _order$summary1, _order$taxes4, _order$taxes5, _order$fees2, _order$fees3, _order$offers4, _order$offers5, _order$summary10, _theme$defaultLanguag4, _order$summary11, _order$taxes6, _order$taxes7, _order$offers6, _order$offers7, _order$summary12, _theme$defaultLanguag5, _order$summary13, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary$driver, _order$summary14, _extraValueAdjustment, _theme$defaultLanguag6, _order$summary$total, _order$summary15, _order$payment_events, _order$payment_events2;
  var order = props.order,
    setOpenTaxModal = props.setOpenTaxModal,
    showOnlyTotals = props.showOnlyTotals;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseNumber = _useUtils2$.parseNumber;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var isPickup = (order === null || order === void 0 ? void 0 : order.delivery_type) === 2;
  var walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  };
  var extraValueAdjustment = order === null || order === void 0 || (_order$metafields = order.metafields) === null || _order$metafields === void 0 || (_order$metafields$fin = _order$metafields.find) === null || _order$metafields$fin === void 0 ? void 0 : _order$metafields$fin.call(_order$metafields, function (meta) {
    return (meta === null || meta === void 0 ? void 0 : meta.key) === 'extra_value_adjustment_amount';
  });
  var pulseCouponName = order === null || order === void 0 || (_order$metafields2 = order.metafields) === null || _order$metafields2 === void 0 || (_order$metafields2$fi = _order$metafields2.find) === null || _order$metafields2$fi === void 0 ? void 0 : _order$metafields2$fi.call(_order$metafields2, function (meta) {
    return (meta === null || meta === void 0 ? void 0 : meta.key) === 'pulse_coupon_name';
  });
  var getIncludedTaxes = function getIncludedTaxes(isDeliveryFee) {
    var _order$taxes;
    if ((order === null || order === void 0 || (_order$taxes = order.taxes) === null || _order$taxes === void 0 ? void 0 : _order$taxes.length) === 0) {
      var _order$summary$tax, _order$summary;
      return order.tax_type === 1 ? (_order$summary$tax = order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0 : 0;
    } else {
      return order === null || order === void 0 ? void 0 : order.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;
        return taxIncluded + (!isDeliveryFee && tax.type === 1 && tax.target === 'product' || isDeliveryFee && tax.type === 1 && tax.target === 'delivery_fee' ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };
  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _order$taxes2;
    return order === null || order === void 0 || (_order$taxes2 = order.taxes) === null || _order$taxes2 === void 0 || (_order$taxes2 = _order$taxes2.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
    })) === null || _order$taxes2 === void 0 ? void 0 : _order$taxes2.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;
      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 || (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 || (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', (theme === null || theme === void 0 || (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SUBTOTAL) || 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(((_order$summary$subtot = order === null || order === void 0 || (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.subtotal) !== null && _order$summary$subtot !== void 0 ? _order$summary$subtot : order === null || order === void 0 ? void 0 : order.subtotal) + getIncludedTaxes()))), !showOnlyTotals && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_ref = (order === null || order === void 0 || (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount) > 0) !== null && _ref !== void 0 ? _ref : (order === null || order === void 0 ? void 0 : order.discount) > 0) && (order === null || order === void 0 || (_order$offers = order.offers) === null || _order$offers === void 0 ? void 0 : _order$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 || (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.DISCOUNT) || 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 || (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.DISCOUNT) || 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((_order$summary$discou = order === null || order === void 0 || (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) !== null && _order$summary$discou !== void 0 ? _order$summary$discou : order === null || order === void 0 ? void 0 : order.discount))), (order === null || order === void 0 || (_order$offers2 = order.offers) === null || _order$offers2 === void 0 ? void 0 : _order$offers2.length) > 0 && (order === null || order === void 0 || (_order$offers3 = order.offers) === null || _order$offers3 === void 0 || (_order$offers3 = _order$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _order$offers3 === void 0 ? void 0 : _order$offers3.map(function (offer) {
    var _offer$name, _offer$summary;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t((_offer$name = offer.name) === null || _offer$name === void 0 || (_offer$name = _offer$name.toUpperCase()) === null || _offer$name === void 0 ? void 0 : _offer$name.replace(/ /g, '_'), offer.name), offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_1'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount)));
  })), (order === null || order === void 0 || (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.subtotal_with_discount) > 0 && (order === null || order === void 0 || (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.discount) > 0 && (order === null || order === void 0 || (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (order === null || order === void 0 || (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref2 !== void 0 ? _ref2 : 0)) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$subtot2 = order === null || order === void 0 || (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.subtotal_with_discount) !== null && _order$summary$subtot2 !== void 0 ? _order$summary$subtot2 : 0))), (order === null || order === void 0 || (_order$taxes3 = order.taxes) === null || _order$taxes3 === void 0 ? void 0 : _order$taxes3.length) === 0 && (order === null || order === void 0 ? void 0 : order.tax_type) === 2 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$tax2 = order === null || order === void 0 || (_order$summary0 = order.summary) === null || _order$summary0 === void 0 ? void 0 : _order$summary0.tax) !== null && _order$summary$tax2 !== void 0 ? _order$summary$tax2 : 0))), (order === null || order === void 0 || (_order$fees = order.fees) === null || _order$fees === void 0 ? void 0 : _order$fees.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service fee'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$servic = order === null || order === void 0 || (_order$summary1 = order.summary) === null || _order$summary1 === void 0 ? void 0 : _order$summary1.service_fee) !== null && _order$summary$servic !== void 0 ? _order$summary$servic : 0))), (order === null || order === void 0 || (_order$taxes4 = order.taxes) === null || _order$taxes4 === void 0 ? void 0 : _order$taxes4.length) > 0 && (order === null || order === void 0 || (_order$taxes5 = order.taxes) === null || _order$taxes5 === void 0 ? void 0 : _order$taxes5.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'product';
  }).map(function (tax) {
    var _tax$name, _ref3, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(tax === null || tax === void 0 || (_tax$name = tax.name) === null || _tax$name === void 0 || (_tax$name = _tax$name.toUpperCase()) === null || _tax$name === void 0 ? void 0 : _tax$name.replace(/ /g, '_'), tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 || (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 || (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref3 !== void 0 ? _ref3 : 0)));
  })), (order === null || order === void 0 || (_order$fees2 = order.fees) === null || _order$fees2 === void 0 ? void 0 : _order$fees2.length) > 0 && (order === null || order === void 0 || (_order$fees3 = order.fees) === null || _order$fees3 === void 0 || (_order$fees3 = _order$fees3.filter(function (fee) {
    return !((fee === null || fee === void 0 ? void 0 : fee.fixed) === 0 && (fee === null || fee === void 0 ? void 0 : fee.percentage) === 0);
  })) === null || _order$fees3 === void 0 ? void 0 : _order$fees3.map(function (fee) {
    var _fee$name, _ref4, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: fee.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(fee === null || fee === void 0 || (_fee$name = fee.name) === null || _fee$name === void 0 || (_fee$name = _fee$name.toUpperCase()) === null || _fee$name === void 0 ? void 0 : _fee$name.replace(/ /g, '_'), fee === null || fee === void 0 ? void 0 : fee.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed)).concat(fee.percentage > 0 ? ' + ' : ''), fee.percentage > 0 && "".concat(fee.percentage, "%"), ")", setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: fee,
          type: 'fee'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref4 = (fee === null || fee === void 0 || (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 || (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 || (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref4 !== void 0 ? _ref4 : 0)));
  })), (order === null || order === void 0 || (_order$offers4 = order.offers) === null || _order$offers4 === void 0 ? void 0 : _order$offers4.length) > 0 && (order === null || order === void 0 || (_order$offers5 = order.offers) === null || _order$offers5 === void 0 || (_order$offers5 = _order$offers5.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _order$offers5 === void 0 ? void 0 : _order$offers5.map(function (offer) {
    var _offer$name2, _offer$summary2;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t((_offer$name2 = offer.name) === null || _offer$name2 === void 0 || (_offer$name2 = _offer$name2.toUpperCase()) === null || _offer$name2 === void 0 ? void 0 : _offer$name2.replace(/ /g, '_'), offer.name), offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_3'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount)));
  })), typeof (order === null || order === void 0 || (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.delivery_price) === 'number' && !isPickup && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', (theme === null || theme === void 0 || (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DELIVERY_FEE) || 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((order === null || order === void 0 || (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.delivery_price) + getIncludedTaxes(true)))), (order === null || order === void 0 ? void 0 : order.extra_value_checkprice) && (order === null || order === void 0 ? void 0 : order.extra_value_checkprice) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('EXTRA_VALUE_CHECKPRICE', 'Extra value checkprice')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.extra_value_checkprice))), (order === null || order === void 0 || (_order$taxes6 = order.taxes) === null || _order$taxes6 === void 0 ? void 0 : _order$taxes6.length) > 0 && (order === null || order === void 0 || (_order$taxes7 = order.taxes) === null || _order$taxes7 === void 0 ? void 0 : _order$taxes7.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0 && (tax === null || tax === void 0 ? void 0 : tax.target) === 'delivery_fee';
  }).map(function (tax) {
    var _tax$name2, _ref5, _tax$summary$tax_afte3, _tax$summary6, _tax$summary7;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t(tax === null || tax === void 0 || (_tax$name2 = tax.name) === null || _tax$name2 === void 0 || (_tax$name2 = _tax$name2.toUpperCase()) === null || _tax$name2 === void 0 ? void 0 : _tax$name2.replace(/ /g, '_'), tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref5 = (_tax$summary$tax_afte3 = tax === null || tax === void 0 || (_tax$summary6 = tax.summary) === null || _tax$summary6 === void 0 ? void 0 : _tax$summary6.tax_after_discount) !== null && _tax$summary$tax_afte3 !== void 0 ? _tax$summary$tax_afte3 : tax === null || tax === void 0 || (_tax$summary7 = tax.summary) === null || _tax$summary7 === void 0 ? void 0 : _tax$summary7.tax) !== null && _ref5 !== void 0 ? _ref5 : 0)));
  })), (order === null || order === void 0 || (_order$offers6 = order.offers) === null || _order$offers6 === void 0 ? void 0 : _order$offers6.length) > 0 && (order === null || order === void 0 || (_order$offers7 = order.offers) === null || _order$offers7 === void 0 || (_order$offers7 = _order$offers7.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _order$offers7 === void 0 ? void 0 : _order$offers7.map(function (offer) {
    var _offer$name3, _offer$summary3;
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, t((_offer$name3 = offer.name) === null || _offer$name3 === void 0 || (_offer$name3 = _offer$name3.toUpperCase()) === null || _offer$name3 === void 0 ? void 0 : _offer$name3.replace(/ /g, '_'), offer.name), offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_2'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 || (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount)));
  })), ((order === null || order === void 0 || (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', (theme === null || theme === void 0 || (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.DRIVER_TIP) || 'Driver tip'), ' ', ((order === null || order === void 0 || (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 || (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 || (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.driver_tip, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$driver = order === null || order === void 0 || (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.driver_tip) !== null && _order$summary$driver !== void 0 ? _order$summary$driver : order === null || order === void 0 ? void 0 : order.totalDriverTip))), extraValueAdjustment && !!parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, pulseCouponName ? pulseCouponName === null || pulseCouponName === void 0 ? void 0 : pulseCouponName.value : t(extraValueAdjustment === null || extraValueAdjustment === void 0 || (_extraValueAdjustment = extraValueAdjustment.key) === null || _extraValueAdjustment === void 0 ? void 0 : _extraValueAdjustment.toUpperCase(), extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.key), ' '), /*#__PURE__*/_react.default.createElement("td", null, parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value) > 0 ? parsePrice(parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value)) : "- ".concat(parsePrice(parseFloat(extraValueAdjustment === null || extraValueAdjustment === void 0 ? void 0 : extraValueAdjustment.value) * -1))))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', (theme === null || theme === void 0 || (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.TOTAL) || 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$total = order === null || order === void 0 || (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total))))), (order === null || order === void 0 || (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 && !showOnlyTotals && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      fontSize: 20
    }
  }, t('PAYMENTS', 'Payments')), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      marginTop: 10
    }
  }, order === null || order === void 0 || (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.map(function (event) {
    var _walletName$event$wal, _event$wallet_event, _event$paymethod, _event$paymethod2, _event$data, _event$data2;
    return event.amount > 0 && /*#__PURE__*/_react.default.createElement("div", {
      key: event.id,
      style: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 || (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 || (_event$wallet_event = _event$wallet_event.wallet) === null || _event$wallet_event === void 0 ? void 0 : _event$wallet_event.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : t(event === null || event === void 0 || (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 || (_event$paymethod = _event$paymethod.name.toUpperCase()) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.replace(/ /g, '_'), event === null || event === void 0 || (_event$paymethod2 = event.paymethod) === null || _event$paymethod2 === void 0 ? void 0 : _event$paymethod2.name)), (event === null || event === void 0 || (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.charge_id) && /*#__PURE__*/_react.default.createElement("span", null, "".concat(t('CODE', 'Code'), ": ").concat(event === null || event === void 0 || (_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.charge_id))), /*#__PURE__*/_react.default.createElement("span", null, "-", parsePrice(event.amount, {
      isTruncable: true
    })));
  }))));
};