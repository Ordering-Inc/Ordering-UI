"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapItemView = exports.OrdersContent = exports.DeliveriesContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var DeliveriesContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  transition: all 0.5s;\n  padding: 20px;\n  box-sizing: border-box;\n  max-height: 100vh;\n  overflow: auto;\n\n  @media print {\n    display: none;\n  }\n"])));
exports.DeliveriesContainer = DeliveriesContainer;
var OrdersContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n"])));
exports.OrdersContent = OrdersContent;
var WrapItemView = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
exports.WrapItemView = WrapItemView;