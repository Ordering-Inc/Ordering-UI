"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalIcon = exports.BusinessMediaContent = exports.DeliveryInfo = exports.ScheduleBlock = exports.ScheduleContainer = exports.ScheduleSection = exports.Map = exports.SectionTitle = exports.FlexTabs = exports.BusinessContent = exports.Information = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessLogo = exports.WrapperBusinessLogo = exports.BusinessBasicContent = exports.HeaderImage = exports.BussinessTitle = exports.BusinessHeader = exports.BusinessInformationContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: white;\n  border-radius: 50%;\n  right: 5px;\n  top: 5px;\n  z-index: 1;\n  background: rgba(0,0,0,0.1);\n  ", "\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  > div {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    > img,\n    > iframe {\n      object-fit: cover;\n      border-radius: 10px;\n      margin: 10px 10px;\n      width: calc(25% - 20px);\n\n      @media (max-width: 992px) {\n        width: calc(33% - 20px);\n      }\n\n      @media (max-width: 680px) {\n        width: calc(50% - 20px);\n      }\n\n      @media (max-width: 480px) {\n        width: calc(100% - 12px);\n      }\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n  border-top: 1px solid #CCC;\n  border-bottom: 1px solid #CCC;\n\n  div {\n    width: 50%;\n  }\n\n  @media (max-width: 768px) {\n    flex-wrap: wrap;\n    div {\n      width: 100%;\n\n      &:last-child {\n        h5:not(:last-child) {\n          margin-top: 0px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    border-left: 1px solid #CCC;\n    border-right: none;\n  "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  padding: 0px 15px;\n  border-right: 1px solid #CCC;\n  width: 15%;\n  ", "\n  h4 {\n    margin: 0px 0px 3px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #D81212;\n  }\n  p {\n    margin: 0px;\n    font-size: 14px;\n  }\n\n  &:last-child {\n    border: 0;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    overflow: auto;\n    width: 100%;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 25px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 20vh;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-around;\n  height: 10%;\n  padding-top: 30px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 20px;\n  background: #FFF;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  > h5 {\n    margin-block-end: 0.8em;\n    margin-block-start: 0.8em;\n  }\n  > p {\n    margin-block-end: 0;\n    margin-block-start: 0.3em;\n    > svg {\n      vertical-align: middle;\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n          margin-left: 4px;\n          margin-right: 0px;\n        "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    padding: 0px 16px 0px 5px;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0px 5px 0px 16px;\n  ", "\n  div {\n    display: flex;\n    justify-content: space-between;\n    h5, \n    p {\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      text-transform: capitalize;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      svg {\n        margin-right: 4px;\n        ", "\n        &.start {\n          color: #FFC917;\n        }\n        &.popup {\n          color: ", ";\n          cursor: pointer;\n          transform: rotate(180deg);\n        }\n      }\n    }\n    p.bold {\n      font-weight: bold;\n    }\n    @media (max-width: 480px) {\n      font-size: 14px;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% - 75px);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  background-color: #FFF;\n  padding: 10px;\n  border-radius: 10px;\n  margin: 20px;\n  max-height: 75px;\n  width: 340px;\n  z-index: 1;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 20%;\n  margin-top: auto;\n  > img {\n    width: 100%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: inline-flex;\n  width: 50%;\n  background: #ffffff;\n  align-items: center;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border-radius: 16px;\n  padding: 10px;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 20%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  min-height: 200px;\n  justify-content: left;\n  align-items: flex-end;\n  position: relative;\n  background-color: #FFF;\n\n  img{\n    object-fit: cover;\n    position: absolute;\n    width: 100%;\n    height: calc(100% + 50px);\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessInformationContainer = _styledComponents.default.div(_templateObject());

exports.BusinessInformationContainer = BusinessInformationContainer;

var BusinessHeader = _styledComponents.default.div(_templateObject2());

exports.BusinessHeader = BusinessHeader;

var BussinessTitle = _styledComponents.default.div(_templateObject3(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4());
});

exports.BussinessTitle = BussinessTitle;

var HeaderImage = _styledComponents.default.div(_templateObject5());

exports.HeaderImage = HeaderImage;

var BusinessBasicContent = _styledComponents.default.div(_templateObject6());

exports.BusinessBasicContent = BusinessBasicContent;

var WrapperBusinessLogo = _styledComponents.default.div(_templateObject7());

exports.WrapperBusinessLogo = WrapperBusinessLogo;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject8());

var BusinessLogo = function BusinessLogo(props) {
  var style = {};

  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }

  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessInfo = _styledComponents.default.div(_templateObject9());

exports.BusinessInfo = BusinessInfo;

var BusinessInfoItem = _styledComponents.default.div(_templateObject10(), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject11());
}, function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12());
}, function (props) {
  return props.theme.colors.primary;
});

exports.BusinessInfoItem = BusinessInfoItem;

var Information = _styledComponents.default.div(_templateObject13());

exports.Information = Information;

var BusinessContent = _styledComponents.default.div(_templateObject14());

exports.BusinessContent = BusinessContent;

var FlexTabs = _styledComponents.default.div(_templateObject15());

exports.FlexTabs = FlexTabs;

var SectionTitle = _styledComponents.default.h3(_templateObject16());

exports.SectionTitle = SectionTitle;

var Map = _styledComponents.default.div(_templateObject17());

exports.Map = Map;

var ScheduleSection = _styledComponents.default.div(_templateObject18());

exports.ScheduleSection = ScheduleSection;

var ScheduleContainer = _styledComponents.default.div(_templateObject19());

exports.ScheduleContainer = ScheduleContainer;

var ScheduleBlock = _styledComponents.default.div(_templateObject20(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject21());
});

exports.ScheduleBlock = ScheduleBlock;

var DeliveryInfo = _styledComponents.default.div(_templateObject22());

exports.DeliveryInfo = DeliveryInfo;

var BusinessMediaContent = _styledComponents.default.div(_templateObject23());

exports.BusinessMediaContent = BusinessMediaContent;

var ModalIcon = _styledComponents.default.span(_templateObject24(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject25());
});

exports.ModalIcon = ModalIcon;