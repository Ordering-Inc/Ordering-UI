"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonBlockWrapp = exports.SkeletonBlock = exports.FootActions = exports.ReviewsAction = exports.OrderBill = exports.OrderProducts = exports.WrapperDriver = exports.OrderDriver = exports.InfoBlock = exports.PhotoBlock = exports.OrderCustomer = exports.SectionTitle = exports.StatusImage = exports.OrderStatus = exports.StatusBar = exports.OrderData = exports.OrderInfo = exports.ActionsBlock = exports.BusinessInfo = exports.BusinessLogo = exports.LogoWrapper = exports.BusinessWrapper = exports.OrderBusiness = exports.Content = exports.HeaderText = exports.HeaderLogo = exports.HeaderInfo = exports.Header = exports.WrapperContainer = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 20px;\n  line-height: 40px;\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: ", ";\n    cursor: pointer;\n    font-weight: bold;\n  }\n  svg {\n    margin-left: 5px;\n    transform: rotate(90deg)\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n\n  button {\n    width: 70%;\n    padding: 5px 20px;\n    color: #FFF;\n    cursor: pointer;\n  }\n\n  @media (max-width: 512px) {\n    button {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  table {\n    width: 80%;\n    font-size: 18px;\n    tr td:nth-child(2) {\n      text-align: right;\n    }\n  }\n\n  table.total {\n    border-top: 1px solid #BFBFBF;\n    margin-top: 15px;\n    tr {\n      font-size: 20px;\n      td:nth-child(1) {\n        font-weight: bold;\n        padding-top: 10px;\n      }\n      td:nth-child(2) {\n        font-weight: bold;\n        color: ", ";\n        padding-top: 10px;\n      }\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin-right: 10px;\n    }\n  }\n\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  h1,\n  span {\n    margin: 0px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 20px;\n  }\n\n  span {\n    font-size: 18px;\n    opacity: 0.8;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 75px;\n  margin-right: 10px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 10px 0px 20px;\n  width: 100%;\n\n  div.photo {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    svg {\n      width: 70px;\n      height: 70px;\n      margin-right: 10px;\n    }\n  }\n\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px;\n  font-size: 26px;\n\n  @media (max-width: 410px) {\n    font-size: 24px;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  img {\n    display: flex;\n    width: 80px;\n    height: 80px;\n    box-sizing: border-box;\n    position: relative;\n    background-repeat: no-repeat, repeat;\n    background-size: contain;\n    object-fit: contain;\n    border-radius: 10px;\n    margin-top: 15px;\n  }\n\n  @media (max-width: 410px) {\n    img {\n      width: 70px;\n      height: 70px;\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  max-width: 15%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  span {\n    padding: 5px 10px;\n    border: 1px solid ", ";\n    color: ", ";\n    text-align: center;\n    border-radius: 10px;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  @media (max-width: 576px) {\n    width: 20%;\n    max-width: 20%;\n  }\n\n  @media (max-width: 410px) {\n    width: 25%;\n    max-width: 25%;\n\n    span {\n      font-size: 13px;\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  height: 7px;\n  margin: 10px 0px 0px;\n  background: ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  h1, p {\n    margin: 0px;\n  }\n  h1 {\n    margin-bottom: 5px;\n  }\n  p:nth-child(1) {\n    opacity: 0.8;\n  }\n  p.date {\n    font-weight: bold;\n  }\n\n  @media (max-width: 576px) {\n    width: 80%;\n  }\n\n  @media (max-width: 480px) {\n    width: 75%;\n  }\n\n  @media (max-width: 410px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin: 10px 0px 20px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  > * {\n    margin-right: 5px;\n  }\n  svg {\n    font-size: 24px;\n    cursor: pointer;\n  }\n\n  @media (max-width: 390px) {\n    flex-direction: column;\n\n    svg {\n      font-size: 20px;\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 75%;\n  h1,\n  p {\n    margin: 3px 15px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n  p {\n    font-size: 15px;\n    opacity: 0.8;\n  }\n\n  @media (max-width: 380px) {\n    width: 65%;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  background: #F8F8F8 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000029;\n  opacity: 1;\n  margin: 20px 0px;\n  padding: 10px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 80px;\n\n  @media (max-width: 768px) {\n    margin: 10px 0px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    justify-content: space-between;\n    align-items: center;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  text-align: center;\n  margin: 0px 20px;\n\n  ", ";\n  ", ";\n\n  h1 {\n    margin: 0px;\n    font-size: 24px;\n  }\n\n  @media (max-width: 576px) {\n    margin: 0px;\n\n    h1 {\n      font-size: 20px;\n    }\n    p {\n      font-size: 14px;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  min-height: 75px;\n  border-radius: 10px;\n\n  @media (max-width: 660px) {\n    min-height: 60px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding: 20px 20px 30px;\n  border-top-left-radius: 16px;\n  border-bottom-left-radius: 16px;\n\n  @media (max-width: 660px) {\n    width: 55%;\n  }\n\n  @media (max-width: 380px) {\n    width: 60%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  border-radius: 16px;\n  max-height: 350px;\n\n  @media (max-width: 768px) {\n    background-position: bottom;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 90%;\n  margin: auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 20px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

exports.Container = Container;

var WrapperContainer = _styledComponents.default.div(_templateObject2());

exports.WrapperContainer = WrapperContainer;

var HeaderStyled = _styledComponents.default.div(_templateObject3());

var Header = function Header(props) {
  var _theme$images, _theme$images$general;

  var theme = (0, _styledComponents.useTheme)();
  var style = {};
  style.backgroundImage = "url(".concat((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$general = _theme$images.general) === null || _theme$images$general === void 0 ? void 0 : _theme$images$general.orderDetailsHeader, ")");
  return /*#__PURE__*/_react.default.createElement(HeaderStyled, {
    style: style
  }, props.children);
};

exports.Header = Header;

var HeaderInfo = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.colors.primary;
});

exports.HeaderInfo = HeaderInfo;

var HeaderLogo = _styledComponents.default.div(_templateObject5(), function (_ref) {
  var bgimage = _ref.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject6(), bgimage);
});

exports.HeaderLogo = HeaderLogo;

var HeaderText = _styledComponents.default.div(_templateObject7(), function (props) {
  return props.theme.colors.primaryContrast;
}, function (_ref2) {
  var column = _ref2.column;
  return column && (0, _styledComponents.css)(_templateObject8());
}, function (_ref3) {
  var column = _ref3.column;
  return !column && (0, _styledComponents.css)(_templateObject9());
});

exports.HeaderText = HeaderText;

var Content = _styledComponents.default.div(_templateObject10());

exports.Content = Content;

var OrderBusiness = _styledComponents.default.div(_templateObject11());

exports.OrderBusiness = OrderBusiness;

var BusinessWrapper = _styledComponents.default.div(_templateObject12());

exports.BusinessWrapper = BusinessWrapper;

var LogoWrapper = _styledComponents.default.div(_templateObject13());

exports.LogoWrapper = LogoWrapper;

var BusinessLogoStyled = _styledComponents.default.div(_templateObject14());

var BusinessLogo = function BusinessLogo(props) {
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.BusinessLogo = BusinessLogo;

var BusinessInfo = _styledComponents.default.div(_templateObject15());

exports.BusinessInfo = BusinessInfo;

var ActionsBlock = _styledComponents.default.div(_templateObject16());

exports.ActionsBlock = ActionsBlock;

var OrderInfo = _styledComponents.default.div(_templateObject17());

exports.OrderInfo = OrderInfo;

var OrderData = _styledComponents.default.div(_templateObject18());

exports.OrderData = OrderData;

var StatusBarStyled = _styledComponents.default.div(_templateObject19(), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
});

var StatusBar = function StatusBar(props) {
  return /*#__PURE__*/_react.default.createElement(StatusBarStyled, props, props.children);
};

exports.StatusBar = StatusBar;

var OrderStatus = _styledComponents.default.div(_templateObject20(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.OrderStatus = OrderStatus;

var StatusImage = _styledComponents.default.div(_templateObject21());

exports.StatusImage = StatusImage;

var SectionTitle = _styledComponents.default.h1(_templateObject22());

exports.SectionTitle = SectionTitle;

var OrderCustomer = _styledComponents.default.div(_templateObject23());

exports.OrderCustomer = OrderCustomer;

var PhotoBlock = _styledComponents.default.img(_templateObject24());

exports.PhotoBlock = PhotoBlock;

var InfoBlock = _styledComponents.default.div(_templateObject25());

exports.InfoBlock = InfoBlock;
var OrderDriver = (0, _styledComponents.default)(OrderCustomer)(_templateObject26());
exports.OrderDriver = OrderDriver;

var WrapperDriver = _styledComponents.default.div(_templateObject27());

exports.WrapperDriver = WrapperDriver;
var OrderProducts = (0, _styledComponents.default)(OrderCustomer)(_templateObject28());
exports.OrderProducts = OrderProducts;

var OrderBill = _styledComponents.default.div(_templateObject29(), function (props) {
  return props.theme.colors.primary;
});

exports.OrderBill = OrderBill;

var ReviewsAction = _styledComponents.default.div(_templateObject30());

exports.ReviewsAction = ReviewsAction;

var FootActions = _styledComponents.default.div(_templateObject31(), function (props) {
  return props.theme.colors.primary;
});

exports.FootActions = FootActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject32(), function (_ref4) {
  var width = _ref4.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var SkeletonBlockWrapp = _styledComponents.default.div(_templateObject33());

exports.SkeletonBlockWrapp = SkeletonBlockWrapp;