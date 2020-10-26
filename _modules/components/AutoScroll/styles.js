"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DivContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: inherit;\n  \n  svg{\n    background: #D9D9D9;\n    display: inline-block;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    align-self: center;\n    top: 0;\n    position: sticky;\n    color: #000000\n  }\n  svg.right{\n    right: 1%;\n  }\n  svg.left{\n    left: 1%;\n  }\n  svg.hidden{\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DivContainer = _styledComponents.default.span(_templateObject());

exports.DivContainer = DivContainer;