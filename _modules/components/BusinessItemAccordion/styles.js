"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessActions = exports.BusinessTotal = exports.BusinessInfo = exports.AccordionText = exports.AccordionContent = exports.ContentInfo = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.Accordion = exports.AccordionSection = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  max-width: 30%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  span {\n    height: 22px;\n    svg {\n      font-size: 22px;\n    }\n\n    &:not(:last-child) {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  @media (min-width: 768px) {\n    span {\n      height: 27px;\n      svg {\n        font-size: 27px;\n      }\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  display: none;\n  flex-direction: column;\n  align-items: center;\n\n  p {\n    font-size: 18px;\n    margin: 0px 5px;\n    font-weight: 300;\n\n    &:nth-child(1) {\n      font-weight: 500;\n    }\n  }\n\n  &.closed {\n    flex: 1;\n    p {\n      text-align: center;\n      margin: 0px 20px;\n      font-size: 18px;\n    }\n  }\n\n  @media (min-width: 481px) {\n    display: flex;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 60%;\n\n  h2 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  @media (min-width: 481px) {\n    width: 45%;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: min-height 0.6s ease;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  margin-left: 10px;\n  width: 65%;\n\n  ", "\n\n  h2, span {\n    margin: 0px;\n  }\n\n  h2 {\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 16px;\n    opacity: 0.8;\n    display: flex;\n    align-items: center;\n    font-weight: 300;\n\n    svg {\n      margin-right: 3px;\n      ", "\n    }\n  }\n\n  @media (min-width: 576px) {\n    h2 {\n      font-size: 20px;\n    }\n    span {\n      font-size: 18px;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  min-height: 50px;\n  width: 50px;\n  height: 50px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: contain;\n  background-position: center;\n  border-radius: 10px;\n\n  @media (min-width: 481px){\n    min-height: 55px;\n    width: 55px;\n    height: 55px;\n  }\n\n  @media (min-width: 769px){\n    width: 75px;\n    height: 75px;\n    min-height: 75px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  max-width: 50px;\n  max-height: 50px;\n\n  @media (min-width: 481px){\n    width: 55px;\n    height: 55px;\n    max-width: 55px;\n    max-height: 55px;\n    padding-bottom: 0 !important;\n  }\n\n  @media (min-width: 769px){\n    max-width: 75px;\n    max-height: 75px;\n    height: 75px;\n    width: 75px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: ", ";\n  transition: background-color 0.6s ease;\n  position: relative;\n  padding: 10px;\n  background: #F8F8F8;\n\n  ", "\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    transition: transform 0.6s ease;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid #BFBFBF;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n\n  &:last-child {\n    border-bottom: 0;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionSection = _styledComponents.default.div(_templateObject());

exports.AccordionSection = AccordionSection;

var Accordion = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var isClosed = _ref.isClosed;
  return isClosed ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.isClosed && (0, _styledComponents.css)(_templateObject3());
});

exports.Accordion = Accordion;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject4());

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject5());

var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var ContentInfo = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8());
});

exports.ContentInfo = ContentInfo;

var AccordionContent = _styledComponents.default.div(_templateObject9());

exports.AccordionContent = AccordionContent;

var AccordionText = _styledComponents.default.div(_templateObject10());

exports.AccordionText = AccordionText;

var BusinessInfo = _styledComponents.default.div(_templateObject11());

exports.BusinessInfo = BusinessInfo;

var BusinessTotal = _styledComponents.default.div(_templateObject12(), function (_ref2) {
  var isCartOnProductsList = _ref2.isCartOnProductsList;
  return isCartOnProductsList ? '30%' : '25%';
});

exports.BusinessTotal = BusinessTotal;

var BusinessActions = _styledComponents.default.div(_templateObject13(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject14());
});

exports.BusinessActions = BusinessActions;