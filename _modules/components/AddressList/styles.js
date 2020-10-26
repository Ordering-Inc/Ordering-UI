"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappNotAddresses = exports.AddressItemActions = exports.AddressItem = exports.AddressListUl = exports.AddressListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 5px auto 0px;\n\n  img {\n    width: 200px;\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  a {\n    display: flex;\n    cursor: pointer;\n    margin: 0px 5px;\n    font-size: 30px;\n\n    &:nth-child(1) {\n      svg {\n        color: #F2BB40;\n      }\n    }\n\n    &:nth-child(2) {\n      svg {\n        color: #D81212;\n      }\n    }\n  }\n  a.disabled {\n    svg {\n      color: #CCC;\n    }\n    pointer-events: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0px;\n  border-top: 1px solid #00000029;\n\n  label {\n    font-size: 15px;\n    margin-left: 5px;\n    font-weight: bold;\n  }\n\n  .wrapAddress {\n    display: flex;\n    align-items: center;\n\n    span {\n      display: flex;\n      cursor: pointer;\n      margin-right: 10px;\n      &.radio {\n        color: ", ";\n        font-size: 24px;\n      }\n\n      @media (max-width: 380px) {\n        font-size: 14px;\n      }\n    }\n  }\n\n  .address {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n\n    span:last-child {\n      opacity: 0.5;\n      font-size: 12px;\n    }\n  }\n\n  &:last-child {\n    border-bottom: 1px solid #00000029;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  margin-top: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n\n  button.add {\n    height: 50px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddressListContainer = _styledComponents.default.div(_templateObject());

exports.AddressListContainer = AddressListContainer;

var AddressListUl = _styledComponents.default.ul(_templateObject2());

exports.AddressListUl = AddressListUl;

var AddressItem = _styledComponents.default.li(_templateObject3(), function (props) {
  return props.theme.colors.primary;
});

exports.AddressItem = AddressItem;

var AddressItemActions = _styledComponents.default.div(_templateObject4());

exports.AddressItemActions = AddressItemActions;

var WrappNotAddresses = _styledComponents.default.div(_templateObject5());

exports.WrappNotAddresses = WrappNotAddresses;