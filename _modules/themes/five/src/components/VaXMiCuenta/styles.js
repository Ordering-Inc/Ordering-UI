"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VaXMiCuentaContainer = exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var VaXMiCuentaContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n  color: #fff;\n  border-top: 1px solid #fff;\n  border-left: 1px solid #fff;\n  border-right: 1px solid #fff;\n  background: ", ";\n\n  img {\n    width: 100%;\n    height: 30px;\n    margin: auto;\n  }\n  > div {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: 'center'\n    h2  {\n      font-size: 18px;\n      font-weight: 500;\n      margin: 0;\n    }\n    h3 {\n      display: flex;\n    }\n    span {\n      text-decoration: underline;\n      font-size: 16px;\n    }\n  }\n  > div > div {\n    display: flex;\n    justify-content: space-evenly;\n  }\n  > div > h3 > div {\n    padding: 0px 10px\n  }\n"])), function (props) {
  return props.theme.colors.secundaryContrast;
});
exports.VaXMiCuentaContainer = VaXMiCuentaContainer;
var Button = _styledComponents.default.button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  /* background: transparent; */\n  border-radius: 8px;\n  /* width: 60px; */\n  height: 45px;\n  border-color: #8a83833b;\n  color: ", ";\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 18px;\n  min-width: ", ";\n  background-color: ", "\n"])), function (props) {
  var _props$theme, _props$theme$colors;
  return props.isSelected ? ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.buttonPrimaryContrast) || '#000' : props.theme.colors.secondaryDark;
}, function (_ref) {
  var value = _ref.value;
  return value === 0 ? '100px' : '60px';
}, function (_ref2) {
  var isSelected = _ref2.isSelected;
  return isSelected && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
});
exports.Button = Button;