"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPhoto = exports.UserDummyAvatarWrapper = exports.InfoWrapper = exports.Container = exports.ActionWrapper = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  margin: 10px;\n  min-width: 205px;\n  ", "\n  ", "\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.gray200;
}, function (_ref) {
  var active = _ref.active;
  return active && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var isCursor = _ref2.isCursor;
  return isCursor && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "])));
});
exports.Container = Container;
var UserPhotoStyled = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  border-radius: 4px;\n\n  ", "\n\n  ", "\n"])), function (_ref3) {
  var isSmallPhoto = _ref3.isSmallPhoto;
  return isSmallPhoto ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    min-height: 42px;\n    width: 42px;\n    height: 42px;\n  "]))) : (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    min-height: 86px;\n    width: 86px;\n    height: 86px;\n  "])));
}, function (_ref4) {
  var isSkeleton = _ref4.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.gray200;
  });
});
var UserPhoto = function UserPhoto(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(UserPhotoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.UserPhoto = UserPhoto;
var UserDummyAvatarWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  svg {\n    ", "\n  }\n"])), function (_ref5) {
  var isSmallPhoto = _ref5.isSmallPhoto;
  return isSmallPhoto ? (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      width: 42px;\n      height: 42px;\n    "]))) : (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      width: 86px;\n      height: 86px;\n    "])));
});
exports.UserDummyAvatarWrapper = UserDummyAvatarWrapper;
var InfoWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: calc(100% - 60px);\n  margin-left: 20px;\n  ", "\n  > h4 {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n  p {\n    margin-top: 2px;\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 22px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 20px;\n  "])));
});
exports.InfoWrapper = InfoWrapper;
var ActionWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  ", "\n  display: flex;\n  align-items: center;\n  > .info {\n    cursor: pointer;\n    font-size: 16px;\n    margin-right: 7px;\n    ", "\n  }\n  > span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    svg {\n      color: ", ";\n      font-size: 16px;\n      margin-top: 2px;\n    }\n  }\n"])), function (_ref6) {
  var isSmallPhoto = _ref6.isSmallPhoto;
  return !isSmallPhoto && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    margin-top: 15px;\n  "])));
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 7px;\n    "])));
}, function (props) {
  return props.theme.colors.danger500;
});
exports.ActionWrapper = ActionWrapper;