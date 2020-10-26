"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CouponContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* width: 80%; */\n  /* margin: auto; */\n  display: flex;\n  justify-content: flex-start;\n  button {\n    margin-left: 5px;\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n\n  input {\n    width: 50%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CouponContainer = _styledComponents.default.div(_templateObject());

exports.CouponContainer = CouponContainer;