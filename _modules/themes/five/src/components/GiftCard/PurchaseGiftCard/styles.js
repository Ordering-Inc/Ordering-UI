"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconControl = exports.GiftCardsWrapper = exports.GiftCardsListContainer = exports.GiftCardItem = exports.Container = exports.CardImageStyled = exports.CardImage = exports.ActionButtonContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 30px;\n\n  h2 {\n    font-size: 24px;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 24px;\n  }\n  > p {\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 0;\n  }\n"])));
var GiftCardsListContainer = exports.GiftCardsListContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 30px 20px;\n"])));
var GiftCardsWrapper = exports.GiftCardsWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"])));
var GiftCardItem = exports.GiftCardItem = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid ", ";\n  padding: 20px 0;\n\n  > span {\n    font-size: 16px;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
});
var IconControl = exports.IconControl = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  svg {\n    font-size: 24px;\n  }\n\n  svg[disabled] {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.lightGray;
});
var ActionButtonContainer = exports.ActionButtonContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  position: sticky;\n  bottom: 0px;\n  background-color: ", ";\n  padding: 15px 20px;\n  > button {\n    height: 44px;\n    width: 100%;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var CardImageStyled = exports.CardImageStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  height: 38px;\n  width: 38px;\n  min-width: 38px;\n  min-height: 38px;\n  border-radius: 8px;\n  box-shadow: 0px 1px 4px rgba(0,0,0,0.1);\n  margin: 0 12px;\n"])));
var CardImage = exports.CardImage = function CardImage(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  if (props.soldOut) {
    style.filter = 'brightness(70%)';
  }
  return /*#__PURE__*/_react.default.createElement(CardImageStyled, _extends({}, props, {
    style: style
  }), props.children);
};