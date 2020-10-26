"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareButtons = exports.IconShare = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  visibility: ", ";\n  right: 0px;\n  top: 28px;\n  position: absolute !important;\n\n  @media (max-width: 1200px) {\n    left: -12px;\n    width: 40px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  font-size: 25px;\n  right: 14px;\n  top: -11px;\n  z-index: 9999995;\n  margin: 0 10px;\n\n  svg {\n    cursor: pointer;\n    color: #333;\n  }\n\n  @media (max-width: 1200px) {\n    position: sticky;\n    top: 0px;\n    left: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var IconShare = _styledComponents.default.div(_templateObject());

exports.IconShare = IconShare;

var ShareButtons = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var showShareButton = _ref.showShareButton;
  return showShareButton ? 'visible' : 'hidden';
});

exports.ShareButtons = ShareButtons;