"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconControl = exports.GiftCardsWrapper = exports.GiftCardsListContainer = exports.GiftCardItem = exports.Container = exports.ActionButtonContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 30px;\n\n  h2 {\n    font-size: 24px;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 24px;\n  }\n  > p {\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n  }\n"])));
exports.Container = Container;
var GiftCardsListContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 30px 20px;\n"])));
exports.GiftCardsListContainer = GiftCardsListContainer;
var GiftCardsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"])));
exports.GiftCardsWrapper = GiftCardsWrapper;
var GiftCardItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  padding: 20px 0;\n\n  > span {\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
});
exports.GiftCardItem = GiftCardItem;
var IconControl = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  margin-right: 40px;\n  ", "\n  svg {\n    font-size: 24px;\n  }\n\n  svg[disabled] {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 40px;\n    margin-right: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.lightGray;
});
exports.IconControl = IconControl;
var ActionButtonContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  bottom: 0px;\n  background-color: ", ";\n  padding: 15px 20px;\n  > button {\n    height: 44px;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
exports.ActionButtonContainer = ActionButtonContainer;