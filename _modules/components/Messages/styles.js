"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSendMessageButton = exports.WrapperDeleteImage = exports.SendImage = exports.Send = exports.SendForm = exports.TimeofSent = exports.MyName = exports.PartnerName = exports.ChatImage = exports.SkeletonBubbleBusiness = exports.SkeletonBubbleCustomer = exports.BubbleCustomer = exports.BubbleBusines = exports.BubbleConsole = exports.MessageCustomer = exports.MessageBusiness = exports.MessageConsole = exports.Chat = exports.HeaderOnline = exports.Image = exports.Status = exports.HeaderName = exports.HeaderProfile = exports.MessagesContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  button{\n    padding-top: 5px;\n    padding-bottom: 5px;\n    svg {\n       margin-right: 10px;\n       width: 1.5em;\n       height: 1.5em; \n       vertical-align: middle;\n       color: white\n    }\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 10px;\n  margin-left: 10px;\n  button{\n    &:disabled {\n    cursor: not-allowed;\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  width: 25px;\n  height: 25px;\n  padding-left: 20px;\n  padding-right: 5px;\n  input {\n    display: none;\n  }\n  svg {\n    color: #CFD0D0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 3px;\n  height: auto;\n  > input {\n    flex: 1;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }      \n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px 20px;\n  background: #FAFAFA;\n  border-top: 1px solid #EEEEEE;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  text-align: right;\n  font-size: 0.8em;\n  margin-block-start: initial;\n  margin-block-end: initial;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    margin-block-start: 0;\n    margin-block-end: 0.2em;\n    font-size: 1.1em;\n    text-align: right;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  margin-block-start: 0;\n  margin-block-end: 0.2em;\n  font-size: 1.1em;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  img{\n    width: 100%;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  span{\n    border-radius: 97px 97px 97px 0px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  span{\n    border-radius: 97px 97px 0px 97px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 97px 97px 0px 97px;\n  padding: 10px 25px 15px 25px;\n  max-width: 40%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #D81212;\n  color: white;\n  overflow-wrap: break-word;\n  overflow: hidden;\n\n  &[name=image]{\n    border-radius: 60px 60px 0px 60px;\n    padding: 10px 30px 15px 30px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 97px 97px 97px 0px;\n  padding: 10px 25px 15px 25px;\n  max-width: 40%;\n  min-width: 80px;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  &[name=image]{\n    border-radius: 60px 60px 60px 0px;\n    padding: 10px 30px 15px 30px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 97px;\n  padding: 15px;\n  max-width: 30%;\n  margin-bottom: 10px;\n  background: #EFEFEF;\n  text-align: center;\n  height: auto;\n  overflow: hidden;\n  overflow-wrap: break-word;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  justify-content: center;\n  font-size: 0.8em;\n  border-radius: 97px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  overflow: auto;\n  height: 55vh;\n  flex-direction: column;\n  padding: 20px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  line-height: 1.5;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  text-align: left;\n  margin-left: 10px;\n\n  h1,\n  span {\n    margin: 0px;\n  }\n\n  h1 {\n    font-size: 20px;\n    font-weight: 500;\n  }\n\n  span {\n    font-size: 13px;\n    font-weight: 300;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ", ";\n  border-radius: 1000px;\n  padding: 5px;\n  box-sizing: border-box;\n\n  img {\n    width: 100%;\n    height: auto;\n    border-radius: 1000px;\n    object-fit: cover;\n    border: 1px solid #F5F5F5;\n  }\n\n  img[name]{\n    border: 1px solid #D81212;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid #CCC;\n    padding: 6px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-block-start: 0.1em;\n  margin-block-end: 0.1em;\n  font-size: 0.7em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.1em;\n  margin-block-end: 0.1em;\n  margin-block-start: 0.1em;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 15px 20px;\n  border-bottom: 1px solid #EEEEEE;\n\n  div {\n     p {\n       margin-left: 10px;\n      }\n     strong {\n      p{\n        margin-block-end: 0.1em;\n      }\n    }\n    p {\n      margin-block-start: 0.1em;\n      font-size: 0.7em\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessagesContainer = _styledComponents.default.div(_templateObject());

exports.MessagesContainer = MessagesContainer;

var HeaderProfile = _styledComponents.default.div(_templateObject2());

exports.HeaderProfile = HeaderProfile;

var HeaderName = _styledComponents.default.p(_templateObject3());

exports.HeaderName = HeaderName;

var Status = _styledComponents.default.p(_templateObject4());

exports.Status = Status;

var Image = _styledComponents.default.div(_templateObject5(), function (props) {
  var _props$theme, _props$theme$colors;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : (_props$theme$colors = _props$theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.primary;
});

exports.Image = Image;

var HeaderOnline = _styledComponents.default.div(_templateObject6());

exports.HeaderOnline = HeaderOnline;

var Chat = _styledComponents.default.div(_templateObject7());

exports.Chat = Chat;

var MessageConsole = _styledComponents.default.div(_templateObject8());

exports.MessageConsole = MessageConsole;

var MessageBusiness = _styledComponents.default.div(_templateObject9());

exports.MessageBusiness = MessageBusiness;

var MessageCustomer = _styledComponents.default.div(_templateObject10());

exports.MessageCustomer = MessageCustomer;

var BubbleConsole = _styledComponents.default.div(_templateObject11());

exports.BubbleConsole = BubbleConsole;

var BubbleBusines = _styledComponents.default.div(_templateObject12());

exports.BubbleBusines = BubbleBusines;

var BubbleCustomer = _styledComponents.default.div(_templateObject13());

exports.BubbleCustomer = BubbleCustomer;

var SkeletonBubbleCustomer = _styledComponents.default.div(_templateObject14());

exports.SkeletonBubbleCustomer = SkeletonBubbleCustomer;

var SkeletonBubbleBusiness = _styledComponents.default.div(_templateObject15());

exports.SkeletonBubbleBusiness = SkeletonBubbleBusiness;

var ChatImage = _styledComponents.default.div(_templateObject16());

exports.ChatImage = ChatImage;

var PartnerName = _styledComponents.default.p(_templateObject17());

exports.PartnerName = PartnerName;

var MyName = _styledComponents.default.p(_templateObject18());

exports.MyName = MyName;

var TimeofSent = _styledComponents.default.p(_templateObject19());

exports.TimeofSent = TimeofSent;

var SendForm = _styledComponents.default.div(_templateObject20());

exports.SendForm = SendForm;

var Send = _styledComponents.default.form(_templateObject21());

exports.Send = Send;

var SendImage = _styledComponents.default.label(_templateObject22());

exports.SendImage = SendImage;

var WrapperDeleteImage = _styledComponents.default.div(_templateObject23());

exports.WrapperDeleteImage = WrapperDeleteImage;

var WrapperSendMessageButton = _styledComponents.default.div(_templateObject24());

exports.WrapperSendMessageButton = WrapperSendMessageButton;