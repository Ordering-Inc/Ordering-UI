"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardItemContent = exports.PayCardSelected = exports.PayCard = exports.PaymentMethodsList = exports.PaymentMethodsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-weight: bold;\n\n  .checks svg {\n    color: ", ";\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 30px 0px 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(15% - 12px);\n  height: 60px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  text-align: center;\n\n  @media (max-width: 840px) {\n    width: calc(20% - 12px);\n  }\n\n  @media (max-width: 640px) {\n    width: calc(25% - 12px);\n  }\n\n  @media (max-width: 512px) {\n    width: calc(33% - 12px);\n  }\n\n  @media (max-width: 350px) {\n    width: calc(50% - 12px);\n  }\n\n  svg {\n    font-size: 30px;\n  }\n\n  p {\n    margin: 0px;\n    font-size: 12px;\n  }\n\n  &.active {\n    border: 1px solid ", ";\n  }\n\n  &:not(.active) {\n    border: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n\n  @media (max-width: 840px) {\n    justify-content: flex-start;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaymentMethodsContainer = _styledComponents.default.div(_templateObject());

exports.PaymentMethodsContainer = PaymentMethodsContainer;

var PaymentMethodsList = _styledComponents.default.div(_templateObject2());

exports.PaymentMethodsList = PaymentMethodsList;

var PayCard = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? '0' : '1px solid #EAEAEA';
});

exports.PayCard = PayCard;

var PayCardSelected = _styledComponents.default.div(_templateObject4());

exports.PayCardSelected = PayCardSelected;

var CardItemContent = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.theme.colors.primary;
});

exports.CardItemContent = CardItemContent;