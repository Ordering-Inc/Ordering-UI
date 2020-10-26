"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonReorder = exports.SkeletonOrdersPast = exports.SkeletonText = exports.SkeletonContent = exports.SkeletonMap = exports.SkeletonCard = exports.SkeletonOrder = exports.Reorder = exports.OrderPastContent = exports.IndividualOrderPast = exports.OrdersPast = exports.Price = exports.OpenOrder = exports.BusinessInformation = exports.Logo = exports.Content = exports.Map = exports.Card = exports.ActiveOrders = exports.MyOrdersTitle = exports.MyOrdersContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  text-align: center;\n  left: 60%;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  > *{\n    margin: 20px 0;\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: left\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    width: 100%;\n    > *{\n      margin: 5px;\n    }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  margin: 20px 10px 20px 10px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: flex;\n  width: auto;\n  margin: 0 auto;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  > p {\n    color: #53ad26;\n    margin-block-start: 0;\n    margin-block-end: 0;\n  }\n  > button {\n    margin: 5px 0;\n    width: 80%\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: 45%;\n  align-items: center;\n  padding: 10px 0;\n  img{\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  height: 140px;\n  justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n  \n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  div[name]{\n    height: 80%;\n  }\n  div:last-child{\n    border-bottom: none;\n  }\n  p{\n    margin-block-end: 0;\n    margin-block-start: 0;\n    color: #9A9A9A\n\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  > h5 {\n    margin-block-end: 1em;\n    margin-block-start: 0;\n  }\n  > p {\n    margin-block-end: 0;\n    margin-block-start: 1em;\n    color: #ff9300;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  height: 15%;\n  width: 95%;\n  margin: auto;\n  > a {\n    > button {\n    width: 100%;\n    height: 100%;\n  }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  padding: 0 10px;\n  width: 70%;\n  > h5 {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n  }\n  > p {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    color : #9A9A9A;\n  }\n  a{\n    text-decoration: none;\n  }\n  p[name]{\n    color: #D81313;\n    cursor: pointer;\n    text-decoration: none;\n  }\n  \n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 20%;\n  > img {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px;\n    object-fit: contain;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: 95%;\n  align-items: center;\n  border-radius: 16px;\n  padding: 10px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 40%;\n  img{\n    width: 100%;\n    height: 100%;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    image-rendering: -webkit-optimize-contrast;\n    object-fit: cover;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  min-width: 400px;\n  margin: 10px;\n  display: inline-block;\n  background: white;\n  height: 250px;\n  border-radius: 16px;\n  text-align: left;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  display: flex;\n  overflow: auto;\n  width: auto;\n  > :first-child {\n    margin-left: 30px;\n  };\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  width: 80%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #f8f8f8;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MyOrdersContainer = _styledComponents.default.div(_templateObject());

exports.MyOrdersContainer = MyOrdersContainer;

var MyOrdersTitle = _styledComponents.default.div(_templateObject2());

exports.MyOrdersTitle = MyOrdersTitle;

var ActiveOrders = _styledComponents.default.div(_templateObject3());

exports.ActiveOrders = ActiveOrders;

var Card = _styledComponents.default.div(_templateObject4());

exports.Card = Card;

var Map = _styledComponents.default.div(_templateObject5());

exports.Map = Map;

var Content = _styledComponents.default.div(_templateObject6());

exports.Content = Content;

var Logo = _styledComponents.default.div(_templateObject7());

exports.Logo = Logo;

var BusinessInformation = _styledComponents.default.div(_templateObject8());

exports.BusinessInformation = BusinessInformation;

var OpenOrder = _styledComponents.default.div(_templateObject9());

exports.OpenOrder = OpenOrder;

var Price = _styledComponents.default.div(_templateObject10());

exports.Price = Price;

var OrdersPast = _styledComponents.default.div(_templateObject11());

exports.OrdersPast = OrdersPast;

var IndividualOrderPast = _styledComponents.default.div(_templateObject12());

exports.IndividualOrderPast = IndividualOrderPast;

var OrderPastContent = _styledComponents.default.div(_templateObject13());

exports.OrderPastContent = OrderPastContent;

var Reorder = _styledComponents.default.div(_templateObject14());

exports.Reorder = Reorder;

var SkeletonOrder = _styledComponents.default.div(_templateObject15());

exports.SkeletonOrder = SkeletonOrder;

var SkeletonCard = _styledComponents.default.div(_templateObject16());

exports.SkeletonCard = SkeletonCard;

var SkeletonMap = _styledComponents.default.div(_templateObject17());

exports.SkeletonMap = SkeletonMap;

var SkeletonContent = _styledComponents.default.div(_templateObject18());

exports.SkeletonContent = SkeletonContent;

var SkeletonText = _styledComponents.default.div(_templateObject19());

exports.SkeletonText = SkeletonText;

var SkeletonOrdersPast = _styledComponents.default.div(_templateObject20());

exports.SkeletonOrdersPast = SkeletonOrdersPast;

var SkeletonReorder = _styledComponents.default.div(_templateObject21());

exports.SkeletonReorder = SkeletonReorder;