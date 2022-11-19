"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SessionsWrapper = exports.SessionsListContainer = exports.SessionItem = exports.SeessionDelete = exports.NoSessionsContainer = exports.NoMessage = exports.DurationWrapper = exports.ButtonsGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SessionsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px 15px 15px 15px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 280px);\n\n  ", "\n\n  @media (min-width: 769px) {\n    width: 70%;\n  }\n"])), function (_ref) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (_ref2) {
    var _theme$colors;
    var theme = _ref2.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#fff';
  });
});
exports.SessionsListContainer = SessionsListContainer;
var Title = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 32px;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 40px;\n  \n  @media (min-width: 768px) {\n    padding: 0 15px;\n  }\n"])));
exports.Title = Title;
var SessionItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0px;\n  border-bottom: 1px solid ", ";\n  \n  > p.current {\n    flex: 1;\n    font-weight: 700;\n    font-size: 14px;\n    margin: 0 15px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
});
exports.SessionItem = SessionItem;
var DurationWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  p {\n    margin: 0;\n    font-size: 14px;\n  }\n  > span {\n    display: none;\n    margin: 0 10px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    > span {\n      display: block;\n    }\n  }\n"])));
exports.DurationWrapper = DurationWrapper;
var SeessionDelete = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 3px;\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.grayDividerColor;
}, function (props) {
  return props.theme.colors.darkGray;
});
exports.SeessionDelete = SeessionDelete;
var NoMessage = _styledComponents.default.p(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n"])));
exports.NoMessage = NoMessage;
var SessionsWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.SessionsWrapper = SessionsWrapper;
var NoSessionsContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > button {\n    height: 44px;\n    margin-top: 50px;\n  }\n"])));
exports.NoSessionsContainer = NoSessionsContainer;
var ButtonsGroup = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n\n  > button {\n    height: 44px;\n    margin: 10px 0;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n  }\n"])));
exports.ButtonsGroup = ButtonsGroup;