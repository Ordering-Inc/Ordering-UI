"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@cypress/react");

var _HorizontalOrdersLayout = require("../components/HorizontalOrdersLayout");

var _ProviderMock = _interopRequireDefault(require("../__mocks__/ProviderMock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOrderStatus = function getOrderStatus() {
  console.log('get order status fn');
};

var loadMoreOrders = function loadMoreOrders() {
  console.log('load more orders fn');
};

var onOrderClick = function onOrderClick() {
  console.log('on order click fn');
};

var pagination = {};
var orders = [{
  id: 1,
  total: 55
}, {
  id: 2,
  total: 55
}];
describe('Mounting Active orders component', function () {
  it('Component UI', function () {
    (0, _react2.mount)( /*#__PURE__*/_react.default.createElement(_ProviderMock.default, null, /*#__PURE__*/_react.default.createElement(_HorizontalOrdersLayout.HorizontalOrdersLayout, {
      orders: orders,
      pagination: pagination,
      onOrderClick: onOrderClick,
      activeOrders: true,
      loadMoreOrders: loadMoreOrders,
      getOrderStatus: getOrderStatus
    })));
    cy.get('#orders-container').find('div#order-card').should('have.length', orders.length);
    cy.get('button').contains('Open order').should('exist');
  });
});