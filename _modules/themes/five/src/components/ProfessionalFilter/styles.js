"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalListing = exports.ProfessionalItem = exports.ContentWrapper = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  > h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    margin-top: 0px;\n    margin-bottom: 16px;\n  }\n"])));
exports.Container = Container;
var ProfessionalItem = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 11px;\n  border: 1px solid ", ";\n  border-radius: 7.6px;\n  cursor: pointer;\n  margin: 10px 6px;\n  transition: all 0.3s linear;\n  width: 205px;\n  min-width: 205px;\n  box-sizing: border-box;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  > svg {\n    height: 42px;\n    width: 42px;\n    min-width: 42px;\n    margin-right: 12px;\n    ", "\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.primaryContrast;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 12px;\n      margin-right: 0px;\n    "])));
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
exports.ProfessionalItem = ProfessionalItem;
var ContentWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n"])));
exports.ContentWrapper = ContentWrapper;
var ProfessionalListing = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.ProfessionalListing = ProfessionalListing;