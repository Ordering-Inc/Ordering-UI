"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _ReviewOrder = require("../components/ReviewOrder");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var order = {
  id: 607,
  business_id: 21
};

var setIsReviewed = function setIsReviewed() {
  return console.log('toggle review fn');
};

describe('Mounting Order Reviews component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
      order: order,
      setIsReviewed: setIsReviewed
    })));
    cy.get(':nth-child(6) > .sc-AxhUy > :nth-child(1)').click();
    cy.get(':nth-child(7) > .sc-AxhUy > :nth-child(1)').click();
    cy.get(':nth-child(8) > .sc-AxhUy > :nth-child(1)').click();
    cy.get(':nth-child(9) > .sc-AxhUy > :nth-child(1)').click();
    cy.get('.sc-fznZeY').type('test');
    cy.get('button[type=submit]').click();
  });
});