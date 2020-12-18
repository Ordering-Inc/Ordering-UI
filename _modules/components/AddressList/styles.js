"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormActions = exports.WrappNotAddresses = exports.AddressItemActions = exports.AddressItem = exports.AddressListUl = exports.AddressListContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: 25px;\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 0;\n        margin-right: 10px;\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 45px;\n    flex: 1;\n\n    &:last-child#second-btn {\n      margin-left: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 769px) {\n    button {\n      &:last-child#second-btn {\n        margin-left: 25px;\n        ", "\n      }\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  height: 270px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  margin: 5px auto 0px;\n\n  img {\n    width: 200px;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height)\n  }\n  h1 {\n    margin: 5px 0px 0px;\n    opacity: 0.5;\n    text-align: center;\n    font-size: 24px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  a {\n    display: flex;\n    cursor: pointer;\n    margin: 0px 5px;\n    font-size: 30px;\n\n    &:nth-child(1) {\n      svg {\n        color: #F2BB40;\n      }\n    }\n\n    &:nth-child(2) {\n      svg {\n        color: #D81212;\n      }\n    }\n  }\n  a.disabled {\n    svg {\n      color: #CCC;\n    }\n    pointer-events: none;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 5px;\n      margin-left: 0;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0px;\n  border-top: 1px solid #00000029;\n\n  label {\n    font-size: 15px;\n    margin-left: 5px;\n    font-weight: bold;\n    ", "\n  }\n\n  .wrapAddress {\n    display: flex;\n    align-items: center;\n\n    span {\n      font-size: 14px;\n      display: flex;\n      cursor: pointer;\n      margin-right: 10px;\n      ", "\n      &.radio {\n        color: ", ";\n        font-size: 24px;\n      }\n\n      @media (min-width: 768px) {\n        font-size: 16px;\n      }\n    }\n  }\n\n  .address {\n    display: flex;\n    flex-direction: column;\n    line-height: 1.5;\n\n    span:last-child {\n      opacity: 0.5;\n      font-size: 12px;\n    }\n  }\n\n  &:last-child {\n    border-bottom: 1px solid #00000029;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  margin-top: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 0px 10px;\n\n  ", "\n\n  button.add {\n    height: 50px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddressListContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading && (0, _styledComponents.css)(_templateObject2());
});

exports.AddressListContainer = AddressListContainer;

var AddressListUl = _styledComponents.default.ul(_templateObject3());

exports.AddressListUl = AddressListUl;

var AddressItem = _styledComponents.default.li(_templateObject4(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6());
}, function (props) {
  return props.theme.colors.primary;
});

exports.AddressItem = AddressItem;

var AddressItemActions = _styledComponents.default.div(_templateObject7());

exports.AddressItemActions = AddressItemActions;

var WrappNotAddresses = _styledComponents.default.div(_templateObject8());

exports.WrappNotAddresses = WrappNotAddresses;

var FormActions = _styledComponents.default.div(_templateObject9(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10());
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11());
});

exports.FormActions = FormActions;