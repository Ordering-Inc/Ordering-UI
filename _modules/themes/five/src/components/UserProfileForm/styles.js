"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperForm = exports.UserProfileContainer = exports.UserImage = exports.UserData = exports.UploadImageIcon = exports.SkeletonWrapper = exports.SideForm = exports.SavedPlaces = exports.ProfileOptionsList = exports.ListLink = exports.ListItem = exports.Image = exports.Container = exports.Camera = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Container = Container;
var UserProfileContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n  margin: 25px auto ", ";\n"])), function (props) {
  return props.mbottom ? "".concat(props.mbottom, "px") : 'auto';
});
exports.UserProfileContainer = UserProfileContainer;
var ProfileOptionsList = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  a, div {\n    font-weight: normal;\n  }\n"])));
exports.ProfileOptionsList = ProfileOptionsList;
var PopoverListItemStyles = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 10px 0;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  color: #000000;\n  border-radius: 7.6px;\n\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: #f8f8f8;\n  }\n\n  :last-child {\n    border-bottom: 0;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var ListItem = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  ", "\n  margin-bottom: 10px;\n"])), PopoverListItemStyles);
exports.ListItem = ListItem;
var ListLink = _styledComponents.default.a(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n\n  ", "\n"])), PopoverListItemStyles, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background-color: #eee;\n  "])));
});
exports.ListLink = ListLink;
var UserImage = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  position: relative;\n\n  @media (min-width: 768px){\n    width: auto;\n    align-items: flex-end;\n  }\n"])));
exports.UserImage = UserImage;
var Image = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 170px;\n  height: 170px;\n  border-radius: 7.6px;\n  overflow: hidden;\n  padding: 20px;\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 480px){\n    width: 196px;\n    height: 196px;\n  }\n"])));
exports.Image = Image;
var SideForm = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 70%;\n    display: flex;\n    align-items: center;\n    margin: 30px 0px 0px 30px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      margin: auto 30px auto 0px;\n    "])));
});
exports.SideForm = SideForm;
var Camera = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: calc(50% - 12px);\n  bottom: 25px;\n\n  svg {\n    font-size: 25px;\n    color: white;\n  }\n"])));
exports.Camera = Camera;
var UserData = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n\n  h1 {\n    font-size: 20px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  > button {\n    width: auto;\n    background: ", ";\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n     text-align: right;\n    "])));
});
exports.UserData = UserData;
var SavedPlaces = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 90%;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 768px){\n    width: 75%;\n    margin-top: 40px;\n    h1 {\n      font-size: 24px;\n      text-align: left;\n    }\n    ul{\n      width: 100%;\n    }\n    button {\n      width: 50%;\n      align-self: flex-end;\n    }\n  }\n\n"])));
exports.SavedPlaces = SavedPlaces;
var UploadImageIcon = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));
exports.UploadImageIcon = UploadImageIcon;
var SkeletonWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
exports.SkeletonWrapper = SkeletonWrapper;
var WrapperForm = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    width: 100%;\n  }\n"])));
exports.WrapperForm = WrapperForm;