"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapPickupButton = exports.ErrorMessage = exports.PickupBusinessList = exports.LeftInnerContainer = exports.LeftContent = exports.WrapperBusinesses = exports.MapSkeleton = exports.WrapperBusinessMap = exports.InnerContainer = exports.PickupBusinessContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PickupBusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #fff;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  padding-top: 60px;\n  @media (max-width: 992px) {\n    padding-top: 0px;    \n  }\n "])));

exports.PickupBusinessContainer = PickupBusinessContainer;

var InnerContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 91%;\n  padding: 20px 0;\n  display: flex;\n  \n  @media (max-width: 992px) {\n    flex-direction: column;\n  }\n"])));

exports.InnerContainer = InnerContainer;

var WrapperBusinessMap = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  > div {\n    height: calc(100vh - 100px);\n    position: sticky;\n    top: 80px;\n    border-radius: 10px;\n    overflow: hidden;\n\n    #map {\n      width: 100% !important;\n    }\n  }\n\n  @media (max-width: 992px) {\n    > div {\n      height: calc(100vh - 160px);\n    }\n  }\n"])));

exports.WrapperBusinessMap = WrapperBusinessMap;

var MapSkeleton = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  height: calc(100vh - 100px);\n  position: sticky;\n  top: 80px;\n  width: 100%;\n\n  span {\n    height: 100% !important;\n  }\n\n  @media (max-width: 992px) {\n    height: calc(100vh - 160px);\n  }\n"])));

exports.MapSkeleton = MapSkeleton;

var WrapperBusinesses = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n\n  > div {\n    &:nth-child(2) {\n      padding-bottom: 50px;\n    }\n  }\n"])));

exports.WrapperBusinesses = WrapperBusinesses;

var LeftContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (max-width: 992px) {\n    width: 100%;\n  }\n"])));

exports.LeftContent = LeftContent;

var LeftInnerContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: sticky;\n  top: 60px;\n  padding: 30px 0;\n  z-index: 10;\n"])));

exports.LeftInnerContainer = LeftInnerContainer;

var PickupBusinessList = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  @media (max-width: 992px) {\n    > div {\n      margin: 10px;\n      &:not(:first-child) {\n        width: calc(50% - 20px);\n      }\n    }\n    padding-bottom: 30px;\n  }\n  @media (max-width: 576px) {\n    > div {\n      margin: 5px;\n\n      &: first-child {\n        width: 100%;\n      }\n\n      &:not(:first-child) {\n        width: calc(50% - 10px);\n      }\n    }\n  }\n"])));

exports.PickupBusinessList = PickupBusinessList;

var ErrorMessage = _styledComponents.default.span(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));

exports.ErrorMessage = ErrorMessage;

var WrapPickupButton = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: none;\n"])));

exports.WrapPickupButton = WrapPickupButton;