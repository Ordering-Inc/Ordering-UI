"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectImage = exports.Header = exports.Chevron = exports.Select = exports.Selected = exports.Options = exports.Option = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 28px;\n  height: 28px;\n  border-radius: 1000px;\n  margin-left: 5px;\n  overflow: hidden;\n\n  ", "\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n\n  svg {\n    font-size: 18px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 5px;\n        margin-left: 0;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  margin-left: 5px;\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  height: 34px;\n  border-radius: 34px;\n  line-height: 34px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #CCC;\n  background-color: ", " !important;\n  color: ", " !important;\n  position: relative;\n\n  &:disabled {\n    pointer-events: none;\n  }\n\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 9px;\n  padding-right: 9px;\n  font-size: 13px;\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  z-index: 11;\n\n  @media (min-width: 381px) {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        margin-left: -1px;\n        margin-right: 0px;\n        left: 0;\n        right: initial;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    right: 0;\n    margin-right: -1px;\n    ", "\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        margin-right: -1px;\n        margin-left: 0px;\n        right: 0;\n        left: initial\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    left: 0;\n    margin-left: -1px;\n    ", "\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #CCC;\n  margin-top: 7px;\n  z-index: 10000;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #CCC;\n  border-radius: 15px;\n  overflow: hidden;\n  \n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          margin-left: 3px;\n          margin-right: 0px;\n       "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      svg {\n        margin-right: 3px;\n        ", "\n      }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n\n    &:hover {\n      background-color: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 15px;\n  padding-right: 15px;\n  min-width: 100px;\n  color: #333;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", "\n\n  svg {\n    vertical-align: text-top;\n  }\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Option = _styledComponents.default.div(_templateObject(), (0, _polished.darken)(0.03, '#CCC'), function (props) {
  return props.selected && (0, _styledComponents.css)(_templateObject2(), (0, _polished.darken)(0.07, '#CCC'), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref) {
  var withIcons = _ref.withIcons;
  return withIcons && (0, _styledComponents.css)(_templateObject3(), function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4());
  });
});

exports.Option = Option;

var Options = _styledComponents.default.div(_templateObject5(), function (_ref2) {
  var position = _ref2.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'left' && (0, _styledComponents.css)(_templateObject6(), function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7());
  });
}, function (_ref3) {
  var position = _ref3.position;
  return (position === null || position === void 0 ? void 0 : position.toLowerCase()) === 'right' && (0, _styledComponents.css)(_templateObject8(), function (props) {
    var _props$theme3;

    return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9());
  });
});

exports.Options = Options;

var Selected = _styledComponents.default.div(_templateObject10());

exports.Selected = Selected;

var Select = _styledComponents.default.div(_templateObject11(), function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome ? 'rgba(247,247,247,0.3)' : '#CCC';
}, function (_ref5) {
  var isHome = _ref5.isHome;
  return isHome ? '#FFF' : '#333';
}, function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject12(), (0, _polished.darken)(0.07, '#CCC'));
});

exports.Select = Select;

var Chevron = _styledComponents.default.div(_templateObject13(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14());
});

exports.Chevron = Chevron;

var Header = _styledComponents.default.div(_templateObject15());

exports.Header = Header;

var SelectImage = _styledComponents.default.div(_templateObject16(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject17());
});

exports.SelectImage = SelectImage;