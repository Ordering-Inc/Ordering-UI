"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Button = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #CCC;\n  color: #FFF;\n  border: 1px solid #CCC;\n  border-radius: 7.6px;\n  line-height: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 16px;\n  cursor: pointer;\n  outline: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  &:active {\n    background: ", ";\n  }\n  &:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (_ref) {
  var bgtransparent = _ref.bgtransparent;
  return bgtransparent && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      background: transparent !important;\n      &:hover {\n        background: ", ";\n        color: ", " !important;\n      }\n  "])), (0, _polished.darken)(0.15, '#CCC'), function (props) {
    return (0, _polished.darken)(0.15, props.theme.colors.primary);
  });
}, function (_ref2) {
  var initialIcon = _ref2.initialIcon;
  return initialIcon && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: left;\n    ", "\n    img{\n      vertical-align: middle;\n    }\n    span {\n      padding-left: 15%\n      ", "\n    }\n  "])), function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
  }, function (props) {
    var _props$theme2;
    return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        padding-right: 15%;\n        padding-left: 0;\n    "])));
  });
}, function (_ref3) {
  var _theme$general, _theme$general$compon, _theme$general$compon2, _theme$general2, _theme$general2$compo, _theme$general2$compo2;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$general = theme.general) === null || _theme$general === void 0 ? void 0 : (_theme$general$compon = _theme$general.components) === null || _theme$general$compon === void 0 ? void 0 : (_theme$general$compon2 = _theme$general$compon.buttons) === null || _theme$general$compon2 === void 0 ? void 0 : _theme$general$compon2.borderRadius) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-radius: ", ";\n  "])), theme === null || theme === void 0 ? void 0 : (_theme$general2 = theme.general) === null || _theme$general2 === void 0 ? void 0 : (_theme$general2$compo = _theme$general2.components) === null || _theme$general2$compo === void 0 ? void 0 : (_theme$general2$compo2 = _theme$general2$compo.buttons) === null || _theme$general2$compo2 === void 0 ? void 0 : _theme$general2$compo2.borderRadius);
}, function (_ref4) {
  var _theme$general3, _theme$general3$compo, _theme$general3$compo2, _theme$general3$compo3, _theme$general4, _theme$general4$compo, _theme$general4$compo2, _theme$general4$compo3, _theme$general4$compo4, _theme$general5, _theme$general5$compo, _theme$general5$compo2, _theme$general5$compo3, _theme$general5$compo4, _theme$general6, _theme$general6$compo, _theme$general6$compo2, _theme$general6$compo3, _theme$general6$compo4, _theme$general7, _theme$general7$compo, _theme$general7$compo2, _theme$general7$compo3, _theme$general7$compo4, _theme$general8, _theme$general8$compo, _theme$general8$compo2, _theme$general8$compo3, _theme$general8$compo4;
  var theme = _ref4.theme;
  return Object.values((theme === null || theme === void 0 ? void 0 : (_theme$general3 = theme.general) === null || _theme$general3 === void 0 ? void 0 : (_theme$general3$compo = _theme$general3.components) === null || _theme$general3$compo === void 0 ? void 0 : (_theme$general3$compo2 = _theme$general3$compo.buttons) === null || _theme$general3$compo2 === void 0 ? void 0 : (_theme$general3$compo3 = _theme$general3$compo2.shadow) === null || _theme$general3$compo3 === void 0 ? void 0 : _theme$general3$compo3.components) || {}).some(function (val) {
    return !!val;
  }) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    box-shadow: \n      ", "\n      ", "\n      ", "\n      ", "\n      ", ";\n  "])), (theme === null || theme === void 0 ? void 0 : (_theme$general4 = theme.general) === null || _theme$general4 === void 0 ? void 0 : (_theme$general4$compo = _theme$general4.components) === null || _theme$general4$compo === void 0 ? void 0 : (_theme$general4$compo2 = _theme$general4$compo.buttons) === null || _theme$general4$compo2 === void 0 ? void 0 : (_theme$general4$compo3 = _theme$general4$compo2.shadow) === null || _theme$general4$compo3 === void 0 ? void 0 : (_theme$general4$compo4 = _theme$general4$compo3.components) === null || _theme$general4$compo4 === void 0 ? void 0 : _theme$general4$compo4.x) || '0px', (theme === null || theme === void 0 ? void 0 : (_theme$general5 = theme.general) === null || _theme$general5 === void 0 ? void 0 : (_theme$general5$compo = _theme$general5.components) === null || _theme$general5$compo === void 0 ? void 0 : (_theme$general5$compo2 = _theme$general5$compo.buttons) === null || _theme$general5$compo2 === void 0 ? void 0 : (_theme$general5$compo3 = _theme$general5$compo2.shadow) === null || _theme$general5$compo3 === void 0 ? void 0 : (_theme$general5$compo4 = _theme$general5$compo3.components) === null || _theme$general5$compo4 === void 0 ? void 0 : _theme$general5$compo4.y) || '0px', (theme === null || theme === void 0 ? void 0 : (_theme$general6 = theme.general) === null || _theme$general6 === void 0 ? void 0 : (_theme$general6$compo = _theme$general6.components) === null || _theme$general6$compo === void 0 ? void 0 : (_theme$general6$compo2 = _theme$general6$compo.buttons) === null || _theme$general6$compo2 === void 0 ? void 0 : (_theme$general6$compo3 = _theme$general6$compo2.shadow) === null || _theme$general6$compo3 === void 0 ? void 0 : (_theme$general6$compo4 = _theme$general6$compo3.components) === null || _theme$general6$compo4 === void 0 ? void 0 : _theme$general6$compo4.blur) || '0px', (theme === null || theme === void 0 ? void 0 : (_theme$general7 = theme.general) === null || _theme$general7 === void 0 ? void 0 : (_theme$general7$compo = _theme$general7.components) === null || _theme$general7$compo === void 0 ? void 0 : (_theme$general7$compo2 = _theme$general7$compo.buttons) === null || _theme$general7$compo2 === void 0 ? void 0 : (_theme$general7$compo3 = _theme$general7$compo2.shadow) === null || _theme$general7$compo3 === void 0 ? void 0 : (_theme$general7$compo4 = _theme$general7$compo3.components) === null || _theme$general7$compo4 === void 0 ? void 0 : _theme$general7$compo4.spread) || '0px', (theme === null || theme === void 0 ? void 0 : (_theme$general8 = theme.general) === null || _theme$general8 === void 0 ? void 0 : (_theme$general8$compo = _theme$general8.components) === null || _theme$general8$compo === void 0 ? void 0 : (_theme$general8$compo2 = _theme$general8$compo.buttons) === null || _theme$general8$compo2 === void 0 ? void 0 : (_theme$general8$compo3 = _theme$general8$compo2.shadow) === null || _theme$general8$compo3 === void 0 ? void 0 : (_theme$general8$compo4 = _theme$general8$compo3.components) === null || _theme$general8$compo4 === void 0 ? void 0 : _theme$general8$compo4.color) || '#000');
}, function (_ref5) {
  var outline = _ref5.outline;
  return outline && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref6) {
  var circle = _ref6.circle;
  return circle && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background: #CCC;\n    color: #FFF;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref7) {
  var circle = _ref7.circle,
    outline = _ref7.outline;
  return circle && outline && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background: #FFF;\n    color: #CCC;\n    border-color: #CCC;\n    padding: 0;\n    width: 34px;\n    height: 34px;\n    line-height: 34px;\n    text-align: center;\n    border-radius: 50%;\n    &:active {\n      color: #FFF;\n      background: ", ";\n    }\n  "])), (0, _polished.darken)(0.07, '#CCC'));
}, function (_ref8) {
  var color = _ref8.color;
  return color === 'primary' && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n      color: #FFF;\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.primary);
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
  return color === 'primaryContrast' && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:hover {\n      background: ", ";\n    }\n    &:active {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primaryContrast;
  }, function (props) {
    return (0, _polished.darken)(0.04, props.theme.colors.primaryContrast);
  }, function (props) {
    return (0, _polished.darken)(0.1, props.theme.colors.primaryContrast);
  }, function (_ref13) {
    var naked = _ref13.naked;
    return naked && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      background: transparent;\n      border-color: transparent;\n      &:active {\n        background: transparent;\n      }\n      &:hover {\n        background: transparent;\n      }\n    "])));
  });
}, function (_ref14) {
  var color = _ref14.color;
  return color === 'secundary' && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    ", "\n    ", "\n    ", "\n  "])), function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return props.theme.colors.secundaryContrast;
  }, function (props) {
    return props.theme.colors.secundary;
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.secundary);
  }, function (_ref15) {
    var outline = _ref15.outline;
    return outline && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: #FFF;\n      }\n    "])), function (props) {
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
  }, function (_ref16) {
    var circle = _ref16.circle;
    return circle && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        color: ", ";\n        border-color: ", ";\n        background: ", ";\n      }\n    "])), function (props) {
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
  }, function (_ref17) {
    var circle = _ref17.circle,
      outline = _ref17.outline;
    return circle && outline && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      background: #FFF;\n      color: ", ";\n      border-color: ", ";\n      padding: 0;\n      width: 34px;\n      height: 34px;\n      line-height: 34px;\n      text-align: center;\n      border-radius: 50%;\n      &:active {\n        border-color: ", ";\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
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
}, function (_ref18) {
  var color = _ref18.color;
  return color === 'gray' && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n  "])), function (props) {
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
}, function (_ref19) {
  var color = _ref19.color;
  return color === 'lightGray' && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    background: ", ";\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n  "])), function (props) {
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
}, function (_ref20) {
  var color = _ref20.color;
  return color === 'red' && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    background: ", ";;\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.danger500;
  }, function (props) {
    return props.theme.colors.backgroundPage;
  }, function (props) {
    return props.theme.colors.danger500;
  }, function (props) {
    return (0, _polished.darken)(0.05, props.theme.colors.danger500);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.danger500);
  }, function (_ref21) {
    var outline = _ref21.outline;
    return outline && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
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
}, function (_ref22) {
  var color = _ref22.color;
  return color === 'black' && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n    background: ", ";;\n    color: ", ";\n    border-color: ", ";\n    &:active {\n      background: ", ";\n    }\n    &:hover {\n      background: ", ";\n    }\n    ", "\n  "])), function (props) {
    return props.theme.colors.black;
  }, function (props) {
    return props.theme.colors.backgroundPage;
  }, function (props) {
    return props.theme.colors.black;
  }, function (props) {
    return (0, _polished.darken)(0.05, props.theme.colors.black);
  }, function (props) {
    return (0, _polished.darken)(0.07, props.theme.colors.black);
  }, function (_ref23) {
    var outline = _ref23.outline;
    return outline && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      background: ", ";\n      color: ", ";\n      border-color: ", ";\n      &:active {\n        color: ", ";\n        background: ", ";\n      }\n      &:hover {\n        background: ", ";\n        color: ", ";\n      }\n    "])), function (props) {
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
exports.Button = Button;
var _default = Button;
exports.default = _default;