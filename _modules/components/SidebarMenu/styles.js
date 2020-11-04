"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuLinkSeparator = exports.TextInfo = exports.MenuLinkText = exports.MenuLinkIcon = exports.WrappContent = exports.MenuLink = exports.MenuClose = exports.SidebarContent = exports.IconContent = exports.Container = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 0px;\n      margin: 15px -16px -16px 0px;\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      padding-right: 0px;\n      margin: 15px 0px -16px -16px;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  grid-area: -1 / 1 / auto / -1;\n  margin: 15px -16px -16px 0px;\n\n  div {\n    width: 100%;\n    padding-left: 0px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n\n    ", "\n\n    hr {\n      display: block;\n      width: 100%;\n      margin: 0px;\n      border: none;\n      height: 1px;\n      background: rgb(231, 231, 231);\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n    display: inline-block;\n    color: #000;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 24px;\n  letter-spacing: -0.04ch;\n  text-transform: none;\n  text-align: left;\n  margin: 0px;\n  padding: 0px;\n  display: block;\n  font-variant-ligatures: no-common-ligatures;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: ", "\n\n  ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  flex-grow: 1;\n  overflow: hidden;\n  flex-basis: 100%;\n  grid-area: 2 / 2 / auto / auto;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  grid-area: 2 / 1 / auto / auto;\n  flex-shrink: 0;\n  line-height: 0;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n\n  svg {\n    flex-shrink: 0;\n    color: #000;\n    width: 24px;\n    height: 24px;\n    color: ", "\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  max-width: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: auto auto auto;\n  grid-template-columns: auto 1fr;\n  column-gap: 20px;\n  padding: 16px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  cursor: pointer;\n  overflow: hidden;\n  text-decoration: none;\n  appearance: none;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  text-align: inherit;\n  display: block;\n  width: 100%;\n  background: ", ";;\n  outline: none !important;\n\n  &:hover {\n    color: #f1f1f1;\n  }\n\n  @media (max-height: 450px) {\n    font-size: 18px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  max-width: 100%;\n  margin: 6px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: ", ";\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      left: 0;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      right: 0;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1005;\n  top: 0;\n  background-color: ", ";\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px;\n  box-shadow: ", ";\n\n  ", "\n\n  @media (max-height: 450px) {\n    padding-top: 15px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  max-width: 100%;\n  margin: 0px;\n  display: inline-flex;\n  min-height: 35px;\n  border-radius: 40px;\n  border: none;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;\n  user-select: none;\n  text-decoration: none;\n  text-align: center;\n  background-color: ", ";\n  box-shadow: transparent 0px 0px 0px 1px inset;\n  width: 35px;\n  height: 35px;\n  padding: 0px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: transparent 0px 0px 0px 1px inset;\n  }\n\n  svg {\n    flex-shrink: 0;\n    font-size: 30px;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var IconContent = _styledComponents.default.button(_templateObject2(), function (_ref) {
  var isHome = _ref.isHome;
  return isHome ? '#333' : 'rgb(247, 247, 247)';
}, function (_ref2) {
  var isHome = _ref2.isHome;
  return isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)';
}, function (_ref3) {
  var isHome = _ref3.isHome;
  return isHome ? 'rgb(255, 255, 255)' : '#333';
});

exports.IconContent = IconContent;

var SidebarContent = _styledComponents.default.div(_templateObject3(), function (_ref4) {
  var isHome = _ref4.isHome;
  return isHome ? '#333' : '#F8F8F8';
}, function (_ref5) {
  var isHome = _ref5.isHome;
  return isHome ? 'rgba(0, 0, 0, 0.7) 0px 8px 24px;' : 'rgba(0, 0, 0, 0.2) 0px 8px 24px;';
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject4()) : (0, _styledComponents.css)(_templateObject5());
});

exports.SidebarContent = SidebarContent;

var MenuClose = _styledComponents.default.button(_templateObject6(), function (_ref6) {
  var isHome = _ref6.isHome;
  return isHome ? '#333' : 'rgb(247, 247, 247)';
}, function (_ref7) {
  var isHome = _ref7.isHome;
  return isHome ? 'rgba(255,255,255,0.1)' : 'rgb(255, 255, 255)';
}, function (_ref8) {
  var isHome = _ref8.isHome;
  return isHome ? 'rgb(255, 255, 255)' : '#333';
});

exports.MenuClose = MenuClose;

var MenuLink = _styledComponents.default.a(_templateObject7(), function (_ref9) {
  var isHome = _ref9.isHome;
  return isHome ? '#333' : '#F8F8F8';
});

exports.MenuLink = MenuLink;

var WrappContent = _styledComponents.default.div(_templateObject8());

exports.WrappContent = WrappContent;

var MenuLinkIcon = _styledComponents.default.div(_templateObject9(), function (_ref10) {
  var active = _ref10.active,
      theme = _ref10.theme,
      isHome = _ref10.isHome;
  return active ? theme.colors.primary : isHome ? '#FFF' : '#000';
});

exports.MenuLinkIcon = MenuLinkIcon;

var MenuLinkText = _styledComponents.default.div(_templateObject10());

exports.MenuLinkText = MenuLinkText;

var TextInfo = _styledComponents.default.span(_templateObject11(), function (_ref11) {
  var active = _ref11.active,
      theme = _ref11.theme,
      isHome = _ref11.isHome;
  return active ? theme.colors.primary : isHome ? '#FFF' : '#000';
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12());
});

exports.TextInfo = TextInfo;

var MenuLinkSeparator = _styledComponents.default.div(_templateObject13(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) ? (0, _styledComponents.css)(_templateObject14()) : (0, _styledComponents.css)(_templateObject15());
});

exports.MenuLinkSeparator = MenuLinkSeparator;