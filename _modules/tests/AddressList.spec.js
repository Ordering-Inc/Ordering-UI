"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _AddressList = require("../components/AddressList");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Address List component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_AddressList.AddressList, {
      userId: 25,
      accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC1kZXYub3JkZXJpbmcuY29cL3Y0MDBcL2VuXC9sdWlzdjRcL2F1dGgiLCJpYXQiOjE2MTA2NjYxMTUsImV4cCI6MTY0MjIwMjExNSwibmJmIjoxNjEwNjY2MTE1LCJqdGkiOiJRcFlqaTRLMExWVmJnbjBFIiwic3ViIjoyNSwibGV2ZWwiOjN9.VEuyodluyOY6KrgfPUeXJzf5418kVPbcbN0z7pkwudE"
    })));
    cy.get('button').contains('Add Address').should('exist');
    cy.get('ul#list').should('be.visible');
    cy.log('Test functionality');
    cy.get('button').contains('Add Address').click();
    cy.get('div.popup-dialog').should('be.visible');
  });
});