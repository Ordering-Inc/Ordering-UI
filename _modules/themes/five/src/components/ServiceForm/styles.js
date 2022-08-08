"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwiperWrapper = exports.StatusInfo = exports.SelectedItem = exports.SectionHeader = exports.ScheduleWrapper = exports.ProfessionalSelectWrapper = exports.ProfessionalPhoto = exports.ProfessionalInfoWrapper = exports.PriceAndDuration = exports.NameWrapper = exports.InfoWrapper = exports.ImageWrapper = exports.HeaderInfoWrapper = exports.DropDownWrapper = exports.DropDownTitle = exports.Divider = exports.Container = exports.ButtonWrapper = exports.ArrowButtonWrapper = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: 100vh;\n  position: relative;\n  @media (min-width: 1200px) {\n    max-height: calc(70vh - 20px);\n  }\n"])));

exports.Container = Container;

var ImageWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  width: 100%;\n  position: relative;\n"])));

exports.ImageWrapper = ImageWrapper;

var SwiperWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  .mySwiper2 {\n    height: 250px;\n    width: 100%;\n\n    .swiper-slide-active {\n      border-radius: 0px;\n      img {\n        border-radius: 0px;\n      }\n    }\n\n    @media (min-width: 576px) {\n      height: 320px;\n    }\n  }\n\n  .swiper {\n    width: 100%;\n    height: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .swiper-slide {\n    background-size: cover;\n    background-position: center;\n  }\n  .swiper-slide img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"])));

exports.SwiperWrapper = SwiperWrapper;

var ArrowButtonWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 10;\n  top: calc(50% - 12px);\n  > svg {\n    width: 24px;\n    height: 24px;\n    color: ", ";\n  }\n  &.button-prev {\n    left: 30px;\n  }\n  &.button-next {\n    right: 30px;\n  }\n  &.swiper-button-disabled {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});

exports.ArrowButtonWrapper = ArrowButtonWrapper;

var HeaderInfoWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 28px 20px 16px 20px;\n  h2 {\n    margin-top: 0px;\n    margin-bottom: 5px;\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 42px;\n  }\n  p {\n    font-weight: 400;\n    font-size: 16px;\n    margin: 0px;\n    color: ", ";\n    white-space: pre-wrap;\n  }\n"])), function (props) {
  return props.theme.colors.darkGray;
});

exports.HeaderInfoWrapper = HeaderInfoWrapper;

var PriceAndDuration = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  span {\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 27px;\n    &.dot {\n      margin: 0px 5px;\n    }\n  }\n"])));

exports.PriceAndDuration = PriceAndDuration;

var Divider = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 8px;\n  background: ", ";\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});

exports.Divider = Divider;

var ProfessionalInfoWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-top: 18px;\n  padding: 0px 20px;\n"])));

exports.ProfessionalInfoWrapper = ProfessionalInfoWrapper;

var SectionHeader = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  > h2 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    margin: 0px;\n  }\n  span {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.danger500;
});

exports.SectionHeader = SectionHeader;

var ScheduleWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  padding: 0px 20px;\n  margin-top: 35px;\n  > div:last-child {\n    padding: 0px;\n  }\n"])));

exports.ScheduleWrapper = ScheduleWrapper;

var ButtonWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  background: ", ";\n  padding: 11px 20px 30px 20px;\n  border-top: ", ";\n  bottom: 0px;\n  z-index: 11;\n\n  span {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 24px;\n  }\n\n  button {\n    height: 44px;\n    width: 100%;\n    max-width: 300px;\n    &.soldout {\n      pointer-events: none;\n      background-color: hsl(0, 0%, 72%);\n    }\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  return props.theme.colors.gray200;
});

exports.ButtonWrapper = ButtonWrapper;

var ProfessionalSelectWrapper = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n"])));

exports.ProfessionalSelectWrapper = ProfessionalSelectWrapper;

var DropDownWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: absolute;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n  top: 100%;\n  margin-top: 5px;\n  border: 1px solid ", ";\n  background-color: ", ";\n  padding: 18px 16px;\n  width: 100%;\n  z-index: 10;\n  box-sizing: border-box;\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.backgroundPage;
});

exports.DropDownWrapper = DropDownWrapper;

var SelectedItem = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  justify-content: space-between;\n\n  border: 1px solid ", ";\n  border-radius: 7.6px;\n  cursor: pointer;\n  transition: all 0.3s linear;\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (_ref) {
  var isDropDown = _ref.isDropDown;
  return isDropDown && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border: none;\n    padding: 12px 0px;\n    border-top: 1px solid ", ";\n    border-radius: 0px;\n    &:hover {\n      background-color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.gray200;
  }, function (props) {
    return props.theme.colors.grayDividerColor;
  });
}, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), function (props) {
    return props.theme.colors.gray200;
  });
});

exports.SelectedItem = SelectedItem;

var DropDownTitle = _styledComponents.default.h1(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  margin-bottom: 18px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n"])));

exports.DropDownTitle = DropDownTitle;

var InfoWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex: 1;\n\n  svg {\n    width: 42px;\n    height: 42px;\n  }\n"])));

exports.InfoWrapper = InfoWrapper;

var ProfessionalPhotoStyled = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  height: 42px;\n  width: 42px;\n  min-width: 42px;\n  border-radius: 7.6px;\n"])));

var ProfessionalPhoto = function ProfessionalPhoto(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(ProfessionalPhotoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.ProfessionalPhoto = ProfessionalPhoto;

var NameWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin-left: 25px;\n  flex: 1;\n  ", "\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0px;\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    margin-right: 25px;\n    margin-left: 0px;\n  "])));
});

exports.NameWrapper = NameWrapper;

var StatusInfo = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  span {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 18px;\n    &.status {\n      color: ", ";\n    }\n  }\n\n  ", "\n"])), function (props) {
  return props.theme.colors.danger500;
}, function (_ref3) {
  var available = _ref3.available;
  return available && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    span.status {\n      color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.success500;
  });
});

exports.StatusInfo = StatusInfo;