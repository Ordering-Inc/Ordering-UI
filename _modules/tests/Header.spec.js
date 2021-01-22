"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _Header = require("../components/Header");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Mounting Header component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_Header.Header, {
      isHome: true
    })));
    cy.wait(4000);
    cy.get('[alt="Logotype"]').should('be.visible');
    cy.get('.sc-puFaA > #select-input > .sc-AxiKw').should('be.visible').click();
    cy.get('.sc-fznzqM').should('be.visible').click();
    cy.get('.sc-fzokOt').should('be.visible').click();
    cy.get('.gIyccs').should('be.visible');
    cy.get('.yRYjz').should('be.visible');
    cy.get('.sc-fzplWN > #select-input > .sc-AxiKw').should('be.visible').click();
  });
});