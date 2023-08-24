"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperDriversLocation = exports.WrapperDriversList = exports.FilterContainer = exports.DriversDashboardContainer = exports.DriversContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DriversDashboardContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  margin-top: 0px;\n\n  @media (min-width: 760px) {\n    margin-top: 15px\n  }\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n    height: calc(100vh - 122px);\n  }\n"])));
exports.DriversDashboardContainer = DriversDashboardContainer;
var FilterContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 0px;\n  background: ", ";\n  z-index: 100;\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
});
exports.FilterContainer = FilterContainer;
var DriversContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  border: 1px solid #E9ECEF;\n  border-radius: 8px;\n  height: 100%;\n  overflow: hidden;\n  margin-top: 20px;\n  padding: 10px;\n\n  @media (min-width: 1024px) {\n    width: 330px;\n    max-width: 330px;\n    margin-top: 0px;\n  }\n\n  @media (min-width: 1300px) {\n    max-width: 500px;\n    width: 500px;\n  }\n"])));
exports.DriversContainer = DriversContainer;
var WrapperDriversList = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: calc(100% - 100px);\n  overflow-x: hidden;\n"])));
exports.WrapperDriversList = WrapperDriversList;
var WrapperDriversLocation = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  height: calc(var(--vh, 1vh) * 100 - 190px);\n  border-radius: 8px;\n  overflow: hidden;\n  margin-top: 20px;\n  \n  @media (min-width: 1024px) {\n    margin-top: 0px;\n    height: 100%;\n    flex: 1;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "])));
});
exports.WrapperDriversLocation = WrapperDriversLocation;