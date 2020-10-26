"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopupIcon = exports.PopupContent = exports.PopupTitle = exports.PopupActions = exports.PopupDialog = exports.PopupWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  float: right;\n  font-size: 30px;\n  cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  letter-spacing: 0px;\n  color: #010300;\n  opacity: 1;\n  ul {\n    padding-left: 30px;\n    li {\n      margin-top: 7px;\n      margin-bottom: 7px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  letter-spacing: 0px;\n  color: #010300;\n  opacity: 1;\n  margin-top: 0px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 0px;\n  button {\n    width: 100%;\n    border-radius: 32px;\n    opacity: 1;\n    height: 45px;\n    &:nth-child(1) {\n      margin-right: 25px;\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  padding: 20px;\n  width: 70%;\n  border-radius: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1001;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// export const PopupBackDrop = styled.div`
//   background-color: rgba(0, 0, 0, 0.4);
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
// `
var PopupWrap = _styledComponents.default.div(_templateObject());

exports.PopupWrap = PopupWrap;

var PopupDialog = _styledComponents.default.div(_templateObject2());

exports.PopupDialog = PopupDialog;

var PopupActions = _styledComponents.default.div(_templateObject3());

exports.PopupActions = PopupActions;

var PopupTitle = _styledComponents.default.h2(_templateObject4());

exports.PopupTitle = PopupTitle;

var PopupContent = _styledComponents.default.div(_templateObject5());

exports.PopupContent = PopupContent;

var PopupIcon = _styledComponents.default.span(_templateObject6());

exports.PopupIcon = PopupIcon;