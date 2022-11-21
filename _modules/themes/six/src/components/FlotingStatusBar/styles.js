"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusFloting = exports.Shape = exports.SelectStore = exports.RotateShape = exports.PickerTitle = exports.OutsideShape = exports.NotifyTost = exports.NotifyContent = exports.CounterWrapper = exports.Counter = exports.CartStates = exports.CartCount = exports.BusinessPicker = exports.BaseShape = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StatusFloting = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: -1px;\n  left: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;  \n  padding: 12px 0 14px;\n  color: #fff;\n  background-color: ", ";\n  box-sizing: border-box;\n  z-index: 50;\n"])), function (props) {
  return props.theme.colors.primaryDarkBackground;
});

exports.StatusFloting = StatusFloting;

var BusinessPicker = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\n"])));

exports.BusinessPicker = BusinessPicker;

var PickerTitle = _styledComponents.default.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 24px;\n  margin: 0;\n  color: #cecece;\n"])));

exports.PickerTitle = PickerTitle;

var SelectStore = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 3px;\n  border-bottom: 1px solid #fff;\n  min-width: 240px;\n  width: 60vw;\n  cursor: pointer;\n  @media (min-width: 768px) {\n    width: 333px;\n  } \n"])));

exports.SelectStore = SelectStore;

var CartStates = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    font-size: 1.5rem;\n  }  \n"])));

exports.CartStates = CartStates;

var CartCount = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: absolute;\n  line-height: 16px;\n  font-size: 16px;\n  top: 12px;\n"])));

exports.CartCount = CartCount;

var NotifyTost = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: -49px;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  padding: 0 20px;\n  box-sizing: border-box;\n  background-color: #495057;\n  color: #fff;\n  \n"])));

exports.NotifyTost = NotifyTost;

var NotifyContent = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  flex-direction: flex-start;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  max-width: 93%;\n  margin: 0 auto;\n  svg {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      right: unset;\n      left: 10px;\n    "])));
});

exports.NotifyContent = NotifyContent;

var CounterWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 30px;\n  z-index: 10;\n"])));

exports.CounterWrapper = CounterWrapper;

var Counter = _styledComponents.default.span(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 50px;\n  height: 65px;\n  display: flex;\n  box-sizing: border-box;\n"])));

exports.Counter = Counter;

var OutsideShape = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  bottom: 100%;\n  margin-bottom: 16px;\n  right: 0;\n  top: 0;\n"])));

exports.OutsideShape = OutsideShape;

var RotateShape = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  border-radius: 50% 50% 50% 0;\n  transform: rotate(-45deg);\n  background-color: #fff;\n  box-shadow: 0 0 3px 0 #000;\n  opacity: 1;\n"])));

exports.RotateShape = RotateShape;

var Shape = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n"])));

exports.Shape = Shape;

var BaseShape = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  height: 40px !important;\n  width: 40px;\n  transform: rotate(45deg) translate(7px);\n  position: relative;\n  box-sizing: border-box;\n  border: 1px solid ", ";\n  ", "\n  img {\n    width: 100%;\n    opacity: 1;\n    transition: opacity .15s ease-in;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: inherit;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    transform: rotate(45deg) translate(0px, 7px);\n  "])));
});

exports.BaseShape = BaseShape;