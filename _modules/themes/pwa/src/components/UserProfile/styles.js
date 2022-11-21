"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperForm = exports.UserProfileContainer = exports.UserName = exports.UserInfomation = exports.UserInfo = exports.UserImage = exports.UserData = exports.UploadImageIcon = exports.Title = exports.SkeletonWrapper = exports.SideForm = exports.ShortLinks = exports.SavedPlaces = exports.RedireactLink = exports.ProfileImage = exports.ProfileContainer = exports.LogoutWrapper = exports.LinkItem = exports.LanguageSelectorWrapper = exports.ImageWrapper = exports.Image = exports.FooterMenuWrapper = exports.Divider = exports.Container = exports.Camera = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n"])));

exports.Container = Container;

var UserProfileContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n\n  @media (min-width: 768px) {\n    align-items: flex-start;\n    flex-direction: row;\n  }\n"])));

exports.UserProfileContainer = UserProfileContainer;

var Image = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 150px;\n  height: 150px;\n  border-radius: 7.6px;\n  overflow: hidden;\n  margin: 20px 0;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 7.6px;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 768px){\n    margin: 0;\n    margin-top: 40px;\n  }\n\n  @media (min-width: 1024px){\n    width: 145px;\n    height: 145px;\n  }\n\n  @media (min-width: 1200px){\n    width: 175px;\n    height: 175px;\n  }\n"])));

exports.Image = Image;

var SideForm = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  \n\n  @media (min-width: 768px) {\n    width: 71%;\n    display: flex;\n    align-items: center;\n    margin: 40px 0px 0px 40px;\n    ", "\n  }\n\n  @media (min-width: 1200px) {\n    width: 74%;\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      margin: auto 30px auto 0px;\n    "])));
});

exports.SideForm = SideForm;

var Camera = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: calc(50% - 12px);\n  bottom: 25px;\n\n  svg {\n    font-size: 25px;\n    color: #fff;\n  }\n"])));

exports.Camera = Camera;

var UserData = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n\n  h1 {\n    font-size: 20px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  > button {\n    width: auto;\n    background: ", ";\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n     text-align: right;\n    "])));
});

exports.UserData = UserData;

var SavedPlaces = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  color: #344050;\n\n  h1 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 36px;\n    text-align: left;\n    ", "\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  .address {\n    text-align: left;\n  }\n\n  #list {\n    margin-top: 10px;\n    .wrapAddress span.radio {\n      font-size: 16px;\n    }\n    li {\n      border: none;\n      border-bottom: 1px solid #00000029;\n    }\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 768px){\n    width: 90%;\n    margin-top: 40px;\n    h1 {\n      text-align: center;\n    }\n    ul{\n      width: 100%;\n    }\n    button {\n      width: 50%;\n      align-self: flex-end;\n    }\n  }\n\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});

exports.SavedPlaces = SavedPlaces;

var UploadImageIcon = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));

exports.UploadImageIcon = UploadImageIcon;

var SkeletonWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));

exports.SkeletonWrapper = SkeletonWrapper;

var WrapperForm = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  @media (min-width: 768px) {\n    width: 100%;\n  }\n"])));

exports.WrapperForm = WrapperForm;

var ProfileContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 68px);\n  position: relative;\n\n  @media (min-width: 576px) {\n    min-height: 85vh;\n  }\n\n  @media(min-width: 1024px) {\n    padding: 40px;\n  }\n"])));

exports.ProfileContainer = ProfileContainer;

var Title = _styledComponents.default.h1(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 36px;\n  color: #344050;\n  margin-top: 0px;\n"])));

exports.Title = Title;

var UserInfomation = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  \n"])));

exports.UserInfomation = UserInfomation;

var UserImage = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: relative;\n"])));

exports.UserImage = UserImage;

var ProfileImage = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: flex-start;\n  width: 25%;\n  @media(min-width: 768px) {\n    width: 100px;\n  }\n"])));

exports.ProfileImage = ProfileImage;

var ImageWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-radius: 7.6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    font-size: 40px;\n  }\n\n  @media(min-width: 768px) {\n    width: 80px;\n    height: 80px;\n  }\n"])));

exports.ImageWrapper = ImageWrapper;

var UserInfo = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n display: flex;\n flex-direction: column;\n"])));

exports.UserInfo = UserInfo;

var RedireactLink = _styledComponents.default.a(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  text-decoration: underline;\n  color: ", ";\n  font-size: 13px;\n  line-height: 18px;\n  @media(min-width: 768px) {\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.RedireactLink = RedireactLink;

var UserName = _styledComponents.default.h2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  margin-top: 0;\n  margin-bottom: 5px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 30px;\n  color: #344050;\n  text-transform: capitalize;\n  @media(min-width: 768px) {\n    font-size: 24px;\n  }\n"])));

exports.UserName = UserName;

var Divider = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  height: 10px;\n  width: calc(100% + 40px);\n  margin: 16px 0;\n  margin-left: -20px;\n  background: #F8F9FA;\n\n  @media(min-width: 1024px) {\n    width: calc(100% + 80px);\n    margin-left: -40px;\n  }\n"])));

exports.Divider = Divider;

var ShortLinks = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.ShortLinks = ShortLinks;

var LinkItem = _styledComponents.default.a(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: fit-content;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 24px;\n  color: #344050;\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  cursor: pointer;\n\n  span {\n    display: flex;\n    width: 25px;\n    svg {\n      max-width: 18px;\n      max-height: 18px;\n    }\n  }\n\n  &:hover {\n    margin-left: 2px;\n    transition: 0.2s ease-in-out;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.LinkItem = LinkItem;

var LanguageSelectorWrapper = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  svg {\n    font-size: 16px;\n    min-width: 16px;\n  }\n\n  #select-input {\n    width: 100%;\n    height: auto;\n    background-color: transparent !important;\n    border: none;\n    border-radius: 0px;\n    #list {\n      min-width: 150px;\n      left: 0;\n      max-height: 200px;\n      border-radius: 0px;\n      background-color: #fff;\n      border: none;\n      border-bottom: 1px solid #E9ECEF;\n      box-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;\n      font-size: 13px;\n      bottom: 100%;\n      overflow: auto;\n\n      ", "\n    }\n\n    @media(min-width: 768px) {\n      width: 30%;\n      max-width: 185px;\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n        left: initial;\n        right: 0px;\n      "])));
});

exports.LanguageSelectorWrapper = LanguageSelectorWrapper;

var LogoutWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  margin-top: 20px;\n\n  span {\n    font-weight: 500;\n    font-size: 14px;\n  }\n\n  svg {\n    font-size: 16px;\n    min-width: 16px;\n    margin-right: 9px;\n\n    ", "\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin-right: initial;\n      margin-left: 9px;\n    "])));
});

exports.LogoutWrapper = LogoutWrapper;

var FooterMenuWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  bottom: 15px;\n  padding: 20px;\n"])));

exports.FooterMenuWrapper = FooterMenuWrapper;