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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrderBillSection = function OrderBillSection(props) {
  var _theme$defaultLanguag, _order$summary$subtot, _order$summary2, _ref, _order$summary3, _order$offers, _theme$defaultLanguag2, _theme$defaultLanguag3, _order$summary$discou, _order$summary4, _order$offers2, _order$offers3, _order$offers3$filter, _order$summary5, _order$summary6, _order$summary7, _ref2, _order$summary8, _order$summary$subtot2, _order$summary9, _order$taxes3, _order$summary$tax2, _order$summary10, _order$fees, _order$summary$servic, _order$summary11, _order$taxes4, _order$taxes5, _order$fees2, _order$fees3, _order$fees3$filter, _order$offers4, _order$offers5, _order$offers5$filter, _order$summary12, _theme$defaultLanguag4, _order$summary13, _order$offers6, _order$offers7, _order$offers7$filter, _order$summary14, _theme$defaultLanguag5, _order$summary15, _configs$driver_tip_t, _configs$driver_tip_u, _order$summary$driver, _order$summary16, _theme$defaultLanguag6, _order$summary$total, _order$summary17, _order$payment_events, _order$payment_events2;

  var order = props.order,
      setOpenTaxModal = props.setOpenTaxModal,
      pfchangs = props.pfchangs;

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

  var walletName = {
    cash: {
      name: t('PAY_WITH_CASH_WALLET', 'Pay with Cash Wallet')
    },
    credit_point: {
      name: t('PAY_WITH_CREDITS_POINTS_WALLET', 'Pay with Credit Points Wallet')
    }
  };

  var getIncludedTaxes = function getIncludedTaxes() {
    var _order$taxes;

    if ((order === null || order === void 0 ? void 0 : (_order$taxes = order.taxes) === null || _order$taxes === void 0 ? void 0 : _order$taxes.length) === 0) {
      var _order$summary$tax, _order$summary;

      return order.tax_type === 1 ? (_order$summary$tax = order === null || order === void 0 ? void 0 : (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.tax) !== null && _order$summary$tax !== void 0 ? _order$summary$tax : 0 : 0;
    } else {
      return order === null || order === void 0 ? void 0 : order.taxes.reduce(function (taxIncluded, tax) {
        var _tax$summary;

        return taxIncluded + (tax.type === 1 ? (_tax$summary = tax.summary) === null || _tax$summary === void 0 ? void 0 : _tax$summary.tax : 0);
      }, 0);
    }
  };

  var getIncludedTaxesDiscounts = function getIncludedTaxesDiscounts() {
    var _order$taxes2, _order$taxes2$filter;

    return order === null || order === void 0 ? void 0 : (_order$taxes2 = order.taxes) === null || _order$taxes2 === void 0 ? void 0 : (_order$taxes2$filter = _order$taxes2.filter(function (tax) {
      return (tax === null || tax === void 0 ? void 0 : tax.type) === 1;
    })) === null || _order$taxes2$filter === void 0 ? void 0 : _order$taxes2$filter.reduce(function (carry, tax) {
      var _tax$summary$tax_afte, _tax$summary2, _tax$summary3;

      return carry + ((_tax$summary$tax_afte = tax === null || tax === void 0 ? void 0 : (_tax$summary2 = tax.summary) === null || _tax$summary2 === void 0 ? void 0 : _tax$summary2.tax_after_discount) !== null && _tax$summary$tax_afte !== void 0 ? _tax$summary$tax_afte : tax === null || tax === void 0 ? void 0 : (_tax$summary3 = tax.summary) === null || _tax$summary3 === void 0 ? void 0 : _tax$summary3.tax);
    }, 0);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.OrderBill, null, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag = theme.defaultLanguages) === null || _theme$defaultLanguag === void 0 ? void 0 : _theme$defaultLanguag.SUBTOTAL) || 'Subtotal')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(((_order$summary$subtot = order === null || order === void 0 ? void 0 : (_order$summary2 = order.summary) === null || _order$summary2 === void 0 ? void 0 : _order$summary2.subtotal) !== null && _order$summary$subtot !== void 0 ? _order$summary$subtot : order === null || order === void 0 ? void 0 : order.subtotal) + getIncludedTaxes()))), ((_ref = (order === null || order === void 0 ? void 0 : (_order$summary3 = order.summary) === null || _order$summary3 === void 0 ? void 0 : _order$summary3.discount) > 0) !== null && _ref !== void 0 ? _ref : (order === null || order === void 0 ? void 0 : order.discount) > 0) && (order === null || order === void 0 ? void 0 : (_order$offers = order.offers) === null || _order$offers === void 0 ? void 0 : _order$offers.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, (order === null || order === void 0 ? void 0 : order.offer_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag2 = theme.defaultLanguages) === null || _theme$defaultLanguag2 === void 0 ? void 0 : _theme$defaultLanguag2.DISCOUNT) || 'Discount'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.offer_rate, parsePrice), "%)"))) : /*#__PURE__*/_react.default.createElement("td", null, t('DISCOUNT', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag3 = theme.defaultLanguages) === null || _theme$defaultLanguag3 === void 0 ? void 0 : _theme$defaultLanguag3.DISCOUNT) || 'Discount')), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice((_order$summary$discou = order === null || order === void 0 ? void 0 : (_order$summary4 = order.summary) === null || _order$summary4 === void 0 ? void 0 : _order$summary4.discount) !== null && _order$summary$discou !== void 0 ? _order$summary$discou : order === null || order === void 0 ? void 0 : order.discount))), (order === null || order === void 0 ? void 0 : (_order$offers2 = order.offers) === null || _order$offers2 === void 0 ? void 0 : _order$offers2.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$offers3 = order.offers) === null || _order$offers3 === void 0 ? void 0 : (_order$offers3$filter = _order$offers3.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 1;
  })) === null || _order$offers3$filter === void 0 ? void 0 : _order$offers3$filter.map(function (offer) {
    var _offer$summary;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_1'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: pfchangs ? theme.colors.white : theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary = offer.summary) === null || _offer$summary === void 0 ? void 0 : _offer$summary.discount)));
  })), (order === null || order === void 0 ? void 0 : (_order$summary5 = order.summary) === null || _order$summary5 === void 0 ? void 0 : _order$summary5.subtotal_with_discount) > 0 && (order === null || order === void 0 ? void 0 : (_order$summary6 = order.summary) === null || _order$summary6 === void 0 ? void 0 : _order$summary6.discount) > 0 && (order === null || order === void 0 ? void 0 : (_order$summary7 = order.summary) === null || _order$summary7 === void 0 ? void 0 : _order$summary7.total) >= 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SUBTOTAL_WITH_DISCOUNT', 'Subtotal with discount')), (order === null || order === void 0 ? void 0 : order.tax_type) === 1 ? /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref2 = (order === null || order === void 0 ? void 0 : (_order$summary8 = order.summary) === null || _order$summary8 === void 0 ? void 0 : _order$summary8.subtotal_with_discount) + getIncludedTaxesDiscounts()) !== null && _ref2 !== void 0 ? _ref2 : 0)) : /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$subtot2 = order === null || order === void 0 ? void 0 : (_order$summary9 = order.summary) === null || _order$summary9 === void 0 ? void 0 : _order$summary9.subtotal_with_discount) !== null && _order$summary$subtot2 !== void 0 ? _order$summary$subtot2 : 0))), (order === null || order === void 0 ? void 0 : (_order$taxes3 = order.taxes) === null || _order$taxes3 === void 0 ? void 0 : _order$taxes3.length) === 0 && (order === null || order === void 0 ? void 0 : order.tax_type) === 2 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TAX', 'Tax'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.tax, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$tax2 = order === null || order === void 0 ? void 0 : (_order$summary10 = order.summary) === null || _order$summary10 === void 0 ? void 0 : _order$summary10.tax) !== null && _order$summary$tax2 !== void 0 ? _order$summary$tax2 : 0))), (order === null || order === void 0 ? void 0 : (_order$fees = order.fees) === null || _order$fees === void 0 ? void 0 : _order$fees.length) === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('SERVICE_FEE', 'Service fee'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.service_fee, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$servic = order === null || order === void 0 ? void 0 : (_order$summary11 = order.summary) === null || _order$summary11 === void 0 ? void 0 : _order$summary11.service_fee) !== null && _order$summary$servic !== void 0 ? _order$summary$servic : 0))), (order === null || order === void 0 ? void 0 : (_order$taxes4 = order.taxes) === null || _order$taxes4 === void 0 ? void 0 : _order$taxes4.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$taxes5 = order.taxes) === null || _order$taxes5 === void 0 ? void 0 : _order$taxes5.filter(function (tax) {
    return (tax === null || tax === void 0 ? void 0 : tax.type) === 2 && (tax === null || tax === void 0 ? void 0 : tax.rate) !== 0;
  }).map(function (tax) {
    var _ref3, _tax$summary$tax_afte2, _tax$summary4, _tax$summary5;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: tax === null || tax === void 0 ? void 0 : tax.id
    }, /*#__PURE__*/_react.default.createElement("td", null, (tax === null || tax === void 0 ? void 0 : tax.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(tax === null || tax === void 0 ? void 0 : tax.rate, parseNumber), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: tax,
          type: 'tax'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: pfchangs ? theme.colors.white : theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref3 = (_tax$summary$tax_afte2 = tax === null || tax === void 0 ? void 0 : (_tax$summary4 = tax.summary) === null || _tax$summary4 === void 0 ? void 0 : _tax$summary4.tax_after_discount) !== null && _tax$summary$tax_afte2 !== void 0 ? _tax$summary$tax_afte2 : tax === null || tax === void 0 ? void 0 : (_tax$summary5 = tax.summary) === null || _tax$summary5 === void 0 ? void 0 : _tax$summary5.tax) !== null && _ref3 !== void 0 ? _ref3 : 0)));
  })), (order === null || order === void 0 ? void 0 : (_order$fees2 = order.fees) === null || _order$fees2 === void 0 ? void 0 : _order$fees2.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$fees3 = order.fees) === null || _order$fees3 === void 0 ? void 0 : (_order$fees3$filter = _order$fees3.filter(function (fee) {
    return !((fee === null || fee === void 0 ? void 0 : fee.fixed) === 0 && (fee === null || fee === void 0 ? void 0 : fee.percentage) === 0);
  })) === null || _order$fees3$filter === void 0 ? void 0 : _order$fees3$filter.map(function (fee) {
    var _ref4, _fee$summary, _fee$summary$percenta, _fee$summary2, _fee$summary3;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: fee.id
    }, /*#__PURE__*/_react.default.createElement("td", null, (fee === null || fee === void 0 ? void 0 : fee.name) || t('INHERIT_FROM_BUSINESS', 'Inherit from business'), "(", (fee === null || fee === void 0 ? void 0 : fee.fixed) > 0 && "".concat(parsePrice(fee === null || fee === void 0 ? void 0 : fee.fixed)).concat(fee.percentage > 0 ? ' + ' : ''), fee.percentage > 0 && "".concat(fee.percentage, "%"), ")", setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: fee,
          type: 'fee'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: pfchangs ? theme.colors.white : theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_ref4 = (fee === null || fee === void 0 ? void 0 : (_fee$summary = fee.summary) === null || _fee$summary === void 0 ? void 0 : _fee$summary.fixed) + ((_fee$summary$percenta = fee === null || fee === void 0 ? void 0 : (_fee$summary2 = fee.summary) === null || _fee$summary2 === void 0 ? void 0 : _fee$summary2.percentage_after_discount) !== null && _fee$summary$percenta !== void 0 ? _fee$summary$percenta : fee === null || fee === void 0 ? void 0 : (_fee$summary3 = fee.summary) === null || _fee$summary3 === void 0 ? void 0 : _fee$summary3.percentage)) !== null && _ref4 !== void 0 ? _ref4 : 0)));
  })), (order === null || order === void 0 ? void 0 : (_order$offers4 = order.offers) === null || _order$offers4 === void 0 ? void 0 : _order$offers4.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$offers5 = order.offers) === null || _order$offers5 === void 0 ? void 0 : (_order$offers5$filter = _order$offers5.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 3;
  })) === null || _order$offers5$filter === void 0 ? void 0 : _order$offers5$filter.map(function (offer) {
    var _offer$summary2;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_3'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: pfchangs ? theme.colors.white : theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary2 = offer.summary) === null || _offer$summary2 === void 0 ? void 0 : _offer$summary2.discount)));
  })), (order === null || order === void 0 ? void 0 : (_order$summary12 = order.summary) === null || _order$summary12 === void 0 ? void 0 : _order$summary12.delivery_price) > 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DELIVERY_FEE', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag4 = theme.defaultLanguages) === null || _theme$defaultLanguag4 === void 0 ? void 0 : _theme$defaultLanguag4.DELIVERY_FEE) || 'Delivery Fee')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : (_order$summary13 = order.summary) === null || _order$summary13 === void 0 ? void 0 : _order$summary13.delivery_price))), (order === null || order === void 0 ? void 0 : order.va_por_mi_cuenta) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://d2gjwc6pypyhyf.cloudfront.net/va-por-mi-cuenta.svg"
  })), /*#__PURE__*/_react.default.createElement("td", null, parsePrice(order === null || order === void 0 ? void 0 : order.va_por_mi_cuenta.amount))), (order === null || order === void 0 ? void 0 : (_order$offers6 = order.offers) === null || _order$offers6 === void 0 ? void 0 : _order$offers6.length) > 0 && (order === null || order === void 0 ? void 0 : (_order$offers7 = order.offers) === null || _order$offers7 === void 0 ? void 0 : (_order$offers7$filter = _order$offers7.filter(function (offer) {
    return (offer === null || offer === void 0 ? void 0 : offer.target) === 2;
  })) === null || _order$offers7$filter === void 0 ? void 0 : _order$offers7$filter.map(function (offer) {
    var _offer$summary3;

    return /*#__PURE__*/_react.default.createElement("tr", {
      key: offer.id
    }, /*#__PURE__*/_react.default.createElement("td", null, offer.name, offer.rate_type === 1 && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(offer === null || offer === void 0 ? void 0 : offer.rate, parsePrice), "%)")), setOpenTaxModal && /*#__PURE__*/_react.default.createElement(_styles.Exclamation, {
      onClick: function onClick() {
        return setOpenTaxModal({
          open: true,
          data: offer,
          type: 'offer_target_2'
        });
      }
    }, /*#__PURE__*/_react.default.createElement(_BsInfoCircle.default, {
      size: "20",
      color: pfchangs ? theme.colors.white : theme.colors.primary
    }))), /*#__PURE__*/_react.default.createElement("td", null, "- ", parsePrice(offer === null || offer === void 0 ? void 0 : (_offer$summary3 = offer.summary) === null || _offer$summary3 === void 0 ? void 0 : _offer$summary3.discount)));
  })), ((order === null || order === void 0 ? void 0 : (_order$summary14 = order.summary) === null || _order$summary14 === void 0 ? void 0 : _order$summary14.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('DRIVER_TIP', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag5 = theme.defaultLanguages) === null || _theme$defaultLanguag5 === void 0 ? void 0 : _theme$defaultLanguag5.DRIVER_TIP) || 'Driver tip'), ' ', ((order === null || order === void 0 ? void 0 : (_order$summary15 = order.summary) === null || _order$summary15 === void 0 ? void 0 : _order$summary15.driver_tip) > 0 || (order === null || order === void 0 ? void 0 : order.driver_tip) > 0) && parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_t = configs.driver_tip_type) === null || _configs$driver_tip_t === void 0 ? void 0 : _configs$driver_tip_t.value, 10) === 2 && !parseInt(configs === null || configs === void 0 ? void 0 : (_configs$driver_tip_u = configs.driver_tip_use_custom) === null || _configs$driver_tip_u === void 0 ? void 0 : _configs$driver_tip_u.value, 10) && /*#__PURE__*/_react.default.createElement("span", null, "(".concat((0, _utils.verifyDecimals)(order === null || order === void 0 ? void 0 : order.driver_tip, parseNumber), "%)"))), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$driver = order === null || order === void 0 ? void 0 : (_order$summary16 = order.summary) === null || _order$summary16 === void 0 ? void 0 : _order$summary16.driver_tip) !== null && _order$summary$driver !== void 0 ? _order$summary$driver : order === null || order === void 0 ? void 0 : order.totalDriverTip))))), /*#__PURE__*/_react.default.createElement("table", {
    className: "total"
  }, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, t('TOTAL', (theme === null || theme === void 0 ? void 0 : (_theme$defaultLanguag6 = theme.defaultLanguages) === null || _theme$defaultLanguag6 === void 0 ? void 0 : _theme$defaultLanguag6.TOTAL) || 'Total')), /*#__PURE__*/_react.default.createElement("td", null, parsePrice((_order$summary$total = order === null || order === void 0 ? void 0 : (_order$summary17 = order.summary) === null || _order$summary17 === void 0 ? void 0 : _order$summary17.total) !== null && _order$summary$total !== void 0 ? _order$summary$total : order === null || order === void 0 ? void 0 : order.total))))), (order === null || order === void 0 ? void 0 : (_order$payment_events = order.payment_events) === null || _order$payment_events === void 0 ? void 0 : _order$payment_events.length) > 0 && /*#__PURE__*/_react.default.createElement("div", {
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
  }, order === null || order === void 0 ? void 0 : (_order$payment_events2 = order.payment_events) === null || _order$payment_events2 === void 0 ? void 0 : _order$payment_events2.map(function (event) {
    var _walletName$event$wal, _event$wallet_event, _event$wallet_event$w, _event$paymethod, _event$paymethod2, _event$data, _event$data2;

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
    }, /*#__PURE__*/_react.default.createElement("span", null, event !== null && event !== void 0 && event.wallet_event ? (_walletName$event$wal = walletName[event === null || event === void 0 ? void 0 : (_event$wallet_event = event.wallet_event) === null || _event$wallet_event === void 0 ? void 0 : (_event$wallet_event$w = _event$wallet_event.wallet) === null || _event$wallet_event$w === void 0 ? void 0 : _event$wallet_event$w.type]) === null || _walletName$event$wal === void 0 ? void 0 : _walletName$event$wal.name : t(event === null || event === void 0 ? void 0 : (_event$paymethod = event.paymethod) === null || _event$paymethod === void 0 ? void 0 : _event$paymethod.gateway.toUpperCase(), event === null || event === void 0 ? void 0 : (_event$paymethod2 = event.paymethod) === null || _event$paymethod2 === void 0 ? void 0 : _event$paymethod2.name)), (event === null || event === void 0 ? void 0 : (_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.charge_id) && /*#__PURE__*/_react.default.createElement("span", null, "".concat(t('CODE', 'Code'), ": ").concat(event === null || event === void 0 ? void 0 : (_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.charge_id))), /*#__PURE__*/_react.default.createElement("span", null, "-", parsePrice(event.amount, {
      isTruncable: true
    })));
  }))));
};

exports.OrderBillSection = OrderBillSection;