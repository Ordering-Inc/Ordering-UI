"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.MomentControlContainer = exports.Hours = exports.Days = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MomentControlContainer = exports.MomentControlContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > button {\n    width: 100%;\n    padding-top: 5px;\n    padding-bottom: 5px;\n  }\n\n  button.asap {\n    color: #000;\n  }\n\n  > * {\n    margin-bottom: 15px;\n  }\n"])));
var Title = exports.Title = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 10px;\n"])));
var Days = exports.Days = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  #select-input {\n    width: 100%;\n    border-radius: unset;\n    height: inherit;\n\n    > div:first-child {\n      font-size: 16px;\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n\n    #list {\n      width: 100%;\n      border-radius: unset;\n    }\n  }\n"])));
var Hours = exports.Hours = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  #select-input {\n    width: 100%;\n    border-radius: unset;\n    height: inherit;\n\n    >div:first-child {\n      justify-content: space-between;\n      font-size: 16px;\n      padding-top: 4px;\n      padding-bottom: 4px;\n    }\n    #list {\n      width: 100%;\n      border-radius: unset;\n    }\n  }\n"])));