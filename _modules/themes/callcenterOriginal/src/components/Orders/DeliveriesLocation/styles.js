"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperOnlineDrivers = exports.WrapperMap = exports.WrapperDriverImage = exports.WrapDriverInfo = exports.OnlineDrivers = exports.DriverInfo = exports.DriverImage = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var WrapperMap = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #EEE;\n  position: relative;\n"])));
exports.WrapperMap = WrapperMap;
var WrapperOnlineDrivers = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: ", ";\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px #00000029;\n  max-width: 60%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  overflow-y: hidden;\n  & > p {\n    font-weight: 600;\n    font-size: 14px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n"])), function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.primary;
});
exports.WrapperOnlineDrivers = WrapperOnlineDrivers;
var OnlineDrivers = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
exports.OnlineDrivers = OnlineDrivers;
var WrapDriverInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 10px;\n  align-items: center;\n  margin: 0 10px;\n  color: ", ";\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
});
exports.WrapDriverInfo = WrapDriverInfo;
var WrapperDriverImage = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  background: ", ";\n  box-shadow: 0px 3px 6px #00000029;\n  border-radius: 6px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return ((_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.backgroundPage) || '#FFF';
});
exports.WrapperDriverImage = WrapperDriverImage;
var DriverImgStyled = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 5px;\n"])));
var DriverImage = function DriverImage(props) {
  return /*#__PURE__*/_react.default.createElement(DriverImgStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};
exports.DriverImage = DriverImage;
var DriverInfo = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  p {\n    margin: 0px;\n    &:first-child {\n      font-size: 14px;\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    &:last-child {\n      font-size: 12px;\n    }\n  }\n"])));
exports.DriverInfo = DriverInfo;