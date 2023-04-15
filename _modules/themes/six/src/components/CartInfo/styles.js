"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTitle = exports.PreTime = exports.PickStore = exports.OrderReview = exports.Logo = exports.Item = exports.InfoWrapper = exports.HeaderText = exports.DeliveryItems = exports.Container = exports.BackHeader = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n"])));
exports.Container = Container;
var BackHeader = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  @media (min-width: 1024px) {\n    position: absolute;\n    top: 0;\n    left: 0;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      left: unset;\n      right: 0;\n    "])));
});
exports.BackHeader = BackHeader;
var Logo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin: 0px 5px;\n"])));
exports.Logo = Logo;
var HeaderText = _styledComponents.default.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  svg {\n    margin: 0 5px;\n  }\n"])));
exports.HeaderText = HeaderText;
var InfoWrapper = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;  \n"])));
exports.InfoWrapper = InfoWrapper;
var OrderReview = _styledComponents.default.h2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 29px;\n  margin: 11px 0 0;\n"])));
exports.OrderReview = OrderReview;
var PreTime = _styledComponents.default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  line-height: 19px;\n  margin: 11px 0;\n"])));
exports.PreTime = PreTime;
var SubTitle = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  line-height: 24px;\n  color: #ADB5BD;\n"])));
exports.SubTitle = SubTitle;
var PickStore = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 7px;\n  border-bottom: 1px solid #fff;\n  margin-bottom:2.5vw;\n  cursor: pointer;\n"])));
exports.PickStore = PickStore;
var DeliveryItems = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 10px;\n  flex-wrap: wrap;\n  \n"])));
exports.DeliveryItems = DeliveryItems;
var Item = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  min-width: 57px;  \n  height: 20px;\n  padding: 4px 10px;\n  background: #ADB5BD;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  line-height: 14px;\n  color: #fff;\n  cursor: pointer;\n\n  ", "\n\n  &:hover {\n    background: ", ";\n  }\n\n  &.active {\n    background-color: ", ";\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    margin-right: 0;\n    margin-left: 10px;\n  "])));
}, function (props) {
  return (0, _polished.darken)(0.02, props.theme.colors.primary);
}, function (props) {
  return props.theme.colors.primary;
});
exports.Item = Item;