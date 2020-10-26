"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardLogo = exports.WrapLogo = exports.CardInfo = exports.SoldOut = exports.CardContainer = void 0;

var _polished = require("polished");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  min-height: 75px;\n  border-radius: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n  margin-right: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-width: 250px;\n  > * {\n    margin: 5px;\n  }\n\n  h1 {\n    font-size: 18px;\n    font-weight: ", ";\n    text-align: left;\n    color: #263238;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    font-size: 16px;\n    font-weight: ", ";\n    text-align: left;\n\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n    overflow: hidden;\n  }\n\n  span {\n    color: ", ";\n    font-weight: bold;\n    font-size: 15px;\n  }\n\n  @media (max-width: 1200px) {\n    max-width: 210px;\n  }\n\n  @media (max-width: 360px) {\n    max-width: 170px;\n    h1 {\n      font-size: 16px;\n    }\n    p, span {\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  position: absolute;\n  background: #D6D6D6 0% 0% no-repeat padding-box;\n  border-radius: 23px;\n  padding: 5px 10px;\n  top: 8px;\n  right: 6px;\n  text-transform: uppercase;\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(33% - 40px);\n  padding: 10px;\n  margin: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  position: relative;\n\n  background: ", ";\n\n  @media (max-width: 992px) {\n    width: calc(50% - 40px);\n  }\n  @media (max-width: 680px) {\n    width: calc(100% - 40px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CardContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var soldOut = _ref.soldOut;
  return soldOut ? '#B8B8B8' : '#FFF';
});

exports.CardContainer = CardContainer;

var SoldOut = _styledComponents.default.span(_templateObject2());

exports.SoldOut = SoldOut;

var CardInfo = _styledComponents.default.div(_templateObject3(), function (_ref2) {
  var soldOut = _ref2.soldOut;
  return soldOut ? 'bold' : '500';
}, function (_ref3) {
  var soldOut = _ref3.soldOut;
  return soldOut ? 'bold' : '200';
}, function (_ref4) {
  var soldOut = _ref4.soldOut,
      theme = _ref4.theme;
  return soldOut ? (0, _polished.lighten)(0.05, theme.colors.primary) : theme.colors.primary;
});

exports.CardInfo = CardInfo;

var WrapLogo = _styledComponents.default.div(_templateObject4());

exports.WrapLogo = WrapLogo;

var CardLogoStyled = _styledComponents.default.div(_templateObject5());

var CardLogo = function CardLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }

  return /*#__PURE__*/_react.default.createElement(CardLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.CardLogo = CardLogo;