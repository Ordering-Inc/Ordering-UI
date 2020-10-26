"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutAction = exports.CouponContainer = exports.OrderBill = exports.CartContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  button {\n    padding: 10px 30px;\n    color: #FFF;\n    width: 80%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 10px;\n  background-color: #FFF;\n  table {\n    width: 100%;\n    font-size: 18px;\n    font-weight: 300;\n    tr td:nth-child(2) {\n      font-weight: 500;\n      text-align: right;\n    }\n  }\n  table.total {\n    border-top: 1px solid #EAEAEA;\n    padding-top: 10px;\n    tr {\n      td:nth-child(1) {\n        font-weight: bold;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: #D81212;\n      }\n    }\n  }\n\n  @media (max-width: 410px) {\n    table {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #F0F0F0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CartContainer = _styledComponents.default.div(_templateObject());

exports.CartContainer = CartContainer;

var OrderBill = _styledComponents.default.div(_templateObject2());

exports.OrderBill = OrderBill;

var CouponContainer = _styledComponents.default.div(_templateObject3());

exports.CouponContainer = CouponContainer;

var CheckoutAction = _styledComponents.default.div(_templateObject4());

exports.CheckoutAction = CheckoutAction;