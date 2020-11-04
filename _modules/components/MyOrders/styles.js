"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonReorder = exports.SkeletonInformation = exports.SkeletonOrdersPast = exports.SkeletonText = exports.SkeletonPastContent = exports.SkeletonContent = exports.SkeletonMap = exports.SkeletonCard = exports.SkeletonOrder = exports.Reorder = exports.OrderPastContent = exports.IndividualOrderPast = exports.OrdersPast = exports.Price = exports.OpenOrder = exports.BusinessInformation = exports.PastLogo = exports.Logo = exports.Content = exports.Map = exports.Card = exports.ActiveOrders = exports.MyOrdersTitle = exports.ImageContainer = exports.MyOrdersContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  text-align: center;\n  align-items: center;\n  span:first-child span{\n    width: 80px;\n  }\n  span:last-child{\n    width: 150px;\n    height: 30px;\n  }\n  @media(max-width: 480px){\n    span:first-child span{\n      width: 40px;\n    }\n    span:last-child{\n      width: 75px;\n    }    \n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  > *{\n      margin: 5px;\n    }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  > *{\n    margin: 20px 0;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: left\n  ", "\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  > *{\n      margin: 5px;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n  span{\n    width: 400px;\n    height: 100px;\n  }\n  @media(max-width: 480px){\n    span{\n      width: 300px;\n    }\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px 5px 20px 5px;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: flex;\n  width: auto;\n  margin: 0 auto;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  button {\n    margin: 5px 0;\n    width: 60%\n  }\n  @media (max-width: 1024px){\n    button{\n      width: 80%;\n    }\n  }\n  @media (max-width: 768px){\n    margin-right: 25px;\n    button{\n      width: 90%;\n    }\n  }\n  @media (max-width: 578px){\n    button{\n      width: 100%;\n    }\n  }\n  @media (max-width: 480px){\n    width: 90px;\n    font-size: 0.8em;\n    button{\n      width: 90%;\n      font-size: 0.9em;\n    }\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  padding: 10px 0;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  height: 140px;\n  border-top: 1px solid #ccc;\n  @media(max-width: 768px){\n    height: 100px;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  flex-direction: column-reverse;\n  margin: 0 auto;\n  div:last-child{\n    border-top: none;\n  }\n  p{\n    margin-block-end: 0;\n    margin-block-start: 0;\n    color: #9A9A9A\n  }\n  @media(max-width: 768px){\n    width: 100%;\n    padding: 0 10px;\n  }\n  @media(max-width: 480px){\n    div{\n      border: none;\n    }\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  text-align: end;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  h5 {\n    margin-block-end: 1em;\n    margin-block-start: 0;\n  }\n  p {\n    margin-block-end: 0;\n    margin-block-start: 1em;\n    color: #ff9300;\n  }\n  @media (max-width: 640px){\n    p{\n      font-size: 0.8em;\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  height: 15%;\n  width: 95%;\n  margin: auto;\n  button {\n    width: 100%;\n    height: 100%;\n  }\n  @media(max-width: 480px){\n    button{\n      font-size: 0.8em;\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  padding-left: 10px;\n  ", "\n  h5 {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    color : #9A9A9A;\n    white-space: nowrap;\n  }\n  p[name='view_order'] {\n    color: #D81313;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  @media(max-width: 768px){\n    font-size: 0.9em;\n  } \n  @media(max-width: 480px){\n    h5 {\n    margin-block-end: 0;\n    margin-block-start: 0;\n    }\n    p{\n      font-size: 0.9em;\n    }\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 75px;\n  height: 80%;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 17px;\n    object-fit: contain;\n  }\n  @media (max-width: 480px){\n    width: 55px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 75px;\n  height: 75px;\n  img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n  }\n  @media (max-width: 480px){\n    width: 55px;\n    height: 55px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  border-radius: 16px;\n  padding: 10px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 40%;\n  img{\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    image-rendering: -webkit-optimize-contrast;\n    object-fit: cover;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  min-width: 400px;\n  width: 400px;\n  margin: 10px;\n  display: inline-block;\n  background: white;\n  height: 250px;\n  border-radius: 16px;\n  text-align: left;\n  ", "\n  @media(max-width: 480px){\n    min-width: 300px;\n    width: 300px;\n  }\n  @media(max-width: 360px){\n    min-width: 290px;\n    width: 290px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        margin-left: 15px;\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        margin-right: 15px;\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 0;\n    margin-right: 20px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: flex;\n  overflow-x: auto;\n  overflow-y: hidden;\n  width: auto;\n  > :first-child {\n    margin-left: 20px;\n    ", "\n  };\n  ::-webkit-scrollbar {\n    width: 6px;\n    height: 6px;\n}\n  @media(max-width: 768px){\n    > :first-child{\n      ", "\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  width: 80%;\n  @media(max-width: 768px){\n    padding: 0 15px;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 300px;\n  margin: 0 auto;\n  img{\n    width: 100%\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MyOrdersContainer = _styledComponents.default.div(_templateObject());

exports.MyOrdersContainer = MyOrdersContainer;

var ImageContainer = _styledComponents.default.div(_templateObject2());

exports.ImageContainer = ImageContainer;

var MyOrdersTitle = _styledComponents.default.div(_templateObject3());

exports.MyOrdersTitle = MyOrdersTitle;

var ActiveOrders = _styledComponents.default.div(_templateObject4(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5());
}, function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) ? (0, _styledComponents.css)(_templateObject6()) : (0, _styledComponents.css)(_templateObject7());
});

exports.ActiveOrders = ActiveOrders;

var Card = _styledComponents.default.div(_templateObject8(), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject9());
});

exports.Card = Card;

var Map = _styledComponents.default.div(_templateObject10());

exports.Map = Map;

var Content = _styledComponents.default.div(_templateObject11());

exports.Content = Content;

var Logo = _styledComponents.default.div(_templateObject12());

exports.Logo = Logo;

var PastLogo = _styledComponents.default.div(_templateObject13());

exports.PastLogo = PastLogo;

var BusinessInformation = _styledComponents.default.div(_templateObject14(), function (props) {
  var _props$theme4;

  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15());
});

exports.BusinessInformation = BusinessInformation;

var OpenOrder = _styledComponents.default.div(_templateObject16());

exports.OpenOrder = OpenOrder;

var Price = _styledComponents.default.div(_templateObject17());

exports.Price = Price;

var OrdersPast = _styledComponents.default.div(_templateObject18());

exports.OrdersPast = OrdersPast;

var IndividualOrderPast = _styledComponents.default.div(_templateObject19());

exports.IndividualOrderPast = IndividualOrderPast;

var OrderPastContent = _styledComponents.default.div(_templateObject20());

exports.OrderPastContent = OrderPastContent;

var Reorder = _styledComponents.default.div(_templateObject21());

exports.Reorder = Reorder;

var SkeletonOrder = _styledComponents.default.div(_templateObject22());

exports.SkeletonOrder = SkeletonOrder;

var SkeletonCard = _styledComponents.default.div(_templateObject23());

exports.SkeletonCard = SkeletonCard;

var SkeletonMap = _styledComponents.default.div(_templateObject24());

exports.SkeletonMap = SkeletonMap;

var SkeletonContent = _styledComponents.default.div(_templateObject25());

exports.SkeletonContent = SkeletonContent;

var SkeletonPastContent = _styledComponents.default.div(_templateObject26());

exports.SkeletonPastContent = SkeletonPastContent;

var SkeletonText = _styledComponents.default.div(_templateObject27(), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject28());
});

exports.SkeletonText = SkeletonText;

var SkeletonOrdersPast = _styledComponents.default.div(_templateObject29());

exports.SkeletonOrdersPast = SkeletonOrdersPast;

var SkeletonInformation = _styledComponents.default.div(_templateObject30());

exports.SkeletonInformation = SkeletonInformation;

var SkeletonReorder = _styledComponents.default.div(_templateObject31());

exports.SkeletonReorder = SkeletonReorder;