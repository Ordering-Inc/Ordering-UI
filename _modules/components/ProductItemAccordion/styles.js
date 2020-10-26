"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductQuantity = exports.ProductOptionsList = exports.ProductNotAvailable = exports.ProductSelect = exports.ProductPrice = exports.ProductPriceSection = exports.ProductActionsDelete = exports.ProductActionsEdit = exports.ProductActions = exports.ProductError = exports.ProductInfo = exports.ProductComment = exports.AccordionText = exports.AccordionContent = exports.ContentInfo = exports.ProductImage = exports.WrapperProductImage = exports.Accordion = exports.AccordionSection = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 5px;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  list-style-type: none;\n\n  .suboption {\n    margin-left: -25px;\n  }\n\n  p:nth-child(1) {\n    margin-bottom: 0;\n  }\n\n  p {\n    font-weight: 400;\n    margin: 0px;\n  }\n\n  li span {\n    font-weight: 300;\n  }\n\n  li.ingredient {\n    padding-left: 15px;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  color: #D81212;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  max-width: 60px;\n  height: 50px;\n  border: 0;\n  background-color: transparent;\n  font-size: 20px;\n  outline: none;\n  margin-right: 5px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n\n  p,\n  span {\n    font-size: 18px;\n  }\n\n  span {\n    font-weight: 500;\n  }\n\n  p {\n    margin: 0px 5px;\n  }\n\n  svg {\n    cursor: pointer;\n  }\n\n  @media (max-width: 512px) {\n    span,\n    p {\n      font-size: 14px;\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n\n  @media (max-width: 480px) {\n    width: 20%;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  svg {\n    font-size: 20px;\n    margin-right: 5px;\n    cursor: pointer;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 35%;\n  display: flex;\n  flex-direction: column;\n\n  span {\n    font-size: 18px;\n    text-align: right;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 70%;\n\n  h1,\n  h3 {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p {\n    font-size: 20px;\n    margin: 0px 5px;\n  }\n\n  @media (max-width: 480px) {\n    width: 80%;\n  }\n\n  @media (max-width: 410px) {\n    width: 100%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 40px;\n\n  p {\n    font-weight: bold;\n    margin: 0px;\n  }\n\n  h3 {\n    font-weight: normal;\n    text-transform: capitalize;\n    margin: 0px 20px 0px 40px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 400;\n  font-size: 14px;\n  padding: 18px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  transition: max-height 0.6s ease;\n  width: 80%;\n  margin: auto;\n\n  @media (max-width: 480px) {\n    width: 100%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-transform: capitalize;\n  margin-left: 10px;\n  width: calc(65% - 60px);\n\n  h3 {\n    font-size: 18px;\n    margin: 0px;\n    font-weight: 600;\n  }\n\n  span {\n    display: flex;\n    justify-content: space-between;\n    margin: 0px;\n\n    p {\n      margin: 0px;\n      font-size: 14px;\n    }\n\n    div span {\n      height: 20px;\n      svg {\n        font-size: 20px;\n        &:nth-child(1) {\n          margin-right: 3px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  max-width: 75px;\n  max-height: 75px;\n  height: 75px;\n  width: 75px;\n\n  @media (max-width: 410px) {\n    max-width: 65px;\n    max-height: 65px;\n    height: 65px;\n    width: 65px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  transition: background-color 0.6s ease;\n  margin: 0px 10px;\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .accordion__icon {\n    margin-left: auto;\n    transition: transform 0.6s ease;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0px;\n  background: #FFF;\n  border-bottom: 1px solid #D9D9D9;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AccordionSection = _styledComponents.default.div(_templateObject());

exports.AccordionSection = AccordionSection;

var AccordionStyled = _styledComponents.default.div(_templateObject2());

var Accordion = function Accordion(props) {
  var style = {};

  if (!props.isValid) {
    style.opacity = '0.5';
  }

  return /*#__PURE__*/_react.default.createElement(AccordionStyled, _extends({}, props, {
    style: style
  }), props.children);
};

exports.Accordion = Accordion;

var WrapperProductImage = _styledComponents.default.div(_templateObject3());

exports.WrapperProductImage = WrapperProductImage;

var ProductImageStyled = _styledComponents.default.div(_templateObject4());

var ProductImage = function ProductImage(props) {
  return /*#__PURE__*/_react.default.createElement(ProductImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.ProductImage = ProductImage;

var ContentInfo = _styledComponents.default.div(_templateObject5());

exports.ContentInfo = ContentInfo;

var AccordionContent = _styledComponents.default.div(_templateObject6());

exports.AccordionContent = AccordionContent;

var AccordionText = _styledComponents.default.div(_templateObject7());

exports.AccordionText = AccordionText;

var ProductComment = _styledComponents.default.div(_templateObject8());

exports.ProductComment = ProductComment;

var ProductInfo = _styledComponents.default.div(_templateObject9());

exports.ProductInfo = ProductInfo;

var ProductError = _styledComponents.default.div(_templateObject10());

exports.ProductError = ProductError;

var ProductActions = _styledComponents.default.div(_templateObject11());

exports.ProductActions = ProductActions;

var ProductActionsEdit = _styledComponents.default.span(_templateObject12());

exports.ProductActionsEdit = ProductActionsEdit;
var ProductActionsDelete = (0, _styledComponents.default)(ProductActionsEdit)(_templateObject13());
exports.ProductActionsDelete = ProductActionsDelete;

var ProductPriceSection = _styledComponents.default.div(_templateObject14());

exports.ProductPriceSection = ProductPriceSection;

var ProductPrice = _styledComponents.default.div(_templateObject15());

exports.ProductPrice = ProductPrice;

var ProductSelect = _styledComponents.default.select(_templateObject16());

exports.ProductSelect = ProductSelect;

var ProductNotAvailable = _styledComponents.default.span(_templateObject17());

exports.ProductNotAvailable = ProductNotAvailable;

var ProductOptionsList = _styledComponents.default.ul(_templateObject18());

exports.ProductOptionsList = ProductOptionsList;

var ProductQuantity = _styledComponents.default.span(_templateObject19());

exports.ProductQuantity = ProductQuantity;