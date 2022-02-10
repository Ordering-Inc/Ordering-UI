"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.PaymentSquareContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 20px;\n  button{\n    width: 100%;\n    height: 40px\n  }\n"])));

exports.Container = Container;

var Spinner = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 50%;\n  right: 50%;\n  transform: translateY(75%);\n"])));

exports.Spinner = Spinner;

var PaymentSquareContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  min-height: 150px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])));

exports.PaymentSquareContainer = PaymentSquareContainer;