"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.ProjectInfoContainer = exports.LogoImage = exports.HeaderSection = exports.FooterSection = exports.DescriptionContainer = exports.Description = exports.Container = exports.ContactSection = exports.BodySection = exports.ActionGroup = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  text-align: center;\n  box-sizing: border-box;\n  * {\n    box-sizing: border-box;\n  }\n"])));
exports.Container = Container;
var HeaderSection = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));
exports.HeaderSection = HeaderSection;
var Title = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 24px;\n  transform: translate(0px, -22px);\n"])));
exports.Title = Title;
var LogoImage = _styledComponents.default.img(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  object-fit: cover;\n\n  ", "\n"])), function (_ref) {
  var approvalType = _ref.approvalType;
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    ", "\n  "])), approvalType ? "\n      @media (min-width: 450px) {\n        width: 395px;\n      }\n    " : "\n    @media (min-width: 600px) {\n        width: 540px;\n    }\n    ");
});
exports.LogoImage = LogoImage;
var BodySection = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n"])));
exports.BodySection = BodySection;
var DescriptionContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n\n"])));
exports.DescriptionContainer = DescriptionContainer;
var Description = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  margin-top: 0;\n  margin-bottom: 5px;\n  word-break: break-all;\n  > .bigger {\n    font-weight: 600;\n  }\n  > .italic {\n    font-style: italic;\n  }\n  > .green-text {\n    color: ", " !important;\n  }\n"])), function (props) {
  return props.theme.colors.links;
});
exports.Description = Description;
var ProjectInfoContainer = _styledComponents.default.table(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 35px auto 0;\n  width: 100%;\n  .bigger {\n    font-weight: 600;\n  }\n  .td-text-right {\n    text-align: right;\n    padding-right: 20px;\n  }\n  .td-text-left {\n    text-align: left;\n  }\n  .green-text {\n    color: ", " !important;\n  }\n  td {\n    > a {\n      word-break: break-all;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.links;
});
exports.ProjectInfoContainer = ProjectInfoContainer;
var FooterSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  margin: 35px auto 25px;\n"])));
exports.FooterSection = FooterSection;
var ActionGroup = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  > button {\n    width: 48.5%;\n    padding: 5px;\n  }\n"])));
exports.ActionGroup = ActionGroup;
var ContactSection = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin: 25px auto 0;\n  font-style: italic;\n\n  > a.green-text {\n    color: ", " !important;\n  }\n"])), function (props) {
  return props.theme.colors.links;
});
exports.ContactSection = ContactSection;