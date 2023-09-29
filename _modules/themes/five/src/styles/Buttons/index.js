"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IconButton = exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IconButton = exports.IconButton = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  border-radius: 6px;\n  height: 32px;\n  padding: 0 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all .2s ease-in;\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  > svg {\n    width: 20px;\n    height: 20px;\n    color: #B1BCCC;\n  }\n\n  &:hover {\n    background-color: #1507260a;\n\n    > svg {\n      color:  #151b26;\n    }\n  }\n\n  &:active {\n    background-color: #1507261a;\n  }\n\n  ", "\n\n  ", "\n  ", "\n"])), function (_ref) {
  var color = _ref.color;
  return color === 'black' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    > svg {\n      color: ", ";\n    }\n    &:hover {\n      background-color: ", ";\n    }\n    &:active {\n      background-color: ", ";\n    }\n\n    ", "\n  "])), function (props) {
    return props.theme.colors.headingColor;
  }, function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return props.theme.colors.secundaryDarkContrast;
  }, function (_ref2) {
    var active = _ref2.active;
    return active && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      background-color: ", ";\n    "])), function (props) {
      return props.theme.colors.secundaryDarkContrast;
    });
  });
}, function (_ref3) {
  var color = _ref3.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    > svg {\n      color: ", ";\n    }\n    &:hover {\n      background-color: #1507260a;\n      > svg {\n        color: ", ";\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref4) {
  var isDisabled = _ref4.isDisabled;
  return isDisabled && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    pointer-events: none;\n  "])));
});
var Button = exports.Button = _styledComponents.default.button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background: #E9ECEF;\n  color: #FFF;\n  border: 1px solid #E9ECEF;\n  border-radius: 7.6px;\n  line-height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 16px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  &:active {\n    background: ", ";\n  }\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref5) {
  var width = _ref5.width;
  return width && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: ", ";\n  "])), width);
}, function (_ref6) {
  var bgtransparent = _ref6.bgtransparent;
  return bgtransparent && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      background: transparent !important;\n      &:hover {\n        background: ", ";\n        color: ", " !important;\n      }\n  "])), (0, _polished.darken)(0.15, '#CCC'), function (props) {
    return (0, _polished.darken)(0.15, props.theme.colors.primary);
  });
}, function (_ref7) {
  var initialIcon = _ref7.initialIcon;
  return initialIcon && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    text-align: left;\n    ", "\n    img{\n      vertical-align: middle;\n    }\n    span {\n      padding-left: 15%\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
  }, function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0;\n    "])));
  });
}, function (_ref8) {
  var _theme$general, _theme$general2;
  var theme = _ref8.theme;
  return (theme === null || theme === void 0 || (_theme$general = theme.general) === null || _theme$general === void 0 || (_theme$general = _theme$general.components) === null || _theme$general === void 0 || (_theme$general = _theme$general.buttons) === null || _theme$general === void 0 ? void 0 : _theme$general.borderRadius) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      border-radius: ", ";\n  "])), theme === null || theme === void 0 || (_theme$general2 = theme.general) === null || _theme$general2 === void 0 || (_theme$general2 = _theme$general2.components) === null || _theme$general2 === void 0 || (_theme$general2 = _theme$general2.buttons) === null || _theme$general2 === void 0 ? void 0 : _theme$general2.borderRadius);
}, function (_ref9) {
  var _theme$general3, _theme$general4, _theme$general5, _theme$general6, _theme$general7, _theme$general8;
  var theme = _ref9.theme;
  return Object.values((theme === null || theme === void 0 || (_theme$general3 = theme.general) === null || _theme$general3 === void 0 || (_theme$general3 = _theme$general3.components) === null || _theme$general3 === void 0 || (_theme$general3 = _theme$general3.buttons) === null || _theme$general3 === void 0 || (_theme$general3 = _theme$general3.shadow) === null || _theme$general3 === void 0 ? void 0 : _theme$general3.components) || {}).some(function (val) {
    return !!val;
  }) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    box-shadow: \n      ", "\n      ", "\n      ", "\n      ", "\n      ", ";\n  "])), (theme === null || theme === void 0 || (_theme$general4 = theme.general) === null || _theme$general4 === void 0 || (_theme$general4 = _theme$general4.components) === null || _theme$general4 === void 0 || (_theme$general4 = _theme$general4.buttons) === null || _theme$general4 === void 0 || (_theme$general4 = _theme$general4.shadow) === null || _theme$general4 === void 0 || (_theme$general4 = _theme$general4.components) === null || _theme$general4 === void 0 ? void 0 : _theme$general4.x) || '0px', (theme === null || theme === void 0 || (_theme$general5 = theme.general) === null || _theme$general5 === void 0 || (_theme$general5 = _theme$general5.components) === null || _theme$general5 === void 0 || (_theme$general5 = _theme$general5.buttons) === null || _theme$general5 === void 0 || (_theme$general5 = _theme$general5.shadow) === null || _theme$general5 === void 0 || (_theme$general5 = _theme$general5.components) === null || _theme$general5 === void 0 ? void 0 : _theme$general5.y) || '0px', (theme === null || theme === void 0 || (_theme$general6 = theme.general) === null || _theme$general6 === void 0 || (_theme$general6 = _theme$general6.components) === null || _theme$general6 === void 0 || (_theme$general6 = _theme$general6.buttons) === null || _theme$general6 === void 0 || (_theme$general6 = _theme$general6.shadow) === null || _theme$general6 === void 0 || (_theme$general6 = _theme$general6.components) === null || _theme$general6 === void 0 ? void 0 : _theme$general6.blur) || '0px', (theme === null || theme === void 0 || (_theme$general7 = theme.general) === null || _theme$general7 === void 0 || (_theme$general7 = _theme$general7.components) === null || _theme$general7 === void 0 || (_theme$general7 = _theme$general7.buttons) === null || _theme$general7 === void 0 || (_theme$general7 = _theme$general7.shadow) === null || _theme$general7 === void 0 || (_theme$general7 = _theme$general7.components) === null || _theme$general7 === void 0 ? void 0 : _theme$general7.spread) || '0px', (theme === null || theme === void 0 || (_theme$general8 = theme.general) === null || _theme$general8 === void 0 || (_theme$general8 = _theme$general8.components) === null || _theme$general8 === void 0 || (_theme$general8 = _theme$general8.buttons) === null || _theme$general8 === void 0 || (_theme$general8 = _theme$general8.shadow) === null || _theme$general8 === void 0 || (_theme$general8 = _theme$general8.components) === null || _theme$general8 === void 0 ? void 0 : _theme$general8.color) || '#000');
}, function (_ref10) {
  var _theme$general9, _theme$general10;
  var theme = _ref10.theme;
  return (theme === null || theme === void 0 || (_theme$general9 = theme.general) === null || _theme$general9 === void 0 || (_theme$general9 = _theme$general9.components) === null || _theme$general9 === void 0 || (_theme$general9 = _theme$general9.buttons) === null || _theme$general9 === void 0 ? void 0 : _theme$general9.color) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    background: ", " !important;\n    &:active {\n      background: ", " !important;\n    }\n    &:hover {\n      background: ", " !important;\n    }\n  "])), theme === null || theme === void 0 || (_theme$general10 = theme.general) === null || _theme$general10 === void 0 || (_theme$general10 = _theme$general10.components) === null || _theme$general10 === void 0 || (_theme$general10 = _theme$general10.buttons) === null || _theme$general10 === void 0 ? void 0 : _theme$general10.color, function (_ref11) {
    var _theme$general11;
    var theme = _ref11.theme;
    return (0, _polished.darken)(0.07, theme === null || theme === void 0 || (_theme$general11 = theme.general) === null || _theme$general11 === void 0 || (_theme$general11 = _theme$general11.components) === null || _theme$general11 === void 0 || (_theme$general11 = _theme$general11.buttons) === null || _theme$general11 === void 0 ? void 0 : _theme$general11.color);
  }, function (_ref12) {
    var _theme$general12;
    var theme = _ref12.theme;
    return (0, _polished.darken)(0.07, theme === null || theme === void 0 || (_theme$general12 = theme.general) === null || _theme$general12 === void 0 || (_theme$general12 = _theme$general12.components) === null || _theme$general12 === void 0 || (_theme$general12 = _theme$general12.buttons) === null || _theme$general12 === void 0 ? void 0 : _theme$general12.color);
  });
}, function (_ref13) {
  var _theme$general13, _theme$general14;
  var theme = _ref13.theme;
  return (theme === null || theme === void 0 || (_theme$general13 = theme.general) === null || _theme$general13 === void 0 || (_theme$general13 = _theme$general13.components) === null || _theme$general13 === void 0 || (_theme$general13 = _theme$general13.buttons) === null || _theme$general13 === void 0 ? void 0 : _theme$general13.buttonTextColor) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    color: ", " !important;\n    &:active {\n      color: ", " !important;\n    }\n    &:hover {\n      color: ", " !important;\n    }\n  "])), theme === null || theme === void 0 || (_theme$general14 = theme.general) === null || _theme$general14 === void 0 || (_theme$general14 = _theme$general14.components) === null || _theme$general14 === void 0 || (_theme$general14 = _theme$general14.buttons) === null || _theme$general14 === void 0 ? void 0 : _theme$general14.buttonTextColor, function (_ref14) {
    var _theme$general15;
    var theme = _ref14.theme;
    return (0, _polished.darken)(0.07, theme === null || theme === void 0 || (_theme$general15 = theme.general) === null || _theme$general15 === void 0 || (_theme$general15 = _theme$general15.components) === null || _theme$general15 === void 0 || (_theme$general15 = _theme$general15.buttons) === null || _theme$general15 === void 0 ? void 0 : _theme$general15.buttonTextColor);
  }, function (_ref15) {
    var _theme$general16;
    var theme = _ref15.theme;
    return (0, _polished.darken)(0.07, theme === null || theme === void 0 || (_theme$general16 = theme.general) === null || _theme$general16 === void 0 || (_theme$general16 = _theme$general16.components) === null || _theme$general16 === void 0 || (_theme$general16 = _theme$general16.buttons) === null || _theme$general16 === void 0 ? void 0 : _theme$general16.buttonTextColor);
  });
}, function (_ref16) {
  var outline = _ref16.outline;
  return outline && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref17) {
  var circle = _ref17.circle;
  return circle && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background: #CCC;\n    color: #FFF;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref18) {
  var circle = _ref18.circle,
    outline = _ref18.outline;
  return circle && outline && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref19) {
  var color = _ref19.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
  }, function (_ref20) {
    var outline = _ref20.outline;
    return outline && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
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
  }, function (_ref21) {
    var circle = _ref21.circle;
    return circle && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
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
  }, function (_ref22) {
    var circle = _ref22.circle,
      outline = _ref22.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    }, function (props) {
      return props.theme.colors.primary;
    });
  });
}, function (_ref23) {
  var color = _ref23.color;
  return color === 'primaryContrast' && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return (0, _polished.darken)(0.04, props.theme.colors.primaryContrast);
  }, function (props) {
    return (0, _polished.darken)(0.1, props.theme.colors.primaryContrast);
  }, function (_ref24) {
    var naked = _ref24.naked;
    return naked && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      background: transparent;\n      border-color: transparent;\n      &:active {\n        background: transparent;\n      }\n      &:hover {\n        background: transparent;\n      }\n    "])));
  });
}, function (_ref25) {
  var color = _ref25.color;
  return color === 'secundary' && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  }, function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.secundary);
  }, function (_ref26) {
    var outline = _ref26.outline;
    return outline && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
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
  }, function (_ref27) {
    var circle = _ref27.circle;
    return circle && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        color: ", ";\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
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
  }, function (_ref28) {
    var circle = _ref28.circle,
      outline = _ref28.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
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
}, function (_ref29) {
  var color = _ref29.color;
  return color === 'gray' && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.grayDividerColor;
  }, function (props) {
    return props.theme.colors.darkGray;
  }, function (props) {
    return props.theme.colors.grayDividerColor;
  }, function (props) {
    return (0, _polished.darken)(0.05, props.theme.colors.grayDividerColor);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.grayDividerColor);
  });
}, function (_ref30) {
  var color = _ref30.color;
  return color === 'lightGray' && (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n  "])), function (props) {
    return props.theme.colors.gray200;
  }, function (props) {
    return props.theme.colors.secondaryDark;
  }, function (props) {
    return props.theme.colors.gray200;
  }, function (props) {
    return (0, _polished.darken)(0.05, props.theme.colors.gray200);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.gray200);
  });
}, function (_ref31) {
  var color = _ref31.color;
  return color === 'red' && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    background: ", ";;\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.danger500;
  }, function (props) {
    return props.theme.colors.backgroundPage;
  }, function (props) {
    return props.theme.colors.danger500;
  }, function (props) {
    return (0, _polished.darken)(0.05, props.theme.colors.danger500);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.danger500);
  }, function (_ref32) {
    var outline = _ref32.outline;
    return outline && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.backgroundPage;
    }, function (props) {
      return props.theme.colors.danger500;
    }, function (props) {
      return props.theme.colors.danger500;
    }, function (props) {
      return props.theme.colors.backgroundPage;
    }, function (props) {
      return props.theme.colors.danger500;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.danger500);
    }, function (props) {
      return props.theme.colors.backgroundPage;
    });
  });
}, function (_ref33) {
  var color = _ref33.color;
  return color === 'black' && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    background: ", ";;\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.black;
  }, function (props) {
    return props.theme.colors.backgroundPage;
  }, function (props) {
    return props.theme.colors.black;
  }, function (props) {
    return (0, _polished.darken)(0.05, props.theme.colors.black);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.black);
  }, function (_ref34) {
    var outline = _ref34.outline;
    return outline && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
      return props.theme.colors.backgroundPage;
    }, function (props) {
      return props.theme.colors.black;
    }, function (props) {
      return props.theme.colors.black;
    }, function (props) {
      return props.theme.colors.backgroundPage;
    }, function (props) {
      return props.theme.colors.black;
    }, function (props) {
      return (0, _polished.darken)(0.07, props.theme.colors.black);
    }, function (props) {
      return props.theme.colors.backgroundPage;
    });
  });
});
var _default = exports.default = Button;