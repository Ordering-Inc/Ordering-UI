"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spaces = exports.smartbannerIconSize = exports.smartbannerIconMargin = exports.smartbannerCloseSize = exports.smartbannerCloseMargin = exports.smartbannerButtonSize = exports.Title = exports.Description = exports.BannerWrapper = exports.BannerInfo = exports.BannerIconStyled = exports.BannerIcon = exports.BannerContainer = exports.BannerClose = exports.Banner = exports.AppAuthor = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var smartbannerCloseMargin = 5;
exports.smartbannerCloseMargin = smartbannerCloseMargin;
var smartbannerCloseSize = 17;
exports.smartbannerCloseSize = smartbannerCloseSize;
var smartbannerIconMargin = 12;
exports.smartbannerIconMargin = smartbannerIconMargin;
var smartbannerIconSize = 57;
exports.smartbannerIconSize = smartbannerIconSize;
var smartbannerButtonSize = 100;
exports.smartbannerButtonSize = smartbannerButtonSize;
var spaces = smartbannerCloseMargin + smartbannerCloseSize + smartbannerIconMargin + smartbannerIconSize + smartbannerButtonSize;
exports.spaces = spaces;

var Banner = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  left: 0;\n  width: 100%;\n  height: 0px;\n  line-height: 80px;\n  font-family: 'Helvetica Neue', sans-serif;\n  background: #f4f4f4;\n  z-index: 9998;\n  -webkit-font-smoothing: antialiased;\n  overflow: hidden;\n  -webkit-text-size-adjust: none;\n  transition:height 0.4s;\n\n  &.smartbanner-ios {\n    background: #f2f2f2;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n    line-height: 80px;\n    .banner-close {\n      border: 0;\n      width: 18px;\n      height: 18px;\n      line-height: 18px;\n      font-family: Arial;\n      color: #888;\n      text-shadow: 0 1px 0 #fff;\n      -webkit-font-smoothing: none;\n      &:active,\n      &:hover {\n        color: #888;\n      }\n    }\n    .banner-icon {\n      background-size: cover;\n    }\n    .banner-info {\n      color: #6a6a6a;\n      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n      font-weight: 300;\n    }\n    .banner-title {\n      color: #4d4d4d;\n      font-weight: 500;\n    }\n    .banner-button {\n      padding: 0 10px;\n      min-width: 10%;\n      color: #6a6a6a;\n      background: #efefef;\n      background: linear-gradient(to bottom, #efefef, #dcdcdc);\n      border-radius: 3px;\n      box-shadow: inset 0 0 0 1px #bfbfbf, 0 1px 0 rgb(255 255 255 / 60%), 0 2px 0 rgb(255 255 255 / 70%) inset;\n      &:active,\n      &:hover {\n        background: linear-gradient(to bottom, #dcdcdc, #efefef);\n      }\n    }\n  }\n  &.smartbanner-android {\n    background: #3d3d3d url('data:image/gif;base64,R0lGODlhCAAIAIABAFVVVf///yH5BAEHAAEALAAAAAAIAAgAAAINRG4XudroGJBRsYcxKAA7');\n    box-shadow: inset 0 4px 0 #88b131;\n    line-height: 82px;\n    .banner-close {\n      border: 0;\n      max-width: ", "px;\n      width: 100%;\n      height: ", "px;\n      line-height: ", "px;\n      margin-right: 7px;\n      color: #b1b1b3;\n      background: #1c1e21;\n      text-shadow: 0 1px 1px #000;\n      text-decoration: none;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.8) inset, 0 1px 1px rgba(255, 255, 255, 0.3);\n      cursor: pointer;\n      &:active,\n      &:hover {\n        color: #eee;\n      }\n    }\n    .banner-icon {\n      background-color: transparent;\n      box-shadow: none;\n    }\n    .banner-info {\n      color: #ccc;\n      text-shadow: 0 1px 2px #000;\n    }\n    .banner-title {\n      color: #fff;\n      font-weight: bold;\n    }\n    .banner-button {\n      min-width: 12%;\n      color: #d1d1d1;\n      font-weight: bold;\n      padding: 0;\n      background: none;\n      border-radius: 0;\n      box-shadow: 0 0 0 1px #333, 0 0 0 2px #dddcdc;\n      &:active,\n      &:hover {\n        background: none;\n      }\n    }\n    .banner-button-text {\n      text-align: center;\n      display: block;\n      padding: 0 10px;\n      background: #42b6c9;\n      background: linear-gradient(to bottom, #42b6c9, #39a9bb); // sass-lint:disable-block no-duplicate-properties\n      text-transform: none;\n      text-shadow: none;\n      box-shadow: none;\n      &:active,\n      &:hover {\n        background: #2ac7e1;\n      }\n    }   \n  }\n"])), smartbannerCloseSize, smartbannerCloseSize, smartbannerCloseSize);

exports.Banner = Banner;

var BannerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  padding: 0 10px;\n"])));

exports.BannerContainer = BannerContainer;

var BannerClose = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 ", "px 0 0;\n  font-family: 'ArialRoundedMTBold', Arial;\n  font-size: 20px;\n  text-align: center;\n  color: #888;\n  text-decoration: none;\n  border: 0;\n  border-radius: 14px;\n  padding: 0 0 1px;\n  background-color: transparent;\n  -webkit-font-smoothing: subpixel-antialiased;\n  &:active,\n  &:hover {\n    color: #aaa;\n  }\n"])), smartbannerCloseMargin);

exports.BannerClose = BannerClose;

var BannerIconStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: inline-block;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n  margin-right: ", "px;\n  border-radius: 10px;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), smartbannerIconSize, smartbannerIconSize, smartbannerIconMargin, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    & > * {\n      color\n    }\n  "])));
}, function (_ref2) {
  var bgImg = _ref2.bgImg;
  return bgImg && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
}, function (_ref3) {
  var ios = _ref3.ios;
  return ios && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-size: cover;\n  "])));
}, function (_ref4) {
  var andriod = _ref4.andriod;
  return andriod && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background-color: transparent;\n    box-shadow: none;\n  "])));
});

exports.BannerIconStyled = BannerIconStyled;

var BannerIcon = function BannerIcon(props) {
  var style = {};

  if (props.bgImg) {
    style.backgroundImage = "url(".concat(props.bgImg, ")");
  } else {
    style.backgroundColor = '#ddd';
  }

  return /*#__PURE__*/_react.default.createElement(BannerIconStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BannerIcon = BannerIcon;

var BannerInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  white-space: normal;\n  display: inline-block;\n  vertical-align: middle;\n  width: calc(99% - ", "px);\n  font-size: 11px;\n  line-height: 1.2em;\n  font-weight: bold;\n"])), spaces);

exports.BannerInfo = BannerInfo;

var Title = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-size: 13px;\n  line-height: 18px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  text-transform: capitalize;\n"])));

exports.Title = Title;

var AppAuthor = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  &:empty {\n    + .banner-description {\n      max-height: 50px;\n    }\n  }\n"])));

exports.AppAuthor = AppAuthor;

var Description = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  max-height: 40px;\n  overflow: hidden;\n"])));

exports.Description = Description;

var BannerWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: ", "px;\n  display: inline-block;\n  text-align: right;\n  width: 100%;\n  .banner-button {\n    margin: auto 0;\n    height: 24px;\n    font-size: 14px;\n    line-height: 24px;\n    text-align: center;\n    font-weight: bold;\n    color: #6a6a6a;\n    text-transform: uppercase;\n    text-decoration: none;\n    display: inline-block;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.8);\n    &:active,\n    &:hover {\n      color: #aaa;\n    }\n  }\n"])), smartbannerButtonSize);

exports.BannerWrapper = BannerWrapper;