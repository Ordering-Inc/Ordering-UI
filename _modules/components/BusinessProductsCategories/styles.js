"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-x: auto;\n  padding: 5px;\n  background: #F8F8F8;\n  z-index: 1000;\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #D9D9D9;\n  text-align: center;\n\n  div.category {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  @media (min-width: 381px) {\n    padding: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoriesContainer = _styledComponents.default.div(_templateObject());

exports.CategoriesContainer = CategoriesContainer;