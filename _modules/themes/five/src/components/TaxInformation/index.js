"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaxInformation = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _SingleProductCard = require("../SingleProductCard");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TaxInformation = function TaxInformation(props) {
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
  var hideProductsSectionData = dataHideArray.includes(data.type);

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

exports.TaxInformation = TaxInformation;