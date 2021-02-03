"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInformation = exports.ImageNotFound = exports.SkeletonReorder = exports.SkeletonInformation = exports.SkeletonButton = exports.SkeletonText = exports.SkeletonContent = exports.SkeletonMap = exports.SkeletonCard = exports.SkeletonOrder = exports.OrdersContainer = exports.OptionTitle = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n        font-size: 0.9em;\n      "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n      font-size: 0.8em;\n    "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n      width: 30%;\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  padding-left: 10px;\n  font-size: 0.9em;\n  ", "\n  ", "\n  h2 {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 14px;\n    margin-block-end: 0;\n    margin-block-start: 0;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    color : #9A9A9A;\n    white-space: nowrap;\n    font-size: 0.9em;\n    ", "\n  }\n\n  p[name='order_number']{\n    width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p[name='view_order'] {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n    width: fit-content;\n  }\n\n  @media (min-width: 480px){\n    h2 {\n    font-size: 14px;\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    }\n    p{\n      ", "\n    }\n    p[name='order_number']{\n      width: 230px;\n    }\n  }\n\n  @media (min-width: 768px){\n    font-size: 0.9em;\n    p {\n      font-size: 1em;\n    }\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  \n  margin: 0 auto;\n  img{\n    width: 100%\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 25px;\n    margin-right: 0;\n  "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  text-align: center;\n  align-items: center;\n  margin-right: 25px;\n\n  ", "\n\n  span:first-child span{\n    width: 40px;\n  }\n\n  span:last-child{\n    width: 75px;\n    height: 30px;\n  }\n\n  @media(min-width: 480px){\n    ", "\n    span:first-child span{\n      width: 80px;\n    }\n    span:last-child{\n      width: 150px;\n    }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  > *{\n    margin: 5px;\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    span{\n      border-radius: 24px;\n      width: 270px;\n      height: 36px;\n    }\n  @media(min-width: 480px){\n    span{\n      width: 360px;\n    }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n  "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n\n  ", "\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    > * {\n      margin: 5px;\n    }\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  ", "\n\n  ", "\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 16px;\n  span{\n    width: 300px;\n    height: 88px;\n  }\n  @media(min-width: 480px){\n    span{\n      height: 100px;\n      width: 400px;\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px 5px 10px 5px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    flex-direction: column;\n    margin: 10px 0;\n    > * {\n      margin: 20px 0;\n    }\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    width: auto;\n    text-align: center;\n    margin-left: 10px;\n\n    ", "\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", "\n\n  ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    width: 98%;\n    display: flex;\n    flex-direction: column-reverse;\n    margin: 0 auto;\n\n    p{\n      margin-block-end: 0;\n      margin-block-start: 0;\n      color: #9A9A9A\n    }\n\n    @media(min-width: 480px){\n      width: 80%;\n      padding: 0;\n      div:last-child {\n        border-top: none;\n      }\n    }\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n          margin-left: 0;\n          margin-right: -10px;\n        "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      > div:first-child{\n        margin-left: -10px;\n        ", "\n      }\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            margin-left: 0;\n            margin-right: -15px;\n          "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            margin-left: 0;\n            margin-right: -10px;\n          "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        > div {\n          margin-left: -10px;\n          ", "\n        }\n        > div:first-child{\n          margin-left: -15px;\n          ", "\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["   \n      ::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n      }\n      ", "\n     \n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      margin: auto auto auto 0px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 10px;\n    text-align: center;\n    display: flex;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: ", ";\n    width: 100%;\n    margin: auto 0px auto auto;\n    ", "\n    ::-webkit-scrollbar {\n      width: 0px;\n      height: 0px;\n    }\n\n    ", "\n    \n    @media (min-width: 768px) {\n      width: 90%;\n      justify-content: flex-start;\n      ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 15px;\n\n  h1{\n    text-transform: capitalize;\n    font-size: 18px;\n    margin: 18px 0;\n  }\n\n  @media (min-width: 768px){\n    padding: 0;\n    width: 80%\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionTitle = _styledComponents.default.div(_templateObject());

exports.OptionTitle = OptionTitle;

var OrdersContainer = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var activeOrders = _ref.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject3(), function (_ref2) {
    var ordersLength = _ref2.ordersLength;
    return !ordersLength ? 'flex-start' : 'center';
  }, function (props) {
    var _props$theme;

    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4());
  }, function (_ref3) {
    var isSkeleton = _ref3.isSkeleton;
    return !isSkeleton && (0, _styledComponents.css)(_templateObject5(), function (_ref4) {
      var ordersLength = _ref4.ordersLength;
      return !ordersLength && (0, _styledComponents.css)(_templateObject6(), function (props) {
        var _props$theme2;

        return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7());
      }, function (props) {
        var _props$theme3;

        return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8());
      });
    });
  }, function (_ref5) {
    var isSkeleton = _ref5.isSkeleton,
        ordersLength = _ref5.ordersLength;
    return !isSkeleton && !ordersLength && (0, _styledComponents.css)(_templateObject9(), function (props) {
      var _props$theme4;

      return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject10());
    });
  });
}, function (_ref6) {
  var activeOrders = _ref6.activeOrders;
  return !activeOrders && (0, _styledComponents.css)(_templateObject11());
});

exports.OrdersContainer = OrdersContainer;

var SkeletonOrder = _styledComponents.default.div(_templateObject12(), function (_ref7) {
  var activeOrders = _ref7.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject13(), function (props) {
    var _props$theme5;

    return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject14());
  });
}, function (_ref8) {
  var activeOrders = _ref8.activeOrders;
  return !activeOrders && (0, _styledComponents.css)(_templateObject15());
});

exports.SkeletonOrder = SkeletonOrder;

var SkeletonCard = _styledComponents.default.div(_templateObject16());

exports.SkeletonCard = SkeletonCard;

var SkeletonMap = _styledComponents.default.div(_templateObject17());

exports.SkeletonMap = SkeletonMap;

var SkeletonContent = _styledComponents.default.div(_templateObject18(), function (_ref9) {
  var activeOrders = _ref9.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject19());
}, function (_ref10) {
  var activeOrders = _ref10.activeOrders;
  return !activeOrders && (0, _styledComponents.css)(_templateObject20());
});

exports.SkeletonContent = SkeletonContent;

var SkeletonText = _styledComponents.default.div(_templateObject21(), function (props) {
  var _props$theme6;

  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject22());
});

exports.SkeletonText = SkeletonText;

var SkeletonButton = _styledComponents.default.div(_templateObject23());

exports.SkeletonButton = SkeletonButton;

var SkeletonInformation = _styledComponents.default.div(_templateObject24());

exports.SkeletonInformation = SkeletonInformation;

var SkeletonReorder = _styledComponents.default.div(_templateObject25(), function (props) {
  var _props$theme7;

  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject26());
}, function (props) {
  var _props$theme8;

  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject27()) : (0, _styledComponents.css)(_templateObject28());
});

exports.SkeletonReorder = SkeletonReorder;

var ImageNotFound = _styledComponents.default.div(_templateObject29());

exports.ImageNotFound = ImageNotFound;

var BusinessInformation = _styledComponents.default.div(_templateObject30(), function (_ref11) {
  var activeOrders = _ref11.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject31());
}, function (props) {
  var _props$theme9;

  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject32());
}, function (_ref12) {
  var activeOrders = _ref12.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject33());
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref13) {
  var activeOrders = _ref13.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject34());
});

exports.BusinessInformation = BusinessInformation;