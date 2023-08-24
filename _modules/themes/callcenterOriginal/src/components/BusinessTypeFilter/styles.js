"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeContainer = exports.Divider = exports.BusinessCategoryTitle = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var TypeContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  overflow-x: auto;\n  padding: 15px 20px 0 20px;\n  box-sizing: border-box;\n  position: relative;\n\n  ::-webkit-scrollbar {\n      opacity: 0\n  }\n  \n  > div{\n    > div {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    width: 100%;\n  }\n  }\n\n  .category{\n    padding: 10px 7px 0 0;\n\n    > span {\n      margin-bottom: 15px;\n      ", " \n    }\n  }\n\n  @media (min-width: 480px){\n    .category{\n      padding: 10px 15px 0 0;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "]))) : (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "])));
});
exports.TypeContainer = TypeContainer;
var BusinessCategoryTitle = _styledComponents.default.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  z-index: 100;\n  position: relative;\n  font-size: 13px;\n  color: #909BA9;\n  user-select: none;\n  white-space: nowrap;\n  padding-bottom: 13px;\n  margin: 0;\n  border-bottom: 1px solid transparent;\n  transition: all 0.3s;\n\n  ", "\n"])), function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    font-weight: bold;\n    border-bottom: 1px solid ", ";\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.darkTextColor;
  }, function (props) {
    return props.theme.colors.darkTextColor;
  });
});
exports.BusinessCategoryTitle = BusinessCategoryTitle;
var Divider = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: calc(100% - 40px);\n  height: 1px;\n  left: 20px;\n  bottom: 0;\n  background: #E9ECEF;\n"])));
exports.Divider = Divider;