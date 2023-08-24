"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollBoxWrapper = exports.ScrollBoxContainer = exports.ScrollBox = exports.ArrowButton = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ScrollBox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n"])));
exports.ScrollBox = ScrollBox;
var ScrollBoxWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow-y: hidden;\n  overflow-x: scroll;\n  -ms-overflow-style: none; /* IE */\n  overflow: -moz-scrollbars-none; /* Firefox */\n\n  &::-webkit-scrollbar {\n   display: none; /* Chrome and Safari */\n }\n"])));
exports.ScrollBoxWrapper = ScrollBoxWrapper;
var ScrollBoxContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  display: inline-flex;\n"])));
exports.ScrollBoxContainer = ScrollBoxContainer;
var ArrowButton = _styledComponents.default.span(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: none;\n  @media (min-width: 1025px) {\n    position: absolute;\n    cursor: pointer;\n    z-index: 10;\n    width: 25px;\n    min-width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background: #D9D9D9;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid #D9D9D9;\n    opacity: 0.8;\n\n    ", "\n\n    svg {\n      color: #000000;\n      font-size: 24px;\n    }\n  }\n"])), function (_ref) {
  var isRight = _ref.isRight;
  return isRight && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      right: 0px;\n    "])));
});
exports.ArrowButton = ArrowButton;