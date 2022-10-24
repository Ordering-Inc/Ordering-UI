"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleContainer = exports.DeliveryPickupContainer = exports.BusinessInfoContainer = exports.BusinessContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessInfoContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 420px;\n"])));

exports.BusinessInfoContainer = BusinessInfoContainer;

var BusinessContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 400px;\n  height: 400px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 200px;\n  justify-content: center;\n  align-items: flex-end;\n  border-radius: 0;\n  position: absolute;\n  left: 0;\n  border-bottom: 1px solid #fff;\n  ", "\n\n  ", "\n\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n\n  @media (min-width: 490px) {\n    justify-content: flex-start;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-color: #cccccc;\n  "])));
}, function (props) {
  return props.bgimage && !props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ");\n  "])), props.bgimage);
});

exports.BusinessContainer = BusinessContainer;

var DeliveryPickupContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  display: flex;\n  position: relative;\n  flex-direction: row-reverse;\n  border-radius: 0px;\n  border: 1px solid ", ";\n  height: 52px;\n  background-color: transparent;\n  width: 300px;\n  margin-bottom: 10px;\n  button {\n    outline: none;\n    background: none;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    z-index: 1;\n  }\n\n  &::after {\n    ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.gold;
}, function (_ref2) {
  var orderTypeSelected = _ref2.orderTypeSelected;
  return orderTypeSelected === 1 ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      content: \"\";\n      background:  ", ";\n      position: absolute;\n      transition: all 0.2s linear 0s;\n      left: 6px;\n      bottom: 5px;\n      height: calc(100% - 10px);\n      width: calc(50% - 6px);\n    "])), function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.gold;
  }) : (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      content: \"\";\n      background: ", ";\n      position: absolute;\n      transition: all 0.2s linear 0s;\n      bottom: 5px;\n      height: calc(100% - 10px);\n      width: calc(50% - 6px);\n      left: 50%;\n      \n    "])), function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.gold;
  });
});

exports.DeliveryPickupContainer = DeliveryPickupContainer;

var TitleContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  h2{\n    color: #fff;\n    font-size: 20px;\n  }\n  svg {\n    font-size: 34px;\n    color: ", ";\n    cursor: pointer;\n  }\n\n  span {\n    position: relative;\n    bottom: 5px;\n    margin-top: 15px;\n    margin-bottom: 5px;\n  }\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.gold;
});

exports.TitleContainer = TitleContainer;