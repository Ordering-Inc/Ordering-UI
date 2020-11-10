"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadImageIcon = exports.SkeletonForm = exports.FormInput = exports.SavedPlaces = exports.UserData = exports.SideForm = exports.Camera = exports.SkeletonWrapper = exports.Image = exports.UserImage = exports.FlexTabs = exports.UserProfileContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  justify-content: center;\n  height: auto;\n  display: inline-flex;\n  flex-wrap: wrap;\n  padding: 0;\n  margin-top: 0px;\n  > * {\n    width: 80%;\n    margin: 10px 0;\n    display: inline;\n    height: 50px;\n    span{\n      border-radius: 16px;\n      width: 100%;\n      height: 100%;\n    }\n  }\n  @media (min-width: 768px){\n    justify-content: flex-start;\n    > * {\n      height: 20px;\n      width: 35%;\n      margin: 5px\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n      "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n      text-align: right;\n      margin-left: 0px;\n      margin-right: 50px;\n    "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  *{\n    margin-top: 20px;\n    ", "\n  }\n  input{\n    padding: 10px 15px;\n    width: 80%;\n  }\n  button {\n    box-sizing: initial;\n    margin-top: 30px;\n    padding-top: 7px;\n    padding-bottom: 7px;\n    width: 80%;\n  }\n\n  @media (min-width: 480px){\n    height: auto;\n    * {\n      width: 75%;\n    } \n  }\n\n  @media (min-width: 768px){\n    display: block;\n    height: 200px;\n    margin-top: 20px;\n    margin-left: 50px;\n    text-align: left;\n    ", "\n\n    * {\n        margin-top: 10px;\n        margin-right: 10px;\n        padding: 10px 15px;\n      ", "\n    }\n\n    input {\n      width: 38%;\n    }\n\n    button {\n      width: 38%;\n      padding: 7px 15px;\n      margin-top: 10px;\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  margin-top: 40px;\n  margin-bottom: 20px;\n\n  h1{\n    font-size: 18px\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    margin: 0 auto;\n    width: 80%;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 480px){\n    width: 70%;\n    text-align: left;\n    ", "\n\n    button {\n      align-self: flex-end;\n    }\n  }\n\n  @media (min-width: 768px){\n    button {\n      width: 65%;\n    }\n  }\n\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n     text-align: right;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  height: 200px;\n\n  h1 {\n    font-size: 20px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  > button {\n    width: 80px;\n    background: #F8F8F8;\n  }\n\n  @media (min-width: 480px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 50px;\n      margin-left: 0;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 0;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 0;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  /*width: 70%;*/\n  width: 100%;\n    > *{\n    margin: 0;\n    margin-top: 20px;\n    ", "\n  }\n  @media (min-width: 480px) {\n    width: 60%;\n    > *{\n    margin: 30px 0;\n    margin-left: 50px;\n    ", "\n  }\n  };\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width:212px; /**170px + 42px */\n  > * {\n    margin-top: 10px;\n    width: 30px;\n    height: 30px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 170px;\n  height: 170px;\n  border: 2px solid ", ";\n  border-radius: 100%;\n  overflow: hidden;\n  padding: 20px;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 50%;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  @media (min-width: 480px){\n    width: 150px;\n    height: 150px;\n  }\n\n  @media (min-width: 578px){\n    width: 170px;\n    height: 170px;\n  }\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  \n  @media (min-width: 480px) {\n    width: 40%;\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-end;\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  margin: 0 auto;\n  \n  div{\n      justify-content: space-evenly\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  overflow-x: hidden;\n\n  @media (min-width: 480px) {\n    align-items: flex-start;\n    flex-direction: row;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserProfileContainer = _styledComponents.default.div(_templateObject());

exports.UserProfileContainer = UserProfileContainer;

var FlexTabs = _styledComponents.default.div(_templateObject2());

exports.FlexTabs = FlexTabs;

var UserImage = _styledComponents.default.div(_templateObject3());

exports.UserImage = UserImage;

var Image = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isImage = _ref.isImage;
  return isImage ? '#FFF' : 'rgba(204, 204, 204, 0.2)';
});

exports.Image = Image;

var SkeletonWrapper = _styledComponents.default.div(_templateObject5());

exports.SkeletonWrapper = SkeletonWrapper;

var Camera = _styledComponents.default.div(_templateObject6());

exports.Camera = Camera;

var SideForm = _styledComponents.default.div(_templateObject7(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) ? (0, _styledComponents.css)(_templateObject8()) : (0, _styledComponents.css)(_templateObject9());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject10());
});

exports.SideForm = SideForm;

var UserData = _styledComponents.default.div(_templateObject11(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject12());
});

exports.UserData = UserData;

var SavedPlaces = _styledComponents.default.div(_templateObject13(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject14());
});

exports.SavedPlaces = SavedPlaces;

var FormInput = _styledComponents.default.form(_templateObject15(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) ? (0, _styledComponents.css)(_templateObject16()) : (0, _styledComponents.css)(_templateObject17());
}, function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18());
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19());
});

exports.FormInput = FormInput;

var SkeletonForm = _styledComponents.default.div(_templateObject20());

exports.SkeletonForm = SkeletonForm;

var UploadImageIcon = _styledComponents.default.div(_templateObject21());

exports.UploadImageIcon = UploadImageIcon;