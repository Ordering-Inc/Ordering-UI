"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  color: #909BA9;\n  min-width: 70px;\n  text-align: center;\n  white-space: nowrap;\n"])));

exports.HeaderItem = HeaderItem;