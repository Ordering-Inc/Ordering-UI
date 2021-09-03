"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = exports.Tabs = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;  \n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'primary' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var borderBottom = _ref2.borderBottom;
  return borderBottom && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-bottom: thin solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (_ref3) {
  var isVerticalList = _ref3.isVerticalList;
  return isVerticalList && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex-direction: column;\n    width: 100%;\n    padding: 0 15px;\n    box-sizing: border-box;\n    border-bottom: 2px solid ", ";\n    @media (min-width: 768px) {\n      justify-content: flex-start;\n      padding-right: 0;\n      padding-left: 10%;\n      ", "\n      border-bottom: none;\n    }\n    @media (min-width: 1024px) {\n      padding-right: 0;\n      padding-left: 15%;\n      ", "\n    }\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }, function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 10%;\n        padding-left: 0;\n      "])));
  }, function (props) {
    var _props$theme2;

    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0;\n      "])));
  });
});

exports.Tabs = Tabs;

var Tab = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  align-items: left;\n  ", "\n  ", "\n  &:first-child {\n    padding-left: 0;\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    align-items: right;\n "])));
}, function (_ref4) {
  var active = _ref4.active;
  return !active && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    color: #000000;\n  "])));
}, function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      padding-right: 0;\n      padding-left: 10px;\n    "])));
}, function (_ref5) {
  var borderBottom = _ref5.borderBottom;
  return borderBottom && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    ", "    \n  "])), function (_ref6) {
    var active = _ref6.active;
    return active && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.primary;
    });
  });
}, function (_ref7) {
  var isVerticalList = _ref7.isVerticalList;
  return isVerticalList && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    border-bottom: 1px dashed;\n    span {\n      display: block;\n      width: 95%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    &:first-child {\n      padding-left: 15px;\n      ", "\n    }\n    &:last-child {\n      border-bottom: none;\n      @media (min-width: 768px) {\n        border-bottom: 1px solid ", ";\n        ", "\n      }\n    }\n    svg {\n      display: none;\n    }\n    @media (min-width: 768px) {\n      border: 1px solid ", ";\n      border-top: none;\n      border-bottom: 1px solid ", ";\n      height: 39px;\n      box-sizing: border-box;\n      padding: 0 15px;\n      display: flex;\n      align-items: center;\n      svg {\n        display: inline-flex;\n        transform: scale(0.98);\n        position: absolute;\n        top: -1px;\n        right: -12px;\n        ", "\n      }\n      ", "\n    }\n\n    @media (min-width: 1440px) {\n      height: 50px;\n      span {\n        font-size: 1.1rem;\n      }\n      svg {\n        transform: scale(1.25);\n        top: 4px;\n        right: -12px;\n      }\n    }\n  "])), function (props) {
    var _props$theme5;

    return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n        padding-right: 15px;\n        padding-left: 0;\n      "])));
  }, function (props) {
    return props.theme.colors.borderColor;
  }, function (_ref8) {
    var active = _ref8.active;
    return active && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n          border-bottom: 1px solid ", ";\n        "])), function (props) {
      return props.theme.colors.primary;
    });
  }, function (props) {
    return props.theme.colors.borderColor;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    var _props$theme6;

    return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n          right: unset;\n          left: -12px;\n          transform: rotate(180deg);\n        "])));
  }, function (_ref9) {
    var active = _ref9.active;
    return active && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n        border-right: none;\n        ", "\n      "])), function (props) {
      var _props$theme7;

      return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n          border-right: 1px solid ", ";\n          border-left: none;\n        "])), function (props) {
        return props.theme.colors.borderColor;
      });
    });
  });
});

exports.Tab = Tab;