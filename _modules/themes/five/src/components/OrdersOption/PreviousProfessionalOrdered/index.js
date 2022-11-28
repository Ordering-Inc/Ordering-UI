"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreviousProfessionalOrdered = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _AutoScroll = require("../../AutoScroll");
var _SingleProfessionalCard = require("../../SingleProfessionalCard");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PreviousProfessionalOrdered = function PreviousProfessionalOrdered(props) {
  var professionals = props.professionals,
    handleUpdateProfessionals = props.handleUpdateProfessionals;
  return /*#__PURE__*/_react.default.createElement(_styles.ProductsListContainer, {
    isLoading: (professionals === null || professionals === void 0 ? void 0 : professionals.length) < 1
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductsList, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, null, professionals === null || professionals === void 0 ? void 0 : professionals.map(function (professional) {
    return /*#__PURE__*/_react.default.createElement(_SingleProfessionalCard.SingleProfessionalCard, {
      key: professional === null || professional === void 0 ? void 0 : professional.id,
      professional: professional,
      handleUpdateProfessionals: handleUpdateProfessionals
    });
  }))));
};
exports.PreviousProfessionalOrdered = PreviousProfessionalOrdered;