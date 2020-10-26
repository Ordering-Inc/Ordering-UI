"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockLoading = exports.ActionsModal = exports.CardItemActions = exports.CardItemContent = exports.CardItem = exports.WrapperItems = exports.WarningMessage = exports.OptionStripeContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 10px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 30px;\n  width: 100%;\n\n  button {\n    width: 48%;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    &:disabled {\n      opacity: 0.5;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 10%;\n  svg {\n    color: #D81212;\n    font-size: 24px;\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  cursor: pointer;\n  width: 90%;\n\n  .checks svg {\n    color: #D81212;\n    font-size: 22px;\n  }\n\n  .brand svg {\n    font-size: 26px;\n  }\n\n  > * {\n    margin-right: 10px\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  border-bottom: 1px solid #EAEAEA;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  button.addcard {\n    width: 60%;\n    margin-top: 20px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n\n    @media (max-width: 380px) {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #D81212;\n  font-size: 24px;\n  padding-left: 10px;\n  font-weight: bold;\n  opacity: 0.8;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OptionStripeContainer = _styledComponents.default.div(_templateObject());

exports.OptionStripeContainer = OptionStripeContainer;

var WarningMessage = _styledComponents.default.p(_templateObject2());

exports.WarningMessage = WarningMessage;

var WrapperItems = _styledComponents.default.div(_templateObject3());

exports.WrapperItems = WrapperItems;

var CardItem = _styledComponents.default.div(_templateObject4());

exports.CardItem = CardItem;

var CardItemContent = _styledComponents.default.div(_templateObject5());

exports.CardItemContent = CardItemContent;

var CardItemActions = _styledComponents.default.div(_templateObject6());

exports.CardItemActions = CardItemActions;

var ActionsModal = _styledComponents.default.div(_templateObject7());

exports.ActionsModal = ActionsModal;

var BlockLoading = _styledComponents.default.div(_templateObject8());

exports.BlockLoading = BlockLoading;