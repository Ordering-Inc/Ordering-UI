"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SubTitle = exports.SubPageList = exports.SubPage = exports.LastOrdersListWrapper = exports.HelpContentWrapper = exports.HelpContainer = exports.BreadCrumbContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var HelpContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px 15px 15px 15px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 280px);\n\n  @media (min-width: 769px) {\n    width: 70%;\n  }\n"])));
exports.HelpContainer = HelpContainer;
var BreadCrumbContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 23px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 13px;\n    color: #909BA9;\n    margin: 0 7px;\n\n    ", "\n  }\n\n  span {\n    font-size: 12px;\n    color: #344050;\n\n    &.deactive {\n      color: #909BA9;\n      cursor: pointer;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      transform: rotateZ(180deg);\n    "])));
});
exports.BreadCrumbContainer = BreadCrumbContainer;
var Title = _styledComponents.default.h1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 32px;\n  margin-bottom: 30px;\n  margin-top: 0;\n"])));
exports.Title = Title;
var SubTitle = _styledComponents.default.h1(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  margin-top: 0;\n  margin-bottom: 18px;\n"])));
exports.SubTitle = SubTitle;
var HelpContentWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([""])));
exports.HelpContentWrapper = HelpContentWrapper;
var SubPageList = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-bottom: 60px;\n"])));
exports.SubPageList = SubPageList;
var SubPage = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  padding: 10px 0;\n  border-bottom: 1px solid #E9ECEF;\n  margin-bottom: 5px;\n\n  span {\n    font-size: 14px;\n    color: #344050;\n    user-select: none;\n    cursor: pointer;\n  }\n"])));
exports.SubPage = SubPage;
var LastOrdersListWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 60px;\n\n  h2 {\n    font-weight: 500;\n    font-size: 20px;\n    color: #344050;\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n"])));
exports.LastOrdersListWrapper = LastOrdersListWrapper;