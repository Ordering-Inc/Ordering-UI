"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = exports.FormGroup = exports.FormRedirect = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #D81212;\n  margin: 10px 0 0 0;\n  font-weight: bold;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  label {\n    margin-bottom: 5px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n\n  button {\n    width: 100%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    margin-top: 10px;\n\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n\n  .StripeElement,\n  .StripeElementIdeal {\n    display: block;\n    margin: 0 10px;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n  }\n\n  .StripeElement--focus,\n  .StripeElementIdeal--focus {\n    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,\n      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;\n    -webkit-transition: all 150ms ease;\n    transition: all 150ms ease;\n  }\n\n  .StripeElement.loading {\n    height: 41.6px;\n    opacity: 0.6;\n  }\n\n  .StripeElementIdeal {\n    padding: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormRedirect = _styledComponents.default.form(_templateObject());

exports.FormRedirect = FormRedirect;

var FormGroup = _styledComponents.default.div(_templateObject2());

exports.FormGroup = FormGroup;

var ErrorMessage = _styledComponents.default.p(_templateObject3());

exports.ErrorMessage = ErrorMessage;