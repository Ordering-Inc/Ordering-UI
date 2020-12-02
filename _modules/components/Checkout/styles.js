"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningText = exports.CartItemActions = exports.CartItemInfo = exports.CartItemLogo = exports.LogoWrapper = exports.CartItemWrapper = exports.CartItem = exports.CartsList = exports.NotFoundImage = exports.WarningMessage = exports.WrapperPlaceOrderButton = exports.CartContainer = exports.DriverTipContainer = exports.PaymentMethodContainer = exports.BusinessDetailsContainer = exports.UserDetailsContainer = exports.WrapperUserDetails = exports.WrappContainer = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 14px;\n\n  button {\n    cursor: pointer;\n    font-size: 14px;\n    &:disabled{\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n    @media (min-width: 361px) {\n      font-size: 16px;\n    }\n  }\n\n  span {\n    font-weight: bold;\n  }\n\n  @media (min-width: 577px) {\n    font-size: 16px;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n  h1,\n  p {\n    margin: 3px 10px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 16px;\n  }\n  p {\n    font-size: 12px;\n    opacity: 0.8;\n    color: ", ";\n    font-weight: bold;\n  }\n\n  @media (min-width: 768px) {\n    h1 {\n      font-size: 18px;\n    }\n\n    p {\n      font-size: 15px;\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 50px;\n  height: 50px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  min-height: 50px;\n  border-radius: 10px;\n\n  @media (min-width: 481px){\n    width: 100%;\n    height: 100%;\n    min-height: 75px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 50px;\n  height: 50px;\n  min-height: 50px;\n  max-width: 50px;\n\n  @media (min-width: 481px){\n    max-width: 75px;\n    max-height: 75px;\n    height: 75px;\n    width: 75px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 60%;\n  display: flex;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background: #F8F8F8 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  margin: 20px 0px;\n  padding: 10px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 150px;\n  max-height: 300px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px 10px;\n\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n\n  @media (min-width: 513px) {\n    button {\n      width: 70%;\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 20px 0px 0px;\n  h1 {\n    margin: 0px;\n    font-size: 24px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-size: 24px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 20px;\n  flex-wrap: wrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 513px) {\n    width: 80%;\n  }\n"]);

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

var WrapperUserDetails = _styledComponents.default.div(_templateObject3());

exports.WrapperUserDetails = WrapperUserDetails;

var UserDetailsContainer = _styledComponents.default.div(_templateObject4());

exports.UserDetailsContainer = UserDetailsContainer;
var BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject5());
exports.BusinessDetailsContainer = BusinessDetailsContainer;

var PaymentMethodContainer = _styledComponents.default.div(_templateObject6());

exports.PaymentMethodContainer = PaymentMethodContainer;
var DriverTipContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject7());
exports.DriverTipContainer = DriverTipContainer;
var CartContainer = (0, _styledComponents.default)(PaymentMethodContainer)(_templateObject8());
exports.CartContainer = CartContainer;

var WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject9());

exports.WrapperPlaceOrderButton = WrapperPlaceOrderButton;

var WarningMessage = _styledComponents.default.div(_templateObject10(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11());
});

exports.WarningMessage = WarningMessage;

var NotFoundImage = _styledComponents.default.div(_templateObject12());

exports.NotFoundImage = NotFoundImage;

var CartsList = _styledComponents.default.div(_templateObject13());

exports.CartsList = CartsList;

var CartItem = _styledComponents.default.div(_templateObject14());

exports.CartItem = CartItem;

var CartItemWrapper = _styledComponents.default.div(_templateObject15());

exports.CartItemWrapper = CartItemWrapper;

var LogoWrapper = _styledComponents.default.div(_templateObject16());

exports.LogoWrapper = LogoWrapper;

var CartItemLogoStyled = _styledComponents.default.div(_templateObject17());

var CartItemLogo = function CartItemLogo(props) {
  return /*#__PURE__*/_react.default.createElement(CartItemLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.CartItemLogo = CartItemLogo;

var CartItemInfo = _styledComponents.default.div(_templateObject18(), function (props) {
  return props.theme.colors.primary;
});

exports.CartItemInfo = CartItemInfo;

var CartItemActions = _styledComponents.default.div(_templateObject19());

exports.CartItemActions = CartItemActions;

var WarningText = _styledComponents.default.p(_templateObject20(), function (props) {
  return props.theme.colors.primary;
});

exports.WarningText = WarningText;