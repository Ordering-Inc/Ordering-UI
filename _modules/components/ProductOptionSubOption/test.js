"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOptionSuboption = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Component to render product option suboption
 */
var ProductOptionSuboption = function ProductOptionSuboption(props) {
  var UIComponent = props.UIComponent,
      balance = props.balance,
      option = props.option,
      suboption = props.suboption,
      onChange = props.onChange,
      autoSelectOption = props.autoSelectOption;
  /**
   * Predefine default values for suboption state
   */

  var selected = props.state.selected || props.state.quantity > 0;
  var quantity = 0;

  if (selected && props.state.quantity && props.state.quantity > 0) {
    quantity = props.state.quantity;
  } else if (selected) {
    quantity = 1;
  }

  var position = props.state.position || 'whole';
  var price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price;
  /**
   * Set current state
   */

  var state = {
    id: suboption.id,
    name: suboption.name,
    price: price,
    selected: selected,
    quantity: quantity,
    position: position,
    total: price * quantity
  };
  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */

  var changeState = function changeState(newState) {
    onChange && onChange(newState, suboption, option);
  };
  /**
   * Select/unselect the suboption
   */


  var toggleSelect = function toggleSelect() {
    if (state.selected && option.limit_suboptions_by_max && balance === option.max) {
      return;
    }

    changeState(_objectSpread(_objectSpread({}, state), {}, {
      quantity: state.selected ? 0 : 1,
      selected: !state.selected
    }));
  };
  /**
   * Increment suboption quantity
   */


  var increment = function increment() {
    if (option.limit_suboptions_by_max && balance === option.max) {
      return;
    }

    if (!option.limit_suboptions_by_max && state.quantity === suboption.max) {
      return;
    }

    changeState(_objectSpread(_objectSpread({}, state), {}, {
      selected: state.quantity === 0 ? true : state.selected,
      quantity: state.quantity + 1,
      total: state.price * (state.quantity + 1)
    }));
  };
  /**
   * Decrement suboption quantity
   */


  var decrement = function decrement() {
    if (state.quantity === 0) {
      return;
    }

    changeState(_objectSpread(_objectSpread({}, state), {}, {
      selected: state.quantity === 1 ? false : state.selected,
      quantity: state.quantity - 1,
      total: state.price * (state.quantity - 1)
    }));
  };
  /**
   * Change position of the suboption
   * @param {string} position Position of the suboption
   */


  var changePosition = function changePosition(position) {
    var price = option.with_half_option && suboption.half_price && position !== 'whole' ? suboption.half_price : suboption.price;
    changeState(_objectSpread(_objectSpread({}, state), {}, {
      position: position,
      price: price,
      total: price * state.quantity
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    state: state,
    increment: increment,
    decrement: decrement,
    changePosition: changePosition,
    toggleSelect: toggleSelect
  })));
};

exports.ProductOptionSuboption = ProductOptionSuboption;
ProductOptionSuboption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Current quantity options or suboptions selected
   */
  balance: _propTypes.default.number.isRequired,

  /**
   * Option object to render UI
   */
  option: _propTypes.default.object.isRequired,

  /**
   * Suboption object to render UI
   */
  suboption: _propTypes.default.object.isRequired,

  /**
   * Current state
   */
  state: _propTypes.default.shape({
    selected: _propTypes.default.bool,
    quantity: _propTypes.default.number,
    position: _propTypes.default.string
  }).isRequired,

  /**
   * Function to get suboption changes
   */
  onChange: _propTypes.default.func
};
ProductOptionSuboption.defaultProps = {
  state: {},
  balance: 0
};