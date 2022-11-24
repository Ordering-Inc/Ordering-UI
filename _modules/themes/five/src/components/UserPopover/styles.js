"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserImgWrapper = exports.RoundMark = exports.PopoverListLink = exports.PopoverListItem = exports.PopoverList = exports.PopoverBody = exports.HeaderItem = exports.ExtraOptions = exports.Divider = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: 7.6px;\n  padding: 7px 13px;\n  margin: 0px;\n\n  ", "\n\n  svg {\n    color: ", ";\n    height: 40px;\n    width: 40px;\n  }\n  \n  p{\n    color: ", "\n  }\n\n  .menu-list {\n    font-size: 16px;\n    width: auto;\n    height: auto;\n    margin-right: 20px;\n    ", "\n    color: ", ";\n  }\n\n  img {\n    width: 42px;\n    height: 42px;\n    border-radius: 7.6px;\n  }\n\n  ", "\n"])), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: #F8F9FA;\n  "])));
}, function (_ref2) {
  var isHome = _ref2.isHome;
  return isHome ? '#FFF' : '#000';
}, function (_ref3) {
  var _theme$colors;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.tertiary) || '#fff';
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 20px;\n      margin-right: 0;\n    "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (_ref4) {
  var _theme$general, _theme$general$compon, _theme$general$compon2;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.layout) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: ", ";\n    .menu-list {\n      color: #000;\n    }\n    svg {\n      width: 20px;\n      height: 20px;\n      color: ", ";\n    }\n    img {\n      width: 28px;\n      height: 28px;\n    }\n  "])), function (_ref5) {
    var _theme$colors2;
    var theme = _ref5.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.tertiaryContrast) || '#000';
  }, function (_ref6) {
    var _theme$colors3;
    var theme = _ref6.theme;
    return (theme === null || theme === void 0 ? void 0 : (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.tertiary) || '#fff';
  });
});
exports.HeaderItem = HeaderItem;
var PopoverBody = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 20px 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  min-width: 300px !important;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n\n  ", "\n"])), function (_ref7) {
  var _theme$general2, _theme$general2$compo, _theme$general2$compo2;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general2 = theme.general) === null || _theme$general2 === void 0 ? void 0 : (_theme$general2$compo = _theme$general2.components) === null || _theme$general2$compo === void 0 ? void 0 : (_theme$general2$compo2 = _theme$general2$compo.layout) === null || _theme$general2$compo2 === void 0 ? void 0 : _theme$general2$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    border-radius: 0px;\n    h1{\n      font-size: 18px;\n      padding: 0 15px;\n    }\n  "])));
});
exports.PopoverBody = PopoverBody;
var PopoverList = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
exports.PopoverList = PopoverList;
var PopoverListItemStyles = (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 7px 15px;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  color: #000000;\n  border-radius: 7.6px;\n\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: #f8f8f8;\n  }\n\n  :last-child {\n    border-bottom: 0;\n  }\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (_ref8) {
  var _theme$general3, _theme$general3$compo, _theme$general3$compo2, _theme$colors4;
  var theme = _ref8.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general3 = theme.general) === null || _theme$general3 === void 0 ? void 0 : (_theme$general3$compo = _theme$general3.components) === null || _theme$general3$compo === void 0 ? void 0 : (_theme$general3$compo2 = _theme$general3$compo.layout) === null || _theme$general3$compo2 === void 0 ? void 0 : _theme$general3$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$colors4 = theme.colors) === null || _theme$colors4 === void 0 ? void 0 : _theme$colors4.gold);
});
var PopoverListItem = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  ", "\n"])), PopoverListItemStyles);
exports.PopoverListItem = PopoverListItem;
var PopoverListLink = _styledComponents.default.a(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n\n  ", "\n  \n"])), PopoverListItemStyles, function (_ref9) {
  var active = _ref9.active;
  return active && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    background-color: #eee;\n  "])));
});
exports.PopoverListLink = PopoverListLink;
var ExtraOptions = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  a, div {\n    font-weight: normal;\n  }\n"])));
exports.ExtraOptions = ExtraOptions;
var Divider = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  margin-bottom: 15px;\n  width: calc(100% + 30px);\n  margin-left: -15px;\n  height: 1px;\n  background: #E9ECEF;\n\n  ", "\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    margin-right: -15px;\n    margin-left: 0;\n  "])));
});
exports.Divider = Divider;
var UserImgWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  ", "\n"])), function (_ref10) {
  var pfchangs = _ref10.pfchangs;
  return pfchangs && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    svg{\n      color: ", ";\n    }\n  "])), function (_ref11) {
    var _theme$colors5;
    var theme = _ref11.theme;
    return theme === null || theme === void 0 ? void 0 : (_theme$colors5 = theme.colors) === null || _theme$colors5 === void 0 ? void 0 : _theme$colors5.gold;
  });
});
exports.UserImgWrapper = UserImgWrapper;
var RoundMark = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #E63757;\n  top: -3px;\n  right: -6px;\n"])));
exports.RoundMark = RoundMark;