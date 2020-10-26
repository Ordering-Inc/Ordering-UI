"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSearch = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n\n  input {\n    width: 200px;\n    -webkit-transition: width 0.4s ease-in-out;\n    transition: width 0.4s ease-in-out;\n    background-image: url(", ");\n    background-position: right 10px center;\n    background-repeat: no-repeat;\n    background-size: 15px;\n\n    @media (min-width: 681px) {\n      &:focus {\n        width: 50%;\n      }\n    }\n\n    @media (max-width: 680px) {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessSearch = _styledComponents.default.div(_templateObject(), function (props) {
  var _props$theme, _props$theme$images, _props$theme$images$g;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$images = _props$theme.images) === null || _props$theme$images === void 0 ? void 0 : (_props$theme$images$g = _props$theme$images.general) === null || _props$theme$images$g === void 0 ? void 0 : _props$theme$images$g.searchIcon;
});

exports.BusinessSearch = BusinessSearch;