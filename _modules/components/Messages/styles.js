"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.SendImage = exports.Send = exports.SendForm = exports.TimeofSent = exports.MyName = exports.PartnerName = exports.ChatImage = exports.SkeletonBubbleBusiness = exports.SkeletonBubbleCustomer = exports.BubbleCustomer = exports.BubbleBusines = exports.BubbleConsole = exports.MessageCustomer = exports.MessageBusiness = exports.MessageConsole = exports.Chat = exports.HeaderOnline = exports.Image = exports.Status = exports.HeaderName = exports.HeaderProfile = exports.MessagesContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0px;\n        transform: rotate(270deg)\n      "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n\n  button{\n    padding-top: 7px;\n    padding-bottom: 7px;\n    svg {\n       margin-right: 10px;\n       width: 1.5em;\n       height: 1.5em; \n       vertical-align: middle;\n       color: white;\n       ", "\n    }\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (max-width: 480px){\n    button{\n      svg {\n        margin: 0;\n      }\n      span {\n        display: none;\n      }\n    }\n  }\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px 17px;\n\n  button{\n    &:disabled {\n    cursor: not-allowed;\n    }\n  }\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  margin: 0px 20px;\n\n  input {\n    display: none;\n  }\n\n  svg {\n    color: #CFD0D0;\n    width: 25px;\n    height: 25px;\n    cursor: pointer\n  }\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n\n  input {\n    flex: 1;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n\n  @media (max-width: 640px){\n    input{\n      flex: initial;\n      width: 60%;\n    }\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  padding: 10px 20px;\n  background: #FAFAFA;\n  border-top: 1px solid #EEEEEE;\n\n  @media (max-width: 768px) {\n    padding: 0px 20px;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n  "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: 0.2em;\n  margin-block-end: initial;\n\n  ", "\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n      text-align: left;\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.6em;\n    font-size: 1.1em;\n    text-align: right;\n\n    ", "\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.6em;\n  font-size: 1.1em;\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  img{\n    width: 100%;\n    height: auto;\n    vertical-align: middle;\n    object-fit: contain;\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 97px 97px 0px 97px;\n    "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  span{\n    border-radius: 97px 97px 97px 0px;\n    ", "\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 97px 97px 97px 0px;\n    "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  span{\n    border-radius: 97px 97px 0px 97px;\n    ", "\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 40px 40px 40px 0px;\n    "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 97px 97px 97px 0px;\n\n    p:last-child {\n      left: initial;\n      right: 10px;\n    }\n\n    &[name=image]{\n      border-radius: 40px 40px 40px 0px;\n     }\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 97px 97px 0px 97px;\n  padding: 10px 25px 10px 25px;\n  max-width: 40%;\n  min-width: 80px;\n  height: auto;\n  margin-bottom: 10px;\n  background: #D81212;\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  p:last-child {\n    left: 10px;\n  }\n\n  &[name=image]{\n    border-radius: 40px 40px 0px 40px;\n    width: 100%;\n  }\n\n  ", "\n\n  @media (max-width: 1024px){\n    max-width: 60%\n  }\n\n  @media (max-width: 480px){\n    border-radius: 40px 40px 0px 40px;\n\n    ", "\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n      border-radius: 40px 40px 0px 40px;\n    "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 97px 97px 0px 97px;\n      &[name=image]{\n      border-radius: 40px 40px 0px 40px;\n     }\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 97px 97px 97px 0px;\n  padding: 10px 25px 10px 25px;\n  max-width: 40%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    border-radius: 40px 40px 40px 0px;\n    width: 100%;\n  }\n\n  ", "\n\n  @media (max-width: 1024px){\n    max-width: 60%;\n  }\n  @media (max-width: 480px){\n    border-radius: 40px 40px 40px 0px;\n\n    ", "\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  padding: 5px 15px;\n  max-width: 30%;\n  margin-bottom: 15px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  @media (max-width: 1024px){\n    max-width: 40%\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  border-radius: 97px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 55vh;\n  flex-direction: column;\n  padding: 0 20px;\n  > :first-child{\n    margin-top: 10px;\n  }\n  @media (max-width: 768px){\n    height: 70vh;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n    text-align: right;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  line-height: 1.5;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  margin-left: 10px;\n\n  ", "\n  h1,\n  span {\n    margin: 0px;\n  }\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 13px;\n    font-weight: 300;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  border-radius: 1000px;\n  padding: 5px;\n  box-sizing: border-box;\n\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 1000px;\n    object-fit: cover;\n    border: 1px solid #F5F5F5;\n  }\n\n  img[name]{\n    border: 1px solid #D81212;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    padding: 6px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n         margin-right: 10px;\n         margin-left: 0px;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 15px 20px;\n  border-bottom: 1px solid #EEEEEE;\n\n  div {\n     p {\n       margin-left: 10px;\n       ", "\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject());

exports.MessagesContainer = MessagesContainer;

var HeaderProfile = _styledComponents.default.div(_templateObject2(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject3());
});

exports.HeaderProfile = HeaderProfile;

var HeaderName = _styledComponents.default.p(_templateObject4());

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject5());

exports.Status = Status;

var Image = _styledComponents.default.div(_templateObject6(), function (props) {
  var _props$theme2, _props$theme2$colors;

  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : (_props$theme2$colors = _props$theme2.colors) === null || _props$theme2$colors === void 0 ? void 0 : _props$theme2$colors.primary;
});

exports.Image = Image;

var HeaderOnline = _styledComponents.default.div(_templateObject7(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8());
});

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject9());

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject10());

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject11());

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject12());

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject13());

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject14(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15());
}, function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject16());
});

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject17(), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18());
}, function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19());
});

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject20(), function (props) {
  var _props$theme8;

  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject21());
});

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject22(), function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject23());
});

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject24());

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject25());

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject26(), function (props) {
  var _props$theme10;

  return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject27());
});

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject28(), function (props) {
  var _props$theme11;

  return ((_props$theme11 = props.theme) === null || _props$theme11 === void 0 ? void 0 : _props$theme11.rtl) && (0, _styledComponents.css)(_templateObject29());
});

exports.TimeofSent = TimeofSent;

var SendForm = _styledComponents.default.div(_templateObject30());

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject31());

exports.Send = Send;

var SendImage = _styledComponents.default.label(_templateObject32());

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject33());

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject34(), function (props) {
  var _props$theme12;

  return ((_props$theme12 = props.theme) === null || _props$theme12 === void 0 ? void 0 : _props$theme12.rtl) && (0, _styledComponents.css)(_templateObject35());
});

exports.WrapperSendMessageButton = WrapperSendMessageButton;