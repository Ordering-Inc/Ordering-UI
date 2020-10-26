"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartItemActions = exports.CartItemInfo = exports.CartItemLogo = exports.LogoWrapper = exports.CartItemWrapper = exports.CartItem = exports.CartsList = exports.NotFoundImage = exports.NotFound = exports.WarningMessage = exports.WrapperPlaceOrderButton = exports.CartContainer = exports.DriverTipContainer = exports.PaymentMethodContainer = exports.UserDetailsContainer = exports.WrappContainer = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  button {\n    cursor: pointer;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n    @media (max-width: 360px) {\n      font-size: 14px;\n    }\n  }\n\n  span {\n    font-weight: bold;\n  }\n\n  @media (max-width: 576px) {\n    font-size: 14px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 75%;\n  h1,\n  p {\n    margin: 3px 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 15px;\n    opacity: 0.8;\n    color: ", ";\n    font-weight: bold;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background: #F8F8F8 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  margin: 20px 0px;\n  padding: 10px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: auto;\n\n  @media (max-width: 380px) {\n    width: 90%;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  max-width: 300px;\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 50%;\n  height: 100vh;\n  margin: 10px auto;\n\n  h1 {\n    opacity: 0.5;\n    text-align: center;\n  }\n\n  @media (max-width: 576px) {\n    width: 80%;\n    h1 {\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    h1 {\n      font-size: 20px;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n\n  button {\n    width: 70%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (max-width: 512px) {\n    button {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-size: 24px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 0px;\n  flex-wrap: wrap;\n\n  div.user {\n    width: 50%;\n  }\n\n  div.business {\n    width: 50%;\n    h1 {\n      margin: 0px;\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 760px) {\n    div.user,\n    div.business {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: auto;\n\n  @media (max-width: 512px) {\n    width: 90%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var WrappContainer = _styledComponents.default.div(_templateObject2());

exports.WrappContainer = WrappContainer;

var UserDetailsContainer = _styledComponents.default.div(_templateObject3());

exports.UserDetailsContainer = UserDetailsContainer;

var PaymentMethodContainer = _styledComponents.default.div(_templateObject4());

exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject5());
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject6());
exports.CartContainer = CartContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject7());

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject8());

exports.WarningMessage = WarningMessage;

var NotFound = _styledComponents.default.div(_templateObject9());

exports.NotFound = NotFound;

var NotFoundImage = _styledComponents.default.div(_templateObject10());

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject11());

exports.CartsList = CartsList;

var CartItem = _styledComponents.default.div(_templateObject12());

exports.CartItem = CartItem;

var CartItemWrapper = _styledComponents.default.div(_templateObject13());

exports.CartItemWrapper = CartItemWrapper;

var LogoWrapper = _styledComponents.default.div(_templateObject14());

exports.LogoWrapper = LogoWrapper;

var CartItemLogoStyled = _styledComponents.default.div(_templateObject15());

var CartItemLogo = function CartItemLogo(props) {
  return /*#__PURE__*/_react.default.createElement(CartItemLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.CartItemLogo = CartItemLogo;

var CartItemInfo = _styledComponents.default.div(_templateObject16(), function (props) {
  return props.theme.colors.primary;
});

exports.CartItemInfo = CartItemInfo;

var CartItemActions = _styledComponents.default.div(_templateObject17());

exports.CartItemActions = CartItemActions;