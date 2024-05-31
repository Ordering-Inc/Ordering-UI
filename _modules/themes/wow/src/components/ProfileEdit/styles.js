"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIcon = exports.SkeletonWrapper = exports.ProfileContent = exports.Image = exports.Container = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    color: ", ";\n    font-size: 24px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var Image = exports.Image = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  overflow: hidden;\n  cursor: -webkit-grab;\n  cursor: grab;\n  margin-bottom: 20px;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 50%;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 992px) {\n    width: 90px;\n    height: 90px;\n  }\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));
var ProfileContent = exports.ProfileContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  max-width: 500px;\n  width: 91%;\n"])));