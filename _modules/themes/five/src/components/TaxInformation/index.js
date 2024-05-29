"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaxInformation = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _SingleProductCard = require("../SingleProductCard");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TaxInformation = exports.TaxInformation = function TaxInformation(props) {
  var data = props.data,
    products = props.products,
    type = props.type;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var includedOnPriceString = (data === null || data === void 0 ? void 0 : data.type) === 1 ? "(".concat(t('INCLUDED_ON_PRICE', 'Included on price'), ")") : "(".concat(t('NOT_INCLUDED_ON_PRICE', 'Not included on price'), ")");
  var offersHideArray = ['offer_target_2', 'offer_target_3'];
  var hideProductsSectionOffers = offersHideArray.includes(type);
  var dataHideArray = ['platform', 'business'];
  var hideProductsSectionData = dataHideArray.includes(data.type) || (data === null || data === void 0 ? void 0 : data.target) === 'delivery_fee';
  var getFilterValidation = function getFilterValidation(product) {
    var _product$tax, _product$tax2, _product$tax3, _product$fee, _product$fee2, _product$fee3, _data$discounts;
    return type === 'tax' ? (_product$tax = product.tax) !== null && _product$tax !== void 0 && _product$tax.id ? ((_product$tax2 = product.tax) === null || _product$tax2 === void 0 ? void 0 : _product$tax2.id) === (data === null || data === void 0 ? void 0 : data.id) : ((_product$tax3 = product.tax) === null || _product$tax3 === void 0 ? void 0 : _product$tax3.id) === null && (data === null || data === void 0 ? void 0 : data.id) === null : type === 'fee' ? (_product$fee = product.fee) !== null && _product$fee !== void 0 && _product$fee.id ? ((_product$fee2 = product.fee) === null || _product$fee2 === void 0 ? void 0 : _product$fee2.id) === (data === null || data === void 0 ? void 0 : data.id) : ((_product$fee3 = product.fee) === null || _product$fee3 === void 0 ? void 0 : _product$fee3.id) === null && (data === null || data === void 0 ? void 0 : data.id) === null : Object.keys((_data$discounts = data === null || data === void 0 ? void 0 : data.discounts) !== null && _data$discounts !== void 0 ? _data$discounts : {}).find(function (code) {
      return code.includes(product === null || product === void 0 ? void 0 : product.code);
    });
  };
  var getTypeString = function getTypeString() {
    return type === 'offer_target_1' ? t('PRODUCT_DISCOUNT', 'Product discount') : type === 'tax' ? t('TAX', 'Tax') : t('Fee', 'Fee');
  };
  return /*#__PURE__*/_react.default.createElement(_styles.TaxInformationContainer, null, data !== null && data !== void 0 && data.description ? /*#__PURE__*/_react.default.createElement("h2", null, t('DESCRIPTION', 'Description'), ": ", data === null || data === void 0 ? void 0 : data.description, " ", (data === null || data === void 0 ? void 0 : data.type) && !type.includes('offer') && includedOnPriceString) : /*#__PURE__*/_react.default.createElement("h2", null, t('WITHOUT_DESCRIPTION', 'Without description')), !hideProductsSectionOffers && !hideProductsSectionData && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", null, t('OTHER_PRODUCTS_WITH_THIS', 'Other products with this'), " ", getTypeString(), ":"), /*#__PURE__*/_react.default.createElement(_styles.ProductContainer, null, products.filter(function (product) {
    return getFilterValidation(product);
  }).map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: product.id,
      product: product,
      useKioskApp: props.useKioskApp,
      isModal: true
    });
  }))));
};