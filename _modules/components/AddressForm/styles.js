"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperMap = exports.AddressTagSection = exports.WrapAddressInput = exports.AddressWrap = exports.FormControl = exports.FormActions = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 250px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n\n    img {\n      width: 22px;\n      height: 22px;\n    }\n\n    span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 22px;\n    }\n  }\n\n  button.active {\n    border: 1px solid #D81212;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  i {\n    padding: 0px 10px;\n  }\n\n  svg {\n    position: absolute;\n    color: #9A9A9A;\n    top: 21px;\n    left: 10px;\n    font-size: 20px;\n  }\n\n  input {\n    background-position: left 10px center !important;\n    background-repeat: no-repeat !important;\n    background-size: 13px !important;\n    padding: 7px 15px 7px 30px !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  input {\n    box-sizing: border-box;\n    margin: 10px 0px;\n    height: 43px;\n    width: 100%;\n    &.internal_number,\n    &.zipcode {\n      width: 48%;\n    }\n\n    @media (max-width: 620px) {\n      &.internal_number,\n      &.zipcode  {\n        width: 100%;\n      }\n    }\n  }\n\n  textarea {\n    width: 100%;\n    font-size: 16px;\n    font-weight: 300;\n    padding: 10px;\n    border: 1px solid #CCC;\n    outline: none;\n    color: #555;\n    resize: none;\n    border-radius: 16px;\n\n    &:focus {\n      border-color: #555;\n    }\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: #FFF;\n    color: #BBB;\n    border: 1px solid #BBB;\n    border-radius: 30px;\n    font-size: 16px;\n    padding: 7px 15px;\n    outline: none;\n  }\n\n  .google-control {\n    button:nth-child(2) {\n      position: absolute;\n      right: 0;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: #FFF;\n      padding: 0;\n      width: 43px;\n      height: 43px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      border-style: solid;\n      border-width: 1px;\n      border-color: ", ";\n      outline: none;\n\n      svg {\n        color: ", ";\n        font-size: 20px;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    width: 45%;\n    height: 45px;\n  }\n  @media (max-width: 480px) {\n    button {\n      width: 49%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormActions = _styledComponents.default.div(_templateObject());

exports.FormActions = FormActions;

var FormControl = _styledComponents.default.form(_templateObject2(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.FormControl = FormControl;

var AddressWrap = _styledComponents.default.div(_templateObject3());

exports.AddressWrap = AddressWrap;

var WrapAddressInput = _styledComponents.default.div(_templateObject4());

exports.WrapAddressInput = WrapAddressInput;

var AddressTagSection = _styledComponents.default.div(_templateObject5());

exports.AddressTagSection = AddressTagSection;

var WrapperMap = _styledComponents.default.div(_templateObject6());

exports.WrapperMap = WrapperMap;