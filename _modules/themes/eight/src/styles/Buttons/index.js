"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = exports.Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #ACB2B6;\n  color: #FFF;\n  border: 1px solid #ACB2B6;\n  border-radius: 30px;\n  line-height: 30px;\n  padding: 6px 20px;\n  font-size: 16px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all .3s ease-in-out;\n  font-weight: 500;\n  &:active {\n    background: ", ";\n  }\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  &:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 2px 18px 0 rgb(0 0 0 / 20%);\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#ACB2B6');
}, function (_ref) {
  var bgtransparent = _ref.bgtransparent;
  return bgtransparent && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background: transparent !important;\n  "])));
}, function (_ref2) {
  var initialIcon = _ref2.initialIcon;
  return initialIcon && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: left;\n    ", "\n    img{\n      vertical-align: middle;\n    }\n    span {\n      padding-left: 15%\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
  }, function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0\n    "])));
  });
}, function (_ref3) {
  var outline = _ref3.outline;
  return outline && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref4) {
  var circle = _ref4.circle;
  return circle && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    background: #CCC;\n    color: #FFF;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref5) {
  var circle = _ref5.circle,
    outline = _ref5.outline;
  return circle && outline && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref6) {
  var color = _ref6.color;
  return color === 'primaryGradient' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background: linear-gradient(", ", ", ");\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: linear-gradient(", ", ", ")\n    }\n  "])), function (props) {
    return (0, _polished.lighten)(0.1, props.theme.colors.primary);
  }, function (props) {
    return (0, _polished.darken)(0.1, props.theme.colors.primary);
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.2, props.theme.colors.primary);
  });
}, function (_ref7) {
  var color = _ref7.color;
  return color === 'primaryContrast' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: transparent;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    &:active {\n      background: ", ";\n      border-color: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primaryContrast);
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref8) {
  var color = _ref8.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  }, function (_ref9) {
    var outline = _ref9.outline;
    return outline && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  }, function (_ref10) {
    var circle = _ref10.circle;
    return circle && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primaryContrast;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.primary);
    });
  }, function (_ref11) {
    var circle = _ref11.circle,
      outline = _ref11.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    });
  });
}, function (_ref12) {
  var color = _ref12.color;
  return color === 'secundary' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  }, function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.secundary);
  }, function (_ref13) {
    var outline = _ref13.outline;
    return outline && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    }, function (props) {
      return (0, _polished.darken)(0.05, props.theme.colors.secundary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.secundary);
    });
  }, function (_ref14) {
    var circle = _ref14.circle;
    return circle && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        color: ", ";\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.secundary);
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.secundary);
    });
  }, function (_ref15) {
    var circle = _ref15.circle,
      outline = _ref15.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundary;
    }, function (props) {
      return props.theme.colors.secundaryContrast;
    });
  });
});