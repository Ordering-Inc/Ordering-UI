"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubMenu = exports.HeaderInvert = exports.MenuLink = exports.MenuItem = exports.Menu = exports.RightHeader = exports.LeftHeader = exports.LogoHeader = exports.InnerHeader = exports.Header = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Selects = require("../../styles/Selects");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media (max-width: 820px) {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    padding: 7px 20px 0px;\n    box-sizing: border-box;\n    margin: 0px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  background-color: #333;\n\n  & ", " {\n    background-color: transparent;\n    border-color: transparent;\n    color: ", "\n  }\n\n  & ", " {\n    color: #FFF;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    @media (max-width: 480px) {\n      display: none;\n    }\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    color: ", ";\n    border-radius: 100px;\n    padding: 10px 15px;\n\n    @media (max-width: 512px) {\n      padding: 5px 10px;\n    }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n  font-size: 16px;\n  padding: 10px;\n  color: #333;\n  cursor: pointer;\n\n  ", "\n\n  ", "\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  > * {\n    margin: 0 5px;\n  }\n\n  > :first-child {\n      margin-left: 10px;\n    ", "\n  }\n\n  > :last-child {\n    \n    margin-right: 10px;\n    ", "\n  }\n\n  @media (max-width: 820px) {\n    .moment-popover,\n    .address-popover {\n      display: none;\n    }\n  }\n\n  @media (max-width: 380px) {\n    > * {\n      margin: 0px 1px;\n    }\n    > :last-child {\n      margin-right: 2px;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-self: center;\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n\n  img {\n    height: 45px;\n    margin: 0;\n    vertical-align: middle;\n\n    @media (max-width: 768px) {\n      width: 150px;\n    }\n\n    @media (max-width: 576px) {\n      width: 45px;\n    }\n  }\n\n  img:nth-child(2) {\n    display: none;\n  }\n\n  @media (max-width: 576px) {\n    img:nth-child(1) {\n      display: none;\n    }\n    img:nth-child(2) {\n      display: block;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  color: #FFF;\n  justify-content: space-between;\n  width: 98%;\n  margin: 10px auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  @media (max-width: 820px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.div(_templateObject());

exports.Header = Header;

var InnerHeader = _styledComponents.default.div(_templateObject2());

exports.InnerHeader = InnerHeader;

var LogoHeader = _styledComponents.default.div(_templateObject3());

exports.LogoHeader = LogoHeader;

var LeftHeader = _styledComponents.default.div(_templateObject4());

exports.LeftHeader = LeftHeader;

var RightHeader = _styledComponents.default.div(_templateObject5());

exports.RightHeader = RightHeader;

var Menu = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8());
});

exports.Menu = Menu;

var MenuItem = _styledComponents.default.div(_templateObject9());

exports.MenuItem = MenuItem;

var MenuLink = _styledComponents.default.a(_templateObject10(), function (_ref) {
  var highlight = _ref.highlight;
  return highlight && (0, _styledComponents.css)(_templateObject11(), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  });
}, function (_ref2) {
  var highlight = _ref2.highlight;
  return !highlight && (0, _styledComponents.css)(_templateObject12());
});

exports.MenuLink = MenuLink;
var HeaderInvert = (0, _styledComponents.default)(Header)(_templateObject13(), _Selects.Select, function (props) {
  return props.theme.colors.primaryContrast;
}, MenuLink);
exports.HeaderInvert = HeaderInvert;
var SubMenu = (0, _styledComponents.default)(InnerHeader)(_templateObject14());
exports.SubMenu = SubMenu;