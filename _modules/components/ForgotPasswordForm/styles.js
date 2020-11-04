"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RedirectLink = exports.FormInput = exports.FormSide = exports.TitleHeroSide = exports.HeroSide = exports.ForgotPasswordContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n\n    @media (max-width: 480px) {\n      width: calc(90% - 20px);\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  span {\n    margin-right: 5px;\n    ", "\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n  }\n\n  * {\n    margin: 0px;\n    padding: 0px;\n  }\n\n  ", "\n\n  @media (max-width: 810px) {\n    font-size: 14px;\n  }\n\n  @media (max-width: 768px) {\n    font-size: 17px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n\n  * {\n    padding: 8px 20px;\n    margin: 10px;\n  }\n\n  input:not(:last-child) {\n    margin-top: 10px;\n    margin-bottom: 0px;\n  }\n\n  button {\n    margin-top: 10px;\n    padding: 5px;\n  }\n\n  @media (max-width: 992px) {\n    width: 90%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 45%;\n  flex-direction: column;\n  align-items: center;\n  margin: auto;\n\n  img {\n    width: 200px;\n  }\n\n  @media (max-width: 768px) {\n    margin: 20px 0px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n\n  h1 {\n    font-size: 52px;\n  }\n\n  h1,\n  p {\n    margin: 0px;\n    color: #FFF;\n  }\n\n  @media (max-width: 576px) {\n    h1 {\n      font-size: 30px;\n    }\n  }\n\n  @media (max-width: 410px) {\n    h1 {\n      font-size: 22px;\n    }\n    P {\n      margin-top: 5px;\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 55%;\n  justify-content: center;\n  align-items: center;\n  color: ", ";\n  background-color:  ", ";\n  padding-bottom: 5px;\n  @media (max-width: 768px) {\n    height: calc(50vh - 65px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  @media (min-width: 1400px) {\n    height: calc(100vh - 65px);\n  }\n\n  @media (max-width: 992px) {\n    width: 50%;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  min-height: ", ";\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ForgotPasswordContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var isPopup = _ref.isPopup;
  return isPopup ? '90vh' : '100vh';
});

exports.ForgotPasswordContainer = ForgotPasswordContainer;

var Side = _styledComponents.default.div(_templateObject2());

var HeroSide = (0, _styledComponents.default)(Side)(_templateObject3(), function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.colors.primary;
});
exports.HeroSide = HeroSide;

var TitleHeroSide = _styledComponents.default.div(_templateObject4());

exports.TitleHeroSide = TitleHeroSide;
var FormSide = (0, _styledComponents.default)(Side)(_templateObject5());
exports.FormSide = FormSide;

var FormInput = _styledComponents.default.form(_templateObject6(), function (_ref2) {
  var isPopup = _ref2.isPopup;
  return isPopup ? '90%' : '70%';
});

exports.FormInput = FormInput;

var RedirectLink = _styledComponents.default.div(_templateObject7(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8());
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref3) {
  var register = _ref3.register;
  return register && (0, _styledComponents.css)(_templateObject9(), function (_ref4) {
    var isPopup = _ref4.isPopup;
    return isPopup ? 'calc(90% - 20px)' : 'calc(70% - 20px)';
  });
});

exports.RedirectLink = RedirectLink;