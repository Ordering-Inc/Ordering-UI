"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormActions = exports.ErrorMessage = exports.FormRow = exports.FormStripe = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  button {\n    width: 48%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 10px 10px 0px 0px    \n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  color: #D81212;\n  margin: 10px 0px 0px 10px;\n  ", "  \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  input {\n    display: block;\n    border: none;\n    font-size: 18px;\n    margin: 10px 0 20px 0;\n    max-width: 100%;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n    color: #424770;\n    letter-spacing: 0.025em;\n    width: 500px;\n  }\n\n  input::placeholder {\n    color: #aab7c4;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n\n  .StripeElement,\n  .StripeElementIdeal {\n    display: block;\n    margin: 0 10px;\n    padding: 10px 14px;\n    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,\n      rgba(0, 0, 0, 0.0196078) 0px 1px 0px;\n    border-radius: 4px;\n    background: white;\n  }\n\n  .StripeElement--focus,\n  .StripeElementIdeal--focus {\n    box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,\n      rgba(0, 0, 0, 0.0784314) 0px 1px 3px;\n    -webkit-transition: all 150ms ease;\n    transition: all 150ms ease;\n  }\n\n  .StripeElement.loading {\n    height: 41.6px;\n    opacity: 0.6;\n  }\n\n  .StripeElementIdeal {\n    padding: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormStripe = _styledComponents.default.form(_templateObject());

exports.FormStripe = FormStripe;

var FormRow = _styledComponents.default.div(_templateObject2());

exports.FormRow = FormRow;

var ErrorMessage = _styledComponents.default.div(_templateObject3(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4());
});

exports.ErrorMessage = ErrorMessage;

var FormActions = _styledComponents.default.div(_templateObject5());

exports.FormActions = FormActions;