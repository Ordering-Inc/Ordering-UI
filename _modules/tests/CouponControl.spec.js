"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@cypress/react");
var _CouponControl = require("../components/CouponControl");
var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('Mounting Coupon control component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_CouponControl.CouponControl, {
      businessId: 41
    })));
    cy.get('input').should('be.visible');
    cy.get('button').should('be.visible');
  });
});