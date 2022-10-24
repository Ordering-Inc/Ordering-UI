"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperForm = exports.UserProfileContainer = exports.UserImage = exports.UserData = exports.UploadImageIcon = exports.SkeletonWrapper = exports.SideForm = exports.SavedPlaces = exports.Image = exports.Container = exports.Camera = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

exports.Container = Container;

var UserProfileContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 90%;\n  margin: 25px auto ", ";\n\n  @media (min-width: 768px) {\n    align-items: flex-start;\n    flex-direction: row;\n  }\n"])), function (props) {
  return props.mbottom ? "".concat(props.mbottom, "px") : 'auto';
});

exports.UserProfileContainer = UserProfileContainer;

var UserImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  position: relative;\n\n  ", "\n\n  @media (min-width: 768px){\n    width: auto;\n    align-items: flex-end;\n  }\n"])), function (_ref) {
  var _theme$profile, _theme$profile$compon, _theme$profile$compon2;

  var theme = _ref.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$profile = theme.profile) === null || _theme$profile === void 0 ? void 0 : (_theme$profile$compon = _theme$profile.components) === null || _theme$profile$compon === void 0 ? void 0 : (_theme$profile$compon2 = _theme$profile$compon.layout) === null || _theme$profile$compon2 === void 0 ? void 0 : _theme$profile$compon2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    display: none;\n  "])));
});

exports.UserImage = UserImage;

var Image = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 170px;\n  height: 170px;\n  border-radius: 7.6px;\n  overflow: hidden;\n  padding: 20px;\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 480px){\n    width: 196px;\n    height: 196px;\n  }\n"])));

exports.Image = Image;

var SideForm = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  ", "\n  @media (min-width: 768px) {\n    width: 70%;\n    display: flex;\n    align-items: center;\n    margin: 30px 0px 0px 30px;\n    ", "\n  }\n"])), function (_ref2) {
  var _theme$profile2, _theme$profile2$compo, _theme$profile2$compo2;

  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$profile2 = theme.profile) === null || _theme$profile2 === void 0 ? void 0 : (_theme$profile2$compo = _theme$profile2.components) === null || _theme$profile2$compo === void 0 ? void 0 : (_theme$profile2$compo2 = _theme$profile2$compo.layout) === null || _theme$profile2$compo2 === void 0 ? void 0 : _theme$profile2$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: ", ";\n  "])), function (props) {
    return props.theme.colors.secundaryContrast;
  });
}, function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      margin: auto 30px auto 0px;\n    "])));
});

exports.SideForm = SideForm;

var Camera = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: calc(50% - 12px);\n  bottom: 25px;\n\n  svg {\n    font-size: 25px;\n    color: white;\n  }\n"])));

exports.Camera = Camera;

var UserData = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n\n  h1 {\n    font-size: 20px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  > button {\n    width: auto;\n    background: ", ";\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n     text-align: right;\n    "])));
});

exports.UserData = UserData;

var SavedPlaces = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 90%;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n\n\n  h1{\n    font-size: 24px;\n    text-align: left;\n    ", "\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  ", "\n\n  @media (min-width: 768px){\n    width: 90%;\n    margin-top: 40px;\n    h1 {\n      text-align: center;\n    }\n    ul{\n      width: 100%;\n    }\n    button {\n      width: 50%;\n      align-self: flex-end;\n    }\n    ", "\n  }\n\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    text-align: right;\n    "])));
}, function (_ref3) {
  var _theme$profile3, _theme$profile3$compo, _theme$profile3$compo2;

  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$profile3 = theme.profile) === null || _theme$profile3 === void 0 ? void 0 : (_theme$profile3$compo = _theme$profile3.components) === null || _theme$profile3$compo === void 0 ? void 0 : (_theme$profile3$compo2 = _theme$profile3$compo.layout) === null || _theme$profile3$compo2 === void 0 ? void 0 : _theme$profile3$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      width: 100%;\n      * {\n        color: #fff;\n      }\n    "])));
}, function (_ref4) {
  var _theme$profile4, _theme$profile4$compo, _theme$profile4$compo2;

  var theme = _ref4.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$profile4 = theme.profile) === null || _theme$profile4 === void 0 ? void 0 : (_theme$profile4$compo = _theme$profile4.components) === null || _theme$profile4$compo === void 0 ? void 0 : (_theme$profile4$compo2 = _theme$profile4$compo.layout) === null || _theme$profile4$compo2 === void 0 ? void 0 : _theme$profile4$compo2.type) === 'pfchangs' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      width: 90%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 25px auto auto;\n      box-sizing: border-box;\n      margin-bottom: 20px;\n      button { \n        display: none;\n      }\n      > div {\n        padding: 0;\n      }\n      h1 { \n        display: none;\n      }\n      ul {\n        box-sizing: border-box;\n        border: 1px solid #fff;\n        padding: 0px;\n        width: 70%;\n        margin: 30px 0 0 30px;\n      }\n    "])));
});

exports.SavedPlaces = SavedPlaces;

var UploadImageIcon = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var SkeletonWrapper = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var WrapperForm = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    width: 100%;\n  }\n"])));

exports.WrapperForm = WrapperForm;