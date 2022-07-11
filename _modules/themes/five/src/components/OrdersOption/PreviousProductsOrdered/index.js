"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousProductsOrdered = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _AutoScroll = require("../../AutoScroll");

var _SingleProductCard = require("../../SingleProductCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviousProductsOrdered = function PreviousProductsOrdered(props) {
  var products = props.products;
  return /*#__PURE__*/_react.default.createElement(_styles.ProductsListContainer, {
    isLoading: (products === null || products === void 0 ? void 0 : products.length) < 1
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, products === null || products === void 0 ? void 0 : products.map(function (product) {
    var _product$business;

    return /*#__PURE__*/_react.default.createElement(_SingleProductCard.SingleProductCard, {
      key: product === null || product === void 0 ? void 0 : product.id,
      isSoldOut: product.inventoried && !product.quantity,
      product: product,
      businessId: product === null || product === void 0 ? void 0 : (_product$business = product.business) === null || _product$business === void 0 ? void 0 : _product$business.id
    });
  }))));
};

exports.PreviousProductsOrdered = PreviousProductsOrdered;