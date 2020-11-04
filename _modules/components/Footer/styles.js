"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Copy = exports.SocialIcon = exports.SocialMedia = exports.Content = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 10px;\n  width: 80%;\n  text-align: center;\n  font-size: 12px;\n  color: rgba(0,0,0,0.6);\n  @media (max-width: 640px){\n    margin: auto;\n  }\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 0 10px;\n  color: initial;\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n  &:first-child{\n    margin-left: 0\n  }\n  @media (max-width: 980px) {\n    width: 24px;\n    height: 24px;\n    margin: 0 5px;  \n  }\n  @media(max-width: 720px){\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;  \n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  h1 {\n    font-weight: 600;\n    font-size: 18px;\n    margin: 10px 0;\n  }\n\n  @media(min-width: 720px){\n    margin-right: 0;\n    margin-left: 0;\n  }\n  @media(max-width: 720px){\n    width: 30%;\n    font-size: 10px;\n  }\n\n  @media (max-width: 640px) {\n    width: 50%;\n    margin-bottom: 20px;\n    h1 {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 25%;\n  > * {\n    display: block;\n    text-decoration: none;\n    color: initial;\n    font-size: 14px;\n    margin: 10px 0;\n  }\n\n  h1 {\n    font-weight: 600;\n    font-size: 18px;\n  }\n\n  @media(max-width: 720px){\n    width: 30%;\n    font-size: 10px;\n  }\n  @media (max-width: 640px) {\n    width: 50%;\n    margin-bottom: 20px;\n    > * {\n      font-size: 16px;\n    }\n    h1 {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin-right: auto;\n      margin-left: initial;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 10%;\n      margin-left: 0;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      text-align: right;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  border-top: 1px solid #d9d9d9;\n  text-align: left;\n  padding: 30px 0 45px 0;\n  flex-wrap: wrap;\n\n  ", " \n\n  > * {\n    margin: 0 auto;\n  }\n\n  h5 {\n    font-size: 1.1em;\n    text-transform: uppercase;\n    margin-block-end: 1em;\n    margin-block-start: 1em;\n  }\n\n  > :first-child{\n    margin-left: 10%\n    ", " \n  }\n  \n  @media (max-width: 980px){\n    font-size: 0.8em;\n  }\n  @media (max-width: 640px) {\n    flex-direction: column;\n    > * {\n      margin: 0 25% 0 25%;\n    }\n    > :first-child{\n    margin-left: auto\n    ", " \n  }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents.default.div(_templateObject(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject3());
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject4());
});

exports.FooterContainer = FooterContainer;

var Content = _styledComponents.default.div(_templateObject5());

exports.Content = Content;

var SocialMedia = _styledComponents.default.div(_templateObject6());

exports.SocialMedia = SocialMedia;

var SocialIcon = _styledComponents.default.a(_templateObject7());

exports.SocialIcon = SocialIcon;

var Copy = _styledComponents.default.div(_templateObject8());

exports.Copy = Copy;