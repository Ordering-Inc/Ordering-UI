"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemInline = exports.FeatureItems = exports.Container = exports.AddressMenu = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  margin-top: 10px;\n"])), function (_ref) {
  var isBusinessList = _ref.isBusinessList;
  return isBusinessList && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    padding: 0 15px;\n    box-sizing: border-box;\n  "])));
}, function (_ref2) {
  var hero = _ref2.hero;
  return hero && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 10%;\n  "])));
});
exports.Container = Container;
var AddressMenu = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 13px 19px;\n  margin-bottom: 10px;\n  ", "\n\n  span {\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  svg {\n    margin-right: 5px;\n    color: ", ";\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (_ref3) {
  var isCheckOut = _ref3.isCheckOut;
  return isCheckOut && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.grayDividerColor;
  });
}, function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0;\n    "])));
});
exports.AddressMenu = AddressMenu;
var FeatureItems = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"])));
exports.FeatureItems = FeatureItems;
var ItemInline = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  > span #select-input {\n    background-color: ", " !important;\n    border: none;\n    border-radius: 7.6px;\n    svg {\n      font-size: 14px;\n    }\n    #list {\n      background-color: ", ";\n      border: none;\n      border-radius: 7.6px;\n\n      left: 0px;\n      right: initial;\n\n      ", "\n    }\n\n    > div:first-child {\n      font-size: 11px;\n    }\n  }\n\n  .moment-popover {\n    > div:first-child {\n      font-size: 11px;\n      padding: 4px 7px;\n      svg {\n        font-size: 14px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        left: initial;\n        right: 0px;\n      "])));
});
exports.ItemInline = ItemInline;