"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexTabs = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 50%;\n  margin: 0 auto;\n    div{\n      justify-content: space-evenly\n    }\n    a{\n      text-decoration: none;\n      color: inherit\n    }\n    svg{\n      position: relative;\n      top: 2px\n    }\n    @media (max-width: 480px){\n      width: 100%\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexTabs = _styledComponents.default.div(_templateObject());

exports.FlexTabs = FlexTabs;