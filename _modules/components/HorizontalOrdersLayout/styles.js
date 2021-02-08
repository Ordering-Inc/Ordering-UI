"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reorder = exports.Map = exports.Card = exports.Logo = exports.Price = exports.Content = exports.OpenOrder = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  button{\n    line-height: 0;\n    height: 30px;\n    font-size: 14px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  min-height: ", ";\n  img{\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border-radius: ", ";\n    image-rendering: -webkit-optimize-contrast;\n    object-fit: cover;\n  }\n  @media(min-width: 480px){\n    height: ", ";\n    min-height: ", "\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      margin: 30px 20px;\n      width: calc(33% - 40px);\n      min-width: initial;\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    background: transparent;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  min-width: 300px;\n  width: 300px;\n  margin: 10px;\n  display: inline-block;\n  background: white;\n  height: ", ";\n  max-height: ", ";\n  border-radius: 16px;\n  text-align: left;\n\n  button.load-orders {\n    padding: 10px 30px;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  @media (min-width: 480px){\n    min-width: 400px;\n    max-height: ", ";;\n    width: 400px;\n  }\n\n  @media(min-width: 993px){\n    ", "\n  }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 55px;\n  height: 55px;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n  }\n\n  @media (min-width: 480px){\n    width: 75px;\n    height: 75px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: end;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 35%;\n  h2 {\n    font-size: 14px;\n    margin-block-end: ", ";\n    margin-block-start: 0.1em;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: ", ";\n    color: #ff9300;\n    font-size: 0.8em;\n    overflow:hidden;\n    text-overflow: ellipsis;\n    margin-left: 5px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-radius: 16px;\n  padding: 10px;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 15%;\n  width: 90%;\n  margin: auto;\n  margin-bottom: 10px;\n  button {\n    width: 100%;\n    font-size: 0.8em;\n    height: 36px;\n  }\n\n  @media (min-width: 480px){\n    button{\n      font-size: 1em\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OpenOrder = _styledComponents.default.div(_templateObject());

exports.OpenOrder = OpenOrder;

var Content = _styledComponents.default.div(_templateObject2());

exports.Content = Content;

var Price = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var isBusinessList = _ref.isBusinessList;
  return isBusinessList ? '0.1em' : '1em';
}, function (_ref2) {
  var isBusinessList = _ref2.isBusinessList;
  return isBusinessList ? '0.1em' : '1em';
});

exports.Price = Price;

var Logo = _styledComponents.default.div(_templateObject4());

exports.Logo = Logo;

var Card = _styledComponents.default.div(_templateObject5(), function (_ref3) {
  var isBusinessList = _ref3.isBusinessList;
  return isBusinessList && '300px';
}, function (_ref4) {
  var isBusinessList = _ref4.isBusinessList;
  return isBusinessList ? '300px' : '220px';
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6());
}, function (props) {
  return (props.nobg || props.isBusinessList) && (0, _styledComponents.css)(_templateObject7());
}, function (props) {
  return props.flex && (0, _styledComponents.css)(_templateObject8());
}, function (props) {
  return (props.theme.colors.backgroundPage === '#FFF' || props.theme.colors.backgroundPage === '#FFFFFF') && (0, _styledComponents.css)(_templateObject9());
}, function (_ref5) {
  var isBusinessList = _ref5.isBusinessList;
  return isBusinessList ? '300px' : '250px';
}, function (_ref6) {
  var isBusinessList = _ref6.isBusinessList;
  return isBusinessList && (0, _styledComponents.css)(_templateObject10());
});

exports.Card = Card;

var Map = _styledComponents.default.div(_templateObject11(), function (_ref7) {
  var isBusinessList = _ref7.isBusinessList;
  return isBusinessList ? '200px' : '88px';
}, function (_ref8) {
  var isBusinessList = _ref8.isBusinessList;
  return isBusinessList && '175px';
}, function (_ref9) {
  var isBusinessList = _ref9.isBusinessList;
  return isBusinessList && '16px';
}, function (_ref10) {
  var isBusinessList = _ref10.isBusinessList;
  return isBusinessList ? '200px' : '100px';
}, function (_ref11) {
  var isBusinessList = _ref11.isBusinessList;
  return isBusinessList && '200px';
});

exports.Map = Map;

var Reorder = _styledComponents.default.div(_templateObject12());

exports.Reorder = Reorder;