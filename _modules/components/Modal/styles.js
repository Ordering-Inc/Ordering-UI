"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalIcon = exports.ModalOrderTypes = exports.ModalTitle = exports.ModalHeader = exports.ModalActions = exports.ModalDialog = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 5px;\n  top: 6px;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 1;\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    padding-left: 15px;\n    padding-right: 0px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 15px;\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n    padding-right: 10px;\n    padding-left: 0px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 30px;\n  letter-spacing: 0px;\n  color: #010300;\n  opacity: 1;\n  margin: 0px 0px;\n  margin-bottom: 20px;\n  padding-left: 10px;\n  text-transform: capitalize;\n  flex: 1;\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 25px;\n        margin-right: 0px;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 0px;\n  button {\n    width: 100%;\n    border-radius: 32px;\n    opacity: 1;\n    height: 45px;\n    &:nth-child(1) {\n      margin-right: 25px;\n      ", "\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background-color: ", ";\n  padding: ", ";\n  width: 100vw;\n  border-radius: 0px;\n  box-sizing: border-box;\n  margin-top: auto;\n  margin-bottom: auto;\n  height: 100%;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media (min-width: 769px) {\n    width: ", ";\n    max-height: 90vh;\n    border-radius: 10px;\n    height: auto;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    .popup {\n      z-index: ", " !important;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject(), function (_ref) {
  var zx = _ref.zx;
  return zx && (0, _styledComponents.css)(_templateObject2(), zx);
});

exports.Container = Container;

var ModalDialog = _styledComponents.default.div(_templateObject3(), function (_ref2) {
  var isTransparent = _ref2.isTransparent;
  return isTransparent ? 'transparent' : '#FFF';
}, function (_ref3) {
  var padding = _ref3.padding;
  return padding || '20px';
}, function (_ref4) {
  var width = _ref4.width;
  return width || '50%';
});

exports.ModalDialog = ModalDialog;

var ModalActions = _styledComponents.default.div(_templateObject4(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5());
});

exports.ModalActions = ModalActions;

var ModalHeader = _styledComponents.default.div(_templateObject6());

exports.ModalHeader = ModalHeader;

var ModalTitle = _styledComponents.default.h2(_templateObject7(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8());
});

exports.ModalTitle = ModalTitle;

var ModalOrderTypes = _styledComponents.default.div(_templateObject9(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10());
});

exports.ModalOrderTypes = ModalOrderTypes;

var ModalIcon = _styledComponents.default.span(_templateObject11(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject12());
});

exports.ModalIcon = ModalIcon;