"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@cypress/react");
var _PageNotFound = require("../components/PageNotFound");
var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('Mounting Page not found component', function () {
  it('Component UI', function () {
    (0, _react2.mount)(/*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_PageNotFound.PageNotFound, null)));
    cy.get('h1').contains('PAGE NOT FOUND').should('be.visible');
  });
});