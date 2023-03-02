"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpreadSheetContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var SpreadSheetContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  overflow: auto;\n  > div {\n    min-width: 900px !important;\n  }\n\n  .ht_clone_top {\n    height: auto !important;\n  }\n  .wtHider {\n    width: 100% !important;\n    .wtSpreader {\n      width: 100% !important;\n    }\n  }\n\n  .ht_master .wtHolder {\n    @media (min-width: 768px) {\n      max-height: calc(100vh - 230px);\n    }\n  }\n\n  .wtHolder {\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  table {\n    min-width: 900px;\n\n    td {\n      padding: 15px;\n      text-align: left !important;\n      font-size: 13px;\n      color: ", " !important;\n      border: none !important;\n      border-bottom: 1px solid #E9ECEF !important;\n    }\n    th {\n      text-align: left;\n      background: ", ";\n      border: none !important;\n      border-bottom: 1px solid #B1BCCC !important;\n      > div {\n        padding: 15px !important;\n        font-size: 14px;\n        font-weight: bold;\n        color: ", " !important;\n      }\n    }\n  }\n\n  #hot-display-license-info {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme$colors;
  return ((_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage) || '#FFF';
}, function (props) {
  return props.theme.colors.headingColor;
});
exports.SpreadSheetContainer = SpreadSheetContainer;