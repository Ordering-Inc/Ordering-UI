"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonContainer = exports.CloseUpselling = exports.Details = exports.Image = exports.Item = exports.UpsellingContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 15%;\n  margin: 20px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n  overflow: hidden;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  button{\n    width: 40%;\n  }\n  @media (max-width: 720px){\n    button{\n      width: 60%;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  div {\n    width: 100%;\n     h3 {\n      margin-block-start: 0.1em;\n      margin-block-end: 0.1em;\n      text-align: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      font-size: 14px;\n    }\n  }\n  p{\n    color: #D81313;\n    margin: 10px auto;\n  }\n  button {\n    width: 50%;\n    margin: 5px auto;\n    font-size: 0.9em;\n  }\n  @media (max-width: 980px){\n    button{\n      width: 70%\n    }\n  }\n\n  @media (max-width: 768px){\n    font-size: 12px;\n  }\n\n  @media (max-width: 480px){\n    div{\n      h3{\n        font-size: 12px;  \n      }\n    }\n    button {\n      width: 100%\n    }\n  }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  > img{\n    width: 100%;\n    border-radius: 16px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid #ccc;\n  width: 15%;\n  margin: 20px;\n  padding: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n  text-align: center;\n  border-radius: 9px;\n\n  @media (max-width: 768px){\n    width: 20%;\n  }\n\n  @media (max-width: 580px){\n    width: 25%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding-bottom: 20px;\n  button {\n    width: 45%;\n    margin-top: 20px;\n  }\n  @media (max-width: 768px){\n    justify-content: space-between;\n    min-height: calc(100vh - 160px)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var UpsellingContainer = _styledComponents.default.div(_templateObject2());

exports.UpsellingContainer = UpsellingContainer;

var Item = _styledComponents.default.div(_templateObject3());

exports.Item = Item;

var Image = _styledComponents.default.div(_templateObject4());

exports.Image = Image;

var Details = _styledComponents.default.div(_templateObject5());

exports.Details = Details;

var CloseUpselling = _styledComponents.default.div(_templateObject6());

exports.CloseUpselling = CloseUpselling;

var SkeletonContainer = _styledComponents.default.div(_templateObject7());

exports.SkeletonContainer = SkeletonContainer;