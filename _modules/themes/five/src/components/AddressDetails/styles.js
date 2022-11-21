"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappMap = exports.Text = exports.Map = exports.Header = exports.AddressContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var AddressContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n    \n  ", "\n"])), function (_ref) {
  var _theme$layouts, _theme$layouts$checko, _theme$layouts$checko2, _theme$layouts$checko3;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts = theme.layouts) === null || _theme$layouts === void 0 ? void 0 : (_theme$layouts$checko = _theme$layouts.checkout) === null || _theme$layouts$checko === void 0 ? void 0 : (_theme$layouts$checko2 = _theme$layouts$checko.components) === null || _theme$layouts$checko2 === void 0 ? void 0 : (_theme$layouts$checko3 = _theme$layouts$checko2.layout) === null || _theme$layouts$checko3 === void 0 ? void 0 : _theme$layouts$checko3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 30px 30px 10px 30px;\n    margin-bottom: 0;\n    border-left: 1px solid #fff;\n    border-top: 1px solid #fff;\n    border-right: 1px solid #fff;\n    background: ", ";\n  "])), function (_ref2) {
    var _theme$colors$tertiar, _theme$colors;
    var theme = _ref2.theme;
    return (_theme$colors$tertiar = theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiaryContrast) !== null && _theme$colors$tertiar !== void 0 ? _theme$colors$tertiar : '#000';
  });
});
exports.AddressContainer = AddressContainer;
var Header = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""])));
exports.Header = Header;
var WrappMap = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: auto;\n"])));
exports.WrappMap = WrappMap;
var Map = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    border-radius: 15px;\n    -webkit-user-drag: none;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));
exports.Map = Map;
var Text = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 14px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  h1{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 100%;\n    font-weight: 600;\n    font-size: 16px;\n  }\n\n  span {\n    font-size: 13px!important;\n    text-decoration: underline;\n    cursor: pointer;\n    user-select: none;\n    color: ", ";\n    margin-left: 10px;\n    font-weight: normal;\n\n    ", "\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: initial;\n    "])));
}, function (_ref3) {
  var _theme$layouts2, _theme$layouts2$check, _theme$layouts2$check2, _theme$layouts2$check3, _theme$colors2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$layouts2 = theme.layouts) === null || _theme$layouts2 === void 0 ? void 0 : (_theme$layouts2$check = _theme$layouts2.checkout) === null || _theme$layouts2$check === void 0 ? void 0 : (_theme$layouts2$check2 = _theme$layouts2$check.components) === null || _theme$layouts2$check2 === void 0 ? void 0 : (_theme$layouts2$check3 = _theme$layouts2$check2.layout) === null || _theme$layouts2$check3 === void 0 ? void 0 : _theme$layouts2$check3.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        color: ", ";\n        font-size: 16px!important;\n      "])), theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.gold);
});
exports.Text = Text;