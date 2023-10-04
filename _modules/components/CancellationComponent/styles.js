"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Segment = exports.LogoImg = exports.InputWrapper = exports.HeroText = exports.Hero = exports.Content = exports.BusinessSearch = exports.BgImg = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Hero = exports.Hero = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  width: 100%;\n  background: black;\n  overflow: hidden;\n  position: relative;\n\n  @media (min-width: 450px) {\n    height: 370px;\n  }\n\n  @media (min-width: 821px) {\n    height: ", ";\n  }\n"])), function (_ref) {
  var height = _ref.height;
  return height || '450px';
});
var BgImg = exports.BgImg = _styledComponents.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var src = _ref2.src;
  return src && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    opacity: 0.4;\n    object-fit: cover;\n    position: absolute;\n  "])));
});
var HeroText = exports.HeroText = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    color: ", ";\n    opacity: .9;\n    text-align: center;\n\n  .title {\n    font-size: 40px;\n    margin: 10px 0;\n  }\n\n  .sub-title {\n      font-size: 16px;\n      line-height: 24px;\n      font-weight: 100;\n      margin: 0;\n      max-width: 560px;\n  }\n\n  .terms {\n      font-style: italic;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var LogoImg = exports.LogoImg = _styledComponents.default.img(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var src = _ref3.src;
  return src && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    width: 120px;\n    height: 120px;\n    border-radius: 8px;\n    margin-bottom: 30px;\n  "])));
});
var Content = exports.Content = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n  width: 100%;\n  height: 200px;\n  background-color: #F3F9FF;\n  text-align: center;\n\n  p {\n    font-size: x-large;\n    color: ", ";\n    margin: 0;\n    max-width: 600px;\n  }\n\n  button {\n    margin-top: 20px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var Segment = exports.Segment = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 30px;\n  text-align: center:\n  width: 100%;\n  text-align: center;\n\n  p {\n    font-size: x-large;\n    color: ", ";\n    margin: 0;\n    max-width: 660px;\n    margin-bottom: 30px;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var InputWrapper = exports.InputWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin: 10px 20px 0px;\n  display: flex;\n  \n  button {\n    width: 80px;\n    margin-left: -10px;\n    border-radius: 0 7.6px 7.6px 0;\n    padding: 4px;\n    z-index: 100;\n  }\n    box-sizing: border-box;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n    margin-right: 20px;\n    \n    @media(min-width: 681px){\n      width: 60%;\n      padding: 0;\n    }\n\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n"])));
var BusinessSearch = exports.BusinessSearch = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n\n  input {\n    border: none;\n    border-bottom: 1px solid #E9ECEF;\n    border-radius: 0px;\n    width: 100%;\n    background-repeat: no-repeat;\n    background-size: 30px 18px;\n    box-sizing: border-box;\n    padding-left: 30px;\n    padding-right: 50px;\n\n    @media (min-width: 681px) {\n      width: 100%;\n    }\n\n  }\n"])));