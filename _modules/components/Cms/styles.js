"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonSide = exports.SkeletonInformation = exports.SkeletonContent = exports.SkeletonHeader = exports.SkeletonContainer = exports.CmsContainer = exports.CmsError = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  height: 100%;\n  margin-left: 10px\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-right: 10px\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 500px;\n  display: flex;\n  margin-bottom: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100px;\n  margin: 20px auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  h2{\n    color: #D81212\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CmsError = _styledComponents.default.div(_templateObject());

exports.CmsError = CmsError;

var CmsContainer = _styledComponents.default.div(_templateObject2());

exports.CmsContainer = CmsContainer;

var SkeletonContainer = _styledComponents.default.div(_templateObject3());

exports.SkeletonContainer = SkeletonContainer;

var SkeletonHeader = _styledComponents.default.div(_templateObject4());

exports.SkeletonHeader = SkeletonHeader;

var SkeletonContent = _styledComponents.default.div(_templateObject5());

exports.SkeletonContent = SkeletonContent;

var SkeletonInformation = _styledComponents.default.div(_templateObject6());

exports.SkeletonInformation = SkeletonInformation;

var SkeletonSide = _styledComponents.default.div(_templateObject7());

exports.SkeletonSide = SkeletonSide;