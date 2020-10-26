"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Copy = exports.SocialIcon = exports.SocialMedia = exports.Content = exports.FooterContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-top: 10px;\n  width: 80%;\n  text-align: center;\n  font-size: 12px;\n  color: #868686;\n  @media (max-width: 640px){\n    margin: auto;\n  }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  margin: 0 10px;\n  color: initial;\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n  &:first-child{\n    margin-left: 0\n  }\n  @media (max-width: 980px) {\n    width: 24px;\n    height: 24px;\n    margin: 0 5px;  \n  }\n  @media(max-width: 720px){\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;  \n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n\n  @media(min-width: 720px){\n    margin-right: 0;\n    margin-left: 0;\n  }\n  @media(max-width: 720px){\n    width: 30%;\n    font-size: 10px;\n  }\n\n  @media (max-width: 640px) {\n    width: 50%;\n    margin-bottom: 20px;\n    h5{\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 25%;\n  > * {\n    display: block;\n    text-decoration: none;\n    color: initial;\n    font-size: 14px;\n    margin: 10px 0;\n  }\n\n  @media(max-width: 720px){\n    width: 30%;\n    font-size: 10px;\n  }\n  @media (max-width: 640px) {\n    width: 50%;\n    margin-bottom: 20px;\n    > * {\n      font-size: 16px;\n    }\n    h5{\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  border-top: 1px solid #d9d9d9;\n  text-align: left;\n  padding: 30px 0 45px 0;\n  flex-wrap: wrap;\n\n  > * {\n    margin: 0 auto;\n  }\n\n  h5 {\n    font-size: 1.1em;\n    text-transform: uppercase;\n    margin-block-end: 1em;\n    margin-block-start: 1em;\n  }\n\n  > :first-child{\n    margin-left: 10%\n  }\n  \n  @media (max-width: 980px){\n    font-size: 0.8em;\n  }\n  @media (max-width: 640px) {\n    flex-direction: column;\n    > * {\n      margin: 0 25% 0 25%;\n    }\n    > :first-child{\n    margin-left: auto\n  }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents.default.div(_templateObject());

exports.FooterContainer = FooterContainer;

var Content = _styledComponents.default.div(_templateObject2());

exports.Content = Content;

var SocialMedia = _styledComponents.default.div(_templateObject3());

exports.SocialMedia = SocialMedia;

var SocialIcon = _styledComponents.default.a(_templateObject4());

exports.SocialIcon = SocialIcon;

var Copy = _styledComponents.default.div(_templateObject5());

exports.Copy = Copy;