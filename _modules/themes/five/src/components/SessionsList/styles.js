"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SessionsWrapper = exports.SessionsListContainer = exports.SessionItem = exports.SeessionDelete = exports.NoSessionsContainer = exports.NoMessage = exports.DurationWrapper = exports.ButtonsGroup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SessionsListContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px 15px 15px 15px;\n  box-sizing: border-box;\n  min-height: calc(100vh - 280px);\n\n  @media (min-width: 769px) {\n    width: 70%;\n  }\n"])));

exports.SessionsListContainer = SessionsListContainer;

var Title = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 32px;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 40px;\n  \n  @media (min-width: 768px) {\n    padding: 0 15px;\n  }\n"])));

exports.Title = Title;

var SessionItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px 0px;\n  border-bottom: 1px solid ", ";\n  \n  > p.current {\n    flex: 1;\n    font-weight: 700;\n    font-size: 14px;\n    margin: 0 15px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 15px;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
});

exports.SessionItem = SessionItem;

var DurationWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  p {\n    margin: 0;\n    font-size: 14px;\n  }\n  > span {\n    display: none;\n    margin: 0 10px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    > span {\n      display: block;\n    }\n  }\n"])));

exports.DurationWrapper = DurationWrapper;

var SeessionDelete = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 3px;\n  svg {\n    font-size: 20px;\n    color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n    svg {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
}, function (props) {
  return props.theme.colors.grayDividerColor;
}, function (props) {
  return props.theme.colors.darkGray;
});

exports.SeessionDelete = SeessionDelete;

var NoMessage = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n"])));

exports.NoMessage = NoMessage;

var SessionsWrapper = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.SessionsWrapper = SessionsWrapper;

var NoSessionsContainer = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > button {\n    height: 44px;\n    margin-top: 50px;\n  }\n"])));

exports.NoSessionsContainer = NoSessionsContainer;

var ButtonsGroup = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n\n  > button {\n    height: 44px;\n    margin: 10px 0;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-around;\n  }\n"])));

exports.ButtonsGroup = ButtonsGroup;