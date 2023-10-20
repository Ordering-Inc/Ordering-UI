"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperInput = exports.WrapperImage = exports.UploadImageIconContainer = exports.UploadImageIcon = exports.SkeletonWrapper = exports.NewImage = exports.InsertImageContainer = exports.ImageListContainer = exports.Image = exports.CloseButton = exports.Camera = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var InsertImageContainer = exports.InsertImageContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1 {\n    font-size: 20px;\n    font-weight: 700;\n    margin-bottom: 25px;\n  }\n  > button {\n    height: 42px;\n  }\n"])));
var ImageListContainer = exports.ImageListContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 20px;\n"])));
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 5px;\n  cursor: pointer;\n  transition: all 250ms;\n  position: relative;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n  img {\n    height: 120px;\n    background-color: #CCC;\n  }\n"])));
var CloseButton = exports.CloseButton = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 5px;\n  margin: 0 5px;\n  border-radius: 50%;\n  background-color: #E63757;\n  width: 24px;\n  height: 24px;\n  padding: 0 5px;\n  svg {\n    color: #FFF;\n    font-size: 14px;\n  }\n"])));
var WrapperInput = exports.WrapperInput = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n\n  label {\n    font-size: 14px;\n  }\n"])));
var NewImage = exports.NewImage = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  margin: 20px auto;\n\n  @media (min-width: 768px){\n    width: auto;\n  }\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 130px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 8px;\n    height: 100%;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n"])), function (_ref) {
  var isImage = _ref.isImage,
    theme = _ref.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
});
var Camera = exports.Camera = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  > * {\n    margin-top: 10px;\n    width: 30px;\n    height: 30px;\n  }\n"])));
var UploadImageIconContainer = exports.UploadImageIconContainer = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  background: rgba(0,0,0,0.2);\n  padding: 4px;\n"])));
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #FFF;\n  border: 1px dashed #fff;\n  span {\n    margin: 0;\n  }\n\n  svg {   \n    width: 45px;\n    height: 45px;\n  }\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));