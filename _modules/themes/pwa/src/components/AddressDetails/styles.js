"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappMap = exports.Text = exports.Map = exports.Header = exports.AddressContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n\n"])));

exports.AddressContainer = AddressContainer;

var Header = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  @media (min-width: 1024px) {\n    display: none;\n  }\n"])));

exports.Header = Header;

var WrappMap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: auto;\n"])));

exports.WrappMap = WrappMap;

var Map = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-bottom: 15px;\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    -webkit-user-drag: none;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));

exports.Map = Map;

var Text = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 16px;\n  color: #344050;\n  margin: 0px 0px 15px 0px;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media (min-width: 425px) {\n    font-size: 18px;\n  }\n\n"])));

exports.Text = Text;