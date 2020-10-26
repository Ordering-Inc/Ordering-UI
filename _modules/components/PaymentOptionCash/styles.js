"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorText = exports.WrapperInput = exports.FormCash = exports.PaymentCashContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px 0px 0px;\n  color: #D81212;\n  font-size: 20px;\n  font-weight: bold;\n\n  @media (max-width: 380px) {\n    font-size: 14px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  @media (max-width: 650px) {\n    flex-direction: column;\n    input {\n      margin-top: 10px;\n      width: 100%;\n      box-sizing: border-box;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  label {\n    font-size: 18px;\n    margin-right: 20px;\n  }\n\n  @media (max-width: 380px) {\n    label {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px 0px 0px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PaymentCashContainer = _styledComponents.default.div(_templateObject());

exports.PaymentCashContainer = PaymentCashContainer;

var FormCash = _styledComponents.default.form(_templateObject2());

exports.FormCash = FormCash;

var WrapperInput = _styledComponents.default.div(_templateObject3());

exports.WrapperInput = WrapperInput;

var ErrorText = _styledComponents.default.p(_templateObject4());

exports.ErrorText = ErrorText;