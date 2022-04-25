"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.PlaceSpotContainer = exports.PlaceGroupContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PlaceSpotContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  min-height: 300px;\n  #select-input, #list {\n    width: 100%;\n  }\n  .title {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n"])));

exports.PlaceSpotContainer = PlaceSpotContainer;

var PlaceGroupContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  margin-top: 20px;\n"])));

exports.PlaceGroupContainer = PlaceGroupContainer;

var Title = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  font-weight: 500;\n"])));

exports.Title = Title;