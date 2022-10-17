"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexTabs = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FlexTabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  div{\n    justify-content: space-evenly\n  }\n  \n  a{\n    text-decoration: none;\n    color: inherit;\n  }\n\n  svg{\n    position: relative;\n    top: 2px;\n  }\n\n  ", "\n\n  @media (min-width: 480px){\n    width: ", ";\n    margin: 0 auto;\n  }\n\n  @media (min-width: 768px){\n    width: ", ";\n  }\n"])), function (_ref) {
  var pfchangs = _ref.pfchangs;
  return pfchangs && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid #fff;\n      div{\n        div{\n          flex: 1;\n          display: flex; \n          justify-content: center;\n          padding: 20px;\n          border-bottom-width: 3px;\n        }\n      }\n      a{\n        font-size: 24px;\n        svg {\n          display: none;\n        }\n      }\n  "])));
}, function (_ref2) {
  var pfchangs = _ref2.pfchangs;
  return pfchangs ? '100%' : '70%';
}, function (_ref3) {
  var pfchangs = _ref3.pfchangs;
  return pfchangs ? '100%' : '70%';
});
exports.FlexTabs = FlexTabs;